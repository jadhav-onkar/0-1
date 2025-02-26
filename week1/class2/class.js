class Animal{
    constructor(name,legs,speak){
        this.naav = name;
        this.paay = legs;
        this.bolana = speak;
    }
    speak(){
        console.log(this.bolana)
    }
    // static function only calls with class name
    static display(name,legs,speak){
        console.log(`name : ${name}  legs : ${legs}  speak : ${speak}`)
    }
}

let dog = new Animal("tommy",4,"Bow Bow");
Animal.display(dog.naav, dog.paay, dog.bolana);