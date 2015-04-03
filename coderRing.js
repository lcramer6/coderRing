// If the string[i] had a vowel replace with the next vowel, 
//if it has a consonant replace with the next consonant

"use strict";

var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

var vowelTest = function(ltr) {
    for (var j = 0; j <= vowels.length - 1; j++) {
	if (ltr === vowels[j]) {
		    return true;
		}
	}
};

var coderRing = function(oldLtr, shft){
	
	var newLtr = "";
	
	if (vowelTest(oldLtr) === true) {
	    if ((vowels.indexOf(oldLtr) + shft) <= vowels.length - 1) {
		    newLtr = vowels[vowels.indexOf(oldLtr) + shft];
	    }
	    else {
			vowels = vowels.concat(vowels);
		    newLtr = vowels[vowels.indexOf(oldLtr) + shft];
	    }
	}
	
	else {
		newLtr = consonants[consonants.indexOf(oldLtr) + shft];
	}
	
	return newLtr;
};

var secretWord = function(msg, shft) {
	var newMsg = "";
	var oldMsg = msg.toLowerCase();
	for (var i = 0; i <= oldMsg.length - 1; i++) {
	        if (oldMsg.charAt(i) === " ") {
	            newMsg = newMsg + " ";
	        }
	        else {
    	        var change = oldMsg.charAt(i);
	            newMsg = newMsg + coderRing(change, shft);
	        }
	}
	return newMsg;
};

console.log(secretWord("Yes", 2));
console.log(secretWord("I am Kit", 1));