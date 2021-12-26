$(document).ready(function(){
    var limitSize = 768;
    // 모바일기기 사이즈

    var devWidth = $("body").width();
    $(window).resize(function(){
        devWidth = $("body").width();
    });
    // 화면 사이즈 바뀔 때마다 새로 저장

    $(".banner_close").click(function(){
        $(".header_banner").hide();
    });
    // 배너 닫기 

    $(".mm").bind("mouseover focus", function(){
        if(devWidth < limitSize) return false;
        $(".main_menu .sub_menu").hide();
        $(this).parent().next().slideDown(200);
    });
    $(".main_menu>li").mouseleave(function(){
        if(devWidth < limitSize) return false;
        $(".main_menu .sub_menu").stop().slideUp(200);
    });
    // 메인메뉴 및 서브메뉴 조작(pc, tablet)

    $(".all_list").click(function(){
        $(".mobile_menu").stop().slideToggle(400);
    });
    $(".all_list_close").click(function(){
        $(".mobile_menu").stop().slideUp(400);
    });
    // 메인메뉴 및 서브메뉴 조작(mobile)

    $(function() {
        var count = $('.hot_search_bar li').length;
        var height = $('.hot_search_bar li').height();
    
        function step(index) {
            $('.hot_search_bar ul').delay(2000).animate({
                top: -height * index,
            }, 500, function() {
                step((index + 1) % count);
            });
        }
    
        step(1);
    });
    // 인기검색어 순위 

    $(".hot_search_bar").bind("mouseover focus", function(){
        $(".hot_search_all").css("display","block");
    });
    
    $(".hot_search_all").mouseleave(function(){
        $(".hot_search_all").css("display","none");
    });
    // 인기검색어 전체 박스

    $(".news_bar_list>li:nth-child(2)").click(function(e){
        e.preventDefault();
        $(".news_bar_list>li").css("background-color","white");
        // 우선 모든 탭 배경색 초기화
        $(".news_bar_list>li:nth-child(2)").css("background-color","rgb(228, 228, 228)");
        // 선택된 탭만 배경색 주기
        $(".news_con_1, .news_con_2, .news_con_3, .news_con_4, .news_con_5").hide();
        // 우선 컨텐츠 전부 숨기고
        $(".news_con_1").show();
        // 보여주고 싶은 것만 보여주기
        $(".news_con_1").css("display","flex");
        // 보이는 컨텐츠에 display flex 부여
    });

    $(".news_bar_list>li:nth-child(3)").click(function(e){
        e.preventDefault();
        $(".news_con_1, .news_con_2, .news_con_3, .news_con_4, .news_con_5").hide();
        $(".news_bar_list>li").css("background-color","white");
        $(".news_bar_list>li:nth-child(3)").css("background-color","rgb(228, 228, 228)");
        $(".news_con_2").show();
        $(".news_con_2").css("display","flex");
    });

    $(".news_bar_list>li:nth-child(4)").click(function(e){
        e.preventDefault();
        $(".news_con_1, .news_con_2, .news_con_3, .news_con_4, .news_con_5").hide();
        $(".news_bar_list>li").css("background-color","white");
        $(".news_bar_list>li:nth-child(4)").css("background-color","rgb(228, 228, 228)");
        $(".news_con_3").show();
        $(".news_con_3").css("display","flex");
    });

    $(".news_bar_list>li:nth-child(5)").click(function(e){
        e.preventDefault();
        $(".news_con_1, .news_con_2, .news_con_3, .news_con_4, .news_con_5").hide();
        $(".news_bar_list>li").css("background-color","white");
        $(".news_bar_list>li:nth-child(5)").css("background-color","rgb(228, 228, 228)");
        $(".news_con_4").show();
        $(".news_con_4").css("display","flex");
    });

    $(".news_bar_list>li:nth-child(6)").click(function(e){
        e.preventDefault();
        $(".news_con_1, .news_con_2, .news_con_3, .news_con_4, .news_con_5").hide();
        $(".news_bar_list>li").css("background-color","white");
        $(".news_bar_list>li:nth-child(6)").css("background-color","rgb(228, 228, 228)");
        $(".news_con_5").show();
        $(".news_con_5").css("display","flex");
    });
    // 게임소식 탭 제어

    var rank_num = 0;

    $(".rank_prev").click(function(){
        rank_num--;
        if(rank_num < 0){
            rank_num = 2;
        }
        $(".ranking_container>div").css("display","none");
        $(".ranking_container>div").eq(rank_num).css("display","block");
    });
    $(".rank_next").click(function(){
        rank_num++;
        if(rank_num > 2){
            rank_num = 0;
        }
        $(".ranking_container>div").css("display","none");
        $(".ranking_container>div").eq(rank_num).css("display","block");
    });
    // 모바일 게임 순위 제어

    $(".article_bar_list>li:nth-child(2)").click(function(e){
        e.preventDefault();
        $(".article_con_1, .article_con_2, .article_con_3").hide();
        $(".article_bar_list>li").css("background-color","white");
        $(".article_bar_list>li:nth-child(2)").css("background-color","rgb(228, 228, 228)");
        $(".article_con_1").show();
        $(".article_con_1").css("display","flex");
    });
    
    $(".article_bar_list>li:nth-child(3)").click(function(e){
        e.preventDefault();
        $(".article_con_1, .article_con_2, .article_con_3").hide();
        $(".article_bar_list>li").css("background-color","white");
        $(".article_bar_list>li:nth-child(3)").css("background-color","rgb(228, 228, 228)");
        $(".article_con_2").show();
        $(".article_con_2").css("display","flex");
    });
    
    $(".article_bar_list>li:nth-child(4)").click(function(e){
        e.preventDefault();
        $(".article_con_1, .article_con_2, .article_con_3").hide();
        $(".article_bar_list>li").css("background-color","white");
        $(".article_bar_list>li:nth-child(4)").css("background-color","rgb(228, 228, 228)");
        $(".article_con_3").show();
        $(".article_con_3").css("display","flex");
    });
    // 뉴스 탭 제어


    /*window.open("pop_up.html","KartRiderRush","width=400px , height=289px , scrollbars=no , toolbar=no , location=no, left=70px, top=90px");*/
    // 팝업창 

    /*window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var $html = $("html");
 
    var page = 1;
 
    var lastPage = $(".section").length;
 
    $html.animate({scrollTop:0},10);

    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * 500
     
       $html.animate({scrollTop : posTop});
     
    });*/
});






