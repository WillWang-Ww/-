let $buttons = $('#buttonWrapper > .button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstcopy = $images.eq(0).clone(true)
let $lastcopy = $images.eq($images.length - 1).clone(true)
let $traingle = $('.triangle')

$slides.append($firstcopy)
$slides.prepend($lastcopy)
$slides.css({transform:'translateX(-920px)'})

let current = 0

$buttons.eq(0).on('click',function(){
    $buttons.eq(1).removeClass('active')
    $buttons.eq(2).removeClass('active')
    $buttons.eq(3).removeClass('active')
    $buttons.eq(0).removeClass('hover')
    $buttons.eq(0).addClass('active')
    $traingle.css({display:'none'})
    $traingle.eq(0).css({display:'inline-block'})
    if(current === 3){
        $slides.css({transform:'translateX(-4600px)'})
            .one('transitionend',function(){
                $slides.hide()
                $slides.offset()
                $slides.css({transform:'translateX(-920px)'})
                $slides.show()
            })
    }else{
        $slides.css({transform:'translateX(-920px)'})
    }
    current = 0
})

$buttons.eq(1).on('click',function(){
    $buttons.eq(0).removeClass('active')
    $buttons.eq(2).removeClass('active')
    $buttons.eq(3).removeClass('active')
    $buttons.eq(1).removeClass('hover')
    $buttons.eq(1).addClass('active')
    $traingle.css({display:'none'})
    $traingle.eq(1).css({display:'inline-block'})
    $slides.css({transform:'translateX(-1840px)'})
    current = 1
})

$buttons.eq(2).on('click',function(){
    $buttons.eq(1).removeClass('active')
    $buttons.eq(0).removeClass('active')
    $buttons.eq(3).removeClass('active')
    $buttons.eq(2).removeClass('hover')
    $buttons.eq(2).addClass('active')
    $traingle.css({display:'none'})
    $traingle.eq(2).css({display:'inline-block'})
    $slides.css({transform:'translateX(-2760px)'})
    current = 2
})

$buttons.eq(3).on('click',function(){
    $buttons.eq(1).removeClass('active')
    $buttons.eq(2).removeClass('active')
    $buttons.eq(0).removeClass('active')
    $buttons.eq(3).removeClass('hover')
    $buttons.eq(3).addClass('active')
    $traingle.css({display:'none'})
    $traingle.eq(3).css({display:'inline-block'})
    if(current === 0){
        $slides.css({transform:'translateX(0px)'})
            .one('transitionend',function(){
                $slides.hide()
                .offset()
                $slides.css({transform:'translateX(-3680px)'})
                .show()
            })
    }else{
        $slides.css({transform:'translateX(-3680px)'})
    }
    current = 3
})

$buttons.eq(0).mouseenter(function(){
    $buttons.eq(0).addClass('hover')
})
$buttons.eq(0).mouseleave(function(){
    $buttons.eq(0).removeClass('hover')
})
$buttons.eq(1).mouseenter(function(){
    $buttons.eq(1).addClass('hover')
})
$buttons.eq(1).mouseleave(function(){
    $buttons.eq(1).removeClass('hover')
})
$buttons.eq(2).mouseenter(function(){
    $buttons.eq(2).addClass('hover')
})
$buttons.eq(2).mouseleave(function(){
    $buttons.eq(2).removeClass('hover')
})
$buttons.eq(3).mouseenter(function(){
    $buttons.eq(3).addClass('hover')
})
$buttons.eq(3).mouseleave(function(){
    $buttons.eq(3).removeClass('hover')
})