//关于诗介
var caption0={text:"最后希望大家都能在诗介里面",x:canvas.width/2,y:80}
var caption1={text:"遇上&&你对的诗，对的人",x:canvas.width/2,y:60}
var caption2={text:"《诗介》",x:canvas.width/2,y:40}
var caption3={text:"一款基于html5-canvas开发的",x:canvas.width/2,y:20}
var caption4={text:"简单且随意的交互媒体。",x:canvas.width/2,y:0}
var caption5={text:"它就像是一本未成熟的书",x:canvas.width/2,y:-20}
var caption6={text:"仍需要插入很多精彩的章节",x:canvas.width/2,y:-40}
var caption7={text:"而每一次的更新都将会是",x:canvas.width/2,y:-60}
var caption8={text:"一次有意思的文学体验",x:canvas.width/2,y:-80}
var captiony=[30,0,-30,-60,-90,-120,-150,-180,-210];
function case4() {
	rollInterval=setInterval(function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(flower_Case0,0,0,canvas.width,canvas.height);
		ctx.save();
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.font="32px blackboard"
		ctx.beginPath();
		ctx.fillText(caption0.text, caption.x,captiony[7]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption1.text, caption.x,captiony[8]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption2.text, caption.x,captiony[0]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption3.text, caption.x,captiony[1]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption4.text, caption.x,captiony[2]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption5.text, caption.x,captiony[3]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption6.text, caption.x,captiony[4]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption7.text, caption.x,captiony[5]);
		ctx.fill();//
		ctx.beginPath();
		ctx.fillText(caption8.text, caption.x,captiony[6]);
		ctx.fill();//
		for (var i = 0; i <= 8; i++) {
			captiony[i]+=1;
		}
	
		// if (caption.y==100) {//中途异步调用
		// 	//rollCaption(captiona,flower_Case0,rest);
		// }
		if (captiony[8]==canvas.height-40) {//退出结束调用
			clearInterval(rollInterval);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(flower_Case0,0,0,canvas.width,canvas.height);
			ctx.beginPath();
			ctx.fillText("《诗介》----你的，未完待续", canvas.width/2,canvas.height/2);
			ctx.fill();//// body...
			ctx.restore();
		}
	},50);
}
// var caption0={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption1={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption2={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption3={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption4={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption5={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption6={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption7={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var caption8={text:"滚动字幕示例",x:canvas.width/2,y:80}
// var dInterval=500;
// function case4() {
// 	moreRollCaption(caption0,flower_Case0,0);
// 	moreRollCaption(caption1,flower_Case0,dInterval);
// 	moreRollCaption(caption2,flower_Case0,dInterval*2);
// 	moreRollCaption(caption3,flower_Case0,dInterval*3);
// 	moreRollCaption(caption4,flower_Case0,dInterval*4);
// 	moreRollCaption(caption5,flower_Case0,dInterval*5);
// 	moreRollCaption(caption6,flower_Case0,dInterval*6);
// 	moreRollCaption(caption7,flower_Case0,dInterval*7);
// 	moreRollCaption(caption8,flower_Case0,dInterval*8);
// 	//rollCaption(caption9,flower_Case0);
// }
