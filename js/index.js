$(document).ready(function() {
    $('.gnb').hover(
        function() {
            $(this).find('.sub_bgbox').stop(true, true).slideDown(500, 'linear').css('visibility', 'visible');
            $(this).find('.sub').stop(true, true).slideDown(500, 'linear').css('visibility', 'visible');
        },
        function() {
            $(this).find('.sub_bgbox').stop(true, true).slideUp(500, 'linear', function() {
                $(this).css('visibility', 'hidden'); // 숨길 때 visibility를 hidden으로 설정
            });
            $(this).find('.sub').stop(true, true).slideUp(500, 'linear', function() {
                $(this).css('visibility', 'hidden'); // 숨길 때 visibility를 hidden으로 설정
            });
        }
    );
    
    var swiper = new Swiper(".mySwiper", 
        {
        slidesPerView: 1,             // 한 번에 하나의 슬라이드만 보이도록 설정
        centeredSlides: true,         // 슬라이드를 중앙에 배치
        spaceBetween: 0,             // 슬라이드 간의 간격 (원하는 값으로 조정)
        loop: true,                   // 무한 루프 설정
        pagination: {
          el: ".swiper-pagination",
          clickable: true,            // 페이지네이션 클릭 가능
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: true,               // 키보드로 슬라이드 제어 가능
      });
   

      let isImage1 = true; // 현재 이미지 상태를 추적하는 변수

document.getElementById('changeImage').addEventListener('click', () => {
    const imageElement = document.getElementById('myImage');
    
    // 이미지 변경
    imageElement.src = isImage1 ? 'img/pep.png' : 'img/pizzas.png';
    
    // 상태 변경
    isImage1 = !isImage1;
});
      
      
});