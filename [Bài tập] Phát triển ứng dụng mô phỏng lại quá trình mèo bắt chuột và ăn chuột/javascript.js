class ratMold {
    constructor(name) {
        this.weight = 2;
        this.name = name;
        this.speed = 15;
        this.isAlive = true;
        this.say = function () {
            return `chese, chese, chese!`;
        };
    }
}
class catMold {
    constructor(name) {
        this.name = name;
        this.weight = 10;
        this.Speed = 10;
        this.isGetRat = false;
        this.countRat = 0;
        this.say = function(){
            return `meow, meow, meow!`;
        }
        this.setSpeed = function(){
            this.Speed = Math.ceil(Math.random()*(20-10)+10);
            return this.Speed;
        }
        this.catchRat = function(rat){
            if(this.countRat < 1 ){
                if(this.Speed > rat.speed){
                    this.isGetRat = true;
                    this.countRat++;
                }else{
                    this.isGetRat = false;
                }
            }
            return this.isGetRat;
        }
        this.eatRat = function(rat){
            if(rat.isAlive == true && this.countRat>0){
                this.countRat--;
                this.weight += rat.weight;
                rat.isAlive = false;
            }
        }
    }
}
let Rat = new ratMold("Jerry");
let Cat = new catMold("Tom");
console.log(Cat.catchRat(Rat));
console.log(Cat.setSpeed());
console.log(Cat.catchRat(Rat));
console.log(Cat.eatRat(Rat));
console.log(Cat.weight);
