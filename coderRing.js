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

var consonantsTest = function(cLtr) {
    for (var k = 0; k <= consonants.length - 1; k++) {
	if (cLtr === consonants[k]) {
		    return true;
		}
	}
};

var letterTest = function(ltrTst) {
    if (vowelTest(ltrTst)===true) {
        return true;
    }
    else if (consonantsTest(ltrTst)) {
        return true;
    }
    else {
        return false;
    }
    
};

//Changes the letter

var coderRing = function(oldLtr, shft){
	
	var newLtr = "";
//account for negative shift values
	var vShft = (shft < 0 ? shft+vowels.length : shft);
	var cShft = (shft < 0 ? shft+consonants.length : shft);
	
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
	    //accounts for shift values that excede the length of the consonant array
	    if (consonants.indexOf(oldLtr) + cShft > consonants.length) {
    		newLtr = consonants[consonants.indexOf(oldLtr) + cShft - consonants.length];
	    }
	    else {
		    newLtr = consonants[consonants.indexOf(oldLtr) + cShft];
	    }
	}
	return newLtr;
};

var secretWord = function(msg, shft) {
	var newMsg = "";
	var oldMsg = msg.toLowerCase();
	for (var i = 0; i <= oldMsg.length - 1; i++) {
	        if (letterTest(oldMsg.charAt(i)) === false) {
	            newMsg = newMsg + oldMsg.charAt(i);
	        }

	        else {
    	        var change = oldMsg.charAt(i);
	            newMsg = newMsg + coderRing(change, shft);
	        }
	}
	return newMsg;
};

console.log(secretWord("Yes, I'm a Zebra", 2));
console.log(secretWord("I am Kit", -1));
console.log(secretWord("Who are you? b", -2))