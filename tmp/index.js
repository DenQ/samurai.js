'use strict';

class MyClass{

    get Foo() {
        return 1;
    }

    Bar() {
        return 2;
    }

};

class YourClass extends MyClass{

}
var obj = new YourClass();
console.log(obj.Foo);
console.log(obj.Bar());