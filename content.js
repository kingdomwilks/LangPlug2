

var elementsInsideBody = [...document.body.getElementsByTagName('*')];


//Function to review DOM elements
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
        console.log('replaced');
      }
    });
  });
}

const aqaSpanish = {
  "week": " semana",
  "weekend": "fin de semana",
  "and": 'y',
  "month": "mes",
  "sun": "sol",
  "death": "muerte",
  "deaths": "muertes"
}

function replaceText (node, aqaSpanish) {
  let value = node.nodeValue;
  //Currently aqaSpanishArray returning undefined. 
  let aqaSpanishArray = Object.entries(aqaSpanish);
  console.log(aqaSpanishArray);
  var i;
    for (i = 0; i < aqaSpanishArray.length; i++) {
      let englishWord = aqaSpanishArray[i][0];
      let spacedEnglishWord = concat(" ", englishWord, " ");
      let spanishWord = aqaSpanishArray[i][0];
      let spacedSpanishWord = concat(" ", spanishWord, " ");

      var change = "regex"
      var regexFunction = new RegExp(change, "gi")
      if (node.nodeValue == spacedEnglishWord) {
      value = value.replace(regexFunction, spacedSpanishWord);
      node.nodeValue = value;
      }
      console.log('Nothing to see here')

    }
  
}

window.onload = findAndReplace();

/*
const aqaSpanish = {
  "week": " semana",
  "weekend": "fin de semana",
  "and": 'y',
  "month": "mes",
  "sun": "sol",
  "muerte": "death",
  "muertes": "deaths",
}

function replaceText (node, aqaSpanish) {
  let value = node.nodeValue;

  for (var key in aqaSpanish) {
  console.log(obj[key]);
}
*/


/*

// Needs space before & after both values or replaces parts of words
// Need to sort out case sensitivity...
function replaceText (node) {
  let value = node.nodeValue;
  let vocab = aqaSpanish[0]
  value = value.replace(/ Week /gi, ' Semana ');
  value = value.replace(/ week /gi, ' semana ');
  value = value.replace(/ Weekend /gi, ' Fin de semana ');
  value = value.replace(/ weekend /gi, ' fin de semana ');
  value = value.replace(/ And /gi, ' y ');
  value = value.replace(/ and /gi, ' y ');
  value = value.replace(/ Month /gi, ' mes ');
  value = value.replace(/ month /gi, ' mes ');
  value = value.replace(/ Sun /gi, ' Sol ');
  value = value.replace(/ sun /gi, 'sol');
  value = value.replace(/ Death /gi, ' Muerte ');
  value = value.replace(/ death /gi, 'muerte');
  value = value.replace(/ Deaths /gi, ' Muertes ');
  value = value.replace(/ deaths /gi, 'muertes ');
  node.nodeValue = value;
}

window.onload = findAndReplace();
*/