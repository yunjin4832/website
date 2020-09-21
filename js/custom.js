$(function(){

    $('.list>li').on('click', function(){
        
        var img_tag = '';
        var img_src = $(this).children('label').children('img').attr('src');
        
        img_src = img_src.replace('thum','detail');
        img_tag = '<img src="' + img_src + '">';
        
        $(this).children('.full_img').children('label').html(img_tag);      
    });
    
    
});



