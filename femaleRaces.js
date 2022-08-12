

function femaleImperial()
{
console.log("This is a female Imperial")
let realName = document.getElementById("realName").value;

//this makes the first name end with 'a' if it doesn't already.  The last letter of the first name 
//would be followed by a space, after all.  Though what if they only type one name.  Hmmm.
let newName = realName.replace(/([^a]\s)/, "a ")
}

function femaleOrc()
{
console.log("This is a female Orc")
let realName = document.getElementById("realName").value;

//Cassandra becomes Cassangrum, Diana become Digrum, Henriette becomes Henrigrum
let newName = realName.replace(/(dra|ana|ette)/gi, "grum");

//this gives an Orchish look to last names, but only if they don't put their middle name.
//WISH I COULD FIND A WAY TO REPLACE ALL BUT THE LAST SPACE WITH A HYPHEN
newName = realName.replace(/\s/, "gra-")

$("#output").text(newName)
}

export { femaleImperial, femaleOrc };