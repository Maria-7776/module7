function func(obj){
   if (typeof obj === 'object'){
      for (let key in obj){
         if (obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
         }     
      }
   }
   else {
      console.log ("Не является объектом")
   }
}
obj1 = {name: "Petrov", age: 22}
func(obj1)