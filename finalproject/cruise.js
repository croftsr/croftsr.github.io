
    $(function()
      
    $.getJSON( "ajax/cruise.json", function( data ) {
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
