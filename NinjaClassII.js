function Ninja(name){
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health +  ", Speed: " + speed + ", Strength: " + strength)
    }

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }

    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!")
        } else {
            console.log("Error: argument is not an instance of Ninja")
        }
        
    }

    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            const hit = 15*strength
            ninja.health -= hit;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + hit + " Health!")
        } else {
            console.log("Error: argument is not an instance of Ninja")
        }
        
    }
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

redNinja.showStats();
blueNinja.showStats();

const redNinja3 = "hello"
blueNinja.kick(redNinja3);
// -> "Error: argument is not an instance of Ninja"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"

redNinja.showStats();
blueNinja.showStats();
