/*
console.log('hello')
let i;
var text = "start"
for (i = 0; i < 50; i++) { 
  text += 'lll' + "br>";
}
console.log(text)



var arr = [1,2,3]
typeof(arr)

function print(x)
{
  console.log(x)
}

arr.forEach(print)
typeof(print)
*/

function ObjectPrinter(obj){
  for ( let n in obj)
    if(typeof(obj[n])== 'object')
      ObjectPrinter(obj[n]);
  	else
    	console.log(n+":"+obj[n]);
}

var boaz = new Object();
boaz.name = "boaz";
boaz.age = 22;
boaz.address = {city:"Haifa",State:"israel"};
boaz.family = [{name:"bla",age:9},{name:"blabla",age:22}]
ObjectPrinter(boaz);

boaz.getName = function () {
  return this.name;
};

console.log(boaz.getName());

boaz.MobilePhone = function (model,number) {
  this.phone = {"model":model,"number":number};
};

boaz.MobilePhone("moto",134234);

ObjectPrinter(boaz);