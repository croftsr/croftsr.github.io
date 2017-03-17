// Current Location Scripts
$(function() {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({ 
        url: "https://api.wunderground.com/api/a8b9ab8e9f5580f1/geolookup/conditions/astronomy/q/" + lat + "," + long + ".json",
        dataType: "jsonp",
        success: function(data) {
            console.log("success",data);
            
      
            $('#cityDisplay').prepend(data.location.city +', '+ data.location.state + ' ')
            $('#currentTemp').text(Math.round(data.current_observation.temp_f) +'\xB0 '+ 'F')
            $('#add1').append('With a visibility of '+data.current_observation.visibility_mi +' Miles.')
            $('#add2').append('Wind: '+ data.current_observation.wind_string)
            $('#add3').append('Relative Humidity: '+data.current_observation.relative_humidity)
                        
            console.log("success", data);

      $("#cover").fadeOut(250);
    } 
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});

////API Code Bro.Thompson
//JQuery(document).ready(function ($) {
//    
//    $.ajax({
//        url: "https://api.wunderground.com/api/a8b9ab8e9f5580f1/geolookup/conditions/astronomy/q/",
//        datatype: "json",
//        success: function (data){
//            console.log(data);
//            var location = data['Springfield']['City']
//            var temp = data[]
//            
//            script src:""
//        }
//    })
//})