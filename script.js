// NUMBER 1

function convertFahrToCelsius(temp) {
  // Create Variable to Convert Fahrenheit to Celcius
  let convertTemp = (temp - 32) * (5 / 9);

  // LOGIC STATEMENTS

  // ONE
  if (Array.isArray(temp)) {
    return `[${temp}] is not a valid number but an array.`;

    // TWO
  } else if (typeof temp === "object" && temp !== null) {
    let str = JSON.stringify(temp);
    return `${str} is not a valid number but an ${typeof temp}.`;

    //   THREE
  } else if (isNaN(temp)) {
    return `"${temp}" is not a valid number but a ${typeof temp}.`;

    //   FINAL OUTPUT
  } else if (
    (typeof temp === "string" && temp !== "") ||
    typeof temp === "number"
  ) {
    return convertTemp.toFixed(4);
  }
}

// console.log(convertFahrToCelsius([1, 2, 3]));
// console.log(convertFahrToCelsius({ temp: 8 }));
// console.log(convertFahrToCelsius("JavaScript, why?"));
// console.log(convertFahrToCelsius("0"));
// console.log(convertFahrToCelsius(0));
// console.log(convertFahrToCelsius(""));

// NUMBER 2

function checkYuGiOh(n) {
  // Create a variable that sorts out 1 to n
  let arr = [Array(n + 1).keys()].slice(1);

  // If statement for invalid parameter
  if (isNaN(n) || n === null) {
    return `Invalid Parameter: ${n}`;
  }

  // Loop through n to arrive at the factors
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      arr.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      arr.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      arr.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("gi-oh");
    } else if (i % 2 === 0) {
      arr.push("yu");
    } else if (i % 3 === 0) {
      arr.push("gi");
    } else if (i % 5 === 0) {
      arr.push("oh");
    } else {
      arr.push("" + i);
    }
  }
  console.log(arr);
  return arr;
}

// console.log(`${checkYuGiOh(10)}`);
// console.log(`${checkYuGiOh(5)}`);
// console.log(`${checkYuGiOh("fizzbuzz is meh")}`);
