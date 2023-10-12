// function sum () {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5))

// function sum (...nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5))



// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");

//   Function.prototype.myBind = function(obj, ...args) {
//     let func = this;
//     return function (...arguments2) {
//         func.apply(obj, [...args, ...arguments2]);
//     }
// }
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"

//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true

//   // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            for(let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        }
        else {return _curriedSum;}
    }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

/*
Write a method Function.prototype.curry(numArgs). This should return a function that will

Collect arguments until there are numArgs of them,
If there are too few arguments still, it should return itself.
When there are numArgs arguments, it should call the original function.
*/
Function.prototype.curry() = function(numArgs) {
    let args = [];
    if (args.length === numArgs) {
        let sum = curriedSum(args[0]);
        for(let i = 1; i < args.length; i++) {
            sum(args[i]);
        }
        return sum;
        // return curriedSum(numArgs);
    }
    else {
        return curry(numArgs-1);
    }
}


