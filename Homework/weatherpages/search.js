$('#query').keyup(function(){
  // All code will be inside of this block
      var value = $('#query').val();
      var rExp = new RegExp(value, "i");
  
    $.getJSON("weather.json/weather.json" + value + "&cb=?", function (data) {
          console.log(data);
          // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="croftsr.github.io/Homework/weatherpages/franklin' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page

  
  }); // end getJSON

}); // end keyup