/*
	Function:interface
	Author:dingst
	BuildDate:2019-12-9
	LastEditDate:2019-12-25
	Version:2.1
*/
// var canvas=document.getElementById("canvas");
// var ctx=canvas.getContext("2d");
/*******菜单界面*******/
//定义位置变量
var p_shijie={x:canvas.width-250,y:90};
var p_start={x:canvas.width-200,y:210};
var p_pen={x:canvas.width-130,y:200};
var p_window={x:20,y:20,width:canvas.width-40,height:canvas.height-40}
var p_no={x:canvas.width/2-100,y:220}
var p_yes={x:canvas.width/2+100,y:220}
/*var	p_achievement={x:canvas.width/2+85,y:canvas.height/2+60};
var	p_setup={x:canvas.width/2+155,y:canvas.height/2+60};
var	p_explore={x:canvas.width/2+225,y:canvas.height/2+60};*///1.0--
function menu() {//主界面
	canvas.onmousedown=function(event) {//鼠标点击触发事件
			var BUTTON_SIZE = 128;//按钮的大小
			var point={x:0,y:0};
	  		point.x=event.clientX;
			point.y=event.clientY;
	  		point=windowToCanvas(canvas,point);
	  		//console.log(point);
			//console.log(x,y);
			console.log("主界面加载成功");
			/*********实现按钮功能**********/
	  		if (point.x>p_start.x&&point.x<p_start.x+BUTTON_SIZE)
				if (point.y>p_start.y&&point.y<p_start.y+BUTTON_SIZE)
					start();
			// if (point.x>p_achievement.x&&point.x<p_achievement.x+BUTTON_SIZE)
			// 	if (point.y>p_achievement.y&&point.y<p_achievement.y+BUTTON_SIZE)
			// 		// transition().then(function () {
			// 		// 	console.log("hahah");
			// 		// });
			// 		achievement();
			// if (point.x>p_setup.x&&point.x<p_setup.x+BUTTON_SIZE)
			// 	if (point.y>p_setup.y&&point.y<p_setup.y+BUTTON_SIZE)
			// 		setup();
			// if (point.x>p_explore.x&&point.x<p_explore.x+BUTTON_SIZE)
			// 	if (point.y>p_explore.y&&point.y<p_explore.y+BUTTON_SIZE)
			// 		explore();//1.0版本
	}
	if (backgroundImg0.complete) {
		drawMenu();
		return;
	}
	backgroundImg0.onload=function function_name(argument) {
		drawMenu();
	}

}
function drawMenu() {//绘制开始菜单界面
	console.log("开始菜单绘制成功");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.globalAlpha = "0.8";
	ctx.drawImage(backgroundImg0,0,0,canvas.width,canvas.height);
	ctx.restore();
	fadeIn(ctx,img_shijie,p_shijie,100);
	//绘制“诗介”	//1.0
	// ctx.textAlign = "center";
	// ctx.textBaseline = "middle";
	// ctx.font="72px hyxuejunF";
	// ctx.fillText("诗介",p_title.x,p_title.y);
	// ctx.fill();
	b_start(p_start);
	b_pen(p_pen);
	// b_achievement(p_achievement.x,p_achievement.y);
	// b_setup(p_setup.x,p_setup.y);
	// b_explore(p_explore.x,p_explore.y);//1.0版本//1.0
}	

