$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    $('#scrollDown').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });


    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    (function ($) {
        $.fn.timeline = function () {
            var selectors = {
                id: $(this),
                item: $(this).find(".timeline-item"),
                activeClass: "timeline-item--active",
                img: ".timeline__img"
            };
            selectors.item.eq(0).addClass(selectors.activeClass);
            selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

            var itemLength = selectors.item.length;
            $(window).scroll(function () {
                var max, min;
                var pos = $(this).scrollTop();
                selectors.item.each(function (i) {
                    min = $(this).offset().top;
                    max = ($(this).height() + $(this).offset().top);
                    var that = $(this)
                    if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                        selectors.item.removeClass(selectors.activeClass);
                        selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
                        selectors.item.last().addClass(selectors.activeClass)
                    } else if (pos <= max - 40 && pos >= min) {
                        selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
                        selectors.item.removeClass(selectors.activeClass);
                        $(this).addClass(selectors.activeClass);
                    }

                });
            });

        }
    })(jQuery);

    $("#timeline-1").timeline();




    var $lsh = $('#section3');

    $lsh.waypoint(function () {
        (function ($) {

            $.fn.letterDrop = function () {
                // Chainability
                return this.each(function () {

                    var obj = $(this);

                    var drop = {
                        arr: obj.text().split(''),

                        range: {
                            min: 1,
                            max: 9
                        },

                        styles: function () {
                            var dropDelays = '\n',
                                addCSS;

                            for (i = this.range.min; i <= this.range.max; i++) {
                                dropDelays += '.ld' + i + ' { animation-delay: 0.' + i + 's; }\n';
                            }

                            addCSS = $('<style>' + dropDelays + '</style>');
                            $('head').append(addCSS);
                        },

                        main: function () {
                            var dp = 0;
                            obj.text('');

                            $.each(this.arr, function (index, value) {

                                dp = dp.randomInt(drop.range.min, drop.range.max);

                                if (value === ' ')
                                    value = '&nbsp';

                                obj.append('<span class="letterDrop ld' + dp + '">' + value + '</span>');

                            });

                        }
                    };

                    Number.prototype.randomInt = function (min, max) {
                        return Math.floor(Math.random() * (max - min + 1) + min);
                    };


                    // Create styles
                    drop.styles();


                    // Initialise
                    drop.main();
                });

            };

        }(jQuery));


        // USAGE
        $('.lsh').letterDrop();



    }, {
        offset: '70%'
    });

    var $myExp1 = $('#myExp1');
    var $myExp2 = $('#myExp2');
    var $exp = $('#exp');

    $exp.waypoint(function () {

        $exp.addClass('expTyping');
    }, {
        offset: '50%'
    });

    $myExp1.waypoint(function () {

        $myExp1.fadeIn(6000);
    }, {
        offset: '20%'
    });

    $myExp2.waypoint(function () {

        $myExp2.fadeIn(6000);


    }, {
        offset: '60%'
    });

    var $strong = $('#strongS');
    $strong.waypoint(function () {

        $strong.addClass('strongFlip');
    }, {
        offset: '40%'
    });

    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4, 6, 8, 10];

    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function () {

        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 3000, function () {
            $(this).remove()
        });


    }, 350);



});


var app = angular.module("myApp", ["ngRoute"]);
app.controller('mainController', function ($scope, $http) {

});
