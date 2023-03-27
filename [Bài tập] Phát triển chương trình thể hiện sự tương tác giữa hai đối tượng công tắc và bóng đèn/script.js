class electricLampMold {
    constructor() {
        this.status = true;
        this.turnOff = function () {
            this.status = false;
        };
        this.turnOn = function () {
            this.status = true;
        };
    }
}
class switchButtonMold {
    constructor() {
        this.status = true;
        this.connectToLamp = function (lamp) {
            this.lamp = lamp;
        };
        this.switchOff = function () {
            this.lamp.turnOff();
        };
        this.switchOn = function () {
            this.lamp.turnOn();
        };
    }
}
let electricLamp = new electricLampMold();
let switchButton = new switchButtonMold();
switchButton.connectToLamp(electricLamp);
for(var i = 0 ; i<20; i++){
    if(i%2 == 0){
        switchButton.switchOn();
        console.log(electricLamp.status);
    }else{
        switchButton.switchOff();
        console.log(electricLamp.status);
    }
}