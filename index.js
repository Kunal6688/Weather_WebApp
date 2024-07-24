const apiKey="f54cf8978f726349f0a7f9997263aec3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
var  cityInput;
$("#getTextButton").click(function(){
    cityInput = $("#myInput").val();
    async function checkWeather(){


        const response =await fetch(apiUrl+`q=${cityInput}&appid=${apiKey}`);
        var data = await response.json();
    
        $(".city").text(data.name);
        $(".weather").text(data.weather[0].main);
        $(".temperature").text(Math.floor(data.main.temp)+"°");
    
        
        if(data.weather[0].main=='Clouds'||data.weather[0].main=='Mist'){
            $(".icon").attr("src","cloudy.png");
            $(".card").css("backgroundColor","#4d505f")
        }
    
        else if(data.weather[0].main=='Rain'||data.weather[0].main=='Drizzle'){
            $(".icon").attr("src","rain.png");
            $(".card").css("backgroundColor","#427684")
        }
        else if(data.weather[0].main=='Clear'){
            $(".icon").attr("src","sunny.png");
            $(".card").css("backgroundColor","#6fa2dc")
        }
        else if(data.weather[0].main=='Winter'){
            $(".icon").attr("src","winter.png");
            $(".card").css("backgroundColor","#427684")
        }
        
        
    
        console.log(data);
    }
    // console.log(cityInput);
    checkWeather();

});


$("#myInput").keypress(function(event) {
    if (event.which === 13) { // 13 is the key code for Enter
        const cityInput = $("#myInput").val();

        async function checkWeather() {
            const response = await fetch(apiUrl + `q=${cityInput}&appid=${apiKey}`);
            var data = await response.json();
        
            $(".city").text(data.name);
            $(".weather").text(data.weather[0].main);
            $(".temperature").text(Math.floor(data.main.temp) + "°");
        
            if (data.weather[0].main == 'Clouds' || data.weather[0].main == 'Mist') {
                $(".icon").attr("src", "cloudy.png");
                $(".card").css("backgroundColor", "#4d505f");
            } else if (data.weather[0].main == 'Rain' || data.weather[0].main == 'Drizzle') {
                $(".icon").attr("src", "rain.png");
                $(".card").css("backgroundColor", "#427684");
            } else if (data.weather[0].main == 'Clear') {
                $(".icon").attr("src", "sunny.png");
                $(".card").css("backgroundColor", "#6fa2dc");
            } else if (data.weather[0].main == 'Winter') {
                $(".icon").attr("src", "winter.png");
                $(".card").css("backgroundColor", "#427684");
            }
        
            console.log(data);
        }
        checkWeather();
    }
});



// console.log(data.main.temp); 