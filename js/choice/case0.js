/*
	Function:杜甫和李白的故事
	Author:dingst
	BuildDate:2019/12/26
	Version:1.0
*/
var dfsheet=new Image(),//新建
	dfDsheet=new Image(),
	lbsheet=new Image(),
	dfCells=[//精灵表分割绘制
		{left:0,top:0,width:120,height:120},
		{left:120,top:0,width:120,height:120},
		{left:240,top:0,width:120,height:120},
		{left:360,top:0,width:120,height:120},
		{left:480,top:0,width:120,height:120},
		{left:600,top:0,width:120,height:120},
		{left:720,top:0,width:120,height:120},
		{left:840,top:0,width:120,height:120}];
	lbCells=[
		{left:0,top:0,width:120,height:120},
		{left:120,top:0,width:120,height:120},
		{left:240,top:0,width:120,height:120},
		{left:360,top:0,width:120,height:120},
		{left:480,top:0,width:120,height:120},];
	dfDCell=[
		{left:0,top:0,width:120,height:120},
		{left:120,top:0,width:120,height:120},
		{left:240,top:0,width:120,height:120},
		{left:360,top:0,width:120,height:120},
		{left:480,top:0,width:120,height:120},
		{left:600,top:0,width:120,height:120},
		{left:720,top:0,width:120,height:120},
		{left:840,top:0,width:120,height:120}];
// Behaviors.................................................
    runInPlace = {//原地跑动//精灵表遍历行为
       lastAdvance: 0,
       RUN_INTERVAL: 200,
       execute: function (sprite, context, time) {
          if (time - this.lastAdvance > this.RUN_INTERVAL) {
             sprite.painter.advance();
             this.lastAdvance = time;
          }
       }
    },
    movePlace = {//移动位置
       lastMove: 0,
       execute: function (sprite, context, time) {
         if (this.lastMove !== 0) {
           sprite.left -= sprite.velocityX *
                          ((time - this.lastMove) / 1000); 

           if (sprite.left < 0) {
              sprite.left = canvas.width;
           }
         }
         this.lastMove = time;
       }
    },
    dropDown = {//下降
    	lastDown: 0,
    	execute:function (sprite, context, time) {
    		if (this.lastDown !== 0) {
           	sprite.top += sprite.velocityY *
                          ((time - this.lastDown) / 1000); 

           	if (sprite.top > canvas.height) {
              sprite.top = 0;
           }
         }
         this.lastDown = time;
    	}
    }
	dfPainter=new SpriteSheetPainter(dfCells),
	lbPainter=new SpriteSheetPainter(lbCells),
	dfDPainter=new SpriteSheetPainter(dfDCell);
	/********使用精灵表绘制器********/
	//精灵表绘制器需要传入的参数--cells绘制图像中精灵的位置 
	//paint:sprite,context,spritesheet绘制什么图形
	//sprite.left,sprite.top在哪里绘制
	df=new Sprite("df", dfPainter,[ runInPlace, movePlace ]),//创建精灵
	lb=new Sprite("lb", lbPainter),
	dfD=new Sprite("dfD",dfDPainter,[runInPlace,dropDown]),
 	lastAdvance = 0;
var INTERVAL_DF=1000/60,
	INTERVAL_DFD=1000/50,//刷新速度
	INTERVAL_LB=100;
var i=0;
var draging=false;
var length_string=0;
var p_flower={x:canvas.width,y:0};
var p_boat={x:0,y:0};
//动画函数--3.0
function dfAnimate(now){//杜甫的动画
	if(now===undefined)
		now= + new Date();
	if(now-lastAdvance>INTERVAL_DF){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(backgroundImg5,0,0);
   		df.update(ctx, now);
   		dfPainter.paint(df,ctx,dfsheet);
   		say(word[i],df);
   		lbPainter.paint(lb,ctx,lbsheet);
		lastAdvance=now;
	}
	//requestNextAnimationFrame(dfAnimate);
}
function dfDAnimate(imgData) {
	now= + new Date();
		
	if(now-lastAdvance>INTERVAL_DFD){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.putImageData(imgData2,0,0);
   		dfD.update(ctx, now);
   		dfDPainter.paint(dfD,ctx,dfDsheet);
   		say(word[i],dfD);
		lastAdvance=now;
		//console.log("执行顺利");
	}
	//requestNextAnimationFrame(dfAnimate);
}
function lbAnimate(now){//李白的动画
	if(now===undefined)
		now= + new Date();

	if(now-lastAdvance>INTERVAL_LB){
   		lbPainter.advance();
   		lbPainter.paint(lb,ctx,lbsheet);
		lastAdvance=now;
	}
	//requestNextAnimationFrame(lbAnimate);
}
//initialization初始化
dfsheet.src="image/case0/dufu/df.png";
dfDsheet.src="image/case0/dufu/dfD.png";
lbsheet.src="image/case0/libai/lb.png";
//img_dfL=imgLoad("image/case0/dufu/dfL.png");
df.velocityX = 50;//run speed
dfD.velocityY =12;
dfD.left=92;
dfD.top=0;
df.left=canvas.width;
df.top =canvas.height/2-df.height/2;
lb.left=canvas.width/2-120;
lb.top =canvas.height/2-df.height/2;
//var p_dfL={x:80,y:230};
var word = ["白兄白兄，我给你写了首诗",
			"咱叫它《赠李白》，咋样？",
			"白兄白兄，我又给你写了首诗",
			"咱叫它《赠李白》其二，如何？",
			"白兄白兄，近日天气清爽，略思念你，又写了首诗",//4
			"啊，是啊，天气清爽，是宜写诗",
			"那便做首诗吧",
			"嗯！白兄写的真棒"]
