function case1() {
	canvas.onmousedown=function () {}
	video.play();
	requestNextAnimationFrame(nextVideoFrame);
}
function nextVideoFrame() {
   if (video.ended) {
      
   }
   else {
     offscreenContext.drawImage(video, 0, 0);
     //ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(offscreenCanvas, 0, 0);
     requestNextAnimationFrame(nextVideoFrame);
   }
}