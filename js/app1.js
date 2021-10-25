$(document).ready(function(){

    
    $(".arrow_right").click(function(){
        console.log("click")
    let currentDiv = $(".active");
    let nextDiv = currentDiv.next();

    if(nextDiv.length){
        currentDiv.removeClass("active").css("z-index","-10");
        nextDiv.addClass("active").css("z-index","10");
    }
    })

    $(".arrow_left").click(function(){
        console.log("click")
    let currentDiv = $(".active");
    let prevDiv = currentDiv.prev();

    if(prevDiv.length){
        currentDiv.removeClass("active").css("z-index","-10");
        prevDiv.addClass("active").css("z-index","10");
    }
    })
    


});    