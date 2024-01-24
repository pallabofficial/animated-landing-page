const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let sequence = gsap.timeline();

sequence
    .from("#min-count", {
      
        
        onStart: function () {
            $('#min-count').textillate({
                in: {
                    effect: 'fadeInUp',
                     callback: function () {
                         $('#min-count').textillate('out');
                     }
                },
                out: { effect: 'fadeOutUp' },
            });
        }
    })

    .from("#mid-count", {
        delay:0.5,
        
        opacity: 0,
        onStart: function () {
            $('#mid-count').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#mid-count').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' },
            });
        }
    })

    .from("#max-count", {
        delay:0.5,
        
        opacity: 0,
        onStart: function () {
            $('#max-count').textillate({
                in: {
                    effect: 'fadeInUp',
                   
                },
                out: { effect: 'fadeOutUp' },
            });
        }
    })
    .to("#top-screen", {
        top: "-100%",
        delay:0.5,
        duration:2,
        ease:"Power4.easeOut",

    })


