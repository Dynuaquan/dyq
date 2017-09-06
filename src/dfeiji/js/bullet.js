
class Bullet extends Base{
	//属性
	constructor(){
		super();
	}
	
	//方法
	init(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		gameEngine.allBullets.push(this);	
		this.ele.className = "bullet";
		this.ele.style.left = myPlane().ele.offsetLeft + myPlane().ele.offsetWidth/2 - this.ele.offsetWidth/2 +1 + "px";
		this.ele.style.top = myPlane().ele.offsetTop - this.ele.offsetHeight + "px";
		
		return this;
	}
	
	//移动
	move(){
		this.timer = setInterval(()=>{
			
			if (this.ele.offsetTop < -18) {
				clearInterval(this.timer);
				gameEngine.ele.removeChild(this.ele);			
				let index = gameEngine.allBullets.indexOf(this);
				gameEngine.allBullets.splice(index, 1);
				
				return;
			}
			this.ele.style.top = this.ele.offsetTop - 14 + "px";
			
		}, 30);
		
	};
	
	//爆炸
	boom(){
		//停止移动
		clearInterval(this.timer);	
		this.ele.className = "bullet-die";
		const dieImgs = ["images2/die1.png", "images2/die2.png"];
		let i = 0;
		let dieTimer = setInterval(()=>{
			if (i >= 1){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(this.ele);
			}
			else {
				this.ele.style.backgroundImage = `url(${dieImgs[++i]})`;
			}
		}, 200);
		
	}
	
}











