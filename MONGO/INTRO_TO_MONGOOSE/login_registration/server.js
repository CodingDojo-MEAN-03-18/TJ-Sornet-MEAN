const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: 'codingdojologinreg'}));

mongoose.connect('mongodb://localhost/loginregdb');
var UserSchema = new mongoose.Schema({
    first_name: { type: String, required: [true, "First Name required"]},
    last_name: { type: String, required: [true, "Last Name required"]},
    email: { 
        type: String, 
        required: [true, "Email address required"],
        unique: [true, "Email address already registered"],
        validate: {
            validator: function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            message: "Email address must be valid"
        }
    },
    password: { 
        type: String, 
        required: [true, "Password is required"], 
        minlength: [8, "Password must be between 8-16 characters"], 
        maxlength: 16,
        validate: {
            validator: function(value){
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    birthday: {
        type: Date,
        required: [true, "Birthday is required"]
    }

}, {timestamps: true});

UserSchema.pre('save', function(next){
    if(!this.isModified('password')){
        return next();
    }
    bcrypt.hash(this.password, 10)
    .then(hashed_password => {
        this.password = hashed_password;
        return next();
    })
    .catch(next);
})

UserSchema.statics.validatePassword = function(pwdFromForm, storedHashedPwd){
    return bcrypt.compare(pwdFromForm, storedHashedPwd);
}

var User = mongoose.model('User', UserSchema);


app.get('/', function(req, res){
    if(req.session.email === undefined){
        res.render('index');
    } else {
        res.redirect('/users');
    }
});

app.get('/users', function(req, res){
    User.find({email: req.session.email}, function(err, user){
        if(err){
            console.log('not able to start');
        } else {
            res.render('start', {user: user});
        }
    })
})

app.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
    .then( userInfo => {
        if(!userInfo){
            throw new Error();
        }
        return User.validatePassword(req.body.password, userInfo.password)
        .then( () => {
            req.session.email = req.body.email;
            res.redirect('/');
        })
    })
    .catch( error => {
        res.render('index', { error: "no user and password combo found"});
    })
})

app.post('/register', (req, res) => {
    if(req.body.password != req.body.password_confirm){
        console.log('passwords do not match')
        res.render('index', {newerror: "Passwords must match"});
    } else {
        User.create(req.body)
        .then(user => {
            console.log('got here');
            req.session.email = req.body.email;
            res.redirect('/'); 
        })
        .catch(error =>{
            console.log('got error')
            res.render('index', {errors: user.errors});
        })
    }
});

app.get('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function(){
    console.log('listening on port 8000');
});