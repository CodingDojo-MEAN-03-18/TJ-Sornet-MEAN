// Express
const express = require('express');
const app = express();

// Path
const path = require('path');

// Static Directory
app.use(express.static(path.join(__dirname,'dist')));

// Body Parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


// Session
const session = require('express-session');
const sessionConfig = {
  saveUninitialized: true,
  secret: 'session-secret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};
app.use(session(sessionConfig));

// Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser('askdljfhaslkdjfhaksldjhfkla'));

// - - - - = = = = Model = = = = - - - -
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator(value) {
          return validator.isEmail(value);
        },
        message: "Email address must be valid"
      }
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt
    .hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(next);
});

userSchema.statics.validatePassword = function(
  candidatePassword,
  hashedPassword
) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

const User = mongoose.model('User', userSchema);

// - - - - = = = = Controller = = = = - - - -
const userController = {
  login(request, response) {
    console.log('login', request.body);

    User.findOne({ username: request.body.username })
      .then(user => {
        if (!user) {
          throw Error();
        }

        return User.validatePassword(request.body.password, user.password).then(
          () => {
            // login
            completeLogin(request, response, user);
          }
        );
      })
      .catch(() => {
        response
          // .render('/',{error: 'email/password combo not found'})
          .status(400)
          .json({ message: 'email/password combo not found' });
      });
  },
  register(request, response) {
    console.log('reg', request.body);

    User.create(request.body)
      .then(user => {
        // send confirmation email
        // login
        completeLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    console.log('logging out');

    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  }
};

function completeLogin(request, response, user) {
  console.log(user);
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}


// - - - - = = = = Routes = = = = - - - -
app
  .post('/login', userController.login)
  .post('/register', userController.register)
  .delete('/logout', userController.logout)
  .all("*", (req, res, next) => {
    res.sendFile(path.resolve("dist/index.html"))
  });

// - - - - = = = = Server Listener = = = = - - - -
const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));
