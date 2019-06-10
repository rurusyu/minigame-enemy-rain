
const hero = new Hero(50,35,50);
const monster = new Enemy(40,50);

let monsterCount =[];


const init = () =>{ 
    hero.position();
    // monster.position(hero)
    // 몬스터 숫자.
    let makeMonster =  setInterval(function(){
        if(monster.alive === true){
            monster.position(hero)
            monsterCount.push('monster');   
        }else{
            clearInterval(makeMonster);
        }
    },2000);

       
}

const handleKeypress = (event) => {    
    hero.move(event.keyCode);    
}


document.addEventListener('keypress', handleKeypress);


init();


