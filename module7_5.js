let powerConsumption = 0;

class Device {
  constructor(){
     this.type = 'electric';
  }
  switch(status){
     if (status == 'on'){
        powerConsumption += this.power;
        console.log(`The power consumption of the ${this.name} is ${this.power} Wt`)
     }
     else if (status == 'off'){
        console.log (`The ${this.name} is switched off.`)
     }
  } 
}

class SmallDevice extends Device{
   constructor(name, power){
      super()
      this.name = name,
      this.power = power,
      this.type = "appliance"
   }
}
   
class Computer extends Device{
   constructor(name, power){
      super()
      this.name = name,
      this.power = power,
      this.type = "equipment"
   }
}

const lamp = new SmallDevice('table lamp', 100);
const laptop = new Computer('laptop', 300);
lamp.switch('off');
laptop.switch('on');