//按步骤执行
function case0() {
	audioCase0[0].play();
	console.log("a0.ok");
	canvas.onmousedown=function () {}
	requestNextAnimationFrame(lbAnimate);
	setTimeout(function () {
		audioCase0[1].play();
		console.log("a1.ok");
	},4000);
	next(dfAnimate,6000,function () {
	 	i++;//i==1
	 	lbPainter.advance();
	 	dfPainter.paint(df,ctx,dfsheet);
		next(dfAnimate,1000,function () {
			//imgData0 = ctx.getImageData(0, 0, canvas.width, canvas.height);
			case0_1();
				//offscreenContext.putImageData(imgData, 0, 0);
				// ctx.save();
				// ctx.fillStyle = "rgba(255,255,255,0.8)";
				// ctx.fillRect(0, 0, canvas.width, canvas.height);
				// ctx.restore();
				//ctx.clearRect(0, 0, canvas.width, canvas.height);
				//ctx.putImageData(imgData, 0, 0);
				//console.log("开始第二步执行");
		});
	});
}
function case0_1(){//下拉绳子进行交互
	string();//暗示拉绳子动画
	ctx.beginPath();
	ctx.rect(180,20,20,canvas.height/2);
	ctx.closePath();
	// setTimeout(drawAxis,1000);
	// setTimeout(drawGrid,1000);
	//判断是否拖拽
	//console.log("yeye");
	canvas.onmouseup=function () {
		draging=false;
	}
	canvas.onmousedown=function () {
		var point={x:0,y:0};
  		point.x=event.clientX;
		point.y=event.clientY;
  		point=windowToCanvas(canvas,point);
  		if (ctx.isPointInPath(point.x, point.y)) {
  			draging=true;
//ctx.clearRect(0, 0, canvas.width, canvas.height);
  		}
	}
	canvas.onmousemove=function () {
		if (draging) {
			var point={x:0,y:0};
  			point.x=event.clientX;
			point.y=event.clientY;
			length_string=point.y;
			//console.log(point);
			//console.log("draging");
		}
	}
}

//暗示拉绳子动画
function string() {//stretch
	imgData1 = ctx.getImageData(180,0,20,canvas.height/2);
	stringInterval=setInterval(function () {
		ctx.clearRect(180,0,20,canvas.height/2);
		ctx.putImageData(imgData1,180,0);
		ctx.drawImage(img_case00,0,0,120,length_string*1.8,180,0,20,length_string);
		length_string+=0.5;
		if (length_string==60) {
			length_string=20;
		}
		if (length_string>60&&length_string<190) {//绳子回缩
			length_string-=2;
		}
		if (length_string>=200) {//200
			clearInterval(stringInterval);
			ctx.drawImage(img_case00,0,0,120,360,180,0,20,200);
			i++;
			console.log(i);
			audioCase0[i].play();//存在一个i！=3的BUG
			console.log("a2.ok");
			setTimeout(function () {//淡入的df音效？不是
				audioCase0[4].play();
				console.log("a4.ok");
			},2200);
			setTimeout(function () {i++;},4000);
			imgData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);
			next(function () {dfDAnimate(imgData2);},6000,function () {
				case0_2();
				//imgData3 = ctx.getImageData(0, 0, canvas.width, canvas.height);
				//ctx.clearRect(0, 0, canvas.width, canvas.height);
				//ctx.putImageData(imgData3,0, 0);
				// lbPainter.advance();//弥补精灵表缺陷
				// lbPainter.paint(lb,ctx,lbsheet);
			});
		}
	},10);
}

