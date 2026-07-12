function caesarCipher(str, shift){
    shift = shiftMod(shift);
    let key = '';
    for(let i = 0; i < str.length; i++){
        let ascii = str.charCodeAt(i);
        if(ascii < 65 || ascii > 122 || (ascii > 90 && ascii < 97)){
            key += str[i];
            continue;
        }
        if(ascii < 91){
            key += String.fromCharCode(shiftCap(ascii, shift));
        }
        else {
            key += String.fromCharCode(shiftLower(ascii, shift));
        }
        
    }
    return key;
}

function shiftLower(ascii, shift){
    ascii += shift;
    if(ascii > 122){
        ascii = ascii - 122 + 96;
    }
    return ascii;
}
function shiftCap(ascii, shift){
    ascii += shift;
    if(ascii > 90){
        ascii = ascii - 90 + 64;
    }
    return ascii;
}

function shiftMod(shift){
    if (shift > 0){
        return shift % 26;
    }
    else {
        return shift % -26;
    }
}


module.exports = caesarCipher;