function Coin(x,y,s,img){
/*----------------------------------------------------------------------------------------VARIABLES*/
    this.x = x;
    this.y = y;
    this.s = s;
    this.width = 20;
    this.xdir = -1;
    this.img = img;

/*----------------------------------------------------------------------------------------VARIABLES*/
    

    
    
    
/*--------------------------------------------------------------------------------------CONSTRUCTOR*/
    this.display = function(gc){
        gc.drawImage(this.img, this.x, this.y);
    }
/*--------------------------------------------------------------------------------------CONSTRUCTOR*/

    
    
    
    
/*-------------------------------------------------------------------------------------------UPDATE*/
    this.update = function(){
        this.move();
    }
/*-------------------------------------------------------------------------------------------UPDATE*/


    
    
    
/*---------------------------------------------------------------------------------------------MOVE*/
    this.move = function(){
        this.x += this.xdir * this.s;
    }
/*---------------------------------------------------------------------------------------------MOVE*/

}
console.log("11) HELLO FROM COIN!");