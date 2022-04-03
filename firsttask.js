import fetch from "node-fetch";

/*
   This is final with code formatting
*/

const response = await fetch('https://meesho.com');
const htmlInStr = await response.text();
  
//const inputName = "robots";


function validateString(index){
   if(index != -1) {
      return true;
   }
   return false;
}

function getElementWithinQuotes(string,startIndex) {
   let posOfFirstQuote = string.indexOf('"', startIndex+1);
   let posOfNextQuote = string.indexOf('"', posOfFirstQuote+1);
   let elementWithinQuotes =  string.slice(posOfFirstQuote+1, posOfNextQuote);
   return elementWithinQuotes;
}

let istart = htmlInStr.indexOf("<meta");
let flag = 0;
console.log(htmlInStr);
while(validateString(istart))
{
   let iend = htmlInStr.indexOf(">", istart+1);
   iend += 1;
   let meta = htmlInStr.slice(istart, iend);

   let indexOfName = meta.indexOf("name");
   let contentStr = "";
   if(validateString(indexOfName)) {
      //let tagName =  getElementWithinQuotes(meta, indexOfName);
      
      //if(tagName === inputName) {
         let indexOfContent = meta.indexOf("content");
         if(validateString(indexOfContent)) {
            contentStr = contentStr + getElementWithinQuotes(meta, indexOfContent);
         }
         console.log("Meta ::",meta);
         console.log("Content ::", contentStr);
         console.log("");
         flag = 1;
      //}
   }
   istart = htmlInStr.indexOf("<meta", iend);
}
if(flag === 0) { 
console.log("meta not present");
}