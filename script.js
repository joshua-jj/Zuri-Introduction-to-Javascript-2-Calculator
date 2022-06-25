"use strict";

function addition() {
  alert("Enter two numbers \n");
  const n1 = Number(prompt("First number: \n"));
  const n2 = Number(prompt("Second number: \n"));
  const result = n1 + n2;
  alert(`${n1} + ${n2} = ${result}`);
}

function subtraction() {
  alert("Enter two numbers \n");
  const n1 = Number(prompt("First number: \n"));
  const n2 = Number(prompt("Second number: \n"));
  const result = n1 - n2;
  alert(`${n1} - ${n2} = ${result}`);
}

function multiplication() {
  alert("Enter two numbers \n");
  const n1 = Number(prompt("First number: \n"));
  const n2 = Number(prompt("Second number: \n"));
  const result = n1 * n2;
  alert(`${n1} x ${n2} = ${result}`);
}

function division() {
  alert("Enter two numbers \n");
  const n1 = Number(prompt("First number: \n"));
  const n2 = Number(prompt("Second number: \n"));
  const result = n1 / n2;
  alert(`${n1} / ${n2} = ${result}`);
}

const operation = Number(
  prompt(
    "1. Addition \n2. Subtraction \n3. Multiplication \n4. Division \nSelect one:"
  )
);
if (operation == 1) {
  addition();
} else if (operation == 2) {
  subtraction();
} else if (operation == 3) {
  multiplication();
} else if (operation == 4) {
  division();
} else {
  alert("Invalid number!");
}
