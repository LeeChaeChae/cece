$(document).ready(function(){
    //full-menu
    $('.full-menu').unbind('click').click(function(){
        $('.header-bg').css('height','415px');
        $('.header .header-bg').css('z-index','99');
        $('.alarm-wrap').hide();
        $('.all-menu-wrap').show();
        $('.gnb-menu.left').addClass('depth-hide');
    });
    $('.alarm').unbind('click').click(function(){
        $('.header-bg').css('height','315px');
        $('.header .header-bg').css('z-index','99');
        $('.all-menu-wrap').hide();
        $('.alarm-wrap').show();
        $('.gnb-menu.left').addClass('depth-hide');
    });
    $('.header .esc').unbind('click').click(function(){
        $('.header-bg').css('height','0');
        $('.header .header-bg').css('z-index','unset');
        $('.all-menu-wrap').hide();
        $('.alarm-wrap').hide();
        $('.gnb-menu.left').removeClass('depth-hide');
    });

    //scroll-menu & search-bar
    $(window).scroll(function(event){ 
        if($( ".custom-select" ).size()){
            $( ".custom-select" ).selectmenu("close");
        }

        var srcoll_position = $(window).scrollTop(); 
        var car_list_position = $('.search-list-top').offset().top;

        if(srcoll_position >= 10) {
            $('.scroll-header').css('top','0');
            $('.alarm-wrap').addClass('active');
            $('.all-menu-wrap').addClass('active');
            
            if($('.search-bar').size() && srcoll_position >= car_list_position - 100){
                $('.search-bar').addClass('on');
            }else{
                $('.search-bar').removeClass('on');
            }
        }else{
            $('.scroll-header').css('top','-60px');
            $('.alarm-wrap').removeClass('active');
            $('.all-menu-wrap').removeClass('active');
        }
    });
    
    //top btn, bottom btn
    $('.top-btn').unbind('click').click(function(){
        $('html, body').animate({scrollTop:0},0);
    });
    $('.bottom-btn').unbind('click').click(function(){
        $('html, body').animate({scrollTop:$(document).height()},0);
    });

    //quick menu detail
    $('.quick-menu-list > li .quick-icon').unbind('click').click(function() {
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).parent().find('.quick-con').hide();
            $('.quick-menu .fold').css('left','-20px');
        }else{
            if(quick_plug == true){
                $(this).parent().siblings().removeClass('active');
                $(this).parent().addClass('active');
                $(this).parent().siblings().find('.quick-con').hide();
                $(this).parent().find('.quick-con').show();
                $('.quick-menu .fold').css('left','-21px');
            }
        }
    });

    //단지선택 콤보박스 접기
    $('html').click(function(e) { 
        if(!$(e.target).hasClass('select-combo')){
            if(!$(e.target).hasClass('combo-box') && !$(e.target).parents().hasClass('combo-box')) { 
                $('.select-combo').removeClass('on');
            }
        } 
    });

    //아이디/비밀번호 찾기 방법 체크
    $('input:radio[name=method1]').click(function() { 
       if($('.insert-info #phone').is(':checked')) {
            $('.insert-info .phone').show();
            $('.insert-info .email').hide();
       }else{
            $('.insert-info .phone').hide();
            $('.insert-info .email').show();
       }
    });
    $('input:radio[name=method2]').click(function() { 
       if($('.insert-info #phone2').is(':checked')) {
            $('.insert-info .phone2').show();
            $('.insert-info .email2').hide();
       }else{
            $('.insert-info .phone2').hide();
            $('.insert-info .email2').show();
       }
    });

    //dim클릭시 팝업 닫음 
    $('.dim').unbind('click').click(function() {
        $(this).hide();
        $('.layer-pop').hide();
        
        var $body = $(document.body);
        $body.css("overflow", "auto");
        $body.width("auto");
    });

    //검색 좌측메뉴 스크롤
    /*if($('.search-left-menu').length){
        var list_position = $('.list-table.search-list').position().top;
        $('.search-left-menu').css('top',list_position);
        var srcoll_position;
        $(window).scroll(function(event){ 
            srcoll_position = $(window).scrollTop(); 
            if(srcoll_position >= list_position) {
                $('.search-left-menu').css({'position':'fixed','left':'calc(50% - 570px)','top':'100px'});
            }else{
                $('.search-left-menu').css({'position':'absolute','left':'-80px','top':list_position});
            }
        });
    }*/

    //검색결과 간편보기 차량상세 보이기
    $('.search-txt-list > li:not(.tit)').unbind('mouseenter').mouseenter(function() {
        var add_on = $(this);
        add_on.addClass('hover');
        setTimeout(function() {
            if(add_on.hasClass('hover')){
                $('.search-txt-list > li').removeClass('on');
                add_on.addClass('on');
            }
        },400);
    });
    $('.search-txt-list > li:not(.tit)').unbind('mouseleave').mouseleave(function() {
        $('.search-txt-list > li').removeClass('hover');
    });

    //검색결과 리스트형 보기/이미지형 보기
    $('.search-list-view .list-view').unbind('click').click(function() {
        $('.search-list-view button').removeClass('active');
        $(this).addClass('active');
        $('.search-img-list').hide();
        $('.search-txt-list').show();
        $('.search-txt-list-tit').show();
    });
    $('.search-list-view .image-view').unbind('click').click(function() {
        $('.search-list-view button').removeClass('active');
        $(this).addClass('active');
        $('.search-txt-list').hide();
        $('.search-txt-list-tit').hide();
        $('.search-img-list').show();
    });

    //페이지 내에 select가 있는지 체크 후 jQuery ui 함수 호출
    if($( ".custom-select" ).size()){
        $( ".custom-select" ).selectmenu();
    }

    //차량상세페이지에서 이미지 없는 썸네일 클릭시 이벤트막기
    $('.img-list .slick-slide').each(function(){
        if($(this).find('img').attr('src') == ""){
            $(this).off('click');
        }
    });
    
    //로그인 팝업 아이디/비밀번호 모두 입력시 로그인 버튼 활성화
    var loginId, loginPass;
    $('.login-form input').keyup(function(){
        loginId = $('.login-id').val();
        loginPass = $('.login-pass').val();
        if(loginId != "" && loginPass != ""){
            $('.login-form .login-btn').addClass('active');
        }else{
            $('.login-form .login-btn').removeClass('active');
        }
    });

    tab_menu();
    search_tab_menu();
    accordion_menu();
});

