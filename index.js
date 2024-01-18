let sequence = gsap.timeline();

sequence
    .from("#min-count", {
        // delay:0.5,
        // duration: 1,
        
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
        // duration: 1,
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
        // duration: 2,
        opacity: 0,
        onStart: function () {
            $('#max-count').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('#max-count').textillate('out');
                    }
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


