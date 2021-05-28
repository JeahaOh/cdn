// 오른쪽 공백 제거
function Rtrim( str ) {
	var src = new String(str);
	var tmp = new String();
	var i,lastnum, len = src.length;
	for(i = len;i >= 0;i--) {
		tmp = src.substring(i,i-1);
		if (tmp != ' ' ) {
			lastnum = i;
			break;
		}
	}
	tmp = src.substring(0,lastnum);
	return tmp;
}

// 왼쪽 공백 제거
function  Ltrim( str ) {
	var src = new String( str );
	var tmp = new String();
	var i,firstnum, len = src.length;
	for(i = 0;i < len ;i++) {
		tmp = src.substring(i,i+1);
		if (tmp != ' ' ) {
			firstnum = i;
			break;
		}
	}
	tmp = src.substring(firstnum);
	return tmp;
}

// 양쪽 공백 제거
function Trim( str ) {
	var src = new String(str);
	var tmp = new String();
	tmp = Ltrim(Rtrim(str));
	return tmp;
}

// 날짜 체크
function isYYYYMMDD(y, m, d) { 
	switch (m) { 
	case 2: 
		if (d > 29) return false; 
		if (d == 29)
			if ((y % 4 != 0) || (y % 100 == 0) && (y % 400 != 0)) return false; 
		break; 
	case 4: 
	case 6: 
	case 9: 
	case 11: 
		if (d == 31) return false; 
	} 
	return true; 
} 

// 숫자유무
function isNumeric(s) { 
	for (i=0; i<s.length; i++) { 
		c = s.substr(i, 1); 
		if (c < "0" || c > "9") return false; 
	} 
	return true; 
}

function fn_isRadioChecked( frm, fieldNm) {
	var flag = false;
	for( var LoopI=0; LoopI<frm[fieldNm].length; LoopI++ ) {
		if( frm[fieldNm][LoopI].checked == true ) {
			flag = true;
			break;
		}
	}
	return flag;
}

function fn_setFocus( frm, fieldNm ) {
	frm[fieldNm].focus();
}

function fn_getMessage( fieldType, label ) {
	var msg = "";
	if( fieldType == "SELECT" ) {
		msg = label + "(을)를 선택 해주세요.";
	} else if( fieldType == "INPUT" ) {
		msg = label + "(을)를 입력 해주세요.";
	}
	
	return msg;
}

function fn_isEmpty( frm, fieldNm ) {
	return ( !Trim(frm[fieldNm].value) ) ? true : false;
}


function goJusoPopup(){
	// 주소검색을 수행할 팝업 페이지를 호출합니다.
	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
	var pop = window.open("/common/juso/jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
}


//기존(게시물)에 적용되어있던 스크립트
function show1() {
	$('#show1').css("display","block");
}
function show2() {
	$('#show2').css("display","block");
}
function show3() {
	$('#show3').css("display","block");
}
function show4() {
	$('#show4').css("display","block");
}
function show5() {
	$('#show5').css("display","block");
}
function show6() {
	$('#show6').css("display","block");
}
function show7() {
	$('#show7').css("display","block");
}
function hide1() {
	$('#show1').css("display","none");
}
function hide2() {
	$('#show2').css("display","none");
}
function hide3() {
	$('#show3').css("display","none");
}
function hide4() {
	$('#show4').css("display","none");
}
function hide5() {
	$('#show5').css("display","none");
}
function hide6() {
	$('#show6').css("display","none");
}
function hide7() {
	$('#show7').css("display","none");
}