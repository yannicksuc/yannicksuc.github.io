// Y axis scroll speed
var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.back').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('top', '-100 ' + Math.round((height - pos) * velocity) + 'px');
    }); 
};

$(window).bind('scroll', update);