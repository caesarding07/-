/*
	Function:start
	Author:dingst
	BuildDate:2019-12-25
	Version:3.0
*/
var choice=["《杜甫&李白的故事》","《相思》","《梁祝》","《赠汪伦》","--关于诗介--"];
var index=0;//当前剧本序号
var last=4;//最大剧本数字
var size="72";
function start() {
	console.log("开始选择界导入加载成功");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.save();
	ctx.drawImage(backgroundImg4,0,0,canvas.width,canvas.height);
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";
	ctx.font="48px hyxuejunF";
	ctx.fillText("选择", canvas.width/2, canvas.height/2);
	ctx.fillText(choice[index], canvas.width/2, canvas.height/2+80);
	ctx.fill();
	ctx.restore();
	var p_turnRight={x:canvas.width/2+100,y:canvas.height/2+80};
	var	p_turnLeft={x:canvas.width/2-160,y:canvas.height/2+80};
	var p_go={x:canvas.width-80,y:canvas.height-110}
	//var p_back={x:canvas.width-100,y:canvas.height-120};
	b_turnRight(p_turnRight.x,p_turnRight.y);
	b_turnLeft(p_turnLeft.x,p_turnLeft.y);
	b_go(p_go);
	canvas.onmousedown=function () {
		var BUTTON_SIZE = 64;//按钮的大小
		var point={x:0,y:0};
  		point.x=event.clientX;
		point.y=event.clientY;
  		point=windowToCanvas(canvas,point);
		/*********实现按钮功能**********/
  		if (point.x>p_turnRight.x&&point.x<p_turnRight.x+BUTTON_SIZE)
			if (point.y>p_turnRight.y&&point.y<p_turnRight.y+BUTTON_SIZE)
				index++;
		if (point.x>p_turnLeft.x&&point.x<p_turnLeft.x+BUTTON_SIZE)
			if (point.y>p_turnLeft.y&&point.y<p_turnLeft.y+BUTTON_SIZE)
				index--;
		if (index<0)	index=(choice.length-1);
		if (index>(choice.length-1))	index=0;
		start();
		if (point.x>p_go.x&&point.x<p_go.x+BUTTON_SIZE)
			if (point.y>p_go.y&&point.y<p_go.y+BUTTON_SIZE)
			prompts();//弹窗提示
			console.log("请求弹窗");
		}
	}
	// canvas.onmousemove=function () {
	// 	var BUTTON_SIZE = 64;//按钮的大小
	// 	var point={x:0,y:0};
 //  		point.x=event.clientX;
	// 	point.y=event.clientY;
 //  		point=windowToCanvas(canvas,point);
	// 	********实现按钮功能*********
 //  		if (point.x>(canvas.width/2-100)&&point.x<(canvas.width/2+100)){
	// 		if (point.y>canvas.height/2&&point.y<(canvas.height/2+25))
	// 			drawTitle(85);
 //  		}
 //  		else drawTitle(58);
	//}
// function drawTitle(size) {//绘副本
// 	ctx.save();
// 	ctx.clearRect(0, canvas.height/2, canvas.width, 80);
// 	ctx.textAlign = "center";
// 	ctx.textBaseline = "bottom";
// 	ctx.font=size+"px blackboard";
// 	ctx.fillText(choice[index], canvas.width/2, canvas.height/2+80);
// 	ctx.fill();
// 	ctx.restore();
// }//3.0--