//toggle active
function toggle_active(target){
    $(target).toggleClass('active');
}

//quick menu detail close
var quick_plug = true;
function quick_con_close() {
    quick_plug = false;
    $('.quick-menu-list li').removeClass('active');
    $('.quick-menu .fold').css('left','-20px');
    $('.quick-con').hide();
    setTimeout(function(){ quick_plug = true }, 300);
}

//tab menu
function tab_menu() {
    $('.tab-menu li').unbind('click').click(function(){
        var active_menu = $(this).attr('name');
        //검색 상단 영역에서 active된 탭 클릭시 닫히고 함수 끝냄
        if($(this).parent().hasClass('search-bar-list') && $(this).hasClass('active')){
            $(this).removeClass('active');
            $('.tab-con').removeClass('active');
            return false;
        }
        //차량상세 탭 메뉴일 경우
        if($(this).parent().hasClass('pop-tab')){
            $('.tab-menu li').removeClass('active');
            $('.tab-con').removeClass('active');
            $(this).addClass('active');
            $('.tab-con.'+active_menu).addClass('active');
        }else{ //일반 탭메뉴 동작
            $(this).siblings('li').removeClass('active');
            $(this).parent().siblings('.tab-con').removeClass('active');
            $(this).addClass('active');
            $('.tab-con.'+active_menu).addClass('active');
        }
    });
}

