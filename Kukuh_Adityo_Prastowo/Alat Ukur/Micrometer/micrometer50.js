(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"micrometer50_atlas_1", frames: [[530,323,863,124],[0,0,1220,287],[0,289,528,230],[1222,0,438,321]]}
];


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



(lib.CachedBmp_36 = function() {
	this.initialize(img.CachedBmp_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3835,409);


(lib.CachedBmp_31 = function() {
	this.initialize(img.CachedBmp_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3252,304);


(lib.CachedBmp_30 = function() {
	this.initialize(ss["micrometer50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["micrometer50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["micrometer50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["micrometer50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.spindel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","#FFFFFF","#343434","#828282","#494949","#FFFFFF"],[0,0.243,0.282,0.553,0.682,1],0.1,-28.4,0.1,28.5).s().p("EAiAAEcIhRABMhBcAAAIhQgBIyYABQl5AAgBgWIAAodQAAgGBfAAMBcQAAAIAaABIU4gBQBdAAAAAGIAAIdQAAAWl5AAg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spindel, new cjs.Rectangle(-372.7,-28.5,745.5,57), null);


(lib.rachet = function(mode,startPosition,loop,reversed) {
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
		let startY = 0;
		let startValue = 0;
		let rachetOffsetStartX = 0; // Selisih jarak X antara rachet dan skalaPutar
		let spindelOffsetStartX = 0; // Selisih jarak X antara spindel dan skalaPutar
		
		this.on("mousedown", (evt) => {
		  startY = evt.stageY;
		  const skalaPutar = this.parent ? this.parent.skalaPutar : null;
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  // ======================================================
		  // LOGIKA VISIBILITAS HASIL DI THIS.PARENT (DITUKAR)
		  // ======================================================
		  if (this.parent && this.parent.hasil) {
		    const statusBelajar = (typeof this.parent.modeBelajar !== "undefined") 
		      ? this.parent.modeBelajar 
		      : (typeof modeBelajar !== "undefined" ? modeBelajar : false);
		
		    // DITUKAR: Pengecekan difokuskan ke kondisi FALSE
		    if (statusBelajar === false) {
		      // MODE BELAJAR OFF: SEMBUNYIKAN
		      this.parent.hasil.visible = false;
		    } else {
		      // MODE BELAJAR ON (TRUE): JANGAN DISEMBUYIKAN (TETAP TAMPIL)
		      this.parent.hasil.visible = true;
		    }
		
		    // Update status teks indikator
		    if (typeof updateStatusHasil === "function") {
		      updateStatusHasil.call(this.parent);
		    } else if (typeof this.parent.updateStatusHasil === "function") {
		      this.parent.updateStatusHasil();
		    }
		  }
		
		  if (skalaPutar) {
		    startValue = skalaPutar.nilaiDesimal || 0;
		
		    // SIMPAN JARAK AWAL agar posisi tidak saling menimpa
		    if (rachet) {
		      rachetOffsetStartX = rachet.x - skalaPutar.x;
		    }
		    if (spindel) {
		      spindelOffsetStartX = spindel.x - skalaPutar.x;
		    }
		  }
		});
		
		this.on("pressmove", (evt) => {
		  const deltaY = evt.stageY - startY; 
		  const skalaPutar = this.parent ? this.parent.skalaPutar : null;
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  if (!skalaPutar) return;
		
		  // ======================================================
		  // LOGIKA VISIBILITAS HASIL SAAT DIGESER (DITUKAR)
		  // ======================================================
		  if (this.parent && this.parent.hasil) {
		    const statusBelajar = (typeof this.parent.modeBelajar !== "undefined") 
		      ? this.parent.modeBelajar 
		      : (typeof modeBelajar !== "undefined" ? modeBelajar : false);
		
		    // DITUKAR: Pengecekan difokuskan ke kondisi FALSE
		    if (statusBelajar === false) {
		      // MODE BELAJAR OFF: SEMBUNYIKAN
		      this.parent.hasil.visible = false;
		    } else {
		      // MODE BELAJAR ON (TRUE): JANGAN DISEMBUYIKAN
		      this.parent.hasil.visible = true;
		    }
		
		    if (typeof updateStatusHasil === "function") {
		      updateStatusHasil.call(this.parent);
		    } else if (typeof this.parent.updateStatusHasil === "function") {
		      this.parent.updateStatusHasil();
		    }
		  }
		
		  const totalStrips = 50;
		  const spacing = skalaPutar.nominalBounds.height / totalStrips;
		
		  const newValue = startValue + (deltaY / (totalStrips * spacing));
		  const delta = newValue - (skalaPutar.nilaiDesimal || 0);
		
		  // Pengali pergeseran x sesuai scaleWidth = 0.3
		  const multiplier = 15;
		  const devisor = 60; // Disesuaikan dengan scaleWidth 0.3
		  let nilaiGabunganBaru = this.parent.mulai + ((skalaPutar.x + delta * multiplier) / devisor);
		
		  // AMBIL BATAS MAKSIMAL (Default 25)
		  const maxBatas = (this.parent.skalaUtama && this.parent.skalaUtama.labelCount) 
		    ? this.parent.skalaUtama.labelCount 
		    : 25;
		
		  const minNilai = this.parent.mulai;
		  const maxNilai = this.parent.mulai + maxBatas;
		
		  // PEMBATAS KETAT (STOP & CLAMP):
		  // 1. Batas Minimal (0)
		  if (nilaiGabunganBaru < minNilai) {
		    const xMin = 0;
		    skalaPutar.x = xMin;
		    if (rachet) rachet.x = xMin + rachetOffsetStartX;
		    if (spindel) spindel.x = xMin + spindelOffsetStartX;
		    
		    skalaPutar.nilaiDesimal = 0;
		    if (typeof skalaPutar.updateThimble === "function") skalaPutar.updateThimble(0);
		    return;
		  }
		
		  // 2. Batas Maksimal (25) -> xMax = 25 * 60 = 1500px
		  if (nilaiGabunganBaru > maxNilai) {
		    const xMax = maxBatas * 60; 
		    skalaPutar.x = xMax;
		    if (rachet) rachet.x = xMax + rachetOffsetStartX;
		    if (spindel) spindel.x = xMax + spindelOffsetStartX;
		    
		    const maxNilaiDesimal = maxBatas * 2; 
		    skalaPutar.nilaiDesimal = maxNilaiDesimal;
		    if (typeof skalaPutar.updateThimble === "function") skalaPutar.updateThimble(maxNilaiDesimal);
		    return;
		  }
		
		  // JALANKAN NORMAL: pergeseran rachet & spindel mengacu pada offset skalaPutar
		  skalaPutar.x += delta * multiplier;
		  if (rachet) {
		    rachet.x = skalaPutar.x + rachetOffsetStartX;
		  }
		  if (spindel) {
		    spindel.x = skalaPutar.x + spindelOffsetStartX;
		  }
		  
		  skalaPutar.nilaiDesimal = newValue;
		
		  if (typeof skalaPutar.updateThimble === "function") {
		    skalaPutar.updateThimble(newValue);
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(-0.35,-57.35,0.3208,0.3208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rachet, new cjs.Rectangle(-0.3,-57.3,1230.3,131.2), null);


(lib.kalibrasiBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ApZjaISzAAQBaAABABAQBBBAAABaQAABbhBBAQhABAhaAAIyzAAQhaAAhBhAQhAhAAAhbQAAhaBAhAQBBhABaAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CCFF").s().p("ApZDbQhaAAhBhAQhAhAAAhbQAAhZBAhBQBBhABaAAISzAAQBaAABABAQBBBBAABZQAABbhBBAQhABAhaAAg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF99").s().p("ApZDbQhaAAhBhAQhAhAAAhbQAAhZBAhBQBBhABaAAISzAAQBaAABABAQBBBBAABZQAABbhBBAQhABAhaAAg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ApZDbQhaAAhBhAQhAhAAAhbQAAhZBAhBQBBhABaAAISzAAQBaAABABAQBBBBAABZQAABbhBBAQhABAhaAAg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-22.9,166.1,45.8);


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
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EhGxgHaMCNjAAAIAAO1MiNjAAAg");
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
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EgtqgFpMBbWAAAIAALTMhbWAAAg");
	this.shape.setTransform(254.55,6.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("EgtrAFqIAArTMBbXAAAIAALTg");
	this.shape_1.setTransform(254.55,6.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dasar, new cjs.Rectangle(-38.8,-30.3,586.6999999999999,74.3), null);


(lib.skalaUtamacopy = function(mode,startPosition,loop,reversed) {
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
		
		const offsetX = 0; 
		
		// Scale width diubah ke 0.3
		const scaleWidth = 0.3; 
		const effectiveWidth = (dasarWidth - (offsetX * 2)) * scaleWidth;
		
		// Batas 0 - 25
		const labelCount = 25;
		this.labelCount = labelCount; // Disimpan agar bisa dibaca oleh Ratchet / Thimble
		
		const divisionsPerInterval = 10; 
		const totalStrips = labelCount * divisionsPerInterval;
		
		const spacing = (effectiveWidth / 15) / divisionsPerInterval;
		
		const unitLebarSU = divisionsPerInterval * spacing;
		if (this.parent) {
		  this.parent.unitLebarSU = unitLebarSU;
		}
		
		// UKURAN GARIS
		const smallLineHeight = dasarHeight * 0.08;
		const mediumLineHeight = dasarHeight * 0.14; 
		const longLineHeight = dasarHeight * 0.2;   
		
		const gapBottom = 4; 
		const baselineY = dasarHeight;
		
		this.stripLines = [];
		
		for (let i = 0; i <= totalStrips; i++) {
		  const xPos = offsetX + (i * spacing);
		
		  const isIntervalUnit = (i % divisionsPerInterval === 0);
		  const isMiddle = (i % divisionsPerInterval === Math.floor(divisionsPerInterval / 2));
		  const isSmall = !isIntervalUnit && !isMiddle;
		
		  if (isSmall) continue;
		
		  const mulai = this.parent && this.parent.mulai !== undefined ? this.parent.mulai : 75;
		  const nilainumerik = i / divisionsPerInterval;
		  const labelValue = mulai + nilainumerik;
		
		  const hasLabel = isIntervalUnit && (labelValue % 5 === 0) && (nilainumerik <= labelCount);
		
		  const line = new createjs.Shape();
		  line.graphics.setStrokeStyle(1).beginStroke("#000000");
		
		  if (isIntervalUnit) {
		    const currentHeight = hasLabel ? longLineHeight : mediumLineHeight;
		
		    line.graphics
		      .moveTo(0, baselineY - gapBottom)
		      .lineTo(0, baselineY - gapBottom - currentHeight);
		  } else if (isMiddle) {
		    line.graphics
		      .moveTo(0, baselineY + gapBottom)
		      .lineTo(0, baselineY + gapBottom + mediumLineHeight);
		  }
		
		  line.graphics.endStroke();
		  line.x = xPos;
		  line.y = 0;
		  this.addChild(line);
		  this.stripLines.push(line);
		
		  if (hasLabel) {
		    const label = new createjs.Text(
		      labelValue.toString(),
		      `${Math.round(dasarHeight * 0.2)}px Arial`,
		      "#000"
		    );
		    label.textAlign = "center";
		    label.textBaseline = "bottom";
		    label.x = xPos;
		    label.y = baselineY - gapBottom - longLineHeight - 4;
		    this.addChild(label);
		  }
		}
		
		// Garis horizontal dasar
		const baseline = new createjs.Shape();
		baseline.graphics
		  .setStrokeStyle(2)
		  .beginStroke("#000000")
		  .moveTo(0, baselineY)
		  .lineTo(dasarWidth, baselineY)
		  .endStroke();
		this.addChild(baseline);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.dasar = new lib.dasar1();
	this.dasar.name = "dasar";

	this.timeline.addTween(cjs.Tween.get(this.dasar).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skalaUtamacopy, new cjs.Rectangle(0,-0.5,906,95.1), null);


(lib.skalaPutar = function(mode,startPosition,loop,reversed) {
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
		createjs.Touch.enable(stage);
		
		const thimbleWidth = this.nominalBounds.width;
		const thimbleHeight = this.nominalBounds.height;
		
		const totalStrips = 50;
		const duplicate = 4;
		const spacing = thimbleHeight / totalStrips;
		const visibleWidth = spacing * 15;
		const shortHeight = thimbleWidth * 0.3;
		const longHeight = thimbleWidth * 0.5;
		
		const stripContainer = new createjs.Container();
		stripContainer.x = 0; 
		this.addChild(stripContainer);
		
		// Buat strip horizontal
		for (let d = 0; d < duplicate; d++) {
		  for (let i = 0; i < totalStrips; i++) {
		    const index = d * totalStrips + i;
		    const isLong = (i % 5 === 0);
		    const yPos = index * spacing;
		
		    const garis = new createjs.Shape();
		    garis.graphics
		      .setStrokeStyle(1)
		      .beginStroke("#000")
		      .moveTo(0, 0)
		      .lineTo(isLong ? longHeight : shortHeight, 0)
		      .endStroke();
		    garis.y = yPos;
		    stripContainer.addChild(garis);
		
		    if (isLong) {
		      const labelValue = (totalStrips - i) % totalStrips;
		      const fontSize = Math.round(thimbleHeight * 0.06);
		      const label = new createjs.Text(labelValue.toString(), `${fontSize}px Arial`, "#000");
		      
		      label.textAlign = "left";
		      label.textBaseline = "middle";
		      label.x = longHeight + 4;
		      label.y = yPos;
		      
		      stripContainer.addChild(label);
		    }
		  }
		}
		
		// Masking
		const maskShape = new createjs.Shape();
		const dasarHeight = this.dasar ? this.dasar.nominalBounds.height : thimbleHeight;
		
		maskShape.graphics.beginFill("#000").drawRect(0, 0, thimbleWidth * 1.5, visibleWidth);
		maskShape.x = 0;
		maskShape.y = dasarHeight / 2 - visibleWidth / 2;
		stripContainer.mask = maskShape;
		
		// Pointer merah
		const pointerY = dasarHeight / 2;
		const pointer = new createjs.Shape();
		pointer.graphics
		  .setStrokeStyle(1)
		  .beginStroke("red")
		  .moveTo(0, 0)
		  .lineTo(thimbleWidth * 0.5, 0)
		  .endStroke();
		
		pointer.x = 0;
		pointer.y = pointerY;
		this.addChild(pointer);
		
		// Inisialisasi posisi awal
		this.x = 0; 
		let nilaiDesimal = 0;
		this.nilaiDesimal = 0;
		let startY = 0;
		let startValue = 0;
		
		// Variable offset untuk Thimble & Rachet
		let thimbleRachetOffsetX = 0; 
		let thimbleSpindelOffsetX = 0;
		
		this.updateThimble = function(val) {
		  nilaiDesimal = val;
		
		  const cycleHeight = totalStrips * spacing;
		  const rawOffset = -val * totalStrips * spacing; 
		  const loopOffset = ((rawOffset % cycleHeight) + cycleHeight) % cycleHeight;
		
		  stripContainer.y = Math.floor(pointerY - loopOffset - cycleHeight);
		};
		
		this.updateThimble(0);
		
		// Helper function untuk mengambil labelCount secara aman lintas layer
		function getLabelCount(scope) {
		  if (!scope.parent) return 25;
		  const skalaUtama = scope.parent.skalaUtama || (scope.stage && scope.stage.skalaUtama);
		  return (skalaUtama && skalaUtama.labelCount) ? skalaUtama.labelCount : 25;
		}
		
		// Helper untuk memperbarui visibilitas hasil secara aman berdasarkan modeBelajar
		function syncHasilVisibility(scope) {
		  if (scope.parent && scope.parent.hasil) {
		    const statusBelajar = (typeof scope.parent.modeBelajar !== "undefined") 
		      ? scope.parent.modeBelajar 
		      : (typeof modeBelajar !== "undefined" ? modeBelajar : false);
		
		    // MODE BELAJAR OFF (false) -> SEMBUNYIKAN HASIL
		    // MODE BELAJAR ON (true) -> TAMPILKAN HASIL
		    scope.parent.hasil.visible = Boolean(statusBelajar);
		
		    if (typeof updateStatusHasil === "function") {
		      updateStatusHasil.call(scope.parent);
		    } else if (typeof scope.parent.updateStatusHasil === "function") {
		      scope.parent.updateStatusHasil();
		    }
		  }
		}
		
		// ==========================================
		// UPDATE TIAP FRAME
		// ==========================================
		this.on("tick", () => {
		  this.updateThimble(nilaiDesimal);
		
		  const mulai = (this.parent && this.parent.mulai !== undefined) ? this.parent.mulai : 75;
		  
		  // 1 putaran desimal = 50 strip = 0.50 mm
		  const nilaiTambahan = nilaiDesimal * 0.5;
		  const nilaiGabungan = mulai + nilaiTambahan;
		
		  if (this.parent && this.parent.hasil) {
		    // Teks hasil jika berupa objek Text (atau jika di dalam containerMovieClip)
		    if (typeof this.parent.hasil.text !== "undefined") {
		      this.parent.hasil.text = nilaiGabungan.toFixed(2);
		    } else if (this.parent.hasil.textInstance) {
		      this.parent.hasil.textInstance.text = nilaiGabungan.toFixed(2);
		    }
		  }
		});
		
		// ==========================================
		// DRAG HANDLING SKALA PUTAR (THIMBLE)
		// ==========================================
		this.on("mousedown", function(evt) {
		  startY = evt.stageY;
		  startValue = nilaiDesimal;
		
		  // Cek dan atur visibilitas hasil berdasarkan modeBelajar
		  syncHasilVisibility(this);
		
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  if (rachet) thimbleRachetOffsetX = rachet.x - this.x;
		  if (spindel) thimbleSpindelOffsetX = spindel.x - this.x;
		});
		
		this.on("pressmove", function(evt) {
		  // Cek dan atur visibilitas hasil saat digeser
		  syncHasilVisibility(this);
		
		  const deltaY = evt.stageY - startY; 
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  const newValue = startValue + (deltaY / (totalStrips * spacing));
		  const delta = newValue - (this.nilaiDesimal || 0);
		
		  const multiplier = 15;
		  const devisor = 60; // Disesuaikan dengan scaleWidth = 0.3
		  const mulai = (this.parent && this.parent.mulai !== undefined) ? this.parent.mulai : 75;
		  let nilaiGabunganBaru = mulai + ((this.x + delta * multiplier) / devisor);
		
		  const maxBatas = getLabelCount(this);
		  const minNilai = mulai;
		  const maxNilai = mulai + maxBatas;
		
		  // PEMBATAS KETAT (STOP & CLAMP):
		  if (nilaiGabunganBaru < minNilai) {
		    const xMin = 0;
		    this.x = xMin;
		    if (rachet) rachet.x = xMin + thimbleRachetOffsetX;
		    if (spindel) spindel.x = xMin + thimbleSpindelOffsetX;
		    
		    this.nilaiDesimal = 0;
		    this.updateThimble(0);
		    return;
		  }
		
		  if (nilaiGabunganBaru > maxNilai) {
		    const xMax = maxBatas * 60; 
		    const maxNilaiDesimal = maxBatas * 2; 
		    this.x = xMax;
		    if (rachet) rachet.x = xMax + thimbleRachetOffsetX;
		    if (spindel) spindel.x = xMax + thimbleSpindelOffsetX;
		    
		    this.nilaiDesimal = maxNilaiDesimal;
		    this.updateThimble(maxNilaiDesimal);
		    return;
		  }
		
		  // Pergerakan normal
		  this.x += delta * multiplier;
		  if (rachet) rachet.x = this.x + thimbleRachetOffsetX;
		  if (spindel) spindel.x = this.x + thimbleSpindelOffsetX;
		
		  nilaiDesimal = newValue;
		  this.nilaiDesimal = newValue;
		});
		
		// ==========================================
		// DRAG HANDLING RACHET
		// ==========================================
		let rachetStartY = 0;
		let rachetStartValue = 0;
		let rachetOffsetStartX = 0;
		let rachetSpindelOffsetX = 0;
		
		this.on("mousedown", (evt) => {
		  rachetStartY = evt.stageY;
		
		  // Cek dan atur visibilitas hasil berdasarkan modeBelajar
		  syncHasilVisibility(this);
		
		  const skalaPutar = this.parent ? this.parent.skalaPutar : null;
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  if (skalaPutar) {
		    rachetStartValue = skalaPutar.nilaiDesimal || 0;
		    if (rachet) rachetOffsetStartX = rachet.x - skalaPutar.x;
		    if (spindel) rachetSpindelOffsetX = spindel.x - skalaPutar.x;
		  }
		});
		
		this.on("pressmove", (evt) => {
		  // Cek dan atur visibilitas hasil saat digeser
		  syncHasilVisibility(this);
		
		  const deltaY = evt.stageY - rachetStartY; 
		  const skalaPutar = this.parent ? this.parent.skalaPutar : null;
		  const rachet = this.parent ? this.parent.rachet : null;
		  const spindel = this.parent ? this.parent.spindel : null;
		
		  if (!skalaPutar) return;
		
		  const spacing = skalaPutar.nominalBounds.height / 50;
		
		  const newValue = rachetStartValue + (deltaY / (50 * spacing));
		  const delta = newValue - (skalaPutar.nilaiDesimal || 0);
		
		  const multiplier = 15;
		  const devisor = 60; // Disesuaikan dengan scaleWidth = 0.3
		  const mulai = (this.parent && this.parent.mulai !== undefined) ? this.parent.mulai : 75;
		  let nilaiGabunganBaru = mulai + ((skalaPutar.x + delta * multiplier) / devisor);
		
		  const maxBatas = getLabelCount(this);
		  const minNilai = mulai;
		  const maxNilai = mulai + maxBatas;
		
		  if (nilaiGabunganBaru < minNilai) {
		    const xMin = 0;
		    skalaPutar.x = xMin;
		    if (rachet) rachet.x = xMin + rachetOffsetStartX;
		    if (spindel) spindel.x = xMin + rachetSpindelOffsetX;
		    
		    skalaPutar.nilaiDesimal = 0;
		    if (typeof skalaPutar.updateThimble === "function") skalaPutar.updateThimble(0);
		    return;
		  }
		
		  if (nilaiGabunganBaru > maxNilai) {
		    const xMax = maxBatas * 60; 
		    const maxNilaiDesimal = maxBatas * 2;
		    skalaPutar.x = xMax;
		    if (rachet) rachet.x = xMax + rachetOffsetStartX;
		    if (spindel) spindel.x = xMax + rachetSpindelOffsetX;
		    
		    skalaPutar.nilaiDesimal = maxNilaiDesimal;
		    if (typeof skalaPutar.updateThimble === "function") skalaPutar.updateThimble(maxNilaiDesimal);
		    return;
		  }
		
		  skalaPutar.x += delta * multiplier;
		  if (rachet) rachet.x = skalaPutar.x + rachetOffsetStartX;
		  if (spindel) spindel.x = skalaPutar.x + rachetSpindelOffsetX;
		  
		  skalaPutar.nilaiDesimal = newValue;
		
		  if (typeof skalaPutar.updateThimble === "function") {
		    skalaPutar.updateThimble(newValue);
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A2WlmQDYgLV2g4QTdgwACgHIAAPBQrLgjrMghQ2WhDAAAJg");
	this.shape.setTransform(144.25,37.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAGdQ2WhDAAAJIAArJQDYgLV3g4QTbgwACgHIAAPBQrLgjrLghg");
	this.shape_1.setTransform(144.25,37.675);

	this.dasar = new lib.dasar();
	this.dasar.name = "dasar";
	this.dasar.setTransform(0.7,32.35,0.4911,3.1823,0,0,0,-37.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dasar},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skalaPutar, new cjs.Rectangle(0.2,-83.3,288.1,230.39999999999998), null);


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
		this.mulai = 0; // Inisialisasi batas awal (0, 25, 50, 75, dll)
		
		// ======================================================
		// UPDATE DYNAMIC TEXT MC NAMA (0-25 mm, dll)
		// ======================================================
		const rentang = 25; 
		const nilaiMulai = this.mulai;
		const nilaiAkhir = nilaiMulai + rentang;
		
		if (this.nama) {
		  if (this.nama.textInstance) {
		    this.nama.textInstance.text = `${nilaiMulai}-${nilaiAkhir} mm`;
		  } else if (typeof this.nama.text !== "undefined") {
		    this.nama.text = `${nilaiMulai}-${nilaiAkhir} mm`;
		  }
		}
		
		// ======================================================
		// HELPER UNTUK MENDAPATKAN OBJEK HASIL
		// ======================================================
		function getHasilObj(context) {
		  return context.hasil || (context.parent ? context.parent.hasil : null);
		}
		
		// ======================================================
		// VARIABEL MASTER
		// ======================================================
		this.modeBelajar = false;
		
		// ======================================================
		// UPDATE STATUS INDIKATOR (LABEL TERTULIS SESUAI PERMINTAAN)
		// ======================================================
		function updateStatusBelajar() {
		  if (this.statusBelajar) {
		    // ON = Belajar, OFF = Latihan
		    this.statusBelajar.text = this.modeBelajar ? "Mode: Belajar" : "Mode: Latihan";
		  }
		}
		
		function updateStatusHasil() {
		  const hasilObj = getHasilObj(this);
		  if (this.statusHasil && hasilObj) {
		    // Tampil = Hasil: Tampil, Sembunyi = Hasil: Tebak Hasil
		    this.statusHasil.text = hasilObj.visible ? "Hasil: Tampil" : "Hasil: Tebak Hasil";
		  }
		}
		
		// ======================================================
		// 1. TOMBOL HASIL
		// ======================================================
		if (this.hasilBtn) {
		  const hasilObj = getHasilObj(this);
		  
		  // Set kondisi awal
		  if (hasilObj) hasilObj.visible = false;
		  updateStatusHasil.call(this);
		
		  // Klik tombol Hasil (Toggle tampilan)
		  this.hasilBtn.on("click", () => {
		    const targetHasil = getHasilObj(this);
		    if (targetHasil) {
		      targetHasil.visible = !targetHasil.visible;
		    }
		    updateStatusHasil.call(this);
		    if (this.stage) this.stage.update();
		  });
		}
		
		// ======================================================
		// 2. TOMBOL BELAJAR
		// ======================================================
		if (this.belajarBtn) {
		  const hasilObj = getHasilObj(this);
		
		  // Set kondisi awal
		  this.modeBelajar = false;
		  if (hasilObj) hasilObj.visible = false;
		
		  updateStatusBelajar.call(this);
		  updateStatusHasil.call(this);
		
		  // Klik tombol Belajar (Toggle mode belajar)
		  this.belajarBtn.on("click", () => {
		    this.modeBelajar = !this.modeBelajar;
		
		    const targetHasil = getHasilObj(this);
		    if (targetHasil) {
		      targetHasil.visible = this.modeBelajar;
		    }
		
		    updateStatusBelajar.call(this);
		    updateStatusHasil.call(this);
		    if (this.stage) this.stage.update();
		  });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-314.95,-107.4,0.5,0.5);

	this.hasil = new cjs.Text("", "bold 50px 'Arial'", "#FF0000");
	this.hasil.name = "hasil";
	this.hasil.lineHeight = 58;
	this.hasil.lineWidth = 266;
	this.hasil.parent = this;
	this.hasil.setTransform(-827.05,-152.85);

	this.rachet = new lib.rachet();
	this.rachet.name = "rachet";
	this.rachet.setTransform(381.8,-55.75,1,1.5585);

	this.skalaPutar = new lib.skalaPutar();
	this.skalaPutar.name = "skalaPutar";
	this.skalaPutar.setTransform(7.1,-57.85,1.3428,2.0901,0,0,0,0.7,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skalaPutar},{t:this.rachet},{t:this.hasil},{t:this.instance}]}).wait(1));

	// Layer_1
	this.statusHasil = new cjs.Text("", "20px 'Arial'");
	this.statusHasil.name = "statusHasil";
	this.statusHasil.textAlign = "center";
	this.statusHasil.lineHeight = 24;
	this.statusHasil.lineWidth = 176;
	this.statusHasil.parent = this;
	this.statusHasil.setTransform(1254.1,-402.2,1.409,1.409);

	this.hasilBtn = new lib.kalibrasiBtn();
	this.hasilBtn.name = "hasilBtn";
	this.hasilBtn.setTransform(1254.3,-386.45,1.8647,1.409,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.hasilBtn, 0, 1, 2);

	this.statusBelajar = new cjs.Text("", "20px 'Arial'");
	this.statusBelajar.name = "statusBelajar";
	this.statusBelajar.textAlign = "center";
	this.statusBelajar.lineHeight = 24;
	this.statusBelajar.lineWidth = 176;
	this.statusBelajar.parent = this;
	this.statusBelajar.setTransform(924.35,-402.2,1.409,1.409);

	this.belajarBtn = new lib.kalibrasiBtn();
	this.belajarBtn.name = "belajarBtn";
	this.belajarBtn.setTransform(924.6,-386.45,1.8647,1.409,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.belajarBtn, 0, 1, 2);

	this.hasil_1 = new cjs.Text("", "20px 'Arial'");
	this.hasil_1.name = "hasil_1";
	this.hasil_1.lineHeight = 24;
	this.hasil_1.lineWidth = 96;
	this.hasil_1.parent = this;
	this.hasil_1.setTransform(1335.1,-138.1);

	this.skalaSpindel = new lib.skalaUtamacopy();
	this.skalaSpindel.name = "skalaSpindel";
	this.skalaSpindel.setTransform(0,-186.85,1.652,1.4495);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(-50.3,-120.85,0.5,0.5);

	this.nama = new cjs.Text("0 - 25 mm", "40px 'Arial'", "#FFFFFF");
	this.nama.name = "nama";
	this.nama.textAlign = "center";
	this.nama.lineHeight = 47;
	this.nama.lineWidth = 328;
	this.nama.parent = this;
	this.nama.setTransform(-715.45,201.9);

	this.instance_2 = new lib.CachedBmp_30();
	this.instance_2.setTransform(-931.4,190.25,0.5,0.5);

	this.spindel = new lib.spindel();
	this.spindel.name = "spindel";
	this.spindel.setTransform(-608.2,-43.25,1.2557,1.0375,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.CachedBmp_29();
	this.instance_3.setTransform(-952.1,-136.7,0.5,0.5);

	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-1464.1,-185,3.2479,1.5187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.spindel},{t:this.instance_2},{t:this.nama},{t:this.instance_1},{t:this.skalaSpindel},{t:this.hasil_1},{t:this.belajarBtn},{t:this.statusBelajar},{t:this.hasilBtn},{t:this.statusHasil}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Micrometer, new cjs.Rectangle(-1464.1,-418.1,3075.8999999999996,720.6), null);


// stage content:
(lib.micrometer50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.micrometer = new lib.Micrometer();
	this.micrometer.name = "micrometer";
	this.micrometer.setTransform(624.25,358.2,0.38,0.7767,0,0,0,0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.micrometer).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(707.8,393.4,528.8,199.5);
// library properties:
lib.properties = {
	id: '0EBB65583D4AB54DB138DE5BD487B772',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_36.png?1788241404004", id:"CachedBmp_36"},
		{src:"images/CachedBmp_31.png?1788241404004", id:"CachedBmp_31"},
		{src:"images/micrometer50_atlas_1.png?1788241403956", id:"micrometer50_atlas_1"}
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