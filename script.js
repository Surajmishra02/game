let val= localStorage.getItem('Score')
let score;
resetscore(val);
function resetscore(val){
  score= val ? JSON.parse(val): {
  win:0,
  lost:0,
  tai: 0,
};
score.displayscore=function(){
   return `score : 🏆 win:${score.win} , 👎 lost:${score.lost}, 🤝 tai:${score.tai}
`
};
showresult();
}
  function choice(){
    let game=Math.random() * 3;
      if(game>0 && game<=1){
         return `bat`;

     }
     else if(game>1 && game<=2){
         return`ball`;

    }
     else{
       return`stump`;
 

    }
    

  }
  function getresult(usermove , computermove){
 if(usermove===`bat`){
 
 if(computermove===`ball`){
 
  score.win++;
  return `user won`;
 }
 else if(computermove ===`bat`){
  
  score.tai++;
  return`match tai`;
 }
 else if(computermove===`stump`){

  score.lost++;
  return`computer won`;
 }
 }

 else if(usermove===`ball`){
  if(computermove===`ball`){
   
    score.tai++;
    return`match tai`;
   }
   else if(computermove ===`bat`){
  
    score.lost++;
    return`computer won`;
   }
   else if(computermove===`stump`){
  
    score.win++;
    return`user won`;
   }

 }
 else{
  if(computermove===`ball`){
 
     score.lost++;
  return`computer won`;
 }
 else if(computermove ===`bat`){
 
    score.win++;
  return`user won`;
 }
 else if(computermove===`stump`){

     score.tai++;
  return`match tai`;
 }
 }

  }
function showresult(usermove,computermove,result){
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector(`#a`).innerHTML=
    usermove !== undefined ? `user choice is ${usermove}` : ' ';
    document.querySelector(`#b`).innerHTML=
    computermove !== undefined ? `computer choice is  ${computermove}`: ' ';
    document.querySelector(`#c`).innerHTML=
    result !==undefined ? result : ' ';
    document.querySelector(`#d`).innerHTML=score.displayscore();
  }