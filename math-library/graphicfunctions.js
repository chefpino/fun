class ReMap {
  constructor(cW, cH, x0, x1, y0, y1, fixedOrigin) {
    this.cW = cW;
    this.cH = cH;
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
    this.fixedOrigin = fixedOrigin;
  }

  //methods --------------------------------------------------------------------------

  //convert x+iy complex number into canvas coordinates
  x(x) {
    return (
      (this.fixedOrigin ? this.cW/2+x*this.cW/(this.x1-this.x0):(x-this.x0)*cW/(this.x1-this.x0))  
    )
  }
  y(y) {
    return (
      (this.fixedOrigin ? this.cH/2-y*this.cH/(this.y1-this.y0):this.cH-(y-this.y0)*this.cH/(this.y1-this.y0))
    )
  }

  //mouse coordinates translated in point x+iy of the complex plane
  m2x(x) {
    return ((x - this.cW / 2) * (this.x1 - this.x0)) / this.cW;
  }
  m2y(y) {
    return ((this.cH / 2 - y) * (this.y1 - this.y0)) / cH;
  }

  plot(x, y) {
    //x,y are canvas coordinates
    this._myCanvas.beginPath();
    this._myCanvas.fillStyle = "red"; //hard coded!!!
    this._myCanvas.arc(x, y, 2, 0, 2 * Math.PI); //.arc(x,y,2,1);
    this._myCanvas.fill();
  }

  drawAxis() {
    //this needs major improvements that makes it flexible for
    //origin showing or not, plus writing coordinates on edges of canvas true/false

    this._objCanvas.strokeStyle = "#000000";
    this._objCanvas.lineWidth = "0.2";
    this._objCanvas.fillStyle = "black";
        //--- x axis -------------------------
        if (this.y(0) >= 0 && this.y(0) <= this.cH) {
          this._objCanvas.moveTo(this.x(this.x0), this.y(0));
          this._objCanvas.lineTo(this.x(this.x1), this.y(0));
          this._objCanvas.stroke();
          //writing can be made optional
          this._objCanvas.fillText(this.x0, 5, this.y(0));
          this._objCanvas.fillText(this.x1, this.cW - 20, this.y(0));
        }
        // if axis is out of the canvas just write the x range
        if (this.y(0) < 0 || this.y(0) > cH) {
          this._objCanvas.fillText(this.x0, 5, this.cH / 2);
          this._objCanvas.fillText(this.x1, this.cW - 20, this.cH / 2);
        }

        //--- y axis -------------------------
        if (this.x(0) >= 0 && this.x(0) <= this.cW) {
          this._objCanvas.moveTo(this.x(0), this.y(y0));
          this._objCanvas.lineTo(this.x(0), this.y(y1));
          this._objCanvas.stroke();
          this._objCanvas.fillText(this.y0, this.x(0), this.cH - 5);
          this._objCanvas.fillText(this.y1, this.x(0), 10);
        }
        // if axis is out of the canvas just write the y range
        if (this.x(0) < 0 || this.x(0) > this.cW) {
          this._objCanvas.fillText(this.y0, this.cW / 2, this.cH - 5);
          this._objCanvas.fillText(this.y1, this.cW / 2, 10);
        }
    
    this._objCanvas.beginPath();
    this._objCanvas.arc(this.x(0), this.y(0), this.cW/(this.x1-this.x0), 0, 2 * Math.PI); //.arc(x,y,2,1); //hardcoded!
    this._objCanvas.stroke();
  }

  drawSegment(c1, c2, strColor) {
    this._objCanvas.beginPath();
    this._objCanvas.lineWidth = "0.5";
    this._objCanvas.strokeStyle = strColor;
    this._objCanvas.moveTo(this.x(c1.x), this.y(c1.y));
    this._objCanvas.lineTo(this.x(c2.x), this.y(c2.y));
    this._objCanvas.stroke();
  }


  // properties --------------------------------------
  //--- pass canvas ctx object
  set objCanvas(obj) {
    this._objCanvas = obj;
  }
  //-------------------------

} //--- end of class definition ---
