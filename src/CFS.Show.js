var show = {
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
		oCanvas.style.top = show.info.top + 'px';
		oCanvas.style.left = show.info.left + 'px';
		oCanvas.style.zIndex = show.info.zIndex;
		oCanvas.width = win_Width;
		oCanvas.height = win_Height;
		document.body.appendChild(oCanvas);
		//创建雪
		var arrShow = [];
		for(var i = 0; i < show.info.number; i++){
			arrShow.push({
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
				var _showObj = arrShow[i];
				gd.moveTo(_showObj.x, _showObj.y);
				gd.arc(_showObj.x, _showObj.y, _showObj.r, 0, Math.PI * 2, 0);
			}
			gd.fill();
			speed += 0.01;
			//处理雪下落
			for(var i = 0; i < 70; i++){
				var _showObj = arrShow[i];
				_showObj.y += Math.cos(speed + _showObj.n) + 1 + _showObj.r / 2;
				_showObj.x += Math.sin(speed) * 2;
				if(_showObj.x > win_Width + 5 || _showObj.x < -5 || _showObj.y > win_Height){
					arrShow[i] = i % 3 > 0 ? {x : Math.random() * win_Width, y : -10, r : _showObj.r, n : _showObj.n} : Math.sin(speed) > 0 ? {x : -5, y : Math.random() * win_Height, r : _showObj.r, n : _showObj.n} : {x : win_Width + 5, y : Math.random() * win_Height, r : _showObj.r, n : _showObj.n};
				}
			}
		},60);
	}
};