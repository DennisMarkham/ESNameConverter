
import { femaleImperial, femaleOrc } from "./femaleRaces.js";
import { maleImperial, maleOrc } from "./maleRaces.js";
import Argonian from "./Argonian.js"

document.getElementById("generate").addEventListener("click", function(){
	let sex = document.querySelector('input[name="sex"]:checked').value;
let race = document.getElementById("race").value;

console.log(sex);



switch(sex)
{
case "female":
femaleRace();
break;
default:
maleRace();
break;
}

function femaleRace()
{
switch(race)
{
case "Argonian":
Argonian();
break;
case "Imperial":
femaleImperial();
break;
case "Orc":
femaleOrc();
break;
}

}

function maleRace()
{
switch(race)
{
case "Argonian":
Argonian();
break;
case "Imperial":
femaleImperial();
break;
case "Orc":
femaleOrc();
break;
}
}

})