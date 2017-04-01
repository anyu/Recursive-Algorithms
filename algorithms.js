///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

// WORKING SOLUTION 1: Without recursion
var countVowels = function(str){

	// Create an array holding vowels
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	// Create a counter
	var numVowels = 0;

	// Loop through string, check if character in string is a vowel; if so, increment counter
	for (var i = 0; i < str.length; i++) {
		if (vowels.includes(str.charAt(i))) {
			numVowels++;
		}
	}
	return numVowels;

};

// WORKING SOLUTION 2: With recursion
var countVowels = function(str){

	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var numVowels = 0;

	if (vowels.includes(str.charAt(0))) {
		numVowels++;
	}

	 for (var i = 1; i < str.length; i++) {
	  numVowels = numVowels + countVowels(str.charAt(i)); // Need to sum existing numVowels with numVowels of next character
	 }
	return numVowels;
};

countVowels('abcedfg'); // should return 2
countVowels('whatsupdog maestro'); // should return 6

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

// WORKING SOLUTION 1: Without recursion
var sumDigits = function(n){
	var numString = n.toString(); // '126'
	var digits = [];
	var sum = 0;

	for (var i = 0; i < numString.length; i++) {
		digits.push(parseInt(numString.charAt(i))); // digits = [1,2,6]
	} 

	for (var j = 0; j < digits.length; j++) {
		sum = sum + digits[j];
	} 
	return sum;
};

// WORKING SOLUTION 2: With reduce instead of for loops

var sumDigits = function(n){
  var numStringArray = n.toString().split(''); // [ '1', '6', '9' ]
  
  var sum = numStringArray.reduce(function(acc, value) {
    return acc + parseInt(value);
  },0);

  return sum;
};


// WORKING SOLUTION 3: Recursion with inner function
var sumDigits = function(n) {
  
  var sum = 0;
  var numStringArray = n.toString().split(''); // [ '1', '2', '6' ]
  
  var traverse = function(array) {
    sum = sum + parseInt(array.shift());   // sum = 0+1; sum = 1+2; sum = 3+6
    if (array.length !== 0) {
      sum = traverse(array);
    }
    return sum;
  }
  
  traverse(numStringArray);
  return sum;
};

// WORKING SOLUTION 4: Recursion w/o inner function, using ARRAY methods
var sumDigits = function(n) {
  
  var sum = 0;
  
  // Split given number into an array of string digits, eg. 126 becomes ['1','2','6']
  var numStringArray = n.toString().split('');
 
  /* Convert first value in array back to number, add it to sum, eg. sum = sum + 1
   * Remove that number from the array, eg. ['2','6']
  */
  
  sum += parseInt(numStringArray.shift());   
  
  /* Check if there are still values within remaining array
   * Convert array of digits back into a string, convert that back into a number
   * Call sumDigits recursively on that converted number, add to sum
  */
  
  if (numStringArray.length !== 0) {
    sum += sumDigits(parseInt(numStringArray.join('')));
  }
  return sum;
};


// WORKING SOLUTION 5: Recursion w/o inner function, using STRING methods
var sumDigits = function(n) {
  
  var sum = 0;
  var numString = n.toString();
  sum += parseInt(numString[0]);   
  
  numString = numString.slice(1);
  if (numString.length > 0) {
    sum += sumDigits(parseInt(numString));
  }
  return sum;
};

// WORKING SOLUTION 6: Recursion w/o inner function, using pure MATH methods!!
var sumDigits = function(n) {
  
  var sum = 0;
  sum += n % 10;
  
  if (n > 0) {
    sum += sumDigits(Math.floor(n/10));
  }
  return sum;
};

sumDigits(126)// 9
sumDigits(49) // 13
sumDigits(12) // 3

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// isPowerOfTwo(8) -> true
// PowerOfTwo(9) -> false

// WORKING SOLUTION 1: Without recursion. Recursion really isn't needed here...
var isPowerOfTwo = function(n){
  if (n == 2) {
    return true;
  }
  if (n < 2) {
    return false;
  }
  
  return isPowerOfTwo(n/2); 
};

isPowerOfTwo(4); // true
isPowerOfTwo(9); // false
isPowerOfTwo(6); // false
isPowerOfTwo(64); // true
isPowerOfTwo(128); // true


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

// WORKING SOLUTION 1: With recursion
var invest = function(amount, interestRate, years){

  if (years === 0) {
    return amount;
  }

  var roi = amount + amount * interestRate;
  years--; 

  if (years > 0) {
    roi += invest(amount, interestRate, years); 
  }
  return roi; 
};

invest(1000, 0.10, 0); // 1000
invest(1000, 0.10, 1); // 1100
invest(1000, 0.10, 2); // 1210
invest(1000, 0.10, 3); // 1331

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// WORKING SOLUTION 1: Recursion unwinding
var printRangeUpDown = function(min, max){

  console.log(min); 

  if (min < max) {  
    printRangeUpDown(min+1, max); 
    console.log(min);    
  }
};

printRangeUpDown(4, 10); // 4,5,6,7,8,9,10,9,8,7,6,5,4

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

//return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var binaryTreeSum = function(tree){
  
  if (!tree.value) {
    return "Tree has no value";
  }
  var sum = tree.value;

  if (tree.left !== null) {
    sum += binaryTreeSum(tree.left);
  }

  if (tree.right !== null) {
    sum += binaryTreeSum(tree.right);
  }  
  
  return sum;
};

var root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.right.right = new BinaryTree(4);

console.log(BinaryTree(root)); // expect 10


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){




};













