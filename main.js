let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstcopy = $images.eq(0).clone(true)
let $lastcopy = $images.eq($images.length - 1).clone(true)

$slides.append($firstcopy)
$slides.prepend($lastcopy)
$slides.css({transform:'translateX(-920px)'})

let current = 0

$buttons.eq(0).on('click',function(){
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
    
    $slides.css({transform:'translateX(-1840px)'})
    current = 1
})

$buttons.eq(2).on('click',function(){
    
    $slides.css({transform:'translateX(-2760px)'})
    current = 2
})

$buttons.eq(3).on('click',function(){
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

