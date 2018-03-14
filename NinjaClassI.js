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
}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake().showStats()
const ninja2 = new Ninja("Ducati");
ninja2.showStats();
