/*
	Function:loading
	Author:dingst
	BuildDate:2019-12-9
	Version:1.0
*/
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var circle={x:canvas.width/2,y:canvas.height/2-65,r:40,sAngle:0,eAngle:Math.PI*3/2},
	line={sx:0,sy:-40,length:10};
var rAngle=0;

function loading(isload) {//1.0
	ctx.save();
	ctx.translate(circle.x,circle.y);//translate() 方法重新映射画布上的 (0,0) 位置
	ctx.rotate(rAngle);//旋转
	ctx.clearRect(-circle.r-12,-circle.r-12,2*circle.r+12,2*circle.r+12);
	ctx.beginPath();
	ctx.arc(0,0,circle.r, circle.sAngle, circle.eAngle);//draw round
	ctx.moveTo(line.sx, line.sy);
	ctx.lineTo(line.sx-line.length, line.sy-line.length);
	ctx.moveTo(line.sx, line.sy);
	ctx.lineTo(line.sx-line.length, line.sy+line.length);//draw array
	ctx.lineWidth = 9;
	ctx.lineJion = 'miter';//设置相交线的拐点样式
	ctx.lineCap = "round";
	ctx.stroke();
	ctx.restore();
	rAngle += Math.PI/12;
	// if (rAngle==Math.PI*2) {
	//  	rAngle=0;}
	//console.log(rAngle);
}

function stopLoading() {//停止加载
	clearInterval(id);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//then 方法
// function transition() {
// 	var over = new Promise(
// 		function () {
// 		var poems_Load="正在加载中请稍后...";
// 		var Realm={x:canvas.width/2,y:canvas.height/2,h:30,count:12,fontFamily:"30px Georgia",color:"black"}
// 		id=setInterval(loading,100);
// 		drawText(ctx,canvas,Realm,poems_Load);
// 		setTimeout(stopLoading,time*1000+3000);
// 	});
// 	return over;
// 	
// 	//移除鼠标事件
//	canvas.onmousedown();
// }
	

