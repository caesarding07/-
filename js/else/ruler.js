/**
 * Function:canvas 标尺	
 * params:{*}
 * 	    axisWidth:Number,轴线的宽度，单位px
 *      lineColor:String,轴线的颜色
 *      gridNumberX:Number,网格线的数量
 *      gridNumberY:Number,网格线的数量
 * Author:dingst
 * BuildDate:2019-12-10
 * Version:1.0
*/
var canvas=document.getElementById("canvas"),
	ctx=canvas.getContext("2d");
var axisWidth= "1px",
	gridWidth= "2px",
	axisColor="red",
	gridColor="#CCCCCC",
	gridNumberX = 16,
	gridNumberY = 10,
	space=40;//统一间距为40

//绘制轴线
function drawAxis() {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(0,canvas.height/2);
	ctx.lineTo(canvas.width,canvas.height/2);
	ctx.moveTo(canvas.width/2, 0);//vertical
	ctx.lineTo(canvas.width/2, canvas.height);
	ctx.strokeStyle  = axisColor;
	ctx.lineWidth = axisWidth;
	ctx.setLineDash([40,110]);
	ctx.lineCap="round";
	ctx.stroke();//不能用fill（）;
	ctx.restore();
}
//绘制网格线
function drawGrid() {
	var i=0;
	for(i=0;i<gridNumberX;i++){
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = gridColor;
		ctx.lineWidth = gridWidth;
		ctx.moveTo(space*i,0);
		ctx.lineTo(space*i,canvas.height);
		ctx.setLineDash([20,100]);
		ctx.lineCap="round";
		ctx.stroke();
		ctx.restore();
	}
	for(i=0;i<gridNumberY;i++){
		ctx.save();
		ctx.fillStyle = gridColor;
		ctx.lineWidth = gridWidth;
		ctx.beginPath();
		ctx.moveTo(0,space*i);
		ctx.lineTo(canvas.width,space*i);
		ctx.setLineDash([20,20]);
		ctx.lineCap="round";
		ctx.stroke();
		ctx.restore();
	}
}

