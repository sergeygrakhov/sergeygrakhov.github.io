
$(window).load(function(){
    $(document).ready(function(){
        $(function() {
            $('.jcarousel').jcarousel();

            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();
        });
    });
});
