import { resolveTxt } from 'dns'; 
//const dns = require('dns'); cjs

let inputDomain = "https://google.com";
const txt = "jfkfjshkfs";

if(inputDomain.indexOf("http") != -1) { // if http present then get host name
   const myURL = new URL(inputDomain);
   inputDomain = myURL.host;
}

resolveTxt(inputDomain, (error, value) => { 
   if(error) { 
      console.log(error); 
      return; 
   } 
   for(var j=0; j<value.length; j++) {
      let newVal = value[j];
      for(var i=0; i<newVal.length; i++) {
         //console.log(newVal[i]);
         if(newVal[i] === txt) {
            return txt;
         }
      }
   }
}) 