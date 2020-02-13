// Challenge banner
function banner(n) {
	console.log("\n######### Challenge " + n + " #########");
}

banner(1);
function oneToFive() {
	let i = 0;
	while(i++ < 5) {
		console.log(i);
	}
}
oneToFive();

banner(2);
function oneToX(x) {
	let i = 0;
	while(i++ < x) {
		console.log(i);
	}
}
oneToX(6);

banner(3);
function XtoY(x, y) {
	while(x <= y) {
		console.log(x++);
	}
}
XtoY(2, 9);

banner(4);
function oneToNoddEven(n) {
	let i = 1;
	while(i <= n) {
		console.log(i + ' ' + ((i % 2 === 0) ? "Even" : "Odd"));
		i++;
	}
}
oneToNoddEven(5);

banner(5);
function oneToNeven(n) {
	let i = 1;
	while(i <= n) {
		if(i % 2 === 0) {
			console.log(i);
		}
		i++;
	}
}
oneToNeven(11);

banner(6);
function tenToOne() {
	let i = 10;
	while(i > 0) {
		console.log(i);
		i--;
	}
}
tenToOne();

banner(7);
function TenOneBlastoff() {
	tenToOne();
	console.log("Blast off!");
}
TenOneBlastoff();

banner(8);
function downBy3(n) {
	while(n > 1) {
		console.log(n);
		n -= 3;
	}
}
downBy3(20);

banner(9);
function sevenHellos() {
	let i = 1;
	while(i <= 7) {
		console.log(i + '. Hello!');
		i++;
	}
}
sevenHellos();

banner(10);
function sevenStrings(str) {
	let i = 1;
	while(i <= 7) {
		console.log(i + '. ' + str);
		i++;
	}
}
sevenStrings("None of us is safe, as long as Hamato Yoshi and his turtles roam the sewers!");

banner(11);
function repeatString(str, n) {
	let i = 0;
	while(i++ < n) {
		console.log(str);
	}
}
repeatString("Good-bye...", 4);

banner(12);
function stringCharified(str) {
	let i = 0;
	while(i < str.length) {
		console.log(str[i]);
		i++;
	}
}
stringCharified("think");

banner(13);
function stringSkipChar(str) {
	let i = 0;
	while(i < str.length) {
		if(i % 2 !== 0) {
			console.log(str[i]);
		}
		i++;
	}
}
stringSkipChar("Nobody");

banner(14);
function stringReverse(str) {
	let i = str.length - 1;
	let newStr = "";
	while(i >= 0) {
		newStr += str[i];
		i--;
	}
	console.log(newStr);
}
stringReverse("String.");

banner(15);
function fizzBuzz(n) {
	let i = 1;
	while(i <= n) {
		let str = "";
		if(i % 3 === 0) {
			str += "Fizz";
		}
		if(i % 5 === 0) {
			str += "Buzz";
		}
		console.log(str ? str : i);

		i++;
	}
}
fizzBuzz(15);

banner(16);
function fib(n) {
	let i = 1;
	let j = 1;

	console.log(i);
	console.log(i);

	while((i + j) <= n) {
		console.log(i + j);
		let last = i + j;
		i = j;
		j = last;
	}
}
fib(89);
