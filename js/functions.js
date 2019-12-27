/*
	Function:functions
	Author:dingst
	BuildDate:2019-12-24
	Version:1.0
*/
var text={x:canvas.width/2,y:canvas.height/2,count:8,h:15,fontFamily:"32px Georgia",color:"black"}
var content="示例文本";	
var time=100;
var alpha=0;
var alphaf=1;
var word="示例对话";
	person={left:50,top:50};
var p_canvas={x:0,y:0,width:canvas.width,height:canvas.height}
var p_img={x:0,y:0}
var caption={
	text:"滚动字幕示例",x:canvas.width/2,y:80}
var delay=1000;
//var IMG=flower_Case0;
// var captiona={
// 	text:"滚动字幕示例",x:canvas.width/2,y:80}
//多行滚动字幕
function moreRollCaption(caption,IMG,delay) {
	setTimeout(function () {
		rollCaption(caption,IMG);
	},delay);
}
//滚动字幕
function rollCaption(caption,IMG) {
	rollInterval=setInterval(function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(IMG,0,0,canvas.width,canvas.height);
		ctx.save();
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font="32px blackboard"
		ctx.fillText(caption.text, caption.x,caption.y);
		ctx.fill();
		caption.y += 1.5;
		ctx.restore();
		// if (caption.y==100) {//中途异步调用
		// 	//rollCaption(captiona,flower_Case0,rest);
		// }
		if (caption.y==canvas.height-80) {//退出结束调用
			clearInterval(rollInterval);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(IMG,0,0,canvas.width,canvas.height);// body...
		}
	},50);
}
//保存当前canvas画面和重绘当前画面2.0
// function keep(ctx,p_canvas){
// 	imgData = ctx.getImageData(p_canvas.x, p_canvas.y, 
// 							p_canvas.width, p_canvas.height); 
// }
// function putKeep(ctx) {
// 	// body...
// }

