var apikey = 'AIzaSyBVJJUB5vwtCNHdzPdoiQtjpZwaqAVaIXw'; // Put your API key here
var data;

// Use this function to do stuff with your results.
// It is called after 'search' is executed.
function searchCallback(results) {


}

$(document).ready(function() {

    search('yoga', 'meditation');


});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){


    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        //jsonp: 'json_callback',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+query+'&type=video&videoCaption=closedCaption&key='+apikey+'',
        complete: function(data) {
            console.log('ajax complete ', data);
            data = data;
        },
        success: function(data) {
            searchCallback(data.responseJSON);
            console.log(data.responseJSON);
        }
    });







}