var slide_num = 1;

function smr_animation() {
  $(".slide_container>div>h2").css(
    "animation",
    "movement 1s ease-in-out forwards"
  );
  $(".slide_container>div>p").css(
    "animation",
    "movement 1.3s ease-in-out forwards"
  );
  $(".slide_container>div>div").css(
    "animation",
    "movement 1.6s ease-in-out forwards"
  );
}
// 슬라이드 텍스트 요소 애니메이션 부여 함수

function slide_select() {
  $(".slide_selector_list>li")
    .eq(slide_num - 1)
    .css("background-color", "rgb(17, 17, 17)");
}
// 슬라이드 항목 선택시 선택한 항목 배경색 변경 함수

function slide_smr() {
  $(".slide_container>div").css("display", "none");
  $(".slide_container>div")
    .eq(slide_num - 1)
    .css("display", "block");
}
// 슬라이드 텍스트 상자 변경 함수

function bullet_select() {
  $(".bullet img").attr("src", "./images/icon/state_out.png");
  $(".bullet img")
    .eq(slide_num - 1)
    .attr("src", "./images/icon/state_over.png");
}
// 슬라이드 표시 그림 변경 함수

$(".next_btn").click(function () {
  slide_num++;
  if (slide_num > 5) {
    slide_num = 1;
  }
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  slide_smr();
  $(".slide_selector_list>li")
    .eq(slide_num - 1)
    .css("background-color", "rgb(17, 17, 17)");
  smr_animation();
  $(".slide_selector_list>li")
    .eq(slide_num - 2)
    .css("background-color", "rgb(47, 47, 47)");
  bullet_select();
});
// 슬라이드 다음 버튼

$(".prev_btn").click(function () {
  slide_num--;
  if (slide_num < 1) {
    slide_num = 5;
  }
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  slide_smr();
  $(".slide_selector_list>li")
    .eq(slide_num - 1)
    .css("background-color", "rgb(17, 17, 17)");
  smr_animation();
  $(".slide_selector_list>li")
    .eq(slide_num - 2)
    .css("background-color", "rgb(47, 47, 47)");
  $(".slide_selector_list>li")
    .eq(slide_num - 3)
    .css("background-color", "rgb(47, 47, 47)");
  $(".slide_selector_list>li")
    .eq(slide_num - 4)
    .css("background-color", "rgb(47, 47, 47)");
  $(".slide_selector_list>li")
    .eq(slide_num - 5)
    .css("background-color", "rgb(47, 47, 47)");
  bullet_select();
});
// 슬라이드 이전 버튼

setInterval(function () {
  slide_num++;
  if (slide_num > 5) {
    slide_num = 1;
  }

  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  slide_smr();
  slide_select();
  smr_animation();
  $(".slide_selector_list>li")
    .eq(slide_num - 2)
    .css("background-color", "rgb(47, 47, 47)");
  bullet_select();
}, 3000);
// 슬라이드 3초마다 넘김

//슬라이드 옆 리스트 항목 제어 시작
$(".slide_selector_list>li:first-child").click(function () {
  slide_num = 1;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
// 슬라이드 옆 리스트 중 첫번째 항목 선택 시
$(".slide_selector_list>li:nth-child(2)").click(function () {
  slide_num = 2;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
// 슬라이드 옆 리스트 중 두번째 항목 선택 시
$(".slide_selector_list>li:nth-child(3)").click(function () {
  slide_num = 3;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
// 슬라이드 옆 리스트 중 세번째 항목 선택 시
$(".slide_selector_list>li:nth-child(4)").click(function () {
  slide_num = 4;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
// 슬라이드 옆 리스트 중 네번째 항목 선택 시
$(".slide_selector_list>li:last-child").click(function () {
  slide_num = 5;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
// 슬라이드 옆 리스트 중 다섯번째 항목 선택 시
// //슬라이드 옆 리스트 항목 제어 끝

$(".bullet_1").click(function () {
  slide_num = 1;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});

$(".bullet_2").click(function () {
  slide_num = 2;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});

$(".bullet_3").click(function () {
  slide_num = 3;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});

$(".bullet_4").click(function () {
  slide_num = 4;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});

$(".bullet_5").click(function () {
  slide_num = 5;
  $(".slide_img").attr("src", "./images/slide/slide_" + slide_num + ".jpg");
  $(".slide_selector_list>li").css("background-color", "rgb(47, 47, 47)");
  slide_smr();
  slide_select();
  smr_animation();
  bullet_select();
});
