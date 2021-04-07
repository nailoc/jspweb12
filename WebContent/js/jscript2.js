//alert(1111);
$(document).ready(function(){
	
	//sub 메뉴 숨기기
	$("ul.sub").hide();
	
	//menu li 에 마우스 올라간 경우
	$("ul.menu li").hover(
			function(){ // over
				// 다중 선택자 (자기자신선택과 자신의 하위에 선택)
				$("ul.sub:not(:animated)", this).slideDown("fast");
			},
			
			function(){ // out
				$("ul.sub", this).slideUp("fast");
			}
	);
	
	showslide(slideIndex);
	
});

slideIndex=1;
function showslide(n) {
	
	slide = $("div.myslide"); // array
	for(i=0; i<slide.length; i++) {
		slide.eq(i).css("display","none");
	}
	if(n>slide.length) slideIndex=1; // 3개가 넘으면 처음
	if(n<1) slideIndex=slide.length; // 처음보다 작으면 끝
	slide.eq(slideIndex-1).css("display","block");
}

function plusslide(n) {
	showslide(slideIndex+=n);
}