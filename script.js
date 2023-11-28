$(document).ready(function(){
    $("button").click(function(){
        let txt = " ";
        txt+="Width="+$("#d1").width()+"<br>";
        txt+="Height="+$("#d1").height()+"<br>";
        txt+="InnerWidth="+$("#d1").innerWidth()+"<br>";
        txt+="InnerHeight="+$("#d1").innerHeight()+"<br>";
        txt+="OuterWidth="+$("#d1").outerWidth(true)+"<br>";
        txt+="OuterHeight="+$("#d1").outerHeight(true)+"<br>";
        $("#d1").html(txt);
    })
})