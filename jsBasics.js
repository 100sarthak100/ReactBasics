"use strict";

console.log("global this", this);

function x() {
  console.log("x this", this);
}

x();

window.x();

const obj = {
  a: 10,
  func: function () {
    console.log("obj func", this); // current object
  },
};

obj.func();

const obj2 = {
  a: 10,
  func: () => {
    console.log("obj2 func", this); // window object
  },
};

obj2.func();

const student = {
  name: "abc",
  printName: function () {
    console.log("name", this.name);
  },
};

student.printName();

// call, apply, bind for function sharing

const student2 = {
  name: "def",
};

// now this points to student2 for the printName func
student.printName.call(student2);

const arrowObj = {
  a: 10,
  x: () => {
    console.log("arrowObj this", this);
  },
};

arrowObj.x();

const arrowObj2 = {
  a: 10,
  x: function () {
    const newX = () => {
      console.log("arrowObj newX this", this);
    };

    newX();
  },
};

arrowObj2.x();

let nums = [22, 33, 44, 55];

const numsObj = {
  aa: 100,
  y: function () {
    return nums.map((s) => {
      console.log("s", this);
    });
  },
  z: () => {
    return nums.map((s) => {
      console.log("s", this);
    });
  },
};

numsObj.y();
numsObj.z();
