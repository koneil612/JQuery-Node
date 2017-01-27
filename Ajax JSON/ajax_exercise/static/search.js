$("#search-form").submit(function(event){
    event.preventDefault();
    // console.log("stopped submit yo.");
    var gotData = function(html) {
        // console.log(html);
        html.map(function(item){
            // console.log(item);
            $('#result-list').append("<li>"+item.title+item.url+"</li>");
        });
    };
    console.log($('#search-form').serialize());
    var data = $('#search-form').serialize();
    $.get("/search?"+ data, gotData);
});
