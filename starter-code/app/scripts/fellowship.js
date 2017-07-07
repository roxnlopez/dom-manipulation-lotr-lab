console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

  // create a section tag with an id of middle-earth
  var newSection = document.createElement("section");
  //setting section's id to middle-earth
  newSection.setAttribute('id', 'middle-earth');
  //forEach land, in the lands array, create an article
  for ( var i = 0; i < lands.length; i++ ) {
    // console.log("i is now: " + i + " and lands[i] is now: " + lands[i]);
    var land = lands[i];
    // inside, add each land as an article tag
    var article = document.createElement("article");
      // inside each article tag include an h1 with the name of the land
    var h1 = document.createElement("h1");
    var text = document.createTextNode(land);
    //appending text to h1 to article to section
    h1.appendChild(text);
    article.appendChild(h1);
    newSection.appendChild(article);
    // console.log("the loop is starting over!");
   }
  // append middle-earth to your document body
   document.body.appendChild(newSection);
}
makeMiddleEarth();



// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var makeUL = document.createElement('ul');
    //for each hobbit in the hobbits array, create a list item
    for (i = 0; i < hobbits.length; i++) {
          console.log("i is now: " + i + " and hobbits[i] is now: " + hobbits[i]);
          var hobbit = hobbits[i];
          var li = document.createElement("li");
          var h1 = document.createElement("h1");
          var text = document.createTextNode(hobbit);
          //append list to h1 to li to makeUL
          h1.appendChild(text);
          li.appendChild(h1);
          makeUL.appendChild(li);
          //console.log("the loop is starting over!");
          //give each hobbit a class
          var hobbitsClass = document.createElement("hobbits");
          hobbitsClass.setAttribute('class', 'hobbit'); 
    }
    //created var to assign tag (article) of the shire
    var articleOne = document.getElementsByTagName("article")[0];
    articleOne.append(makeUL);
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute('class', 'magic-imbued-jewelry'); 
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
    var frodo = document.querySelector("li");
    frodo.appendChild(ring);
   }
 keepItSecretKeepItSafe();



// Part 4

function makeBuddies() {
  // create an aside tag 
  var aside = document.createElement("ASIDE");
  // attach an unordered list of the 'buddies' in the aside
  //create list element
  var buddiesList = document.createElement('ul');
  aside.append(buddiesList);
  for (var i=0; i<buddies.length; i++) {
    console.log("i is now: " + i + " and buddies[i] is now: " + buddies[i]);
    var buddy = buddies[i];
    //create list item
    var li = document.createElement("li");
    var h1 = document.createElement("h1");
    var text = document.createTextNode(buddy);
    //set its contents
    h1.appendChild(text);
    li.appendChild(h1);
    buddiesList.appendChild(li);
  }
  // insert your aside as a child element of rivendell
  var Rivendell = document.createElement(lands[1]);
  Rivendell.appendChild(aside);
  }
makeBuddies();



// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

}
beautifulStranger();




// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

}
leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