function case0_2() {//左下角df淡入
	// var p_dfL={left:80,top:230}
	//console.log("fadeIn");
	var alpha=0;
	i++;//i==5
	audioCase0[5].play();//我是淡入的
	console.log("a5.ok");
	DfFadeInterval=setInterval(function () {
		if (alpha<1) {
			ctx.save();
			ctx.globalAlpha = alpha;
			ctx.drawImage(dfDsheet,960,0,120,120,80,230,120,120);
			ctx.beginPath();
			ctx.moveTo(170, 310);
			ctx.quadraticCurveTo(200, 340,215, 330);
			ctx.font="16px Arial";
			ctx.strokeText(word[i],220, 330);
			ctx.stroke();
			alpha+=0.05;//修改后需注意
			ctx.restore();}
		else{
			clearInterval(DfFadeInterval);
			ctx.drawImage(dfDsheet,960,0,120,120,80,230,120,120);
			imgData3=ctx.getImageData(0, 0, canvas.width, canvas.height);
			case0_3(imgData3);
		}
	},200);
}
function case0_3(imgData3) {//桃花散清除屏幕
	//offscreenContext.putImageData(imgData3,0,0);
	i++;//i==5
	//console.log(i);
	//audioCase0[6].play();lb的发言
	FloFadeInterval=setInterval(function () {
	if (p_flower.x<=canvas.width-150) {
		clearInterval(FloFadeInterval);
		}
	else{
		ctx.clearRect(p_flower.x,p_flower.y,60,60);
		p_flower.x-=0.3;
		p_flower.y+=0.2;
		ctx.drawImage(flower_Case0,p_flower.x,p_flower.y,60,60);
		}
	},5);
	flowerClear();
}
function flowerClear() {//桃花散
	canvas.onmouseup=function () {
		draging=false;
	}
	canvas.onmousedown=function () {
  		draging=true;
  	}
	canvas.onmousemove=function () {
		if (draging) {
			var point={x:0,y:0};
  			point.x=event.clientX;
			point.y=event.clientY;
			point=windowToCanvas(canvas,point);
			ctx.beginPath();
			ctx.rect(p_flower.x,p_flower.y,60,60);
			ctx.closePath();
			if (ctx.isPointInPath(point.x,point.y)) {
				//console.log("clearing");
				ctx.clearRect(p_flower.x,p_flower.y,60,60);
				p_flower.x=point.x-30;
				p_flower.y=point.y-30;
				ctx.drawImage(flower_Case0,p_flower.x,p_flower.y,60,60);
			}
			if (point.x>lb.left&&point.x<lb.left+40) 
				if (point.y>lb.top&&point.y<lb.top+40) {
					ctx.clearRect(p_flower.x,p_flower.y,60,60);
					case0_4();
			}
		}
	}
}
function case0_4() {
	canvas.onmousemove=function () {};//覆盖鼠标事件
	//console.log("赠汪伦导入");
	//i++;
	//console.log(i);
	audioCase0[6].play();
	//audioCase0[i].play();
	var fontSize=16;
	wordLargenInterval=setInterval(function () {
		if (fontSize<24) {
			ctx.clearRect(canvas.width/2-fontSize*8, canvas.height/2-fontSize*8,fontSize*16,fontSize*16);
			ctx.save();
			ctx.beginPath();
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";//注意！！！
			ctx.font=fontSize+"px Arial";
			//ctx.font="32px Arial"
			ctx.fillText(word[5],canvas.width/2,canvas.height/2);
			ctx.fill();
			ctx.beginPath();
			ctx.moveTo(lb.left+40, lb.top+40);
			ctx.quadraticCurveTo(lb.left+60, lb.top+10,lb.left+100,lb.top+20);
			ctx.stroke();
			fontSize+=0.05;
			ctx.restore();}
		else{
			clearInterval(wordLargenInterval);
			setTimeout(function () {
				i++;
				audioCase0[6].play();
				fontSize=24;
				ctx.clearRect(canvas.width/2-fontSize*8, canvas.height/2-fontSize*8,fontSize*16,fontSize*16);
				ctx.save();
				ctx.beginPath();
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.font=fontSize+"px Arial";//注意！！！
				ctx.fillText(word[6],canvas.width/2,canvas.height/2);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(lb.left+40, lb.top+40);
				ctx.quadraticCurveTo(lb.left+60, lb.top+10,lb.left+100,lb.top+20);
				ctx.stroke();
				ctx.restore();
				boatIn();
				//console.log("OK");
			}, 3000);	
		}
	},20);
	// body...
}
function boatIn() {//船来了
	boatInInterval=setInterval(function () {
	if (p_boat.x>=canvas.width) {
		clearInterval(boatInInterval);
		imgData5=ctx.getImageData(0, 0, canvas.width, canvas.height);
		case0_5(imgData5);
		}
	else{
		p_boat.x+=2;
		ctx.clearRect(0,0,p_boat.x,canvas.height);
		ctx.drawImage(boat_Case0,canvas.width-p_boat.x,0,p_boat.x,canvas.height,
						0,0,p_boat.x,canvas.height);
		}
	},40);// body...
}
/////3.0版本分割线////////赠汪伦开始
function drawText(ctx,canvas,text,content) {//实现自动换行功能//==StaticLayout（）函数
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(boat_Case0,0,0);
	read0.play();
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
}//3.0--
function case0_5(imgData) {
	//ctx.putImageData(imgData, 0, 0);
	audioBg[0].pause();
	var content="李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。";
	var text={x:500,y:180,count:8,h:40,fontFamily:"32px hyxuejunF",color:"black"}
	drawText(ctx,canvas,text,content);
	ctx.save();
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";		
	ctx.font = "32px hyxuejunF";
	ctx.fillText("《赠汪伦》", 490, 150);
	ctx.fillText("——李白", 550, 185);
	ctx.fill();
	ctx.restore();
	setTimeout(function () {
		ctx.drawImage(df2,canvas.width-180,canvas.height-180,180,180);
		audioCase0[8].play();
	},25000);
	setTimeout(caseOver,30000);
}

