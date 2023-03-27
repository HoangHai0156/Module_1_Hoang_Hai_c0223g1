class appleMold {
    constructor() {
        this.weight = 10;
        this.decrease = function(){
            this.weight--;
        };
        this.isEmpty = function(){
            if(this.weight > 0){
                return true;
            }else{
                return false;
            }
        };
        this.getWeight = function(){
            return this.weight;
        }
    }
}
class human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.isMale = function () {
            if (gender) {
                return true;
            } else {
                return false;
            }
        };
        this.setGender = function(gender){
            this.gender = gender;
        }
        this.checkApple = function(apple){
            if(apple.weight > 0){
                return true;
            }else{
                return false;
            }
        };
        this.eat = function(apple){
            if(apple.weight > 0){
                this.weight ++;
                apple.decrease();
            }
        }
        this.say = function(){
            return `Hi I'm ${this.name}!`
        };
        this.getName = function(){
            return this.name;
        };
        this.setName = function(name){
            this.name = name;
        };
        this.getWeight = function(){
            return this.weight;
        };
        this.setWeight = function(weight){
            this.weight = weight;
        };
    }
}
let Apple = new appleMold();
let Adam = new human("Adam",true,52);
let Eva = new human("Eva",false,45);
console.log(Adam.isMale());
Adam.eat(Apple);
console.log(Apple.getWeight());
Eva.eat(Apple);
console.log(Apple.getWeight());
console.log(Adam.checkApple(Apple));
Adam.eat(Apple);
console.log(Apple.getWeight());
Eva.eat(Apple);console.log(Adam.isMale());
Adam.eat(Apple);
console.log(Apple.getWeight());
Eva.eat(Apple);
Adam.eat(Apple);
console.log(Apple.getWeight());
Eva.eat(Apple);
Adam.eat(Apple);
console.log(Apple.getWeight());
Eva.eat(Apple);
console.log(Adam.checkApple(Apple));
console.log(Adam.say());
console.log(Eva.say());