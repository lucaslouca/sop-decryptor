//////////////////////////////////////////////////////////////////////
// CLEANING UP
//////////////////////////////////////////////////////////////////////

// Unblur
var obfuscated_content = document.getElementsByClassName("obfuscated-content")[0];
var blur = obfuscated_content.parentElement;
blur.className = "";

// Remove payment dialog
var dialog = blur.nextSibling;
dialog.remove();

// Remove spiegel plus intro text
var intro = document.getElementsByClassName("js-spiegelplus-obfuscated-intro")[0]; 
intro.remove();

//////////////////////////////////////////////////////////////////////
// DECRYPT
//////////////////////////////////////////////////////////////////////
// 1. Iterate over all children (having class 'obfuscated') of obfuscated_content
// 2. Decrypt (Caesar cipher on ascii code)

var children = obfuscated_content.children;
for (var i = 0; i < children.length; i++) {
	var obfuscated = children[i];
	var obfuscated_text = obfuscated.innerHTML;
	var decrypted_chars = [];
  
	var tag = false;
	for (var c = 0; c < obfuscated_text.length; c++) {
		decrypted_chars[c] = obfuscated_text.charAt(c);
		if (obfuscated_text.charAt(c) === '<') {
			 // Do not try to decrypt tag's chars
			tag = true;
		} else if (tag && obfuscated_text.charAt(c) === '>') {
			tag = false
		} else if (!tag && obfuscated_text.charAt(c) !== ' ') {
			var ascii =  obfuscated_text.charCodeAt(c);
			decrypted_chars[c] = String.fromCharCode(ascii - 1);	
		}	
	}
	
	obfuscated.innerHTML = decrypted_chars.join("");
}