//search-tab-menu
function search_tab_menu(){
    $('.search-option-tab li').unbind('click').click(function(){
        var active_menu = $(this).attr('name')

        $('.search-option-tab li').removeClass('active');
        $('.option-tab-con').removeClass('active');
        $(this).addClass('active');
        $('.option-tab-con.'+active_menu).addClass('active');

        if($(this).parents('.search-option-tab').hasClass('row2')){
            $('.search-etc-option').hide();
        }else{
            $('.search-etc-option').show();
        }
    });
}

//quick menu open/close
function quick_menu() {
    if($('.quick-menu').hasClass('active')){
        $('.quick-menu').removeClass('active');
        $('.fold img').attr('src','../images/icon/arrow_left2.png');
    }else{
        $('.quick-menu').addClass('active');
        $('.fold img').attr('src','../images/icon/arrow_right2.png');
    }
}

//latest list open/close
function latest_list(){
    if($('.latest-search span').hasClass('on')){
        $('.latest-search span').removeClass('on');
    }else{
        $('.latest-search span').addClass('on');
    }
}

//drop down menu
function drop_down(target){
    if($(target).hasClass('on')){
        $(target).removeClass('on');
    }else{
        $(target).addClass('on');
    }
}

//option list fold
function option_fold(target){
    if($(target).hasClass('on')){
        $(target).parents('.search-option-select').find('li').css('height','225px');
        $(target).parents('.search-option-select').find('.option-list').css('height','188px');
        $(target).parents('.search-option-select').find('button').removeClass('on');
    }else{
        $(target).parents('.search-option-select').find('li').css('height','420px');
        $(target).parents('.search-option-select').find('.option-list').css('height','383px');
        $(target).parents('.search-option-select').find('button').addClass('on');
    }
}

//search option fold
function option_all_fold(target){
    if($(target).hasClass('on')){
        $('.search-car-option, .search-etc-option').show();
        $(target).text('검색닫기');
        $(target).removeClass('on');
    }else{
        $('.search-car-option, .search-etc-option').hide();
        $(target).text('검색보기');
        $(target).addClass('on');
    }
}

//list photo hide(list ver.)
/*function no_photo(){
    if($('.search-list').hasClass('no-photo')){
        $('.search-list').removeClass('no-photo');
        $('.search-list .tit th:nth-child(2)').text('사진');
        $('.search-list .tit th:nth-child(2)').attr('width','90px');
        $('.search-list td:nth-child(3) .photo').remove();
        $('.view-type').find('img').attr('src','images/icon/ico_list.gif');
    }else{
        $('.search-list').addClass('no-photo');
        $('.search-list .tit th:nth-child(2)').text('관심');
        $('.search-list .tit th:nth-child(2)').attr('width','40px');
        $('.search-list td:nth-child(3)').append('<img class="photo" src="../images/icon/photo.gif" />');
        $('.view-type').find('img').attr('src','images/icon/ico_photo.gif');
    }
}*/

//layer popup open
function pop_open(target){
    var open_pop_name = $(target).attr('name');
    $('.'+open_pop_name).show();
    $('.dim').show();
}

//layer popup close
function pop_close(target){
    $(target).parents('.layer-pop').hide();
    $('.dim').hide();
}

//accordion contents
function accordion(target){
    var accordion_name = $(target).attr('name');
    if($('.accordion.'+accordion_name).hasClass('on')){
        $('.accordion.'+accordion_name).removeClass('on');
    }else{
        $('.accordion').removeClass('on');
        $('.accordion.'+accordion_name).addClass('on');
    }
    if($(target).hasClass('active')){
        $(target).removeClass('active');
    }else{
        $(target).parent().siblings().find('span').removeClass('active');
        $(target).addClass('active');
    }
}

