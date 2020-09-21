$(function(){
  var perNum = 85;
    $('.first.circle').circleProgress({
      value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          gradient:["darkred","white"],
            gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:true
                    
        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });

$(function(){
  var perNum = 80;
    $('.second.circle').circleProgress({
      value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          gradient:["goldenrod","white"],
            gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:true
                    
        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });

$(function(){
  var perNum = 65;
    $('.third.circle').circleProgress({
      value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          gradient:["lightpink","white"],
            gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:true
                    
        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });

$(function(){
  var perNum = 80;
    $('.fourth.circle').circleProgress({
      value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          gradient:["coral","white"],
            gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:true
                    
        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });

$(function(){
  var perNum = 80;
    $('.fifth.circle').circleProgress({
      value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          gradient:["lightcoral","white"],
            gradientAngle: Math.PI / 2
        },
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:true
                    
        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });