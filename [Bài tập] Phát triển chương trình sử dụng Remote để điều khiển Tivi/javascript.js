class remoteMold {
    constructor(model) {
        this.model = model;
        this.switchChannel = function (channel, tv) {
            if (tv.isOn) {
                tv.channel = channel;
            }
        }
        this.turnTv= function (tv) {
            if(tv.isOn){
                tv.isOn = false;
            }else{
                tv.isOn = true;
            }
        }
        this.reduceVolume = function(tv){
            if(tv.volume > 0){
                tv.volume--;
            }
        }
        this.increaseVolume = function(tv){
            if(tv.volume<100){
                tv.volume++;
            }
        }
    }
}
class tvMold {
    constructor(name) {
        this.name = name;
        this.volume = 12;
        this.channel = 5;
        this.isOn = false;
        this.switchChannel = function(channel){
            this.channel = channel;
        }
        this.reduceVolume = function(){
            if(this.volume > 0){
                this.volume--;
            }
        }
        this.increaseVolume = function(){
            if(this.volume<100){
                this.volume++;
            }
        }
        this.turnTv= function() {
            if(this.isOn){
                this.isOn = false;
            }else{
                this.isOn = true;
            }
        }
    }
}
let TV = new tvMold("Samsung");
let remote = new remoteMold("SS01");
TV.turnTv();
console.log(TV.isOn);
TV.switchChannel(7);
console.log(TV.channel);
remote.switchChannel(3,TV);
console.log(TV.channel);
TV.increaseVolume();
console.log(TV.volume);
remote.increaseVolume(TV);
console.log(TV.volume);
remote.turnTv(TV);
console.log(TV.isOn);