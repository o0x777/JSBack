/**
 *** Object.appendChain(@object, @prototype)
 *
 * Appends the first non-native prototype of a chain to a new prototype.
 * Returns @object (if it was a primitive value it will transformed into an object).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
 * new Function(["@arg"(s)], "@function_body") to that chain.
 * Returns the function.
 *
 **/

Object.appendChain = function(oChain, oProto) {
    if (arguments.length < 2) {
        throw new TypeError('Object.appendChain - Not enough arguments');
    }
    if (typeof oProto === 'number' || typeof oProto === 'boolean') {
        throw new TypeError('second argument to Object.appendChain must be an object or a string');
    }

    var oNewProto = oProto,
        oReturn,
        o2nd,
        oLast;

    oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

    for (var o1st = this.getPrototypeOf(o2nd);
         o1st !== Object.prototype && o1st !== Function.prototype;
         o1st = this.getPrototypeOf(o2nd)
    ) {
        o2nd = o1st;
    }

    if (oProto.constructor === String) {
        oNewProto = Function.prototype;
        oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
        this.setPrototypeOf(oReturn, oLast);
    }

    this.setPrototypeOf(o2nd, oNewProto);
    return oReturn;
}


function Mammal() {
    this.isMammal = 'yes';
}
function MammalSpecies(sMammalSpecies) {
    this.species = sMammalSpecies;
}

MammalSpecies.prototype = new Mammal();
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis')
console.log(oCat.isMammal)

function Animal() {
    this.breathing = 'yes'
}

Object.appendChain(oCat, new Animal())
console.log(oCat.breathing)

function Symbol(){
    this.isSymbol = "yes";
}

var oPrime = 17;
var oPrime = Object.appendChain(oPrime, new Symbol());
console.log(oPrime.isSymbol)
console.log(typeof oPrime)
console.log(oPrime)
