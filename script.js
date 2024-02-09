const button=document.getElementById("searchButton");
const input=document.getElementById("cityInput");
const cityname=document.getElementById("cityName");
const citytime=document.getElementById("cityTime");
const condition=document.getElementById("condition");
const citytemp=document.getElementById("cityTemp");
const feelslike=document.getElementById("feelsLike");
const humidity=document.getElementById("humidity");
const button1=document.getElementById("getLocation");
const uv=document.getElementById("uv");
async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key= bfb9896d8780472db2424627240902&q=${cityName}&aqi=yes`);
    return await promise.json();
}
async function getData1(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key= bfb9896d8780472db2424627240902&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}
async function gotdata(position){
    const result=await getData1(position.coords.latitude,position.coords.longitude);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    citytime.innerText=`${result.location.localtime}`;
    condition.innerText=`${result.current.condition.text}`;
    //let img=document.createElement("img");
    //img.src=`${result.current.condition.icon}`;
    //document.getElementById('body').appendChild(img);
    citytemp.innerText=`${result.current.temp_c}`;
    feelslike.innerText=`${result.current.feelslike_c}`;
    humidity.innerText=`${result.current.humidity}`;
    uv.innertext=`${result.current.uv}`;
}
async function notgotdata(position){
    console.log("there was some issue");
}
button.addEventListener("click",async ()=>{
    const value=input.value;
    const result=await getData(value);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region},${result.location.country}`;
    citytime.innerText=`${result.location.localtime}`;
    condition.innerText=`${result.current.condition.text}`;
    //let img=document.createElement("img");
    //img.src=`${result.current.condition.icon}`;
    //document.getElementById('body').appendChild(img);
    citytemp.innerText=`${result.current.temp_c}`;
    feelslike.innerText=`${result.current.feelslike_c}`;
    humidity.innerText=`${result.current.humidity}`;
    uv.innertext=`${result.current.uv}`;
});
button1.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(gotdata,notgotdata);
});