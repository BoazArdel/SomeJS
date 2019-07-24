class Person {
    constructor(name,age,pass) {
      this._name = name;
      this._age = age;
      this._pass = pass;
      this._height = NaN
    }
    get name() { 
        console.log("used getter")
        return this._name
    }
    set name(newName) { this._name=newName; }
    get Height() { return this._height  } 
    set Height(newHeight) { if (newHeight > 0){this._height = newHeight}}
    toString() { 
        return "Name:"+String(this._name)+"Age:"+String(this._age)+"Pass:"+String(this._pass)
    }
}

function clicked(){
    var name = document.getElementById("NameTxt").value
    var age = document.getElementById("AgeTxt").value
    var pass = document.getElementById("PassTxt").value
    var boaz = new Person(name,age,pass)
    //ObjectPrinter(boaz);
    alert(boaz);
}