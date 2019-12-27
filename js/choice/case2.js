/*
	Function:梁祝
	Author:dingst
	BuildDate:2019/12/26
	Version:1.0
*/
function case2() {
	canvas.onmousedown=function () {}
	ctx.save();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = "24px blackboard";
	ctx.fillText("因制作经费有限，资源仍在努力开发中", canvas.width/2, canvas.height/2-15);
	ctx.fillText("敬请期待", canvas.width/2, canvas.height/2+15);
	ctx.fill();
	ctx.restore();
}