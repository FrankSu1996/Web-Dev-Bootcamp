// Check off todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
    //use parent to remove entire li, not just span
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//create todos
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todo from input
        var todo = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});