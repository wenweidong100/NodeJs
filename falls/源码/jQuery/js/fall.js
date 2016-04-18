(function(){
	function fallInfo(elName){
		var number = document.body.clientWidth / $(elName).get(0).offsetWidth;
	}

	function mainFun(){
		var clientWidth = document.body.clientWidth;
		var signWidth = $('.pin').get(0).offsetWidth;
		var number = Math.floor(clientWidth / signWidth);
		console.log(number)
		$('#main').css({
			'width':signWidth*number,
			'margin':'0 auto'
		});
		var signArr = $('.pin');
		var pinHArr=[];
		for(var i=0;i< signArr.length;i++){
			if(i<number){
				pinHArr[i] = $(signArr[i]).get(0).offsetHeight;
				$(signArr[i]).css({
					'position':'static'
				});
			}else{
				var minH = Math.min.apply(null,pinHArr);
				var minIndex = pinHArr.indexOf(minH);
				$(signArr[i]).css({
					'position':'absolute',
					'top':minH+'px',
					'left':$('.pin').eq(minIndex).get(0).offsetLeft+'px'
				});
				pinHArr[minIndex]+=$(signArr[i]).get(0).offsetHeight;
			}
		}
	}

	window.onresize=function(){
		mainFun()
	}

	window.onload = function(){
		mainFun()
	}
})()