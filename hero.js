//용사이미지
const field = document.getElementById('bg');
const createHero = document.createElement('span');
createHero.className = "heroMan";

let initPosition = 400;



class Hero {
  constructor(y, width,height){
        this.alive = true;
        this.width = width;
        this.height= height;
        this.y = y;
       
    }
}

Hero.prototype.position = function(){
  
    field.appendChild(createHero);
}   

Hero.prototype.move = function(inputKey){
   
    if(inputKey === 97){
        createHero.style.backgroundPosition = '70px 0px';
        if(initPosition >0){
            initPosition -= 20;
        }else if(initPosition <=20){
            initPosition = 0;
        }
       this.position = initPosition;
       return createHero.style.left = initPosition+'px';
    }else if(inputKey === 100){
        createHero.style.backgroundPosition = '35px 0px';
        if(initPosition <760){
            initPosition += 20;
        }else if(initPosition >=760){
            initPosition = 760;
        }
        this.position = initPosition;
        return createHero.style.left = initPosition+'px';    
           
    }else if(inputKey === 115){
        createHero.style.backgroundPosition = '0px 0px';
    }else if(inputKey === 119){
        createHero.style.backgroundPosition = '-35px 0px';
    }

   
}

