

function paramToSlider(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return Math.round(100*(1*iValue-x1)/(x2-x1));
//return 1*x1;
}

function sliderToParam(strParam,iValue){  
var x1=1*params[strParam].min;
var x2=1*params[strParam].max;  
return x1+iValue*(x2-x1)/100;
//return 1*x1;
}

//------------ LEAF ----------------------------------------
function leaf(x,y,l,alpha,beta){
  /*
  x,y coordinate beginning leaf
  l: length of leaf
  alpha: angle of the leaf simmetry line
  b: angle of the arc describing the leaf 
  */
  
  //try changing alpha a little bit to make leaves more natural
  if (alpha<pi/2) {
    alpha=alpha-Math.random();
  } else {
    alpha=alpha+Math.random();
  }


  var r=l/(2*Math.sin(beta/2));
  var gamma=pi/2-beta/2-alpha;
  var xc=0;
  var yc=0;
  


 // leaf first half ----------------------------
    
  //calc center
  xc=x+r*Math.cos(gamma);
  yc=y-r*Math.sin(gamma);
  
  //leaf'simmetry line
  ctx.beginPath();
  ctx.strokeStyle = "darkgreen";

  ctx.moveTo(px(x),py(y));
  ctx.lineTo(px(x+l*Math.cos(alpha)),py(y+l*Math.sin(alpha)));
  ctx.stroke(); 
  
  //--- leaf 1st arc
  ctx.arc(px(xc),py(yc), r, 2*pi-(pi-gamma-beta),2*pi-(pi-gamma),true);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  
  // leaf second  half ----------------------------
  
  //calc center
  var diagonal=Math.sqrt(r*r-l*l/4)
  xc=xc-2*diagonal*Math.cos(gamma+beta/2);
  yc=2*diagonal*Math.sin(gamma+beta/2)+yc;

  ctx.beginPath();
  ctx.arc(px(xc),py(yc), r, -1*(alpha+beta/2)+pi/2,-1*(alpha-beta/2)+pi/2,false);
  ctx.fillStyle = "lightgreen";
  ctx.fill();
  ctx.stroke();  
}


//---------- DRAW --------------------------------------------
function draw(x,y,angle,len,trunk){
  
  var newx=x+len*Math.cos(angle);
  var newy=y+len*Math.sin(angle);
  
  ctx.lineWidth = minBranch+trunk;
  ctx.strokeStyle = "brown";   
  ctx.beginPath();
  //ctx.save(); // check later to better understand

  ctx.moveTo(px(x),py(y));
  ctx.lineTo(px(newx),py(newy));
  ctx.stroke();
  if (len >= minLen) {      

    draw(newx,newy,angle+pi/2*Math.random()*dAngle,len*reduction,trunk*trunkReduction);
    draw(newx,newy,angle-pi/2*Math.random()*dAngle,len*reduction,trunk*trunkReduction);
    draw(newx,newy,angle+pi/24*rnd(-1,1),len*reduction,trunk*trunkReduction);

  } else {
    // WIP leaf length
    leaf(newx,newy,len,angle,2*pi/3);
  }
   
}   
//-----------------------------------------------------------------------

function initControls() {

var defaultValue=0;
var strHTML='<table border="1">';
    strHTML=strHTML + '<tr>';
    strHTML=strHTML + '<td>PARAMETER</td>';
    strHTML=strHTML + '<td>MIN</td>';
    strHTML=strHTML + '<td align="center">SELECT</td>';
    strHTML=strHTML + '<td>MAX</td>';
    strHTML=strHTML + '<td>ACTUAL</td>';   
    strHTML=strHTML + '</tr>'; 
  
//---generate html  
for (var key in params) {
    
  defaultValue=paramToSlider(key,params[key].default); 
  
  strHTML=strHTML + '<tr>';
  strHTML=strHTML + '<td>'+params[key].label + ':</td>';
  strHTML=strHTML + '<td>'+params[key].minLabel + '</td>';
  strHTML=strHTML + '<td><input type="range" min="0" max="100" value="'+defaultValue+'" id="'+key+'" onchange="updateParam(this.id)"></td>';
  strHTML=strHTML + '<td>'+params[key].maxLabel + '</td>';
  strHTML=strHTML + '<td><div id="val_' + key + '"></div></td>';
  strHTML=strHTML + '</td></tr>';
}
strHTML=strHTML + '<tr><td colspan=5><button onclick="resetReload()">RESET/RELOAD</button></td></tr>';
strHTML=strHTML + '</table>';
document.getElementById("dynamicSliders").innerHTML=strHTML;

//--- assign default value to sliders
loadDefaults();

}

//--- this functions remap the canvas. The origin is the middle point of the rect base. 
function px(x){
  return cW/2+x;
}
function py(y){
  return cH-y;
}
//------------------------------------------------------------------------------------

function plot(x,y) {
  //for debugging only
  ctx.beginPath();
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(x,y,3,3);
}
// --- generate random number within the given interval ------------------------------
function rnd(iMin,iMax){
  return iMin+Math.random()*(iMax-iMin);
}
//------------------------------------------------------------------------------------





