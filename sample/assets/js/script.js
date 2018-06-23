/* Script */

$(function () {

    // HighLight //
    $("#newPlan").owlCarousel({
        pagination: true,
        items: 1,
        itemsCustom: [
            [480, 1],
            [740, 2]
      ]
    });
    var _hl = $("#newPlan").data('owlCarousel');
    $(".owl-prev").click(function(){
        _hl.prev();
    });
     $(".owl-next").click(function(){
        _hl.next();
    });
    $("#new5").find(".obj-01").find("a").each(function(i){
        var _index = i;
        $(this).click(function(e){
            e.preventDefault();
            _hl.goTo(i); 
        })
    })
    
    // Category //
    $("#box4-mobile").html($("#box4-desktop").html().replace(/col\-sm\-6 col\-md\-4/ig,'item'));
    var _m = $("#box4-mobile");
    _m.owlCarousel({
        items: 1,
        itemsCustom: [
            [480, 1],
            [740, 2]
      ]
    });
    
    
    // Header //
    $(function(){
        var _vH = window.innerHeight;

        var _window = $(window),
            _bound = $(".header"),
            _sticky = $(".sticky"),
            _allow = true;

        function moveScroll(){
            var _pY = _window.scrollTop(),
                _top = _bound.offset().top;

            if(_pY>=_top){
                if(_allow){
                    _sticky.addClass("fixed");
                    _allow = false;
                }
            }else{
                if(!_allow){
                    _sticky.removeClass("fixed");
                    _allow = true;
                }   
            }
        }

        moveScroll();
        $(window).scroll(moveScroll).resize(function(){
            _vH = window.innerHeight;
            moveScroll();
        });
    });
    
    // Nav //
    $(".header").find("a").click(function(e){
        var _link = $(this).attr('href');
        if(_link.charAt(0)=="#"){
            e.preventDefault();
            var pY = $(_link).offset().top - 50;
            $('html,body').animate({ scrollTop:pY },400,"easeInOutSine");
        }
    });
    $(".mobileSub").find("a").click(function(e){
        var _link = $(this).attr('href');
        if(_link.charAt(0)=="#"){
            e.preventDefault();
            var pY = $(_link).offset().top - 50;
            $('html,body').animate({ scrollTop:pY },400,"easeInOutSine");
            _menu.removeClass("open");
        }
    });
    var _menu = $(".mobileMenu");
    $(".fx-m").click(function(e){
        e.preventDefault();
        _menu.toggleClass("open");
    })
});


// ----- For Ad Only ----- //
$(function () {
    
    $(".px-adframe").each(function (i) {
        var _fid = 'adFrame' + i,
            _str = '<iframe id="' + _fid + '" src="' + $(this).data('adsrc') + '" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" width="1" height="1"></iframe>';

        $(this)
            .data('frameid', 'adFrame' + i)
            .bind('pxPopupAdShow', function () {
                $(this).find(".px-pload").append(_str)
            })
            .bind('pxPopupAdClose', function () {
                $("#" + _fid).remove();
            })
            .find(".close-popup").click(function () {
                $(this).closest(".popup").trigger('pxPopupAdClose');
            })
    });
})