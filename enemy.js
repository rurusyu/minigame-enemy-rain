const audio = new Audio('audio/dying.wav');

class Enemy {
    constructor(width,height){
       this.alive = true;
       this.width = width;
       this.height= height;
       this.field = document.getElementById('bg');
    }
}

//몬스터 생성
Enemy.prototype.position = function(player){  
    const field = document.getElementById('bg');
    const createEnemy = document.createElement('span');
    createEnemy.className = "monster";   
    createEnemy.style.left = Math.floor(Math.random()*761)+'px';

    let enemyLeft = createEnemy.style.left;
    field.appendChild(createEnemy);     
    let initPosition = 550;  
    this.leftValue = createEnemy.style.left;
    // console.log("1",this.leftValue, enemyLeft,  player.position);    //hero.position undefind
    let enemyLeftVal ; 

    for(let i=0; i<enemyLeft.length; i++){
        enemyLeftVal = enemyLeft.slice(0,i-1) -"";
    }
  

    //움직이기.
    let move = setInterval(function(){ 
    // console.log('player', player);
      if(initPosition >0){
        initPosition -= 20;        
    
      }else if(initPosition <=0){
        initPosition = 550;
      }
      this.initPositionY = initPosition;
      createEnemy.style.bottom = initPosition +'px';      
      
      console.log("2",this.initPositionY+50,"<", player.height+30, " ", player.position,">=" , enemyLeftVal," ", player.position- player.width, "<", enemyLeftVal); 
    //   console.log("3",this.initPositionY+50,"<", player.height+30, " ", player.position,">" , enemyLeftVal); 


      if(this.initPositionY+50 < player.height+30 && (player.position >= enemyLeftVal-40 && player.position - player.width < enemyLeftVal)){
        this.alive = false;
        createEnemy.style.backgroundPosition = '43px 0px';
        audio.play();
        clearInterval(move);
        let die =  setInterval(function(){
            field.removeChild(createEnemy);
            clearInterval(die);
            audio.ended();
           },300);        
      }
    },500);
}




  