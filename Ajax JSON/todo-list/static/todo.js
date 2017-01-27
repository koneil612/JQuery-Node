$(document).ready(function (){
updateList();
$('#new-task').keypress(function(event) {
 if (event.keyCode==13) {
     event.preventDefault();
        var task = $("#new-task").serialize();
        $.post("/add_task", task, function(task) {
            $("#task-list").append('<li id="' +task.id +' ">' +  '<input type="checkbox" id="checked"/>' + task.description + '</li>');
        });
    }
});

function updateList(callback){
    $.get("/tasks", function(task) {
        task.forEach(function(tasks){
            $("#task-list").append('<li id="' +tasks.id +' ">' + '<input type="checkbox" id="checked"/>'  +  tasks.description + ' '+"</li>");
            });
    });
}
    $('#task-list').on('click', '#checked', function(){
        $(this).closest('li').wrap("<strike>");
        if ($(this).prop('checked')) {
            var list_id =  $(this).closest('li').attr('id');
            $.post("/mark_task", {"id":list_id, "done":"True"}, function(){
                console.log("id= " + list_id);
                });
        }
    });

$('#remove-completed').click(function(){
    $.get("/tasks", function(task) {
        task.forEach(function(tasks){
            if (tasks.done === true) {
                $.post("/remove_completed", {"id":tasks.id},function(){
                    $("#task-list").empty();
                    updateList();
                });
                }
            });
        });
});

});
