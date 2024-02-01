let tl = gsap.timeline();
tl

    .from("#min-count", {
        duration:1,
        opacity:0,
        onStart:function(){
            $('#min-count').textillate({
                in: {
                     effect: 'fadeInUp' ,
                    callback:function(){
                        $('#min-count').textillate('out');
                    }
                },
                out: {effect:'fadeOutUp'}
            });
        }
    })
    .from("#mid-count", {
        
        duration:1,
        opacity:0,
        onStart:function(){
            $('#mid-count').textillate({
                in: {
                     effect: 'fadeInUp' ,
                    callback:function(){
                        $('#mid-count').textillate('out');
                    }
                },
                out: {effect:'fadeOutUp'}
            });
        }
    })
    .from("#max-count", {
        duration:1,
        opacity:0,
        onStart:function(){
            $('#max-count').textillate({
                in: {
                     effect: 'fadeInUp' 
                  
                }
                
            });
        }
    })
    .to("#top-screen",{
        y:"-100%",
        duration:1,
        ease:Power1.easeInOut,
    })
