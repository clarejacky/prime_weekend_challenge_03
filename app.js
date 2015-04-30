/*pull in the amount of videos that are posting about happiness
show top 12
refresh list every minute
today there have been 1000000 posts on happiness
watch now */

<!--$("video").prop('muted', true);-->

//<!--$("#mute-video").click( function (){-->
//<!--if( $("video").prop('muted', true) )-->
//<!--{-->
//<!--$("video").prop('muted', false);-->
//<!--}-->
//
//<!--else {-->
//<!--$("video").prop('muted', true);-->
//<!--}-->
//
//<!--});-->

var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here


// Use this function to do stuff with your results.
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);


}

$(document).ready(function() {
//set interval to refresh every 15 seconds.
//set interval stops when someone clicks on video
    //sound goes from mute to unmute of that video
    search('yoga');


});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'https://gdata.youtube.com/feeds/api/videos' + apikey +'&query=' + encodeURI(query),
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data) {
            searchCallback(data.results);
        }
    });

}