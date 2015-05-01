var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here
var input;

// Use this function to do stuff with your results.
// It is called after 'search' is executed.
//
//function init() {
//    gapi.client.setApiKey(apiKey);
//    gapi.client.load("youtube", "v3", function (){
//
//
//    });
//}
//
//var request = gapi.client.youtube.search.list ({
//    part: "snippet",
//    type: "video",
//    q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//    maxResults: 3,
//    order: "videoCount",
//    publishedAfter: ""
//})

function searchCallback(results) {


}

$(document).ready(function() {

    search('feminism');
    $.get("template.html", function (data){
        $(".mainContent").append(data);
    });


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
            data;
        },
        success: function(data) {
            searchCallback(data);
            console.log(data);
            input = data;
            console.log(input.items[0].id.videoId);
        }
    });







}