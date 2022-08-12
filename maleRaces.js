
function maleArgonian()
{
let realName = document.getElementById("realName").value;

let newName = realName.replace(/((er)\s|(er)$)/gi, "a ")

newName = newName.replace(/(ea)/gi, "ee");

//note the dollar signs represent the capture groups (what's in parentheses)
newName = newName.replace(/([^e])[e]([^e])/gi, '$1ee$2');


newName = newName.replace(/(th)/gi, "ch");


$("#output").text(newName);

console.log(newName);
}

function maleImperial()
{
console.log("This is a male Imperial")
}

function maleOrc()
{
console.log("This is the male Orc");

let realName = document.getElementById("realName").value;

//Cassandra becomes Samuel becomes Samgrum, Micheal becomes Michgrum, Dennis becomes Denngrum
newName = realName.replace(/(uel|eal|is)/gi, "grum");


newName = realName.replace(/(th|ch)/gi, "rk");

//this gives an Orchish look to last names, but only if they don't put their middle name.
//WISH I COULD FIND A WAY TO REPLACE ALL BUT THE LAST SPACE WITH A HYPHEN
newName = realName.replace(/\s/, "gro-")

$("#output").text(newName)
}

export { maleImperial, maleOrc };