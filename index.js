const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const rolex = setInterval(()=> {
    
  let datetoday = new Date();

  let day = datetoday.getDate();
  let hr = datetoday.getHours();
  let min = datetoday.getMinutes();
  let sec= datetoday.getSeconds();

  if (day < 10) day = '0'  + day;
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  days.textContent=  day;
  hours.textContent= ":" +  hr;
  minutes.textContent= ":" +   min;
  seconds.textContent= ":" +   sec;

})