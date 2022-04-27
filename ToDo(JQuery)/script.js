$(".txt").on(("keyup"),function(e){
    if(e.keyCode==13 && $(".txt").val() != "")
    {
        var task=$("<div class='task'></div>").text($(".txt").val());
        var del = $("<i class='fas fa-trash-alt'></i>").click(function(){
            var p =$(this).parent();
            p.fadeOut(() => p.remove)
        })

        var check = $("<i class='fas fa-check'></i>").click(function(){
            var p =$(this).parent();
            p.fadeOut(function(){
                $(".done").append(p);
                p.fadeIn();
            })
            $(this).remove();
        })


        task.append(del,check);
        $(".pending").append(task);
        $(".txt").val("");
    }
});