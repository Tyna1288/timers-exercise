alert("Its working!");


function countDown(time) {
    let timer = setInterval(function() {
      time--;
        if (time <= 0){
            clearInterval(timer);
            console.log("DONE!");
        }
        else {
            console.log(time);
        }
    
}, 1000)
    
}


function randomGame() {
    let times = 0;
    let timer = setInterval(function () {
        let randomNumber = Math.random(); times++;

    if (randomNumber >= .75) {
         clearInterval(timer);
        console.log("the number of tries it took" + times);
        
    }
  }, 1000)
    
}