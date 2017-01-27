$(document).ready(function (){
    $('#new-task').keypress(function(event) {
        if (event.keyCode==13) {
        event.preventDefault();
        $("#task-list").append("<li>" + $("#new-task").val() +' '+'<input type="checkbox" id="checked"/>' +  ' '+"</li>");
        }
        });
        var task = $("#new-task").serialize();
        $.post("/add_task", task, listit()); {
            listit();
        // console.log("stopped it");
        }
});
