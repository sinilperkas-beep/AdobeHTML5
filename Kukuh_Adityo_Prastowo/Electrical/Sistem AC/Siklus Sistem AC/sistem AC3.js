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



(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,103);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,227);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,141);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,309);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,144);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1582,890);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,447,97);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,191);


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


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF3300").ss(3,1,1).p("Ajxg+QCAiWAHgNQgBAIAIBDQAIBMgCABIHUiuQgEADAGDYQnCCWgFADQgDABgBA9QgBA9gCAAQgDABiRhMQhIgmhHgmQAQgTB3iMg");
	this.shape.setTransform(-1.8827,0.2243,2.2215,0.5542,0,-95.6442,-36.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjpCtIiPhMICHifQCAiWAHgNQgBAIAIBDQAIBMgCABIHUiuQgEADAGDYQnCCWgFADQgDABgBA9QgBA9gCAAIAAAAQgFAAiPhLg");
	this.shape_1.setTransform(-1.8827,0.2243,2.2215,0.5542,0,-95.6442,-36.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51.4,130.1,102.9);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#00FF66").ss(3,1,1).p("Ajxg+QCAiWAHgNQgBAIAIBDQAIBMgCABIHUiuQgEADAGDYQnCCWgFADQgDABgBA9QgBA9gCAAQgDABiRhMQhIgmhHgmQAQgTB3iMg");
	this.shape.setTransform(-1.8827,0.2243,2.2215,0.5542,0,-95.6442,-36.89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFFF").s().p("AjpCtIiPhMICHifQCAiWAHgNQgBAIAIBDQAIBMgCABIHUiuQgEADAGDYQnCCWgFADQgDABgBA9QgBA9gCAAIAAAAQgFAAiPhLg");
	this.shape_1.setTransform(-1.8827,0.2243,2.2215,0.5542,0,-95.6442,-36.89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-51.4,130.1,102.9);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape.setTransform(-62.179,-28.3304,0.9999,0.9999,-45.6485);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_1.setTransform(-62.179,-28.3304,0.9999,0.9999,-45.6485);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_2.setTransform(-62.7101,27.8385,1,1,-94.1338);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_3.setTransform(-62.7101,27.8385,1,1,-94.1338);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_4.setTransform(-22.1083,65.0673,1,1,-141.5955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_5.setTransform(-22.1083,65.0673,1,1,-141.5955);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_6.setTransform(30.1092,61.7134,1,1,173.4047);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_7.setTransform(30.1092,61.7134,1,1,173.4047);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_8.setTransform(64.7729,22.4234,1,1,128.4053);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_9.setTransform(64.7729,22.4234,1,1,128.4053);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_10.setTransform(63.1455,-26.0827,1,1,86.9412);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_11.setTransform(63.1455,-26.0827,1,1,86.9412);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_12.setTransform(29.3858,-61.6297,1,1,44.9994);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_13.setTransform(29.3858,-61.6297,1,1,44.9994);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(3,1,1).p("ADmKGQhagphnhYQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBig");
	this.shape_14.setTransform(-23.0327,-64.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAlIFQjLixg5jvQg5jvArj1QANhMAVhEIATg1IG4hBIgfAtQglA5gdBBQheDQAQDLQARDKBEETQAiCKAeBiQhagphnhYg");
	this.shape_15.setTransform(-23.0327,-64.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-130.3,260.9,260.70000000000005);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape.setTransform(-0.0403,-0.0355,0.0351,0.0351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_1.setTransform(-0.0403,-0.0355,0.0351,0.0351);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape_2.setTransform(-28.8663,-0.0023,0.0637,0.0637);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_3.setTransform(-28.8663,-0.0023,0.0637,0.0637);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape_4.setTransform(26.3337,-0.0023,0.0637,0.0637);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_5.setTransform(26.3337,-0.0023,0.0637,0.0637);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape_6.setTransform(-0.0274,0.0025,0.5047,0.5047);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_7.setTransform(-0.0274,0.0025,0.5047,0.5047);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape_8.setTransform(-0.0047,-0.0061,0.6041,0.6041);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_9.setTransform(-0.0047,-0.0061,0.6041,0.6041);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#666666").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");
	this.shape_10.setTransform(-0.0082,0.0163,0.8587,0.8587);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");
	this.shape_11.setTransform(-0.0082,0.0163,0.8587,0.8587);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#666666").ss(1,1,1).p("ARPAAQAAHJlEFCQlDFEnIAAQnHAAlElEQlDlCAAnJQAAnHFDlDQFElEHHAAQHIAAFDFEQFEFDAAHHg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AsLMMQlDlDAAnJQAAnHFDlDQFElDHHAAQHJAAFDFDQFCFDAAHHQAAHJlCFDQlDFDnJAAQnHAAlElDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-111.2,222.5,222.5);


(lib.Tween4copy3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF66").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape.setTransform(5.35,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(5.35,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF66").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_2.setTransform(0.45,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF00").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_3.setTransform(0.45,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF66").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_4.setTransform(-0.45,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(-0.45,-4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF66").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_6.setTransform(-5.35,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_7.setTransform(-5.35,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.3,17.6,16.6);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF99CC").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape.setTransform(5.35,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(5.35,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF99CC").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_2.setTransform(0.45,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_3.setTransform(0.45,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF99CC").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_4.setTransform(-0.45,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(-0.45,-4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF99CC").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_6.setTransform(-5.35,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_7.setTransform(-5.35,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.3,17.6,16.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAYAAQAAALgHAIQgHAIgKAAQgJAAgIgIQgHgIAAgLQAAgKAHgIQAIgIAJAAQAKAAAHAIQAHAIAAAKg");
	this.shape.setTransform(5.35,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E9FFFB","#FFFFFF","#C5FFF5","#C2FFF6","#C0FFF6","#CCFFF7","#389AF3","#FFFFFF","#FFFFFF"],[0,0,0,0,0,0,0.043,0.671,1],-2.4,0,2.5,0).s().p("AgRATQgHgIAAgLQAAgKAHgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(5.35,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgHgIAAgLQAAgKAHgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_2.setTransform(0.45,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9FFFB","#FFFFFF","#C5FFF5","#C2FFF6","#C0FFF6","#CCFFF7","#389AF3","#FFFFFF","#FFFFFF"],[0,0,0,0,0,0,0.043,0.671,1],-2.4,0,2.5,0).s().p("AgQATQgIgIABgLQgBgKAIgIQAHgIAJAAQAKAAAHAIQAHAIAAAKQAAALgHAIQgHAIgKAAQgJAAgHgIg");
	this.shape_3.setTransform(0.45,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_4.setTransform(-0.45,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E9FFFB","#FFFFFF","#C5FFF5","#C2FFF6","#C0FFF6","#CCFFF7","#389AF3","#FFFFFF","#FFFFFF"],[0,0,0,0,0,0,0.043,0.671,1],-2.4,0,2.5,0).s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(-0.45,-4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAZAAQAAALgIAIQgHAIgKAAQgJAAgIgIQgGgIAAgLQAAgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKg");
	this.shape_6.setTransform(-5.35,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E9FFFB","#FFFFFF","#C5FFF5","#C2FFF6","#C0FFF6","#CCFFF7","#389AF3","#FFFFFF","#FFFFFF"],[0,0,0,0,0,0,0.043,0.671,1],-2.4,0,2.5,0).s().p("AgRATQgGgIgBgLQABgKAGgIQAIgIAJAAQAKAAAHAIQAIAIAAAKQAAALgIAIQgHAIgKAAQgJAAgIgIg");
	this.shape_7.setTransform(-5.35,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.3,17.6,16.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag6gaIB1gdIAABSIh1Adg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6gaIB0gdIABBSIh1Adg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.6,13.8,13.2);


(lib.tekanan = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("160- 250 psi", "12px 'Arial Rounded MT Bold'", "#0000FF");
	this.text.lineHeight = 16;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(107.2,389,0.8821,0.8821);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAuA4Ihbhv");
	this.shape.setTransform(88.3026,392.2851,0.5476,0.5476,-0.0064);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("AB8AAQAAA0gkAkQgkAkg0AAQgzAAgkgkQgkgkAAg0QAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzg");
	this.shape_1.setTransform(90.7783,395.4128,0.882,0.882,0.002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,255,0.2)").s().p("AhXBYQgkglAAgzQAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzQAAAzgkAlQgkAkg0AAQgzAAgkgkg");
	this.shape_2.setTransform(90.7783,395.4128,0.882,0.882,0.002);

	this.text_1 = new cjs.Text("15-30 psi", "12px 'Arial Rounded MT Bold'", "#0000FF");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 55;
	this.text_1.parent = this;
	this.text_1.setTransform(25.5,-21.05,0.8821,0.8821);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(3,1,1).p("AAuA4Ihbhv");
	this.shape_3.setTransform(6.9526,-18.9149,0.5476,0.5476,-0.0064);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("AB8AAQAAA0gkAkQgkAkg0AAQgzAAgkgkQgkgkAAg0QAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzg");
	this.shape_4.setTransform(8.9778,-15.7389,0.8822,0.8822,-0.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,255,0.2)").s().p("AhXBYQgkglAAgzQAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzQAAAzgkAlQgkAkg0AAQgzAAgkgkg");
	this.shape_5.setTransform(8.9778,-15.7389,0.8822,0.8822,-0.001);

	this.text_2 = new cjs.Text("160- 250 psi", "12px 'Arial Rounded MT Bold'", "#0000FF");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 72;
	this.text_2.parent = this;
	this.text_2.setTransform(186.55,163,0.8821,0.8821);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(3,1,1).p("AAuA4Ihbhv");
	this.shape_6.setTransform(167.6526,166.2851,0.5476,0.5476,-0.0064);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(3,1,1).p("AB8AAQAAA0gkAkQgkAkg0AAQgzAAgkgkQgkgkAAg0QAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzg");
	this.shape_7.setTransform(170.1283,169.4128,0.882,0.882,0.002);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,255,0.2)").s().p("AhXBYQgkglAAgzQAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzQAAAzgkAlQgkAkg0AAQgzAAgkgkg");
	this.shape_8.setTransform(170.1283,169.4128,0.882,0.882,0.002);

	this.text_3 = new cjs.Text("15-30 psi", "12px 'Arial Rounded MT Bold'", "#0000FF");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 55;
	this.text_3.parent = this;
	this.text_3.setTransform(592.5,243.95,0.8821,0.8821);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(3,1,1).p("AAuA4Ihbhv");
	this.shape_9.setTransform(573.9526,246.0851,0.5476,0.5476,-0.0064);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(3,1,1).p("AB8AAQAAA0gkAkQgkAkg0AAQgzAAgkgkQgkgkAAg0QAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzg");
	this.shape_10.setTransform(575.9778,249.2611,0.8822,0.8822,-0.001);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.2)").s().p("AhXBYQgkglAAgzQAAgzAkgkQAkgkAzAAQA0AAAkAkQAkAkAAAzQAAAzgkAlQgkAkg0AAQgzAAgkgkg");
	this.shape_11.setTransform(575.9778,249.2611,0.8822,0.8822,-0.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.text_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text_2},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tekanan, new cjs.Rectangle(-3.5,-28.2,646.3,445.3), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("Ap2AAQAAACTtgC");
	this.shape.setTransform(100.625,95.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(4,1,1).p("Am7HOQABACN2ud");
	this.shape_1.setTransform(97.275,93.9751);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(4,1,1).p("AABu7QgCAAACd3");
	this.shape_2.setTransform(99.4719,98.3249,1,0.6649,-44.9991);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(4,1,1).p("AABu7QgCAAACd3");
	this.shape_3.setTransform(97.425,98.7826,1,0.6711);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(4,1,1).p("AKSAAQAAERjBDAQjADBkRAAQkQAAjAjBQjBjAAAkRQAAkQDBjAQDAjBEQAAQERAADADBQDBDAAAEQg");
	this.shape_4.setTransform(96.5,95.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AnQHRQjBjAABkRQgBkQDBjAQDBjBEPAAQEQAADBDBQDADAABEQQgBERjADAQjBDBkQAAQkPAAjBjBg");
	this.shape_5.setTransform(96.5,95.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(28.8,27.8,137,137.1), null);


(lib.suhu = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAADAAAEIAABzIAABjQAFADAEAEQAOAMAAASQAAASgOAMQgNANgTAAQgSAAgOgNQgNgMAAgSQAAgSANgMQAHgGAIgDIAAhhIAAh/IABAAQAAgMAFgJQAGgKAIAAQAIAAAGAKQAFAJABAMg");
	this.shape.setTransform(-403.375,82.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AggBNQgNgMAAgRQAAgTANgLQAHgHAIgDIAAhhIAoAAIAABjIAJAIQAOALAAATQAAARgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_1.setTransform(-403.375,90.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBPIAAh9IAAAAQABgMAFgKQAGgKAHAAQAJAAAFAKQAFAKABAMIAAAEIAAAHIAAByg");
	this.shape_2.setTransform(-403.125,73.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAAEAAADIAABzIAABjQAFADAEAEQAOANAAARQAAASgOANQgNAMgTAAQgSAAgOgMQgNgNAAgSQAAgRANgNQAHgGAIgDIAAhhIAAh/IABAAQAAgLAFgKQAGgKAIAAQAIAAAGAKQAFAKABALg");
	this.shape_3.setTransform(-124.225,223.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AggBNQgNgMAAgRQAAgTANgLQAHgHAIgDIAAhhIAoAAIAABjQAFADAEAFQAOALAAATQAAARgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_4.setTransform(-124.225,231.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBPIAAh9IAAAAQABgMAFgKQAGgKAHAAQAJAAAFAKQAFAKABAMIAAAEIAAAHIAAByg");
	this.shape_5.setTransform(-123.975,214.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAAEAAADIAABzIAABjQAFADAEAFQAOAMAAASQAAARgOANQgNAMgTAAQgSAAgOgMQgNgNAAgRQAAgSANgMQAHgHAIgDIAAhhIAAh/IABAAQAAgLAFgJQAGgLAIAAQAIAAAGALQAFAJABALg");
	this.shape_6.setTransform(132.275,145.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AggBNQgNgMAAgSQAAgRANgMQAHgHAIgDIAAhhIAoAAIAABjQAFADAEAFQAOAMAAARQAAASgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_7.setTransform(132.275,153.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBPIAAh9IAAAAQABgMAFgKQAGgKAHAAQAJAAAFAKQAFAKABAMIAAAEIAAAHIAAByg");
	this.shape_8.setTransform(132.525,136.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAADAAAEIAABzIAABjQAFADAEAEQAOAMAAASQAAASgOAMQgNANgTAAQgSAAgOgNQgNgMAAgSQAAgSANgMQAHgGAIgDIAAhhIAAh/IABAAQAAgMAFgJQAGgKAIAAQAIAAAGAKQAFAJABAMg");
	this.shape_9.setTransform(-124.225,63.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AggBNQgNgMAAgRQAAgTANgMQAHgGAIgDIAAhhIAoAAIAABjIAJAHQAOAMAAATQAAARgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_10.setTransform(-124.225,71.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBPIAAh+IAAAAQABgLAFgKQAGgKAHAAQAJAAAFAKQAFAKABALIAAAFIAAAHIAAByg");
	this.shape_11.setTransform(-123.975,54.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAAEAAADIAABzIAABjQAFADAEAFQAOAMAAASQAAARgOANQgNAMgTAAQgSAAgOgMQgNgNAAgRQAAgSANgMQAHgHAIgDIAAhhIAAh/IABAAQAAgLAFgJQAGgLAIAAQAIAAAGALQAFAJABALg");
	this.shape_12.setTransform(358.975,73.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AggBNQgNgMAAgRQAAgTANgMQAHgGAIgDIAAhhIAoAAIAABjIAJAHQAOAMAAATQAAARgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_13.setTransform(358.975,81.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTBPIAAh+IAAAAQABgLAFgKQAGgKAHAAQAJAAAFAKQAFAKABALIAAAFIAAAHIAAByg");
	this.shape_14.setTransform(359.225,64.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(1,1,1).p("AAXiIIAAAEQAAAEAAADIAABzIAABjQAFADAEAFQAOAMAAASQAAARgOANQgNAMgTAAQgSAAgOgMQgNgNAAgRQAAgSANgMQAHgHAIgDIAAhhIAAh+IABAAQAAgMAFgJQAGgLAIAAQAIAAAGALQAFAJABAMg");
	this.shape_15.setTransform(241.775,-124.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AggBNQgNgMAAgRQAAgTANgMQAHgGAIgDIAAhhIAoAAIAABjIAJAHQAOAMAAATQAAARgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_16.setTransform(241.775,-117);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBPIAAh+IAAAAQABgMAFgJQAGgKAHAAQAJAAAFAKQAFAJABAMIAAAFIAAAHIAAByg");
	this.shape_17.setTransform(242.025,-133.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAAEAAADIAABzIAABjQAFADAEAFQAOAMAAASQAAARgOANQgNAMgTAAQgSAAgOgMQgNgNAAgRQAAgSANgMQAHgHAIgDIAAhhIAAh/IABAAQAAgLAFgJQAGgLAIAAQAIAAAGALQAFAJABALg");
	this.shape_18.setTransform(101.675,-147.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AggBOQgNgNAAgSQAAgRANgNQAHgGAIgDIAAhhIAoAAIAABjIAJAHQAOANAAARQAAASgOANQgNAMgTAAQgSAAgOgMg");
	this.shape_19.setTransform(101.675,-139.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTBPIAAh+IAAAAQABgMAFgIQAGgLAHAAQAJAAAFALQAFAIABAMIAAAFIAAAHIAAByg");
	this.shape_20.setTransform(101.925,-156.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AAXiIIAAAEQAAAEAAADIAABzIAABjQAFADAEAFQAOAMAAASQAAARgOANQgNAMgTAAQgSAAgOgMQgNgNAAgRQAAgSANgMQAHgHAIgDIAAhhIAAh+IABAAQAAgMAFgJQAGgLAIAAQAIAAAGALQAFAJABAMg");
	this.shape_21.setTransform(-42.975,-4.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AggBOQgNgNAAgSQAAgRANgMQAHgHAIgDIAAhhIAoAAIAABjIAJAIQAOAMAAARQAAASgOANQgNAMgTAAQgSAAgOgMg");
	this.shape_22.setTransform(-42.975,3.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBPIAAh9IAAAAQABgNAFgIQAGgLAHAAQAJAAAFALQAFAIABANIAAAEIAAAHIAAByg");
	this.shape_23.setTransform(-42.725,-13.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAADAAAEIAABzIAABjQAFADAEAEQAOAMAAASQAAASgOAMQgNANgTAAQgSAAgOgNQgNgMAAgSQAAgSANgMQAHgGAIgDIAAhhIAAh/IABAAQAAgMAFgJQAGgKAIAAQAIAAAGAKQAFAJABAMg");
	this.shape_24.setTransform(-204.575,-188);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AggBNQgNgMAAgSQAAgRANgMQAHgHAIgDIAAhhIAoAAIAABjIAJAIQAOAMAAARQAAASgOAMQgNANgTAAQgSAAgOgNg");
	this.shape_25.setTransform(-204.575,-180.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTBPIAAh9IAAAAQABgMAFgKQAGgKAHAAQAJAAAFAKQAFAKABAMIAAAEIAAAHIAAByg");
	this.shape_26.setTransform(-204.325,-197);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("AAXiJIAAAFQAAADAAAEIAABzIAABjQAFADAEAEQAOAMAAASQAAASgOAMQgNANgTAAQgSAAgOgNQgNgMAAgSQAAgSANgMQAHgGAIgDIAAhhIAAh/IABAAQAAgMAFgJQAGgKAIAAQAIAAAGAKQAFAJABAMg");
	this.shape_27.setTransform(-23.025,-223.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AggBOQgNgNAAgSQAAgRANgNQAHgGAIgDIAAhhIAoAAIAABjIAJAHQAOANAAARQAAASgOANQgNAMgTAAQgSAAgOgMg");
	this.shape_28.setTransform(-23.025,-215.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTBPIAAh+IAAAAQABgMAFgIQAGgLAHAAQAJAAAFALQAFAIABAMIAAAFIAAAHIAAByg");
	this.shape_29.setTransform(-22.775,-232.25);

	this.text = new cjs.Text("7 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text.lineHeight = 18;
	this.text.lineWidth = 40;
	this.text.parent = this;
	this.text.setTransform(108.3,-162.2);

	this.text_1 = new cjs.Text("5 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 40;
	this.text_1.parent = this;
	this.text_1.setTransform(248.4,-139.8);

	this.text_2 = new cjs.Text("5 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 40;
	this.text_2.parent = this;
	this.text_2.setTransform(365.6,61.05);

	this.text_3 = new cjs.Text("42 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 40;
	this.text_3.parent = this;
	this.text_3.setTransform(140.95,131);

	this.text_4 = new cjs.Text("44 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 40;
	this.text_4.parent = this;
	this.text_4.setTransform(-112.85,208.3);

	this.text_5 = new cjs.Text("45 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_5.lineHeight = 18;
	this.text_5.lineWidth = 40;
	this.text_5.parent = this;
	this.text_5.setTransform(-396.75,67.45);

	this.text_6 = new cjs.Text("83 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 40;
	this.text_6.parent = this;
	this.text_6.setTransform(-117.6,54.05);

	this.text_7 = new cjs.Text("83 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 40;
	this.text_7.parent = this;
	this.text_7.setTransform(-36.35,-19.55);

	this.text_8 = new cjs.Text("11 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_8.lineHeight = 18;
	this.text_8.lineWidth = 40;
	this.text_8.parent = this;
	this.text_8.setTransform(-197.95,-200.8);

	this.text_9 = new cjs.Text("10 °C", "14px 'Arial Rounded MT Bold'", "#FF0000");
	this.text_9.lineHeight = 18;
	this.text_9.lineWidth = 40;
	this.text_9.parent = this;
	this.text_9.setTransform(-16.4,-231.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.suhu, new cjs.Rectangle(-409,-241.1,817,482.2), null);


(lib.salju = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjAgIgjgQIgiAQIAJgYIgrgIIArgHIgIgYIAhAQIAjgQIgJAYIArAHIgrAIg");
	this.shape.setTransform(0.125,-12.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAQIgiAQIAJgYIgrgIIArgHIgIgYIAhAQIAjgQIgJAYIArAHIgrAIIAJAYg");
	this.shape_1.setTransform(0.125,-12.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAjgfIAmgDAAjgfIAYgWIAxgFAA7g1IAJgyAA7g1IAfgeAAjgfIAIghAgjAlIgHAhAhWBVIAagZIAZgXIBGhEAhDBoIAHgsIgvAEAgjAlIgiAE");
	this.shape_2.setTransform(-0.125,-12.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA8A9IAEAvAAlAkIAEAiABoBEIgsgHIgXgZIAhAHABVBXIgZgaAgfgiIgDgmAg1g6IgegfAg1g6IgygJAg1g6IgFgxAgfgiIgWgYAgfgiIghgIAAlAkIhEhG");
	this.shape_3.setTransform(-0.075,-12.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABWACIAlAfAA0ABIAbAWAB7gXIglAZIgigBIAdgRAB7ADIglgBAhOgBIgsgBAhOgBIgqAdAhOgBIgngfAguAAIgggBAguAAIgdASAguAAIgdgZAA0ABIhigB");
	this.shape_4.setTransform(0,-12.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AABgzIAWgbAAChVIgBAiIgRgdAAChVIAfglAADh6IgBAlAAAAvIgBAgIgfAnAAAAvIgZAdAgBBPIgBAsAgXh6IAZAlAAAAvIASAdAgBBPIAdAqAABgzIgBBi");
	this.shape_5.setTransform(0.025,-12.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.salju, new cjs.Rectangle(-13.2,-25.5,26.5,26.5), null);


(lib.kotak = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-108.5,-154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kotak, new cjs.Rectangle(-108.5,-154.5,217,309), null);


(lib.komponen = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("EKSPANSI VALVE", "12px 'Arial Rounded MT Bold'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(198.75,-2.45,1.0693,1,0,0,20.7413);

	this.text_1 = new cjs.Text("RECEIVER DRYER", "12px 'Arial Rounded MT Bold'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 91;
	this.text_1.parent = this;
	this.text_1.setTransform(99.2,238.7,1.0693,1,0,0,20.7413);

	this.text_2 = new cjs.Text("EXTRA FAN", "12px 'Arial Rounded MT Bold'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 91;
	this.text_2.parent = this;
	this.text_2.setTransform(-193.2,238.7,1.0693,1,0,0,20.7413);

	this.text_3 = new cjs.Text("KONDENSOR", "12px 'Arial Rounded MT Bold'");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 91;
	this.text_3.parent = this;
	this.text_3.setTransform(-224.15,-19.4,1.0693,1,0,0,20.7413);

	this.text_4 = new cjs.Text("EVAPORATOR", "12px 'Arial Rounded MT Bold'");
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 91;
	this.text_4.parent = this;
	this.text_4.setTransform(214.45,-241.25,1.0693,1,0,0,20.7413);

	this.text_5 = new cjs.Text("KOMPRESOR", "12px 'Arial Rounded MT Bold'");
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 91;
	this.text_5.parent = this;
	this.text_5.setTransform(-162.95,-68.95,1.0693,1,0,0,20.7413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.komponen, new cjs.Rectangle(-226.1,-244,533.4,549.7), null);


(lib.katup_ekspansi_grup = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(47,-141);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvC9IAAl5IDfAAIAAF5g");
	this.shape.setTransform(54.575,-78.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDB53A").ss(2,1,1).p("AjZglIAkhZIGKCiIBwBgIiVgIImJihIhrheICPAFADVAkIglBY");
	this.shape_1.setTransform(51.125,-198.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ACwB8IAlhYIBwBggAjZglIAkhZIGKCiIglBYgADVAkgAlEiDICPAFIgkBZgAi1h+g");
	this.shape_2.setTransform(51.125,-198.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDB53A").ss(2,1,1).p("AAnGWIgFgVQgEgaAFgZQAOhQBcgoICUhAIA9gRQA/gYANgkQAohznkjAQnljABZAYQAtAMCOAz");
	this.shape_3.setTransform(73.4302,-166.4583);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.katup_ekspansi_grup, new cjs.Rectangle(17.7,-212.2,108.3,212.2), null);


(lib.freon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Refrigrant CAIR  bertekanan RENDAH (Kabut)", "12px 'Arial Rounded MT Bold'", "#2E2E2E");
	this.text.lineHeight = 16;
	this.text.lineWidth = 301;
	this.text.parent = this;
	this.text.setTransform(2673.8027,1031.6068,3.9837,3.9837,0.0474);

	this.text_1 = new cjs.Text("Refrigrant CAIR bertekanan TINGGI", "12px 'Arial Rounded MT Bold'", "#2E2E2E");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 216;
	this.text_1.parent = this;
	this.text_1.setTransform(223.8527,1780.4568,3.9837,3.9837,0.0474);

	this.text_2 = new cjs.Text("Refrigrant GAS bertekanan TINGGI", "12px 'Arial Rounded MT Bold'", "#2E2E2E");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 216;
	this.text_2.parent = this;
	this.text_2.setTransform(616.8527,618.2068,3.9837,3.9837,0.0474);

	this.text_3 = new cjs.Text("Refrigrant GAS bertekanan RENDAH", "12px 'Arial Rounded MT Bold'", "#2E2E2E");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 216;
	this.text_3.parent = this;
	this.text_3.setTransform(-210.5473,-318.1932,3.9837,3.9837,0.0474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.freon, new cjs.Rectangle(-218.6,-326.1,4100.5,2234), null);


(lib.SliderTrack_skin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#575E62").s().p("AmFAFIAAgJIMLAAIAAAJg");
	this.shape.setTransform(40,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C9295").s().p("AF8AKIAAgKIAKAAIAAAKgAmFAKIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKgAGGAAIAAgJIAKAAIAAAJg");
	this.shape_1.setTransform(40,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("AF8AFIr3AAIgKAAIAAgJIMLAAIAAAJg");
	this.shape_2.setTransform(40,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AEB2B4").s().p("Al7AFIAAgJIL3AAIAAAJg");
	this.shape_3.setTransform(40,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderTrack_skin, new cjs.Rectangle(0,0,80,3), null);


(lib.SliderTrack_disabledSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBBBBB").s().p("AF8AKIAAgKIAKAAIAAgJIAKAAIAAAJIgKAAIAAAAIAAAKgAmFAKIAAgKIgKAAIAAgJIAKAAIAAAJIAKAAIAAAKg");
	this.shape.setTransform(40,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AGBAFIAAgJIAAAAIAAAJgAmAAFIAAgJIL3AAIAAAJg");
	this.shape_1.setTransform(40.525,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AmFAFIAAgJIMLAAIAAAJg");
	this.shape_2.setTransform(40,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEBEB").s().p("AF8AFIr3AAIgKAAIAAgJIMLAAIAAAJg");
	this.shape_3.setTransform(40,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderTrack_disabledSkin, new cjs.Rectangle(0,0,80,3), null);


(lib.SliderTick_skin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#919999").s().p("AgEAKIAAgTIAJAAIAAATg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderTick_skin, new cjs.Rectangle(-0.5,0,1,2), null);


(lib.SliderThumb_upSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-5.5).s().p("AgiA3IgUgUIAshZIAVAAIAsBZIgUAUg");
	this.shape.setTransform(0,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0,6.5,0,-6.5).s().p("AgsBBIgUgeIA2hjIAVAAIA2BjIgUAegAg2AjIAUAUIBFAAIAUgUIgshZIgVAAg");
	this.shape_1.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderThumb_upSkin, new cjs.Rectangle(-6.5,0,13,13), null);


(lib.SliderThumb_overSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],0,5.5,0,-5.5).s().p("AgiA3IgUgUIAshZIAVAAIAsBZIgUAUg");
	this.shape.setTransform(0,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0,6.5,0,-6.5).s().p("AgsBBIgUgeIA2hjIAVAAIA2BjIgUAegAg2AjIAUAUIBFAAIAUgUIgshZIgVAAg");
	this.shape_1.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderThumb_overSkin, new cjs.Rectangle(-6.5,0,13,13), null);


(lib.SliderThumb_downSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,5.5,0,-5.5).s().p("AgiA3IgUgUIAshZIAVAAIAsBZIgUAUg");
	this.shape.setTransform(0,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0,6.5,0,-6.5).s().p("AgsBBIgUgeIA2hjIAVAAIA2BjIgUAegAg2AjIAUAUIBFAAIAUgUIgshZIgVAAg");
	this.shape_1.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderThumb_downSkin, new cjs.Rectangle(-6.5,0,13,13), null);


(lib.SliderThumb_disabledSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],0,5.5,0,-5.5).s().p("AgiA3IgUgUIAshZIAVAAIAsBZIgUAUg");
	this.shape.setTransform(0,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0,6.5,0,-6.5).s().p("AgsBBIgUgeIA2hjIAVAAIA2BjIgUAegAg2AjIAUAUIBFAAIAUgUIgshZIgVAAg");
	this.shape_1.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderThumb_disabledSkin, new cjs.Rectangle(-6.5,0,13,13), null);


(lib.focusRectSkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.8,0,10.8).s().p("AlxBuQgoAAAAgoIAAiLQAAgoAoAAILjAAQAoAAAAAoIAACLQAAAogoAAgAmPhFIAACLQAAAdAdABILlAAQAdgBAAgdIAAiLQAAgdgdgBIrlAAQgdABAAAdg");
	this.shape.setTransform(41.025,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.focusRectSkin, new cjs.Rectangle(0.1,0,82,22), null);


(lib.btn_kon = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AQiYkI9Qp5QjQhGgRi2MgDRghiQgSi2DRBGIdQJ5QDQBHASC2MADQAhiQANCDhoAAQgpAAg7gUg");
	this.shape.setTransform(0,-0.024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-159.2,250.1,318.4);


(lib.btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnVizIOrAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAIurAAQhLAAg1g1Qg0g1AAhKQAAhKA0g1QA1g0BLAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AnVC0QhLAAg0g1Qg1g0AAhLQAAhKA1g1QA0g0BLAAIOrAAQBLAAA0A0QA1A2AABJQAABLg1A0Qg0A1hLAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnVizIOrAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAIurAAQhLAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BLAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AnVC0QhLAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BLAAIOrAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AnVC0QhLAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BLAAIOrAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-19,132,38);


(lib.arah = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ao6iVQBCgbBbgWQC1gtCHAVQCHAVCHBDQBDAhAqAdQACAAAnhkQAmhjACAAQACABB2DZQB3DZABAAQABAAjWA0QjWA1gDADQACgDAYhQQAYhPABAAQALgEiMgmQiSgphTAGQhWAGjIBzQhlA5hSA4QADAAAPjQQAIhoAHhog");
	this.shape.setTransform(0.0001,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.4)").s().p("ADIC9QAXhPABAAQALgEiMgmQiSgphTAGQhWAGjIBzQhlA5hRA4QACgDAPjNIAPjQQBCgbBbgWQC1gtCHAVQCHAVCIBDQBDAhAqAdQACAAAmhkQAnhjACAAQABABB2DZQB2DYACABIjUA0QjXA1gDADQACgDAZhQgApaELIgBAAIABAAgAJbCkIABAAIgBAAg");
	this.shape_1.setTransform(0.0001,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.498)").s().p("AuBGBQAIgyAYhKQAuiUBQh5QD+mHHlAPQH4ARD5F5QB8C9AVC6IuCAAInzAAImOAAg");
	this.shape_2.setTransform(0.85,-2.6694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-41.2,179.5,77.1);


(lib.aliran5_r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.2,0,122.3,0).s().p("AyrY4QgOgPAAgVQAAgUAOgPQgOACAAgoQAAgVAPgOIAIgHIgIgHQgPgOAAgVIAAg9QgBgUAPgPIAGgGIgGgGQgPgOAAgVIAAg9QAAgUAPgPIAFgFIgGgFQgPgPAAgVIAAg8QAAgUAPgPIAFgEIgFgFQgPgOAAgVIgBg7QAAgVAOgPQAMgMARgDQgQgCgMgMQgPgOAAgVIAAg7QAAgUAPgPIADgDIgEgEQgOgOAAgVIAAg6QAAgVAOgOIAEgEIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgEgEQgPgPAAgUIAAg7QAAgUAPgPIADgDIgEgDQgPgPAAgUIAAg7QAAgOAHgLQgNgNAAgTQgBgkAKgmQAGgUASgLQAHgEAIgBQgEgHgBgJQgDgUANgQQAVgcAdgYQARgNAUACQAHABAGACQAAgGADgGQAHgTATgJQAcgNAigLQATgGATAKQAHAEAFAFQACgHAEgGQAKgTAUgFIA8gSQAUgFASAKIAJAGIAEgKQAKgSAUgGIA7gSQAUgGASAKIAIAGIAEgJQAKgTAUgGIA7gRQAUgGASAKIAHAFIAEgJQAKgSAUgGIA6gSQAUgFASAKIAHADIADgHQAKgSAUgGIA6gRQATgGATAJIAGAFIADgIQAKgSAUgGIA6gRQATgGATAKIAGADIADgGQAJgSAUgHIA7gSQASgGATAKIAGAEIADgHQAKgSAUgGIA4gSQAUgGASAKQATAJAGAUQAGAUgKASQgKATgTAGIg5ARQgUAGgSgKIgHgDIgDAHQgKASgTAGIg5ASQgUAGgSgKIgHgEIgDAHQgKASgTAGIg7ASQgTAGgTgKIgGgEIgDAHQgKASgTAGIg7ASQgTAGgTgKIgGgEIgDAHQgKATgUAFIg7ASQgTAGgTgKIgHgFIgEAJQgKASgUAGIg7ASQgTAFgTgKIgIgFIgDAJQgKASgUAGIg7ASQgUAGgSgKIgKgHIgEAKQgKATgUAGIg9ARQgUAGgSgLQgHgDgFgFQgBAGgDAGQgKASgTAHQgbAIgXALQgTAJgUgHIgBgBIAAABQgCATgQANQgUAPgNATQgMAPgTAEQAJARgFATQgHAYABAVQAAAPgHAMQAOAPgBAVIAAA2QAAAVgOAPIgEAEIAEADQAPAPAAAUIAAA7QAAAUgPAPIgDADIAEAEQAPAOAAAVIAAA6QAAAVgPAOIgDAEIAEAEQAOAOABAVIAAA6QgBAVgOAOIgEADIAEAEQAPAPAAAUIAAA7QAAAVgPAOQgMAMgQACQAQADAMALQAPAPAAAUIABA8QAAAUgOAPIgGAGIAFAEQAPAPAAAUIAAA8QAAAVgPAPIgFAFIAGAFQAPAPAAAUIAAA9QAAAVgPAOIgGAFIAGAGQAPAOABAVIAAA+QAAAVgPAOIgIAHIAIAHQAPAOAAAVQAABtgPAAQgPAOgUABQgVgBgPgOgADXmMQgSgKgHgTQgGgUAKgSQAJgTAUgGIA5gSQAUgGASAKIAFADIACgFQAKgSAUgGIA4gSQAUgGASAKIAFADIACgEQAKgTAUgGIA4gSQATgGATAKIAFADIACgFQAJgSAUgGIA4gSQATgGATAKIAEACIACgEQAKgTAUgGIA4gRQAUgGASAKIAFADIACgFQAKgSAUgGIA4gRQATgGATAJIAEADIACgFQAKgSAUgGIA3gSQATgGATAKIAEACIACgFQAJgSAUgGQAFgCgDAHQAHgHAHgDQgHgEgHgGQgOgPAAgVIgBg9QAAgUAOgPIAHgGIgHgGQgOgOAAgVIgBg8QAAgUAOgPIAGgGIgGgFQgPgPAAgVIAAgmIAAgdQAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgCIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgDIgDgDQgPgOAAgVQgBhIAPAAQAPgOAVAAQAUAAAPAOQAOAPABAUQgBAVgNAOQANgNABAOQAAAUgPAPIgDAEIADADQAPAPAAAVIAAA5QAAAVgPAPIgDACIAEAEQAPAPAAAVIAAA5QAAAVgPAPIgDADIAEAEQAPAOAAAVIAAAdIAAAmQAAAVgPAPIgFAFIAGAFQAPAOAAAVIABA9QgBAVgOAOIgGAGIAGAFQAPAOAAAVIABA+QgBAVgOAPQgHAGgHAEQAHADAHAHQAOAOABAVQgBAVgOAOQABAGgsAOQgTAGgTgJIgEgCIgBADQgKATgTAHIg5ARQgTAGgTgJIgEgDIgDAFQgKASgTAGIg4ARQgUAGgSgJIgFgDIgCAFQgKASgUAGIg4ARQgTAGgTgKIgEgCIgCAEQgKASgTAHIg4ARQgUAGgSgJIgFgDIgCAEQgKATgUAGIg3ARQgUAGgSgJIgGgDIgCAEQgJATgUAGIg5ARQgTAGgTgJIgFgEIgCAGQgKASgUAGIg4ARQgIADgHAAQgMAAgLgGg");
	this.shape.setTransform(0.0475,-141.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyrY5QgOgPgBgUQABgVAOgOQgOACAAgoQAAgVAPgOIAHgHIgHgHQgPgOAAgVIgBg8QAAgVAPgPIAGgGIgGgGQgPgOAAgVIAAg8QAAgVAPgOIAFgFIgGgFQgPgPAAgVIAAg8QAAgUAPgPIAFgFIgFgEQgPgOAAgVIgBg7QAAgVAOgPQAPgPAUAAQAVgBAPAPQAPAOAAAVIABA7QAAAVgOAPIgGAFIAFAFQAPAPAAAUIAAA8QAAAVgPAPIgFAEIAGAGQAPAOAAAVIAAA8QAAAVgPAOIgGAGIAGAFQAPAOAAAVIABA+QAAAVgPAOIgIAHIAIAHQAPAOAAAVQAABsgPAAQgPAPgVAAQgUAAgPgPgAytNUQgPgOAAgVIAAg6QAAgVAPgPIADgDIgEgEQgOgPgBgUIAAg6QABgVAOgPIAEgDIgFgEQgOgPgBgUIAAg6QABgVAOgOIAEgEIgEgDQgPgOAAgVIgBg7QABgUAOgPIADgDIgDgDQgPgPAAgUQgBhBAIgSIgBgBQgOgQACgVQACgfAKghIABgFQAFgTASgLQAJgFAJgCQgDgHAAgIQgCgUAOgPQAWgaAfgWQARgMAUADQAHABAGADQABgGACgGQAIgTATgJQAdgMAigKQAUgGASAKQAHADAEAFIAFgMQAKgSAUgGIA9gSQAUgGASAKIAIAGIAEgJQAKgSAUgGIA7gSQAUgGASAKIAJAFIADgJQAKgSAUgGIA7gRQAUgGASAKIAHAFIAEgJQAKgSAUgGIA6gSQAUgGASAKIAHAEIADgHQAKgSAUgGIA5gRQAUgHASAKIAHAEIADgHQAKgSAUgGIA5gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA4gRQATgHATAKIAHAFIADgIQAKgSAUgGIA5gRQAUgGASAKQATAKAFAUQAGAUgKASQgKASgUAGIg4ARQgUAGgSgKIgHgFIgDAHQgKATgUAGIg4ARQgUAHgSgKIgGgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgGgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgGgEIgEAHQgJASgUAGIg7ASQgUAGgSgKIgHgFIgEAJQgKASgTAGIg7ARQgUAGgSgKIgIgFIgEAIQgKASgUAGIg8ATQgUAGgSgKIgIgGIgEAJQgKATgUAFIg9ASQgUAGgSgLQgGgDgFgEIgFAMQgKASgUAGQgbAIgYAKQgTAHgUgGIgDgCIAAACQgDAUgRAMQgUAPgQASQgMAOgSACQAGAPgEAQIgBAEIgBADQgHAXgCAWQgBANgHAKQAPAPAAAVQAAAUgPAPQAPgFAAAXQAAAUgOAPIgEAEIAEADQAOAPAAAUIABA5QAAAVgOAPIgEAEIAEAEQAOAOAAAVIAAA6QAAAUgOAPIgEADIAFAEQAOAPAAAVIAAA6QAAAUgOAPIgEAEIAEADQAPAPAAAVIAAA6QAAAVgPAOQgOAPgVAAQgVAAgOgPgADkmBQgSgJgGgUQgGgUAJgSQAKgTATgGIA5gRQAUgHASAKIAFADIADgEQAJgTAUgGIA4gSQAUgGASAKIAGADIACgEQAJgTAUgGIA4gRQAUgHASAKIAFADIACgFQAKgSAUgGIA3gSQAUgGASAKIAGADIACgFQAKgSAUgGIA4gSQAUgGASAKIAFADIACgFQAKgSATgGIA4gRQAUgGASAKIAEACIADgFQAJgSAUgGIA3gSQAUgGASAJIADACIADgFIADgFQACgQAMgMIAJgHIgJgHQgOgPgBgVIAAg9QAAgUAOgPIAGgGIgGgFQgOgPgBgUIAAg8QAAgVAOgPIAGgFIgGgFQgPgPAAgUIAAgjIAAgjQAAgVAPgOIADgEIgEgDQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgEQgPgPAAgUIAAg6QAAgVAPgPIADgDIgDgCQgPgPgBgUQAAhKAPAAQAPgPAUAAQAVAAAPAPQAOAPAAAUQAAAVgOAPQAOgOAAAPQABAVgPAPIgEADIAEADQAPAPAAAVIAAA6QAAAUgPAPIgDADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgDACIAEAFQAPAOAAAVIAAAjIAAAjQAAAUgPAPIgFAFIAGAEQAPAPAAAUIAAA+QAAAUgOAPIgGAFIAGAFQAPAOAAAVIAAA+QAAAVgOAPIgKAHIAKAHQAOAPAAAVIAAASQAAAVgOAOQAAAHgfAJQgTAGgTgKIgCgBIgBAEQgKASgUAHIg3ARQgUAGgSgKIgFgCIgCAFQgKASgUAGIg4ARQgTAHgTgKIgEgDIgDAFQgJASgUAGIg4ARQgUAGgSgKIgFgDIgCAFQgKATgUAGIg4ASQgUAGgSgKIgFgDIgCAFQgKASgTAGIg4ARQgUAHgSgKIgGgDIgCAEQgKATgTAGIg4ASQgUAGgSgKIgGgDIgCAFQgKASgUAGIg4ARQgHADgIAAQgLAAgMgGg");
	this.shape_1.setTransform(0.0548,-143.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyrY7QgPgPAAgVQAAgUAPgPQgPACAAgoQAAgUAPgPIAIgHIgIgHQgPgOAAgVIAAg8QAAgVAOgPIAHgGIgHgGQgPgOAAgVIAAg8QAAgVAPgOIAGgGIgHgFQgPgPAAgUIAAg9QAAgUAPgPIAFgEIgGgFQgPgPAAgUIAAg9QAAgVAPgPQAIgIALgEQgLgDgIgIQgPgPAAgVIAAg6QAAgVAPgPIAEgDIgEgDQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgEQgPgPAAgUIAAg6QAAgVAPgPIADgDIgDgCQgPgPgBgUIAAg7QAAgUAPgPIADgDIgEgDQgOgPgBgUQAAhLANgFIgHgIQgNgQACgUQADgcAJgcIAAABIAGgRQAHgTATgJQAIgDAIgBQgDgHAAgIQgBgVAOgPQAXgYAggVQASgLAUAEIALADIAEgKQAHgTAUgJQAdgMAjgJQAUgFASAKQAGAEAFAFQABgHAEgHQAKgSAUgGIA9gRQATgGASAKIAJAGIAEgKQAKgSAUgGIA8gRQATgHATAKIAIAFIADgIQAKgSAUgGIA7gSQAUgGASAKIAHAFIADgJQAKgSAUgGIA7gRQATgGATAKIAGAEIADgIQAKgSAUgGIA7gRQATgGATAKIAGAEIAEgHQAKgTAUgGIA5gRQAUgGASAKIAHAEIADgIQAKgSAUgGIA4gRQATgGATAJIAHAFIADgHQAKgSATgHIA4gRQAUgGASAKQATAJAGAUQAGATgJATQgKASgUAHIg5ARQgTAGgTgKIgGgEIgDAHQgKASgUAGIg5ASQgUAGgSgKIgGgEIgDAHQgKASgUAHIg6ARQgUAGgSgKIgHgEIgDAIQgKASgUAGIg6ARQgUAGgSgKIgHgEIgDAHQgKATgUAGIg6ARQgUAGgSgKIgHgEIgEAIQgKASgTAGIg7ASQgUAGgSgKIgIgFIgEAIQgJASgUAGIg8ASQgUAGgSgKIgKgGIgEAKQgKASgUAGIg8ARQgUAGgSgKQgHgEgFgFQgCAHgEAHQgKASgUAFQgcAIgYAJQgTAIgTgIIgDgBIAAACQgEAUgSALQgVAOgPARQgOAOgTACQAHASgHARIgDAKIAAAAQgGATgCASQgCARgLALIAEAEQAOAPAAAUQAAAVgOAPQAOgIAAARQABAUgPAPIgEAEIAEADQAPAPAAAUIAAA5QABAVgPAPIgEADIAEADQAPAPAAAVIAAA6QAAAUgPAPIgDADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgDADIAEADQAOAPAAAVIAAA6QAAAVgOAPQgJAIgKADQAKAEAJAIQAOAPAAAVIAAA9QAAAUgOAPIgFAEIAGAFQAOAPAAAUIAAA9QAAAUgOAPIgGAFIAHAGQAOAOAAAVIAAA8QAAAVgOAOIgHAGIAHAFQAOAOABAVIAAA+QAAAVgOAOIgJAHIAJAHQAOAPAAAUQAABtgPAAQgPAOgUAAQgVAAgOgOgADtl1QgSgJgGgTQgHgUAKgTQAKgSATgGIA5gSQAUgGASAKIAFADIADgFQAJgSAUgHIA5gRQATgGATAKIAEACIACgEQAKgTAUgGIA4gRQATgGATAKIAFADIACgFQAJgSAUgGIA4gRQATgHATAKIAFADIACgFQAKgSAUgHIA4gRQAUgGASAKIAEADIACgFQAKgSAUgGIA3gRQAUgGASAJIAFADIACgFQAJgSAUgHIA4gRQATgGATAKIADACIAEgIQgHAGAAgKQAAgVAPgOIAIgHIgIgHQgPgOAAgVIgBg+QAAgUAOgPIAGgFIgGgGQgPgPAAgUIAAg9QAAgVAPgOIAFgFIgGgGQgPgOAAgVIAAgfIAAgmQAAgVAPgOIADgDIgEgFQgPgOAAgVIAAg6QAAgUAPgPIADgDIgDgDQgPgOgBgVIAAg6QAAgVAPgOIADgDIgEgEQgOgOgBgVQgBhRAQAAQAPgOAUAAQAVAAAPAOQAOAPAAAVQAAAUgOAPQAOgIAAARQABAVgPAPIgEADIAEAEQAPAOAAAVIAAA4QABAVgPAPIgDADIAEAEQAOAPAAAUIAAA6QAAAVgOAOIgEADIAFAFQAOAOAAAVIAAAmIAAAfQAAAVgOAOIgGAFIAHAGQAOAOAAAVIAAA9QAAAUgOAPIgGAFIAGAFQAOAOABAVIABA9QAAAVgOAPIgJAHIAJAIQAOAOAAAVQAABCgPgBQgPAPgUAAQgPAAgMgIIgCAFQgKASgTAHIg3ARQgUAGgTgKIgEgCIgDAFQgKASgTAGIg4ARQgUAHgSgKIgEgDIgDAFQgKASgTAGIg4ARQgUAGgSgKIgFgCIgCAEQgKATgTAGIg4ARQgUAHgSgKIgFgDIgCAFQgKASgUAGIg4ARQgUAGgSgKIgEgCIgCAEQgKASgUAGIg4ASQgUAGgSgJIgGgEIgCAFQgKASgUAGIg4ASQgHACgIAAQgLAAgMgGg");
	this.shape_2.setTransform(0.121,-144.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.5,0,122,0).s().p("AytY8QgPgPAAgVQAAgUAPgPQgOADAAgoQAAgVAPgOIAIgHIgIgHQgPgOAAgVIgBg9QAAgUAPgPIAGgGIgGgGQgPgOAAgVIAAg9QAAgUAPgPIAFgFIgGgFQgPgPAAgVIAAg7QAAgVAPgPIAEgEIgFgFQgPgPAAgUIAAhKIAAgFQAAgVAPgOIADgEIgDgDQgPgPAAgUIAAg7QAAgVAPgOIADgEIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgDIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgDgDQgPgOAAgVIAAgXIgCgJQgEgVAMgRQAFgHAGgEQgGgFgFgHQgMgQAEgVQADgRAGgRIAAgBQAGgTAJgRQAJgSAUgHQAHgDAIAAQgCgHAAgIQABgUAPgPQAZgWAfgTQASgKAUAEQAHACAGAEIAEgMQAJgTAUgHQAXgIAZgHIgBABIAQgFQAUgFASALIAJAHIAFgMQAKgSATgGIA9gRQAUgGASAKIAIAFIAEgJQAKgSAUgHIA7gRQAUgGASAJIAIAFIAEgIQAKgSAUgGIA7gRQATgGATAKIAGAEIAEgIQAKgSAUgGIA6gSQAUgFASAKIAHAEIADgIQAKgSATgGIA6gRQAUgGASAJIAHAFIADgIQAKgSAUgGIA6gRQAUgGASAJIAGAEIADgGQAJgTAUgGIA6gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA4gRQAUgGASAJQASAKAGAUQAGAUgKASQgKASgTAHIg4AQQgUAGgSgJIgHgEIgDAGQgKATgTAGIg5ASQgUAGgSgKIgHgEIgDAHQgKASgTAGIg6ASQgUAGgSgKIgHgEIgEAHQgKASgTAGIg6ASQgTAGgTgKIgGgEIgEAHQgKATgTAGIg7ARQgUAGgSgKIgHgEIgDAHQgKATgUAFIg7ASQgUAGgSgKIgIgFIgDAIQgKASgTAGIg8ATQgUAFgSgKIgJgFIgEAKQgLASgTAGIg9ARQgUAGgSgKQgGgEgEgEQgCAHgEAGQgKASgUAEIgOAEIgBAAQgVAFgTAHQgTAHgTgJIgEgCIAAADQgFAUgSALQgWAOgSAQQgOANgTAAQAFASgJASQgFALgEALIgFAWQgEATgQAMQAQALAEAUIABAGQAEANgEANQgCAHgDAGQAHgHAAALQAAAUgOAPIgEAEIAEADQAOAOAAAVIAAA6QAAAVgOAOIgEADIAFAEQAOAPAAAVIAAA5QAAAVgOAPIgEADIAFAEQAOAOAAAVIAAA6QAAAVgOAOIgEAEIAEAEQAPAOAAAVIAAA7QAAAUgPAPIgEADIAEAEQAPAOAAAVIAAAFIAABKQAAAUgPAPIgFAEIAGAFQAPAPAAAVIAAA7QAAAVgPAPIgFAFIAGAFQAPAPAAAUIAAA9QAAAVgPAOIgGAGIAGAFQAPAOAAAVIABA+QAAAVgPAOIgIAHIAIAHQAPAOAAAVQAABsgPAAQgPAOgVAAQgUAAgPgOgAD8lqQgSgKgGgUQgHgTAKgTQAKgSAUgGIA5gSQAUgGASAKIAFADIACgEQAJgTAUgGIA4gSQAUgGASAKIAFADIADgFQAJgSAUgGIA5gSQATgGATAKIAFADIACgEQAJgTAUgGIA4gSQAUgFASAKIAEACIADgFQAJgSAUgGIA4gSQATgGATAKIAFACIACgEQAKgSATgGIA4gRQATgGATAJIAEADIACgEQAKgTAUgGIA3gSQAQgFAPAFIAFgGQgOAFAAgTQAAgVAPgPIAHgGIgHgGQgPgOgBgVIgBg9QAAgVAPgPIAGgFIgGgGQgPgOAAgVIAAg8QAAgVAPgOIAEgEIgFgFQgPgOAAgVIAAgZIAAgvQAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg6QAAgUAPgPIADgCIgEgEQgPgOAAgVIgBg6QAAgVAPgOIADgDIgDgDQgPgPAAgUQgBhQAQAAQAOgOAVgBQAUABAPAOQAPAPAAAVQAAAUgPAPQAPgJAAAQQAAAVgOAPIgEAEIAEADQAOAOAAAVIABA5QAAAUgOAPIgEAEIAEADQAPAPAAAUIAAA6QAAAVgPAPIgDADIAEAEQAPAOAAAVIAAAvIAAAZQAAAVgPAOIgEAEIAFAFQAPAOAAAVIAAA8QAAAVgPAOIgGAFIAGAFQAPAPAAAUIABA9QABAVgPAOIgIAIIAIAGQAPAPAAAVQAABVgPgBQgPAPgVAAQgIAAgHgCQgJANgQAFIg4ASQgUAGgSgJIgFgDIgCAFQgKASgUAGIg4ARQgTAGgTgKIgEgCIgCAEQgKASgTAHIg4ARQgUAGgSgJIgFgDIgDAFQgKASgTAHIg3AQQgUAGgSgJIgFgDIgCAEQgKATgUAGIg4ARQgUAGgSgJIgGgEIgCAFQgKATgTAGIg4ARQgUAGgSgJIgFgDIgDAEQgJATgUAGIg5ARQgIADgHAAQgMAAgLgGg");
	this.shape_3.setTransform(0.2701,-146.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyrY9QgPgOAAgVQAAgVAPgOQgPACAAgoQAAgUAPgPIAIgGIgIgHQgPgOAAgVIAAg9QAAgUAOgPIAHgGIgHgGQgPgOAAgVIAAg9QAAgUAPgPIAGgFIgHgFQgPgPAAgVIAAg7QAAgVAPgPIAFgEIgGgGQgPgOAAgVIAAhDIAAgNQAAgUAPgPIAEgDIgEgEQgPgOAAgVIAAg6QAAgVAPgPIAEgDIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgCIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgDIgEgDQgPgPAAgVIAAgIQgDgNgBgNQgDgUANgQQAGgHAHgFQgGgEgEgHQgMgRAFgUIAFgTQAJgbAOgYQALgSAUgGQAIgCAHABQgBgHABgIQABgUAQgOQAagUAhgTQASgJAUAGQAGABAFADIAEgKQAJgSAUgHIAhgKIABgBIAdgIQAUgFASAKIALAHQABgGADgFQAKgSAUgGIA8gRQAUgGASAKIAIAFIAEgJQAKgSAUgHIA7gRQAUgGASAJIAIAFIAEgIQAKgSAUgGIA7gRQATgGATAKIAHAEIADgIQAKgTAUgGIA7gRQATgGATAKIAGAEIADgHQAKgSAUgGIA5gSQAUgGASAKIAHAEIADgHQAKgTAUgFIA6gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA5gRQAUgGASAKIAGADIACgGQAKgSAUgGIA5gTQAUgGASAKQASAJAHAUQAGAUgKASQgKATgTAGIg5ARQgUAHgSgKIgHgDIgDAGQgKASgTAGIg7ASQgTAGgSgKIgGgEIgDAHQgKASgTAGIg6ASQgUAFgSgKIgHgEIgDAHQgKATgUAGIg5ARQgUAGgSgJIgHgFIgDAIQgKASgUAGIg6ASQgUAFgSgKIgIgEIgDAIQgKATgUAFIg7ASQgUAGgSgKIgIgFIgDAIQgKASgTAGIg8ATQgUAFgSgKIgJgFIgEAKQgKASgUAGIg8ARQgUAGgSgKIgKgIIgFALQgKASgUAFIgfAJIgBAAIgbAJQgUAHgSgKIgEgBIAAACQgGATgSAKQgYANgSAQQgQANgUgCQAEATgKASQgIAOgGAQIAAACIgCAHQgFAVgRALIgBAAQAQANACATIADARQACAHAAAHIAAAPQAAAVgOAPIgEADIAEADQAPAPAAAVIAAA5QAAAVgPAPIgDACIAEAEQAPAPAAAVIAAA5QAAAVgPAPIgDADIAEAEQAPAOAAAVIAAA6QAAAVgPAOIgDAEIAEADQAOAPAAAVIAAA6QAAAVgOAOIgEAEIAEADQAOAPAAAUIAAANIAABDQAAAVgOAOIgGAFIAHAFQAOAPAAAVIAAA7QAAAVgOAPIgGAFIAHAFQAOAPAAAUIAAA9QAAAVgOAOIgHAGIAHAFQAOAOABAVIAAA+QAAAVgOAOIgIAHIAIAGQAOAPAAAUQAABtgPgBQgPAPgUAAQgVAAgOgPgAEKleQgSgKgGgTQgHgUAKgTQAKgSATgGIA5gSQAUgGASAKIAFADIADgEQAJgTAUgGIA4gSQAUgGASAKIAFADIACgFQAKgSAUgGIA4gSQAUgGASAKIAFACIACgFQAKgSAUgGIA4gRQATgFATAKIAEACIACgFQAKgSAUgGIA4gRQAUgGASAJIAEADIACgFQAKgSAUgGIA3gRQAUgGASAKIAEACIADgEQAJgTAUgGIA4gSQALgDALACIACgCQgPADAAggQAAgVAOgPIAIgGIgIgGQgPgPAAgVIAAg8QAAgUAOgPIAGgFIgGgGQgPgOAAgVIAAg8QAAgVAPgPIAGgFIgHgGQgPgOAAgVIAAgPIAAg2QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg5QAAgVAPgPIAEgDIgEgEQgPgOgBgVIAAg6QAAgVAPgOIADgDIgEgDQgOgPgBgVQgBhRAQABQAPgPAUAAQAVAAAPAPQAOAOAAAVQAAAVgOAOQAOgIAAARQABAVgPAPIgEAEIAEADQAPAOAAAVIAAA5QABAUgPAPIgEAEIAFAEQAOAPAAAVIAAA5QAAAVgOAPIgEADIAFAEQAOAOAAAVIAAA2IAAAPQAAAVgOAOIgGAFIAHAGQAOAPAAAVIAAA8QAAAVgOAOIgGAFIAGAFQAOAOABAVIAAA9QAAAVgOAPIgIAGIAIAGQAPAOAAAVQABBlgQAAQgPAOgUAAIgIAAQgJAKgNAEIg3ARQgUAGgSgJIgFgDIgCAFQgKATgTAGIg4ARQgUAGgSgKIgEgDIgDAFQgKASgTAHIg4AQQgUAGgSgJIgFgDIgCAFQgKASgUAGIg3ARQgUAGgSgKIgFgDIgCAFQgKATgTAGIg5ARQgUAGgSgJIgFgDIgCAEQgKATgTAGIg4ARQgUAGgSgJIgGgEIgCAGQgKASgUAGIg4ARQgHADgIAAQgLAAgMgGg");
	this.shape_4.setTransform(0.1205,-147.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyqY+QgPgOAAgVQAAgUAPgPQgPACAAgnQAAgVAOgOIAJgHIgIgHQgPgPAAgUIgBg9QAAgVAPgPIAGgFIgGgGQgPgPAAgUIAAg9QAAgUAPgPIAFgFIgGgGQgPgOAAgVIAAg8QAAgUAPgPIAEgEIgFgGQgPgOAAgVIAAg7IAAgUQAAgVAPgOIADgEIgDgEQgPgOAAgVIAAg6QAAgUAPgPIADgDIgEgEQgPgPAAgUIAAg6QAAgVAPgOIADgEIgEgDQgOgPgBgUIAAg6QABgUAOgPIADgDIgEgEQgOgPgBgUIAAg6QABgVAOgOIADgDIgDgDQgOgNgBgUQgFgTgBgVQgCgVANgPQAGgHAHgEQgIgIgEgMQgGgSAIgSQALgiATgdQAMgRAUgEQAIgBAIAAQgBgHABgIQADgUARgMQAagTAhgQQATgKATAHIALAFIAEgLQALgSATgGIAUgFIAsgMQATgGASAKIAKAHIAFgMQAKgSAUgFIA8gSQAUgGASAKIAIAGIAEgJQAKgSAUgGIA7gSQAUgGASALIAIAEIADgJQAKgSAUgGIA7gRQAUgGASAKIAHAEIADgHQAKgTAUgGIA7gRQATgGATAKIAGAEIADgIQAKgSAUgGIA5gRQAUgGASAKIAHAEIADgIQAKgSAUgGIA6gRQAUgGASAKIAGAEIADgHQAJgSAUgHIA5gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA9gSQATgHATAKQAPAIAHAQQgDgQAIgQQAKgSAUgGIA5gSQAUgGASAKIAFADIACgFQAKgSATgGIA5gSQATgGATAJIAFAEIACgFQAJgSAUgHIA4gRQAUgGASAKIAFACIACgFQAKgSAUgGIA4gRQATgGATAKIAEADIACgFQAKgSAUgGIA4gSQAUgGASAKIAEADIADgFQAJgSAUgHIA4gRQAUgGASAKIAEACIACgEQAKgTATgGIAzgQIAAgrQABgVAOgPIAHgGIgHgGQgPgPAAgUIgBg8QAAgVAPgPIAGgFIgGgGQgPgOAAgVIAAg8QAAgUAPgPQAHgIAJgDQgJgEgIgIQgPgPAAgUIAAg6QAAgVAPgOIADgEIgEgDQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgDQgPgPAAgVIgBg7QABgUAOgPIADgDIgDgDQgPgPAAgUQgBhTAQABQAOgPAVAAQAVAAAOAPQAPAOAAAVQAAAUgPAPQAPgHAAASQAAAUgOAPIgEAEIAEADQAOAPAAAUIABA6QAAAVgOAPIgEADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgDACIAEAFQAPAOAAAVIAAA6QAAAUgPAPQgHAIgKADQAKAEAIAIQAPAPAAAUIAAA8QAAAVgPAOIgGAGIAGAEQAPAPAAAUIABA+QAAAUgPAPIgHAGIAIAGQAOAPAAAVIAABBQAAAVgOAOQgKALgNADQgKARgTAGIg2ARQgUAHgTgKIgEgCIgCAEQgKASgTAHIg4ARQgUAGgSgKIgFgDIgDAGQgJASgUAGIg4ARQgUAGgSgJIgFgDIgCAFQgKASgUAGIg3ARQgUAGgSgKIgFgDIgCAFQgKASgTAGIg4ASQgUAGgSgJIgFgEIgCAFQgKASgUAHIg4ARQgTAGgTgKIgFgDIgDAGQgJASgUAGIg5ARQgUAHgSgKQgPgIgHgQQADAQgIAPQgKATgUAGIg9ATQgUAGgSgKIgGgEIgDAHQgKASgUAGIg5ASQgUAGgRgKIgHgEIgDAHQgJASgUAGIg6ASQgUAGgSgKIgHgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgGgEIgDAIQgKASgUAGIg6ARQgUAGgSgKIgHgEIgEAHQgKATgTAGIg7ARQgUAGgSgKIgIgFIgEAJQgKASgUAGIg7ASQgUAGgSgKIgIgGIgEAJQgKASgUAGIg9ASQgUAFgSgJIgJgHIgFALQgKARgUAGIguAMIgSAGQgTAFgTgKIgBgBIgBACQgHAUgSAJQgZAMgUAPQgQAMgUgCQADATgLAQQgMATgHAVIgDAHIgBACQgHAOgNAIQAOANABASQABAPAEAOQACAHAAAGIAAAEQAAAVgPAOIgCADIADADQAOAOAAAVIAAA6QAAAUgOAPIgEADIAFAEQAOAPAAAUIAAA6QAAAUgOAPIgEADIAEAEQAPAOAAAVIAAA6QAAAUgPAPIgDADIAEAEQAPAPAAAUIAAA6QAAAVgPAOIgEAEIAEAEQAPAOAAAVIAAAUIAAA7QAAAVgPAOIgFAFIAGAFQAPAPAAAUIAAA8QAAAVgPAOIgFAGIAGAFQAPAPAAAUIAAA9QAAAUgPAPIgGAFIAGAGQAPAOAAAVIABA+QAAAUgPAPIgIAHIAIAGQAPAPAAAUQABBtgQgBQgOAPgVAAQgVAAgOgPg");
	this.shape_5.setTransform(0.0534,-149.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyqZAQgPgPAAgVQAAgUAPgPQgPACAAgnQAAgVAOgOIAJgHIgIgHQgPgPAAgUIAAg8QgBgVAPgPIAGgGIgGgFQgPgPAAgUIAAg9QAAgUAPgPIAFgEIgGgGQgPgPAAgUIAAg8QAAgVAPgOIAEgFIgFgEQgPgPAAgVIAAg2IAAgbQAAgVAPgOIADgEIgDgDQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgEQgPgPAAgUIAAg7QAAgUAPgPIADgDIgEgDQgOgPgBgVIAAg6QABgUAOgPIADgDIgDgDQgPgPgBgUIAAg7QAAgTALgNQgGgIgDgLQgJggAAgiQAAgUAPgPQAGgHAIgDQgFgGgEgIQgIgTAHgTQAOgjAXgdQANgRAUgCQAIgBAIABQgBgHACgHQADgUARgMQAbgTAigNQATgJATAIIAKAFQACgGAEgGQAKgSAUgFIAEgBIAAAAIA7gQQAUgGASAKIAJAGIAFgKQAKgSAUgGIA7gRQAUgGASAKIAIAFIAEgIQAKgTAUgGIA7gRQAUgGATAKIAHAFIAEgJQAJgSAUgGIA7gSQAUgGASAKIAHAFIADgIQAKgSAUgGIA6gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA7gSQAUgGASAKIAGAEIADgHQAKgSAUgGIA5gRQAUgHASAKIAHAEIADgGQAJgTATgGIA7gSQATgGASAKIAGADIADgHQAKgSAUgGIBEgUIgCAAIAMgEQAUgGASAJIAGAEIADgFQAKgSATgHIA6gRQATgGASAKIAGADIACgFQAJgSAUgHIA4gRQAUgGASAJIAFAEIACgFQAKgSAUgGIA4gSQATgGATAJIAFADIACgEQAJgTAUgGIA4gRQAUgGASAKIAFADIACgGQAKgSAUgGIA4gRQAUgGASAKIAFACIACgEQAJgTAUgGIA4gSQAUgGASAKIAFADIABgEQAKgTAUgGIAmgNIAAg5QgBgUAPgPIAHgGIgIgGQgOgPAAgVIgBg8QAAgVAOgPIAGgFIgGgFQgOgPAAgUIAAg9QAAgUAOgPQAHgHAJgEQgJgDgIgIQgOgPgBgUIAAg6QABgVAOgOIADgEIgEgDQgOgPgBgVIAAg6QABgUAOgPIADgDIgDgDQgPgPgBgVIAAg7QAAgUAPgPIACgDIgCgCQgPgPgBgVQAAhWAPAAQAPgOAVAAQAUAAAPAOQAOAPAAAVQAAAUgOAPQAOgGAAAUQABAVgPAPIgDADIADADQAPAPAAAUIAAA6QABAVgPAPIgEADIAFAEQAOAPAAAUIAAA6QAAAVgOAPIgEACIAFAFQAOAOABAVIAAA6QgBAUgOAPQgHAHgJAEQAJADAIAIQAOAPABAUIAAA9QgBAUgOAPIgGAFIAGAEQAPAPAAAVIABA9QgBAVgOAPIgHAFIAHAGQAPAPABAUIAABBQAAAUgPAPIgDADQgBAKgFAJQgJATgUAHIg3ASQgTAGgSgJIgGgDIgCAEQgJATgUAGIg4ASQgUAGgSgKIgFgDIgDAFQgJASgUAGIg4ARQgUAHgSgKIgFgDIgCAFQgKATgUAGIg3ARQgUAGgSgKIgFgDIgCAFQgKASgUAGIg4ASQgTAGgSgJIgGgEIgCAFQgKASgTAHIg4ARQgUAGgSgKIgFgDIgDAFQgKASgUAGIg4ASQgUAGgSgJIgGgEIgBAEQgKATgTAGIgMAEIgCAAIhEAVQgUAGgSgKIgFgDIgDAGQgKASgUAHIg5ASQgUAGgSgKIgGgEIgDAHQgKASgTAGIg6ASQgUAGgSgKIgHgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgGgEIgEAHQgJASgUAGIg6ASQgUAGgSgKIgHgFIgEAIQgKASgTAGIg7ASQgUAGgSgKIgIgFIgEAJQgKASgTAGIg8ARQgUAGgSgKIgIgFIgEAJQgJASgUAGIg9AQQgUAGgSgKIgJgGIgEAKQgKASgUAGIg+ARIAAAAIgEABQgUAFgSgLIgCgBIgCAEQgHAUgTAIQgZALgUANQgSAMgUgEQACAUgMAQQgOASgIAWQgIASgSAJQANAOAAATQAAAUAFAUQAGATgLASIgEAIQALANAAATIAAA5QABAVgPAPIgEADIAFAEQAOAPAAAUIAAA6QAAAVgOAPIgEACIAEAEQAPAPAAAUIAAA7QAAAUgPAPIgDADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgEADIAEAEQAPAOAAAVIAAAbIAAA2QAAAVgPAPIgEADIAFAGQAPAOAAAVIAAA8QAAAUgPAPIgFAFIAGAFQAPAPAAAUIAAA9QAAAUgPAPIgGAFIAGAFQAPAOABAVIAAA+QAAAUgPAPIgIAHIAIAGQAPAPAAAVQABBsgQAAQgOAOgVAAQgVAAgOgOg");
	this.shape_6.setTransform(0.05,-150.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.3,0,122.2,0).s().p("AyqZBQgPgPAAgUQAAgVAPgOQgPACAAgnQAAgVAOgOIAJgHIgIgHQgPgPAAgUIgBg9QAAgVAPgOIAGgGIgGgGQgPgPAAgUIAAg9QAAgUAPgPIAFgEIgGgGQgPgPAAgUIAAg8QAAgVAPgPIAEgEIgFgFQgPgOAAgVIAAguIAAggQAAgUAPgPIADgDIgDgEQgPgPAAgUIAAg6QAAgVAPgOIADgDIgEgFQgPgOAAgVIAAg6QAAgVAPgOIADgEIgEgEQgPgOAAgVIAAg6QAAgUAPgPIADgDIgDgDQgPgOgBgVIAAg6QAAgRAJgMQgHgJgDgMQgIgkADgmQACgVAQgNQAGgGAIgDQgFgGgDgIQgHgUAJgTQAPghAZgdQANgPAVgBQAIgBAIACQgBgHACgIQAFgUASgKQAcgRAhgNQATgIATAIQAGADAFACIAFgJQAKgSAUgFIA/gSQAUgGASALIAKAGIAEgLQAKgSAUgGIA8gRQATgGATAKIAIAFIAEgIQAKgTAUgGIA7gRQATgGATAKIAHAEIADgIQAKgSAUgGIA7gSQATgGATAKIAGAFIAEgIQAKgSAUgGIA5gSQAUgGASAKIAHAEIADgHQAKgSAUgGIA6gSQAUgGASAKIAHAEIADgHQAKgSAUgGIA5gRQATgHATAKIAGAEIADgHQAJgSAUgGIA5gSQAUgGASAKIAGAEIADgHQAKgSATgGIA2gQIAagJQAUgGASAKIAGADIACgEQAJgTAUgGIA4gRQAUgHASAKIAFADIADgEQAJgTAUgGIA5gSQATgGATAKIAEADIADgFQAJgSAUgGIA5gSQATgGATAJIAEADIADgEQAJgTAUgGIA5gRQATgGATAKIAEADIADgGQAKgSATgGIA4gRQAUgGASAKIAEACIADgEQAJgTAUgGIA4gSQATgGATAKIAEADIADgFQAJgTAUgGIAZgIIgBgKIAAg/QAAgUAPgPIAGgGIgHgGQgPgOAAgVIgBg8QAAgVAPgOIAGgGIgGgFQgPgPAAgUIgBg7QAAgVAPgPQAHgIAKgDQgKgEgIgIQgPgPAAgUIAAg6QAAgVAPgPIADgDIgEgDQgPgPAAgVIAAg6QAAgUAPgPIADgDIgDgDQgPgPgBgUIAAg7QAAgVAPgPIADgDIgEgCQgOgPgBgVQAAhXAPAAQAPgPAUAAQAVAAAPAPQAOAPAAAUQAAAVgOAPQAOgGAAAVQABAVgPAPIgEADIAEADQAPAPAAAVIAAA5QABAVgPAPIgEADIAFAEQAOAPAAAUIAAA6QAAAVgOAPIgEACIAFAEQAOAPAAAVIAAA6QAAAUgOAPQgIAIgJADQAJAEAIAHQAPAPAAAUIABA9QAAAUgPAPIgFAFIAFAFQAPAOAAAVIABA9QAAAVgPAOIgGAGIAHAGQAPAPAAAUIAAA/QAAAQgJANIACAFQAGAUgKASQgJASgUAGIg2ARQgUAHgSgKIgFgCIgCAEQgKATgTAGIg4ASQgUAGgSgKIgFgDIgCAFQgKASgUAGIg4ARQgTAHgTgKIgEgDIgDAFQgKATgUAGIg3ARQgUAGgSgKIgFgDIgCAFQgKASgUAGIg4ASQgUAGgSgJIgFgDIgCAEQgKATgUAGIg4ASQgUAGgSgKIgGgDIgCAEQgKATgTAGIg4ARQgUAHgSgKIgGgDIgCAFQgKASgTAGIgaAIIg3AQQgTAHgTgKIgFgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgGgEIgCAHQgJASgUAGIg6ASQgUAGgSgKIgGgEIgEAHQgKASgTAGIg7ASQgUAGgSgKIgGgEIgDAHQgKASgUAGIg6ASQgUAGgSgKIgHgFIgDAIQgKASgUAGIg6ASQgUAGgSgKIgIgFIgDAIQgKATgUAGIg7ARQgUAGgSgKIgIgFIgEAJQgKASgUAFIg8ARQgUAGgSgKIgJgGIgFAKQgKASgUAGIhBASQgUAGgSgLIgFgDIgCAFQgIATgTAIQgaAKgVANQgSALgUgFIgBAAQABAUgNAPQgPASgKAUQgJATgTAHQANAQgBAUQgCAXAFAVQAEAUgLASIgBACQALAOAAASIAAA4QABAVgPAPIgEADIAEAEQAPAPAAAUIAAA6QAAAVgPAOIgDADIAEAFQAPAOAAAVIAAA6QAAAVgPAOIgDADIAEAFQAPAOAAAVIAAA6QAAAUgPAPIgEAEIAEADQAPAPAAAUIAAAgIAAAuQAAAVgPAOIgEAFIAFAEQAPAPAAAVIAAA8QAAAUgPAPIgFAEIAGAGQAPAPAAAUIAAA9QAAAUgPAPIgGAFIAGAGQAPAOAAAVIABA+QAAAUgPAPIgIAHIAIAGQAPAPAAAVQABBrgQAAQgPAPgUAAQgVAAgOgPg");
	this.shape_7.setTransform(0.0692,-152.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.2,0,122.3,0).s().p("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");
	this.shape_8.setTransform(0.0436,-153.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.2,0,122.3,0).s().p("AyqZEQgPgPAAgUQAAgVAPgPQgOADgBgoQAAgUAPgPIAIgHIgIgHQgPgOAAgVIAAg9QAAgUAOgPIAGgGIgGgGQgPgOAAgVIAAg8QAAgVAPgPIAFgFIgGgFQgPgPAAgUIAAg9QAAgVAPgOIAGgFIgHgGQgPgOAAgVIAAgdIAAgvQAAgUAPgPIAEgDIgEgEQgPgOAAgVIAAg6QAAgVAPgOIAEgEIgFgEQgPgOAAgVIAAg7QAAgUAPgPIADgDIgEgEQgPgOAAgVIAAg6QAAgUAPgPIADgDIgEgDQgPgPAAgUIAAg6QAAgOAIgMQgNgNgBgSQgDgjAIgmQAFgUARgMQAHgEAIgCQgFgHgCgJQgEgUAMgRQATgeAdgaQAPgOAVABQAHABAGACQABgGACgHQAGgTATgJQAcgPAhgMQAUgHASAJQAHAEAGAFIAEgLQAKgSAUgFIA+gSQAUgFASAKIAJAGIAEgKQAKgTAUgFIA7gSQAUgGASAJIAJAGIADgJQAKgSAUgGIA7gSQAUgFASAKIAHAEIAEgIQAKgSAUgHIA6gRQAUgGASAKIAHAEIADgHQAKgTAUgFIA5gSQAUgGASAKIAHAEIADgHQAKgSAUgHIA5gRQAUgGASAKIAHAEIADgHQAKgTAUgFIA6gSQAUgGARAKIAHAEIADgGQAJgTAUgGIA6gSQAUgGASAKIAFACIACgEQAKgTAUgGIAdgJIAAAAIA0gQQAUgGASAKIAGADIACgFQAJgSAUgGIA4gSQAUgGASAKIAFADIADgFQAJgSAUgGIA5gSQATgGATAKIAEADIADgGQAKgSAUgGIA2gRQAUgGASAKIAFADIADgFQAJgTAUgGIA4gRQATgGATAJIAFADIACgFQAKgSAUgGIA4gRQAUgGASAJIAEADIACgFQAKgSAUgGIA3gSQATgGATAKIAEACIACgEQAJgSAUgHQAOgEABAFIADgDIgDgDQgPgPAAgVIAAg+QAAgUAPgPIAFgFIgGgGQgPgOAAgVIgBg8QAAgUAPgPIAGgFIgGgGQgPgOAAgVIAAg8QAAgVAPgPQAHgHAJgEQgJgEgIgHQgPgPAAgUIgBg7QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg5QAAgVAPgPIADgDIgDgDQgPgPgBgUIAAg7QAAgVAPgOIADgEIgEgDQgOgOgBgVQAAhbAPAAQAPgOAUgBQAVABAPAOQAOAPAAAUQAAAVgOAPQAOgFAAAYQABAVgPAOIgEAEIAEAEQAPAOAAAVIAAA5QABAVgPAPIgEADIAFAEQAOAPAAAVIAAA5QAAAVgOAPIgEADIAFAEQAOAOAAAVIABA5QAAAVgOAPQgIAIgKADQAKAEAIAIQAPAPAAAVIAAA8QAAAVgPAOIgFAFIAFAFQAPAOAAAVIABA9QAAAVgPAOIgGAGIAHAFQAPAPAAAUIAAA+QAAAVgPAPIgDADIADADQAPAPAAAVQAAAUgPAPQABAGg4ASQgUAGgSgKIgEgCIgCAEQgJASgUAHIg4ARQgUAGgSgJIgEgDIgDAFQgJASgUAGIg4ARQgUAGgSgJIgFgDIgCAFQgKASgTAGIg4ASQgUAGgSgKIgFgCIgCAEQgKASgUAHIg4ARQgUAGgSgKIgEgDIgCAFQgKATgUAGIg4ARQgUAGgSgJIgGgDIgCAEQgKATgTAGIg4ARQgUAGgSgJIgGgEIgCAFQgKATgTAGIg1AQIAAAAIgdAJQgUAGgSgKIgFgDIgCAFQgKASgUAGIg5ASQgUAGgSgJIgHgFIgEAIQgJASgUAGIg5ARQgUAGgSgJIgHgFIgDAHQgKATgUAGIg6ASQgUAFgSgKIgGgDIgDAHQgKASgUAGIg6ARQgUAGgSgKIgGgDIgEAHQgKASgTAGIg7ARQgUAGgSgJIgHgFIgEAIQgKATgTAGIg7AQQgUAGgSgJIgIgFIgEAHQgKASgUAGIg8ASQgUAGgSgJIgJgHIgEALQgLASgTAGIg/ARQgUAGgSgLIgJgGIgDAIQgJATgUAHQgaAJgXAMQgSAJgUgHIgBAAQgBAVgQAOQgSAQgNATQgLARgSAEQAKARgEAUQgFAXACAWQABARgIANQANAOAAAUIAAA6QAAAUgOAPIgDADIAEADQAOAPAAAUIAAA6QAAAVgOAOIgEADIAFAEQAOAPAAAUIAAA7QAAAVgOAOIgEADIAFAFQAOAOAAAVIAAA6QAAAVgOAOIgEAEIAEADQAOAPAAAUIAAAvIAAAdQAAAVgOAOIgGAFIAHAGQAOAOAAAVIAAA9QAAAUgOAPIgGAFIAGAFQAPAPAAAVIAAA8QAAAVgPAOIgGAGIAHAFQAOAOABAVIAAA+QAAAVgOAOIgJAHIAIAHQAPAOAAAVQABBsgPAAQgPAOgVAAQgUAAgPgOg");
	this.shape_9.setTransform(0.0198,-155.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#06FFA6","#FFFFFF"],[0,0.604],-122.2,0,122.3,0).s().p("AyqZFQgPgOAAgVQAAgVAPgOQgPACAAgnQAAgVAPgPIAIgGIgIgHQgPgOAAgVIAAg9QgBgVAPgOIAGgGIgHgGQgOgOAAgVIAAg9QAAgUAOgPIAGgFIgGgFQgPgOAAgVIAAg8QAAgVAPgOIAFgFIgGgFQgPgPAAgVIAAgYIAAg1QAAgVAPgOIAEgEIgFgEQgOgOAAgVIAAg6QAAgVAOgOIAEgEIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgDQgPgPAAgVIAAg6QAAgOAHgLQgNgNAAgUQgBgjAKgmQAGgUASgLQAHgEAIgBQgEgHgBgJQgDgUANgRQAVgcAdgYQARgNAUACQAHABAGACQAAgGADgGQAHgTATgJQAcgNAigLQATgGATAKQAHADAFAGQACgHAEgHQAKgSAUgFIA8gRQAUgFASAKIAJAGIAEgKQAKgSAUgGIA7gSQAUgGASAKIAIAFIAEgIQAKgTAUgGIA7gRQAUgGASAKIAHAFIAEgJQAKgSAUgGIA6gSQAUgGASAKIAHAEIADgHQAKgSAUgGIA6gRQATgGATAJIAGAEIADgHQAKgSAUgGIA6gRQATgGATAJIAGAEIADgGQAJgTAUgGIA7gSQASgGATAKIAGAEIADgHQAKgSAUgGIA4gSQAUgGASAKQATAJAGAUQAGAUgKASQgKASgTAHIg5ARQgUAGgSgKIgHgEIgDAHQgKATgTAGIg5ASQgUAGgSgKIgHgEIgDAHQgKASgTAGIg7ASQgTAGgTgKIgGgEIgDAHQgKASgTAGIg7ASQgTAGgTgKIgGgEIgDAHQgKASgUAGIg7ASQgTAGgTgKIgHgFIgEAJQgKASgUAGIg7AQQgTAGgTgKIgIgFIgDAIQgKATgUAGIg7ASQgUAGgSgKIgKgHIgEAKQgKATgUAFIg9ASQgUAGgSgLQgHgDgFgFQgBAGgDAGQgKASgTAHQgbAIgXALQgTAJgUgIIgBAAIAAAAQgCAVgQANQgUAPgNATQgMAPgTAEQAJARgFATQgHAYABAVQAAAPgHAMQAOAPgBAVIAAA2QAAAVgOAPIgEADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgDADIAEAEQAPAOAAAVIAAA6QAAAVgPAOIgDAEIAEAEQAOAOABAVIAAA6QgBAVgOAOIgEAEIAEAEQAPAOAAAVIAAA1IAAAYQAAAVgPAPIgFAEIAGAGQAPAOAAAVIAAA8QAAAVgPAOIgFAFIAGAFQAOAPABAUIAAA9QgBAVgOAOIgGAFIAGAGQAPAOABAVIAAA+QAAAVgPAOIgHAHIAHAGQAPAOAAAVQABBsgQAAQgOAPgVAAQgVAAgOgPgADXjyQgSgKgHgTQgGgUAKgTQAJgSAUgGIA5gSQAUgGASAKIAFADIACgFQAKgSAUgGIA4gSQAUgGASAKIAFADIACgFQAKgSAUgGIA4gSQATgGATAKIAFADIACgFQAJgSAUgGIA4gSQATgGATAKIAEACIACgEQAKgTAUgGIA4gRQAUgGASAKIAFADIACgFQAKgSAUgGIA4gRQATgGATAJIAEADIACgFQAKgSAUgGIA3gSQATgGATAJIAEADIACgFQAJgSAUgGQAFgCgDAHQAIgIAIgDQgIgEgIgHQgOgPAAgVIAAg+QAAgUAOgPIAGgFIgHgGQgOgOAAgVIgBg8QAAgVAOgOIAHgGIgGgFQgPgOAAgVIgBg8QgBgVAPgOQAHgIAKgEQgJgEgHgHQgPgOAAgVIgBg7QAAgUAPgPIADgDIgEgEQgPgOAAgVIAAg6QAAgVAPgOIADgDIgEgEQgPgPAAgVIAAg6QAAgUAPgPIADgDIgEgDQgPgPAAgVQgBhOAGgBQAKgSATgHQAUgHASAKQATAJAHAUQAGATgJATQAFAAAAAhQAAAVgOAPIgEADIAEAEQAPAPAAAUIAAA6QAAAVgPAPIgDADIAEAEQAPAOAAAVIAAA6QAAAVgPAOIgDADIAEAEQAPAPAAAUIABA6QAAAUgPAPQgHAIgKAEQAJADAHAIQAPAOABAVIABA8QAAAUgPAPIgGAGIAGAFQAPAOAAAVIABA9QgBAVgOAOIgGAFIAHAGQAOAPABAUIAAA+QgBAVgOAPQgHAHgJAEQAJADAHAIQAOAOABAVQgBAVgOAOQABAGgsAOQgTAGgTgJIgEgCIgBADQgKATgTAGIg5ASQgTAGgTgJIgEgDIgDAFQgKASgTAGIg4ARQgUAGgSgKIgFgCIgCAFQgKASgUAGIg4ARQgTAGgTgKIgEgCIgCAEQgKASgTAHIg4ARQgUAGgSgJIgFgDIgCAEQgKASgUAHIg3ARQgUAGgSgJIgGgDIgCAEQgJASgUAHIg5ARQgTAGgTgJIgFgEIgCAFQgKATgUAGIg4ARQgIACgHAAQgMAAgLgFg");
	this.shape_10.setTransform(0.0475,-156.9855);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.2,-318.9,244.60000000000002,338);


(lib.aliran4_r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,1.1,177.4,1.1).s().p("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");
	this.shape.setTransform(0.2164,-64.7571);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.9,0.7,177.3,0.7).s().p("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");
	this.shape_1.setTransform(0.3262,-63.8229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.9,0.6,177.4,0.6).s().p("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");
	this.shape_2.setTransform(0.3037,-63.3246);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,0.2,177.5,0.2).s().p("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");
	this.shape_3.setTransform(0.2204,-62.3502);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,0.1,177.6,0.1).s().p("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");
	this.shape_4.setTransform(0.1476,-61.7551);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.7,0.2,177.7,0.2).s().p("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");
	this.shape_5.setTransform(0.1306,-61.3744);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.7,0.1,177.7,0.1).s().p("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");
	this.shape_6.setTransform(0.126,-60.8247);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.7,0.1,177.8,0.1).s().p("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");
	this.shape_7.setTransform(0.1494,-60.3232);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.7,0.2,177.8,0.2).s().p("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");
	this.shape_8.setTransform(0.1496,-59.9236);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,0,177.8,0).s().p("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");
	this.shape_9.setTransform(0.176,-59.2486);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,0,177.8,0).s().p("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");
	this.shape_10.setTransform(0.1762,-58.7842);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.8,0,177.8,0).s().p("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");
	this.shape_11.setTransform(0.2054,-58.2704);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CBE500","#06FFD7"],[0,1],-178,0,177.6,0).s().p("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");
	this.shape_12.setTransform(0.3735,-57.8082);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#CBE500","#06FFD7"],[0,1],-178,0,177.6,0).s().p("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");
	this.shape_13.setTransform(0.466,-57.3046);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#CBE500","#06FFD7"],[0,1],-177.9,-0.4,177.8,-0.4).s().p("AauLRQgMgLgBgRIgCg8QAAgQALgMQALgNARAAQAQgBAMAMQANALAAARIACA8QABAQgMAMQgLAMgRABIgBAAQgQAAgLgLgAapIxQgMgLgBgRIgCg8QAAgQALgMQALgNARAAQAQgBAMAMQANALAAARIACA8QABAQgMAMQgLAMgRABIgBAAQgQAAgLgLgAKcGhQgQgCgKgNQgLgNACgQQACgQANgLQANgKAQACQAcADAYgDQAQgCANALQANAKACARQACAQgLANQgKANgRACQgOABgQAAQgTAAgUgCgAakGSQgMgLgBgRIgCg7QAAgQALgMQALgNARAAQAQgBAMAMQANALAAAQIACA8QABAQgMAMQgLAMgRABIgBAAQgQAAgLgLgAMjGHQgPgIgFgPQgEgQAIgPQAIgOAPgFIA4gQQAQgFAPAIQAOAIAFAQQAEAQgIAPQgIAOgQAFIg3AQQgGABgFAAQgKAAgJgFgAIxGJQghgLgbgMQgPgIgFgPQgGgQAHgPQAHgPAQgFQAPgGAPAHQAXALAcAJQAQAFAHAPQAIAOgFAQQgFAQgPAHQgJAFgJAAQgGAAgHgCgAO3FcQgOgIgFgQQgEgQAIgOQAIgPAQgEIA4gQQAPgFAPAIQAPAIAEAQQAFAQgIAPQgIAOgQAFIg4AQQgGABgGAAQgJAAgKgFgAGHFJIg7gWQgPgGgHgPQgHgPAGgQQAGgPAPgHQAPgHAPAGIA7AWQAQAGAHAPQAHAPgGAPQgGAQgPAHQgIAEgJAAQgHAAgHgDgARNEyQgOgIgFgQQgFgQAIgPQAIgOAQgFIA4gRQAQgEAOAIQAPAIAEAQQAFAPgIAPQgIAOgQAFIg4ARQgGABgFAAQgKAAgJgEgADrEPIg5gVQgPgGgHgPQgHgPAGgPQAFgQAPgHQAPgHAQAGIA5AVQAQAGAGAPQAHAPgFAPQgGAQgPAHQgJADgIAAQgHAAgHgCgATjEFQgOgIgFgQQgFgQAIgOQAIgPAQgFIA6gRQAQgEAOAIQAPAIAEAQQAFAPgIAPQgIAOgQAFIg6ARQgFACgGAAQgKAAgJgFgAafD1QgLgLgBgRIAAgxIAAgBQgDgRAKgNQAKgNAQgDQARgCANAKQANAKADAQIABANIAAAwQAAAQgLAMQgMAMgQAAIgBAAQgQAAgMgLgAV9DXQgOgIgFgPQgFgQAIgPQAIgOAQgFIA6gRQAQgFAOAIQAPAIAEAQQAFAQgIAOQgIAPgQAFIg6ARQgFABgGAAQgKAAgJgFgABTDWIg5gVQgPgGgHgPQgGgPAFgQQAGgPAPgHQAPgHAPAGIA5AWQAQAFAHAQQAGAPgGAPQgFAPgQAHQgIAEgIAAQgHAAgHgDgAYYCrQgOgHgGgQQgFgQAHgOQAIgPAPgGIADgBIAEAAQAggIAfgDQARgBAMALQANALABARQABAQgLANQgKAMgRABQgYACgXAFIgDABQgHACgGAAQgJAAgJgEgAhECdIg4gVQgQgGgGgPQgHgQAGgPQAGgPAPgHQAPgHAPAGIA5AWQAPAFAHAQQAHAPgGAPQgGAQgPAGQgIAEgIAAQgHAAgIgDgAjaBlIg5gVQgPgFgIgPQgHgPAGgQQAGgPAPgHQAPgHAPAFIA5AVQAQAFAHAPQAHAPgGAQQgFAPgPAHQgJAEgJAAQgGAAgHgCgAEqBPQgNgJgEgQQgDgQAJgOQAJgOAQgDQAAgBABABQAAAAAAAAQAAAAAAABQAAAAAAABIAAgCIADgKQAEgQAOgJQAOgJAQAEQAQAEAJAOQAJAOgEAPIgEAPQgKAtg0ALIgIABQgLAAgLgHgADUBIIgTgFIgFgCIgGgDQgPgHgGgPQgGgQAHgPQAHgOAQgGQAPgGAPAHIADACIAPAEQAQAEAIAOQAJAOgFAQQgEAQgPAIQgJAFgKAAQgFAAgGgBgAlxAtIg5gVQgPgFgIgPQgHgOAGgQQAGgPAPgHQAPgHAPAFIA6AVQAPAGAHAPQAHAOgGAQQgGAPgPAHQgIAEgIAAQgHAAgHgDgABfAcIg2gVQgPgHgHgOQgGgPAGgQQAGgPAPgGQAQgHAPAGIA2AWQAPAGAHAPQAHAPgHAPQgGAPgPAHQgIADgIAAQgHAAgIgDgAongVIg3gVQgQgFgHgPQgHgPAGgQQAGgPAPgHQAPgHAPAFIA4AVQAQAGAHAPQAHAPgGAPQgGAQgPAHQgIAEgJAAQgHAAgHgDgAgwgcIg3gVQgPgGgHgPQgHgPAGgPQAGgQAPgHQAQgHAPAGIA3AWQAPAFAGAQQAHAPgGAPQgFAQgPAGQgIAEgIAAQgHAAgIgDgAFRgvQgQgDgKgNQgNgPgYgPQgOgJgEgQQgDgQAIgOQAJgOAQgEQAQgEAOAJQAmAYAUAZQAKANgCARQgCAQgNAKQgLAJgOAAIgFAAgAq5hMIg4gUQgPgGgHgPQgHgPAGgPQAFgQAPgHQAPgHAQAGIA4AUQAPAGAHAPQAHAPgGAQQgGAPgPAHQgIAEgIAAQgHAAgHgDgAjBhVIg2gVQgPgGgHgPQgHgPAGgQQAHgPAPgHQAPgHAPAHIA3AVQAPAGAGAQQAHAPgGAPQgGAQgQAGQgHADgIAAQgIAAgHgDgAtLiCIg3gVQgQgGgHgPQgHgPAGgPQAGgQAPgGQAPgHAQAFIA3AVQAPAGAHAPQAHAPgGAPQgGAQgPAHQgIAEgIAAQgHAAgHgDgAC9iGIg3gVQgPgHgHgPQgGgPAGgPQAGgQAPgGQAQgHAPAGIA3AWQAPAGAHAQQAGAPgGAPQgGAQgPAGQgIADgIAAQgHAAgIgDgAlSiNIg3gWQgPgGgHgPQgGgPAGgQQAGgPAPgHQAPgHAQAHIA2AVQAQAGAGAQQAHAPgGAPQgGAPgQAHQgHADgIAAQgIAAgHgCgAvdi5Ig3gUQgQgGgHgPQgHgPAGgQQAGgPAPgHQAPgHAQAGIA3AUQAPAGAHAPQAHAPgGAQQgGAPgPAHQgIAEgIAAQgHAAgHgDgAAqjAIg2gWQgPgGgHgPQgHgPAGgPQAGgQAPgHQAOgHAPAGIA4AWQAQAGAGAQQAHAPgGAPQgGAPgQAHQgHADgIAAQgIAAgHgCgAnjjGIg3gWQgPgGgHgPQgHgPAGgQQAHgPAPgHQAPgHAPAHIA3AVQAQAGAGAPQAHAPgGAQQgGAPgPAHQgIADgIAAQgIAAgHgCgAxvjvIg3gUQgPgGgHgPQgHgPAGgQQAGgPAPgHQAPgHAPAGIA3AUQAPAGAHAPQAHAPgGAQQgGAPgPAHQgIAEgIAAQgHAAgHgDgAp0kAIg4gVQgPgHgHgPQgGgPAGgPQAGgQAPgGQAPgHAQAGIA3AWQAPAGAHAPQAGAPgGAPQgGAQgPAGQgIAEgIAAQgHAAgHgDgA0BklIg2gUQgQgGgHgPQgHgPAGgPQAGgQAPgHQAPgHAPAGIA3AUQAPAGAHAPQAHAPgFAPQgGAQgPAHQgIADgJAAQgHAAgHgCgAsflCIg5gXQgPgGgHgPQgGgPAGgQQAGgPAPgHQAPgHAQAHIA5AWQAPAGAHAQQAHAPgHAPQgGAPgPAHQgIADgIAAQgHAAgIgCgA2SlbIg3gVQgPgGgHgPQgHgPAGgPQAGgQAPgHQAQgHAPAGIA2AVQAQAGAGAPQAHAPgFAPQgGAQgPAHQgJADgIAAQgHAAgHgCgAu2l+Ig5gWQgPgHgHgPQgHgPAGgPQAHgQAPgGQAPgHAPAGIA5AXQAQAGAGAPQAHAPgGAQQgGAPgQAHQgHADgIAAQgIAAgHgDgA4jmRIg2gUQgPgGgHgPQgDgGgBgHQgGADgHABQgRABgNgLQgagWgVggQgJgOADgQQADgQAOgJQAOgJAQADQAQADAKAOQAOAWASAPQANALABAQIAAAAQAPgHAQAGIA2AUQAQAGAGAPQAHAPgFAPQgGAQgPAHQgJADgIAAQgHAAgHgCgAxNm5Ig6gXQgPgGgHgPQgGgQAGgPQAGgPAPgHQAQgHAPAHIA5AWQAPAGAHAPQAGAPgGAQQgGAPgPAHQgIADgIAAQgHAAgHgCgAzmn1Ig5gXQgPgHgHgPQgHgPAHgQQAGgPAPgGQAPgHAPAGIA6AXQAPAGAHAQQAGAPgGAPQgGAQgPAGQgIADgIAAQgHAAgIgCgA1/oyIg6gXQgQgGgGgPQgHgPAGgQQAGgPAPgHQAPgGAQAGIA6AXQAQAGAGAPQAHAPgGAQQgGAPgQAHQgHADgIAAQgIAAgHgDgA7OpSQgQgCgKgOQgKgNACgQIAGgjIAAABQAFgfAWgQQANgLAQACQARACAKANQAKANgCAQQgBAPgMALIAAAAIgFAfQgCAQgNAKQgLAIgNAAIgGAAgA4epwQg6gYgGgFQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQgPgFgIgPQgIgOAEgQQAFgQAPgIQAOgIAQAFQAZAHAIALQACgDAlAPQAPAGAHAQQAHAPgHAPQgGAPgPAHQgIADgIAAQgHAAgIgCg");
	this.shape_14.setTransform(0.3305,-56.3809);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-130.4,355.6,147.20000000000002);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(110.25,110.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:25.7143},0).wait(1).to({rotation:51.4286},0).wait(1).to({rotation:77.1429},0).wait(1).to({rotation:102.8571},0).wait(1).to({rotation:128.5714},0).wait(1).to({rotation:154.2857},0).wait(1).to({rotation:180},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,223.20000000000002,223.10000000000002);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(128.95,128.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:173.7787,y:128.9},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.2,261.70000000000005,262.09999999999997);


(lib.Symbol3copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween9("synched",0);
	this.instance.setTransform(63.55,49.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:-18.8,y:122.95},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.8,-1.5,212.5,175.9);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween10("synched",0);
	this.instance.setTransform(164.4,-35.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:3.9,y:101.35},8).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-87.2,290.6,240);


(lib.selctor = function(mode,startPosition,loop,reversed) {
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
	this.plus = new lib.arah();
	this.plus.name = "plus";
	this.plus.setTransform(-1.05,-49.4);
	new cjs.ButtonHelper(this.plus, 0, 1, 1);

	this.min = new lib.arah();
	this.min.name = "min";
	this.min.setTransform(-1.05,48.9,1,1,0,180,0);
	new cjs.ButtonHelper(this.min, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(10,1,1).p("Ai7hRIF3AAIAACjIl3AAg");
	this.shape.setTransform(77.375,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai7BSIAAijIF3AAIAACjg");
	this.shape_1.setTransform(77.375,0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(10,1,1).p("Au/hRId/AAIAACjI9/AAg");
	this.shape_2.setTransform(0.175,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Au/BSIAAijId/AAIAACjg");
	this.shape_3.setTransform(0.175,0.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(10,1,1).p("AQAAAQAAGoksErQksEsmoAAQmnAAksksQkskrAAmoQAAmnEsksQEsksGnAAQGoAAEsEsQEsEsAAGng");
	this.shape_4.setTransform(0.0134,-0.0026,0.9408,0.9408);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("ArTLUQkrksAAmoQAAmnErksQEsksGnABQGogBEsEsQErEsAAGnQAAGokrEsQksErmoAAQmnAAkskrg");
	this.shape_5.setTransform(0.0134,-0.0026,0.9408,0.9408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.min},{t:this.plus}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.selctor, new cjs.Rectangle(-101.3,-101.3,202.6,202.6), null);


(lib.puli_engine = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-0.05,-110.3,1,1,0,0,0,110.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:24.8276,x:0,y:-110.35},0).wait(1).to({rotation:49.6552,y:-110.3},0).wait(1).to({rotation:74.4828,y:-110.25},0).wait(1).to({rotation:99.3103,y:-110.3},0).wait(1).to({rotation:124.1379,x:0.05,y:-110.25},0).wait(1).to({rotation:148.9655,x:0.1,y:-110.2},0).wait(1).to({rotation:173.7931,x:0.05},0).wait(1).to({rotation:198.6207,x:0,y:-110.25},0).wait(1).to({rotation:223.4483,y:-110.2},0).wait(1).to({rotation:248.2759,x:-0.05},0).wait(1).to({rotation:273.1034},0).wait(1).to({rotation:297.931},0).wait(1).to({rotation:322.7586,x:0},0).wait(1).to({rotation:347.5862,x:-0.05,y:-110.3},0).wait(1).to({rotation:372.4138},0).wait(1).to({rotation:397.2414,x:0.05,y:-110.25},0).wait(1).to({rotation:422.069,x:0,y:-110.3},0).wait(1).to({rotation:446.8966},0).wait(1).to({rotation:471.7241,x:0.05},0).wait(1).to({rotation:496.5517,y:-110.2},0).wait(1).to({rotation:521.3793,x:0},0).wait(1).to({rotation:546.2069},0).wait(1).to({rotation:571.0345,y:-110.15},0).wait(1).to({rotation:595.8621,y:-110.2},0).wait(1).to({rotation:620.6897,x:-0.05,y:-110.25},0).wait(1).to({rotation:645.5172,x:0,y:-110.2},0).wait(1).to({rotation:670.3448,x:-0.05},0).wait(1).to({rotation:695.1724,x:-0.1,y:-110.25},0).wait(1).to({rotation:720,x:-0.05,y:-110.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-221.8,223.3,223.3);


(lib.kipas_ac = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-124,-159,0.5577,0.5577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.kipas_out = new lib.Symbol3copy2();
	this.kipas_out.name = "kipas_out";
	this.kipas_out.setTransform(-91.4,-150.45);

	this.timeline.addTween(cjs.Tween.get(this.kipas_out).wait(1));

	// Kipasout
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape.setTransform(-77.8189,-9.0698,0.9987,0.9978,0,176.5248,-3.4829);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_1.setTransform(-77.8189,-9.0698,0.9987,0.9978,0,176.5248,-3.4829);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_2.setTransform(-67.6345,-14.763,0.9987,0.9978,0,176.5248,-3.4829);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_3.setTransform(-67.6345,-14.763,0.9987,0.9978,0,176.5248,-3.4829);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape_4.setTransform(84.7842,-9.902,0.9996,0.9996,179.9939);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_5.setTransform(84.7842,-9.902,0.9996,0.9996,179.9939);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_6.setTransform(74.2625,-14.974,0.9996,0.9996,179.9939);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_7.setTransform(74.2625,-14.974,0.9996,0.9996,179.9939);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape_8.setTransform(85.664,-253.85,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_9.setTransform(85.664,-253.85,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_10.setTransform(75.4773,-248.1533,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_11.setTransform(75.4773,-248.1533,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape_12.setTransform(-77.75,-252.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_13.setTransform(-77.75,-252.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_14.setTransform(-67.225,-247.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_15.setTransform(-67.225,-247.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape_16.setTransform(85.664,-253.85,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_17.setTransform(85.664,-253.85,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_18.setTransform(75.4773,-248.1533,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_19.setTransform(75.4773,-248.1533,0.9989,0.9983,0,-3.4754,176.5118);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(3,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgGgFAAgIQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAGg");
	this.shape_20.setTransform(-77.75,-252.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMANQgGgFABgIQgBgGAGgGQAGgFAGgBQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAQgGAAgGgFg");
	this.shape_21.setTransform(-77.75,-252.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_22.setTransform(-67.225,-247.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiugVIAFhJQAAgIAHgJQANgRAfAAIEmAAIg1AmQhBAug7AtQhgBKhOA2g");
	this.shape_23.setTransform(-67.225,-247.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(10,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_24.setTransform(1.4014,-132.3618,1.3131,1.3131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_25.setTransform(1.344,-132.2987,0.1644,0.1644);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("ArPLQQkqkqAAmmQAAmlEqkrQEqkqGlABQGmgBEqEqQErErgBGlQABGmkrEqQkqEqmmAAQmlAAkqkqg");
	this.shape_26.setTransform(1.344,-132.2987,0.1644,0.1644);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_27.setTransform(1.3611,-132.3095,0.2698,0.2698);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ArPLQQkqkqAAmmQAAmlEqkrQEqkqGlABQGmgBEqEqQErErgBGlQABGmkrEqQkqEqmmAAQmlAAkqkqg");
	this.shape_28.setTransform(1.3611,-132.3095,0.2698,0.2698);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3,1,1).p("AAAY5MAAAgxy");
	this.shape_29.setTransform(-0.1,-132.2105,1,0.8523);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("A0xAAMApjAAA");
	this.shape_30.setTransform(-1.725,-132);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3,1,1).p("AO6vCI9zeF");
	this.shape_31.setTransform(0.5,-131.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("Au7vAId3eB");
	this.shape_32.setTransform(1.375,-131.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_33.setTransform(1.3705,-132.3133,0.4009,0.4009);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_34.setTransform(1.4062,-132.3183,0.6066,0.6066);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_35.setTransform(1.4179,-132.3424,0.7168,0.7168);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_36.setTransform(1.3846,-132.3459,0.8348,0.8348);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_37.setTransform(1.3985,-132.348,0.9705,0.9705);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("AQ+AAQAAHCk+E+Qk+E+nCAAQnBAAk+k+Qk+k+AAnCQAAnAE+k/QE+k9HBAAQHCAAE+E9QE+E/AAHAg");
	this.shape_38.setTransform(1.4,-132.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3,1,1).p("AP7AAQAAGmkrEqQkqEqmmAAQmlAAkrkqQkqkqAAmmQAAmlEqkqQErkqGlAAQGmAAEqEqQErEqAAGlg");
	this.shape_39.setTransform(1.3982,-132.3743,1.1858,1.1858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// kipas
	this.fan = new lib.Symbol7();
	this.fan.name = "fan";
	this.fan.setTransform(0.45,-131.55,1,1,0,0,0,128.9,128.8);

	this.timeline.addTween(cjs.Tween.get(this.fan).wait(1));

	// kipas In
	this.kipas_in = new lib.Symbol3();
	this.kipas_in.name = "kipas_in";
	this.kipas_in.setTransform(229.95,-315.25,1,1,0,0,0,63.6,50);

	this.timeline.addTween(cjs.Tween.get(this.kipas_in).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kipas_ac, new cjs.Rectangle(-137.3,-271.1,277.5,277.5), null);


(lib.isi_kompresor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4_copy_2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(116.8,-125.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[116.8,-125.6,117,-122.6,117.1,-119.4,118.3,-66.4,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},6).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},13).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.8,-220.2,33.3,-219.3,41.5,-216.5,57.8,-211,71.6,-201.9,107.1,-178.6,114.9,-139.5]}},5).wait(1));

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(27.65,-220.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},13).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},12).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak4QvQDYhICmh1QDqilBojpQCCkjhQl8QiDp2o0iyQiwg4jHgEQhjgChAAKQBPgcB5gUQD0grDYAeQEvApDPCzQECDgBcGrQBaGfitEzQiLD1krClQjWB2kRBBQiIAhheAKQBKgNBrglg");
	this.shape.setTransform(53.9149,-111.1457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-226.9,155.1,227.9);


(lib.engine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.puli_engine = new lib.puli_engine();
	this.puli_engine.name = "puli_engine";
	this.puli_engine.setTransform(0,-110.2,1,1,0,0,0,0,-110.2);

	this.timeline.addTween(cjs.Tween.get(this.puli_engine).wait(27));

	// Layer_4_copy_2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(116.8,-125.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[116.8,-125.6,117,-122.6,117.1,-119.4,118.3,-66.4,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},6).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},13).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.8,-220.2,33.3,-219.3,41.5,-216.5,57.8,-211,71.6,-201.9,107.1,-178.6,114.9,-139.5]}},5).wait(1));

	// Layer_4
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(27.65,-220.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},13).to({guide:{path:[68,-17.7,69.3,-18.3,70.5,-18.9,81.2,-25.4,90,-35.2,118.3,-66.5,117.1,-119.4,115.7,-172.9,71.6,-201.9,57.9,-211,41.5,-216.5,33.3,-219.3,27.7,-220.2]}},1).to({guide:{path:[27.7,-220.2,33.3,-219.3,41.5,-216.5,57.9,-211,71.6,-201.9,115.7,-172.9,117.1,-119.4,118.3,-66.5,90,-35.2,81.2,-25.4,70.5,-18.9,69.3,-18.3,68,-17.7]}},12).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak4QvQDYhICmh1QDqilBojpQCCkjhQl8QiDp2o0iyQiwg4jHgEQhjgChAAKQBPgcB5gUQD0grDYAeQEvApDPCzQECDgBcGrQBaGfitEzQiLD1krClQjWB2kRBBQiIAhheAKQBKgNBrglg");
	this.shape.setTransform(53.9149,-111.1457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27));

	// Layer_7
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(27.65,-220.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.0536,scaleY:2.0536,guide:{path:[27.7,-220,414.6,-160.3,801.5,-100.6]}},13).to({scaleX:1,scaleY:1,guide:{path:[801.5,-100.6,414.6,-160.3,27.7,-220]}},1).to({scaleX:2.0536,scaleY:2.0536,guide:{path:[27.7,-220,414.6,-160.3,801.5,-100.6]}},12).wait(1));

	// belt
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Eg3IgZkMBwNAvSIh8D3MhwNgvTg");
	this.shape_1.setTransform(344.0302,126.0592,1,1,-1.9509);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg5EgVtIB9j2MBwMAvSIh8D1g");
	this.shape_2.setTransform(344.0302,126.0592,1,1,-1.9509);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EhBcgVZMCFMAm0IiTD/MiFMgm0g");
	this.shape_3.setTransform(438.3923,-150.8798,0.9463,1,0,0,-9.7895);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EhDvgRaICTj/MCFMAm0IiTD/g");
	this.shape_4.setTransform(438.3923,-150.8798,0.9463,1,0,0,-9.7895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-226.9,954.5,505.5);


(lib.dasboard = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// logo
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-91.55,-237.25,0.452,0.4698,0,61.3855,21.6495);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer_3
	this.instance_1 = new lib.salju();
	this.instance_1.setTransform(95.85,13.9,0.4326,0.4326,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[96,14.3,106.6,11.6,111.4,1.3,113.9,-4.1,114,-9,113.9,-9.1,113.7,-23.5,113.5,-39.9,113.7,-53.1,113.7,-58.2,113.7,-64.9,113.9,-69.6,115.4,-72.9,118,-78.5,135.6,-95.5,151.1,-110.4,148.6,-123.5,147.4,-129.7,143.3,-133.2]}},29).wait(1));

	// Layer_3_copy
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(125.9,-169.55,0.6218,0.6218);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:155.75,y:-181.85},29).wait(1));

	// Layer_9_copy
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(-113.85,-147.55,1.8885,1.8885);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:3.3219,scaleY:3.3219,guide:{path:[-114.3,-148.8,-125,-144.9,-138.8,-137.5,-167.7,-121.9,-183,-101.8,-200.5,-78.8,-209.1,-73.7,-213.7,-71,-219.7,-70,-223.4,-69.4,-233.5,-69]}},28).wait(1));

	// Layer_9_copy_2
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(-21.05,-103.95,1.8885,1.8885);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({scaleX:3.3219,scaleY:3.3219,guide:{path:[-21.1,-103.8,-27.1,-101.1,-33.9,-97.4,-62.8,-81.8,-78,-61.7,-95.5,-38.8,-104.1,-33.6,-108.7,-30.9,-114.7,-29.9,-118.4,-29.3,-128.5,-28.9]}},28).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AilAHIAoBzIEjh+IgHhAQgPg+gfAKQgfALh/A7g");
	this.shape.setTransform(141.4,-175.876);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AilAHIB4g5QB/g7AfgLQAfgKAPA+IAIBAIkkB+g");
	this.shape_1.setTransform(141.4,-175.876);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhBFWIAsh5QA5iDBKg0QBYg8AghPQAhhOgjhGQgvhcgUguIhDA9QAtAXAQAwQAfBiiUCHQiTCGhTCXQgaAwgQArIgLAi");
	this.shape_2.setTransform(129.5824,-100.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,255,0.498)").s().p("AjqFiQAQgrAagwQBTiYCTiGQCUiHgfhhQgQgxgtgVIBDg+QAUAuAvBcQAjBGghBPQggBNhYA9QhKA0g5CDIgsB5Ii0Aug");
	this.shape_3.setTransform(129.5824,-100.1);

	this.instance_5 = new lib.Bitmap9();
	this.instance_5.setTransform(-189.6,-227.7,1.2146,1.1891,0,0,-11.7573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.1,-306.9,452,326.29999999999995);


(lib.blower1 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_49 = function() {
		this.gotoAndPlay(2);
	}
	this.frame_88 = function() {
		this.gotoAndPlay(52);
	}
	this.frame_114 = function() {
		this.gotoAndPlay(90);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(39).call(this.frame_88).wait(26).call(this.frame_114).wait(1));

	// Layer_2
	this.text = new cjs.Text("1", "30px 'Arial Rounded MT Bold'", "#FF0000");
	this.text.lineHeight = 37;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(275.1,-140.95);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(48).to({text:"2"},0).wait(39).to({text:"3"},0).wait(26).to({text:"4"},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(-0.05,-95.65,1,1,0,0,0,95.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:97.2,regY:96,rotation:7.3469,x:1.6,y:-94.9},0).wait(1).to({rotation:14.6939,x:1.5,y:-94.75},0).wait(1).to({rotation:22.0408,x:1.4,y:-94.5},0).wait(1).to({rotation:29.3878,x:1.25,y:-94.35},0).wait(1).to({rotation:36.7347,x:1.1,y:-94.2},0).wait(1).to({rotation:44.0816,x:0.85,y:-94.15},0).wait(1).to({rotation:51.4286,x:0.65,y:-94},0).wait(1).to({rotation:58.7755,x:0.45,y:-93.95},0).wait(1).to({rotation:66.1224,x:0.2,y:-93.85},0).wait(1).to({rotation:73.4694,x:0},0).wait(1).to({rotation:80.8163,x:-0.2,y:-93.9},0).wait(1).to({rotation:88.1633,x:-0.45},0).wait(1).to({rotation:95.5102,x:-0.65,y:-93.95},0).wait(1).to({rotation:102.8571,x:-0.85,y:-94.05},0).wait(1).to({rotation:110.2041,x:-1,y:-94.2},0).wait(1).to({rotation:117.551,x:-1.15,y:-94.3},0).wait(1).to({rotation:124.898,x:-1.35,y:-94.5},0).wait(1).to({rotation:132.2449,x:-1.45,y:-94.65},0).wait(1).to({rotation:139.5918,x:-1.6,y:-94.85},0).wait(1).to({rotation:146.9388,y:-95},0).wait(1).to({rotation:154.2857,x:-1.7,y:-95.3},0).wait(1).to({rotation:161.6327,x:-1.75,y:-95.45},0).wait(1).to({rotation:168.9796,x:-1.7,y:-95.7},0).wait(1).to({rotation:176.3265,y:-95.9},0).wait(1).to({rotation:183.6735,x:-1.65,y:-96.2},0).wait(1).to({rotation:191.0204,x:-1.55,y:-96.4},0).wait(1).to({rotation:198.3673,x:-1.45,y:-96.6},0).wait(1).to({rotation:205.7143,x:-1.3,y:-96.75},0).wait(1).to({rotation:213.0612,x:-1.15,y:-96.9},0).wait(1).to({rotation:220.4082,x:-0.95,y:-97.05},0).wait(1).to({rotation:227.7551,x:-0.75,y:-97.15},0).wait(1).to({rotation:235.102,x:-0.55,y:-97.2},0).wait(1).to({rotation:242.449,x:-0.35,y:-97.3},0).wait(1).to({rotation:249.7959,x:-0.1},0).wait(1).to({rotation:257.1429,x:0.1},0).wait(1).to({rotation:264.4898,x:0.3},0).wait(1).to({rotation:271.8367,x:0.5,y:-97.2},0).wait(1).to({rotation:279.1837,x:0.7,y:-97.15},0).wait(1).to({rotation:286.5306,x:0.95,y:-97.05},0).wait(1).to({rotation:293.8776,x:1.15,y:-96.95},0).wait(1).to({rotation:301.2245,x:1.3,y:-96.75},0).wait(1).to({rotation:308.5714,x:1.4,y:-96.6},0).wait(1).to({rotation:315.9184,x:1.5,y:-96.4},0).wait(1).to({rotation:323.2653,x:1.6,y:-96.2},0).wait(1).to({rotation:330.6122,x:1.7,y:-96},0).wait(1).to({rotation:337.9592,y:-95.8},0).wait(1).to({rotation:345.3061,y:-95.55},0).wait(1).to({rotation:352.6531,x:1.75,y:-95.35},0).wait(1).to({rotation:360,x:1.65,y:-95.15},0).wait(1).to({regX:95.5,regY:95.5,x:-0.05,y:-95.65},0).wait(1).to({regX:97.2,regY:96,rotation:374.6939,x:1.5,y:-94.75},0).wait(1).to({rotation:389.3877,x:1.25,y:-94.35},0).wait(1).to({rotation:404.0816,x:0.85,y:-94.15},0).wait(1).to({rotation:418.7755,x:0.45,y:-93.95},0).wait(1).to({rotation:433.4693,x:0,y:-93.85},0).wait(1).to({rotation:448.1632,x:-0.45,y:-93.9},0).wait(1).to({rotation:462.8571,x:-0.85,y:-94.05},0).wait(1).to({rotation:477.5509,x:-1.15,y:-94.3},0).wait(1).to({rotation:492.2448,x:-1.45,y:-94.65},0).wait(1).to({rotation:506.9386,x:-1.6,y:-95},0).wait(1).to({rotation:521.6325,x:-1.75,y:-95.45},0).wait(1).to({rotation:536.3264,x:-1.7,y:-95.9},0).wait(1).to({rotation:551.0202,x:-1.55,y:-96.4},0).wait(1).to({rotation:565.7141,x:-1.3,y:-96.75},0).wait(1).to({rotation:580.408,x:-0.95,y:-97.05},0).wait(1).to({rotation:595.1018,x:-0.55,y:-97.2},0).wait(1).to({rotation:609.7957,x:-0.1,y:-97.3},0).wait(1).to({rotation:624.4896,x:0.3},0).wait(1).to({rotation:639.1834,x:0.7,y:-97.15},0).wait(1).to({rotation:653.8773,x:1.15,y:-96.95},0).wait(1).to({rotation:668.5712,x:1.4,y:-96.6},0).wait(1).to({rotation:683.265,x:1.6,y:-96.2},0).wait(1).to({rotation:697.9589,x:1.7,y:-95.8},0).wait(1).to({rotation:712.6528,x:1.75,y:-95.35},0).wait(1).to({rotation:727.3466,x:1.6,y:-94.9},0).wait(1).to({rotation:742.0405,x:1.4,y:-94.5},0).wait(1).to({rotation:756.7344,x:1.1,y:-94.2},0).wait(1).to({rotation:771.4282,x:0.65,y:-94},0).wait(1).to({rotation:786.1221,x:0.2,y:-93.85},0).wait(1).to({rotation:800.8159,x:-0.2,y:-93.9},0).wait(1).to({rotation:815.5098,x:-0.65,y:-93.95},0).wait(1).to({rotation:830.2037,x:-1,y:-94.2},0).wait(1).to({rotation:844.8975,x:-1.35,y:-94.5},0).wait(1).to({rotation:859.5914,x:-1.6,y:-94.85},0).wait(1).to({rotation:874.2853,x:-1.7,y:-95.3},0).wait(1).to({rotation:888.9791,y:-95.7},0).wait(1).to({rotation:903.673,x:-1.65,y:-96.2},0).wait(1).to({regX:95.5,regY:95.5,rotation:1080,x:-0.05,y:-95.65},0).wait(1).to({regX:97.2,regY:96,rotation:1102.0408,x:1.4,y:-94.5},0).wait(1).to({rotation:1124.0816,x:0.85,y:-94.15},0).wait(1).to({rotation:1146.1224,x:0.2,y:-93.85},0).wait(1).to({rotation:1168.1632,x:-0.45,y:-93.9},0).wait(1).to({rotation:1190.204,x:-1,y:-94.2},0).wait(1).to({rotation:1212.2448,x:-1.45,y:-94.65},0).wait(1).to({rotation:1234.2856,x:-1.7,y:-95.3},0).wait(1).to({rotation:1256.3264,y:-95.9},0).wait(1).to({rotation:1278.3672,x:-1.45,y:-96.6},0).wait(1).to({rotation:1300.408,x:-0.95,y:-97.05},0).wait(1).to({rotation:1322.4488,x:-0.35,y:-97.3},0).wait(1).to({rotation:1344.4896,x:0.3},0).wait(1).to({rotation:1366.5304,x:0.95,y:-97.05},0).wait(1).to({rotation:1388.5712,x:1.4,y:-96.6},0).wait(1).to({rotation:1410.612,x:1.7,y:-96},0).wait(1).to({rotation:1432.6528,x:1.75,y:-95.35},0).wait(1).to({rotation:1454.6936,x:1.5,y:-94.75},0).wait(1).to({rotation:1476.7344,x:1.1,y:-94.2},0).wait(1).to({rotation:1498.7752,x:0.45,y:-93.95},0).wait(1).to({rotation:1520.816,x:-0.2,y:-93.9},0).wait(1).to({rotation:1542.8568,x:-0.85,y:-94.05},0).wait(1).to({rotation:1564.8976,x:-1.35,y:-94.5},0).wait(1).to({rotation:1586.9384,x:-1.6,y:-95},0).wait(1).to({rotation:1608.9792,x:-1.7,y:-95.7},0).wait(1).to({rotation:1631.02,x:-1.55,y:-96.4},0).wait(1).to({regX:0,regY:0,rotation:1800,x:-95.55,y:-191.15},0).wait(1));

	// Layer_3_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("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");
	this.shape.setTransform(-331.5766,-87.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("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");
	this.shape_1.setTransform(-332.9337,-87.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("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");
	this.shape_2.setTransform(-333.6306,-87.9123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("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");
	this.shape_3.setTransform(-334.35,-87.9373);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("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");
	this.shape_4.setTransform(-335.05,-87.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("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");
	this.shape_5.setTransform(-335.722,-87.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("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");
	this.shape_6.setTransform(-336.4087,-87.9998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("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");
	this.shape_7.setTransform(-337.1306,-88.0494);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0099FF").s().p("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");
	this.shape_8.setTransform(-337.8087,-88.0994);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099FF").s().p("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");
	this.shape_9.setTransform(-338.5081,-88.1248);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0099FF").s().p("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");
	this.shape_10.setTransform(-339.2334,-88.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0099FF").s().p("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");
	this.shape_11.setTransform(-339.9011,-88.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("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");
	this.shape_12.setTransform(-332.2305,-87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape}]},37).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape}]},25).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape}]},13).wait(1));

	// Layer_3_copy_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0099FF").s().p("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");
	this.shape_13.setTransform(-331.5766,-87.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0099FF").s().p("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");
	this.shape_14.setTransform(-332.2305,-87.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0099FF").s().p("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");
	this.shape_15.setTransform(-332.9337,-87.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0099FF").s().p("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");
	this.shape_16.setTransform(-333.6306,-87.9123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0099FF").s().p("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");
	this.shape_17.setTransform(-334.35,-87.9373);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0099FF").s().p("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");
	this.shape_18.setTransform(-335.05,-87.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099FF").s().p("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");
	this.shape_19.setTransform(-335.722,-87.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0099FF").s().p("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");
	this.shape_20.setTransform(-336.4087,-87.9998);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099FF").s().p("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");
	this.shape_21.setTransform(-337.1306,-88.0494);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0099FF").s().p("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");
	this.shape_22.setTransform(-337.8087,-88.0994);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0099FF").s().p("EA0HAOHQgJgJAAgMQgBgNAJgJQAJgIAMgBQAeAAAdgCQAMgBAJAIQAKAIABANQAAAMgIAKQgIAJgMABQgfACgfAAIAAAAQgMAAgJgIgEAy3AOOIg9gEQgNgBgIgKQgIgJABgNQABgMAKgIQAJgIANABIA7AEQAMAAAIAKQAJAJgBAMQgBANgJAIQgIAIgMAAIgBAAgEA2pAN8QgKgHgCgMQgBgNAHgKQAIgKAMgCQAagDAagGQAMgCALAHQAKAHACAMQADAMgHAKQgHALgMACQgbAGgdAEIgEAAQgKAAgIgGgEAwVAN9Ig8gKQgNgCgHgKQgHgLADgMQACgMAKgHQAKgHANACIA6AKQAMACAIAKQAHAKgCAMQgCANgKAHQgIAGgJAAIgFgBgEAt6ANgIg7gPQgMgDgGgKQgHgLAEgMQADgMAKgHQALgGAMADIA6AOQAMADAHALQAGALgDAMQgDAMgKAGQgIAFgIAAIgHgBgEA5DANdQgLgGgEgMQgDgMAGgLQAFgLAMgEQAcgIAagLQALgEAMAFQALAFAFALQAEALgEAMQgFALgMAFQgcAMgeAJIgJABQgHAAgHgDgEArdAM1Ig6gSQgMgEgFgLQgGgLAEgMQAEgMALgGQALgFAMAEIA5ASQALAEAGALQAGALgEAMQgEAMgLAFQgGAEgHAAIgJgCgEA7cAMhQgMgEgGgLQgHgKAEgMQADgMALgGQAZgPAYgQQALgHAMACQAMADAHAKQAHAKgCANQgDAMgKAHQgaARgcAQQgHAEgHAAIgIgBgEApEAMAIg5gXQgLgFgFgLQgFgMAFgLQAFgMALgFQAMgEALAEIA4AXQALAEAFAMQAFALgEAMQgFALgLAFQgGADgGAAQgGAAgFgCgEAmvALAIg4gbQgLgFgEgMQgEgMAGgLQAFgLAMgEQAMgEALAGIA2AZQALAGAEALQAEAMgFALQgFALgLAFQgGACgFAAQgGAAgGgDgEA9lALCQgMAAgJgJQgIgJAAgNQAAgMAKgJQAVgUAUgWQAJgKAMAAQAMgBAKAJQAJAIABAMQAAAMgIAKQgWAYgXAWQgJAIgMAAIgBAAgEAkmAJ6Ig0gfQgLgGgDgMQgDgMAHgLQAHgKAMgDQAMgDAKAGIAzAeQALAGADAMQADAMgGALQgGALgMADIgIABQgIAAgHgEgEA+7AJEQgKgHgDgMQgCgMAHgKQAPgYAOgaQAGgLAMgDQAMgDALAFQALAGADAMQAEAMgGALQgPAcgRAaQgHAKgMADIgHAAQgIAAgIgFgEAieAImIgzghQgKgHgCgNQgDgMAHgKQAHgKAMgDQAMgCALAHIAyAhQAKAHADAMQACAMgGAKQgHALgMACIgHABQgIAAgIgFgEAgZAHMIgygiQgKgHgCgNQgCgMAHgKQAHgKAMgCQANgCAKAHIAxAhQAKAIACAMQACAMgHAKQgHAKgMADIgGAAQgJAAgHgFgEBAKAG4QgMgEgFgMQgFgLAFgMQAKgaAIgcQAEgMALgGQALgGAMAEQAMAEAGALQAFALgDAMQgKAegKAcQgFALgLAGQgGACgHAAQgFAAgFgCgAeXFwIgwgjQgKgHgCgNQgCgMAHgKQAIgKAMgCQAMgCAKAHIAwAjQAKAIACAMQACAMgHAKQgHAKgNACIgFABQgJAAgIgGgEBA7AEgQgMgCgHgKQgHgLACgMIAKg7QACgMAKgIQAKgHAMACQAMABAIAKQAHAKgCAMIgKA+QgCAMgKAHQgIAGgJAAIgGgBgEhBlAEVQgNgJgBgMIAAgBQgDgKAIgMQACgEAIgFIAHgDIANgFIAzgPQAMgDALAGQAKAGAEAMQADAMgGALQgGALgMADIgwAOIgIADQgEADgFABIgIABQgIAAgHgEgAcTEPIgxgkQgKgHgBgMQgCgMAHgLQAHgJAMgCQANgCAKAHIAwAkQAKAHACAMQACAMgHAKQgIALgMACIgFAAQgJAAgIgGgEg/AADlQgLgGgDgMQgEgMAGgLQAGgLAMgDIA6gQQAMgDALAGQALAGADAMQADAMgGAKQgGALgMAEIg5AQIgJABQgHAAgHgEgEg8fAC5QgLgGgDgMQgDgMAGgLQAHgLAMgDIA6gPQAMgDALAGQAKAGAEAMQADAMgGALQgHALgMADIg6APIgIABQgIAAgHgEgAaRCwIgxgjQgKgHgCgNQgCgMAHgKQAIgKAMgCQAMgCAKAHIAxAkQAKAHACAMQACANgHAKQgHAKgNACIgFAAQgJAAgIgGgEg6DACQQgLgHgDgMQgDgMAGgLQAHgKAMgDIA6gPQAMgDALAGQALAGADAMQADAMgHALQgGALgMADIg6APIgIABQgIAAgHgEgEBBTACAQgMgBgJgJQgIgJABgNIACg8QABgNAJgIQAJgJAMABQAMAAAJAJQAIAJAAANIgCA9QgBANgJAIQgJAIgLAAIgCAAgEg3oABnQgKgGgDgMQgEgMAHgKQAGgLAMgDIA7gPQAMgDAKAGQALAGADAMQADAMgGALQgGALgMADIg7APIgIABQgHAAgIgFgAYOBSIgygjQgKgHgCgMQgDgMAIgKQAHgKAMgCQAMgCAKAHIAyAiQAKAHADANQACAMgHAKQgIAKgMACIgFABQgJAAgIgGgEg1MAA/QgLgGgDgMQgDgMAGgLQAHgKAMgDIA6gOQAMgDALAGQALAFADAMQADAMgHALQgGALgMADIg6APIgIABQgIAAgHgFgEgywAAYQgLgGgDgMQgDgLAHgLQAHgKAMgEIA5gOQAMgDALAGQAKAHAEAMQADAMgHAKQgGAKgMADIg6APIgHABQgJAAgHgFgAWIgIIgygiQgLgHgCgMQgDgMAHgLQAHgKAMgDQAMgCALAHIAzAiQAKAHADAMQACAMgHAKQgHALgMACIgGABQgJAAgIgFgEgwWgANQgKgHgDgMQgDgMAHgKQAGgLAMgDIA8gOQAMgDALAHQAKAGADAMQADAMgGALQgHALgMACIg8APIgHAAQgIAAgIgEgEBBBgAqQgJgIgBgMQgBgdgDgdQgBgMAHgKQAIgJANgBQAMgCAKAIQAJAIABAMQADAeACAfQABAMgJAJQgIAKgMAAIgCAAQgLAAgJgIgEgt3gAzQgLgHgDgMQgDgMAHgKQAHgLAMgDIA6gOQAMgDAKAHQALAGADAMQADAMgHALQgGAKgMADIg6AOIgHABQgJAAgHgEgEgrcgBYQgLgHgDgMQgDgMAHgKQAGgLAMgDIA6gOQAMgDALAHQAKAGADAMQADAMgGALQgHAKgMAEIg6ANIgHABQgIAAgHgEgAUBhhIg0ghQgLgGgDgMQgDgMAHgLQAGgKAMgEQAMgCALAGIA1AhQAKAGADAMQADANgHAKQgHALgMACIgHABQgIAAgHgEgEgpBgB9QgLgHgDgMQgDgMAHgKQAGgLAMgDIA7gOQAMgCAKAHQALAGACAMQADAMgHALQgGAKgMADIg6ANIgHABQgIAAgHgEgEgmngChQgKgHgDgMQgCgMAGgLQAHgKAMgDIA7gNQAMgDAKAHQALAHACAMQADAMgHAKQgGALgMADIg7AMIgHABQgIAAgIgEgAR4izIgzgcQgLgGgEgMQgDgMAGgLQAGgLAMgDQALgEALAGIA1AdQALAHADALQADAMgGALQgGALgMADIgIABQgIAAgHgEgEBAxgDDQgLgHgCgMQgGgdgIgbQgDgMAGgLQAGgLAMgDQAMgDALAGQALAGADAMQAIAdAHAfQACAMgHAKQgHALgMACIgGABQgJAAgHgFgEgkKgDFQgLgGgDgMQgCgMAGgLQAHgKAMgDIA6gNQAMgDALAHQAKAHADAMQADAMgHAKQgHALgMACIg6ANIgHABQgIAAgHgFgEghwgDnQgLgHgCgMQgDgMAHgLQAHgKAMgDIA6gMQAMgDALAGQAKAHADAMQADAMgHALQgHAKgMADIg6ANIgHABQgJAAgHgFgAPtj/Ig2gaQgLgFgEgMQgEgLAFgMQAFgLAMgEQAMgEALAFIA3AbQALAGAEALQADAMgFALQgGALgLAEQgFACgFAAQgHAAgGgEgA/VkJQgKgHgDgMQgCgMAGgKQAHgLAMgDIA7gMQAMgDALAGQAKAHADAMQADAMgHALQgHAKgMADIg7ANIgHABQgIAAgIgFgA84krQgLgHgCgMQgDgMAHgKQAHgLAMgCIA7gMQAMgDAKAHQAKAHADAMQACAMgGALQgHAKgMADIg7AMIgGAAQgJAAgHgFgANdlCIg3gYQgMgFgFgLQgEgMAEgLQAFgMAMgFQALgEAMAEIA4AZQAMAFAEAMQAEALgFALQgFAMgLAEQgGACgFAAQgGAAgGgCgA6clLQgLgHgCgMQgDgMAHgLQAHgKAMgDIA7gMQAMgCAKAHQAKAHADAMQACAMgGAKQgHALgMACIg7AMIgGABQgJAAgHgFgEBAHgFZQgLgFgFgLQgLgbgNgZQgGgLAEgLQAEgMALgGQALgGAMAEQALAEAGALQAOAbAMAdQAFALgFAMQgEALgMAFQgGACgFAAQgGAAgGgCgA4AlrQgKgHgDgMQgCgMAHgKQAGgLANgCIA7gMQAMgCALAHQAKAHACAMQACAMgHALQgHAKgMACIg6AMIgHAAQgIAAgIgFgALKl/Ig5gUQgMgEgFgLQgFgMAEgLQAEgMALgFQALgGAMAFIA5AUQAMAEAFAMQAGALgFALQgEAMgLAFQgHADgGAAQgFAAgFgCgA1jmKQgLgHgCgMQgCgMAHgKQAHgKAMgDIA7gLQAMgCAKAHQAKAHADAMQACAMgHALQgHAKgMACIg7ALIgGABQgJAAgHgGgAzHmnQgKgHgCgMQgDgMAHgLQAHgKANgCIA7gLQAMgDAKAHQAKAIADAMQACAMgHAKQgHAKgMADIg7ALIgGAAQgJAAgIgFgAIzmzIg5gRQgMgEgGgLQgGgKADgMQAEgMALgGQALgGAMADIA6ASQAMAEAGALQAFALgDALQgEAMgLAGQgHAEgHAAIgJgCgAwpnDQgLgIgCgMQgCgMAHgKQAHgKAMgDIA7gKQAMgCAKAHQAKAHADAMQACAMgHALQgIAKgMACIg6AKIgGABQgJAAgHgFgAuOngQgKgHgCgMQgCgNAHgKQAHgKANgCIA7gKQAMgCAKAHQAKAIADAMQACAMgHAKQgIAKgMACIg7AKIgGABQgJAAgIgGgAGaneIgagGIAAAAIgYgFQgMgDgHgKQgHgKADgNQACgMALgGQAKgHAMACIAYAFIABAAIAcAHQAMADAGALQAGALgDAMQgDAMgLAGQgHAEgIAAIgHgBgEA/AgHiQgMgCgHgKQgRgYgSgXQgIgKABgMQABgMAKgIQAJgIAMABQANABAIAJQAUAZASAaQAHAKgCAMQgCANgKAHQgIAFgJAAIgGAAgArun7QgKgHgCgMQgCgMAHgKQAHgKANgCIA8gKQAMgCAKAHQAKAHACAMQACANgHAKQgHAKgMACIg8AKIgGAAQgJAAgIgGgAEGn9Ig7gKQgMgCgHgKQgIgKACgMQACgMAKgIQAKgHAMABIA9ALQAMACAHAKQAHALgCAMQgCAMgKAHQgIAFgJAAIgGAAgAphoRQgKgHgCgMQgBgNAHgKQAIgJAMgCIA8gIQAMgBAKAIQAKAHABANQACAMgIAKQgIAKgMABIg7AIIgEAAQgKAAgIgHgABooUIg8gHQgMgBgIgKQgIgJABgNQACgMAJgIQAKgIAMABIA9AHQAMABAIAKQAHAKgBAMQgCANgJAHQgJAHgKAAIgDAAgAnDojQgKgIgBgMQgBgNAIgJQAIgKANgBIA8gEQAMgBAKAIQAJAIABANQABAMgIAJQgJAKgMABIg7AEIgDAAQgLAAgIgHgAg2oiIg7gCQgNgBgIgJQgJgJABgMQAAgNAJgIQAJgJANABIA8ACQAMABAJAJQAIAJAAANQgBAMgJAIQgJAIgLAAIgCAAgAklotQgJgIAAgNQgBgMAJgJQAIgJANgBIA9gBQAMAAAJAJQAJAJAAAMQAAANgJAJQgJAIgMAAIg7ABIgBAAQgMAAgJgIgEA9HgJiQgVgTgXgSQgKgHgCgMQgBgNAHgKQAIgJAMgCQANgCAJAIQAZATAXAVQAKAIAAANQABAMgJAKQgIAJgMAAIgCAAQgLAAgJgIgEA7KgK8QgZgOgagOQgLgFgEgMQgEgMAGgLQAFgLAMgEQAMgEALAGQAcAOAaAPQALAHADAMQADAMgGALQgGAKgMADIgIABQgIAAgHgEgEA4/gL+QgcgKgcgIQgMgEgGgLQgGgLAEgMQAEgMALgGQALgGALAEQAfAJAdALQALAFAFALQAFALgEAMQgEALgMAGQgGACgGAAQgFAAgFgCgEA2lgMrIg6gMQgMgDgHgKQgHgKACgMQACgMALgIQAKgHAMADIA8AMQAMADAHAKQAHALgDAMQgDAMgKAGQgIAFgIAAIgHAAgEA0KgNGIg7gGQgMgBgIgJQgIgKABgMQABgNAJgIQAKgIAMABIA9AGQAMACAIAKQAIAJgCANQgBAMgKAIQgIAGgKAAIgEAAgEAuCgNTQgKgIgBgMQgBgMAIgKQAIgJAMgCIA5gEQAMAAAKAIQAJAIABANQAAAMgIAJQgJAKgMAAIg2AEIgDAAQgLAAgIgHgEAxugNRIgTgBIgBAAIgqAAQgMAAgJgJQgJgJAAgMQAAgNAJgIQAJgJAMAAIArAAIABAAIAVABQAMAAAIAKQAJAJgBAMQgBANgJAIQgIAIgMAAIgBAAg");
	this.shape_23.setTransform(-338.5081,-88.1248);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0099FF").s().p("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");
	this.shape_24.setTransform(-339.2334,-88.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0099FF").s().p("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");
	this.shape_25.setTransform(-339.9011,-88.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},13).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},37).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},25).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).wait(1));

	// Layer_3_copy_3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0099FF").s().p("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");
	this.shape_26.setTransform(-331.5766,-87.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0099FF").s().p("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");
	this.shape_27.setTransform(-332.3086,-87.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0099FF").s().p("EAylAOFQgJgJAAgMQAAgNAJgJQAJgJAMAAIA7gBQAMAAAKAJQAJAIAAAMQAAANgIAJQgJAJgMABIg9ABQgMAAgJgJgEAxUAOJIg9gGQgNgCgHgKQgIgJABgNQACgMAKgHQAJgIANABIA7AGQAMABAIAKQAIAJgBAMQgBANgKAIQgIAHgLAAIgCAAgEA1IAN+QgKgIgCgMQgBgMAHgKQAIgKAMgCIA6gJQAMgCAKAIQAKAHADAMQACAMgHAKQgIAKgMADIg8AJIgEAAQgKAAgIgGgEAuyAN0Ig5gLQgMgCgHgLQgHgKADgMQACgMALgHQAKgHAMADIA4ALQAMACAHAKQAHAKgCAMQgCAMgKAIQgIAFgJAAIgGgBgEA3kANiQgLgGgEgMQgDgMAGgLQAGgLAMgDQAcgJAagJQAMgFALAGQAMAFAEAMQAEALgFAMQgGALgLAEQgdALgdAIIgJACQgHAAgHgEgEAsUANSIg5gPQgMgDgGgLQgHgLAEgMQADgMALgGQALgGAMADIA4AQQAMADAGAKQAHALgDAMQgEAMgKAGQgIAFgHAAIgIgCgEA59AMqQgMgEgGgLQgGgLAEgLQAEgMALgGQAagOAYgPQALgHAMADQAMADAHALQAGAKgDAMQgCAMgLAHQgbARgcAOQgGAEgHAAQgFAAgEgCgEAp6AMlIg6gUQgLgEgGgMQgFgLAEgLQAFgMALgFQALgGAMAFIA4ATQAMAEAFAMQAGALgEALQgEAMgLAGQgHADgGAAQgFAAgFgCgEAniALsIg5gYQgLgFgEgMQgFgLAFgMQAFgLAMgFQALgEAMAFIA3AYQAMAFAEALQAFAMgFALQgEALgMAFQgGADgFAAQgGAAgGgDgEA8IALSQgMgBgIgKQgIgKABgMQACgMAJgIQAWgSAUgUQAIgJANAAQAMgBAJAJQAJAJAAAMQAAANgIAJQgXAWgYAUQgIAHgKAAIgEAAgEAlOAKqIgXgMIAAAAIgYgMQgLgHgDgLQgEgMAHgLQAGgLAMgDQALgEALAGIAVALIABABIAWALQALAFAEALQAEAMgFALQgFAMgMAEQgFACgFAAQgHAAgGgDgEAjIAJhIgzggQgKgGgDgMQgDgMAHgLQAGgKAMgDQAMgDALAGIAyAfQALAHADAMQADAMgHAKQgGALgMADIgIABQgIAAgHgEgEA9lAJYQgKgHgCgMQgCgNAHgKQARgXAQgZQAGgKAMgDQAMgDALAGQAKAHADAMQADAMgGALQgRAbgSAZQgHAKgNABIgFABQgJAAgIgGgEAhBAILIgygiQgKgHgCgMQgDgMAHgKQAHgLANgCQAMgCAKAHIAxAhQALAHACAMQADAMgHAKQgHALgMACIgHABQgIAAgIgFgEA+7AHRQgLgFgFgMQgEgLAFgMQALgaAKgbQAFgMALgFQALgGAMAFQAMAEAFAMQAFALgEALQgLAegMAcQgGALgLAFQgGACgFAAQgGAAgGgDgAe9GxIgxgkQgKgHgCgMQgCgMAHgLQAIgKAMgCQAMgBAKAHIAxAiQAKAIACAMQACAMgHAKQgHAKgMACIgGABQgJAAgIgFgAc8FUIgwgkQgKgHgCgNQgCgMAIgKQAHgKANgCQAMgCAKAIIAwAjQAKAIACAMQACAMgIAKQgHAKgNACIgEABQgKAAgIgGgEA/0AE7QgMgDgGgLQgHgKADgMIANg5QADgMAKgHQAKgHANADQAMACAHAKQAHALgDAMIgNA7QgDAMgLAHQgHAEgIAAIgIgBgAa1DwIgwgjQgKgIgCgMQgCgMAIgKQAHgKAMgCQANgCAKAHIAvAjQAKAHACAMQACANgHAKQgHAKgMACIgGAAQgJAAgIgFgEhAwADvQgNgIgBgMIAAgBQgDgKAIgMQACgEAIgFIAHgDIANgFIAzgPQAMgDALAGQAKAGAEAMQADAMgGALQgGAKgMAEIgwAOIgIADQgEACgFACIgIABQgIAAgHgFgEg+MADAQgLgGgDgMQgEgMAHgLQAGgLAMgDIA6gQQAMgDALAGQALAGADAMQADAMgGALQgGALgMADIg6AQIgIABQgIAAgHgEgEBAVACdQgNgBgHgKQgIgKABgMIAGg7QABgMAKgIQAJgIANABQAMABAIAKQAIAJgBANIgGA8QgCAMgJAIQgJAGgKAAIgDAAgEg7oACUQgLgGgDgMQgDgMAGgLQAHgKAMgEIA6gOQAMgEALAHQALAGADAMQADAMgHALQgGAKgMADIg6AQIgIABQgIAAgHgFgAYzCSIgxgjQgKgHgCgNQgCgMAHgKQAHgKANgCQAMgCAKAHIAxAjQAKAIACAMQACAMgHAKQgHAKgNACIgFAAQgJAAgIgFgEg5NABsQgKgGgDgMQgEgMAHgLQAGgKAMgDIA7gQQAMgDAKAHQALAGADAMQADAMgGALQgGAKgMAEIg7AOIgIACQgHAAgIgFgEg2xABEQgKgGgDgMQgEgMAHgLQAGgKAMgEIA7gNQAMgEAKAGQALAGADAMQADAMgGALQgGAKgMADIg7AQIgIABQgHAAgIgFgAWwA1IgygiQgKgHgCgMQgDgLAHgLQAHgKAMgCQAMgDALAHIAyAiQAKAHADAMQACANgHAKQgIAKgMACIgFAAQgJAAgIgFgEg0VAAdQgLgHgDgMQgDgKAGgLQAHgLAMgDIA6gPQAMgDALAGQALAHADAMQADAMgHAJQgGALgMADIg6APIgIABQgIAAgHgEgEgx5gAJQgLgHgDgMQgDgMAHgLQAGgKAMgDIA6gOQAMgDALAGQAKAHADAMQADAMgGAKQgHALgMADIg6AOIgHABQgIAAgHgEgEBAigAGQgMAAgJgJQgJgJAAgMQAAgdgCgcQgBgMAJgKQAIgJAMgBQAMgBAKAJQAJAIABAMQACAeAAAfQAAAMgJAJQgIAJgNAAIAAAAgAUrgkIgzgiQgKgGgDgMQgCgNAGgKQAHgLAMgCQAMgDALAHIAzAhQALAIACAMQADAMgHAKQgHALgNACIgGABQgIAAgIgFgEgvYgAuQgMgFgDgMQgEgMAFgLQAGgLAMgEIADgBIACgBIA0gMQAMgDALAHQALAHACAMQADAMgGAKQgHALgMADIgyAMIgCAAQgFACgFAAQgHAAgGgEgEgtDgBTQgLgGgDgNQgDgMAHgKQAHgLAMgDIA6gOQAMgDALAHQAKAGADAMQADAMgGALQgHALgMADIg6AOIgIABQgIAAgHgFgEgqogB4QgKgGgDgMQgDgMAHgLQAGgKAMgDIA7gOQAMgCALAGQAKAHADAMQADAMgHALQgHAKgMADIg6ANIgHABQgIAAgIgFgASjh8IgvgcQgMgEgFgLQgGgLAEgMQAEgMALgFQALgGAMAEIADABIAGADIAyAeQALAHADALQADANgHAKQgGALgMADIgIABQgIAAgHgFgEgoMgCcQgKgGgDgNQgDgMAHgKQAHgLAMgCIA6gNQAMgDAKAHQALAGACAMQADANgHAKQgGALgMACIg6ANIgHABQgIAAgIgFgEBADgCpQgKgHgCgMQgFgdgHgbQgDgMAGgLQAHgLAMgCQAMgEALAHQAKAGADAMQAIAeAFAfQACAMgHAKQgIAKgMACIgFAAQgJAAgIgFgEglxgC/QgKgGgDgNQgCgMAGgKQAHgLAMgCIA7gNQAMgDAKAHQALAGACANQADAMgHAKQgGALgMACIg7ANIgHABQgIAAgIgFgAQbjLIg0gcQgLgGgEgMQgEgMAGgKQAGgMAMgDQAMgEALAGIA1AdQALAGADALQAEAMgGALQgGALgMAEIgJABQgHAAgHgEgEgjVgDhQgKgHgDgMQgCgMAGgLQAHgKAMgDIA7gNQAMgCAKAGQALAHACAMQADAMgHAKQgGALgMADIg7ANIgHABQgIAAgIgFgEgg5gEDQgKgHgDgMQgCgMAGgLQAHgKAMgDIA7gNQAMgCALAHQAKAHACAMQADAMgHALQgHAKgMACIg6ANIgHABQgIAAgIgFgAOOkUIg1gZQgMgGgEgLQgEgMAFgLQAFgLAMgFQALgEAMAFIA3AaQALAGAEAMQAEAMgFALQgGALgMAEQgFACgFAAQgGAAgHgEgA+dklQgKgGgDgNQgCgMAHgKQAGgKANgDIA6gMQAMgCALAGQAKAHACAMQADANgHAKQgHAKgMADIg6AMIgHABQgIAAgIgGgEA/egE+QgLgFgFgLQgLgbgNgZQgGgMAEgLQAEgMALgGQALgFAMADQAMAEAFAMQAOAbAMAdQAFALgFAMQgEALgMAFQgGADgFAAQgGAAgGgDgA8BlFQgKgHgDgMQgCgMAHgLQAGgKANgCIA7gNQAMgCAKAHQALAHACAMQADAMgHAKQgHALgMADIg7ALIgHABQgIAAgIgFgAL9lWIg3gXQgMgEgFgMQgFgLAFgLQAEgMAMgFQALgFAMAEIA4AYQAMAFAEALQAFAMgFALQgFAMgLAEQgGADgFAAQgGAAgGgDgA5kllQgLgGgCgNQgDgMAHgKQAHgKAMgDIA7gMQAMgCALAGQAKAHADAMQACANgHAKQgHAKgMADIg7AMIgGABQgJAAgHgGgA3ImEQgKgHgCgMQgDgMAHgLQAHgKANgCIA7gLQAMgCAKAHQAKAHADAMQACAMgHALQgHAKgMACIg7ALIgGABQgJAAgIgGgAJomQIg4gUQgMgEgFgLQgGgLAEgMQAEgMALgFQALgGAMAEIA6AUQAMAFAFALQAFALgEAMQgFALgLAGQgGADgGAAQgFAAgGgCgA0rmhQgLgHgCgNQgCgMAHgKQAHgKAMgDIA8gLQAMgCAKAHQAKAHADANQACAMgHAKQgHAKgMADIg8ALIgGAAQgJAAgHgFgAyNm+QgLgHgCgNQgCgMAHgKQAHgKAMgDIA8gKQAMgCAKAHQAKAHACANQACAMgHAKQgHAKgMACIg7ALIgGAAQgJAAgHgFgAHRnCIg5gQQgMgDgGgLQgHgLAEgMQADgMALgGQALgGAMADIA6ARQAMADAGALQAGALgEAMQgDAMgLAGQgHAEgHAAIgJgCgEA+XgHJQgMgCgHgKQgQgXgTgWQgIgKABgMQABgMAKgIQAJgIANAAQAMACAIAJQAVAYARAaQAHAKgCAMQgCAMgKAHQgIAGgJAAIgGgBgAvxnbQgKgHgCgMQgCgMAHgLQAIgKAMgCIA7gJQAMgDAKAHQAKAIADAMQACAMgHAKQgIAKgMACIg7ALIgGAAQgJAAgIgGgAFCnoIg8gNQgMgCgHgLQgGgKACgMQADgMAKgHQALgHAMADIA8ANQAMACAHALQAHAKgDAMQgDAMgKAHQgIAFgIAAIgHgBgAtRn1QgKgHgCgMQgCgNAHgKQAHgKANgCIA8gKQAMgBAKAHQAKAHACANQACAMgHAKQgIAKgMACIg7AJIgGAAQgJAAgIgFgArEoMQgKgHgCgNQgCgMAIgKQAHgKANgCIA7gIQAMgCAKAIQAKAHACAMQABANgHAKQgIAKgMABIg6AJIgFAAQgKAAgIgGgACkoHIg7gJQgMgBgIgKQgHgKABgNQACgMAKgHQAKgIAMACIA9AJQAMACAHAKQAIAKgCAMQgCANgKAHQgIAFgKAAIgFAAgAomohQgKgIgBgMQgBgMAHgKQAIgKANgBIA8gFQAMgCAKAIQAJAJABAMQABAMgHAKQgIAJgNABIg7AGIgEAAQgKAAgIgHgAAGocIg6gFQgMAAgIgKQgJgJABgMQABgNAJgIQAKgIAMABIA8AFQAMABAIAJQAIAKgBANQgBAMgKAIQgIAGgKAAIgEAAgAmHotQgJgJgBgMQgBgMAJgKQAIgJANgBIA9gBQAMgBAJAJQAJAJAAAMQAAAMgIAJQgJAJgMAAIg7ADIgCAAQgLAAgJgIgAiXomIg8gCQgMAAgJgJQgJgJABgMQAAgMAJgJQAJgJAMABIA9ABQAMAAAIAJQAJAKAAAMQgBAMgJAJQgJAIgMAAIAAAAgEA8fgJFQgWgTgXgSQgKgIgCgMQgBgMAHgKQAIgKAMgCQANgBAJAHQAZATAXAUQAKAIABANQAAAMgIAKQgIAJgMABIgDAAQgLAAgIgHgEA6igKgQgZgOgagOQgLgGgEgMQgEgLAGgLQAGgLAMgEQALgEALAGQAcAOAaAQQALAGADAMQADAMgGALQgGAKgMADIgIACQgIAAgHgFgEA4WgLjQgagLgcgJQgMgEgGgLQgFgLAEgMQADgMAMgFQALgGALAEQAeAKAdALQALAFAFALQAFAMgFALQgEAMgMAFQgGACgFAAQgGAAgGgCgEA17gMVIg5gOQgMgCgHgLQgHgKADgMQACgNALgGQAKgHANADIA7AOQAMADAGALQAHAKgDANQgDALgLAHQgHAEgIAAIgIgBgEAzhgM2Ig7gIQgMgCgIgKQgHgKABgMQACgMAKgIQAKgHAMABIA9AKQAMACAHAKQAHAKgCAMQgCAMgKAIQgIAFgJAAIgFgBgEAxEgNJIg7gDQgMgBgJgJQgIgKABgMQAAgMAKgJQAJgIAMAAIA9AFQAMABAIAJQAIAKgBAMQgBAMgKAJQgIAHgLAAIgCgBgEArQgNTQgJgIgBgMQgBgNAIgJQAIgKAMgBIAlgDQAMAAAJAIQAJAIABANQABAMgJAKQgIAJgMABIgjACIgCAAQgLAAgJgHgEAumgNQIg7gBQgNABgJgJQgIgJAAgNQAAgMAIgJQAJgJANABIA8AAQAMAAAJAJQAIAJAAAMQAAANgJAJQgJAIgMAAIAAAAg");
	this.shape_28.setTransform(-333.0587,-87.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0099FF").s().p("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");
	this.shape_29.setTransform(-333.8306,-87.9373);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0099FF").s().p("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");
	this.shape_30.setTransform(-334.6,-87.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0099FF").s().p("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");
	this.shape_31.setTransform(-335.3498,-88);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0099FF").s().p("EAzVAOOIg9gCQgNAAgIgKQgJgJABgMQABgNAJgIQAJgIANAAIA7ACQAMABAJAIQAIAJAAANQAAAMgJAJQgJAIgMAAIAAAAgEA0lAOFQgJgIgBgNQgBgMAJgKQAIgJAMgBQAegCAdgDQAMgBAKAHQAJAIACAMQABAMgHAKQgIAKgMABQgfAEgfACIgCAAQgLAAgJgHgEAwyAODIg9gIQgMgBgHgKQgIgLACgMQACgMAKgHQAKgIAMACIA7AIQAMABAIAKQAHAKgBAMQgCANgJAHQgJAHgKAAIgDgBgEA3DANzQgKgHgDgMQgCgMAHgLQAGgKANgDQAcgGAagHQAMgDALAGQALAGADAMQADAMgGALQgGALgMADQgcAIgeAGIgHABQgIAAgIgFgEAuWANqIg9gNQgMgDgGgLQgHgKADgMQADgMAKgHQALgGAMACIA7ANQAMADAHAKQAHALgCAMQgDAMgKAHQgIAFgJAAIgGgBgEA5eANJQgLgFgFgMQgEgLAFgMQAFgLALgFQAbgKAZgNQAMgFALAEQAMAEAGALQAFALgEAMQgEAMgLAFQgcAOgdALQgFACgGAAQgGAAgGgCgEAr4ANEIg7gSQgMgEgFgLQgGgLADgLQAEgMALgGQALgGAMADIA6ASQALAEAGAKQAGALgDAMQgEAMgLAGQgHAEgHAAIgIgBgEApdAMRIg5gVQgMgFgFgLQgFgMAFgLQAEgMAMgFQALgFAMAFIA3AVQAMAEAFAMQAGALgFALQgEAMgLAFQgHADgGAAQgFAAgFgCgEA7xAMBQgNgDgGgKQgHgLACgMQADgMAKgHQAYgQAXgSQAKgIAMACQAMABAIAJQAIAKgCAMQgBANgKAIQgYATgbASQgHAFgJAAIgGAAgEAnGALVIg4gaQgLgFgEgMQgEgLAFgMQAFgLAMgEQAMgEALAFIA2AZQALAFAFALQAFAMgFALQgFAMgMAEQgFACgGAAQgGAAgGgCgEAk9AKTIg2geQgLgGgDgMQgDgMAGgLQAGgKAMgEQAMgDALAGIA0AdQALAGAEAMQADAMgGALQgGALgLADIgJACQgHAAgHgEgEA9cAKPQgJgJgBgMQAAgMAIgKIAUgXIAPgTQAIgKAMgCQAMgBAKAHQAKAIACAMQACAMgIAKIgQAVIAAABIgXAZQgIAJgNABIgBAAQgMAAgIgIgEAiyAJBIgzggQgKgHgDgMQgCgMAHgLQAGgKAMgDQANgCAKAHIAyAfQAKAHADAMQADAMgHALQgHAKgMADIgHABQgIAAgHgFgEA++AISQgLgGgEgMQgDgLAGgLQAOgZAMgbQAFgLALgFQAMgEALAFQAMAFAEAMQAFALgFALQgNAegQAbQgGALgMADIgIABQgIAAgGgEgEAgsAHpIgxghQgLgIgCgMQgCgMAHgKQAHgKAMgDQAMgCALAHIAxAiQAKAHADAMQACAMgHALQgHAKgMACIgGABQgJAAgIgGgAepGOIgwgjQgKgHgCgNQgCgMAHgKQAIgKAMgCQAMgCAKAHIAwAkQAKAHACAMQACAMgHAKQgHAKgNACIgFABQgJAAgIgGgEBACAGBQgMgEgGgLQgFgLAEgMQAIgbAIgcQADgMAKgHQALgGAMADQAMADAGALQAHALgDAMQgIAegJAdQgEALgLAGQgHADgHAAQgEAAgFgBgAcpEwIgMgJIgrgfQgKgHgCgNQgBgMAHgKQAHgKANgCQAMgCAKAHIArAgIAMAJQAKAIABAMQACAMgHAKQgIAKgMACIgFAAQgJAAgIgGgEhBNAEEQgOgIAAgMIgBgBQgDgKAJgNQABgEAIgEIAHgDIAOgFIAygPQAMgDALAGQALAGADAMQAEALgGALQgGALgMADIgxAPIgIADQgEACgFABIgHABQgIAAgHgEgEBArADoQgMgCgIgLQgHgKACgMIAIg7QABgMAKgIQAKgHAMABQAMABAIAKQAIAKgCAMIgIA9QgCANgKAHQgIAGgJAAIgFAAgEg+pADUQgLgGgDgMQgEgMAHgLQAGgKAMgEIA7gQQAMgDALAGQALAHADALQADAMgGALQgGALgMADIg7AQIgIABQgIAAgHgEgAaiDOIgxgkQgKgHgCgMQgCgNAHgKQAIgKAMgCQAMgCAKAHIAxAkQAKAHACANQACAMgHAKQgHAKgNACIgFAAQgJAAgIgFgEg8GACoQgLgGgDgMQgDgMAGgLQAHgLAMgDIA6gPQAMgDALAGQAKAGAEAMQADAMgGALQgHALgMADIg6APIgIABQgIAAgHgEgEg5rAB/QgKgGgDgMQgEgMAHgLQAGgLAMgDIA7gPQAMgDAKAHQALAGADAMQADAMgGAKQgGALgMADIg7APIgIABQgHAAgIgEgAYgBvIgxgiQgKgIgCgMQgDgMAIgKQAHgKAMgCQAMgCAKAHIAyAjQAKAHACAMQACANgIAKQgHAKgMACIgFAAQgKAAgHgGgEg3OABXQgLgGgDgMQgDgMAGgLQAHgLAMgDIA6gPQAMgDALAGQALAHADAMQADAMgHALQgGAKgMADIg6APIgIABQgIAAgHgEgEBA9ABIQgMgBgJgJQgIgKABgMIAAgQIAAgBIABgtQAAgMAIgJQAJgJANAAQAMAAAJAJQAJAJAAAMIgBAuIAAABIAAATQgBAMgJAIQgJAIgLAAIgCAAgEg0zAAwQgKgGgDgMQgEgMAHgLQAGgKAMgDIA7gPQAMgDALAGQALAHADALQADAMgHAKQgGALgMADIg7APIgIABQgHAAgIgEgAWcATIgyghQgKgHgDgMQgCgMAHgKQAHgLAMgCQAMgDAKAHIAzAiQAKAHADANQACALgHAKQgHAKgMADIgGAAQgJAAgIgFgEgyWAAJQgLgHgDgLQgDgMAHgKQAGgLAMgDIA6gOQAMgDALAHQAKAGADAMQADAMgGALQgHAKgMAEIg6AMIgHABQgIAAgHgEgEgv4gAdQgLgHgDgMQgDgMAHgKQAGgLAMgDIAigIIgBAAIAYgGQAMgDALAGQALAHADAMQADAMgHAKQgGALgMADIgYAGIgBAAIghAIIgHABQgIAAgHgEgEgtegBCQgLgHgDgMQgDgMAHgKQAGgLAMgDIA6gOQAMgDALAHQAKAGADAMQADAMgGALQgHAKgMADIg6AOIgHABQgIAAgHgEgAUVhGIgzggQgKgHgDgMQgDgMAHgLQAGgKAMgDQAMgDALAHIA0AgQAKAHADAMQADAMgHALQgHAKgMADIgHABQgIAAgIgFgEBAogBiQgKgHgBgNQgDgdgFgcQgCgMAIgLQAHgJANgCQAMgCAKAHQAKAHACANQAEAdADAfQACANgIAJQgIAKgMABIgEAAQgKAAgIgHgEgrEgBnQgLgHgDgMQgDgMAHgKQAHgLAMgDIA6gOQAMgDAKAHQALAGADAMQADAMgHALQgGAKgMADIg6APIgHAAQgJAAgHgEgEgoqgCMQgLgHgCgMQgDgMAHgKQAHgLAMgDIA6gMQAMgDALAGQAKAHADAMQADAMgHALQgHAKgMADIg6ANIgHABQgJAAgHgFgASOiZIgzgeQgLgGgEgMQgDgMAGgLQAGgLAMgDQAMgDALAGIA0AeQALAGADAMQADAMgGALQgHALgMADIgHABQgIAAgHgEgEgmOgCvQgLgHgCgMQgDgMAHgKQAHgLAMgDIA6gNQAMgCALAGQAKAHADAMQADAMgHALQgHAKgMADIg6ANIgHABQgJAAgHgFgEgjygDRQgLgHgCgMQgDgMAHgLQAHgKAMgDIA6gNQAMgDALAHQAKAHADAMQADAMgHAKQgHALgMADIg6AMIgHABQgJAAgHgEgAQDjnIg1gbQgLgGgEgLQgEgMAFgLQAGgLAMgEQALgEAMAFIA2AcQALAGAEAMQADAMgFALQgGALgMADQgFACgEAAQgHAAgHgEgEghWgD0QgLgHgCgMQgDgMAHgLQAHgKAMgCIA6gOQAMgCALAHQAKAGADAMQADAMgHALQgHAKgMADIg6ANIgHABQgJAAgHgFgEBAPgD6QgLgGgDgMQgIgcgJgbQgEgLAFgMQAFgLAMgEQAMgEALAFQALAFAEAMQALAdAIAeQADAMgGALQgGAKgMAEIgIABQgIAAgHgEgA+6kWQgLgHgCgMQgDgMAHgLQAHgKAMgDIA7gMQAMgDAKAHQAKAHADAMQACAMgGALQgHAKgMADIg6AMIgHABQgJAAgHgFgAN0kuIg2gYQgMgFgEgLQgFgMAFgLQAFgMAMgEQALgFAMAFIA3AZQALAFAFAMQAEALgFAMQgFALgMAEQgFACgGAAQgGAAgGgDgA8ek3QgLgHgCgMQgDgMAHgLQAHgKAMgDIA7gMQAMgCALAHQAKAHADAMQACAMgHAKQgHALgMACIg7AMIgGABQgJAAgHgFgA6ClXQgKgHgDgMQgCgMAHgLQAGgKANgDIA6gMQAMgCALAHQAKAHACAMQADAMgHAKQgHALgMACIg6AMIgHABQgIAAgIgFgALiltIg3gVQgMgFgFgLQgFgLAEgMQAEgLAMgFQALgGAMAFIA5AWQALAFAFALQAFAMgFALQgFAMgLAEQgGADgGAAQgGAAgFgDgA3ml3QgKgHgDgMQgCgMAHgKQAGgLANgCIA7gMQAMgCALAHQAKAHACAMQACAMgHALQgHAKgMACIg6AMIgHAAQgIAAgIgFgEA/bgGLQgMgDgGgLQgNgagQgYQgGgKACgMQADgMAKgHQALgHAMADQAMADAHAKQARAaAOAcQAGALgEAMQgDALgLAGQgHAEgHAAIgJgCgA1JmVQgLgHgCgMQgCgMAHgLQAHgKAMgCIA7gLQAMgDALAHQAKAIACAMQACAMgHAKQgHAKgMADIg7ALIgGAAQgJAAgHgFgAJNmkIg6gSQgMgEgFgLQgGgLADgMQAEgLALgGQALgGAMAEIA6ASQAMAEAGALQAFALgDAMQgEAMgLAFQgHAEgHAAQgEAAgFgCgAysmyQgKgHgCgMQgDgMAHgLQAHgKANgCIA7gLQAMgDAKAHQAKAIADAMQACAMgHAKQgHAKgMADIg7ALIgGAAQgJAAgIgFgAwPnPQgKgHgCgMQgCgMAHgKQAHgLANgCIA7gKQAMgCAKAHQAKAIACAMQACAMgHAKQgHAKgMACIg7AKIgGABQgJAAgIgGgAGznSIg5gPQgMgDgGgKQgHgLADgMQADgMALgGQAKgHAMADIA7APQAMAEAGAKQAGALgDAMQgDAMgLAGQgHAEgIAAIgIgBgAtxnqQgKgHgCgMQgCgNAHgKQAHgKANgCIA8gKQAMgCAKAHQAKAIACAMQACAMgHAKQgHAKgMACIg8AKIgGABQgJAAgIgGgAEin0Ig8gMQgMgCgHgKQgHgLACgMQACgMALgHQAKgHAMACIA9AMQAMACAHALQAHAKgDAMQgCAMgLAHQgIAFgIAAIgGAAgArRoDQgKgIgCgMQgCgMAHgKQAHgKAMgCIAXgEIABAAIASgDQAMgCAKAHQAKAHACAMQACANgHAKQgHAKgMACIgSADIgYAEIgFAAQgJAAgIgFgEA+LgIMQgNAAgJgIIgEgFIgBgBQgSgUgTgTQgJgJAAgMQAAgMAJgJQAIgJANAAQAMAAAJAIQAUAUATAVIAEAEQAJAJAAAMQAAANgJAJQgJAIgMAAIAAAAgACDoQIg7gHQgNgBgHgKQgIgKABgMQACgNAKgHQAJgIANACIA8AHQAMACAIAJQAHAKgBANQgCAMgKAIQgIAGgKAAIgEgBgApGoZQgKgHgCgNQgBgMAIgKQAHgKANgBIA8gGQAMgCAKAIQAJAIABAMQACANgIAJQgIAKgMABIg7AGIgEABQgKAAgIgHgAgaogIg8gDQgMgBgJgJQgIgJABgNQAAgMAKgJQAJgIAMABIA9ADQAMABAIAJQAHAKAAAMQgBANgJAIQgIAHgLAAIgCAAgAmpooQgJgIgBgNQgBgMAJgJQAIgKAMgBIA9gDQAMgBAJAIQAJAJABAMQABANgJAJQgIAJgMABIg8ADIgCAAQgLAAgJgHgAi5omIg7gBQgNAAgJgIQgIgJAAgNQAAgMAIgJQAJgJANAAIA8ABQAMAAAJAJQAJAJAAAMQgBANgJAIQgIAJgMAAIgBAAgEA8BgJ/QgXgRgYgQQgLgGgDgNQgCgMAGgKQAHgLAMgDQAMgCALAGQAaARAZASQAKAHACANQACAMgIAKQgHAKgMACIgFAAQgKAAgIgFgEA59gLPQgagMgbgMQgMgFgEgMQgFgLAFgMQAFgLALgFQAMgEALAFQAdAMAbANQALAGAEALQAEAMgFALQgFAMgMADQgFACgFAAQgHAAgGgDgEA3sgMJIghgKIAAAAIgZgHQgMgDgGgLQgHgLAEgLQADgMALgHQAKgGAMADIAaAHIAAAAIAkALQAMAEAFALQAGALgEAMQgEAMgLAFQgGAEgHAAQgFAAgFgCgEA1SgMwQgdgGgdgFQgMgBgHgKQgIgLACgMQACgMAKgHQAKgIAMACQAfAFAeAGQAMACAHALQAGAKgCAMQgDAMgKAHQgIAFgIAAIgGAAgEAy2gNHIg8gFQgMgBgIgKQgIgJABgNQABgMAJgIQAKgIAMABIA9AFQAMACAIAJQAIAKgCAMQgBANgJAHQgJAHgKAAIgDAAgEAszgNTQgJgIgBgMQgBgNAIgJQAIgKAMgBIA1gDQAMAAAKAIQAJAJAAAMQABANgJAJQgIAJgNAAIgyADIgCAAQgLAAgJgHgEAwXgNRIg6AAQgMAAgJgJQgJgJAAgMQAAgNAJgIQAJgJAMAAIA7AAQAMABAJAIQAJAJAAANQgBAMgJAJQgIAIgMAAIgBAAg");
	this.shape_32.setTransform(-336.1087,-88.0248);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0099FF").s().p("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");
	this.shape_33.setTransform(-336.8594,-88.0498);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0099FF").s().p("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");
	this.shape_34.setTransform(-337.6337,-88.0744);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0099FF").s().p("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");
	this.shape_35.setTransform(-338.3831,-88.0998);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0099FF").s().p("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");
	this.shape_36.setTransform(-339.1586,-88.0998);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0099FF").s().p("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");
	this.shape_37.setTransform(-339.9011,-88.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},26).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_26}]},38).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).wait(27));

	// Layer_3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0099FF").s().p("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");
	this.shape_38.setTransform(-331.5766,-87.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0099FF").s().p("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");
	this.shape_39.setTransform(-332.3836,-87.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0099FF").s().p("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");
	this.shape_40.setTransform(-333.2306,-87.8913);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0099FF").s().p("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");
	this.shape_41.setTransform(-334.075,-87.9123);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0099FF").s().p("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");
	this.shape_42.setTransform(-334.9,-87.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0099FF").s().p("EAybAONQgMgBgJgJQgIgJABgNQAAgMAKgIQAJgJAMABIA6ABQANAAAIAJQAJAJAAAMQAAANgJAJQgIAIgNAAIAAAAQgeAAgfgBgEA0oAOEQgJgIgBgNQgBgMAJgJQAIgKAMgBQAegCAcgEQANgBAJAIQAKAHACAMQACANgIAJQgIAKgMACQgeAEggACIgCAAQgLAAgJgHgEAw1AOEIg8gIQgMgCgHgKQgIgKACgMQACgMAKgIQAKgHAMABIA6AJQANABAHAKQAIAKgCAMQgBAMgKAIQgIAGgKAAIgEAAgEA3HANwQgKgGgDgMQgDgMAHgLQAHgKAMgDQAcgGAbgIQAMgDALAFQALAHADALQAEAMgGALQgGALgMADQgdAJgeAHIgHAAQgIAAgIgFgEAuWANrIg6gNQgMgDgGgKQgHgLADgMQADgMAKgHQALgGAMADIA4AMQAMADAHAKQAHAKgDAMQgCANgLAGQgHAFgJAAIgGAAgEA5jANEQgLgEgFgMQgFgLAFgMQAFgLALgFQAbgLAagNQALgGALAEQAMAEAGALQAGALgEAMQgEAMgLAGQgcAOgdALQgGADgFAAQgGAAgGgDgEAr8ANFIg7gRQgMgEgFgLQgGgLADgMQAEgLALgGQALgGAMADIA5ARQAMAEAGALQAGAKgDAMQgDAMgLAGQgHAEgIAAIgIgBgEAphAMTIg6gVQgLgEgFgMQgFgLAEgMQAFgLALgFQAMgFALAEIA4AVQAMAEAFALQAGAMgFALQgEAMgLAFQgGADgHAAQgFAAgFgCgEA72AL6QgMgCgHgLQgHgKACgMQACgMAKgIQAYgQAVgSQAJgIANACQAMABAIAJQAIAJgBANQgBAMgKAIQgXAUgaASQgHAFgJAAIgGAAgEAnKALYIg4gaQgLgFgFgMQgEgLAGgMQAFgLAMgEQALgEALAFIA3AZQALAFAFALQAEAMgFALQgFAMgLAEQgGACgFAAQgGAAgGgCgEAk+AKVIg1gdQgLgHgDgLQgEgMAHgLQAGgLAMgDQAMgDALAGIAzAcQALAGAEAMQADALgFAMQgGALgMADIgJACQgHAAgHgEgEA9cAKKQgJgJgBgMQAAgMAIgKIAPgSIAAAAIAVgbQAHgKAMgCQANgCAKAHQAKAIACAMQACAMgIAKIgWAdIAAABIgSAUQgIAKgMAAIgCAAQgLAAgJgHgEAizAJEIgzggQgKgHgDgMQgCgMAHgKQAGgLAMgDQANgCAKAHIAyAfQAKAHADAMQADAMgHALQgGAKgNADIgHABQgIAAgHgFgEA+9AIJQgKgGgEgMQgEgMAGgKQAOgaAMgbQAFgLALgEQAMgFALAFQAMAGAEALQAFAMgFALQgNAdgPAbQgGALgMAEIgJABQgHAAgHgEgEAguAHsIgygiQgKgHgCgMQgDgMAHgKQAIgKAMgDQAMgCAKAHIAyAiQAKAHACAMQADAMgIALQgHAKgMACIgGABQgJAAgHgGgAerGRIgxgjQgKgHgCgNQgBgMAHgKQAHgKANgCQAMgCAKAIIAwAjQAKAHACAMQACAMgIAKQgHAKgMACIgFABQgJAAgIgGgEBAAAF3QgMgEgFgLQgGgLAEgMQAIgbAIgdQADgNAKgGQALgGAMADQAMADAGALQAHAKgDAMQgIAfgJAdQgEAMgLAGQgHADgHAAIgJgBgAcrE0IgSgNIAAAAIgigZQgKgHgCgNQgCgMAHgKQAIgKAMgCQAMgCAKAHIAiAaIAAAAIASAMQAKAIACAMQACAMgHAKQgHAKgNACIgFABQgJAAgIgGgEhBKAEBQgNgIgBgMIAAgBQgDgKAIgMIAAAAQACgEAIgFIAHgDIANgFIAygOQAMgEALAGQALAGADAMQAEAMgGALQgGALgMADIgwAPIgJACIgIAEIgIABQgIAAgHgFgEBAoADcQgMgCgIgKQgHgKACgMQAEgdADgeQACgMAJgIQAKgIAMACQANABAHAJQAIAKgBAMQgDAggFAeQgBAMgLAHQgIAGgJAAIgFAAgAamDTIgxgkQgKgHgCgMQgCgNAHgKQAIgKAMgCQAMgCAKAIIAxAjQAKAHACANQACAMgHAKQgHAKgNACIgFAAQgJAAgIgFgEg+mADSQgLgGgDgMQgEgMAHgLQAGgLAMgDIA7gQQAMgDALAGQALAGADAMQADAMgGALQgGALgMADIg7AQIgIABQgIAAgHgEgEg8EACmQgKgHgDgMQgDgMAGgLQAGgKAMgDIA7gPQAMgDAKAGQALAGADAMQADAMgGALQgGALgMADIg7APIgHABQgIAAgIgEgEg5oAB9QgLgGgDgMQgDgMAGgLQAHgLAMgDIA6gPQAMgDALAGQALAHADAMQADAMgHALQgGAKgMADIg6APIgIABQgIAAgHgEgAYjB0IgxgiQgKgIgCgMQgCgMAHgKQAHgLAMgCQAMgCAKAHIAyAjQAKAIACAMQACAMgHAKQgHAKgNACIgFABQgJAAgIgGgEg3MABVQgKgGgDgMQgDgMAGgLQAGgLAMgDIA7gPQAMgDAKAHQALAGADAMQADAMgGAKQgGALgMADIg7APIgHABQgIAAgIgEgEBA7AA8QgMAAgJgJQgJgIAAgNIAAgHIAAgBIABg1QAAgNAIgIQAJgJAMgBQANAAAIAJQAJAIABANQAAAcgBAbIAAAHQAAANgJAIQgIAJgNAAIAAAAgEg0wAAuQgLgHgDgMQgDgMAGgLQAHgJAMgDIA7gPQAMgDAKAGQALAGADAMQADALgGALQgGALgMADIg7APIgIABQgIAAgHgEgAWfAYIgyghQgKgHgCgMQgDgMAHgKQAHgLAMgCQANgDAKAHIAyAjQAKAHADAMQACALgHAKQgHAKgMADIgGAAQgJAAgIgFgEgyUAAGQgKgGgEgLQgCgMAGgLQAHgKAMgEIA6gNQAMgDAKAGQALAHADAMQADAMgHAKQgGALgMADIg6ANIgHABQgIAAgIgFgEgv3gAfQgKgGgDgMQgDgMAGgLQAGgKAMgDIAggIIAAAAIAbgHQAMgDALAGQALAGADAMQADAMgHALQgGALgMADIgbAHIAAAAIggAIIgIABQgHAAgIgFgAUZhBIg0giQgKgGgDgMQgDgMAHgLQAHgKAMgDQAMgDAKAHIA0AiQALAGACANQADAMgHAKQgGAKgNADIgGABQgJAAgHgFgEgtbgBFQgKgGgEgMQgCgMAGgLQAHgKAMgDIA6gPQAMgCAKAGQALAHADAMQADAMgHAKQgGALgMADIg6AOIgHABQgIAAgIgFgEBAjgBsQgKgHgBgNQgDgdgFgbQgCgMAHgLQAHgKAMgCQANgCAKAHQAKAHACANQAFAdADAfQACANgIAJQgIAKgMABIgEAAQgKAAgIgHgEgrAgBqQgLgGgDgMQgDgMAHgLQAGgKAMgDIA6gPQAMgCALAGQAKAHADAMQADAMgGAKQgHALgMADIg6AOIgHABQgIAAgHgFgEgomgCOQgKgHgDgMQgDgMAHgLQAHgKAMgDIA6gNQAMgDALAHQAKAHADAMQADAMgHAKQgHALgMADIg6AMIgHABQgIAAgIgEgASQiXIgCgBIgCgBIgugaQgKgGgEgMQgDgMAGgLQAGgLAMgDQAMgDALAGIAtAaIACABQALAFAEAMQAEAMgGALQgGALgLAEQgFABgFAAQgHAAgGgDgEgmLgCxQgKgHgDgMQgDgMAHgLQAHgKAMgDIA6gNQAMgDALAHQAKAHADAMQADAMgHAKQgHALgMADIg6AMIgHABQgIAAgIgEgEgjvgDUQgKgHgDgMQgDgMAHgLQAHgKAMgCIA6gOQAMgCALAHQAKAGADAMQADAMgHALQgHAKgMADIg6ANIgHABQgIAAgIgFgAQGjjIg1gcQgLgGgEgLQgEgMAFgLQAGgLAMgEQAMgEALAFIA2AdQALAGAEALQAEAMgGALQgGALgMAEIgJABQgHAAgHgDgEghTgD3QgKgGgDgMQgDgMAHgLQAHgKAMgDIA7gNQAMgCAKAHQALAHACAMQADAMgHAKQgHALgMACIg6AMIgHABQgIAAgIgFgEBAJgEDQgLgGgEgMQgIgcgKgaQgEgMAFgMQAFgLALgEQAMgFALAFQAMAGAEALQALAdAJAeQADAMgGAKQgFALgMAEIgJABQgHAAgHgDgA+3kYQgLgHgCgMQgDgMAHgLQAHgKAMgDIA7gMQAMgCAKAHQALAHACAMQADAMgHAKQgHALgMACIg7AMIgGABQgJAAgHgFgAN3krIg2gZQgLgFgFgLQgEgMAFgLQAFgMALgEQAMgFALAFIA4AaQALAFAEAMQAFALgGAMQgFALgMAEQgFACgFAAQgGAAgHgDgA8bk5QgLgHgCgMQgDgMAHgKQAHgLAMgCIA7gMQAMgDALAHQAKAHADAMQACAMgHALQgHAKgMADIg7AMIgGAAQgJAAgHgFgA5/lZQgKgHgDgMQgCgMAHgKQAHgLAMgCIA6gMQAMgDALAHQAKAHACAMQADAMgHALQgHAKgMADIg6AMIgGAAQgJAAgIgFgALllrIg3gVQgLgFgGgLQgFgLAFgMQAEgLALgFQAMgGALAFIA5AWQAMAFAEALQAFAMgFALQgEAMgMAEQgGADgFAAQgGAAgGgDgA3il4QgKgHgDgMQgCgMAHgLQAHgKAMgDIA7gLQAMgDALAIQAKAHACAMQADAMgIAKQgHAKgMADIg6ALIgGABQgJAAgIgFgA1FmXQgLgHgCgMQgCgMAHgKQAHgKAMgDIA7gLQAMgCALAHQAKAHACAMQADAMgIALQgHAKgMACIg7ALIgGABQgIAAgIgGgEA/SgGUQgMgDgGgLQgOgZgQgXQgHgLADgMQACgMAKgHQALgHAMACQAMADAHAKQARAaAPAbQAGALgDALQgDAMgLAGQgHAEgHAAIgJgBgAJQmiIg5gTQgMgEgFgLQgGgKAEgMQADgMALgGQALgFAMADIA6AUQAMAEAGALQAFALgEAMQgEALgLAGQgHADgGAAQgFAAgFgCgAynm0QgLgHgCgMQgCgMAHgLQAHgKAMgCIA8gLQAMgDAKAHQAKAIADAMQACAMgHAKQgHAKgMADIg8ALIgGAAQgJAAgHgFgAwKnRQgKgHgCgMQgCgMAHgLQAHgKAMgCIA7gKQAMgCAKAHQAKAHACAMQACANgHAKQgHAKgMACIg7AKIgFABQgJAAgIgGgAG3nQIg5gPQgMgDgGgLQgHgKADgMQADgMALgHQAKgGAMADIA7APQAMADAGALQAGALgDAMQgDAMgLAGQgHAEgIAAIgIgBgAtvnrQgKgIgCgMQgCgMAHgKQAIgKAMgCIA8gKQANgCAKAHQAKAHACAMQACANgIAKQgHAKgMACIg9AKIgFAAQgJAAgIgFgAElnzIg7gMQgMgCgHgKQgHgLACgMQACgMALgHQAKgHAMACIA9AMQAMADAGALQAHAKgDAMQgCAMgLAHQgHAFgIAAIgHgBgArPoFQgKgHgCgMQgCgMAHgLQAHgKAMgCIARgDIABAAIAagEQAMgCAKAIQALAHABAMQACAMgHAKQgIALgMACIgaADIABAAIgRADIgGABQgJAAgIgGgACHoOIg7gIQgNgBgHgKQgIgKABgMQACgNAKgHQAJgIANABIA8AIQAMACAIAKQAIAJgCANQgCAMgKAHQgIAHgKAAIgEAAgApBoaQgKgHgCgNQgBgMAIgKQAHgKANgBIA8gHQAMgBAKAIQAJAIABAMQACANgIAJQgIAKgMABIg7AGIgEABQgKAAgIgHgEA99gIUQgMgBgJgJQgTgVgVgUQgJgIAAgNQgBgMAJgJQAIgJANgBQAMAAAJAIQAXAWAVAXQAIAJAAAMQgBANgJAIQgJAIgLAAIgCAAgAgXofIg7gEQgMgBgJgJQgIgJABgNQAAgMAKgIQAJgJAMABIA9AEQANABAHAKQAIAJgCAMQgBANgIAIQgIAHgLAAIgDAAgAmkopQgJgIgBgNQgBgMAJgKQAIgJAMgBIA9gDQANAAAJAJQAJAIAAAMQABANgJAJQgIAJgNAAIg7ADIgCAAQgLAAgJgHgAi0onIg8AAQgMAAgJgJQgJgJAAgMQAAgNAJgJQAJgIAMAAIA9AAQAMABAJAJQAIAIAAANQAAAMgJAJQgJAIgMAAIAAAAgEA71gKEQgXgRgZgPQgKgHgDgMQgDgMAHgKQAGgLAMgDQAMgDALAHQAbAQAZASQAKAIACAMQACAMgIAKQgHAKgMACIgFABQgKAAgIgGgEA5xgLSIg3gXQgLgFgFgLQgFgMAFgMQAFgLALgFQALgFAMAFQAdAMAcAMQALAGAEALQAFAMgGALQgFAMgMAEQgFACgFAAQgGAAgGgDgEA3fgMKIgbgIIAAgBIgigJQgMgDgGgLQgGgKADgMQADgMAKgGQALgHAMADIAkAKIgBAAIAeAJQAMAEAFAKQAGAMgEAMQgEALgLAGQgGADgHAAQgFAAgFgBgEA1DgMxIg6gKQgMgCgIgKQgHgKABgMQACgMAKgIQALgHAMACIA8AKQAMACAHAKQAHALgCAMQgDAMgKAHQgIAFgIAAIgGAAgEAymgNIIg7gEQgMgBgIgKQgJgJABgMQABgNAJgIQAKgIAMABIA9AFQANABAHAKQAIAJgBANQgBAMgKAIQgIAHgKAAIgEgBgEAsmgNUQgJgIgBgMQgBgNAJgJQAIgJAMgBIAvgDQANAAAJAIQAJAJABAMQAAAMgIAJQgJAKgMAAIguADIgCAAQgLAAgJgIgEAwHgNRIg7AAQgMAAgJgJQgJgJAAgMQAAgNAJgJQAJgIAMAAIA8AAQANABAIAIQAJAJAAANQgBAMgJAJQgIAIgMAAIgBAAg");
	this.shape_43.setTransform(-335.722,-87.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0099FF").s().p("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");
	this.shape_44.setTransform(-336.5586,-87.9998);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0099FF").s().p("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");
	this.shape_45.setTransform(-337.4087,-88.0744);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0099FF").s().p("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");
	this.shape_46.setTransform(-338.2336,-88.0998);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0099FF").s().p("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");
	this.shape_47.setTransform(-339.0586,-88.0999);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0099FF").s().p("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");
	this.shape_48.setTransform(-339.9011,-88.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},38).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).wait(66));

	// Layer_4
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(-58.1,-175.25,1.8885,1.8885);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:-0.3,regY:-0.1,scaleX:7.2222,scaleY:7.2222,x:-746.7,y:-67.3},48).wait(1).to({regX:0,regY:0,scaleX:1.8885,scaleY:1.8885,x:-58.1,y:-175.25},0).to({regX:-0.3,regY:-0.1,scaleX:7.2222,scaleY:7.2222,x:-746.7,y:-67.3},36).wait(1).to({regX:0,regY:0,scaleX:1.8885,scaleY:1.8885,x:-58.1,y:-175.25},0).to({regX:-0.3,regY:-0.1,scaleX:7.2222,scaleY:7.2222,x:-746.7,y:-67.3},26).wait(1).to({regX:0,regY:0,scaleX:1.8885,scaleY:1.8885,x:-58.1,y:-175.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-804.4,-191.1,1181.5,218.2);


(lib.blower = function(mode,startPosition,loop,reversed) {
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
	this.blower3 = new lib.blower1();
	this.blower3.name = "blower3";
	this.blower3.setTransform(-26.65,-63.55,0.357,0.414,0,-8.5784,-25.0841,0,-95.5);

	this.blower4 = new lib.blower1();
	this.blower4.name = "blower4";
	this.blower4.setTransform(-51.95,-72.55,0.357,0.414,0,-8.5784,-25.0841,0,-95.5);

	this.blower1 = new lib.blower1();
	this.blower1.name = "blower1";
	this.blower1.setTransform(54.3,2.25,0.357,0.414,0,-8.5784,-25.0841);

	this.blower2 = new lib.blower1();
	this.blower2.name = "blower2";
	this.blower2.setTransform(11.2,-48.2,0.357,0.414,0,-8.5784,-25.0841,0,-95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blower2},{t:this.blower1},{t:this.blower4},{t:this.blower3}]}).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-75,-106);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjbhRIG2Cj");
	this.shape.setTransform(30.9,-72.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blower, new cjs.Rectangle(-77.7,-110.7,154.7,111.7), null);


(lib.aliran7_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3_copy_7
	this.instance = new lib.salju();
	this.instance.setTransform(257.9,44.2,0.657,0.657,-175.4975,0,0,-0.1,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:-12.2,scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[257.9,44.2,258,29.7,258.1,13.8,258.1,13.7,128.5,-38.6,63.7,-64.7,31.4,-77.9,-1,-91,-1,-91.1,-4.1,-92.4,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.6,-14.2,-72.7,-12.2,-66.7,-2.8,-63.3,5.1,-60.4,101.7,-21.6,148.7,-2.7,172.2,6.7,195.7,16.1,195.7,16,195.9,15.8,198.5,16.7,201.7,17.8,204.3,19.6,212.5,25.3,210.6,35.3,208.7,45.3,201.8,46.7,199.6,47.2,197.2,46.7,196.2,46.5,195.8,46.3,195.3,46.2,195.3,46,195.4,46,171.4,36.1,147.5,26.2,99.5,6.4,51.5,-13.3,27.5,-23.2,3.5,-33.1,3.5,-33.2,-0.6,-34.8,-4.9,-34.8,-13.6,-34.8,-14.3,-27.6,-15.1,-20.5,-7.7,-13.3,-4.8,-10.4,-1.8,-8.4]}},174).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({scaleX:0.6562,scaleY:0.6562,rotation:7348.4134,guide:{path:[257,174.4,257.3,139.1,257.9,49.4]}},24).wait(1));

	// Layer_3_copy_6
	this.instance_1 = new lib.salju();
	this.instance_1.setTransform(162,-25.15,0.6568,0.6568,9.0072,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[162,-25.1,146.6,-31.3,128.6,-38.6,63.8,-64.7,31.4,-77.9,-1,-91,-0.9,-91.1,-4,-92.4,-7.3,-92.2,-13.9,-92,-14.4,-85.7,-15.1,-75.6,-14.1,-72.7,-12.1,-66.7,-2.8,-63.3,5.1,-60.4,101.7,-21.6,195.7,16.1,195.8,16,196,15.8,198.6,16.7,201.8,17.8,204.4,19.6,212.5,25.3,210.6,35.3,208.7,45.3,201.9,46.7,199.7,47.2,197.3,46.7,196.3,46.5,195.8,46.3,195.3,46.2,195.4,46,195.4,46,171.4,36.1,147.4,26.2,99.4,6.4,51.4,-13.3,27.5,-23.2,3.5,-33.1,3.6,-33.2,-0.5,-34.8,-4.9,-34.8,-13.5,-34.8,-14.2,-27.6,-15,-20.5,-7.6,-13.3,-4.7,-10.4,-1.7,-8.4]}},149).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({scaleX:0.6563,scaleY:0.6563,rotation:7532.9268,guide:{path:[257,174.3,257.3,132.4,258.1,13.9,258.2,13.9,235.3,4.6,212.5,-4.7,166.7,-23.2]}},49).wait(1));

	// Layer_3_copy_5
	this.instance_2 = new lib.salju();
	this.instance_2.setTransform(50.2,-70.35,0.6567,0.6567,-166.4866,0,0,0.1,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[50.3,-70.3,24.6,-80.6,11.8,-85.8,-1,-91,-0.9,-91.1,-4,-92.4,-7.3,-92.2,-13.9,-92,-14.4,-85.7,-15.1,-75.6,-14.1,-72.7,-12.1,-66.7,-2.8,-63.3,5.1,-60.4,101.7,-21.6,195.7,16.1,195.8,16,196,15.8,198.6,16.7,201.8,17.8,204.4,19.6,212.5,25.3,210.6,35.3,208.7,45.3,201.9,46.7,199.7,47.2,197.3,46.7,196.3,46.5,195.8,46.3,195.3,46.2,195.4,46,195.4,46,171.4,36.1,147.4,26.2,99.4,6.4,51.4,-13.3,27.5,-23.2,3.5,-33.1,3.6,-33.2,-0.5,-34.8,-4.9,-34.8,-13.5,-34.8,-14.2,-27.6,-15,-20.5,-7.6,-13.3,-4.7,-10.4,-1.7,-8.4]}},124).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({regY:-12.3,scaleX:0.6564,scaleY:0.6564,rotation:7357.4393,guide:{path:[257,174.4,257.3,132.5,258.1,13.9,258.2,13.9,225.8,0.8,193.5,-12.3,128.7,-38.5,83.9,-56.6,54.6,-68.4]}},74).wait(1));

	// Layer_3_copy_4
	this.instance_3 = new lib.salju();
	this.instance_3.setTransform(19.8,-54.4,0.6565,0.6565,18.0496,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[19.9,-54.3,46.2,-43.9,101.7,-21.5,148.7,-2.7,172.2,6.6,195.8,16,195.8,16,196,15.8,198.6,16.7,201.8,17.8,204.4,19.7,212.5,25.4,210.6,35.4,208.7,45.3,201.9,46.8,199.7,47.2,197.3,46.7,196.3,46.5,195.8,46.3,195.3,46.2,195.4,46.1,195.4,46,171.4,36.1,147.4,26.2,99.4,6.4,51.4,-13.4,27.5,-23.3,3.5,-33.2,3.6,-33.2,-0.5,-34.8,-4.9,-34.8,-13.5,-34.8,-14.2,-27.6,-15,-20.3,-7.6,-13.1,-4.7,-10.2,-1.7,-8.3]}},99).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({scaleX:0.6565,scaleY:0.6565,rotation:7541.9504,guide:{path:[256.9,174.4,257.3,132.5,258.1,13.9,258.1,13.9,128.5,-38.6,63.7,-64.8,31.4,-77.9,-1,-91,-1,-91,-4.1,-92.3,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.5,-14.2,-72.6,-12.2,-66.7,-2.8,-63.2,0,-62.2,14.7,-56.4]}},99).wait(1));

	// Layer_3_copy_3
	this.instance_4 = new lib.salju();
	this.instance_4.setTransform(136.35,-7.75,0.6564,0.6564,-157.4393,0,0,0,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-12.2,scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[136.4,-7.7,195.8,16,195.8,16,196,15.8,198.6,16.7,201.8,17.7,204.4,19.6,212.5,25.3,210.6,35.3,208.7,45.3,201.9,46.7,199.7,47.2,197.3,46.6,196.3,46.4,195.8,46.3,195.3,46.1,195.4,46,195.4,46,171.4,36.1,147.4,26.2,99.4,6.3,51.4,-13.4,27.5,-23.3,3.5,-33.2,3.6,-33.3,-0.5,-34.8,-4.9,-34.8,-13.5,-34.8,-14.2,-27.6,-15,-20.4,-7.6,-13.2,-4.7,-10.3,-1.7,-8.3]}},74).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({regX:-0.1,scaleX:0.6567,scaleY:0.6567,rotation:7366.4866,guide:{path:[256.9,174.4,257.3,132.5,258.1,13.9,258.1,13.9,128.5,-38.6,63.7,-64.8,31.4,-77.9,-1,-91,-1,-91,-4.1,-92.3,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.5,-14.2,-72.6,-12.2,-66.7,-2.8,-63.2,5.1,-60.4,101.7,-21.5,118.3,-14.8,131.9,-9.3]}},124).wait(1));

	// Layer_3_copy_2
	this.instance_5 = new lib.salju();
	this.instance_5.setTransform(185.65,42,0.6563,0.6563,27.0732,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[185.7,42,164.9,33.3,99.5,6.3,51.5,-13.4,27.5,-23.3,3.5,-33.2,3.6,-33.3,-0.5,-34.8,-4.8,-34.8,-13.5,-34.8,-14.2,-27.6,-15,-20.4,-7.6,-13.2,-4.7,-10.3,-1.7,-8.3]}},49).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({scaleX:0.6568,scaleY:0.6568,rotation:7550.9928,guide:{path:[256.9,174.4,257.3,132.5,258.1,13.9,258.1,13.9,128.5,-38.6,63.7,-64.8,31.4,-77.9,-1,-91,-1,-91,-4.1,-92.3,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.5,-14.2,-72.6,-12.2,-66.7,-2.8,-63.2,5.1,-60.4,101.7,-21.5,195.7,16.2,195.7,16.2,195.9,16,198.5,16.8,201.7,17.9,204.3,19.8,212.5,25.5,210.6,35.5,208.7,45.4,201.8,46.8,199.6,47.3,197.2,46.7,196.2,46.5,195.8,46.3,195.3,46.2,195.3,46.1,195.3,46.1,191.7,44.6]}},149).wait(1));

	// Layer_3_copy
	this.instance_6 = new lib.salju();
	this.instance_6.setTransform(68.05,-6.6,0.6562,0.6562,-148.4134,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.6572,scaleY:0.6572,rotation:0,guide:{path:[68,-6.6,35.7,-19.8,19.6,-26.5,3.5,-33.1,3.5,-33.2,-0.6,-34.8,-4.9,-34.8,-13.6,-34.8,-14.3,-27.6,-15.1,-20.4,-7.7,-13.3,-4.8,-10.4,-1.8,-8.4]}},24).to({guide:{path:[-1.8,-8.2,-4.8,-10.2,-7.7,-13.1,-15.1,-20.3,-14.3,-27.5,-13.6,-34.7,-4.9,-34.7,-0.6,-34.7,3.5,-33.2,3.5,-33.1,27.5,-23.2,51.5,-13.3,99.5,6.5,147.5,26.2,171.4,36.1,195.4,46,195.3,46.1,195.3,46.2,195.8,46.3,196.2,46.5,197.2,46.7,199.6,47.3,201.8,46.8,208.7,45.4,210.6,35.5,212.5,25.5,204.3,19.8,201.7,17.9,198.5,16.8,195.9,16,195.7,16.2,195.7,16.2,101.7,-21.5,5.1,-60.4,-2.8,-63.2,-12.2,-66.7,-14.2,-72.6,-15.2,-75.5,-14.5,-85.7,-14,-92,-7.4,-92.2,-4.1,-92.3,-1,-91,-1,-91,31.4,-77.9,63.7,-64.8,128.5,-38.6,258.1,13.9,258.1,13.9,257.3,132.5,256.9,174.4]}},1).to({regX:0.1,regY:-12.3,scaleX:0.657,scaleY:0.657,rotation:7375.4975,guide:{path:[256.9,174.4,257.3,132.5,258.1,13.9,258.1,13.9,128.5,-38.6,63.7,-64.8,31.4,-77.9,-1,-91,-1,-91,-4.1,-92.3,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.5,-14.2,-72.6,-12.2,-66.7,-2.8,-63.2,5.1,-60.4,101.7,-21.5,195.7,16.2,195.7,16.2,195.9,16,198.5,16.8,201.7,17.9,204.3,19.8,212.5,25.5,210.6,35.5,208.7,45.4,201.8,46.8,199.6,47.3,197.2,46.7,196.2,46.5,195.8,46.3,195.3,46.2,195.3,46.1,195.4,46,171.4,36.1,147.5,26.2,99.5,6.5,84.9,0.5,72.5,-4.6]}},174).wait(1));

	// Layer_3
	this.instance_7 = new lib.salju();
	this.instance_7.setTransform(257,174.4,0.6572,0.6572,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:7200,guide:{path:[256.9,174.4,257.3,132.5,258.1,13.9,258.1,13.9,128.5,-38.6,63.7,-64.8,31.4,-77.9,-1,-91,-1,-91,-4.1,-92.3,-7.4,-92.2,-14,-92,-14.5,-85.7,-15.2,-75.5,-14.2,-72.6,-12.2,-66.7,-2.8,-63.2,5.1,-60.4,101.7,-21.5,195.7,16.2,195.7,16.2,195.9,16,198.5,16.8,201.7,17.9,204.3,19.8,212.5,25.5,210.6,35.5,208.7,45.4,201.8,46.8,199.6,47.3,197.2,46.7,196.2,46.5,195.8,46.3,195.3,46.2,195.3,46.1,195.4,46,171.4,36.1,147.5,26.2,99.5,6.5,51.5,-13.3,27.5,-23.2,3.5,-33.1,3.5,-33.2,-0.6,-34.7,-4.9,-34.7,-13.6,-34.7,-14.3,-27.5,-15.1,-20.3,-7.7,-13.1,-4.8,-10.2,-1.8,-8.2]}},199).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-101.6,291.9,284.4);


(lib.aliran3_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_20
	this.instance = new lib.Tween4copy3("synched",0);
	this.instance.setTransform(41.6,351.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({scaleX:0.9985,scaleY:0.9985,rotation:2911.5869,guide:{path:[41.5,351.7,41.6,353.2,41.4,354.8,40.4,361.1,35.4,362.7]}},4).wait(1));

	// Layer_1_copy_19
	this.instance_1 = new lib.Tween4copy3("synched",0);
	this.instance_1.setTransform(41.6,351.65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({scaleX:0.999,scaleY:0.999,rotation:2951.2155,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.7,362.4,22.1,361.5,18.7,360.1]}},9).wait(1));

	// Layer_1_copy_18
	this.instance_2 = new lib.Tween4copy3("synched",0);
	this.instance_2.setTransform(41.6,351.65);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({scaleX:0.9989,scaleY:0.9989,rotation:2990.7823,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.7,362.4,18.9,360.7,12.3,356.9,7.7,355.1,3.1,353.3]}},14).wait(1));

	// Layer_1_copy_17
	this.instance_3 = new lib.Tween4copy3("synched",0);
	this.instance_3.setTransform(41.6,351.65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({scaleX:0.9986,scaleY:0.9986,rotation:3030.4137,guide:{path:[41.6,351.6,41.7,353.1,41.5,354.7,39.8,365.6,25.8,362.4,18.9,360.7,12.4,356.9,-0.5,351.9,-12.7,347.1]}},19).wait(1));

	// Layer_1_copy_16
	this.instance_4 = new lib.Tween4copy3("synched",0);
	this.instance_4.setTransform(41.6,351.65);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({scaleX:0.9994,scaleY:0.9994,rotation:3069.7896,guide:{path:[41.6,351.6,41.7,353.1,41.5,354.7,39.8,365.6,25.8,362.4,18.9,360.7,12.3,356.9,-9,348.5,-28.5,340.9]}},24).wait(1));

	// Layer_1_copy_15
	this.instance_5 = new lib.Tween4copy3("synched",0);
	this.instance_5.setTransform(41.6,351.65);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).to({scaleX:0.9984,scaleY:0.9984,rotation:3109.405,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.7,362.4,18.8,360.7,12.2,356.9,-18,345,-44.4,334.7]}},29).wait(1));

	// Layer_1_copy_14
	this.instance_6 = new lib.Tween4copy3("synched",0);
	this.instance_6.setTransform(41.6,351.65);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},0).to({scaleX:0.9999,scaleY:0.9999,rotation:3148.9971,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-27.3,341.4,-60.2,328.4]}},34).wait(1));

	// Layer_1_copy_13
	this.instance_7 = new lib.Tween4copy3("synched",0);
	this.instance_7.setTransform(41.6,351.65);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).to({scaleX:0.9984,scaleY:0.9984,rotation:3188.5942,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.3,356.9,-37.1,337.5,-76,322.2]}},39).wait(1));

	// Layer_1_copy_12
	this.instance_8 = new lib.Tween4copy3("synched",0);
	this.instance_8.setTransform(41.6,351.65);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).to({scaleX:0.9994,scaleY:0.9994,rotation:3228.2134,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.9,360.7,12.3,356.9,-47.4,333.4,-91.8,316]}},44).wait(1));

	// Layer_1_copy_11
	this.instance_9 = new lib.Tween4copy3("synched",0);
	this.instance_9.setTransform(41.6,351.65);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({scaleX:0.9987,scaleY:0.9987,rotation:2907.5866,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.9,360.7,12.3,356.9,-58.4,329.1,-107.6,309.8]}},49).wait(1));

	// Layer_1_copy_10
	this.instance_10 = new lib.Tween4copy3("synched",0);
	this.instance_10.setTransform(41.6,351.65);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45).to({_off:false},0).to({scaleX:0.9988,scaleY:0.9988,rotation:2947.2183,guide:{path:[41.6,351.6,41.7,353.1,41.5,354.7,39.8,365.6,25.8,362.4,18.9,360.7,12.3,356.9,-70.2,324.5,-123.5,303.6]}},54).wait(1));

	// Layer_1_copy_9
	this.instance_11 = new lib.Tween4copy3("synched",0);
	this.instance_11.setTransform(41.6,351.65);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({scaleX:0.9991,scaleY:0.9991,rotation:2986.7857,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-83.1,319.4,-139.4,297.3]}},59).wait(1));

	// Layer_1_copy_8
	this.instance_12 = new lib.Tween4copy3("synched",0);
	this.instance_12.setTransform(41.6,351.65);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35).to({_off:false},0).to({scaleX:0.9985,scaleY:0.9985,rotation:3026.4129,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-97.2,313.9,-155.2,291.1]}},64).wait(1));

	// Layer_1_copy_7
	this.instance_13 = new lib.Tween4copy3("synched",0);
	this.instance_13.setTransform(41.6,351.65);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({_off:false},0).to({scaleX:0.9997,scaleY:0.9997,rotation:3065.7977,guide:{path:[41.6,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-113.2,307.6,-171,284.9]}},69).wait(1));

	// Layer_1_copy_6
	this.instance_14 = new lib.Tween4copy3("synched",0);
	this.instance_14.setTransform(41.6,351.65);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},0).to({scaleX:0.9984,scaleY:0.9984,rotation:3105.4037,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.3,356.9,-132.1,300.2,-186.8,278.7]}},74).wait(1));

	// Layer_1_copy_5
	this.instance_15 = new lib.Tween4copy3("synched",0);
	this.instance_15.setTransform(41.6,351.65);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20).to({_off:false},0).to({scaleX:0.9996,scaleY:0.9996,rotation:3143.464,guide:{path:[41.5,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-155.1,291.2,-202,272.7]}},79).wait(1));

	// Layer_1_copy_4
	this.instance_16 = new lib.Tween4copy3("synched",0);
	this.instance_16.setTransform(41.6,351.65);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15).to({_off:false},0).to({scaleX:0.9986,scaleY:0.9986,rotation:3180.8573,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.3,356.9,-192.9,276.3,-217,266.8]}},84).wait(1));

	// Layer_1_copy_3
	this.instance_17 = new lib.Tween4copy3("synched",0);
	this.instance_17.setTransform(41.6,351.65);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({_off:false},0).to({scaleX:0.9989,scaleY:0.9989,rotation:3218.4551,guide:{path:[41.6,351.6,41.7,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.9,360.7,12.3,356.9,-104,311.2,-162.1,288.4,-220.3,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.7,264.7,-229.1,263.7,-231.3,263.4,-233.1,263.6]}},89).wait(1));

	// Layer_1_copy_2
	this.instance_18 = new lib.Tween4copy3("synched",0);
	this.instance_18.setTransform(41.6,351.65);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).to({scaleX:0.9992,scaleY:0.9992,rotation:2895.55,guide:{path:[41.6,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-104,311.2,-162.1,288.4,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.7,-238.7,267.3,-239.1,269.5,-239.1,271.6,-239.1,273.7,-238.7,275.7]}},94).wait(1));

	// Layer_1_copy
	this.instance_19 = new lib.Tween4copy3("synched",0);
	this.instance_19.setTransform(41.6,351.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleX:0.9984,scaleY:0.9984,rotation:2932.666,guide:{path:[41.6,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-104,311.2,-162.1,288.4,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.7,-238.7,267.3,-239.1,269.5,-239.1,271.6,-239.1,276.8,-237,280.8,-234.7,285.2,-229.9,288.7]}},99).wait(1));

	// Layer_1_copy_21
	this.instance_20 = new lib.Tween4copy3("synched",0);
	this.instance_20.setTransform(41.6,351.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:0.9987,scaleY:0.9987,rotation:2943.4075,guide:{path:[41.6,351.6,41.6,353.1,41.4,354.7,39.7,365.6,25.8,362.4,18.8,360.7,12.2,356.9,-104,311.2,-162.1,288.4,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.7,-238.7,267.3,-239.1,269.5,-239.1,271.6,-239.1,276.8,-237,280.8,-233.8,286.8,-226,291.2]}},99).wait(1));

	// Layer_1_copy_20
	this.instance_21 = new lib.Tween4copy3("synched",0);
	this.instance_21.setTransform(32,363.1,0.9971,0.9971,31.3629);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:0.9967,scaleY:0.9967,rotation:22.5819,guide:{path:[32,363.1,29.3,363.2,25.8,362.4,18.8,360.7,12.2,356.9,-104,311.2,-162.1,288.4,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.7,-238.7,267.3,-239.1,269.5,-239.1,271.6,-239.1,276.8,-237,280.8,-232.4,289.6,-218,294.7,-214.9,295.9,-207.5,298.6]}},99).wait(1));

	// Layer_1_copy_19
	this.instance_22 = new lib.Tween4copy3("synched",0);
	this.instance_22.setTransform(15.55,358.75,0.998,0.998,71.1728);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:0.997,scaleY:0.997,rotation:51.369,guide:{path:[15.6,358.7,13.9,357.9,12.3,356.9,-104,311.2,-162.2,288.4,-220.3,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.7,-238.7,267.3,-239,269.5,-239,271.6,-239,276.8,-236.9,280.8,-232.4,289.6,-217.9,294.8,-211.6,297,-188.3,305.9]}},99).wait(1));

	// Layer_1_copy_18
	this.instance_23 = new lib.Tween4copy3("synched",0);
	this.instance_23.setTransform(-0.1,352.15,0.9979,0.9979,110.3254);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({rotation:79.1885,guide:{path:[-0.1,352.1,-110.2,308.8,-165.2,287.2,-220.2,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.8,-238.7,267.3,-239.1,269.6,-239.1,271.6,-239.1,276.8,-237,280.8,-232.4,289.6,-218,294.8,-209.5,297.8,-170.8,312.6]}},99).wait(1));

	// Layer_1_copy_17
	this.instance_24 = new lib.Tween4copy3("synched",0);
	this.instance_24.setTransform(-15.95,345.9,0.9972,0.9972,149.946);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({scaleX:0.9971,scaleY:0.9971,rotation:106.7774,guide:{path:[-15.9,345.9,-118.1,305.7,-169.2,285.6,-220.3,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.1,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.6,-239,271.6,-239,276.8,-236.9,280.9,-232.4,289.6,-218,294.8,-207.8,298.5,-153.6,319.2]}},99).wait(1));

	// Layer_1_copy_16
	this.instance_25 = new lib.Tween4copy3("synched",0);
	this.instance_25.setTransform(-31.8,339.7,0.9989,0.9989,-169.7334);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:0.9978,scaleY:0.9978,rotation:-120.0884,guide:{path:[-31.8,339.7,-126.1,302.6,-173.2,284.1,-220.3,265.6,-220.2,265.7,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.4,-239,269.6,-239,271.6,-239,276.8,-236.9,280.9,-232.4,289.6,-218,294.8,-206.3,299,-136.8,325.6]}},99).wait(1));

	// Layer_1_copy_15
	this.instance_26 = new lib.Tween4copy3("synched",0);
	this.instance_26.setTransform(-47.65,333.45,0.9967,0.9967,-130.1286);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:0.9976,scaleY:0.9976,rotation:-91.5155,guide:{path:[-47.6,333.4,-134,299.5,-177.1,282.5,-220.3,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.7,-238.7,267.3,-239,269.5,-239,271.5,-239,276.7,-236.9,280.8,-232.4,289.6,-218,294.7,-204.9,299.4,-120.2,331.9]}},99).wait(1));

	// Layer_1_copy_14
	this.instance_27 = new lib.Tween4copy3("synched",0);
	this.instance_27.setTransform(-63.45,327.2,0.9999,0.9999,-90.557);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({scaleX:0.9986,scaleY:0.9986,rotation:-63.4138,guide:{path:[-63.4,327.2,-141.9,296.4,-181.1,281,-220.3,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.7,-238.7,267.3,-239,269.5,-239,271.6,-239,276.7,-236.9,280.8,-232.4,289.6,-218,294.7,-203.7,299.9,-103.9,338.2]}},99).wait(1));

	// Layer_1_copy_13
	this.instance_28 = new lib.Tween4copy3("synched",0);
	this.instance_28.setTransform(-79.3,321,0.9968,0.9968,-51.1754);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({scaleX:0.9962,scaleY:0.9962,rotation:-35.5731,guide:{path:[-79.3,321,-149.8,293.3,-185.1,279.4,-220.3,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.6,-239,271.6,-239,276.8,-236.9,280.9,-232.4,289.6,-218,294.8,-202.6,300.3,-87.5,344.5]}},99).wait(1));

	// Layer_1_copy_12
	this.instance_29 = new lib.Tween4copy3("synched",0);
	this.instance_29.setTransform(-95.2,314.75,0.9987,0.9987,-11.5699);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({scaleX:0.9986,scaleY:0.9986,rotation:-7.8114,guide:{path:[-95.2,314.7,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.5,-239,271.6,-239,276.8,-236.9,280.8,-232.4,289.6,-218,294.8,-201.5,300.7,-71.3,350.7]}},99).wait(1));

	// Layer_1_copy_11
	this.instance_30 = new lib.Tween4copy3("synched",0);
	this.instance_30.setTransform(-110.95,308.6,0.9973,0.9973,27.3523);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({scaleX:0.9972,scaleY:0.9972,rotation:18.5769,guide:{path:[-110.9,308.6,-220.2,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.5,-239,271.6,-239,276.8,-236.9,280.8,-232.4,289.6,-218,294.8,-200.5,301,-55.2,356.9]}},99).wait(1));

	// Layer_1_copy_10
	this.instance_31 = new lib.Tween4copy3("synched",0);
	this.instance_31.setTransform(-126.75,302.4,0.9976,0.9976,67.1592);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({scaleX:0.9967,scaleY:0.9967,rotation:45.6314,guide:{path:[-126.6,302.4,-220.2,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.1,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.6,-239,271.6,-239,276.8,-236.9,280.9,-232.4,289.6,-218,294.8,-199.6,301.4,-39.2,363.1]}},99).wait(1));

	// Layer_1_copy_9
	this.instance_32 = new lib.Tween4copy3("synched",0);
	this.instance_32.setTransform(-142.55,296.1,0.9982,0.9982,106.3129);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({scaleX:0.9978,scaleY:0.9978,rotation:71.7177,guide:{path:[-142.4,296.2,-220.2,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.1,-224.6,264.7,-229,263.7,-238,262.8,-238.7,267.3,-239,269.6,-239,271.6,-239,276.8,-236.9,280.9,-232.4,289.6,-218,294.8,-198.7,301.7,-23.1,369.3]}},99).wait(1));

	// Layer_1_copy_8
	this.instance_33 = new lib.Tween4copy3("synched",0);
	this.instance_33.setTransform(-158.4,289.95,0.997,0.997,145.9227);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({scaleX:0.9976,scaleY:0.9976,rotation:97.5307,guide:{path:[-158.3,289.9,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.7,-238.7,267.3,-239,269.5,-239,271.6,-239,276.8,-236.9,280.8,-232.4,289.6,-218,294.8,-197.9,302,-7.2,375.3]}},99).wait(1));

	// Layer_1_copy_7
	this.instance_34 = new lib.Tween4copy3("synched",0);
	this.instance_34.setTransform(-174.25,283.7,0.9993,0.9993,-173.7137);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({scaleX:0.9982,scaleY:0.9982,rotation:-115.0887,guide:{path:[-174.1,283.7,-220.2,265.6,-220.2,265.6,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229,263.7,-238,262.7,-238.7,267.3,-239,269.5,-239,271.6,-239,276.8,-236.9,280.8,-232.4,289.6,-218,294.8,-197,302.3,8.9,381.5]}},99).wait(1));

	// Layer_1_copy_6
	this.instance_35 = new lib.Tween4copy3("synched",0);
	this.instance_35.setTransform(-190.1,277.45,0.9967,0.9967,-134.123);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({scaleX:0.9977,scaleY:0.9977,rotation:-88.2315,guide:{path:[-190,277.5,-205.1,271.5,-212.7,268.5,-220.2,265.6,-220.2,265.6,-220.2,265.6,-222.4,265.1,-224.6,264.7,-229.1,263.7,-238.1,262.8,-238.7,267.3,-239.1,269.6,-239.1,271.6,-239.1,276.8,-237,280.9,-232.4,289.6,-218,294.8,-196.3,302.6,24.7,387.7]}},99).wait(1));

	// Layer_1_copy_5
	this.instance_36 = new lib.Tween4copy3("synched",0);
	this.instance_36.setTransform(-205.25,271.55,0.9993,0.9993,-96.0523);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({scaleX:0.9982,scaleY:0.9982,rotation:-62.6954,guide:{path:[-205.2,271.5,-220.3,265.6,-220.3,265.6,-220.2,265.6,-222.4,265.2,-224.6,264.7,-229.1,263.7,-238.1,262.7,-238.8,267.3,-239.1,269.5,-239.1,271.6,-239.1,276.8,-237,280.8,-232.4,289.6,-218,294.7,-196.1,302.6,27.9,388.9,32.5,391,36.6,394.7,37.1,395.2,37.6,395.7]}},99).wait(1));

	// Layer_1_copy_4
	this.instance_37 = new lib.Tween4copy3("synched",0);
	this.instance_37.setTransform(-220.2,265.65,0.9971,0.9971,-58.934);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({scaleX:0.9965,scaleY:0.9965,rotation:-38.1131,guide:{path:[-220.1,265.7,-220.3,265.7,-220.3,265.7,-220.2,265.7,-222.4,265.2,-224.6,264.7,-229.1,263.8,-238.1,262.8,-238.7,267.4,-239.1,269.6,-239.1,271.6,-239.1,276.8,-237,280.9,-232.4,289.6,-218,294.8,-196.1,302.7,27.9,388.9,32.5,391.1,36.6,394.8,44.2,401.7,43.3,409.1]}},99).wait(1));

	// Layer_1_copy_3
	this.instance_38 = new lib.Tween4copy3("synched",0);
	this.instance_38.setTransform(-236.4,264.25,0.9978,0.9978,-21.3292);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({rotation:-13.5617,guide:{path:[-236.3,264.3,-238.4,265.2,-238.7,267.3,-239.1,269.6,-239.1,271.6,-239.1,276.8,-237,280.8,-232.4,289.6,-218,294.8,-196.1,302.7,27.9,388.9,32.5,391.1,36.6,394.8,44.8,402.2,43.1,410.3,41.1,419.3,37.2,420,36.5,420.2,35.4,420]}},99).wait(1));

	// Layer_1_copy_2
	this.instance_39 = new lib.Tween4copy3("synched",0);
	this.instance_39.setTransform(-237.9,279,0.9983,0.9983,15.3254);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({scaleX:0.9984,scaleY:0.9984,rotation:9.7602,guide:{path:[-237.7,279,-237.4,279.9,-236.9,280.8,-232.4,289.6,-218,294.8,-196.1,302.7,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,22.1,416.1,20,415.3]}},99).wait(1));

	// Layer_1_copy
	this.instance_40 = new lib.Tween4copy3("synched",0);
	this.instance_40.setTransform(-227.25,290.65,0.9968,0.9968,52.4223);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({scaleX:0.9965,scaleY:0.9965,rotation:33.0876,guide:{path:[-227.1,290.6,-223.2,292.9,-218,294.8,-196.1,302.7,27.9,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,19.9,415.3,2.7,408.6]}},99).wait(1));

	// Layer_1_copy_21
	this.instance_41 = new lib.Tween4copy3("synched",0);
	this.instance_41.setTransform(-223.05,292.75,0.999,0.999,71.2155);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({scaleX:0.9977,scaleY:0.9977,rotation:44.5954,guide:{path:[-222.9,292.8,-220.6,293.8,-218,294.8,-196.1,302.7,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,22.9,416.4,19.1,415,-6.6,405]}},99).wait(1));

	// Layer_1_copy_20
	this.instance_42 = new lib.Tween4copy3("synched",0);
	this.instance_42.setTransform(-203.55,300.2,0.9967,0.9967,22.5595);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({scaleX:0.9972,scaleY:0.9972,rotation:13.8072,guide:{path:[-203.4,300.2,-155.6,318.3,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,18,414.6,-23,398.6]}},99).wait(1));

	// Layer_1_copy_19
	this.instance_43 = new lib.Tween4copy3("synched",0);
	this.instance_43.setTransform(-184.9,307.3,0.997,0.997,51.1313);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({scaleX:0.9967,scaleY:0.9967,rotation:31.0997,guide:{path:[-184.8,307.3,-126.4,329.5,27.9,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,17.1,414.3,-39.6,392.2]}},99).wait(1));

	// Layer_1_copy_18
	this.instance_44 = new lib.Tween4copy3("synched",0);
	this.instance_44.setTransform(-167.45,313.95,0.9978,0.9978,78.7335);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({scaleX:0.997,scaleY:0.997,rotation:47.3965,guide:{path:[-167.3,313.9,-105.5,337.5,28,388.9,32.6,391.1,36.6,394.8,44.9,402.2,43.2,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,16.4,414,-55.7,385.8]}},99).wait(1));

	// Layer_1_copy_17
	this.instance_45 = new lib.Tween4copy3("synched",0);
	this.instance_45.setTransform(-150.4,320.45,0.9971,0.9971,106.2903);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({scaleX:0.9969,scaleY:0.9969,rotation:63.1914,guide:{path:[-150.3,320.4,-88.4,344.1,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,15.6,413.8,-71.8,379.5]}},99).wait(1));

	// Layer_1_copy_16
	this.instance_46 = new lib.Tween4copy3("synched",0);
	this.instance_46.setTransform(-133.55,326.85,0.9978,0.9978,-119.5868);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({scaleX:0.9977,scaleY:0.9977,rotation:-70.1802,guide:{path:[-133.5,326.9,-73.4,349.9,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.6,420.5,22.9,416.4,15,413.5,-87.8,373.2]}},99).wait(1));

	// Layer_1_copy_15
	this.instance_47 = new lib.Tween4copy3("synched",0);
	this.instance_47.setTransform(-117,333.2,0.9976,0.9976,-91.0429);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({scaleX:0.9971,scaleY:0.9971,rotation:-52.6252,guide:{path:[-116.9,333.2,-60,355,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,14.4,413.3,-103.7,367]}},99).wait(1));

	// Layer_1_copy_14
	this.instance_48 = new lib.Tween4copy3("synched",0);
	this.instance_48.setTransform(-100.55,339.5,0.9986,0.9986,-63.157);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({scaleX:0.9976,scaleY:0.9976,rotation:-35.8396,guide:{path:[-100.5,339.5,-47.8,359.7,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.6,420.5,22.9,416.4,14.4,413.3,-104.1,366.8,-111.9,363.8,-119.6,360.7]}},99).wait(1));

	// Layer_1_copy_13
	this.instance_49 = new lib.Tween4copy3("synched",0);
	this.instance_49.setTransform(-84.3,345.75,0.9962,0.9962,-35.3449);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({scaleX:0.9969,scaleY:0.9969,rotation:-19.5785,guide:{path:[-84.2,345.8,-36.6,364.1,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,14.4,413.3,-104.1,366.8,-119.9,360.7,-135.4,354.6]}},99).wait(1));

	// Layer_1_copy_12
	this.instance_50 = new lib.Tween4copy3("synched",0);
	this.instance_50.setTransform(-68.05,351.95,0.9987,0.9987,-7.8024);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({scaleX:0.999,scaleY:0.999,rotation:-4.2588,guide:{path:[-68,352,-25.9,368.2,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.6,420.5,22.9,416.4,14.4,413.3,-104.1,366.8,-127.8,357.5,-151.2,348.4]}},99).wait(1));

	// Layer_1_copy_11
	this.instance_51 = new lib.Tween4copy3("synched",0);
	this.instance_51.setTransform(-52,358.1,0.9972,0.9972,18.5542);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({scaleX:0.9979,scaleY:0.9979,rotation:9.8112,guide:{path:[-52,358.2,-15.9,372,27.9,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,14.3,413.3,-104.2,366.8,-135.8,354.4,-167,342.2]}},99).wait(1));

	// Layer_1_copy_10
	this.instance_52 = new lib.Tween4copy3("synched",0);
	this.instance_52.setTransform(-36,364.3,0.9968,0.9968,45.3889);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({scaleX:0.9971,scaleY:0.9971,rotation:23.8159,guide:{path:[-36,364.3,-6.4,375.7,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,22.9,416.4,14.4,413.3,-104.1,366.8,-143.9,351.3,-182.8,336]}},99).wait(1));

	// Layer_1_copy_9
	this.instance_53 = new lib.Tween4copy3("synched",0);
	this.instance_53.setTransform(-19.95,370.55,0.9978,0.9978,71.442);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({scaleX:0.9973,scaleY:0.9973,rotation:36.8224,guide:{path:[-19.9,370.5,2.7,379.2,28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,22.9,416.4,14.4,413.3,-104.1,366.8,-152,348.1,-198.6,329.8]}},99).wait(1));

	// Layer_1_copy_8
	this.instance_54 = new lib.Tween4copy3("synched",0);
	this.instance_54.setTransform(-3.95,376.6,0.9976,0.9976,97.0321);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).to({scaleX:0.9972,scaleY:0.9972,rotation:48.859,guide:{path:[-3.9,376.6,11.5,382.6,28,388.9,32.6,391.1,36.6,394.8,44.9,402.2,43.2,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,14.4,413.3,-104.1,366.8,-160.1,344.9,-214.5,323.5]}},99).wait(1));

	// Layer_1_copy_7
	this.instance_55 = new lib.Tween4copy3("synched",0);
	this.instance_55.setTransform(12,382.7,0.9983,0.9983,-114.564);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).to({scaleX:0.9976,scaleY:0.9976,rotation:-56.1549,guide:{path:[12,382.8,19.8,385.8,27.9,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.1,419.3,37.2,420,34.5,420.5,22.9,416.4,14.3,413.3,-104.2,366.8,-163.4,343.6,-220.8,321.1,-220.7,321.1,-222.6,321,-224.4,321,-228.1,320.9,-229.9,321.2,-231.3,321.6]}},99).wait(1));

	// Layer_1_copy_6
	this.instance_56 = new lib.Tween4copy3("synched",0);
	this.instance_56.setTransform(27.95,388.95,0.9977,0.9977,-87.7421);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).to({scaleX:0.9973,scaleY:0.9973,rotation:-41.8407,guide:{path:[28,388.9,32.5,391.1,36.6,394.8,44.9,402.2,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,14.4,413.3,-104.1,366.8,-163.3,343.6,-220.7,321.1,-220.7,321.1,-228.1,320.9,-235.6,321.8,-235.9,326.7,-236.2,331.7,-234.7,336.1]}},99).wait(1));

	// Layer_1_copy_5
	this.instance_57 = new lib.Tween4copy3("synched",0);
	this.instance_57.setTransform(39.8,398.15,0.9982,0.9982,-62.422);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).to({scaleX:0.9978,scaleY:0.9978,rotation:-29.0482,guide:{path:[39.9,398.1,44.5,404,43.1,410.3,41.2,419.3,37.2,420,34.6,420.5,23,416.4,14.4,413.3,-104.1,366.8,-163.3,343.6,-220.7,321.1,-220.7,321.1,-228.1,320.9,-235.6,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-230.4,344.6,-226.4,347.7]}},99).wait(1));

	// Layer_1_copy_4
	this.instance_58 = new lib.Tween4copy3("synched",0);
	this.instance_58.setTransform(42.65,412.25,0.9966,0.9966,-37.8732);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).to({scaleX:0.9975,scaleY:0.9975,rotation:-17.0565,guide:{path:[42.7,412.3,40.7,419.4,37.2,420,34.6,420.5,23,416.4,14.4,413.3,-104.1,366.8,-163.3,343.6,-220.7,321.1,-220.7,321.1,-228.1,320.9,-235.6,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.4,352.5,-215.8,353.1,-212,354.5]}},99).wait(1));

	// Layer_1_copy_3
	this.instance_59 = new lib.Tween4copy3("synched",0);
	this.instance_59.setTransform(31.9,419.2,0.9978,0.9978,-13.5439);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).to({scaleX:0.9987,scaleY:0.9987,rotation:-5.8077,guide:{path:[31.9,419.3,28.4,418.3,22.9,416.4,14.4,413.3,-104.1,366.8,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.8,-235.9,326.7,-236.4,334.2,-232.8,340.5,-228.1,348.6,-217.4,352.5,-213.3,354,-194.5,361]}},99).wait(1));

	// Layer_1_copy_2
	this.instance_60 = new lib.Tween4copy3("synched",0);
	this.instance_60.setTransform(15.7,413.55,0.9984,0.9984,9.5585);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).to({scaleX:0.9991,scaleY:0.9991,rotation:4.0225,guide:{path:[15.6,413.6,-8.3,404.4,-104.3,366.8,-163.4,343.6,-220.8,321,-220.7,321.1,-222.5,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-236,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.5,352.4,-211.9,354.5,-179.7,366.5]}},99).wait(1));

	// Layer_1_copy
	this.instance_61 = new lib.Tween4copy3("synched",0);
	this.instance_61.setTransform(-0.65,407.25,0.9965,0.9965,32.8506);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).to({scaleX:0.9978,scaleY:0.9978,rotation:13.5364,guide:{path:[-0.7,407.3,-32.1,395.1,-104.2,366.8,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.4,352.5,-210.7,354.9,-165.1,372]}},99).wait(1));

	// Layer_45
	this.instance_62 = new lib.Tween4copy3("synched",0);
	this.instance_62.setTransform(-9.9,403.7,0.9977,0.9977,44.1511);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).to({scaleX:0.9982,scaleY:0.9982,rotation:17.33,guide:{path:[-9.9,403.7,-41.9,391.3,-104.2,366.8,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.4,352.5,-209.7,355.3,-151.3,377.1]}},99).wait(1));

	// Layer_1_copy_20
	this.instance_63 = new lib.Tween4copy3("synched",0);
	this.instance_63.setTransform(-26.35,397.25,0.9973,0.9973,13.7858);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({scaleX:0.9987,scaleY:0.9987,rotation:5.0517,guide:{path:[-26.4,397.3,-56.3,385.6,-104.2,366.8,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.4,352.5,-208.7,355.7,-134.6,383.4]}},99).wait(1));

	// Layer_1_copy_19
	this.instance_64 = new lib.Tween4copy3("synched",0);
	this.instance_64.setTransform(-42.75,390.8,0.9967,0.9967,31.0503);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).to({scaleX:0.9982,scaleY:0.9982,rotation:11.0286,guide:{path:[-42.8,390.9,-68.5,380.8,-104.2,366.8,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.8,-235.9,326.7,-236.4,334.2,-232.8,340.5,-228.1,348.6,-217.4,352.5,-207.7,356,-118,389.7]}},99).wait(1));

	// Layer_1_copy_18
	this.instance_65 = new lib.Tween4copy3("synched",0);
	this.instance_65.setTransform(-59,384.55,0.997,0.997,47.129);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).to({scaleX:0.9981,scaleY:0.9981,rotation:15.7808,guide:{path:[-59,384.6,-79.2,376.7,-104.2,366.9,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.9,-235.9,326.8,-236.4,334.2,-232.8,340.5,-228.1,348.6,-217.4,352.5,-206.9,356.3,-101.4,395.9]}},99).wait(1));

	// Layer_1_copy_17
	this.instance_66 = new lib.Tween4copy3("synched",0);
	this.instance_66.setTransform(-75.2,378.15,0.9969,0.9969,62.7055);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).to({scaleX:0.998,scaleY:0.998,rotation:19.5439,guide:{path:[-75.2,378.2,-88.8,372.8,-104.2,366.8,-163.3,343.6,-220.8,321,-220.7,321.1,-222.6,321,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.5,-206.1,356.6,-85,402]}},99).wait(1));

	// Layer_1_copy_16
	this.instance_67 = new lib.Tween4copy3("synched",0);
	this.instance_67.setTransform(-91.1,372,0.9977,0.9977,-69.6781);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).to({scaleX:0.9983,scaleY:0.9983,rotation:-20.0345,guide:{path:[-91.1,372,-97.5,369.5,-104.2,366.9,-163.3,343.7,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.9,-235.9,326.8,-236.4,334.2,-232.8,340.5,-228.1,348.6,-217.4,352.5,-205.3,356.9,-68.8,408.1]}},99).wait(1));

	// Layer_1_copy_15
	this.instance_68 = new lib.Tween4copy3("synched",0);
	this.instance_68.setTransform(-107,365.7,0.9971,0.9971,-52.1513);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).to({scaleX:0.9985,scaleY:0.9985,rotation:-13.5418,guide:{path:[-107,365.7,-164.7,343.1,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.4,352.5,-204.6,357.1,-52.6,414.1]}},99).wait(1));

	// Layer_1_copy_14
	this.instance_69 = new lib.Tween4copy3("synched",0);
	this.instance_69.setTransform(-122.85,359.55,0.9976,0.9976,-35.5823);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).to({scaleX:0.999,scaleY:0.999,rotation:-8.2612,guide:{path:[-122.8,359.5,-172.4,340.1,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.5,-204,357.3,-36.5,420.1]}},99).wait(1));

	// Layer_1_copy_13
	this.instance_70 = new lib.Tween4copy3("synched",0);
	this.instance_70.setTransform(-138.65,353.35,0.9969,0.9969,-19.5368);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).to({scaleX:0.9992,scaleY:0.9992,rotation:-3.7985,guide:{path:[-138.6,353.3,-180.1,337,-220.8,321,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.4,-203.3,357.5,-20.4,426.2]}},99).wait(1));

	// Layer_1_copy_12
	this.instance_71 = new lib.Tween4copy3("synched",0);
	this.instance_71.setTransform(-154.5,347.15,0.999,0.999,-4.0604);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).to({scaleX:0.9998,scaleY:0.9998,rotation:-0.5457,guide:{path:[-154.4,347.1,-187.9,334,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.5,-202.7,357.8,-4.5,432.2]}},99).wait(1));

	// Layer_1_copy_11
	this.instance_72 = new lib.Tween4copy3("synched",0);
	this.instance_72.setTransform(-170.25,341,0.9979,0.9979,9.789);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).to({scaleX:0.9996,scaleY:0.9996,rotation:1.2613,guide:{path:[-170.2,340.9,-195.7,330.9,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321,-228.2,320.9,-235.7,321.8,-236,326.7,-236.4,334.1,-232.8,340.4,-228.2,348.6,-217.5,352.5,-202.2,358,11.5,438.1]}},99).wait(1));

	// Layer_1_copy_10
	this.instance_73 = new lib.Tween4copy3("synched",0);
	this.instance_73.setTransform(-186.15,334.8,0.9971,0.9971,23.5726);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).to({scaleX:0.9996,scaleY:0.9996,rotation:2.0418,guide:{path:[-186,334.7,-203.5,327.9,-220.8,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.7,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.5,-228.1,348.6,-217.5,352.5,-201.7,358.2,25.1,443.3,26.3,443.8,27.4,444.3]}},99).wait(1));

	// Layer_1_copy_9
	this.instance_74 = new lib.Tween4copy3("synched",0);
	this.instance_74.setTransform(-201.9,328.5,0.9973,0.9973,36.3588);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({scaleX:0.9998,scaleY:0.9998,rotation:1.562,guide:{path:[-201.8,328.6,-211.3,324.8,-220.7,321.1,-220.7,321.1,-222.6,321.1,-224.4,321.1,-228.1,321,-235.6,321.9,-235.9,326.7,-236.4,334.2,-232.8,340.5,-228.1,348.6,-217.4,352.5,-201.6,358.2,25.2,443.3,26.9,444.1,28.6,444.9,32.5,446.8,35.7,449.2,38.9,451.7,40.8,454.3]}},99).wait(1));

	// Layer_1_copy_8
	this.instance_75 = new lib.Tween4copy3("synched",0);
	this.instance_75.setTransform(-217.7,322.25,0.9972,0.9972,48.3608);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-217.6,322.3,-219.2,321.7,-220.7,321,-220.7,321.1,-222.6,321.1,-224.4,321,-228.1,320.9,-235.6,321.8,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.4,-201.6,358.1,25.2,443.2,26.9,444,28.6,444.8,32.6,446.8,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},99).wait(1));

	// Layer_1_copy_7
	this.instance_76 = new lib.Tween4copy3("synched",0);
	this.instance_76.setTransform(-234.35,323.15,0.9977,0.9977,-55.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance_76).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-234.2,323.1,-235.8,324.5,-235.9,326.7,-236.4,334.1,-232.8,340.4,-228.1,348.6,-217.4,352.4,-201.6,358.1,25.2,443.2,26.9,444,28.6,444.8,32.6,446.8,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},94).to({startPosition:0},5).wait(1));

	// Layer_1_copy_6
	this.instance_77 = new lib.Tween4copy3("synched",0);
	this.instance_77.setTransform(-233.5,339.3,0.9973,0.9973,-41.3465);

	this.timeline.addTween(cjs.Tween.get(this.instance_77).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-233.5,339.3,-233.2,339.8,-232.8,340.4,-228.2,348.6,-217.5,352.4,-201.7,358.1,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.2,468,40.8,469.9]}},89).to({startPosition:0},10).wait(1));

	// Layer_1_copy_5
	this.instance_78 = new lib.Tween4copy3("synched",0);
	this.instance_78.setTransform(-223.7,349.6,0.9978,0.9978,-28.5875);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-223.5,349.6,-220.8,351.2,-217.4,352.4,-201.6,358.1,25.2,443.2,26.9,444,28.6,444.8,32.6,446.8,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},85).to({startPosition:0},14).wait(1));

	// Layer_1_copy_4
	this.instance_79 = new lib.Tween4copy3("synched",0);
	this.instance_79.setTransform(-207.25,356.25,0.9976,0.9976,-16.8168);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-207.2,356.2,-165.8,371.6,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.3,468,40.8,469.9]}},81).to({startPosition:0},18).wait(1));

	// Layer_1_copy_3
	this.instance_80 = new lib.Tween4copy3("synched",0);
	this.instance_80.setTransform(-190.95,362.3,0.9987,0.9987,-5.7874);

	this.timeline.addTween(cjs.Tween.get(this.instance_80).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-190.8,362.3,-136.3,382.6,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.7,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},77).wait(23));

	// Layer_1_copy_2
	this.instance_81 = new lib.Tween4copy3("synched",0);
	this.instance_81.setTransform(-176.3,367.8,0.9991,0.9991,4.0094);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-176.2,367.8,-116.9,389.9,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.6,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},73).wait(27));

	// Layer_1_copy
	this.instance_82 = new lib.Tween4copy3("synched",0);
	this.instance_82.setTransform(-161.75,373.3,0.9978,0.9978,13.301);

	this.timeline.addTween(cjs.Tween.get(this.instance_82).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-161.6,373.2,-100.7,396,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.6,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},69).wait(31));

	// Layer_66
	this.instance_83 = new lib.Tween4copy3("synched",0);
	this.instance_83.setTransform(-147.95,378.4,0.9982,0.9982,17.0754);

	this.timeline.addTween(cjs.Tween.get(this.instance_83).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-147.8,378.4,-87.2,401,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.7,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},64).wait(36));

	// Layer_1_copy_20
	this.instance_84 = new lib.Tween4copy3("synched",0);
	this.instance_84.setTransform(-131.25,384.65,0.9987,0.9987,5.0313);

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-131.2,384.6,-72.6,406.6,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.3,468,40.8,469.9]}},59).to({_off:true},6).wait(35));

	// Layer_1_copy_19
	this.instance_85 = new lib.Tween4copy3("synched",0);
	this.instance_85.setTransform(-114.65,390.95,0.9982,0.9982,10.7907);

	this.timeline.addTween(cjs.Tween.get(this.instance_85).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-114.6,390.8,-59.3,411.5,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.2,468,40.8,469.9]}},54).to({_off:true},11).wait(35));

	// Layer_1_copy_18
	this.instance_86 = new lib.Tween4copy3("synched",0);
	this.instance_86.setTransform(-98.2,397.1,0.9982,0.9982,15.3253);

	this.timeline.addTween(cjs.Tween.get(this.instance_86).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-98.1,397,-47.1,416.1,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.7,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},49).to({_off:true},16).wait(35));

	// Layer_1_copy_17
	this.instance_87 = new lib.Tween4copy3("synched",0);
	this.instance_87.setTransform(-81.75,403.2,0.9981,0.9981,19.0602);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-81.6,403.2,-35.8,420.3,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.7,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},44).to({_off:true},21).wait(35));

	// Layer_1_copy_16
	this.instance_88 = new lib.Tween4copy3("synched",0);
	this.instance_88.setTransform(-65.55,409.3,0.9983,0.9983,-19.5334);

	this.timeline.addTween(cjs.Tween.get(this.instance_88).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-65.4,409.2,-25.3,424.3,25.2,443.2,26.9,444,28.6,444.8,32.5,446.8,35.6,449.2,45.6,456.7,43.1,465.1,42.3,468,40.9,469.9]}},39).to({_off:true},26).wait(35));

	// Layer_1_copy_15
	this.instance_89 = new lib.Tween4copy3("synched",0);
	this.instance_89.setTransform(-49.45,415.4,0.9985,0.9985,-13.0679);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-49.3,415.3,-15.4,428,25.2,443.2,26.9,444,28.6,444.8,32.6,446.8,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},34).to({_off:true},31).wait(35));

	// Layer_1_copy_14
	this.instance_90 = new lib.Tween4copy3("synched",0);
	this.instance_90.setTransform(-33.25,421.4,0.999,0.999,-7.8155);

	this.timeline.addTween(cjs.Tween.get(this.instance_90).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-33.2,421.3,-6,431.5,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.3,468,40.8,469.9]}},29).to({_off:true},36).wait(35));

	// Layer_1_copy_13
	this.instance_91 = new lib.Tween4copy3("synched",0);
	this.instance_91.setTransform(-17.25,427.35,0.9992,0.9992,-3.759);

	this.timeline.addTween(cjs.Tween.get(this.instance_91).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-17.2,427.3,3,434.9,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.3,468,40.8,469.9]}},24).to({_off:true},41).wait(35));

	// Layer_1_copy_12
	this.instance_92 = new lib.Tween4copy3("synched",0);
	this.instance_92.setTransform(-1.25,433.4,0.9998,0.9998,-0.5369);

	this.timeline.addTween(cjs.Tween.get(this.instance_92).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-1.2,433.3,11.6,438.1,25.1,443.2,26.8,444,28.5,444.8,32.5,446.8,35.6,449.2,45.5,456.7,43.1,465.1,42.3,468,40.8,469.9]}},19).to({_off:true},46).wait(35));

	// Layer_1_copy_11
	this.instance_93 = new lib.Tween4copy3("synched",0);
	this.instance_93.setTransform(14.7,439.4,0.9997,0.9997,1.0522);

	this.timeline.addTween(cjs.Tween.get(this.instance_93).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[14.9,439.3,20,441.3,25.2,443.2,26.9,444,28.6,444.8,32.6,446.8,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},14).to({_off:true},51).wait(35));

	// Layer_1_copy_10
	this.instance_94 = new lib.Tween4copy3("synched",0);
	this.instance_94.setTransform(30.5,445.9,0.9996,0.9996,1.7984);

	this.timeline.addTween(cjs.Tween.get(this.instance_94).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[30.6,445.8,33.4,447.4,35.7,449.2,45.6,456.7,43.2,465.1,42.3,468,40.9,469.9]}},9).to({_off:true},56).wait(35));

	// Layer_1_copy_9
	this.instance_95 = new lib.Tween4copy3("synched",0);
	this.instance_95.setTransform(42.6,457.15,0.9998,0.9998,1.2864);

	this.timeline.addTween(cjs.Tween.get(this.instance_95).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[42.6,457.1,44.4,461,43.2,465.1,42.3,468,40.9,469.9]}},4).to({_off:true},61).wait(35));

	// Layer_1_copy_8
	this.instance_96 = new lib.Tween4copy3("synched",0);
	this.instance_96.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_96).to({_off:true},65).wait(35));

	// Layer_1_copy_7
	this.instance_97 = new lib.Tween4copy3("synched",0);
	this.instance_97.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_97).to({_off:true},65).wait(35));

	// Layer_1_copy_6
	this.instance_98 = new lib.Tween4copy3("synched",0);
	this.instance_98.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_98).to({_off:true},65).wait(35));

	// Layer_1_copy_5
	this.instance_99 = new lib.Tween4copy3("synched",0);
	this.instance_99.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_99).to({_off:true},65).wait(35));

	// Layer_1_copy_4
	this.instance_100 = new lib.Tween4copy3("synched",0);
	this.instance_100.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_100).to({_off:true},65).wait(35));

	// Layer_1_copy_3
	this.instance_101 = new lib.Tween4copy3("synched",0);
	this.instance_101.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_101).to({_off:true},65).wait(35));

	// Layer_1_copy_2
	this.instance_102 = new lib.Tween4copy3("synched",0);
	this.instance_102.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_102).to({_off:true},65).wait(35));

	// Layer_1_copy
	this.instance_103 = new lib.Tween4copy3("synched",0);
	this.instance_103.setTransform(40.9,470);

	this.timeline.addTween(cjs.Tween.get(this.instance_103).to({_off:true},65).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.9,254.7,300.3,223.60000000000002);


(lib.aliran2_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy_11
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(91.75,-39.4,0.9969,0.9969,-125.8576);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[91.8,-39.3,103.2,-36.7,109.8,-28.5,116.9,-19.7,133.9,5.6,141.7,17.4,149.6,29.2,150.5,31.9,151.3,37,152.8,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.3,254.8,150.2,259.4,149.2,263.7,146.2,277.5,135.6,283,118.8,292,70.6,316.1,70.6,316.1,54,313.4,34.4,309.6,19,304.3,3.7,299.2,-108.9,254.4,-165.3,232,-218.5,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.4,213.5,-237.4,223.4,-235.7,228.5,-233.3,235.3,-225.2,238.7,-213.4,243.8,14,329.5,21.6,331.5,28.7,335.7,41.1,342.6,41.6,351.7]}},90).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9984,scaleY:0.9984,rotation:3112.6772,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.2,-11.9,2,-23.1,11.8,-25.2,21.2,-27.1,51.3,-34,65.2,-37.2,79,-40.3,79.5,-40.4,80.1,-40.4]}},8).wait(1));

	// Layer_1_copy_10
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(152.45,54.45,0.9981,0.9981,161.7152);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[152.5,54.5,152.5,56.6,152.4,58.8,151.9,77.9,150.2,251,150.2,252.9,150.3,254.7,150.2,259.3,149.2,263.6,146.2,277.4,135.6,283,118.8,291.9,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.2,3.7,299.1,-108.9,254.3,-165.3,231.9,-218.5,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.4,213.4,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.2,238.7,-213.4,243.8,14,329.5,21.6,331.4,28.7,335.6,41.1,342.6,41.6,351.6]}},80).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9991,scaleY:0.9991,rotation:3043.7104,guide:{path:[-0.7,-7.2,-0.6,-9.6,-0.2,-11.9,2.1,-23.1,11.9,-25.2,21.2,-27.2,51.4,-34,65.2,-37.2,79,-40.3,83.9,-40.9,90.3,-39.7,102.8,-37.3,109.8,-28.5,116.9,-19.7,134,5.5,141.8,17.3,149.7,29.1,150.5,31.8,151.3,36.8,151.7,39.8,152,42.9]}},18).wait(1));

	// Layer_1_copy_9
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(151.05,167.35,0.9975,0.9975,64.6638);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[151.1,167.4,150.7,203.3,150.2,251,150.2,252.9,150.3,254.7,150.2,259.3,149.3,263.6,146.2,277.4,135.7,283,118.8,291.9,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.5,309.5,19,304.2,3.7,299.1,-108.9,254.3,-165.3,231.9,-218.5,210.7,-218.5,210.7,-220.6,210,-222.7,209.3,-227,207.9,-235.7,206.4,-236.4,213.4,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.2,238.7,-213.4,243.8,14,329.5,21.6,331.4,28.8,335.6,41.1,342.6,41.6,351.6]}},71).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9988,scaleY:0.9988,rotation:2945.4514,guide:{path:[-0.8,-7.2,-0.7,-9.6,-0.2,-11.8,2,-23.1,11.8,-25.2,21.2,-27.1,51.4,-34,65.2,-37.2,79,-40.3,83.9,-40.9,90.2,-39.6,102.8,-37.3,109.8,-28.5,116.8,-19.7,133.9,5.6,141.8,17.4,149.6,29.2,150.4,31.9,151.2,37,152.7,47,152.4,58.8,152,71.8,151.1,155.7]}},27).wait(1));

	// Layer_1_copy_8
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(146.3,272,0.9971,0.9971,-32.0772);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[146.3,272,142.6,279.3,135.6,283,118.8,291.9,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.2,3.7,299.1,-109,254.3,-165.3,231.9,-218.5,210.7,-218.5,210.7,-227.1,207.9,-235.8,206.4,-236.5,213.4,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.3,238.7,-213.4,243.8,14,329.5,21.6,331.4,28.7,335.6,41.1,342.6,41.6,351.6]}},62).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9985,scaleY:0.9985,rotation:3207.3858,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.2,-11.9,2,-23.2,11.8,-25.2,21.2,-27.2,51.4,-34.1,65.2,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.6,116.8,-19.7,133.9,5.6,141.8,17.4,149.6,29.1,150.4,31.9,151.2,36.9,152.7,46.9,152.4,58.8,151.9,77.9,150.2,251,150.2,252.9,150.2,254.7,150.2,258,149.7,261.1]}},36).wait(1));

	// Layer_1_copy_7
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(52.15,312.95,0.9968,0.9968,-128.3723);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[52.1,312.9,33.7,309.2,19,304.2,3.7,299.1,-109,254.3,-165.3,231.9,-218.5,210.7,-218.5,210.7,-227.1,207.9,-235.8,206.4,-236.5,213.4,-237.4,223.4,-235.7,228.4,-233.4,235.2,-225.3,238.7,-213.4,243.8,13.9,329.5,21.6,331.4,28.7,335.6,41,342.6,41.6,351.6]}},53).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9984,scaleY:0.9984,rotation:3109.1287,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.2,-11.9,2,-23.2,11.8,-25.2,21.2,-27.2,51.4,-34,65.2,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.8,-19.7,133.9,5.6,141.8,17.4,149.6,29.2,150.4,31.9,151.2,36.9,152.7,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.2,254.7,150.2,259.3,149.2,263.6,146.1,277.4,135.6,283,118.8,292,70.7,316,70.7,316.1,69,315.8,67.3,315.5,63.8,314.9]}},45).wait(1));

	// Layer_1_copy_6
	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.setTransform(-51.7,277.15,0.9968,0.9968,127.8752);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-51.7,277,-76.3,267.3,-109,254.3,-165.3,231.9,-218.6,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.5,213.4,-237.5,223.4,-235.8,228.4,-233.4,235.2,-225.3,238.7,-213.5,243.8,13.9,329.5,21.5,331.4,28.7,335.6,41,342.6,41.5,351.6]}},44).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9984,scaleY:0.9984,rotation:3010.8713,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.2,-11.9,2,-23.2,11.8,-25.2,21.2,-27.2,51.4,-34,65.2,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.8,-19.7,133.9,5.6,141.8,17.4,149.6,29.2,150.4,31.9,151.2,36.9,152.7,47,152.4,58.9,151.8,78,150.1,251,150.2,252.9,150.2,254.7,150.1,259.3,149.2,263.6,146.1,277.4,135.6,283,118.7,292,70.6,316,70.6,316.1,66.5,315.4,62.4,314.7,54.1,313.3,34.5,309.5,19.1,304.3,9.3,301,-40.7,281.3]}},54).wait(1));

	// Layer_1_copy_5
	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(-149.45,238.3,0.9971,0.9971,31.6033);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-149.4,238.2,-184.6,224.2,-218.6,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.5,213.4,-237.5,223.4,-235.8,228.4,-233.4,235.2,-225.3,238.7,-213.5,243.8,13.9,329.5,21.5,331.4,28.7,335.6,41,342.6,41.5,351.6]}},35).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9985,scaleY:0.9985,rotation:2912.6142,guide:{path:[-0.7,-7.3,-0.6,-9.7,-0.2,-11.9,2,-23.2,11.7,-25.2,21.1,-27.2,51.3,-34,65.1,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.9,-19.7,133.9,5.6,141.7,17.4,149.6,29.2,150.4,31.9,151.3,36.9,152.8,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.2,254.7,150.2,259.3,149.2,263.6,146.2,277.4,135.6,283,118.8,292,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.3,3.8,299.1,-109,254.3,-123.8,248.4,-138.5,242.6]}},63).wait(1));

	// Layer_1_copy_4
	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(-236.9,221.7,0.9975,0.9975,-63.1559);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-236.8,221.7,-236.7,225.7,-235.8,228.4,-233.4,235.2,-225.3,238.7,-213.5,243.8,13.9,329.5,21.5,331.4,28.7,335.6,41,342.6,41.5,351.6]}},26).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9988,scaleY:0.9988,rotation:3174.5486,guide:{path:[-0.9,-7.3,-0.8,-9.7,-0.3,-11.9,1.9,-23.2,11.7,-25.2,21.1,-27.2,51.3,-34,65.2,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.9,-19.7,133.9,5.6,141.8,17.4,149.6,29.2,150.4,31.9,151.2,36.9,152.7,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.2,254.7,150.2,259.3,149.2,263.6,146.1,277.4,135.6,283,118.8,292,70.6,316,70.6,316.1,66.5,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.3,3.7,299.1,-109,254.3,-165.3,232,-218.5,210.7,-218.5,210.7,-227.1,207.9,-233.5,206.8,-235.6,210.3]}},72).wait(1));

	// Layer_1_copy_3
	this.instance_8 = new lib.Tween4("synched",0);
	this.instance_8.setTransform(-137.95,272.15,0.9979,0.9979,-154.6818);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-137.8,272.1,-80.5,293.8,14,329.5,21.6,331.4,28.7,335.6,41.1,342.6,41.6,351.6]}},17).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9991,scaleY:0.9991,rotation:3076.2896,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.3,-11.9,1.9,-23.2,11.7,-25.2,21.1,-27.2,51.3,-34,65.1,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.9,-19.7,133.9,5.6,141.7,17.4,149.6,29.2,150.5,31.9,151.3,36.9,152.8,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.3,254.7,150.2,259.3,149.2,263.6,146.2,277.4,135.6,283,118.8,292,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.3,3.7,299.1,-108.9,254.3,-165.3,232,-218.5,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.4,213.5,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.2,238.7,-218.8,241.4,-148.9,267.9]}},81).wait(1));

	// Layer_1_copy_2
	this.instance_9 = new lib.Tween4("synched",0);
	this.instance_9.setTransform(-37.75,310.05,0.9994,0.9994,87.2258);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[-37.6,310,-13.3,319.1,14,329.5,21.6,331.4,28.7,335.6,41.1,342.6,41.6,351.6]}},8).to({guide:{path:[41.6,351.7,41.1,342.6,28.7,335.6,21.6,331.5,14,329.5,-213.4,243.8,-225.2,238.7,-233.3,235.2,-235.7,228.4,-237.4,223.4,-236.4,213.5,-235.8,206.4,-227.1,207.9,-222.8,209.3,-220.6,210,-218.5,210.7,-218.5,210.7,-165.3,232,-108.9,254.3,3.7,299.1,19,304.3,34.4,309.5,54,313.3,70.6,316.1,70.6,316.1,118.8,292,135.6,283,146.2,277.5,149.2,263.7,150.2,259.4,150.3,254.8,150.2,252.9,150.2,251,151.9,78,152.4,58.9,152.8,47,151.3,36.9,150.5,31.9,149.6,29.2,141.7,17.4,133.9,5.6,116.9,-19.7,109.8,-28.5,102.8,-37.3,90.2,-39.6,83.9,-40.9,79,-40.3,65.1,-37.2,51.3,-34,21.1,-27.1,11.7,-25.2,1.9,-23.1,-0.3,-11.9,-0.7,-9.6,-0.8,-7.2]}},1).to({scaleX:0.9995,scaleY:0.9995,rotation:2978.0471,guide:{path:[-0.8,-7.3,-0.7,-9.7,-0.3,-11.9,1.9,-23.2,11.7,-25.2,21.1,-27.2,51.3,-34,65.1,-37.2,79,-40.4,83.9,-40.9,90.2,-39.7,102.8,-37.3,109.8,-28.5,116.9,-19.7,133.9,5.6,141.7,17.4,149.6,29.2,150.5,31.9,151.3,36.9,152.8,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.3,254.7,150.2,259.3,149.2,263.6,146.2,277.4,135.6,283,118.8,292,70.6,316,70.6,316.1,66.4,315.4,62.3,314.7,54,313.3,34.4,309.5,19,304.3,3.7,299.1,-108.9,254.3,-165.3,232,-218.5,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.4,213.5,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.2,238.7,-215.2,243,-48.5,305.9]}},90).wait(1));

	// Layer_1_copy
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:2880,guide:{path:[-0.8,-7.2,-0.7,-9.6,-0.3,-11.9,1.9,-23.1,11.7,-25.2,21.1,-27.1,51.3,-34,65.1,-37.2,79,-40.3,83.9,-40.9,90.2,-39.6,102.8,-37.3,109.8,-28.5,116.9,-19.7,133.9,5.6,141.7,17.4,149.6,29.2,150.5,31.9,151.3,36.9,152.8,47,152.4,58.9,151.9,78,150.2,251,150.2,252.9,150.3,254.8,150.2,259.4,149.2,263.7,146.2,277.5,135.6,283,118.8,292,70.6,316.1,70.6,316.1,54,313.3,34.4,309.5,19,304.3,3.7,299.1,-108.9,254.3,-165.3,232,-218.5,210.7,-218.5,210.7,-220.6,210,-222.8,209.3,-227.1,207.9,-235.8,206.4,-236.4,213.5,-237.4,223.4,-235.7,228.4,-233.3,235.2,-225.2,238.7,-213.4,243.8,14,329.5,21.6,331.5,28.7,335.6,41.1,342.6,41.6,351.7]}},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.5,-49.4,406.8,409.4);


(lib.aliran1_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0,-7.2,5.3,-5,99.5,32.3,199.1,71.8,199.3,71.9,202.8,74,205.9,77.3,212,83.9,210.4,91.5,208.9,99,202.1,100.7,200.1,101.1,197.7,101.1,196.7,101,196.3,100.9,195.8,100.9,195.9,101,196,101.1,75.8,52.2,-44.4,3.2,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.7,-474,-39.6,-472,-30.5,-471.1,-26,-470.1,-21.4,-470.2,-21.4]}},199).wait(1));

	// Layer_1_copy_4
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(0,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[0,-7.2,5.3,-5,99.5,32.3,199.1,71.8,199.3,71.9,202.8,74,205.9,77.3,212,83.9,210.4,91.5,208.9,99,202.1,100.7,200.1,101.1,197.7,101.1,196.7,101,196.3,100.9,195.8,100.9,195.9,101,196,101.1,75.8,52.2,-44.4,3.2,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.7,-474,-39.6,-472,-30.5,-471.1,-26,-470.1,-21.4,-470.2,-21.4]}},199).wait(1));

	// Layer_1_copy_3
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(207.05,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[207.1,98.1,205.1,99.9,202.1,100.7,200.1,101.1,197.7,101.1,196.7,101,196.3,100.9,195.8,100.9,195.9,101,196,101.1,75.8,52.2,-44.4,3.2,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.7,-474,-39.6,-472,-30.5,-471.1,-26,-470.1,-21.4,-470.2,-21.4]}},149).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0.1,-7.2,5.3,-5.1,99.6,32.3,199.1,71.7,199.2,71.9,202.8,73.9,205.8,77.2,211.9,83.9,210.4,91.4,210.1,92.8,209.7,93.9]}},49).wait(1));

	// Layer_1_copy_2
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(-49,1.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[-49,1.4,-147.3,-38.7,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.8,-474,-39.7,-472,-30.6,-471.1,-26.1,-470.1,-21.5,-470.2,-21.5]}},99).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0.1,-7.2,5.3,-5,99.5,32.4,199.1,71.8,199.2,71.9,202.8,74,205.8,77.3,211.9,83.9,210.4,91.5,208.8,99,202.1,100.7,200,101.1,197.7,101.1,196.8,101,196.3,100.9,195.8,100.9,195.8,101,196,101.1,135.9,76.6,75.9,52.2,-44.3,3.3]}},99).wait(1));

	// Layer_1
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(-280.25,-92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[-280.1,-92.8,-282.6,-93.8,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.8,-474,-39.7,-472,-30.6,-471.1,-26.1,-470.1,-21.5,-470.2,-21.5]}},49).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0,-7.2,5.3,-5.1,99.5,32.2,199.1,71.7,199.3,71.9,202.8,73.9,205.9,77.2,212,83.9,210.4,91.4,208.9,98.9,202.1,100.6,200.1,101.1,197.7,101,196.7,101,196.3,101,195.8,101,195.9,101,196,101.1,78.1,53.1,-39.7,5.1,-275.6,-91]}},149).wait(1));

	// Layer_1_copy_4
	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(120,40.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({guide:{path:[120,40.4,199.1,71.8,199.3,71.9,202.8,74,205.9,77.3,212,83.9,210.4,91.5,208.9,99,202.1,100.7,200.1,101.1,197.7,101.1,196.7,101,196.3,100.9,195.8,100.9,195.9,101,196,101.1,75.8,52.2,-44.4,3.2,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.7,-474,-39.6,-472,-30.5,-471.1,-26,-470.1,-21.4,-470.2,-21.4]}},173).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},2).to({guide:{path:[0.1,-7.2,5.3,-5.1,99.5,32.2,107.8,35.5,115.4,38.5]}},24).wait(1));

	// Layer_1_copy_3
	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(70.35,49.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({guide:{path:[70.3,50,-49.9,1,-285.1,-94.8,-289.2,-97.4,-297.4,-98.9,-302.9,-99.8,-309.1,-99.8,-321.1,-99.8,-335.4,-96.1,-355.1,-91,-419.4,-73.6,-477.8,-57.7,-477.9,-57.7,-477.9,-57.8,-476.9,-53.2,-476,-48.7,-474,-39.6,-472,-30.6,-471.1,-26,-470.1,-21.5,-470.2,-21.5]}},124).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0.1,-7.2,5.3,-5,99.6,32.4,199.1,71.8,199.2,71.9,202.8,74,205.8,77.3,211.9,83.9,210.4,91.5,208.8,99,202.1,100.7,200,101.1,197.7,101.1,196.8,101,196.3,100.9,195.8,100.9,195.8,101,195.9,101.1,165.7,88.8,135.5,76.5,75,51.9]}},74).wait(1));

	// Layer_1_copy_2
	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.setTransform(-165.35,-46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({guide:{path:[-165.3,-46.1,-220.9,-68.6,-285,-94.8,-289.1,-97.4,-297.3,-98.9,-302.9,-99.8,-309,-99.8,-321,-99.8,-335.3,-96.1,-355,-91,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.8,-474,-39.7,-472,-30.6,-471.1,-26.1,-470.1,-21.5,-470.2,-21.5]}},74).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0.1,-7.3,5.3,-5.1,99.5,32.2,199.1,71.7,199.2,71.9,202.8,73.9,205.8,77.2,211.9,83.9,210.4,91.4,208.8,98.9,202.1,100.6,200,101.1,197.7,101,196.8,101,196.3,101,195.8,101,195.8,101,196,101.1,106.8,64.8,17.7,28.5,-160.7,-44.2]}},124).wait(1));

	// Layer_1
	this.instance_8 = new lib.Tween3("synched",0);
	this.instance_8.setTransform(-403,-78.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({guide:{path:[-402.9,-78,-410.7,-75.9,-419.4,-73.6,-477.8,-57.7,-477.8,-57.7,-477.9,-57.8,-477,-53.3,-476,-48.7,-474,-39.6,-472,-30.6,-471.1,-26.1,-470.1,-21.5,-470.2,-21.5]}},24).to({guide:{path:[-470.2,-21.4,-470.1,-21.4,-471.1,-26,-472,-30.5,-474,-39.6,-476,-48.7,-477,-53.3,-477.9,-57.8,-477.8,-57.7,-477.8,-57.7,-419.4,-73.6,-355,-91,-335.3,-96.1,-321,-99.8,-309,-99.8,-302.9,-99.8,-297.3,-98.9,-289.1,-97.4,-285,-94.8,-44.4,3.2,75.8,52.2,196,101.1,195.9,101,195.8,100.9,196.3,100.9,196.7,101,197.7,101.1,200.1,101.1,202.1,100.7,208.9,99,210.4,91.5,212,83.9,205.9,77.3,202.8,74,199.3,71.9,199.1,71.8,99.5,32.3,5.3,-5,0,-7.2]}},1).to({guide:{path:[0,-7.2,5.2,-5,99.5,32.3,199.1,71.8,199.2,71.9,202.8,74,205.8,77.3,211.9,83.9,210.4,91.5,208.8,99,202.1,100.7,200,101.1,197.7,101.1,196.8,101,196.3,100.9,195.8,100.9,195.8,101,196,101.1,75.8,52.2,-44.5,3.2,-285.1,-94.8,-289.2,-97.4,-297.4,-98.9,-302.9,-99.8,-309.1,-99.8,-321.1,-99.8,-335.4,-96.1,-351.6,-91.9,-398.1,-79.3]}},174).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.2,-108.2,705.7,217.60000000000002);


(lib.aliaran6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.salju();
	this.instance.setTransform(-33.65,-5.45,0.2735,0.2735,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Layer_4_copy_6
	this.instance_1 = new lib.salju();
	this.instance_1.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:63.2,y:-16.05},11).to({_off:true},1).wait(5));

	// Layer_4_copy_7
	this.instance_2 = new lib.salju();
	this.instance_2.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:63.2,y:-16.05},10).wait(1));

	// Layer_4_copy_8
	this.instance_3 = new lib.salju();
	this.instance_3.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:63.2,y:-16.05},10).to({_off:true},1).wait(3));

	// Layer_4_copy_3
	this.instance_4 = new lib.salju();
	this.instance_4.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:60.8,y:-35.15},11).to({_off:true},1).wait(5));

	// Layer_4_copy_4
	this.instance_5 = new lib.salju();
	this.instance_5.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:60.8,y:-35.15},10).wait(1));

	// Layer_4_copy_5
	this.instance_6 = new lib.salju();
	this.instance_6.setTransform(-29.7,2.6,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:60.8,y:-35.15},10).to({_off:true},1).wait(3));

	// Layer_4_copy
	this.instance_7 = new lib.salju();
	this.instance_7.setTransform(-30.65,-0.2,0.2735,0.2735,0,0,0,0,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:39.25,y:-26.95},11).to({_off:true},1).wait(5));

	// Layer_4_copy_2
	this.instance_8 = new lib.salju();
	this.instance_8.setTransform(-30.65,-0.2,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({x:39.25,y:-26.95},10).wait(1));

	// Layer_4
	this.instance_9 = new lib.salju();
	this.instance_9.setTransform(-30.65,-0.2,0.2735,0.2735,0,0,0,0,-12.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({x:39.25,y:-26.95},10).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-38.6,103.80000000000001,44.7);


(lib.kompresor = function(mode,startPosition,loop,reversed) {
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
	this.mgc = new lib.Symbol8();
	this.mgc.name = "mgc";
	this.mgc.setTransform(-18.55,-65.95,0.3385,0.3979,0,-175.5834,-151.0851,108.8,111.9);

	this.instance = new lib.Symbol8();
	this.instance.setTransform(-5.55,-64.95,0.3385,0.3979,0,-175.5834,-151.0851,108.8,111.9);

	this.instance_1 = new lib.isi_kompresor();
	this.instance_1.setTransform(-35.7,-122.25,0.3081,0.4164,0,0.0147,19.8772,-110,-220.8);

	this.engine = new lib.engine();
	this.engine.name = "engine";
	this.engine.setTransform(-145,-188.5,0.1697,0.2357,0,0.0148,19.8722,-110.7,-220.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.engine},{t:this.instance_1},{t:this.instance},{t:this.mgc}]}).wait(1));

	// Layer_2
	this.instance_2 = new lib.Bitmap5();
	this.instance_2.setTransform(-37,-151);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(1,1,1).p("AjdnpQBMAEBWApQCrBSA2C7QA7DJgDCQQgCBqgjBGQgbA3hEArQhDAqg8AE");
	this.shape.setTransform(17.1323,-62.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kompresor, new cjs.Rectangle(-144.9,-188.6,288.9,186.2), null);


(lib.aliran = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// aliran1
	this.aliran7_r = new lib.aliran7_r();
	this.aliran7_r.name = "aliran7_r";
	this.aliran7_r.setTransform(98.1,-79.85,0.7372,0.7372,0,0,0,0,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.aliran7_r).wait(1));

	// aliran_2
	this.aliran2_r = new lib.aliran2_r();
	this.aliran2_r.name = "aliran2_r";
	this.aliran2_r.setTransform(-229.4,-84.1,0.7372,0.7372,0,0,0,0,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.aliran2_r).wait(1));

	// aliran_3
	this.aliran3_r = new lib.aliran3_r();
	this.aliran3_r.name = "aliran3_r";
	this.aliran3_r.setTransform(-229.4,-84.1,0.7372,0.7372,0,0,0,0,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.aliran3_r).wait(1));

	// aliran4
	this.aliran4_r = new lib.aliran4_r();
	this.aliran4_r.name = "aliran4_r";
	this.aliran4_r.setTransform(-231.65,258.65,1,1,0,0,0,0,-63.2);

	this.timeline.addTween(cjs.Tween.get(this.aliran4_r).wait(1));

	// aliaran5
	this.aliran5_r = new lib.aliran5_r();
	this.aliran5_r.name = "aliran5_r";
	this.aliran5_r.setTransform(70.3,257.85,1,1,0,0,0,0,-157);

	this.timeline.addTween(cjs.Tween.get(this.aliran5_r).wait(1));

	// aliran6
	this.aliran6_r = new lib.aliaran6();
	this.aliran6_r.name = "aliran6_r";
	this.aliran6_r.setTransform(227.75,79.65,1,1,0,0,0,0,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.aliran6_r).wait(1));

	// alira7
	this.aliran1_r = new lib.aliran1_r();
	this.aliran1_r.name = "aliran1_r";
	this.aliran1_r.setTransform(98.1,-79.85,0.7372,0.7372,0,0,0,0,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.aliran1_r).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aliran, new cjs.Rectangle(-411.4,-148.6,705.9,582.5), null);


(lib.AC_MOBIL = function(mode,startPosition,loop,reversed) {
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
		this.stop();
		
		this.suhu.visible = false;
		this.freon.visible = false; 
		this.tekanan.visible = false;
		this.komponen.visible = false;
			
		
		// Menambahkan event listener untuk klik pada tombol
		this.btn_suhu.addEventListener("click", perubahanSuhu.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var suhu_aktif = true; // Bisa diset ke false jika ingin memulai dengan suhu tersembunyi
		kompresor_off.call(this);
		function perubahanSuhu() {
		    suhu_aktif = !suhu_aktif; 
			// Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'suhu'
		    if (suhu_aktif) {
		        this.suhu.visible = false;  // Menyembunyikan objek 'suhu'
				//kipas_putar.call(this);
				
				
		    } else {
		        this.suhu.visible = true;   // Menampilkan objek 'suhu'
				//kipas_mati.call(this);
				
				
				
		    }
		
		
		}
		
		// Menambahkan event listener untuk klik pada tombol btn_freon
		this.btn_freon.addEventListener("click", perubahan_freon.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var aktif = true; // Bisa diset ke false jika ingin memulai dengan freon tersembunyi
		
		function perubahan_freon() {
		     aktif = !aktif; // Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'freon'
		    if (aktif) {
		        this.freon.visible = false;  // Menyembunyikan objek 'freon'
		    } else {
		        this.freon.visible = true;   // Menampilkan objek 'freon'
		    }
		
		}
		
		// Menambahkan event listener untuk klik pada tombol btn_tekanan
		this.btn_tekanan.addEventListener("click", perubahan_tekanan.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var aktif = true; // Bisa diset ke false jika ingin memulai dengan tekanan tersembunyi
		
		function perubahan_tekanan() {
		     aktif = !aktif; 
			// Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'tekanan'
		    if (aktif) {
		        this.tekanan.visible = false;  // Menyembunyikan objek 'tekanan'
		    } else {
		        this.tekanan.visible = true;   // Menampilkan objek 'tekanan'
		    }
		
		}
		
		// Menambahkan event listener untuk klik pada tombol btn_tekanan
		this.btn_komp.addEventListener("click", perubahan_komp.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var aktif = true; // Bisa diset ke false jika ingin memulai dengan tekanan tersembunyi
		
		function perubahan_komp() {
		     aktif = !aktif; 
			// Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'tekanan'
		    if (aktif) {
		        this.komponen.visible = false;  // Menyembunyikan objek 'tekanan'
		    } else {
		        this.komponen.visible = true;   // Menampilkan objek 'tekanan'
		    }
		
		}
		this.knob_suhu.plus.addEventListener("click",suhu_tambah.bind(this));
		this.knob_suhu.min.addEventListener("click",suhu_kurang.bind(this));
		
		this.knob_suhu.rotation=135;
		
		
		function suhu_tambah() {
			
			
			if(this.knob_suhu.rotation>=135 && this.knob_suhu.rotation <270){
		    // Menambah rotasi sebesar 18 derajat
		    this.knob_suhu.rotation += 45; }
			
			kompresor.call(this);
		
		    // Membatasi rotasi pada rentang 0 hingga 360 derajat
		    if (this.knob_suhu.rotation >= 360) {
		        this.knob_suhu.rotation -= 360;
		    }
			 this.posisi_suhu.text = this.knob_suhu.rotation;
		
			
			//// output
			aliran_off.call(this);
			aliran_on.call(this);
		
			
			
		}
		
		function suhu_kurang() {
			if(this.knob_suhu.rotation>135 && this.knob_suhu.rotation <=270){
		    // Menambah rotasi sebesar 18 derajat
		    this.knob_suhu.rotation -= 45; }
			
			kompresor.call(this);
		
		    // Membatasi rotasi pada rentang 0 hingga 360 derajat
		    if (this.knob_suhu.rotation >= 360) {
		        this.knob_suhu.rotation -= 360;
		    }
		
			 this.posisi_suhu.text = this.knob_suhu.rotation;
		
		
		
			//// output
			aliran_off.call(this);
			aliran_on.call(this);
			
			
			
		}
		
		
		
		this.knob_blower.plus.addEventListener("click",blower_tambah.bind(this));
		this.knob_blower.min.addEventListener("click",blower_kurang.bind(this));
		
		this.knob_blower.rotation=135;
		
		function blower_tambah() {
			
			
			if(this.knob_blower.rotation>=135 && this.knob_blower.rotation <270){
		    // Menambah rotasi sebesar 45 derajat
		    this.knob_blower.rotation += 45;
			}
		
			kompresor.call(this);
			atur_blower.call(this);
		
		
		    // Membatasi rotasi pada rentang 0 hingga 360 derajat
		    if (this.knob_blower.rotation >= 360) {
		        this.knob_blower.rotation -= 360;
		    }
			 this.posisi_blower.text = this.knob_blower.rotation;
		
		
			//// output
			aliran_off.call(this);
			aliran_on.call(this);
		
			
			
		
		}
		
		function blower_kurang() {
			kipas_mati.call(this);
			if(this.knob_blower.rotation>135 && this.knob_blower.rotation <=270){
		    // Menambah rotasi sebesar 45 derajat
		    this.knob_blower.rotation -= 45;
			}
			
			kompresor.call(this);
			atur_blower.call(this);
		
		    // Membatasi rotasi pada rentang 0 hingga 360 derajat
		    if (this.knob_blower.rotation >= 360) {
		        this.knob_blower.rotation -= 360;
		    }
		
			 this.posisi_blower.text = this.knob_blower.rotation;
		
		
		
			//// output
			aliran_off.call(this);
			aliran_on.call(this);
			
			
			
		}
		//this.dashboard.visible = false;
		// Menambahkan event listener untuk klik pada tombol
		this.btn_dash.addEventListener("click", tampil_dashboard.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var dashboard_aktif = true; // Bisa diset ke false jika ingin memulai dengan suhu tersembunyi
		// this.dashboard.visible = false; 
		function tampil_dashboard() {
		    dashboard_aktif = !dashboard_aktif; 
			// Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'suhu'
		    if (dashboard_aktif) {
		        this.dashboard.visible = true;  // Menyembunyikan objek 'suhu'
				
		    } else {
		        this.dashboard.visible = false;   // Menampilkan objek 'suhu'
				
		    }
		
		
		}
		
		
		
		     //this.kotak.visible = false; 
		this.btn_kon.addEventListener("click", tampil_kond.bind(this));
		
		// Inisialisasi status 'aktif' dengan var, bisa diset ke true atau false
		var kond_aktif = true; // Bisa diset ke false jika ingin memulai dengan suhu tersembunyi
		 //this.kond.visible = false; 
		function tampil_kond() {
		    kond_aktif = !kond_aktif; 
			// Mengecek status 'aktif' untuk menampilkan atau menyembunyikan 'suhu'
		    if (kond_aktif) {
		        this.kotak.visible = true;  // Menyembunyikan objek 'suhu'
				
		    } else {
		        this.kotak.visible = false;   // Menampilkan objek 'suhu'
				
		    }
		
		}
		function kipas_putar(){// Kecepatan rotasi
		
		    this.kipas_ac.fan.play(this);
			this.kipas_ac.kipas_in.play(this);
			this.kipas_ac.kipas_out.play(this);
		
		}
		
		function kipas_mati(){// Kecepatan rotasi
			this.kipas_ac.fan.stop(this);
			this.kipas_ac.kipas_in.gotoAndStop(0);
			this.kipas_ac.kipas_out.gotoAndStop(0);
		}
		aliran_off.call(this);
		
		function aliran_on(){// Kecepatan rotasi
			if(this.knob_suhu.rotation>=136 && this.knob_blower.rotation>=136){
		    this.aliran.aliran1_r.play();
			this.aliran.aliran2_r.play();
			this.aliran.aliran3_r.play();
			this.aliran.aliran4_r.play();
			this.aliran.aliran5_r.play();
			this.aliran.aliran6_r.play();
			this.aliran.aliran7_r.play();
			this.aliran.aliran8_r.play();
				
				
			
			}
		
		}
		
		function aliran_off(){// Kecepatan rotasi
			if(this.knob_suhu.rotation==135 || this.knob_blower.rotation==135){
			this.aliran.aliran1_r.stop();
			this.aliran.aliran2_r.stop();
			this.aliran.aliran3_r.stop();
			this.aliran.aliran4_r.stop();
			this.aliran.aliran5_r.stop();
			this.aliran.aliran6_r.stop();
			this.aliran.aliran7_r.stop();
			this.aliran.aliran8_r.stop();
				
				
			
			}
		}
		function atur_blower(){// Kecepatan rotasi
			if(this.knob_blower.rotation==135){
		    this.blower.blower1.gotoAndStop(0);
			this.blower.blower2.gotoAndStop(0);
			this.blower.blower3.gotoAndStop(0);
			this.blower.blower4.gotoAndStop(0);
				
				 this.dashboard.gotoAndStop(0);
			}
			if(this.knob_blower.rotation==180){
		    this.blower.blower1.gotoAndPlay(1);
			this.blower.blower2.gotoAndPlay(1);
			this.blower.blower3.gotoAndPlay(1);
			this.blower.blower4.gotoAndPlay(1);
				
				this.dashboard.play();
			}
			if(this.knob_blower.rotation==225){
		    this.blower.blower1.gotoAndPlay(60);
			this.blower.blower2.gotoAndPlay(60);
			this.blower.blower3.gotoAndPlay(60);
			this.blower.blower4.gotoAndPlay(60);
				
				this.dashboard.play();
			}
			if(this.knob_blower.rotation==270){
		    this.blower.blower1.gotoAndPlay(90);
			this.blower.blower2.gotoAndPlay(90);
			this.blower.blower3.gotoAndPlay(90);
			this.blower.blower4.gotoAndPlay(90);
				
				this.dashboard.play();
			}
			
		}
		function kompresor(){
			
			if(this.knob_suhu.rotation>=136 && this.knob_blower.rotation>=136){
				kompresor_on.call(this);
				}
			if(this.knob_suhu.rotation==135||this.knob_blower.rotation==135){
				kompresor_off.call(this);
				}
			
			}
		
		
		
		
		function kompresor_off() {
				this.kompresor.mgc.x = -12;
				this.kompresor.mgc.stop();
				
				kipas_mati.call(this);
				
		}
		
		
		function kompresor_on() {
				this.kompresor.mgc.x = -4;
				this.kompresor.mgc.play();
				
				kipas_putar.call(this);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ket
	this.komponen = new lib.komponen();
	this.komponen.name = "komponen";
	this.komponen.setTransform(25.2,-346.25);

	this.text = new cjs.Text("KOMPONEN", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(731.85,-660.6);

	this.btn_komp = new lib.btn();
	this.btn_komp.name = "btn_komp";
	this.btn_komp.setTransform(732.95,-650.9,1.1385,1);
	new cjs.ButtonHelper(this.btn_komp, 0, 1, 2);

	this.suhu = new lib.suhu();
	this.suhu.name = "suhu";
	this.suhu.setTransform(66.45,-387.8,1,1,0,0,0,-0.2,-0.1);

	this.text_1 = new cjs.Text("BENTUK FREON", "14px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 117;
	this.text_1.parent = this;
	this.text_1.setTransform(738.4,-517.6);

	this.btn_freon = new lib.btn();
	this.btn_freon.name = "btn_freon";
	this.btn_freon.setTransform(732.95,-509.9,1.1384,1);
	new cjs.ButtonHelper(this.btn_freon, 0, 1, 2);

	this.text_2 = new cjs.Text("TEKANAN", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(734.45,-562.6);

	this.btn_tekanan = new lib.btn();
	this.btn_tekanan.name = "btn_tekanan";
	this.btn_tekanan.setTransform(732.95,-555.9,1.1384,1);
	new cjs.ButtonHelper(this.btn_tekanan, 0, 1, 2);

	this.text_3 = new cjs.Text("TEMPERATUR", "14px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 18;
	this.text_3.lineWidth = 110;
	this.text_3.parent = this;
	this.text_3.setTransform(734.85,-611.6);

	this.btn_suhu = new lib.btn();
	this.btn_suhu.name = "btn_suhu";
	this.btn_suhu.setTransform(732.95,-603.9,1.1385,1);
	new cjs.ButtonHelper(this.btn_suhu, 0, 1, 2);

	this.freon = new lib.freon();
	this.freon.name = "freon";
	this.freon.setTransform(-103.7,-568.95,0.196,0.196);

	this.tekanan = new lib.tekanan();
	this.tekanan.name = "tekanan";
	this.tekanan.setTransform(-144.95,-603,1,1,0,0,0,-0.1,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tekanan},{t:this.freon},{t:this.btn_suhu},{t:this.text_3},{t:this.btn_tekanan},{t:this.text_2},{t:this.btn_freon},{t:this.text_1},{t:this.suhu},{t:this.btn_komp},{t:this.text},{t:this.komponen}]}).wait(1));

	// selector
	this.posisi_blower = new cjs.Text("", "22px 'Arial'", "#CCCCCC");
	this.posisi_blower.name = "posisi_blower";
	this.posisi_blower.lineHeight = 27;
	this.posisi_blower.lineWidth = 100;
	this.posisi_blower.parent = this;
	this.posisi_blower.setTransform(689.9,-343.15);

	this.text_4 = new cjs.Text("", "22px 'ArialMT'");
	this.text_4.lineHeight = 27;
	this.text_4.lineWidth = 100;
	this.text_4.parent = this;
	this.text_4.setTransform(1531.85,-399.85);

	this.posisi_suhu = new cjs.Text("", "22px 'Arial'", "#CCCCCC");
	this.posisi_suhu.name = "posisi_suhu";
	this.posisi_suhu.lineHeight = 27;
	this.posisi_suhu.lineWidth = 100;
	this.posisi_suhu.parent = this;
	this.posisi_suhu.setTransform(689.9,-376.85);

	this.text_5 = new cjs.Text("A/C SWITCH", "12px 'Arial Rounded MT Bold'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 16;
	this.text_5.lineWidth = 100;
	this.text_5.parent = this;
	this.text_5.setTransform(661.65,-286.7);

	this.knob_suhu = new lib.selctor();
	this.knob_suhu.name = "knob_suhu";
	this.knob_suhu.setTransform(665.85,-138.05,0.698,0.698,4.5504,0,0,0.2,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AMIAAQAAFCjjDjQjjDjlCAAQlBAAjjjjQjjjjAAlCQAAlBDjjjQDjjjFBAAQFCAADjDjQDjDjAAFBg");
	this.shape.setTransform(666.025,-143.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AokIlQjjjjAAlCQAAlBDjjjQDjjjFBAAQFCAADjDjQDjDjAAFBQAAFCjjDjQjjDjlCAAQlBAAjjjjg");
	this.shape_1.setTransform(666.025,-143.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#33FFFF"],[0,1],-54.2,39.8,78.7,-13.8).s().p("ACNNpQnjgIielvQirmNCRlOQA6iGBnhpQBchdBpgwQCihLEJhkQCEgxBkgjIiBFFQjsB2jVC1QmtFqBrE8QBsE9HJA+QDmAfDQghQjGBCjiAAIgdAAg");
	this.shape_2.setTransform(635.6358,-160.9615);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AslMkQlMlMAAnYQAAnWFMlOQFOlNHXAAQHYAAFMFNQFOFOAAHWQAAHYlOFMQlMFOnYAAQnXAAlOlOg");
	this.shape_3.setTransform(666.15,-146.55);

	this.text_6 = new cjs.Text("BLOWER SWITCH", "12px 'Arial Rounded MT Bold'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 118;
	this.text_6.parent = this;
	this.text_6.setTransform(430.25,-286.7);

	this.knob_blower = new lib.selctor();
	this.knob_blower.name = "knob_blower";
	this.knob_blower.setTransform(432.25,-147.05,0.698,0.698,-94.2174,0,0,0.1,0.4);

	this.text_7 = new cjs.Text("3", "22px 'Arial'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 27;
	this.text_7.lineWidth = 40;
	this.text_7.parent = this;
	this.text_7.setTransform(431.6,-256.6);

	this.text_8 = new cjs.Text("2", "22px 'Arial'", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 27;
	this.text_8.lineWidth = 40;
	this.text_8.parent = this;
	this.text_8.setTransform(369.2,-236.45);

	this.text_9 = new cjs.Text("1", "22px 'Arial'", "#FFFFFF");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 27;
	this.text_9.lineWidth = 40;
	this.text_9.parent = this;
	this.text_9.setTransform(343.65,-164.2);

	this.text_10 = new cjs.Text("OFF", "15px 'Arial'", "#FFFFFF");
	this.text_10.lineHeight = 19;
	this.text_10.lineWidth = 40;
	this.text_10.parent = this;
	this.text_10.setTransform(344.1,-99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AMIAAQAAFCjjDjQjjDjlCAAQlBAAjjjjQjjjjAAlCQAAlBDjjjQDjjjFBAAQFCAADjDjQDjDjAAFBg");
	this.shape_4.setTransform(431.775,-150.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AokIlQjjjjAAlCQAAlBDjjjQDjjjFBAAQFCAADjDjQDjDjAAFBQAAFCjjDjQjjDjlCAAQlBAAjjjjg");
	this.shape_5.setTransform(431.775,-150.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AslMkQlMlMAAnYQAAnWFMlOQFOlNHXAAQHYAAFMFNQFOFOAAHWQAAHYlOFMQlMFOnYAAQnXAAlOlOg");
	this.shape_6.setTransform(431.9,-153);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.knob_blower},{t:this.text_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.knob_suhu},{t:this.text_5},{t:this.posisi_suhu},{t:this.text_4},{t:this.posisi_blower}]}).wait(1));

	// dasboard
	this.btn_dash = new lib.btn_kon();
	this.btn_dash.name = "btn_dash";
	this.btn_dash.setTransform(342.75,-510.6,1.2211,0.48,0,63.1507,18.0553,64.5,43.8);
	new cjs.ButtonHelper(this.btn_dash, 0, 1, 1);

	this.dashboard = new lib.dasboard();
	this.dashboard.name = "dashboard";
	this.dashboard.setTransform(293,-509.9,1,1,0,0,0,0,-153.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dashboard},{t:this.btn_dash}]}).wait(1));

	// katup_EKSPANSI
	this.kipas_ac = new lib.kipas_ac();
	this.kipas_ac.name = "kipas_ac";
	this.kipas_ac.setTransform(-172.2,-222.45,0.7369,0.6898,0,1.3943,20.5737,133.6,-267.8);

	this.instance = new lib.katup_ekspansi_grup();
	this.instance.setTransform(228.1,-389.05,1,1,0,0,0,-0.5,-135.3);

	this.instance_1 = new lib.Bitmap12();
	this.instance_1.setTransform(16,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.kipas_ac}]}).wait(1));

	// KOMPONEN
	this.kotak = new lib.kotak();
	this.kotak.name = "kotak";
	this.kotak.setTransform(-198.05,-251.55,1.212,1);

	this.btn_kon = new lib.btn_kon();
	this.btn_kon.name = "btn_kon";
	this.btn_kon.setTransform(-200.05,-228,1,1.2183,0,5.0271,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.btn_kon, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_kon},{t:this.kotak}]}).wait(1));

	// aliran
	this.aliran = new lib.aliran();
	this.aliran.name = "aliran";
	this.aliran.setTransform(120.4,-505.35,1,1,0,0,0,0,-74);

	this.timeline.addTween(cjs.Tween.get(this.aliran).wait(1));

	// selang
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AfhsqQAAAJgEAJQgMAbgkACQgiADgQACQgHABAAAAQAAgBgfADQgfAEgBgBQAAgCAKHAQgBgB5WHgQ5WHhgBgBQAAAAhSATQheASg6gLQllh7gmgOAfhsqIAAgIA/wKgQgBgBGOCJQAHAJAmABQBKACCUgoQAogKGZhtQEQhJgBgBQAAAAU8mcQU9maAAgBIgQo+");
	this.shape_7.setTransform(113.7499,-203.5473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.498)").s().p("A42MvQgmgBgHgJImNiJIAGh1IAGAAIAAgNQAmAPFlB7QA6ALBegSIBSgTQABABZWnhIZWngIgJm+QABABAfgDIAegDIAIAAQAQgDAigCQAkgDAMgbQAEgJAAgJIAQI/QAAAB09GaI08GcQABABkQBIInBB4QiPAmhKAAIgFAAgA/wKcIAAAAIAAAAg");
	this.shape_8.setTransform(113.7499,-203.1723);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AbqHwMgg4gNaQgjgLgwgIQhhgQhJATQiLAinWCCQjoBAjOA5QgBAAASBNQASBNgBgBQAEAVgGAXQgLAtgxAKQgyAJgNgBQgHAAACgDQgDgBghibQgShUAKgsQAPhFBRgZQBKgWHph8QD0g9Dig6QAygMBLgDQCVgGB0AxQBzAwPKGFQHmDCHOC5");
	this.shape_9.setTransform(38.2609,-534.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,255,255,0.4)").s().p("AlOlqQgjgLgwgIQhhgQhJATQiLAinWCCIm2B5QgBAAASBNQASBNgBgBQAEAVgGAXQgLAtgxAKQgyAJgNgBQgHAAACgDQgDgBghibQgShUAKgsQAPhFBRgZQBKgWHph8IHWh3QAygMBLgDQCVgGB0AxQBzAwPKGFIO0F7IgICDg");
	this.shape_10.setTransform(38.2609,-534.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Ap9vtQAAAAAAgBQABgMgHhFQgHhFAKgkQAJgeAEAIQAAACDsg1QDdgxCeglQB4gcB1BBQAlAVAgAbQAXAUACAEQEHF3AlAwQAXAeAEBCQgBA9ABABQAAABgKKwQgLLKAABJQAABSghA/QgoA+gPAgQgUArjbBwQi+BihzAqQhJAbiJglQhEgSg1gXAlYSQQA8AbBMAVQCYArBPgiQDThYA6ggQCwhjAWhsQAWhpAKrhQAJrEgFgJQAAgBAAguQgGg3gegrQgwhGjolEQgBgDgNgKQgSgNgVgKQhEgehMATQhYAWi6AqQi5ApgBgBQgEBJAKAqQAHAagzAQQgZAIgaADQgqACgjgQQgPgIgJgIQgBACgBgBQAAgBgBgCQACABABAB");
	this.shape_11.setTransform(-54.0941,-407.952);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.498)").s().p("AjZU7QhEgSg1gXIgGiCQA8AbBMAVQCYArBPgiQDThYA6ggQCwhjAWhsQAWhpAKrhQAJrEgFgJIAAgvQgGg3gegrQgwhGjolEQgBgDgNgKQgSgNgVgKQhEgehMATQhYAWi6AqQi5ApgBgBQgEBJAKAqQAHAagzAQQgZAIgaADQgqACgjgQQgPgIgJgIIAAgBQABgMgHhFQgHhFAKgkQAJgeAEAIQAAACDsg1IF7hWQB4gcB1BBQAlAVAgAbQAXAUACAEQEHF3AlAwQAXAeAEBCIAAA+IgKKxQgLLKAABJQAABSghA/QgoA+gPAgQgUArjbBwQi+BihzAqQgfALgqAAQg6AAhPgVg");
	this.shape_12.setTransform(-54.0941,-407.952);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("Am4LFIgBgDQKpjUgCgCQgBgBANpWQAMpXgBgCQgBgBiuhFQicg+gQgIIgCgBQgBAAABgMAhKvVQIGDNgCAAQgBAAgOLxQgOLvgBgBQgBgBmcCAQmeCBgBgBQAAAAgBgGIAAgB");
	this.shape_13.setTransform(373.1754,-421.8991);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,255,255,0.4)").s().p("AmgPWIgBgGIAAgBIADAAIAAgIIgEAAIgBgPIgJhsIgKhwIgCgXIgBgDQKpjUgCgCQgBgBANpWQAMpXgBgCIivhGQicg+gQgIIgCgBIAAgMIAHAAIAAhAIADgZIAEgfIIEDNQgBAAgOLxQgOLvgBgBQgBgBmcCAQmZCAgGAAIAAAAg");
	this.shape_14.setTransform(373.1754,-421.8991);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AzmgoMAjyAAAIAWADQAWAIABAXQADAigYAKIgYADAQMDAIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKMgjyAAA");
	this.shape_15.setTransform(-188.9118,-190.8722,0.855,0.8739,0,180,-159.0595);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,0,0,0.498)").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDMgjyAAAIAAiXMAjyAAAQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHg");
	this.shape_16.setTransform(-188.9118,-190.8722,0.855,0.8739,0,180,-159.0595);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("APqGiI8kq7IgSgEQgRAAgBATQgCAeASAQIAUAKAs6hOIgcgQQgggVgcgZQhXhQAAhXQAAhYBXgRQAsgJAsAIIckK7");
	this.shape_17.setTransform(-187.925,-319.6882);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,0,0,0.498)").s().p("As6kZIgSgEQgRAAgBATQgCAeASAQIAUAKIAACEIgcgQQgggVgcgZQhXhQAAhXQAAhYBXgRQAsgJAsAIIckK7IAACEg");
	this.shape_18.setTransform(-187.925,-319.6882);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AzmgoMAjyAAAIAWADQAWAIABAXQADAigYAKIgYADAQMDAIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKMgjyAAA");
	this.shape_19.setTransform(-171.0382,-285.8649,0.855,0.8739,0,0,20.9405);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,0,0,0.498)").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDMgjyAAAIAAiXMAjyAAAQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHg");
	this.shape_20.setTransform(-171.0382,-285.8649,0.855,0.8739,0,0,20.9405);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("APqGiI8kq7IgSgEQgRAAgBATQgCAeASAQIAUAKAs6hOIgcgQQgggVgcgZQhXhQAAhXQAAhYBXgRQAsgJAsAIIckK7");
	this.shape_21.setTransform(-188.075,-279.1382);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,0,0,0.498)").s().p("As6kZIgSgEQgRAAgBATQgCAeASAQIAUAKIAACEIgcgQQgggVgcgZQhXhQAAhXQAAhYBXgRQAsgJAsAIIckK7IAACEg");
	this.shape_22.setTransform(-188.075,-279.1382);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("Ax+hOMAj8AAAAR+BPMgj8AAA");
	this.shape_23.setTransform(-180.3512,-197.7305,0.855,0.8499,0,0,20.9405);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,0,0,0.498)").s().p("Ax+BPIAAidMAj8AAAIAACdg");
	this.shape_24.setTransform(-180.3512,-197.7305,0.855,0.8499,0,0,20.9405);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AQMDAIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKMgjyAAAAzmgoMAjyAAAIAWADQAWAIABAXQADAigYAKIgYAD");
	this.shape_25.setTransform(-171.1882,-204.6778,0.855,0.8739,0,0,20.9405);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,0,0,0.498)").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDMgjyAAAIAAiXMAjyAAAQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHg");
	this.shape_26.setTransform(-171.1882,-204.6778,0.855,0.8739,0,0,20.9405);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AwLDAIgigHQgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAATngoMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYAD");
	this.shape_27.setTransform(-187.7575,-231.3807,0.855,0.8739,0,0,20.9405);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,0,0,0.498)").s().p("AwtC5QgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAIAACXMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYADIAACXg");
	this.shape_28.setTransform(-187.7575,-231.3807,0.855,0.8739,0,0,20.9405);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AvpmEIckK7IASAJQARANABAVQACAggSABIgUgFAM7ICIAbAFQAhAEAcgEQBXgNAAhXQAAhYhXhUQgsgrgsgZI8kq7");
	this.shape_29.setTransform(-171.175,-248.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,0,0,0.498)").s().p("ANWIHIgbgFIAAiEIAUAFQASgBgCggQgBgVgRgNIgSgJI8kq7IAAiEIckK7QAsAZAsArQBXBUAABYQAABXhXANQgOACgPAAQgPAAgRgCg");
	this.shape_30.setTransform(-171.175,-248.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AwLDAIgigHQgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAATngoMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYAD");
	this.shape_31.setTransform(283.387,-535.8155,0.7004,0.8739,0,0,21.6883);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,255,255,0.4)").s().p("AwtC5QgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAIAACXMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYADIAACXg");
	this.shape_32.setTransform(283.387,-535.8155,0.7004,0.8739,0,0,21.6883);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AR+BPMgj8AAAAx+hOMAj8AAA");
	this.shape_33.setTransform(289.684,-461.8895,0.7004,0.8499,0,0,21.6883);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,255,255,0.4)").s().p("Ax+BPIAAidMAj8AAAIAACdg");
	this.shape_34.setTransform(289.684,-461.8895,0.7004,0.8499,0,0,21.6883);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AKiHOIAXAEQAbABAWgFQBHgSAAhYQAAhXhHhPQgkgpgkgWI3SpQAswlNIXSJQIAPAIQAOANABAUQACAfgQADIgQgE");
	this.shape_35.setTransform(297.15,-472.0089);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,255,255,0.4)").s().p("AK5HSIgXgEIAAiEIAQAEQAPgDgBgfQgBgUgOgNIgPgII3SpQIAAiEIXSJQQAkAWAjApQBIBPAABXQAABYhIASQgRAEgUAAIgLAAg");
	this.shape_36.setTransform(297.15,-472.0089);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AwLDAIgigHQgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAATngoMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYAD");
	this.shape_37.setTransform(283.6474,-495.1064,0.7004,0.8739,0,0,21.6883);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,255,255,0.4)").s().p("AwtC5QgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAIAACXMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYADIAACXg");
	this.shape_38.setTransform(283.6474,-495.1064,0.7004,0.8739,0,0,21.6883);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AswlNIXSJQIAPAIQAOAMABAVQACAfgQACIgQgDAKiHOIAXADQAbACAWgFQBHgTAAhXQAAhYhHhPQgkgogkgWI3SpQ");
	this.shape_39.setTransform(297.15,-512.6483);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,255,255,0.4)").s().p("AK5HRIgXgDIAAiEIAQADQAPgCgBgfQgBgVgOgMIgPgII3SpQIAAiEIXSJQQAkAWAjAoQBIBPAABYQAABXhIATQgQAEgSAAIgOgBg");
	this.shape_40.setTransform(297.15,-512.6483);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AwLDAIgigHQgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAATngoMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYAD");
	this.shape_41.setTransform(22.175,-903.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66FF00").s().p("AwtC5QgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAIAACXMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYADIAACXg");
	this.shape_42.setTransform(22.175,-903.675);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("Ax+hOMAj8AAAAR+BPMgj8AAA");
	this.shape_43.setTransform(31.85,-822.2389,1,0.9725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66FF00").s().p("Ax+BPIAAidMAj8AAAIAACdg");
	this.shape_44.setTransform(31.85,-822.2389,1,0.9725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AQMDAIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKMgjyAAAAzmgoMAjyAAAIAWADQAWAIABAXQADAigYAKIgYAD");
	this.shape_45.setTransform(43.325,-834.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#66FF00").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDMgjyAAAIAAiXMAjyAAAQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHg");
	this.shape_46.setTransform(43.325,-834.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AwLDAIgigHQgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAATngoMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYAD");
	this.shape_47.setTransform(22.575,-857.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66FF00").s().p("AwtC5QgpgKgjgQQhtg1AAhkQAAhjBtg7QA3gdA3gKMAjyAAAIAACXMgjyAAAIgWADQgWAIgBAXQgDAiAYAKIAYADIAACXg");
	this.shape_48.setTransform(22.575,-857.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AQMDAIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKMgjyAAAAzmgoMAjyAAAIAWADQAWAIABAXQADAigYAKIgYAD");
	this.shape_49.setTransform(43.325,-880.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#66FF00").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDMgjyAAAIAAiXMAjyAAAQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHg");
	this.shape_50.setTransform(43.325,-880.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AQMgoIAWADQAWAIABAXQADAigYAKIgYADIAACXIAigHQApgKAjgQQBtg1AAhkQAAhjhtg7Qg3gdg3gKIAACXMgjyAAAIAAiXMAjyAAA");
	this.shape_51.setTransform(43.325,-880.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#66FF00").s().p("AQMApIAYgDQAYgKgDgiQgBgXgWgIIgWgDIAAiXQA3AKA3AdQBtA7AABjQAABkhtA1QgjAQgpAKIgiAHgAQMgoMgjyAAAIAAiXMAjyAAAIAACXg");
	this.shape_52.setTransform(43.325,-880.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FF0000").ss(1,1,1).p("AhtgoIAWADQAWAIACAXQACAigXAKIgZADIAACXIAjgHQApgKAhgQQBug1AAhkQAAhjhug7Qg2gdg3gKg");
	this.shape_53.setTransform(284.075,-818.975,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// blower
	this.blower = new lib.blower();
	this.blower.name = "blower";
	this.blower.setTransform(410.15,-543.45,1,1,0,0,0,0,-57.4);

	this.blower_1 = new lib.blower();
	this.blower_1.name = "blower_1";
	this.blower_1.setTransform(410.15,-543.45,1,1,0,0,0,0,-57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blower_1},{t:this.blower}]}).wait(1));

	// kompresor
	this.kompresor = new lib.kompresor();
	this.kompresor.name = "kompresor";
	this.kompresor.setTransform(-211.8,-384.15);

	this.timeline.addTween(cjs.Tween.get(this.kompresor).wait(1));

	// rangka
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_54.setTransform(368.325,-526.8256,1.0193,0.5482,0,0,11.1769);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAYQgLgJAAgPQAAgNALgLQAJgKAOABQAOgBAKAKQALALgBANQABAPgLAJQgKALgOAAQgOAAgJgLg");
	this.shape_55.setTransform(369.4,-526.1335,1.0193,0.5482,0,0,11.1769);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_56.setTransform(368.325,-526.8256,1.0193,0.5482,0,0,11.1769);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(1,1,1).p("Ahvu5IDfAAIAAdzIjfAAg");
	this.shape_57.setTransform(355.1486,-479.9288,0.6121,0.5482,0,0,-34.9653);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AhvO6IAA9zIDfAAIAAdzg");
	this.shape_58.setTransform(355.1486,-479.9288,0.6121,0.5482,0,0,-34.9653);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#333333").ss(1,1,1).p("AAtAKQAAAPgKALQgKALgOAAQgOAAgKgLQgKgLAAgPQAAgPAKgLQAKgLAOAAQAOAAAKALQAKALAAAPgAi5A1IB3jQID8BnIh3DQg");
	this.shape_59.setTransform(368.075,-424.0629,1.0193,0.507,0,0,11.1769);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAaQgKgKABgQQgBgPAKgKQALgLANAAQAPAAAJALQALAKAAAPQAAAQgLAKQgJALgPAAQgNAAgLgLg");
	this.shape_60.setTransform(369.15,-423.3815,1.0193,0.507,0,0,11.1769);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("Ai5A0IB3jPID8BnIh3DQgAgNgQQgKAKAAAQQAAAPAKALQAKAKAOABQAOgBAKgKQAKgLAAgPQAAgQgKgKQgKgLgOAAQgOAAgKALg");
	this.shape_61.setTransform(368.075,-424.0629,1.0193,0.507,0,0,11.1769);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_62.setTransform(217.875,-590.0919,1.0193,0.5482,0,0,11.1769);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAPgBAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLg");
	this.shape_63.setTransform(218.95,-589.3998,1.0193,0.5482,0,0,11.1769);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_64.setTransform(217.875,-590.0919,1.0193,0.5482,0,0,11.1769);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#333333").ss(1,1,1).p("Ahvu5IDfAAIAAdzIjfAAg");
	this.shape_65.setTransform(230.8986,-530.0288,0.6121,0.5482,0,0,-34.9653);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AhvO6IAA9zIDfAAIAAdzg");
	this.shape_66.setTransform(230.8986,-530.0288,0.6121,0.5482,0,0,-34.9653);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_67.setTransform(217.875,-485.0919,1.0193,0.5482,0,0,11.1769);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAPgBAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLg");
	this.shape_68.setTransform(218.95,-484.3998,1.0193,0.5482,0,0,11.1769);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_69.setTransform(217.875,-485.0919,1.0193,0.5482,0,0,11.1769);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_70.setTransform(-102.775,-329.567,1,1.0813);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAYQgLgJAAgPQAAgNALgLQAJgKAOABQAOgBAKAKQALALgBANQABAPgLAJQgKALgOAAQgOAAgJgLg");
	this.shape_71.setTransform(-101.7,-328.6209,1,1.0813);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_72.setTransform(-102.775,-329.567,1,1.0813);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#333333").ss(1,1,1).p("Ahvu5IDfAAIAAdzIjfAAg");
	this.shape_73.setTransform(-115.9514,-231.5284,1.0192,1.0813,0,0,-60.5183);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AhvO6IAA9zIDfAAIAAdzg");
	this.shape_74.setTransform(-115.9514,-231.5284,1.0192,1.0813,0,0,-60.5183);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#333333").ss(1,1,1).p("AAtAKQAAAPgKALQgKALgOAAQgOAAgKgLQgKgLAAgPQAAgPAKgLQAKgLAOAAQAOAAAKALQAKALAAAPgAi5A1IB3jQID8BnIh3DQg");
	this.shape_75.setTransform(-103.025,-122.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAaQgKgKABgQQgBgPAKgKQALgLANAAQAPAAAJALQALAKAAAPQAAAQgLAKQgJALgPAAQgNAAgLgLg");
	this.shape_76.setTransform(-101.95,-121.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCCCCC").s().p("Ai5A0IB3jPID8BnIh3DQgAgNgQQgKAKAAAQQAAAPAKALQAKAKAOABQAOgBAKgKQAKgLAAgPQAAgQgKgKQgKgLgOAAQgOAAgKALg");
	this.shape_77.setTransform(-103.025,-122.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_78.setTransform(-253.225,-390.4377,1,1.0813);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAPgBAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLg");
	this.shape_79.setTransform(-252.15,-389.4915,1,1.0813);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_80.setTransform(-253.225,-390.4377,1,1.0813);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#333333").ss(1,1,1).p("Ahvu5IDfAAIAAdzIjfAAg");
	this.shape_81.setTransform(-240.2014,-281.3784,1.0192,1.0813,0,0,-60.5183);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("AhvO6IAA9zIDfAAIAAdzg");
	this.shape_82.setTransform(-240.2014,-281.3784,1.0192,1.0813,0,0,-60.5183);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#333333").ss(1,1,1).p("AAtAJQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAi5AxIB3jAID8BfIh3DAg");
	this.shape_83.setTransform(-253.225,-183.9877,1,1.0813);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAPgBAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLg");
	this.shape_84.setTransform(-252.15,-183.0415,1,1.0813);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("Ai5AxIB3jAID8BfIh3DAgAgNgPQgKAKAAAOQAAAOAKAKQAKAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgKAKg");
	this.shape_85.setTransform(-253.225,-183.9877,1,1.0813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(1));

	// Layer_3
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#999999").ss(1,1,1).p("AwW0BMAgsAAAMAAAAoDMggsAAAg");
	this.shape_86.setTransform(-722.55,-314.0272,1.0635,1,0,0,19.8933);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0000FF").s().p("AwWUCMAAAgoDMAgtAAAMAAAAoDg");
	this.shape_87.setTransform(-722.55,-314.0272,1.0635,1,0,0,19.8933);

	this.instance_2 = new lib.kipas_ac();
	this.instance_2.setTransform(-904.1,174.35,1,1,0,0,0,1.2,-135.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_87},{t:this.shape_86}]}).wait(1));

	// Layer_2
	this.instance_3 = new lib.Bitmap6();
	this.instance_3.setTransform(831,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AC_MOBIL, new cjs.Rectangle(-1042.6,-923.8,3455.6,2067.8), null);


// stage content:
(lib.sistemAC3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ket
	this.text = new cjs.Text("High Pressure", "12px 'Arial Rounded MT Bold'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(371.1,195.15,1.0693,1,0,0,20.7413);

	this.text_1 = new cjs.Text("Low Pressure", "12px 'Arial Rounded MT Bold'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 91;
	this.text_1.parent = this;
	this.text_1.setTransform(241.3,145.8,1.0693,1,0,0,20.7413);

	this.text_2 = new cjs.Text("LUAR KABIN", "12px 'Arial Rounded MT Bold'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 91;
	this.text_2.parent = this;
	this.text_2.setTransform(24.8,389.95,1.0693,1,0,0,20.7413);

	this.text_3 = new cjs.Text("DALAM KABIN", "12px 'Arial Rounded MT Bold'");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 91;
	this.text_3.parent = this;
	this.text_3.setTransform(814.8,90.15,1.0693,1,0,0,20.7413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_1
	this.text_4 = new cjs.Text("PULLEY ENGINE", "12px 'Arial Rounded MT Bold'");
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 104;
	this.text_4.parent = this;
	this.text_4.setTransform(104.75,109.8,1.1452,1,0,0,29.1628);

	this.sistem_ac = new lib.AC_MOBIL();
	this.sistem_ac.name = "sistem_ac";
	this.sistem_ac.setTransform(463.7,392.05,1,1,0,0,0,0,-322.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sistem_ac},{t:this.text_4}]}).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape.setTransform(677.675,381.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_1.setTransform(677.675,381.975);

	this.instance = new lib.BitmapGrTeknik();
	this.instance.setTransform(64,693,0.8233,0.8233);

	this.instance_1 = new lib.BitmapGrTeknik();
	this.instance_1.setTransform(895,693,0.8233,0.8233);

	this.instance_2 = new lib.BitmapGrTeknik();
	this.instance_2.setTransform(615,693,0.8233,0.8233);

	this.instance_3 = new lib.BitmapGrTeknik();
	this.instance_3.setTransform(344,693,0.8233,0.8233);

	this.instance_4 = new lib.BitmapGrTeknik();
	this.instance_4.setTransform(1025,629,0.8233,0.8233);

	this.instance_5 = new lib.BitmapGrTeknik();
	this.instance_5.setTransform(745,629,0.8233,0.8233);

	this.instance_6 = new lib.BitmapGrTeknik();
	this.instance_6.setTransform(465,629,0.8233,0.8233);

	this.instance_7 = new lib.BitmapGrTeknik();
	this.instance_7.setTransform(194,629,0.8233,0.8233);

	this.instance_8 = new lib.BitmapGrTeknik();
	this.instance_8.setTransform(64,555,0.8233,0.8233);

	this.instance_9 = new lib.BitmapGrTeknik();
	this.instance_9.setTransform(895,555,0.8233,0.8233);

	this.instance_10 = new lib.BitmapGrTeknik();
	this.instance_10.setTransform(615,555,0.8233,0.8233);

	this.instance_11 = new lib.BitmapGrTeknik();
	this.instance_11.setTransform(344,555,0.8233,0.8233);

	this.instance_12 = new lib.BitmapGrTeknik();
	this.instance_12.setTransform(64,423,0.8233,0.8233);

	this.instance_13 = new lib.BitmapGrTeknik();
	this.instance_13.setTransform(895,423,0.8233,0.8233);

	this.instance_14 = new lib.BitmapGrTeknik();
	this.instance_14.setTransform(615,423,0.8233,0.8233);

	this.instance_15 = new lib.BitmapGrTeknik();
	this.instance_15.setTransform(344,423,0.8233,0.8233);

	this.instance_16 = new lib.BitmapGrTeknik();
	this.instance_16.setTransform(1017,354,0.8233,0.8233);

	this.instance_17 = new lib.BitmapGrTeknik();
	this.instance_17.setTransform(738,354,0.8233,0.8233);

	this.instance_18 = new lib.BitmapGrTeknik();
	this.instance_18.setTransform(458,354,0.8233,0.8233);

	this.instance_19 = new lib.BitmapGrTeknik();
	this.instance_19.setTransform(187,354,0.8233,0.8233);

	this.instance_20 = new lib.BitmapGrTeknik();
	this.instance_20.setTransform(66,282,0.8233,0.8233);

	this.instance_21 = new lib.BitmapGrTeknik();
	this.instance_21.setTransform(896,282,0.8233,0.8233);

	this.instance_22 = new lib.BitmapGrTeknik();
	this.instance_22.setTransform(616,282,0.8233,0.8233);

	this.instance_23 = new lib.BitmapGrTeknik();
	this.instance_23.setTransform(346,282,0.8233,0.8233);

	this.instance_24 = new lib.BitmapGrTeknik();
	this.instance_24.setTransform(1025,215,0.8233,0.8233);

	this.instance_25 = new lib.BitmapGrTeknik();
	this.instance_25.setTransform(745,215,0.8233,0.8233);

	this.instance_26 = new lib.BitmapGrTeknik();
	this.instance_26.setTransform(465,215,0.8233,0.8233);

	this.instance_27 = new lib.BitmapGrTeknik();
	this.instance_27.setTransform(194,215,0.8233,0.8233);

	this.instance_28 = new lib.BitmapGrTeknik();
	this.instance_28.setTransform(64,151,0.8233,0.8233);

	this.instance_29 = new lib.BitmapGrTeknik();
	this.instance_29.setTransform(895,151,0.8233,0.8233);

	this.instance_30 = new lib.BitmapGrTeknik();
	this.instance_30.setTransform(615,151,0.8233,0.8233);

	this.instance_31 = new lib.BitmapGrTeknik();
	this.instance_31.setTransform(344,151,0.8233,0.8233);

	this.instance_32 = new lib.BitmapGrTeknik();
	this.instance_32.setTransform(1017,81,0.8233,0.8233);

	this.instance_33 = new lib.BitmapGrTeknik();
	this.instance_33.setTransform(738,81,0.8233,0.8233);

	this.instance_34 = new lib.BitmapGrTeknik();
	this.instance_34.setTransform(458,81,0.8233,0.8233);

	this.instance_35 = new lib.BitmapGrTeknik();
	this.instance_35.setTransform(187,81,0.8233,0.8233);

	this.instance_36 = new lib.BitmapGrTeknik();
	this.instance_36.setTransform(66,8,0.8233,0.8233);

	this.instance_37 = new lib.BitmapGrTeknik();
	this.instance_37.setTransform(896,8,0.8233,0.8233);

	this.instance_38 = new lib.BitmapGrTeknik();
	this.instance_38.setTransform(616,8,0.8233,0.8233);

	this.instance_39 = new lib.BitmapGrTeknik();
	this.instance_39.setTransform(346,8,0.8233,0.8233);

	this.instance_40 = new lib.BitmapGrTeknik();
	this.instance_40.setTransform(1025,482,0.8233,0.8233);

	this.instance_41 = new lib.BitmapGrTeknik();
	this.instance_41.setTransform(745,482,0.8233,0.8233);

	this.instance_42 = new lib.BitmapGrTeknik();
	this.instance_42.setTransform(465,482,0.8233,0.8233);

	this.instance_43 = new lib.BitmapGrTeknik();
	this.instance_43.setTransform(194,482,0.8233,0.8233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_2.setTransform(1353.4,380);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_3.setTransform(94.425,384.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_4.setTransform(94.425,662.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_5.setTransform(94.425,516.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_6.setTransform(94.425,249.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_7.setTransform(94.425,111.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_8.setTransform(1264.2,585.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_9.setTransform(1264.2,723.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_10.setTransform(1264.2,453.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_11.setTransform(1264.2,181.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_12.setTransform(1264.7,312.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_13.setTransform(1264.7,38.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape_14.setTransform(677.675,381.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_15.setTransform(677.675,381.975);

	this.instance_44 = new lib.BitmapGrTeknik();
	this.instance_44.setTransform(64,693,0.8233,0.8233);

	this.instance_45 = new lib.BitmapGrTeknik();
	this.instance_45.setTransform(895,693,0.8233,0.8233);

	this.instance_46 = new lib.BitmapGrTeknik();
	this.instance_46.setTransform(615,693,0.8233,0.8233);

	this.instance_47 = new lib.BitmapGrTeknik();
	this.instance_47.setTransform(344,693,0.8233,0.8233);

	this.instance_48 = new lib.BitmapGrTeknik();
	this.instance_48.setTransform(1025,629,0.8233,0.8233);

	this.instance_49 = new lib.BitmapGrTeknik();
	this.instance_49.setTransform(745,629,0.8233,0.8233);

	this.instance_50 = new lib.BitmapGrTeknik();
	this.instance_50.setTransform(465,629,0.8233,0.8233);

	this.instance_51 = new lib.BitmapGrTeknik();
	this.instance_51.setTransform(194,629,0.8233,0.8233);

	this.instance_52 = new lib.BitmapGrTeknik();
	this.instance_52.setTransform(64,555,0.8233,0.8233);

	this.instance_53 = new lib.BitmapGrTeknik();
	this.instance_53.setTransform(895,555,0.8233,0.8233);

	this.instance_54 = new lib.BitmapGrTeknik();
	this.instance_54.setTransform(615,555,0.8233,0.8233);

	this.instance_55 = new lib.BitmapGrTeknik();
	this.instance_55.setTransform(344,555,0.8233,0.8233);

	this.instance_56 = new lib.BitmapGrTeknik();
	this.instance_56.setTransform(64,423,0.8233,0.8233);

	this.instance_57 = new lib.BitmapGrTeknik();
	this.instance_57.setTransform(895,423,0.8233,0.8233);

	this.instance_58 = new lib.BitmapGrTeknik();
	this.instance_58.setTransform(615,423,0.8233,0.8233);

	this.instance_59 = new lib.BitmapGrTeknik();
	this.instance_59.setTransform(344,423,0.8233,0.8233);

	this.instance_60 = new lib.BitmapGrTeknik();
	this.instance_60.setTransform(1017,354,0.8233,0.8233);

	this.instance_61 = new lib.BitmapGrTeknik();
	this.instance_61.setTransform(738,354,0.8233,0.8233);

	this.instance_62 = new lib.BitmapGrTeknik();
	this.instance_62.setTransform(458,354,0.8233,0.8233);

	this.instance_63 = new lib.BitmapGrTeknik();
	this.instance_63.setTransform(187,354,0.8233,0.8233);

	this.instance_64 = new lib.BitmapGrTeknik();
	this.instance_64.setTransform(66,282,0.8233,0.8233);

	this.instance_65 = new lib.BitmapGrTeknik();
	this.instance_65.setTransform(896,282,0.8233,0.8233);

	this.instance_66 = new lib.BitmapGrTeknik();
	this.instance_66.setTransform(616,282,0.8233,0.8233);

	this.instance_67 = new lib.BitmapGrTeknik();
	this.instance_67.setTransform(346,282,0.8233,0.8233);

	this.instance_68 = new lib.BitmapGrTeknik();
	this.instance_68.setTransform(1025,215,0.8233,0.8233);

	this.instance_69 = new lib.BitmapGrTeknik();
	this.instance_69.setTransform(745,215,0.8233,0.8233);

	this.instance_70 = new lib.BitmapGrTeknik();
	this.instance_70.setTransform(465,215,0.8233,0.8233);

	this.instance_71 = new lib.BitmapGrTeknik();
	this.instance_71.setTransform(194,215,0.8233,0.8233);

	this.instance_72 = new lib.BitmapGrTeknik();
	this.instance_72.setTransform(64,151,0.8233,0.8233);

	this.instance_73 = new lib.BitmapGrTeknik();
	this.instance_73.setTransform(895,151,0.8233,0.8233);

	this.instance_74 = new lib.BitmapGrTeknik();
	this.instance_74.setTransform(615,151,0.8233,0.8233);

	this.instance_75 = new lib.BitmapGrTeknik();
	this.instance_75.setTransform(344,151,0.8233,0.8233);

	this.instance_76 = new lib.BitmapGrTeknik();
	this.instance_76.setTransform(1017,81,0.8233,0.8233);

	this.instance_77 = new lib.BitmapGrTeknik();
	this.instance_77.setTransform(738,81,0.8233,0.8233);

	this.instance_78 = new lib.BitmapGrTeknik();
	this.instance_78.setTransform(458,81,0.8233,0.8233);

	this.instance_79 = new lib.BitmapGrTeknik();
	this.instance_79.setTransform(187,81,0.8233,0.8233);

	this.instance_80 = new lib.BitmapGrTeknik();
	this.instance_80.setTransform(66,8,0.8233,0.8233);

	this.instance_81 = new lib.BitmapGrTeknik();
	this.instance_81.setTransform(896,8,0.8233,0.8233);

	this.instance_82 = new lib.BitmapGrTeknik();
	this.instance_82.setTransform(616,8,0.8233,0.8233);

	this.instance_83 = new lib.BitmapGrTeknik();
	this.instance_83.setTransform(346,8,0.8233,0.8233);

	this.instance_84 = new lib.BitmapGrTeknik();
	this.instance_84.setTransform(1025,482,0.8233,0.8233);

	this.instance_85 = new lib.BitmapGrTeknik();
	this.instance_85.setTransform(745,482,0.8233,0.8233);

	this.instance_86 = new lib.BitmapGrTeknik();
	this.instance_86.setTransform(465,482,0.8233,0.8233);

	this.instance_87 = new lib.BitmapGrTeknik();
	this.instance_87.setTransform(194,482,0.8233,0.8233);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_16.setTransform(1353.4,380);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_17.setTransform(94.425,384.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_18.setTransform(94.425,662.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_19.setTransform(94.425,516.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_20.setTransform(94.425,249.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_21.setTransform(94.425,111.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_22.setTransform(1264.2,585.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_23.setTransform(1264.2,723.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_24.setTransform(1264.2,453.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_25.setTransform(1264.2,181.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_26.setTransform(1264.7,312.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_27.setTransform(1264.7,38.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape_28.setTransform(677.675,381.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_29.setTransform(677.675,381.975);

	this.instance_88 = new lib.BitmapGrTeknik();
	this.instance_88.setTransform(64,693,0.8233,0.8233);

	this.instance_89 = new lib.BitmapGrTeknik();
	this.instance_89.setTransform(895,693,0.8233,0.8233);

	this.instance_90 = new lib.BitmapGrTeknik();
	this.instance_90.setTransform(615,693,0.8233,0.8233);

	this.instance_91 = new lib.BitmapGrTeknik();
	this.instance_91.setTransform(344,693,0.8233,0.8233);

	this.instance_92 = new lib.BitmapGrTeknik();
	this.instance_92.setTransform(1025,629,0.8233,0.8233);

	this.instance_93 = new lib.BitmapGrTeknik();
	this.instance_93.setTransform(745,629,0.8233,0.8233);

	this.instance_94 = new lib.BitmapGrTeknik();
	this.instance_94.setTransform(465,629,0.8233,0.8233);

	this.instance_95 = new lib.BitmapGrTeknik();
	this.instance_95.setTransform(194,629,0.8233,0.8233);

	this.instance_96 = new lib.BitmapGrTeknik();
	this.instance_96.setTransform(64,555,0.8233,0.8233);

	this.instance_97 = new lib.BitmapGrTeknik();
	this.instance_97.setTransform(895,555,0.8233,0.8233);

	this.instance_98 = new lib.BitmapGrTeknik();
	this.instance_98.setTransform(615,555,0.8233,0.8233);

	this.instance_99 = new lib.BitmapGrTeknik();
	this.instance_99.setTransform(344,555,0.8233,0.8233);

	this.instance_100 = new lib.BitmapGrTeknik();
	this.instance_100.setTransform(64,423,0.8233,0.8233);

	this.instance_101 = new lib.BitmapGrTeknik();
	this.instance_101.setTransform(895,423,0.8233,0.8233);

	this.instance_102 = new lib.BitmapGrTeknik();
	this.instance_102.setTransform(615,423,0.8233,0.8233);

	this.instance_103 = new lib.BitmapGrTeknik();
	this.instance_103.setTransform(344,423,0.8233,0.8233);

	this.instance_104 = new lib.BitmapGrTeknik();
	this.instance_104.setTransform(1017,354,0.8233,0.8233);

	this.instance_105 = new lib.BitmapGrTeknik();
	this.instance_105.setTransform(738,354,0.8233,0.8233);

	this.instance_106 = new lib.BitmapGrTeknik();
	this.instance_106.setTransform(458,354,0.8233,0.8233);

	this.instance_107 = new lib.BitmapGrTeknik();
	this.instance_107.setTransform(187,354,0.8233,0.8233);

	this.instance_108 = new lib.BitmapGrTeknik();
	this.instance_108.setTransform(66,282,0.8233,0.8233);

	this.instance_109 = new lib.BitmapGrTeknik();
	this.instance_109.setTransform(896,282,0.8233,0.8233);

	this.instance_110 = new lib.BitmapGrTeknik();
	this.instance_110.setTransform(616,282,0.8233,0.8233);

	this.instance_111 = new lib.BitmapGrTeknik();
	this.instance_111.setTransform(346,282,0.8233,0.8233);

	this.instance_112 = new lib.BitmapGrTeknik();
	this.instance_112.setTransform(1025,215,0.8233,0.8233);

	this.instance_113 = new lib.BitmapGrTeknik();
	this.instance_113.setTransform(745,215,0.8233,0.8233);

	this.instance_114 = new lib.BitmapGrTeknik();
	this.instance_114.setTransform(465,215,0.8233,0.8233);

	this.instance_115 = new lib.BitmapGrTeknik();
	this.instance_115.setTransform(194,215,0.8233,0.8233);

	this.instance_116 = new lib.BitmapGrTeknik();
	this.instance_116.setTransform(64,151,0.8233,0.8233);

	this.instance_117 = new lib.BitmapGrTeknik();
	this.instance_117.setTransform(895,151,0.8233,0.8233);

	this.instance_118 = new lib.BitmapGrTeknik();
	this.instance_118.setTransform(615,151,0.8233,0.8233);

	this.instance_119 = new lib.BitmapGrTeknik();
	this.instance_119.setTransform(344,151,0.8233,0.8233);

	this.instance_120 = new lib.BitmapGrTeknik();
	this.instance_120.setTransform(1017,81,0.8233,0.8233);

	this.instance_121 = new lib.BitmapGrTeknik();
	this.instance_121.setTransform(738,81,0.8233,0.8233);

	this.instance_122 = new lib.BitmapGrTeknik();
	this.instance_122.setTransform(458,81,0.8233,0.8233);

	this.instance_123 = new lib.BitmapGrTeknik();
	this.instance_123.setTransform(187,81,0.8233,0.8233);

	this.instance_124 = new lib.BitmapGrTeknik();
	this.instance_124.setTransform(66,8,0.8233,0.8233);

	this.instance_125 = new lib.BitmapGrTeknik();
	this.instance_125.setTransform(896,8,0.8233,0.8233);

	this.instance_126 = new lib.BitmapGrTeknik();
	this.instance_126.setTransform(616,8,0.8233,0.8233);

	this.instance_127 = new lib.BitmapGrTeknik();
	this.instance_127.setTransform(346,8,0.8233,0.8233);

	this.instance_128 = new lib.BitmapGrTeknik();
	this.instance_128.setTransform(1025,482,0.8233,0.8233);

	this.instance_129 = new lib.BitmapGrTeknik();
	this.instance_129.setTransform(745,482,0.8233,0.8233);

	this.instance_130 = new lib.BitmapGrTeknik();
	this.instance_130.setTransform(465,482,0.8233,0.8233);

	this.instance_131 = new lib.BitmapGrTeknik();
	this.instance_131.setTransform(194,482,0.8233,0.8233);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_30.setTransform(1353.4,380);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_31.setTransform(94.425,384.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_32.setTransform(94.425,662.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_33.setTransform(94.425,516.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_34.setTransform(94.425,249.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_35.setTransform(94.425,111.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_36.setTransform(1264.2,585.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_37.setTransform(1264.2,723.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_38.setTransform(1264.2,453.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_39.setTransform(1264.2,181.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_40.setTransform(1264.7,312.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_41.setTransform(1264.7,38.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape_42.setTransform(677.675,381.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_43.setTransform(677.675,381.975);

	this.instance_132 = new lib.BitmapGrTeknik();
	this.instance_132.setTransform(64,693,0.8233,0.8233);

	this.instance_133 = new lib.BitmapGrTeknik();
	this.instance_133.setTransform(895,693,0.8233,0.8233);

	this.instance_134 = new lib.BitmapGrTeknik();
	this.instance_134.setTransform(615,693,0.8233,0.8233);

	this.instance_135 = new lib.BitmapGrTeknik();
	this.instance_135.setTransform(344,693,0.8233,0.8233);

	this.instance_136 = new lib.BitmapGrTeknik();
	this.instance_136.setTransform(1025,629,0.8233,0.8233);

	this.instance_137 = new lib.BitmapGrTeknik();
	this.instance_137.setTransform(745,629,0.8233,0.8233);

	this.instance_138 = new lib.BitmapGrTeknik();
	this.instance_138.setTransform(465,629,0.8233,0.8233);

	this.instance_139 = new lib.BitmapGrTeknik();
	this.instance_139.setTransform(194,629,0.8233,0.8233);

	this.instance_140 = new lib.BitmapGrTeknik();
	this.instance_140.setTransform(64,555,0.8233,0.8233);

	this.instance_141 = new lib.BitmapGrTeknik();
	this.instance_141.setTransform(895,555,0.8233,0.8233);

	this.instance_142 = new lib.BitmapGrTeknik();
	this.instance_142.setTransform(615,555,0.8233,0.8233);

	this.instance_143 = new lib.BitmapGrTeknik();
	this.instance_143.setTransform(344,555,0.8233,0.8233);

	this.instance_144 = new lib.BitmapGrTeknik();
	this.instance_144.setTransform(64,423,0.8233,0.8233);

	this.instance_145 = new lib.BitmapGrTeknik();
	this.instance_145.setTransform(895,423,0.8233,0.8233);

	this.instance_146 = new lib.BitmapGrTeknik();
	this.instance_146.setTransform(615,423,0.8233,0.8233);

	this.instance_147 = new lib.BitmapGrTeknik();
	this.instance_147.setTransform(344,423,0.8233,0.8233);

	this.instance_148 = new lib.BitmapGrTeknik();
	this.instance_148.setTransform(1017,354,0.8233,0.8233);

	this.instance_149 = new lib.BitmapGrTeknik();
	this.instance_149.setTransform(738,354,0.8233,0.8233);

	this.instance_150 = new lib.BitmapGrTeknik();
	this.instance_150.setTransform(458,354,0.8233,0.8233);

	this.instance_151 = new lib.BitmapGrTeknik();
	this.instance_151.setTransform(187,354,0.8233,0.8233);

	this.instance_152 = new lib.BitmapGrTeknik();
	this.instance_152.setTransform(66,282,0.8233,0.8233);

	this.instance_153 = new lib.BitmapGrTeknik();
	this.instance_153.setTransform(896,282,0.8233,0.8233);

	this.instance_154 = new lib.BitmapGrTeknik();
	this.instance_154.setTransform(616,282,0.8233,0.8233);

	this.instance_155 = new lib.BitmapGrTeknik();
	this.instance_155.setTransform(346,282,0.8233,0.8233);

	this.instance_156 = new lib.BitmapGrTeknik();
	this.instance_156.setTransform(1025,215,0.8233,0.8233);

	this.instance_157 = new lib.BitmapGrTeknik();
	this.instance_157.setTransform(745,215,0.8233,0.8233);

	this.instance_158 = new lib.BitmapGrTeknik();
	this.instance_158.setTransform(465,215,0.8233,0.8233);

	this.instance_159 = new lib.BitmapGrTeknik();
	this.instance_159.setTransform(194,215,0.8233,0.8233);

	this.instance_160 = new lib.BitmapGrTeknik();
	this.instance_160.setTransform(64,151,0.8233,0.8233);

	this.instance_161 = new lib.BitmapGrTeknik();
	this.instance_161.setTransform(895,151,0.8233,0.8233);

	this.instance_162 = new lib.BitmapGrTeknik();
	this.instance_162.setTransform(615,151,0.8233,0.8233);

	this.instance_163 = new lib.BitmapGrTeknik();
	this.instance_163.setTransform(344,151,0.8233,0.8233);

	this.instance_164 = new lib.BitmapGrTeknik();
	this.instance_164.setTransform(1017,81,0.8233,0.8233);

	this.instance_165 = new lib.BitmapGrTeknik();
	this.instance_165.setTransform(738,81,0.8233,0.8233);

	this.instance_166 = new lib.BitmapGrTeknik();
	this.instance_166.setTransform(458,81,0.8233,0.8233);

	this.instance_167 = new lib.BitmapGrTeknik();
	this.instance_167.setTransform(187,81,0.8233,0.8233);

	this.instance_168 = new lib.BitmapGrTeknik();
	this.instance_168.setTransform(66,8,0.8233,0.8233);

	this.instance_169 = new lib.BitmapGrTeknik();
	this.instance_169.setTransform(896,8,0.8233,0.8233);

	this.instance_170 = new lib.BitmapGrTeknik();
	this.instance_170.setTransform(616,8,0.8233,0.8233);

	this.instance_171 = new lib.BitmapGrTeknik();
	this.instance_171.setTransform(346,8,0.8233,0.8233);

	this.instance_172 = new lib.BitmapGrTeknik();
	this.instance_172.setTransform(1025,482,0.8233,0.8233);

	this.instance_173 = new lib.BitmapGrTeknik();
	this.instance_173.setTransform(745,482,0.8233,0.8233);

	this.instance_174 = new lib.BitmapGrTeknik();
	this.instance_174.setTransform(465,482,0.8233,0.8233);

	this.instance_175 = new lib.BitmapGrTeknik();
	this.instance_175.setTransform(194,482,0.8233,0.8233);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_44.setTransform(1353.4,380);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_45.setTransform(94.425,384.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_46.setTransform(94.425,662.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_47.setTransform(94.425,516.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_48.setTransform(94.425,249.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_49.setTransform(94.425,111.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_50.setTransform(1264.2,585.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_51.setTransform(1264.2,723.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_52.setTransform(1264.2,453.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_53.setTransform(1264.2,181.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_54.setTransform(1264.7,312.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_55.setTransform(1264.7,38.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape_56.setTransform(677.675,381.975);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_57.setTransform(677.675,381.975);

	this.instance_176 = new lib.BitmapGrTeknik();
	this.instance_176.setTransform(64,693,0.8233,0.8233);

	this.instance_177 = new lib.BitmapGrTeknik();
	this.instance_177.setTransform(895,693,0.8233,0.8233);

	this.instance_178 = new lib.BitmapGrTeknik();
	this.instance_178.setTransform(615,693,0.8233,0.8233);

	this.instance_179 = new lib.BitmapGrTeknik();
	this.instance_179.setTransform(344,693,0.8233,0.8233);

	this.instance_180 = new lib.BitmapGrTeknik();
	this.instance_180.setTransform(1025,629,0.8233,0.8233);

	this.instance_181 = new lib.BitmapGrTeknik();
	this.instance_181.setTransform(745,629,0.8233,0.8233);

	this.instance_182 = new lib.BitmapGrTeknik();
	this.instance_182.setTransform(465,629,0.8233,0.8233);

	this.instance_183 = new lib.BitmapGrTeknik();
	this.instance_183.setTransform(194,629,0.8233,0.8233);

	this.instance_184 = new lib.BitmapGrTeknik();
	this.instance_184.setTransform(64,555,0.8233,0.8233);

	this.instance_185 = new lib.BitmapGrTeknik();
	this.instance_185.setTransform(895,555,0.8233,0.8233);

	this.instance_186 = new lib.BitmapGrTeknik();
	this.instance_186.setTransform(615,555,0.8233,0.8233);

	this.instance_187 = new lib.BitmapGrTeknik();
	this.instance_187.setTransform(344,555,0.8233,0.8233);

	this.instance_188 = new lib.BitmapGrTeknik();
	this.instance_188.setTransform(64,423,0.8233,0.8233);

	this.instance_189 = new lib.BitmapGrTeknik();
	this.instance_189.setTransform(895,423,0.8233,0.8233);

	this.instance_190 = new lib.BitmapGrTeknik();
	this.instance_190.setTransform(615,423,0.8233,0.8233);

	this.instance_191 = new lib.BitmapGrTeknik();
	this.instance_191.setTransform(344,423,0.8233,0.8233);

	this.instance_192 = new lib.BitmapGrTeknik();
	this.instance_192.setTransform(1017,354,0.8233,0.8233);

	this.instance_193 = new lib.BitmapGrTeknik();
	this.instance_193.setTransform(738,354,0.8233,0.8233);

	this.instance_194 = new lib.BitmapGrTeknik();
	this.instance_194.setTransform(458,354,0.8233,0.8233);

	this.instance_195 = new lib.BitmapGrTeknik();
	this.instance_195.setTransform(187,354,0.8233,0.8233);

	this.instance_196 = new lib.BitmapGrTeknik();
	this.instance_196.setTransform(66,282,0.8233,0.8233);

	this.instance_197 = new lib.BitmapGrTeknik();
	this.instance_197.setTransform(896,282,0.8233,0.8233);

	this.instance_198 = new lib.BitmapGrTeknik();
	this.instance_198.setTransform(616,282,0.8233,0.8233);

	this.instance_199 = new lib.BitmapGrTeknik();
	this.instance_199.setTransform(346,282,0.8233,0.8233);

	this.instance_200 = new lib.BitmapGrTeknik();
	this.instance_200.setTransform(1025,215,0.8233,0.8233);

	this.instance_201 = new lib.BitmapGrTeknik();
	this.instance_201.setTransform(745,215,0.8233,0.8233);

	this.instance_202 = new lib.BitmapGrTeknik();
	this.instance_202.setTransform(465,215,0.8233,0.8233);

	this.instance_203 = new lib.BitmapGrTeknik();
	this.instance_203.setTransform(194,215,0.8233,0.8233);

	this.instance_204 = new lib.BitmapGrTeknik();
	this.instance_204.setTransform(64,151,0.8233,0.8233);

	this.instance_205 = new lib.BitmapGrTeknik();
	this.instance_205.setTransform(895,151,0.8233,0.8233);

	this.instance_206 = new lib.BitmapGrTeknik();
	this.instance_206.setTransform(615,151,0.8233,0.8233);

	this.instance_207 = new lib.BitmapGrTeknik();
	this.instance_207.setTransform(344,151,0.8233,0.8233);

	this.instance_208 = new lib.BitmapGrTeknik();
	this.instance_208.setTransform(1017,81,0.8233,0.8233);

	this.instance_209 = new lib.BitmapGrTeknik();
	this.instance_209.setTransform(738,81,0.8233,0.8233);

	this.instance_210 = new lib.BitmapGrTeknik();
	this.instance_210.setTransform(458,81,0.8233,0.8233);

	this.instance_211 = new lib.BitmapGrTeknik();
	this.instance_211.setTransform(187,81,0.8233,0.8233);

	this.instance_212 = new lib.BitmapGrTeknik();
	this.instance_212.setTransform(66,8,0.8233,0.8233);

	this.instance_213 = new lib.BitmapGrTeknik();
	this.instance_213.setTransform(896,8,0.8233,0.8233);

	this.instance_214 = new lib.BitmapGrTeknik();
	this.instance_214.setTransform(616,8,0.8233,0.8233);

	this.instance_215 = new lib.BitmapGrTeknik();
	this.instance_215.setTransform(346,8,0.8233,0.8233);

	this.instance_216 = new lib.BitmapGrTeknik();
	this.instance_216.setTransform(1025,482,0.8233,0.8233);

	this.instance_217 = new lib.BitmapGrTeknik();
	this.instance_217.setTransform(745,482,0.8233,0.8233);

	this.instance_218 = new lib.BitmapGrTeknik();
	this.instance_218.setTransform(465,482,0.8233,0.8233);

	this.instance_219 = new lib.BitmapGrTeknik();
	this.instance_219.setTransform(194,482,0.8233,0.8233);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_58.setTransform(1353.4,380);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_59.setTransform(94.425,384.05);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_60.setTransform(94.425,662.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_61.setTransform(94.425,516.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_62.setTransform(94.425,249.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_63.setTransform(94.425,111.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_64.setTransform(1264.2,585.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_65.setTransform(1264.2,723.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_66.setTransform(1264.2,453.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_67.setTransform(1264.2,181.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_68.setTransform(1264.7,312.05);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_69.setTransform(1264.7,38.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ehpkg7XMDTJAAAMAAAB2vMjTJAAAg");
	this.shape_70.setTransform(677.675,381.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.498)").s().p("EhpkA7YMAAAh2vMDTJAAAMAAAB2vg");
	this.shape_71.setTransform(677.675,381.975);

	this.instance_220 = new lib.BitmapGrTeknik();
	this.instance_220.setTransform(64,693,0.8233,0.8233);

	this.instance_221 = new lib.BitmapGrTeknik();
	this.instance_221.setTransform(895,693,0.8233,0.8233);

	this.instance_222 = new lib.BitmapGrTeknik();
	this.instance_222.setTransform(615,693,0.8233,0.8233);

	this.instance_223 = new lib.BitmapGrTeknik();
	this.instance_223.setTransform(344,693,0.8233,0.8233);

	this.instance_224 = new lib.BitmapGrTeknik();
	this.instance_224.setTransform(1025,629,0.8233,0.8233);

	this.instance_225 = new lib.BitmapGrTeknik();
	this.instance_225.setTransform(745,629,0.8233,0.8233);

	this.instance_226 = new lib.BitmapGrTeknik();
	this.instance_226.setTransform(465,629,0.8233,0.8233);

	this.instance_227 = new lib.BitmapGrTeknik();
	this.instance_227.setTransform(194,629,0.8233,0.8233);

	this.instance_228 = new lib.BitmapGrTeknik();
	this.instance_228.setTransform(64,555,0.8233,0.8233);

	this.instance_229 = new lib.BitmapGrTeknik();
	this.instance_229.setTransform(895,555,0.8233,0.8233);

	this.instance_230 = new lib.BitmapGrTeknik();
	this.instance_230.setTransform(615,555,0.8233,0.8233);

	this.instance_231 = new lib.BitmapGrTeknik();
	this.instance_231.setTransform(344,555,0.8233,0.8233);

	this.instance_232 = new lib.BitmapGrTeknik();
	this.instance_232.setTransform(64,423,0.8233,0.8233);

	this.instance_233 = new lib.BitmapGrTeknik();
	this.instance_233.setTransform(895,423,0.8233,0.8233);

	this.instance_234 = new lib.BitmapGrTeknik();
	this.instance_234.setTransform(615,423,0.8233,0.8233);

	this.instance_235 = new lib.BitmapGrTeknik();
	this.instance_235.setTransform(344,423,0.8233,0.8233);

	this.instance_236 = new lib.BitmapGrTeknik();
	this.instance_236.setTransform(1017,354,0.8233,0.8233);

	this.instance_237 = new lib.BitmapGrTeknik();
	this.instance_237.setTransform(738,354,0.8233,0.8233);

	this.instance_238 = new lib.BitmapGrTeknik();
	this.instance_238.setTransform(458,354,0.8233,0.8233);

	this.instance_239 = new lib.BitmapGrTeknik();
	this.instance_239.setTransform(187,354,0.8233,0.8233);

	this.instance_240 = new lib.BitmapGrTeknik();
	this.instance_240.setTransform(66,282,0.8233,0.8233);

	this.instance_241 = new lib.BitmapGrTeknik();
	this.instance_241.setTransform(896,282,0.8233,0.8233);

	this.instance_242 = new lib.BitmapGrTeknik();
	this.instance_242.setTransform(616,282,0.8233,0.8233);

	this.instance_243 = new lib.BitmapGrTeknik();
	this.instance_243.setTransform(346,282,0.8233,0.8233);

	this.instance_244 = new lib.BitmapGrTeknik();
	this.instance_244.setTransform(1025,215,0.8233,0.8233);

	this.instance_245 = new lib.BitmapGrTeknik();
	this.instance_245.setTransform(745,215,0.8233,0.8233);

	this.instance_246 = new lib.BitmapGrTeknik();
	this.instance_246.setTransform(465,215,0.8233,0.8233);

	this.instance_247 = new lib.BitmapGrTeknik();
	this.instance_247.setTransform(194,215,0.8233,0.8233);

	this.instance_248 = new lib.BitmapGrTeknik();
	this.instance_248.setTransform(64,151,0.8233,0.8233);

	this.instance_249 = new lib.BitmapGrTeknik();
	this.instance_249.setTransform(895,151,0.8233,0.8233);

	this.instance_250 = new lib.BitmapGrTeknik();
	this.instance_250.setTransform(615,151,0.8233,0.8233);

	this.instance_251 = new lib.BitmapGrTeknik();
	this.instance_251.setTransform(344,151,0.8233,0.8233);

	this.instance_252 = new lib.BitmapGrTeknik();
	this.instance_252.setTransform(1017,81,0.8233,0.8233);

	this.instance_253 = new lib.BitmapGrTeknik();
	this.instance_253.setTransform(738,81,0.8233,0.8233);

	this.instance_254 = new lib.BitmapGrTeknik();
	this.instance_254.setTransform(458,81,0.8233,0.8233);

	this.instance_255 = new lib.BitmapGrTeknik();
	this.instance_255.setTransform(187,81,0.8233,0.8233);

	this.instance_256 = new lib.BitmapGrTeknik();
	this.instance_256.setTransform(66,8,0.8233,0.8233);

	this.instance_257 = new lib.BitmapGrTeknik();
	this.instance_257.setTransform(896,8,0.8233,0.8233);

	this.instance_258 = new lib.BitmapGrTeknik();
	this.instance_258.setTransform(616,8,0.8233,0.8233);

	this.instance_259 = new lib.BitmapGrTeknik();
	this.instance_259.setTransform(346,8,0.8233,0.8233);

	this.instance_260 = new lib.BitmapGrTeknik();
	this.instance_260.setTransform(1025,482,0.8233,0.8233);

	this.instance_261 = new lib.BitmapGrTeknik();
	this.instance_261.setTransform(745,482,0.8233,0.8233);

	this.instance_262 = new lib.BitmapGrTeknik();
	this.instance_262.setTransform(465,482,0.8233,0.8233);

	this.instance_263 = new lib.BitmapGrTeknik();
	this.instance_263.setTransform(194,482,0.8233,0.8233);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAAAA7sIAAhZIAApZIAAsLIAApZIAArPIAApZIAAsoIAApZIAArFIAApZIAAs9IAApZIAAhk");
	this.shape_72.setTransform(1353.4,380);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_73.setTransform(94.425,384.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_74.setTransform(94.425,662.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApYIeHAAIAAJYg");
	this.shape_75.setTransform(94.425,516.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEsIAApYIeHAAIAAJYg");
	this.shape_76.setTransform(94.425,249.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-179.4,-30)).s().p("AvDEtIAApZIeHAAIAAJZg");
	this.shape_77.setTransform(94.425,111.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EsIAApXIb3AAIAAJXg");
	this.shape_78.setTransform(1264.2,585.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_79.setTransform(1264.2,723.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApZIb3AAIAAJZg");
	this.shape_80.setTransform(1264.2,453.05);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-89.2,-30)).s().p("At7EtIAApYIb3AAIAAJYg");
	this.shape_81.setTransform(1264.2,181.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EsIAApYIbtAAIAAJYg");
	this.shape_82.setTransform(1264.7,312.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.bf(img.BitmapGrTeknik, null, new cjs.Matrix2D(0.823,0,0,0.823,-88.7,-30)).s().p("At2EtIAApYIbtAAIAAJYg");
	this.shape_83.setTransform(1264.7,38.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(61,151.9,2815.7,1706.3999999999999);
// library properties:
lib.properties = {
	id: 'B8F7C35A0583A64DB233C6A54CD7094B',
	width: 1280,
	height: 722,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap11.png?1737319980054", id:"Bitmap11"},
		{src:"images/Bitmap12.png?1737319980054", id:"Bitmap12"},
		{src:"images/Bitmap13.png?1737319980054", id:"Bitmap13"},
		{src:"images/Bitmap16.png?1737319980054", id:"Bitmap16"},
		{src:"images/Bitmap5.png?1737319980054", id:"Bitmap5"},
		{src:"images/Bitmap6.png?1737319980054", id:"Bitmap6"},
		{src:"images/Bitmap7.png?1737319980054", id:"Bitmap7"},
		{src:"images/Bitmap9.jpg?1737319980054", id:"Bitmap9"},
		{src:"images/BitmapGrTeknik.png?1737319980054", id:"BitmapGrTeknik"}
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
an.compositions['B8F7C35A0583A64DB233C6A54CD7094B'] = {
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