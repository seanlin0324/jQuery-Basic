
//預載funciton
function ShowWord( target, msg ){
    $(target).append( msg );
};

//當頁面讀取完畢才執行
$(document).ready(function(){
    console.log('xx')
    //綁定事件
    $("#submit").bind("click", function(){
        ShowWord("#Message","<p>" + $("#content").val() + "</p>");
    });
});

