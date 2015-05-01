var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here
var input;
var i = 0;
var htmldata;


function searchCallback(results) {


}



$(document).ready(function() {

    search('intersectional feminism');

});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){


    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        //jsonp: 'json_callback',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+query+'&type=video&videoCaption=closedCaption&start-index=1&maxResults=10&orderby=published&key='+apikey+'',
        complete: function(data) {
            console.log('ajax complete ', data);
        },
        success: function(data) {
            searchCallback(data);
            console.log(data);
            input = data;
            //console.log(input.items[0].id.videoId);
            buildPlayer(input);
        }
    });


}

function buildPlayer(input) {
    //var embedId = input.items[i].id.videoId;
    $.get("template.html", function (data){
        htmldata = data;
        //$(".mainContent").append(htmldata);
        //var embed = input.items[i].id.videoId;
            var embed = input.items[0].id.videoId;
            $(".mainContent").append(htmldata);
            $(".mainContent").children().children().attr('src', 'http://www.youtube.com/embed/'+embed+"");



    });



}
