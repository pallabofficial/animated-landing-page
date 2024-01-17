let sequence = gsap.timeline();

sequence
    .from("#min-count", {
        delay:0.5,
        duration: 1,
        
        onStart: function () {
            $('#min-count').textillate({
                in: {
                    effect: 'fadeOutUp',
                    // callback: function () {
                    //     $('#min-count').textillate('out');
                    // }
                },
                out: { effect: 'fadeOutUp' },
            });
        }
    })

    .from("#mid-count", {
        duration: 2,
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
        duration: 2,
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
    .add(() => {
        gsap.to("#top-screen", {
            duration: 2,
            top: "-100%",
            ease: "power4.out",
        });
    })

    .set("#center", {  // Set properties of #center after #top-screen is hidden
        display: "block",
        opacity: 1,
    });


