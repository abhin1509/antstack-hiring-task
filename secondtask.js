import { resolveTxt } from 'dns'; 


let inputDomain = "https://google.com"; // domain name can be modified...
let inputTxt = "apple-domain-verification=30afIBcvSuDV2PLX"; // txt record can be modified respectively...


if(inputDomain.indexOf("http") != -1) { // if http present then get host name
   const myURL = new URL(inputDomain);
   inputDomain = myURL.host;
}

resolveTxt(inputDomain, (error, value) => { 
   if(error) { 
      console.log(error); 
      return; 
   } 
   let flag = 0;
   for(var j=0; j<value.length; j++) {
      let newVal = value[j];
      for(var i=0; i<newVal.length; i++) {
         if(newVal[i] === inputTxt) {
            console.log("DNS txt record found :: ", inputTxt);
            flag =1;
            return inputTxt;
         }
      }
   }
   if(flag === 0) console.log('DNS txt record not found!');
}) 