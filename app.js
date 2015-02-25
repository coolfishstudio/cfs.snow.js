var http = require('http'),
	fs = require('fs'),
	contentDisposition = require('content-disposition'),
	destroy = require('destroy'),
	onFinished = require('on-finished');

var port = 9238;//端口号
var filePath = '/CFS.Snow.min.js';//下载路径

/*
	这是一个简单的服务器 
	主要作用是 启动这个静态文件
	默认跳转也面 只有首页
*/
var server = http.createServer(function(req, res){
	if('GET' == req.method){//进入游戏页
		if('/' == req.url){
			serve(__dirname + '/index.html', 'text/html');
		}else if('/src/' == req.url.substr(0,5)){
			serve(__dirname + req.url, 'text/javascript');
		}else if('/download/CFS.Snow.min.js' == req.url){
			res.setHeader('Content-Type', 'text/javascript')
			res.setHeader('Content-Disposition', contentDisposition(__dirname + filePath));
			var stream = fs.createReadStream(__dirname + filePath);
			stream.pipe(res);
			onFinished(res, function(err){
				destroy(stream);
			})
		}
	}else{
		res.writeHead(404);
		res.end('Not found');
	}
	function serve(path, type){
		res.writeHead(200, {'Content-Type': type});
		fs.createReadStream(path).pipe(res);
	}
	function getType(url){
		return url.substring(url.lastIndexOf('.'), url.length);
	}
});
server.listen(port, function(){
	console.log('Express server listening on port ' + port);
});