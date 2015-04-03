// If the string[i] had a vowel replace with the next vowel, 
//if it has a consonant replace with the next consonant

"use strict";

var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

//Tests whether letter is a vowel

var vowelTest = function(ltr) {
    for (var j = 0; j <= vowels.length - 1; j++) {
	if (ltr === vowels[j]) {
		    return true;
		}
	}
};

//Changes the letter

var coderRing = function(oldLtr, shft){
	
	var newLtr = "";
//account for negative shift values
	var vShft = (shft < 0 ? shft+vowels.length : shft);
	
	
	if (vowelTest(oldLtr) === true) {
	    if ((vowels.indexOf(oldLtr) + vShft) <= vowels.length - 1) {
		    newLtr = vowels[vowels.indexOf(oldLtr) + vShft];
	    }
	    else {
			vowels = vowels.concat(vowels);
		    newLtr = vowels[vowels.indexOf(oldLtr) + vShft];
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
console.log(secretWord("I am Kit", -1));