//人物对话函数
function say(word,person) {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(person.left+20, person.top+20);
	ctx.quadraticCurveTo(person.left, person.top,person.left+15, person.top-10);
	ctx.font="16px Arial";
	ctx.strokeText(word,person.left+20, person.top-10);
	ctx.stroke();
	ctx.restore();
	//console.log("run");//测试是否运行
}
//文字淡入函数
function wordFade(text,time) {
	wordFadeInterval=setInterval(function () {
		if (alpha<1) {
			ctx.save();
			ctx.globalAlpha = alpha;
			ctx.font="16px Arial";
			ctx.fillText(text.text,text.width,text.height);
			ctx.fill();
			alpha+=0.2;
			ctx.restore();}
		else{
			clearInterval(wordFadeInterval);
			//console.log("OK");
		}
	},time);
}
//文字渐大函数
function wordLargen(text) {
	var fontSize=16;
	wordLargenInterval=setInterval(function () {
		if (fontSize<30) {
			ctx.clearRect(text.x-fontSize, text.y-fontSize,80,80);
			ctx.save();
			ctx.beginPath();
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";//注意！！！
			ctx.font="fontSize"+"px "+"Arial";
			ctx.fillText(text.text,text.x,text.y);
			ctx.fill();
			fontSize+=1;
			ctx.restore();}
		else{
			clearInterval(wordLargenInterval);
			//console.log("OK");
		}
	},500);
}
//逐个文字单独淡入绘制
function oneWordFade(text,time){
	var i=0;
	oneFadeInterval=setInterval(function () {
		if (i!=text.length) {
			text[i].width+=40;
			text[i].height+=40;
			wordFade(text[i],500);
			i++;	
		}
		else{
			clearInterval(oneFadeInterval);
			//console.log("OK");
		}
	},time);
}
//图像淡入函数
function fadeIn(ctx,img,p_img,time) {
	FadeInterval=setInterval(function () {
		if (alpha<1) {
			ctx.save();
			ctx.globalAlpha = alpha;
			ctx.drawImage(img,p_img.x,p_img.y);
			alpha+=0.2;//修改后需注意
			ctx.restore();}
		else{
			clearInterval(FadeInterval);
			//console.log("OK");
		}
	},time);
}
//图像淡出函数
function fadeOut(ctx,img,p_img,time) {
	FadeInterval=setInterval(function () {
		if (alphaf>0) {
			ctx.save();
			ctx.globalAlpha = alphaf;
			ctx.drawImage(img,p_img.x,p_img.y);
			alphaf-=0.2;
			ctx.restore();}
		else{
			clearInterval(FadeInterval);
			//console.log("OK");
		}
	},time);
}
//啥也不干函数
function rest(){}
//回调执行函数
function next(animate,duration,callback) {//执行的第一个函数，保持的精灵(sprite)，持续时间，回调函数
	var startTime = 0,
		endTime = +new Date() + duration,
        period = 1000/60;
    interval = setInterval(function() {
         if (+new Date() < endTime) {
            requestNextAnimationFrame(animate);
         }
         else {
         	//sprite.animating = false;
         	clearInterval(interval);
            callback();//执行回调
         }
      }, period); 
}
//副本跳转函数
function jump(index) {
	switch(index){
		case 0:case0();//《杜甫&李白的爱情故事》
			break;
		case 1:case1();//《相思》
			break;
		case 2:case2();//《梁祝》
			break;
		case 3:case3();//《赠汪伦》
			break;
		case 4:case4();//--关于诗介--
			break;
	default:break;
	}
}
//绘制多行文本
function drawText_1_0(ctx,canvas,text,content) {//实现自动换行功能//==StaticLayout（）函数
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var line=[];//存放content切割以后的内容
	var h=0;//用于控制绘制文本的高度，段落间距
	//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符
	//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度
	while(content.length>0){
		line.push(content.substr(0,text.count));//存入这一行的字到text里面
		content=content.substr(text.count,content.length);//重新计算content的长度
	}
	//设置文本居中对齐
	for (var i = 0; i < line.length; i++) {
		h+=text.h;//ctx.measureText(line).width ??测量文本高度忘记了
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font = text.fontFamily;
		ctx.fillStyle = text.color;
		ctx.fillText(line[i],text.x,text.y+h);
	}
}
//坐标转换
function windowToCanvas(canvas,point){
	// 获取canvas元素的所有样式属性
	var canvasStyle=window.getComputedStyle(canvas);
	// point.x-=parseFloat(canvasStyle["margin-left"]);
	// point.y-=parseFloat(canvasStyle["margin-top"]);
	
	// 获取元素的位置属性
	var bbox=canvas.getBoundingClientRect();
	// 除去canvas在文档坐标系的左边和顶部距离
	point.x-=bbox.left;
	point.y-=bbox.top;
	
	// 除去canvas的边框宽度
	point.x-=parseFloat(canvasStyle["border-left-width"]);
	point.y-=parseFloat(canvasStyle["border-top-width"]);
	
	// 除去canvas的内边距宽度
	point.x-=parseFloat(canvasStyle["padding-left"]);
	point.y-=parseFloat(canvasStyle["padding-top"]);

	// 绘图环境和canvas的大小比例调整 
	var xRatio=canvas.width/parseFloat(canvasStyle["width"]);
	var yRatio=canvas.height/parseFloat(canvasStyle["height"]);
	
	// 从文档坐标系调整到canvas坐标系
	point.x*=xRatio;
	point.y*=yRatio;

	// 返回调整后的坐标值
	return point;
}
//时间录制函数
function record() {
	time++;
	//console.log(time);
}
function caseOver() {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = "rgba(255,255,255,0.6)";
		ctx.fillRect(20, 20, canvas.width-20, canvas.height-20);
		ctx.closePath();
		ctx.restore();
		ctx.save();
		ctx.beginPath();
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font="32px blackboard";
		ctx.fillText("当前剧本已结束", canvas.width/2, canvas.height/2-15);
		ctx.fill();
		ctx.beginPath();
		ctx.fillText("刷新浏览器以返回主菜单", canvas.width/2, canvas.height/2+15);
		ctx.fill();
		ctx.restore();
	}