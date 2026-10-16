(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,393);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,538,172);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,462);


(lib.Bitmap26 = function() {
	this.initialize(img.Bitmap26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,352);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,210);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1500);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1193,350);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.Bitmap33copy = function() {
	this.initialize(img.Bitmap33copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1308,798);


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,807,447);


(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,410);


(lib.Bitmap40 = function() {
	this.initialize(img.Bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,397);


(lib.Bitmap41 = function() {
	this.initialize(img.Bitmap41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,209);


(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,157);


(lib.Bitmap44 = function() {
	this.initialize(img.Bitmap44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,164);


(lib.Bitmap45 = function() {
	this.initialize(img.Bitmap45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,165);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,378);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1122,640);


(lib.Picture10 = function() {
	this.initialize(img.Picture10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1526,837);


(lib.Picture11 = function() {
	this.initialize(img.Picture11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2585,1732);


(lib.Picture6 = function() {
	this.initialize(img.Picture6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1980,1433);


(lib.Picture7 = function() {
	this.initialize(img.Picture7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,383);


(lib.WhatsAppImage20250805at021103 = function() {
	this.initialize(img.WhatsAppImage20250805at021103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,785,391);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.quit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9BVQgUAAAAgUIAAiBQAAgUAUAAIF7AAQAUAAAAAUIAACBQAAAUgUAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkLELQhuhuAAidQAAibBuhwQBwhuCbAAQCdAABuBuQBvBwAACbQAACdhvBuQhuBvidAAQibAAhwhvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-37.8,75.6,75.6);


(lib.mouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EheNAzDMAAAhmFMC8bAAAMAAABmFg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouse, new cjs.Rectangle(-603,-326.7,1206,653.4), null);


(lib.home = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("AoTHNIITuZIIUOZg");
	this.shape.setTransform(0.025,-23.0675,1,0.4549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("AhcCWIAAkqIC5AAIAAEqg");
	this.shape_1.setTransform(-8,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AlHEDIAAoFIKPAAIAAIFg");
	this.shape_2.setTransform(0.025,18.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-44,106.30000000000001,88.1);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF66").s().p("AlHl5IKOF5IqOF6g");
	this.shape.setTransform(33.55,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF66").s().p("AlPC8IAAl3IKfAAIAAF3g");
	this.shape_1.setTransform(-32.75,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-37.8,132.6,75.69999999999999);


(lib.teoriStarter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		const root = this;
		this.stop(); // Berhenti di frame awal
		
		if (!root._navigasiDipasang) {
		  root._navigasiDipasang = true;
		  root.currentFrame = 0;
		
		  const totalFrames = root.totalFrames;
		
		  // Fungsi untuk pindah frame tertentu
		  function gotoFrame(n) {
		    if (n < 0) n = 0;
		    if (n >= totalFrames) n = totalFrames - 1;
		
		    root.gotoAndStop(n);
		    root.currentFrame = n;
		
		    // Update teks jika ada
		    if (root.txtFrame) {
		      root.txtFrame.text = "Frame: " + n;
		    }
		  }
		
		  // Tombol Next
		  if (root.btnNext) {
		    root.btnNext.on("click", () => {
		      gotoFrame(root.currentFrame + 1);
		    });
		  }
		
		  // Tombol Back
		  if (root.btnBack) {
		    root.btnBack.on("click", () => {
		      gotoFrame(root.currentFrame - 1);
		    });
		  }
		
		  // Tombol Papan (ikut Next)
		  if (root.btnPapan) {
		    root.btnPapan.on("click", () => {
		      gotoFrame(root.currentFrame + 1);
		    });
		  }
		
		  // Tombol Home (kembali ke frame awal)
		  if (root.btnHome) {
		    root.btnHome.on("click", () => {
		      gotoFrame(0);
		    });
		  }
		
		  // Tombol Quit (pindah ke YouTube)
		 if (root.btnQuit) {
		  root.btnQuit.on("click", () => {
		    window.close(); // Menutup tab ini jika diizinkan
		  });
		}
		
		
		  // Navigasi dengan keyboard
		  document.addEventListener("keydown", function (e) {
		    if (e.key === "ArrowRight" ||e.key === "ArrowDown"|| e.key === "Enter") {
		      gotoFrame(root.currentFrame + 1);
		    } else if (e.key === "ArrowLeft" ||e.key === "ArrowUp") {
		      gotoFrame(root.currentFrame - 1);
		    }
		  });
		
		  // Navigasi dengan klik kiri di luar tombol
		  root.stage.addEventListener("stagemousedown", function (evt) {
		    const pt = root.globalToLocal(evt.stageX, evt.stageY);
		
		    // Cek jika klik tidak mengenai tombol-tombol utama
		    const isOverButton = 
		      (root.btnNext && root.btnNext.hitTest(pt.x, pt.y)) ||
		      (root.btnBack && root.btnBack.hitTest(pt.x, pt.y)) ||
		      (root.btnPapan && root.btnPapan.hitTest(pt.x, pt.y)) ||
		      (root.btnHome && root.btnHome.hitTest(pt.x, pt.y)) ||
		      (root.btnQuit && root.btnQuit.hitTest(pt.x, pt.y));
		
		    if (!isOverButton) {
		      gotoFrame(root.currentFrame + 1);
		    }
		  });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Dasar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E5EAB").s().p("AA8BxQgFgEgEgGIgKgQIgTgfQgKgRgIgJQgHgJgIgDQgIgDgMgBIgRAAIAABKQAAAOgHAIQgFAGgLABQgLAAgGgIQgHgHABgOIAAivQAAgPAGgHQAHgHAPABIBKAAQAQAAALABQAMABAIAEQALAFAJAIQAHAJAFALQAEALAAANQAAAZgOAPQgOAPgeAGQAMAHAMANQALANAJAOQAIAOAFAMQAGAMAAAEQAAAEgDAFQgEAEgEADQgGADgGAAQgIAAgFgEgAgwgRIApAAQARgBALgDQALgCAHgIQAFgGAAgNQAAgJgEgIQgGgGgIgEQgIgDgXAAIgrAAg");
	this.shape.setTransform(-600.05,8.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E5EAB").s().p("Ag7ByQgPAAgHgGQgGgHAAgPIAAirQAAgKADgHQADgGAGgDQAGgCAKAAIB6AAQALAAAFAEQAGAGAAAIQAAAHgGAFQgFAFgLAAIhoAAIAAA5IBfAAQALAAAFAEQAGAFAAAIQAAAHgGAEQgFAGgLAAIhfAAIAABAIBrAAQALABAGAFQAFAFAAAIQAAAIgFAGQgGAEgLAAg");
	this.shape_1.setTransform(-622.075,8.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_2.setTransform(-643.375,8.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E5EAB").s().p("AA8BxQgFgEgEgGIgKgQIgTgfQgKgRgIgJQgHgJgIgDQgIgDgMgBIgRAAIAABKQAAAOgHAIQgFAGgLABQgLAAgGgIQgHgHABgOIAAivQAAgPAGgHQAHgHAPABIBKAAQAQAAALABQAMABAIAEQALAFAJAIQAHAJAFALQAFALgBANQAAAZgOAPQgOAPgeAGQAMAHAMANQALANAJAOQAIAOAFAMQAGAMAAAEQAAAEgDAFQgEAEgEADQgGADgGAAQgIAAgFgEgAgwgRIApAAQARgBALgDQALgCAHgIQAFgGAAgNQAAgJgEgIQgGgGgIgEQgIgDgXAAIgrAAg");
	this.shape_3.setTransform(-664.4,8.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E5EAB").s().p("ABKB0QgEgCgCgDQgDgDgDgHIgFgNIgLgcIhcAAIgLAdQgHARgEAHQgFAFgKABQgJAAgGgHQgHgGAAgJIABgJIAGgOIA6iUIAGgPQAEgJAEgGQAEgGAGgDQAHgFAJAAQAJAAAGAFQAHADAEAGIAHAMIAGASIA8CSQAHASAAAHQAAAIgGAHQgHAHgJAAQgGgBgEgCgAgiAZIBDAAIghhdg");
	this.shape_4.setTransform(-687.925,8.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_5.setTransform(-709.375,8.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAFAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQAUAAANgKQANgKgBgOQABgLgIgIQgGgHgMgDQgLgFgRgDQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUABAQAFQAQAFAKAJQAKAJAEAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_6.setTransform(-729.95,8.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E5EAB").s().p("ABJBuQgFgGAAgOIAAidIglCRIgGAVQgCAHgGAFQgHAGgKAAQgHAAgGgEQgFgEgDgFIgGgMIgDgOIgliRIAACdQAAAOgGAGQgFAHgLAAQgIAAgGgHQgHgGAAgOIAAi0QAAgPAJgFQAHgGANABIAPAAQAMAAAHACQAFACAEAGIAGAUIAgB8IAhh8IAHgUQACgGAHgCQAFgCANAAIAOAAQAOgBAIAGQAHAFABAPIAAC0QgBAOgFAGQgHAHgJAAQgJAAgHgHg");
	this.shape_7.setTransform(-762.05,8.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E5EAB").s().p("Ag7ByQgPAAgHgGQgGgHAAgPIAAirQAAgKADgHQADgGAGgDQAGgCAKAAIB6AAQALAAAFAEQAGAGAAAIQAAAHgGAFQgFAFgLAAIhoAAIAAA5IBfAAQALAAAFAEQAGAFAAAIQAAAHgGAEQgFAGgLAAIhfAAIAABAIBrAAQALABAGAFQAFAFAAAIQAAAIgFAGQgGAEgLAAg");
	this.shape_8.setTransform(-785.425,8.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_9.setTransform(-806.725,8.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAFALAFAIQAFAHAIAEQAKAGAPAAQATAAAOgKQAMgKAAgOQAAgLgGgIQgIgHgKgDQgMgFgRgDQgZgHgQgHQgRgHgJgNQgKgNAAgVQAAgSAKgPQAKgOATgJQAUgHAagBQAVABAPAFQAPAFAKAJQAKAJAGAJQAEAKAAAIQAAAJgFAGQgHAHgJAAQgIAAgDgEQgFgEgEgJQgHgNgJgHQgIgHgSAAQgSgBgLAJQgMAHAAAMQAAAGAEAFQAEAFAGAEIANAGIAWAFQAUAFAPAGQAQAFALAHQALAIAGALQAGANAAARQAAAVgLAQQgLAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_10.setTransform(-827.3,8.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgHAKAAQAKAAAHAHQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_11.setTransform(-843.075,8.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAFAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQAUAAANgKQANgKgBgOQABgLgIgIQgGgHgMgDQgLgFgRgDQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUABAQAFQAQAFAKAJQAKAJAEAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_12.setTransform(-858.65,8.45);

	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-942,-160);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E5EAB").s().p("AgRBwQgIgGAAgLQAAgKAHgHQAHgGAKAAQAJAAAHAGQAGAHAAAKQAAALgHAGQgHAGgIAAQgJAAgHgGgAgQA0QgGgFAAgLQAAgNAEgJQAEgKAHgGIARgSIAPgNQAEgEADgGQADgFAAgHQAAgMgJgJQgJgIgPAAQgQAAgIAJQgJAIgFARQgGASgOAAQgJAAgGgGQgGgHAAgHQAAgPAJgPQAKgPASgKQASgKAYAAQAWAAASAIQARAJAKAOQAJAOAAARQAAANgFAKQgGAKgHAIIgbAXIgIAJIgFAGIgCAHIgDAKQgDAQgPAAQgIAAgFgFg");
	this.shape_13.setTransform(-626.925,-211.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_14.setTransform(-640.475,-211.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_15.setTransform(-654.45,-207.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_16.setTransform(-668.475,-211.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgDgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEgBgHQABgGAEgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAFAEABAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIAAAQQABAFADADQADAEAHAAIALgCIAKgBQAFAAAEAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_17.setTransform(-685.95,-210.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_18.setTransform(-701.675,-208);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgGAKgBQAKABAGAGQAGAHAAAMIAABAQAIgKAIgFQAHgFAJgDQAJgDALAAQAQAAANAHQANAGAGAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgGAHgJAAQgWAAAAgag");
	this.shape_19.setTransform(-720.8,-211.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_20.setTransform(-734.825,-211.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3E5EAB").s().p("AgOBwQgGgHAAgMIAAi5QAAgMAGgHQAFgGAJgBQAKABAGAGQAFAHAAAMIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_21.setTransform(-743.475,-211.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_22.setTransform(-757.275,-208);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3E5EAB").s().p("ABKBuQgGgGAAgOIAAidIglCRIgFAVQgDAHgGAFQgGAGgLAAQgHAAgGgEQgGgEgDgFIgEgMIgEgOIgliRIAACdQAAAOgFAGQgGAHgKAAQgJAAgHgHQgGgGAAgOIAAi0QAAgPAIgFQAIgGAOABIAOAAQANAAAFACQAHACACAGIAGAUIAhB8IAhh8IAGgUQADgGAGgCQAGgCANAAIAPAAQANgBAHAGQAJAFgBAPIAAC0QABAOgHAGQgFAHgKAAQgKAAgFgHg");
	this.shape_23.setTransform(-780.1,-210.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQABgVgHgKQgFgLgRAAQgLAAgJAHQgKAGgEAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAFgHQAGgGAKgBQALABAFAGQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHACAKQABAJAAAMIAABSQAAANgGAGQgFAHgLAAQgUAAgBgag");
	this.shape_24.setTransform(-811.1,-211.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_25.setTransform(-830.325,-208);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3E5EAB").s().p("AAoBQQgHgHABgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAEADADAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_26.setTransform(-849.45,-207.975);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_27.setTransform(-865.125,-207.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_28.setTransform(-882.625,-208);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3E5EAB").s().p("AhQBuQgGgIAAgOIAAivQAAgQAHgGQAHgHAPABIA7AAQAaAAAOADQAOAEALAKQAKAIAFANQAFAOAAAQQAAAjgVARQgWATgqgBIgqAAIAABBQAAAOgGAHQgHAIgKAAQgKgBgHgGgAgogLIAfAAQAQABALgEQALgEAGgHQAFgIAAgNQAAgPgIgJQgKgKgfAAIgfAAg");
	this.shape_29.setTransform(-902.275,-210.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQARQgGgGgBgLQABgJAGgHQAHgGAJgBQAJABAIAGQAGAHAAAJQAAALgGAGQgHAHgJAAQgJAAgIgHg");
	this.shape_30.setTransform(-607.65,-153.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AhPBvQgDgHAAgOIAAi3QAAgMAFgGQAFgGAJAAQAJAAAHAGQAFAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAKATgBAbQAAAUgFAPQgGARgKALQgJALgNAGQgNAGgQAAQgRAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgLAAgFgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQALAAAIgGQAJgGAGgLQAGgNAAgRQAAgRgGgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_31.setTransform(-622.2,-156.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgJAGQgIAHgKADQgJADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAKAAAFAHQAHAGgBANIAABDQABAPACAKQACAKAHAGQAHAFAKAAQAKAAAKgGQAKgGADgLQAEgJABgdIAAg0QAAgNAFgGQAGgHAKAAQAKAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgGgHg");
	this.shape_32.setTransform(-642.3,-159.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAxBwQgGgGABgMIAAgEQgJAKgIAGQgJAGgJADQgKADgLABQgQAAgNgHQgNgGgJgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQANAHANANIAAg/QAAgNAEgHQAGgHAJAAQAKABAGAGQAEAGAAAMIAAC7QABAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgKAGgFAMQgEAMgBARQAAAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAGgNQAFgMAAgRQAAgRgFgNQgGgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_33.setTransform(-662.45,-163);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_34.setTransform(-676.325,-162.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgGAKgBQAKABAGAGQAGAHAAAMIAABAQAIgKAIgFQAIgFAIgDQAJgDALAAQAQAAANAHQANAGAGAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgGAHgJAAQgWAAAAgag");
	this.shape_35.setTransform(-690.3,-163);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIAAgQQABgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEABAGIABARIAAAdIAPAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIALgBQAEAAAFAEQADAEAAAGQABALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_36.setTransform(-713.15,-162.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_37.setTransform(-728.875,-159.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhOBvQgFgHAAgOIAAi3QAAgMAGgGQAFgGAJAAQAKAAAFAGQAGAGAAAMIAAAFQAMgPANgHQANgHAQAAQATAAARAKQAQAKAKAUQAKATAAAbQgBAUgFAPQgGARgKALQgJALgNAGQgNAGgPAAQgSAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgLAAgEgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAKgGQAIgGAGgLQAFgNAAgRQABgRgGgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_38.setTransform(-747.9,-156.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_39.setTransform(-767.875,-159.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AAxBwQgFgGgBgMIAAgEQgIAKgJAGQgIAGgKADQgJADgLABQgPAAgNgHQgOgGgJgMQgJgNgGgQQgEgQAAgTQgBgnAUgWQAUgXAgAAQARABAMAFQANAHAMANIAAg/QAAgNAGgHQAFgHAJAAQALABAFAGQAEAGAAAMIAAC7QAAAMgFAHQgFAFgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQgBAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_40.setTransform(-787.8,-163);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgGgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_41.setTransform(-815,-159.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_42.setTransform(-829.025,-162.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_43.setTransform(-842.075,-159.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_44.setTransform(-860.175,-159.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_45.setTransform(-883.825,-159.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_46.setTransform(-915.525,-159.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_47.setTransform(-935.425,-156.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_48.setTransform(-955.425,-156.675);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_49.setTransform(-974.65,-159.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_50.setTransform(-988.675,-162.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAiBdIAAhIQgBgVgGgKQgFgLgSAAQgKAAgJAHQgKAGgEAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAFgHQAGgGAKgBQALABAFAGQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHABAKQACAJAAAMIAABSQAAANgFAGQgHAHgKAAQgVAAABgag");
	this.shape_51.setTransform(-1002.65,-163);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_52.setTransform(-1021.825,-159.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_53.setTransform(-1040.075,-159.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_54.setTransform(-1067.125,-156.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_55.setTransform(-1086.35,-159.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_56.setTransform(-1105.575,-159.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgJAGQgIAHgKADQgJADgMAAQgQAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAKAAAFAHQAHAGgBANIAABDQABAPACAKQACAKAHAGQAHAFAKAAQALAAAJgGQAKgGADgLQAFgJAAgdIAAg0QAAgNAFgGQAGgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgGgHg");
	this.shape_57.setTransform(-1124.7,-159.825);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgGB0QgIgDgGgDIgKgIIgMgMIAAAEQAAAMgGAHQgFAFgKABQgJgBgFgFQgGgHABgMIAAi5QgBgNAGgHQAFgHAJAAQAKABAGAGQAFAGAAAMIAABBQAMgNAMgGQANgHARAAQAVABAQAJQARAKAIAUQAJARAAAbQAAATgEARQgGAQgJAMQgJAMgNAGQgOAHgQAAQgKAAgIgDgAgTgPQgKAGgGAMQgFANAAAQQAAAaAMAOQALAOASAAQAQgBAMgOQALgOAAgZQAAgRgFgMQgEgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape_58.setTransform(-1143.95,-163);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAGAAAEADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_59.setTransform(-1172.05,-159.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_60.setTransform(-1191.275,-159.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AAxBwQgGgGABgMIAAgEQgJAKgIAGQgJAGgJADQgJADgMABQgPAAgOgHQgMgGgKgMQgJgNgGgQQgFgQAAgTQAAgnAUgWQAUgXAfAAQASABANAFQANAHAMANIAAg/QAAgNAEgHQAGgHAKAAQAKABAFAGQAEAGAAAMIAAC7QAAAMgFAHQgGAFgIABQgJAAgGgHgAgUgPQgKAGgEAMQgGAMAAARQAAAQAGANQAGAMAIAGQAKAHAKAAQALAAAKgHQAJgFAGgNQAFgMAAgRQAAgRgFgNQgGgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_61.setTransform(-1211.2,-163);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgVAsQgDgEAAgEQAAgGAGgEQASgKAAgQQgKAAgHgFQgIgGAAgMQAAgJAIgHQAHgHAKAAQAHAAAGAEQAGAEADAIQAEAIAAAMQAAAOgHAOQgGANgKAIQgIAIgIAAQgFAAgDgDg");
	this.shape_62.setTransform(-1233.625,-151.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_63.setTransform(-1248.275,-159.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAhBdIAAhIQABgVgHgKQgGgLgQAAQgLAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAGgHQAFgGAKgBQALABAFAGQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAHAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgFAHgLAAQgUAAgBgag");
	this.shape_64.setTransform(-1267.4,-163);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_65.setTransform(-1286.625,-159.85);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_66.setTransform(-1304.825,-159.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAGAGABANIAABDQgBAPADAKQADAKAGAGQAHAFAKAAQAKAAAKgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_67.setTransform(-1323.1,-159.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgVAsQgDgEAAgEQAAgGAGgEQASgKAAgQQgKAAgHgFQgIgGAAgMQAAgJAIgHQAHgHAKAAQAHAAAGAEQAGAEADAIQAEAIAAAMQAAAOgHAOQgGANgKAIQgIAIgIAAQgFAAgDgDg");
	this.shape_68.setTransform(-155.275,-190.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_69.setTransform(-164.725,-201.95);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_70.setTransform(-177.775,-198.875);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIAAAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_71.setTransform(-195.875,-198.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_72.setTransform(-211.375,-198.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AhOBvQgFgHAAgOIAAi3QAAgMAGgGQAFgGAKAAQAIAAAGAGQAGAGAAAMIAAAFQAMgPANgHQANgHAQAAQATAAARAKQAQAKAKAUQAKATAAAbQgBAUgFAPQgGARgJALQgKALgOAGQgNAGgOAAQgSAAgNgHQgMgIgLgOIAABAQAAAcgUAAQgMAAgEgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAKgGQAJgGAFgLQAFgNAAgRQAAgRgEgMQgGgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_73.setTransform(-228.95,-195.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_74.setTransform(-253.525,-198.875);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_75.setTransform(-277.375,-198.875);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgIAAQgKAAgGgHQgGgGAAgNIAAi1QAAgPAGgHQAFgIALAAQAKABAFAGQAGAHAAANIAABnIAvgyIANgMQAFgEAHAAQAIAAAGAFQAEAFAAAIQAAAJgRAQIgWATIAsBFIAHAMQACAEAAADQgBALgFAFQgGAGgJABQgIAAgEgFg");
	this.shape_76.setTransform(-295.55,-202.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgVAsQgDgEAAgEQAAgGAGgEQASgKAAgQQgKAAgHgFQgIgGAAgMQAAgJAIgHQAHgHAKAAQAHAAAGAEQAGAEADAIQAEAIAAAMQAAAOgHAOQgGANgKAIQgIAIgIAAQgFAAgDgDg");
	this.shape_77.setTransform(-332.275,-190.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AhOBvQgFgHAAgOIAAi3QAAgMAGgGQAFgGAJAAQAKAAAFAGQAGAGAAAMIAAAFQAMgPANgHQANgHAQAAQATAAARAKQAQAKAKAUQAKATAAAbQgBAUgFAPQgGARgKALQgJALgNAGQgNAGgPAAQgSAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgLAAgEgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAKgGQAIgGAGgLQAFgNAAgRQABgRgGgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_78.setTransform(-346.95,-195.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_79.setTransform(-366.925,-198.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_80.setTransform(-385.125,-198.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_81.setTransform(-398.075,-201.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAJAAAZIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgNAGgGQAFgHAKAAQAKAAAGAHQAGAGAAANIAABAQAIgJAIgGQAHgGAJgCQAJgDALAAQAQAAANAHQANAGAGAOQAFAHABAKQACAJAAAMIAABSQAAANgFAGQgGAHgKAAQgWAAAAgag");
	this.shape_82.setTransform(-434.05,-202.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_83.setTransform(-453.275,-198.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgIAAQgKAAgGgHQgFgGgBgNIAAi1QABgPAFgHQAGgIAKAAQAJABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAGAFQAEAFAAAIQAAAJgRAQIgWATIAsBFIAGAMQACAEABADQAAALgGAFQgGAGgJABQgHAAgFgFg");
	this.shape_84.setTransform(-471.25,-202.05);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_85.setTransform(-491.525,-195.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AAoBQQgHgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAFADACAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_86.setTransform(-510.75,-198.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_87.setTransform(-529.975,-198.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgOBwQgGgHAAgMIAAi5QAAgNAGgGQAFgHAJAAQAKAAAGAHQAFAGAAANIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_88.setTransform(-543.775,-202.05);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_89.setTransform(-574.425,-201.95);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_90.setTransform(-588.275,-198.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgOBwQgGgHAAgMIAAi5QAAgNAGgGQAFgHAJAAQAKAAAGAHQAFAGAAANIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_91.setTransform(-602.075,-202.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFALAAQAKAAAKgGQAKgGAEgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_92.setTransform(-616.05,-198.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_93.setTransform(-639.875,-198.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIAAAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_94.setTransform(-663.525,-198.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_95.setTransform(-687.175,-198.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgGgGABgNIAAi1QgBgPAGgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAFAFABAIQgBAJgRAQIgXATIAsBFIAIAMQABAEAAADQAAALgFAFQgGAGgJABQgHAAgFgFg");
	this.shape_96.setTransform(-731.85,-202.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQACAKAHAGQAHAFALAAQAKAAAJgGQAJgGAEgLQAFgJAAgdIAAg0QgBgNAHgGQAFgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_97.setTransform(-751.35,-198.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAIAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_98.setTransform(-766.2,-201.775);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_99.setTransform(-782.05,-198.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgJADgMAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQADAKAGAGQAHAFALAAQAJAAAKgGQAKgGADgLQAFgJAAgdIAAg0QAAgNAFgGQAGgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgFgHg");
	this.shape_100.setTransform(-801.4,-198.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AAnBQQgFgHgBgMIAAhGQAAgVgFgMQgHgLgRAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_101.setTransform(-842.75,-198.875);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_102.setTransform(-861.975,-198.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgJAAQgJAAgGgHQgFgGgBgNIAAi1QABgPAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAFAFQAGAFgBAIQAAAJgRAQIgWATIArBFIAHAMQACAEAAADQAAALgFAFQgGAGgJABQgHAAgFgFg");
	this.shape_103.setTransform(-879.95,-202.05);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AhOBvQgEgHgBgOIAAi3QAAgMAGgGQAFgGAKAAQAIAAAGAGQAGAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAJATAAAbQAAAUgFAPQgGARgJALQgKALgOAGQgNAGgPAAQgRAAgMgHQgNgIgLgOIAABAQAAAcgUAAQgNAAgDgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAJgGQAKgGAFgLQAGgNgBgRQAAgRgEgMQgGgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_104.setTransform(-899.35,-195.725);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgJADgOAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAGAGABANIAABDQAAAPACAKQADAKAGAGQAHAFALAAQAKAAAJgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_105.setTransform(-919.45,-198.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAxBwQgGgGAAgMIAAgEQgIAJgJAHQgIAGgKADQgJAEgLAAQgQAAgMgHQgNgGgKgMQgKgNgEgQQgGgQAAgTQAAgnAUgWQAUgXAfAAQASABANAFQAMAHAMANIAAg/QABgNAFgHQAFgGAKgBQAJAAAFAHQAGAGAAAMIAAC7QgBAMgFAGQgGAGgIABQgJAAgGgHgAgUgPQgKAGgEAMQgGAMAAAQQABARAFANQAGAMAIAGQAKAHAKgBQAMABAJgHQAJgFAFgNQAGgMAAgSQAAgQgGgNQgFgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_106.setTransform(-939.6,-202.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_107.setTransform(-953.475,-201.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AAiBdIAAhIQAAgVgHgKQgFgLgRAAQgLAAgJAHQgJAGgFAKQgDAJAAAZIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgNAFgGQAGgHAKAAQALAAAFAHQAGAGAAANIAABAQAIgJAHgGQAIgGAJgCQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHABAKQACAJAAAMIAABSQAAANgFAGQgHAHgKAAQgUAAAAgag");
	this.shape_108.setTransform(-967.45,-202.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_109.setTransform(-981.475,-201.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAxBwQgFgGAAgMIAAgEQgJAJgJAHQgIAGgKADQgJAEgLAAQgQAAgNgHQgMgGgKgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQANAHANANIAAg/QAAgNAEgHQAGgGAJgBQAKAAAGAHQAEAGAAAMIAAC7QABAMgGAGQgFAGgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAAQQgBARAGANQAFAMAKAGQAJAHAKgBQALABAKgHQAJgFAFgNQAGgMAAgSQAAgQgGgNQgFgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_110.setTransform(-996.25,-202.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgGAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_111.setTransform(-1037.45,-198.875);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_112.setTransform(-1056.675,-198.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgFgGAAgNIAAi1QAAgPAFgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAIAMQABAEAAADQAAALgFAFQgFAGgKABQgIAAgEgFg");
	this.shape_113.setTransform(-1074.65,-202.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_114.setTransform(-1094.025,-198.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_115.setTransform(-1129.825,-201.95);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgOBwQgGgHAAgMIAAi5QAAgNAGgGQAFgHAJAAQAKAAAGAHQAFAGAAANIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_116.setTransform(-1138.475,-202.05);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_117.setTransform(-1152.325,-198.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgJAAQgJAAgGgHQgFgGgBgNIAAi1QABgPAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAHAMQACAEAAADQABALgGAFQgGAGgJABQgHAAgFgFg");
	this.shape_118.setTransform(-1170.3,-202.05);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_119.setTransform(-1211.675,-198.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_120.setTransform(-1235.275,-198.875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgRgGgIQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAHAHAOQAGAOAAAYIAAAYIAAAYQAAALAEAOQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgKAAgWIAAgGQgJADgSAEg");
	this.shape_121.setTransform(-1258.975,-198.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAEgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEAAAGIABARIAAAdIAQAAQAKAAAFAEQAEAFAAAGQAAAJgHADQgGAEgOAAIgIAAIAABNIACAQQAAAFADADQADAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQgBALgKAFQgMAGgVAAQgTAAgKgHg");
	this.shape_122.setTransform(-1273.6,-201.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_123.setTransform(-1285.775,-198.875);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIAAAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_124.setTransform(-1303.275,-198.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AhPBvQgDgHAAgOIAAi3QgBgMAGgGQAFgGAKAAQAIAAAGAGQAGAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAJATAAAbQAAAUgFAPQgGARgJALQgKALgOAGQgNAGgPAAQgRAAgMgHQgNgIgLgOIAABAQAAAcgUAAQgNAAgEgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAJgGQAKgGAFgLQAGgNgBgRQAAgRgEgMQgGgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_125.setTransform(-1322.35,-195.725);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_126.setTransform(-155.65,-240.825);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_127.setTransform(-171.375,-237.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_128.setTransform(-190.375,-237.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_129.setTransform(-208.575,-237.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_130.setTransform(-234.725,-237.95);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgGAHgJAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_131.setTransform(-253.9,-237.925);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgOBuQgGgGAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAAMgGAHQgGAGgJABQgIAAgGgIgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_132.setTransform(-267.925,-241);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_133.setTransform(-282.675,-234.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_134.setTransform(-301.9,-237.925);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_135.setTransform(-321.075,-237.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_136.setTransform(-348.175,-237.95);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AAxBwQgGgGAAgMIAAgEQgIAJgJAHQgIAGgKADQgJAEgLAAQgQgBgMgGQgNgHgKgMQgKgLgEgRQgGgQAAgTQAAgnAUgXQAUgWAfABQASAAANAFQAMAHAMANIAAg/QABgNAFgHQAFgGAKgBQAJAAAFAHQAGAGAAAMIAAC7QgBAMgFAGQgGAHgIAAQgJgBgGgGgAgUgPQgKAGgEAMQgGAMAAAQQABARAFANQAGAMAIAGQAKAHAKgBQAMABAJgHQAJgGAFgMQAGgLAAgTQAAgQgGgNQgFgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_137.setTransform(-368.1,-241.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_138.setTransform(-387.175,-237.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AhPBvQgDgHAAgOIAAi3QAAgMAFgGQAFgGAJAAQAJAAAHAGQAFAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAKATgBAbQABAUgGAPQgGARgKALQgJALgNAGQgNAGgQAAQgRAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgLAAgFgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQALAAAIgGQAJgGAGgLQAGgNAAgRQgBgRgFgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_139.setTransform(-406.2,-234.775);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_140.setTransform(-426.125,-237.95);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAGgIABQgKgBgGgGQgGgHAAgMIAAi1QAAgPAGgHQAGgIAKAAQAJABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAGAFQAEAFAAAIQAAAJgRAQIgWAUIAsBEIAGAMQADAEAAADQAAALgGAFQgFAHgKAAQgIgBgEgEg");
	this.shape_141.setTransform(-444.15,-241.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AgOBvQgGgGAAgMIAAi5QAAgNAGgGQAFgHAJAAQAKAAAGAHQAFAGAAANIAAC5QAAAMgFAHQgHAGgJABQgIAAgGgIg");
	this.shape_142.setTransform(-466.375,-241.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_143.setTransform(-480.225,-237.95);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AAmBSQgGgFgCgHIgGgSIgYhSIgXBSQgFARgFAJQgGAJgNAAQgHAAgFgDQgFgDgEgFIgFgMIgEgLIgjhlQgFgOAAgGQAAgHAGgFQAFgGAIAAQALAAADAGQAEAGAEAPIAcBeIAZhXIAHgTQABgGAGgEQAFgFAJAAQAJAAAGAFQAFAEACAGIAGATIAaBXIAcheIAEgPQACgFAEgDQAEgEAIAAQAHAAAGAGQAGAFAAAHQAAAHgFANIgjBlIgHATQgDAGgFAEQgFAFgKAAQgJAAgGgFg");
	this.shape_144.setTransform(-502.675,-237.925);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_145.setTransform(-525.225,-237.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_146.setTransform(-552.275,-237.95);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_147.setTransform(-572.175,-234.775);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_148.setTransform(-591.275,-237.95);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgEAMQgDAJAAAZIAAA2QgBANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_149.setTransform(-610.4,-237.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_150.setTransform(-629.575,-237.95);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_151.setTransform(-644.25,-240.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAnBQQgFgHgBgMIAAhGQAAgVgFgMQgHgLgRAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_152.setTransform(-668.15,-237.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_153.setTransform(-687.375,-237.95);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAGgJABQgJgBgGgGQgFgHgBgMIAAi1QABgPAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAFAFQAGAFgBAIQAAAJgRAQIgWAUIArBEIAHAMQACAEAAADQABALgGAFQgGAHgJAAQgHgBgFgEg");
	this.shape_154.setTransform(-705.35,-241.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgOBuQgGgGAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAAMgGAHQgGAGgJABQgIAAgGgIgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_155.setTransform(-719.525,-241);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_156.setTransform(-729.825,-237.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_157.setTransform(-747.325,-237.95);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgGB0QgIgCgGgEIgLgIIgLgMIAAAEQAAAMgGAGQgFAHgJAAQgKAAgFgHQgGgGABgMIAAi5QgBgNAGgHQAFgGAKgBQAJAAAGAHQAFAGAAAMIAABBQAMgNANgGQAMgHARABQAWAAAPAKQARAJAIAUQAJARAAAbQAAAUgEAQQgGAPgJAMQgJAMgNAHQgOAGgQABQgKgBgIgCgAgTgPQgKAGgGAMQgFAMAAARQAAAaAMAOQALANASAAQAQABAMgOQALgOAAgbQAAgQgEgMQgFgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape_158.setTransform(-766.4,-241.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_159.setTransform(-790.975,-237.925);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_160.setTransform(-814.625,-237.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_161.setTransform(-838.275,-237.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAGgJABQgJgBgGgGQgGgHABgMIAAi1QgBgPAGgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAFAFABAIQAAAJgSAQIgXAUIAsBEIAIAMQABAEAAADQAAALgFAFQgFAHgKAAQgIgBgEgEg");
	this.shape_162.setTransform(-869,-241.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGABANIAABDQAAAPACAKQADAKAGAGQAHAFALAAQAKAAAJgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_163.setTransform(-888.5,-237.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_164.setTransform(-903.35,-240.825);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AAoBQQgHgHABgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAEADADAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_165.setTransform(-919.2,-237.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQACAKAHAGQAHAFALAAQAKAAAJgGQAJgGAEgLQAFgJAAgdIAAg0QgBgNAHgGQAFgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_166.setTransform(-938.55,-237.925);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgOBuQgGgGAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAAMgGAHQgGAGgJABQgIAAgGgIgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_167.setTransform(-960.625,-241);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_168.setTransform(-973.675,-237.925);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_169.setTransform(-992.725,-234.775);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AAnBQQgFgHgBgMIAAhGQAAgVgFgMQgHgLgRAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_170.setTransform(-1011.95,-237.925);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgIAHgKADQgKADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGgBANIAABDQABAPACAKQACAKAHAGQAGAFALAAQAKAAAKgGQAKgGAEgLQADgJAAgdIAAg0QABgNAFgGQAGgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_171.setTransform(-1031.3,-237.925);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgXBwQgGgHAAgMIAAhxIgMAAQgKAAgFgDQgFgFAAgHQAAgPAVAAIALAAIAAgNQAAgUAFgMQAFgLAMgGQALgGAVAAQAlABAAASQAAAGgEAEQgDAEgGAAIgIgBIgLAAQgLAAgEAGQgDAHAAANIAAAKIALAAQAYgBAAAQQAAAKgGACQgHADgLAAIgLAAIAABxQAAAMgGAHQgGAGgIABQgJgBgGgGg");
	this.shape_172.setTransform(-1045.725,-241.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_173.setTransform(-1057.625,-237.925);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_174.setTransform(-1075.125,-237.95);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgGB0QgJgCgGgEIgKgIIgLgMIAAAEQAAAMgGAGQgGAHgIAAQgKAAgFgHQgGgGAAgMIAAi5QAAgNAGgHQAFgGAKgBQAJAAAFAHQAGAGAAAMIAABBQAMgNANgGQAMgHARABQAWAAAPAKQAQAJAJAUQAKARgBAbQAAAUgEAQQgGAPgJAMQgJAMgOAHQgNAGgQABQgKgBgIgCgAgUgPQgJAGgFAMQgGAMAAARQAAAaALAOQAMANASAAQAQABAMgOQALgOAAgbQAAgQgEgMQgFgMgJgGQgJgHgMAAQgLAAgKAHg");
	this.shape_175.setTransform(-1094.2,-241.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_176.setTransform(-1118.675,-237.925);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_177.setTransform(-1136.175,-237.95);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEABgHQgBgGAGgFQAEgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFADADQADAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQgBALgKAFQgMAGgVAAQgTAAgKgHg");
	this.shape_178.setTransform(-1150.85,-240.825);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_179.setTransform(-1163.025,-237.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AAxBRQgHgGgHgMQgPAMgPAGQgNAGgSAAQgRAAgMgGQgMgHgHgLQgHgLAAgNQAAgSALgMQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgEAAgIQAAgLAIgKQAIgLARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAYIAAAYQAAAMAEANQAEANAAADQAAAHgGAGQgHAFgHAAQgHAAgGgGgAAFAJIgYAFQgHACgGAFQgGAGAAAJQAAAJAHAHQAIAHALAAQAMAAALgFQALgGAFgJQAFgJAAgXIAAgGQgJADgSAFg");
	this.shape_180.setTransform(-1180.575,-237.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEACAGIABARIAAAdIAPAAQAKAAAFAEQAEAFAAAGQAAAJgHADQgHAEgMAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIAKgBQAFAAAFAEQAEAEAAAGQAAALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_181.setTransform(-1195.2,-240.825);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_182.setTransform(-1210.125,-237.925);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_183.setTransform(-1240.925,-237.925);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("Ag5BAQgXgYAAgoQAAgSAFgQQAGgQALgMQALgMAPgFQAQgHASAAQAZAAASALQASAKAJARQAJAQAAASQAAAPgJAFQgJAEgRABIhTAAQABAOAFAMQAGAKAKAGQAJAFAKAAQAIABAGgCQAHgCAGgEIAKgIIANgMQAEgDAGABQAGgBAEAEQAFADAAAHQAAAGgFAIQgFAHgJAHQgJAIgOAEQgNAFgSAAQgpAAgWgXgAgYgtQgKALgDAVIBNAAQgCgWgKgKQgKgLgRAAQgPAAgKALg");
	this.shape_184.setTransform(-1264.575,-237.95);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIAAgQQABgGACgEQADgEAFgDQAEgDAGAAQAIAAAGAGQAFAEABAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIALgBQAEAAAFAEQADAEAAAGQABALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_185.setTransform(-1279.25,-240.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_186.setTransform(-1294.175,-237.925);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgOBuQgGgGAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAAMgGAHQgGAGgJABQgIAAgGgIgAgOhQQgGgGAAgKQAAgJAGgGQAHgFAHAAQAJAAAGAEQAGAGAAAKQAAAKgGAGQgGAFgJAAQgIAAgGgFg");
	this.shape_187.setTransform(-1307.125,-241);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("Ag3BpQgPgIgKgQQgKgPAAgPQAAgJAGgFQAGgHAJAAQAHAAAFAGQAFAEAEAJQAEALAFAHQAGAIAJAEQAJAGAPgBQAUAAAMgJQANgKABgOQgBgLgHgIQgHgHgKgEQgLgEgSgEQgZgFgRgIQgQgHgKgNQgKgOAAgTQAAgUAKgOQALgOATgJQAUgHAagBQAUAAAQAGQAPAFALAJQAJAIAFAKQAFAKAAAJQAAAIgGAGQgFAHgKAAQgHAAgFgEQgEgEgFgJQgFgNgKgHQgIgHgTgBQgRAAgMAIQgLAJABAKQAAAIADAEQAEAGAGADIAOAFIAVAHQATAEAQAGQAQAFALAHQAKAIAHALQAGAMAAASQAAAVgKAQQgMARgUAJQgVAKgcAAQghgBgWgNg");
	this.shape_188.setTransform(-1322,-241.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#3E5EAB").s().p("AA8BxQgFgEgEgGIgKgQIgTgfQgKgRgIgJQgHgJgIgDQgIgEgMAAIgRAAIAABKQAAAOgHAIQgFAGgLABQgLAAgGgIQgHgHABgOIAAivQAAgPAGgHQAHgHAPABIBKAAQAQAAALABQAMABAIAEQALAFAJAIQAHAJAFALQAEALAAANQAAAZgOAPQgOAPgeAGQAMAHAMANQALANAJAOQAIAOAFAMQAGAMAAAEQAAAEgDAFQgEAEgEADQgGADgGAAQgIAAgFgEgAgwgRIApAAQARgBALgDQALgCAHgIQAFgGAAgNQAAgJgEgIQgGgGgIgEQgIgDgXAAIgrAAg");
	this.shape_189.setTransform(-953.75,-304.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAFAFAEAJQAFALAEAIQAGAHAJAEQAJAGAPAAQATAAANgKQAOgKAAgOQgBgLgGgIQgIgHgKgDQgMgEgRgEQgZgHgQgHQgRgHgKgNQgKgNABgVQgBgSAKgPQALgOATgJQAUgHAagBQAUAAAQAGQAQAFAJAJQALAJAEAJQAFAKAAAIQAAAJgFAGQgHAHgJAAQgHAAgEgEQgFgEgEgJQgGgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQgBAGAEAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQAKAIAHALQAGANAAARQAAAVgKAQQgLAQgVAKQgVAKgcAAQghAAgWgOg");
	this.shape_190.setTransform(-1060.65,-304.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#3E5EAB").s().p("ABJBuQgFgGAAgOIAAidIglCRIgFAVQgDAHgGAFQgGAGgLAAQgHAAgGgEQgGgEgDgFIgEgMIgEgOIgliRIAACdQAAAOgFAGQgHAHgJAAQgKAAgGgHQgFgGAAgOIAAi0QAAgPAHgFQAIgGAOABIAOAAQAMAAAHACQAFACAEAGIAFAUIAhB8IAhh8IAGgUQAEgGAFgCQAGgCANAAIAPAAQANgBAHAGQAJAFgBAPIAAC0QABAOgHAGQgFAHgKAAQgKAAgGgHg");
	this.shape_191.setTransform(-1092.75,-304.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQATAAANgKQANgKABgOQAAgLgIgIQgGgHgMgDQgLgEgRgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_192.setTransform(-1158,-304.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_193.setTransform(-1173.775,-304.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAFALAEAIQAGAHAJAEQAJAGAPAAQATAAANgKQAOgKAAgOQgBgLgGgIQgIgHgKgDQgMgEgRgEQgZgHgRgHQgQgHgKgNQgKgNAAgVQAAgSAKgPQALgOATgJQAUgHAagBQAVAAAPAGQAQAFAJAJQALAJAEAJQAFAKAAAIQAAAJgGAGQgGAHgJAAQgIAAgEgEQgEgEgFgJQgGgNgJgHQgIgHgTAAQgRgBgLAJQgMAHABAMQgBAGAEAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQAKAIAHALQAGANAAARQAAAVgLAQQgKAQgVAKQgVAKgcAAQghAAgWgOg");
	this.shape_194.setTransform(-1189.35,-304.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_195.setTransform(-1213.125,-304.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAFALAEAIQAFAHAJAEQAKAGAPAAQATAAAOgKQAMgKAAgOQAAgLgGgIQgIgHgKgDQgMgEgRgEQgZgHgQgHQgRgHgJgNQgLgNABgVQgBgSALgPQAKgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQAKAJAGAJQAEAKAAAIQAAAJgFAGQgHAHgJAAQgIAAgDgEQgFgEgEgJQgHgNgJgHQgIgHgTAAQgRgBgLAJQgMAHAAAMQAAAGAEAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQALAIAGALQAGANAAARQAAAVgLAQQgLAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_196.setTransform(-1228.7,-304.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#3E5EAB").s().p("AgnBvQgWgJgPgQQgQgPgIgWQgIgWAAgbQAAgZAIgXQAIgWAPgPQAQgQAWgIQAWgJAbAAQAXAAASAHQASAGALAKQALAJAGAKQAFAKAAAJQAAAJgGAGQgHAGgJAAQgFAAgEgDQgFgCgDgEIgOgVQgGgGgKgFQgLgFgPAAQgPABgNAFQgNAGgIAKQgKALgEAPQgFAPAAASQAAAoATAWQASAVAgABQAQgBAOgEQAOgEAPgIIAAglIgkAAQgNAAgGgEQgHgEAAgJQAAgIAFgEQAGgFAJAAIA1AAQAKAAAGACQAHACAEAFQAEAFAAANIAAAsQAAAIgBAFQgCAGgEADQgFAFgHAEQgVALgTAFQgUAFgWABQgagBgVgHg");
	this.shape_197.setTransform(-1252.375,-304.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#3E5EAB").s().p("AA7B0QgFgBgEgEIgIgJIgIgLIhViEIAACFQAAANgHAHQgFAGgKABQgKgBgGgGQgGgHAAgNIAAiwQAAgLACgHQADgHAHgEQAHgEAIgBQAHAAAEACQAEADAEADIAHAJIAHALIBYCGIAAiHQAAgNAGgHQAFgGAKgBQALABAFAGQAGAHAAANIAACzQAAAegZABQgGgBgGgCg");
	this.shape_198.setTransform(-1277,-304.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#3E5EAB").s().p("AgpBxQgTgGgMgMQgMgMgGgSQgFgTAAgaIAAhuQAAgNAGgIQAGgGALgBQAKABAHAGQAGAIAAANIAABxQAAASAEANQAFANALAIQAKAGATAAQAbAAAMgOQALgPAAgdIAAhxQAAgNAGgIQAGgGALgBQAKABAHAGQAGAIAAANIAABuQAAAagFATQgFASgPANQgMAMgRAFQgQAGgXAAQgZAAgTgGg");
	this.shape_199.setTransform(-1301.275,-304.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#3E5EAB").s().p("AhJBuQgGgIAAgOIAAivQAAgKADgHQADgGAHgDQAFgCAKAAIBtAAQALAAAGAEQAFAGAAAIQAAAHgFAFQgGAFgLAAIhbAAIAAA7IBMAAQAKAAAGAFQAFAFAAAHQAAAIgFAEQgGAEgKAAIhMAAIAABMQAAAOgGAIQgGAGgLABQgKgBgHgGg");
	this.shape_200.setTransform(-1322.4,-304.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-806.725,y:8.65}},{t:this.shape_8,p:{x:-785.425,y:8.45}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-709.375,y:8.65}},{t:this.shape_4,p:{x:-687.925,y:8.45}},{t:this.shape_3},{t:this.shape_2,p:{x:-643.375,y:8.65}},{t:this.shape_1,p:{x:-622.075,y:8.45}},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_9,p:{x:-1137.425,y:-304.1}},{t:this.shape_8,p:{x:-1116.125,y:-304.3}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_5,p:{x:-1040.075,y:-304.1}},{t:this.shape_4,p:{x:-1018.625,y:-304.3}},{t:this.shape_2,p:{x:-997.075,y:-304.1}},{t:this.shape_1,p:{x:-975.775,y:-304.3}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},4).wait(23));

	// Layer_4
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#3E5EAB").s().p("AgxBcIgCgVQAHACAGAAQAIAAAEgDQAFgCADgFIAHgRIACgFIg0iHIAZAAIAcBPQAGAOADAQQAEgPAFgPIAdhPIAXAAIgzCJQgJAWgDAIQgGALgIAGQgIAFgLAAQgHAAgIgDg");
	this.shape_201.setTransform(-1243.875,-69.875);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_202.setTransform(-1257.75,-72.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAWAAIAAC5g");
	this.shape_203.setTransform(-1267.9,-75.15);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_204.setTransform(-1277.975,-72.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#3E5EAB").s().p("AAzBdIgZgmIgSgaQgGgKgFgDQgGgDgFgCIgOAAIgcAAIAABSIgZAAIAAi5IBRAAQAZAAANAFQANAFAIANQAHANAAAPQAAATgMAOQgNAMgaAEQAJAFAFAEQALAKAKAPIAgAzgAg4gKIA1AAQAPAAAKgDQAKgEAEgHQAGgJAAgIQAAgNgKgJQgKgJgVAAIg5AAg");
	this.shape_205.setTransform(-1293.7,-75.15);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_206.setTransform(-1314.7,-67.15);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#3E5EAB").s().p("AgrBPQgPgOgDgXIAYgDQADASAJAJQAKAJAOAAQAQAAALgNQALgMAAgVQAAgTgLgLQgLgLgRAAQgLAAgIAFQgJAFgFAHIgVgDIASheIBbAAIAAAWIhJAAIgKAyQARgMARAAQAYAAARARQAQAQAAAaQAAAZgOATQgSAWgeAAQgZAAgRgOg");
	this.shape_207.setTransform(-1325.55,-74.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_208.setTransform(-1253.425,-103.65);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgQAAgHAGQgGAFAAAHQAAAEADAEQADAEAFACIAUAFQAYAHAJAEQAKAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgPAAQgaAAgOgMg");
	this.shape_209.setTransform(-1267.2,-103.65);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_210.setTransform(-1280.925,-103.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#3E5EAB").s().p("Ag+BdIAAi5IB9AAIAAAWIhkAAIAAA5IBWAAIAAAVIhWAAIAABVg");
	this.shape_211.setTransform(-1295.525,-106.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_212.setTransform(-1314.7,-98.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#3E5EAB").s().p("AAQBdIAAgsIhPAAIAAgVIBTh4IATAAIAAB4IAZAAIAAAVIgZAAIAAAsgAgpAcIA5AAIAAhUg");
	this.shape_213.setTransform(-1326.025,-106.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_214.setTransform(-1121.1,-134.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_215.setTransform(-1133.725,-134.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_216.setTransform(-1144.35,-136.95);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgFACQgGADgDAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_217.setTransform(-1155.4,-134.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_218.setTransform(-1166,-136.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#3E5EAB").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_219.setTransform(-1178.525,-137.275);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_220.setTransform(-1197.6,-134.85);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_221.setTransform(-1210.225,-134.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_222.setTransform(-1220.85,-136.95);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_223.setTransform(-1231.875,-134.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#3E5EAB").s().p("ABBBdIAAibIg2CbIgVAAIg2ieIAACeIgYAAIAAi5IAlAAIAsCDIAIAbIAKgdIAtiBIAhAAIAAC5g");
	this.shape_224.setTransform(-1249.875,-137.25);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#3E5EAB").s().p("Ag8BdQgBgIADgHQAFgNAKgMQALgNATgPQAegZAKgOQALgOAAgNQAAgOgKgJQgKgJgPAAQgQAAgKAKQgJAKgBARIgXgCQACgbAQgOQAQgNAZAAQAbAAAQAOQAPAQAAAVQAAALgEAMQgFAKgKALQgLAMgZAVQgTARgGAGIgKANIBbAAIAAAVg");
	this.shape_225.setTransform(-1275.4036,-137.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_226.setTransform(-1285.9,-129.25);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#3E5EAB").s().p("AgqBQQgQgOgCgXIAXgDQAEATAJAJQAKAIANAAQAQAAAKgLQAMgLAAgRQgBgPgJgLQgLgKgQAAQgFAAgKADIACgTIAEAAQAOAAALgIQAMgHAAgQQAAgNgIgIQgJgIgNAAQgMAAgJAIQgKAIgCARIgXgEQAFgXAOgMQAPgNAWAAQAOAAANAGQANAHAHALQAHAMgBAMQABAMgHAKQgGAKgNAGQARAEAIALQAKAMAAASQAAAYgSARQgSARgaAAQgZAAgQgPg");
	this.shape_227.setTransform(-1296.8,-137.125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgQgBQgOAAgKANg");
	this.shape_228.setTransform(-963.55,-168.15);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_229.setTransform(-973.225,-168.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_230.setTransform(-983.375,-165.75);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_231.setTransform(-997.825,-165.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_232.setTransform(-1012.275,-165.75);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_233.setTransform(-1022.45,-168.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_234.setTransform(-1032.525,-165.75);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#3E5EAB").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_235.setTransform(-1048.475,-168.325);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#3E5EAB").s().p("AgjBgIA1i/IASAAIg0C/g");
	this.shape_236.setTransform(-1060.65,-168.325);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgHgHQgIgIgOAAQgIAAgKAFQgIAFgEAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAYAAQAOAAAMAGQAKAGAGAKQAEALAAASIAABWg");
	this.shape_237.setTransform(-1078.7,-168.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_238.setTransform(-1092.025,-165.75);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQACACAFAAIAKgBIAEAUQgKACgIAAQgMAAgFgEg");
	this.shape_239.setTransform(-1102.35,-168);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_240.setTransform(-1109.025,-168.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#3E5EAB").s().p("AAbBDIgWhPIgFgXIgaBmIgYAAIgpiGIAXAAIAWBNIAIAdIAHgcIAVhOIAXAAIAUBOIAGAaIAIgbIAXhNIAWAAIgqCGg");
	this.shape_241.setTransform(-1121.375,-165.75);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#3E5EAB").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_242.setTransform(-1139.475,-168.325);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_243.setTransform(-1161.375,-165.75);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_244.setTransform(-1171.175,-168.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQACACAFAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_245.setTransform(-1177.5,-168);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_246.setTransform(-1188.525,-165.75);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_247.setTransform(-1202.975,-165.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_248.setTransform(-1217.825,-163.175);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgFACQgGADgDAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_249.setTransform(-1231.9,-165.75);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#3E5EAB").s().p("ABBBdIAAibIg2CbIgVAAIg2ieIAACeIgYAAIAAi5IAlAAIAsCDIAIAbIAKgdIAtiBIAhAAIAAC5g");
	this.shape_250.setTransform(-1249.875,-168.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#3E5EAB").s().p("AALBdIAAiQQgIAIgMAIQgOAHgKAEIAAgVQATgKAOgNQANgNAGgLIAPAAIAAC5g");
	this.shape_251.setTransform(-1276.075,-168.35);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_252.setTransform(-1285.9,-160.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3E5EAB").s().p("AgqBQQgQgOgCgXIAXgDQAEATAJAJQAKAIANAAQAQAAAKgLQAMgLAAgRQgBgPgJgLQgLgKgQAAQgFAAgKADIACgTIAEAAQAOAAALgIQAMgHAAgQQAAgNgIgIQgJgIgNAAQgMAAgJAIQgKAIgCARIgXgEQAFgXAOgMQAPgNAWAAQAOAAANAGQANAHAHALQAHAMgBAMQABAMgHAKQgGAKgNAGQARAEAIALQAKAMAAASQAAAYgSARQgSARgaAAQgZAAgQgPg");
	this.shape_253.setTransform(-1296.8,-168.175);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_254.setTransform(-1110.9,-196.95);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_255.setTransform(-1123.525,-196.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_256.setTransform(-1134.15,-199.05);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQALAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgYAEg");
	this.shape_257.setTransform(-1145.2,-196.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_258.setTransform(-1155.8,-199.05);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#3E5EAB").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_259.setTransform(-1168.325,-199.375);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_260.setTransform(-1187.4,-196.95);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_261.setTransform(-1200.025,-196.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_262.setTransform(-1210.65,-199.05);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_263.setTransform(-1221.675,-196.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#3E5EAB").s().p("ABBBdIAAibIg2CbIgVAAIg2ieIAACeIgYAAIAAi5IAlAAIAsCDIAIAbIAKgdIAtiBIAhAAIAAC5g");
	this.shape_264.setTransform(-1239.675,-199.35);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQADACAFAAIAJgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_265.setTransform(-1261.15,-199.05);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_266.setTransform(-1267.825,-199.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_267.setTransform(-1277.975,-196.95);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3E5EAB").s().p("AgpBWQgRgKgHgQQgHgRAAgeIAAhqIAYAAIAABqQAAAYAFAMQAEALALAGQALAGAQAAQAaAAAMgMQALgMAAgjIAAhqIAZAAIAABqQAAAcgGARQgHAQgQALQgRAJgbABQgZgBgQgIg");
	this.shape_268.setTransform(-1294.575,-199.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_269.setTransform(-1314.7,-191.35);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3E5EAB").s().p("AgpBQQgRgOgCgXIAXgDQAEATAJAJQAKAIANAAQAQAAAKgLQALgLABgRQgBgPgJgLQgLgKgQAAQgFAAgKADIACgTIAEAAQAOAAAMgIQALgHAAgQQAAgNgIgIQgJgIgNAAQgMAAgKAIQgJAIgCARIgXgEQAFgXAOgMQAPgNAWAAQAOAAANAGQANAHAHALQAHAMgBAMQABAMgHAKQgGAKgNAGQARAEAIALQAKAMAAASQAAAYgSARQgSARgaAAQgZAAgPgPg");
	this.shape_270.setTransform(-1325.6,-199.225);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_271.setTransform(-1156.475,-230.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAJgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQALAFAFAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_272.setTransform(-1171.1,-227.85);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_273.setTransform(-1181.7,-230.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_274.setTransform(-1192.725,-228);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_275.setTransform(-1207.175,-227.85);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#3E5EAB").s().p("AAtBdIhChdIgeAdIAABAIgZAAIAAi5IAZAAIAABcIBbhcIAiAAIhOBMIBRBtg");
	this.shape_276.setTransform(-1222.1,-230.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_277.setTransform(-1241.825,-230.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_278.setTransform(-1250.825,-227.85);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_279.setTransform(-1264.975,-228);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_280.setTransform(-1279.475,-227.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3E5EAB").s().p("AAtBdIhChdIgfAdIAABAIgYAAIAAi5IAYAAIAABcIBchcIAhAAIhNBMIBRBtg");
	this.shape_281.setTransform(-1294.35,-230.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_282.setTransform(-1314.7,-222.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3E5EAB").s().p("Ag8BdQgBgIADgHQAFgNAKgMQALgNATgPQAegZAKgOQALgOAAgNQAAgOgKgJQgKgJgPAAQgQAAgKAKQgJAKgBARIgXgCQACgbAQgOQAQgNAZAAQAbAAAQAOQAPAQAAAVQAAALgEAMQgFAKgKALQgLAMgZAVQgTARgGAGIgKANIBbAAIAAAVg");
	this.shape_283.setTransform(-1325.8536,-230.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_284.setTransform(-1224.525,-261.45);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_285.setTransform(-1234.7,-258.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_286.setTransform(-1245.15,-259.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_287.setTransform(-1257.775,-258.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKABACQABADADACQACACAFAAIALgBIADAUQgKACgHAAQgNAAgFgEg");
	this.shape_288.setTransform(-1268.4,-261.15);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_289.setTransform(-1279.45,-258.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#3E5EAB").s().p("AhFBdIAAi5IBFAAQAVAAANAGQANAFAHAMQAHALAAANQAAANgGAKQgHALgNAGQARAFAJALQAJAMAAAQQAAANgFAMQgGAKgIAGQgIAHgMADQgMADgSAAgAgtBHIAuAAIARgBQAIgCAGgDQAFgDAEgHQAEgHAAgJQAAgKgGgIQgFgIgJgDQgKgDgRAAIgrAAgAgtgOIApAAQAPAAAHgCQAKgDAEgGQAFgHAAgJQAAgKgEgHQgFgHgIgCQgIgDgTAAIgmAAg");
	this.shape_290.setTransform(-1295.025,-261.45);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_291.setTransform(-1314.7,-253.45);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#3E5EAB").s().p("AALBdIAAiQQgIAIgMAIQgOAHgKAEIAAgVQATgKAOgNQANgNAGgLIAPAAIAAC5g");
	this.shape_292.setTransform(-1326.525,-261.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#3E5EAB").s().p("AA7B0QgFgBgEgEIgIgJIgHgLIhXiEIAACFQABANgHAHQgFAGgKABQgKgBgGgGQgGgHAAgNIAAiwQAAgLADgHQACgHAIgEQAHgEAHgBQAHAAAEACQAEADAEADIAHAJIAHALIBYCGIAAiHQAAgNAGgHQAFgGAKgBQALABAFAGQAGAHAAANIAACzQAAAegZABQgGgBgGgCg");
	this.shape_293.setTransform(-1152.6,-304.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#3E5EAB").s().p("Ag7ByQgPAAgHgGQgGgHAAgPIAAirQAAgKADgHQADgGAGgDQAGgCAKAAIB6AAQALAAAFAEQAGAGAAAIQAAAHgGAFQgFAFgLAAIhoAAIAAA5IBfAAQALAAAFAEQAGAFAAAIQAAAHgGAEQgFAGgLAAIhfAAIAABAIBrAAQALABAGAFQAFAFAAAIQAAAIgFAGQgGAEgLAAg");
	this.shape_294.setTransform(-1174.775,-304.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#3E5EAB").s().p("AA7B0QgFgBgEgEIgIgJIgIgLIhViEIAACFQAAANgHAHQgFAGgKABQgKgBgGgGQgGgHAAgNIAAiwQAAgLACgHQADgHAHgEQAHgEAIgBQAHAAAEACQAEADAEADIAHAJIAHALIBYCGIAAiHQAAgNAGgHQAFgGAKgBQALABAFAGQAGAHAAANIAACzQAAAegZABQgGgBgGgCg");
	this.shape_295.setTransform(-1198.25,-304.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3E5EAB").s().p("AgvBuQgVgJgPgPQgOgRgHgVQgHgXAAgZQAAgaAHgWQAIgWAOgPQAPgQAUgIQAVgJAaAAQAjAAAZAPQAaAOANAbQANAbAAAjQAAAagHAWQgHAWgPAQQgOAPgVAJQgVAJgbAAQgaAAgVgJgAgahLQgLAFgJAKQgIAKgFAPQgFAQAAATQAAATAFAPQAFAQAJALQAIAKAMAGQAMAEANAAQARAAAPgJQAPgIAJgTQAJgSAAgbQAAgZgIgSQgIgSgPgKQgPgKgTAAQgOABgMAFg");
	this.shape_296.setTransform(-1223.075,-304.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#3E5EAB").s().p("AhQBuQgGgIAAgOIAAivQAAgQAHgGQAHgHAPABIA7AAQAaAAAOADQAOAEALAKQAKAIAFANQAFAOAAAQQAAAjgVARQgWATgqgBIgqAAIAABBQAAAOgGAHQgHAIgKAAQgKgBgHgGgAgogLIAfAAQAQABALgEQALgEAGgHQAFgIAAgNQAAgPgIgJQgKgKgfAAIgfAAg");
	this.shape_297.setTransform(-1245.875,-304.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#3E5EAB").s().p("ABJBuQgFgGAAgOIAAidIglCRIgFAVQgDAHgGAFQgGAGgLAAQgHAAgGgEQgFgEgEgFIgFgMIgDgOIgliRIAACdQAAAOgFAGQgHAHgKAAQgJAAgGgHQgFgGAAgOIAAi0QgBgPAJgFQAHgGANABIAPAAQAMAAAHACQAFACAEAGIAFAUIAhB8IAhh8IAGgUQAEgGAFgCQAGgCANAAIAOAAQAOgBAHAGQAIAFAAAPIAAC0QAAAOgFAGQgHAHgJAAQgJAAgHgHg");
	this.shape_298.setTransform(-1270.4,-304.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#3E5EAB").s().p("AgvBuQgVgJgPgPQgOgRgHgVQgHgXAAgZQAAgaAHgWQAIgWAOgPQAPgQAUgIQAVgJAaAAQAjAAAZAPQAaAOANAbQANAbAAAjQAAAagHAWQgHAWgPAQQgOAPgVAJQgVAJgbAAQgaAAgVgJgAgahLQgLAFgJAKQgIAKgFAPQgFAQAAATQAAATAFAPQAFAQAJALQAIAKAMAGQAMAEANAAQARAAAPgJQAPgIAJgTQAJgSAAgbQAAgZgIgSQgIgSgPgKQgPgKgTAAQgOABgMAFg");
	this.shape_299.setTransform(-1296.425,-304.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#3E5EAB").s().p("AA7ByQgFgEgFgGIgHgNIg2hVIgmAlIAAAvQAAAOgHAIQgGAGgLABQgFgBgGgDQgFgDgDgFQgCgFgBgGIgBgQIAAiqQAAgNAGgIQAHgGAKgBQALABAGAGQAGAIABANIAABRIBahfQAHgHAEgDQAFgEAHAAQALAAAFAHQAHAFAAAIQAAALgLAKIg5A2IBCBbQAGAKAEAIQADAGAAAHQAAAIgFAGQgHAGgKAAQgKgBgGgEg");
	this.shape_300.setTransform(-1320.5,-304.3);

	this.instance_1 = new lib.Bitmap26();
	this.instance_1.setTransform(-1149,-91,1.1111,1.1111);

	this.instance_2 = new lib.Bitmap27();
	this.instance_2.setTransform(-1246,-95,1.6205,1.6205);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_301.setTransform(-859.45,-228);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_302.setTransform(-872.1,-227.85);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGACAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_303.setTransform(-914,-227.85);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_304.setTransform(-955.9,-227.85);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQAKABAKAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_305.setTransform(-1014.1,-230.25);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFgBAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_306.setTransform(-1035.35,-227.85);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#3E5EAB").s().p("AgZB2IAFgTIAKABQAHAAADgEQADgFAAgSIAAiNIAXAAIAACNQAAAZgGAKQgJAMgSAAQgJAAgJgCgAADhdIAAgaIAXAAIAAAag");
	this.shape_307.setTransform(-1046.9,-227.675);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgFAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_308.setTransform(-1051.6,-228);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAWAAQALAAAMAGQALAEAHAKQAHAJAEANQAFAMgBAOQAAAjgRATQgRATgYAAQgXAAgOgVgAgagNQgKAMgBAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_309.setTransform(-1105.75,-230.25);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQACACAFAAIAKgBIAEAUQgKACgIAAQgMAAgFgEg");
	this.shape_310.setTransform(-1123.95,-230.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_311.setTransform(-1135,-227.85);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGAMAAQASAAANAJQANAJAHAQQAGARABATQAAAVgIAPQgHARgOAJQgOAIgQAAQgKAAgKgFQgJgEgGgIIAABCgAgag+QgKAOgBAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_312.setTransform(-1149.05,-225.425);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgGACQgHADgCAEQgEAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_313.setTransform(-1163.9,-227.85);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgOAAgKANg");
	this.shape_314.setTransform(-1178.75,-230.25);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_315.setTransform(-1196,-228);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgPACgGACQgGADgDAEQgCAFgBAGQAAAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_316.setTransform(-1208.65,-227.85);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_317.setTransform(-1223.475,-225.275);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGACAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_318.setTransform(-1237.55,-227.85);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_319.setTransform(-1262.1,-230.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#3E5EAB").s().p("AgMBdIhIi5IAbAAIAwCGIAJAfIAKgfIAyiGIAZAAIhJC5g");
	this.shape_320.setTransform(-1288.075,-230.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_321.setTransform(-161.75,-261.15);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgMAFgZAEg");
	this.shape_322.setTransform(-178.6,-258.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_323.setTransform(-228.45,-258.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_324.setTransform(-241.275,-261.45);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgOAAQgJAAgJAFQgJAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAYAAQAPAAALAGQAKAGAFAKQAFALAAASIAABWg");
	this.shape_325.setTransform(-255.85,-261.45);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_326.setTransform(-292.025,-258.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAXAAIAABCQAPgTAVAAQAMAAAMAGQALAEAHAKQAIAJADANQAEAMAAAOQAAAjgQATQgSATgYAAQgWAAgOgVgAgagNQgLAMABAYQAAAYAGALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgMANg");
	this.shape_327.setTransform(-306.05,-261.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJARAAQAKABAKAFQAJAFAGAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_328.setTransform(-327.1,-261.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_329.setTransform(-349.475,-256.325);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_330.setTransform(-378,-258.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#3E5EAB").s().p("AgxBcIgCgVQAHACAGAAQAIAAAEgDQAFgCADgFIAHgRIACgFIg0iHIAZAAIAcBPQAGAOADAQQAEgPAFgPIAdhPIAXAAIgzCJQgJAWgDAIQgGALgIAGQgIAFgLAAQgHAAgIgDg");
	this.shape_331.setTransform(-391.575,-256.175);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_332.setTransform(-419.2,-258.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_333.setTransform(-429.65,-259.05);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_334.setTransform(-452.9,-261.15);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_335.setTransform(-463.95,-258.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAWAAQALAAAMAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgRATQgRATgYAAQgXAAgOgVgAgagNQgKAMgBAYQABAYAGALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_336.setTransform(-478,-261.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_337.setTransform(-500.775,-259.05);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_338.setTransform(-515.25,-258.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_339.setTransform(-530.075,-256.325);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_340.setTransform(-544.125,-259.05);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_341.setTransform(-558.6,-258.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_342.setTransform(-573.425,-256.325);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#3E5EAB").s().p("AgCBYQgHgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_343.setTransform(-598.1,-261.15);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#3E5EAB").s().p("AgNAVQAIgCADgHQACgGABgLIgMAAIAAgaIAZAAIAAAaQAAAOgFAJQgFAJgKAEg");
	this.shape_344.setTransform(-613.475,-251.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_345.setTransform(-620.3,-259.05);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#3E5EAB").s().p("AgCBYQgHgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_346.setTransform(-643.55,-261.15);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_347.setTransform(-650.6,-259.05);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgYAEg");
	this.shape_348.setTransform(-663.25,-258.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_349.setTransform(-673.85,-261.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAOAAQARAAAHgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgYAAgPgMg");
	this.shape_350.setTransform(-684.2,-258.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_351.setTransform(-705.825,-259.05);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_352.setTransform(-720.3,-258.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_353.setTransform(-733.125,-261.45);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_354.setTransform(-747.775,-258.75);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_355.setTransform(-760.575,-261.45);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_356.setTransform(-775.2,-258.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_357.setTransform(-785.35,-261.45);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgWAAIAAhXQAAgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALAAAXIAABbg");
	this.shape_358.setTransform(-813.4,-259.05);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_359.setTransform(-837.875,-261.45);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_360.setTransform(-852.525,-258.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQADACAFAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_361.setTransform(-863.1,-261.15);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_362.setTransform(-874.125,-259.05);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_363.setTransform(-888.625,-258.75);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_364.setTransform(-909.375,-261.45);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_365.setTransform(-934.6,-261.15);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQACAOAKAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgHAGQgGAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_366.setTransform(-944.95,-258.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_367.setTransform(-960.15,-261.45);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIAUAFQAYAHAJAEQAKAEAFAIQAGAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgPAAQgZAAgPgMg");
	this.shape_368.setTransform(-977.5,-258.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_369.setTransform(-991.225,-258.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_370.setTransform(-1001.65,-259.05);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_371.setTransform(-1014.3,-258.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_372.setTransform(-1032.7,-259.05);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_373.setTransform(-1045.325,-258.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAXAAIAABCQAOgTAWAAQAMAAALAGQALAEAHAKQAHAJAFANQAEAMAAAOQgBAjgRATQgRATgYAAQgXAAgOgVgAgagNQgKAMgBAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_374.setTransform(-1059.4,-261.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgBgHQgDgGgGgEQgFgDgJAAQgOAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJAAATIAABFIgYAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_375.setTransform(-1077.75,-259.05);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_376.setTransform(-1095.925,-258.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQACAOAKAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgHgHgNAAQgQAAgHAGQgGAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_377.setTransform(-1109.65,-258.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQALAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgDAFABAGQgBAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgMAFgZAEg");
	this.shape_378.setTransform(-1137.1,-258.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_379.setTransform(-1151.925,-256.325);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAKgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgMAFgZAEg");
	this.shape_380.setTransform(-1166,-258.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAYAAIAABCQAOgTAVAAQAMAAAMAGQALAEAHAKQAIAJAEANQADAMAAAOQABAjgSATQgRATgYAAQgWAAgOgVgAgZgNQgMAMABAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgLANg");
	this.shape_381.setTransform(-1180.05,-261.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_382.setTransform(-1194.875,-258.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQACAOAKAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgHgHgNAAQgQAAgHAGQgGAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_383.setTransform(-1208.65,-258.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_384.setTransform(-1225.925,-261.45);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAHgHAAgJQAAgHgGgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgZAAgNgMg");
	this.shape_385.setTransform(-1235.4,-258.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_386.setTransform(-1249.475,-256.325);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_387.setTransform(-1263.525,-259.05);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_388.setTransform(-1278.025,-258.75);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#3E5EAB").s().p("AgSBfIAAh0IgVAAIAAgSIAVAAIAAgOQAAgOACgHQAEgIAHgGQAIgGAPAAQAJAAAMADIgDAUIgOgCQgKAAgEAFQgFAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_389.setTransform(-1288.15,-261.625);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_390.setTransform(-1295.65,-259.05);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_391.setTransform(-1308.275,-258.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_392.setTransform(-1148.125,-304.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgFgGgBgNIAAi2QABgOAFgHQAFgIAKAAQAKABAGAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAHAMQACAEAAADQABAKgGAHQgFAFgKABQgIAAgEgFg");
	this.shape_393.setTransform(-1160.95,-304.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#3E5EAB").s().p("ABKB0QgEgCgCgDQgDgDgDgHIgFgNIgLgcIhcAAIgLAdQgHARgEAHQgFAFgKABQgJAAgGgHQgHgGAAgJIABgJIAGgOIA6iUIAGgPQAEgJAEgGQAEgGAGgDQAHgFAJAAQAJAAAGAFQAHADAEAGIAHAMIAGASIA8CSQAHASAAAHQAAAIgGAHQgHAHgJAAQgGgBgEgCgAgiAZIBDAAIghhdg");
	this.shape_394.setTransform(-1182.325,-304.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#3E5EAB").s().p("AgoBoIADgSIArizQADgOAEgFQACgGAKAAQAIAAADAFQAFADAAAHQAAAEgEAOIgqCzIgEANQgCAGgDACQgEADgGABQgQAAAAgPg");
	this.shape_395.setTransform(-1206.3,-304.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_396.setTransform(-1223.125,-304.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_397.setTransform(-1236.975,-301.15);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_398.setTransform(-1252.425,-301.125);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_399.setTransform(-1269.925,-301.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAEgDAGAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_400.setTransform(-1284.6,-304.025);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_401.setTransform(-1300.325,-301.15);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#3E5EAB").s().p("AhCByQgPAAgGgGQgHgHAAgPIAAirQAAgQAHgGQAGgHAPABIBJAAQARAAAMACQAMABAJAHQAIAEAHAHQAGAIADAJQADAJAAAKQAAAigiARQAtANAAApQAAAUgKAPQgJAPgRAHQgLAFgNACQgOACgSgBgAgwBPIAxAAQAvAAAAghQAAgSgMgHQgMgIgYAAIgwAAgAgwgUIArAAQAQAAAKgDQAJgDAFgKQAEgGAAgIQAAgSgMgFQgNgGgYABIgmAAg");
	this.shape_402.setTransform(-1320.825,-304.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#060807").ss(1,1,1).p("A5NAAMAybAAA");
	this.shape_403.setTransform(-492.275,-33.6);

	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(-817,-183);

	this.instance_4 = new lib.Picture10();
	this.instance_4.setTransform(-771,40,1.0068,1.0068);

	this.instance_5 = new lib.Bitmap29();
	this.instance_5.setTransform(-1291,-151,0.9841,0.9841);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJABAUIAABOIgXAAIAAhXQAAgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_404.setTransform(-485.75,-259.05);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHgBgJQAAgHgGgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_405.setTransform(-524.85,-258.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgZAAgNgMg");
	this.shape_406.setTransform(-543.65,-258.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_407.setTransform(-605,-258.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_408.setTransform(-615.45,-259.05);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAALAHIgHAWQgJgGgIAAQgIAAgEAGQgGAEgDAIQgEAMAAAOIAABGg");
	this.shape_409.setTransform(-687.65,-259.05);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_410.setTransform(-700.3,-258.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgYAEg");
	this.shape_411.setTransform(-808.6,-258.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAYAAIAABCQAOgTAVAAQAMAAAMAGQALAEAHAKQAIAJAEANQADAMAAAOQABAjgSATQgRATgYAAQgWAAgOgVgAgZgNQgLAMAAAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgLANg");
	this.shape_412.setTransform(-879,-261.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgHgHQgIgIgOAAQgIAAgKAFQgIAFgEAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAYAAQAOAAAMAGQALAGAEAKQAFALAAASIAABWg");
	this.shape_413.setTransform(-908.25,-261.45);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJAAATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_414.setTransform(-969.6,-259.05);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_415.setTransform(-1009.4,-258.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQALABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAQAAAKgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgOAAgKANg");
	this.shape_416.setTransform(-1024.25,-261.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQACAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_417.setTransform(-1044.8,-258.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQADACAFAAIAJgBIAEAUQgKACgIAAQgMAAgGgEg");
	this.shape_418.setTransform(-1069.1,-261.15);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgBgHQgDgGgGgEQgGgDgIAAQgOAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAZAAQAVAAAKAMQAMALAAAXIAABbg");
	this.shape_419.setTransform(-1098.1,-259.05);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgBgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgJAJAAAUIAABOIgXAAIAAhXQAAgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_420.setTransform(-1134.2,-259.05);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgDgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_421.setTransform(-1183.15,-261.15);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#3E5EAB").s().p("AAiBdIAAhIQgBgVgGgKQgFgLgSAAQgKAAgJAHQgKAGgEAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAFgHQAGgHAKAAQALAAAFAHQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHABAKQACAJAAAMIAABSQAAANgFAGQgHAHgKAAQgVAAABgag");
	this.shape_422.setTransform(-693.5,-304.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQAAgZAKgUQALgVATgKQATgMAaAAQAQAAAOAFQAOAFAKAIQAJAHAFAJQAGAJAAAHQAAAIgHAFQgFAGgIAAQgGAAgDgDQgDgDgFgGQgHgMgJgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAJAAQANAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAGAAQAIAAAFAGQAGAGgBAGQAAAIgEAJQgFAJgJAJQgLAIgPAFQgOAFgTAAQgnAAgVgXg");
	this.shape_423.setTransform(-712.75,-301.175);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgDgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgFgEAAgHQAAgGAFgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAFAEABAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIAAAQQABAFADADQADAEAHAAIALgCIAKgBQAFAAAEAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_424.setTransform(-727.35,-304.025);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#3E5EAB").s().p("AAmBSQgGgFgCgHIgGgSIgYhSIgXBSQgFARgFAJQgGAJgNAAQgHAAgFgDQgFgDgEgFIgFgMIgEgLIgjhlQgFgOAAgGQAAgHAGgFQAFgGAIAAQALAAADAGQAEAGAEAPIAcBeIAZhXIAHgTQABgGAGgEQAFgFAJAAQAJAAAGAFQAFAEACAGIAGATIAaBXIAcheIAEgPQACgFAEgDQAEgEAIAAQAHAAAGAGQAGAFAAAHQAAAHgFANIgjBlIgHATQgDAGgFAEQgFAFgKAAQgJAAgGgFg");
	this.shape_425.setTransform(-755.175,-301.125);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAFAIQAGAHAJAEQAJAGAPAAQAUAAAMgKQANgKABgOQAAgLgIgIQgHgHgLgDQgKgEgSgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgFAHgKAAQgIAAgEgEQgEgEgFgJQgFgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQAAAGADAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_426.setTransform(-778.75,-304.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEACAGIAAARIAAAdIARAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgHAEgMAAIgJAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAKgBQAFAAAEAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_427.setTransform(-835.7,-304.025);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_428.setTransform(-847.875,-301.125);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_429.setTransform(-880.05,-304.025);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAEALAGAIQAFAHAIAEQAKAGAPAAQAUAAANgKQANgKgBgOQABgLgIgIQgGgHgMgDQgKgEgSgEQgZgHgRgHQgQgHgJgNQgLgNAAgVQAAgSALgPQAKgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAGAJQAEAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQAAAGAEAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_430.setTransform(-896.8,-304.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#3E5EAB").s().p("AAxBwQgFgGAAgMIAAgEQgJAKgJAGQgIAGgKADQgJADgLABQgQAAgNgHQgMgGgKgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQANAHANANIAAg/QAAgNAEgHQAGgGAJgBQAKAAAGAHQAEAGAAAMIAAC7QABAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQgBAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_431.setTransform(-926.05,-304.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#3E5EAB").s().p("AAnBQQgGgHAAgMIAAhGQAAgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_432.setTransform(-945.25,-301.125);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#3E5EAB").s().p("AAnBQQgFgHgBgMIAAhGQAAgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_433.setTransform(-991.6,-301.125);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_434.setTransform(-1010.975,-301.125);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAEgEALAAIAEAAIAAgaIAAgQQABgGACgEQADgEAFgDQAEgDAGAAQAJAAAFAGQAFAEABAGIABARIAAAdIAPAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIALgBQAEAAAFAEQADAEAAAGQABALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_435.setTransform(-1034.45,-304.025);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_436.setTransform(-1044.975,-304.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_437.setTransform(-1058.95,-301.125);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#3E5EAB").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_438.setTransform(-1079.075,-297.975);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_439.setTransform(-1093.625,-304.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#3E5EAB").s().p("AgoBoIADgSIArizQAEgOADgFQACgGAJAAQAJAAADAFQAFADAAAHQAAAEgDAOIgrCzIgEANQgBAGgEACQgDADgHABQgQAAAAgPg");
	this.shape_440.setTransform(-1111.15,-304.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgJAAQgJAAgGgHQgFgGAAgNIAAi2QAAgOAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAFgEAGAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAHAMQACAEAAADQABAKgGAHQgGAFgJABQgIAAgEgFg");
	this.shape_441.setTransform(-1132.15,-304.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_442.setTransform(-1151.525,-301.15);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgFgEAAgHQAAgGAFgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIACAQQAAAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_443.setTransform(-1166.15,-304.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgDAJAAAZIAAA2QgBANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_444.setTransform(-1182,-301.125);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_445.setTransform(-1201.375,-301.125);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#3E5EAB").s().p("AA7ByQgGgEgEgGIgIgNIg2hVIgmAlIAAAvQAAAOgGAIQgHAGgKABQgGgBgFgDQgFgDgEgFQgCgFAAgGIAAgQIAAiqQgBgNAHgIQAGgGAKgBQALABAGAGQAHAIgBANIAABRIBbhfQAHgHAEgDQAEgEAJAAQAKAAAGAHQAFAFAAAIQAAALgKAKIg4A2IBABbQAHAKAEAIQAEAGAAAHQgBAIgGAGQgGAGgKAAQgJgBgHgEg");
	this.shape_446.setTransform(-1222.45,-304.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_447.setTransform(-1247.075,-304.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#3E5EAB").s().p("Ag6BAQgVgXgBgnQAAgZAKgUQALgVATgKQATgMAZAAQASAAANAFQAOAFAKAIQAJAHAFAJQAGAJAAAHQgBAIgGAFQgFAGgIAAQgGAAgDgDQgDgDgFgGQgHgMgJgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAIAAQAOAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAHAAQAHAAAFAGQAGAGgBAGQAAAIgEAJQgFAJgJAJQgLAIgPAFQgOAFgTAAQgnAAgWgXg");
	this.shape_448.setTransform(-1260.95,-301.175);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_449.setTransform(-1280.05,-301.125);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGgBANIAABDQABAPACAKQACAKAHAGQAGAFALAAQAKAAAKgGQAKgGADgLQAEgJAAgdIAAg0QAAgNAGgGQAGgHAKAAQAKAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgGgHg");
	this.shape_450.setTransform(-1299.4,-301.125);

	this.instance_6 = new lib.Bitmap3();
	this.instance_6.setTransform(-1335,-325);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#3E5EAB").s().p("AgqBMQgRgYgBg0QABggAGgUQAHgUANgLQAOgLATAAQAPAAAMAGQALAGAHALQAIAMADAQQAFAQAAAbQAAAhgHAUQgHAUgNALQgNALgVAAQgaAAgQgTgAgZg+QgLARAAAtQAAAuAKAQQALAPAPAAQAPgBAMgPQAKgPAAguQAAgtgKgPQgMgPgPAAQgPAAgKANg");
	this.shape_451.setTransform(-1104.9,-113.35);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#3E5EAB").s().p("AgqBQQgQgOgCgXIAXgDQADATAKAJQAJAIAOAAQAPAAAMgLQAKgLAAgRQABgPgKgLQgLgKgQAAQgGAAgJADIACgTIAEAAQAOAAAMgIQALgHAAgQQAAgNgJgIQgIgIgMAAQgNAAgKAIQgIAIgDARIgXgEQAEgXAPgMQAPgNAWAAQAOAAANAGQANAHAHALQAHAMAAAMQAAAMgHAKQgGAKgNAGQARAEAJALQAJAMAAASQAAAYgSARQgSARgaAAQgZAAgQgPg");
	this.shape_452.setTransform(-1119.3,-113.325);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#3E5EAB").s().p("AgjBgIA1i/IASAAIg1C/g");
	this.shape_453.setTransform(-1137.3,-113.475);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgIAIgGQAGgDAKgDIAUgDQAagEANgEIABgGQAAgOgGgGQgKgHgQAAQgQAAgIAFQgHAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEAQgBQASABAKAEQAMAEAFAGQAEAGADAKQABAFAAAPIAAAeQAAAgABAIQACAJAEAIIgYAAQgDgIgCgJQgMALgMAEQgKAEgOAAQgWAAgMgKgAgFAIQgOACgFADQgGACgDAGQgDAEAAAHQAAAIAGAGQAHAHAOgBQAMAAAKgFQAKgGAFgKQAEgHgBgQIAAgIQgMAFgYADg");
	this.shape_454.setTransform(-1155.4,-110.9);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgOgBgFQgDgHgFgDQgHgEgIAAQgOAAgJAJQgKAKABAVIAABNIgXAAIAAhWQAAgQgFgIQgFgHgNAAQgKAAgIAFQgIAFgEAKQgEAKABASIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAHQAIAFAEAMQAQgYAaAAQATAAALALQAMALAAAXIAABcg");
	this.shape_455.setTransform(-1173.35,-111.05);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgIAIgGQAHgDAIgDIAVgDQAagEANgEIABgGQAAgOgGgGQgKgHgQAAQgQAAgHAFQgIAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEARgBQARABAKAEQALAEAGAGQAEAGADAKQABAFAAAPIAAAeQAAAgACAIQABAJAEAIIgYAAQgEgIgBgJQgMALgMAEQgLAEgNAAQgWAAgMgKgAgFAIQgOACgFADQgHACgCAGQgEAEAAAHQAAAIAHAGQAHAHANgBQAMAAALgFQAKgGAFgKQAEgHgBgQIAAgIQgMAFgYADg");
	this.shape_456.setTransform(-1191.5,-110.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#3E5EAB").s().p("AgCBYQgHgEgEgGQgCgHAAgUIAAhNIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAJABADQABADADACQADACAEgBIAKgBIAEAUQgKADgHAAQgNAAgFgEg");
	this.shape_457.setTransform(-1202.1,-113.15);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#3E5EAB").s().p("AgpBVQgRgJgHgRQgHgQAAgeIAAhrIAYAAIAABrQAAAYAFALQAEAMALAGQALAHAQAAQAaAAAMgNQALgMAAgjIAAhrIAZAAIAABrQAAAcgGAQQgHARgQAKQgRALgbgBQgZABgQgKg");
	this.shape_458.setTransform(-1215.275,-113.3);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgIAIgGQAGgDAJgDIAVgDQAagEANgEIABgGQAAgOgGgGQgKgHgQAAQgQAAgIAFQgHAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEAQgBQASABAKAEQAMAEAEAGQAFAGADAKQABAFAAAPIAAAeQAAAgABAIQABAJAFAIIgYAAQgDgIgBgJQgNALgMAEQgLAEgNAAQgWAAgMgKgAgFAIQgOACgFADQgHACgDAGQgCAEAAAHQAAAIAGAGQAHAHAOgBQAMAAAKgFQAKgGAFgKQAEgHgBgQIAAgIQgMAFgYADg");
	this.shape_459.setTransform(-1244.95,-110.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAJAAAaIAABJIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_460.setTransform(-1259.375,-111.05);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgOgBgFQgDgHgFgDQgHgEgIAAQgOAAgJAJQgKAKABAVIAABNIgXAAIAAhWQAAgQgFgIQgFgHgNAAQgKAAgIAFQgIAFgEAKQgEAKABASIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAHQAIAFAEAMQAQgYAaAAQATAAALALQALALAAAXIAABcg");
	this.shape_461.setTransform(-1283.15,-111.05);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAVQAIgOAHgGQAFgEAIAAQALAAAMAIIgHAUQgIgEgJAAQgIAAgEAEQgGAFgDAIQgEAMAAAOIAABGg");
	this.shape_462.setTransform(-1297.3,-111.05);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#3E5EAB").s().p("AgsA0QgRgSAAghQAAghARgSQASgUAbAAQAbABARASQARASAAAhIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAUgPAMQgQALgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgJQgLgMgRAAQgPgBgKALg");
	this.shape_463.setTransform(-1309.925,-110.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#3E5EAB").s().p("AgLBdIAAijIg+AAIAAgWICTAAIAAAWIg+AAIAACjg");
	this.shape_464.setTransform(-1325.025,-113.45);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#FF0000").ss(2,1,1).p("ADsGmInXtL");
	this.shape_465.setTransform(-1274.925,-48.125);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#FF0000").ss(2,1,1).p("AkmD1IJNnp");
	this.shape_466.setTransform(-968.475,-69.75);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#3E5EAB").s().p("AgrBUQgTgMgJgXQgKgYAAgZQAAgdALgWQALgWAUgLQAVgLAYAAQAbAAAUAOQATAOAHAaIgYAGQgHgUgMgKQgMgJgTAAQgUAAgPAKQgOALgGARQgGARAAATQAAAWAHASQAHASAPAJQAOAIAQAAQAVAAAOgMQAPgMAFgXIAYAGQgIAfgUAQQgUAPgdAAQgdAAgTgMg");
	this.shape_467.setTransform(-701.175,-113.475);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAJAAAaIAABJIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_468.setTransform(-754.025,-111.05);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#3E5EAB").s().p("AgeBAQgKgEgFgHQgFgHgCgKQgCgGAAgPIAAhTIAXAAIAABKQAAASACAGQACAJAHAGQAHAEAKAAQAJABAJgGQAJgFAEgJQAEgJAAgSIAAhHIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgFg");
	this.shape_469.setTransform(-768.525,-110.75);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#3E5EAB").s().p("AglBLIAAARIgVAAIAAi6IAYAAIAABDQAOgSAWgBQAMABALAEQALAFAHAKQAHAJAFAMQADAMAAAPQAAAjgRASQgRATgYAAQgXAAgOgTgAgZgOQgMAOAAAXQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgMgOAAQgPAAgKAMg");
	this.shape_470.setTransform(-782.55,-113.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#3E5EAB").s().p("AgeBAQgKgEgFgHQgFgHgCgKQgCgGAAgPIAAhTIAXAAIAABKQAAASACAGQACAJAHAGQAHAEAKAAQAJABAJgGQAJgFAEgJQAEgJAAgSIAAhHIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgFg");
	this.shape_471.setTransform(-797.425,-110.75);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#3E5EAB").s().p("AAgBdIAAhVQAAgQgIgJQgHgHgNAAQgKAAgIAFQgKAGgDAIQgEAIAAAQIAABKIgXAAIAAi5IAXAAIAABCQAQgSAXAAQAQAAAKAGQAMAGAEAKQAFALAAATIAABVg");
	this.shape_472.setTransform(-811.8,-113.45);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAJAAAaIAABJIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_473.setTransform(-840.725,-111.05);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#3E5EAB").s().p("AgsA0QgRgSAAghQAAghARgSQASgUAbAAQAbABARASQARASAAAhIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAUgPAMQgQALgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgJQgLgMgRAAQgPgBgKALg");
	this.shape_474.setTransform(-855.175,-110.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#3E5EAB").s().p("AhGBdIAAi5IBGAAQASAAAJACQAOACAKAHQAJAGAFAMQAGALAAAOQAAAXgPAQQgPARgoAAIgvAAIAABLgAgugEIAwAAQAXAAAKgJQAKgIAAgQQABgMgGgJQgGgIgJgDQgHgBgRAAIgvAAg");
	this.shape_475.setTransform(-870.6,-113.45);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgIAHgGQAIgDAIgDIAVgDQAagEANgEIABgGQAAgOgHgGQgIgHgRAAQgQAAgHAFQgIAGgEAOIgWgDQADgOAHgJQAHgJANgFQANgEARgBQARABALAEQAKAEAGAGQAEAGACAKQACAFAAAPIAAAeQAAAgACAIQABAJAEAIIgYAAQgEgIgBgJQgMALgMAEQgLAEgNAAQgWAAgMgKgAgEAIQgPACgFADQgHACgCAGQgEAEAAAHQABAIAGAGQAHAHANgBQANAAAKgFQAKgGAFgKQADgHAAgQIAAgIQgMAFgXADg");
	this.shape_476.setTransform(-900,-110.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAJAAAaIAABJIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_477.setTransform(-914.425,-111.05);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgOgDgFQgCgHgFgDQgGgEgJAAQgNAAgKAJQgKAKAAAVIAABNIgVAAIAAhWQgBgQgFgIQgGgHgMAAQgKAAgIAFQgIAFgEAKQgEAKAAASIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAHQAJAFAEAMQAQgYAaAAQATAAALALQALALAAAXIAABcg");
	this.shape_478.setTransform(-938.2,-111.05);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAVQAIgOAHgGQAFgEAIAAQAMAAAMAIIgIAUQgJgEgIAAQgIAAgEAEQgHAFgCAIQgEAMAAAOIAABGg");
	this.shape_479.setTransform(-952.35,-111.05);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#3E5EAB").s().p("AgsA0QgRgSAAghQAAghARgSQASgUAbAAQAbABARASQARASAAAhIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAUgPAMQgQALgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgJQgLgMgRAAQgPgBgKALg");
	this.shape_480.setTransform(-964.975,-110.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#3E5EAB").s().p("AgLBdIAAijIg+AAIAAgWICTAAIAAAWIg+AAIAACjg");
	this.shape_481.setTransform(-980.075,-113.45);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#3E5EAB").s().p("AgqBMQgSgXAAg1QAAggAHgUQAHgUANgLQANgLAUAAQAPAAALAGQALAGAIAMQAHALAEARQAFAPAAAbQgBAhgGAUQgHAUgNAMQgOAKgUAAQgaAAgQgTgAgZg9QgLARAAAsQAAAuAKAPQALAQAPgBQAPAAALgPQALgPAAguQAAgtgLgPQgLgPgPAAQgPAAgKAOg");
	this.shape_482.setTransform(-644.8,236.35);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#3E5EAB").s().p("AgqBPQgQgOgCgXIAXgDQADASAKAJQAKAJANAAQAPAAAMgNQAMgMAAgVQgBgTgKgLQgLgLgSAAQgKAAgJAFQgJAFgFAHIgWgDIASheIBcAAIAAAWIhKAAIgKAyQARgMASAAQAYAAARARQAQAQAAAaQAAAZgOATQgSAWgeAAQgaAAgPgOg");
	this.shape_483.setTransform(-659.15,236.525);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#3E5EAB").s().p("AgjBgIA1i/IASAAIg1C/g");
	this.shape_484.setTransform(-670,236.225);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#3E5EAB").s().p("AgLBdIAAijIg+AAIAAgWICTAAIAAAWIg+AAIAACjg");
	this.shape_485.setTransform(-681.525,236.25);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgXAAIAAiGIAVAAIAAATQAGgKALgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_486.setTransform(-765.35,238.65);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgJgGgIAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_487.setTransform(-779.5,238.65);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#3E5EAB").s().p("AgLBdIAAijIg+AAIAAgWICTAAIAAAWIg+AAIAACjg");
	this.shape_488.setTransform(-807.225,236.25);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#FF0000").ss(2,1,1).p("A03nDMApvAOH");
	this.shape_489.setTransform(-950.775,184.675);

	this.instance_7 = new lib.Bitmap33();
	this.instance_7.setTransform(-860,-183,1.7303,1.7303);

	this.instance_8 = new lib.Picture11();
	this.instance_8.setTransform(-905,-1181,1.0027,1.0027);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgPAAQgZAAgPgMg");
	this.shape_490.setTransform(-851.2,-196.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgDgHQgCgGgFgEQgGgDgJAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_491.setTransform(-882.85,-196.95);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgNAAQgKAAgIAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAPAAALAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_492.setTransform(-942.85,-199.35);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAWAAIAAC5g");
	this.shape_493.setTransform(-984.85,-199.35);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#3E5EAB").s().p("AgTBfIAAh0IgTAAIAAgSIATAAIAAgOQABgOACgHQADgIAJgGQAHgGAPAAQAJAAANADIgEAUIgNgCQgLAAgFAFQgDAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_494.setTransform(-990.65,-199.525);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_495.setTransform(-1040,-196.95);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_496.setTransform(-1052.65,-196.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAKgGAMAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgPAJQgOAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQAKANAPAAQAPAAAKgNQAMgNAAgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_497.setTransform(-1157.75,-194.375);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQALABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAQAAAKgNQAKgMAAgZQAAgagKgNQgLgNgPgBQgPAAgKANg");
	this.shape_498.setTransform(-1246.65,-199.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#3E5EAB").s().p("AgeB6QAlg9AAg9QAAgWgFgYQgDgTgIgRQgFgMgQgbIARAAQAXAgALAgQAKAcAAAdQAAAjgNAfQgNAhgSAXg");
	this.shape_499.setTransform(-370.825,-227.85);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAOAAQARAAAHgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgHAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgYAAgPgMg");
	this.shape_500.setTransform(-434,-227.85);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAAMAHIgIAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_501.setTransform(-450.9,-228);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_502.setTransform(-503.15,-228);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#3E5EAB").s().p("AAPB6QgSgXgNghQgOgfAAgjQAAgdAKgcQAMggAXggIAQAAQgPAbgFALQgIARgEAUQgFAXAAAXQAAA9AlA9g");
	this.shape_503.setTransform(-518.025,-227.85);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#3E5EAB").s().p("AgrBUQgTgMgJgXQgKgYAAgZQAAgdALgWQALgWAUgLQAVgLAYAAQAbAAAUAOQATAOAHAaIgYAGQgHgUgMgKQgMgJgTAAQgUAAgPAKQgOALgGARQgGARAAATQAAAWAHASQAHASAPAJQAOAIAQAAQAVAAAOgMQAPgMAFgXIAYAGQgIAfgUAQQgUAPgdAAQgdAAgTgMg");
	this.shape_504.setTransform(-539.125,-230.425);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_505.setTransform(-558.85,-230.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_506.setTransform(-568.95,-227.85);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgBgHQgDgGgFgEQgHgDgIAAQgOAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQAUAAAKAMQAMALAAAXIAABbg");
	this.shape_507.setTransform(-607.15,-228);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_508.setTransform(-621.3,-228);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#3E5EAB").s().p("AgeB6QAlg9AAg9QAAgWgFgYQgDgTgIgRQgFgMgQgbIARAAQAXAgALAgQAKAcAAAdQAAAjgNAfQgNAhgSAXg");
	this.shape_509.setTransform(-694.175,-227.85);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_510.setTransform(-701.725,-230.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_511.setTransform(-722.35,-228);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_512.setTransform(-734.975,-227.85);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQALAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_513.setTransform(-756.65,-227.85);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAVAAQANAAALAGQALAEAHAKQAIAJADANQAFAMAAAOQAAAjgRATQgSATgYAAQgXAAgOgVgAgagNQgLAMAAAYQABAYAGALQALASASAAQAOAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgPABgLANg");
	this.shape_514.setTransform(-770.7,-230.25);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#3E5EAB").s().p("AAPB6QgSgXgNghQgOgfAAgjQAAgdAKgcQAMggAXggIAQAAQgPAbgFALQgIARgEAUQgFAXAAAXQAAA9AlA9g");
	this.shape_515.setTransform(-782.275,-227.85);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#3E5EAB").s().p("AgqBMQgSgXAAg1QAAggAHgUQAHgUANgLQANgLAUAAQAPAAALAGQAMAGAHAMQAHALAEARQAFAPAAAbQgBAhgGAUQgHAUgNALQgOALgUAAQgaAAgQgTgAgZg9QgLARAAAsQAAAuAKAPQALAQAPgBQAPAAALgPQALgPAAguQAAgtgLgPQgLgPgPAAQgPAAgKAOg");
	this.shape_516.setTransform(-801.4,-230.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#3E5EAB").s().p("AgqBQQgQgOgCgXIAXgDQAEATAJAJQAJAIAOAAQAQAAALgLQALgLgBgRQABgPgLgLQgKgKgQAAQgFAAgKADIADgTIADAAQAOAAAMgIQALgHAAgQQAAgNgJgIQgIgIgMAAQgNAAgKAIQgIAIgDARIgXgEQAEgXAPgMQAPgNAWAAQAOAAANAGQANAHAHALQAGAMABAMQgBAMgGAKQgHAKgMAGQARAEAJALQAJAMAAASQAAAYgSARQgSARgaAAQgYAAgRgPg");
	this.shape_517.setTransform(-815.8,-230.275);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAWAAIAAC5g");
	this.shape_518.setTransform(-833.2,-230.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_519.setTransform(-867.825,-230.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgDgHQgCgGgFgEQgGgDgJAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_520.setTransform(-881.5,-228);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_521.setTransform(-908.275,-227.85);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQADACAFAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_522.setTransform(-918.9,-230.1);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_523.setTransform(-932.775,-230.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_524.setTransform(-966.45,-230.25);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQARAAAHgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgXgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgNgMg");
	this.shape_525.setTransform(-1010.1,-227.85);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_526.setTransform(-1023.775,-227.85);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAXAAIAABCQAPgTAVAAQAMAAAMAGQALAEAHAKQAIAJADANQAEAMAAAOQAAAjgQATQgSATgYAAQgWAAgOgVgAgagNQgLAMABAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgMANg");
	this.shape_527.setTransform(-1037.85,-230.25);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgSgFQgZgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgHAKgMAGQgMAGgQAAQgaAAgOgMg");
	this.shape_528.setTransform(-1059.2,-227.85);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgGADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_529.setTransform(-1096,-227.85);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_530.setTransform(-1132.1,-227.85);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgNAAQgKAAgIAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAPAAALAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_531.setTransform(-1231.75,-230.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_532.setTransform(-1260.675,-228);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_533.setTransform(-1275.125,-227.85);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_534.setTransform(-1225.925,-261.45);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_535.setTransform(-1263.525,-259.05);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_536.setTransform(-1295.65,-259.05);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_537.setTransform(-1308.275,-258.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#3E5EAB").s().p("AAxBwQgFgGgBgMIAAgEQgIAKgJAGQgIAGgKADQgJADgLABQgPAAgNgHQgOgGgJgMQgKgNgEgQQgGgQAAgTQAAgnAUgWQAUgXAgAAQARABAMAFQANAHAMANIAAg/QAAgNAGgHQAFgGAJgBQALAAAEAHQAFAGABAMIAAC7QAAAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQgBAQAGANQAFAMAJAGQAKAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_538.setTransform(-925.85,-304.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgGgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_539.setTransform(-973.05,-301.125);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#3E5EAB").s().p("AgOBwQgGgHAAgMIAAi5QAAgMAGgHQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_540.setTransform(-1006.075,-304.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAFAFAEAJQAEALAFAIQAGAHAJAEQAJAGAPAAQAUAAAMgKQAOgKAAgOQgBgLgGgIQgIgHgKgDQgLgEgSgEQgZgHgRgHQgQgHgKgNQgKgNAAgVQAAgSAKgPQALgOAUgJQATgHAagBQAUAAAQAGQAQAFAJAJQALAJAEAJQAFAKAAAIQAAAJgGAGQgFAHgKAAQgIAAgEgEQgEgEgFgJQgFgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQgBAGAEAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_541.setTransform(-1040.3,-304.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#3E5EAB").s().p("AgoBoIAEgSIAqizQADgOADgFQADgGAJAAQAJAAAEAFQAEADAAAHQAAAEgDAOIgrCzIgEANQgCAGgDACQgEADgGABQgQAAAAgPg");
	this.shape_542.setTransform(-1063.6,-304.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgHAKAAQAKAAAGAHQAGAHAAAMIAABAQAIgKAIgFQAHgFAJgDQAJgDALAAQAQAAANAHQANAGAGAOQAFAHACAKQABAJAAAMIAABSQAAANgFAGQgHAHgJAAQgWAAAAgag");
	this.shape_543.setTransform(-1085.75,-304.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#3E5EAB").s().p("Ag6BAQgVgXAAgnQgBgZAKgUQAKgVAUgKQATgMAZAAQASAAANAFQAOAFAJAIQAKAHAFAJQAFAJAAAHQAAAIgFAFQgGAGgIAAQgGAAgDgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgLAPQgMAPAAAYQAAAMADALQADAKAGAHQAFAHAIAEQAIADAIAAQAOAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAHAAQAHAAAFAGQAFAGABAGQgBAIgEAJQgFAJgJAJQgLAIgOAFQgPAFgTAAQgmAAgXgXg");
	this.shape_544.setTransform(-1105,-301.175);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEAAAGIACARIAAAdIAPAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_545.setTransform(-1119.6,-304.025);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAFAFAEAJQAFALAEAIQAFAHAKAEQAJAGAPAAQATAAANgKQAOgKAAgOQgBgLgGgIQgIgHgKgDQgMgEgRgEQgZgHgQgHQgRgHgKgNQgKgNABgVQgBgSAKgPQALgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQALAJAFAJQAEAKAAAIQAAAJgFAGQgHAHgJAAQgHAAgEgEQgEgEgFgJQgHgNgJgHQgIgHgTAAQgRgBgLAJQgLAHAAAMQAAAGADAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQAKAIAHALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_546.setTransform(-1171,-304.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQAAgZALgUQAJgVAUgKQATgMAZAAQARAAAOAFQAOAFAJAIQAKAHAGAJQAEAJAAAHQAAAIgFAFQgGAGgIAAQgGAAgDgDQgEgDgEgGQgIgMgIgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAIAAQANAAAKgGQAJgGAHgMQAEgHAEgEQAFgEAGAAQAIAAAGAGQAEAGAAAGQABAIgFAJQgFAJgKAJQgKAIgOAFQgPAFgTAAQgnAAgVgXg");
	this.shape_547.setTransform(-1199.35,-301.175);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAIAAAFAGQAEAEABAGIABARIAAAdIAQAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_548.setTransform(-1222.6,-304.025);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_549.setTransform(-1238.275,-301.15);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgGgLgSAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_550.setTransform(-1257.45,-301.125);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#3E5EAB").s().p("ABJBuQgFgGAAgOIAAidIglCRIgFAVQgDAHgGAFQgHAGgKAAQgHAAgGgEQgFgEgDgFIgFgMIgEgOIgliRIAACdQAAAOgFAGQgHAHgKAAQgJAAgGgHQgFgGAAgOIAAi0QAAgPAIgFQAHgGAOABIAOAAQAMAAAHACQAFACAEAGIAFAUIAhB8IAhh8IAGgUQAEgGAFgCQAGgCANAAIAOAAQAOgBAHAGQAIAFAAAPIAAC0QAAAOgFAGQgHAHgJAAQgJAAgHgHg");
	this.shape_551.setTransform(-1319.45,-304.1);

	this.instance_9 = new lib.Picture7();
	this.instance_9.setTransform(-1335,-73,1.0362,1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#3E5EAB").s().p("AghA9QgPgSAAgrQAAgZAFgRQAGgQALgJQALgJAPABQAMAAAKAEQAIAFAGAKQAGAIADANQAEANAAAWQAAAbgGAQQgFAQgLAJQgKAJgRAAQgVAAgMgQgAgUgxQgJANAAAkQAAAlAJAMQAJAMALAAQANAAAJgMQAIgMAAglQAAgkgIgMQgJgNgNAAQgMAAgIAMg");
	this.shape_552.setTransform(-418.7,84.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#3E5EAB").s().p("AghBBQgNgMgCgTIASgCQAEAQAHAGQAHAIALgBQAMABAKgKQAIgJABgNQAAgNgJgIQgIgIgNAAQgEAAgIACIACgPIADAAQALAAAKgGQAJgGAAgNQgBgKgGgHQgHgHgKAAQgKABgIAGQgHAHgCANIgTgDQAEgSAMgKQAMgKASAAQALAAALAEQAJAGAGAJQAFAJAAAKQABAKgGAIQgFAIgKAFQANADAHAJQAIAJAAAOQAAAVgPANQgNAOgWAAQgTAAgNgMg");
	this.shape_553.setTransform(-430.3,84.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#3E5EAB").s().p("AgcBOIAribIAOAAIgqCbg");
	this.shape_554.setTransform(-444.8,84.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#3E5EAB").s().p("AgiBDQgPgJgIgTQgIgTAAgUQAAgXAJgSQAJgSAQgJQARgIASgBQAXAAAPAMQAQALAGAVIgUAFQgFgRgKgHQgKgIgPAAQgQABgMAHQgLAJgFAOQgFAOAAAPQAAASAGAOQAFAOAMAIQAMAGANABQAQAAAMgKQALgKAEgTIAUAFQgGAZgQANQgQANgYAAQgXAAgPgLg");
	this.shape_555.setTransform(-475.275,-102.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#3E5EAB").s().p("AgcBOIAqibIAPAAIgqCbg");
	this.shape_556.setTransform(-491.65,-102.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#3E5EAB").s().p("AghA9QgPgSAAgrQAAgaAFgQQAGgQALgJQAKgJAQAAQAMABAJAEQAKAFAFAKQAGAIADANQAEAOAAAVQAAAagFARQgGAQgLAJQgLAJgQgBQgUAAgNgPgAgTgyQgKAOAAAkQAAAlAJAMQAJANALAAQANAAAIgNQAJgMAAglQAAgkgJgMQgIgNgNAAQgMABgHAKg");
	this.shape_557.setTransform(-458.05,-26.15);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#3E5EAB").s().p("AgiBAQgNgMgCgTIAUgBQACAOAIAHQAIAHALAAQAMAAAJgKQAJgKAAgQQAAgQgIgIQgJgJgOAAQgJAAgHAEQgHAEgEAFIgRgCIAOhMIBKAAIAAARIg7AAIgIApQANgKAOAAQAUAAANAOQAOANAAAVQAAAUgMAPQgOASgYAAQgVAAgNgLg");
	this.shape_558.setTransform(-469.625,-26.025);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#3E5EAB").s().p("AgcBNIAriaIAOAAIgqCag");
	this.shape_559.setTransform(-484.15,-26.25);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#3E5EAB").s().p("AgJBLIAAiEIgyAAIAAgRIB2AAIAAARIgxAAIAACEg");
	this.shape_560.setTransform(-499.2,-26.25);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#3E5EAB").s().p("AgdBIQgOgHgIgLQgHgMgBgPIATgCQABALAFAIQAFAHAKAEQAKAFAMAAQAMAAAIgEQAJgDAEgGQAEgGAAgGQAAgIgEgFQgEgGgJgDIgagHQgVgFgIgEQgLgFgFgIQgFgJAAgKQAAgMAGgKQAHgJAMgFQANgGAPAAQAPABANAFQANAFAHALQAHAKAAANIgTABQgCgOgIgHQgJgHgRAAQgSAAgIAHQgIAGAAAKQAAAHAGAGQAGAFAXAFQAYAGAJAEQANAFAGAJQAHAKAAALQAAAMgHALQgHALgNAGQgNAFgQAAQgTAAgOgFg");
	this.shape_561.setTransform(-512.725,-26.25);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#3E5EAB").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_562.setTransform(-527.825,-26.25);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#3E5EAB").s().p("AgoAwQgJgJAAgNQAAgIAEgHQAEgHAGgEQAFgDAHgCIARgCQAVgDALgEIAAgFQAAgLgGgEQgGgHgOAAQgNAAgFAFQgHAEgDAMIgSgCQACgMAHgHQAFgHAKgEQALgEANAAQAOAAAJADQAJAEADAFQAEAFADAHIABARIAAAYQAAAZAAAHQACAHADAGIgTAAQgDgFgBgIQgKAJgJADQgJAEgLAAQgRAAgLgJgAgEAHQgLABgEACQgFACgCAEQgDAEAAAFQAAAHAFAFQAGAFAKAAQAKAAAIgEQAJgFADgIQAEgGAAgNIAAgGQgKAEgUADg");
	this.shape_563.setTransform(-536,-24.175);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#3E5EAB").s().p("AAaA4IAAhCQAAgLgCgGQgCgFgGgEQgGgDgHAAQgLABgIAHQgJAHAAAVIAAA7IgSAAIAAhsIAQAAIAAAPQANgSAVAAQAKAAAIAEQAJADADAGQAFAGABAIIABARIAABDg");
	this.shape_564.setTransform(-547.6,-24.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#3E5EAB").s().p("AgIBLIAAhsIARAAIAABsgAgIg1IAAgVIARAAIAAAVg");
	this.shape_565.setTransform(-555.725,-26.25);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#3E5EAB").s().p("AA3A4IAAhEQAAgLgCgFQgCgFgEgDQgFgDgGAAQgMABgHAHQgIAHAAASIAAA+IgRAAIAAhGQAAgNgEgFQgFgHgLAAQgHAAgGAFQgHADgEAJQgDAHAAAPIAAA4IgSAAIAAhsIARAAIAAAPQAFgIAIgEQAJgFALgBQAMABAIAFQAGAFADAIQAOgTAUAAQAQABAJAIQAJAKgBASIAABKg");
	this.shape_566.setTransform(-566.75,-24.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#3E5EAB").s().p("AgcA4IAAhsIAQAAIAAAQQAHgLAFgEQAFgEAFAAQAKABAJAFIgFASQgIgEgGgBQgGAAgEAEQgFAEgCAGQgDAKAAALIAAA5g");
	this.shape_567.setTransform(-578.2,-24.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#3E5EAB").s().p("AgjAqQgOgPAAgaQAAgbAOgPQAOgPAWAAQAVAAAOAPQAOAPAAAaIAAAFIhQAAQABASAJAJQAJAKANAAQAKAAAHgGQAHgFAEgMIATADQgEAQgMAJQgMAKgTAAQgXAAgOgPgAgTggQgJAIgBAOIA8AAQgCgNgFgHQgJgLgOAAQgMAAgIAJg");
	this.shape_568.setTransform(-588.375,-24.175);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#3E5EAB").s().p("AgJBLIAAiEIgxAAIAAgRIB2AAIAAARIgzAAIAACEg");
	this.shape_569.setTransform(-600.5,-26.25);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#FF0000").ss(2,1,1).p("AqlEdIVLo5");
	this.shape_570.setTransform(-677.3721,5.5363,0.8059,0.8059);

	this.instance_10 = new lib.Bitmap41();
	this.instance_10.setTransform(-1112.45,-118.45,2.0724,2.0724);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_571.setTransform(-507.3,-165.75);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgZAAgNgMg");
	this.shape_572.setTransform(-533.3,-165.75);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgHAGQgGAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_573.setTransform(-552.1,-165.75);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAWAAIAAASQAHgKAJgFQAKgGAMAAQARAAANAJQANAJAHAQQAGARAAATQAAAVgHAPQgHARgPAJQgOAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgLAOAAAaQgBAZALAMQAKANAQAAQAOAAAKgNQAMgNAAgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_574.setTransform(-579.85,-163.325);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_575.setTransform(-601.9,-165.75);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQAKABAKAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_576.setTransform(-616.75,-168.15);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_577.setTransform(-630.8,-165.75);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgOAJQgPAIgPAAQgKAAgKgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgLAOg");
	this.shape_578.setTransform(-644.85,-163.325);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGAMAAQASAAANAJQANAJAHAQQAHARAAATQgBAVgGAPQgIARgPAJQgOAIgPAAQgKAAgJgFQgJgEgHgIIAABCgAgag+QgLAOAAAaQAAAZALAMQAKANAPAAQAOAAAMgNQALgNgBgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_579.setTransform(-738.75,-163.325);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIAUAFQAYAHAJAEQAKAEAFAIQAGAHAAAMQAAAMgHAJQgHAKgMAGQgNAGgPAAQgaAAgOgMg");
	this.shape_580.setTransform(-765.9,-165.75);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQANAFAFAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_581.setTransform(-784.7,-165.75);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_582.setTransform(-848.95,-165.75);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgLAFgZAEg");
	this.shape_583.setTransform(-888,-165.75);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAYAAIAABCQAOgTAWAAQALAAAMAGQALAEAHAKQAIAJAEANQADAMAAAOQABAjgSATQgRATgYAAQgWAAgOgVgAgZgNQgLAMAAAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgOABgLANg");
	this.shape_584.setTransform(-902.05,-168.15);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_585.setTransform(-920.4,-165.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQABAKABACQABADADACQACACAFAAIAKgBIAEAUQgKACgIAAQgMAAgFgEg");
	this.shape_586.setTransform(-1048.8,-168);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_587.setTransform(-1107.55,-165.75);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAWAAQALAAAMAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgQATQgSATgYAAQgXAAgOgVgAgagNQgKAMgBAYQABAYAGALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_588.setTransform(-1121.6,-168.15);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgBgHQgDgGgFgEQgHgDgIAAQgOAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAZAAQAVAAAKAMQAMALAAAXIAABbg");
	this.shape_589.setTransform(-1139.95,-165.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAVAAIAAASQAHgKAJgFQAKgGALAAQASAAANAJQANAJAHAQQAGARAAATQAAAVgGAPQgIARgPAJQgNAIgQAAQgLAAgIgFQgKgEgGgIIAABCgAgag+QgLAOABAaQAAAZAKAMQAKANAQAAQANAAAMgNQALgNAAgaQAAgagLgNQgLgNgOAAQgOAAgMAOg");
	this.shape_590.setTransform(-1215.5,-163.325);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAQAAAHgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQALAFAGAIQAFAHADANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgHAKgMAGQgNAGgPAAQgaAAgNgMg");
	this.shape_591.setTransform(-1236.85,-165.75);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgDAFgBAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_592.setTransform(-1250.55,-165.75);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#3E5EAB").s().p("AhGBdIAAi5IBGAAQASAAAJABQAOADAJAGQAKAHAGALQAFAMAAANQAAAZgPAPQgPAQgnAAIgwAAIAABMgAgugEIAwAAQAYABAJgKQAKgJAAgQQABgLgGgJQgGgIgKgCQgGgCgQAAIgwAAg");
	this.shape_593.setTransform(-1294.85,-168.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#3E5EAB").s().p("AgTBfIAAh0IgTAAIAAgSIATAAIAAgOQABgOACgHQADgIAJgGQAHgGAPAAQAJAAANADIgEAUIgNgCQgLAAgFAFQgDAEAAAMIAAANIAZAAIAAASIgZAAIAAB0g");
	this.shape_594.setTransform(-222.15,-199.525);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQgBgVQABgUAGgPQAHgRANgJQAOgJAQAAQAMABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANAOAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_595.setTransform(-355.4,-199.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgHgHQgIgIgOAAQgIAAgKAFQgIAFgEAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAPAAAMAGQAKAGAGAKQAEALAAASIAABWg");
	this.shape_596.setTransform(-389.65,-199.35);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgGACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_597.setTransform(-425.8,-196.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAPAAAKgNQALgMAAgZQAAgagLgNQgLgNgQgBQgOAAgKANg");
	this.shape_598.setTransform(-440.65,-199.2);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_599.setTransform(-457.6,-199.35);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_600.setTransform(-531.3,-199.35);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARABATQAAAVgIAPQgHARgOAJQgOAIgQAAQgKAAgKgFQgJgEgGgIIAABCgAgag+QgKAOgBAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_601.setTransform(-561.25,-194.375);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_602.setTransform(-590.5,-196.8);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#3E5EAB").s().p("AgpBMQgTgXABg1QgBggAHgUQAHgUAOgLQAMgLAUAAQAPAAALAGQALAGAIAMQAHALAFARQADAPAAAbQAAAhgGAUQgHAUgNALQgOALgUAAQgaAAgPgTgAgZg9QgLARAAAsQAAAuAKAPQALAQAPgBQAPAAALgPQALgPAAguQAAgtgLgPQgLgPgPAAQgPAAgKAOg");
	this.shape_603.setTransform(-716.15,-199.25);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#3E5EAB").s().p("AgpBQQgRgOgCgXIAXgDQADATAKAJQAKAIANAAQAPAAALgLQALgLAAgRQAAgPgKgLQgKgKgQAAQgGAAgJADIADgTIADAAQAOAAALgIQAMgHAAgQQAAgNgJgIQgIgIgNAAQgNAAgIAIQgKAIgCARIgXgEQAFgXAOgMQAPgNAWAAQAPAAAMAGQANAHAHALQAGAMAAAMQAAAMgGAKQgHAKgMAGQAQAEAJALQAKAMAAASQAAAYgSARQgSARgaAAQgYAAgQgPg");
	this.shape_604.setTransform(-730.55,-199.225);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_605.setTransform(-747.95,-199.35);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_606.setTransform(-758.05,-196.8);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_607.setTransform(-782.575,-199.35);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJABAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_608.setTransform(-796.25,-196.95);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQADACAFAAIAJgBIAEAUQgKACgIAAQgMAAgGgEg");
	this.shape_609.setTransform(-833.65,-199.05);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAWAAQALAAAMAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgRATQgRATgYAAQgXAAgOgVgAgagNQgKAMgBAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_610.setTransform(-975.7,-199.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_611.setTransform(-1033.875,-196.95);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGAMAAQASAAANAJQANAJAHAQQAHARAAATQgBAVgGAPQgIARgPAJQgOAIgPAAQgKAAgJgFQgJgEgHgIIAABCgAgag+QgLAOAAAaQAAAZALAMQAKANAQAAQANAAAMgNQALgNgBgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_612.setTransform(-1062.4,-194.375);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_613.setTransform(-1080.075,-199.35);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_614.setTransform(-1090.25,-196.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_615.setTransform(-1119.15,-196.8);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#3E5EAB").s().p("AglBKIAAARIgVAAIAAi4IAXAAIAABCQAPgTAWAAQALAAAMAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgRATQgRATgYAAQgXAAgOgVgAgZgNQgMAMAAAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgKANg");
	this.shape_616.setTransform(-1133.2,-199.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQACAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_617.setTransform(-1161.8,-196.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_618.setTransform(-1217.325,-196.95);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQADACAFAAIAJgBIAEAUQgKACgIAAQgMAAgGgEg");
	this.shape_619.setTransform(-1262.6,-199.05);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQAMAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgYAEg");
	this.shape_620.setTransform(-1273.65,-196.8);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_621.setTransform(-1283.8,-199.35);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#3E5EAB").s().p("AhGBdIAAi5IBGAAQASAAAJABQAOADAJAGQAKAHAGALQAFAMAAANQAAAZgPAPQgPAQgnAAIgwAAIAABMgAgugEIAwAAQAYABAJgKQAKgJAAgQQABgLgGgJQgGgIgKgCQgGgCgQAAIgwAAg");
	this.shape_622.setTransform(-1294.85,-199.35);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_623.setTransform(-927.325,-225.275);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_624.setTransform(-941.375,-228);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_625.setTransform(-966,-230.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARABATQAAAVgIAPQgHARgOAJQgOAIgQAAQgKAAgKgFQgJgEgGgIIAABCgAgag+QgKAOgBAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_626.setTransform(-975.7,-225.425);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_627.setTransform(-997.725,-228);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_628.setTransform(-1012.2,-227.85);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgHgHQgIgIgOAAQgIAAgKAFQgIAFgEAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAYAAQAOAAAMAGQAKAGAFAKQAFALAAASIAABWg");
	this.shape_629.setTransform(-1026.6,-230.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgGADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_630.setTransform(-1041.1,-227.85);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_631.setTransform(-1055.525,-228);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_632.setTransform(-1070,-227.85);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_633.setTransform(-1087.95,-228);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_634.setTransform(-1136.9,-230.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_635.setTransform(-1147.925,-228);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_636.setTransform(-1162.425,-227.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_637.setTransform(-1185.475,-230.4);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_638.setTransform(-1230.275,-228);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_639.setTransform(-1240.375,-230.4);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJAQAAQALABAKAFQAJAFAGAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_640.setTransform(-1258.15,-230.25);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAWAAIAAC5g");
	this.shape_641.setTransform(-1267.9,-230.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_642.setTransform(-1277.975,-227.85);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#3E5EAB").s().p("AAwBdIAAhYIhgAAIAABYIgYAAIAAi5IAYAAIAABNIBgAAIAAhNIAZAAIAAC5g");
	this.shape_643.setTransform(-1294.55,-230.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_644.setTransform(-953.325,-256.325);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_645.setTransform(-967.375,-259.05);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_646.setTransform(-981.875,-258.75);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_647.setTransform(-992,-261.45);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgOAJQgPAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQABgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_648.setTransform(-1001.7,-256.475);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_649.setTransform(-1022.125,-261.45);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_650.setTransform(-1032.375,-261.45);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgDAFgBAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_651.setTransform(-1051.2,-258.9);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_652.setTransform(-1065.625,-259.05);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgFgEQgGgDgIAAQgOAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAAMAMQALALgBAXIAABbg");
	this.shape_653.setTransform(-1098.05,-259.05);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_654.setTransform(-1121.775,-261.45);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_655.setTransform(-1136.425,-258.75);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQACACAFAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_656.setTransform(-1147,-261.15);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_657.setTransform(-1158.025,-259.05);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_658.setTransform(-1172.525,-258.75);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_659.setTransform(-1189.85,-261.45);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_660.setTransform(-1195.575,-261.45);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_661.setTransform(-1205.725,-258.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_662.setTransform(-1219.025,-258.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_663.setTransform(-1240.375,-259.05);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_664.setTransform(-1250.475,-261.45);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_665.setTransform(-1263.55,-261.45);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_666.setTransform(-1269.35,-261.45);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_667.setTransform(-1279.475,-258.75);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#3E5EAB").s().p("AhGBdIAAi5IBGAAQASAAAJABQAOADAJAGQAKAHAGALQAFAMAAANQAAAZgPAPQgPAQgnAAIgwAAIAABMgAgugEIAwAAQAYABAJgKQAKgJAAgQQABgLgGgJQgGgIgKgCQgGgCgQAAIgwAAg");
	this.shape_668.setTransform(-1294.85,-261.45);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#3E5EAB").s().p("AAiBdIAAhIQAAgVgHgKQgFgLgRAAQgLAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAFgHQAGgHAKAAQALAAAFAHQAGAHAAAMIAABAQAIgKAHgFQAIgFAJgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHABAKQACAJAAAMIAABSQAAANgFAGQgHAHgKAAQgUAAAAgag");
	this.shape_669.setTransform(-908.95,-304.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQABgZAJgUQALgVATgKQATgMAaAAQARAAANAFQAOAFAKAIQAJAHAFAJQAGAJAAAHQAAAIgHAFQgFAGgIAAQgGAAgDgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAJAAQANAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAGAAQAIAAAGAGQAEAGAAAGQAAAIgEAJQgFAJgKAJQgKAIgPAFQgOAFgTAAQgnAAgVgXg");
	this.shape_670.setTransform(-928.2,-301.175);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEACAGIAAARIAAAdIARAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgHAEgMAAIgJAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAKgBQAEAAAFAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_671.setTransform(-942.8,-304.025);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAFAIQAFAHAJAEQAKAGAPAAQAUAAAMgKQANgKABgOQAAgLgIgIQgGgHgMgDQgKgEgSgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAQAFAKAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgTAAQgSgBgLAJQgLAHAAAMQABAGADAFQAEAFAHAEIAMAGIAWAFQATAFAQAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_672.setTransform(-994.2,-304.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#3E5EAB").s().p("Ag6BAQgVgXAAgnQgBgZAKgUQAKgVAUgKQATgMAZAAQASAAANAFQAOAFAJAIQAKAHAFAJQAFAJABAHQgBAIgFAFQgGAGgIAAQgFAAgEgDQgEgDgEgGQgIgMgIgGQgJgGgNAAQgSAAgLAPQgMAPAAAYQAAAMADALQADAKAGAHQAFAHAIAEQAIADAIAAQAOAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAHAAQAHAAAFAGQAGAGAAAGQgBAIgEAJQgFAJgJAJQgLAIgOAFQgPAFgTAAQgmAAgXgXg");
	this.shape_673.setTransform(-1022.55,-301.175);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEACAGIABARIAAAdIAPAAQAKAAAFAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgHAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIAKgBQAFAAAFAEQAEAEAAAGQAAALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_674.setTransform(-1045.8,-304.025);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgEAMQgDAJAAAZIAAA2QgBANgFAGQgHAHgJAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_675.setTransform(-1080.65,-301.125);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#3E5EAB").s().p("ABKBuQgGgGAAgOIAAidIglCRIgGAVQgCAHgGAFQgHAGgKAAQgHAAgGgEQgGgEgDgFIgFgMIgDgOIgliRIAACdQAAAOgGAGQgGAHgJAAQgKAAgFgHQgHgGAAgOIAAi0QAAgPAIgFQAIgGANABIAPAAQAMAAAGACQAHACACAGIAHAUIAgB8IAhh8IAHgUQACgGAHgCQAFgCANAAIAOAAQAOgBAIAGQAHAFABAPIAAC0QgBAOgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_676.setTransform(-1142.65,-304.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#3E5EAB").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_677.setTransform(-1181.375,-301.125);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgGgGABgNIAAi2QgBgOAGgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAFAFABAIQgBAJgRAQIgXATIAsBFIAIAMQABAEAAADQAAAKgFAHQgFAFgKABQgIAAgEgFg");
	this.shape_678.setTransform(-1198.5,-304.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGABANIAABDQAAAPACAKQACAKAHAGQAHAFALAAQAKAAAJgGQAJgGAEgLQAFgJgBgdIAAg0QAAgNAHgGQAFgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_679.setTransform(-1218,-301.125);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#3E5EAB").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_680.setTransform(-1261.775,-301.125);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#3E5EAB").s().p("AgGB0QgJgDgGgDIgKgIIgLgMIAAAEQAAAMgGAHQgGAFgIABQgKgBgFgFQgGgHABgMIAAi5QgBgNAGgHQAFgGAKgBQAKAAAEAHQAGAGAAAMIAABBQAMgNANgGQAMgHARAAQAWABAPAJQARAKAIAUQAKARgBAbQAAATgEARQgGAQgJAMQgJAMgOAGQgNAHgQAAQgKAAgIgDgAgTgPQgKAGgFAMQgGANAAAQQAAAaAMAOQALAOASAAQAQgBAMgOQALgOAAgZQAAgRgEgMQgFgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape_681.setTransform(-933,-304.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFALAAQAKAAAKgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_682.setTransform(-953.1,-301.125);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgHAKAAQAKAAAGAHQAGAHAAAMIAABAQAIgKAIgFQAHgFAJgDQAJgDALAAQAQAAANAHQANAGAGAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgGAHgJAAQgWAAAAgag");
	this.shape_683.setTransform(-972.45,-304.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_684.setTransform(-1025.125,-304.1);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#3E5EAB").s().p("AgpBoQgTgOgJgXQgGgNgBgQQgDgQAAgSQAAgXADgSQACgTAGgOQAIgWASgMQARgMAZAAQAPAAAOAFQAMAFAKALQALAKAGAOQAMAaAAAuQAAAagDASQgDATgIAPQgMASgQAKQgRAKgUAAQgXAAgTgNgAgchAQgIAVAAArQAAAdAEATQADASAIAKQAIAKANAAQAOAAAIgKQAIgKAEgTQADgTAAgdQAAgcgDgSQgEgTgIgJQgIgJgOAAQgUAAgIAUg");
	this.shape_685.setTransform(-1052.65,-304.225);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#3E5EAB").s().p("AgvBpQgSgKgHgNQgIgOAAgKQAAgGAGgFQAFgGAHAAQANAAAHAPQAGAOALAIQAKAHAOAAQAKAAAJgFQAJgHAGgLQAEgLAAgNQABgPgGgMQgFgKgJgEQgJgGgKABQgNgBgGAEQgGADgLAHQgLAJgGgBQgJABgFgGQgGgFAAgHIACgKIAMhLQADgOAGgFQAGgHANABIBSAAQAYAAAAASQAAAIgGAFQgGAFgLAAIhKAAIgJAzQAXgMARAAQAPAAANAGQANAFALAKQAJAKAGAMQAFAOAAAPQABAXgKATQgLATgTAKQgTAMgYAAQgcAAgRgLg");
	this.shape_686.setTransform(-1071.4,-304);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#3E5EAB").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_687.setTransform(-1158.925,-301.125);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_688.setTransform(-1216.075,-304.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_689.setTransform(-1239.25,-304.025);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAFAIQAGAHAIAEQAKAGAPAAQAUAAAMgKQANgKABgOQAAgLgIgIQgHgHgLgDQgKgEgSgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgJAAgEgEQgDgEgGgJQgFgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQAAAGADAFQAEAFAHAEIAMAGIAWAFQATAFAQAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_690.setTransform(-1294,-304.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#3E5EAB").s().p("AgPARQgIgGABgLQgBgJAIgHQAGgGAJgBQAKABAGAGQAIAHAAAJQAAALgIAGQgGAHgKAAQgIAAgHgHg");
	this.shape_691.setTransform(-1317.8,-294.8);

	this.instance_11 = new lib.Bitmap42();
	this.instance_11.setTransform(-1143,-192,2.5369,2.5369);

	this.instance_12 = new lib.Bitmap44();
	this.instance_12.setTransform(-1227,-224,2.9034,2.9034);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQABgVgHgKQgFgLgRAAQgLAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAFgHQAGgHAKAAQAKAAAGAHQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHACAKQABAJAAAMIAABSQAAANgGAGQgFAHgLAAQgUAAgBgag");
	this.shape_692.setTransform(-758,-304.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGABANIAABDQAAAPACAKQADAKAGAGQAHAFALAAQAKAAAJgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_693.setTransform(-777.35,-301.125);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgEAMQgDAJAAAZIAAA2QgBANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_694.setTransform(-796.7,-301.125);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAGAAAEADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_695.setTransform(-884.4,-301.125);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgJAGQgIAHgKADQgJADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAKAAAFAHQAHAGgBANIAABDQABAPACAKQACAKAHAGQAHAFAKAAQAKAAAKgGQAKgGADgLQAEgJABgdIAAg0QAAgNAFgGQAGgHAKAAQAKAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgGgHg");
	this.shape_696.setTransform(-903.75,-301.125);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#3E5EAB").s().p("AgGB0QgIgDgGgDIgLgIIgLgMIAAAEQAAAMgGAHQgFAFgJABQgKgBgFgFQgGgHABgMIAAi5QgBgNAGgHQAFgGAKgBQAJAAAGAHQAFAGAAAMIAABBQAMgNANgGQAMgHARAAQAWABAPAJQARAKAIAUQAJARAAAbQAAATgEARQgGAQgJAMQgJAMgNAGQgOAHgQAAQgKAAgIgDgAgTgPQgKAGgGAMQgFANAAAQQAAAaAMAOQALAOASAAQAQgBAMgOQAMgOgBgZQAAgRgEgMQgFgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape_697.setTransform(-923,-304.3);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgIAHgKADQgKADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQAAAPACAKQACAKAHAGQAGAFALAAQAKAAAKgGQAKgGAEgLQADgJAAgdIAAg0QABgNAFgGQAGgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_698.setTransform(-943.1,-301.125);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQAAgVgFgKQgHgLgRAAQgKAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgHAKAAQAKAAAGAHQAGAHAAAMIAABAQAIgKAIgFQAHgFAJgDQAJgDALAAQAQAAANAHQAMAGAHAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgGAHgJAAQgWAAAAgag");
	this.shape_699.setTransform(-962.45,-304.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#3E5EAB").s().p("AgpBoQgTgOgJgXQgGgNgCgQQgCgQAAgSQAAgXACgSQADgTAGgOQAIgWASgMQASgMAYAAQAPAAAOAFQANAFAJALQAKAKAHAOQAMAaAAAuQAAAagDASQgDATgIAPQgMASgQAKQgRAKgUAAQgXAAgTgNgAgchAQgIAVAAArQAAAdAEATQADASAIAKQAIAKANAAQAOAAAIgKQAJgKADgTQADgTAAgdQAAgcgDgSQgEgTgIgJQgIgJgOAAQgUAAgIAUg");
	this.shape_700.setTransform(-1042.65,-304.225);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#3E5EAB").s().p("AgvBpQgSgKgHgNQgIgOAAgKQAAgGAGgFQAEgGAIAAQANAAAHAPQAGAOALAIQALAHAMAAQAMAAAIgFQAJgHAGgLQAEgLAAgNQABgPgGgMQgFgKgJgEQgJgGgKABQgOgBgFAEQgGADgLAHQgKAJgIgBQgIABgFgGQgGgFAAgHIABgKIAOhLQACgOAGgFQAGgHANABIBSAAQAYAAAAASQAAAIgGAFQgGAFgLAAIhJAAIgJAzQAVgMASAAQAPAAANAGQANAFALAKQAJAKAGAMQAFAOAAAPQAAAXgKATQgKATgTAKQgTAMgYAAQgcAAgRgLg");
	this.shape_701.setTransform(-1061.4,-304);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#3E5EAB").s().p("AAnBQQgGgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_702.setTransform(-1116.45,-301.125);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_703.setTransform(-1186.575,-301.15);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAGAAQAIAAAGAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_704.setTransform(-1229.25,-304.025);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQATAAANgKQANgKABgOQAAgLgIgIQgGgHgMgDQgLgEgRgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_705.setTransform(-1284,-304.3);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#3E5EAB").s().p("AgPARQgIgGABgLQgBgJAIgHQAGgGAJgBQAKABAGAGQAIAHgBAJQABALgIAGQgGAHgKAAQgIAAgHgHg");
	this.shape_706.setTransform(-1307.8,-294.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_707.setTransform(-1327.775,-304.3);

	this.instance_13 = new lib.Bitmap45();
	this.instance_13.setTransform(-1113,-216,2.4877,2.4877);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGABANIAABDQAAAPACAKQADAKAGAGQAHAFALAAQAKAAAJgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_708.setTransform(-944.75,-301.125);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_709.setTransform(-959.6,-304.025);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQACAKAHAGQAHAFALAAQAJAAAKgGQAJgGAEgLQAFgJAAgdIAAg0QgBgNAHgGQAFgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_710.setTransform(-975.45,-301.125);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#3E5EAB").s().p("AhPBvQgEgHAAgOIAAi3QABgMAFgGQAFgGAJAAQAJAAAHAGQAFAGAAAMIAAAFQAMgPANgHQANgHAQAAQATAAARAKQAQAKAKAUQAKATAAAbQAAAUgGAPQgGARgKALQgJALgNAGQgNAGgPAAQgSAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgLAAgFgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQALAAAJgGQAIgGAGgLQAFgNABgRQAAgRgGgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_711.setTransform(-994.7,-297.975);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#3E5EAB").s().p("AAxBwQgFgGAAgMIAAgEQgJAKgIAGQgJAGgJADQgKADgLABQgQAAgNgHQgNgGgJgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQAOAHAMANIAAg/QAAgNAEgHQAGgGAJgBQAKAAAGAHQAEAGAAAMIAAC7QABAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgKAGgFAMQgFAMAAARQAAAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAGgNQAFgMAAgRQAAgRgFgNQgGgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_712.setTransform(-1024.25,-304.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#3E5EAB").s().p("AgpBoQgTgOgJgXQgGgNgBgQQgDgQAAgSQAAgXADgSQACgTAGgOQAIgWASgMQARgMAZAAQAPAAAOAFQAMAFAKALQALAKAGAOQAMAaAAAuQAAAagDASQgDATgIAPQgMASgQAKQgRAKgVAAQgWAAgTgNgAgchAQgIAVAAArQAAAdAEATQADASAIAKQAIAKANAAQAOAAAJgKQAHgKAEgTQADgTAAgdQAAgcgDgSQgEgTgIgJQgIgJgOAAQgUAAgIAUg");
	this.shape_713.setTransform(-1051.3,-304.225);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#3E5EAB").s().p("AgvBpQgSgKgHgNQgIgOAAgKQAAgGAGgFQAFgGAHAAQANAAAHAPQAGAOALAIQALAHANAAQAKAAAJgFQAJgHAGgLQAEgLAAgNQABgPgGgMQgFgKgJgEQgJgGgKABQgNgBgGAEQgGADgKAHQgMAJgGgBQgJABgFgGQgGgFAAgHIABgKIANhLQADgOAGgFQAGgHANABIBSAAQAYAAAAASQAAAIgGAFQgGAFgLAAIhKAAIgJAzQAXgMARAAQAPAAANAGQANAFALAKQAJAKAGAMQAFAOAAAPQABAXgLATQgKATgTAKQgTAMgYAAQgcAAgRgLg");
	this.shape_714.setTransform(-1070.05,-304);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_715.setTransform(-1125.1,-301.125);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAFgDAFAAQAIAAAGAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_716.setTransform(-1209.9,-304.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297,p:{x:-1245.875}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290,p:{x:-1295.025}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{x:-1257.775,y:-258.9}},{t:this.shape_286,p:{x:-1245.15,y:-259.05}},{t:this.shape_285},{t:this.shape_284,p:{x:-1224.525,y:-261.45}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280,p:{x:-1279.475,y:-227.7}},{t:this.shape_279,p:{x:-1264.975,y:-228}},{t:this.shape_278,p:{x:-1250.825}},{t:this.shape_277,p:{x:-1241.825,y:-230.4}},{t:this.shape_276},{t:this.shape_275,p:{x:-1207.175}},{t:this.shape_274,p:{x:-1192.725,y:-228}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271,p:{x:-1156.475,y:-230.4}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267,p:{x:-1277.975,y:-196.95}},{t:this.shape_266,p:{x:-1267.825,y:-199.35}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263,p:{x:-1221.675}},{t:this.shape_262,p:{x:-1210.65,y:-199.05}},{t:this.shape_261,p:{x:-1200.025,y:-196.8}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:-1155.8,y:-199.05}},{t:this.shape_257},{t:this.shape_256,p:{x:-1134.15,y:-199.05}},{t:this.shape_255,p:{x:-1123.525,y:-196.8}},{t:this.shape_254,p:{x:-1110.9,y:-196.95}},{t:this.shape_253},{t:this.shape_252,p:{x:-1285.9,y:-160.3}},{t:this.shape_251,p:{x:-1276.075,y:-168.35}},{t:this.shape_250,p:{x:-1249.875,y:-168.3}},{t:this.shape_249},{t:this.shape_248,p:{x:-1217.825,y:-163.175}},{t:this.shape_247,p:{x:-1202.975,y:-165.9}},{t:this.shape_246,p:{x:-1188.525,y:-165.75}},{t:this.shape_245,p:{x:-1177.5,y:-168}},{t:this.shape_244,p:{x:-1171.175,y:-168.3}},{t:this.shape_243,p:{x:-1161.375,y:-165.75}},{t:this.shape_242},{t:this.shape_241,p:{x:-1121.375,y:-165.75}},{t:this.shape_240,p:{x:-1109.025,y:-168.3}},{t:this.shape_239,p:{x:-1102.35,y:-168}},{t:this.shape_238,p:{x:-1092.025,y:-165.75}},{t:this.shape_237},{t:this.shape_236,p:{x:-1060.65,y:-168.325}},{t:this.shape_235},{t:this.shape_234,p:{x:-1032.525,y:-165.75}},{t:this.shape_233,p:{x:-1022.45,y:-168.3}},{t:this.shape_232,p:{x:-1012.275,y:-165.75}},{t:this.shape_231,p:{x:-997.825,y:-165.9}},{t:this.shape_230,p:{x:-983.375,y:-165.75}},{t:this.shape_229,p:{x:-973.225,y:-168.3}},{t:this.shape_228,p:{x:-963.55,y:-168.15}},{t:this.shape_227},{t:this.shape_226,p:{x:-1285.9,y:-129.25}},{t:this.shape_225,p:{x:-1275.4036,y:-137.3}},{t:this.shape_224,p:{x:-1249.875,y:-137.25}},{t:this.shape_223,p:{x:-1231.875,y:-134.7}},{t:this.shape_222},{t:this.shape_221,p:{x:-1210.225,y:-134.7}},{t:this.shape_220,p:{x:-1197.6,y:-134.85}},{t:this.shape_219,p:{x:-1178.525,y:-137.275}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215,p:{x:-1133.725,y:-134.7}},{t:this.shape_214,p:{x:-1121.1,y:-134.85}},{t:this.shape_213,p:{y:-106.2}},{t:this.shape_212,p:{y:-98.2}},{t:this.shape_211},{t:this.shape_210,p:{x:-1280.925,y:-103.5}},{t:this.shape_209},{t:this.shape_208,p:{x:-1253.425,y:-103.65}},{t:this.shape_207},{t:this.shape_206,p:{x:-1314.7,y:-67.15}},{t:this.shape_205},{t:this.shape_204,p:{x:-1277.975,y:-72.6}},{t:this.shape_203,p:{x:-1267.9,y:-75.15}},{t:this.shape_202},{t:this.shape_201,p:{x:-1243.875,y:-69.875}}]},3).to({state:[{t:this.shape_402},{t:this.shape_401,p:{x:-1300.325}},{t:this.shape_400},{t:this.shape_399,p:{x:-1269.925}},{t:this.shape_398,p:{x:-1252.425}},{t:this.shape_397,p:{x:-1236.975}},{t:this.shape_396,p:{x:-1223.125}},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392,p:{x:-1148.125}},{t:this.shape_290,p:{x:-1323.875}},{t:this.shape_391,p:{x:-1308.275,y:-258.9}},{t:this.shape_390,p:{x:-1295.65,y:-259.05}},{t:this.shape_389},{t:this.shape_388,p:{x:-1278.025,y:-258.75}},{t:this.shape_387,p:{x:-1263.525,y:-259.05}},{t:this.shape_386,p:{x:-1249.475,y:-256.325}},{t:this.shape_385},{t:this.shape_384,p:{x:-1225.925,y:-261.45}},{t:this.shape_383},{t:this.shape_382,p:{x:-1194.875,y:-258.9}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379,p:{x:-1151.925,y:-256.325}},{t:this.shape_378},{t:this.shape_284,p:{x:-1126.925,y:-261.45}},{t:this.shape_377},{t:this.shape_376,p:{x:-1095.925,y:-258.75}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373,p:{x:-1045.325,y:-258.9}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370,p:{x:-1001.65}},{t:this.shape_369,p:{x:-991.225,y:-258.75}},{t:this.shape_368,p:{x:-977.5}},{t:this.shape_367,p:{x:-960.15,y:-261.45}},{t:this.shape_277,p:{x:-954.275,y:-261.45}},{t:this.shape_366,p:{x:-944.95,y:-258.9}},{t:this.shape_365,p:{x:-934.6,y:-261.15}},{t:this.shape_214,p:{x:-925.8,y:-259.05}},{t:this.shape_266,p:{x:-919.625,y:-261.45}},{t:this.shape_364,p:{x:-909.375,y:-261.45}},{t:this.shape_363,p:{x:-888.625,y:-258.75}},{t:this.shape_362,p:{x:-874.125,y:-259.05}},{t:this.shape_361,p:{x:-863.1,y:-261.15}},{t:this.shape_360,p:{x:-852.525,y:-258.75}},{t:this.shape_359,p:{x:-837.875,y:-261.45}},{t:this.shape_358},{t:this.shape_287,p:{x:-795.425,y:-258.9}},{t:this.shape_357,p:{x:-785.35,y:-261.45}},{t:this.shape_356},{t:this.shape_355,p:{x:-760.575,y:-261.45}},{t:this.shape_354,p:{x:-747.775,y:-258.75}},{t:this.shape_353,p:{x:-733.125,y:-261.45}},{t:this.shape_352,p:{x:-720.3}},{t:this.shape_351,p:{x:-705.825,y:-259.05}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348,p:{x:-663.25,y:-258.9}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_255,p:{x:-632.925,y:-258.9}},{t:this.shape_345,p:{x:-620.3,y:-259.05}},{t:this.shape_344},{t:this.shape_343,p:{x:-598.1}},{t:this.shape_246,p:{x:-587.475,y:-258.9}},{t:this.shape_342,p:{x:-573.425,y:-256.325}},{t:this.shape_341},{t:this.shape_340,p:{x:-544.125,y:-259.05}},{t:this.shape_339,p:{x:-530.075,y:-256.325}},{t:this.shape_338},{t:this.shape_337,p:{x:-500.775,y:-259.05}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_232,p:{x:-442.275,y:-258.9}},{t:this.shape_333},{t:this.shape_332,p:{x:-419.2,y:-258.9}},{t:this.shape_244,p:{x:-409.025,y:-261.45}},{t:this.shape_331},{t:this.shape_330,p:{x:-378,y:-258.9}},{t:this.shape_279,p:{x:-363.525,y:-259.05}},{t:this.shape_329,p:{x:-349.475,y:-256.325}},{t:this.shape_328},{t:this.shape_240,p:{x:-316.525,y:-261.45}},{t:this.shape_327,p:{x:-306.05}},{t:this.shape_326,p:{x:-292.025,y:-258.75}},{t:this.shape_256,p:{x:-280.95,y:-261.15}},{t:this.shape_280,p:{x:-270.375,y:-258.75}},{t:this.shape_325},{t:this.shape_324,p:{x:-241.275,y:-261.45}},{t:this.shape_323,p:{x:-228.45,y:-258.9}},{t:this.shape_274,p:{x:-213.975,y:-259.05}},{t:this.shape_201,p:{x:-192.175,y:-256.175}},{t:this.shape_322},{t:this.shape_229,p:{x:-168.425,y:-261.45}},{t:this.shape_321,p:{x:-161.75,y:-261.15}},{t:this.shape_210,p:{x:-151.175,y:-258.75}},{t:this.shape_251,p:{x:-1326.525,y:-230.45}},{t:this.shape_225,p:{x:-1311.4036,y:-230.45}},{t:this.shape_320},{t:this.shape_221,p:{x:-1272.175,y:-227.85}},{t:this.shape_319,p:{x:-1262.1,y:-230.4}},{t:this.shape_239,p:{x:-1255.35,y:-230.1}},{t:this.shape_318},{t:this.shape_317,p:{x:-1223.475,y:-225.275}},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312,p:{x:-1149.05,y:-225.425}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309,p:{x:-1105.75}},{t:this.shape_215,p:{x:-1091.675,y:-227.85}},{t:this.shape_271,p:{x:-1077.075,y:-230.4}},{t:this.shape_208,p:{x:-1064.225,y:-227.85}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_204,p:{x:-999.225,y:-227.85}},{t:this.shape_267,p:{x:-984.775,y:-228}},{t:this.shape_248,p:{x:-970.725,y:-225.275}},{t:this.shape_304},{t:this.shape_247,p:{x:-941.425,y:-228}},{t:this.shape_233,p:{x:-924.15,y:-230.4}},{t:this.shape_303,p:{x:-914,y:-227.85}},{t:this.shape_231,p:{x:-899.525,y:-228}},{t:this.shape_238,p:{x:-885.375,y:-227.85}},{t:this.shape_302,p:{x:-872.1,y:-227.85}},{t:this.shape_301,p:{x:-859.45,y:-228}},{t:this.shape_206,p:{x:-852.5,y:-222.4}},{t:this.instance_2}]},1).to({state:[{t:this.shape_300},{t:this.shape_450,p:{x:-1299.4}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445,p:{x:-1201.375}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442,p:{x:-1151.525}},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439,p:{x:-1093.625}},{t:this.shape_438,p:{x:-1079.075}},{t:this.shape_437,p:{x:-1058.95}},{t:this.shape_436,p:{x:-1044.975}},{t:this.shape_435,p:{x:-1034.45}},{t:this.shape_396,p:{x:-1024.975}},{t:this.shape_434,p:{x:-1010.975}},{t:this.shape_433},{t:this.shape_401,p:{x:-964.475}},{t:this.shape_432,p:{x:-945.25}},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_397,p:{x:-865.425}},{t:this.shape_428,p:{x:-847.875}},{t:this.shape_427},{t:this.shape_399,p:{x:-821.025}},{t:this.shape_398,p:{x:-803.525}},{t:this.shape_426},{t:this.shape_425,p:{x:-755.175}},{t:this.shape_392,p:{x:-737.875}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_290,p:{x:-1323.875}},{t:this.shape_287,p:{x:-1308.275,y:-258.9}},{t:this.shape_390,p:{x:-1295.65,y:-259.05}},{t:this.shape_389},{t:this.shape_376,p:{x:-1278.025,y:-258.75}},{t:this.shape_337,p:{x:-1263.525,y:-259.05}},{t:this.shape_329,p:{x:-1249.475,y:-256.325}},{t:this.shape_385},{t:this.shape_266,p:{x:-1225.925,y:-261.45}},{t:this.shape_369,p:{x:-1208.675,y:-258.75}},{t:this.shape_279,p:{x:-1194.175,y:-259.05}},{t:this.shape_421},{t:this.shape_363,p:{x:-1172.575,y:-258.75}},{t:this.shape_353,p:{x:-1157.925,y:-261.45}},{t:this.shape_420},{t:this.shape_255,p:{x:-1116.225,y:-258.9}},{t:this.shape_419},{t:this.shape_360,p:{x:-1080.175,y:-258.75}},{t:this.shape_418,p:{x:-1069.1,y:-261.15}},{t:this.shape_354,p:{x:-1058.525,y:-258.75}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415,p:{x:-1009.4,y:-258.9}},{t:this.shape_274,p:{x:-994.925,y:-259.05}},{t:this.shape_414},{t:this.shape_246,p:{x:-951.625,y:-258.9}},{t:this.shape_267,p:{x:-937.175,y:-259.05}},{t:this.shape_317,p:{x:-923.125,y:-256.325}},{t:this.shape_413},{t:this.shape_326,p:{x:-893.875,y:-258.75}},{t:this.shape_412},{t:this.shape_280,p:{x:-864.975,y:-258.75}},{t:this.shape_247,p:{x:-850.475,y:-259.05}},{t:this.shape_248,p:{x:-836.425,y:-256.325}},{t:this.shape_324,p:{x:-821.425,y:-261.45}},{t:this.shape_411,p:{x:-808.6,y:-258.9}},{t:this.shape_231,p:{x:-794.125,y:-259.05}},{t:this.shape_352,p:{x:-772.5}},{t:this.shape_214,p:{x:-759.85,y:-259.05}},{t:this.shape_210,p:{x:-749.425,y:-258.75}},{t:this.shape_366,p:{x:-735.7,y:-258.9}},{t:this.shape_228,p:{x:-715.15,y:-261.3}},{t:this.shape_410,p:{x:-700.3,y:-258.9}},{t:this.shape_409,p:{x:-687.65,y:-259.05}},{t:this.shape_244,p:{x:-681.475,y:-261.45}},{t:this.shape_327,p:{x:-663.8}},{t:this.shape_348,p:{x:-649.75,y:-258.9}},{t:this.shape_262,p:{x:-638.7,y:-261.15}},{t:this.shape_232,p:{x:-628.075,y:-258.9}},{t:this.shape_408,p:{x:-615.45,y:-259.05}},{t:this.shape_407,p:{x:-605,y:-258.9}},{t:this.shape_240,p:{x:-594.825,y:-261.45}},{t:this.shape_271,p:{x:-577.375,y:-261.45}},{t:this.shape_215,p:{x:-564.525,y:-258.9}},{t:this.shape_406},{t:this.shape_229,p:{x:-534.175,y:-261.45}},{t:this.shape_405},{t:this.shape_256,p:{x:-514.5,y:-261.15}},{t:this.shape_208,p:{x:-503.875,y:-258.9}},{t:this.shape_404,p:{x:-485.75,y:-259.05}},{t:this.shape_368,p:{x:-461.35}},{t:this.shape_258,p:{x:-451,y:-261.15}},{t:this.shape_323,p:{x:-440.4,y:-258.9}},{t:this.shape_343,p:{x:-429.35}},{t:this.shape_204,p:{x:-418.725,y:-258.9}},{t:this.shape_345,p:{x:-406.1,y:-259.05}},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_403}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.shape_551},{t:this.shape_397,p:{x:-1296.675}},{t:this.shape_438,p:{x:-1277.575}},{t:this.shape_550},{t:this.shape_549,p:{x:-1238.275}},{t:this.shape_548},{t:this.shape_436,p:{x:-1213.125}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_425,p:{x:-1147.425}},{t:this.shape_396,p:{x:-1130.125}},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_445,p:{x:-1020.075}},{t:this.shape_540,p:{x:-1006.075}},{t:this.shape_399,p:{x:-992.225}},{t:this.shape_539},{t:this.shape_434,p:{x:-953.725}},{t:this.shape_392,p:{x:-939.725}},{t:this.shape_538},{t:this.shape_290,p:{x:-1323.875}},{t:this.shape_537},{t:this.shape_536},{t:this.shape_389},{t:this.shape_354,p:{x:-1278.025,y:-258.75}},{t:this.shape_535,p:{x:-1263.525,y:-259.05}},{t:this.shape_386,p:{x:-1249.475,y:-256.325}},{t:this.shape_385},{t:this.shape_534,p:{x:-1225.925,y:-261.45}},{t:this.shape_251,p:{x:-1326.525,y:-230.45}},{t:this.shape_212,p:{y:-222.4}},{t:this.shape_250,p:{x:-1293.125,y:-230.4}},{t:this.shape_533},{t:this.shape_532,p:{x:-1260.675,y:-228}},{t:this.shape_379,p:{x:-1246.625,y:-225.275}},{t:this.shape_531},{t:this.shape_326,p:{x:-1217.375,y:-227.7}},{t:this.shape_309,p:{x:-1202.5}},{t:this.shape_280,p:{x:-1188.475,y:-227.7}},{t:this.shape_387,p:{x:-1173.975,y:-228}},{t:this.shape_342,p:{x:-1159.925,y:-225.275}},{t:this.shape_353,p:{x:-1144.925,y:-230.4}},{t:this.shape_530},{t:this.shape_362,p:{x:-1117.625,y:-228}},{t:this.shape_529},{t:this.shape_345,p:{x:-1083.35,y:-228}},{t:this.shape_210,p:{x:-1072.925,y:-227.7}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526,p:{x:-1023.775,y:-227.85}},{t:this.shape_525},{t:this.shape_415,p:{x:-996.35,y:-227.85}},{t:this.shape_286,p:{x:-983.7,y:-228}},{t:this.shape_524},{t:this.shape_323,p:{x:-951.6,y:-227.85}},{t:this.shape_220,p:{x:-938.95,y:-228}},{t:this.shape_523,p:{x:-932.775,y:-230.4}},{t:this.shape_522},{t:this.shape_521,p:{x:-908.275,y:-227.85}},{t:this.shape_214,p:{x:-895.65,y:-228}},{t:this.shape_520},{t:this.shape_519,p:{x:-867.825,y:-230.4}},{t:this.shape_351,p:{x:-857.725,y:-228}},{t:this.shape_330,p:{x:-843.3,y:-227.85}},{t:this.shape_518,p:{x:-833.2,y:-230.4}},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_365,p:{x:-745.6,y:-230.1}},{t:this.shape_512,p:{x:-734.975}},{t:this.shape_511},{t:this.shape_302,p:{x:-711.9,y:-227.85}},{t:this.shape_510,p:{x:-701.725,y:-230.4}},{t:this.shape_509},{t:this.shape_324,p:{x:-675.625,y:-230.4}},{t:this.shape_391,p:{x:-662.775,y:-227.85}},{t:this.shape_262,p:{x:-644.55,y:-230.1}},{t:this.shape_382,p:{x:-633.925,y:-227.85}},{t:this.shape_508},{t:this.shape_507},{t:this.shape_384,p:{x:-593.475,y:-230.4}},{t:this.shape_340,p:{x:-583.375,y:-228}},{t:this.shape_506,p:{x:-568.95,y:-227.85}},{t:this.shape_505,p:{x:-558.85,y:-230.4}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_261,p:{x:-485.175,y:-227.85}},{t:this.shape_245,p:{x:-474.15,y:-230.1}},{t:this.shape_234,p:{x:-463.525,y:-227.85}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_321,p:{x:-423.65,y:-230.1}},{t:this.shape_411,p:{x:-413.05,y:-227.85}},{t:this.shape_256,p:{x:-402,y:-230.1}},{t:this.shape_373,p:{x:-391.375,y:-227.85}},{t:this.shape_408,p:{x:-378.75,y:-228}},{t:this.shape_499},{t:this.shape_225,p:{x:-1325.8536,y:-199.4}},{t:this.shape_206,p:{x:-1314.7,y:-191.35}},{t:this.shape_224,p:{x:-1293.125,y:-199.35}},{t:this.shape_287,p:{x:-1275.125,y:-196.8}},{t:this.shape_337,p:{x:-1260.675,y:-196.95}},{t:this.shape_498},{t:this.shape_230,p:{x:-1231.775,y:-196.8}},{t:this.shape_390,p:{x:-1219.15,y:-196.95}},{t:this.shape_223,p:{x:-1208.675,y:-196.8}},{t:this.shape_279,p:{x:-1194.225,y:-196.95}},{t:this.shape_339,p:{x:-1180.175,y:-194.225}},{t:this.shape_497},{t:this.shape_284,p:{x:-1147.975,y:-199.35}},{t:this.shape_274,p:{x:-1137.875,y:-196.95}},{t:this.shape_277,p:{x:-1127.725,y:-199.35}},{t:this.shape_221,p:{x:-1117.625,y:-196.8}},{t:this.shape_267,p:{x:-1103.175,y:-196.95}},{t:this.shape_329,p:{x:-1081.925,y:-194.225}},{t:this.shape_255,p:{x:-1067.075,y:-196.8}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_271,p:{x:-1022.175,y:-199.35}},{t:this.shape_246,p:{x:-1009.325,y:-196.8}},{t:this.shape_494},{t:this.shape_493,p:{x:-984.85}},{t:this.shape_201,p:{x:-975.275,y:-194.075}},{t:this.shape_241,p:{x:-959.525,y:-196.8}},{t:this.shape_492,p:{x:-942.85}},{t:this.shape_232,p:{x:-928.425,y:-196.8}},{t:this.shape_215,p:{x:-913.975,y:-196.8}},{t:this.shape_367,p:{x:-903.9,y:-199.35}},{t:this.shape_491,p:{x:-882.85,y:-196.95}},{t:this.shape_208,p:{x:-864.875,y:-196.8}},{t:this.shape_490},{t:this.shape_266,p:{x:-841.725,y:-199.35}},{t:this.shape_247,p:{x:-831.625,y:-196.95}},{t:this.instance_8},{t:this.instance_7},{t:this.shape_489},{t:this.shape_488},{t:this.shape_204,p:{x:-792.125,y:238.8}},{t:this.shape_487},{t:this.shape_486},{t:this.shape_244,p:{x:-751.675,y:236.25}},{t:this.shape_231,p:{x:-741.575,y:238.65}},{t:this.shape_348,p:{x:-727.15,y:238.8}},{t:this.shape_319,p:{x:-717.05,y:236.25}},{t:this.shape_219,p:{x:-698.275,y:236.225}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_240,p:{x:-924.525,y:-113.45}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_203,p:{x:-889.9,y:-113.45}},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_317,p:{x:-826.675,y:-108.325}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_248,p:{x:-739.975,y:-108.325}},{t:this.shape_236,p:{x:-721.5,y:-113.475}},{t:this.shape_467,p:{x:-701.175,y:-113.475}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_229,p:{x:-1269.475,y:-113.45}},{t:this.shape_460},{t:this.shape_459},{t:this.shape_233,p:{x:-1234.85,y:-113.45}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451}]},1).to({state:[{t:this.shape_300},{t:this.shape_434,p:{x:-1299.425}},{t:this.shape_449},{t:this.shape_680},{t:this.shape_435,p:{x:-1246.85}},{t:this.shape_398,p:{x:-1233.675}},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677,p:{x:-1181.375}},{t:this.shape_436,p:{x:-1168.325}},{t:this.shape_676},{t:this.shape_397,p:{x:-1119.875}},{t:this.shape_438,p:{x:-1100.775}},{t:this.shape_675},{t:this.shape_399,p:{x:-1061.475}},{t:this.shape_674},{t:this.shape_396,p:{x:-1036.325}},{t:this.shape_673},{t:this.shape_672},{t:this.shape_425,p:{x:-970.625}},{t:this.shape_392,p:{x:-953.325}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_251,p:{x:-1326.525,y:-261.5}},{t:this.shape_252,p:{x:-1314.7,y:-253.45}},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_526,p:{x:-1080.075,y:-258.9}},{t:this.shape_652},{t:this.shape_651},{t:this.shape_370,p:{x:-1038.55}},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_521,p:{x:-938.475,y:-258.9}},{t:this.shape_345,p:{x:-925.85,y:-259.05}},{t:this.shape_225,p:{x:-1325.8536,y:-230.45}},{t:this.shape_226,p:{x:-1314.7,y:-222.4}},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_278,p:{x:-1208.925}},{t:this.shape_275,p:{x:-1195.625}},{t:this.shape_637},{t:this.shape_357,p:{x:-1179.75,y:-230.4}},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_388,p:{x:-1126.325,y:-227.7}},{t:this.shape_364,p:{x:-1111.675,y:-230.4}},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_376,p:{x:-955.875,y:-227.7}},{t:this.shape_624},{t:this.shape_623},{t:this.shape_512,p:{x:-912.475}},{t:this.shape_254,p:{x:-899.85,y:-228}},{t:this.shape_270},{t:this.shape_212,p:{y:-191.35}},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_359,p:{x:-1244.625,y:-199.35}},{t:this.shape_263,p:{x:-1231.775}},{t:this.shape_618},{t:this.shape_321,p:{x:-1206.3,y:-199.05}},{t:this.shape_303,p:{x:-1195.7,y:-196.8}},{t:this.shape_355,p:{x:-1181.075,y:-199.35}},{t:this.shape_617},{t:this.shape_391,p:{x:-1148.025,y:-196.8}},{t:this.shape_616},{t:this.shape_615},{t:this.shape_386,p:{x:-1105.075,y:-194.225}},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_382,p:{x:-1048.325,y:-196.8}},{t:this.shape_611},{t:this.shape_379,p:{x:-1019.825,y:-194.225}},{t:this.shape_492,p:{x:-1004.95}},{t:this.shape_369,p:{x:-990.575,y:-196.65}},{t:this.shape_610},{t:this.shape_363,p:{x:-961.675,y:-196.65}},{t:this.shape_535,p:{x:-947.175,y:-196.95}},{t:this.shape_342,p:{x:-933.125,y:-194.225}},{t:this.shape_323,p:{x:-911.1,y:-196.8}},{t:this.shape_532,p:{x:-896.625,y:-196.95}},{t:this.shape_361,p:{x:-885.6,y:-199.05}},{t:this.shape_407,p:{x:-875,y:-196.8}},{t:this.shape_214,p:{x:-862.35,y:-196.95}},{t:this.shape_415,p:{x:-851.9,y:-196.8}},{t:this.shape_609},{t:this.shape_373,p:{x:-823.025,y:-196.8}},{t:this.shape_301,p:{x:-810.4,y:-196.95}},{t:this.shape_608},{t:this.shape_607},{t:this.shape_387,p:{x:-772.475,y:-196.95}},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_228,p:{x:-694.9,y:-199.2}},{t:this.shape_410,p:{x:-680.05,y:-196.8}},{t:this.shape_362,p:{x:-665.575,y:-196.95}},{t:this.shape_467,p:{x:-641.575,y:-199.375}},{t:this.shape_366,p:{x:-618.7,y:-196.8}},{t:this.shape_506,p:{x:-604.95,y:-196.8}},{t:this.shape_602},{t:this.shape_245,p:{x:-579.45,y:-199.05}},{t:this.shape_601},{t:this.shape_360,p:{x:-547.225,y:-196.65}},{t:this.shape_518,p:{x:-537.1,y:-199.35}},{t:this.shape_600},{t:this.shape_534,p:{x:-518.225,y:-199.35}},{t:this.shape_351,p:{x:-508.125,y:-196.95}},{t:this.shape_243,p:{x:-486.775,y:-196.8}},{t:this.shape_261,p:{x:-473.475,y:-196.8}},{t:this.shape_523,p:{x:-463.325,y:-199.35}},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_340,p:{x:-411.325,y:-196.95}},{t:this.shape_596},{t:this.shape_234,p:{x:-375.225,y:-196.8}},{t:this.shape_319,p:{x:-365.15,y:-199.35}},{t:this.shape_595},{t:this.shape_519,p:{x:-337.625,y:-199.35}},{t:this.shape_337,p:{x:-327.525,y:-196.95}},{t:this.shape_238,p:{x:-306.175,y:-196.8}},{t:this.shape_230,p:{x:-292.875,y:-196.8}},{t:this.shape_510,p:{x:-282.725,y:-199.35}},{t:this.shape_493,p:{x:-277}},{t:this.shape_302,p:{x:-259.65,y:-196.8}},{t:this.shape_353,p:{x:-245.025,y:-199.35}},{t:this.shape_418,p:{x:-235.6,y:-199.05}},{t:this.shape_384,p:{x:-229.275,y:-199.35}},{t:this.shape_594},{t:this.shape_213,p:{y:-168.3}},{t:this.shape_206,p:{x:-1314.7,y:-160.3}},{t:this.shape_593},{t:this.shape_287,p:{x:-1279.425,y:-165.75}},{t:this.shape_339,p:{x:-1265.375,y:-163.175}},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_255,p:{x:-1201.425,y:-165.75}},{t:this.shape_279,p:{x:-1186.975,y:-165.9}},{t:this.shape_329,p:{x:-1172.925,y:-163.175}},{t:this.shape_246,p:{x:-1158.075,y:-165.75}},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_203,p:{x:-1097.45,y:-168.3}},{t:this.shape_284,p:{x:-1091.575,y:-168.3}},{t:this.shape_354,p:{x:-1074.325,y:-165.6}},{t:this.shape_274,p:{x:-1059.825,y:-165.9}},{t:this.shape_586},{t:this.shape_326,p:{x:-1038.225,y:-165.6}},{t:this.shape_324,p:{x:-1023.575,y:-168.3}},{t:this.shape_491,p:{x:-999.85,y:-165.9}},{t:this.shape_232,p:{x:-981.875,y:-165.75}},{t:this.shape_267,p:{x:-967.425,y:-165.9}},{t:this.shape_317,p:{x:-953.375,y:-163.175}},{t:this.shape_215,p:{x:-938.525,y:-165.75}},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_505,p:{x:-877.9,y:-168.3}},{t:this.shape_277,p:{x:-872.025,y:-168.3}},{t:this.shape_271,p:{x:-861.775,y:-168.3}},{t:this.shape_582},{t:this.shape_247,p:{x:-834.475,y:-165.9}},{t:this.shape_312,p:{x:-812.45,y:-163.325}},{t:this.shape_223,p:{x:-798.375,y:-165.75}},{t:this.shape_581},{t:this.shape_266,p:{x:-775.225,y:-168.3}},{t:this.shape_580},{t:this.shape_244,p:{x:-756.425,y:-168.3}},{t:this.shape_579},{t:this.shape_367,p:{x:-729.05,y:-168.3}},{t:this.shape_280,p:{x:-718.925,y:-165.6}},{t:this.shape_231,p:{x:-704.425,y:-165.9}},{t:this.shape_248,p:{x:-690.375,y:-163.175}},{t:this.shape_208,p:{x:-675.525,y:-165.75}},{t:this.shape_409,p:{x:-662.9,y:-165.9}},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_221,p:{x:-565.775,y:-165.75}},{t:this.shape_573},{t:this.shape_240,p:{x:-542.625,y:-168.3}},{t:this.shape_572},{t:this.shape_229,p:{x:-523.825,y:-168.3}},{t:this.shape_571},{t:this.shape_204,p:{x:-493.525,y:-165.75}},{t:this.shape_404,p:{x:-475.4,y:-165.9}},{t:this.shape_210,p:{x:-457.475,y:-165.6}},{t:this.shape_233,p:{x:-447.35,y:-168.3}},{t:this.shape_332,p:{x:-437.2,y:-165.75}},{t:this.instance_10},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.instance_11},{t:this.shape_439,p:{x:-1327.775}},{t:this.shape_691},{t:this.shape_690},{t:this.shape_442,p:{x:-1273.975}},{t:this.shape_401,p:{x:-1254.975}},{t:this.shape_689},{t:this.shape_688,p:{x:-1216.075}},{t:this.shape_549,p:{x:-1196.575}},{t:this.shape_428,p:{x:-1179.075}},{t:this.shape_687,p:{x:-1158.925}},{t:this.shape_392,p:{x:-1140.475}},{t:this.shape_437,p:{x:-1126.45}},{t:this.shape_397,p:{x:-1107.325}},{t:this.shape_540,p:{x:-1093.475}},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684,p:{x:-1025.125}},{t:this.shape_399,p:{x:-1005.625}},{t:this.shape_398,p:{x:-988.125}},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_450,p:{x:-913.75}},{t:this.shape_432,p:{x:-894.4}},{t:this.shape_438,p:{x:-875.175}}]},1).to({state:[{t:this.shape_707},{t:this.shape_439,p:{x:-1317.775}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_442,p:{x:-1263.975}},{t:this.shape_401,p:{x:-1244.975}},{t:this.shape_704},{t:this.shape_688,p:{x:-1206.075}},{t:this.shape_703},{t:this.shape_428,p:{x:-1169.075}},{t:this.shape_687,p:{x:-1148.925}},{t:this.shape_392,p:{x:-1130.475}},{t:this.shape_702},{t:this.shape_397,p:{x:-1097.325}},{t:this.shape_540,p:{x:-1083.475}},{t:this.shape_701},{t:this.shape_700},{t:this.shape_684,p:{x:-1015.125}},{t:this.shape_549,p:{x:-995.625}},{t:this.shape_398,p:{x:-978.125}},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_438,p:{x:-865.175}},{t:this.shape_297,p:{x:-835.525}},{t:this.shape_399,p:{x:-815.875}},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.instance_12}]},1).to({state:[{t:this.shape_707},{t:this.shape_439,p:{x:-1317.775}},{t:this.shape_706},{t:this.shape_705},{t:this.shape_442,p:{x:-1263.975}},{t:this.shape_401,p:{x:-1244.975}},{t:this.shape_704},{t:this.shape_716},{t:this.shape_399,p:{x:-1195.225}},{t:this.shape_398,p:{x:-1177.725}},{t:this.shape_687,p:{x:-1157.575}},{t:this.shape_396,p:{x:-1139.125}},{t:this.shape_715},{t:this.shape_397,p:{x:-1105.975}},{t:this.shape_540,p:{x:-1092.125}},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_392,p:{x:-1009.475}},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_677,p:{x:-926.475}},{t:this.instance_13}]},1).to({state:[]},1).wait(18));

	// Motor_Stater
	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_717.setTransform(-970.575,-301.125);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_718.setTransform(-988.075,-301.15);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgDgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgFgEAAgHQAAgGAFgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAFAEABAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIAAAQQABAFADADQADAEAHAAIALgCIAKgBQAEAAAFAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_719.setTransform(-1002.75,-304.025);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_720.setTransform(-1014.925,-301.125);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_721.setTransform(-1032.475,-301.15);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_722.setTransform(-1047.1,-304.025);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAFAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQAUAAANgKQANgKgBgOQABgLgIgIQgGgHgMgDQgLgEgRgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAQAFAKAJQAKAJAFAJQAEAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_723.setTransform(-1063.85,-304.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_724.setTransform(-1088.625,-301.125);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_725.setTransform(-1106.325,-301.125);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgFgEAAgHQAAgGAFgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIACAQQAAAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_726.setTransform(-1121.15,-304.025);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_727.setTransform(-1137.025,-301.125);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#3E5EAB").s().p("ABKBuQgGgGAAgOIAAidIglCRIgFAVQgDAHgGAFQgHAGgKAAQgHAAgGgEQgGgEgDgFIgEgMIgEgOIgliRIAACdQAAAOgFAGQgHAHgJAAQgKAAgGgHQgFgGgBgOIAAi0QABgPAHgFQAIgGAOABIAOAAQANAAAFACQAHACACAGIAHAUIAgB8IAhh8IAGgUQAEgGAFgCQAGgCANAAIAPAAQANgBAHAGQAJAFAAAPIAAC0QAAAOgHAGQgFAHgKAAQgKAAgFgHg");
	this.shape_728.setTransform(-1160,-304.1);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_729.setTransform(-1185.675,-304.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#3E5EAB").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_730.setTransform(-1198.725,-301.125);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgFgGAAgNIAAi2QAAgOAFgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAHAMQACAEAAADQABAKgGAHQgFAFgKABQgHAAgFgFg");
	this.shape_731.setTransform(-1215.85,-304.3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAGAGABANIAABDQgBAPADAKQADAKAGAGQAHAFAKAAQAKAAAKgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_732.setTransform(-1235.35,-301.125);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_733.setTransform(-1251.025,-301.125);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEACAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIAAAQQABAFADADQADAEAHAAIALgCIAKgBQAEAAAFAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_734.setTransform(-1264.2,-304.025);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_735.setTransform(-1280.05,-301.125);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_736.setTransform(-1299.425,-301.125);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#3E5EAB").s().p("AA7ByQgFgEgFgGIgHgNIg2hVIgmAlIAAAvQAAAOgHAIQgGAGgLABQgFgBgGgDQgFgDgDgFQgCgFgBgGIgBgQIAAiqQAAgNAGgIQAHgGAKgBQALABAGAGQAGAIABANIAABRIBahfQAHgHAEgDQAFgEAHAAQALAAAFAHQAHAFAAAIQAAALgLAKIg5A2IBCBbQAGAKAEAIQADAGAAAHQAAAIgFAGQgHAGgKAAQgKgBgGgEg");
	this.shape_737.setTransform(-1320.5,-304.3);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AzBExIAAphMAmDAAAIAAJhg");
	this.shape_738.setTransform(-1194.2091,-227.249,0.8876,0.8876);

	this.instance_14 = new lib.Bitmap9();
	this.instance_14.setTransform(-1273.7,-246.15,0.8876,0.8876);

	this.instance_15 = new lib.WhatsAppImage20250805at021103();
	this.instance_15.setTransform(-1305,-313,1.4478,1.4478);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#3E5EAB").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_739.setTransform(-1144.3,-191.35);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_740.setTransform(-1150.95,-199.35);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_741.setTransform(-1156.675,-199.35);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_742.setTransform(-1166.825,-196.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_743.setTransform(-1180.125,-196.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_744.setTransform(-1201.475,-196.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgJgGgIAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_745.setTransform(-1211.95,-196.95);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_746.setTransform(-1224.625,-196.65);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_747.setTransform(-1235.2,-199.05);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQALAFAFAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgDAEQgEAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_748.setTransform(-1246.25,-196.8);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_749.setTransform(-1264.2,-196.95);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_750.setTransform(-1278.35,-196.95);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgYAEg");
	this.shape_751.setTransform(-1291,-196.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_752.setTransform(-1312.625,-196.8);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_753.setTransform(-1325.475,-199.35);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_754.setTransform(-147.4,-228);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_755.setTransform(-155.675,-230.4);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_756.setTransform(-161.55,-230.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_757.setTransform(-171.65,-227.85);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_758.setTransform(-186.475,-225.275);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_759.setTransform(-200.525,-228);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_760.setTransform(-214.975,-227.85);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJAAATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_761.setTransform(-232.95,-228);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQAMAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_762.setTransform(-260.15,-227.85);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_763.setTransform(-274.975,-225.275);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_764.setTransform(-289.075,-227.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#3E5EAB").s().p("AgZB2IAEgTIALABQAHAAADgEQADgFAAgSIAAiNIAXAAIAACNQAAAZgGAKQgJAMgSAAQgKAAgIgCgAADhdIAAgaIAXAAIAAAag");
	this.shape_765.setTransform(-300.6,-227.675);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_766.setTransform(-314.05,-230.4);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_767.setTransform(-319.775,-230.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_768.setTransform(-329.925,-227.85);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_769.setTransform(-343.225,-227.85);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgQgBQgOAAgKANg");
	this.shape_770.setTransform(-366.85,-230.25);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_771.setTransform(-376.6,-230.4);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_772.setTransform(-386.675,-227.85);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_773.setTransform(-396.775,-230.4);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#3E5EAB").s().p("AgTBfIAAh0IgUAAIAAgSIAUAAIAAgOQAAgOADgHQADgIAIgGQAIgGAPAAQAKAAALADIgDAUIgOgCQgKAAgFAFQgEAEAAAMIAAANIAbAAIAAASIgbAAIAAB0g");
	this.shape_774.setTransform(-402.65,-230.575);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_775.setTransform(-418.825,-230.4);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQADACAFAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_776.setTransform(-425.15,-230.1);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_777.setTransform(-436.2,-227.85);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#3E5EAB").s().p("AAbBDIgWhPIgFgXIgaBmIgYAAIgpiGIAXAAIAWBNIAIAdIAHgcIAVhOIAXAAIAUBOIAGAaIAIgbIAXhNIAWAAIgqCGg");
	this.shape_778.setTransform(-452.825,-227.85);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_779.setTransform(-469.425,-227.85);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_780.setTransform(-479.6,-230.4);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_781.setTransform(-489.675,-227.85);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_782.setTransform(-507.65,-228);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_783.setTransform(-535.225,-225.275);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_784.setTransform(-549.275,-228);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgYAEg");
	this.shape_785.setTransform(-563.75,-227.85);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#3E5EAB").s().p("AgxBcIgCgVQAHACAGAAQAIAAAEgDQAFgCADgFIAHgRIACgFIg0iHIAZAAIAcBPQAGAOADAQQAEgPAFgPIAdhPIAXAAIgzCJQgJAWgDAIQgGALgIAGQgIAFgLAAQgHAAgIgDg");
	this.shape_786.setTransform(-577.325,-225.125);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_787.setTransform(-599.55,-227.85);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_788.setTransform(-613.275,-227.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_789.setTransform(-623.7,-228);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_790.setTransform(-636.35,-227.85);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_791.setTransform(-655.85,-228);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_792.setTransform(-668.5,-227.85);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_793.setTransform(-683.325,-225.275);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFgBAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_794.setTransform(-697.4,-227.85);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#3E5EAB").s().p("AgNAVQAIgCADgHQACgGABgLIgMAAIAAgaIAZAAIAAAaQAAAOgFAJQgFAJgKAEg");
	this.shape_795.setTransform(-717.275,-220.55);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_796.setTransform(-723.8,-230.4);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_797.setTransform(-729.525,-230.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_798.setTransform(-739.675,-227.85);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_799.setTransform(-752.975,-227.85);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_800.setTransform(-776.175,-227.85);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAALAHIgHAWQgJgGgIAAQgIAAgEAGQgGAEgDAIQgEAMAAAOIAABGg");
	this.shape_801.setTransform(-786.65,-228);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_802.setTransform(-799.325,-227.7);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_803.setTransform(-809.9,-230.1);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_804.setTransform(-820.95,-227.85);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgBgHQgDgGgFgEQgHgDgIAAQgOAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQAUAAAKAMQAMALAAAXIAABbg");
	this.shape_805.setTransform(-838.9,-228);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_806.setTransform(-853.05,-228);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgYAEg");
	this.shape_807.setTransform(-865.7,-227.85);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_808.setTransform(-889.175,-228);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_809.setTransform(-903.65,-227.85);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_810.setTransform(-918.475,-225.275);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_811.setTransform(-932.525,-228);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_812.setTransform(-946.975,-227.85);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQAKANAOAAQAQAAAKgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_813.setTransform(-961.85,-230.25);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_814.setTransform(-980.575,-230.4);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_815.setTransform(-986.75,-228);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_816.setTransform(-999.375,-227.85);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAOAAQARAAAHgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgYAAgPgMg");
	this.shape_817.setTransform(-1013.15,-227.85);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_818.setTransform(-1035.9,-227.85);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAAMAHIgIAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_819.setTransform(-1046.35,-228);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgYAEg");
	this.shape_820.setTransform(-1059,-227.85);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_821.setTransform(-1072.275,-227.85);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_822.setTransform(-1086.425,-227.85);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgYgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgHAGQgGAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgNgMg");
	this.shape_823.setTransform(-1100.2,-227.85);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_824.setTransform(-1122.925,-228);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgFACQgGADgDAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_825.setTransform(-1137.4,-227.85);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_826.setTransform(-1150.225,-230.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_827.setTransform(-1165.225,-225.275);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_828.setTransform(-1179.275,-228);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_829.setTransform(-1193.775,-227.7);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#3E5EAB").s().p("AglBKIAAARIgVAAIAAi4IAYAAIAABCQAOgTAWAAQAMAAALAGQALAEAHAKQAHAJAFANQADAMAAAOQAAAjgRATQgRATgYAAQgXAAgOgVgAgZgNQgMAMAAAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgKANg");
	this.shape_830.setTransform(-1207.8,-230.25);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgOAAgKAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgXAAIAAiGIAVAAIAAATQAGgKALgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_831.setTransform(-1226.15,-228);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGACAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_832.setTransform(-1244.3,-227.85);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAJAIQAIAHAOAAQARAAAHgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgYgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgOgMg");
	this.shape_833.setTransform(-1258.05,-227.85);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_834.setTransform(-1267.375,-230.4);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJARAAQAKABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_835.setTransform(-1277.95,-230.25);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_836.setTransform(-1296.75,-230.4);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_837.setTransform(-1302.475,-230.4);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_838.setTransform(-1312.625,-227.85);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_839.setTransform(-1325.925,-227.85);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQALABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAQAAAKgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgOAAgKANg");
	this.shape_840.setTransform(-151.25,-261.3);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_841.setTransform(-161,-261.45);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_842.setTransform(-171.075,-258.9);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_843.setTransform(-181.175,-261.45);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#3E5EAB").s().p("Ag+BdIAAi5IB9AAIAAAWIhkAAIAAA5IBWAAIAAAVIhWAAIAABVg");
	this.shape_844.setTransform(-191.525,-261.45);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FF0000").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_845.setTransform(-211.7,-253.925);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FF0000").s().p("AgFBaQgIgEgDgFQgEgFgBgJQgBgGAAgTIAAg6IgRAAIAAgcIARAAIAAgbIAigVIAAAwIAZAAIAAAcIgZAAIAAA2QAAAQABADQABADACABQADACADAAQAFAAAKgDIADAbQgNAGgQAAQgJAAgHgDg");
	this.shape_846.setTransform(-219.625,-261.125);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_847.setTransform(-231.3223,-258.9);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FF0000").s().p("AAZBFIAAhFQAAgVgBgGQgDgGgFgEQgFgDgHAAQgIAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAhAAIAAAUQASgXAaAAQAMAAAJAEQALAEAEAHQAFAHADAIQABAJAAAPIAABTg");
	this.shape_848.setTransform(-246.35,-259.05);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FF0000").s().p("AguBVQgOgMAAgSIAAgEIApAFQABAHAEACQAFAEAKAAQAOAAAHgEQAEgDADgGQABgEAAgMIAAgUQgQAWgXAAQgbAAgQgXQgNgSAAgaQAAgiARgSQAQgSAYAAQAYAAARAWIAAgTIAhAAIAAB4QAAAYgEAMQgEALgHAHQgHAHgMAEQgMADgSAAQghAAgPgLgAgUg6QgIAKAAAVQAAAVAIAJQAJAKALAAQANAAAJgKQAJgKAAgUQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_849.setTransform(-262.625,-256.325);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_850.setTransform(-277.425,-258.9);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FF0000").s().p("AA/BFIAAhMQAAgUgDgGQgFgIgLABQgHgBgHAFQgGAEgDAKQgDAIAAATIAABAIgjAAIAAhJQAAgTgCgGQgCgGgDgDQgFgCgGAAQgJgBgGAFQgHAFgDAHQgDAJAAATIAABBIgjAAIAAiGIAhAAIAAATQARgWAZAAQANAAAJAFQAJAGAGALQAJgLAKgGQAKgFAMAAQAPAAAKAGQAKAGAFAMQAEAIAAAUIAABVg");
	this.shape_851.setTransform(-296.275,-259.05);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FF0000").s().p("AAZBFIAAhFQAAgVgCgGQgCgGgFgEQgFgDgIAAQgIAAgHAEQgIAFgCAJQgDAJAAAVIAAA9IgjAAIAAiGIAgAAIAAAUQASgXAaAAQAMAAAKAEQAKAEAEAHQAGAHABAIQACAJAAAPIAABTg");
	this.shape_852.setTransform(-323.9,-259.05);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_853.setTransform(-339.075,-258.9);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FF0000").s().p("AgwBMQgRgTAAghQAAgiAQgSQAQgRAZgBQAWABAQASIAAhCIAkAAIAAC4IgiAAIAAgUQgHAMgMAGQgLAGgLAAQgWgBgRgSgAgUgIQgJAJAAAUQAAAWAHAJQAIAPAPAAQAMAAAJgLQAJgLAAgUQAAgYgJgJQgIgKgNAAQgNAAgIAKg");
	this.shape_854.setTransform(-354.6,-261.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_855.setTransform(-369.5723,-258.9);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FF0000").s().p("AA/BFIAAhMQAAgUgDgGQgFgIgLABQgHgBgHAFQgGAEgDAKQgDAIAAATIAABAIgjAAIAAhJQAAgTgCgGQgCgGgDgDQgFgCgGAAQgJgBgGAFQgHAFgDAHQgDAJAAATIAABBIgjAAIAAiGIAhAAIAAATQARgWAZAAQANAAAJAFQAJAGAGALQAJgLAKgGQAKgFAMAAQAPAAAKAGQAKAGAFAMQAEAIAAAUIAABVg");
	this.shape_856.setTransform(-388.275,-259.05);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FF0000").s().p("AAZBFIAAhFQAAgVgCgGQgCgGgFgEQgFgDgHAAQgJAAgHAEQgHAFgDAJQgDAJAAAVIAAA9IgjAAIAAiGIAgAAIAAAUQASgXAaAAQAMAAAKAEQAJAEAFAHQAGAHABAIQACAJAAAPIAABTg");
	this.shape_857.setTransform(-415.9,-259.05);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_858.setTransform(-431.075,-258.9);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FF0000").s().p("AAYBdIghg9IgRASIAAArIgjAAIAAi5IAjAAIAABhIApguIAsAAIguAwIAxBWg");
	this.shape_859.setTransform(-444.825,-261.45);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FF0000").s().p("AgFBaQgIgEgDgFQgEgFgBgJQgBgGAAgTIAAg6IgRAAIAAgcIARAAIAAgbIAigVIAAAwIAZAAIAAAcIgZAAIAAA2QAAAQABADQABADACABQADACADAAQAFAAAKgDIADAbQgNAGgQAAQgJAAgHgDg");
	this.shape_860.setTransform(-457.075,-261.125);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_861.setTransform(-465,-261.45);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FF0000").s().p("AAYBdIghg9IgRASIAAArIgjAAIAAi5IAjAAIAABhIApguIAsAAIguAwIAxBWg");
	this.shape_862.setTransform(-475.125,-261.45);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF0000").s().p("AguBVQgOgMAAgSIAAgEIApAFQABAHAEACQAFAEAKAAQAOAAAHgEQAEgDADgGQABgEAAgMIAAgUQgQAWgXAAQgbAAgQgXQgNgSAAgaQAAgiARgSQAQgSAYAAQAYAAARAWIAAgTIAhAAIAAB4QAAAYgEAMQgEALgHAHQgHAHgMAEQgMADgSAAQghAAgPgLgAgUg6QgIAKAAAVQAAAVAIAJQAJAKALAAQANAAAJgKQAJgKAAgUQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_863.setTransform(-491.375,-256.325);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FF0000").s().p("AAZBFIAAhFQAAgVgBgGQgDgGgFgEQgFgDgHAAQgIAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAhAAIAAAUQASgXAaAAQAMAAAJAEQALAEAEAHQAGAHACAIQABAJAAAPIAABTg");
	this.shape_864.setTransform(-506.9,-259.05);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_865.setTransform(-522.075,-258.9);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FF0000").s().p("AgMBZQgMgGgHgMIAAAUIgiAAIAAi4IAkAAIAABCQAQgSAWgBQAZABAQARQAQASAAAhQAAAigQATQgRASgYABQgKAAgLgGgAgVgIQgIAJgBAUQABAVAGAKQAKAPAOAAQAMAAAIgLQAIgKAAgVQAAgYgIgJQgIgKgNAAQgNAAgIAKg");
	this.shape_866.setTransform(-536.95,-261.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FF0000").s().p("AA/BFIAAhMQAAgUgDgGQgFgIgLABQgHgBgHAFQgGAEgDAKQgDAIAAATIAABAIgjAAIAAhJQAAgTgCgGQgCgGgDgDQgFgCgGAAQgJgBgGAFQgHAFgDAHQgDAJAAATIAABBIgjAAIAAiGIAhAAIAAATQARgWAZAAQANAAAJAFQAJAGAGALQAJgLAKgGQAKgFAMAAQAPAAAKAGQAKAGAFAMQAEAIAAAUIAABVg");
	this.shape_867.setTransform(-556.825,-259.05);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_868.setTransform(-575.6723,-258.9);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FF0000").s().p("AA/BFIAAhMQAAgUgDgGQgFgIgLABQgHgBgHAFQgGAEgDAKQgDAIAAATIAABAIgjAAIAAhJQAAgTgCgGQgCgGgDgDQgFgCgGAAQgJgBgGAFQgHAFgDAHQgDAJAAATIAABBIgjAAIAAiGIAhAAIAAATQARgWAZAAQANAAAJAFQAJAGAGALQAJgLAKgGQAKgFAMAAQAPAAAKAGQAKAGAFAMQAEAIAAAUIAABVg");
	this.shape_869.setTransform(-594.375,-259.05);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_870.setTransform(-619.775,-261.45);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_871.setTransform(-634.425,-258.75);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_872.setTransform(-645,-261.15);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_873.setTransform(-656.025,-259.05);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_874.setTransform(-670.525,-258.75);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_875.setTransform(-688.775,-261.45);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQARAAAHgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgXgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgNgMg");
	this.shape_876.setTransform(-698.25,-258.9);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_877.setTransform(-712.325,-256.325);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_878.setTransform(-726.375,-259.05);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_879.setTransform(-740.875,-258.75);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#3E5EAB").s().p("AgSBfIAAh0IgUAAIAAgSIAUAAIAAgOQAAgOACgHQAEgIAHgGQAIgGAPAAQAKAAALADIgDAUIgNgCQgLAAgEAFQgFAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_880.setTransform(-751,-261.625);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_881.setTransform(-758.5,-259.05);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_882.setTransform(-771.125,-258.9);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgVAAIAAi4IAWAAIAABCQAPgTAVAAQAMAAAMAGQALAEAHAKQAIAJADANQAEAMABAOQAAAjgRATQgSATgYAAQgXAAgNgVgAgagNQgLAMABAYQAAAYAGALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgMANg");
	this.shape_883.setTransform(-785.2,-261.3);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_884.setTransform(-808.225,-259.05);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_885.setTransform(-822.7,-258.9);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgQgBQgOAAgKANg");
	this.shape_886.setTransform(-837.55,-261.3);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_887.setTransform(-859.8,-258.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_888.setTransform(-874.625,-256.325);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgYAEg");
	this.shape_889.setTransform(-888.7,-258.9);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAXAAIAABCQAPgTAVAAQAMAAAMAGQALAEAHAKQAIAJADANQAEAMAAAOQAAAjgQATQgSATgYAAQgWAAgOgVgAgagNQgLAMABAYQAAAYAGALQALASATAAQANAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgOABgMANg");
	this.shape_890.setTransform(-902.75,-261.3);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgDgHQgCgGgFgEQgGgDgJAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_891.setTransform(-921.1,-259.05);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_892.setTransform(-939.225,-258.9);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_893.setTransform(-949.85,-261.15);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_894.setTransform(-969.075,-259.05);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgNAFgXAEg");
	this.shape_895.setTransform(-983.55,-258.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_896.setTransform(-998.375,-256.325);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_897.setTransform(-1012.425,-259.05);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_898.setTransform(-1026.875,-258.9);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARABATQAAAVgIAPQgHARgOAJQgOAIgQAAQgKAAgKgFQgJgEgGgIIAABCgAgag+QgKAOgBAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_899.setTransform(-1040.95,-256.475);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgFgDgIAAQgPAAgJAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgXAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAKAGQAIAHAEAKQAQgXAZAAQAVAAAKAMQAMALAAAXIAABbg");
	this.shape_900.setTransform(-1059.3,-259.05);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_901.setTransform(-1077.425,-258.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_902.setTransform(-1087.6,-261.45);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_903.setTransform(-1101.525,-261.45);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_904.setTransform(-1107.7,-259.05);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAIgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_905.setTransform(-1120.35,-258.9);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQAKANAOAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_906.setTransform(-1135.2,-261.3);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgIAAQgMAAgGgEg");
	this.shape_907.setTransform(-1153.6,-261.15);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAHgEAJgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_908.setTransform(-1164.65,-258.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_909.setTransform(-1179.125,-258.75);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAVAAQAMAAAMAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgQATQgSATgYAAQgXAAgOgVgAgagNQgKAMgBAYQABAYAGALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgLANg");
	this.shape_910.setTransform(-1193.15,-261.3);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_911.setTransform(-1203.625,-261.45);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQgBgVQABgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgQgBQgOAAgKANg");
	this.shape_912.setTransform(-1214.2,-261.3);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#3E5EAB").s().p("AgKBdIAAi5IAVAAIAAC5g");
	this.shape_913.setTransform(-1232.15,-261.45);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_914.setTransform(-1237.875,-261.45);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#3E5EAB").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_915.setTransform(-1248.025,-258.9);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#3E5EAB").s().p("AgpA1QgRgTAAghQAAgVAIgQQAHgRAPgIQAOgIARgBQAWAAAOAMQAOALAEAVIgXACQgDgNgIgGQgIgIgLAAQgRAAgKANQgLAMAAAaQAAAbAKAMQALANAPAAQAOAAAJgIQAJgIACgSIAXADQgEAXgPANQgPAOgWAAQgbAAgRgSg");
	this.shape_916.setTransform(-1261.325,-258.9);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQAAgUAHgPQAHgRANgJQAOgJARAAQALABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAPAAAKgNQALgMAAgZQAAgagLgNQgLgNgPgBQgPAAgKANg");
	this.shape_917.setTransform(-1284.1,-261.3);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#3E5EAB").s().p("AgLBdIAAi5IAXAAIAAC5g");
	this.shape_918.setTransform(-1293.85,-261.45);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_919.setTransform(-1303.925,-258.9);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#3E5EAB").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_920.setTransform(-1314.025,-261.45);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#3E5EAB").s().p("Ag+BdIAAi5IB9AAIAAAWIhkAAIAAA5IBWAAIAAAVIhWAAIAABVg");
	this.shape_921.setTransform(-1324.375,-261.45);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_922.setTransform(-898.75,-301.125);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#3E5EAB").s().p("AAxBwQgGgGAAgMIAAgEQgIAKgJAGQgIAGgKADQgIADgMABQgQAAgMgHQgOgGgJgMQgKgNgEgQQgGgQAAgTQAAgnAUgWQAUgXAfAAQASABAMAFQANAHAMANIAAg/QAAgNAGgHQAFgGAJgBQALAAAEAHQAFAGABAMIAAC7QAAAMgGAHQgGAFgJABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQAAAQAFANQAFAMAJAGQAKAHAKAAQAMAAAJgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_923.setTransform(-937.9,-304.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#3E5EAB").s().p("ABKBuQgGgGAAgOIAAidIglCRIgGAVQgCAHgGAFQgHAGgKAAQgHAAgGgEQgGgEgCgFIgGgMIgDgOIgliRIAACdQAAAOgGAGQgFAHgLAAQgJAAgFgHQgHgGAAgOIAAi0QAAgPAIgFQAIgGANABIAPAAQANAAAFACQAGACADAGIAHAUIAgB8IAhh8IAHgUQACgGAHgCQAFgCANAAIAOAAQAOgBAIAGQAHAFABAPIAAC0QgBAOgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_924.setTransform(-979.75,-304.1);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgGgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_925.setTransform(-1010.75,-301.125);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_926.setTransform(-1029.975,-301.15);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_927.setTransform(-1062.975,-301.15);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#3E5EAB").s().p("AhOBvQgFgHAAgOIAAi3QABgMAFgGQAFgGAJAAQAJAAAHAGQAFAGAAAMIAAAFQAMgPANgHQANgHAQAAQATAAARAKQAQAKAKAUQAKATAAAbQAAAUgGAPQgGARgKALQgJALgNAGQgNAGgPAAQgSAAgNgHQgMgIgLgOIAABAQAAAcgVAAQgMAAgDgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQALAAAJgGQAIgGAGgLQAFgNABgRQAAgRgGgMQgFgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_928.setTransform(-1082,-297.975);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#3E5EAB").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_929.setTransform(-1106.575,-301.125);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFALAAQAKAAAKgGQAKgGAEgLQADgJAAgdIAAg0QABgNAGgGQAFgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_930.setTransform(-1130.4,-301.125);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#3E5EAB").s().p("AA8ByQgHgEgEgGIgHgNIg2hVIgnAlIAAAvQABAOgHAIQgGAGgKABQgGgBgGgDQgFgDgDgFQgDgFAAgGIgBgQIAAiqQAAgNAGgIQAGgGAMgBQAKABAHAGQAFAIAAANIAABRIBbhfQAHgHAEgDQAFgEAHAAQALAAAFAHQAGAFABAIQAAALgLAKIg5A2IBBBbQAIAKADAIQADAGABAHQAAAIgHAGQgFAGgLAAQgKgBgFgEg");
	this.shape_931.setTransform(-1151.5,-304.3);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#3E5EAB").s().p("AgoBoIADgSIArizQAEgOACgFQAEgGAIAAQAIAAAFAFQAEADAAAHQAAAEgDAOIgrCzIgEANQgBAGgEACQgDADgHABQgQAAAAgPg");
	this.shape_932.setTransform(-1176.3,-304.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#3E5EAB").s().p("AgOBwQgGgHAAgMIAAi5QAAgMAGgHQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_933.setTransform(-1193.125,-304.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#3E5EAB").s().p("AgYBzQgPgEgMgHQgLgHgLgMQgJgKgGgOQgHgNgDgQQgDgOAAgSQAAgbAIgVQAIgWAPgPQAPgQAUgJQAUgHAWgBQAcABAWAKQAVAMAMAQQAMAQAAAPQAAAIgGAGQgFAGgJAAQgIAAgFgEQgEgEgGgLQgJgRgMgIQgNgJgSAAQgbABgRAVQgRAWAAAnQAAAaAIATQAHARANAJQAOAJASgBQAUAAAOgKQANgJAHgUQADgJAFgFQAFgGAJAAQAIAAAGAGQAGAFAAAJQAAALgFANQgGAMgLANQgMAMgRAIQgTAIgYAAQgQAAgQgEg");
	this.shape_934.setTransform(-1237.35,-304.3);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#3E5EAB").s().p("AAxBwQgFgGgBgMIAAgEQgIAKgJAGQgIAGgKADQgJADgLABQgQAAgNgHQgNgGgJgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQANAHAMANIAAg/QAAgNAFgHQAGgGAJgBQAKAAAGAHQAEAGAAAMIAAC7QABAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQgBAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_935.setTransform(-1267.6,-304.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#3E5EAB").s().p("AgOBwQgGgHAAgMIAAi5QAAgMAGgHQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_936.setTransform(-1281.475,-304.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_937.setTransform(-1290.125,-304.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_938.setTransform(-1303.925,-301.15);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#3E5EAB").s().p("AhJBuQgGgIAAgOIAAivQAAgKADgHQADgGAHgDQAFgCAKAAIBtAAQALAAAGAEQAFAGAAAIQAAAHgFAFQgGAFgLAAIhbAAIAAA7IBMAAQAKAAAGAFQAFAFAAAHQAAAIgFAEQgGAEgKAAIhMAAIAABMQAAAOgGAIQgGAGgLABQgKgBgHgGg");
	this.shape_939.setTransform(-1322.4,-304.1);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#060807").ss(1,1,1).p("ACMHaIkXuz");
	this.shape_940.setTransform(-1050.9381,-37.5658,1.1266,1.1266);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#3E5EAB").s().p("AgDBBIgIgDIgGgFIgHgGIAAACQAAAHgDADQgDADgFAAQgFAAgDgDQgDgDAAgHIAAhoQAAgHADgEQADgEAFABQAGgBACAEQADADAAAHIAAAkQAHgGAIgEQAGgEAKAAQAMAAAJAGQAJAFAFALQAFAKAAAPQAAALgDAJQgDAJgFAHQgGAGgHAEQgHADgJAAIgKgBgAgKgJQgGAFgDAFQgEAHAAAKQAAAOAHAJQAHAHAJAAQAKAAAGgHQAHgJAAgPQAAgJgDgHQgDgFgFgFQgFgDgHAAQgFAAgFADg");
	this.shape_941.setTransform(-1034.95,-103.45);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#3E5EAB").s().p("AAYAtQgEgDAAgHIAAgDQgEAGgFADQgFAEgFACQgFACgHAAQgIAAgHgEQgIgDgDgHQgFgHAAgPIAAguQAAgIAEgDQADgEAFAAQAFAAAEAEQADADAAAIIAAAlQAAAIABAGQACAGAEADQADADAHAAQAEAAAGgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQAEgEAFAAQAFAAADAEQAEADAAAIIAABEQAAAHgDAEQgDADgGAAQgEAAgDgEg");
	this.shape_942.setTransform(-1046.3,-101.675);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgCgHABgLIAAgtIgEAAQgFAAgDgDQgDgCAAgEQAAgDADgDQAEgDAEAAIAEAAIAAgOIAAgJIABgGIAEgDQADgCADAAQAFAAADAEQACACABADIAAAJIAAAQIAJAAQAFAAADADQACADAAADQAAAFgDACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAEABIAGgBIAGgBQADAAACACQACADAAADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_943.setTransform(-1054.6,-103.3);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#3E5EAB").s().p("AAXAtQgDgDAAgHIAAgDQgEAGgFADQgFAEgFACQgFACgHAAQgJAAgGgEQgIgDgDgHQgFgHAAgPIAAguQAAgIAEgDQADgEAFAAQAFAAAEAEQADADAAAIIAAAlQAAAIABAGQACAGADADQAFADAGAAQAEAAAGgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQADgEAGAAQAFAAADAEQAEADAAAIIAABEQAAAHgDAEQgDADgGAAQgEAAgEgEg");
	this.shape_944.setTransform(-1063.5,-101.675);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#3E5EAB").s().p("AAhBAIgFgGIgFgHIgdgwIgWAVIAAAbQAAAIgEAEQgDADgGAAIgGgBQgEgCgBgDIgCgGIAAgJIAAhfQAAgIAEgEQADgEAGABQAGgBAEAEQADAEAAAIIAAAtIAyg1IAHgGQACgBAFAAQAFAAAEACQADAEAAAFQAAAFgGAGIgfAeIAkAzIAGAKQACAEAAAEQAAAEgDADQgEADgGAAQgFAAgEgCg");
	this.shape_945.setTransform(-1075.375,-103.45);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#3E5EAB").s().p("AgIA/QgDgFAAgHIAAhDQAAgHADgEQAEgDAEgBQAFABADADQAEAEAAAGIAABEQAAAIgEAEQgDADgFAAQgEAAgEgDgAgIgtQgDgDAAgFQAAgGADgDQAEgDAEAAQAEAAAEADQAEADAAAGQAAAFgEADQgDADgFABQgEgBgEgDg");
	this.shape_946.setTransform(-1089.3,-103.4);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgCgHAAgLIAAgtIgDAAQgFAAgDgDQgCgCAAgEQAAgDACgDQADgDAFAAIADAAIAAgOIAAgJIACgGIAFgDQACgCAEAAQAEAAADAEQACACABADIABAJIAAAQIAIAAQAGAAACADQACADAAADQAAAFgDACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQABABAFABIAFgBIAGgBQADAAACACQACADABADQgBAGgGADQgHADgLAAQgLAAgFgDg");
	this.shape_947.setTransform(-1094.6,-103.3);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgEgGQgDgGgJAAQgGAAgGAEQgFADgCAHQgCAGAAANIAAAeQAAAIgDADQgEAEgFAAQgFAAgEgEQgDgEAAgHIAAhEQAAgHADgDQADgEAFAAQADAAADACQACABACADQACADgBAFIAAACQAHgIAIgEQAGgEAKAAQAKAAAHAEQAIAFADAHQACAEABAGIABANIAAArQAAAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_948.setTransform(-1103.5,-101.675);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#3E5EAB").s().p("AgIA+QgEgDAAgIIAAhlQAAgIADgEQAEgEAFABQAGgBADAEQAEAEAAAIIAABlQAAAIgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_949.setTransform(-1111.775,-103.45);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgCgHAAgLIAAgtIgDAAQgFAAgDgDQgCgCAAgEQAAgDACgDQADgDAFAAIADAAIAAgOIAAgJIADgGIADgDQADgCAEAAQAEAAADAEQACACABADIAAAJIAAAQIAJAAQAGAAACADQADADgBADQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACABAEABIAFgBIAGgBQADAAACACQACADAAADQAAAGgGADQgHADgLAAQgLAAgFgDg");
	this.shape_950.setTransform(-890.2,-103.3);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_951.setTransform(-899.075,-101.675);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#3E5EAB").s().p("AAXBAIgGgJIgVgiIgMAMIAAAUQgBAGgDAEQgEADgEAAQgGAAgDgDQgEgEAAgHIAAhmQAAgIAEgEQACgDAHAAQAFgBAEAEQADAEAAAHIAAA6IAagcIAHgHQADgCADAAQAFAAADADQADADAAAEQAAAGgJAIIgOALIAZAnIAEAGIABAEQAAAGgDADQgDADgFAAQgFAAgCgCg");
	this.shape_952.setTransform(-909.15,-103.45);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#3E5EAB").s().p("AgIA/QgDgFAAgHIAAhDQAAgHADgEQADgDAFgBQAFABAEADQADAEAAAGIAABEQAAAIgDAEQgEADgFAAQgFAAgDgDgAgIgtQgDgDAAgFQAAgGADgDQAEgDAEAAQAFAAAEADQADADAAAGQAAAFgDADQgEADgFABQgEgBgEgDg");
	this.shape_953.setTransform(-917.15,-103.4);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#3E5EAB").s().p("AgeA8QgJgGgGgJQgFgIAAgIQAAgFADgEQADgDAGAAQAEAAADADQACADACAEQADAHADAEQADAEAFADQAFACAIAAQALABAHgGQAIgFAAgJQAAgGgEgEQgEgEgGgCIgQgEQgOgDgJgFQgKgEgFgHQgGgIAAgKQAAgMAGgHQAGgJALgEQALgFAOABQAMAAAIACQAJADAGAFQAFAFADAFQADAFAAAGQAAAEgEAEQgDAEgFAAQgEAAgDgDIgFgHQgDgHgFgEQgFgEgKAAQgKAAgGAEQgGAFAAAGQAAAEACACQACAEADACIAIACIALAEIAUAFQAJADAGAFQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAGQgMAEgQAAQgSAAgMgGg");
	this.shape_954.setTransform(-925.525,-103.45);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#3E5EAB").s().p("AgIA9QgGgDgCgHQgCgGAAgMIAAgtIgDAAQgFAAgDgCQgCgDAAgEQAAgDACgDQAEgDAFABIACAAIAAgPIAAgJIADgFIAEgFQACgBAEAAQAEAAACADQADADABADIAAAJIAAARIAJAAQAGgBACADQACADAAADQAAAFgDACQgEACgHAAIgFAAIAAArIABAJQAAADACACQABABAFAAIAFAAIAGgBQADAAACADQACACABADQgBAGgGADQgGADgMAAQgLAAgFgEg");
	this.shape_955.setTransform(-1244.45,-98.3);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_956.setTransform(-1253.325,-96.675);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#3E5EAB").s().p("AAXBBIgGgJIgVgjIgMAMIAAATQgBAHgDAEQgEADgEAAQgGAAgDgDQgDgEgBgHIAAhmQAAgIADgDQAEgFAGAAQAFABAEADQADAEAAAHIAAA5IAagbIAHgHQADgCADAAQAFAAADADQADACAAAFQAAAGgJAIIgOALIAZAmIAEAHIABAFQAAAFgDAEQgDACgFAAQgFAAgCgBg");
	this.shape_957.setTransform(-1263.4,-98.45);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#3E5EAB").s().p("AgHA+QgEgEAAgGIAAhEQAAgIAEgDQACgEAFABQAFgBAEAEQADADAAAHIAABFQAAAHgDADQgEAEgFAAQgFAAgCgEgAgHgtQgEgDAAgGQAAgEAEgEQADgDAEAAQAFAAAEADQADADAAAFQAAAGgDADQgEADgFAAQgEAAgDgDg");
	this.shape_958.setTransform(-1271.4,-98.4);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#3E5EAB").s().p("AgeA7QgJgFgGgIQgFgJAAgIQAAgFADgDQADgEAGAAQAEAAADADQACADACAFQADAGADAEQADAEAFADQAFACAIABQALgBAHgFQAIgGAAgHQAAgHgEgEQgEgEgGgCIgQgFQgOgDgJgEQgKgEgFgHQgGgIAAgLQAAgLAGgIQAGgIALgEQALgEAOgBQAMAAAIAEQAJACAGAFQAFAFADAGQADAFAAAFQAAAFgEADQgDAEgFAAQgEAAgDgCIgFgIQgDgHgFgEQgFgEgKAAQgKAAgGAFQgGAEAAAGQAAAEACADQACACADACIAIAEIALADIAUAGQAJADAGAEQAGADAEAIQADAGAAAKQAAAMgGAJQgGAJgLAFQgMAGgQgBQgSABgMgIg");
	this.shape_959.setTransform(-1279.775,-98.45);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#060807").ss(1,1,1).p("AphtUITDap");
	this.shape_960.setTransform(-614.9267,60.1361,1.1266,1.1266);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#060807").ss(1,1,1).p("ApSC0ISllm");
	this.shape_961.setTransform(-750.7349,-15.6821,1.1266,1.1266);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgDgGQgDgGgLAAQgFAAgGAEQgEADgDAHQgCAGAAANIAAAeQAAAIgDADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhEQAAgHADgDQADgEAGAAQADAAACACQADABABADQABADABAFIAAACQAGgIAHgEQAHgEAKAAQAKAAAHAEQAHAFAEAHQACAEABAGIABANIAAArQAAAIgEADQgDAEgFAAQgFAAgEgEg");
	this.shape_962.setTransform(-571,-46.625);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_963.setTransform(-581.825,-46.625);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#3E5EAB").s().p("AAbA/QgDgDAAgHIAAgDQgFAGgEADQgFAEgFACQgFACgHgBQgIAAgIgDQgHgEgFgGQgGgHgDgJQgCgKAAgKQAAgWALgMQALgNASAAQAJAAAHAEQAIADAGAIIAAgkQAAgHADgEQADgEAFAAQAGAAADAEQADADAAAHIAABpQAAAHgDAEQgEACgFAAQgFAAgDgDgAgLgIQgFADgDAHQgDAGAAAKQAAAJADAIQADAGAGAEQAEADAGAAQAGAAAFgDQAGgDADgHQADgHAAgKQAAgKgDgHQgDgFgGgEQgFgEgGAAQgGAAgFAEg");
	this.shape_964.setTransform(-593.05,-48.4);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#3E5EAB").s().p("AggAkQgNgNAAgXQAAgKADgJQAEgJAGgGQAGgHAJgDQAIgEAKAAQAOAAAKAGQAKAGAGAJQAFAKAAAKQAAAIgGACQgFADgJAAIguAAQAAAIADAGQADAHAGADQAFADAFAAIAIgBIAHgDIAGgFIAIgGQABgCAEAAQAEAAACACQACACAAAEQAAADgCAEQgDAFgFAEQgFAEgIACQgIADgKAAQgWAAgNgNgAgNgZQgGAGgBAMIAqAAQgBgMgFgGQgGgGgKAAQgIAAgFAGg");
	this.shape_965.setTransform(-603.775,-46.625);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#3E5EAB").s().p("AApA+QgDgDAAgIIAAhYIgVBRIgDAMQgBAEgEADQgDACgGAAQgEABgDgCQgDgCgCgEQgCgDAAgDIgDgIIgUhRIAABYQAAAIgEADQgDADgFAAQgGAAgDgDQgDgDAAgIIAAhlQAAgJAEgCQAEgDAIAAIAIAAQAHAAAEABQADABACADIADALIASBGIAThGIADgLQACgDADgBQADgBAIAAIAIAAQAHAAAFADQAEACAAAJIAABlQAAAIgDADQgDADgGAAQgFAAgEgDg");
	this.shape_966.setTransform(-616.675,-48.3);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgDgGQgEgGgKAAQgFAAgFAEQgFADgDAHQgCAGAAANIAAAeQAAAIgDADQgEAEgFAAQgFAAgDgEQgEgEAAgHIAAhEQAAgHADgDQADgEAFAAQADAAADACQADABABADQACADAAAFIAAACQAGgIAHgEQAHgEAKAAQAJAAAIAEQAIAFADAHQACAEABAGIABANIAAArQAAAIgEADQgDAEgFAAQgFAAgEgEg");
	this.shape_967.setTransform(-634.1,-46.625);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_968.setTransform(-644.925,-46.625);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAHAAQAIAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_969.setTransform(-653.65,-46.625);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_970.setTransform(-663.525,-46.625);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#3E5EAB").s().p("AgsA/QgCgFAAgHIAAhnQAAgHADgDQADgEAFAAQAFAAADAEQAEADAAAHIAAADQAHgJAGgEQAIgEAIAAQALAAAJAGQAKAGAFALQAGALAAAPQAAALgEAIQgDAKgFAGQgGAGgHAEQgHADgJAAQgJAAgHgEQgHgEgGgIIAAAkQAAAQgMAAQgHAAgCgEgAgPgoQgIAIABAPQgBAOAIAHQAHAIAIAAQAGAAAGgDQAEgEAEgGQADgGAAgKQgBgKgCgHQgDgGgFgEQgFgEgHAAQgIAAgHAIg");
	this.shape_971.setTransform(-674.2,-44.825);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#3E5EAB").s().p("AAvAtQgDgEAAgHIAAgoIgBgMQAAgFgDgDQgDgDgGAAQgFAAgEADQgEADgDAEQgCAGAAAPIAAAgQAAAHgEAEQgDAEgGAAQgEAAgEgEQgDgEAAgHIAAglIgBgPQAAgFgDgDQgDgDgGAAQgMAAgDAIQgEAIAAAOIAAAhQAAAHgDAEQgEAEgFAAQgGAAgDgEQgEgEAAgHIAAhEQAAgHADgDQAEgEAFAAQAFAAADAEQADADAAAGIAAACQAGgIAIgDQAHgEAIAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAEQAHAEAEAHQADAHAAAOIAAAuQAAAHgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_972.setTransform(-688.075,-46.625);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#3E5EAB").s().p("AAXAtQgCgDAAgHIAAgDQgFAGgFADQgEAEgGACQgFACgHAAQgJAAgGgEQgHgDgFgHQgEgHAAgPIAAguQAAgIADgDQADgEAGAAQAFAAAEAEQADADAAAIIAAAlQAAAIACAGQABAGADADQAFADAFAAQAGAAAFgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQADgEAGAAQAGAAACAEQAEADAAAIIAABEQAAAHgDAEQgEADgFAAQgFAAgDgEg");
	this.shape_973.setTransform(-701.45,-46.625);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#3E5EAB").s().p("AAhBBIgFgHIgFgHIgdgwIgWAVIAAAbQAAAIgEAEQgDADgGAAIgGgBQgEgCgBgDIgCgFIAAgKIAAhfQAAgIAEgEQADgEAGAAQAGAAAEAEQADAEAAAIIAAAtIAyg1IAHgGQACgCAFAAQAFAAAEAEQADADAAAFQAAAGgGAFIgfAeIAkAzIAGAKQACAEAAAEQAAAFgDADQgEACgGAAQgFAAgEgBg");
	this.shape_974.setTransform(-713.325,-48.4);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#3E5EAB").s().p("AgIA/QgDgEAAgHIAAhnQAAgIADgDQAEgEAEAAQAFAAAEAEQADADAAAIIAABnQAAAIgDADQgEADgFAAQgFAAgDgDg");
	this.shape_975.setTransform(-727.25,-48.4);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#3E5EAB").s().p("AAcAuQgEgEgEgHQgJAHgIAEQgHADgKAAQgJAAgHgEQgHgDgEgHQgEgGAAgHQAAgKAGgHQAGgGALgCIAMgDIAOgDIAOgEQAAgJgDgFQgEgEgLAAQgIAAgEACQgFADgDAFIgFAHQgBABgFAAQgEAAgDgCQgDgDAAgEQAAgGAFgGQAEgGAKgEQAJgEANAAQAQAAAJAEQAJAEAEAIQAEAIAAANIAAANIAAAOQAAAGACAIIACAJQAAAEgDADQgEADgEAAQgEAAgDgDgAADAFIgNADQgEABgDADQgEADAAAFQAAAGAEADQAEAEAHAAQAGAAAGgDQAGgDADgFQADgFAAgNIAAgDIgPAEg");
	this.shape_976.setTransform(-735.075,-46.625);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgDgGQgEgGgKAAQgFAAgFAEQgGADgCAHQgCAGAAANIAAAeQAAAIgDADQgEAEgFAAQgFAAgEgEQgDgEAAgHIAAhEQAAgHADgDQADgEAFAAQAEAAACACQADABABADQACADAAAFIAAACQAGgIAHgEQAHgEAKAAQAJAAAIAEQAHAFAEAHQACAEABAGIABANIAAArQAAAIgEADQgDAEgFAAQgGAAgDgEg");
	this.shape_977.setTransform(-745.8,-46.625);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#3E5EAB").s().p("AgIA+QgDgDAAgIIAAhDQAAgIADgDQADgEAFABQAFgBADAEQAEADAAAHIAABEQAAAIgEADQgDAEgFAAQgFAAgDgEgAgIgtQgDgDAAgGQAAgEADgEQAEgDAEAAQAFAAADADQAEADAAAFQAAAGgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_978.setTransform(-753.7,-48.35);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#3E5EAB").s().p("AAvAtQgDgEAAgHIAAgoIgBgMQAAgFgDgDQgDgDgGAAQgFAAgEADQgEADgDAEQgCAGAAAPIAAAgQAAAHgEAEQgDAEgGAAQgEAAgEgEQgDgEAAgHIAAglIgBgPQAAgFgDgDQgDgDgGAAQgMAAgDAIQgEAIAAAOIAAAhQAAAHgDAEQgEAEgFAAQgGAAgDgEQgEgEAAgHIAAhEQAAgHADgDQAEgEAFAAQAFAAADAEQADADAAAGIAAACQAGgIAIgDQAHgEAIAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAEQAHAEAEAHQADAHAAAOIAAAuQAAAHgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_979.setTransform(-764.125,-46.625);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#3E5EAB").s().p("AgcAtQgEgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAHAAQAIAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgCACgDAGQgBAFgBAIIAAARIAAAUQgBAIgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_980.setTransform(-775.5,-46.625);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#3E5EAB").s().p("AggAkQgNgNAAgXQAAgKADgJQAEgJAGgGQAGgHAJgDQAIgEAKAAQAOAAAKAGQAKAGAGAJQAFAKAAAKQAAAIgGACQgFADgJAAIguAAQAAAIADAGQADAHAGADQAFADAFAAIAIgBIAHgDIAGgFIAIgGQABgCAEAAQAEAAACACQACACAAAEQAAADgCAEQgDAFgFAEQgFAEgIACQgIADgKAAQgWAAgNgNgAgNgZQgGAGgBAMIAqAAQgBgMgFgGQgGgGgKAAQgIAAgFAGg");
	this.shape_981.setTransform(-785.325,-46.625);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#3E5EAB").s().p("AgIA+QgEgEAAgIIAAhdIgcAAQgHAAgDgDQgEgDAAgEQAAgGAEgCQADgDAHAAIBSAAQAGAAAEADQADACAAAGQAAAEgDADQgEADgGAAIgdAAIAABdQAAAIgEAEQgDADgGAAQgFAAgDgDg");
	this.shape_982.setTransform(-796.325,-48.3);

	this.instance_16 = new lib.Bitmap18();
	this.instance_16.setTransform(-595,-91,1.0083,1.0083);

	this.instance_17 = new lib.Bitmap17();
	this.instance_17.setTransform(-1342,-195,1.1266,1.1266);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("#060807").ss(1,1,1).p("AAAALIAAgV");
	this.shape_983.setTransform(-869.825,-75.825);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgFAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_984.setTransform(-1045.75,-228);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_985.setTransform(-1058.4,-227.85);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAWAAIAAASQAHgKAJgFQAKgGAMAAQARAAANAJQANAJAHAQQAGARAAATQAAAVgGAPQgIARgPAJQgOAIgPAAQgLAAgJgFQgJgEgFgIIAABCgAgZg+QgLAOAAAaQgBAZALAMQAKANAQAAQAOAAAKgNQALgNABgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_986.setTransform(-1163.5,-225.425);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgNAFgXAEg");
	this.shape_987.setTransform(-1234.65,-227.85);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQACAOAJAIQAJAHAOAAQARAAAHgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEACAEQADAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_988.setTransform(-1261.4,-227.85);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgIgGgJAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_989.setTransform(-1285.55,-228);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_990.setTransform(-1308.8,-230.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQgBgVQABgUAGgPQAHgRANgJQAOgJARAAQAKABAKAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQAKANAPAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_991.setTransform(-1326.05,-230.25);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQADACAFAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_992.setTransform(-178.2,-261.15);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgOAJQgPAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQAKANAPAAQAPAAAKgNQAMgNAAgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_993.setTransform(-203.3,-256.475);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgEAGQgGAEgDAIQgEAMAAAOIAABGg");
	this.shape_994.setTransform(-248.8,-259.05);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_995.setTransform(-295.925,-261.45);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQgBAKACACQABADADACQACACAFAAIAKgBIAEAUQgKACgHAAQgNAAgFgEg");
	this.shape_996.setTransform(-321.15,-261.15);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAYAAIAABCQAOgTAWAAQAMAAALAGQALAEAHAKQAHAJAFANQADAMAAAOQABAjgSATQgRATgYAAQgXAAgNgVgAgZgNQgLAMAAAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgOABgLANg");
	this.shape_997.setTransform(-360.7,-261.3);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_998.setTransform(-386.25,-259.05);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_999.setTransform(-404.4,-258.9);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgNAFgXAEg");
	this.shape_1000.setTransform(-424.65,-258.9);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_1001.setTransform(-439.5,-261.3);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgDgGQgCgGgFgEQgFgDgIAAQgHAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQAKAEAGAHQAEAHACAIQADAJAAAPIAABTg");
	this.shape_1002.setTransform(-490.2,-259.05);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_1003.setTransform(-575.4,-261.45);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FF0000").s().p("AgrBFIAAiGIAiAAIAAATQAIgNAGgFQAHgEAIAAQAMAAAMAHIgLAfQgJgGgIAAQgIAAgFAFQgEADgDALQgDALAAAhIAAAqg");
	this.shape_1004.setTransform(-598.975,-259.05);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_1005.setTransform(-660.6,-261.45);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FF0000").s().p("AgwBMQgRgTAAghQAAgiARgSQAPgRAZgBQAVABARASIAAhCIAkAAIAAC4IghAAIAAgUQgJAMgKAGQgMAGgLAAQgWgBgRgSgAgUgIQgIAJgBAUQAAAWAHAJQAIAPAOAAQANAAAJgLQAIgLABgUQAAgYgJgJQgIgKgOAAQgMAAgIAKg");
	this.shape_1006.setTransform(-672.5,-261.3);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FF0000").s().p("AgSB4IgOgDIAHgfIAEABIAEAAQAGAAADgCQAEgCABgEQABgDAAgQIAAiAIAjAAIAACCQAAAZgDALQgEALgJAGQgKAFgOAAIgLAAgAgChWIAAghIAjAAIAAAhg");
	this.shape_1007.setTransform(-699.725,-258.725);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgCgGQgDgGgFgEQgFgDgIAAQgHAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQAKAEAGAHQAEAHADAIQACAJAAAPIAABTg");
	this.shape_1008.setTransform(-709.7,-259.05);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1009.setTransform(-725.0223,-258.9);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FF0000").s().p("AAYBdIghg9IgRASIAAArIgjAAIAAi5IAjAAIAABhIApguIAsAAIguAwIAxBWg");
	this.shape_1010.setTransform(-768.925,-261.45);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_1011.setTransform(-780.45,-261.45);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FF0000").s().p("AgrBFIAAiGIAiAAIAAATQAIgNAGgFQAHgEAIAAQAMAAAMAHIgLAfQgJgGgIAAQgIAAgFAFQgEADgDALQgDALAAAhIAAAqg");
	this.shape_1012.setTransform(-788.125,-259.05);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FF0000").s().p("AgpA7QgQgLgFgTIAkgGQACALAHAFQAHAGALAAQAOAAAIgGQAEgDAAgGQAAgEgCgDQgDgCgJgCQgqgKgMgIQgQgJAAgUQAAgRAOgNQANgMAeAAQAaAAAOAJQANAKAGARIgiAHQgDgIgFgFQgHgDgKAAQgNAAgHADQgEADAAAEQAAAEAEADQAEAEAcAGQAcAHAMAJQALAIAAASQAAASgQANQgPAOgfAAQgaAAgQgMg");
	this.shape_1013.setTransform(-810.4,-258.9);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_1014.setTransform(-820.85,-261.45);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FF0000").s().p("AgRBdIAAi5IAjAAIAAC5g");
	this.shape_1015.setTransform(-828.05,-261.45);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FF0000").s().p("AgRBdIAAiGIAjAAIAACGgAgRg7IAAghIAjAAIAAAhg");
	this.shape_1016.setTransform(-842.45,-261.45);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FF0000").s().p("AgrBFIAAiGIAiAAIAAATQAIgNAGgFQAHgEAIAAQAMAAAMAHIgLAfQgJgGgIAAQgIAAgFAFQgEADgDALQgDALAAAhIAAAqg");
	this.shape_1017.setTransform(-866.025,-259.05);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1018.setTransform(-879.4223,-258.9);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FF0000").s().p("AAZBFIAAhFQAAgVgBgGQgDgGgFgEQgFgDgHAAQgIAAgIAEQgHAFgDAJQgDAJAAAVIAAA9IgkAAIAAiGIAhAAIAAAUQASgXAaAAQAMAAAJAEQALAEAEAHQAFAHADAIQABAJAAAPIAABTg");
	this.shape_1019.setTransform(-894.45,-259.05);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1020.setTransform(-909.7723,-258.9);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FF0000").s().p("AAaBdIAAhHQAAgVgCgFQgDgGgEgDQgGgDgIAAQgHAAgHADQgHAFgEAIQgDAJAAAQIAABEIgkAAIAAi5IAkAAIAABFQARgVAYAAQAMAAAJAEQAKAFAGAHQAEAIADAIQACAJAAARIAABPg");
	this.shape_1021.setTransform(-932,-261.45);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FF0000").s().p("AgMBZQgLgGgJgMIAAAUIghAAIAAi4IAkAAIAABCQAQgSAWgBQAYABARARQAQASAAAhQAAAigQATQgRASgYABQgKAAgLgGgAgVgIQgIAJAAAUQgBAVAHAKQAKAPAOAAQALAAAJgLQAIgKAAgVQAAgYgIgJQgJgKgMAAQgMAAgJAKg");
	this.shape_1022.setTransform(-962.05,-261.3);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FF0000").s().p("AgoA/QgLgGgFgKQgEgLAAgUIAAhUIAjAAIAAA+QAAAcACAGQACAHAFADQAGAEAIAAQAIAAAHgFQAHgFADgIQADgHAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_1023.setTransform(-978.325,-258.75);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FF0000").s().p("AgrBFIAAiGIAiAAIAAATQAIgNAGgFQAHgEAIAAQAMAAAMAHIgLAfQgJgGgIAAQgIAAgFAFQgEADgDALQgDALAAAhIAAAqg");
	this.shape_1024.setTransform(-990.275,-259.05);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF0000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1025.setTransform(-1003.6723,-258.9);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1026.setTransform(-1046.775,-261.45);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgDgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_1027.setTransform(-1072,-261.15);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_1028.setTransform(-1124.25,-258.9);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#3E5EAB").s().p("AgSBfIAAh0IgVAAIAAgSIAVAAIAAgOQAAgOACgHQAEgIAHgGQAIgGAPAAQAJAAAMADIgDAUIgOgCQgKAAgEAFQgFAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_1029.setTransform(-1177,-261.625);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#3E5EAB").s().p("AgkBKIAAARIgWAAIAAi4IAYAAIAABCQAOgTAVAAQAMAAAMAGQALAEAHAKQAHAJAFANQADAMAAAOQABAjgSATQgRATgYAAQgWAAgOgVgAgZgNQgLAMAAAYQgBAYAHALQALASATAAQANAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgOABgLANg");
	this.shape_1030.setTransform(-1211.2,-261.3);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgFAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1031.setTransform(-1243.7,-259.05);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_1032.setTransform(-1266.95,-261.15);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_1033.setTransform(-1278,-258.9);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgDgHQgCgGgFgEQgHgDgIAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_1034.setTransform(-1295.95,-259.05);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#3E5EAB").s().p("AA7BdIgWg4IhNAAIgUA4IgaAAIBHi5IAaAAIBMC5gAgMglIgUA1IA+AAIgUgyQgJgYgDgPQgEATgGARg");
	this.shape_1035.setTransform(-1324.125,-261.45);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#060807").ss(1,1,1).p("AAAIjIAAxF");
	this.shape_1036.setTransform(-345.65,70.375);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#060807").ss(1,1,1).p("AAAH6IAAvz");
	this.shape_1037.setTransform(-773.35,-31.725);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#060807").ss(1,1,1).p("AAAIzIAAxl");
	this.shape_1038.setTransform(-1168.85,-22.875);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#3E5EAB").s().p("AAXAtQgDgDAAgHIAAgDQgEAGgFADQgEAEgGACQgFACgHAAQgJAAgGgEQgHgDgFgHQgEgHAAgPIAAguQAAgIADgDQAEgEAFAAQAGAAADAEQADADAAAIIAAAlQAAAIACAGQABAGADADQAFADAFAAQAGAAAFgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQADgEAGAAQAFAAADAEQAEADAAAIIAABEQAAAHgDAEQgEADgFAAQgEAAgEgEg");
	this.shape_1039.setTransform(-317.05,4.725);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgCgGABgMIAAgtIgEAAQgFAAgCgDQgEgCAAgEQAAgDAEgDQACgCAGAAIADAAIAAgPIAAgJIABgGIAFgDQACgCADAAQAFAAACADQADACABAEIABAJIAAARIAIAAQAFAAADACQADADAAADQAAAFgEACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQABACAEgBIAGAAIAGgBQADAAACACQADADAAADQAAAGgHADQgGADgMAAQgLAAgFgDg");
	this.shape_1040.setTransform(-325.4,3.1);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAHAAQAIAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1041.setTransform(-358.9,4.725);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#3E5EAB").s().p("AAqBCIgEgEIgDgFIgDgHIgGgRIg0AAIgGARQgDAKgDADQgDAEgFAAQgFAAgEgEQgEgDAAgFIABgFIADgIIAhhTIADgJIAFgIQACgEADgCQAEgBAFAAQAFAAAEABQADACACAEIAEAGIAEALIAiBSQAEAKAAADQAAAFgEAEQgEAEgFAAIgFgBgAgTAOIAmAAIgTg0g");
	this.shape_1042.setTransform(-369.875,2.95);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#3E5EAB").s().p("AgWAtQgKgEgEgGQgEgGAAgGQAAgEACgDQADgCAFAAQADAAACABIAEAGQAEAGAFADQAFADAIAAQAHAAAFgDQAFgDAAgEQAAgHgFgCQgFgDgKgDIgUgGQgIgDgFgFQgEgGAAgIQAAgHAEgHQAEgGAJgEQAIgEAMAAQAIAAAIACQAHACAFADQAFAEADAEQACAEAAADQAAAEgCADQgDADgFAAQgEAAgDgCIgGgHQgCgDgEgCQgEgCgFAAQgGAAgFACQgEADAAAEQAAAEADADIAJADIANAEQAMADAHAEQAHADADAFQAEAFAAAHQAAAJgFAIQgFAHgJADQgKAEgMAAQgNAAgJgEg");
	this.shape_1043.setTransform(-385.725,4.725);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#3E5EAB").s().p("AgSAtQgKgDgGgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAGgHAKgDQAIgEAKAAQALAAAIAEQAKADAGAHQAHAGADAJQADAJAAAKQAAALgDAJQgEAJgGAGQgGAHgKAEQgIADgLAAQgKAAgIgEgAgLgaQgGADgDAHQgDAIAAAIQAAAKADAHQADAHAGADQAFAEAGAAQALAAAHgIQAFgIABgPQgBgOgFgIQgHgIgLAAQgGAAgFAEg");
	this.shape_1044.setTransform(-396.05,4.725);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQAAAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1045.setTransform(-404.9,4.725);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#3E5EAB").s().p("AgTAtQgIgDgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAIgDQAJgEAKAAQALAAAJAEQAIADAHAHQAGAGAEAJQADAJAAAKQAAALgDAJQgEAJgGAGQgHAHgIAEQgJADgLAAQgKAAgJgEgAgMgaQgFADgDAHQgCAIgBAIQABAKACAHQADAHAFADQAGAEAGAAQALAAAHgIQAFgIAAgPQAAgOgFgIQgHgIgLAAQgGAAgGAEg");
	this.shape_1046.setTransform(-414.8,4.725);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#3E5EAB").s().p("AgtA9QgDgDAAgIIAAhiQAAgJAEgEQAEgDAIgBIAhAAQAPABAIACQAIACAGAFQAFAFADAIQADAHAAAJQAAAUgMAJQgMAKgYAAIgXAAIAAAlQAAAIgEADQgDAFgGAAQgGAAgEgFgAgWgFIASAAQAIAAAGgDQAGgCADgDQAEgFAAgIQAAgIgFgFQgGgGgQAAIgSAAg");
	this.shape_1047.setTransform(-425.925,3.05);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAHAAQAIAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1048.setTransform(-678.85,-101.475);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#3E5EAB").s().p("AAXAtQgDgDAAgHIAAgDQgEAGgFADQgEAEgGACQgFACgHAAQgJAAgGgEQgHgDgFgHQgEgHAAgPIAAguQAAgIADgDQAEgEAFAAQAGAAADAEQADADAAAIIAAAlQAAAIACAGQABAGADADQAFADAFAAQAGAAAFgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQADgEAGAAQAFAAADAEQAEADAAAIIAABEQAAAHgDAEQgEADgFAAQgEAAgEgEg");
	this.shape_1049.setTransform(-688.75,-101.475);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgCgGAAgMIAAgtIgDAAQgFAAgDgDQgCgCAAgEQAAgDACgDQADgCAFAAIADAAIAAgPIAAgJIADgGIADgDQADgCAEAAQAEAAADADQACACABAEIAAAJIAAARIAJAAQAFAAADACQADADgBADQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACACADgBIAGAAIAGgBQADAAACACQADADgBADQAAAGgGADQgHADgLAAQgLAAgFgDg");
	this.shape_1050.setTransform(-697.05,-103.1);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAHAAQAIAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1051.setTransform(-730.6,-101.475);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#3E5EAB").s().p("AAqBCIgEgEIgDgFIgDgHIgGgRIg0AAIgGARQgDAKgDADQgDAEgFAAQgFAAgEgEQgEgDAAgFIABgFIADgIIAhhTIADgJIAFgIQACgEADgCQAEgBAFAAQAFAAAEABQADACACAEIAEAGIAEALIAiBSQAEAKAAADQAAAFgEAEQgEAEgFAAIgFgBgAgTAOIAmAAIgTg0g");
	this.shape_1052.setTransform(-741.575,-103.25);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgEgGQgDgGgJAAQgGAAgGAEQgEADgDAHQgCAGAAANIAAAeQAAAIgDADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhEQAAgHADgDQADgEAGAAQADAAACACQACABACADQABADAAAFIAAACQAHgIAIgEQAGgEAKAAQAJAAAIAEQAHAFAEAHQACAEABAGIABANIAAArQAAAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1053.setTransform(-758,-101.475);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAACAEQADAEABAHQAEgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAEgDADQgDADgEAAIgFgBQgGgCgDAAQgGAAgDADQgDACgCAGQgCAFAAAIIAAARIAAAUQAAAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1054.setTransform(-777.5,-101.475);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#3E5EAB").s().p("AgsA/QgCgFAAgHIAAhnQAAgHADgDQADgEAFAAQAFAAAEAEQACADAAAHIAAADQAIgJAHgEQAHgEAIAAQAMAAAJAGQAJAGAFALQAGALAAAPQAAALgDAIQgEAKgFAGQgGAGgHAEQgHADgJAAQgJAAgHgEQgHgEgHgIIAAAkQAAAQgLAAQgHAAgCgEgAgPgoQgIAIAAAPQAAAOAIAHQAGAIAKAAQAGAAAEgDQAFgEAEgGQACgGAAgKQABgKgDgHQgDgGgFgEQgGgEgFAAQgKAAgGAIg");
	this.shape_1055.setTransform(-798.1,-99.675);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#3E5EAB").s().p("AAvAtQgDgEAAgHIAAgoIgBgMQAAgFgDgDQgDgDgGAAQgFAAgEADQgEADgDAEQgCAGAAAPIAAAgQAAAHgEAEQgDAEgGAAQgEAAgEgEQgDgEAAgHIAAglIgBgPQAAgFgDgDQgDgDgGAAQgMAAgDAIQgEAIAAAOIAAAhQAAAHgDAEQgEAEgFAAQgGAAgDgEQgEgEAAgHIAAhEQAAgHADgDQAEgEAFAAQAFAAADAEQADADAAAGIAAACQAGgIAIgDQAHgEAIAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAEQAHAEAEAHQADAHAAAOIAAAuQAAAHgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1056.setTransform(-811.975,-101.475);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#3E5EAB").s().p("AAhBAIgFgGIgFgHIgdgvIgWAUIAAAbQAAAIgEAEQgDAEgGAAIgGgCQgEgCgBgDIgCgGIAAgJIAAhfQAAgIAEgEQADgDAGAAQAGAAAEADQADAEAAAIIAAAuIAyg2IAHgGQACgCAFABQAFAAAEACQADAEAAAEQAAAGgGAGIgfAeIAkA0IAGAJQACAEAAAEQAAAEgDADQgEAEgGAAQgFAAgEgDg");
	this.shape_1057.setTransform(-837.225,-103.25);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAADAEQACAEAAAHQAFgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAEgCADQgEADgEAAIgGgBQgFgCgEAAQgFAAgDADQgDACgBAGQgCAFgBAIIgBARIAAAUQABAIgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_1058.setTransform(-1108.1,-101.475);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#3E5EAB").s().p("AgSAtQgJgDgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgDQAIgEAKAAQALAAAJAEQAJADAGAHQAGAGAEAJQADAJAAAKQAAALgDAJQgEAJgGAGQgGAHgJAEQgJADgLAAQgKAAgIgEgAgMgaQgFADgDAHQgCAIgBAIQABAKACAHQADAHAFADQAGAEAGAAQALAAAHgIQAFgIAAgPQAAgOgFgIQgHgIgLAAQgGAAgGAEg");
	this.shape_1059.setTransform(-1118.05,-101.475);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgBgGAAgMIAAgtIgEAAQgFAAgDgDQgDgCABgEQgBgDADgDQAEgCAEAAIAEAAIAAgPIAAgJIACgGIADgDQADgCAEAAQAEAAADADQACACABAEIAAAJIAAARIAJAAQAFAAADACQADADgBADQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACACADgBIAGAAIAGgBQADAAACACQADADgBADQAAAGgGADQgHADgLAAQgLAAgFgDg");
	this.shape_1060.setTransform(-1126.35,-103.1);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgBgGgBgMIAAgtIgDAAQgFAAgCgDQgEgCAAgEQAAgDAEgDQACgCAGAAIACAAIAAgPIAAgJIACgGIAFgDQACgCADAAQAFAAACADQADACABAEIABAJIAAARIAIAAQAGAAACACQACADABADQgBAFgDACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQABACAFgBIAFAAIAGgBQADAAACACQACADABADQAAAGgHADQgHADgLAAQgKAAgGgDg");
	this.shape_1061.setTransform(-1143.4,-103.1);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#3E5EAB").s().p("AAXAtQgDgDAAgHIAAgDQgEAGgFADQgEAEgGACQgFACgHAAQgJAAgGgEQgHgDgFgHQgEgHAAgPIAAguQAAgIADgDQAEgEAFAAQAFAAAEAEQADADAAAIIAAAlQAAAIACAGQABAGADADQAFADAFAAQAGAAAFgDQAGgEACgGQACgFAAgQIAAgdQAAgIADgDQADgEAGAAQAFAAADAEQAEADAAAIIAABEQAAAHgDAEQgEADgFAAQgFAAgDgEg");
	this.shape_1062.setTransform(-1152.35,-101.475);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#3E5EAB").s().p("AAvAtQgDgEAAgHIAAgoIgBgMQAAgFgDgDQgDgDgGAAQgFAAgEADQgEADgDAEQgCAGAAAPIAAAgQAAAHgEAEQgDAEgGAAQgEAAgEgEQgDgEAAgHIAAglIgBgPQAAgFgDgDQgDgDgGAAQgMAAgDAIQgEAIAAAOIAAAhQAAAHgDAEQgEAEgFAAQgGAAgDgEQgEgEAAgHIAAhEQAAgHADgDQAEgEAFAAQAFAAADAEQADADAAAGIAAACQAGgIAIgDQAHgEAIAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAEQAHAEAEAHQADAHAAAOIAAAuQAAAHgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1063.setTransform(-1165.775,-101.475);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#3E5EAB").s().p("AgSAtQgJgDgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgDQAIgEAKAAQALAAAIAEQAKADAGAHQAHAGADAJQADAJAAAKQAAALgDAJQgEAJgGAGQgGAHgKAEQgIADgLAAQgKAAgIgEgAgMgaQgFADgDAHQgDAIAAAIQAAAKADAHQADAHAFADQAGAEAGAAQALAAAHgIQAFgIAAgPQAAgOgFgIQgHgIgLAAQgGAAgGAEg");
	this.shape_1064.setTransform(-1179.15,-101.475);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#3E5EAB").s().p("AAhBAIgFgGIgFgHIgdgvIgWAUIAAAbQAAAIgEAEQgDAEgGAAIgGgCQgEgCgBgDIgCgGIAAgJIAAhfQAAgIAEgEQADgDAGAAQAGAAAEADQADAEAAAIIAAAuIAyg2IAHgGQACgCAFABQAFAAAEACQADAEAAAEQAAAGgGAGIgfAeIAkA0IAGAJQACAEAAAEQAAAEgDADQgEAEgGAAQgFAAgEgDg");
	this.shape_1065.setTransform(-1191.025,-103.25);

	this.instance_18 = new lib.Bitmap19();
	this.instance_18.setTransform(-1356,-73);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQACAKAHAGQAHAFALAAQAKAAAJgGQAJgGAEgLQAFgJAAgdIAAg0QgBgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgFgHg");
	this.shape_1066.setTransform(-1227.45,-301.125);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAGAAQAIAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1067.setTransform(-1242.3,-304.025);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#3E5EAB").s().p("ABKB0QgEgCgCgDQgDgDgDgHIgFgNIgLgcIhcAAIgLAdQgHARgEAHQgFAFgKABQgJAAgGgHQgHgGAAgJIABgJIAGgOIA6iUIAGgPQAEgJAEgGQAEgGAGgDQAHgFAJAAQAJAAAGAFQAHADAEAGIAHAMIAGASIA8CSQAHASAAAHQAAAIgGAHQgHAHgJAAQgGgBgEgCgAgiAZIBDAAIghhdg");
	this.shape_1068.setTransform(-1321.325,-304.3);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#3E5EAB").s().p("AATA0IAAgoQAAgMgEgFQgDgGgKgBQgFAAgFAFQgFADgDAFQgCAGAAAOIAAAfQAAAHgDAEQgDADgGABQgMAAAAgPIAAhnQAAgHADgEQADgDAGgBQAGABADADQADAEAAAHIAAAkQAFgGAEgDQAEgDAFgCQAFgBAGAAQAJAAAHAEQAHAEAEAHQADAFABAFIABALIAAAuQAAAHgDAEQgEADgFABQgMAAAAgPg");
	this.shape_1069.setTransform(-1068.225,156.15);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#3E5EAB").s().p("AggAkQgNgNAAgWQAAgOAGgLQAGgMALgGQALgGAOAAQAJAAAIADQAIADAFAEQAGAEACAFQADAFAAAEQAAAEgDADQgDADgFAAQgCAAgCgBIgFgFQgFgHgEgDQgFgDgHAAQgKAAgGAIQgHAIAAAOQAAAGABAGQACAGAEAEQACAEAFACQAFACAEAAQAHAAAFgDQAGgEADgHQACgEADgCQACgCAEAAQAFAAACADQADADABAEQAAAFgDAFQgDAFgGAFQgFAEgIADQgIADgLAAQgVAAgNgNg");
	this.shape_1070.setTransform(-1079.1,157.925);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#3E5EAB").s().p("AgIA9QgGgDgCgHQgBgGAAgMIAAgtIgEAAQgFAAgCgDQgEgCAAgEQAAgDAEgDQACgDAGABIADAAIAAgPIAAgJIABgFIAFgFQACgBADAAQAFAAACADQADACABAEIABAJIAAARIAIAAQAGgBACADQACADABADQAAAFgEACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQACABADAAIAGAAIAGgBQADAAACACQADADAAADQAAAGgHADQgGADgMAAQgKAAgGgEg");
	this.shape_1071.setTransform(-1087.25,156.3);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#3E5EAB").s().p("AgHA+QgEgEAAgGIAAhEQAAgHAEgEQACgDAFAAQAFAAAEADQADAEAAAGIAABFQAAAHgDADQgEAEgFAAQgFAAgCgEgAgHgtQgEgDAAgFQAAgFAEgEQADgDAEAAQAEAAAFADQADADAAAGQAAAFgDADQgEAEgFgBQgEABgDgEg");
	this.shape_1072.setTransform(-1093.2,156.2);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#3E5EAB").s().p("AAWAuQgEgDgBgDIgDgLIgOguIgMAuQgDAKgDAFQgDAFgIAAQgEAAgDgCIgEgEIgEgHIgCgGIgTg5QgDgIAAgDQAAgEADgDQADgDAFAAQAGAAACAEIAEALIAQA1IAOgxIADgLIAFgFQADgDAEAAQAFAAADADQADACACAEIADAKIAOAxIAQg1IADgIIADgFQACgCAFAAQAEAAADADQADADAAAEQAAAEgDAHIgTA5IgEALIgFAFQgDADgFAAQgFAAgDgDg");
	this.shape_1073.setTransform(-1102.975,157.925);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#3E5EAB").s().p("AgeA7QgJgFgGgIQgFgJAAgIQAAgFADgDQADgEAGAAQAEAAADADQACACACAGQADAGADAEQADAEAFADQAFACAIABQALgBAHgFQAIgGAAgHQAAgHgEgEQgEgEgGgCIgQgFQgOgDgJgEQgKgEgFgHQgGgIAAgLQAAgKAGgJQAGgIALgEQALgEAOgBQAMAAAIADQAJADAGAFQAFAFADAFQADAGAAAFQAAAEgEAEQgDAEgFAAQgEAAgDgCIgFgHQgDgIgFgEQgFgEgKAAQgKAAgGAFQgGAEAAAGQAAAEACADQACADADABIAIADIALAEIAUAFQAJADAGAFQAGADAEAIQADAGAAAKQAAAMgGAJQgGAJgLAFQgMAGgQAAQgSAAgMgIg");
	this.shape_1074.setTransform(-1116.225,156.15);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#3E5EAB").s().p("AggAkQgNgNAAgWQAAgOAGgLQAGgMALgGQALgGAOAAQAJAAAIADQAIADAFAEQAGAEACAFQADAFAAAEQAAAEgDADQgDADgFAAQgCAAgCgBIgFgFQgFgHgEgDQgFgDgHAAQgKAAgHAIQgGAIAAAOQAAAGABAGQACAGADAEQADAEAFACQAFACAEAAQAHAAAFgDQAGgEADgHQACgEADgCQACgCAEAAQAFAAACADQADADABAEQAAAFgDAFQgDAFgGAFQgFAEgIADQgIADgLAAQgVAAgNgNg");
	this.shape_1075.setTransform(-1132.2,157.925);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#3E5EAB").s().p("AgIA+QgDgEAAgGIAAhEQAAgHADgEQAEgDAEAAQAFAAADADQAEAEAAAGIAABFQAAAHgEADQgDAEgFAAQgEAAgEgEgAgIgtQgDgDAAgFQAAgFADgEQAEgDAEAAQAEAAAEADQAEADAAAGQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_1076.setTransform(-1139.95,156.2);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#3E5EAB").s().p("AgIA9QgGgDgCgHQgBgGgBgMIAAgtIgDAAQgFAAgCgDQgDgCgBgEQABgDADgDQACgDAGABIACAAIAAgPIAAgJIACgFIAFgFQACgBADAAQAFAAACADQADACABAEIABAJIAAARIAIAAQAFgBADADQADADAAADQgBAFgDACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQABABAFAAIAFAAIAGgBQADAAACACQADADAAADQAAAGgHADQgHADgLAAQgLAAgFgEg");
	this.shape_1077.setTransform(-1145.3,156.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgDgGQgDgGgLAAQgFAAgGAEQgEADgDAHQgCAGAAANIAAAeQAAAIgDADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhEQAAgHADgDQADgEAGAAQADAAACACQACABACADQABADABAFIAAACQAGgIAHgEQAHgEAKAAQAJAAAIAEQAHAFAEAHQACAEABAGIABANIAAArQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1078.setTransform(-1164.9,157.925);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#3E5EAB").s().p("AgWA/QgLgDgEgGQgGgFAAgGQAAgFADgCQADgDAEAAQAGAAADAFIAFAEIAEAFIAGACIAIABQAJAAAFgDQAFgCACgFIADgKIAAgRQgGAIgHAEQgHAEgJAAQgMAAgJgGQgKgHgEgLQgFgKAAgOQAAgLADgJQADgJAFgGQAGgFAHgDQAHgEAIAAQAKAAAHAEQAIAEAGAJIAAgEQAAgGADgDQADgEAFAAQAHAAACAFQADAEAAAJIAABFQAAAMgDAIQgDAJgFAGQgGAFgIADQgKADgNAAQgMAAgJgEgAgQgoQgGAIAAAOQAAAPAGAGQAHAIAJAAQAGAAAFgDQAGgEADgFQADgGABgKQAAgOgHgJQgHgIgKAAQgJAAgHAIg");
	this.shape_1079.setTransform(-1176.25,159.725);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#3E5EAB").s().p("AApA+QgDgEAAgHIAAhYIgVBRIgDAMQgBAEgEADQgDADgGAAQgEgBgDgBQgDgDgCgDQgCgDAAgDIgDgIIgUhRIAABYQAAAHgEAEQgDADgFABQgGgBgDgDQgDgEAAgHIAAhlQAAgIAEgDQAEgEAIAAIAIAAQAHAAAEACQADABACAEIADAKIASBGIAThGIADgKQACgEADgBQADgCAIAAIAIAAQAHAAAFAEQAEADAAAIIAABlQAAAHgDAEQgDADgGABQgFgBgEgDg");
	this.shape_1080.setTransform(-1199.825,156.25);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#3E5EAB").s().p("AgNBBQgIgCgHgEQgHgFgFgGQgGgGgDgIQgEgHgBgIQgCgJAAgKQgBgPAFgMQAEgMAJgJQAJgJALgEQALgEAMgBQAPAAANAHQAMAGAHAJQAGAJAAAIQAAAFgDADQgDAEgFAAQgFAAgCgDIgGgIQgFgJgHgFQgHgFgKAAQgPAAgJANQgKALAAAWQAAAPAEAKQAEAKAIAFQAIAFAKAAQAKAAAJgGQAHgFAEgLIAEgJQACgCAGAAQAFAAADACQADAEAAAFQAAAGgDAHQgDAIgGAGQgHAHgKAEQgKAFgNAAQgJgBgJgBg");
	this.shape_1081.setTransform(-1218.55,156.15);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#3E5EAB").s().p("AgIA/QgDgEAAgHIAAhnQAAgHADgEQAEgDAEgBQAFABADADQAEAEAAAHIAABnQAAAHgEAEQgDADgFABQgEgBgEgDg");
	this.shape_1082.setTransform(-1232.2,156.15);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#3E5EAB").s().p("AAWAtQgDgEAAgHIAAgnQAAgMgEgGQgDgGgJAAQgGAAgGAEQgFADgCAHQgCAGAAANIAAAeQAAAIgDADQgDAEgGAAQgFAAgDgEQgEgEAAgHIAAhEQAAgHADgDQADgEAGAAQADAAACACQACABACADQACADgBAFIAAACQAHgIAIgEQAGgEAKAAQAJAAAIAEQAIAFADAHQACAEABAGIABANIAAArQAAAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1083.setTransform(-1250.75,157.925);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#3E5EAB").s().p("AgHA+QgEgEAAgGIAAhEQAAgHAEgEQADgDAEAAQAFAAADADQAEAEAAAGIAABFQAAAHgEADQgDAEgFAAQgEAAgDgEgAgHgtQgEgDAAgFQAAgFAEgEQADgDAEAAQAEAAAEADQAEADAAAGQAAAFgEADQgDAEgFgBQgEABgDgEg");
	this.shape_1084.setTransform(-1258.65,156.2);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#3E5EAB").s().p("AgdAtQgDgDAAgIIAAhCQAAgQAMAAQAGAAADAEQACAEAAAHQAFgHAEgEQAEgEAIAAQAHAAAHAEQAHAEAAAGQAAAEgCADQgEADgDAAIgHgBQgFgCgEAAQgFAAgDADQgCACgCAGQgCAFgBAIIgBARIAAAUQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1085.setTransform(-1280.45,157.925);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#3E5EAB").s().p("AgIA9QgEgDAAgIIAAhdIgcAAQgHAAgDgDQgEgDAAgEQAAgGAEgCQADgEAHAAIBSAAQAGAAAEAEQADACAAAGQAAAEgDADQgEADgGAAIgdAAIAABdQAAAIgEAEQgDADgGABQgFAAgDgFg");
	this.shape_1086.setTransform(-1301.275,156.25);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#3E5EAB").s().p("AgNAKQgGAAgEgCQgDgDAAgFQAAgEADgCQADgDAHAAIAbAAQAGAAAEADQADACAAAEQAAAFgDADQgEACgGAAg");
	this.shape_1087.setTransform(-687.875,328.35);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#3E5EAB").s().p("AgIA+QgGgEgCgHQgBgGAAgMIAAgtIgEAAQgFAAgDgDQgDgCAAgEQAAgDADgDQAEgCAEAAIAEAAIAAgPIAAgJIACgGIADgEQADgBAEAAQAEAAADADQACACABAEIAAAJIAAARIAJAAQAFAAADACQACADAAADQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACACADgBIAGAAIAGgBQADAAACACQADADgBADQABAGgHADQgGADgMAAQgKAAgGgDg");
	this.shape_1088.setTransform(-698.3,326.75);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#3E5EAB").s().p("AAXBBIgGgJIgUgjIgOAMIAAATQABAHgEAEQgEADgEABQgGgBgDgDQgEgDAAgIIAAhlQABgIADgFQACgEAHAAQAFABAEADQACAEAAAHIAAA5IAagbIAIgHQADgCAEAAQAEAAADADQADACAAAFQAAAFgJAJIgOALIAZAmIAEAHIACAEQAAAGgEADQgDAEgFAAQgEAAgDgCg");
	this.shape_1089.setTransform(-717.25,326.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#3E5EAB").s().p("AgIA/QgDgEAAgHIAAhEQAAgHADgEQAEgEAEAAQAFAAADAEQAEAEAAAGIAABFQAAAHgEAEQgDADgFAAQgFAAgDgDgAgIgtQgDgDAAgFQAAgFADgEQAEgDAEAAQAEAAAEADQAEADAAAGQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_1090.setTransform(-725.25,326.65);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#3E5EAB").s().p("AgeA7QgJgEgGgKQgFgIAAgIQAAgFADgDQADgEAGAAQAEAAADADQACACACAFQADAHADAEQADAEAFADQAFADAIAAQALAAAHgGQAIgGAAgHQAAgHgEgEQgEgEgGgCIgQgFQgOgDgJgEQgKgDgFgIQgGgHAAgMQAAgLAGgHQAGgJALgEQALgEAOgBQAMAAAIADQAJADAGAFQAFAFADAFQADAGAAAFQAAAEgEAEQgDAEgFAAQgEAAgDgCIgFgHQgDgIgFgEQgFgEgKAAQgKAAgGAFQgGAEAAAGQAAAEACACQACAEADABIAIADIALAEIAUAFQAJAEAGAEQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAFQgMAGgQAAQgSAAgMgIg");
	this.shape_1091.setTransform(-733.625,326.6);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#3E5EAB").s().p("AgNALQgGgBgEgCQgDgDAAgFQAAgDADgDQADgDAHgBIAbAAQAGABAEADQADADAAADQAAAFgDADQgEACgGABg");
	this.shape_1092.setTransform(-418.275,-28.7);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#3E5EAB").s().p("AgIA+QgGgFgCgGQgBgGgBgMIAAgtIgDAAQgFAAgCgDQgDgCAAgEQAAgEADgCQACgDAGAAIACAAIAAgOIAAgJIACgGIAFgDQACgCADAAQAFAAACADQADADABADIABAJIAAAQIAIAAQAGAAACADQACACABAEQgBAFgDACQgEACgHAAIgEAAIAAArIAAAJQAAADACACQABABAFAAIAFAAIAGgBQADAAACACQACADABADQgBAGgGADQgHADgLAAQgLAAgFgDg");
	this.shape_1093.setTransform(-428.7,-30.3);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#3E5EAB").s().p("AAXBAIgGgJIgVgiIgMAMIAAATQAAAHgEAEQgEAEgFAAQgFAAgDgEQgDgEgBgHIAAhlQAAgIADgFQAEgDAFAAQAGgBADAEQAEAEAAAHIAAA6IAagcIAHgHQADgCADAAQAFAAADADQADADAAAEQAAAGgKAIIgMALIAYAmIAEAHIABAEQABAGgEADQgDADgFABQgEgBgDgCg");
	this.shape_1094.setTransform(-447.65,-30.45);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#3E5EAB").s().p("AgHA/QgEgFAAgHIAAhDQAAgIAEgDQADgDAEgBQAFABAEADQADADAAAHIAABEQAAAIgDAEQgEADgFAAQgEAAgDgDgAgHgtQgEgDAAgFQAAgGAEgDQADgDAEAAQAEAAAFADQADADAAAGQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_1095.setTransform(-455.65,-30.4);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#3E5EAB").s().p("AgeA8QgJgGgGgJQgFgIAAgIQAAgFADgEQADgDAGAAQAEAAADADQACADACAEQADAHADAEQADAEAFADQAFACAIAAQALABAHgGQAIgFAAgJQAAgGgEgEQgEgEgGgCIgQgFQgOgCgJgFQgKgEgFgHQgGgHAAgLQAAgMAGgHQAGgJALgEQALgFAOABQAMAAAIACQAJADAGAFQAFAFADAFQADAFAAAGQAAAEgEAEQgDAEgFAAQgEAAgDgDIgFgGQgDgIgFgEQgFgEgKAAQgKAAgGAEQgGAFAAAGQAAAEACACQACADADADIAIACIALAEIAUAFQAJADAGAFQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAFQgMAFgQABQgSgBgMgGg");
	this.shape_1096.setTransform(-464.025,-30.45);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#3E5EAB").s().p("AgKAtIAAghIgiAAIAAgWIAiAAIAAgiIAVAAIAAAiIAiAAIAAAWIgiAAIAAAhg");
	this.shape_1097.setTransform(-909.05,119.725);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#3E5EAB").s().p("AgIA9QgGgEgCgGQgCgHAAgLIAAgtIgDAAQgFAAgDgCQgCgDAAgEQAAgEACgCQADgCAFgBIADAAIAAgOIAAgJIADgGIADgDQADgCAEAAQAEAAADAEQACACABADIAAAJIAAAQIAJAAQAGABACACQADACgBAEQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACABAEABIAFgBIAGgBQADAAACADQACACAAADQAAAGgGADQgHADgLAAQgLAAgFgEg");
	this.shape_1098.setTransform(-921.7,119.8);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#3E5EAB").s().p("AAXBAIgGgJIgVgiIgMAMIAAAUQgBAGgDAEQgEAEgEgBQgGABgDgEQgEgDAAgIIAAhmQAAgHAEgEQACgEAHAAQAFAAAEADQADAEAAAHIAAA6IAagcIAHgHQADgCADAAQAFAAADADQADADAAAEQAAAGgJAIIgOALIAZAnIAEAGIABAEQAAAGgDADQgDADgFAAQgFAAgCgCg");
	this.shape_1099.setTransform(-940.65,119.65);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#3E5EAB").s().p("AgIA+QgDgDAAgIIAAhDQAAgHADgEQADgDAFgBQAFABAEADQADAEAAAGIAABEQAAAIgDADQgEAEgFAAQgFAAgDgEgAgIgtQgDgDAAgGQAAgFADgDQAEgDAEAAQAFAAAEADQADADAAAFQAAAGgDADQgEADgFABQgEgBgEgDg");
	this.shape_1100.setTransform(-948.65,119.7);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#3E5EAB").s().p("AgeA8QgJgFgGgKQgFgIAAgIQAAgFADgEQADgDAGAAQAEAAADADQACADACAFQADAGADAEQADAEAFADQAFADAIgBQALABAHgGQAIgFAAgJQAAgGgEgEQgEgEgGgCIgQgEQgOgDgJgFQgKgDgFgIQgGgIAAgKQAAgLAGgJQAGgIALgEQALgFAOABQAMAAAIADQAJACAGAFQAFAFADAGQADAEAAAGQAAAEgEAEQgDAEgFAAQgEAAgDgDIgFgHQgDgHgFgEQgFgEgKAAQgKAAgGAEQgGAEAAAHQAAAEACACQACADADADIAIADIALADIAUAGQAJADAGAEQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAGQgMAEgQAAQgSAAgMgGg");
	this.shape_1101.setTransform(-957.025,119.65);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#3E5EAB").s().p("AgKAtIAAghIgiAAIAAgWIAiAAIAAgiIAVAAIAAAiIAiAAIAAAWIgiAAIAAAhg");
	this.shape_1102.setTransform(-596.55,-131.875);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#3E5EAB").s().p("AgIA+QgGgEgCgHQgBgGAAgMIAAgtIgEAAQgFAAgDgDQgDgCAAgEQAAgDADgDQAEgCAEAAIAEAAIAAgPIAAgJIACgGIADgEQADgBAEAAQAEAAADADQACACABAEIAAAJIAAARIAJAAQAFAAADACQACADAAADQABAFgEACQgEACgHAAIgFAAIAAArIABAJQAAADACACQACACADgBIAGAAIAGgBQADAAACACQADADgBADQAAAGgGADQgGADgMAAQgKAAgGgDg");
	this.shape_1103.setTransform(-609.2,-131.8);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#3E5EAB").s().p("AAXBBIgGgJIgUgjIgOAMIAAATQABAHgEAEQgEADgEABQgGgBgDgDQgEgEAAgHIAAhlQAAgIAEgFQACgEAHAAQAFABAEADQACAEAAAHIAAA5IAagbIAIgHQADgCAEAAQAEAAADADQADACAAAFQAAAFgJAJIgOALIAZAmIAEAHIACAEQAAAGgEADQgDAEgFAAQgEAAgDgCg");
	this.shape_1104.setTransform(-628.15,-131.95);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#3E5EAB").s().p("AgIA/QgDgEAAgHIAAhEQAAgHADgEQADgEAFAAQAFAAADAEQAEAEAAAGIAABFQAAAHgEAEQgDADgFAAQgFAAgDgDgAgIgtQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEADAAAGQAAAFgEADQgDAEgFgBQgEABgEgEg");
	this.shape_1105.setTransform(-636.15,-131.9);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#3E5EAB").s().p("AgeA7QgJgEgGgKQgFgIAAgIQAAgFADgDQADgEAGAAQAEAAADADQACACACAFQADAHADAEQADAEAFADQAFADAIAAQALAAAHgGQAIgGAAgHQAAgHgEgEQgEgEgGgCIgQgFQgOgDgJgEQgKgDgFgIQgGgHAAgMQAAgLAGgHQAGgJALgEQALgEAOgBQAMAAAIADQAJADAGAFQAFAFADAFQADAGAAAFQAAAEgEAEQgDAEgFAAQgEAAgDgCIgFgHQgDgIgFgEQgFgEgKAAQgKAAgGAFQgGAEAAAGQAAAEACACQACAEADABIAIADIALAEIAUAFQAJAEAGAEQAGAEAEAGQADAHAAAKQAAALgGAKQgGAJgLAFQgMAGgQAAQgSAAgMgIg");
	this.shape_1106.setTransform(-644.525,-131.95);

	this.instance_19 = new lib.Bitmap20();
	this.instance_19.setTransform(-1229,-232);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1107.setTransform(-537.1,-196.8);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_1108.setTransform(-550.85,-196.8);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1109.setTransform(-564.55,-196.8);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#3E5EAB").s().p("ABBBdIAAibIg2CbIgVAAIg2ieIAACeIgYAAIAAi5IAlAAIAsCDIAIAbIAKgdIAtiBIAhAAIAAC5g");
	this.shape_1110.setTransform(-582.525,-199.35);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_1111.setTransform(-722.45,-199.05);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_1112.setTransform(-733.5,-196.8);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAIgEQAGgEAKgDIAUgDQAbgDAMgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAGAGACAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgGADgDAEQgCAFAAAGQgBAKAIAFQAGAGAOABQALAAALgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgZAEg");
	this.shape_1113.setTransform(-886.55,-196.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQABgHgHgFQgFgDgSgFQgYgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_1114.setTransform(-949.4,-196.8);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FF0000").s().p("AgTBfIAAh0IgTAAIAAgSIATAAIAAgOQABgOACgHQADgIAJgGQAHgGAPAAQAKAAAMADIgEAUIgNgCQgLAAgFAFQgDAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_1115.setTransform(-1054.1,-199.525);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FF0000").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_1116.setTransform(-1061.225,-199.35);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FF0000").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_1117.setTransform(-1067.55,-199.05);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FF0000").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAJgDIAUgDQAbgDANgFIAAgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQALAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgDgGgBgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgNACgHACQgFADgEAEQgDAFABAGQgBAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQAEgIAAgPIAAgIQgMAFgZAEg");
	this.shape_1118.setTransform(-1078.6,-196.8);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FF0000").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_1119.setTransform(-1093.425,-194.225);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FF0000").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_1120.setTransform(-1107.475,-196.8);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FF0000").s().p("AAwBdIhhiRIAACRIgXAAIAAi5IAZAAIBhCRIAAiRIAXAAIAAC5g");
	this.shape_1121.setTransform(-1124.125,-199.35);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FF0000").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_1122.setTransform(-1144.1,-199.05);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FF0000").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_1123.setTransform(-1155.15,-196.8);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FF0000").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1124.setTransform(-1167.975,-199.35);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FF0000").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_1125.setTransform(-1178.225,-199.35);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FF0000").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_1126.setTransform(-1189.875,-199.375);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1127.setTransform(-1283.75,-196.8);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQABgUAGgPQAHgRANgJQAOgJAQAAQAMABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgMAVgZAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANAOAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_1128.setTransform(-1298.6,-199.2);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAGAHACANIgXAEQgBgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgPAAQgZAAgPgMg");
	this.shape_1129.setTransform(-1326.4,-196.8);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#3E5EAB").s().p("AgrBUQgTgMgJgXQgKgYAAgZQAAgdALgWQALgWAUgLQAVgLAYAAQAbAAAUAOQATAOAHAaIgYAGQgHgUgMgKQgMgJgTAAQgUAAgPAKQgOALgGARQgGARAAATQAAAWAHASQAHASAPAJQAOAIAQAAQAVAAAOgMQAPgMAFgXIAYAGQgIAfgUAQQgUAPgdAAQgdAAgTgMg");
	this.shape_1130.setTransform(-191.025,-230.425);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgEgGAAgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1131.setTransform(-259.8,-227.85);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgFAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_1132.setTransform(-291.9,-228);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#3E5EAB").s().p("AA7BdIgWg4IhNAAIgUA4IgaAAIBHi5IAaAAIBMC5gAgMglIgUA1IA+AAIgUgyQgJgYgDgPQgEASgGASg");
	this.shape_1133.setTransform(-305.925,-230.4);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgNAAQgKAAgIAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAPAAALAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_1134.setTransform(-363.7,-230.4);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#3E5EAB").s().p("AgrBUQgTgMgJgXQgKgYAAgZQAAgdALgWQALgWAUgLQAVgLAYAAQAbAAAUAOQATAOAHAaIgYAGQgHgUgMgKQgMgJgTAAQgUAAgPAKQgOALgGARQgGARAAATQAAAWAHASQAHASAPAJQAOAIAQAAQAVAAAOgMQAPgMAFgXIAYAGQgIAfgUAQQgUAPgdAAQgdAAgTgMg");
	this.shape_1135.setTransform(-420.625,-230.425);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#3E5EAB").s().p("ABBBdIAAibIg2CbIgVAAIg2ieIAACeIgYAAIAAi5IAlAAIAsCDIAIAbIAKgdIAtiBIAhAAIAAC5g");
	this.shape_1136.setTransform(-546.425,-230.4);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#3E5EAB").s().p("AgrBUQgTgMgJgXQgKgYAAgZQAAgdALgWQALgWAUgLQAVgLAYAAQAbAAAUAOQATAOAHAaIgYAGQgHgUgMgKQgMgJgTAAQgUAAgPAKQgOALgGARQgGARAAATQAAAWAHASQAHASAPAJQAOAIAQAAQAVAAAOgMQAPgMAFgXIAYAGQgIAfgUAQQgUAPgdAAQgdAAgTgMg");
	this.shape_1137.setTransform(-573.725,-230.425);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1138.setTransform(-603.55,-227.85);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAUAAAMAMQALALgBAXIAABbg");
	this.shape_1139.setTransform(-641.75,-228);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQABgVQgBgUAHgPQAHgRAOgJQANgJARAAQAKABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgMAVgZAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANANAAQAPAAALgNQAKgMAAgZQAAgagKgNQgLgNgQgBQgNAAgLANg");
	this.shape_1140.setTransform(-726.7,-230.25);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_1141.setTransform(-762.75,-228);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#3E5EAB").s().p("AgDBYQgHgEgDgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACACQABADADACQADACAFAAIAJgBIAEAUQgKACgIAAQgMAAgGgEg");
	this.shape_1142.setTransform(-771.55,-230.1);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgZAAgPgMg");
	this.shape_1143.setTransform(-781.9,-227.85);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIAUAFQAYAHAJAEQAKAEAFAIQAGAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgPAAQgZAAgPgMg");
	this.shape_1144.setTransform(-813.7,-227.85);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAHgFQAFgEAIAAQALAAAMAHIgHAWQgIgGgJAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1145.setTransform(-837.85,-228);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgMAFgXAEg");
	this.shape_1146.setTransform(-850.5,-227.85);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1147.setTransform(-886.6,-227.85);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1148.setTransform(-899.425,-230.4);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQARAAAHgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgXgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgNgMg");
	this.shape_1149.setTransform(-913.35,-227.85);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1150.setTransform(-937.5,-228);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgWAAIAAhXQABgPgGgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_1151.setTransform(-997,-228);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1152.setTransform(-1020.725,-230.4);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#3E5EAB").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAWAAIAAASIgWAAIAABOQAAAKABACQABADADACQADACAEAAIAKgBIAEAUQgKACgHAAQgNAAgGgEg");
	this.shape_1153.setTransform(-1045.95,-230.1);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAOAAQARAAAHgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAFAIQAGAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgYAAgPgMg");
	this.shape_1154.setTransform(-1098.2,-227.85);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_1155.setTransform(-1140.825,-227.7);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#3E5EAB").s().p("AgTBfIAAh0IgTAAIAAgSIATAAIAAgOQABgOACgHQADgIAJgGQAHgGAPAAQAJAAANADIgEAUIgNgCQgLAAgFAFQgDAEAAAMIAAANIAZAAIAAASIgZAAIAAB0g");
	this.shape_1156.setTransform(-1150.95,-230.575);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAALAHIgHAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1157.setTransform(-1158.45,-228);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#3E5EAB").s().p("AglBKIAAARIgUAAIAAi4IAWAAIAABCQAPgTAVAAQANAAALAGQALAEAHAKQAHAJAEANQAFAMAAAOQgBAjgQATQgSATgYAAQgXAAgOgVgAgagNQgLAMAAAYQABAYAGALQALASASAAQAOAAALgNQALgNAAgaQAAgagKgMQgLgNgOAAQgPABgLANg");
	this.shape_1158.setTransform(-1185.15,-230.25);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FF0000").s().p("AgSBfIAAh0IgUAAIAAgSIAUAAIAAgOQgBgOADgHQAEgIAHgGQAIgGAPAAQAJAAAMADIgDAUIgOgCQgKAAgEAFQgEAEgBAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_1159.setTransform(-1202.9,-230.575);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FF0000").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_1160.setTransform(-1210.025,-230.4);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FF0000").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_1161.setTransform(-1216.35,-230.1);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FF0000").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_1162.setTransform(-1223.025,-230.4);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FF0000").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQAQAAAIgGQAIgHAAgJQAAgHgHgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgHgHgNAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgNAGgQAAQgZAAgNgMg");
	this.shape_1163.setTransform(-1232.5,-227.85);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FF0000").s().p("AgtA1QgRgTAAgiQAAgkAVgSQARgPAYgBQAcAAASATQARASAAAgQAAAZgIAPQgHAPgPAJQgPAHgSABQgbAAgSgSgAgbglQgMAMAAAZQAAAaAMANQALANAQAAQARAAALgNQAMgNAAgaQAAgYgMgNQgLgNgRgBQgQABgLANg");
	this.shape_1164.setTransform(-1246.175,-227.85);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FF0000").s().p("Ag6BfIAAi6IAWAAIAAASQAHgKAJgFQAKgGAMAAQARAAANAJQANAJAHAQQAGARAAATQAAAVgGAPQgIARgPAJQgOAIgPAAQgLAAgJgFQgJgEgFgIIAABCgAgZg+QgLAOAAAaQgBAZALAMQAKANAQAAQAOAAAKgNQALgNABgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_1165.setTransform(-1260.25,-225.425);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FF0000").s().p("AgDBYQgGgEgEgHQgCgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQAAAKACACQABADADACQACACAGAAIAKgBIADAUQgKACgIAAQgMAAgGgEg");
	this.shape_1166.setTransform(-1278.45,-230.1);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FF0000").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAEAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgGADgCAEQgDAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1167.setTransform(-1289.5,-227.85);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FF0000").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1168.setTransform(-1302.325,-230.4);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FF0000").s().p("AgKBdIAAiGIAVAAIAACGgAgKhCIAAgaIAVAAIAAAag");
	this.shape_1169.setTransform(-1312.575,-230.4);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FF0000").s().p("AgkBZQgRgHgKgPQgKgPAAgTIAXgCQACAOAGAJQAGAJANAGQAMAFAPAAQAOAAALgEQALgEAFgHQAFgIAAgIQAAgJgFgHQgFgGgLgFIghgJQgZgGgLgEQgNgHgGgLQgHgKAAgNQAAgOAIgMQAIgMAPgHQAQgGATAAQATAAAQAHQAQAGAIANQAJANAAARIgXABQgCgRgLgJQgLgJgVAAQgWAAgKAIQgKAIAAAMQAAAKAHAGQAHAHAdAGQAeAHALAFQARAHAHALQAIAMAAAPQAAAPgIANQgJANgQAHQgQAHgUAAQgYAAgRgHg");
	this.shape_1170.setTransform(-1324.225,-230.425);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#3E5EAB").s().p("AgNAVQAIgCADgHQACgGABgLIgMAAIAAgaIAZAAIAAAaQAAAOgFAJQgFAJgKAEg");
	this.shape_1171.setTransform(-394.775,-251.6);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgKAFgOAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1172.setTransform(-412.8,-258.9);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1173.setTransform(-425.625,-261.45);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAJAIQAIAHAOAAQARAAAHgGQAIgHAAgJQgBgHgGgFQgFgDgTgFQgXgGgKgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQAEAEAFACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgNgMg");
	this.shape_1174.setTransform(-445.35,-258.9);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_1175.setTransform(-480.675,-259.05);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAKgDIAUgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQABAIAFAHIgYAAQgEgGAAgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgFADgEAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1176.setTransform(-495.15,-258.9);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJABAUIAABOIgXAAIAAhXQAAgPgFgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_1177.setTransform(-542,-259.05);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgOAJQgPAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQABgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_1178.setTransform(-574.2,-256.475);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_1179.setTransform(-610.675,-259.05);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQAAAKAHAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1180.setTransform(-625.15,-258.9);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQABgHgHgFQgFgDgSgFQgYgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_1181.setTransform(-638.9,-258.9);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1182.setTransform(-652.6,-258.9);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAKgGALAAQASAAANAJQANAJAHAQQAGARABATQAAAVgIAPQgHARgOAJQgOAIgQAAQgKAAgKgFQgJgEgGgIIAABCgAgag+QgKAOgBAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_1183.setTransform(-666.65,-256.475);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#3E5EAB").s().p("Ag8BdQgBgIADgHQAFgNAKgMQALgNATgPQAegZAKgOQALgOAAgNQAAgOgKgJQgKgJgPAAQgQAAgKAKQgJAKgBARIgXgCQACgbAQgOQAQgNAZAAQAbAAAQAOQAPAQAAAVQAAALgEAMQgFAKgKALQgLAMgZAVQgTARgGAGIgKANIBbAAIAAAVg");
	this.shape_1184.setTransform(-688.9036,-261.5);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1185.setTransform(-712.15,-259.05);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQAAgVQAAgUAGgPQAHgRAOgJQANgJAQAAQALABAKAFQAKAFAFAIIAAhCIAYAAIAAC4IgWAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQAKANAOAAQAQAAAKgNQALgMgBgZQABgagLgNQgLgNgQgBQgNAAgLANg");
	this.shape_1186.setTransform(-731,-261.3);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAGgFQAGgEAIAAQALAAANAHIgIAWQgIgGgJAAQgHAAgGAGQgGAEgCAIQgEAMAAAOIAABGg");
	this.shape_1187.setTransform(-741.05,-259.05);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_1188.setTransform(-764.3,-261.15);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#3E5EAB").s().p("AgNAVQAIgCADgHQACgGABgLIgMAAIAAgaIAZAAIAAAaQAAAOgFAJQgFAJgKAEg");
	this.shape_1189.setTransform(-778.925,-251.6);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#3E5EAB").s().p("AgCBYQgIgEgCgHQgDgGAAgVIAAhMIgRAAIAAgSIARAAIAAghIAVgOIAAAvIAYAAIAAASIgYAAIAABOQABAKABACQABADADACQACACAFAAIALgBIADAUQgKACgIAAQgMAAgFgEg");
	this.shape_1190.setTransform(-785.9,-261.15);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_1191.setTransform(-796.95,-258.9);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#3E5EAB").s().p("AAcBdIgshFIgQAQIAAA1IgXAAIAAi5IAXAAIAABpIA1g2IAeAAIgzAxIA4BVg");
	this.shape_1192.setTransform(-809.775,-261.45);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAPABAMAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgYAAgOgMg");
	this.shape_1193.setTransform(-829.5,-258.9);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_1194.setTransform(-864.825,-259.05);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAIgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_1195.setTransform(-879.3,-258.9);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgDgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgVAAIAAhXQAAgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQALALgBAXIAABbg");
	this.shape_1196.setTransform(-926.15,-259.05);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_1197.setTransform(-944.275,-258.9);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#3E5EAB").s().p("Ag5BfIAAi6IAUAAIAAASQAIgKAJgFQAJgGAMAAQASAAANAJQANAJAHAQQAHARAAATQgBAVgGAPQgIARgPAJQgOAIgPAAQgKAAgJgFQgJgEgHgIIAABCgAgag+QgLAOAAAaQAAAZALAMQAKANAPAAQAOAAAMgNQALgNgBgaQAAgagKgNQgLgNgOAAQgOAAgMAOg");
	this.shape_1198.setTransform(-958.35,-256.475);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAAKAEQALAFAGAGQAEAGADAJQABAHAAAPIAAAdQAAAgACAJQABAIAEAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgCAEQgDAFgBAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1199.setTransform(-1015.1,-258.9);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_1200.setTransform(-1043.975,-258.9);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAFAHADANIgXAEQgBgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgPAAQgZAAgOgMg");
	this.shape_1201.setTransform(-1057.75,-258.9);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#3E5EAB").s().p("AgnBWQgPgLAAgWIAWADQACALAGAEQAJAHAOAAQAPAAAJgHQAJgGADgMQABgHAAgWQgPASgVAAQgcAAgPgUQgPgUAAgbQAAgUAHgQQAHgQANgJQANgJASAAQAXAAAPATIAAgQIAVAAIAABzQAAAggGANQgGANgOAIQgOAHgTAAQgZAAgOgKgAgYhAQgLANAAAYQAAAaALAMQAKAMAPAAQAQAAAKgMQALgLAAgaQAAgZgLgNQgLgMgPAAQgPAAgKAMg");
	this.shape_1202.setTransform(-1097.825,-256.325);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#3E5EAB").s().p("AAgBFIAAhRQAAgOgDgHQgCgHgHgEQgHgEgJAAQgOAAgKAJQgLAKAAAaIAABIIgXAAIAAiGIAVAAIAAATQAPgWAbAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABSg");
	this.shape_1203.setTransform(-1111.875,-259.05);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_1204.setTransform(-1126.375,-258.75);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_1205.setTransform(-1156.625,-258.9);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#3E5EAB").s().p("AgsA1QgRgTAAghQAAghARgTQASgSAbgBQAbAAARATQARATAAAgIAAAGIhkAAQACAWALAMQALAMAQAAQANAAAJgHQAIgGAGgPIAXADQgFAVgPALQgQAMgXAAQgdAAgRgSgAgYgoQgLALgBARIBKAAQgCgRgHgIQgLgNgRgBQgPAAgKALg");
	this.shape_1206.setTransform(-1201.375,-258.9);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgIgQAAgVQABgUAGgPQAHgRANgJQAOgJAQAAQAMABAJAFQAJAFAHAIIAAhCIAWAAIAAC4IgVAAIAAgRQgNAVgYAAQgQgBgNgIgAgYgOQgKAMAAAaQAAAaALANQALANAOAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgOAAgLANg");
	this.shape_1207.setTransform(-1216.25,-261.3);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgHgHQgIgIgOAAQgIAAgKAFQgIAFgEAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAPAAALAGQALAGAGAKQAEALAAASIAABWg");
	this.shape_1208.setTransform(-1250.5,-261.45);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgOAAQgIAAgJAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAQAAAKAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_1209.setTransform(-1272.15,-261.45);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAJAIQAIAHAOAAQAQAAAIgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABAMAEQANAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgQAAgGAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgZAAgOgMg");
	this.shape_1210.setTransform(-1285.95,-258.9);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#3E5EAB").s().p("AgeBBQgKgFgFgHQgFgHgCgKQgCgGAAgQIAAhSIAXAAIAABKQAAASACAGQACAJAHAFQAHAGAKgBQAJAAAJgFQAJgFAEgJQAEgJAAgRIAAhIIAXAAIAACGIgVAAIAAgUQgPAXgbAAQgLAAgLgEg");
	this.shape_1211.setTransform(-1299.675,-258.75);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#3E5EAB").s().p("AgjBFIAAiGIAUAAIAAAUQAIgOAHgFQAFgEAIAAQAMAAAMAHIgIAWQgJgGgIAAQgIAAgEAGQgHAEgCAIQgEAMAAAOIAABGg");
	this.shape_1212.setTransform(-1310.1,-259.05);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#3E5EAB").s().p("AhFBdIAAi5IBFAAQAVAAANAGQANAFAHAMQAHALAAANQAAANgGAKQgHALgNAGQARAFAJALQAJAMAAAQQAAANgFAMQgGAKgIAGQgIAHgMADQgMADgSAAgAgtBHIAuAAIARgBQAIgCAGgDQAFgDAEgHQAEgHAAgJQAAgKgGgIQgFgIgJgDQgKgDgRAAIgrAAgAgtgOIApAAQAPAAAHgCQAKgDAEgGQAFgHAAgJQAAgKgEgHQgFgHgIgCQgIgDgTAAIgmAAg");
	this.shape_1213.setTransform(-1323.875,-261.45);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIAAgQQABgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEABAGIABARIAAAdIAPAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIALgBQAEAAAFAEQADAEAAAGQABALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_1214.setTransform(-845.9,-304.025);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgJAAQgJAAgGgHQgFgGgBgNIAAi2QABgOAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAFgEAGAAQAIAAAFAFQAGAFAAAIQAAAJgSAQIgXATIAsBFIAHAMQACAEAAADQABAKgGAHQgGAFgJABQgHAAgFgFg");
	this.shape_1215.setTransform(-879.6,-304.3);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAFAFAEAJQAFALAEAIQAFAHAKAEQAJAGAPAAQATAAANgKQANgKAAgOQAAgLgGgIQgHgHgLgDQgMgEgRgEQgZgHgQgHQgRgHgJgNQgLgNABgVQgBgSALgPQAKgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQALAJAFAJQAEAKAAAIQAAAJgFAGQgHAHgJAAQgHAAgEgEQgEgEgFgJQgHgNgJgHQgIgHgTAAQgRgBgLAJQgLAHAAAMQAAAGADAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQALAIAGALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_1216.setTransform(-908.65,-304.3);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#3E5EAB").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_1217.setTransform(-937.875,-297.975);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_1218.setTransform(-957.1,-301.125);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#3E5EAB").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_1219.setTransform(-996.225,-297.975);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#3E5EAB").s().p("AhQBuQgGgIAAgOIAAivQAAgQAHgGQAHgHAPABIA7AAQAaAAAOADQAOAEALAKQAKAIAFANQAFAOAAAQQAAAjgVARQgWATgqgBIgqAAIAABBQAAAOgGAHQgHAIgKAAQgKgBgHgGgAgogLIAfAAQAQABALgEQALgEAGgHQAFgIAAgNQAAgPgIgJQgKgKgfAAIgfAAg");
	this.shape_1220.setTransform(-1082.225,-304.1);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#3E5EAB").s().p("AgoBoIADgSIArizQADgOAEgFQACgGAJAAQAJAAADAFQAFADAAAHQAAAEgEAOIgqCzIgEANQgCAGgDACQgEADgGABQgQAAAAgPg");
	this.shape_1221.setTransform(-1105.95,-304.3);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1222.setTransform(-1149.925,-301.15);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#3E5EAB").s().p("AAxBwQgGgGAAgMIAAgEQgIAKgIAGQgJAGgJADQgJADgMABQgPAAgOgHQgMgGgKgMQgKgNgEgQQgFgQgBgTQABgnATgWQAUgXAfAAQASABANAFQANAHALANIAAg/QAAgNAFgHQAGgGAKgBQAJAAAFAHQAGAGgBAMIAAC7QAAAMgFAHQgGAFgIABQgJAAgGgHgAgUgPQgKAGgEAMQgGAMAAARQABAQAFANQAGAMAIAGQAKAHAKAAQAMAAAJgHQAJgFAGgNQAFgMAAgRQAAgRgFgNQgGgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_1223.setTransform(-1169.9,-304.3);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#3E5EAB").s().p("AA4BwQgGgIAAgOIAAhNIhkAAIAABNQABAOgHAIQgGAGgKABQgLgBgGgGQgHgIAAgOIAAi0QAAgNAHgIQAFgGAMgBQAKABAHAGQAFAIAAANIAABDIBkAAIAAhDQAAgNAGgIQAHgGAKgBQAKABAHAGQAHAIAAANIAAC0QgBAOgGAIQgHAGgKABQgLgBgGgGg");
	this.shape_1224.setTransform(-1219.55,-304.3);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQABgVgHgKQgGgLgQAAQgLAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAGgHQAFgHAKAAQALAAAFAHQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAHAOQAFAHACAKQABAJAAAMIAABSQAAANgGAGQgFAHgLAAQgUAAgBgag");
	this.shape_1225.setTransform(-1249.4,-304.3);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFALAAQAKAAAKgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAGgGQAGgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_1226.setTransform(-1286.1,-301.125);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#3E5EAB").s().p("AhCByQgPAAgGgGQgHgHAAgPIAAirQAAgQAHgGQAGgHAPABIBJAAQARAAAMACQAMABAJAHQAIAEAHAHQAGAIADAJQADAJAAAKQAAAigiARQAtANAAApQAAAUgKAPQgJAPgRAHQgLAFgNACQgOACgSgBgAgwBPIAxAAQAvAAAAghQAAgSgMgHQgMgIgYAAIgwAAgAgwgUIArAAQAQAAAKgDQAJgDAFgKQAEgGAAgIQAAgSgMgFQgNgGgYABIgmAAg");
	this.shape_1227.setTransform(-1320.825,-304.3);

	this.instance_20 = new lib.Picture6();
	this.instance_20.setTransform(-529,67,0.9976,0.9976);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAIgEAIgDIAVgDQAbgDANgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAFAGQAGAGABAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAIAFQAGAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1228.setTransform(-1262.1,-196.8);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQAAgNgCgHQgDgGgFgEQgHgDgIAAQgNAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJABATIAABFIgYAAIAAiGIAVAAIAAATQAGgKALgGQAKgGAOAAQAPAAAKAGQAIAHAEAKQAQgXAaAAQATAAALAMQALALAAAXIAABbg");
	this.shape_1229.setTransform(-1321.95,-196.95);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgOAAQgIAAgJAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAYAAQAPAAAKAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_1230.setTransform(-151.1,-230.4);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQgBgVQABgUAGgPQAHgRANgJQAOgJAQAAQAMABAJAFQAKAFAFAIIAAhCIAXAAIAAC4IgVAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANAOAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgPAAgKANg");
	this.shape_1231.setTransform(-180.45,-230.25);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAJAIQAJAHAPAAQAPAAAIgGQAHgHAAgJQAAgHgGgFQgFgDgSgFQgYgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAFgEAKgDQAJgDAKAAQAQABALAEQAMAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgaAAgOgMg");
	this.shape_1232.setTransform(-208.25,-227.85);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAXgFQABAOAKAIQAIAHAOAAQARAAAHgGQAHgHABgJQgBgHgGgFQgFgDgSgFQgZgGgJgEQgKgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAPABAMAEQAMAFAGAIQAFAHADANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgHAGQgHAFAAAHQAAAEACAEQADAEAGACIATAFQAZAHAJAEQAKAEAGAIQAFAHAAAMQAAAMgGAJQgIAKgMAGQgMAGgRAAQgYAAgPgMg");
	this.shape_1233.setTransform(-254.9,-227.85);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgXAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_1234.setTransform(-286.55,-228);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgXgGgLgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAFAHADANIgWAEQgCgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgZAAgPgMg");
	this.shape_1235.setTransform(-353.5,-227.85);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAVAAIAAASQAIgKAJgFQAJgGANAAQARAAANAJQANAJAHAQQAGARAAATQABAVgIAPQgHARgOAJQgOAIgQAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgMAOAAAaQAAAZALAMQALANAOAAQAOAAALgNQALgNAAgaQABgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_1236.setTransform(-435.15,-225.425);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#3E5EAB").s().p("AglBKIAAARIgVAAIAAi4IAYAAIAABCQAOgTAWAAQAMAAALAGQALAEAHAKQAHAJAFANQADAMAAAOQABAjgSATQgRATgYAAQgXAAgOgVgAgZgNQgMAMAAAYQAAAYAHALQALASASAAQAOAAALgNQALgNAAgaQAAgagLgMQgKgNgOAAQgPABgKANg");
	this.shape_1237.setTransform(-531.35,-230.25);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgGgDgHAAQgPAAgJAKQgKAJAAAUIAABOIgWAAIAAhXQAAgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgWAAIAAiGIAUAAIAAATQAGgKALgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_1238.setTransform(-549.7,-228);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#3E5EAB").s().p("ABEBFIAAhUQAAgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgJAJAAAUIAABOIgXAAIAAhXQABgPgGgHQgFgIgNAAQgKAAgIAFQgIAFgEAKQgDAJgBATIAABFIgXAAIAAiGIAVAAIAAATQAHgKAKgGQALgGANAAQAPAAAJAGQAJAHAEAKQAQgXAZAAQAVAAALAMQAKALABAXIAABbg");
	this.shape_1239.setTransform(-683,-228);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#3E5EAB").s().p("AgdBWQgOgJgHgQQgHgQgBgVQABgUAGgPQAHgRANgJQAOgJAQAAQAMABAJAFQAKAFAFAIIAAhCIAXAAIAAC4IgVAAIAAgRQgNAVgYAAQgPgBgOgIgAgYgOQgKAMAAAaQAAAaALANQALANAOAAQAOAAALgNQALgMAAgZQAAgagLgNQgLgNgPgBQgPAAgKANg");
	this.shape_1240.setTransform(-743.85,-230.25);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#3E5EAB").s().p("AAgBdIAAhWQAAgQgIgHQgHgIgNAAQgKAAgIAFQgKAFgDAKQgEAIAAAPIAABKIgXAAIAAi5IAXAAIAABDQAQgTAXAAQAQAAAKAGQAMAGAEAKQAFALAAASIAABWg");
	this.shape_1241.setTransform(-805.95,-230.4);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#3E5EAB").s().p("AgxBcIgCgVQAHACAGAAQAIAAAEgDQAFgCADgFIAHgRIACgFIg0iHIAZAAIAcBPQAGAOADAQQAEgPAFgPIAdhPIAXAAIgzCJQgJAWgDAIQgGALgIAGQgIAFgLAAQgHAAgIgDg");
	this.shape_1242.setTransform(-838.375,-225.125);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#3E5EAB").s().p("AgTBfIAAh0IgUAAIAAgSIAUAAIAAgOQAAgOADgHQADgIAJgGQAHgGAPAAQAKAAAMADIgEAUIgNgCQgLAAgFAFQgDAEAAAMIAAANIAaAAIAAASIgaAAIAAB0g");
	this.shape_1243.setTransform(-853.75,-230.575);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#3E5EAB").s().p("Ag6BfIAAi6IAWAAIAAASQAHgKAJgFQAKgGAMAAQARAAANAJQANAJAHAQQAGARAAATQAAAVgHAPQgHARgPAJQgOAIgPAAQgLAAgJgFQgIgEgGgIIAABCgAgZg+QgLAOAAAaQgBAZALAMQAKANAQAAQAOAAAKgNQAMgNAAgaQAAgagLgNQgLgNgOAAQgOAAgLAOg");
	this.shape_1244.setTransform(-974.05,-225.425);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#3E5EAB").s().p("ABFBFIAAhUQgBgNgCgHQgCgGgGgEQgFgDgIAAQgOAAgKAKQgKAJAAAUIAABOIgVAAIAAhXQgBgPgFgHQgGgIgMAAQgKAAgIAFQgIAFgEAKQgEAJAAATIAABFIgWAAIAAiGIAUAAIAAATQAHgKAKgGQAKgGAOAAQAPAAAJAGQAJAHAEAKQAQgXAaAAQATAAAMAMQALALgBAXIAABbg");
	this.shape_1245.setTransform(-1157.9,-228);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAHgEQAHgEAJgDIAVgDQAagDANgFIABgGQAAgOgHgGQgIgIgRAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQAKAFAGAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgEgGgBgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgPACgFACQgHADgCAEQgEAFAAAGQABAKAGAFQAHAGANABQANAAAKgGQAKgGAFgKQADgIAAgPIAAgIQgLAFgYAEg");
	this.shape_1246.setTransform(-1189.45,-227.85);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQALAAAMAHIgHAWQgJgGgIAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_1247.setTransform(-1199.9,-228);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAHgEAIgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAEAGQAFAGADAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgBgKQgNAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgFACQgHADgDAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1248.setTransform(-1212.55,-227.85);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAFgIQAEgJAHgEQAHgEAJgDIAVgDQAagDAOgFIAAgGQAAgOgHgGQgJgIgQAAQgQAAgHAHQgIAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGARAAQARAAALAEQALAFAFAGQAEAGACAJQACAHAAAPIAAAdQAAAgACAJQAAAIAFAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgEAJQgOACgHACQgFADgEAEQgDAFAAAGQAAAKAHAFQAHAGANABQAMAAALgGQAKgGAFgKQADgIABgPIAAgIQgMAFgYAEg");
	this.shape_1249.setTransform(-1267.85,-227.85);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FF0000").s().p("AAZBdIAAhHQAAgVgCgFQgBgGgGgDQgEgDgJAAQgIAAgHADQgGAFgEAIQgDAJAAAQIAABEIgjAAIAAi5IAjAAIAABFQASgVAWAAQANAAAKAEQAKAFAEAHQAGAIABAIQACAJAAARIAABPg");
	this.shape_1250.setTransform(-187.55,-261.45);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FF0000").s().p("AAXBDIgXhVIgWBVIgiAAIgriGIAjAAIAZBYIAXhYIAhAAIAWBYIAahYIAjAAIgrCGg");
	this.shape_1251.setTransform(-205.6,-258.9);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FF0000").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1252.setTransform(-223.075,-256.175);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FF0000").s().p("AgRBdIAAi5IAjAAIAAC5g");
	this.shape_1253.setTransform(-233.75,-261.45);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FF0000").s().p("AgYBfIAAhqIgVAAIAAgcIAVAAIAAgKQgBgRAEgJQAEgIAKgFQAIgGAPAAQAPAAAPAFIgFAZQgIgCgJAAQgHAAgEAEQgDADAAAKIAAAKIAbAAIAAAcIgbAAIAABqg");
	this.shape_1254.setTransform(-241.2,-261.625);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FF0000").s().p("AgwBMQgRgTAAghQAAgiAQgSQARgRAYgBQAVABARASIAAhCIAkAAIAAC4IgiAAIAAgUQgHAMgMAGQgLAGgKAAQgYgBgQgSgAgUgIQgJAJABAUQAAAWAFAJQAJAPAPAAQAMAAAIgLQAKgLgBgUQAAgYgIgJQgJgKgMAAQgMAAgJAKg");
	this.shape_1255.setTransform(-347.1,-261.3);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgCgGQgDgGgFgEQgFgDgIAAQgHAAgIAEQgHAFgDAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQALAEAFAHQAFAHACAIQACAJAAAPIAABTg");
	this.shape_1256.setTransform(-378.85,-259.05);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FF0000").s().p("AgiA+QgRgIgJgRQgIgPAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQAUAVgBAdQABAfgUATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_1257.setTransform(-394.75,-258.9);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FF0000").s().p("AAaBFIAAhFQgBgVgCgGQgCgGgFgEQgFgDgIAAQgIAAgHAEQgIAFgCAJQgDAJAAAVIAAA9IgjAAIAAiGIAhAAIAAAUQARgXAaAAQAMAAAKAEQAJAEAGAHQAEAHACAIQACAJABAPIAABTg");
	this.shape_1258.setTransform(-417.85,-259.05);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FF0000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_1259.setTransform(-440.625,-256.475);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgCgGQgDgGgFgEQgFgDgIAAQgHAAgIAEQgHAFgDAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQALAEAFAHQAEAHADAIQACAJAAAPIAABTg");
	this.shape_1260.setTransform(-570.1,-259.05);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgDgGQgCgGgFgEQgFgDgIAAQgIAAgHAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQAKAEAGAHQAEAHACAIQADAJAAAPIAABTg");
	this.shape_1261.setTransform(-616.65,-259.05);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_1262.setTransform(-631.825,-258.9);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FF0000").s().p("AguBVQgOgMAAgSIAAgEIApAFQABAHAEACQAFAEAKAAQAOAAAHgEQAEgDADgGQABgEAAgMIAAgUQgQAWgXAAQgbAAgQgXQgNgSAAgaQAAgiARgSQAQgSAYAAQAYAAARAWIAAgTIAhAAIAAB4QAAAYgEAMQgEALgHAHQgHAHgMAEQgMADgSAAQghAAgPgLgAgUg6QgIAKAAAVQAAAVAIAJQAJAKALAAQANAAAJgKQAJgKAAgUQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_1263.setTransform(-647.375,-256.325);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgCgGQgDgGgFgEQgFgDgIAAQgHAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQAKAEAGAHQAEAHADAIQACAJAAAPIAABTg");
	this.shape_1264.setTransform(-662.9,-259.05);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FF0000").s().p("AgNBZQgKgGgJgMIAAAUIghAAIAAi4IAkAAIAABCQAQgSAWgBQAYABAQARQARASAAAhQAAAigRATQgQASgYABQgKAAgMgGgAgVgIQgJAJABAUQgBAVAHAKQAJAPAPAAQALAAAJgLQAIgKAAgVQAAgYgIgJQgJgKgMAAQgMAAgJAKg");
	this.shape_1265.setTransform(-694.4,-261.3);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FF0000").s().p("AgoA/QgLgGgFgKQgEgLAAgUIAAhUIAjAAIAAA+QAAAcACAGQACAHAFADQAGAEAIAAQAIAAAHgFQAHgFADgIQADgHAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_1266.setTransform(-710.675,-258.75);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FF0000").s().p("AAZBdIAAhHQAAgVgBgFQgCgGgGgDQgFgDgHAAQgJAAgGADQgIAFgCAIQgEAJAAAQIAABEIgkAAIAAi5IAkAAIAABFQARgVAXAAQANAAAJAEQALAFAEAHQAFAIADAIQABAJAAARIAABPg");
	this.shape_1267.setTransform(-726.5,-261.45);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FF0000").s().p("AguBVQgOgMAAgSIAAgEIApAFQABAHAEACQAFAEAKAAQAOAAAHgEQAEgDADgGQABgEAAgMIAAgUQgQAWgXAAQgbAAgQgXQgNgSAAgaQAAgiARgSQAQgSAYAAQAYAAARAWIAAgTIAhAAIAAB4QAAAYgEAMQgEALgHAHQgHAHgMAEQgMADgSAAQghAAgPgLgAgUg6QgIAKAAAVQAAAVAIAJQAJAKALAAQANAAAJgKQAJgKAAgUQAAgVgJgKQgIgKgOAAQgLAAgJAKg");
	this.shape_1268.setTransform(-758.975,-256.325);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FF0000").s().p("AAaBFIAAhFQAAgVgCgGQgDgGgFgEQgFgDgIAAQgHAAgIAEQgIAFgCAJQgDAJAAAVIAAA9IgkAAIAAiGIAiAAIAAAUQARgXAaAAQAMAAAJAEQAKAEAGAHQAEAHADAIQACAJAAAPIAABTg");
	this.shape_1269.setTransform(-774.5,-259.05);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FF0000").s().p("AgoA/QgLgGgFgKQgEgLAAgUIAAhUIAjAAIAAA+QAAAcACAGQACAHAFADQAGAEAIAAQAIAAAHgFQAHgFADgIQADgHAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_1270.setTransform(-790.475,-258.75);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FF0000").s().p("AgNBZQgKgGgJgMIAAAUIghAAIAAi4IAkAAIAABCQARgSAVgBQAYABAQARQARASAAAhQAAAigRATQgQASgYABQgKAAgMgGgAgVgIQgJAJABAUQgBAVAHAKQAJAPAPAAQALAAAJgLQAIgKAAgVQAAgYgIgJQgJgKgMAAQgMAAgJAKg");
	this.shape_1271.setTransform(-806,-261.3);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_1272.setTransform(-844.575,-258.9);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FF0000").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1273.setTransform(-859.175,-256.175);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FF0000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_1274.setTransform(-904.225,-256.475);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FF0000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_1275.setTransform(-951.825,-258.9);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FF0000").s().p("AgwBMQgRgTAAghQAAgiARgSQAPgRAZgBQAVABARASIAAhCIAkAAIAAC4IghAAIAAgUQgIAMgLAGQgMAGgLAAQgXgBgQgSgAgUgIQgIAJAAAUQgBAWAHAJQAIAPAOAAQANAAAJgLQAIgLABgUQAAgYgJgJQgJgKgNAAQgMAAgIAKg");
	this.shape_1276.setTransform(-967.35,-261.3);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FF0000").s().p("AgpA7QgQgLgFgTIAkgGQACALAHAFQAHAGALAAQAOAAAIgGQAEgDAAgGQAAgEgDgDQgCgCgJgCQgqgKgMgIQgQgJAAgUQAAgRAOgNQAOgMAdAAQAaAAAOAJQANAKAGARIgiAHQgDgIgGgFQgFgDgLAAQgNAAgHADQgEADAAAEQAAAEAEADQAEAEAcAGQAcAHAMAJQALAIAAASQAAASgPANQgQAOgfAAQgaAAgQgMg");
	this.shape_1277.setTransform(-998.75,-258.9);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FF0000").s().p("AgoA/QgLgGgFgKQgEgLAAgUIAAhUIAjAAIAAA+QAAAcACAGQACAHAFADQAGAEAIAAQAIAAAHgFQAHgFADgIQADgHAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_1278.setTransform(-1013.625,-258.75);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FF0000").s().p("AgoA/QgLgGgFgKQgEgLAAgUIAAhUIAjAAIAAA+QAAAcACAGQACAHAFADQAGAEAIAAQAIAAAHgFQAHgFADgIQADgHAAgcIAAg5IAjAAIAACGIghAAIAAgUQgHALgMAGQgLAGgOAAQgNAAgLgGg");
	this.shape_1279.setTransform(-1038.175,-258.75);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FF0000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_1280.setTransform(-1091.225,-256.475);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#3E5EAB").s().p("AgxA8QgMgLAAgRQAAgKAEgIQAFgJAIgEQAGgEAJgDIAVgDQAagDANgFIABgGQAAgOgGgGQgKgIgQAAQgQAAgIAHQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgGAQAAQASAAAKAEQAMAFAFAGQAFAGACAJQABAHAAAPIAAAdQAAAgABAJQACAIAEAHIgYAAQgDgGgCgKQgMAKgMAFQgLAFgNAAQgWAAgMgLgAgFAJQgOACgGACQgGADgDAEQgCAFAAAGQAAAKAGAFQAHAGAOABQAMAAAKgGQAKgGAFgKQAEgIgBgPIAAgIQgMAFgYAEg");
	this.shape_1281.setTransform(-1128.85,-258.9);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#3E5EAB").s().p("AgmA7QgNgKgEgVIAWgFQADAOAIAIQAJAHAPAAQAPAAAIgGQAIgHgBgJQABgHgHgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDAKAAQAQABAMAEQALAFAGAIQAGAHACANIgXAEQgBgLgHgFQgHgHgNAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIATAFQAYAHAKAEQAJAEAFAIQAGAHAAAMQAAAMgHAJQgGAKgNAGQgMAGgQAAQgZAAgPgMg");
	this.shape_1282.setTransform(-1200.4,-258.9);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#3E5EAB").s().p("AglA7QgOgKgEgVIAWgFQADAOAIAIQAJAHAOAAQARAAAHgGQAHgHAAgJQAAgHgGgFQgFgDgTgFQgYgGgKgEQgJgEgFgJQgFgHAAgLQAAgIAEgIQAEgIAHgFQAGgEAJgDQAJgDALAAQAOABANAEQAMAFAFAIQAGAHACANIgXAEQgBgLgHgFQgIgHgMAAQgPAAgIAGQgGAFAAAHQAAAEADAEQACAEAHACIASAFQAZAHAKAEQAJAEAGAIQAFAHAAAMQAAAMgHAJQgGAKgNAGQgNAGgQAAQgZAAgNgMg");
	this.shape_1283.setTransform(-1235.4,-258.9);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#3E5EAB").s().p("AgkBFIAAiGIAVAAIAAAUQAIgOAGgFQAGgEAIAAQAMAAALAHIgHAWQgIgGgJAAQgHAAgGAGQgFAEgDAIQgEAMAAAOIAABGg");
	this.shape_1284.setTransform(-1295.65,-259.05);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1285.setTransform(-783.4,-304.025);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1286.setTransform(-827.75,-304.025);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAEALAGAIQAFAHAIAEQAKAGAPAAQATAAAOgKQAMgKAAgOQAAgLgHgIQgGgHgMgDQgKgEgSgEQgZgHgQgHQgRgHgJgNQgKgNAAgVQAAgSAKgPQAKgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQAKAJAGAJQAEAKAAAIQAAAJgFAGQgGAHgJAAQgJAAgDgEQgFgEgEgJQgGgNgJgHQgJgHgSAAQgTgBgKAJQgMAHAAAMQAAAGAEAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_1287.setTransform(-844.5,-304.3);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1288.setTransform(-892.95,-301.125);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#3E5EAB").s().p("AhOBvQgFgHAAgOIAAi3QAAgMAGgGQAFgGAKAAQAIAAAGAGQAGAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAJATAAAbQAAAUgFAPQgGARgJALQgKALgOAGQgNAGgPAAQgRAAgMgHQgNgIgLgOIAABAQAAAcgUAAQgNAAgDgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAJgGQAKgGAFgLQAGgNgBgRQAAgRgEgMQgGgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_1289.setTransform(-929.5,-297.975);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#3E5EAB").s().p("AA8ByQgHgEgEgGIgHgNIg3hVIgmAlIAAAvQABAOgHAIQgHAGgJABQgHgBgFgDQgGgDgDgFQgCgFAAgGIgBgQIAAiqQAAgNAHgIQAFgGAMgBQAKABAHAGQAFAIAAANIAABRIBbhfQAGgHAFgDQAEgEAIAAQAKAAAHAHQAFAFAAAIQABALgLAKIg5A2IBBBbQAIAKADAIQADAGABAHQAAAIgHAGQgFAGgLAAQgKgBgFgEg");
	this.shape_1290.setTransform(-970.7,-304.3);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#3E5EAB").s().p("AgoBoIADgSIArizQAEgOADgFQACgGAJAAQAJAAADAFQAFADAAAHQAAAEgDAOIgrCzIgEANQgBAGgEACQgDADgHABQgQAAAAgPg");
	this.shape_1291.setTransform(-995.5,-304.3);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#3E5EAB").s().p("AAhBdIAAhIQABgVgHgKQgFgLgRAAQgLAAgJAHQgKAGgEAKQgDAKAAAYIAAA5QAAAMgGAHQgGAHgKAAQgVAAAAgaIAAi5QAAgMAGgHQAFgHAKAAQAKAAAGAHQAGAHAAAMIAABAQAIgKAHgFQAJgFAIgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHACAKQABAJAAAMIAABSQAAANgGAGQgFAHgLAAQgUAAgBgag");
	this.shape_1292.setTransform(-1017.65,-304.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQABgZAJgUQALgVATgKQATgMAaAAQARAAANAFQAOAFAKAIQAJAHAFAJQAGAJgBAHQABAIgHAFQgFAGgIAAQgFAAgEgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAJAAQAMAAAKgGQAJgGAHgMQAEgHAEgEQAFgEAGAAQAIAAAGAGQAEAGAAAGQABAIgFAJQgFAJgKAJQgKAIgPAFQgOAFgTAAQgnAAgVgXg");
	this.shape_1293.setTransform(-1048.25,-301.175);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgJADgMAAQgQAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQADAKAGAGQAHAFALAAQAJAAAKgGQAKgGADgLQAFgJAAgdIAAg0QAAgNAFgGQAGgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgFgHg");
	this.shape_1294.setTransform(-1067.35,-301.125);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#3E5EAB").s().p("AgYBzQgPgEgMgHQgMgHgKgMQgJgKgGgOQgGgNgEgQQgDgOAAgSQAAgbAIgVQAIgWAPgPQAPgQAUgJQAVgHAVgBQAcABAVAKQAXAMALAQQALAQAAAPQABAIgGAGQgFAGgJAAQgIAAgFgEQgFgEgFgLQgJgRgMgIQgNgJgRAAQgcABgRAVQgRAWAAAnQAAAaAIATQAHARANAJQAPAJARgBQAUAAAOgKQANgJAIgUQADgJAEgFQAEgGAKAAQAIAAAGAGQAGAFAAAJQAAALgFANQgGAMgLANQgMAMgRAIQgTAIgYAAQgRAAgPgEg");
	this.shape_1295.setTransform(-1097.6,-304.3);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_1296.setTransform(-1147.05,-301.125);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_1297.setTransform(-1175.05,-301.125);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgGAHgJAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_1298.setTransform(-1194.4,-301.125);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAJAAAGAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFAMAAQAKAAAJgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAHgGQAFgHAJAAQAKAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_1299.setTransform(-1213.75,-301.125);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#3E5EAB").s().p("AA8BxQgGgEgDgGIgLgQIgSgfQgLgRgHgJQgHgJgIgDQgIgEgMAAIgRAAIAABKQAAAOgHAIQgFAGgLABQgLAAgGgIQgGgHAAgOIAAivQgBgPAIgHQAGgHAPABIBKAAQAQAAALABQALABAKAEQAKAFAJAIQAHAJAFALQAFALAAANQAAAZgPAPQgPAPgdAGQANAHALANQALANAIAOQAKAOAEAMQAGAMgBAEQAAAEgCAFQgEAEgEADQgGADgGAAQgIAAgFgEgAgwgRIAqAAQAPgBAMgDQALgCAHgIQAFgGAAgNQAAgJgEgIQgGgGgIgEQgIgDgXAAIgrAAg");
	this.shape_1300.setTransform(-1234.45,-304.1);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#3E5EAB").s().p("AgXATQgMAAgGgFQgFgGgBgIQABgHAFgFQAFgGANAAIAvAAQAMAAAGAGQAFAFAAAHQAAAIgFAGQgFAFgNAAg");
	this.shape_1301.setTransform(-1251.75,-301.175);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#3E5EAB").s().p("AgNBTQgGgFgCgEIgJgUIgphjIgDgIIgCgIIgBgGQAAgFADgEQACgEAFgDQAFgDAFAAQALAAAEAGQAEAGAEAPIAiBgIAlhkQAFgNAEgFQAEgFAJAAQAIAAAFAGQAGAFAAAHIgBAHIgCAHIgDAHIgpBlIgFALQgCAHgEAFQgDAEgFADQgFADgHAAQgIAAgFgEg");
	this.shape_1302.setTransform(-1298.775,-301.125);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#3E5EAB").s().p("AgvBuQgVgJgPgPQgOgRgHgVQgHgXAAgZQAAgaAHgWQAIgWAOgPQAPgQAUgIQAVgJAaAAQAjAAAZAPQAaAOANAbQANAbAAAjQAAAagHAWQgHAWgPAQQgOAPgVAJQgVAJgbAAQgaAAgVgJgAgahLQgLAFgJAKQgIAKgFAPQgFAQAAATQAAATAFAPQAFAQAJALQAIAKAMAGQAMAEANAAQARAAAPgJQAPgIAJgTQAJgSAAgbQAAgZgIgSQgIgSgPgKQgPgKgTAAQgOABgMAFg");
	this.shape_1303.setTransform(-1320.125,-304.3);

	this.instance_21 = new lib.Bitmap23();
	this.instance_21.setTransform(-822,-238,0.9965,0.9965);

	this.instance_22 = new lib.Bitmap22();
	this.instance_22.setTransform(-754.4,-168,1.852,1.852,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730,p:{x:-1198.725}},{t:this.shape_729,p:{x:-1185.675}},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726,p:{x:-1121.15}},{t:this.shape_725,p:{x:-1106.325}},{t:this.shape_724,p:{x:-1088.625}},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721,p:{x:-1032.475}},{t:this.shape_720,p:{x:-1014.925}},{t:this.shape_719},{t:this.shape_718,p:{x:-988.075}},{t:this.shape_717,p:{x:-970.575}}]},12).to({state:[{t:this.instance_15},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730,p:{x:-1198.725}},{t:this.shape_729,p:{x:-1185.675}},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726,p:{x:-1121.15}},{t:this.shape_725,p:{x:-1106.325}},{t:this.shape_724,p:{x:-1088.625}},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721,p:{x:-1032.475}},{t:this.shape_720,p:{x:-1014.925}},{t:this.shape_719},{t:this.shape_718,p:{x:-988.075}},{t:this.shape_717,p:{x:-970.575}}]},1).to({state:[{t:this.shape_983},{t:this.instance_17},{t:this.instance_16},{t:this.shape_982},{t:this.shape_981,p:{x:-785.325,y:-46.625}},{t:this.shape_980},{t:this.shape_979,p:{x:-764.125,y:-46.625}},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976,p:{x:-735.075,y:-46.625}},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972,p:{x:-688.075,y:-46.625}},{t:this.shape_971},{t:this.shape_970,p:{x:-663.525,y:-46.625}},{t:this.shape_969,p:{x:-653.65,y:-46.625}},{t:this.shape_968,p:{x:-644.925,y:-46.625}},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965,p:{x:-603.775,y:-46.625}},{t:this.shape_964},{t:this.shape_963,p:{x:-581.825,y:-46.625}},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956,p:{x:-1253.325,y:-96.675}},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951,p:{x:-899.075,y:-101.675}},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942,p:{x:-1046.3,y:-101.675}},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938,p:{x:-1303.925}},{t:this.shape_937,p:{x:-1290.125}},{t:this.shape_936,p:{x:-1281.475}},{t:this.shape_935},{t:this.shape_934},{t:this.shape_725,p:{x:-1215.775}},{t:this.shape_729,p:{x:-1201.775}},{t:this.shape_933,p:{x:-1193.125}},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929,p:{x:-1106.575}},{t:this.shape_928},{t:this.shape_927},{t:this.shape_717,p:{x:-1045.425}},{t:this.shape_926,p:{x:-1029.975}},{t:this.shape_925},{t:this.shape_924},{t:this.shape_718,p:{x:-956.925}},{t:this.shape_923},{t:this.shape_721,p:{x:-917.975}},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920,p:{x:-1314.025}},{t:this.shape_919,p:{x:-1303.925}},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914,p:{x:-1237.875}},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911,p:{x:-1203.625}},{t:this.shape_910},{t:this.shape_909,p:{x:-1179.125,y:-258.75}},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905,p:{x:-1120.35,y:-258.9}},{t:this.shape_904,p:{x:-1107.7,y:-259.05}},{t:this.shape_903,p:{x:-1101.525}},{t:this.shape_902},{t:this.shape_901,p:{x:-1077.425}},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898,p:{x:-1026.875}},{t:this.shape_897,p:{x:-1012.425,y:-259.05}},{t:this.shape_896,p:{x:-998.375}},{t:this.shape_895},{t:this.shape_894,p:{x:-969.075,y:-259.05}},{t:this.shape_893},{t:this.shape_892,p:{x:-939.225}},{t:this.shape_891,p:{x:-921.1,y:-259.05}},{t:this.shape_890},{t:this.shape_889,p:{x:-888.7,y:-258.9}},{t:this.shape_888,p:{x:-874.625}},{t:this.shape_887,p:{x:-859.8,y:-258.9}},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884,p:{x:-808.225,y:-259.05}},{t:this.shape_883},{t:this.shape_882,p:{x:-771.125,y:-258.9}},{t:this.shape_881,p:{x:-758.5,y:-259.05}},{t:this.shape_880},{t:this.shape_879,p:{x:-740.875,y:-258.75}},{t:this.shape_878,p:{x:-726.375,y:-259.05}},{t:this.shape_877,p:{x:-712.325}},{t:this.shape_876},{t:this.shape_875,p:{x:-688.775}},{t:this.shape_874,p:{x:-670.525,y:-258.75}},{t:this.shape_873,p:{x:-656.025,y:-259.05}},{t:this.shape_872,p:{x:-645,y:-261.15}},{t:this.shape_871,p:{x:-634.425,y:-258.75}},{t:this.shape_870,p:{x:-619.775,y:-261.45}},{t:this.shape_869},{t:this.shape_868,p:{x:-575.6723}},{t:this.shape_867,p:{x:-556.825}},{t:this.shape_866},{t:this.shape_865,p:{x:-522.075}},{t:this.shape_864,p:{x:-506.9}},{t:this.shape_863,p:{x:-491.375}},{t:this.shape_862,p:{x:-475.125}},{t:this.shape_861,p:{x:-465}},{t:this.shape_860,p:{x:-457.075}},{t:this.shape_859,p:{x:-444.825}},{t:this.shape_858,p:{x:-431.075}},{t:this.shape_857,p:{x:-415.9}},{t:this.shape_856,p:{x:-388.275}},{t:this.shape_855,p:{x:-369.5723}},{t:this.shape_854},{t:this.shape_853,p:{x:-339.075}},{t:this.shape_852},{t:this.shape_851,p:{x:-296.275}},{t:this.shape_850,p:{x:-277.425}},{t:this.shape_849,p:{x:-262.625}},{t:this.shape_848},{t:this.shape_847,p:{x:-231.3223}},{t:this.shape_846,p:{x:-219.625}},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843,p:{x:-181.175}},{t:this.shape_842,p:{x:-171.075,y:-258.9}},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838,p:{x:-1312.625}},{t:this.shape_837,p:{x:-1302.475}},{t:this.shape_836},{t:this.shape_835,p:{x:-1277.95}},{t:this.shape_834,p:{x:-1267.375}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830,p:{x:-1207.8,y:-230.25}},{t:this.shape_829,p:{x:-1193.775,y:-227.7}},{t:this.shape_828,p:{x:-1179.275,y:-228}},{t:this.shape_827,p:{x:-1165.225,y:-225.275}},{t:this.shape_826,p:{x:-1150.225,y:-230.4}},{t:this.shape_825,p:{x:-1137.4,y:-227.85}},{t:this.shape_824,p:{x:-1122.925,y:-228}},{t:this.shape_823},{t:this.shape_822,p:{x:-1086.425,y:-227.85}},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819,p:{x:-1046.35,y:-228}},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816,p:{x:-999.375}},{t:this.shape_815,p:{x:-986.75}},{t:this.shape_814,p:{x:-980.575}},{t:this.shape_813},{t:this.shape_812,p:{x:-946.975}},{t:this.shape_811,p:{x:-932.525,y:-228}},{t:this.shape_810,p:{x:-918.475,y:-225.275}},{t:this.shape_809},{t:this.shape_808,p:{x:-889.175,y:-228}},{t:this.shape_807},{t:this.shape_806,p:{x:-853.05,y:-228}},{t:this.shape_805,p:{x:-838.9}},{t:this.shape_804,p:{x:-820.95}},{t:this.shape_803,p:{x:-809.9,y:-230.1}},{t:this.shape_802,p:{x:-799.325,y:-227.7}},{t:this.shape_801,p:{x:-786.65}},{t:this.shape_800,p:{x:-776.175,y:-227.85}},{t:this.shape_799,p:{x:-752.975}},{t:this.shape_798,p:{x:-739.675,y:-227.85}},{t:this.shape_797,p:{x:-729.525}},{t:this.shape_796,p:{x:-723.8,y:-230.4}},{t:this.shape_795,p:{x:-717.275,y:-220.55}},{t:this.shape_794},{t:this.shape_793,p:{x:-683.325,y:-225.275}},{t:this.shape_792,p:{x:-668.5,y:-227.85}},{t:this.shape_791,p:{x:-655.85,y:-228}},{t:this.shape_790},{t:this.shape_789,p:{x:-623.7,y:-228}},{t:this.shape_788,p:{x:-613.275,y:-227.7}},{t:this.shape_787,p:{x:-599.55,y:-227.85}},{t:this.shape_786,p:{x:-577.325,y:-225.125}},{t:this.shape_785},{t:this.shape_784,p:{x:-549.275,y:-228}},{t:this.shape_783,p:{x:-535.225,y:-225.275}},{t:this.shape_782},{t:this.shape_781,p:{x:-489.675,y:-227.85}},{t:this.shape_780,p:{x:-479.6}},{t:this.shape_779,p:{x:-469.425,y:-227.85}},{t:this.shape_778,p:{x:-452.825}},{t:this.shape_777,p:{x:-436.2,y:-227.85}},{t:this.shape_776,p:{x:-425.15}},{t:this.shape_775,p:{x:-418.825}},{t:this.shape_774},{t:this.shape_773,p:{x:-396.775,y:-230.4}},{t:this.shape_772,p:{x:-386.675,y:-227.85}},{t:this.shape_771,p:{x:-376.6}},{t:this.shape_770},{t:this.shape_769,p:{x:-343.225}},{t:this.shape_768,p:{x:-329.925}},{t:this.shape_767,p:{x:-319.775}},{t:this.shape_766,p:{x:-314.05}},{t:this.shape_765},{t:this.shape_764,p:{x:-289.075,y:-227.7}},{t:this.shape_763,p:{x:-274.975,y:-225.275}},{t:this.shape_762},{t:this.shape_761,p:{x:-232.95,y:-228}},{t:this.shape_760,p:{x:-214.975,y:-227.85}},{t:this.shape_759,p:{x:-200.525,y:-228}},{t:this.shape_758,p:{x:-186.475,y:-225.275}},{t:this.shape_757,p:{x:-171.65,y:-227.85}},{t:this.shape_756,p:{x:-161.55,y:-230.4}},{t:this.shape_755,p:{x:-155.675,y:-230.4}},{t:this.shape_754,p:{x:-147.4,y:-228}},{t:this.shape_753,p:{x:-1325.475,y:-199.35}},{t:this.shape_752,p:{x:-1312.625,y:-196.8}},{t:this.shape_751},{t:this.shape_750,p:{x:-1278.35}},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747,p:{x:-1235.2,y:-199.05}},{t:this.shape_746,p:{x:-1224.625,y:-196.65}},{t:this.shape_745},{t:this.shape_744,p:{x:-1201.475,y:-196.8}},{t:this.shape_743,p:{x:-1180.125,y:-196.8}},{t:this.shape_742,p:{x:-1166.825,y:-196.8}},{t:this.shape_741,p:{x:-1156.675,y:-199.35}},{t:this.shape_740,p:{x:-1150.95,y:-199.35}},{t:this.shape_739}]},1).to({state:[{t:this.shape_1068},{t:this.shape_720,p:{x:-1301.775}},{t:this.shape_929,p:{x:-1281.625}},{t:this.shape_721,p:{x:-1258.025}},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_717,p:{x:-1209.775}},{t:this.shape_718,p:{x:-1194.275}},{t:this.instance_18},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_970,p:{x:-1135.225,y:-101.475}},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_942,p:{x:-825.35,y:-101.475}},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_968,p:{x:-787.375,y:-101.475}},{t:this.shape_1054},{t:this.shape_963,p:{x:-768.825,y:-101.475}},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_979,p:{x:-719.225,y:-101.475}},{t:this.shape_956,p:{x:-705.925,y:-101.475}},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_981,p:{x:-670.075,y:-101.475}},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_972,p:{x:-347.575,y:4.725}},{t:this.shape_951,p:{x:-334.275,y:4.725}},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_969,p:{x:-307.15,y:4.725}},{t:this.shape_965,p:{x:-298.375,y:4.725}},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_881,p:{x:-1310.1,y:-259.05}},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_874,p:{x:-1256.375,y:-258.75}},{t:this.shape_1031,p:{x:-1243.7,y:-259.05}},{t:this.shape_800,p:{x:-1233.225,y:-258.9}},{t:this.shape_1030,p:{x:-1211.2}},{t:this.shape_781,p:{x:-1197.125,y:-258.9}},{t:this.shape_819,p:{x:-1184.5,y:-259.05}},{t:this.shape_1029,p:{x:-1177}},{t:this.shape_871,p:{x:-1166.875,y:-258.75}},{t:this.shape_828,p:{x:-1152.375,y:-259.05}},{t:this.shape_783,p:{x:-1138.325,y:-256.325}},{t:this.shape_1028,p:{x:-1124.25}},{t:this.shape_773,p:{x:-1114.775,y:-261.45}},{t:this.shape_829,p:{x:-1097.525,y:-258.75}},{t:this.shape_824,p:{x:-1083.025,y:-259.05}},{t:this.shape_1027},{t:this.shape_802,p:{x:-1061.425,y:-258.75}},{t:this.shape_1026,p:{x:-1046.775,y:-261.45}},{t:this.shape_867,p:{x:-1022.375}},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023,p:{x:-978.325}},{t:this.shape_1022},{t:this.shape_858,p:{x:-947.175}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019,p:{x:-894.45}},{t:this.shape_1018,p:{x:-879.4223}},{t:this.shape_1017},{t:this.shape_863,p:{x:-854.375}},{t:this.shape_1016},{t:this.shape_1015,p:{x:-828.05}},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_846,p:{x:-798.475}},{t:this.shape_1012,p:{x:-788.125}},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_856,p:{x:-743.725}},{t:this.shape_1009,p:{x:-725.0223}},{t:this.shape_1008,p:{x:-709.7}},{t:this.shape_1007},{t:this.shape_853,p:{x:-687.325}},{t:this.shape_1006},{t:this.shape_1005,p:{x:-660.6}},{t:this.shape_868,p:{x:-642.7223}},{t:this.shape_857,p:{x:-627.4}},{t:this.shape_855,p:{x:-612.3723}},{t:this.shape_1004,p:{x:-598.975}},{t:this.shape_849,p:{x:-587.325}},{t:this.shape_1003,p:{x:-575.4}},{t:this.shape_851,p:{x:-553.125}},{t:this.shape_847,p:{x:-534.4223}},{t:this.shape_862,p:{x:-519.125}},{t:this.shape_850,p:{x:-505.375}},{t:this.shape_1002,p:{x:-490.2}},{t:this.shape_861,p:{x:-478.65}},{t:this.shape_859,p:{x:-467.125}},{t:this.shape_795,p:{x:-457.125,y:-251.6}},{t:this.shape_1001,p:{x:-439.5,y:-261.3}},{t:this.shape_1000},{t:this.shape_756,p:{x:-414.55,y:-261.45}},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_779,p:{x:-346.625,y:-258.9}},{t:this.shape_811,p:{x:-332.175,y:-259.05}},{t:this.shape_996},{t:this.shape_788,p:{x:-310.575,y:-258.75}},{t:this.shape_995,p:{x:-295.925,y:-261.45}},{t:this.shape_763,p:{x:-276.275,y:-256.325}},{t:this.shape_772,p:{x:-261.425,y:-258.9}},{t:this.shape_994},{t:this.shape_887,p:{x:-238.35,y:-258.9}},{t:this.shape_870,p:{x:-223.725,y:-261.45}},{t:this.shape_993},{t:this.shape_764,p:{x:-189.275,y:-258.75}},{t:this.shape_992},{t:this.shape_757,p:{x:-167.6,y:-258.9}},{t:this.shape_754,p:{x:-154.95,y:-259.05}},{t:this.shape_991},{t:this.shape_767,p:{x:-1315.475}},{t:this.shape_990,p:{x:-1308.8}},{t:this.shape_760,p:{x:-1298.175,y:-227.85}},{t:this.shape_989},{t:this.shape_746,p:{x:-1275.125,y:-227.7}},{t:this.shape_988},{t:this.shape_826,p:{x:-1247.475,y:-230.4}},{t:this.shape_987},{t:this.shape_808,p:{x:-1220.175,y:-228}},{t:this.shape_753,p:{x:-1198.375,y:-230.4}},{t:this.shape_752,p:{x:-1185.525,y:-227.85}},{t:this.shape_986},{t:this.shape_755,p:{x:-1153.725,y:-230.4}},{t:this.shape_784,p:{x:-1143.625,y:-228}},{t:this.shape_741,p:{x:-1133.475,y:-230.4}},{t:this.shape_742,p:{x:-1123.375,y:-227.85}},{t:this.shape_759,p:{x:-1108.925,y:-228}},{t:this.shape_758,p:{x:-1087.675,y:-225.275}},{t:this.shape_744,p:{x:-1072.825,y:-227.85}},{t:this.shape_985},{t:this.shape_984}]},1).to({state:[{t:this.shape_1227},{t:this.shape_720,p:{x:-1301.775}},{t:this.shape_1226},{t:this.shape_730,p:{x:-1267.825}},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_725,p:{x:-1197.775}},{t:this.shape_933,p:{x:-1183.775}},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_717,p:{x:-1132.425}},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_938,p:{x:-1062.575}},{t:this.shape_929,p:{x:-1038.925}},{t:this.shape_718,p:{x:-1015.275}},{t:this.shape_1219,p:{x:-996.225}},{t:this.shape_926,p:{x:-976.325}},{t:this.shape_1218},{t:this.shape_1217,p:{x:-937.875}},{t:this.shape_1216},{t:this.shape_729,p:{x:-893.775}},{t:this.shape_1215},{t:this.shape_721,p:{x:-861.625}},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_798,p:{x:-1236.075,y:-258.9}},{t:this.shape_796,p:{x:-1226,y:-261.45}},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_806,p:{x:-1188.75,y:-259.05}},{t:this.shape_1030,p:{x:-1170.7}},{t:this.shape_1205},{t:this.shape_819,p:{x:-1144,y:-259.05}},{t:this.shape_1029,p:{x:-1136.5}},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1028,p:{x:-1083.75}},{t:this.shape_920,p:{x:-1074.275}},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_830,p:{x:-1029.15,y:-261.3}},{t:this.shape_1199},{t:this.shape_896,p:{x:-1001.025}},{t:this.shape_792,p:{x:-986.2,y:-258.9}},{t:this.shape_914,p:{x:-976.025}},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_919,p:{x:-908.175}},{t:this.shape_888,p:{x:-894.125}},{t:this.shape_1195,p:{x:-879.3,y:-258.9}},{t:this.shape_1194},{t:this.shape_877,p:{x:-850.775}},{t:this.shape_1193},{t:this.shape_911,p:{x:-820.025}},{t:this.shape_1192},{t:this.shape_1191,p:{x:-796.95,y:-258.9}},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_901,p:{x:-753.675}},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_903,p:{x:-720.425}},{t:this.shape_1185},{t:this.shape_875,p:{x:-705.975}},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179,p:{x:-610.675}},{t:this.shape_827,p:{x:-596.625,y:-256.325}},{t:this.shape_1178},{t:this.shape_898,p:{x:-560.125}},{t:this.shape_1177},{t:this.shape_892,p:{x:-524.025}},{t:this.shape_810,p:{x:-509.975,y:-256.325}},{t:this.shape_1176},{t:this.shape_1175,p:{x:-480.675,y:-259.05}},{t:this.shape_793,p:{x:-466.625,y:-256.325}},{t:this.shape_1174},{t:this.shape_843,p:{x:-435.875}},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_803,p:{x:-401.75,y:-261.15}},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_882,p:{x:-1171.075,y:-227.85}},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_897,p:{x:-1126.325,y:-228}},{t:this.shape_783,p:{x:-1112.275,y:-225.275}},{t:this.shape_1154},{t:this.shape_837,p:{x:-1088.725}},{t:this.shape_909,p:{x:-1071.475,y:-227.7}},{t:this.shape_894,p:{x:-1056.975,y:-228}},{t:this.shape_1153},{t:this.shape_879,p:{x:-1035.375,y:-227.7}},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_842,p:{x:-979.025,y:-227.85}},{t:this.shape_884,p:{x:-964.575,y:-228}},{t:this.shape_822,p:{x:-950.125,y:-227.85}},{t:this.shape_1150},{t:this.shape_874,p:{x:-927.075,y:-227.7}},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_878,p:{x:-872.125,y:-228}},{t:this.shape_1146},{t:this.shape_1145,p:{x:-837.85}},{t:this.shape_871,p:{x:-827.425,y:-227.7}},{t:this.shape_1144},{t:this.shape_771,p:{x:-797.1}},{t:this.shape_834,p:{x:-791.225}},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_814,p:{x:-756.575}},{t:this.shape_1026,p:{x:-746.325,y:-230.4}},{t:this.shape_1140},{t:this.shape_889,p:{x:-711.85,y:-227.85}},{t:this.shape_815,p:{x:-699.2}},{t:this.shape_797,p:{x:-693.025}},{t:this.shape_990,p:{x:-679.15}},{t:this.shape_816,p:{x:-668.525}},{t:this.shape_904,p:{x:-655.9,y:-228}},{t:this.shape_1139},{t:this.shape_775,p:{x:-628.075}},{t:this.shape_873,p:{x:-617.975,y:-228}},{t:this.shape_1138},{t:this.shape_780,p:{x:-593.45}},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_804,p:{x:-528.45}},{t:this.shape_828,p:{x:-513.975,y:-228}},{t:this.shape_763,p:{x:-499.925,y:-225.275}},{t:this.shape_824,p:{x:-485.075,y:-228}},{t:this.shape_812,p:{x:-470.625}},{t:this.shape_872,p:{x:-459.6,y:-230.1}},{t:this.shape_773,p:{x:-453.275,y:-230.4}},{t:this.shape_799,p:{x:-443.475}},{t:this.shape_1135},{t:this.shape_766,p:{x:-408.55}},{t:this.shape_829,p:{x:-398.425,y:-227.7}},{t:this.shape_769,p:{x:-384.225}},{t:this.shape_747,p:{x:-374.35,y:-230.1}},{t:this.shape_1134},{t:this.shape_995,p:{x:-341.925,y:-230.4}},{t:this.shape_800,p:{x:-329.075,y:-227.85}},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_805,p:{x:-277.75}},{t:this.shape_1131},{t:this.shape_776,p:{x:-248.75}},{t:this.shape_802,p:{x:-238.175,y:-227.7}},{t:this.shape_801,p:{x:-225.5}},{t:this.shape_781,p:{x:-215.025,y:-227.85}},{t:this.shape_1130},{t:this.shape_768,p:{x:-174.575}},{t:this.shape_767,p:{x:-164.425}},{t:this.shape_740,p:{x:-158.7,y:-230.4}},{t:this.shape_795,p:{x:-152.175,y:-220.55}},{t:this.shape_1129},{t:this.shape_779,p:{x:-1312.625,y:-196.8}},{t:this.shape_1128},{t:this.shape_1127,p:{x:-1283.75,y:-196.8}},{t:this.shape_811,p:{x:-1269.275,y:-196.95}},{t:this.shape_758,p:{x:-1255.225,y:-194.225}},{t:this.shape_870,p:{x:-1240.225,y:-199.35}},{t:this.shape_825,p:{x:-1227.4,y:-196.8}},{t:this.shape_808,p:{x:-1212.925,y:-196.95}},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_761,p:{x:-1033.05,y:-196.95}},{t:this.shape_772,p:{x:-1015.075,y:-196.8}},{t:this.shape_784,p:{x:-1000.625,y:-196.95}},{t:this.shape_760,p:{x:-986.175,y:-196.8}},{t:this.shape_791,p:{x:-973.55,y:-196.95}},{t:this.shape_788,p:{x:-963.125,y:-196.65}},{t:this.shape_1114},{t:this.shape_826,p:{x:-935.475,y:-199.35}},{t:this.shape_777,p:{x:-922.65,y:-196.8}},{t:this.shape_759,p:{x:-908.175,y:-196.95}},{t:this.shape_1113},{t:this.shape_789,p:{x:-873.9,y:-196.95}},{t:this.shape_764,p:{x:-863.475,y:-196.65}},{t:this.shape_787,p:{x:-849.75,y:-196.8}},{t:this.shape_1001,p:{x:-829.2,y:-199.2}},{t:this.shape_887,p:{x:-814.35,y:-196.8}},{t:this.shape_881,p:{x:-801.7,y:-196.95}},{t:this.shape_755,p:{x:-795.525,y:-199.35}},{t:this.shape_757,p:{x:-778.25,y:-196.8}},{t:this.shape_754,p:{x:-765.6,y:-196.95}},{t:this.shape_891,p:{x:-751.45,y:-196.95}},{t:this.shape_1112,p:{x:-733.5,y:-196.8}},{t:this.shape_1111},{t:this.shape_746,p:{x:-711.875,y:-196.65}},{t:this.shape_750,p:{x:-699.2}},{t:this.shape_752,p:{x:-688.725,y:-196.8}},{t:this.shape_743,p:{x:-667.375,y:-196.8}},{t:this.shape_742,p:{x:-654.075,y:-196.8}},{t:this.shape_741,p:{x:-643.925,y:-199.35}},{t:this.shape_756,p:{x:-638.2,y:-199.35}},{t:this.shape_753,p:{x:-620.675,y:-199.35}},{t:this.shape_744,p:{x:-607.825,y:-196.8}},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.instance_19},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_976,p:{x:-618.075,y:-130.175}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_970,p:{x:-930.575,y:121.425}},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_968,p:{x:-437.575,y:-28.675}},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_963,p:{x:-707.175,y:328.375}},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_981,p:{x:-1290.275,y:157.925}},{t:this.shape_1085},{t:this.shape_972,p:{x:-1269.075,y:157.925}},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_956,p:{x:-1240.025,y:157.925}},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_951,p:{x:-1187.025,y:157.925}},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_965,p:{x:-1154.125,y:157.925}},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069}]},1).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_938,p:{x:-1280.575}},{t:this.shape_724,p:{x:-1263.075}},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_937,p:{x:-1161.075}},{t:this.shape_1296},{t:this.shape_1219,p:{x:-1127.825}},{t:this.shape_1295},{t:this.shape_936,p:{x:-1081.375}},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_726,p:{x:-1032.5}},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_725,p:{x:-949.625}},{t:this.shape_1289},{t:this.shape_933,p:{x:-915.625}},{t:this.shape_729,p:{x:-906.975}},{t:this.shape_1288},{t:this.shape_1217,p:{x:-873.725}},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_721,p:{x:-813.125}},{t:this.shape_720,p:{x:-795.575}},{t:this.shape_1285},{t:this.shape_718,p:{x:-768.725}},{t:this.shape_717,p:{x:-751.225}},{t:this.shape_1213},{t:this.shape_842,p:{x:-1308.275,y:-258.9}},{t:this.shape_1284},{t:this.shape_1029,p:{x:-1288.15}},{t:this.shape_764,p:{x:-1278.025,y:-258.75}},{t:this.shape_1179,p:{x:-1263.525}},{t:this.shape_827,p:{x:-1249.475,y:-256.325}},{t:this.shape_1283},{t:this.shape_875,p:{x:-1225.925}},{t:this.shape_1282},{t:this.shape_822,p:{x:-1186.625,y:-258.9}},{t:this.shape_830,p:{x:-1171.8,y:-261.3}},{t:this.shape_1127,p:{x:-1157.75,y:-258.9}},{t:this.shape_810,p:{x:-1143.675,y:-256.325}},{t:this.shape_1281},{t:this.shape_843,p:{x:-1118.675}},{t:this.shape_1280},{t:this.shape_1018,p:{x:-1076.5223}},{t:this.shape_856,p:{x:-1057.675}},{t:this.shape_1279},{t:this.shape_860,p:{x:-1025.825}},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_864,p:{x:-936.65}},{t:this.shape_1274},{t:this.shape_1009,p:{x:-889.5223}},{t:this.shape_1019,p:{x:-874.2}},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_851,p:{x:-825.875}},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1023,p:{x:-678.875}},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_865,p:{x:-585.275}},{t:this.shape_1260},{t:this.shape_846,p:{x:-557.825}},{t:this.shape_858,p:{x:-546.275}},{t:this.shape_1012,p:{x:-533.025}},{t:this.shape_853,p:{x:-521.725}},{t:this.shape_863,p:{x:-490.725}},{t:this.shape_1005,p:{x:-478.8}},{t:this.shape_1004,p:{x:-469.175}},{t:this.shape_1259},{t:this.shape_1003,p:{x:-429.4}},{t:this.shape_1258},{t:this.shape_861,p:{x:-406.3}},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_868,p:{x:-331.7223}},{t:this.shape_1008,p:{x:-316.4}},{t:this.shape_849,p:{x:-300.875}},{t:this.shape_850,p:{x:-285.325}},{t:this.shape_1002,p:{x:-270.15}},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_855,p:{x:-172.5223}},{t:this.shape_847,p:{x:-158.0723}},{t:this.shape_1015,p:{x:-147.1}},{t:this.shape_991},{t:this.shape_816,p:{x:-1311.175}},{t:this.shape_1175,p:{x:-1296.725,y:-228}},{t:this.shape_793,p:{x:-1282.675,y:-225.275}},{t:this.shape_1249},{t:this.shape_897,p:{x:-1253.375,y:-228}},{t:this.shape_743,p:{x:-1225.825,y:-227.85}},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_812,p:{x:-1139.925}},{t:this.shape_894,p:{x:-1125.475,y:-228}},{t:this.shape_835,p:{x:-1111.45}},{t:this.shape_838,p:{x:-1096.575}},{t:this.shape_1031,p:{x:-1083.95,y:-228}},{t:this.shape_798,p:{x:-1073.475,y:-227.85}},{t:this.shape_884,p:{x:-1059.025,y:-228}},{t:this.shape_783,p:{x:-1044.975,y:-225.275}},{t:this.shape_763,p:{x:-1017.125,y:-225.275}},{t:this.shape_837,p:{x:-1006.575}},{t:this.shape_791,p:{x:-998.3,y:-228}},{t:this.shape_1244},{t:this.shape_834,p:{x:-964.275}},{t:this.shape_878,p:{x:-954.175,y:-228}},{t:this.shape_814,p:{x:-944.025}},{t:this.shape_768,p:{x:-933.925}},{t:this.shape_873,p:{x:-919.475,y:-228}},{t:this.shape_870,p:{x:-891.475,y:-230.4}},{t:this.shape_800,p:{x:-878.625,y:-227.85}},{t:this.shape_1243},{t:this.shape_766,p:{x:-847.95}},{t:this.shape_1242},{t:this.shape_778,p:{x:-822.625}},{t:this.shape_1241},{t:this.shape_781,p:{x:-791.525,y:-227.85}},{t:this.shape_779,p:{x:-777.075,y:-227.85}},{t:this.shape_780,p:{x:-767}},{t:this.shape_1240},{t:this.shape_1112,p:{x:-729,y:-227.85}},{t:this.shape_828,p:{x:-714.525,y:-228}},{t:this.shape_1239},{t:this.shape_772,p:{x:-665.025,y:-227.85}},{t:this.shape_824,p:{x:-650.575,y:-228}},{t:this.shape_887,p:{x:-636.15,y:-227.85}},{t:this.shape_754,p:{x:-623.5,y:-228}},{t:this.shape_797,p:{x:-617.325}},{t:this.shape_826,p:{x:-607.075,y:-230.4}},{t:this.shape_753,p:{x:-580.675,y:-230.4}},{t:this.shape_760,p:{x:-567.825,y:-227.85}},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_792,p:{x:-517.3,y:-227.85}},{t:this.shape_740,p:{x:-507.2,y:-230.4}},{t:this.shape_775,p:{x:-501.325}},{t:this.shape_758,p:{x:-478.225,y:-225.275}},{t:this.shape_773,p:{x:-467.675,y:-230.4}},{t:this.shape_1145,p:{x:-459.4}},{t:this.shape_1236},{t:this.shape_767,p:{x:-425.375}},{t:this.shape_811,p:{x:-415.275,y:-228}},{t:this.shape_755,p:{x:-405.125,y:-230.4}},{t:this.shape_742,p:{x:-395.025,y:-227.85}},{t:this.shape_808,p:{x:-380.575,y:-228}},{t:this.shape_1235},{t:this.shape_1195,p:{x:-339.75,y:-227.85}},{t:this.shape_889,p:{x:-325.3,y:-227.85}},{t:this.shape_872,p:{x:-314.25,y:-230.1}},{t:this.shape_1234},{t:this.shape_752,p:{x:-268.575,y:-227.85}},{t:this.shape_1233},{t:this.shape_741,p:{x:-245.425,y:-230.4}},{t:this.shape_784,p:{x:-235.325,y:-228}},{t:this.shape_1232},{t:this.shape_746,p:{x:-194.525,y:-227.7}},{t:this.shape_1231},{t:this.shape_1191,p:{x:-165.6,y:-227.85}},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_744,p:{x:-1303.975,y:-196.8}},{t:this.shape_759,p:{x:-1289.525,y:-196.95}},{t:this.shape_786,p:{x:-1275.675,y:-194.075}},{t:this.shape_1228},{t:this.shape_756,p:{x:-1252,y:-199.35}},{t:this.shape_905,p:{x:-1241.85,y:-196.8}},{t:this.instance_20}]},1).to({state:[]},1).to({state:[]},4).wait(8));

	// Wiring
	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#3E5EAB").s().p("AgOBwQgGgHAAgMIAAi5QAAgMAGgHQAFgHAJAAQAKAAAGAHQAFAHAAAMIAAC5QAAANgFAGQgHAHgJAAQgIgBgGgGg");
	this.shape_1304.setTransform(-649.025,-304.3);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1305.setTransform(-662.875,-301.15);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#3E5EAB").s().p("AAnBQQgGgHAAgMIAAhGQAAgVgFgMQgHgLgRAAQgKAAgJAHQgKAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1306.setTransform(-682,-301.125);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_1307.setTransform(-701.375,-301.125);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_1308.setTransform(-715.375,-304.2);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#3E5EAB").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_1309.setTransform(-728.425,-301.125);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgFgMQgHgLgRAAQgKAAgKAHQgJAHgFAMQgDAJAAAZIAAA2QABANgHAGQgFAHgKAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAGgGAJAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1310.setTransform(-746.7,-301.125);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1311.setTransform(-765.875,-301.15);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#3E5EAB").s().p("AgNBTQgGgFgCgEIgJgUIgphjIgDgIIgCgIIgBgGQAAgFADgEQACgEAFgDQAFgDAFAAQALAAAEAGQAEAGAEAPIAiBgIAlhkQAFgNAEgFQAEgFAJAAQAIAAAFAGQAGAFAAAHIgBAHIgCAHIgDAHIgpBlIgFALQgCAHgEAFQgDAEgFADQgFADgHAAQgIAAgFgEg");
	this.shape_1312.setTransform(-784.075,-301.125);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgGgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAANAIQAOAHAGANQAEAIABAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_1313.setTransform(-802.4,-301.125);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#3E5EAB").s().p("AgiBQQgPgGgMgLQgLgMgGgQQgGgQAAgTQAAgSAGgRQAGgQALgLQALgLAQgHQAQgGASAAQATAAAQAGQAQAHALALQALAMAGAQQAGAQAAASQAAATgGAQQgGAQgLAMQgLALgQAHQgQAGgTAAQgTAAgPgHgAgVgwQgKAHgFAMQgFANAAAQQAAARAFAMQAFANAKAGQAJAHAMAAQATAAAMgPQALgOAAgaQAAgZgLgPQgMgOgTAAQgMAAgJAGg");
	this.shape_1314.setTransform(-821.775,-301.125);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#3E5EAB").s().p("AA7ByQgFgEgFgGIgIgNIg2hVIglAlIAAAvQgBAOgGAIQgHAGgKABQgFgBgGgDQgGgDgDgFQgCgFAAgGIAAgQIAAiqQAAgNAFgIQAGgGALgBQALABAGAGQAHAIAAANIAABRIBahfQAGgHAFgDQAEgEAJAAQAJAAAGAHQAHAFgBAIQAAALgKAKIg4A2IBBBbQAGAKAEAIQAEAGgBAHQAAAIgFAGQgHAGgKAAQgJgBgHgEg");
	this.shape_1315.setTransform(-842.85,-304.3);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1316.setTransform(-869.125,-301.125);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1317.setTransform(-886.625,-301.15);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1318.setTransform(-901.3,-304.025);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1319.setTransform(-913.475,-301.125);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1320.setTransform(-931.025,-301.15);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQgBALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1321.setTransform(-945.65,-304.025);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAEALAGAIQAFAHAIAEQAKAGAPAAQATAAAOgKQAMgKAAgOQAAgLgHgIQgGgHgMgDQgKgEgSgEQgZgHgQgHQgRgHgJgNQgKgNAAgVQAAgSAKgPQAKgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQAKAJAGAJQAEAKAAAIQAAAJgFAGQgGAHgJAAQgJAAgDgEQgFgEgEgJQgGgNgJgHQgJgHgSAAQgTgBgKAJQgMAHAAAMQAAAGAEAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_1322.setTransform(-962.4,-304.3);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#3E5EAB").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_1323.setTransform(-995.325,-301.125);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1324.setTransform(-1018.975,-301.15);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgEgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIAAgQQABgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEAAAGIACARIAAAdIAPAAQAKAAAFAEQAEAFAAAGQAAAJgHADQgGAEgOAAIgHAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIALgBQAEAAAEAEQAFAEgBAGQAAALgKAFQgMAGgVAAQgTAAgKgHg");
	this.shape_1325.setTransform(-1033.65,-304.025);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#3E5EAB").s().p("AgoBQQgQgHgIgLQgIgKAAgLQAAgHAFgFQAFgFAIAAQAGAAAEADQADADAEAGQAGAMAKAFQAJAGAOAAQANAAAIgGQAJgFAAgIQAAgLgJgFQgIgFgTgFQgWgFgOgGQgOgFgIgKQgIgKAAgPQAAgMAHgMQAIgLAPgHQAPgHAVAAQAQAAANAEQANADAJAGQAJAGAEAHQAFAHAAAGQAAAIgFAEQgFAFgJAAQgHAAgEgEQgFgDgGgIQgFgGgGgEQgHgEgKAAQgMAAgHAFQgIAFAAAIQAAAGAGAFQAFAEAKADIAZAHQAUAEANAHQAMAGAHAJQAGAJAAAMQAAASgIAMQgJANgRAGQgRAHgXAAQgXAAgQgHg");
	this.shape_1326.setTransform(-1048.575,-301.125);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_1327.setTransform(-1061.525,-304.2);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAFAFAEAJQAFALAEAIQAGAHAJAEQAJAGAPAAQATAAANgKQAOgKAAgOQgBgLgGgIQgIgHgKgDQgMgEgRgEQgZgHgQgHQgRgHgKgNQgKgNABgVQgBgSAKgPQALgOATgJQAUgHAagBQAUAAAQAGQAQAFAJAJQALAJAEAJQAFAKAAAIQAAAJgFAGQgHAHgJAAQgHAAgEgEQgFgEgEgJQgGgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQgBAGAEAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAQAFALAHQAKAIAHALQAGANAAARQAAAVgKAQQgLAQgVAKQgVAKgcAAQghAAgWgOg");
	this.shape_1328.setTransform(-1076.4,-304.3);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#3E5EAB").s().p("ABUBQQgGgHAAgNIAAhHIgBgWQgCgIgFgGQgFgFgKAAQgJAAgHAFQgIAFgEAIQgFALAAAaIAAA5QAAANgGAHQgGAHgKAAQgJAAgGgHQgGgHAAgNIAAhDIgBgZQgBgJgFgGQgFgFgKAAQgVAAgHAOQgGAOAAAaIAAA6QAAANgGAHQgGAHgKAAQgKAAgGgHQgGgHAAgNIAAh5QAAgMAFgHQAGgGAJAAQAJAAAGAGQAFAGAAAKIAAAEQAMgNAMgGQANgGAPAAQAQAAAMAGQALAGAHANQALgNAMgGQAMgGAPAAQASAAANAGQAMAHAHANQAFAMAAAZIAABSQAAANgGAHQgGAHgKAAQgKAAgGgHg");
	this.shape_1329.setTransform(-1109.325,-301.125);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1330.setTransform(-1133.025,-301.15);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1331.setTransform(-1148.475,-301.125);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#3E5EAB").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_1332.setTransform(-1166.925,-297.975);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1333.setTransform(-1186.025,-301.15);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_1334.setTransform(-1199.825,-304.2);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#3E5EAB").s().p("AAxBwQgFgGAAgMIAAgEQgJAKgIAGQgJAGgKADQgJADgLABQgQAAgNgHQgNgGgJgMQgJgNgGgQQgEgQAAgTQAAgnATgWQAUgXAgAAQARABAMAFQANAHANANIAAg/QAAgNAEgHQAGgGAJgBQAKAAAGAHQAEAGAAAMIAAC7QABAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgKAGgFAMQgEAMgBARQAAAQAGANQAFAMAKAGQAJAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_1335.setTransform(-1214.6,-304.3);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#3E5EAB").s().p("AgpBwQgRgGgJgKQgKgJAAgLQAAgIAGgEQAFgFAHAAQAKAAAHAIIAHAIIAIAIQAEADAHABQAGACAIAAQAQAAAJgFQAJgEAEgJQADgIABgJIABgfQgKAOgNAHQgNAHgRAAQgVAAgQgLQgQgLgJgTQgIgTAAgaQAAgTAFgPQAFgQAKgLQAKgKAMgFQANgGAPAAQARAAANAHQAOAHALAPIAAgGQAAgLAGgGQAFgGAJAAQAMAAAEAIQAEAIAAAPIAAB7QAAAVgEAPQgFAQgKAKQgKAKgQAFQgQAEgXAAQgWAAgSgGgAgchHQgLANAAAaQAAAaALAMQALAOARAAQALAAAJgGQAKgGAGgKQAGgMAAgQQAAgagMgPQgLgOgTAAQgRAAgLAOg");
	this.shape_1336.setTransform(-1242.575,-297.975);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQAAgVgFgMQgGgLgSAAQgKAAgJAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_1337.setTransform(-1261.8,-301.125);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_1338.setTransform(-1275.825,-304.2);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#3E5EAB").s().p("Ag0BQQgGgGAAgNIAAh2QAAgdAVAAQALAAAFAHQAEAHABANQAHgNAJgHQAGgHAOAAQANAAANAHQANAHAAALQAAAIgGAFQgFAFgGAAIgMgDQgJgDgHAAQgJAAgFAFQgGAFgDAJQgDAKgCAOIgBAfIAAAkQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1339.setTransform(-1286.125,-301.125);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#3E5EAB").s().p("AgOBvQgGgHAAgMIAAh6QAAgMAGgHQAGgGAIAAQAJAAAGAGQAGAHAAALIAAB7QAAANgGAGQgGAHgJAAQgIgBgGgGgAgOhRQgGgFAAgKQAAgJAGgGQAHgFAHgBQAJABAGAEQAGAGAAAKQAAAKgGAFQgGAGgJAAQgIAAgGgGg");
	this.shape_1340.setTransform(-1298.475,-304.2);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#3E5EAB").s().p("AA1BxQgHgFgCgHIgHgXIgliIIglCIIgGAXQgDAHgHAFQgGAGgKAAQgJgBgGgDQgFgDgEgGQgDgGgCgHIgEgQIgmiZQgEgOAAgGQAAgKAGgFQAHgHAJAAQANABAEAHQAEAJAEAQIAeCEIAhh8QAEgPADgHQADgHAHgGQAGgGALAAQAMAAAGAHQAHAFACAGIAHAXIAiB8IAeiEIAEgRQACgGAFgFQAEgEAJgBQAKAAAGAHQAHAFgBAKQAAAGgDAOIgmCZIgHAYQgCAGgHAGQgGAGgLAAQgLAAgGgGg");
	this.shape_1341.setTransform(-1317.8,-304.3);

	this.instance_23 = new lib.Bitmap33copy();
	this.instance_23.setTransform(-1206,-266,1.0002,1.0002);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#3E5EAB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1342.setTransform(-1227.825,339.225);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#3E5EAB").s().p("AgXBbIAEgJIAIgVQAFgLADgQQADgQAAgSQAAgRgDgQQgDgQgFgLIgIgVIgEgJQAAgDAEAAQAHAAAEADQAEACAFALIAKATIAHATQADAJACAKQABAKAAAKQAAAVgGATQgFASgMAUQgFAKgEADQgEADgHAAQgEAAAAgDg");
	this.shape_1343.setTransform(-1234.625,335.275);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1344.setTransform(-1244.025,335.275);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1345.setTransform(-1255.425,335.275);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1346.setTransform(-1266.275,335.275);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1347.setTransform(-1277.625,335.275);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#3E5EAB").s().p("AA0AyQgDgEgBgJIAAgrIAAgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgNAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1348.setTransform(-1292.4,335.275);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#3E5EAB").s().p("AAMBdQgCgBgDgEIgHgKQgIgNgFgMQgFgMgDgNQgCgNAAgPQAAgOACgNQADgMAFgNQAFgMAIgNQADgHAEgEQADgDADgBIAHgBQAEAAAAADIgEAKIgIAVQgEAKgEAQQgDAQAAARQAAASADAPQADAQAFAMIAIAUIAEAKQAAADgEAAIgIgBg");
	this.shape_1349.setTransform(-1304.675,335.275);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgLAAgMQAAgXAMgPQAMgNAUAAQALAAAIAEQAIADAHAJIAAgoQAAgIADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_1350.setTransform(-234.675,308.15);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1351.setTransform(-246.7,310.125);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgGACgIAAQgJAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QgBgIAEgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKACAGQABAGAEAEQAFADAHAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1352.setTransform(-258.8,310.125);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAFgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHADAKQAEAKAAALQAAAMgEAKQgEAKgGAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgDAHAAAKQAAAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJgBgQQABgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1353.setTransform(-270.9,310.125);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1354.setTransform(-280.675,310.125);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgKgFgNQgFgOAAgRQAAgQAEgNQAFgOAKgKQAKgKAOgFQAOgFAQAAQAPAAALAEQALADAHAHQAHAFADAHQAEAGAAAFQAAAGgEAEQgEADgGABQgDgBgDgBIgFgEIgJgMQgEgFgGgDQgGgCgKAAQgJgBgIAEQgIADgFAHQgGAHgDAJQgDAJAAAMQAAAZAMANQALANAUAAQAKABAJgDIASgIIAAgXIgXAAQgIAAgEgDQgEgCAAgGQAAgEADgDQAEgDAGAAIAhAAIAKABQAEACADACQACAEAAAIIAAAbIgBAJIgEAGIgHAEQgNAIgMACQgMAEgOAAQgQAAgOgFg");
	this.shape_1355.setTransform(-293.725,308.15);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhArg");
	this.shape_1356.setTransform(-312.375,308.25);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1357.setTransform(-321.525,310.1);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1358.setTransform(-328.175,310.1);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1359.setTransform(-339.175,308.15);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1360.setTransform(-344.575,308.2);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgDgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHAEAKQADAKAAALQAAAMgDAKQgEAKgHAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJgBgQQABgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1361.setTransform(-353.35,310.125);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAFgNIAEgJQADgDAGAAQAFAAAEADQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1362.setTransform(-366.825,308.15);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQALAAAIAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1363.setTransform(-385.25,310.125);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1364.setTransform(-393.975,308.2);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1365.setTransform(-400.025,310.1);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgLAAgMQAAgXAMgPQAMgNAUAAQALAAAIAEQAIADAHAJIAAgoQAAgIADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_1366.setTransform(-409.875,308.15);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1367.setTransform(-418.525,308.15);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAFgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHABAKQgBAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1368.setTransform(-427.3,310.125);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#3E5EAB").s().p("AAjBFQgEgEAAgIIAAgxIg9AAIAAAxQAAAIgFAEQgEAFgGAAQgHAAgEgFQgDgEAAgIIAAhxQAAgJADgDQAEgFAHAAQAGAAAFAFQAEADAAAJIAAAqIA9AAIAAgqQAAgJAEgDQAEgFAHAAQAGAAAEAFQAEADAAAJIAABxQAAAIgEAEQgEAFgGAAQgHAAgEgFg");
	this.shape_1369.setTransform(-440.925,308.15);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1370.setTransform(-459.6,310.125);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1371.setTransform(-471.625,310.125);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1372.setTransform(-481.275,310.125);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1373.setTransform(-492.275,310.125);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgHADgEQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAHQAKAGAGAMQAGAMAAARQAAAMgDAKQgEAKgGAHQgGAHgIAEQgIADgKAAQgKAAgIgEQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgtQgIAJAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgIAAgKQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_1374.setTransform(-504.175,312.1);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1375.setTransform(-519.55,310.125);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQAEgEAFAAQAGAAAEAEQADAEAAAIIAABMQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1376.setTransform(-534.45,310.125);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgOANIAAAWQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgFAAgHIAAhxQAAgJADgEQAEgFAGAAQAHAAADAEQADAEABAIIAABAIAcgeIAJgIQADgCAEAAQAFAAAEADQADADAAAFQAAAFgLALIgOALIAcAsIADAHIACAEQAAAHgDADQgEAEgFAAQgGAAgCgDg");
	this.shape_1377.setTransform(-545.8,308.15);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhArg");
	this.shape_1378.setTransform(-562.775,308.25);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1379.setTransform(-571.925,310.1);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1380.setTransform(-578.575,310.1);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#3E5EAB").s().p("AgaBBQgMgIgGgPQgDgJAAgJQgCgKAAgMQAAgNACgMQABgMADgIQAGgOALgIQALgHAPAAQAKAAAHADQAJAEAGAFQAGAHAEAJQAIAQAAAdQAAAQgCALQgCAMgFAJQgHALgKAHQgLAGgNAAQgOAAgMgIgAgRgoQgGANABAbQAAASACALQACANAFAFQAFAHAIAAQAJgBAFgGQAFgGACgMQACgLAAgSQAAgSgCgLQgCgMgFgFQgGgHgIABQgMgBgFANg");
	this.shape_1381.setTransform(-592.85,308.2);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#3E5EAB").s().p("AgdBCQgLgHgFgIQgEgIAAgHQAAgDADgEQADgDAFAAQAIAAAEAJQAEAJAHAFQAGAFAJAAQAGAAAGgEQAFgEAEgHQADgHAAgJQAAgJgEgHQgDgGgGgDQgFgDgGAAQgIAAgEACIgKAGQgHAGgFAAQgEAAgEgEQgEgDAAgEIABgGIAIgvQACgJAEgDQADgEAJAAIAyAAQAPAAAAALQAAAFgDAEQgEADgHAAIguAAIgFAfQAOgHAKAAQAKAAAIADQAIAEAGAGQAGAGAEAIQADAIAAAKQAAAOgGAMQgGAMgMAGQgMAHgPAAQgRAAgLgGg");
	this.shape_1382.setTransform(-604.625,308.325);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1383.setTransform(-618.375,308.15);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1384.setTransform(-627.075,310.125);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1385.setTransform(-639.05,310.125);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1386.setTransform(-647.775,308.2);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgDAEQgFAEgGAAQgFAAgFgEQgDgEAAgJIAAhLQAAgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHABAPIAAAzQAAAJgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1387.setTransform(-659.35,310.125);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1388.setTransform(-671.925,310.125);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1389.setTransform(-682.9,310.125);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#3E5EAB").s().p("AgKBEQgEgEAAgJIAAhnIgfAAQgIAAgDgDQgEgEAAgFQAAgFAEgEQAEgDAHAAIBbAAQAHAAAEADQAEAEAAAFQAAAFgEAEQgEADgHAAIggAAIAABnQAAAJgEAEQgEAFgGAAQgGAAgEgFg");
	this.shape_1390.setTransform(-695.075,308.275);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhArg");
	this.shape_1391.setTransform(-712.175,308.25);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1392.setTransform(-721.325,310.1);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1393.setTransform(-727.975,310.1);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#3E5EAB").s().p("AgXBbIAEgJIAIgVQAFgLADgQQADgQAAgSQAAgRgDgQQgDgQgFgLIgIgVIgEgJQAAgDAEAAQAHAAAEADQAEACAFALIAKATIAHATQADAJACAKQABAKAAAKQAAAVgGATQgFASgMAUQgFAKgEADQgEADgHAAQgEAAAAgDg");
	this.shape_1394.setTransform(-739.975,310.125);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#3E5EAB").s().p("AAVA6IAAgtQAAgNgEgGQgDgHgLAAQgGAAgGAEQgGAFgDAGQgCAFAAAQIAAAjQAAAHgDAFQgEAEgGAAQgOAAAAgQIAAhzQABgIADgEQAEgEAGAAQAGAAAEAEQADAEAAAIIAAAnIAKgJQAFgDAFgBQAGgCAHAAQAJgBAJAFQAHAEAFAIQADAFAAAGIACAMIAAA0QAAAHgEAFQgEAEgGAAQgNAAAAgQg");
	this.shape_1395.setTransform(-749.45,308.15);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgYQAAgPAGgNQAGgMANgHQALgHAQAAQALAAAIADQAJADAFAEQAHAFADAGQADAFAAAFQAAAFgEADQgDADgFABQgDgBgCgBIgGgGQgFgHgFgEQgFgEgIAAQgLABgHAIQgIAKABAPQgBAHACAHQACAGAEAFQADAEAFACQAFACAFABQAIAAAGgFQAGgDAEgIIAFgHQADgCAEAAQAFAAADAEQADADAAAEQAAAGgCAFQgEAFgFAGQgHAFgJADQgJADgMAAQgYAAgOgOg");
	this.shape_1396.setTransform(-761.5,310.1);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAJAAQAGAAADADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1397.setTransform(-770.6,308.325);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1398.setTransform(-777.175,308.2);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#3E5EAB").s().p("AAYAzQgEgDgBgEIgEgMIgPgzIgOAzQgDALgDAGQgEAFgIAAQgFAAgDgBIgFgFIgDgIIgDgHIgVg/QgEgJAAgDQAAgEAEgEQADgDAFAAQAHAAACAEIAFAMIASA7IAPg2IAEgMQABgDAEgDQADgDAFAAQAGAAADADQAEADABADIAEAMIAQA2IARg7IADgJQABgDADgCQACgCAFAAQAFAAADADQAEADAAAFQAAAEgDAIIgWA/IgEAMQgCAEgDACQgEADgGAAQgGAAgDgDg");
	this.shape_1399.setTransform(-788.025,310.125);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1400.setTransform(-801.625,310.125);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1401.setTransform(-818.05,310.125);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAEgKAHgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHADAKQAEAKAAALQAAAMgEAKQgEAKgGAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHABAKQgBAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1402.setTransform(-830.15,310.125);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1403.setTransform(-838.875,308.2);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIACgGQABgDADgCQADgBADAAQAFAAADADQADADABAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIABAKQAAADACADQACACAEAAIAGgBIAHgBQACAAAEADQACACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1404.setTransform(-844.8,308.325);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1405.setTransform(-851.375,308.2);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1406.setTransform(-860.15,310.125);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#3E5EAB").s().p("AgZBGQgLgEgGgGQgGgGAAgGQAAgGAEgCQADgEAFAAQAFAAAFAGIAEAFQADADADABQACACAEABIAJABQAJAAAGgDQAGgCACgGQACgFABgGIABgSQgHAIgIAEQgIAFgKAAQgOAAgKgHQgJgHgGgMQgFgLAAgQQAAgMADgKQADgKAGgGQAGgHAIgEQAJgDAJAAQAKAAAIAFQAJAEAHAJIAAgDQAAgIADgDQADgEAGAAQAHAAADAFQADAFAAAJIAABNQAAANgDAKQgDAKgGAFQgHAHgKADQgJADgOAAQgOAAgLgEgAgRgtQgIAKAAAPQAAARAIAHQAGAIALAAQAHAAAFgEQAHgDADgGQAEgHAAgLQAAgQgHgJQgIgJgLAAQgLAAgGAIg");
	this.shape_1407.setTransform(-872.7,312.1);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1408.setTransform(-881.375,308.2);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#3E5EAB").s().p("AAMBdQgCgBgDgEIgHgKQgIgNgFgMQgFgMgDgNQgCgNAAgPQAAgOACgNQADgMAFgNQAFgMAIgNQADgHAEgEQADgDADgBIAHgBQAEAAAAADIgEAKIgIAVQgEAKgEAQQgDAQAAARQAAASADAPQADAQAFAMIAIAUIAEAKQAAADgEAAIgIgBg");
	this.shape_1409.setTransform(-887.525,310.125);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgOANIAAAWQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgFAAgHIAAhxQAAgJADgEQAEgFAGAAQAHAAADAEQAEAEAAAIIAABAIAcgeIAJgIQADgCAFAAQAEAAAEADQADADAAAFQAAAFgLALIgOALIAbAsIAFAHIABAEQAAAHgDADQgEAEgFAAQgGAAgCgDg");
	this.shape_1410.setTransform(-901.5,308.15);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1411.setTransform(-913.625,310.125);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAFAAADADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQACACAEAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1412.setTransform(-922.75,308.325);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgEgHgLAAQgGAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1413.setTransform(-932.7,310.125);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgHgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAFgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgHAHgJAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHABAKQgBAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1414.setTransform(-944.8,310.125);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgPANIAAAWQAAAHgEAFQgEAEgFAAQgGAAgDgEQgEgFAAgHIAAhxQAAgJAEgEQADgFAGAAQAGAAAEAEQADAEAAAIIAABAIAegeIAIgIQADgCAFAAQAEAAADADQAEADAAAFQAAAFgLALIgOALIAbAsIAFAHIABAEQAAAHgEADQgDAEgGAAQgFAAgCgDg");
	this.shape_1415.setTransform(-956.15,308.15);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1416.setTransform(-969.975,308.2);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgYQAAgPAHgNQAGgMAMgHQANgHAPAAQAKAAAJADQAJADAFAEQAGAFAEAGQADAFAAAFQAAAFgEADQgDADgFABQgEgBgBgBIgGgGQgEgHgGgEQgFgEgJAAQgKABgIAIQgHAKAAAPQAAAHACAHQACAGADAFQAEAEAFACQAFACAFABQAIAAAGgFQAFgDAFgIIAFgHQADgCAEAAQAFAAADAEQADADABAEQAAAGgEAFQgCAFgHAGQgGAFgJADQgKADgLAAQgYAAgOgOg");
	this.shape_1417.setTransform(-978.7,310.1);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1418.setTransform(-990.65,310.125);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgIgEgEgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAGAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAHAAQAFAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_1419.setTransform(-1002.75,310.125);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgOANIAAAWQgBAHgEAFQgDAEgGAAQgGAAgEgEQgDgFAAgHIAAhxQAAgJADgEQAEgFAGAAQAGAAAEAEQAEAEAAAIIAABAIAdgeIAIgIQADgCAFAAQAEAAAEADQADADAAAFQAAAFgLALIgOALIAbAsIAFAHIABAEQAAAHgEADQgDAEgGAAQgFAAgCgDg");
	this.shape_1420.setTransform(-1014.1,308.15);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQADgKAHgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1421.setTransform(-1031.2,310.125);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgOANIAAAWQgBAHgEAFQgEAEgFAAQgGAAgEgEQgDgFAAgHIAAhxQAAgJADgEQAEgFAGAAQAGAAAEAEQAEAEAAAIIAABAIAcgeIAJgIQADgCAFAAQAEAAAEADQADADAAAFQAAAFgLALIgOALIAbAsIAFAHIABAEQAAAHgDADQgEAEgGAAQgFAAgCgDg");
	this.shape_1422.setTransform(-1042.45,308.15);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1423.setTransform(-1057.325,310.125);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1424.setTransform(-1065.025,308.2);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1425.setTransform(-1070.425,308.15);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1426.setTransform(-1079.125,310.125);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#3E5EAB").s().p("AgZBGQgLgEgGgGQgGgGAAgGQAAgGADgCQAEgEAEAAQAGAAAFAGIAFAFQABADADABQADACAEABIAJABQAKAAAFgDQAGgCACgGQACgFABgGIAAgSQgGAIgIAEQgIAFgKAAQgOAAgJgHQgKgHgGgMQgFgLAAgQQAAgMADgKQAEgKAGgGQAFgHAIgEQAIgDAKAAQAKAAAIAFQAIAEAIAJIAAgDQAAgIADgDQAEgEAFAAQAHAAAEAFQACAFAAAJIAABNQAAANgDAKQgDAKgGAFQgGAHgKADQgLADgOAAQgNAAgLgEgAgSgtQgGAKgBAPQABARAGAHQAIAIAKAAQAGAAAHgEQAFgDAEgGQAEgHAAgLQAAgQgIgJQgGgJgMAAQgKAAgIAIg");
	this.shape_1427.setTransform(-1091.55,312.1);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1428.setTransform(-1103.6,310.125);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAJgEALAAQAQAAALAGQALAHAGAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgLAAQgJAAgGAHg");
	this.shape_1429.setTransform(-1115.6,310.125);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#3E5EAB").s().p("AA0AyQgDgEgBgJIAAgrIAAgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgNAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1430.setTransform(-1130.4,310.125);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1431.setTransform(-1146.925,308.2);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1432.setTransform(-1155.625,310.125);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1433.setTransform(-1165.275,310.125);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQAAAJADAHQAEAGAFAEQAGAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1434.setTransform(-1176.25,310.125);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1435.setTransform(-1185.4,308.325);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1436.setTransform(-1195.275,310.125);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#3E5EAB").s().p("AgDBIIgJgDIgHgGIgHgHIAAADQAAAHgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgHIAAh0QAAgIADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgFALABQANgBAKAHQAKAGAGAMQAFALAAAQQAAANgDAKQgDAKgGAIQgGAHgIAEQgIAEgKAAQgHAAgEgCgAgMgKQgGAFgDAHQgEAHAAAMQAAAPAIAJQAHAJALgBQAKAAAHgJQAHgIAAgQQAAgLgDgHQgDgHgFgFQgGgDgHAAQgHAAgGADg");
	this.shape_1437.setTransform(-1207.175,308.15);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFAAgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAHgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_1438.setTransform(-1221.375,308.2);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1439.setTransform(-1227.825,310.125);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1440.setTransform(-1238.825,310.125);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgLAAgMQAAgXAMgPQAMgNAUAAQALAAAIAEQAIADAHAJIAAgoQAAgIADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_1441.setTransform(-1251.275,308.15);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1442.setTransform(-1267.725,310.125);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgFgHQgEgJgBgPIAAg0QAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAGAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1443.setTransform(-1279.15,310.125);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1444.setTransform(-1288.925,310.125);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#3E5EAB").s().p("AAuBJIgEgEIgDgGIgEgHIgGgSIg6AAIgGASQgEAKgDAEQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgKIAFgJQACgEAEgCQAEgCAGAAQAFAAAFACQAEACACAEIAEAIIAFALIAlBbQAEALAAAEQAAAFgEAFQgEAEgGAAIgGgBgAgVAPIAqAAIgVg5g");
	this.shape_1445.setTransform(-1301.175,308.15);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgOAKgJQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgGQAIgHAFgLIAEgJQADgEAGgBQAFABAEAEQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1446.setTransform(-1234.675,283);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#3E5EAB").s().p("AAjBGQgEgFAAgJIAAgwIg9AAIAAAwQAAAJgFAFQgEAEgGAAQgHAAgEgEQgDgFAAgJIAAhvQAAgJADgFQAEgEAHAAQAGAAAFAEQAEAEAAAKIAAAoIA9AAIAAgoQAAgJAEgFQAEgEAHAAQAGAAAEAEQAEAEAAAKIAABvQAAAJgEAFQgEAEgGAAQgHAAgEgEg");
	this.shape_1447.setTransform(-1249.625,283);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1448.setTransform(-1267.725,284.975);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgFgHQgEgJgBgPIAAg0QAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAGAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1449.setTransform(-1279.15,284.975);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1450.setTransform(-1288.925,284.975);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#3E5EAB").s().p("AAuBJIgEgDIgDgHIgEgIIgGgSIg6AAIgGASQgEAMgDADQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgJIAFgKQACgDAEgDQAEgCAGAAQAFAAAFACQAEADACADIAEAIIAFALIAlBbQAEALAAAFQAAAFgEAEQgEAEgGAAIgGgBgAgVAQIAqAAIgVg7g");
	this.shape_1451.setTransform(-1301.175,283);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#3E5EAB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1452.setTransform(-289.825,238.625);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#3E5EAB").s().p("AgXBbIAEgJIAIgVQAFgLADgQQADgQAAgSQAAgRgDgQQgDgQgFgLIgIgVIgEgJQAAgDAEAAQAHAAAEADQAEACAFALIAKATIAHATQADAJACAKQABAKAAAKQAAAVgGATQgFASgMAUQgFAKgEADQgEADgHAAQgEAAAAgDg");
	this.shape_1453.setTransform(-296.625,234.675);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1454.setTransform(-306.025,234.675);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1455.setTransform(-317.425,234.675);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1456.setTransform(-328.275,234.675);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1457.setTransform(-339.625,234.675);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgEAEgGAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1458.setTransform(-354.4,234.675);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#3E5EAB").s().p("AAMBdQgCgBgDgEIgHgKQgIgNgFgMQgFgMgDgNQgCgNAAgPQAAgOACgNQADgMAFgNQAFgMAIgNQADgHAEgEQADgDADgBIAHgBQAEAAAAADIgEAKIgIAVQgEAKgEAQQgDAQAAARQAAASADAPQADAQAFAMIAIAUIAEAKQAAADgEAAIgIgBg");
	this.shape_1459.setTransform(-366.675,234.675);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgKAAgNQAAgYAMgNQAMgOAUgBQALAAAIAFQAIADAHAJIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAIAAAKQAAALADAIQADAHAGAFQAGADAGABQAHgBAGgDQAGgEADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgEgHgBQgHABgFAEg");
	this.shape_1460.setTransform(-381.875,232.7);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1461.setTransform(-393.9,234.675);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQADAGAEAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQAEAEAAAIIAABMQAAAIgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_1462.setTransform(-406,234.675);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgEgKQgDgKAAgMQAAgLADgKQAFgKAHgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHgBAKQABAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJABgQQgBgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1463.setTransform(-418.1,234.675);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1464.setTransform(-427.875,234.675);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgKgFgOQgFgNAAgRQAAgQAEgNQAFgPAKgJQAKgKAOgFQAOgFAQAAQAPAAALAEQALAEAHAFQAHAHADAGQAEAHAAAFQAAAFgEAEQgEADgGAAQgDAAgDgBIgFgEIgJgNQgEgEgGgDQgGgDgKAAQgJAAgIAEQgIADgFAHQgGAGgDAKQgDAKAAALQAAAYAMAOQALAOAUAAQAKgBAJgCIASgHIAAgYIgXAAQgIAAgEgCQgEgDAAgFQAAgFADgDQAEgCAGAAIAhAAIAKABQAEABADACQACAEAAAIIAAAbIgBAJIgEAFIgHAGQgNAGgMAEQgMADgOAAQgQAAgOgFg");
	this.shape_1465.setTransform(-440.925,232.7);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAWIhhArg");
	this.shape_1466.setTransform(-459.575,232.8);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1467.setTransform(-468.725,234.65);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1468.setTransform(-475.375,234.65);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#3E5EAB").s().p("AgOBGQgEgEAAgJIAAhFIgIAAQgFAAgEgDQgDgCAAgEQAAgKANAAIAHAAIAAgIQAAgNADgHQAEgIAHgDQAHgDAMAAQAYAAAAALQAAAEgDADQgCACgDAAIgGAAIgGgBQgIAAgCAEQgCAFAAAIIAAAGIAHAAQAPAAABAJQgBAGgEACQgDACgIAAIgHAAIAABFQAAAJgDAEQgEAEgFAAQgGAAgDgEg");
	this.shape_1469.setTransform(-486.65,232.7);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1470.setTransform(-493.025,232.75);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQABACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgHgEg");
	this.shape_1471.setTransform(-498.95,232.875);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1472.setTransform(-508.825,234.675);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEAEgEQADgCAFAAQAFAAAFAFIAEAFQADADADACQACACAEAAIAJABQAJAAAGgCQAGgDACgFQACgFABgGIABgTQgHAIgIAEQgIAFgKAAQgOAAgKgHQgJgGgGgNQgFgLAAgRQAAgLADgKQADgJAGgIQAGgGAIgEQAJgDAJAAQAKAAAIAEQAJAFAHAJIAAgEQAAgGADgEQADgEAGAAQAHAAADAFQADAFAAAKIAABMQAAANgDAKQgDAJgGAHQgHAGgKADQgJADgOAAQgOAAgLgEgAgRgsQgIAIAAARQAAAPAIAIQAHAIAKAAQAHAAAFgDQAHgEADgGQAEgHAAgKQAAgRgHgJQgIgJgLAAQgKAAgHAJg");
	this.shape_1473.setTransform(-521.25,236.65);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1474.setTransform(-533.2,234.675);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFABAGIAAAOIAAAxQAAAIgDAEQgEAEgFAAQgGAAgFgEg");
	this.shape_1475.setTransform(-545.2,234.675);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1476.setTransform(-559.45,232.875);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1477.setTransform(-569.325,234.675);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#3E5EAB").s().p("AAaBHIgIgJIgWgnIgOANIAAAWQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQADAEABAJIAAA/IAcgfIAJgIQADgCAFAAQAFABADADQADADAAAEQAAAGgLAKIgOANIAbAqIAFAHIABAGQAAAGgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_1478.setTransform(-580.55,232.7);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1479.setTransform(-589.375,232.75);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1480.setTransform(-597.575,234.675);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAWIhhArg");
	this.shape_1481.setTransform(-613.775,232.8);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1482.setTransform(-622.925,234.65);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1483.setTransform(-629.575,234.65);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAFAEQAGAEAHAAQAEAAAFgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgOgcQgHAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgFAHg");
	this.shape_1484.setTransform(-643.85,234.675);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1485.setTransform(-653.525,234.675);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgLAKQgFAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QgBgIAEgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKACAGQABAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1486.setTransform(-664.6,234.675);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAJAAQAGAAADADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1487.setTransform(-673.85,232.875);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1488.setTransform(-683.725,234.675);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgDAEQgFAEgGAAQgFAAgFgEQgDgEAAgJIAAhLQAAgHADgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHABAPIAAAzQAAAJgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1489.setTransform(-698.5,234.675);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1490.setTransform(-711.075,234.675);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1491.setTransform(-722.075,234.675);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQALAAAIAEQAIAFAFAIQACAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1492.setTransform(-739.05,234.675);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1493.setTransform(-751.075,234.675);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1494.setTransform(-760.725,234.675);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1495.setTransform(-771.725,234.675);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKgBgIgEQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAJAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1496.setTransform(-783.625,236.65);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgEAEgGAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1497.setTransform(-799,234.675);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQAEgEAFAAQAGAAAEAEQADAEAAAIIAABMQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1498.setTransform(-813.9,234.675);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#3E5EAB").s().p("AAaBHIgIgJIgWgnIgOANIAAAWQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQADAEABAJIAAA/IAcgfIAJgIQADgCAEAAQAFABAEADQADADAAAEQAAAGgLAKIgOANIAcAqIADAHIACAGQAAAGgDAEQgEADgFAAQgGAAgCgDg");
	this.shape_1499.setTransform(-825.25,232.7);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAWIhhArg");
	this.shape_1500.setTransform(-842.225,232.8);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1501.setTransform(-851.375,234.65);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1502.setTransform(-858.025,234.65);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#3E5EAB").s().p("AgOBGQgEgEAAgJIAAhFIgHAAQgHAAgCgDQgEgCAAgEQAAgKAOAAIAGAAIAAgIQAAgNADgHQAEgIAHgDQAGgDANAAQAYAAAAALQAAAEgCADQgDACgDAAIgGAAIgGgBQgHAAgCAEQgDAFAAAIIAAAGIAHAAQAQAAAAAJQAAAGgFACQgEACgHAAIgHAAIAABFQAAAJgDAEQgEAEgFAAQgFAAgEgEg");
	this.shape_1503.setTransform(-869.3,232.7);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1504.setTransform(-875.675,232.75);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIACgGQABgDADgCQADgBADAAQAGAAACADQADADABAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADACADQACACAEAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgMAAQgMAAgGgEg");
	this.shape_1505.setTransform(-881.6,232.875);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1506.setTransform(-888.175,232.75);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1507.setTransform(-896.375,234.675);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgEgKQgDgKAAgMQAAgLADgKQAFgKAHgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgHAHgJAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHAAAKQAAAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1508.setTransform(-907.8,234.675);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKgBgIgEQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAJAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1509.setTransform(-919.825,236.65);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQABACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgHgEg");
	this.shape_1510.setTransform(-934.55,232.875);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1511.setTransform(-944.425,234.675);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#3E5EAB").s().p("AAaBHIgIgJIgWgnIgPANIAAAWQAAAIgDAEQgFAEgEAAQgHAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAHAAQAFAAAEAEQADAEAAAJIAAA/IAdgfIAJgIQADgCAEAAQAFABADADQAEADAAAEQAAAGgLAKIgOANIAcAqIADAHIACAGQAAAGgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_1512.setTransform(-955.65,232.7);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1513.setTransform(-964.475,232.75);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1514.setTransform(-972.675,234.675);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAWIhhArg");
	this.shape_1515.setTransform(-988.875,232.8);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1516.setTransform(-998.025,234.65);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1517.setTransform(-1004.675,234.65);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#3E5EAB").s().p("AgXBbIAEgJIAIgVQAFgLADgQQADgQAAgSQAAgRgDgQQgDgQgFgLIgIgVIgEgJQAAgDAEAAQAHAAAEADQAEACAFALIAKATIAHATQADAJACAKQABAKAAAKQAAAVgGATQgFASgMAUQgFAKgEADQgEADgHAAQgEAAAAgDg");
	this.shape_1518.setTransform(-1016.675,234.675);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1519.setTransform(-1022.775,232.7);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1520.setTransform(-1028.175,232.75);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgEgKQgDgKAAgMQAAgLADgKQAFgKAHgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgHAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgDAHAAAKQAAAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1521.setTransform(-1036.95,234.675);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgOAKgJQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgLgHgFQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAFgNIAEgJQADgDAGAAQAFAAAEADQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1522.setTransform(-1050.425,232.7);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgKAAgNQAAgYAMgNQAMgOAUgBQALAAAIAFQAIADAHAJIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAIAAAKQAAALADAIQADAHAGAFQAGADAGABQAHgBAGgDQAGgEADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgEgHgBQgHABgFAEg");
	this.shape_1523.setTransform(-1069.325,232.7);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1524.setTransform(-1077.975,232.7);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQABgLADgKQAEgKAGgHQAHgIAJgDQALgEALAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAFAEAGAAQAFAAAFgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgOgcQgHAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgFAHg");
	this.shape_1525.setTransform(-1086.65,234.675);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEgBQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1526.setTransform(-1095.275,232.75);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#3E5EAB").s().p("AgtBEQgEgEAAgJIAAhtQAAgGACgEQACgEAEgCQADgCAHAAIBDAAQAHAAAEADQADADAAAFQAAAFgDADQgEADgHAAIg4AAIAAAlIAvAAQAGAAAEADQADADAAAFQAAAEgEADQgDADgGAAIgvAAIAAAvQAAAJgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_1527.setTransform(-1103.6,232.825);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#3E5EAB").s().p("AAMBdQgCgBgDgEIgHgKQgIgNgFgMQgFgMgDgNQgCgNAAgPQAAgOACgNQADgMAFgNQAFgMAIgNQADgHAEgEQADgDADgBIAHgBQAEAAAAADIgEAKIgIAVQgEAKgEAQQgDAQAAARQAAASADAPQADAQAFAMIAIAUIAEAKQAAADgEAAIgIgBg");
	this.shape_1528.setTransform(-1113.525,234.675);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1529.setTransform(-1128.25,234.675);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1530.setTransform(-1140.275,234.675);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgKAAgNQAAgYAMgNQAMgOAUgBQALAAAIAFQAIADAHAJIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAIAAAKQAAALADAIQADAHAGAFQAGADAGABQAHgBAGgDQAGgEADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgEgHgBQgHABgFAEg");
	this.shape_1531.setTransform(-1152.725,232.7);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_1532.setTransform(-1164.65,234.675);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgNAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgFAAQgGAAgFgEg");
	this.shape_1533.setTransform(-1179.45,234.675);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQAEAAACABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1534.setTransform(-1199.35,234.675);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1535.setTransform(-1211.375,234.675);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1536.setTransform(-1221.025,234.675);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1537.setTransform(-1232.025,234.675);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKgBgIgEQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAJAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1538.setTransform(-1243.925,236.65);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgFAAgFgEQgDgEAAgJIAAhLQgBgHAEgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAEAIQAHgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHABAPIAAAzQAAAJgFAEQgDAEgHAAQgGAAgEgEg");
	this.shape_1539.setTransform(-1259.3,234.675);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgIgEgEgHQgEgJAAgPIAAg0QAAgIADgEQADgEAGAAQAGAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAHAAQAFAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAGAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1540.setTransform(-1274.2,234.675);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#3E5EAB").s().p("AAaBHIgHgJIgXgnIgPANIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAGAAAEAEQADAEAAAJIAAA/IAegfIAIgIQADgCAFAAQAEABAEADQADADAAAEQAAAGgLAKIgOANIAbAqIAFAHIABAGQAAAGgEAEQgDADgGAAQgFAAgCgDg");
	this.shape_1541.setTransform(-1285.55,232.7);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAWIhhArg");
	this.shape_1542.setTransform(-1302.525,232.8);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1543.setTransform(-185.075,209.5);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1544.setTransform(-191.725,209.5);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgEgGgIQgGgGgEgJQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgFAGAAQAFAAAEAFQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1545.setTransform(-207.475,207.55);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1546.setTransform(-222.525,207.55);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1547.setTransform(-231.225,209.525);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1548.setTransform(-243.2,209.525);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1549.setTransform(-251.925,207.6);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgNAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgEAEgGAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_1550.setTransform(-263.5,209.525);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1551.setTransform(-276.075,209.525);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1552.setTransform(-287.05,209.525);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#3E5EAB").s().p("AgKBEQgEgEAAgJIAAhnIgfAAQgIAAgDgDQgEgEAAgFQAAgFAEgEQAEgDAHAAIBbAAQAHAAAEADQAEAEAAAFQAAAFgEAEQgEADgHAAIggAAIAABnQAAAJgEAEQgEAFgGAAQgGAAgEgFg");
	this.shape_1553.setTransform(-299.225,207.675);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAXIhhArg");
	this.shape_1554.setTransform(-316.325,207.65);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1555.setTransform(-325.475,209.5);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1556.setTransform(-332.125,209.5);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1557.setTransform(-348.125,207.55);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1558.setTransform(-353.525,207.6);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgEgKQgDgKAAgMQAAgLADgKQAFgKAHgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHgBAKQABAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJABgQQgBgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1559.setTransform(-362.3,209.525);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgEgGgIQgGgGgEgJQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgFAGAAQAFAAAEAFQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1560.setTransform(-375.775,207.55);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgDgHgLAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1561.setTransform(-394.2,209.525);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1562.setTransform(-402.925,207.6);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1563.setTransform(-408.975,209.5);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1564.setTransform(-414.975,207.55);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1565.setTransform(-420.375,207.55);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQAEgEAFAAQAGAAAEAEQADAEAAAIIAABMQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1566.setTransform(-429.15,209.525);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#3E5EAB").s().p("AgyBEQgEgEAAgJIAAhtQAAgKAFgEQAEgEAKAAIAkAAQAQAAAJADQAJACAHAGQAGAFADAJQAEAIAAAKQAAAWgOAKQgNALgbAAIgaAAIAAApQAAAJgEAEQgEAFgGAAQgHAAgEgFgAgZgGIAUAAQAJAAAHgDQAHgCAEgFQADgEAAgIQAAgKgFgGQgHgGgSAAIgUAAg");
	this.shape_1567.setTransform(-441.525,207.675);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1568.setTransform(-459.6,209.525);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1569.setTransform(-471.625,209.525);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1570.setTransform(-481.275,209.525);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1571.setTransform(-492.275,209.525);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAGQAKAHAGAMQAGAMAAARQAAANgDAJQgEAKgGAHQgGAHgIAEQgIADgKAAQgKABgIgFQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgtQgIAKAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgHAAgLQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_1572.setTransform(-504.175,211.5);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1573.setTransform(-519.55,209.525);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQAEgEAFAAQAGAAAEAEQADAEAAAIIAABMQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1574.setTransform(-534.45,209.525);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#3E5EAB").s().p("AAaBIIgIgLIgWgmIgOAOIAAAVQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgEAAgIIAAhxQAAgJADgEQAEgFAGAAQAHAAADAEQADAFABAHIAABAIAcgeIAJgIQADgCAEAAQAFgBAEAEQADADAAAEQAAAGgLALIgOALIAcArIADAIIACAEQAAAHgDADQgEAEgFAAQgGAAgCgCg");
	this.shape_1575.setTransform(-545.8,207.55);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAXIhhArg");
	this.shape_1576.setTransform(-562.775,207.65);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1577.setTransform(-571.925,209.5);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1578.setTransform(-578.575,209.5);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#3E5EAB").s().p("AgaBBQgMgJgGgOQgDgIAAgKQgCgKAAgMQAAgOACgLQABgMADgJQAGgNALgIQALgHAPAAQAKAAAHADQAJADAGAGQAGAHAEAJQAIARAAAcQAAAQgCALQgCAMgFAJQgHAMgKAGQgLAGgNAAQgOAAgMgIgAgRgnQgGANABAaQAAASACALQACAMAFAGQAFAHAIgBQAJAAAFgGQAFgGACgMQACgLAAgSQAAgSgCgLQgCgMgFgFQgGgHgIAAQgMABgFANg");
	this.shape_1579.setTransform(-592.85,207.6);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#3E5EAB").s().p("AgdBCQgLgHgFgIQgEgIAAgHQAAgDADgEQADgDAFAAQAIAAAEAJQAEAJAHAFQAGAFAJAAQAGAAAGgEQAFgEAEgHQADgHAAgJQAAgJgEgHQgDgGgGgDQgFgDgGAAQgIAAgEACIgKAGQgHAGgFAAQgEAAgEgEQgEgDAAgEIABgGIAIgvQACgJAEgDQADgEAJAAIAyAAQAPAAAAALQAAAFgDAEQgEADgHAAIguAAIgFAfQAOgHAKAAQAKAAAIADQAIAEAGAGQAGAGAEAIQADAIAAAKQAAAOgGAMQgGAMgMAGQgMAHgPAAQgRAAgLgGg");
	this.shape_1580.setTransform(-604.625,207.725);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1581.setTransform(-618.375,207.55);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1582.setTransform(-627.075,209.525);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1583.setTransform(-639.05,209.525);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1584.setTransform(-647.775,207.6);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgDAEQgFAEgGAAQgFAAgFgEQgDgEAAgJIAAhLQAAgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHABAPIAAAzQAAAJgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1585.setTransform(-659.35,209.525);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1586.setTransform(-671.925,209.525);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1587.setTransform(-682.9,209.525);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#3E5EAB").s().p("AgKBEQgEgEAAgJIAAhnIgfAAQgIAAgDgDQgEgEAAgFQAAgFAEgEQAEgDAHAAIBbAAQAHAAAEADQAEAEAAAFQAAAFgEAEQgEADgHAAIggAAIAABnQAAAJgEAEQgEAFgGAAQgGAAgEgFg");
	this.shape_1588.setTransform(-695.075,207.675);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAXIhhArg");
	this.shape_1589.setTransform(-712.175,207.65);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1590.setTransform(-721.325,209.5);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgEQADgDAIAAIAeAAQAHAAADADQAEAEAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1591.setTransform(-727.975,209.5);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#3E5EAB").s().p("AgXBbIAEgJIAIgVQAFgLADgQQADgQAAgSQAAgRgDgQQgDgQgFgLIgIgVIgEgJQAAgDAEAAQAHAAAEADQAEACAFALIAKATIAHATQADAJACAKQABAKAAAKQAAAVgGATQgFASgMAUQgFAKgEADQgEADgHAAQgEAAAAgDg");
	this.shape_1592.setTransform(-739.975,209.525);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#3E5EAB").s().p("AAVA6IAAgtQAAgNgEgGQgDgHgLAAQgGAAgGAFQgGADgDAHQgCAFAAAPIAAAkQAAAIgDAEQgEAEgGAAQgOAAAAgQIAAhzQABgIADgEQAEgEAGAAQAGAAAEAEQADAEAAAIIAAAoQAFgGAFgDQAFgEAFgBQAGgCAHAAQAJgBAJAFQAHAEAFAJQADAEAAAGIACAMIAAA0QAAAIgEAEQgEAEgGAAQgNAAAAgQg");
	this.shape_1593.setTransform(-749.45,207.55);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#3E5EAB").s().p("AgkAoQgOgOABgZQAAgPAGgNQAGgNANgGQALgHAQAAQALAAAIADQAJADAFAEQAHAGADAFQADAGAAAEQAAAFgEADQgDADgFAAQgDAAgCgBIgGgGQgFgHgFgEQgFgDgIAAQgLAAgHAJQgIAJABAPQgBAHACAHQACAGAEAEQADAFAFACQAFADAFgBQAIAAAGgDQAGgEAEgIIAFgGQADgDAEAAQAFAAADAEQADADAAAFQAAAFgCAFQgEAGgFAFQgHAFgJADQgJADgMAAQgYAAgOgOg");
	this.shape_1594.setTransform(-761.5,209.5);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAJAAQAGAAADADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1595.setTransform(-770.6,207.725);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1596.setTransform(-777.175,207.6);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#3E5EAB").s().p("AAYAzQgEgDgBgEIgEgMIgPgzIgOAzQgDALgDAGQgEAFgIAAQgFAAgDgBIgFgFIgDgIIgDgHIgVg/QgEgJAAgDQAAgEAEgEQADgDAFAAQAHAAACAEIAFAMIASA7IAPg2IAEgMQABgDAEgDQADgDAFAAQAGAAADADQAEADABADIAEAMIAQA2IARg7IADgJQABgDADgCQACgCAFAAQAFAAADADQAEADAAAFQAAAEgDAIIgWA/IgEAMQgCAEgDACQgEADgGAAQgGAAgDgDg");
	this.shape_1597.setTransform(-788.025,209.525);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1598.setTransform(-801.625,209.525);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1599.setTransform(-818.05,209.525);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAEgKAHgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHADAKQAEAKAAALQAAAMgEAKQgEAKgGAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHABAKQgBAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1600.setTransform(-830.15,209.525);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1601.setTransform(-838.875,207.6);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIACgGQABgDADgCQADgBADAAQAFAAADADQADADABAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIABAKQAAADACADQACACAEAAIAGgBIAHgBQACAAAEADQACACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1602.setTransform(-844.8,207.725);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1603.setTransform(-851.375,207.6);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1604.setTransform(-860.15,209.525);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgGQAAgGAEgCQADgDAFAAQAFgBAFAGIAEAFQADADADABQACACAEACIAJABQAJAAAGgEQAGgCACgGQACgEABgHIABgTQgHAJgIAFQgIAEgKAAQgOAAgKgHQgJgHgGgMQgFgMAAgQQAAgLADgKQADgKAGgGQAGgHAIgDQAJgEAJAAQAKAAAIAFQAJAEAHAJIAAgDQAAgIADgDQADgEAGAAQAHAAADAFQADAFAAAJIAABNQAAANgDAKQgDAKgGAFQgHAHgKADQgJADgOAAQgOAAgLgEgAgRgtQgIAKAAAPQAAAQAIAIQAGAIALAAQAHAAAFgEQAHgDADgGQAEgIAAgKQAAgQgHgJQgIgJgLAAQgLAAgGAIg");
	this.shape_1605.setTransform(-872.7,211.5);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1606.setTransform(-881.375,207.6);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#3E5EAB").s().p("AAMBdQgCgBgDgEIgHgKQgIgNgFgMQgFgMgDgNQgCgNAAgPQAAgOACgNQADgMAFgNQAFgMAIgNQADgHAEgEQADgDADgBIAHgBQAEAAAAADIgEAKIgIAVQgEAKgEAQQgDAQAAARQAAASADAPQADAQAFAMIAIAUIAEAKQAAADgEAAIgIgBg");
	this.shape_1607.setTransform(-887.525,209.525);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgOAOIAAAVQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgEAAgIIAAhxQAAgJADgEQAEgFAGAAQAHAAADAEQAEAFAAAHIAABAIAcgeIAJgIQADgCAFAAQAEgBAEAEQADADAAAEQAAAGgLALIgOALIAbArIAFAIIABAEQAAAHgDADQgEAEgFAAQgGAAgCgCg");
	this.shape_1608.setTransform(-901.5,207.55);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1609.setTransform(-913.625,209.525);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAFAAADADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQACACAEAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1610.setTransform(-922.75,207.725);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgEgHgLAAQgGAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1611.setTransform(-932.7,209.525);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgHgHQgHgHgEgKQgDgKAAgMQAAgLADgKQAFgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAHAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgHAHgJAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHABAKQgBAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJAAgQQAAgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1612.setTransform(-944.8,209.525);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgPAOIAAAVQAAAIgEAEQgEAEgFAAQgGAAgDgEQgEgEAAgIIAAhxQAAgJAEgEQADgFAGAAQAGAAAEAEQADAFAAAHIAABAIAegeIAIgIQADgCAFAAQAEgBADAEQAEADAAAEQAAAGgLALIgOALIAbArIAFAIIABAEQAAAHgEADQgDAEgGAAQgFAAgCgCg");
	this.shape_1613.setTransform(-956.15,207.55);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1614.setTransform(-969.975,207.6);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#3E5EAB").s().p("AgkAoQgOgOAAgZQAAgPAHgNQAGgNAMgGQANgHAPAAQAKAAAJADQAJADAFAEQAGAGAEAFQADAGAAAEQAAAFgEADQgDADgFAAQgEAAgBgBIgGgGQgEgHgGgEQgFgDgJAAQgKAAgIAJQgHAJAAAPQAAAHACAHQACAGADAEQAEAFAFACQAFADAFgBQAIAAAGgDQAFgEAFgIIAFgGQADgDAEAAQAFAAADAEQADADABAFQAAAFgEAFQgCAGgHAFQgGAFgJADQgKADgLAAQgYAAgOgOg");
	this.shape_1615.setTransform(-978.7,209.5);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1616.setTransform(-990.65,209.525);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgIgEgEgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAGAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAHAAQAFAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_1617.setTransform(-1002.75,209.525);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgOAOIAAAVQgBAIgEAEQgDAEgGAAQgGAAgEgEQgDgEAAgIIAAhxQAAgJADgEQAEgFAGAAQAGAAAEAEQAEAFAAAHIAABAIAdgeIAIgIQADgCAFAAQAEgBAEAEQADADAAAEQAAAGgLALIgOALIAbArIAFAIIABAEQAAAHgEADQgDAEgGAAQgFAAgCgCg");
	this.shape_1618.setTransform(-1014.1,207.55);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQADgKAHgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1619.setTransform(-1031.2,209.525);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgOAOIAAAVQgBAIgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgIIAAhxQAAgJADgEQAEgFAGAAQAGAAAEAEQAEAFAAAHIAABAIAcgeIAJgIQADgCAFAAQAEgBAEAEQADADAAAEQAAAGgLALIgOALIAbArIAFAIIABAEQAAAHgDADQgEAEgGAAQgFAAgCgCg");
	this.shape_1620.setTransform(-1042.45,207.55);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1621.setTransform(-1057.325,209.525);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1622.setTransform(-1065.025,207.6);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgIIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1623.setTransform(-1070.425,207.55);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1624.setTransform(-1079.125,209.525);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgGQAAgGADgCQAEgDAEAAQAGgBAFAGIAFAFQABADADABQADACAEACIAJABQAKAAAFgEQAGgCACgGQACgEABgHIAAgTQgGAJgIAFQgIAEgKAAQgOAAgJgHQgKgHgGgMQgFgMAAgQQAAgLADgKQAEgKAGgGQAFgHAIgDQAIgEAKAAQAKAAAIAFQAIAEAIAJIAAgDQAAgIADgDQAEgEAFAAQAHAAAEAFQACAFAAAJIAABNQAAANgDAKQgDAKgGAFQgGAHgKADQgLADgOAAQgNAAgLgEgAgSgtQgGAKgBAPQABAQAGAIQAIAIAKAAQAGAAAHgEQAFgDAEgGQAEgIAAgKQAAgQgIgJQgGgJgMAAQgKAAgIAIg");
	this.shape_1625.setTransform(-1091.55,211.5);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgGAAQgFAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1626.setTransform(-1103.6,209.525);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAJgEALAAQAQAAALAGQALAHAGAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgLAAQgJAAgGAHg");
	this.shape_1627.setTransform(-1115.6,209.525);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#3E5EAB").s().p("AA0AyQgDgEgBgJIAAgrIAAgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgNAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1628.setTransform(-1130.4,209.525);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1629.setTransform(-1146.925,207.6);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1630.setTransform(-1155.625,209.525);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1631.setTransform(-1165.275,209.525);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQAAAJADAHQAEAGAFAEQAGAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1632.setTransform(-1176.25,209.525);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1633.setTransform(-1185.4,207.725);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1634.setTransform(-1195.275,209.525);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#3E5EAB").s().p("AgDBJIgJgFIgHgEIgHgIIAAACQAAAIgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhzQAAgIADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgFALABQANAAAKAGQAKAGAGANQAFAKAAARQAAAMgDAKQgDAKgGAHQgGAIgIAEQgIAEgKAAQgHAAgEgBgAgMgKQgGAFgDAHQgEAHAAAMQAAAPAIAJQAHAJALAAQAKgBAHgIQAHgJAAgQQAAgLgDgHQgDgHgFgFQgGgEgHAAQgHAAgGAEg");
	this.shape_1635.setTransform(-1207.175,207.55);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEABQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1636.setTransform(-1221.375,207.6);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1637.setTransform(-1227.825,209.525);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1638.setTransform(-1238.825,209.525);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgOAUABQALAAAIADQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADAEAAAHIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAALADAHQADAIAGADQAGAEAGABQAHgBAGgEQAGgDADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgEgHAAQgHAAgFAEg");
	this.shape_1639.setTransform(-1251.275,207.55);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1640.setTransform(-1267.725,209.525);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgFgHQgEgJgBgPIAAg0QAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAGAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1641.setTransform(-1279.15,209.525);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1642.setTransform(-1288.925,209.525);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#3E5EAB").s().p("AAuBJIgEgEIgDgGIgEgHIgGgSIg6AAIgGASQgEALgDADQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgKIAFgJQACgDAEgDQAEgCAGAAQAFAAAFACQAEADACADIAEAIIAFALIAlBcQAEAKAAAEQAAAGgEAEQgEAEgGAAIgGgBgAgVAPIAqAAIgVg5g");
	this.shape_1643.setTransform(-1301.175,207.55);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgEgGgIQgGgGgEgJQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgOAKgJQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgKgHgGQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAFgNIAEgJQADgDAGAAQAFAAAEADQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAIgMAEQgLAFgPAAQgKAAgJgCg");
	this.shape_1644.setTransform(-1236.525,182.4);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#3E5EAB").s().p("AgyBEQgEgEAAgJIAAhtQAAgKAFgEQAEgEAKAAIAkAAQAQAAAJADQAJACAHAGQAGAFADAJQAEAIAAAKQAAAWgOAKQgNALgbAAIgaAAIAAApQAAAJgEAEQgEAFgGAAQgHAAgEgFgAgZgGIAUAAQAJAAAHgDQAHgCAEgFQADgEAAgIQAAgKgFgGQgHgGgSAAIgUAAg");
	this.shape_1645.setTransform(-1250.225,182.525);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#3E5EAB").s().p("AgZAyQgKgFgFgGQgFgHAAgGQAAgFAEgDQADgDAEAAQAFAAACACIAEAGQAEAHAGADQAGAEAJAAQAIAAAFgEQAFgDAAgFQAAgHgFgDQgGgDgLgDQgOgEgIgDQgJgDgFgGQgFgGAAgJQAAgIAEgIQAFgHAKgEQAJgEANAAQAJAAAJACQAIACAFAEQAGADADAFQADAEAAAEQAAAFgDADQgDADgGAAQgEAAgDgDIgHgHQgDgEgEgCQgEgCgGAAQgHAAgFADQgFADAAAFQAAAEAEACQADADAGACIAQAEQAMADAIAEQAIAEAEAFQAEAGAAAHQAAALgGAIQgFAIgKAEQgLAEgOAAQgOAAgLgEg");
	this.shape_1646.setTransform(-1267.725,184.375);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgFgHQgEgJgBgPIAAg0QAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAGAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1647.setTransform(-1279.15,184.375);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1648.setTransform(-1288.925,184.375);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#3E5EAB").s().p("AAuBJIgEgDIgDgHIgEgIIgGgSIg6AAIgGASQgEALgDAEQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgJIAFgKQACgDAEgDQAEgCAGAAQAFAAAFACQAEADACADIAEAIIAFALIAlBbQAEALAAAFQAAAEgEAFQgEAEgGAAIgGgBgAgVAQIAqAAIgVg7g");
	this.shape_1649.setTransform(-1301.175,182.4);

	this.instance_24 = new lib.Bitmap38();
	this.instance_24.setTransform(-1181,-284,1.0536,1.0536);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#3E5EAB").s().p("AgmCSIAGgPQAIgOAHgTQAGgSAGgaQAFgaAAgcQAAgbgGgaQgFgZgGgTQgHgTgIgNIgGgQQAAgEAIAAQALAAAGAEQAGAFAJARQAKAPAGAPQAHAPAEAOQAFAPADARQACAQAAAQQAAAigJAeQgJAdgTAfQgJARgHAFQgFAEgLAAQgIAAAAgEg");
	this.shape_1650.setTransform(-525.4,-301.15);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#3E5EAB").s().p("AgQBuQgGgIAAgOIAAilIgzAAQgMAAgGgGQgFgFAAgIQAAgJAGgGQAGgEALAAICTAAQAMgBAFAGQAGAFAAAJQAAAIgGAFQgGAGgLAAIgzAAIAAClQAAAOgHAIQgGAGgKABQgJgBgHgGg");
	this.shape_1651.setTransform(-540.825,-304.1);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAFAIQAGAHAJAEQAJAGAPAAQAUAAAMgKQANgKABgOQAAgLgIgIQgGgHgMgDQgKgEgSgEQgZgHgRgHQgQgHgKgNQgKgNAAgVQAAgSAKgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgFAHgKAAQgIAAgEgEQgDgEgGgJQgFgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQAAAGADAFQAEAFAGAEIAOAGIAVAFQATAFAQAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_1652.setTransform(-561.4,-304.3);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#3E5EAB").s().p("AhPBvQgDgHAAgOIAAi3QgBgMAGgGQAFgGAKAAQAJAAAGAGQAFAGAAAMIAAAFQAMgPANgHQANgHAPAAQAUAAAQAKQARAKAKAUQAJATAAAbQABAUgGAPQgGARgJALQgKALgOAGQgNAGgPAAQgRAAgMgHQgNgIgLgOIAABAQAAAcgUAAQgNAAgEgHgAgchHQgMANAAAbQAAAaAMANQAMAOARAAQAKAAAJgGQAKgGAFgLQAFgNAAgRQAAgRgEgMQgGgMgJgHQgJgGgLAAQgRAAgMAOg");
	this.shape_1653.setTransform(-661.1,-297.975);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#3E5EAB").s().p("AAxBwQgGgGABgMIAAgEQgJAKgIAGQgJAGgJADQgJADgMABQgPAAgOgHQgMgGgKgMQgKgNgFgQQgFgQAAgTQABgnATgWQAUgXAfAAQASABANAFQANAHAMANIAAg/QAAgNAEgHQAGgGAKgBQAKAAAEAHQAGAGgBAMIAAC7QAAAMgFAHQgGAFgIABQgJAAgGgHgAgUgPQgKAGgEAMQgGAMAAARQAAAQAGANQAGAMAIAGQAKAHAKAAQALAAAKgHQAJgFAGgNQAFgMAAgRQAAgRgFgNQgGgLgKgGQgJgHgLAAQgLAAgJAHg");
	this.shape_1654.setTransform(-698.65,-304.3);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgHAHQgGAHgJAAQgJAAgGgHQgFgGgBgNIAAi2QABgOAFgHQAGgIAJAAQAKABAGAGQAGAHAAANIAABnIAvgyIAOgMQAEgEAHAAQAIAAAFAFQAGAFgBAIQAAAJgRAQIgWATIArBFIAHAMQACAEAAADQAAAKgFAHQgGAFgJABQgHAAgFgFg");
	this.shape_1655.setTransform(-724.7,-304.3);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgEgFQgGgEAAgHQAAgGAGgFQAFgEAJAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEAAAGIACARIAAAdIAPAAQAKAAAFAEQAEAFAAAGQAAAJgHADQgGAEgOAAIgHAAIAABNIABAQQAAAFADADQADAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQAAALgLAFQgMAGgVAAQgTAAgKgHg");
	this.shape_1656.setTransform(-758.7,-304.025);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QgBANgGAGQgGAHgJAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_1657.setTransform(-774.55,-301.125);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#3E5EAB").s().p("AA8ByQgHgEgEgGIgHgNIg3hVIgmAlIAAAvQABAOgHAIQgHAGgJABQgHgBgFgDQgGgDgDgFQgCgFAAgGIgBgQIAAiqQAAgNAHgIQAFgGAMgBQAKABAHAGQAFAIAAANIAABRIBbhfQAGgHAFgDQAEgEAIAAQAKAAAHAHQAFAFAAAIQABALgLAKIg5A2IBBBbQAIAKADAIQADAGABAHQAAAIgHAGQgFAGgLAAQgKgBgFgEg");
	this.shape_1658.setTransform(-815,-304.3);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQABgZAJgUQALgVATgKQATgMAaAAQARAAANAFQAOAFAKAIQAJAHAFAJQAGAJAAAHQAAAIgHAFQgFAGgIAAQgFAAgEgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAJAAQANAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAGAAQAIAAAGAGQAEAGAAAGQAAAIgEAJQgFAJgKAJQgKAIgPAFQgOAFgTAAQgnAAgVgXg");
	this.shape_1659.setTransform(-853.5,-301.175);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgJADgMAAQgQAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQADAKAGAGQAGAFALAAQALAAAJgGQAKgGADgLQAFgJAAgdIAAg0QAAgNAFgGQAGgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgFgHg");
	this.shape_1660.setTransform(-891.95,-301.125);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#3E5EAB").s().p("AAUCVQgFgCgFgFQgFgGgGgMQgNgUgHgTQgIgUgFgVQgEgUAAgYQAAgWAEgVQAEgUAJgVQAIgTAMgUQAGgMAFgGQAGgFAEgBQAEgCAIAAQAHAAAAAEIgHARQgHAQgHARQgGARgGAZQgFAaAAAbQAAAcAFAZQAGAZAGATQAHASAIAPIAGAQQAAAEgHAAIgMgBg");
	this.shape_1661.setTransform(-930.8,-301.15);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#3E5EAB").s().p("AA7B0QgFgBgEgEIgIgJIgHgLIhXiEIAACFQABANgHAHQgFAGgKABQgKgBgGgGQgGgHAAgNIAAiwQAAgLACgHQAEgHAHgEQAHgEAHgBQAHAAAEACQAFADADADIAHAJIAHALIBYCGIAAiHQAAgNAGgHQAFgGAKgBQALABAFAGQAGAHAAANIAACzQAAAegZABQgGgBgGgCg");
	this.shape_1662.setTransform(-956.85,-304.3);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#3E5EAB").s().p("AgvBuQgVgJgPgPQgOgRgHgVQgHgXAAgZQAAgaAHgWQAIgWAOgPQAPgQAUgIQAVgJAaAAQAjAAAZAPQAaAOANAbQANAbAAAjQAAAagHAWQgHAWgPAQQgOAPgVAJQgVAJgbAAQgaAAgVgJgAgahLQgLAFgJAKQgIAKgFAPQgFAQAAATQAAATAFAPQAFAQAJALQAIAKAMAGQAMAEANAAQARAAAPgJQAPgIAJgTQAJgSAAgbQAAgZgIgSQgIgSgPgKQgPgKgTAAQgOABgMAFg");
	this.shape_1663.setTransform(-981.675,-304.3);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#3E5EAB").s().p("AAiBdIAAhIQAAgVgHgKQgFgLgRAAQgLAAgJAHQgJAGgFAKQgDAKAAAYIAAA5QAAAMgGAHQgFAHgLAAQgVAAAAgaIAAi5QAAgMAFgHQAGgHAKAAQALAAAFAHQAGAHAAAMIAABAQAIgKAHgFQAIgFAJgDQAJgDALAAQAQAAANAHQAMAGAIAOQAEAHABAKQACAJAAAMIAABSQAAANgFAGQgHAHgKAAQgUAAAAgag");
	this.shape_1664.setTransform(-1012,-304.3);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#3E5EAB").s().p("Ag5BAQgXgXAAgnQABgZAJgUQALgVATgKQATgMAaAAQARAAANAFQAOAFAKAIQAJAHAFAJQAGAJAAAHQAAAIgHAFQgFAGgIAAQgGAAgDgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgMAPQgLAPAAAYQAAAMADALQADAKAFAHQAHAHAHAEQAIADAJAAQANAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAGAAQAIAAAGAGQAEAGAAAGQAAAIgEAJQgFAJgKAJQgKAIgPAFQgOAFgTAAQgnAAgVgXg");
	this.shape_1665.setTransform(-1031.25,-301.175);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgHAEgMAAIgJAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1666.setTransform(-1045.85,-304.025);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#3E5EAB").s().p("AAmBSQgGgFgCgHIgGgSIgYhSIgXBSQgFARgFAJQgGAJgNAAQgHAAgFgDQgFgDgEgFIgFgMIgEgLIgjhlQgFgOAAgGQAAgHAGgFQAFgGAIAAQALAAADAGQAEAGAEAPIAcBeIAZhXIAHgTQABgGAGgEQAFgFAJAAQAJAAAGAFQAFAEACAGIAGATIAaBXIAcheIAEgPQACgFAEgDQAEgEAIAAQAHAAAGAGQAGAFAAAHQAAAHgFANIgjBlIgHATQgDAGgFAEQgFAFgKAAQgJAAgGgFg");
	this.shape_1667.setTransform(-1073.675,-301.125);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAGAIQAEAHAJAEQAKAGAPAAQATAAANgKQANgKABgOQAAgLgIgIQgGgHgMgDQgLgEgRgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgMAQgUAKQgUAKgdAAQghAAgWgOg");
	this.shape_1668.setTransform(-1097.25,-304.3);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIABgQQAAgGADgEQACgEAFgDQAFgDAGAAQAHAAAGAGQAEAEABAGIABARIAAAdIAQAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1669.setTransform(-1154.2,-304.025);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgFgEAAgHQAAgGAFgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAFAEAAAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQgBALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1670.setTransform(-1198.55,-304.025);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAFALAFAIQAFAHAIAEQAKAGAPAAQATAAAOgKQAMgKAAgOQAAgLgGgIQgIgHgLgDQgKgEgSgEQgZgHgQgHQgRgHgJgNQgKgNAAgVQAAgSAKgPQAKgOATgJQAUgHAagBQAVAAAPAGQAPAFAKAJQAKAJAGAJQAEAKAAAIQAAAJgFAGQgGAHgJAAQgJAAgDgEQgFgEgEgJQgGgNgJgHQgJgHgSAAQgTgBgKAJQgMAHAAAMQAAAGAEAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgLAQQgKAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_1671.setTransform(-1215.3,-304.3);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAJAAIAFAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIARAAQAJAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAFAAAEAEQAEAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1672.setTransform(-1239.25,-304.025);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#3E5EAB").s().p("Ag3BpQgPgJgKgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAFAEQAGAFADAJQAEALAFAIQAGAHAIAEQAKAGAPAAQAUAAAMgKQANgKABgOQAAgLgIgIQgHgHgLgDQgKgEgSgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAPAFALAJQAJAJAFAJQAFAKAAAIQAAAJgGAGQgGAHgIAAQgJAAgEgEQgDgEgGgJQgFgNgKgHQgIgHgTAAQgRgBgMAJQgLAHABAMQAAAGADAFQAEAFAHAEIAMAGIAWAFQATAFAQAGQAPAFAMAHQALAIAGALQAGANAAARQAAAVgKAQQgMAQgUAKQgVAKgcAAQghAAgWgOg");
	this.shape_1673.setTransform(-1294,-304.3);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#3E5EAB").s().p("AgPARQgIgGABgLQgBgJAIgHQAGgGAJgBQAKABAGAGQAIAHAAAJQAAALgIAGQgGAHgKAAQgIAAgHgHg");
	this.shape_1674.setTransform(-1317.8,-294.8);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_1675.setTransform(-1327.775,-304.3);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgEgEQgEgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgNAAgDAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1676.setTransform(-692.55,336.625);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgMQAAgYAMgOQAMgPAUAAQALAAAIAEQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAJAAAKQAAALADAHQADAHAGAEQAGAFAGAAQAHAAAGgFQAGgDADgIQAEgHAAgLQAAgLgEgIQgDgHgGgDQgGgFgHAAQgHAAgFAFg");
	this.shape_1677.setTransform(-720.025,334.65);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1678.setTransform(-732.05,336.625);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgJgFgPQgFgNAAgRQAAgQAEgOQAFgOAKgJQAKgKAOgFQAOgFAQAAQAPAAALAEQALAEAHAFQAHAGADAHQAEAGAAAGQAAAFgEAEQgEAEgGgBQgDABgDgCIgFgEIgJgNQgEgEgGgDQgGgCgKgBQgJABgIADQgIADgFAHQgGAHgDAJQgDAKAAALQAAAZAMANQALAOAUAAQAKAAAJgDIASgIIAAgXIgXAAQgIAAgEgCQgEgDAAgFQAAgGADgCQAEgCAGgBIAhAAIAKACQAEAAADADQACAEAAAHIAAAbIgBAJIgEAGIgHAGQgNAGgMAEQgMADgOAAQgQAAgOgFg");
	this.shape_1679.setTransform(-779.075,334.65);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhArg");
	this.shape_1680.setTransform(-797.725,334.75);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1681.setTransform(-806.875,336.6);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1682.setTransform(-813.525,336.6);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAEgGABQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1683.setTransform(-829.925,334.7);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgFAGAAQAFAAAEAFQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAIgMAEQgLAFgPAAQgKAAgJgCg");
	this.shape_1684.setTransform(-852.175,334.65);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1685.setTransform(-870.6,336.625);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAEgGABQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1686.setTransform(-879.325,334.7);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1687.setTransform(-885.375,336.6);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgMQAAgYAMgOQAMgPAUAAQALAAAIAEQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAJAAAKQAAALADAHQADAHAGAEQAGAFAGAAQAHAAAGgFQAGgDADgIQAEgHAAgLQAAgLgEgIQgDgHgGgDQgGgFgHAAQgHAAgFAFg");
	this.shape_1688.setTransform(-895.225,334.65);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#3E5EAB").s().p("AAjBGQgEgFAAgJIAAgwIg9AAIAAAwQAAAJgFAFQgEAEgGAAQgHAAgEgEQgDgFAAgJIAAhvQAAgKADgEQAEgEAHAAQAGAAAFAEQAEAEAAAKIAAAoIA9AAIAAgoQAAgKAEgEQAEgEAHAAQAGAAAEAEQAEAEAAAKIAABvQAAAJgEAFQgEAEgGAAQgHAAgEgEg");
	this.shape_1689.setTransform(-926.275,334.65);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgHADgEQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAKQgEAKgGAHQgGAHgIADQgIAEgKABQgKAAgIgFQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgFgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgIAAgLQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1690.setTransform(-989.525,338.6);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgDgEQgEgEgBgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgEAEgGAAQgFAAgEgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1691.setTransform(-1004.9,336.625);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgFACgIAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQAEAEAAAIIAABMQAAAIgEADQgDAEgGAAQgGAAgDgEg");
	this.shape_1692.setTransform(-1019.8,336.625);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#3E5EAB").s().p("AAlBIQgEgDgCgEIgFgJIgig0IgXAXIAAAdQAAAJgFAFQgEAEgGAAQgEAAgDgCQgDgCgCgEIgCgFIAAgLIAAhpQAAgKAEgEQADgEAHAAQAGAAAFAEQAEAEAAAKIAAAxIA4g6IAHgHQACgCAGAAQAFAAAFAEQADADAAAGQABAGgHAGIgjAhIAoA6QAFAFACAGQACAEAAAEQAAAFgEAEQgDADgHAAQgGAAgEgCg");
	this.shape_1693.setTransform(-1032.95,334.65);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhArg");
	this.shape_1694.setTransform(-1051.475,334.75);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1695.setTransform(-1060.625,336.6);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1696.setTransform(-1067.275,336.6);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#3E5EAB").s().p("AgaBBQgMgJgGgOQgDgJgBgKQgBgJAAgLQAAgOABgMQACgMADgJQAGgOALgHQALgHAPAAQAKAAAHADQAJADAGAHQAGAGAEAJQAIARAAAcQAAAQgCAMQgCALgFAJQgHAMgKAGQgLAGgNAAQgOAAgMgIgAgRgnQgGAMABAbQgBASADAMQACALAFAHQAFAFAIAAQAJABAFgHQAFgGACgLQACgNAAgRQAAgSgCgMQgCgLgFgGQgGgFgIgBQgMAAgFAOg");
	this.shape_1697.setTransform(-1081.55,334.7);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1698.setTransform(-1107.075,334.65);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1699.setTransform(-1127.75,336.625);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAEgGABQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1700.setTransform(-1136.475,334.7);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgDAEQgFAEgGAAQgFAAgFgEQgDgEAAgJIAAhLQAAgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQABAJgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1701.setTransform(-1148.05,336.625);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAJgDQAKgEAMAAQAPAAALAGQAMAHAFAKQAGALgBALQABAJgGADQgGADgLAAIgzAAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1702.setTransform(-1171.6,336.625);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhArg");
	this.shape_1703.setTransform(-1200.875,334.75);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1704.setTransform(-1210.025,336.6);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgEQgEgDAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEADQgDAEgHAAg");
	this.shape_1705.setTransform(-1216.675,336.6);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAEgGABQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1706.setTransform(-1227.675,334.7);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1707.setTransform(-1257,336.625);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1708.setTransform(-1266.15,334.825);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#3E5EAB").s().p("AgDBJIgJgFIgHgEIgHgIIAAACQAAAIgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhzQAAgIADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgEALgBQANABAKAGQAKAHAGAMQAFALAAAQQAAAMgDAKQgDAKgGAHQgGAIgIAEQgIAEgKAAQgHAAgEgBgAgMgJQgGAEgDAGQgEAJAAAKQAAAQAIAJQAHAJALAAQAKgBAHgIQAHgJAAgQQAAgLgDgIQgDgGgFgEQgGgFgHAAQgHAAgGAFg");
	this.shape_1709.setTransform(-1287.925,334.65);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgHQAIgFAFgNIAEgJQADgDAGAAQAFAAAEADQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1710.setTransform(-1197.625,309.5);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgFACgIAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1711.setTransform(-1242.1,311.475);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#3E5EAB").s().p("AgWBFQgJgEgGgGQgGgHgDgHQgDgGAAgFQAAgFADgEQAEgDAFAAQADAAADABQACACABACQAFAOAGAGQAGAHAKAAQAGAAAFgDQAFgDAFgGQADgGAAgHQAAgMgGgGQgHgHgKAAIgFABIgGAAQgGAAgDgDQgCgCAAgEQAAgFADgDQAEgDAHAAIAEAAQAIAAAHgFQAGgFAAgKQAAgIgFgFQgGgFgIAAQgFAAgEABQgEACgDADIgDAHIgEAIQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBABIgGABQgEAAgCgDQgEgDAAgFQAAgGADgFQADgGAGgFQAGgFAIgDQAKgDAJAAQAKAAAHADQAJACAFAFQAGAFADAGQADAHAAAHQAAAKgEAHQgFAHgIAHQAIAEAGAEQAEAFADAHQADAGAAAHQAAAJgDAJQgFAIgHAGQgGAHgJAEQgKADgLAAQgMAAgJgEg");
	this.shape_1712.setTransform(-1288.45,309.575);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#3E5EAB").s().p("AgZBGQgLgEgGgGQgGgGAAgHQAAgFAEgDQADgCAFAAQAFAAAFAFIAEAFQACADAEACQACACAEABIAJABQAJgBAGgCQAGgEACgEQACgGABgFIABgUQgHAJgIAFQgIAEgKAAQgOAAgKgHQgJgGgGgNQgFgLAAgRQAAgMADgJQADgJAGgIQAGgGAJgDQAIgEAJAAQAKAAAIAEQAJAFAHAJIAAgEQAAgGADgEQADgEAGAAQAHAAADAFQADAFAAAKIAABMQAAAOgDAJQgDAJgGAHQgHAGgKADQgJADgOAAQgOAAgLgEgAgRgsQgIAIABARQgBAPAIAIQAGAIALAAQAHAAAFgDQAHgEADgGQAEgIAAgJQAAgRgHgJQgIgJgLAAQgLAAgGAJg");
	this.shape_1713.setTransform(-1118.95,288.3);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQALAAAIAEQAIAFAFAIQACAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1714.setTransform(-1131,286.325);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1715.setTransform(-1151.625,284.35);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1716.setTransform(-1157.025,284.4);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#3E5EAB").s().p("AAjBGQgEgFAAgJIAAgwIg9AAIAAAwQAAAJgFAFQgEAEgGAAQgHAAgEgEQgDgFAAgJIAAhvQAAgKADgEQAEgEAHAAQAGAAAFAEQAEAEAAAKIAAAoIA9AAIAAgoQAAgKAEgEQAEgEAHAAQAGAAAEAEQAEAEAAAKIAABvQAAAJgEAFQgEAEgGAAQgHAAgEgEg");
	this.shape_1717.setTransform(-1167.325,284.35);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAFQAIAGALAAQAMAAAJgGQAIgHAFgLIAEgJQADgEAGgBQAFABAEAEQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1718.setTransform(-1199.475,284.35);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgFACgIAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1719.setTransform(-1242.1,286.325);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#3E5EAB").s().p("AghBIQgIAAgEgEQgEgEAAgFQAAgEACgGIAGgJIAYgXIAPgNQAHgEAFgGQAFgGAEgGQACgGAAgGQAAgGgDgFQgDgEgFgDQgFgDgFAAQgNAAgIALIgCAIIgGAKQgDAEgFgBQgFAAgEgCQgDgEAAgFQAAgHADgIQAEgHAFgGQAHgFAJgEQAJgEAMAAQAPAAAKAFQAGADAGAFQAFAGADAHQADAHAAAIQAAAMgGAKQgGAJgGAFIgWASQgNAMgGAGIgEAHIAxAAQAIAAAEADQAEADAAAFQAAAFgDADQgDAEgGAAg");
	this.shape_1720.setTransform(-1288.35,284.3);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#3E5EAB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1721.setTransform(-599.925,239.975);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgGAAgEgEQgDgEAAgJIAAhLQgBgHAEgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQALAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHAAAPIAAAzQAAAJgFAEQgDAEgHAAQgFAAgFgEg");
	this.shape_1722.setTransform(-664.5,236.025);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgKAAgNQAAgYAMgNQAMgOAUgBQALAAAIAFQAIADAHAJIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAIAAAKQAAALADAIQADAHAGAFQAGADAGAAQAHAAAGgDQAGgEADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgEgHgBQgHABgFAEg");
	this.shape_1723.setTransform(-691.975,234.05);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgIgEgEgHQgEgJAAgPIAAg0QAAgIADgEQAEgEAFAAQAGAAAEAEQAEAEAAAIIAAApQAAAKACAGQACAGADAEQAFADAHAAQAFAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQADAEAAAIIAABMQAAAIgDADQgDAEgGAAQgFAAgEgEg");
	this.shape_1724.setTransform(-716.1,236.025);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgDgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHAEAKQADAKAAALQAAAMgDAKQgFAKgGAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJgBgQQABgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1725.setTransform(-728.2,236.025);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgKgFgOQgFgNAAgRQAAgQAEgNQAFgPAKgJQAKgKAOgFQAOgFAQAAQAPAAALAEQALAEAHAFQAHAHADAGQAEAHAAAEQAAAGgEAEQgEADgGAAQgDAAgDgBIgFgEIgJgNQgEgEgGgDQgGgDgKAAQgJAAgIAEQgIADgFAHQgGAGgDAKQgDAKAAALQAAAYAMAOQALAOAUAAQAKgBAJgCIASgHIAAgYIgXAAQgIAAgEgCQgEgDAAgFQAAgFADgDQAEgCAGAAIAhAAIAKABQAEABADACQACAEAAAIIAAAbIgBAJIgEAFIgHAGQgNAGgMAEQgMADgOAAQgQAAgOgFg");
	this.shape_1726.setTransform(-751.025,234.05);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#3E5EAB").s().p("AgOBGQgEgEAAgJIAAhFIgHAAQgHAAgCgDQgEgCAAgEQAAgKAOAAIAGAAIAAgIQAAgNADgHQAEgIAHgDQAHgDAMAAQAYAAAAALQAAAEgCADQgDACgDAAIgFgBIgHAAQgHAAgCAEQgCAFAAAIIAAAGIAGAAQAPAAAAAJQAAAGgDACQgFACgHAAIgGAAIAABFQAAAJgEAEQgEAEgFAAQgGAAgDgEg");
	this.shape_1727.setTransform(-796.75,234.05);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQADADABAEIABAKIAAASIAKAAQAGAAADADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgNAAQgLAAgGgEg");
	this.shape_1728.setTransform(-809.05,234.225);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEADgEQAEgDAEAAQAGABAFAFIAFAFQABADADACQADACAEAAIAJABQAJAAAGgCQAGgDACgFQACgFABgGIAAgTQgGAIgIAFQgIAEgKAAQgNAAgKgHQgLgGgFgNQgFgLAAgRQAAgLADgKQADgJAHgIQAFgGAIgEQAIgDAKAAQAKAAAJAEQAHAFAIAJIAAgEQAAgGADgEQADgEAGAAQAIAAADAFQACAFAAAKIAABMQAAANgDAKQgDAJgGAHQgGAGgKADQgLADgOAAQgNAAgLgEgAgSgsQgGAIgBARQABAPAGAIQAIAIAKAAQAGAAAHgDQAFgEAEgGQAEgHAAgKQAAgRgIgJQgGgJgMAAQgKAAgIAJg");
	this.shape_1729.setTransform(-831.35,238);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQAAgLADgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQAKAHAGAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQAAAJADAHQAEAGAFAEQAGAEAHAAQAEAAAFgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgKAAQgKAAgFAHg");
	this.shape_1730.setTransform(-843.3,236.025);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIABAOIAAAxQAAAIgDAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1731.setTransform(-855.3,236.025);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#3E5EAB").s().p("AAaBHIgIgJIgWgnIgPANIAAAWQAAAIgDAEQgEAEgFAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAEgBAJIAAA/IAegfIAIgIQADgCAEAAQAGABACADQAEADAAAEQAAAGgLAKIgOANIAcAqIADAHIACAGQAAAGgEAEQgDADgGAAQgEAAgDgDg");
	this.shape_1732.setTransform(-890.65,234.05);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#3E5EAB").s().p("AgkAoQgOgPAAgZQAAgLAEgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgPgOgAgPgcQgGAHgCANIAwAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1733.setTransform(-953.95,236.025);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#3E5EAB").s().p("AAaAyQgDgEgBgHIAAgDIgJAKQgGAEgGACQgFACgJAAQgJAAgIgEQgHgEgEgHQgGgJAAgPIAAg0QAAgIAEgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQADAGADAEQAFADAGAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAFAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1734.setTransform(-974.7,236.025);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgGADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgEgEgBgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgEAEQgEAEgFAAQgHAAgDgEQgEgEgBgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1735.setTransform(-1008.6,236.025);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgEgHgKAAQgGAAgHAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgDgEgBgIIAAhMQABgIADgDQADgEAGAAQADAAADABIAFAFQABAEABAFIAAADQAGgKAJgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFAAAGIACAOIAAAxQAAAIgEAEQgEAEgGAAQgGAAgEgEg");
	this.shape_1736.setTransform(-1049.15,236.025);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgGAAgEgEQgDgEAAgJIAAhLQgBgHAEgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQADAHABAPIAAAzQAAAJgFAEQgDAEgHAAQgGAAgEgEg");
	this.shape_1737.setTransform(-1109.1,236.025);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#3E5EAB").s().p("AAaAyQgDgEgBgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgIgEgEgHQgEgJgBgPIAAg0QAAgIAEgEQAEgEAGAAQAFAAAFAEQADAEAAAIIAAApQAAAKACAGQACAGADAEQAEADAHAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAFAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1738.setTransform(-1124,236.025);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#3E5EAB").s().p("AAaBHIgHgJIgXgnIgPANIAAAWQAAAIgDAEQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAEgBAJIAAA/IAegfIAIgIQADgCAFAAQAEABADADQAEADAAAEQAAAGgLAKIgOANIAbAqIAEAHIACAGQAAAGgEAEQgDADgGAAQgFAAgCgDg");
	this.shape_1739.setTransform(-1135.35,234.05);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgDgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHADAKQAEAKAAALQAAAMgEAKQgEAKgGAHQgIAHgJAEQgKAEgMAAQgMAAgJgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAIgJgBgQQABgPgIgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1740.setTransform(-1191.25,236.025);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQABACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgHgEg");
	this.shape_1741.setTransform(-1200.5,234.225);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1742.setTransform(-1219.5,234.225);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgLAKQgFAEgGACQgGACgIAAQgJAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QgBgIAEgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKACAGQABAGAEAEQAFADAHAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1743.setTransform(-1229.45,236.025);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHABAPIAAAzQgBAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1744.setTransform(-1244.35,236.025);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgGADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgEAEQgEAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgEAEgGAAQgHAAgDgEg");
	this.shape_1745.setTransform(-1262.05,236.025);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgDgKQgEgKAAgMQAAgLAEgKQADgKAHgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAKAEAHAHQAHAHAEAKQADAKAAALQAAAMgDAKQgFAKgGAHQgHAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1746.setTransform(-1276.95,236.025);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1747.setTransform(-204.975,209);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#3E5EAB").s().p("AgOBGQgEgEAAgJIAAhFIgIAAQgGAAgDgCQgDgDAAgFQAAgJANAAIAHAAIAAgIQAAgMADgIQAEgHAHgDQAHgEANAAQAXAAAAAMQAAADgDACQgCAEgDAAIgGgBIgGgBQgIAAgCAEQgCAFAAAHIAAAHIAHAAQAPAAAAAJQAAAGgEACQgDACgIAAIgHAAIAABFQAAAJgDAEQgEAEgFAAQgFAAgEgEg");
	this.shape_1748.setTransform(-232.05,208.9);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1749.setTransform(-238.425,208.95);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAHgBQADAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1750.setTransform(-244.35,209.075);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1751.setTransform(-250.925,208.95);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1752.setTransform(-297.3,209.075);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgOAOIAAAVQgBAIgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgEQAEgFAGAAQAGAAAEAEQAEAFAAAHIAABAIAdgeIAIgJQADgBAFAAQAEgBAEAEQADADAAAFQAAAFgLALIgOALIAbArIAFAIIABAEQAAAHgEADQgDAEgGAAQgFAAgCgCg");
	this.shape_1753.setTransform(-318.4,208.9);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1754.setTransform(-327.225,208.95);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1755.setTransform(-351.625,209);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1756.setTransform(-378.425,208.9);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1757.setTransform(-383.825,208.95);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgIgHQgHgHgDgKQgEgKAAgMQAAgLAEgKQAEgKAGgHQAHgHAKgEQAKgEALAAQAMAAAKAEQAJAEAIAHQAHAHAEAKQADAKAAALQAAAMgDAKQgEAKgHAHQgIAHgJAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1758.setTransform(-392.6,210.875);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgMQAAgZAMgOQAMgOAUABQALAAAIADQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADAEAAAHIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAALADAHQADAIAGADQAGAEAGABQAHgBAGgEQAGgDADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgEgHAAQgHAAgFAEg");
	this.shape_1759.setTransform(-424.975,208.9);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1760.setTransform(-433.625,208.9);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1761.setTransform(-450.925,208.95);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#3E5EAB").s().p("AgtBEQgEgEAAgJIAAhtQAAgGACgEQACgEAEgCQADgCAHAAIBDAAQAHAAAEADQADADAAAFQAAAFgDADQgEADgHAAIg4AAIAAAlIAvAAQAHAAADADQADADAAAFQAAAEgDADQgDADgHAAIgvAAIAAAvQAAAJgEAEQgEAFgGAAQgHAAgEgFg");
	this.shape_1762.setTransform(-459.25,209.025);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1763.setTransform(-476.575,209);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1764.setTransform(-523.175,208.9);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFABAGIAAAOIAAAxQAAAIgDAEQgEAEgFAAQgGAAgFgEg");
	this.shape_1765.setTransform(-543.85,210.875);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1766.setTransform(-552.575,208.95);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgMAAgFAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgGAAgEgEQgDgEAAgJIAAhLQgBgHAEgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHAAAPIAAAzQAAAJgFAEQgDAEgHAAQgGAAgEgEg");
	this.shape_1767.setTransform(-564.15,210.875);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQAAgLADgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQALAHAFAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQAAAJADAHQAEAGAFAEQAGAEAHAAQAFAAAEgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgKAAQgKAAgFAHg");
	this.shape_1768.setTransform(-587.7,210.875);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1769.setTransform(-616.975,209);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#3E5EAB").s().p("AAaBIIgIgLIgWgmIgPAOIAAAVQAAAIgDAEQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgEQADgFAHAAQAFAAAEAEQADAFAAAHIAABAIAdgeIAJgJQADgBAEAAQAGgBACAEQAEADAAAFQAAAFgLALIgOALIAcArIADAIIACAEQAAAHgEADQgDAEgGAAQgEAAgDgCg");
	this.shape_1770.setTransform(-646.4,208.9);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1771.setTransform(-667.65,209.075);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1772.setTransform(-677.6,210.875);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#3E5EAB").s().p("AgVAyQgJgEgHgHQgIgHgDgKQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHAEAKQADAKAAALQAAAMgDAKQgFAKgHAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1773.setTransform(-689.7,210.875);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#3E5EAB").s().p("AAaBIIgIgLIgWgmIgOAOIAAAVQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgEQAEgFAGAAQAHAAADAEQADAFABAHIAABAIAcgeIAJgJQADgBAEAAQAFgBAEAEQADADAAAFQAAAFgLALIgOALIAcArIADAIIACAEQAAAHgDADQgEAEgFAAQgGAAgCgCg");
	this.shape_1774.setTransform(-701.05,208.9);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAFAAADADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQABACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgHgEg");
	this.shape_1775.setTransform(-715.4,209.075);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1776.setTransform(-733.875,208.9);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAGQAKAHAGAMQAGAMAAARQAAANgDAJQgEAKgGAHQgGAHgIAEQgIADgKAAQgKABgIgFQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgtQgIAKAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgHAAgLQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_1777.setTransform(-742.575,212.85);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1778.setTransform(-759.925,209);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#3E5EAB").s().p("AgZBBQgNgJgFgOQgEgIgBgKQgBgKAAgMQAAgOABgLQACgMAEgJQAFgNALgIQALgHAPAAQAJAAAJADQAIADAGAGQAGAHAEAJQAIARAAAcQAAAQgCALQgCAMgGAJQgGAMgLAGQgKAGgNAAQgOAAgLgIgAgRgnQgFANgBAaQABASACALQACAMAFAGQAFAHAIgBQAJAAAFgGQAFgGACgMQACgLAAgSQAAgSgCgLQgCgMgGgFQgFgHgIAAQgMABgFANg");
	this.shape_1779.setTransform(-790,208.95);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#3E5EAB").s().p("AgWBFQgJgEgGgGQgGgHgDgHQgDgGAAgFQAAgFAEgEQADgDAGAAQACAAADABQABABAAAAQABABAAAAQAAAAABABQAAABAAAAQAFAOAGAGQAGAHALAAQAEAAAGgDQAFgDAEgGQAEgGAAgHQAAgMgGgGQgGgHgLAAIgGABIgFAAQgFAAgDgDQgDgCAAgEQAAgFAEgDQADgDAHAAIAEAAQAIAAAGgFQAHgFAAgKQAAgIgGgFQgFgFgHAAQgGAAgEABQgEACgDADIgDAHIgEAIQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABIgHABQgDAAgEgDQgDgDAAgFQAAgGADgFQADgGAGgFQAGgFAJgDQAJgDAJAAQAKAAAHADQAJACAFAFQAGAFADAGQADAHAAAHQAAAKgFAHQgDAHgJAHQAIAEAFAEQAGAFACAHQADAGAAAHQAAAJgEAJQgDAIgIAGQgGAHgKAEQgJADgLAAQgLAAgKgEg");
	this.shape_1780.setTransform(-801.85,208.975);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1781.setTransform(-815.525,208.9);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1782.setTransform(-844.925,208.95);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgGADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgEAEQgEAEgFAAQgHAAgDgEQgEgEgBgJIAAhLQAAgHAEgEQAEgEAGAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_1783.setTransform(-856.5,210.875);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#3E5EAB").s().p("AgkAoQgNgPAAgZQAAgLADgKQAEgKAGgHQAHgIAKgDQAJgEALAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQAAAJADAHQAEAGAFAEQAGAEAGAAQAGAAADgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgKAAQgZAAgPgOgAgPgcQgGAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_1784.setTransform(-880.05,210.875);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQADADAAAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAHgBQADAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1785.setTransform(-889.2,209.075);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQAAgLADgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQAKAHAGAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQAAAJADAHQAEAGAFAEQAGAEAHAAQAEAAAFgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgKAAQgKAAgFAHg");
	this.shape_1786.setTransform(-904.05,210.875);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f("#3E5EAB").s().p("AAaBIIgHgLIgXgmIgPAOIAAAVQAAAIgDAEQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgEQADgFAHAAQAFAAAEAEQAEAFgBAHIAABAIAegeIAIgJQADgBAEAAQAGgBACAEQAEADAAAFQAAAFgLALIgOALIAbArIAEAIIACAEQAAAHgEADQgDAEgGAAQgEAAgDgCg");
	this.shape_1787.setTransform(-915.3,208.9);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1788.setTransform(-937.875,208.95);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f("#3E5EAB").s().p("AgJBFQgDgDAAgJIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1789.setTransform(-943.275,208.9);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgGQAAgGAEgCQADgDAFAAQAFgBAFAGIAEAFQADADACABQADACAEACIAJABQAKAAAFgEQAGgCACgGQACgEABgHIABgTQgHAJgIAFQgIAEgKAAQgNAAgLgHQgJgHgGgMQgFgMAAgQQAAgLADgKQADgKAHgGQAGgHAHgDQAJgEAJAAQAKAAAIAFQAJAEAHAJIAAgDQAAgIADgDQADgEAGAAQAHAAADAFQADAFAAAJIAABNQAAANgDAKQgDAKgGAFQgHAHgJADQgKADgOAAQgPAAgKgEgAgRgtQgIAKAAAPQAAARAIAHQAGAIALAAQAHAAAFgEQAHgDADgGQAEgIAAgKQAAgQgIgJQgGgJgMAAQgLAAgGAIg");
	this.shape_1790.setTransform(-964.4,212.85);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAJgDQAKgEAMAAQAPAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAFAEAGAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1791.setTransform(-988.45,210.875);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1792.setTransform(-1019.775,208.95);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAFALAAALQAAAJgFADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1793.setTransform(-1049.1,210.875);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQAEADAAAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQgBADACADQACACAFAAIAGgBIAGgBQADAAADADQADACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1794.setTransform(-1058.25,209.075);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgEAEAAQAFABAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1795.setTransform(-1094.225,208.95);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgMQAAgZAMgOQAMgOAUABQALAAAIADQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADAEAAAHIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAALADAHQADAIAGADQAGAEAGABQAHgBAGgEQAGgDADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgEgHAAQgHAAgFAEg");
	this.shape_1796.setTransform(-1124.125,208.9);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f("#3E5EAB").s().p("AgkAoQgNgPAAgZQAAgLADgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQAAAJADAHQAEAGAFAEQAHAEAFAAQAGAAADgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_1797.setTransform(-1172.55,210.875);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f("#3E5EAB").s().p("AgDBJIgJgFIgHgEIgHgIIAAACQAAAIgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhzQAAgIADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgFALABQANAAAKAGQAKAGAGANQAFAKAAARQAAAMgDAKQgDAKgGAHQgGAIgIAEQgIAEgKAAQgHAAgEgBgAgMgKQgGAFgDAHQgEAHAAAMQAAAPAIAJQAHAJALAAQAKgBAHgIQAHgJAAgQQAAgLgDgHQgDgHgFgFQgGgEgHAAQgHAAgGAEg");
	this.shape_1798.setTransform(-1184.475,208.9);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgGQAAgGADgCQAEgDAEAAQAHgBAEAGIAEAFQACADADABQADACAEACIAJABQAJAAAGgEQAGgCACgGQADgEAAgHIAAgTQgGAJgIAFQgIAEgKAAQgNAAgLgHQgKgHgFgMQgFgMAAgQQAAgLADgKQAEgKAFgGQAHgHAIgDQAHgEAKAAQAKAAAJAFQAHAEAIAJIAAgDQAAgIADgDQADgEAGAAQAIAAACAFQADAFAAAJIAABNQAAANgDAKQgDAKgGAFQgGAHgLADQgKADgOAAQgOAAgKgEgAgSgtQgGAKAAAPQAAARAGAHQAHAIALAAQAGAAAHgEQAFgDAEgGQAEgIAAgKQAAgQgIgJQgGgJgMAAQgLAAgHAIg");
	this.shape_1799.setTransform(-1202.5,212.85);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgDgHgLAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1800.setTransform(-1214.55,210.875);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f("#3E5EAB").s().p("AgsBHQgGgCAAgHQAAgEAEgDQACgDAFAAIAEABIAFABQAEAAADgCQADgBACgDIAFgKIADgGIgihSQgCgHAAgDQAAgEABgDQACgCADgCQADgCADAAQAGAAADAEQADADADAHIAVBBIAVg8IAFgMQACgEADgCQACgBADAAIAHABIAEAFQABADAAADIgBAFIgCAHIgjBaQgFAMgEAHQgDAGgHAEQgHAEgMAAQgMAAgGgDg");
	this.shape_1801.setTransform(-1238.1,212.85);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgFgJAAgPIAAg0QABgIADgEQAEgEAFAAQAGAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAHAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAFgEAFAAQAGAAAEAEQADAEAAAIIAABMQAAAIgDADQgEAEgFAAQgGAAgDgEg");
	this.shape_1802.setTransform(-1265.25,210.875);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f("#3E5EAB").s().p("AgpBHQgKAAgEgDQgDgFAAgKIAAhqQAAgKADgDQAEgFAKAAIAuAAIARABQAIACAFAEQAFADAEAEQAEAFADAGQABAFAAAGQABAWgWAKQAcAHABAbQgBALgGALQgGAJgLAFQgGADgIABIgUAAgAgdAyIAdAAQAeAAAAgWQAAgKgHgFQgJgFgOAAIgdAAgAgdgMIAaAAQAKAAAGgCQAGgCADgFQACgFAAgFQAAgLgIgEQgHgDgPAAIgXAAg");
	this.shape_1803.setTransform(-1125.75,183.75);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f("#3E5EAB").s().p("AgZBBIADgLIAahvQACgKACgDQACgDAFAAQAFAAADACQACADAAAEIgBAKIgbBxIgCAIQgBAEgCABQgDACgDAAQgLAAAAgJg");
	this.shape_1804.setTransform(-1141.05,183.75);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAGgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1805.setTransform(-1151.525,183.8);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBADAAQAFAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1806.setTransform(-1190,183.925);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f("#3E5EAB").s().p("AgpBHQgKAAgDgDQgFgFAAgKIAAhqQAAgKAFgDQADgFAKAAIAuAAIARABQAIACAFAEQAFADAEAEQAFAFACAGQACAFAAAGQAAAWgWAKQAdAHAAAbQAAALgHALQgGAJgLAFQgGADgJABIgTAAgAgdAyIAdAAQAeAAAAgWQAAgKgHgFQgJgFgOAAIgdAAgAgdgMIAaAAQAKAAAGgCQAFgCAEgFQACgFAAgFQAAgLgIgEQgHgDgPAAIgXAAg");
	this.shape_1807.setTransform(-1212.7,183.75);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgFACgIAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1808.setTransform(-1242.1,185.725);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f("#3E5EAB").s().p("AgJALQgFgEAAgHQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1809.setTransform(-1279.425,189.675);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f("#3E5EAB").s().p("AAMBFQgDgEAAgIIAAhXQgYATgJAAQgEAAgDgEQgDgDAAgEQAAgFADgDIALgGQAMgFAHgGQAGgHAFgHIAIgKQABgBAFAAQAFAAADAEQADAEAAAHIAABvQAAATgNAAQgGAAgEgEg");
	this.shape_1810.setTransform(-1289.675,183.825);

	this.instance_25 = new lib.Bitmap39();
	this.instance_25.setTransform(-1113,-292,1.1289,1.1289);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f("#3E5EAB").s().p("AgnBvQgWgJgPgQQgQgPgIgWQgIgWAAgbQAAgZAIgXQAIgWAPgPQAQgQAWgIQAWgJAbAAQAXAAASAHQASAGALAKQALAJAGAKQAFAKAAAJQAAAJgGAGQgHAGgJAAQgFAAgEgDQgFgCgDgEIgOgVQgGgGgKgFQgLgFgPAAQgPABgNAFQgNAGgIAKQgKALgEAPQgFAPAAASQAAAoATAWQASAVAgABQAQgBAOgEQAOgEAPgIIAAglIgkAAQgNAAgGgEQgHgEAAgJQAAgIAFgEQAGgFAJAAIA1AAQAKAAAGACQAHACAEAFQAEAFAAANIAAAsQAAAIgBAFQgCAGgEADQgFAFgHAEQgVALgTAFQgUAFgWABQgagBgVgHg");
	this.shape_1811.setTransform(-585.125,-304.3);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f("#3E5EAB").s().p("AAoBQQgHgHABgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgDAJgBAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAEADADAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_1812.setTransform(-635.25,-301.125);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f("#3E5EAB").s().p("AA8BxQgFgEgEgGIgKgQIgUgfQgJgRgIgJQgHgJgIgDQgIgEgNAAIgQAAIAABKQAAAOgGAIQgHAGgKABQgLAAgGgIQgHgHAAgOIAAivQABgPAGgHQAHgHAPABIBKAAQAQAAALABQAMABAIAEQALAFAIAIQAJAJAEALQAFALgBANQAAAZgOAPQgPAPgdAGQANAHAKANQAMANAJAOQAIAOAFAMQAFAMABAEQAAAEgEAFQgCAEgGADQgFADgGAAQgIAAgFgEgAgwgRIApAAQAQgBAMgDQALgCAGgIQAGgGAAgNQAAgJgFgIQgEgGgJgEQgIgDgXAAIgrAAg");
	this.shape_1813.setTransform(-664.6,-304.1);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f("#3E5EAB").s().p("AAnBQQgFgHgBgMIAAhGQAAgVgFgMQgHgLgRAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_1814.setTransform(-694.25,-301.125);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgJAHQgJAHgEAMQgDAJAAAZIAAA2QgBANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQANAHAGANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgFgHg");
	this.shape_1815.setTransform(-752.6,-301.125);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f("#3E5EAB").s().p("AAxBwQgFgGgBgMIAAgEQgIAKgJAGQgIAGgKADQgIADgMABQgPAAgNgHQgOgGgJgMQgKgNgEgQQgGgQAAgTQAAgnAUgWQAUgXAgAAQARABAMAFQANAHAMANIAAg/QAAgNAGgHQAFgGAJgBQALAAAEAHQAFAGABAMIAAC7QAAAMgGAHQgFAFgKABQgIAAgGgHgAgUgPQgJAGgGAMQgEAMAAARQAAAQAFANQAFAMAJAGQAKAHAKAAQALAAAKgHQAJgFAFgNQAGgMAAgRQAAgRgGgNQgFgLgJgGQgKgHgLAAQgLAAgJAHg");
	this.shape_1816.setTransform(-791.75,-304.3);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f("#3E5EAB").s().p("AAqBQQgGgGAAgLIAAgGQgIAKgJAGQgHAHgLADQgIADgNAAQgQAAgMgGQgNgGgGgMQgIgNAAgaIAAhTQAAgNAFgGQAHgHAJAAQAJAAAHAHQAFAGAAANIAABDQAAAPADAKQADAKAGAGQAHAFALAAQAJAAAKgGQAKgGADgLQAFgJAAgdIAAg0QAAgNAFgGQAGgHAJAAQALAAAFAHQAGAGAAANIAAB6QAAAMgFAHQgHAGgIAAQgJAAgFgHg");
	this.shape_1817.setTransform(-838.3,-301.125);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQAAgVgHgMQgGgLgRAAQgLAAgJAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQANAHAGANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_1818.setTransform(-857.65,-301.125);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f("#3E5EAB").s().p("AhQBuQgGgIAAgOIAAivQAAgQAHgGQAHgHAPABIA7AAQAaAAAOADQAOAEALAKQAKAIAFANQAFAOAAAQQAAAjgVARQgWATgqgBIgqAAIAABBQAAAOgGAHQgHAIgKAAQgKgBgHgGgAgogLIAfAAQAQABALgEQALgEAGgHQAFgIAAgNQAAgPgIgJQgKgKgfAAIgfAAg");
	this.shape_1819.setTransform(-896.475,-304.1);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f("#3E5EAB").s().p("AgPBtQgKgHgDgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgFgEAAgHQAAgGAFgFQAFgEALAAIAEAAIAAgaIAAgQQABgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAFAEABAGIABARIAAAdIAQAAQAIAAAFAEQAFAFAAAGQAAAJgHADQgGAEgNAAIgIAAIAABNIAAAQQABAFADADQADAEAHAAIALgCIAKgBQAFAAAEAEQADAEAAAGQAAALgLAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1820.setTransform(-920.85,-304.025);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1821.setTransform(-996.525,-301.15);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f("#3E5EAB").s().p("Ag5A/QgXgXAAgoQAAgSAFgQQAGgQALgMQALgLAPgHQAQgGASAAQAZAAASALQASAKAJARQAJARAAARQAAAPgJAFQgJAFgRAAIhTAAQABAOAFALQAGALAKAGQAJAFAKABQAIgBAGgBQAHgCAGgEIAKgIIANgMQAEgCAGAAQAGAAAEADQAFAEAAAGQAAAGgFAIQgFAIgJAGQgJAIgOAEQgNAFgSAAQgpAAgWgYgAgYgtQgKALgDAWIBNAAQgCgWgKgLQgKgLgRAAQgPAAgKALg");
	this.shape_1822.setTransform(-1076.525,-301.15);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f("#3E5EAB").s().p("AgnBvQgWgJgPgQQgQgPgIgWQgIgWAAgbQAAgZAIgXQAIgWAPgPQAQgQAWgIQAWgJAbAAQAXAAASAHQASAGALAKQALAJAGAKQAFAKAAAJQAAAJgGAGQgHAGgJAAQgFAAgEgDQgFgCgDgEIgOgVQgGgGgKgFQgLgFgPAAQgPABgNAFQgNAGgIAKQgKALgEAPQgFAPAAASQAAAoATAWQASAVAgABQAQgBAOgEQAOgEAPgIIAAglIgkAAQgNAAgGgEQgHgEAAgJQAAgIAFgEQAGgFAJAAIA1AAQAKAAAGACQAHACAEAFQAEAFAAANIAAAsQAAAIgBAFQgCAGgEADQgFAFgHAEQgVALgTAFQgUAFgWABQgagBgVgHg");
	this.shape_1823.setTransform(-1098.925,-304.3);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f("#3E5EAB").s().p("AAoBQQgHgHAAgMIAAhGQABgVgHgMQgFgLgSAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgGAHgJAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAFgGAJAAQAGAAAFADQAEADADAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAAOAIQAMAHAHANQAFAIABAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgFgHg");
	this.shape_1824.setTransform(-1176.4,-301.125);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f("#3E5EAB").s().p("AhQBuQgGgIAAgOIAAivQAAgQAHgGQAHgHAPABIA7AAQAaAAAOADQAOAEALAKQAKAIAFANQAFAOAAAQQAAAjgVARQgWATgqgBIgqAAIAABBQAAAOgGAHQgHAIgKAAQgKgBgHgGgAgogLIAfAAQAQABALgEQALgEAGgHQAFgIAAgNQAAgPgIgJQgKgKgfAAIgfAAg");
	this.shape_1825.setTransform(-1204.875,-304.1);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAGAAQAIAAAGAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIAKgCIAKgBQAGAAADAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_1826.setTransform(-1229.25,-304.025);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1827.setTransform(-1244.975,-301.15);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f("#3E5EAB").s().p("AAxBRQgHgHgHgLQgPAMgPAGQgNAGgSAAQgRAAgMgHQgMgGgHgLQgHgLAAgNQAAgRALgNQALgMAUgDIAUgFIAagGIAZgGQAAgSgGgHQgHgIgSAAQgQAAgIAFQgIAEgGAJIgIAMQgDADgIAAQgHAAgFgFQgFgFAAgGQAAgMAIgLQAIgKARgHQAQgHAZAAQAcAAAQAHQAQAGAHAPQAGAOAAAYIAAAZIAAAWQAAAMAEAOQAEANAAADQAAAHgGAFQgHAGgHAAQgHAAgGgGgAAFAIIgYAGQgHACgGAFQgGAGAAAIQAAAKAHAHQAIAHALAAQAMAAALgGQALgFAFgJQAFgJAAgXIAAgGQgJADgSAEg");
	this.shape_1828.setTransform(-1263.975,-301.15);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f("#3E5EAB").s().p("AgPARQgIgGABgLQgBgJAIgHQAGgGAJgBQAKABAGAGQAIAHgBAJQABALgIAGQgGAHgKAAQgIAAgHgHg");
	this.shape_1829.setTransform(-1307.8,-294.8);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_1830.setTransform(-1327.775,-304.3);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f("#3E5EAB").s().p("AA1AyQgEgEgBgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgEAEgGAAQgFAAgEgEQgFgEAAgJIAAhLQAAgHAEgEQAEgEAGAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1831.setTransform(-668.75,325.225);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgLAAgMQAAgYAMgNQAMgPAUAAQALAAAIAFQAIADAHAJIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADAEAAAHIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAGQgDAJAAAJQAAALADAIQADAHAGAFQAGADAGAAQAHAAAGgDQAGgEADgIQAEgHAAgMQAAgKgEgIQgDgGgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_1832.setTransform(-696.225,323.25);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f("#3E5EAB").s().p("AAaAyQgDgEgBgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgEgHQgFgJgBgPIAAg0QAAgIAEgEQAEgEAGAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQADAGADAEQAEADAHAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAFAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1833.setTransform(-720.35,325.225);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgJgFgOQgFgOAAgRQAAgQAEgNQAFgPAKgJQAKgKAOgFQAOgFAQAAQAPAAALAEQALADAHAGQAHAHADAGQAEAHAAAEQAAAGgEAEQgEAEgGAAQgDAAgDgCIgFgEIgJgMQgEgFgGgDQgGgDgKAAQgJAAgIAEQgIADgFAHQgGAGgDAKQgDAKAAALQAAAYAMAOQALAOAUAAQAKgBAJgCIASgHIAAgYIgXAAQgIAAgEgCQgEgDAAgFQAAgFADgDQAEgCAGAAIAhAAIAKABQAEABADACQACAEAAAIIAAAbIgBAJIgEAFIgHAGQgNAGgMADQgMAEgOAAQgQAAgOgFg");
	this.shape_1834.setTransform(-755.275,323.25);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhAqg");
	this.shape_1835.setTransform(-773.925,323.35);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f("#3E5EAB").s().p("AgOBGQgEgFAAgHIAAhGIgHAAQgHAAgCgDQgEgCAAgEQAAgKAOAAIAGAAIAAgIQAAgMADgIQAEgHAHgEQAGgDANAAQAYAAAAALQAAAEgCADQgDACgDAAIgGgBIgGAAQgHAAgCAFQgDADAAAJIAAAGIAHAAQAQAAAAAJQAAAGgFADQgEABgHAAIgHAAIAABGQABAHgEAFQgEAEgFAAQgFAAgEgEg");
	this.shape_1836.setTransform(-801,323.25);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEAAQAFAAAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1837.setTransform(-807.375,323.3);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEADgEQAEgDAFAAQAFABAFAFIAFAFQACADACACQADABAEABIAJABQAKAAAFgCQAGgEACgFQACgEABgGIABgTQgHAIgIAEQgIAFgKAAQgOAAgJgHQgKgGgGgNQgFgMAAgPQAAgNADgJQADgJAHgIQAGgGAHgEQAJgDAJAAQAKAAAIAEQAJAFAHAJIAAgEQAAgGADgEQAEgEAFAAQAHAAAEAFQACAFAAAJIAABNQAAANgDAKQgDAJgGAHQgHAGgJADQgLADgNAAQgPAAgKgEgAgSgtQgHAKAAAQQAAAPAHAIQAIAIAKAAQAGAAAGgEQAHgDADgGQAEgHAAgKQAAgRgIgJQgHgJgLAAQgKAAgIAIg");
	this.shape_1838.setTransform(-835.6,327.2);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f("#3E5EAB").s().p("AgkAoQgNgPAAgZQgBgLAEgKQADgKAHgHQAHgIAJgDQALgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAFgCQAEgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_1839.setTransform(-847.55,325.225);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAHgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1840.setTransform(-859.55,325.225);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgPANIAAAWQAAAIgDAEQgFAEgEAAQgHAAgEgEQgDgFAAgHIAAhxQAAgJADgFQAEgEAHAAQAFAAAEAEQADAEAAAJIAAA/IAdgfIAJgHQADgDAEAAQAFAAADAEQAEADAAAFQAAAGgLAJIgOANIAcArIADAGIACAGQAAAFgDAEQgEAEgFAAQgFAAgDgDg");
	this.shape_1841.setTransform(-894.9,323.25);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFgBgEgEgAgIgyQgEgDAAgGQAAgGAEgDQAEgEAEAAQAFAAAEADQAEADAAAHQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_1842.setTransform(-903.725,323.3);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhAqg");
	this.shape_1843.setTransform(-928.125,323.35);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALgBALQABAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgCAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1844.setTransform(-958.2,325.225);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgJgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAGAAQAGAAAFAEQADAEAAAIIAAApQAAAKABAGQADAGAEAEQADADAHAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1845.setTransform(-978.95,325.225);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f("#3E5EAB").s().p("AA0AyQgEgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgNAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgEAEgGAAQgHAAgDgEQgFgEAAgJIAAhLQABgHADgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgGAAgFgEg");
	this.shape_1846.setTransform(-1012.85,325.225);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1847.setTransform(-1053.4,325.225);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAHQAKAGAGAMQAGAMAAARQAAANgDAIQgEALgGAHQgGAHgIADQgIAFgKAAQgKgBgIgEQgIgEgHgJIAAAnQAAASgNAAQgHAAgDgEgAgRgtQgIAKAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_1848.setTransform(-1097.975,327.2);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgGAAQgOAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgFAAgEgEQgFgEAAgJIAAhLQAAgHAEgEQAEgEAGAAQAFAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHAAAPIAAAzQgBAJgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1849.setTransform(-1113.35,325.225);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f("#3E5EAB").s().p("AAaAyQgDgEAAgHIAAgDIgKAKQgGAEgGACQgFACgIAAQgKAAgIgEQgIgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAHAAQAFAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgDAEgGAAQgGAAgDgEg");
	this.shape_1850.setTransform(-1128.25,325.225);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgPANIAAAWQAAAIgDAEQgFAEgEAAQgHAAgDgEQgEgFAAgHIAAhxQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAEgBAJIAAA/IAdgfIAJgHQADgDAEAAQAGAAACAEQAEADAAAFQAAAGgLAJIgOANIAcArIADAGIACAGQAAAFgEAEQgDAEgGAAQgEAAgDgDg");
	this.shape_1851.setTransform(-1139.6,323.25);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f("#3E5EAB").s().p("AgwAaIBEgaIhEgaIAAgcIBhArIAAAXIhhAqg");
	this.shape_1852.setTransform(-1156.575,323.35);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgDgKQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHAEAKQADAKAAALQAAAMgDAKQgFAKgHAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgEAHAAAKQAAAKAEAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1853.setTransform(-1195.5,325.225);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADACADQACACAFAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1854.setTransform(-1204.75,323.425);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgMAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1855.setTransform(-1266.3,325.225);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgEgKQgDgKAAgMQAAgLADgKQAFgKAHgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHgBAKQABAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1856.setTransform(-1281.2,325.225);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgOANIAAAWQAAAIgFAEQgDAEgGAAQgGAAgEgEQgDgFAAgHIAAhxQAAgJADgFQAEgEAGAAQAHAAADAEQADAEABAJIAAA/IAcgfIAJgHQADgDAFAAQAEAAAEAEQADADAAAFQAAAGgLAJIgOANIAbArIAFAGIABAGQAAAFgDAEQgEAEgFAAQgGAAgCgDg");
	this.shape_1857.setTransform(-1292.55,323.25);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f("#3E5EAB").s().p("AgOBGQgEgEAAgJIAAhFIgIAAQgFAAgEgDQgDgCAAgFQAAgJAOAAIAGAAIAAgIQAAgNADgHQADgIAIgCQAHgEAMAAQAYAAAAAMQAAADgDACQgCAEgDAAIgGgBIgGgBQgHAAgDAEQgCAEAAAIIAAAHIAHAAQAQAAAAAJQAAAGgFACQgDACgIAAIgHAAIAABFQABAJgEAEQgEAEgFAAQgGAAgDgEg");
	this.shape_1858.setTransform(-336.25,298.1);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1859.setTransform(-342.625,298.15);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAFAAADADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQABADACADQACACAEAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1860.setTransform(-348.55,298.275);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1861.setTransform(-355.125,298.15);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgHADgEQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAKQgEAKgGAHQgGAHgIAEQgIADgKAAQgKABgIgFQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgHAAgLQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1862.setTransform(-386.775,302.05);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f("#3E5EAB").s().p("AAaBIIgIgKIgWgnIgOAOIAAAVQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQADAFABAHIAABAIAcgfIAJgIQADgBAFAAQAFAAADADQADADAAAEQAAAHgLAKIgOALIAbArIAFAIIABAEQAAAGgDAFQgEADgFAAQgFAAgDgCg");
	this.shape_1863.setTransform(-422.6,298.1);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1864.setTransform(-431.425,298.15);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1865.setTransform(-501.325,298.15);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgEgGgIQgGgGgEgJQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgFAGAAQAFAAAEAFQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAIgMAEQgLAFgPAAQgKAAgJgCg");
	this.shape_1866.setTransform(-523.575,298.1);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgOAUABQALAAAIADQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADAEAAAHIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAHQgDAHAAALQAAALADAHQADAIAGADQAGAEAGABQAHAAAGgFQAGgDADgIQAEgHAAgLQAAgLgEgHQgDgIgGgDQgGgFgHAAQgHAAgFAFg");
	this.shape_1867.setTransform(-542.475,298.1);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1868.setTransform(-568.425,298.15);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f("#3E5EAB").s().p("AgtBEQgEgEAAgJIAAhtQAAgGACgEQACgEAEgCQAEgCAGAAIBDAAQAHAAADADQAEADAAAFQAAAFgEADQgDADgHAAIg4AAIAAAlIAvAAQAHAAADADQADADAAAFQAAAEgEADQgDADgGAAIgvAAIAAAvQAAAJgEAEQgEAFgHAAQgGAAgEgFg");
	this.shape_1869.setTransform(-576.75,298.225);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgEgGgIQgGgGgEgJQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgFAGAAQAFAAAEAFQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAIgMAEQgLAFgPAAQgKAAgJgCg");
	this.shape_1870.setTransform(-625.625,298.1);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1871.setTransform(-670.075,298.15);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f("#3E5EAB").s().p("AA0AyQgEgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgNAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQABgHADgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgGAAgFgEg");
	this.shape_1872.setTransform(-681.65,300.075);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAGAAADgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgLAAQgIAAgHAHg");
	this.shape_1873.setTransform(-705.2,300.075);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f("#3E5EAB").s().p("AAaBIIgHgKIgXgnIgOAOIAAAVQgBAHgEAFQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAGAAAEAEQAEAFAAAHIAABAIAdgfIAIgIQADgBAFAAQAEAAAEADQADADAAAEQAAAHgLAKIgOALIAbArIAFAIIABAEQAAAGgEAFQgDADgGAAQgFAAgCgCg");
	this.shape_1874.setTransform(-763.9,298.1);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f("#3E5EAB").s().p("AAaBIIgHgKIgXgnIgPAOIAAAVQAAAHgDAFQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAFgBAHIAABAIAegfIAIgIQADgBAEAAQAGAAACADQAEADAAAEQAAAHgLAKIgOALIAbArIAEAIIACAEQAAAGgEAFQgDADgGAAQgEAAgDgCg");
	this.shape_1875.setTransform(-818.55,298.1);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQADADABAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgNAAQgLAAgGgEg");
	this.shape_1876.setTransform(-832.9,298.275);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgHADgEQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAKQgEAKgGAHQgGAHgIAEQgIADgKAAQgKABgIgFQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgHAAgLQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1877.setTransform(-860.075,302.05);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f("#3E5EAB").s().p("AgwAbIBEgbIhEgaIAAgbIBhAqIAAAWIhhAsg");
	this.shape_1878.setTransform(-877.425,298.2);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f("#3E5EAB").s().p("AgaBBQgLgJgHgOQgCgJgBgJQgCgKAAgLQAAgPACgLQABgMADgJQAGgOALgHQALgHAPAAQAKAAAHADQAJADAGAHQAGAGAFAJQAHARAAAcQAAAQgCALQgCAMgFAJQgHAMgKAGQgLAGgNAAQgOAAgMgIgAgRgnQgGANABAaQAAASACAMQACALAFAHQAFAFAIAAQAJAAAFgGQAFgGACgLQACgMAAgSQAAgSgCgLQgCgMgFgGQgGgFgIgBQgMAAgFAOg");
	this.shape_1879.setTransform(-907.5,298.15);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f("#3E5EAB").s().p("AgWBFQgJgEgGgGQgGgHgDgHQgDgGAAgFQAAgFADgEQAEgDAFAAQAEAAACABQADACAAACQAFAOAGAGQAGAHAKAAQAGAAAFgDQAFgDAFgGQADgGAAgHQAAgMgGgGQgHgHgKAAIgFABIgGAAQgGAAgDgDQgCgCAAgEQAAgFADgDQAEgDAHAAIAEAAQAIAAAHgFQAGgFAAgKQAAgIgFgFQgGgFgIAAQgFAAgEABQgEACgDADIgEAHIgDAIQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBABIgFABQgFAAgCgDQgEgDAAgFQAAgGADgFQADgGAGgFQAGgFAIgDQAKgDAKAAQAJAAAHADQAJACAFAFQAGAFADAGQADAHAAAHQAAAKgEAHQgEAHgJAHQAIAEAGAEQAEAFADAHQADAGAAAHQAAAJgDAJQgFAIgHAGQgGAHgJAEQgKADgLAAQgMAAgJgEg");
	this.shape_1880.setTransform(-919.35,298.175);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1881.setTransform(-953.7,300.075);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1882.setTransform(-962.425,298.15);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIACgGQABgDADgCQADgBADAAQAFAAADADQADADABAEIABAKIAAASIAKAAQAFAAAEADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADACADQACACAEAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgMAAQgMAAgGgEg");
	this.shape_1883.setTransform(-1006.7,298.275);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAFAEAGAAQAGAAADgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgLAAQgIAAgHAHg");
	this.shape_1884.setTransform(-1021.55,300.075);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f("#3E5EAB").s().p("AAaBIIgIgKIgWgnIgOAOIAAAVQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQADAFABAHIAABAIAcgfIAJgIQADgBAEAAQAFAAAEADQADADAAAEQAAAHgLAKIgOALIAbArIAFAIIABAEQAAAGgDAFQgEADgFAAQgFAAgDgCg");
	this.shape_1885.setTransform(-1032.8,298.1);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1886.setTransform(-1055.375,298.15);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f("#3E5EAB").s().p("AgZBGQgLgEgGgGQgGgGAAgGQAAgFADgDQAEgDAEAAQAHgBAEAGIAEAFQACADADABQADACAEACIAJABQAJAAAGgEQAGgDACgEQADgFAAgHIAAgTQgGAJgIAFQgIAEgKAAQgNAAgKgHQgLgHgFgMQgFgMAAgQQAAgMADgJQAEgJAFgHQAHgHAIgDQAHgEAKAAQAKAAAJAFQAHAEAIAJIAAgDQAAgHADgEQAEgEAFAAQAIAAADAFQACAFAAAKIAABMQAAAOgDAJQgDAKgGAFQgGAHgLADQgKADgOAAQgOAAgKgEgAgSgsQgGAIAAAQQAAARAGAHQAIAIAKAAQAGAAAHgDQAFgEAEgGQAEgIAAgKQAAgQgIgJQgGgJgMAAQgKAAgIAJg");
	this.shape_1887.setTransform(-1081.9,302.05);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1888.setTransform(-1093.95,300.075);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f("#3E5EAB").s().p("AgkAoQgNgPAAgZQAAgLADgKQAEgKAGgHQAHgIAKgDQAKgEAKAAQAQAAALAGQALAHAGAKQAFALABALQgBAJgFADQgGADgLAAIgyAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAEgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgKAAQgZAAgPgOgAgPgcQgGAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_1889.setTransform(-1105.95,300.075);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgFADQgFADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgDAEgHAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgDAJQgFAJAAAPIAAAkQAAAJgEAEQgEAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAJAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_1890.setTransform(-1120.75,300.075);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1891.setTransform(-1137.275,298.15);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQgBgLAEgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAALAGQALAHAGAKQAFALAAALQAAAJgFADQgGADgLAAIgyAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAFgCQAEgBADgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_1892.setTransform(-1166.6,300.075);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f("#3E5EAB").s().p("AgDBJIgJgFIgHgEIgHgIIAAACQAAAIgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhzQAAgIADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgEALAAQANAAAKAGQAKAHAGAMQAFALAAAQQAAAMgDAKQgDAKgGAHQgGAIgIAEQgIAEgKAAQgHAAgEgBgAgMgJQgGAEgDAHQgEAHAAALQAAAQAIAJQAHAJALAAQAKgBAHgIQAHgJAAgQQAAgLgDgHQgDgHgFgEQgGgFgHAAQgHAAgGAFg");
	this.shape_1893.setTransform(-1197.525,298.1);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFABAEADQAEADAAAHQAAAGgEADQgEADgFAAQgFAAgDgDg");
	this.shape_1894.setTransform(-1211.725,298.15);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgOAUABQALAAAIADQAIAFAHAIIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADAEAAAHIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAHQgDAHAAALQAAALADAHQADAIAGADQAGAEAGABQAHAAAGgFQAGgDADgIQAEgHAAgLQAAgLgEgHQgDgIgGgDQgGgFgHAAQgHAAgFAFg");
	this.shape_1895.setTransform(-1241.625,298.1);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QgBgIAEgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKACAGQABAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1896.setTransform(-1269.5,300.075);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f("#3E5EAB").s().p("AAuBJIgEgEIgDgGIgEgHIgGgSIg6AAIgGASQgEALgDADQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgKIAFgJQACgEAEgCQAEgCAGAAQAFAAAFACQAEACACAEIAEAIIAFALIAlBcQAEAKAAAEQAAAGgEAEQgEAEgGAAIgGgBgAgVAPIAqAAIgVg5g");
	this.shape_1897.setTransform(-1291.525,298.1);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAGALAAALQAAAJgGADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAGAAADgCQAFgBADgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgDAEgFAFQgGAEgIADQgKADgLAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgLAAQgIAAgHAHg");
	this.shape_1898.setTransform(-713.75,274.925);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEAEgDQADgEAEAAQAHABAEAFIAEAFQACADAEACQACABAEABIAJABQAJAAAGgDQAGgDACgFQADgFAAgFIAAgTQgGAIgIAEQgIAFgKAAQgOAAgKgHQgKgGgFgNQgFgMAAgPQAAgNADgJQAEgJAFgIQAHgGAIgEQAIgDAJAAQAKAAAJAEQAIAFAHAJIAAgDQAAgIADgDQAEgEAFAAQAIAAACAFQADAFAAAJIAABNQAAANgDAKQgDAJgGAGQgHAHgKADQgJADgPAAQgOAAgKgEgAgRgtQgIAKABAQQgBAPAIAIQAGAIALAAQAHAAAFgEQAGgDAEgGQAEgHAAgLQAAgQgHgJQgIgJgLAAQgLAAgGAIg");
	this.shape_1899.setTransform(-726.2,276.9);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgJgEgDgHQgGgJAAgPIAAg0QABgIADgEQADgEAGAAQAGAAAFAEQADAEAAAIIAAApQAAAKABAGQACAGAFAEQAEADAGAAQAGAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAEgEAGAAQAGAAAEAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1900.setTransform(-750.35,274.925);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgHADgEQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAHQAKAGAGAMQAGAMAAARQAAANgDAIQgEALgGAHQgGAHgIAEQgIAEgKAAQgKgBgIgEQgIgEgHgKIAAAoQAAASgNAAQgHAAgDgEgAgRgtQgIAKAAAQQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_1901.setTransform(-767.775,276.9);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f("#3E5EAB").s().p("AgsBHQgFgCAAgHQAAgFADgCQACgCAGgBIADABIAFABQAEAAAEgCQACgBACgEIAFgJIADgGIgihSQgCgHAAgDQgBgDACgDQACgEADgBQADgCADAAQAGAAADAEQADAEADAGIAVBBIAWg8IAEgMQACgEADgCQABgBAEAAIAGABIAFAFQABADABADIgCAFIgCAHIgjBaQgEAMgEAHQgEAHgHADQgHAEgMAAQgMAAgGgDg");
	this.shape_1902.setTransform(-796.8,276.9);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDAEgGAAQgFgBgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1903.setTransform(-816.825,273);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f("#3E5EAB").s().p("AgDBIIgJgDIgHgGIgHgHIAAADQAAAHgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgHIAAhzQAAgJADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgFALAAQANAAAKAHQAKAGAGAMQAFALAAAQQAAANgDAKQgDAKgGAIQgGAHgIAEQgIAEgKAAQgHAAgEgCgAgMgKQgGAFgDAGQgEAJAAALQAAAPAIAJQAHAIALAAQAKABAHgKQAHgIAAgRQAAgKgDgIQgDgGgFgFQgGgDgHAAQgHAAgGADg");
	this.shape_1904.setTransform(-842.825,272.95);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgDgEQgFgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgEAEgGAAQgFAAgEgEQgFgEAAgJIAAhLQAAgHAEgEQADgEAHAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1905.setTransform(-858.2,274.925);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQAAgLADgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQAKAHAGAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQAAAJADAHQAEAGAFAEQAGAEAHAAQAFAAAEgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgKAAQgKAAgFAHg");
	this.shape_1906.setTransform(-873,274.925);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f("#3E5EAB").s().p("AAaBHIgHgKIgXgmIgPANIAAAWQAAAHgDAFQgEAEgFAAQgHAAgDgEQgEgFAAgHIAAhxQAAgJAEgEQADgFAHAAQAFAAAEAEQAEAEgBAJIAAA/IAegeIAIgIQADgCAEgBQAGAAACAEQAEADAAAFQAAAGgLAJIgOANIAbArIAEAGIACAFQAAAGgEAEQgDAEgGAAQgEAAgDgDg");
	this.shape_1907.setTransform(-884.25,272.95);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f("#3E5EAB").s().p("AgjAoQgPgPAAgZQAAgLAEgKQADgKAHgHQAHgIAKgDQAJgEALAAQAQAAALAGQAMAHAFAKQAFALAAALQAAAJgFADQgGADgLAAIgzAAQAAAJAEAHQAEAGAGAEQAGAEAFAAQAGAAADgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgCAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1908.setTransform(-925.35,274.925);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgPANIAAAWQAAAHgDAFQgEAEgFAAQgHAAgDgEQgEgFAAgHIAAhxQAAgJAEgEQADgFAHAAQAFAAAEAEQAEAEgBAJIAAA/IAegeIAIgIQADgCAEgBQAGAAACAEQAEADAAAFQAAAGgLAJIgOANIAcArIADAGIACAFQAAAGgEAEQgDAEgGAAQgEAAgDgDg");
	this.shape_1909.setTransform(-957.25,272.95);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEADgDQAEgEAEAAQAGABAFAFIAFAFQABADADACQADABAEABIAJABQAJAAAGgDQAGgDACgFQACgFABgFIAAgTQgGAIgIAEQgIAFgKAAQgNAAgKgHQgLgGgFgNQgFgMAAgPQAAgNADgJQAEgJAGgIQAFgGAIgEQAIgDAKAAQAKAAAJAEQAHAFAIAJIAAgDQAAgIADgDQADgEAGAAQAIAAADAFQACAFAAAJIAABNQAAANgDAKQgDAJgGAGQgGAHgKADQgLADgOAAQgNAAgLgEgAgSgtQgGAKgBAQQABAPAGAIQAIAIAKAAQAGAAAHgEQAFgDAEgGQAEgHAAgLQAAgQgIgJQgGgJgMAAQgKAAgIAIg");
	this.shape_1910.setTransform(-974.9,276.9);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDAEgGAAQgFgBgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1911.setTransform(-1012.975,273);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f("#3E5EAB").s().p("AAVA6IAAgtQAAgNgDgGQgFgHgKAAQgGAAgGAEQgFAFgDAFQgDAGAAAQIAAAjQAAAHgDAFQgEAEgGAAQgOAAAAgQIAAhzQAAgIAEgEQAEgEAGAAQAGAAAEAEQADAEAAAIIAAAnIALgJQAEgDAFgBQAGgCAGgBQALAAAHAFQAJAEAEAIQADAFABAGIAAANIAAAzQAAAHgDAFQgEAEgFAAQgOAAAAgQg");
	this.shape_1912.setTransform(-1021.75,272.95);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f("#3E5EAB").s().p("AgZBGQgLgDgGgHQgGgGAAgHQAAgEADgDQAEgEAEAAQAHABAEAFIAEAFQACADAEACQACABAEABIAJABQAJAAAGgDQAGgDACgFQADgFAAgFIAAgTQgGAIgIAEQgIAFgKAAQgNAAgLgHQgKgGgFgNQgFgMAAgPQAAgNADgJQAEgJAFgIQAHgGAIgEQAHgDAKAAQAKAAAJAEQAHAFAIAJIAAgDQAAgIADgDQAEgEAFAAQAIAAACAFQADAFAAAJIAABNQAAANgDAKQgDAJgGAGQgHAHgKADQgJADgPAAQgOAAgKgEgAgSgtQgGAKAAAQQAAAPAGAIQAHAIALAAQAHAAAGgEQAFgDAEgGQAEgHAAgLQAAgQgHgJQgIgJgLAAQgLAAgHAIg");
	this.shape_1913.setTransform(-1051.2,276.9);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f("#3E5EAB").s().p("AgVBaQgFgDAAgHQgBgEADgDQADgDAEAAIACAAIAFAAIADAAQAFAAACgEQABgEAAgLIAAhZQAAgIADgEQAFgEAGAAQAGAAADAEQADAEAAAIIAABaIAAAPQgBAHgBACQgGARgVAAQgMAAgHgDgAAFhGQgEgDAAgGQAAgGAEgDQAEgEAGAAQAEAAAEADQAFADgBAHQABAGgFADQgDAEgFAAQgGAAgEgEg");
	this.shape_1914.setTransform(-1073.4,274.975);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQAEgKAGgHQAHgIAKgDQAJgEAMAAQAPAAALAGQAMAHAFAKQAGALgBALQABAJgGADQgGADgLAAIgzAAQABAJADAHQAEAGAGAEQAFAEAGAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgDAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgKAAgGAHg");
	this.shape_1915.setTransform(-1117.15,274.925);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f("#3E5EAB").s().p("AgpBHQgKAAgDgDQgEgFgBgKIAAhqQABgKAEgDQADgFAKAAIAtAAIASABQAHACAHADQAEADAEAFQAEAFADAFQACAGAAAGQAAAWgWAKQAdAHAAAbQAAALgHAKQgGAKgLAFQgGACgJABIgTABgAgdAyIAdAAQAeAAAAgWQAAgKgIgFQgHgFgPAAIgdAAgAgdgMIAaAAQAKAAAGgCQAFgCAEgFQACgFAAgFQAAgLgHgEQgIgDgPAAIgXAAg");
	this.shape_1916.setTransform(-1130,272.95);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f("#3E5EAB").s().p("AgZBCIACgMIAbhvQACgKACgDQACgDAGAAQAEAAADACQACADABADIgCALIgbBxIgCAIQgBADgCACQgCACgFAAQgJAAgBgIg");
	this.shape_1917.setTransform(-1145.3,272.95);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDAEgGAAQgFgBgEgEgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFgBAEAEQAEADAAAGQAAAGgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_1918.setTransform(-1155.775,273);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIABgKIABgGQACgDADgCQADgBADAAQAGAAACADQADADABAEIABAKIAAASIAKAAQAGAAADADQACADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIABAKQAAADABADQACACAFAAIAGgBIAGgBQADAAAEADQACACAAAEQAAAGgHAEQgIADgNAAQgLAAgHgEg");
	this.shape_1919.setTransform(-1194.25,273.125);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f("#3E5EAB").s().p("AgpBHQgKAAgDgDQgFgFAAgKIAAhqQAAgKAFgDQADgFAKAAIAtAAIASABQAHACAHADQAEADAFAFQADAFACAFQADAGAAAGQgBAWgVAKQAcAHAAAbQABALgHAKQgGAKgLAFQgGACgJABIgTABgAgeAyIAeAAQAeAAAAgWQAAgKgIgFQgHgFgPAAIgeAAgAgegMIAbAAQAKAAAGgCQAFgCAEgFQACgFAAgFQAAgLgHgEQgIgDgPAAIgYAAg");
	this.shape_1920.setTransform(-1216.95,272.95);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgJgEgDgHQgGgJABgPIAAg0QAAgIADgEQADgEAGAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAFgEAFAAQAGAAAEAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_1921.setTransform(-1246.35,274.925);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f("#3E5EAB").s().p("AAuBJIgEgEIgDgGIgEgIIgGgSIg6AAIgGASQgEALgDAEQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgKIAFgJQACgEAEgCQAEgCAGAAQAFAAAFACQAEACACAEIAEAIIAFALIAlBbQAEALAAAEQAAAFgEAFQgEAEgGAAIgGgBgAgVAPIAqAAIgVg6g");
	this.shape_1922.setTransform(-1268.375,272.95);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f("#3E5EAB").s().p("AgiBIQgHAAgEgEQgEgEAAgGQAAgDACgGIAHgJIAXgXIAPgNQAHgFAFgFQAFgGADgGQADgGAAgGQAAgGgDgFQgDgFgFgDQgFgCgFAAQgNAAgIALIgCAIIgGAKQgDAEgFAAQgFgBgEgDQgCgDAAgGQAAgGACgHQADgIAGgGQAHgGAJgEQAJgDAMAAQAOAAALAEQAGAEAGAFQAFAGADAHQADAHAAAIQAAAMgGAKQgGAJgGAFIgWASQgNAMgGAGIgFAHIAyAAQAIAAAEADQAEADAAAFQAAAGgDACQgDAEgGAAg");
	this.shape_1923.setTransform(-1292.6,272.9);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgFADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgDgEQgEgEgBgJIAAgpIAAgQQgBgFgDgEQgDgDgGAAQgOAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgEAEgFAAQgHAAgDgEQgFgEAAgJIAAhLQAAgHAEgEQAEgEAGAAQAFAAAEAEQADADAAAHIAAACQAHgIAIgEQAIgEAKAAQAKAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHgBAPIAAAzQAAAJgDAEQgFAEgFAAQgHAAgDgEg");
	this.shape_1924.setTransform(-1134.6,224.625);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgHIAAgDIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgHQgGgIgDgKQgDgLAAgMQAAgXAMgPQAMgNAUAAQALAAAIADQAIAEAHAJIAAgoQAAgIADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB1QAAAHgDAEQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_1925.setTransform(-1162.075,222.65);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1926.setTransform(-1174.1,224.625);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f("#3E5EAB").s().p("AAaAyQgDgEgBgHIAAgDIgJAKQgGAEgGACQgFACgJAAQgJAAgIgEQgHgEgEgHQgGgJAAgPIAAg0QAAgIAEgEQADgEAHAAQAGAAAEAEQADAEAAAIIAAApQAAAKABAGQACAGAEAEQAEADAHAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAFAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_1927.setTransform(-1186.2,224.625);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgDgKQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHAEAKQADAKAAALQAAAMgDAKQgFAKgHAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHgBAKQABAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJAAgQQAAgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1928.setTransform(-1198.3,224.625);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f("#3E5EAB").s().p("AgZBFQgNgFgKgKQgJgKgFgNQgFgOAAgRQAAgQAEgOQAFgNAKgKQAKgKAOgFQAOgFAQAAQAPAAALAEQALADAHAHQAHAFADAHQAEAGAAAFQAAAGgEAEQgEADgGABQgDgBgDgBIgFgEIgJgMQgEgFgGgDQgGgCgKAAQgJgBgIAEQgIADgFAHQgGAHgDAJQgDAJAAAMQAAAZAMANQALANAUAAQAKABAJgDIASgHIAAgYIgXAAQgIAAgEgDQgEgCAAgGQAAgEADgDQAEgCAGAAIAhAAIAKAAQAEACADACQACAEAAAIIAAAbIgBAJIgEAGIgHAEQgNAIgMACQgMAEgOAAQgQAAgOgFg");
	this.shape_1929.setTransform(-1221.125,222.65);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f("#3E5EAB").s().p("AgVAyQgKgEgGgHQgIgHgDgKQgEgKAAgMQAAgLAEgKQADgKAIgHQAGgHAKgEQAKgEALAAQAMAAAKAEQAKAEAGAHQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHQgGAHgKAEQgKAEgMAAQgLAAgKgEgAgNgdQgGAEgDAIQgDAHgBAKQABAKADAIQADAIAGAEQAGAEAHAAQAMAAAHgJQAHgJABgQQgBgPgHgJQgHgJgMAAQgHAAgGAEg");
	this.shape_1930.setTransform(-1280.75,224.625);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f("#3E5EAB").s().p("AgkAoQgNgPAAgYQgBgPAHgNQAGgMAMgHQANgHAPAAQAKAAAJADQAJADAFAEQAGAFAEAGQADAGAAAEQAAAFgEADQgDADgFABQgEgBgBgBIgGgGQgEgHgGgEQgFgEgJAAQgKABgIAIQgHAKAAAPQAAAHACAHQACAGADAFQAEAEAFACQAFACAFABQAIAAAGgFQAFgDAFgIIAFgHQADgCAEAAQAFAAADAEQADADABAEQAAAGgEAFQgCAGgHAFQgGAFgJADQgKADgLAAQgYAAgOgOg");
	this.shape_1931.setTransform(-1292.8,224.6);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFABAGIAAAOIAAAxQAAAIgDAEQgEAEgFAAQgGAAgFgEg");
	this.shape_1932.setTransform(-265.75,199.475);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgNQAAgXAMgOQAMgOAUgBQALAAAIAFQAIAEAHAIIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAJAAAJQAAALADAIQADAHAGAEQAGAFAGAAQAHAAAGgFQAGgDADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgFgHAAQgHAAgFAFg");
	this.shape_1933.setTransform(-290.375,197.5);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f("#3E5EAB").s().p("AAjBGQgEgFAAgJIAAgwIg9AAIAAAwQAAAJgFAFQgEAEgGAAQgHAAgEgEQgDgFAAgJIAAhvQAAgJADgFQAEgEAHAAQAGAAAFAEQAEAFAAAJIAAAoIA9AAIAAgoQAAgJAEgFQAEgEAHAAQAGAAAEAEQAEAFAAAJIAABvQAAAJgEAFQgEAEgGAAQgHAAgEgEg");
	this.shape_1934.setTransform(-321.425,197.5);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1935.setTransform(-340.1,199.475);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKAAgIgFQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1936.setTransform(-384.675,201.45);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f("#3E5EAB").s().p("AA0AyQgDgEAAgJIAAgrIgBgOQgBgFgDgEQgDgDgHAAQgFAAgFADQgEADgDAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgJIAAgpIAAgQQgBgFgDgEQgDgDgHAAQgMAAgEAJQgFAJAAAPIAAAkQAAAJgDAEQgFAEgFAAQgGAAgFgEQgEgEAAgJIAAhLQABgHADgEQADgEAGAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQAKAAAIAEQAGAEAFAIQAGgIAIgEQAIgEAJAAQALAAAIAEQAIAFAEAIQADAHAAAPIAAAzQAAAJgDAEQgFAEgGAAQgFAAgFgEg");
	this.shape_1937.setTransform(-400.05,199.475);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f("#3E5EAB").s().p("AAaBIIgHgKIgXgnIgOANIAAAWQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQAEAEAAAJIAAA/IAcgfIAJgIQADgCAFAAQAEABAEADQADADAAAEQAAAGgLAKIgOANIAbAqIAFAHIABAGQAAAFgDAFQgEADgFAAQgGAAgCgCg");
	this.shape_1938.setTransform(-426.3,197.5);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1939.setTransform(-459.075,199.45);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1940.setTransform(-475.475,197.55);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgEAGgBQAFABAEAEQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1941.setTransform(-497.725,197.5);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgEgHQgDgHgLAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQALAAAIAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1942.setTransform(-516.15,199.475);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1943.setTransform(-524.875,197.55);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1944.setTransform(-530.925,199.45);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1945.setTransform(-593.575,199.475);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1946.setTransform(-614.225,199.475);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKAAgIgFQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1947.setTransform(-626.125,201.45);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f("#3E5EAB").s().p("AAaBIIgIgKIgWgnIgOANIAAAWQAAAHgFAFQgDAEgGAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQADAEABAJIAAA/IAcgfIAJgIQADgCAEAAQAFABAEADQADADAAAEQAAAGgLAKIgOANIAcAqIADAHIACAGQAAAFgDAFQgEADgFAAQgGAAgCgCg");
	this.shape_1948.setTransform(-667.75,197.5);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1949.setTransform(-693.875,199.45);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1950.setTransform(-700.525,199.45);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f("#3E5EAB").s().p("AgOBIQgKgDgHgEQgIgFgGgHQgGgHgEgIQgEgJgCgJQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAKQAAAEgDAEQgEAEgFAAQgFAAgDgDQgDgCgDgHQgGgKgHgGQgIgFgLAAQgRAAgLAOQgKANAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgGQAIgHAFgLIAEgJQADgEAGgBQAFABAEAEQAEADAAAGQAAAGgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_1951.setTransform(-716.275,197.5);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1952.setTransform(-731.325,197.5);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1953.setTransform(-740.025,199.475);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQALAAAIAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1954.setTransform(-752,199.475);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1955.setTransform(-760.725,197.55);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1956.setTransform(-834.275,199.45);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1957.setTransform(-840.925,199.45);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f("#3E5EAB").s().p("AAaBIIgHgKIgXgnIgPANIAAAWQAAAHgDAFQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAEgBAJIAAA/IAegfIAIgIQADgCAEAAQAGABACADQAEADAAAEQAAAGgLAKIgOANIAbAqIAEAHIACAGQAAAFgEAFQgDADgGAAQgEAAgDgCg");
	this.shape_1958.setTransform(-854.55,197.5);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1959.setTransform(-866.675,199.475);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_1960.setTransform(-875.8,197.675);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgDgHQgEgHgMAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_1961.setTransform(-885.75,199.475);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f("#3E5EAB").s().p("AAaBIIgIgKIgWgnIgPANIAAAWQAAAHgDAFQgFAEgEAAQgHAAgDgEQgEgEAAgJIAAhwQAAgJAEgFQADgEAHAAQAFAAAEAEQAEAEgBAJIAAA/IAdgfIAJgIQADgCAEAAQAGABACADQAEADAAAEQAAAGgLAKIgOANIAcAqIADAHIACAGQAAAFgEAFQgDADgGAAQgEAAgDgCg");
	this.shape_1962.setTransform(-909.2,197.5);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1963.setTransform(-933.425,199.475);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1964.setTransform(-942.025,197.5);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f("#3E5EAB").s().p("AgxBGQgCgFAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgFQAIgEAJAAQAMAAALAGQAKAHAGAMQAGANAAAQQAAAMgDAJQgEALgGAHQgGAHgIADQgIAFgKAAQgKAAgIgFQgIgFgHgIIAAAnQAAASgNAAQgHAAgDgEgAgRgsQgIAIAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgGQADgJAAgKQAAgLgDgHQgDgIgGgEQgFgEgHAAQgKAAgIAJg");
	this.shape_1965.setTransform(-950.725,201.45);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1966.setTransform(-977.225,199.45);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f("#3E5EAB").s().p("AgOAMQgHAAgEgDQgEgEAAgFQAAgEAEgDQADgEAIAAIAeAAQAHAAADAEQAEADAAAEQAAAFgEAEQgDADgHAAg");
	this.shape_1967.setTransform(-983.875,199.45);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f("#3E5EAB").s().p("AgaBBQgMgIgGgQQgCgHgBgLQgCgJAAgLQAAgOACgMQABgMADgIQAGgPALgHQALgHAPAAQAJAAAJADQAIADAGAHQAGAGAFAJQAHAQAAAdQAAAQgCAMQgCALgGAJQgGAMgKAGQgLAGgNAAQgOAAgMgIgAgRgoQgGANAAAbQAAASADAMQACALAFAHQAFAFAIAAQAJABAFgHQAFgGACgLQACgNAAgRQAAgSgCgMQgCgLgGgGQgEgFgJAAQgMAAgFAMg");
	this.shape_1968.setTransform(-998.15,197.55);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f("#3E5EAB").s().p("AgWBFQgJgEgGgGQgGgHgDgHQgDgGAAgFQAAgFADgEQAEgDAFAAQADAAADABQACACABACQAFAOAGAGQAGAHAKAAQAGAAAFgDQAFgDAEgGQAEgGAAgHQAAgMgGgGQgHgHgKAAIgFABIgGAAQgGAAgDgDQgCgCAAgEQAAgFADgDQAEgDAHAAIAEAAQAIAAAGgFQAHgFAAgKQAAgIgFgFQgGgFgIAAQgFAAgEABQgEACgDADIgDAHIgEAIQAAAAgBABQAAAAAAAAQgBABAAAAQgBABgBAAIgGABQgDAAgDgDQgEgDAAgFQAAgGADgFQADgGAGgFQAGgFAIgDQAKgDAJAAQAKAAAHADQAJACAFAFQAGAFADAGQADAHAAAHQAAAKgEAHQgFAHgIAHQAIAEAGAEQAEAFADAHQADAGAAAHQAAAJgEAJQgDAIgIAGQgGAHgKAEQgKADgKAAQgLAAgKgEg");
	this.shape_1969.setTransform(-1010,197.575);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f("#3E5EAB").s().p("AgJBGQgDgFAAgIIAAhyQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAAByQAAAJgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_1970.setTransform(-1023.675,197.5);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1971.setTransform(-1032.375,199.475);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgFAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1972.setTransform(-1044.35,199.475);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1973.setTransform(-1053.075,197.55);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f("#3E5EAB").s().p("AA0AyQgEgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgGADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgNAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgGAAgEgEQgDgEAAgJIAAhLQgBgHAEgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQALAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHAAAPIAAAzQgBAJgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1974.setTransform(-1064.65,199.475);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQgBgLAEgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQAKAHAGAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAFgCQADgBAEgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_1975.setTransform(-1088.2,199.475);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f("#3E5EAB").s().p("AgJBEQgHgEgCgIQgCgHAAgMIAAgzIgEAAQgFAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAGAAADADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIABAKQAAADACADQACACAEAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgGgEg");
	this.shape_1976.setTransform(-1097.35,197.675);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f("#3E5EAB").s().p("AgjAoQgOgPgBgZQABgLADgKQADgKAHgHQAHgIAJgDQAKgEALAAQAQAAAMAGQALAHAFAKQAGALgBALQABAJgGADQgGADgKAAIg0AAQABAJADAHQAEAGAGAEQAGAEAFAAQAFAAAEgCQAEgBAEgCIAHgFIAIgIQACgBAEAAQAEAAACACQADACAAAEQAAAEgDAFQgCAEgGAFQgGAEgJADQgIADgMAAQgYAAgOgOgAgPgcQgGAHgCANIAwAAQgBgNgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_1977.setTransform(-1112.2,199.475);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f("#3E5EAB").s().p("AAaBIIgHgKIgXgnIgOANIAAAWQgBAHgEAFQgEAEgFAAQgGAAgEgEQgDgEAAgJIAAhwQAAgJADgFQAEgEAGAAQAHAAADAEQAEAEAAAJIAAA/IAcgfIAJgIQADgCAFAAQAEABAEADQADADAAAEQAAAGgLAKIgOANIAbAqIAFAHIABAGQAAAFgDAFQgEADgFAAQgGAAgCgCg");
	this.shape_1978.setTransform(-1123.45,197.5);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1979.setTransform(-1137.275,197.55);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1980.setTransform(-1145.975,199.475);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1981.setTransform(-1155.625,199.475);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQgBgLAEgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAALAGQALAHAGAKQAFALAAALQAAAJgFADQgGADgLAAIgyAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAFgCQAEgBADgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_1982.setTransform(-1166.6,199.475);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIADgGQABgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgFACgHAAIgFAAIAAAwIAAAKQAAADADADQABACAFAAIAGgBIAHgBQACAAADADQADACAAAEQAAAGgHAEQgHADgNAAQgMAAgHgEg");
	this.shape_1983.setTransform(-1175.75,197.675);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1984.setTransform(-1185.625,199.475);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f("#3E5EAB").s().p("AgDBJIgJgEIgHgGIgHgHIAAACQAAAIgDAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhyQAAgJADgEQADgEAGAAQAGAAAEAEQADAEAAAHIAAApQAIgIAHgEQAIgEALgBQANABAKAGQAKAHAGAMQAFALAAAPQAAANgDAKQgDAKgGAHQgGAIgIAEQgIAEgKAAQgHAAgEgBgAgMgJQgGAEgDAGQgEAIAAALQAAAQAIAJQAHAJALAAQAKAAAHgJQAHgJAAgRQAAgKgDgIQgDgGgFgEQgGgFgHAAQgHAAgGAFg");
	this.shape_1985.setTransform(-1197.525,197.5);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAEQgDAFgGAAQgFAAgEgFgAgIgyQgEgDAAgGQAAgGAEgDQAEgFAEAAQAFAAAEAEQAEADAAAHQAAAFgEAEQgEAEgFgBQgFABgDgEg");
	this.shape_1986.setTransform(-1211.725,197.55);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1987.setTransform(-1218.175,199.475);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1988.setTransform(-1229.175,199.475);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgJAAgNQAAgXAMgOQAMgOAUgBQALAAAIAFQAIAEAHAIIAAgnQAAgJADgEQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgJQgGAEgDAGQgDAJAAAJQAAALADAIQADAHAGAEQAGAFAGAAQAHAAAGgFQAGgDADgIQAEgHAAgMQAAgKgEgIQgDgGgGgEQgGgFgHAAQgHAAgFAFg");
	this.shape_1989.setTransform(-1241.625,197.5);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f("#3E5EAB").s().p("AAaAyQgEgEAAgHIAAgDIgKAKQgFAEgGACQgGACgHAAQgKAAgHgEQgIgEgFgHQgEgJAAgPIAAg0QgBgIAEgEQAEgEAFAAQAHAAADAEQAEAEAAAIIAAApQAAAKACAGQABAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIAEgEQADgEAHAAQAFAAAEAEQAEAEgBAIIAABMQABAIgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_1990.setTransform(-1269.5,199.475);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1991.setTransform(-1279.275,199.475);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f("#3E5EAB").s().p("AAuBJIgEgDIgDgHIgEgIIgGgSIg6AAIgGASQgEAMgDADQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgJIAFgKQACgDAEgDQAEgCAGAAQAFAAAFACQAEADACADIAEAIIAFALIAlBcQAEAKAAAFQAAAFgEAEQgEAEgGAAIgGgBgAgVAQIAqAAIgVg7g");
	this.shape_1992.setTransform(-1291.525,197.5);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f("#3E5EAB").s().p("AgaBBQgMgJgGgOQgCgJgBgJQgCgKAAgMQAAgNACgMQABgMADgJQAGgNALgIQALgHAPAAQAJAAAJADQAIAEAGAFQAGAHAFAJQAHAQAAAdQAAAQgCALQgCAMgGAJQgGAMgKAGQgLAGgNAAQgOAAgMgIgAgRgnQgGANAAAaQAAASADALQACANAFAFQAFAHAIAAQAJgBAFgGQAFgGACgMQACgMAAgRQAAgSgCgLQgCgMgGgFQgEgHgJAAQgMABgFANg");
	this.shape_1993.setTransform(-709.25,172.4);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_1994.setTransform(-734.775,172.35);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_1995.setTransform(-743.475,174.325);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgKAAQgHAAgGAFQgFAEgDAHQgCAGAAAQIAAAhQAAAIgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQADAAADABIAFAFQACAEgBAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAEAIQADAFABAGIABAOIAAAxQgBAIgDAEQgEAEgGAAQgFAAgFgEg");
	this.shape_1996.setTransform(-755.45,174.325);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_1997.setTransform(-764.175,172.4);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f("#3E5EAB").s().p("AA1AyQgFgEAAgJIAAgrIAAgOQgBgFgDgEQgDgDgGAAQgGAAgEADQgGADgCAFQgDAHAAAQIAAAjQAAAJgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgJIAAgpIgBgQQgBgFgDgEQgDgDgHAAQgNAAgEAJQgEAJAAAPIAAAkQAAAJgEAEQgDAEgHAAQgFAAgFgEQgDgEAAgJIAAhLQAAgHADgEQAEgEAFAAQAGAAADAEQAEADAAAHIAAACQAHgIAIgEQAIgEAJAAQALAAAHAEQAGAEAEAIQAIgIAHgEQAIgEAKAAQAKAAAIAEQAIAFAEAIQAEAHAAAPIAAAzQgBAJgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1998.setTransform(-775.75,174.325);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_1999.setTransform(-788.325,174.325);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f("#3E5EAB").s().p("AgkAoQgOgPABgZQgBgLAEgKQADgKAHgHQAHgIAJgDQALgEALAAQAPAAAMAGQAKAHAGAKQAFALAAALQAAAJgFADQgGADgKAAIgzAAQgBAJAEAHQAEAGAFAEQAHAEAGAAQAEAAAFgCQAEgBADgCIAHgFIAIgIQACgBAEAAQAEAAADACQACACAAAEQAAAEgCAFQgEAEgFAFQgGAEgJADQgJADgKAAQgZAAgPgOgAgOgcQgHAHgBANIAvAAQgBgNgHgHQgGgHgLAAQgIAAgGAHg");
	this.shape_2000.setTransform(-799.3,174.325);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_2001.setTransform(-820.025,172.4);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_2002.setTransform(-826.475,174.325);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2003.setTransform(-837.475,174.325);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgNAUAAQALAAAIADQAIAEAHAJIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_2004.setTransform(-849.925,172.35);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_2005.setTransform(-863.575,172.4);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2006.setTransform(-872.275,174.325);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_2007.setTransform(-880.875,172.35);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f("#3E5EAB").s().p("AgxBFQgCgEAAgJIAAhyQAAgIADgDQAEgEAFAAQAGAAAEAEQADAEAAAHIAAADQAIgJAIgEQAIgFAJAAQAMAAALAHQAKAGAGAMQAGAMAAARQAAANgDAJQgEAKgGAHQgGAHgIAEQgIADgKAAQgKABgIgFQgIgEgHgKIAAApQAAARgNAAQgHAAgDgFgAgRgtQgIAJAAARQAAAQAIAIQAHAJALAAQAGAAAGgEQAGgEADgHQADgIAAgKQAAgLgDgIQgDgHgGgEQgFgEgHAAQgKAAgIAIg");
	this.shape_2008.setTransform(-889.575,176.3);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f("#3E5EAB").s().p("AAaAyQgDgEgBgHIAAgDIgKAKQgFAEgGACQgFACgJAAQgJAAgIgEQgHgEgEgHQgFgJgBgPIAAg0QAAgIAEgEQAEgEAGAAQAGAAAEAEQADAEAAAIIAAApQAAAKABAGQADAGADAEQAEADAHAAQAGAAAGgEQAGgEADgGQACgGAAgSIAAggQAAgIADgEQAFgEAFAAQAHAAADAEQADAEABAIIAABMQgBAIgDADQgEAEgFAAQgFAAgEgEg");
	this.shape_2009.setTransform(-902.15,174.325);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgPAOIAAAVQAAAHgDAFQgFAEgEAAQgHAAgDgEQgEgFAAgHIAAhxQAAgJAEgEQADgFAHAAQAFAAAEAEQAEAFgBAHIAABAIAegeIAIgIQADgCAEAAQAGgBACAEQAEADAAAFQAAAFgLALIgOALIAcAsIADAHIACAEQAAAHgEADQgDAEgGAAQgEAAgDgDg");
	this.shape_2010.setTransform(-929.35,172.35);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2011.setTransform(-941.475,174.325);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgNAUAAQALAAAIADQAIAEAHAJIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_2012.setTransform(-953.925,172.35);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_2013.setTransform(-962.575,172.4);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f("#3E5EAB").s().p("AgKBEQgGgEgCgIQgCgHAAgMIAAgzIgDAAQgGAAgDgCQgDgDAAgEQAAgEADgDQADgDAGAAIADAAIAAgQIAAgKIACgGQACgDADgCQADgBAEAAQAEAAAEADQACADABAEIABAKIAAASIAJAAQAHAAACADQADADAAAEQAAAFgEACQgEACgIAAIgFAAIAAAwIAAAKQAAADACADQADACAEAAIAGgBIAGgBQAEAAACADQADACAAAEQAAAGgHAEQgHADgOAAQgLAAgHgEg");
	this.shape_2014.setTransform(-968.5,172.525);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2015.setTransform(-983.375,174.325);

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f("#3E5EAB").s().p("AAZAyQgEgEAAgIIAAgrQAAgOgEgHQgDgHgMAAQgGAAgFAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgDAEgHAAQgFAAgEgEQgEgEABgIIAAhMQgBgIAEgDQADgEAGAAQADAAADABIAFAFQACAEAAAFIAAADQAGgKAJgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFAAAGIABAOIAAAxQABAIgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape_2016.setTransform(-995.35,174.325);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_2017.setTransform(-1017.025,174.325);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2018.setTransform(-1028.025,174.325);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f("#3E5EAB").s().p("AAaBHIgIgKIgWgmIgPAOIAAAVQAAAHgDAFQgFAEgEAAQgHAAgDgEQgEgFAAgHIAAhxQAAgJAEgEQADgFAHAAQAFAAAEAEQAEAFgBAHIAABAIAegeIAIgIQADgCAEAAQAGgBACAEQAEADAAAFQAAAFgLALIgOALIAcAsIADAHIACAEQAAAHgEADQgDAEgGAAQgEAAgDgDg");
	this.shape_2019.setTransform(-1039.25,172.35);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f("#3E5EAB").s().p("AgZBGQgLgEgGgGQgGgGAAgGQAAgGAEgCQADgDAEgBQAHAAAEAGIAEAFQADADADABQACACAEABIAJACQAJgBAGgDQAGgCACgGQADgEAAgHIABgTQgHAJgIAEQgIAFgKAAQgOAAgKgHQgKgHgFgMQgFgLAAgQQAAgMADgKQAEgKAFgGQAGgHAJgDQAHgEAKAAQAKAAAJAFQAIAEAHAJIAAgDQAAgIADgDQAEgEAFAAQAIAAACAFQADAFAAAJIAABNQAAANgDAKQgDAKgGAFQgHAHgKADQgJADgPAAQgOAAgKgEgAgRgtQgIAKABAPQgBARAIAHQAGAIALAAQAHAAAFgEQAGgDAEgGQAEgIAAgKQAAgQgHgJQgIgJgLAAQgLAAgGAIg");
	this.shape_2020.setTransform(-1061.9,176.3);

	this.shape_2021 = new cjs.Shape();
	this.shape_2021.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgGAAQgFAAgEgEQgDgEAAgIIAAhMQAAgIADgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFABAGIAAAOIAAAxQAAAIgDAEQgEAEgFAAQgGAAgFgEg");
	this.shape_2021.setTransform(-1073.95,174.325);

	this.shape_2022 = new cjs.Shape();
	this.shape_2022.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2022.setTransform(-1085.975,174.325);

	this.shape_2023 = new cjs.Shape();
	this.shape_2023.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgHIAAhzQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAIIAABzQAAAIgEAEQgDAEgGAAQgFAAgEgFg");
	this.shape_2023.setTransform(-1094.575,172.35);

	this.shape_2024 = new cjs.Shape();
	this.shape_2024.graphics.f("#3E5EAB").s().p("AgJBFQgDgEAAgIIAAhLQAAgIADgEQAEgEAFAAQAGAAADAEQAEAEAAAHIAABMQAAAIgEAFQgDADgGAAQgFABgEgFgAgIgyQgEgDAAgHQAAgFAEgEQAEgDAEAAQAFAAAEADQAEADAAAGQAAAHgEADQgEADgFABQgFgBgDgDg");
	this.shape_2024.setTransform(-1099.975,172.4);

	this.shape_2025 = new cjs.Shape();
	this.shape_2025.graphics.f("#3E5EAB").s().p("AAVA6IAAgtQAAgNgEgGQgDgHgLAAQgGAAgGAEQgGAFgDAGQgBAFAAAPIAAAkQgBAHgDAFQgEAEgGAAQgNAAAAgQIAAhzQgBgIAEgEQADgEAHAAQAGAAAEAEQADAEABAIIAAAnIAJgJQAFgDAFgBQAGgCAGAAQAKgBAJAFQAHAEAFAJQADAEAAAGIABAMIAAA0QAAAHgDAFQgEAEgGAAQgNAAAAgQg");
	this.shape_2025.setTransform(-1108.75,172.35);

	this.shape_2026 = new cjs.Shape();
	this.shape_2026.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgFgGgHQgGgHgEgIQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgHQAIgGAFgMIAEgJQADgEAGAAQAFAAAEAEQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_2026.setTransform(-1127.225,172.35);

	this.shape_2027 = new cjs.Shape();
	this.shape_2027.graphics.f("#3E5EAB").s().p("AAYAyQgDgEAAgIIAAgrQAAgOgDgHQgFgHgLAAQgFAAgGAFQgGAEgDAHQgCAGAAAQIAAAhQAAAIgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgIIAAhMQAAgIAEgDQADgEAGAAQAEAAACABIAFAFQABAEAAAFIAAADQAIgKAIgEQAHgEALAAQAKAAAJAEQAIAFAFAIQACAFABAGIAAAOIAAAxQAAAIgDAEQgEAEgFAAQgGAAgFgEg");
	this.shape_2027.setTransform(-1159,174.325);

	this.shape_2028 = new cjs.Shape();
	this.shape_2028.graphics.f("#3E5EAB").s().p("AAeAyIgIgLQgKAIgJADQgIAEgLAAQgKAAgIgEQgIgEgEgHQgEgHAAgIQAAgLAHgIQAHgGAMgDIAMgDIARgDIAPgEQAAgLgEgFQgEgFgMAAQgJAAgFADQgFADgEAFIgFAIQgBACgFAAQgFAAgDgDQgDgDAAgEQAAgIAFgGQAFgHAKgEQALgEAOAAQASAAAKAEQAKAEAEAJQAEAJAAAPIAAAPIAAAOQAAAIADAIIACAKQAAAEgEAEQgEADgEAAQgFAAgEgEgAADAFIgOAEQgFABgEADQgDADAAAGQAAAGAEAFQAFAEAHAAQAHAAAHgEQAGgDAEgGQADgGAAgOIAAgDIgRAEg");
	this.shape_2028.setTransform(-1171.025,174.325);

	this.shape_2029 = new cjs.Shape();
	this.shape_2029.graphics.f("#3E5EAB").s().p("AAfBGQgEgEAAgIIAAgCIgKAKQgGAEgGACQgFACgHAAQgKAAgIgEQgIgEgGgIQgGgHgDgLQgDgKAAgLQAAgZAMgOQAMgNAUAAQALAAAIADQAIAEAHAJIAAgoQAAgHADgFQAEgEAGAAQAGAAADAEQADADAAAIIAAB0QAAAJgDADQgEAEgFAAQgGAAgDgEgAgMgKQgGAFgDAHQgDAHAAALQAAAKADAIQADAIAGAEQAGADAGAAQAHAAAGgDQAGgEADgHQAEgIAAgLQAAgLgEgHQgDgHgGgFQgGgDgHAAQgHAAgFADg");
	this.shape_2029.setTransform(-1183.475,172.35);

	this.shape_2030 = new cjs.Shape();
	this.shape_2030.graphics.f("#3E5EAB").s().p("AgOBIQgKgCgHgFQgIgFgGgHQgGgHgEgIQgEgIgCgKQgCgJAAgLQAAgQAFgOQAFgNAKgKQAJgKANgFQAMgFANAAQASAAANAHQAOAHAHAKQAHAKAAAJQAAAFgDAEQgEAEgFAAQgFAAgDgDQgDgDgDgGQgGgLgHgFQgIgFgLAAQgRAAgLANQgKAOAAAYQAAARAEALQAFALAJAGQAIAFALAAQAMAAAJgHQAIgGAFgMIAEgJQADgEAGAAQAFAAAEAEQAEAEAAAFQAAAHgDAIQgEAIgHAIQgHAHgMAFQgLAFgPAAQgKAAgJgCg");
	this.shape_2030.setTransform(-1201.875,172.35);

	this.shape_2031 = new cjs.Shape();
	this.shape_2031.graphics.f("#3E5EAB").s().p("AAjBFQgEgEAAgIIAAgxIg9AAIAAAxQAAAIgFAEQgEAFgGAAQgHAAgEgFQgDgEAAgIIAAhxQAAgIADgEQAEgFAHAAQAGAAAFAFQAEAEAAAIIAAAqIA9AAIAAgqQAAgIAEgEQAEgFAHAAQAGAAAEAFQAEAEAAAIIAABxQAAAIgEAEQgEAFgGAAQgHAAgEgFg");
	this.shape_2031.setTransform(-1216.825,172.35);

	this.shape_2032 = new cjs.Shape();
	this.shape_2032.graphics.f("#3E5EAB").s().p("AAaAyQgEgEABgHIAAgDIgKAKQgGAEgGACQgGACgHAAQgKAAgHgEQgJgEgDgHQgGgJABgPIAAg0QAAgIADgEQADgEAGAAQAHAAADAEQAEAEAAAIIAAApQAAAKABAGQACAGAFAEQADADAIAAQAFAAAGgEQAGgEACgGQADgGAAgSIAAggQAAgIADgEQAFgEAFAAQAGAAAEAEQAEAEAAAIIAABMQAAAIgEADQgEAEgFAAQgGAAgDgEg");
	this.shape_2032.setTransform(-1246.35,174.325);

	this.shape_2033 = new cjs.Shape();
	this.shape_2033.graphics.f("#3E5EAB").s().p("AggAyQgEgEAAgIIAAhJQAAgSANAAQAHAAADAEQADAEAAAIQAFgIAFgEQAEgEAIAAQAJAAAIAEQAIAEAAAHQAAAFgEADQgDADgEAAIgHgBQgGgCgEAAQgGAAgDADQgDADgCAGIgDAOIgBAUIAAAWQAAAIgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_2033.setTransform(-1256.125,174.325);

	this.shape_2034 = new cjs.Shape();
	this.shape_2034.graphics.f("#3E5EAB").s().p("AAuBJIgEgEIgDgGIgEgHIgGgSIg6AAIgGASQgEAKgDAEQgDAEgHAAQgFAAgEgEQgEgEAAgFIABgGIADgJIAkhcIAEgKIAFgJQACgEAEgCQAEgCAGAAQAFAAAFACQAEACACAEIAEAIIAFALIAlBcQAEAKAAAEQAAAFgEAFQgEAEgGAAIgGgBgAgVAPIAqAAIgVg5g");
	this.shape_2034.setTransform(-1268.375,172.35);

	this.instance_26 = new lib.Bitmap40();
	this.instance_26.setTransform(-1103,-243,1.0343,1.0343);

	this.shape_2035 = new cjs.Shape();
	this.shape_2035.graphics.f("#3E5EAB").s().p("AgmCSIAHgPQAGgOAHgTQAIgSAFgaQAFgaAAgcQAAgbgFgaQgGgZgHgTQgHgTgGgNIgHgQQAAgEAIAAQALAAAGAEQAGAFAJARQAJAPAHAPQAHAPAFAOQAEAPACARQADAQAAAQQAAAigJAeQgKAdgSAfQgKARgFAFQgHAEgKAAQgIAAAAgEg");
	this.shape_2035.setTransform(-597.8,-301.15);

	this.shape_2036 = new cjs.Shape();
	this.shape_2036.graphics.f("#3E5EAB").s().p("AAUCVQgFgCgEgFQgGgGgGgMQgMgUgIgTQgJgUgDgVQgFgUAAgYQAAgWAEgVQAEgUAJgVQAIgTAMgUQAGgMAGgGQAFgFAEgBQAEgCAIAAQAHAAAAAEIgHARQgHAQgHARQgGARgGAZQgFAaAAAbQAAAcAFAZQAGAZAGATQAIASAGAPIAHAQQAAAEgHAAIgMgBg");
	this.shape_2036.setTransform(-644.05,-301.15);

	this.shape_2037 = new cjs.Shape();
	this.shape_2037.graphics.f("#3E5EAB").s().p("AA8B0QgGgBgEgEIgIgJIgHgLIhXiEIAACFQABANgHAHQgFAGgKABQgKgBgGgGQgGgHAAgNIAAiwQAAgLADgHQACgHAIgEQAHgEAHgBQAHAAAEACQAEADAEADIAHAJIAHALIBYCGIAAiHQAAgNAGgHQAGgGAJgBQALABAFAGQAGAHAAANIAACzQAAAegZABQgGgBgFgCg");
	this.shape_2037.setTransform(-670.1,-304.3);

	this.shape_2038 = new cjs.Shape();
	this.shape_2038.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgGgGABgNIAAi2QgBgOAGgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAFAFABAIQAAAJgSAQIgXATIAsBFIAIAMQABAEAAADQAAAKgFAHQgFAFgKABQgIAAgEgFg");
	this.shape_2038.setTransform(-843.8,-304.3);

	this.shape_2039 = new cjs.Shape();
	this.shape_2039.graphics.f("#3E5EAB").s().p("AgGB0QgJgDgFgDIgKgIIgMgMIAAAEQAAAMgGAHQgFAFgKABQgJgBgFgFQgFgHAAgMIAAi5QAAgNAFgHQAFgGAJgBQAKAAAGAHQAFAGAAAMIAABBQAMgNAMgGQANgHASAAQAVABAQAJQAQAKAIAUQAJARAAAbQAAATgEARQgGAQgJAMQgKAMgMAGQgOAHgQAAQgKAAgIgDgAgTgPQgKAGgGAMQgFANAAAQQAAAaAMAOQALAOASAAQAQgBAMgOQAMgOAAgZQAAgRgGgMQgEgMgJgGQgJgHgMAAQgLAAgJAHg");
	this.shape_2039.setTransform(-907.5,-304.3);

	this.shape_2040 = new cjs.Shape();
	this.shape_2040.graphics.f("#3E5EAB").s().p("AA7ByQgGgEgEgGIgIgNIg2hVIgmAlIAAAvQAAAOgGAIQgHAGgJABQgHgBgFgDQgFgDgEgFQgBgFgBgGIgBgQIAAiqQAAgNAHgIQAFgGAMgBQAKABAGAGQAHAIgBANIAABRIBbhfQAGgHAFgDQAEgEAJAAQAJAAAHAHQAFAFAAAIQAAALgKAKIg4A2IBABbQAIAKADAIQAEAGAAAHQgBAIgGAGQgGAGgKAAQgJgBgHgEg");
	this.shape_2040.setTransform(-976.65,-304.3);

	this.shape_2041 = new cjs.Shape();
	this.shape_2041.graphics.f("#3E5EAB").s().p("AApByQgEgEgHgLIglg+IgXAWIAAAiQAAAMgGAHQgHAHgJAAQgJAAgGgHQgGgGABgNIAAi2QgBgOAGgHQAFgIAKAAQALABAFAGQAGAHAAANIAABnIAvgyIANgMQAGgEAGAAQAIAAAFAFQAFAFABAIQgBAJgRAQIgXATIAsBFIAIAMQABAEAAADQAAAKgFAHQgFAFgKABQgHAAgFgFg");
	this.shape_2041.setTransform(-1005.45,-304.3);

	this.shape_2042 = new cjs.Shape();
	this.shape_2042.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgCgMQgEgMAAgTIAAhRIgFAAQgKAAgFgFQgEgEAAgHQAAgGAEgFQAGgEAKAAIAEAAIAAgaIABgQQAAgGADgEQACgEAFgDQAEgDAHAAQAHAAAGAGQAEAEABAGIABARIAAAdIAQAAQAKAAAEAEQAFAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIABAQQABAFAEADQACAEAHAAIALgCIAJgBQAFAAAEAEQAEAEABAGQAAALgMAFQgLAGgVAAQgTAAgKgHg");
	this.shape_2042.setTransform(-1039.45,-304.025);

	this.shape_2043 = new cjs.Shape();
	this.shape_2043.graphics.f("#3E5EAB").s().p("AAnBQQgFgHAAgMIAAhGQgBgVgGgMQgFgLgSAAQgKAAgKAHQgJAHgEAMQgEAJAAAZIAAA2QAAANgFAGQgHAHgJAAQgJAAgHgHQgFgHAAgMIAAh7QAAgMAFgGQAFgGAKAAQAFAAAFADQAFADACAFQADAFAAAIIAAAFQALgPAOgHQAMgHARAAQARAAAOAIQAMAHAHANQAFAIAAAJQACAJAAAOIAABPQAAANgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_2043.setTransform(-1055.3,-301.125);

	this.shape_2044 = new cjs.Shape();
	this.shape_2044.graphics.f("#3E5EAB").s().p("AA7ByQgFgEgFgGIgIgNIg2hVIglAlIAAAvQgBAOgGAIQgHAGgKABQgFgBgGgDQgGgDgDgFQgCgFAAgGIAAgQIAAiqQAAgNAFgIQAGgGALgBQALABAGAGQAHAIAAANIAABRIBahfQAGgHAFgDQAEgEAJAAQAJAAAGAHQAHAFgBAIQAAALgKAKIg4A2IBBBbQAGAKAEAIQADAGAAAHQAAAIgFAGQgHAGgKAAQgJgBgHgEg");
	this.shape_2044.setTransform(-1095.75,-304.3);

	this.shape_2045 = new cjs.Shape();
	this.shape_2045.graphics.f("#3E5EAB").s().p("Ag6BAQgVgXAAgnQgBgZAKgUQAKgVAUgKQATgMAZAAQASAAANAFQAOAFAJAIQAKAHAFAJQAFAJAAAHQAAAIgFAFQgGAGgIAAQgGAAgDgDQgDgDgFgGQgIgMgIgGQgJgGgNAAQgSAAgLAPQgMAPAAAYQAAAMADALQADAKAGAHQAFAHAIAEQAIADAIAAQAOAAAJgGQAJgGAHgMQAEgHAFgEQAEgEAHAAQAHAAAFAGQAFAGABAGQgBAIgEAJQgFAJgJAJQgLAIgOAFQgPAFgTAAQgmAAgXgXg");
	this.shape_2045.setTransform(-1134.25,-301.175);

	this.shape_2046 = new cjs.Shape();
	this.shape_2046.graphics.f("#3E5EAB").s().p("AAnBQQgGgHAAgMIAAhGQAAgVgFgMQgHgLgRAAQgLAAgIAHQgKAHgFAMQgCAJAAAZIAAA2QAAANgHAGQgFAHgKAAQgKAAgFgHQgGgHAAgMIAAh7QAAgMAFgGQAGgGAIAAQAHAAAEADQAFADACAFQADAFAAAIIAAAFQALgPANgHQANgHARAAQARAAANAIQANAHAHANQAEAIACAJQABAJAAAOIAABPQAAANgGAGQgGAHgJAAQgKAAgGgHg");
	this.shape_2046.setTransform(-1153.35,-301.125);

	this.shape_2047 = new cjs.Shape();
	this.shape_2047.graphics.f("#3E5EAB").s().p("AApBQQgFgGAAgLIAAgGQgIAKgIAGQgJAHgJADQgKADgNAAQgPAAgMgGQgMgGgHgMQgIgNAAgaIAAhTQAAgNAGgGQAFgHAKAAQAKAAAFAHQAHAGAAANIAABDQgBAPADAKQACAKAHAGQAGAFALAAQAKAAAKgGQAJgGAFgLQADgJAAgdIAAg0QAAgNAGgGQAGgHAKAAQAJAAAGAHQAGAGAAANIAAB6QAAAMgGAHQgFAGgJAAQgJAAgGgHg");
	this.shape_2047.setTransform(-1172.7,-301.125);

	this.shape_2048 = new cjs.Shape();
	this.shape_2048.graphics.f("#3E5EAB").s().p("AA8ByQgHgEgEgGIgHgNIg2hVIgnAlIAAAvQABAOgHAIQgGAGgKABQgHgBgFgDQgFgDgDgFQgDgFAAgGIgBgQIAAiqQABgNAGgIQAFgGAMgBQAKABAHAGQAFAIAAANIAABRIBbhfQAGgHAFgDQAFgEAHAAQAKAAAHAHQAFAFABAIQAAALgLAKIg5A2IBBBbQAIAKADAIQADAGAAAHQABAIgHAGQgFAGgLAAQgKgBgFgEg");
	this.shape_2048.setTransform(-1193.8,-304.3);

	this.shape_2049 = new cjs.Shape();
	this.shape_2049.graphics.f("#3E5EAB").s().p("AgPBtQgLgHgDgMQgDgMAAgTIAAhRIgGAAQgJAAgFgFQgFgEAAgHQAAgGAFgFQAFgEAKAAIAFAAIAAgaIABgQQAAgGACgEQADgEAFgDQAFgDAFAAQAJAAAFAGQAEAEABAGIABARIAAAdIAQAAQAJAAAGAEQAEAFAAAGQAAAJgHADQgHAEgNAAIgIAAIAABNIACAQQAAAFADADQADAEAHAAIAKgCIAKgBQAGAAADAEQAFAEAAAGQgBALgKAFQgMAGgVAAQgTAAgKgHg");
	this.shape_2049.setTransform(-1219.25,-304.025);

	this.shape_2050 = new cjs.Shape();
	this.shape_2050.graphics.f("#3E5EAB").s().p("Ag3BpQgQgJgJgPQgKgPAAgPQAAgIAGgHQAGgFAJAAQAHAAAGAEQAEAFAEAJQAEALAGAIQAEAHAJAEQAKAGAPAAQAUAAANgKQANgKgBgOQABgLgIgIQgGgHgMgDQgLgEgRgEQgZgHgRgHQgQgHgKgNQgJgNgBgVQABgSAJgPQALgOAUgJQATgHAagBQAUAAAQAGQAQAFAKAJQAKAJAFAJQAEAKAAAIQAAAJgGAGQgGAHgIAAQgIAAgFgEQgDgEgGgJQgGgNgIgHQgJgHgSAAQgTgBgLAJQgKAHgBAMQABAGADAFQAEAFAHAEIAMAGIAWAFQAUAFAPAGQAPAFAMAHQAKAIAHALQAGANAAARQAAAVgKAQQgLAQgVAKQgUAKgdAAQghAAgWgOg");
	this.shape_2050.setTransform(-1274,-304.3);

	this.shape_2051 = new cjs.Shape();
	this.shape_2051.graphics.f("#3E5EAB").s().p("AgPARQgIgGAAgLQAAgJAIgHQAGgGAJgBQAKABAGAGQAHAHAAAJQAAALgHAGQgHAHgIAAQgKAAgGgHg");
	this.shape_2051.setTransform(-1297.8,-294.8);

	this.shape_2052 = new cjs.Shape();
	this.shape_2052.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_2052.setTransform(-1317.775,-304.3);

	this.shape_2053 = new cjs.Shape();
	this.shape_2053.graphics.f("#3E5EAB").s().p("AgQBwQgGgIAAgOIAAi0QAAgNAGgIQAGgGAKgBQAKABAHAGQAGAIAAANIAAC0QAAAOgGAIQgHAGgKABQgJgBgHgGg");
	this.shape_2053.setTransform(-1327.775,-304.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.shape_1341},{t:this.shape_1340,p:{x:-1298.475}},{t:this.shape_1339},{t:this.shape_1338,p:{x:-1275.825}},{t:this.shape_1337,p:{x:-1261.8}},{t:this.shape_1336,p:{x:-1242.575}},{t:this.shape_1335},{t:this.shape_1334,p:{x:-1199.825}},{t:this.shape_1333,p:{x:-1186.025}},{t:this.shape_1332,p:{x:-1166.925}},{t:this.shape_1331,p:{x:-1148.475}},{t:this.shape_1330,p:{x:-1133.025}},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327,p:{x:-1061.525}},{t:this.shape_1326,p:{x:-1048.575}},{t:this.shape_1325},{t:this.shape_1324,p:{x:-1018.975}},{t:this.shape_1323,p:{x:-995.325}},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320,p:{x:-931.025}},{t:this.shape_1319,p:{x:-913.475}},{t:this.shape_1318},{t:this.shape_1317,p:{x:-886.625}},{t:this.shape_1316,p:{x:-869.125}},{t:this.shape_1315,p:{x:-842.85}},{t:this.shape_1314,p:{x:-821.775}},{t:this.shape_1313,p:{x:-802.4}},{t:this.shape_1312},{t:this.shape_1311,p:{x:-765.875}},{t:this.shape_1310},{t:this.shape_1309,p:{x:-728.425}},{t:this.shape_1308,p:{x:-715.375}},{t:this.shape_1307,p:{x:-701.375}},{t:this.shape_1306},{t:this.shape_1305,p:{x:-662.875}},{t:this.shape_1304,p:{x:-649.025}}]},18).to({state:[{t:this.shape_1675,p:{x:-1327.775}},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1333,p:{x:-1273.975}},{t:this.shape_1330,p:{x:-1254.975}},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1320,p:{x:-1183.925}},{t:this.shape_1319,p:{x:-1166.375}},{t:this.shape_1669},{t:this.shape_1311,p:{x:-1139.525}},{t:this.shape_1316,p:{x:-1122.025}},{t:this.shape_1668,p:{x:-1097.25}},{t:this.shape_1667},{t:this.shape_1340,p:{x:-1056.375}},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664,p:{x:-1012}},{t:this.shape_1663,p:{x:-981.675}},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1315,p:{x:-913.05}},{t:this.shape_1660},{t:this.shape_1313,p:{x:-872.6}},{t:this.shape_1659},{t:this.shape_1338,p:{x:-839.625}},{t:this.shape_1658},{t:this.shape_1314,p:{x:-793.925}},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1305,p:{x:-744.075}},{t:this.shape_1655,p:{x:-724.7}},{t:this.shape_1654},{t:this.shape_1334,p:{x:-683.875}},{t:this.shape_1653},{t:this.shape_1307,p:{x:-641.875}},{t:this.shape_1326,p:{x:-623.575}},{t:this.shape_1327,p:{x:-610.525}},{t:this.shape_1309,p:{x:-597.575}},{t:this.shape_1308,p:{x:-584.525}},{t:this.shape_1652},{t:this.shape_1651,p:{x:-540.825}},{t:this.shape_1650},{t:this.instance_24},{t:this.shape_1649,p:{x:-1301.175,y:182.4}},{t:this.shape_1648,p:{x:-1288.925,y:184.375}},{t:this.shape_1647},{t:this.shape_1646,p:{x:-1267.725,y:184.375}},{t:this.shape_1645,p:{x:-1250.225,y:182.525}},{t:this.shape_1644},{t:this.shape_1643,p:{x:-1301.175,y:207.55}},{t:this.shape_1642,p:{x:-1288.925,y:209.525}},{t:this.shape_1641},{t:this.shape_1640,p:{x:-1267.725,y:209.525}},{t:this.shape_1639},{t:this.shape_1638,p:{x:-1238.825,y:209.525}},{t:this.shape_1637,p:{x:-1227.825,y:209.525}},{t:this.shape_1636},{t:this.shape_1635,p:{x:-1207.175,y:207.55}},{t:this.shape_1634,p:{x:-1195.275,y:209.525}},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631,p:{x:-1165.275,y:209.525}},{t:this.shape_1630,p:{x:-1155.625,y:209.525}},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624,p:{x:-1079.125,y:209.525}},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621,p:{x:-1057.325,y:209.525}},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609,p:{x:-913.625,y:209.525}},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602,p:{x:-844.8,y:207.725}},{t:this.shape_1601},{t:this.shape_1600,p:{x:-830.15,y:209.525}},{t:this.shape_1599,p:{x:-818.05,y:209.525}},{t:this.shape_1598,p:{x:-801.625,y:209.525}},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587,p:{x:-682.9,y:209.525}},{t:this.shape_1586,p:{x:-671.925,y:209.525}},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582,p:{x:-627.075,y:209.525}},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577,p:{x:-571.925,y:209.5}},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572,p:{x:-504.175,y:211.5}},{t:this.shape_1571,p:{x:-492.275,y:209.525}},{t:this.shape_1570,p:{x:-481.275,y:209.525}},{t:this.shape_1569,p:{x:-471.625,y:209.525}},{t:this.shape_1568},{t:this.shape_1567,p:{x:-441.525,y:207.675}},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563,p:{x:-408.975,y:209.5}},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560,p:{x:-375.775,y:207.55}},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556,p:{x:-332.125,y:209.5}},{t:this.shape_1555,p:{x:-325.475,y:209.5}},{t:this.shape_1554},{t:this.shape_1553,p:{x:-299.225,y:207.675}},{t:this.shape_1552},{t:this.shape_1551,p:{x:-276.075,y:209.525}},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547,p:{x:-231.225,y:209.525}},{t:this.shape_1546},{t:this.shape_1545,p:{x:-207.475,y:207.55}},{t:this.shape_1544,p:{x:-191.725,y:209.5}},{t:this.shape_1543,p:{x:-185.075,y:209.5}},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540,p:{x:-1274.2,y:234.675}},{t:this.shape_1539,p:{x:-1259.3,y:234.675}},{t:this.shape_1538},{t:this.shape_1537,p:{x:-1232.025,y:234.675}},{t:this.shape_1536,p:{x:-1221.025,y:234.675}},{t:this.shape_1535,p:{x:-1211.375,y:234.675}},{t:this.shape_1534,p:{x:-1199.35,y:234.675}},{t:this.shape_1533},{t:this.shape_1532,p:{x:-1164.65,y:234.675}},{t:this.shape_1531},{t:this.shape_1530,p:{x:-1140.275,y:234.675}},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524,p:{x:-1077.975,y:232.7}},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519,p:{x:-1022.775,y:232.7}},{t:this.shape_1518},{t:this.shape_1517,p:{x:-1004.675,y:234.65}},{t:this.shape_1516,p:{x:-998.025,y:234.65}},{t:this.shape_1515,p:{x:-988.875,y:232.8}},{t:this.shape_1514,p:{x:-972.675,y:234.675}},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511,p:{x:-944.425,y:234.675}},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507,p:{x:-896.375,y:234.675}},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502,p:{x:-858.025,y:234.65}},{t:this.shape_1501,p:{x:-851.375,y:234.65}},{t:this.shape_1500,p:{x:-842.225,y:232.8}},{t:this.shape_1499,p:{x:-825.25,y:232.7}},{t:this.shape_1498,p:{x:-813.9,y:234.675}},{t:this.shape_1497},{t:this.shape_1496,p:{x:-783.625,y:236.65}},{t:this.shape_1495,p:{x:-771.725,y:234.675}},{t:this.shape_1494,p:{x:-760.725,y:234.675}},{t:this.shape_1493,p:{x:-751.075,y:234.675}},{t:this.shape_1492,p:{x:-739.05,y:234.675}},{t:this.shape_1491,p:{x:-722.075,y:234.675}},{t:this.shape_1490,p:{x:-711.075,y:234.675}},{t:this.shape_1489,p:{x:-698.5,y:234.675}},{t:this.shape_1488,p:{x:-683.725,y:234.675}},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485,p:{x:-653.525,y:234.675}},{t:this.shape_1484,p:{x:-643.85,y:234.675}},{t:this.shape_1483,p:{x:-629.575,y:234.65}},{t:this.shape_1482,p:{x:-622.925,y:234.65}},{t:this.shape_1481,p:{x:-613.775,y:232.8}},{t:this.shape_1480,p:{x:-597.575,y:234.675}},{t:this.shape_1479,p:{x:-589.375,y:232.75}},{t:this.shape_1478},{t:this.shape_1477,p:{x:-569.325,y:234.675}},{t:this.shape_1476,p:{x:-559.45,y:232.875}},{t:this.shape_1475,p:{x:-545.2,y:234.675}},{t:this.shape_1474,p:{x:-533.2,y:234.675}},{t:this.shape_1473},{t:this.shape_1472,p:{x:-508.825,y:234.675}},{t:this.shape_1471,p:{x:-498.95,y:232.875}},{t:this.shape_1470,p:{x:-493.025,y:232.75}},{t:this.shape_1469},{t:this.shape_1468,p:{x:-475.375,y:234.65}},{t:this.shape_1467,p:{x:-468.725,y:234.65}},{t:this.shape_1466,p:{x:-459.575,y:232.8}},{t:this.shape_1465},{t:this.shape_1464,p:{x:-427.875,y:234.675}},{t:this.shape_1463,p:{x:-418.1,y:234.675}},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459,p:{x:-366.675,y:234.675}},{t:this.shape_1458,p:{x:-354.4,y:234.675}},{t:this.shape_1457,p:{x:-339.625,y:234.675}},{t:this.shape_1456,p:{x:-328.275,y:234.675}},{t:this.shape_1455,p:{x:-317.425,y:234.675}},{t:this.shape_1454,p:{x:-306.025,y:234.675}},{t:this.shape_1453,p:{x:-296.625,y:234.675}},{t:this.shape_1452,p:{x:-289.825,y:238.625}},{t:this.shape_1451,p:{x:-1301.175,y:283}},{t:this.shape_1450,p:{x:-1288.925,y:284.975}},{t:this.shape_1449},{t:this.shape_1448,p:{x:-1267.725,y:284.975}},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445,p:{x:-1301.175,y:308.15}},{t:this.shape_1444,p:{x:-1288.925,y:310.125}},{t:this.shape_1443},{t:this.shape_1442,p:{x:-1267.725,y:310.125}},{t:this.shape_1441},{t:this.shape_1440,p:{x:-1238.825,y:310.125}},{t:this.shape_1439,p:{x:-1227.825,y:310.125}},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436,p:{x:-1195.275,y:310.125}},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433,p:{x:-1165.275,y:310.125}},{t:this.shape_1432,p:{x:-1155.625,y:310.125}},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429,p:{x:-1115.6,y:310.125}},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426,p:{x:-1079.125,y:310.125}},{t:this.shape_1425,p:{x:-1070.425,y:308.15}},{t:this.shape_1424},{t:this.shape_1423,p:{x:-1057.325,y:310.125}},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414,p:{x:-944.8,y:310.125}},{t:this.shape_1413},{t:this.shape_1412,p:{x:-922.75,y:308.325}},{t:this.shape_1411,p:{x:-913.625,y:310.125}},{t:this.shape_1410},{t:this.shape_1409,p:{x:-887.525,y:310.125}},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406,p:{x:-860.15,y:310.125}},{t:this.shape_1405},{t:this.shape_1404,p:{x:-844.8,y:308.325}},{t:this.shape_1403},{t:this.shape_1402,p:{x:-830.15,y:310.125}},{t:this.shape_1401,p:{x:-818.05,y:310.125}},{t:this.shape_1400,p:{x:-801.625,y:310.125}},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394,p:{x:-739.975,y:310.125}},{t:this.shape_1393,p:{x:-727.975,y:310.1}},{t:this.shape_1392,p:{x:-721.325,y:310.1}},{t:this.shape_1391},{t:this.shape_1390,p:{x:-695.075,y:308.275}},{t:this.shape_1389,p:{x:-682.9,y:310.125}},{t:this.shape_1388,p:{x:-671.925,y:310.125}},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384,p:{x:-627.075,y:310.125}},{t:this.shape_1383,p:{x:-618.375,y:308.15}},{t:this.shape_1382,p:{x:-604.625,y:308.325}},{t:this.shape_1381},{t:this.shape_1380,p:{x:-578.575,y:310.1}},{t:this.shape_1379,p:{x:-571.925,y:310.1}},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376,p:{x:-534.45,y:310.125}},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373,p:{x:-492.275,y:310.125}},{t:this.shape_1372,p:{x:-481.275,y:310.125}},{t:this.shape_1371,p:{x:-471.625,y:310.125}},{t:this.shape_1370},{t:this.shape_1369,p:{x:-440.925,y:308.15}},{t:this.shape_1368},{t:this.shape_1367,p:{x:-418.525,y:308.15}},{t:this.shape_1366},{t:this.shape_1365,p:{x:-400.025,y:310.1}},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361,p:{x:-353.35,y:310.125}},{t:this.shape_1360,p:{x:-344.575,y:308.2}},{t:this.shape_1359,p:{x:-339.175,y:308.15}},{t:this.shape_1358,p:{x:-328.175,y:310.1}},{t:this.shape_1357,p:{x:-321.525,y:310.1}},{t:this.shape_1356,p:{x:-312.375,y:308.25}},{t:this.shape_1355},{t:this.shape_1354,p:{x:-280.675,y:310.125}},{t:this.shape_1353,p:{x:-270.9,y:310.125}},{t:this.shape_1352,p:{x:-258.8,y:310.125}},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349,p:{x:-1304.675,y:335.275}},{t:this.shape_1348},{t:this.shape_1347,p:{x:-1277.625,y:335.275}},{t:this.shape_1346,p:{x:-1266.275,y:335.275}},{t:this.shape_1345,p:{x:-1255.425,y:335.275}},{t:this.shape_1344,p:{x:-1244.025,y:335.275}},{t:this.shape_1343,p:{x:-1234.625,y:335.275}},{t:this.shape_1342,p:{x:-1227.825,y:339.225}}]},1).to({state:[{t:this.shape_1830,p:{x:-1327.775}},{t:this.shape_1675,p:{x:-1317.775}},{t:this.shape_1829},{t:this.shape_1668,p:{x:-1284}},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1338,p:{x:-1190.425}},{t:this.shape_1824},{t:this.shape_1334,p:{x:-1162.425}},{t:this.shape_1307,p:{x:-1148.425}},{t:this.shape_1337,p:{x:-1129.05}},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1333,p:{x:-1057.575}},{t:this.shape_1331,p:{x:-1040.025}},{t:this.shape_1651,p:{x:-1016.025}},{t:this.shape_1821},{t:this.shape_1319,p:{x:-979.025}},{t:this.shape_1655,p:{x:-963.2}},{t:this.shape_1330,p:{x:-945.225}},{t:this.shape_1327,p:{x:-931.375}},{t:this.shape_1820},{t:this.shape_1819,p:{x:-896.475}},{t:this.shape_1324,p:{x:-876.825}},{t:this.shape_1818},{t:this.shape_1817},{t:this.shape_1664,p:{x:-818.95}},{t:this.shape_1816},{t:this.shape_1317,p:{x:-771.775}},{t:this.shape_1815},{t:this.shape_1336,p:{x:-733.375}},{t:this.shape_1320,p:{x:-713.475}},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1308,p:{x:-649.275}},{t:this.shape_1812},{t:this.shape_1332,p:{x:-616.025}},{t:this.shape_1811,p:{x:-585.125}},{t:this.shape_1311,p:{x:-562.725}},{t:this.shape_1305,p:{x:-543.775}},{t:this.shape_1316,p:{x:-526.225}},{t:this.instance_25},{t:this.shape_1810,p:{x:-1289.675,y:183.825}},{t:this.shape_1809,p:{x:-1279.425,y:189.675}},{t:this.shape_1649,p:{x:-1264.125,y:183.75}},{t:this.shape_1648,p:{x:-1251.875,y:185.725}},{t:this.shape_1808},{t:this.shape_1646,p:{x:-1230.675,y:185.725}},{t:this.shape_1807},{t:this.shape_1638,p:{x:-1199.875,y:185.725}},{t:this.shape_1806,p:{x:-1190,y:183.925}},{t:this.shape_1429,p:{x:-1180.85,y:185.725}},{t:this.shape_1642,p:{x:-1169.875,y:185.725}},{t:this.shape_1634,p:{x:-1160.225,y:185.725}},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.shape_1532,p:{x:-1112.9,y:185.725}},{t:this.shape_1640,p:{x:-1101.575,y:185.725}},{t:this.shape_1630,p:{x:-1090.175,y:185.725}},{t:this.shape_1637,p:{x:-1079.175,y:185.725}},{t:this.shape_1643,p:{x:-1287.275,y:208.9}},{t:this.shape_1631,p:{x:-1275.025,y:210.875}},{t:this.shape_1802},{t:this.shape_1598,p:{x:-1253.825,y:210.875}},{t:this.shape_1801},{t:this.shape_1624,p:{x:-1226.575,y:210.875}},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1514,p:{x:-1161.225,y:210.875}},{t:this.shape_1609,p:{x:-1149.825,y:210.875}},{t:this.shape_1621,p:{x:-1138.825,y:210.875}},{t:this.shape_1796},{t:this.shape_1582,p:{x:-1111.675,y:210.875}},{t:this.shape_1586,p:{x:-1100.675,y:210.875}},{t:this.shape_1795},{t:this.shape_1635,p:{x:-1080.025,y:208.9}},{t:this.shape_1571,p:{x:-1068.125,y:210.875}},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1570,p:{x:-1038.125,y:210.875}},{t:this.shape_1569,p:{x:-1028.475,y:210.875}},{t:this.shape_1792},{t:this.shape_1539,p:{x:-1003.25,y:210.875}},{t:this.shape_1791},{t:this.shape_1599,p:{x:-976.45,y:210.875}},{t:this.shape_1790},{t:this.shape_1547,p:{x:-951.975,y:210.875}},{t:this.shape_1789,p:{x:-943.275,y:208.9}},{t:this.shape_1788},{t:this.shape_1551,p:{x:-930.175,y:210.875}},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1536,p:{x:-869.075,y:210.875}},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1534,p:{x:-836.2,y:210.875}},{t:this.shape_1537,p:{x:-824.225,y:210.875}},{t:this.shape_1781,p:{x:-815.525,y:208.9}},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1555,p:{x:-775.725,y:210.85}},{t:this.shape_1544,p:{x:-769.075,y:210.85}},{t:this.shape_1778,p:{x:-759.925,y:209}},{t:this.shape_1777},{t:this.shape_1776,p:{x:-733.875,y:208.9}},{t:this.shape_1535,p:{x:-725.275,y:210.875}},{t:this.shape_1775,p:{x:-715.4,y:209.075}},{t:this.shape_1774},{t:this.shape_1773,p:{x:-689.7,y:210.875}},{t:this.shape_1772,p:{x:-677.6,y:210.875}},{t:this.shape_1771},{t:this.shape_1530,p:{x:-658.525,y:210.875}},{t:this.shape_1770},{t:this.shape_1543,p:{x:-632.775,y:210.85}},{t:this.shape_1393,p:{x:-626.125,y:210.85}},{t:this.shape_1769,p:{x:-616.975,y:209}},{t:this.shape_1553,p:{x:-599.875,y:209.025}},{t:this.shape_1768},{t:this.shape_1494,p:{x:-576.725,y:210.875}},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1511,p:{x:-531.875,y:210.875}},{t:this.shape_1764,p:{x:-523.175,y:208.9}},{t:this.shape_1560,p:{x:-508.125,y:208.9}},{t:this.shape_1392,p:{x:-492.375,y:210.85}},{t:this.shape_1380,p:{x:-485.725,y:210.85}},{t:this.shape_1763,p:{x:-476.575,y:209}},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1474,p:{x:-442.3,y:210.875}},{t:this.shape_1760,p:{x:-433.625,y:208.9}},{t:this.shape_1759},{t:this.shape_1545,p:{x:-406.075,y:208.9}},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756,p:{x:-378.425,y:208.9}},{t:this.shape_1379,p:{x:-367.425,y:210.85}},{t:this.shape_1365,p:{x:-360.775,y:210.85}},{t:this.shape_1755,p:{x:-351.625,y:209}},{t:this.shape_1507,p:{x:-335.425,y:210.875}},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1495,p:{x:-307.175,y:210.875}},{t:this.shape_1752},{t:this.shape_1572,p:{x:-282.575,y:212.85}},{t:this.shape_1361,p:{x:-270.55,y:210.875}},{t:this.shape_1480,p:{x:-259.125,y:210.875}},{t:this.shape_1751},{t:this.shape_1750,p:{x:-244.35,y:209.075}},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1358,p:{x:-220.775,y:210.85}},{t:this.shape_1357,p:{x:-214.125,y:210.85}},{t:this.shape_1747,p:{x:-204.975,y:209}},{t:this.shape_1499,p:{x:-1288.3,y:234.05}},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1493,p:{x:-1210.375,y:236.025}},{t:this.shape_1741,p:{x:-1200.5,y:234.225}},{t:this.shape_1740},{t:this.shape_1490,p:{x:-1180.175,y:236.025}},{t:this.shape_1502,p:{x:-1168.125,y:236}},{t:this.shape_1501,p:{x:-1161.475,y:236}},{t:this.shape_1500,p:{x:-1152.325,y:234.15}},{t:this.shape_1739},{t:this.shape_1738,p:{x:-1124,y:236.025}},{t:this.shape_1737,p:{x:-1109.1,y:236.025}},{t:this.shape_1496,p:{x:-1093.725,y:238}},{t:this.shape_1491,p:{x:-1081.825,y:236.025}},{t:this.shape_1485,p:{x:-1070.825,y:236.025}},{t:this.shape_1488,p:{x:-1061.175,y:236.025}},{t:this.shape_1736},{t:this.shape_1477,p:{x:-1032.175,y:236.025}},{t:this.shape_1464,p:{x:-1021.175,y:236.025}},{t:this.shape_1735},{t:this.shape_1472,p:{x:-993.825,y:236.025}},{t:this.shape_1412,p:{x:-983.95,y:234.225}},{t:this.shape_1734},{t:this.shape_1450,p:{x:-963.625,y:236.025}},{t:this.shape_1733},{t:this.shape_1483,p:{x:-939.675,y:236}},{t:this.shape_1482,p:{x:-933.025,y:236}},{t:this.shape_1481,p:{x:-923.875,y:234.15}},{t:this.shape_1456,p:{x:-907.675,y:236.025}},{t:this.shape_1479,p:{x:-899.475,y:234.1}},{t:this.shape_1732},{t:this.shape_1457,p:{x:-879.425,y:236.025}},{t:this.shape_1404,p:{x:-869.55,y:234.225}},{t:this.shape_1731,p:{x:-855.3,y:236.025}},{t:this.shape_1730,p:{x:-843.3,y:236.025}},{t:this.shape_1729},{t:this.shape_1454,p:{x:-818.925,y:236.025}},{t:this.shape_1728},{t:this.shape_1470,p:{x:-803.125,y:234.1}},{t:this.shape_1727},{t:this.shape_1468,p:{x:-785.475,y:236}},{t:this.shape_1467,p:{x:-778.825,y:236}},{t:this.shape_1466,p:{x:-769.675,y:234.15}},{t:this.shape_1726},{t:this.shape_1444,p:{x:-737.975,y:236.025}},{t:this.shape_1725,p:{x:-728.2,y:236.025}},{t:this.shape_1724},{t:this.shape_1406,p:{x:-704,y:236.025}},{t:this.shape_1723},{t:this.shape_1459,p:{x:-676.775,y:236.025}},{t:this.shape_1722},{t:this.shape_1440,p:{x:-649.725,y:236.025}},{t:this.shape_1455,p:{x:-638.375,y:236.025}},{t:this.shape_1448,p:{x:-627.525,y:236.025}},{t:this.shape_1436,p:{x:-616.125,y:236.025}},{t:this.shape_1453,p:{x:-606.725,y:236.025}},{t:this.shape_1721,p:{x:-599.925,y:239.975}},{t:this.shape_1720},{t:this.shape_1452,p:{x:-1279.425,y:290.275}},{t:this.shape_1451,p:{x:-1264.125,y:284.35}},{t:this.shape_1439,p:{x:-1251.875,y:286.325}},{t:this.shape_1719},{t:this.shape_1442,p:{x:-1230.675,y:286.325}},{t:this.shape_1567,p:{x:-1213.175,y:284.475}},{t:this.shape_1718},{t:this.shape_1409,p:{x:-1183.375,y:286.325}},{t:this.shape_1717},{t:this.shape_1716,p:{x:-1157.025,y:284.4}},{t:this.shape_1715,p:{x:-1151.625,y:284.35}},{t:this.shape_1432,p:{x:-1143.025,y:286.325}},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1394,p:{x:-1109.025,y:286.325}},{t:this.shape_1712},{t:this.shape_1342,p:{x:-1279.425,y:315.425}},{t:this.shape_1445,p:{x:-1264.125,y:309.5}},{t:this.shape_1433,p:{x:-1251.875,y:311.475}},{t:this.shape_1711},{t:this.shape_1400,p:{x:-1230.675,y:311.475}},{t:this.shape_1369,p:{x:-1212.575,y:309.5}},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1426,p:{x:-1276.025,y:336.625}},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1423,p:{x:-1246.025,y:336.625}},{t:this.shape_1411,p:{x:-1236.375,y:336.625}},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1390,p:{x:-1183.775,y:334.775}},{t:this.shape_1702,p:{x:-1171.6,y:336.625}},{t:this.shape_1388,p:{x:-1160.625,y:336.625}},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1384,p:{x:-1115.775,y:336.625}},{t:this.shape_1698,p:{x:-1107.075,y:334.65}},{t:this.shape_1382,p:{x:-1093.325,y:334.825}},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1373,p:{x:-977.625,y:336.625}},{t:this.shape_1372,p:{x:-966.625,y:336.625}},{t:this.shape_1371,p:{x:-956.975,y:336.625}},{t:this.shape_1401,p:{x:-944.95,y:336.625}},{t:this.shape_1689},{t:this.shape_1463,p:{x:-912.65,y:336.625}},{t:this.shape_1524,p:{x:-903.875,y:334.65}},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685,p:{x:-870.6,y:336.625}},{t:this.shape_1684},{t:this.shape_1402,p:{x:-838.7,y:336.625}},{t:this.shape_1683},{t:this.shape_1519,p:{x:-824.525,y:334.65}},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1354,p:{x:-766.025,y:336.625}},{t:this.shape_1414,p:{x:-756.25,y:336.625}},{t:this.shape_1376,p:{x:-744.15,y:336.625}},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1349,p:{x:-704.825,y:336.625}},{t:this.shape_1676},{t:this.shape_1347,p:{x:-677.775,y:336.625}},{t:this.shape_1346,p:{x:-666.425,y:336.625}},{t:this.shape_1345,p:{x:-655.575,y:336.625}},{t:this.shape_1344,p:{x:-644.175,y:336.625}},{t:this.shape_1343,p:{x:-634.775,y:336.625}}]},1).to({state:[{t:this.shape_2053},{t:this.shape_2052},{t:this.shape_1830,p:{x:-1307.775}},{t:this.shape_2051},{t:this.shape_2050},{t:this.shape_1333,p:{x:-1253.975}},{t:this.shape_1330,p:{x:-1234.975}},{t:this.shape_2049},{t:this.shape_2048},{t:this.shape_2047},{t:this.shape_2046},{t:this.shape_2045},{t:this.shape_1338,p:{x:-1120.375}},{t:this.shape_2044},{t:this.shape_1314,p:{x:-1074.675}},{t:this.shape_2043},{t:this.shape_2042},{t:this.shape_1320,p:{x:-1024.825}},{t:this.shape_2041},{t:this.shape_2040},{t:this.shape_1317,p:{x:-955.725}},{t:this.shape_1323,p:{x:-932.075}},{t:this.shape_2039},{t:this.shape_1305,p:{x:-888.475}},{t:this.shape_1304,p:{x:-874.625}},{t:this.shape_1334,p:{x:-865.975}},{t:this.shape_2038},{t:this.shape_1311,p:{x:-825.775}},{t:this.shape_1819,p:{x:-797.075}},{t:this.shape_1307,p:{x:-777.275}},{t:this.shape_1326,p:{x:-758.975}},{t:this.shape_1327,p:{x:-745.925}},{t:this.shape_1309,p:{x:-732.975}},{t:this.shape_1308,p:{x:-719.925}},{t:this.shape_1663,p:{x:-694.925}},{t:this.shape_2037},{t:this.shape_2036},{t:this.shape_1675,p:{x:-633.575}},{t:this.shape_1811,p:{x:-616.125}},{t:this.shape_2035},{t:this.instance_26},{t:this.shape_1810,p:{x:-1293.925,y:172.425}},{t:this.shape_1809,p:{x:-1283.675,y:178.275}},{t:this.shape_2034},{t:this.shape_2033},{t:this.shape_2032},{t:this.shape_1646,p:{x:-1234.925,y:174.325}},{t:this.shape_2031},{t:this.shape_2030},{t:this.shape_2029},{t:this.shape_2028},{t:this.shape_2027},{t:this.shape_1645,p:{x:-1140.925,y:172.475}},{t:this.shape_2026},{t:this.shape_2025},{t:this.shape_2024},{t:this.shape_2023},{t:this.shape_2022},{t:this.shape_2021},{t:this.shape_2020},{t:this.shape_2019},{t:this.shape_2018},{t:this.shape_2017},{t:this.shape_1587,p:{x:-1007.35,y:174.325}},{t:this.shape_2016},{t:this.shape_2015},{t:this.shape_2014},{t:this.shape_2013},{t:this.shape_2012},{t:this.shape_2011},{t:this.shape_2010},{t:this.shape_1640,p:{x:-913.675,y:174.325}},{t:this.shape_2009},{t:this.shape_2008},{t:this.shape_2007},{t:this.shape_2006},{t:this.shape_2005},{t:this.shape_2004},{t:this.shape_2003},{t:this.shape_2002},{t:this.shape_2001},{t:this.shape_1412,p:{x:-808.45,y:172.525}},{t:this.shape_2000},{t:this.shape_1999},{t:this.shape_1998},{t:this.shape_1997},{t:this.shape_1996},{t:this.shape_1995},{t:this.shape_1994},{t:this.shape_1382,p:{x:-721.025,y:172.525}},{t:this.shape_1993},{t:this.shape_1992},{t:this.shape_1991},{t:this.shape_1990},{t:this.shape_1598,p:{x:-1258.075,y:199.475}},{t:this.shape_1989},{t:this.shape_1988},{t:this.shape_1987},{t:this.shape_1986},{t:this.shape_1985},{t:this.shape_1984},{t:this.shape_1983},{t:this.shape_1982},{t:this.shape_1981},{t:this.shape_1980},{t:this.shape_1979},{t:this.shape_1978},{t:this.shape_1977},{t:this.shape_1976},{t:this.shape_1975},{t:this.shape_1648,p:{x:-1077.225,y:199.475}},{t:this.shape_1974},{t:this.shape_1973},{t:this.shape_1972},{t:this.shape_1971},{t:this.shape_1970},{t:this.shape_1969},{t:this.shape_1968},{t:this.shape_1967},{t:this.shape_1966},{t:this.shape_1515,p:{x:-968.075,y:197.6}},{t:this.shape_1965},{t:this.shape_1964},{t:this.shape_1963},{t:this.shape_1602,p:{x:-923.55,y:197.675}},{t:this.shape_1962},{t:this.shape_1725,p:{x:-897.85,y:199.475}},{t:this.shape_1961},{t:this.shape_1960},{t:this.shape_1959},{t:this.shape_1958},{t:this.shape_1957},{t:this.shape_1956},{t:this.shape_1500,p:{x:-825.125,y:197.6}},{t:this.shape_1553,p:{x:-808.025,y:197.625}},{t:this.shape_1389,p:{x:-795.85,y:199.475}},{t:this.shape_1642,p:{x:-784.875,y:199.475}},{t:this.shape_1489,p:{x:-772.3,y:199.475}},{t:this.shape_1955},{t:this.shape_1954},{t:this.shape_1953},{t:this.shape_1952},{t:this.shape_1951},{t:this.shape_1950},{t:this.shape_1949},{t:this.shape_1481,p:{x:-684.725,y:197.6}},{t:this.shape_1948},{t:this.shape_1498,p:{x:-656.4,y:199.475}},{t:this.shape_1458,p:{x:-641.5,y:199.475}},{t:this.shape_1947},{t:this.shape_1946},{t:this.shape_1637,p:{x:-603.225,y:199.475}},{t:this.shape_1945},{t:this.shape_1492,p:{x:-581.55,y:199.475}},{t:this.shape_1567,p:{x:-563.475,y:197.625}},{t:this.shape_1376,p:{x:-551.1,y:199.475}},{t:this.shape_1715,p:{x:-542.325,y:197.5}},{t:this.shape_1698,p:{x:-536.925,y:197.5}},{t:this.shape_1944},{t:this.shape_1943},{t:this.shape_1942},{t:this.shape_1941},{t:this.shape_1463,p:{x:-484.25,y:199.475}},{t:this.shape_1940},{t:this.shape_1524,p:{x:-470.075,y:197.5}},{t:this.shape_1939},{t:this.shape_1517,p:{x:-452.425,y:199.45}},{t:this.shape_1466,p:{x:-443.275,y:197.6}},{t:this.shape_1938},{t:this.shape_1352,p:{x:-414.95,y:199.475}},{t:this.shape_1937},{t:this.shape_1936},{t:this.shape_1638,p:{x:-372.775,y:199.475}},{t:this.shape_1631,p:{x:-361.775,y:199.475}},{t:this.shape_1634,p:{x:-352.125,y:199.475}},{t:this.shape_1935},{t:this.shape_1934},{t:this.shape_1353,p:{x:-307.8,y:199.475}},{t:this.shape_1519,p:{x:-299.025,y:197.5}},{t:this.shape_1933},{t:this.shape_1516,p:{x:-280.525,y:199.45}},{t:this.shape_1716,p:{x:-274.475,y:197.55}},{t:this.shape_1932},{t:this.shape_1931},{t:this.shape_1930},{t:this.shape_1360,p:{x:-1271.975,y:222.7}},{t:this.shape_1425,p:{x:-1266.575,y:222.65}},{t:this.shape_1577,p:{x:-1255.575,y:224.6}},{t:this.shape_1563,p:{x:-1248.925,y:224.6}},{t:this.shape_1356,p:{x:-1239.775,y:222.75}},{t:this.shape_1929},{t:this.shape_1621,p:{x:-1208.075,y:224.625}},{t:this.shape_1928},{t:this.shape_1927},{t:this.shape_1926},{t:this.shape_1925},{t:this.shape_1409,p:{x:-1146.875,y:224.625}},{t:this.shape_1924},{t:this.shape_1630,p:{x:-1119.825,y:224.625}},{t:this.shape_1514,p:{x:-1108.475,y:224.625}},{t:this.shape_1507,p:{x:-1097.625,y:224.625}},{t:this.shape_1624,p:{x:-1086.225,y:224.625}},{t:this.shape_1394,p:{x:-1076.825,y:224.625}},{t:this.shape_1721,p:{x:-1070.025,y:228.575}},{t:this.shape_1923},{t:this.shape_1452,p:{x:-1283.675,y:278.875}},{t:this.shape_1922},{t:this.shape_1586,p:{x:-1256.125,y:274.925}},{t:this.shape_1921},{t:this.shape_1480,p:{x:-1234.925,y:274.925}},{t:this.shape_1920},{t:this.shape_1609,p:{x:-1204.125,y:274.925}},{t:this.shape_1919},{t:this.shape_1702,p:{x:-1185.1,y:274.925}},{t:this.shape_1570,p:{x:-1174.125,y:274.925}},{t:this.shape_1582,p:{x:-1164.475,y:274.925}},{t:this.shape_1918},{t:this.shape_1917},{t:this.shape_1916},{t:this.shape_1915},{t:this.shape_1456,p:{x:-1105.825,y:274.925}},{t:this.shape_1571,p:{x:-1094.425,y:274.925}},{t:this.shape_1551,p:{x:-1083.425,y:274.925}},{t:this.shape_1914},{t:this.shape_1738,p:{x:-1063.25,y:274.925}},{t:this.shape_1913},{t:this.shape_1569,p:{x:-1038.775,y:274.925}},{t:this.shape_1912},{t:this.shape_1911},{t:this.shape_1383,p:{x:-1007.575,y:272.95}},{t:this.shape_1547,p:{x:-998.975,y:274.925}},{t:this.shape_1534,p:{x:-986.95,y:274.925}},{t:this.shape_1910},{t:this.shape_1909},{t:this.shape_1537,p:{x:-946.025,y:274.925}},{t:this.shape_1536,p:{x:-935.025,y:274.925}},{t:this.shape_1908},{t:this.shape_1731,p:{x:-913.35,y:274.925}},{t:this.shape_1535,p:{x:-901.375,y:274.925}},{t:this.shape_1907},{t:this.shape_1906},{t:this.shape_1905},{t:this.shape_1904},{t:this.shape_1530,p:{x:-830.925,y:274.925}},{t:this.shape_1367,p:{x:-822.225,y:272.95}},{t:this.shape_1903},{t:this.shape_1772,p:{x:-808.1,y:274.925}},{t:this.shape_1902},{t:this.shape_1511,p:{x:-785.275,y:274.925}},{t:this.shape_1901},{t:this.shape_1359,p:{x:-759.075,y:272.95}},{t:this.shape_1900},{t:this.shape_1475,p:{x:-738.25,y:274.925}},{t:this.shape_1899},{t:this.shape_1898},{t:this.shape_1494,p:{x:-702.775,y:274.925}},{t:this.shape_1897},{t:this.shape_1490,p:{x:-1279.275,y:300.075}},{t:this.shape_1896},{t:this.shape_1455,p:{x:-1258.075,y:300.075}},{t:this.shape_1895},{t:this.shape_1495,p:{x:-1229.175,y:300.075}},{t:this.shape_1485,p:{x:-1218.175,y:300.075}},{t:this.shape_1894},{t:this.shape_1893},{t:this.shape_1493,p:{x:-1185.625,y:300.075}},{t:this.shape_1741,p:{x:-1175.75,y:298.275}},{t:this.shape_1892},{t:this.shape_1464,p:{x:-1155.625,y:300.075}},{t:this.shape_1491,p:{x:-1145.975,y:300.075}},{t:this.shape_1891},{t:this.shape_1890},{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1488,p:{x:-1069.475,y:300.075}},{t:this.shape_1789,p:{x:-1060.775,y:298.1}},{t:this.shape_1886},{t:this.shape_1450,p:{x:-1047.675,y:300.075}},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1484,p:{x:-997.55,y:300.075}},{t:this.shape_1444,p:{x:-986.575,y:300.075}},{t:this.shape_1539,p:{x:-974,y:300.075}},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1477,p:{x:-941.725,y:300.075}},{t:this.shape_1781,p:{x:-933.025,y:298.1}},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1556,p:{x:-893.225,y:300.05}},{t:this.shape_1555,p:{x:-886.575,y:300.05}},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1776,p:{x:-851.375,y:298.1}},{t:this.shape_1472,p:{x:-842.775,y:300.075}},{t:this.shape_1876},{t:this.shape_1875},{t:this.shape_1600,p:{x:-807.2,y:300.075}},{t:this.shape_1599,p:{x:-795.1,y:300.075}},{t:this.shape_1775,p:{x:-785.15,y:298.275}},{t:this.shape_1457,p:{x:-776.025,y:300.075}},{t:this.shape_1874},{t:this.shape_1544,p:{x:-750.275,y:300.05}},{t:this.shape_1543,p:{x:-743.625,y:300.05}},{t:this.shape_1778,p:{x:-734.475,y:298.2}},{t:this.shape_1390,p:{x:-717.375,y:298.225}},{t:this.shape_1873},{t:this.shape_1439,p:{x:-694.225,y:300.075}},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1685,p:{x:-661.35,y:300.075}},{t:this.shape_1454,p:{x:-649.375,y:300.075}},{t:this.shape_1764,p:{x:-640.675,y:298.1}},{t:this.shape_1870},{t:this.shape_1393,p:{x:-609.875,y:300.05}},{t:this.shape_1392,p:{x:-603.225,y:300.05}},{t:this.shape_1769,p:{x:-594.075,y:298.2}},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1730,p:{x:-559.8,y:300.075}},{t:this.shape_1760,p:{x:-551.125,y:298.1}},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1414,p:{x:-510.1,y:300.075}},{t:this.shape_1865},{t:this.shape_1756,p:{x:-495.925,y:298.1}},{t:this.shape_1380,p:{x:-489.925,y:300.05}},{t:this.shape_1763,p:{x:-480.775,y:298.2}},{t:this.shape_1379,p:{x:-471.625,y:300.05}},{t:this.shape_1365,p:{x:-464.975,y:300.05}},{t:this.shape_1755,p:{x:-455.825,y:298.2}},{t:this.shape_1448,p:{x:-439.625,y:300.075}},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1440,p:{x:-411.375,y:300.075}},{t:this.shape_1476,p:{x:-401.5,y:298.275}},{t:this.shape_1862},{t:this.shape_1402,p:{x:-374.75,y:300.075}},{t:this.shape_1442,p:{x:-363.325,y:300.075}},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1358,p:{x:-324.975,y:300.05}},{t:this.shape_1357,p:{x:-318.325,y:300.05}},{t:this.shape_1747,p:{x:-309.175,y:298.2}},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1737,p:{x:-1248.6,y:325.225}},{t:this.shape_1540,p:{x:-1233.7,y:325.225}},{t:this.shape_1806,p:{x:-1223.75,y:323.425}},{t:this.shape_1436,p:{x:-1214.625,y:325.225}},{t:this.shape_1854},{t:this.shape_1853},{t:this.shape_1433,p:{x:-1184.425,y:325.225}},{t:this.shape_1502,p:{x:-1172.375,y:325.2}},{t:this.shape_1501,p:{x:-1165.725,y:325.2}},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1432,p:{x:-1086.075,y:325.225}},{t:this.shape_1423,p:{x:-1075.075,y:325.225}},{t:this.shape_1426,p:{x:-1065.425,y:325.225}},{t:this.shape_1847},{t:this.shape_1411,p:{x:-1036.425,y:325.225}},{t:this.shape_1388,p:{x:-1025.425,y:325.225}},{t:this.shape_1846},{t:this.shape_1384,p:{x:-998.075,y:325.225}},{t:this.shape_1750,p:{x:-988.2,y:323.425}},{t:this.shape_1845},{t:this.shape_1372,p:{x:-967.875,y:325.225}},{t:this.shape_1844},{t:this.shape_1483,p:{x:-943.925,y:325.2}},{t:this.shape_1482,p:{x:-937.275,y:325.2}},{t:this.shape_1843},{t:this.shape_1400,p:{x:-911.925,y:325.225}},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1373,p:{x:-883.675,y:325.225}},{t:this.shape_1471,p:{x:-873.8,y:323.425}},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1371,p:{x:-823.175,y:325.225}},{t:this.shape_1404,p:{x:-813.3,y:323.425}},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1468,p:{x:-789.725,y:325.2}},{t:this.shape_1467,p:{x:-783.075,y:325.2}},{t:this.shape_1835},{t:this.shape_1834},{t:this.shape_1354,p:{x:-742.225,y:325.225}},{t:this.shape_1773,p:{x:-732.45,y:325.225}},{t:this.shape_1833},{t:this.shape_1401,p:{x:-708.25,y:325.225}},{t:this.shape_1832},{t:this.shape_1349,p:{x:-681.025,y:325.225}},{t:this.shape_1831},{t:this.shape_1347,p:{x:-653.975,y:325.225}},{t:this.shape_1346,p:{x:-642.625,y:325.225}},{t:this.shape_1345,p:{x:-631.775,y:325.225}},{t:this.shape_1344,p:{x:-620.375,y:325.225}},{t:this.shape_1343,p:{x:-610.975,y:325.225}},{t:this.shape_1342,p:{x:-604.175,y:329.175}}]},1).wait(9));

	// Nvigasi
	this.posisiFrame = new cjs.Text("", "16px 'Arial'", "#3E5EAB");
	this.posisiFrame.name = "posisiFrame";
	this.posisiFrame.textAlign = "right";
	this.posisiFrame.lineHeight = 20;
	this.posisiFrame.parent = this;
	this.posisiFrame.setTransform(-123.45,-286.4);

	this.btnNext = new lib.back();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(-203.65,-320.35,0.5334,0.5334,0,0,0,-0.2,-0.2);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 1);

	this.btnHome = new lib.home();
	this.btnHome.name = "btnHome";
	this.btnHome.setTransform(-139.8,-326.55,0.5334,0.5334,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnHome, 0, 1, 1);

	this.btnQuit = new lib.quit();
	this.btnQuit.name = "btnQuit";
	this.btnQuit.setTransform(-140.85,320.1,0.5334,0.5334,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.btnQuit, 0, 1, 1);

	this.btnBack = new lib.back();
	this.btnBack.name = "btnBack";
	this.btnBack.setTransform(-281.25,-320.45,0.5334,0.5334,180);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 1);

	this.btnPapan = new lib.mouse();
	this.btnPapan.name = "btnPapan";
	this.btnPapan.setTransform(-769.9,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPapan},{t:this.btnBack},{t:this.btnQuit},{t:this.btnHome},{t:this.btnNext},{t:this.posisiFrame}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1372.9,-1181,1375.1000000000001,1568.6);


// stage content:
(lib.SistemStarter8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Navigasi
	this.instance = new lib.teoriStarter();
	this.instance.setTransform(1377.5,362.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(644.6,372.4,621.4999999999999,346.30000000000007);
// library properties:
lib.properties = {
	id: 'C87655E9D586F04AA2571D9E14E3ACF1',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap17.png?1757961791197", id:"Bitmap17"},
		{src:"images/Bitmap18.png?1757961791197", id:"Bitmap18"},
		{src:"images/Bitmap19.png?1757961791197", id:"Bitmap19"},
		{src:"images/Bitmap2.png?1757961791197", id:"Bitmap2"},
		{src:"images/Bitmap20.png?1757961791197", id:"Bitmap20"},
		{src:"images/Bitmap22.png?1757961791197", id:"Bitmap22"},
		{src:"images/Bitmap23.png?1757961791197", id:"Bitmap23"},
		{src:"images/Bitmap26.png?1757961791197", id:"Bitmap26"},
		{src:"images/Bitmap27.png?1757961791197", id:"Bitmap27"},
		{src:"images/Bitmap29.png?1757961791197", id:"Bitmap29"},
		{src:"images/Bitmap3.png?1757961791197", id:"Bitmap3"},
		{src:"images/Bitmap33.png?1757961791197", id:"Bitmap33"},
		{src:"images/Bitmap33copy.png?1757961791197", id:"Bitmap33copy"},
		{src:"images/Bitmap38.png?1757961791197", id:"Bitmap38"},
		{src:"images/Bitmap39.png?1757961791197", id:"Bitmap39"},
		{src:"images/Bitmap40.png?1757961791197", id:"Bitmap40"},
		{src:"images/Bitmap41.png?1757961791197", id:"Bitmap41"},
		{src:"images/Bitmap42.png?1757961791197", id:"Bitmap42"},
		{src:"images/Bitmap44.png?1757961791197", id:"Bitmap44"},
		{src:"images/Bitmap45.png?1757961791197", id:"Bitmap45"},
		{src:"images/Bitmap7.png?1757961791197", id:"Bitmap7"},
		{src:"images/Bitmap9.png?1757961791197", id:"Bitmap9"},
		{src:"images/Picture10.png?1757961791197", id:"Picture10"},
		{src:"images/Picture11.png?1757961791197", id:"Picture11"},
		{src:"images/Picture6.png?1757961791197", id:"Picture6"},
		{src:"images/Picture7.jpg?1757961791197", id:"Picture7"},
		{src:"images/WhatsAppImage20250805at021103.jpeg?1757961791197", id:"WhatsAppImage20250805at021103"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C87655E9D586F04AA2571D9E14E3ACF1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;