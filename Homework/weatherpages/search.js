var returned;
$('#query').keyup(function(){
  // All code will be inside of this block
      var value = $('#query').val();
      var rExp = new RegExp(value, "i");
  
    $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
          console.log(data);
          // Begin building output
        returned = data;
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page

  
  }); // end getJSON

}); // end keyup
$("#searchResults").on('click', 'a',function(event){
    event.preventDefault();
    index = $(this).index('a');
    getData(returned.RESULTS[0].lat,returned.RESULTS[0].lon);
    $('searchResults').toggle();
});
$('enter').keypress(function (event) {
    
    if(event.which == 13) {
        event.preventDefault();
        index = $(this).index('0');
        getData(returned.RESULTS[0].lat,returned.RESULTS[0].lon);
        $('searchResults').toggle();
    }
});

  
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
