const rainy=document.querySelector('body');
const getWeather=(sBox1)=>{
  CityName.innerHTML=sBox1
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+sBox1,{
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b61512d0cmsh790d81aa88e9d77p147ef1jsn4751baa10dd8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
})
.then(response=>response.json())
.then(response=>{
  console.log(response)
  temperature.innerHTML=response.temp
  max_temp.innerHTML=response.max_temp
  min_temp.innerHTML=response.min_temp
  humidity.innerHTML=response.humidity
  wind_speed.innerHTML=response.wind_speed
  cloudPct=response.cloudPct;
  if(cloudPct>30){
    document.getElementById("body").style.backgroundImage= "url('12.jpg')";
  }
})
.catch(err=>{
  console.log(err )
});
}

goFind.addEventListener('click',(e)=>{
  e.preventDefault();
  getWeather(sBox1.value)

})