//accordion menu
function accordion_menu(){
    $('.accordion-menu .tit').unbind('click').click(function() {
        if(!($(this).parents().hasClass('inquiry'))){
            $(this).parent().siblings().find('.tit').removeClass('active');
        }
        $(this).toggleClass('active');
    });
}

//search option close
function search_option_close(){
    var active_menu_row,active_menu_name;
    $('.search-option-tab li').each(function() {
        if($(this).hasClass('active')){
            active_menu_row = $(this).parent().hasClass('row2');
            active_menu_name = $(this).attr('name');
        }
    });
    
    if($('.btn-close').hasClass('close')){
        $('.btn-close').removeClass('close');
        $('.btn-close').html('<img src="../images/icon/arrow_up.png">검색영역 접기');
        /*$('.search-option-tab').show();
        $('.search-etc-option').show();
        $('.option-tab-con.'+active_menu).addClass('active');
        $('.search-option-list span').show();
        $('.search-option-list .btn').show();
        $('.search-option-list').css('padding','20px'); */
        $('.option-tab-con.'+active_menu_name).addClass('active');
        if(!active_menu_row){
            $('.search-etc-option').show();
        }
       
    }else{
        $('.btn-close').addClass('close');
        $('.btn-close').html('<img src="../images/icon/arrow_down.png">검색영역 펼치기');
        /*$('.search-option-tab').hide();
        $('.search-etc-option').hide();
        $('.option-tab-con').removeClass('active');
        $('.search-option-list span').hide();
        $('.search-option-list .btn').hide();
        $('.search-option-list').css('padding','0'); */
        $('.option-tab-con.'+active_menu_name).removeClass('active');
        $('.search-etc-option').hide();
    }
}

//inquiry list 펼치기/닫기
function inquiry_list(target){
    var btn_text = $(target).text();
    if(btn_text == '상세보기'){
        $('.accordion-menu.inquiry li > div').addClass('active');
        $(target).text('항목보기');
    }else if(btn_text == '항목보기'){
        $('.accordion-menu.inquiry li > div').removeClass('active');
        $(target).text('상세보기');
    }
}

//guide prev/next
function guide(target){
    //now active img index check
    var active_eq;
    $('.guide-img img').each(function(index) {
        if($(this).hasClass('active')){
            active_eq = $(this).index();
        }
    });
    //img replace
    if(target == 'guide-next'){
        active_eq += 1;
        $('.progress-bar li').removeClass('active');
        $('.progress-bar li').eq(active_eq).addClass('active');
        $('.guide-img img').removeClass('active');
        $('.guide-img img').eq(active_eq).addClass('active');
        $('.guide-con .center button').show();
    }else if(target == 'guide-prev'){
        active_eq -= 1;
        $('.progress-bar li').removeClass('active');
        $('.progress-bar li').eq(active_eq).addClass('active');
        $('.guide-img img').removeClass('active');
        $('.guide-img img').eq(active_eq).addClass('active');
        $('.guide-con .center button').show();
    }
    //prev/next btn show/hide
    if(active_eq == 0){
       $('.guide-con .center button').eq(0).hide();
    }else if(active_eq == 3){
        $('.guide-con .center button').eq(1).hide();
    }
}

//share
function select_method(target){
    $(target).parents('.share-method').find('li').removeClass('first-state');
    $(target).siblings().removeClass('active');
    $(target).addClass('active');
}
function show_hide(target){
    var prev = ($(target).prev());
    prev = $(prev).attr('value');
    if(prev == 'hide'){
        $(target).siblings('.price-modi').removeClass('on');
        $(target).siblings('.price').removeClass('on');
    }else if(prev == 'show'){
        $(target).siblings('.price-modi').addClass('on');
        $(target).siblings('.price').addClass('on');
    }
}
function share_open(target){
    $(target).next('.share-con').addClass('active');
}
function share_close(target){
    $(target).parents('.share-con').removeClass('active');
    $('.share-method li').removeClass('active');
    $('.share-method li').addClass('first-state');
    event.stopPropagation()
}