function prompts() {//弹窗提示界面（打开音效）
	console.log("弹窗界面绘制成功");
	ctx.save();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "rgba(0,0,0,0.75)";
	ctx.fillRect(p_window.x, p_window.y, p_window.width, p_window.height);
	ctx.fill();
	ctx.restore();//绘制背景
	ctx.drawImage(img_hint,40,40);
	ctx.save();
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "32px hyxuejunF";
	ctx.fillText("杜老师温馨提示：", canvas.width/2-10, canvas.height/2-100);
	ctx.fillText("是否打开音效获得更加体验？", canvas.width/2+68, canvas.height/2-50);
	ctx.fill();
	ctx.restore();//绘制文字
	b_no(p_no);
	b_yes(p_yes);
	canvas.onmousedown=function () {
		var BUTTON_SIZE = 64;//按钮的大小
		var point={x:0,y:0};
	  		point.x=event.clientX;
			point.y=event.clientY;
	  		point=windowToCanvas(canvas,point);
	  		
	  	if (point.x>p_yes.x&&point.x<p_yes.x+BUTTON_SIZE)
				if (point.y>p_yes.y&&point.y<p_yes.y+BUTTON_SIZE){
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					audioBg[index].play();
					//未安装背景音乐会显示报错
					jump(index);
					}
		if (point.x>p_no.x&&point.x<p_no.x+BUTTON_SIZE)
				if (point.y>p_no.y&&point.y<p_no.y+BUTTON_SIZE)
					{ctx.clearRect(0, 0, canvas.width, canvas.height);
					audioBg[index].pause();
					jump(index);}
	};
}
/**废弃界面--1.0版本**/
//设置界面
// function setup() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	ctx.save();
// 	ctx.globalAlpha = "0.30";
// 	ctx.drawImage(backgroundImg2,0,0,canvas.width,canvas.height);
// 	ctx.restore();
// 	//loading();
// 	var p_back={x:canvas.width-100,y:canvas.height-120};
// 	b_back(p_back.x,p_back.y);
// 	canvas.onmousedown=function () {
// 		var BUTTON_SIZE = 64;//按钮的大小
// 		var point={x:0,y:0};
// 	  		point.x=event.clientX;
// 			point.y=event.clientY;
// 	  		point=windowToCanvas(canvas,point);
// 	  		//console.log(point);
// 			//console.log(x,y);
// 			/*********实现按钮功能**********/
// 	  		if (point.x>p_back.x&&point.x<p_back.x+BUTTON_SIZE)
// 				if (point.y>p_back.y&&point.y<p_back.y+BUTTON_SIZE)
// 					menu();
// 	}//移除鼠标事件
// }
// //探索界面
// function explore() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	ctx.save();
// 	ctx.globalAlpha = "1";
// 	ctx.drawImage(backgroundImg3,0,0,canvas.width,canvas.height);
// 	ctx.restore();
// 	//loading();
// 	var p_back={x:canvas.width-100,y:canvas.height-120};
// 	b_back(p_back.x,p_back.y);
// 	canvas.onmousedown=function () {
// 		var BUTTON_SIZE = 64;//按钮的大小
// 		var point={x:0,y:0};
// 	  		point.x=event.clientX;
// 			point.y=event.clientY;
// 	  		point=windowToCanvas(canvas,point);
// 	  		//console.log(point);
// 			//console.log(x,y);
// 			/*********实现按钮功能**********/
// 	  		if (point.x>p_back.x&&point.x<p_back.x+BUTTON_SIZE)
// 				if (point.y>p_back.y&&point.y<p_back.y+BUTTON_SIZE)
// 					menu();
// 	}//移除鼠标事件
// }
// //成就界面
// function achievement() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	ctx.save();
// 	ctx.globalAlpha = "0.30";
// 	ctx.drawImage(backgroundImg1,0,0,canvas.width,canvas.height);
// 	ctx.restore();
// 	//loading();
// 	var p_back={x:canvas.width-100,y:canvas.height-120};
// 	b_back(p_back.x,p_back.y);
// 	canvas.onmousedown=function () {
// 		var BUTTON_SIZE = 64;//按钮的大小
// 		var point={x:0,y:0};
// 	  		point.x=event.clientX;
// 			point.y=event.clientY;
// 	  		point=windowToCanvas(canvas,point);
// 	  		//console.log(point);
// 			//console.log(x,y);
// 			/*********实现按钮功能**********/
// 	  		if (point.x>p_back.x&&point.x<p_back.x+BUTTON_SIZE)
// 				if (point.y>p_back.y&&point.y<p_back.y+BUTTON_SIZE)
// 					menu();
// 	}//移除鼠标事件
// }