// let hour = document.getElementsByClassName('hour');
// let minute = document.getElementsByClassName('minute');
// let second = document.getElementsByClassName('second');

setInterval(()=>{
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    seconds = d.getSeconds();
    hrRotation =  30 * hr  + min/ 2;
    minRotation =  6 * min;
    secondRotation =  6 * seconds;
    hour.style.transform =  `rotate(${hrRotation} deg)`;
    minute.style.transform =  `rotate(${minRotation}deg)`;
    second.style.transform =  `rotate(${secondRotation}deg)`;
},1000);



// function exchangeTimeZone(timeZone){
//     timeArea  = timeZone.substring(25,33);
//     let stringForConcatenation  = '';
//     let daylightSavingsTime = false;
//     console.log(timeZone.length);
//     //looping through the string to understand if the current time includes the Daylight time zone or not :) 
//     for(let i=0;i<=timeZone.length;i++){
//         if(timeZone.charAt(i) == ' '){
//             if (stringForConcatenation.indexOf("Daylight",0)>=0){
//                 daylightSavingsTime = true;
//                 break; // I exit the for loop
//             }
//             stringForConcatenation = '';
//         }
//         else{
//             stringForConcatenation +=  timeZone.charAt(i);
//         }
//     }
//     // I adjust the time zone in case I am not in the daylight savings time
//     if(!daylightSavingsTime){
//         meanTime =  parseInt(timeArea.toUpperCase().replace('GMT-',''));
//         meanTime =  parseInt(meanTime) + 100;
//         console.log(meanTime);
//         timeArea =  'GMT-'  + '0' +  meanTime.toString();
//     }
//     // set this comparison as the standard time zones outside of the daylight savings time period
//     switch (timeArea){
//         case 'GMT-0500':
//             timeZone =  'E.S.T';
//         case 'GMT-0600':
//             timeZone = 'C.S.T';
//         case 'GMT-0700':
//             timeZone = 'M.S.T';
//         case 'GMT-0800':
//             timeZone = 'P.S.T';
//     }
//     if(daylightSavingsTime){
//         timeZone =  timeZone.replace("S","D");
//     }
//     return Date().substring(15,22) +  ' is in the following time-zone';
// }


// function injectDate(){
//     let selectedTimeZone = document.getElementById('selectedTimeZone');
//     const radioButtons = document.querySelectorAll('input[name="timeZones"]');
//     selectedTimeZone.addEventListener('load',()=>{
//         let selectedTime = '';
//         let updateClock = false;
//         for(const radioButton of radioButtons){
//             if(radioButton.checked){
//                 selectedTime =  radioButton.value;
//                 updateClock  =  true;
//                 break;
//             }
//         }
//         currentTime = exchangeTimeZone(timeZone);
//         selectedTimeZone.innerHTML =  selectedTime ? `You selected ${selectedTime}` : `You have not selected any time zone`;
//     });
// }
