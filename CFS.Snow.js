var snow = {
	info : {
		top : 0,
		left : 0,
		zIndex : 500,
		number : 70
	},
	down : function(){
		//获取页面的大小
		var win_Width = window.innerWidth;
		var win_Height = window.innerHeight;
		//创建场景
		var oCanvas = document.createElement('canvas');
		oCanvas.style.position = 'fixed';
		oCanvas.style.pointerEvents = 'none';
		oCanvas.style.top = snow.info.top + 'px';
		oCanvas.style.left = snow.info.left + 'px';
		oCanvas.style.zIndex = snow.info.zIndex;
		oCanvas.width = win_Width;
		oCanvas.height = win_Height;
		document.body.appendChild(oCanvas);
		//创建雪
		var arrSnow = [];
		for(var i = 0; i < snow.info.number; i++){
			arrSnow.push({
				x : Math.random() * win_Width,//雪的横坐标
				y : Math.random() * win_Height,//雪的纵坐标
				r : Math.random() * 4 + 1,//雪的半径
				n : Math.random() * 70
			});
		}
		var gd = oCanvas.getContext('2d');//用来绘制元素
		var speed = 0;
		//处理动画效果
		setInterval(function(){
			gd.clearRect(0, 0, win_Width, win_Height);
			gd.fillStyle = 'rgba(255, 255, 255, 0.6)';
			gd.shadowBlur = 5;
			gd.shadowColor = 'rgba(255, 255, 255, 0.9)';
			gd.beginPath();
			//绘制雪
			for(var i = 0; i < 70; i++){
				var _snowObj = arrSnow[i];
				gd.moveTo(_snowObj.x, _snowObj.y);
				gd.arc(_snowObj.x, _snowObj.y, _snowObj.r, 0, Math.PI * 2, 0);
			}
			gd.fill();
			speed += 0.01;
			//处理雪下落
			for(var i = 0; i < 70; i++){
				var _snowObj = arrSnow[i];
				_snowObj.y += Math.cos(speed + _snowObj.n) + _snowObj.r / 2;
				_snowObj.x += Math.sin(speed) * 2;
				if(_snowObj.x > win_Width + 5 || _snowObj.x < -5 || _snowObj.y > win_Height){
					arrSnow[i] = i % 3 > 0 ? {x : Math.random() * win_Width, y : -10, r : _snowObj.r, n : _snowObj.n} : Math.sin(speed) > 0 ? {x : -5, y : Math.random() * win_Height, r : _snowObj.r, n : _snowObj.n} : {x : win_Width + 5, y : Math.random() * win_Height, r : _snowObj.r, n : _snowObj.n};
				}
			}
		},15);
	}
};