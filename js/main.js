/*
	Function:main
	Author:dingst
	BuildDate:2019-12-25
	Version:1.0
*/	
/*******菜单主界面*******/
// setInterval(record,1000);//计时器
menu();
// audioCase0[5].play();
// setTimeout(drawAxis,1000);
// setTimeout(drawGrid,1000);
// 
// 
/**********单独程序或界面测试**********/
//case4();


// var IMG=flower_Case0;
// rollCaption(caption,IMG,rest);
//boatIn();
//case0_4();
//var p_dfL={left:200,top:340}
//case0_1();
//case0_3();

//case0_5();
// var p_dfL={x:80,y:230}
// fadeIn(ctx,dfL,p_dfL,140);
//menu();
//prompts();
//case0_1();
//say(word[0],p_person,p_word);
/*******首次载入界面*******/
// function firstLoad() {
// 	var poems_Load="著名国学大师王国维先生，曾经在他的名作《人间词话》中说，人生的三个境界是：";
// 	var poems_FistRealm="“昨夜西风凋碧树，独上高楼，望尽天涯路”，此第一境也；";
// 	var poems_SecondRealm="“衣带渐宽终不悔，为伊消得人憔悴”，此第二境也；";
// 	var poems_TrirdRealm="“众里寻他千百度，蓦然回首，那人却在灯火阑珊处”，此第三境也；";
// 	var Realm={x:canvas.width/2,y:canvas.height/2,h:30,count:12,fontFamily:"30px Georgia",color:"black"}
// 	id=setInterval(loading,100);
// 	drawText(ctx,canvas,Realm,poems_Load);
// //！！！注意:settimeout如果这样写成setTimeout(show2(), 2000);就会立即执行，起不到延时的作用
// 	setTimeout(function() {drawText(ctx,canvas,Realm,poems_FistRealm);},6000);
// 	setTimeout(function() {drawText(ctx,canvas,Realm,poems_SecondRealm);},12000);
// 	setTimeout(function() {drawText(ctx,canvas,Realm,poems_TrirdRealm);},18000);
// 	setTimeout(stopLoading,24000);
// 	return true;
// }
//firstLoad();