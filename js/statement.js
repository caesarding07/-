/*
	Function:statemen
	Author:dingst
	BuildDate:2019-12-25
	Version:1.0
*/
// var myFont = new FontFace("myFont","url(font/blackboard.ttf)");
// 	myFont.onload=function () {document.fonts.add(font);}
// var myFont = new FontFace("myFont","url(font/hyxuejunF.ttf)");
// 	myFont.onload=function () {document.fonts.add(font);}
// img_button0=imgLoad('image/button/achievement.png');
// img_button1=imgLoad('image/button/back.png');
// img_button2=imgLoad('image/button/explore.png');
// img_button3=imgLoad('image/button/setup.png');
/********定义全局绘图环境********/
var offscreenCanvas=document.getElementById("canvas");
	offscreenContext=offscreenCanvas.getContext("2d");
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
/********声明副本剧本音乐素材********/
var bgCase0=document.getElementById("bgCase0"),
	bgCase1=document.getElementById("case10"),
	bgCase2=document.getElementById("bgCase2");
	bgCase3=document.getElementById("bgCase3");
	bgCase4=document.getElementById("bgCase4");
var audioBg=[bgCase0,bgCase1,bgCase2,bgCase3,bgCase4]//所有背景音乐数组
var a01=document.getElementById("a01");
var a02=document.getElementById("a02");
var a03=document.getElementById("a03");
var a04=document.getElementById("a04");
var a05=document.getElementById("a05");
var a06=document.getElementById("a06");
var a07=document.getElementById("a07");
var a08=document.getElementById("a08");
var read0=document.getElementById("read0");
var audioCase0=[a01,a02,a03,,a04,a05,a06,a07,a08];//case0所有要用到的音效
/********声明副本剧本视频素材********/
var video=document.getElementById("video");
// var video10=document.getElementById("case10");

/********声明副本剧本图片素材********/
//case0
flower_Case0=imgLoad("image/case0/flower.png");
boat_Case0=imgLoad("image/case0/boat.png");
df2=imgLoad("image/case0/dufu/df3.png");
//case1
//case2

/********声明界面图片素材********/
img_case00=imgLoad("image/case0/string.png");
//img_dfL=imgLoad("image/case0/dufu/dfL.png");
/********声明按钮图片素材********/
img_button4=imgLoad('image/button/start.png');
img_button5=imgLoad("image/button/turnLeft.png");
img_button6=imgLoad("image/button/turnRight.png");
img_pen=imgLoad("image/button/pen.png");
img_go=imgLoad('image/button/go.png');
img_hint=imgLoad("image/hint.png");
img_yes=imgLoad("image/button/yes.png");
img_no=imgLoad("image/button/no.png");
img_shijie=imgLoad("image/shijie.png");
/********声明界面背景图片素材********/
backgroundImg0=imgLoad("image/background/background0.png");
backgroundImg1=imgLoad("image/background/background1.jpg");
backgroundImg2=imgLoad("image/background/background2.jpg");
backgroundImg3=imgLoad("image/background/background3.jpg");
backgroundImg4=imgLoad("image/background/background4.jpg");
backgroundImg5=imgLoad("image/background/background5.png");
//定义加载处理函数
function imgLoad(url) {
	var img=new Image();
	img.onload=function () {
		img.onload=null;// body...
	}
	img.src=url;
	return img;
}
// var buttonArr=['image/button/achievement.png',
// 			'image/button/back.png',
// 			'image/button/explore.png',
// 			'image/button/setup.png',
// 			'image/button/start.png',
// 			"image/button/turnLeft.png",
// 			"image/button/turnRight.png"]
// var backgroundArr=["image/background/background0.png",
// 					"image/background/background2.jpg",
// 					"image/background/background2.jpg",
// 					"image/background/background3.jpg"]
// //实现图片预加载
// function preLoadImg(srcArr) {
// 	if (srcArr instanceof Array) {
// 		for (var i = 0; i < srcArr.length; i++) {
// 			var myImg = new Image();
// 			myImg.src = srcArr[i];
// 		}
// 	}
// }
// preLoadImg(buttonArr);
// preLoadImg(backgroundArr);
// //利用回调函数获得图片的属性
// function getImg(url,callback) {
// 	var img = new Image();
// 	if (img.complete) {
// 		callback.call()
// 		return;
// 	}
// 	img.onload = function () {
// 		callback.call(img)
// 	}
// 	img.src= "url";
// }

