var elemt = document.getElementsByClassName("fa-microphone");
var ser = document.getElementsByClassName("ser");
var send = document.getElementsByClassName("send");
var ms = document.getElementsByClassName("text");
var sub = document.getElementsByClassName("sub");
var form = document.getElementsByClassName("form-1");
var done = document.getElementsByClassName("lab");
var btn1 = document.getElementsByClassName("btn1");
var btn2 = document.getElementsByClassName("btn2");
var movtivate = document.getElementsByClassName("movtivate");
var erro = document.getElementsByClassName("erro");
var move2 = document.getElementsByClassName("move2");

$(elemt).click(function(){
  $(ser).val("     سوف تتوفر الخدمه قربيا");
});

$(send).click(function(){
    $(send).css("display","none");
    $(ms).css("pointer-events","none");
    $(ms).val("لقد تم ارسال تعليقك بنجاح"); 
});
$(sub).click(function(){
    $(form).css("display","none");
    $(done).text("تم ارسال طلبك بنجاح...");
});

$(btn1).click(function(){
    $(this).toggleClass("clas-btn");
});
$(btn2).click(function(){
    $(this).toggleClass("clas-btn");
});
$(movtivate).click(function(){
    $(movtivate).css("display","none");
    $(erro).css("display","block");
    
});
$(move2).click(function(){
    $(movtivate).css("display","none");
    $(move2).css("display","none");
    $(erro).css("display","block");
    
});
