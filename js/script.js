$(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 20) {
                    $('.navbar').css("box-shadow", "1px 1px 5px #495057");
                } else {
                    $('.navbar').css('box-shadow', 'none');
                }
            });
            $('.navbar-toggler').click(function() {
                // Change menu icon
                $('navbar-toggler-icon').toggle('fast');
                $('bx bx-x').toggle('fast');
                // navbar style for small devices
                $('.brand-logo').toggleClass('custom-logo');
                $('.main-menu').toggleClass('custom-collapse');
            });