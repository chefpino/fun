function td(x){  
  return "<td>"+x+"</td>";
}

function generateControls() {

  const tr="<tr>";
  const trc="</tr>";
    
  var defaultValue=0;
  var strHTML='<table border="1">';
      strHTML +=  tr;
      strHTML += td("PARAMETER");
      strHTML += td("MIN");
      strHTML += td("SELECT");
      strHTML += td("MAX");
      strHTML += td("CURRENT");;   
      strHTML += trc; 
    
  //---generate html
  for (var key in params) {
      
    defaultValue=paramToSlider(key,params[key].default); 
    
    strHTML=strHTML + tr;
    strHTML=strHTML + td(params[key].label);
    strHTML=strHTML + td(params[key].minLabel);
    strHTML=strHTML + td("<input type='range' min='0' max='100' value='" + defaultValue + "' id='"+ key +"' onchange='updateParam(this.id)' ");
    strHTML=strHTML + td(params[key].maxLabel);
    strHTML=strHTML + td("<div id='val_" + key + "'></div>");
    strHTML=strHTML + trc;
  }
  strHTML=strHTML + '<tr><td colspan=5><button onclick="resetReload()">RESET/RELOAD</button></td></tr>';
  strHTML=strHTML + '</table>';
  document.getElementById("dynamicSliders").innerHTML=strHTML;
  
  //--- assign default value to sliders
  // loadDefaults();
  
  }
//___________________________________________________________________________________
function loadDefaults() {

    // load all default values
    for (var key in params) {
        
        defaultValue=paramToSlider(key,params[key].default); 
        document.getElementById(key).value=defaultValue;
        document.getElementById("val_" + key).innerHTML=params[key].default;
    
    }    
  }
//___________________________________________________________________________________
//this f can update an existing input box with a value taken from a slider
  function updateParam(x) {
  
    var iTemp=1*document.getElementById(x).value;
    params[x].val=sliderToParam(x,iTemp);
    //console.log(params[x].val);
    document.getElementById("val_" + x).innerHTML=params[x].val;
    reDraw();
    
  }
//___________________________________________________________________________________
//these functions map the 0-100 value of a slider to a given range for a 
//given parameter and viceversa 

  function paramToSlider(strParam,iValue){  
    var x1=1*params[strParam].min;
    var x2=1*params[strParam].max;  
    return Math.round(100*(1*iValue-x1)/(x2-x1));
    }
    
    function sliderToParam(strParam,iValue){  
    var x1=1*params[strParam].min;
    var x2=1*params[strParam].max;  
    return x1+iValue*(x2-x1)/100;
    }
//___________________________________________________________________________________