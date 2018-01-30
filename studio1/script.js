processForm();
document.gordon.onsubmit = processForm;

function processForm() {
  var person1 = document.gordon.person1.value;
  var adj1 = document.gordon.adj1.value;
  var adj2 = document.gordon.adj2.value;
  var verb3 = document.gordon.verb3.value;
  var noun3 = document.gordon.noun3.value;
  var adj3 = document.gordon.adj3.value;
  var food4 = document.gordon.food4.value;
  var verb5 = document.gordon.verb5.value;
  var body5 = document.gordon.body5.value;
  var adj6 = document.gordon.adj6.value;

  var myMsg = document.getElementById("myMsg");
  myMsg.innerHTML= (person1 + " could do better! And she's " + adj1 +"!<br>What are you? An " + adj2 + " sandwich!<br>I wish you'd " +verb3+" in the " + noun3 +"! That would make my life a lot " +adj3+ "!<br>Hey, "+ food4 + " head, are you listening to me?!<br>You deserve a " +verb5+ "in the " +body5+"!<br>You surprise me, how "+adj6+" you are!")

  return false;
}

// function resetForm() {
//   myMsg.innerHTML = "";
//   results.className = "hide"
// }
