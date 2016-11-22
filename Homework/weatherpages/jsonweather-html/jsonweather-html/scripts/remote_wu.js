// Current Location Scripts
$(function () {

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
        url: "http://api.wunderground.com/api/a8b9ab8e9f5580f1/geolookup/conditions/astronomy/q/" + lat + "," + long + ".jsonp",
        dataType: ".jsonp",
        success: function(parsed_json) {
            console.log(parsed_json);
            var location = parsed_json['location']['city'];
            var state = parsed_json['location']['state'];
            $("#cityDisplay").text(location + " " + city + "," + state)
            
        var temp_f = Math.round(parseInt(parsed_json['current_observation']['temp_f']));
            var state = parsed_json['location']['state'];
        

      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
