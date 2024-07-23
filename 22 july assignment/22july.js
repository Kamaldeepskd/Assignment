//0.star pattern
for(var i = 1; i <= 5; i++) {

    for(var j = 1; j<= i; j++) {

      document.write("*");  

    }

    document.write("<br/>");
}
for (let i = 1; i <= 100; i++) {
    document.write(i + " ");
}

//1.Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    document.write(i + " ");
}


//2.Print even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        document.write(i + " ");
    }
}


//3.Print odd numbers from 1 to 100*:
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        document.write(i + " ");
    }
}


//4.Print numbers from 100 to 1
for (let i = 100; i >= 1; i--) {
    document.write(i + " ");
}


//5.Calculate the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
document.write(sum);


//6.Calculate the sum of even numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
document.write(sum);


//7.Calculate the sum of odd numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}
document.write(sum);


//8.Print multiplication table of a given number
let number = prompt("Enter a number: ");
for (let i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


//9.Find the factorial of a given number
let number = prompt("Enter a number: ");
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
document.write(factorial);


//10.Count the number of digits in a given number
let number = prompt("Enter a number: ");
let count = 0;
while (number != 0) {
    number = Math.floor(number / 10);
    count++;
}
document.write(count);


//11.Reverse a given number
let number = prompt("Enter a number: ");
let reverse = 0;
while (number != 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
}
document.write(reverse);


//12.Check if a given number is a palindrome
let number = prompt("Enter a number: ");
let originalNumber = number;
let reverse = 0;
while (number != 0) {
    reverse = reverse * 10 + (number % 10);
    number = Math.floor(number / 10);
}
if (originalNumber == reverse) {
    document.write(originalNumber + " is a palindrome");
} else {
    document.write(originalNumber + " is not a palindrome");
}


//13.Print the Fibonacci series up to a given number of terms
let n = prompt("Enter the number of terms: ");
let a = 0, b = 1, nextTerm;
document.write(a + " " + b + " ");
for (let i = 1; i <= n - 2; i++) {
    nextTerm = a + b;
    document.write(nextTerm + " ");
    a = b;
    b = nextTerm;
}


//14.Find the sum of digits of a given number
let number = prompt("Enter a number: ");
let sum = 0;
while (number != 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
document.write(sum);


//15.Find the product of digits of a given number
let number = prompt("Enter a number: ");
let product = 1;
while (number != 0) {
    product *= number % 10;
    number = Math.floor(number / 10);
}
document.write(product);


//16.Check if a given number is an Armstrong number
let number = prompt("Enter a number: ");
let sum = 0;
let temp = number;
while (temp != 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}
if (sum == number) {
    document.write(number + " is an Armstrong number");
} else {
    document.write(number + " is not an Armstrong number");
}


//17.Print all Armstrong numbers between 1 and 1000
for (let number = 1; number <= 1000; number++) {
    let sum = 0;
    let temp = number;
    while (temp != 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
    if (sum == number) {
        document.write(number + " ");
    }
}


//18.Check if a given number is a perfect number
let number = prompt("Enter a number: ");
let sum = 0;
for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i;
    }
}
if (sum === number) {
    document.write(number + " is a perfect number");
} else {
    document.write(number + " is not a perfect number");
}


//19.Print all perfect numbers between 1 and 1000
for (let number = 1; number <= 1000; number++) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number) {
        document.write(number + " ");
    }
}


//20.Check if a given number is a prime number
let number = prompt("Enter a number: ");
let isPrime = true;
if (number === 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    document.write(number + " is a prime number");
} else {
    document.write(number + " is not a prime number");
}


//21.Print all prime numbers between 1 and 100
for (let number = 2; number <= 100; number++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(number + " ");
    }
}


//22.Find the greatest common divisor (GCD) of two given numbers
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
document.write("GCD is " + a);


//23.Find the least common multiple (LCM) of two given numbers
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let gcd;
let tempA = a;
let tempB = b;
while (tempB !== 0) {
    let temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
}
gcd = tempA;
let lcm = (a * b) / gcd;
document.write("LCM is " + lcm);


//24.Calculate the power of a number using a loop
let base = prompt("Enter the base: ");
let exponent = prompt("Enter the exponent: ");
let result = 1;
for (let i = 1; i <= exponent; i++) {
    result *= base;
}
document.write(base + " to the power of " + exponent + " is " + result);


//25.Convert a binary number to decimal
let binary = prompt("Enter a binary number: ");
let decimal = 0;
let base = 1;
let temp = binary;
while (temp) {
    let lastDigit = temp % 10;
    temp = Math.floor(temp / 10);
    decimal += lastDigit * base;
    base *= 2;
}
document.write("Decimal number is " + decimal);
