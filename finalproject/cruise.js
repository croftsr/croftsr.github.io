
    /*$(function() {
      
    $.getJSON( "cruise.json", function( data ) {
    console.log(data)
        var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='"Activity"'>" + val["C"] + "</li>" 
                    "<li id='"Activity"'>" + val["B"] + "</li>"
                    "<li id='"Activity"'>" + val["D"] + "</li>"
                    "<li id='"Activity"'>" + val["S"] + "</li>"
                    "<li id='"Activity"'>" + val["P"] + "</li>");
    });
    

    $( "<ul/>", {
        "class": "Activity",
        html: items.join( "" )
    }).appendTo( "main" );
});
    }*/

$.getJSON("/finalproject/cruise.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val["C"] +  "           </li>" );
        items.push( "<li id='" + key + "'>" + val["B"] +  "           </li>" );
        items.push( "<li id='" + key + "'>" + val["D"] +  "           </li>" );
        items.push( "<li id='" + key + "'>" + val["S"] +  "           </li>" );
        items.push( "<li id='" + key + "'>" + val["P"] +  "           </li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "main" );
});