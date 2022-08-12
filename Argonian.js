function Argonian()
{
let realName = document.getElementById("realName").value;

//if any name (first, last, or middle) ends with an 'er', replace it with an 'a'
let newName = realName.replace(/((er)\s|(er)$)/gi, "a ")

newName = newName.replace(/(ea)/gi, "ee");

//note the dollar signs represent the capture groups (what's in parentheses).  This 
//makes "Dennis" into "Deennis"
newName = newName.replace(/([^e])[e]([^e])/gi, '$1ee$2');


newName = newName.replace(/(th)/gi, "ch")


$("#output").text(newName)

console.log(newName)
}

export default Argonian;