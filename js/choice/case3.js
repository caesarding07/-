/*
	Function:赠汪伦
	Author:dingst
	BuildDate:2019/12/26
	Version:1.0
*/
function case3(argument) {
	var content="李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。";
	var text={x:500,y:180,count:8,h:40,fontFamily:"32px hyxuejunF",color:"black"}
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
	ctx.save();
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";		
	ctx.font = "32px hyxuejunF";
	ctx.fillText("《赠汪伦》", 490, 150);
	ctx.fillText("——李白", 550, 185);
	ctx.fill();
	ctx.restore();
	setTimeout(rest,25000);
}

