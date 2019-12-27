/*
	Function:基本按钮的绘制
	Author:dingst
	BuildDate:2019-12-24
	Version:1.0
*/
var rAngle=0;
function b_back(x,y) {//返回按钮
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.drawImage(img_button1, x, y);
		ctx.font="32px Arial";
		ctx.fillText("返回", x, y+90);
		ctx.fill();
}//1.0--
function b_start(img) {//开始按钮
	ctx.drawImage(img_button4,img.x,img.y);
	//ctx.fillText("开始", x,y+100);
}
function b_pen(img) {//毛笔
	ctx.save();
	//ctx.translate(img.x,img.y);//translate() 方法重新映射画布上的 (0,0) 位置
	//ctx.rotate(rAngle);//旋转
	ctx.drawImage(img_pen,img.x,img.y);
	rAngle += Math.PI/12;
	ctx.restore();
}
function b_go(img) {
	ctx.save();
	ctx.drawImage(img_go,img.x,img.y);
	ctx.textAlign = "left";
	ctx.textBaseline = "middle";
	ctx.font="32px hyxuejunF";
	ctx.fillText("然也", img.x, img.y+60);
	ctx.fill();
	ctx.restore();
}
function b_yes(img) {
	ctx.save();
	ctx.drawImage(img_yes,img.x,img.y);
	// ctx.textAlign = "left";
	// ctx.textBaseline = "middle";
	// ctx.font="32px hyxuejunF";
	// ctx.fillText("然也", img.x, img.y+60);
	//ctx.fill();
	ctx.restore();
}
function b_no(img) {
	ctx.save();
	ctx.drawImage(img_no,img.x,img.y);
	// ctx.textAlign = "left";
	// ctx.textBaseline = "middle";
	// ctx.font="32px hyxuejunF";
	// ctx.fillText("然也", img.x, img.y+60);
	//ctx.fill();
	ctx.restore();
}
function b_turnLeft(x,y) {//设置按钮
	ctx.drawImage(img_button5, x,y);
	//ctx.fillText("向左", x,y+100);
	ctx.font="32px Arial";
	ctx.fill();
}
function b_turnRight(x,y) {//设置按钮
	ctx.drawImage(img_button6, x,y);
	//ctx.fillText("向右", x,y+100);
	ctx.font="32px Arial";
	ctx.fill();
}
// function b_achievement(x,y) {//成就按钮
// 	ctx.textAlign = "left";
// 	ctx.textBaseline = "middle";
// 	ctx.font="32px Arial";
// 	ctx.drawImage(img_button0,x,y);
// 	ctx.fillText("成就", x,y+100);
// 	ctx.fill();	
// }
// function b_explore(x,y){//探索按钮
// 	ctx.textAlign = "left";
// 	ctx.textBaseline = "middle";
// 	ctx.drawImage(img_button2, x,y);
// 	ctx.fillText("探索", x,y+100);
// 	ctx.font="32px Arial";
// 	ctx.fill();
// }
// function b_setup(x,y) {//设置按钮
// 	ctx.drawImage(img_button3, x,y);
// 	ctx.fillText("设置", x,y+100);
// 	ctx.font="32px Arial";
// 	ctx.fill();
// }//1.0--

