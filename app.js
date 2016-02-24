$(document).ready(function(){
    $('.square').mousedown(function(){
        console.log($(this).attr('id') + ' has been clicked');
    });
});