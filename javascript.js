// created variables to use with api to display info
var searchButton = document.querySelector('searchButton')
var searchBar = document.querySelector('searchBar')
var cityName = document.querySelector('cityName')
var temp = document.querySelector('temp')
var details = document.querySelector('details')

searchButton.addEventListener('click',function(){
fetch('api.openweathermap.org/data/2.5/weather?q='+searchBar.value+'&appid=821cccc3bd68e40b96f7c4d8b9907cd8')
.then(response => response.json())
.then(data => console.log(data))
})