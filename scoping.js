//Problem

const obj = {
    value: 10,
    method: function() {
        setTimeout(function(){
            console.log(this.value); // Output : undefined
        }, 1000);
    }
}
obj.method();


//Solution 1 using arrow functions

const obj2 = {
    value: 10,
    method: function() {
        setTimeout(() => {
            console.log(this.value); // Output : 10
        }, 1000);
    }
}
obj2.method();


//Solution 2 using variable
const obj3 = {
    value: 10,
    method: function() {
        var self = this
        setTimeout(function (){
            console.log(self.value); // Output : 10
        }, 1000);
    }
}
obj3.method();

//Solution 3 using bind
const obj4 = {
    value: 10,
    method: function() {
        setTimeout(function (){
            console.log(this.value); // Output : 10
        }.bind(this), 1000);
    }
}
obj4.method();


