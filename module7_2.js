function func(obj, str){
   if (typeof str === 'string' && obj.hasOwnProperty(str)){
      return true
   } else {
      return false;
   }

}

const student = {
   name: "Petrov",
   age: 22,
   city: "Moscow"
}
console.log(func(student, 'name'));