class papel
{
	constructor(x,y,r)
	{
		var options={
		isStatic:false,
		density:1.2,
		restitution:0.3,
        friction:0,
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage ("paper.png");
		this.body=Bodies.circle(this.x,this.y,(this.r -20)/2, options);
		
 		World.add(world, this.body);

	}
	display()
	{
			
			var papelPos=this.body.position;		

			push()
			translate(papelPos.x, papelPos.y);
			imageMode(CENTER)
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}