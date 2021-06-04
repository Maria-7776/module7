function Device(){
   this.type = 'electric'
      
}

let powerConsumption = 0;

Device.prototype.switch = function(status){
   if (status == 'on'){
      powerConsumption += this.power;
      console.log(`The power consumption of the ${this.name} is ${this.power} Wt`)
   }
   else if (status == 'off'){
      console.log (`The ${this.name} is switched off.`)
   }
   return powerConsumption;
}

function SmallDevice(name, power){
   this.name = name,
   this.power = power,
   this.type = "appliance"
}

SmallDevice.prototype = new Device();

function Computer(name, power){
   this.name = name,
   this.power = power,
   this.type = "equiment"
}
Computer.prototype = new Device();

const lamp = new SmallDevice('table lamp', 100);
const laptop = new Computer('laptop', 300);
lamp.switch('off');
laptop.switch('on');
