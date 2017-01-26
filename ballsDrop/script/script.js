var pg = document.getElementById('pg');
var scrWidth = document.documentElement.clientWidth;
var scrHeight = document.documentElement.clientHeight - 5;
var x = [];
var y = [];
var x1 = [];
var y1 = [];
var diff = 1;
var objSizes = {ball: 20, desk: 100};
var deskCoords = {
  top: scrHeight  - objSizes.ball - objSizes.ball / 2, 
  left: scrWidth / 2 - objSizes.desk
};
var scoreToBall = 3;
var globalScore = 0;
pg.setAttribute('width', scrWidth + 'px');
pg.setAttribute('height', scrHeight + 'px'); 
var pgCon = pg.getContext('2d');

// console.log (document.documentElement.clientWidth);

function drawObj(x, y, obj, reDraw) {
  if (reDraw) {
    if (obj == 'ball') {
      pgCon.fillStyle = '#fff';
      pgCon.fillRect(x, y, objSizes.ball, objSizes.ball);    
    } else if (obj == 'desk'){
      pgCon.fillStyle = '#fff';
      pgCon.fillRect(x, y, objSizes.desk + diff * objSizes.ball, objSizes.ball);       
    }
  } else {
    if (obj == 'ball') {
      pgCon.fillStyle = '#f00';
      pgCon.fillRect(x, y, objSizes.ball, objSizes.ball);    
    } else if (obj == 'desk'){
      pgCon.fillStyle = '#00f';
      pgCon.fillRect(x, y, objSizes.desk + diff * objSizes.ball, objSizes.ball);       
    }
  }
}

pg.addEventListener ('mousemove', click);
function click(e) {
  drawObj(deskCoords.left, deskCoords.top, 'desk', true);
  deskCoords = {
    top: scrHeight - objSizes.ball - objSizes.ball / 2, 
    left: e.clientX - objSizes.desk / 2
  } 
  drawObj(deskCoords.left, deskCoords.top, 'desk', false);
}
function pgResize() {
  if (document.documentElement.clientWidth<scrWidth || document.documentElement.clientWidth>scrWidth) {
    scrWidth = document.documentElement.clientWidth;
    pg.setAttribute('width', scrWidth + 'px');
    for (var i = 1; i <= diff; i++) {
          if (x[i]>=scrWidth) {
            x[i] = scrWidth / 2;
          }
        }
        if (deskCoords.left > scrWidth) {
          deskCoords.left = scrWidth / 2;
        }   
  }
  if (document.documentElement.clientHeight<scrHeight - 5 || document.documentElement.clientHeight>scrHeight - 5){
    scrHeight = document.documentElement.clientHeight - 5;
    pg.setAttribute('height', scrHeight + 'px');     
    for (var i = 1; i <= diff; i++) {
          if (y[i]>=scrHeight) {
            y[i] = scrHeight / 2;
          }
        }    
        if (deskCoords.top > scrHeight) {
          deskCoords.top = scrHeight - 30;
        }   
  }  
}
function ballsCollider(i) {      
    var deskShape = {
      top : deskCoords.top,
      left : deskCoords.left,
      bottom : deskCoords.top + objSizes.ball,
      right : deskCoords.left + objSizes.desk  + diff * objSizes.ball
    }
    var ballShape = {
      top : y[i],
      left : x[i],
      bottom : y[i] + objSizes.ball,
      right : x[i] + objSizes.ball
    }


    if (ballShape.right+x1[i]>=scrWidth || x[i]+x1[i]<0) {
      x1[i] = -x1[i];
    }

    if (y[i]+y1[i]<0) {
      y1[i] = -y1[i];
    }

    if (ballShape.bottom+y1[i]>=deskShape.top && ballShape.bottom+y1[i]<=deskShape.bottom){ //open1
      if (ballShape.right+x1[i]>=deskShape.left && ballShape.left+x1[i]<=deskShape.right) { //open2
        y1[i] = -y1[i];
        globalScore++;
        if (diff<8) { //open3
          scoreToBall--; 
          if (scoreToBall==0) { //open4
            scoreToBall = 3;
            diff++;  
          }           //close4
        }//close3
      } else { //close 2 open 2
        if (diff>0) { //open 3
          scoreToBall = 3;
          
            // x[i]=1; 
            y[i]=1;
            x1[i]=diff; 
            y1[i]=diff+3;              

            x[0]=x[diff]; x1[0]=x1[diff];
            y[0]=y[diff]; y1[0]=y1[diff];
            x[diff]=x[i]; x1[diff]=x1[i];
            y[diff]=y[i]; y1[diff]=y1[i];
            x[i]=x[0];    x1[i]=x1[0];
            y[i]=y[0];    y1[i]=y1[0];
            drawObj(x[diff], y[diff], 'ball', true);
          diff--;  

          } else { //close 3 open 3 
            // gameOver = true;
            pgCon.fillStyle = '#0f0';
            pgCon.font = '60px arial';
            pgCon.textBaseline = 'middle'; 
            pgCon.fillText('next ball ' + scoreToBall, scrWidth / 3, scrHeight / 3);
            pgCon.fillText('balls ' + diff, scrWidth / 3 * 2, scrHeight / 3);
            pgCon.fillText('score ' + globalScore, scrWidth / 2, scrHeight / 3 * 2);
            pgCon.fillStyle = '#f00';
            pgCon.fillText('Game Over', scrWidth / 2, scrHeight / 2);
            clearInterval(intervalId);

          }          //close 3
        } //close 2
      } //
}
function ballsRoll() {
  pgResize();
  for (var i = 1; i <= diff; i++) {
    // drawObj(x[i],y[i],'ball',true); // reDraw ball
    // drawObj(deskCoords.left, deskCoords.top, 'desk', true); // reDraw desk
    x[i] += x1[i];
    y[i] += y1[i];
    // if (deskCoords.left - objSizes / 2 < x[i]) { //dump AI
    //   deskCoords.left += x1[i] + 5;
    // } else {
    //   deskCoords.left -= x1[i] - 5;
    // }
    // deskCoords.left = x[i] - objSizes.desk / 2; //perfect AI
    drawObj(x[i],y[i],'ball',false);  
    drawObj(deskCoords.left, deskCoords.top, 'desk', false);
    ballsCollider(i);
            // pgCon.fillStyle = '#00f';
            // pgCon.fillRect(scrWidth / 3, scrHeight / 3 - 30, 30, 60);
    pgCon.fillStyle = '#0f0';
    pgCon.font = '60px arial';
    pgCon.textBaseline = 'middle'; 
    pgCon.fillText('next ball ' + scoreToBall, scrWidth / 3 - 150, scrHeight / 3);
    pgCon.fillText('balls ' + diff, scrWidth / 3 * 2 - 90, scrHeight / 3);
    pgCon.fillText('score ' + globalScore, scrWidth / 2 - 120, scrHeight / 3 * 2);
  }

}

function geneRation() {
  for (var i = 1; i <=8; i++) {
    x[i] = 1;
    y[i] = 1;
    x1[i] = i;
    y1[i] = i+3;  
  }
}

geneRation();
var intervalId = setInterval(ballsRoll, 20);
