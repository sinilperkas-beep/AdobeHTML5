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



(lib.BitmapGrTeknik = function() {
	this.initialize(img.BitmapGrTeknik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,73);// helper functions:

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


(lib.tutup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgsOgBVMBYdAAAIAACrMhYdAAAg");
	this.shape.setTransform(0.025,4.0908,1,0.5183);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgsOABWIAAirMBYdAAAIAACrg");
	this.shape_1.setTransform(0.025,4.0908,1,0.5183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AG9kUQjhAMjfA3Qm/BtAGDRQAEBnAABB");
	this.shape_2.setTransform(-238.3547,-28.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AAvkNIhcAAIAAIbIBcAAg");
	this.shape_3.setTransform(-198.55,-28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Am6EGIABAAIAAAZIAAAGAFIElIAAgGIAAggIAWAAAG7D/IAAAAIAAoj");
	this.shape_4.setTransform(-238.175,-26.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Am3ElIAAgGIAAgZIgBAAQAAhCgEhnQgGjQG/huQDfg2DhgNIAAIjIAAAAIAAoaIhdAAIAAIaIgWAAIAAAgIAAAGg");
	this.shape_5.setTransform(-238.3547,-26.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AguENIAAoaIBdAAIAAIag");
	this.shape_6.setTransform(-198.55,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tutup, new cjs.Rectangle(-284,-56.8,568.1,66.39999999999999), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BitmapGrTeknik();
	this.instance.setTransform(-137.9,-13.1,0.8233,0.3586);

	this.instance_1 = new lib.BitmapGrTeknik();
	this.instance_1.setTransform(-137.9,-13.1,0.8233,0.3586);

	this.instance_2 = new lib.BitmapGrTeknik();
	this.instance_2.setTransform(-137.9,-13.1,0.8233,0.3586);

	this.instance_3 = new lib.BitmapGrTeknik();
	this.instance_3.setTransform(-137.9,-13.1,0.8233,0.3586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-137.9,-13.1,275.8,26.2), null);


(lib.hasil = function(mode,startPosition,loop,reversed) {
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
	this.hasil = new cjs.Text("", "20px 'Arial'");
	this.hasil.name = "hasil";
	this.hasil.lineHeight = 24;
	this.hasil.lineWidth = 96;
	this.hasil.parent = this;
	this.hasil.setTransform(-47.75,-19.45);

	this.timeline.addTween(cjs.Tween.get(this.hasil).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hasil, new cjs.Rectangle(-49.7,-21.4,99.5,42.9), null);


(lib.ekor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("EhUugBGMCpdAAAIAACNMipdAAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhUuABHIAAiNMCpdAAAIAACNg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ekor, new cjs.Rectangle(-543.3,-8,1086.6,16.1), null);


(lib.dasar1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(0.1,1,1).p("EhGxgHaMCNjAAAIAAO1MiNjAAAg");
	this.shape.setTransform(452.975,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("EhGxAHbIAAu1MCNjAAAIAAO1g");
	this.shape_1.setTransform(452.975,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dasar1, new cjs.Rectangle(-1,-1.5,908,97), null);


(lib.dasar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(0.1,1,1).p("EAtrgFpIAALTMhbVAAAIAArT");
	this.shape.setTransform(254.525,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgtqAFqIAArTMBbVAAAIAALTg");
	this.shape_1.setTransform(254.525,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dasar, new cjs.Rectangle(-38.8,-3.3,586.6999999999999,74.3), null);


(lib.skalaUtama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		const dasarWidth = this.dasar.nominalBounds.width;
		const dasarHeight = this.dasar.nominalBounds.height;
		
		// ================= KUNCI =================
		const labelCount = 15;   // 1–15 PAS di this.dasar
		const totalScale = 19;   // garis dibuat sampai 20
		// ========================================
		
		const divisionsPerInterval = 10;
		
		// spacing dihitung DARI 15 (JANGAN DIUBAH)
		const totalStripsDasar = labelCount * divisionsPerInterval;
		const spacing = dasarWidth / totalStripsDasar;
		
		// strip digambar sampai 20
		const totalStrips = totalScale * divisionsPerInterval;
		
		const smallLineHeight = dasarHeight * 0.08;
		const mediumLineHeight = dasarHeight * 0.14;
		const longLineHeight = dasarHeight * 0.2;
		
		const baselineY = dasarHeight;
		
		this.stripLines = [];
		
		for (let i = 0; i <= totalStrips; i++) {
		  const xPos = i * spacing;
		
		  const isLabel = (i % divisionsPerInterval === 0);
		  const isMiddle = (i % divisionsPerInterval === Math.floor(divisionsPerInterval / 2));
		  const isSmall = !isLabel && !isMiddle;
		
		  const line = new createjs.Shape();
		  line.graphics.setStrokeStyle(1).beginStroke("#000000");
		
		  let lineHeight;
		  if (isLabel) {
		    lineHeight = longLineHeight;
		  } else if (isMiddle) {
		    lineHeight = mediumLineHeight;
		  } else {
		    lineHeight = smallLineHeight;
		  }
		
		  line.graphics
		    .moveTo(0, baselineY)
		    .lineTo(0, baselineY - lineHeight)
		    .endStroke();
		
		  line.x = xPos;
		  line.y = 0;
		  this.addChild(line);
		  this.stripLines.push(line);
		
		  // ============ LABEL AMAN (1–15 SAJA) ============
		  if (isLabel) {
		    const labelValue = (i / divisionsPerInterval) + (this.parent.mulai || 0);
		
		    if (labelValue <= labelCount + (this.parent.mulai || 0)) {
		      const label = new createjs.Text(
		        labelValue.toString(),
		        `${Math.round(dasarHeight * 0.2)}px Arial`,
		        "#000"
		      );
		      label.textAlign = "center";
		      label.textBaseline = "bottom";
		      label.x = xPos;
		      label.y = baselineY - lineHeight - 4;
		      this.addChild(label);
		    }
		  }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkqAAIJVAA");
	this.shape.setTransform(-63.7,124.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AkblbIgbg8IgJgWABfm0QBYAABbAAQABAAAAAdAEOmtQAAAFAAAHQAAAFAAAFQAAAQgBAPQA/gDgJAHIAAAaIAAHtIAAEjIiYAAQgYgBgegKQg6gUgWgqIgFgMQhNirhAiOIAAgBQh9kUgxhuICuABIGwAAAlDm1QBpAABtAAQAWAAAVAAAAgFhIgFjMIEogC");
	this.shape_1.setTransform(-61.1741,168.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AiBAlIAAgBIiumBICuAAIGwABIAAHsIkoACIAFDMIiNk5g");
	this.shape_2.setTransform(-59.2,168.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ACrG2QgYgBgegKQg6gUgWgqIgFgMIgFjMIEogCIAAEjgAhtlaIiugBIgbg8IgJgWIAJAWIgNAAIAAgeIDWAAIArAAIAAACICHABIAaAAIAAgCICzAAQABAAAAAdIgFAAIAAgKIAAgMIAAAMIAAAKIgBAfQA/gDgJAHIAAAag");
	this.shape_3.setTransform(-61.1741,168.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(1,1,1).p("AC0k2IAAAPIlnJf");
	this.shape_4.setTransform(8.65,70.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(1,1,1).p("AgZjBIAzAAIAAGDIgzAAg");
	this.shape_5.setTransform(-35.825,14.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Aguj+IgBAAIAAmLQB9AJB8AnQD5BPgDCYQgCBKAAAvICdAAIAAAXIAAAXADzGjQAAgCiSAAQhKABhIABIAADIIAeAeQACACkigBQiSgBiRgBIgEtVIAgAAIJKAAIAAgVIAAgcIgMAA");
	this.shape_6.setTransform(-33.65,59.6167);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("Ak0KKIkjgCIgDtVIAgAAIJKAAIAAgVIAAgcIgMAAIAAmEIgzAAIAAGEIAAAAIAAmLQB8AJB9AnQD5BPgECYQgCBKAAAvICeAAIAAAXIAAAXIAAAPIloJfQAAgCiTAAIiSACIAADIIAeAeQACABiBAAIihAAg");
	this.shape_7.setTransform(-33.65,59.6167);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgZDCIAAmDIAzAAIAAGDg");
	this.shape_8.setTransform(-35.825,14.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#666666").ss(1,1,1).p("EhaBgE5MC0DAAAIAAJzMi0DAAAg");
	this.shape_9.setTransform(535.7525,70.15,1.0899,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("EhaBAE6IAApzMC0DAAAIAAJzg");
	this.shape_10.setTransform(535.7525,70.15,1.0899,1);

	this.dasar = new lib.dasar1();
	this.dasar.name = "dasar";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dasar},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skalaUtama, new cjs.Rectangle(-94.9,-6.4,1259.7,219.4), null);


(lib.MicrometerScale = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		const dasarWidth = this.dasar.nominalBounds.width;
		const dasarHeight = this.dasar.nominalBounds.height;
		
		const totalStrips = 20;
		const panjangNonius = dasarWidth * 19 / 20;
		const spacing = panjangNonius / totalStrips;
		
		const shortLineHeight = dasarHeight * 0.08;
		const longLineHeight = dasarHeight * 0.2;
		const baselineY = 0;
		
		this.stripLines = [];
		
		// Buat garis strip dan label
		for (let i = 0; i <= totalStrips; i++) {
		  const isLabel = (i % 2 === 0);
		  const xPos = i * spacing;
		
		  const line = new createjs.Shape();
		  line.graphics.setStrokeStyle(1).beginStroke("#000000");
		
		  const lineHeight = isLabel ? longLineHeight : shortLineHeight;
		  line.graphics.moveTo(0, baselineY).lineTo(0, baselineY + lineHeight);
		  line.graphics.endStroke();
		
		  line.x = xPos;
		  line.y = 0;
		  this.addChild(line);
		  this.stripLines.push(line);
		
		  if (isLabel && i / 2 <= 10) {
		    const angka = i / 2;
		    const warnaLabel = (angka === 0) ? "red" : "#000";
		    const ketebalan = (angka === 0) ? "bold" : "normal";
		    const ukuranFont = Math.round(dasarHeight * 0.2);
		
		    const label = new createjs.Text(angka.toString(), `${ketebalan} ${ukuranFont}px Arial`, warnaLabel);
		    label.textAlign = "center";
		    label.x = xPos;
		    label.y = baselineY + lineHeight + 2;
		    this.addChild(label);
		  }
		}
		
		// Tambahkan garis dasar
		/*const baseline = new createjs.Shape();
		baseline.graphics
		  .setStrokeStyle(2)
		  .beginStroke("#000000")
		  .moveTo(0, baselineY)
		  .lineTo(dasarWidth, baselineY)
		  .endStroke();
		this.addChild(baseline);*/
		
		// Fungsi update posisi dan sorot strip merah
		this.updatePositionsInMicrometer = function() {
		  const micrometer = this.parent; // Pastikan parent ini adalah micrometer
		  this.stripLines.forEach((line, i) => {
		    const posInMicrometer = this.localToLocal(line.x, line.y, micrometer);
		
		    if (i === 0) {
		      // Pastikan nilai mulai ada
		      if (typeof this.parent.mulai !== "number") this.parent.mulai = 0;
		
		      // Hitung nilai awal dalam mm
		      const nilaiAwal = (this.parent.mulai * 10) + (posInMicrometer.x / 0.5) * 0.05;
		
		      // Bulatkan ke kelipatan 0.05
		      const roundedX = (Math.round(nilaiAwal / 0.05) * 0.05).toFixed(2);
		      micrometer.hasil.hasil.text = `${roundedX}`;
		
		      // Ambil nilai desimal
		      const nilai = parseFloat(roundedX);
		      const desimal = +(nilai % 1).toFixed(2);
		
		      // Hitung index strip yang harus merah
		      const nomorMerah = Math.round(desimal / 0.05);
		
		      // Update tampilan semua strip
		      this.stripLines.forEach((garis, j) => {
		        const isLabel = (j % 2 === 0);
		        const isMerah = (j === nomorMerah);
		
		        const defaultHeight = isLabel ? longLineHeight : shortLineHeight;
		        const extraHeight = isMerah ? dasarHeight * 0.2 : 0;
		        const finalLineHeight = isMerah ? longLineHeight : defaultHeight;
		
		        garis.graphics.clear()
		          .setStrokeStyle(3)
		          .beginStroke(isMerah ? "red" : "#000000")
		          .moveTo(0, baselineY - extraHeight)
		          .lineTo(0, baselineY + finalLineHeight)
		          .endStroke();
		      });
		    }
		  });
		};
		
		// Jalankan update tiap frame
		this.on("tick", () => {
		  this.updatePositionsInMicrometer();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.dasar = new lib.dasar();
	this.dasar.name = "dasar";
	this.dasar.setTransform(38,1.25,1,0.5085,0,0,0,0,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AK3hUQAAABgBABQgeBAioAuQjOA5kiAAQkgAAjPg5Qiogvgeg/QgBgBAAgB");
	this.shape.setTransform(491.975,48.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EAwfgIGICiAAIAAghQAAgBgdAAEAtCgIIQgaAnhrAeQiNAnjIAAQjIAAiNgnQhsgegagnEAuNgIpQn7AAruAAQgDAAgCAAQgCAAgCAAUgToAAAgjRAABQkWAAkmAAA6FoCIADgEMA01AAAA94m2IA8hMIAVgcEgo1AG+QCsjYCPi1QEVlcBtiLI1GABIAAJvIAAFwIFSAAQA3gCBBgMQCCgZAwg1IANgQIALkBIqUgDEgrCgInQjEAAjKAAQgDAAABAlEgxIgIeQAAAHAAAIQABAGAAAHQABAUAAATQiLgEATAJIAAAh");
	this.shape_1.setTransform(251.0554,92.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("EgtrgB+MBbWAAAIAAD9MhbWAAAg");
	this.shape_2.setTransform(292.55,-68.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("EgtrAB/IAAj9MBbXAAAIAAD9g");
	this.shape_3.setTransform(292.55,-68.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgOC5IqUgDIAApuIVFgBImCHnIk6GNg");
	this.shape_4.setTransform(-7.725,92.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Egy+AIqIAAlwIKUADIgLEBIgNAQQgwA1iCAZQhBAMg3ACgEAgTgHDQhsgegagnIjbAAIABACMg01AAAIgDAEIi3AAIAVgcIgVAcIg8BMI1GABIAAghQgTgJCLAEIgBgnIgBgNIAAgPIAAAPIABANIgLAAQgBglADAAIGOAAIAAADIA6AAIEugBIAAgDII8AAMA25gABIAEAAIAFAAITpAAIDRABIAWAAIAwgBIAAABIAdABIAAAhIiiAAIABgCIjeAAQgaAnhrAeQiNAnjIAAQjIAAiNgng");
	this.shape_5.setTransform(251.0554,92.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AbLDkQipgwgeg/IgBgCIDcAAQAaAnBrAeQCOAoDHAAQDIAACOgoQBrgeAagnIDeAAIgBACQgeBAipAvQjNA5kiAAQkiAAjOg5gEgtxABXIAAgDIAAlwIFoAAIAAD7IAAAAIAAB1IAAADIkuAAIg6AAg");
	this.shape_6.setTransform(268.525,28.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dasar}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MicrometerScale, new cjs.Rectangle(-76.4,-82.5,662.3,231.1), null);


(lib.Micrometer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let conten = [
		   { 
		     mc: this.skalaNonius,
		     ekor: this.ekor,
		     hasil: this.hasil,
		     tutup: this.tutup,
			logo:this.logo,
		   }
		];
		
		// Fungsi drag
		function enableDrag(item) {
		
		    let startX = 0;
		    let posisiAwal = {};
		
		    const MIN_X = 0;
		    const MAX_X = 1500;
		
		    item.mc.on("mousedown", function (evt) {
		        startX = evt.stageX;
		
		        // simpan posisi awal semua objek
		        posisiAwal = {};
		        for (let key in item) {
		            posisiAwal[key] = item[key].x;
		        }
		    });
		
		    item.mc.on("pressmove", function (evt) {
		
		        let deltaX = evt.stageX - startX;
		
		        // hitung X baru untuk mc
		        let newX = posisiAwal.mc + deltaX;
		
		        // 🔒 BATASI seperti kode awal
		        newX = Math.max(MIN_X, Math.min(MAX_X, newX));
		
		        // koreksi delta agar semua objek konsisten
		        deltaX = newX - posisiAwal.mc;
		
		        // geser SEMUA objek
		        for (let key in item) {
		            item[key].x = posisiAwal[key] + deltaX;
		        }
		
		        evt.stage.update();
		    });
		}
		
		// Aktifkan drag
		conten.forEach(enableDrag);
		
		this.mulai = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(188.85,-26.75);

	this.hasil = new lib.hasil();
	this.hasil.name = "hasil";
	this.hasil.setTransform(-74.6,148.6);

	this.skalaNonius = new lib.MicrometerScale();
	this.skalaNonius.name = "skalaNonius";
	this.skalaNonius.setTransform(0,53.45,0.6998,1.1393,0,0,0,0,0.4);

	this.skalaUtama = new lib.skalaUtama();
	this.skalaUtama.name = "skalaUtama";
	this.skalaUtama.setTransform(0,-86.4,1.652,1.4495);

	this.ekor = new lib.ekor();
	this.ekor.name = "ekor";
	this.ekor.setTransform(983.8,20.95,1.7668,1);

	this.tutup = new lib.tutup();
	this.tutup.name = "tutup";
	this.tutup.setTransform(128.2,-38.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tutup},{t:this.ekor},{t:this.skalaUtama},{t:this.skalaNonius},{t:this.hasil},{t:this.logo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Micrometer, new cjs.Rectangle(-156,-94.9,2098.9,316.6), null);


// stage content:
(lib.JangkaSorong5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage, true); // true = multitouch support
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.micrometer = new lib.Micrometer();
	this.micrometer.name = "micrometer";
	this.micrometer.setTransform(222.05,298.75,0.5215,1.0659,0,0,0,0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.micrometer).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(780.4,557.1,454.4,-22.5);
// library properties:
lib.properties = {
	id: '0EBB65583D4AB54DB138DE5BD487B772',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BitmapGrTeknik.png?1766183050802", id:"BitmapGrTeknik"}
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
an.compositions['0EBB65583D4AB54DB138DE5BD487B772'] = {
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