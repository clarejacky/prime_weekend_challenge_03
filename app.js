var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here
var input;



function searchCallback(results) {


}



$(document).ready(function() {

    search('feminism');
    //var embedId = input.items[0].id.videoId;
    //$.get("template.html", function (data){
    //    $(".mainContent").append(data);
    //        $(".mainContent").children().find("#videoembed").attr("src", "http://www.youtube.com/embed/"+embedId+"");
    //
    //});


    //console.log(el);
    //$(".videoUrl").attr("href", ""+el+"");

});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){


    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        //jsonp: 'json_callback',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+query+'&type=video&videoCaption=closedCaption&maxResults=10&order=videoCount&key='+apikey+'',
        complete: function(data) {
            console.log('ajax complete ', data);
        },
        success: function(data) {
            searchCallback(data);
            console.log(data);
            input = data;
            console.log(input.items[0].id.videoId);
            buildPlayer(input);
        }
    });


}

function buildPlayer() {
    var embedId = input.items[0].id.videoId;
    $.get("template.html", function (data){
        $(".mainContent").append(data);
        $(".mainContent").children().find("#videoembed").attr("src", "http://www.youtube.com/embed/"+embedId+"");

    });
}
