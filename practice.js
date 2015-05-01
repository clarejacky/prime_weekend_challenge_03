///*pull in the amount of videos that are posting about happiness
// show top 12
// refresh list every minute
// today there have been 1000000 posts on happiness
// watch now */
//
//<!--$("video").prop('muted', true);-->
//
////<!--$("#mute-video").click( function (){-->
////<!--if( $("video").prop('muted', true) )-->
////<!--{-->
////<!--$("video").prop('muted', false);-->
////<!--}-->
////
////<!--else {-->
////<!--$("video").prop('muted', true);-->
////<!--}-->
////
////<!--});-->
//
//var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here
//
//
//// Use this function to do stuff with your results.
//// It is called after 'search' is executed.
//function searchCallback(results) {
//    console.log(results);
//
//
//}
//
//$(document).ready(function() {
////set interval to refresh every 15 seconds.
////set interval stops when someone clicks on video
//    //sound goes from mute to unmute of that video
//    search('yoga');
//
//
//});
//
//// HELPER FUNCTION
//// Executes a search using 'query' and runs searchCallback on the results of a success.
////function search(query){
//
////$.get("https://gdata.youtube.com/feeds/api/videos", function (){
////q=query;
////orderby=published;
////start-index=11;
////max-results=10;
////v=2;
////
////
////});
//
//
//
//    $.ajax ({
//        type: 'GET',
//        dataType: 'json',
//        crossDomain: true,
//        url: 'https://gdata.youtube.com/feeds/api/videos' + apikey +'&query=' + encodeURI(query),
//        complete: function() {
//            console.log('ajax complete');
//        },
//        success: function(data) {
//            searchCallback(data.results);
//        }
//    });
//
//}

//$.get
//$.getScript
//$.getJSON
//$.post
//$.load - load in a file or resource
//JSONP - with padding, cross domain requests by exploiting browser process, only works with get or ajax(get)
// data.results is the stuff you want
//All of these are parts of$.ajax
//


var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here


// Use this function to do stuff with your results.
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);


}

$(document).ready(function() {

    // Start the search here!
    // search("batman");

    search('yoga', 'meditation');


});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

    //$.ajax ({
    //    type: 'GET',
    //    dataType: 'jsonp',
    //    crossDomain: true,
    //    jsonp: 'json_callback',
    //    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
    //    complete: function() {
    //        console.log('ajax complete');
    //    },
    //    success: function(data) {
    //        searchCallback(data.results);
    //    }
    //});
    //
    //$.ajax ({
    //    type: 'GET',
    //    dataType: 'json',
    //    crossDomain: true,
    //    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
    //    complete: function() {
    //        console.log('ajax complete');
    //    },
    //    success: function(data) {
    //        searchCallback(data.results);
    //    }
    //    error: function(){
    //        console.log(error);
    //    }
    //});
//CORS- cross origin resource sharing
//    $.ajax ({
//        type: 'GET',
//        dataType: 'text',
//        crossDomain: true,
//        url: 'https://gdata.youtube.com/feeds/api/videos' + apikey +'&query=' + encodeURI(query),
//        success: function(data) {
//            searchCallback(data.results);
//        },
//        error: function (xhr, status){
//            alert("error " + status);
//        }
//    });

    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        //jsonp: 'json_callback',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+query+'&type=video&videoCaption=closedCaption&key='+apikey+'',
        complete: function(data) {
            console.log('ajax complete ', data);
        },
        success: function(data) {
            searchCallback(data.results);
            var embedId =
            console.log(data.results);
        }
    });


    //$.ajax ({
    //    url:,
    //    data: {},
    //    type: "GET",
    //    dataType: 'json',
    //    type: 'GET',
    //    dataType: 'json',
    //
    //    complete: function() {
    //        console.log('ajax complete');
    //    },
    //    success: function(data) {
    //        searchCallback(data.results);
    //    }
    //});




}

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

