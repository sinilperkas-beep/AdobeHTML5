(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,685);


(lib.BitmapAki = function() {
	this.initialize(img.BitmapAki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,115);


(lib.BitmapDasarKK = function() {
	this.initialize(img.BitmapDasarKK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,154);


(lib.BitmapFuse = function() {
	this.initialize(img.BitmapFuse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,87);


(lib.BitmapKK = function() {
	this.initialize(img.BitmapKK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAmbIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAIAAAAQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAg");
	this.shape.setTransform(17.3,0,1,1,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AAAGcQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAg");
	this.shape_1.setTransform(17.3,0,1,1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAmbIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAIAAAAQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAg");
	this.shape_2.setTransform(6.7,0.2,1,1,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AAAGcQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAg");
	this.shape_3.setTransform(6.7,0.2,1,1,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAAmbIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAIAAAAQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAg");
	this.shape_4.setTransform(-5.8,0.1,1,1,-5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AAAGcQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAg");
	this.shape_5.setTransform(-5.8,0.1,1,1,-5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAAmbIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAIAAAAQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAg");
	this.shape_6.setTransform(-18,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099FF").s().p("AAAGcQgNAAgKgKQgJgJAAgOIAAr1QAAgOAJgKQAKgJANAAIAAAAQAOAAAJAJQAKAKAAAOIAAL1QAAAOgKAJQgJAKgOAAg");
	this.shape_7.setTransform(-18,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.3,-42.3,44.7,84.6);
p.frameBounds = [rect];


(lib.Tween2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.6)").s().p("Aq0BWIAAirIVpAAIAACrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-8.6,138.6,17.2);
p.frameBounds = [rect];


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AvGBWIAAirIeOAAIAACrg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.7,-8.6,193.5,17.2);
p.frameBounds = [rect];


(lib.tombol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.2)").s().p("AidCeIAAk7IE7AAIAAE7g");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.8,-15.7,31.7,31.7);
p.frameBounds = [rect];


(lib.stc_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8F4D10").ss(8,1,1).p("AFzDvQAFADgChMQgBgmgCgjQgygjhYglQixhJi5AIQhuAFhLggQhJgfARgpQASgtB+gaQCWgeEJAH");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stc_on, rect = new cjs.Rectangle(-41.4,-27.9,82.9,55.8), [rect]);


(lib.stc_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8F4D10").ss(8,1,1).p("AHYFhQAFADgChMQgBgmgCgjQgygjhYglQixhKi5AIQhuAFiDhEQiAhBg0hUQg7heBPg3QBchDELAI");
	this.shape.setTransform(-10.1,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.stc_off, rect = new cjs.Rectangle(-61.6,-50.7,103.1,78.6), [rect]);


(lib.st_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8,1,1).p("AGCHjQABADhGgSQhTgUhXgdQkKhXiLhqQjAiTBhieQB5jHI4jM");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.st_in, rect = new cjs.Rectangle(-42.6,-52.3,85.3,104.6), [rect]);


(lib.relay_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAABuIAAjb");
	this.shape.setTransform(0,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({regY:-11,y:-0.9},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1.9,2,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.putar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("AwfBWIAAirMAg/AAAIAACrg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.4,-8.6,211.1,17.2);
p.frameBounds = [rect];


(lib.plus_st30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(8,1,1).p("EAkDgmcQj/gYmRgaQsug2qWAYQuwAhodC6QqoDqgKHQQgIGDB0M7QBDHGAeDlQA3GNAZESQBALihsF5QiFHSmeAW");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plus_st30, rect = new cjs.Rectangle(-234.7,-258.8,469.4,517.7), [rect]);


(lib.plus_c30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(8,1,1).p("AEGbwQAYgUAigxQBDhiAxiPQCbnIhXrNQgvl+iqklQhqi2jtkAQh9iHgxg5Qhbhsg6hiQiSj1gJk4");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.plus_c30, rect = new cjs.Rectangle(-57.5,-181.6,115.1,363.2), [rect]);


(lib.out_st50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8,1,1).p("EgzTASjIgJgfQgLgngEgpQgPiFAwhtQCclbLbAZQFmAMHYCDQBhAbEZBVQDiBECBAfQGCBfD7gyQE3g+DlkoQBsiLBoi5QAqhKCCj5QBljFBIhwQBniiBzh0QEXkaHRh3QIhiNN/Ay");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.out_st50, rect = new cjs.Rectangle(-335.2,-122.7,670.4,245.4), [rect]);


(lib.out_c85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(8,1,1).p("ACHp6QAVBUgQBbQghC0irA3QheAeAOBkQAKBIBRCVQB4DhARAkQBFCXgIBg");
	this.shape.setTransform(-13.9,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.out_c85, rect = new cjs.Rectangle(-32.6,-71.6,37.4,135), [rect]);


(lib.min_gnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(8,1,1).p("EAwNgM7QgcA0hHBKQiOCVjPB2QqVF3wdhZQkAgWmQgzQnGg8jkgbQs+hmnZAWQqOAflLD+QmEEpAIJ6");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.min_gnd, rect = new cjs.Rectangle(-312.4,-86.7,624.9,173.5), [rect]);


(lib.lever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA2AAQAAAXgPAQQgQAQgXAAQgWAAgQgQQgPgQAAgXQAAgWAPgPQAQgQAWAAQAXAAAQAQQAPAPAAAWg");
	this.shape.setTransform(-21.9,83.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAnQgQgRAAgWQAAgWAQgQQAQgQAWAAQAWAAARAQQAPAQAAAWQAAAWgPARQgRAPgWAAQgWAAgQgPg");
	this.shape_1.setTransform(-21.9,83.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AA2AAQAAAXgPAQQgQAQgXAAQgWAAgQgQQgPgQAAgXQAAgWAPgPQAQgQAWAAQAXAAAQAQQAPAPAAAWg");
	this.shape_2.setTransform(-4.8,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAnQgQgRAAgWQAAgWAQgQQAQgQAWAAQAWAAARAQQAPAQAAAWQAAAWgPARQgRAPgWAAQgWAAgQgPg");
	this.shape_3.setTransform(-4.8,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABAAAQAAAagTATQgTATgaAAQgaAAgTgTQgSgTAAgaQAAgaASgTQATgSAaAAQAaAAATASQATATAAAag");
	this.shape_4.setTransform(-4.6,-81.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsAtQgTgSAAgbQAAgaATgSQASgTAaAAQAaAAATATQATASAAAaQAAAbgTASQgTATgaAAQgaAAgSgTg");
	this.shape_5.setTransform(-4.6,-81.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ag/rJQABAAgECJQAFCNAkAXQAkAYAXBXQAMArAFAmIgXAAQgcABgYAIQhOAbABBcQABBcA4A0QAdAaAcAIQABAAgEBqQgEBpAAAAQABAAgrAlQg1AvgsA1QiMCqAFCnQAFCpAEAPQACAIACgaIDgAAQAPhjAWhqQAvjVAxgkQBlhNACAAQABAAAfhWQAfhXABAAQABAAgYg2QgXg2ABAAQABAAgHj8QgHj9AAAAQABAAgthjQguhjABAAQABAAgEhDQgEhEAAAAQAYg5ACg6QABgwgeglQghgrg1AAQg0AAgmArQghAlgEAwQgDAkAUArQAKAWALAOg");
	this.shape_6.setTransform(-7.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AkDO7QgEgPgFipQgFinCMiqQAsg1A1gvIAqglIAEhpQAEhqgBAAQgcgIgdgaQg4g0gBhcQgBhcBOgbQAYgIAcgBIAXAAQgFgmgMgrQgXhXgkgYQgkgXgFiNQAEiJgBAAQgLgOgKgWQgUgrADgkQAEgwAhglQAmgrA0AAQA1AAAhArQAeAlgBAwQgCA6gYA5IAEBEQAEBDgBAAIAtBjQAtBjgBAAIAHD9QAHD8gBAAIAWA2QAYA2gBAAIggBXQgfBWgBAAQgCAAhlBNQgxAkgvDVQgWBqgPBjIjgAAQgCAUgBAAIgBgCg");
	this.shape_7.setTransform(-7.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lever, rect = new cjs.Rectangle(-34.9,-96.6,55.8,193.4), [rect]);


(lib.gerak_kk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BitmapKK();
	this.instance.parent = this;
	this.instance.setTransform(-46,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gerak_kk, rect = new cjs.Rectangle(-46,-45,92,90), [rect]);


(lib.magnet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Kemagnetan", "12px 'Times New Roman'", "#0066FF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(2,-42.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.498)").s().p("AhQCjQghhDAAhgQAAhfAhhEQAihDAuAAQAvAAAhBDQAiBEAABfQAABggiBDQghBEgvAAQguAAgihEg");
	this.shape.setTransform(0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,255,255,0.498)").s().p("Ah4DzQgxhkAAiPQAAiOAxhmQAzhkBFAAQBGAAAyBkQAyBmAACOQAACPgyBkQgyBmhGAAQhFAAgzhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.magnet, rect = new cjs.Rectangle(-17,-44.4,121.1,79), [rect]);


(lib.c86_st50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(8,1,1).p("Egs+gFvQgCByAPCpQAeFSBWEZQB5GLDaDhQEREaGaABQDRABCJiAQBxhoBijnQAjhUAziMQAchPA+iqQB3lAB7jaQFwqQLJlRQOmm5ZQAj");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c86_st50, rect = new cjs.Rectangle(-291.9,-147.8,583.8,295.6), [rect]);


(lib.c86_min = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("AXPcIIhChmQhIiBgiiJQhsm2FDlgQBahihOgWQg7gRjlATQl+AghyAFQlRAPkSgfUgbhgDGAAmghi");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c86_min, rect = new cjs.Rectangle(-161.8,-183.9,323.7,367.9), [rect]);


(lib.btn_st = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Aj/CeIAAk7IH/AAIAAE7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("Aj/CdIAAk6IH/AAIAAE6g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj/idIH/AAIAAE7In/AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.2)").s().p("Aj/CeIAAk7IH/AAIAAE7g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj/idIH/AAIAAE7In/AAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,255,0,0.2)").s().p("Aj/CeIAAk7IH/AAIAAE7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape_5},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-15.7,51.2,31.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-26.6,-16.7,53.2,33.5), rect];


(lib.BTN_RLY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC6600").ss(1,1,1).p("AgziFIBnAAIAAELIhnAAg");
	this.shape.setTransform(0.1,0,1.48,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC6600").s().p("AgzCGIAAkLIBnAAIAAELg");
	this.shape_1.setTransform(0.1,0,1.48,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag1hwIBrAAIAADhIhrAAg");
	this.shape_2.setTransform(-12.9,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BxIAAjhIBqAAIAADhg");
	this.shape_3.setTransform(-12.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(1,1,1).p("AgziFIBnAAIAAELIhnAAg");
	this.shape_4.setTransform(0.1,0,1.42,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgzCGIAAkLIBnAAIAAELg");
	this.shape_5.setTransform(0.1,0,1.42,0.856);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC6600").ss(1,1,1).p("AgshyIBZAAIAADlIhZAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FF00").s().p("AgsBzIAAjlIBZAAIAADlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.3,-12.4,28.1,25);
p.frameBounds = [rect, rect=new cjs.Rectangle(-18.3,-12.4,26.8,25), rect];


(lib.btn_btr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AA9AAQAAAagSARQgRASgaAAQgZAAgSgSQgRgRAAgaQAAgZARgSQASgRAZAAQAaAAARARQASASAAAZg");
	this.shape.setTransform(-0.6,-0.3,0.502,0.502);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgrArQgRgSAAgZQAAgYARgTQATgRAYAAQAZAAASARQASATAAAYQAAAZgSASQgSASgZAAQgYAAgTgSg");
	this.shape_1.setTransform(-0.6,-0.3,0.502,0.502);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(3,1,1).p("ABoBnIiNAnIhohoIAmiNICNgmIBoBog");
	this.shape_2.setTransform(-0.7,-0.2,0.502,0.502,-45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiNAmIAmiNICNgmIBoBoIgmCMIiNAng");
	this.shape_3.setTransform(-0.7,-0.2,0.502,0.502,-45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ag8g8IB5AAIAAB5Ih5AAg");
	this.shape_4.setTransform(-0.3,-0.1,0.502,0.502);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8A9IAAh5IB5AAIAAB5g");
	this.shape_5.setTransform(-0.3,-0.1,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_btr2, rect = new cjs.Rectangle(-9.6,-8.1,17.8,15.8), [rect]);


(lib.btn_btr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AA9AAQAAAagSARQgRASgaAAQgZAAgSgSQgRgRAAgaQAAgZARgSQASgRAZAAQAaAAARARQASASAAAZg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgrArQgRgSAAgZQAAgYARgTQATgRAYAAQAZAAASARQASATAAAYQAAAZgSASQgSASgZAAQgYAAgTgSg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("Ag8g8IB5AAIAAB5Ih5AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag8A9IAAh5IB5AAIAAB5g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(3,1,1).p("ABoBnIiNAnIhohoIAmiNICNgmIBoBog");
	this.shape_4.setTransform(-0.1,0.3,1,1,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiNAmIAmiNICNgmIBoBoIgmCMIiNAng");
	this.shape_5.setTransform(-0.1,0.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_btr1, rect = new cjs.Rectangle(-16.2,-13.9,32.4,28.5), [rect]);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
	this.shape.setTransform(0,0,0.948,0.948);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape_1.setTransform(0,0,0.948,0.948);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ADCBqIi8ByIjBhpIgGjbIC9hzIDABpg");
	this.shape_2.setTransform(-0.2,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai7ByIgGjaIC9hzIDABqIAFDaIi8Bzg");
	this.shape_3.setTransform(-0.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AlplpILTAAIAALTIrTAAg");
	this.shape_4.setTransform(1,1.5,0.83,0.83);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlpFqIAArTILTAAIAALTg");
	this.shape_5.setTransform(1,1.5,0.83,0.83);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AobobIQ3AAIAAQ3Iw3AAg");
	this.shape_6.setTransform(1.1,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AobIcIAAw3IQ3AAIAAQ3g");
	this.shape_7.setTransform(1.1,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF00").s().p("AlpFqIAArTILTAAIAALTg");
	this.shape_8.setTransform(1,1.5,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:-0.2,y:0.5}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:-0.2,y:0.5}},{t:this.shape_1,p:{scaleX:0.948,scaleY:0.948,x:0,y:0}},{t:this.shape,p:{scaleX:0.948,scaleY:0.948,x:0,y:0}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{scaleX:1.797,scaleY:1.797,x:-1.2,y:-0.3}},{t:this.shape_2,p:{scaleX:1.797,scaleY:1.797,x:-1.2,y:-0.3}},{t:this.shape_1,p:{scaleX:1.704,scaleY:1.704,x:-0.7,y:-1.1}},{t:this.shape,p:{scaleX:1.704,scaleY:1.704,x:-0.7,y:-1.1}}]},1).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:-0.2,y:0.5}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:-0.2,y:0.5}},{t:this.shape_1,p:{scaleX:0.948,scaleY:0.948,x:0,y:0}},{t:this.shape,p:{scaleX:0.948,scaleY:0.948,x:0,y:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-30.1,63.1,63.1);
p.frameBounds = [rect, new cjs.Rectangle(-54.4,-54,111,111), new cjs.Rectangle(-30.5,-30.1,63.1,63.1)];


(lib.bb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(8,1,1).p("AJeIDQgWh/gvipQhflQh7i9QitkJjMBIQkABakjJm");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bb, rect = new cjs.Rectangle(-64.6,-55.5,129.3,111.1), [rect]);


(lib.tutup_relay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AoPgiIQfAAIAABFIwfAAg");
	this.shape.setTransform(-0.3,-2.4,1.224,0.48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoPAjIAAhFIQfAAIAABFg");
	this.shape_1.setTransform(-0.3,-2.4,1.224,0.48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAgQgJgKABgWQAAgNACgIQADgJAGgFQAGgEAHAAQAGAAAFACQAFADADAFQADAFACAGQACAIAAAKQAAANgEAJQgCAIgGAFQgFAFgJAAQgLAAgFgIgAgJgaQgGAHAAATQABATAEAGQAEAHAGAAQAGAAAFgHQAFgGAAgTQAAgTgFgGQgFgGgGAAQgFAAgEAFg");
	this.shape_2.setTransform(52.1,-16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAiQgHgHgBgJIAKgCQACAJAEADQAEAEAFAAQAGAAAFgFQAEgFAAgGQAAgHgEgEQgEgFgHAAIgGABIABgHIACAAQAFAAAFgDQAFgEAAgGQAAgFgEgEQgDgDgFAAQgGAAgDADQgEAEgBAHIgKgCQACgJAGgGQAHgFAJAAQAFAAAGACQAFADADAFQADAFAAAFQAAAFgDAEQgDAEgFADQAHACAEAEQAEAFAAAIQAAAKgIAHQgHAHgLAAQgKAAgHgGg");
	this.shape_3.setTransform(46,-16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAmQAAgIADgOQADgNAHgLQAFgMAIgIIglAAIAAgJIAxAAIAAAHQgHAHgHAOQgIAMgDAOQgCAKgCALg");
	this.shape_4.setTransform(24.8,-16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgJAGgFQAHgGAJAAQAKAAAGAGQAHAGAAAIQAAAGgDAEQgDAEgGACQAHACAEAFQAEAFAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACAEAEACQAEACADAAQAHAAAEgFQAFgEAAgHQAAgGgFgFQgEgFgHAAQgGAAgEAFgAgIgcQgEAEAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_5.setTransform(18.7,-16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAfQgIgJAAgUQAAgWAIgKQAIgJALAAQAJAAAHAFQAFAFACAKIgKAAQgBgFgDgDQgEgEgGAAQgDAAgEADQgEADgDAGQgCAHgBALQAEgFAFgDQAFgCAEAAQAKAAAHAHQAHAGAAALQAAAIgEAGQgDAGgFADQgFAEgIAAQgLAAgHgJgAgJABQgFAFAAAHQAAAFADAFQABAEAEACQAEADADAAQAGAAAEgFQAFgFAAgIQAAgJgFgEQgDgEgIAAQgFAAgEAEg");
	this.shape_6.setTransform(-11.7,-16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgJAGgFQAHgGAJAAQAKAAAGAGQAHAGAAAIQAAAGgDAEQgDAEgGACQAHACAEAFQAEAFAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACAEAEACQAEACADAAQAHAAAEgFQAFgEAAgHQAAgGgFgFQgEgFgHAAQgGAAgEAFgAgIgcQgEAEAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_7.setTransform(-17.8,-16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAhQgHgGgBgKIAKgBQABAIAEAEQAFADAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgEQgFgFgGAAQgFAAgEACIgFAFIgJgBIAIgnIAlAAIAAAJIgeAAIgEAVQAHgFAHAAQAKAAAHAHQAHAGAAALQAAALgGAIQgIAJgMAAQgLAAgGgGg");
	this.shape_8.setTransform(-45.1,-16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgJAGgFQAHgGAJAAQAKAAAGAGQAHAGAAAIQAAAGgDAEQgDAEgGACQAHACAEAFQAEAFAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACAEAEACQAEACADAAQAHAAAEgFQAFgEAAgHQAAgGgFgFQgEgFgHAAQgGAAgEAFgAgIgcQgEAEAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgFQAAgFgEgEQgEgDgFAAQgFAAgDADg");
	this.shape_9.setTransform(-51.2,-16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAwIAAgCIAEAAQAGAAACgEQACgCAAgIIAAgXIgagoIgHgJIgHgEIgEgBIAAgCIApAAIAAACIgCAAQgDAAgDACQgDACAAADQAAACAFAHIATAeIATgdQAEgGAAgEIgBgDIgDgDIgGgBIAAgCIAiAAIAAACIgCAAIgFACQgEACgDADIgHAKIgXAjIAAAZQAAAIACADQACADAGAAIADAAIAAACg");
	this.shape_10.setTransform(17.4,-53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AANAxIAAgCQAGgBACgBQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgDgDgHIgGgOIgkAAIgGAPQgDAGAAADQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQACACAHABIAAACIgeAAIAAgCQAGgBACgCQADgEAFgKIAihOIABAAIAiBPQAEAJADADQADADAGABIAAACgAgUAMIAgAAIgPgmg");
	this.shape_11.setTransform(6.9,-53.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoAwIAAgCIADAAQAGAAADgEQABgDAAgIIAAg9QAAgJgCgCQgDgEgFAAIgDAAIAAgCIAqAAIAAACQgGAAgEACQgDABgBADQgBACAAAIIAAA8IABAIIACACQACABAJAAIAHAAQALAAAEgCQAFgBAEgEQADgEAEgJIADAAIgJAag");
	this.shape_12.setTransform(-2.8,-53.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoAwIAAgCIADAAQAEAAADgCIADgDIABgKIAAg9QAAgKgCgCQgDgDgGAAIgDAAIAAgCIBJAAIABAVIgDAAIgDgLQgCgCgDgCIgKgBIgaAAIAAAmIAUAAQAJAAACgCQAEgEABgIIACAAIAAAhIgCAAIgCgJQgCgDgDgBQgDgCgGAAIgUAAIAAAgIABAIIACACIAFABIAQAAIALgBQAEgBAEgEIAJgNIACAAIgIAYg");
	this.shape_13.setTransform(-11.8,-53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWAwIgfgtIgHAAIgBAAIgCAAIAAAcQAAAJACACQACAEAGAAIADAAIAAACIgpAAIAAgCIAEAAQAFAAAEgEQABgDAAgIIAAg9QAAgJgCgCQgDgEgFAAIgEAAIAAgCIAjAAQAPAAAHACQAHACAFAGQAFAGABAJQAAAIgHAHQgFAHgNABIAUAcQAIAKAEADQAFADAIABIAAACgAgTgoIAAAoIACAAIABAAQAOAAAGgGQAIgGgBgJQABgKgHgFQgFgGgIAAIgLACg");
	this.shape_14.setTransform(-20.8,-53.7);

	this.c30 = new lib.BTN_RLY();
	this.c30.name = "c30";
	this.c30.parent = this;
	this.c30.setTransform(54.1,12.8,1.215,1.215);
	new cjs.ButtonHelper(this.c30, 0, 1, 2);

	this.c87 = new lib.BTN_RLY();
	this.c87.name = "c87";
	this.c87.parent = this;
	this.c87.setTransform(18.1,12.8,1.215,1.215);
	new cjs.ButtonHelper(this.c87, 0, 1, 2);

	this.c86 = new lib.BTN_RLY();
	this.c86.name = "c86";
	this.c86.parent = this;
	this.c86.setTransform(-17.2,12.8,1.215,1.215);
	new cjs.ButtonHelper(this.c86, 0, 1, 2);

	this.c85 = new lib.BTN_RLY();
	this.c85.name = "c85";
	this.c85.parent = this;
	this.c85.setTransform(-53.2,12.8,1.215,1.215);
	new cjs.ButtonHelper(this.c85, 0, 1, 2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("Ap0nEITpAAIAAOJIzpAAg");
	this.shape_15.setTransform(-0.1,-43.2,1.034,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("Ap0HFIAAuJITpAAIAAOJg");
	this.shape_16.setTransform(-0.1,-43.2,1.034,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.c85},{t:this.c86},{t:this.c87},{t:this.c30},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutup_relay, rect = new cjs.Rectangle(-76.5,-89.5,142.4,117.3), [rect]);


(lib.relay_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAgQgIgKAAgWQAAgNACgIQADgJAGgFQAFgEAIAAQAGAAAFADQAFACADAFQADAFACAGQABAIAAAKQAAANgDAJQgCAJgGAEQgFAFgJAAQgLAAgFgIgAgKgaQgEAIAAASQgBATAFAHQAFAGAFAAQAGAAAFgGQAFgHgBgTQABgTgFgGQgFgGgGAAQgFAAgFAFg");
	this.shape.setTransform(23.4,50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAiQgHgHgBgJIAKgBQACAHAEAEQAEAEAFAAQAGAAAFgFQAEgFAAgGQAAgHgEgEQgEgFgHAAIgGABIABgHIACAAQAFAAAFgDQAFgDAAgHQAAgFgEgDQgDgEgFAAQgGAAgDAEQgEADgBAHIgKgCQACgJAGgGQAHgFAJAAQAFAAAGADQAFADADAEQADAFAAAGQAAAFgDAEQgDADgFADQAHABAEAFQAEAFAAAIQAAAKgIAHQgHAHgLAAQgKAAgHgGg");
	this.shape_1.setTransform(17.4,50.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAmQABgIADgOQAEgNAGgLQAGgMAHgIIgmAAIAAgJIAzAAIAAAHQgIAHgIAOQgHAMgDAOQgDAKgBALg");
	this.shape_2.setTransform(-6.9,50.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgIAGgGQAHgGAJAAQAKAAAGAGQAHAGAAAJQAAAFgDAEQgDAEgGACQAHACAEAEQAEAGAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACADAEADQAEACADAAQAHAAAEgFQAFgEAAgHQAAgHgFgEQgEgFgHAAQgGAAgEAFgAgIgbQgEADAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgEQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_3.setTransform(-13,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAfQgHgJAAgUQAAgWAIgKQAIgJALAAQAJAAAGAFQAGAFACAKIgKAAQgCgFgCgDQgDgEgHAAQgDAAgEADQgEADgCAGQgDAGgBAMQAEgFAFgCQAFgDAEAAQAKgBAHAIQAHAGAAALQAAAIgDAGQgDAGgGADQgFAEgIAAQgKAAgJgJgAgJABQgFAEAAAIQAAAFADAFQACAEADACQAEADADAAQAGAAAEgFQAFgFAAgIQAAgJgFgEQgDgEgIAAQgFAAgEAEg");
	this.shape_4.setTransform(-37.3,50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgIAGgGQAHgGAJAAQAKAAAGAGQAHAGAAAJQAAAFgDAEQgDAEgGACQAHACAEAEQAEAGAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACADAEADQAEACADAAQAHAAAEgFQAFgEAAgHQAAgHgFgEQgEgFgHAAQgGAAgEAFgAgIgbQgEADAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgEQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_5.setTransform(-43.4,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAhQgHgGgBgKIAKgBQABAIAFAEQAEADAFAAQAGAAAFgFQAFgFAAgJQAAgIgFgEQgFgFgGAAQgEAAgEACIgGAFIgKgBIAIgnIAmAAIAAAJIgeAAIgEAVQAHgFAGAAQALAAAHAHQAHAGAAALQAAALgHAIQgHAJgMAAQgLAAgGgGg");
	this.shape_6.setTransform(-67.6,51);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAhQgHgHAAgKQAAgIAEgFQAEgEAHgCQgGgCgDgEQgDgEAAgGQAAgIAGgGQAHgGAJAAQAKAAAGAGQAHAGAAAJQAAAFgDAEQgDAEgGACQAHACAEAEQAEAGAAAHQAAAKgHAHQgHAHgMAAQgLAAgHgHgAgKAFQgFAEAAAHQAAAEACAEQACADAEADQAEACADAAQAHAAAEgFQAFgEAAgHQAAgHgFgEQgEgFgHAAQgGAAgEAFgAgIgbQgEADAAAFQAAAGAEADQADAEAFgBQAGABADgEQAEgEAAgEQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(-73.7,50.9);

	this.text = new cjs.Text("100 Ω ", "30px 'Times New Roman'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-51.6,15.1,0.473,0.473,-90);

	this.magnet = new lib.magnet();
	this.magnet.name = "magnet";
	this.magnet.parent = this;
	this.magnet.setTransform(-32.6,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAi/IAAF/");
	this.shape_8.setTransform(-12.6,13.6);

	this.tuas = new lib.relay_a();
	this.tuas.name = "tuas";
	this.tuas.parent = this;
	this.tuas.setTransform(-0.7,-0.8,1,1.584,-41.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AAACMIAAkX");
	this.shape_9.setTransform(-1.5,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ACXFTIAAqlIktAAIAAB7");
	this.shape_10.setTransform(13.2,20.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAahIQgBABgCACQgLAMgPAAQgPAAgMgMQgCgCgBgBQABgCACgCQAMgLAPAAQAPAAALALQACACABACQAIAKAAANQAAAOgJALQgBABgBABQgLALgPAAQgPAAgMgLQgBgBgBgBQABgBABgBQAMgLAPAAQAPAAALALQABABABABQAJALAAANQAAANgIAKQgBABgCADQgLALgPAAQgPAAgMgLQgCgDgBgBQABgCACgCQAMgLAPAAQAPAAALALQACACABACQAIAKAAANQAAAPgJAKQAJAKAAAPQAAANgIAKQgBACgCACQgLALgPAAQgPAAgMgLQgCgCgBgCQABgCACgCQAMgLAPAAQAPAAALALQACACABACAgXh/QAJgGALAAQAPAAALALQALALAAAQQAAANgIAKAAZBHQgBAAgBACQgLALgPAAQgPAAgMgLQgBgCgBAAQABgBABgBQAMgLAPAAQAPAAALALQABABABABg");
	this.shape_11.setTransform(-32.1,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAaIgDgDIADgEQAMgLAOAAQAQAAAKALIAEAEIgEADQgKAMgQAAQgOAAgMgMgAAaATQgKgLgQAAQgOAAgMALIgDAEQgIgKAAgNQAAgPALgLIAHgFQAJgGAKAAQAQAAAKALQAMALAAAPQAAANgIAKIgEgEg");
	this.shape_12.setTransform(-32.5,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AAACMIAAkX");
	this.shape_13.setTransform(-32.7,40.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AiWFTIAAqlIEtAAIAAB7");
	this.shape_14.setTransform(-47.4,20.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AHbFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAFjFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgADrFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgABzFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAgEFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAh8FoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAj0FoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAlsFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAnkFoQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAoZFnQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAIUE0QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAoZDuQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAIUC9QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAoZB2QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAIUBFQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAoZAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAgAIUgzQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAoZh5QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAIUiqQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAoZjxQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAIUkiQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgAGpldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAExldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAC5ldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgABBldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAg2ldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAiuldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAkmldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAmeldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAoWldQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_15.setTransform(-17.9,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AGkFjQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg7AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgyAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIgoAAIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgyQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIAAgoIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAyAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAoAAIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAxQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAyQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAIAAAoIg8AAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABg");
	this.shape_16.setTransform(-17.9,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.tuas},{t:this.shape_8},{t:this.magnet},{t:this.text},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.relay_, rect = new cjs.Rectangle(-79.2,-30.6,150.6,90.2), [rect]);


(lib.relay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.tutup = new lib.tutup_relay();
	this.tutup.name = "tutup";
	this.tutup.parent = this;
	this.tutup.setTransform(-28,45.1,1.331,1.331,0,0,0,-0.1,-0.1);

	this.inti = new lib.relay_();
	this.inti.name = "inti";
	this.inti.parent = this;
	this.inti.setTransform(-1.8,-13.2,1.561,1.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.inti},{t:this.tutup}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.relay, rect = new cjs.Rectangle(-129.1,-73.2,238.7,156.3), [rect]);


(lib.pegas_plunyer_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-21.4,-0.1,1,1,0,0,0,-21.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pegas_plunyer_on, rect = new cjs.Rectangle(-22.3,-42.3,44.7,84.6), [rect]);


(lib.pegas_plunyer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-21.4,-0.1,1,1,0,0,0,-21.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pegas_plunyer, rect = new cjs.Rectangle(-22.3,-42.3,44.7,84.6), [rect]);


(lib.kk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIBBIAAhxIgqAAIAAgPIBlAAIAAAPIgrAAIAABxg");
	this.shape.setTransform(-31.3,-98.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYA+QgMgGgHgJQgHgLAAgNIAQgCQABAKAEAHQAEAGAJADQAJAEAKAAQAKAAAHgDQAIgCADgGQAEgFAAgGQAAgFgEgFQgDgFgIgDIgWgGQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANAAQANAAALAFQALAFAGAIQAGAJABAMIgRABQgBgMgIgGQgHgHgPAAQgPABgHAFQgHAGAAAIQAAAHAFAEQAFAEAUAFQAVAFAHADQAMAFAFAIQAFAIAAAKQAAAKgFAJQgGAJgLAGQgLAEgOAAQgRAAgLgEg");
	this.shape_1.setTransform(-42.9,-98.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBBIAAiAIAwAAQAPAAAJADQAIAFAFAHQAFAJAAAIQAAAJgEAHQgEAHgKAFQAMADAGAIQAHAIAAALQAAAJgEAIQgEAIgGAEQgFAEgJADQgIACgMAAgAgfAxIAgAAIALgBQAGgBAEgCQAEgCADgFQACgEAAgHQAAgHgEgGQgDgFgHgCQgGgCgMAAIgeAAgAgfgJIAcAAQALAAAFgCQAGgBADgFQAEgEAAgIQAAgGgDgFQgDgEgGgDQgGgBgNAAIgaAAg");
	this.shape_2.setTransform(27.6,-98.3);

	this.btn_st = new lib.tombol();
	this.btn_st.name = "btn_st";
	this.btn_st.parent = this;
	this.btn_st.setTransform(32.9,-20.1);
	new cjs.ButtonHelper(this.btn_st, 0, 1, 1);

	this.gerak_kk = new lib.gerak_kk();
	this.gerak_kk.name = "gerak_kk";
	this.gerak_kk.parent = this;
	this.gerak_kk.setTransform(-0.2,13.9,1,1,6.3,0,0,0.1,0);

	this.btn_off = new lib.tombol();
	this.btn_off.name = "btn_off";
	this.btn_off.parent = this;
	this.btn_off.setTransform(-40.1,-14);
	new cjs.ButtonHelper(this.btn_off, 0, 1, 1);

	this.btn_on = new lib.tombol();
	this.btn_on.name = "btn_on";
	this.btn_on.parent = this;
	this.btn_on.setTransform(-8.1,-37.1);
	new cjs.ButtonHelper(this.btn_on, 0, 1, 1);

	this.B = new lib.btn();
	this.B.name = "B";
	this.B.parent = this;
	this.B.setTransform(28.9,-68.7,0.403,0.403,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.B, 0, 1, 2);

	this.ST = new lib.btn();
	this.ST.name = "ST";
	this.ST.parent = this;
	this.ST.setTransform(-39,-68.7,0.403,0.403,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.ST, 0, 1, 2);

	this.instance = new lib.BitmapDasarKK();
	this.instance.parent = this;
	this.instance.setTransform(-66,-73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.ST},{t:this.B},{t:this.btn_on},{t:this.btn_off},{t:this.gerak_kk},{t:this.btn_st},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kk, rect = new cjs.Rectangle(-66,-110.2,132,190.6), [rect]);


(lib.btr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_btr1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.454,1.454);

	this.btn_btr2 = new lib.btn_btr2();
	this.btn_btr2.name = "btn_btr2";
	this.btn_btr2.parent = this;
	this.btn_btr2.setTransform(0.7,0.2,2.646,2.646);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993333").ss(1,1,1).p("AEKAAIiEDmIkJAAIiGjmICFjlIEJAAg");
	this.shape.setTransform(-1.3,-0.4,1.444,1.444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiDDmIiGjlICFjmIEJAAICFDlIiFDmg");
	this.shape_1.setTransform(-1.3,-0.4,1.444,1.444);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF00").s().p("AiDDmIiGjlICFjmIEJAAICFDlIiFDmg");
	this.shape_2.setTransform(-1.3,-0.4,1.444,1.444);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.btn_btr2}]},1).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape},{t:this.btn_btr2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.7,-20.3,47.1,41.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-40.7,-34.6,78.8,68.4), rect];


(lib.armaturcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.putar("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.9,y:96.9},10).to({x:0,y:0},1).to({x:3.9,y:96.9},10).wait(1));

	// Layer_1
	this.instance_1 = new lib.putar("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:3.9,y:109.5},14).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.4,-8.6,211.1,17.2);
p.frameBounds = [rect, new cjs.Rectangle(-105,1.1,211.1,17.2), new cjs.Rectangle(-104.6,10.8,211.1,17.2), new cjs.Rectangle(-104.3,20.5,211.1,17.2), new cjs.Rectangle(-103.9,30.2,211.1,17.2), new cjs.Rectangle(-105.4,-9.9,213.1,67), new cjs.Rectangle(-105.1,-2,213.2,68.7), new cjs.Rectangle(-104.9,5.9,213.3,70.5), new cjs.Rectangle(-104.6,13.9,213.4,72.3), new cjs.Rectangle(-104.3,21.8,213.5,74), new cjs.Rectangle(-104,29.7,213.6,75.8), new cjs.Rectangle(-105.4,-8.6,212.8,63.4), new cjs.Rectangle(-105,1.1,212.7,61.6), new cjs.Rectangle(-104.6,10.8,212.6,59.9), new cjs.Rectangle(-104.3,20.5,212.5,58.1), new cjs.Rectangle(-103.9,30.2,212.4,56.3), new cjs.Rectangle(-103.5,39.9,212.2,54.5), new cjs.Rectangle(-103.1,49.5,212.1,52.8), new cjs.Rectangle(-102.7,59.2,212,51), new cjs.Rectangle(-102.3,68.9,211.9,49.1), new cjs.Rectangle(-101.9,78.6,211.1,17.2), new cjs.Rectangle(-101.5,88.3,211.1,17.2)];


(lib.armaturcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.Tween2copy("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.9,y:96.9},10).to({x:0,y:0},1).to({x:3.9,y:96.9},10).wait(1));

	// Layer_1
	this.instance_1 = new lib.Tween2copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:3.9,y:99.5},14).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.3,-8.6,138.6,17.2);
p.frameBounds = [rect, new cjs.Rectangle(-68.9,1.1,138.7,17.2), new cjs.Rectangle(-68.5,10.8,138.7,17.2), new cjs.Rectangle(-68.1,20.5,138.7,17.2), new cjs.Rectangle(-67.7,30.2,138.7,17.2), new cjs.Rectangle(-69.3,-9.9,140.6,67), new cjs.Rectangle(-69,-2.7,140.7,69.4), new cjs.Rectangle(-68.7,4.5,140.9,71.9), new cjs.Rectangle(-68.4,11.7,140.9,74.4), new cjs.Rectangle(-68.2,18.9,141.1,76.9), new cjs.Rectangle(-67.9,26.1,141.2,79.4), new cjs.Rectangle(-69.3,-8.6,140.3,59.1), new cjs.Rectangle(-68.9,1.1,140.2,56.6), new cjs.Rectangle(-68.5,10.8,140.1,54.1), new cjs.Rectangle(-68.1,20.5,140,51.6), new cjs.Rectangle(-67.7,30.2,139.9,49.1), new cjs.Rectangle(-67.3,39.9,139.8,46.6), new cjs.Rectangle(-66.9,49.5,139.7,44.2), new cjs.Rectangle(-66.5,59.2,139.5,41.6), new cjs.Rectangle(-66.2,68.9,139.5,39.1), new cjs.Rectangle(-65.8,78.6,138.6,17.2), new cjs.Rectangle(-65.4,88.3,138.7,17.2)];


(lib.armatur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.9,y:96.9},10).to({x:0,y:0},1).to({x:3.9,y:96.9},10).wait(1));

	// Layer_1
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:3.9,y:99.5},14).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.7,-8.6,193.5,17.2);
p.frameBounds = [rect, new cjs.Rectangle(-96.3,1.1,193.5,17.2), new cjs.Rectangle(-95.9,10.8,193.5,17.2), new cjs.Rectangle(-95.5,20.5,193.5,17.2), new cjs.Rectangle(-95.1,30.2,193.5,17.2), new cjs.Rectangle(-96.7,-9.9,195.5,67), new cjs.Rectangle(-96.4,-2.7,195.6,69.4), new cjs.Rectangle(-96.1,4.5,195.7,71.9), new cjs.Rectangle(-95.8,11.7,195.8,74.4), new cjs.Rectangle(-95.6,18.9,195.9,76.9), new cjs.Rectangle(-95.3,26.1,196,79.4), new cjs.Rectangle(-96.7,-8.6,195.2,59.1), new cjs.Rectangle(-96.3,1.1,195.1,56.6), new cjs.Rectangle(-95.9,10.8,195,54.1), new cjs.Rectangle(-95.5,20.5,194.9,51.6), new cjs.Rectangle(-95.1,30.2,194.8,49.1), new cjs.Rectangle(-94.7,39.9,194.6,46.6), new cjs.Rectangle(-94.3,49.5,194.5,44.2), new cjs.Rectangle(-93.9,59.2,194.4,41.6), new cjs.Rectangle(-93.6,68.9,194.3,39.1), new cjs.Rectangle(-93.2,78.6,193.5,17.2), new cjs.Rectangle(-92.8,88.3,193.5,17.2)];


(lib.plunyer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.pegas_on = new lib.pegas_plunyer();
	this.pegas_on.name = "pegas_on";
	this.pegas_on.parent = this;
	this.pegas_on.setTransform(73.2,-2.8,0.812,1,0,0,0,21.4,-0.1);

	this.pegas_off = new lib.pegas_plunyer();
	this.pegas_off.name = "pegas_off";
	this.pegas_off.parent = this;
	this.pegas_off.setTransform(74.2,-2.8,1.092,1,0,0,0,21.4,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AggoBIBBAAIAAQDIhBAAg");
	this.shape.setTransform(74.9,-3.3,0.327,0.756,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggIDIAAwFIBBAAIAAQFg");
	this.shape_1.setTransform(74.9,-3.3,0.327,0.756,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AggoBIBBAAIAAQDIhBAAg");
	this.shape_2.setTransform(-97.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AggIDIAAwFIBBAAIAAQFg");
	this.shape_3.setTransform(-97.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Am/j1IN/AAIAAHrIt/AAg");
	this.shape_4.setTransform(-15.9,-1.6,0.571,1.761,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#676767","#FBFBFB","#666666"],[0,0.529,1],-44.8,0,44.8,0).s().p("Am/D2IAAnrIN/AAIAAHrg");
	this.shape_5.setTransform(-15.9,-1.6,0.571,1.761,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("APfhTIAACnI+9AAIAAing");
	this.shape_6.setTransform(0,-2.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#676767","#FBFBFB","#666666"],[0,0.529,1],0.1,-8.3,0.1,8.4).s().p("AveBUIAAinIe9AAIAACng");
	this.shape_7.setTransform(0,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.pegas_off},{t:this.pegas_on}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.plunyer, rect = new cjs.Rectangle(-102.1,-52.4,202.3,104.9), [rect]);


(lib.pinion_gear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAkiQAUAAAOAOQAOAOAAAUIAAHlQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUIAAnlQAAgUAOgOQAOgOATAAg");
	this.shape.setTransform(-82.9,2.5,2.208,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AghEVQgOgOAAgUIAAnlQAAgUAOgOQAOgOATAAQAUAAAOAOQAOAOAAAUIAAHlQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_1.setTransform(-82.9,2.5,2.208,1);

	this.pegas_plunyer = new lib.pegas_plunyer_on();
	this.pegas_plunyer.name = "pegas_plunyer";
	this.pegas_plunyer.parent = this;
	this.pegas_plunyer.setTransform(-74.1,0.5,1.039,0.612,0,0,0,-21.5,-0.1);

	this.muter2 = new lib.armaturcopy2();
	this.muter2.name = "muter2";
	this.muter2.parent = this;
	this.muter2.setTransform(16.3,-17.9,0.113,0.341);

	this.muter1 = new lib.armatur();
	this.muter1.name = "muter1";
	this.muter1.parent = this;
	this.muter1.setTransform(-13.5,-32.6,0.16,0.588,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.muter1},{t:this.muter2},{t:this.pegas_plunyer},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AhEmfICJAAQBQAAAABQIAAKfQAABQhQAAIiJAAQhQAAAAhQIAAqfQAAhQBQAAg");
	this.shape_2.setTransform(-13.2,0,2.769,0.397,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#7B7B7B","#FFFFFF","#FDFDFD","#7B7B7B"],[0.137,0.396,0.737,1],-14.9,0,15,0).s().p("AhFGgQhQAAAAhQIAAqfQAAhQBQAAICLAAQBQAAAABQIAAKfQAABQhQAAg");
	this.shape_3.setTransform(-13.2,0,2.769,0.397,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AkOCxIAAlhQAAhIAoAAIHNAAQAoAAAABIIAAFhQAABIgoAAInNAAQgoAAAAhIg");
	this.shape_4.setTransform(4.8,-0.4,1,1,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#454545","#CACACA","#4F4F4F","#E0E0E0","#454545","#FFFFFF","#454545","#FDFDFD","#454545","#FFFFFF","#454545","#FFFFFF","#454545","#BDBDBD","#7B7B7B"],[0.063,0.188,0.267,0.325,0.412,0.482,0.553,0.612,0.686,0.749,0.824,0.882,0.941,0.941,1],-27.1,0,27.1,0).s().p("AjmD5QgoAAAAhIIAAlhQAAhIAoAAIHNAAQAoAAAABIIAAFhQAABIgoAAg");
	this.shape_5.setTransform(4.8,-0.4,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinion_gear, rect = new cjs.Rectangle(-94.5,-42.4,125.2,84.8), [rect]);


(lib.motor_st = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.lever = new lib.lever();
	this.lever.name = "lever";
	this.lever.parent = this;
	this.lever.setTransform(-364.9,37,1,1,3.8,0,0,-4.9,-6.7);

	this.plunyer = new lib.plunyer();
	this.plunyer.name = "plunyer";
	this.plunyer.parent = this;
	this.plunyer.setTransform(-461.6,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plunyer},{t:this.lever}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#774025").ss(2,1,1).p("AkWAAIItAA");
	this.shape.setTransform(-565.5,5.9);

	this.pinion_gear = new lib.pinion_gear();
	this.pinion_gear.name = "pinion_gear";
	this.pinion_gear.parent = this;
	this.pinion_gear.setTransform(-305.3,128);

	this.armatur4 = new lib.armatur();
	this.armatur4.name = "armatur4";
	this.armatur4.parent = this;
	this.armatur4.setTransform(-243.1,120.6,0.38,0.222,0,0,0,-0.4,0);

	this.armatur5 = new lib.armatur();
	this.armatur5.name = "armatur5";
	this.armatur5.parent = this;
	this.armatur5.setTransform(-351.6,90.8,0.44,0.465,0,0,0,-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoLBbIAAi0QAAhpBlAAINOAAQBkAAAABpIAAC0QAABphkAAItOAAQhlAAAAhpg");
	this.shape_1.setTransform(-340.7,128.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7B7B7B","#FFFFFF","#FDFDFD","#7B7B7B"],[0.137,0.396,0.737,1],0,19.6,0,-19.5).s().p("AmmDEQhlAAAAhpIAAi1QAAhpBlABINNAAQBlgBAABpIAAC1QAABphlAAg");
	this.shape_2.setTransform(-340.7,128.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhEmfICJAAQBQAAAABQIAAKfQAABQhQAAIiJAAQhQAAAAhQIAAqfQAAhQBQAAg");
	this.shape_3.setTransform(-271.1,128.5,0.7,1.558,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7B7B7B","#FFFFFF","#FDFDFD","#7B7B7B"],[0.137,0.396,0.737,1],-14.9,0,15,0).s().p("AhFGgQhQAAAAhQIAAqfQAAhQBQAAICLAAQBQAAAABQIAAKfQAABQhQAAg");
	this.shape_4.setTransform(-271.1,128.5,0.7,1.558,-90);

	this.armatur3 = new lib.armatur();
	this.armatur3.name = "armatur3";
	this.armatur3.parent = this;
	this.armatur3.setTransform(-650.6,119.1,0.167,0.233);

	this.armatur2 = new lib.armaturcopy();
	this.armatur2.name = "armatur2";
	this.armatur2.parent = this;
	this.armatur2.setTransform(-606.1,110.5,0.263,0.467,0,0,0,0.2,0.1);

	this.armatur = new lib.armatur();
	this.armatur.name = "armatur";
	this.armatur.parent = this;
	this.armatur.setTransform(-482.2,89.2,0.861,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#774025").ss(2,1,1).p("AjyhRQADgCgBBTQgBAqgBAoQAAgDHlAD");
	this.shape_5.setTransform(-581.1,204.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#774025").ss(2,1,1).p("AD2gRQADACj5gBQh7AAh6gBQADAAgBARQgBAIgBAK");
	this.shape_6.setTransform(-580.3,63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B2803E").ss(2,1,1).p("AjgCeQABABCSgBQAqhPAqhPQBWidAKAAQB5AAABAA");
	this.shape_7.setTransform(-560.9,-61.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#996600").s().p("AhxA2IAAhrIDjAAIAABrg");
	this.shape_8.setTransform(-597.4,-43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9900").s().p("AiMBNIAAiZIEZAAIAAAuIjjAAIAABrg");
	this.shape_9.setTransform(-600.1,-45.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.Bitmap2, null, new cjs.Matrix2D(0.62,0,0,0.62,-254.6,-213)).s().p("EgmEAeiMAAAg9DMBMIAAAMAAAA9DgAHWRNIDbAAIAAELIDcAAIAAkLIBeAAIAAkKILBAAIAAtdIp0AAIAAtrIgwAAQgSgMgUgIIgOgGQAAgUgCgSIAAgDQgDgbgGgVQgKgkgOAAIgEAAIAAkxIggAAIAAhXIjcAAIAAkSIjyAAIAAhOImIAAIAABOIgQAAIAAC0IvpAAIAAIHIPpAAIAADSIJbAAIAAGHIisAAgA8qp2IFjAAIAAifIljAAgA2JxLIBXAAIAAFwIDiAAIAAxRIjiAAIAAFRIhXAAgA7bzwIA2AAIDkAAIAAhsIAAgtIkaAAg");
	this.shape_10.setTransform(-438.5,88.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.armatur},{t:this.armatur2},{t:this.armatur3},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.armatur5},{t:this.armatur4},{t:this.pinion_gear},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.motor_st, rect = new cjs.Rectangle(-682.2,-106.8,487.3,390.8), [rect]);


(lib.Cek_stater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var status_kerja_pull_in=false;
		function kerja_relay(){
			if(	this.kk.gerak_kk.rotation == 125&&
				this.plus_b.visible==true&&
				this.st_in.visible==true&&
				this.out_c85.visible==true&&
				this.c86_min.visible==true) {
				relay_on.call(this);	
				if(
				this.stc_on.visible== true&&
				this.min_gnd.visible==true&&
				this.c87_st50.visible== true&&
				this.plus_c30.visible==true){
				pull_in_on.call(this);
				status_kerja_pull_in=true;
					}} 
			if(	this.kk.gerak_kk.rotation <= 120||
				this.plus_b.visible==false||
				this.st_in.visible==false||
				this.out_c85.visible==false||
				this.c86_min.visible==false){
					
				relay_off.call(this);
				if(this.stc_on.visible== false||
				this.min_gnd.visible==false){
					if( this.out_st50.visible==false && 
						this.c87_st50.visible== false||
						this.plus_c30.visible==false){
						pull_in_off.call(this);
						status_kerja_pull_in=false;}}}
			
		}
		var status_kerja_pull_in_relay=false;
		function kerja_armatur_relay(){
			if( status_kerja_pull_in==true&&
				this.plus_st30.visible==true&&
				this.stc_on.visible== true&&
				this.min_gnd.visible== true&&
				this.c87_st50.visible== true&&
				this.plus_c30.visible==true){
				armatur_on.call(this)}
			if( status_kerja_pull_in==false ||
				this.plus_st30.visible==false||
				this.stc_on.visible== false||
				this.c87_st50.visible==false||
				this.plus_c30.visible==false||
				this.min_gnd.visible==false){
				armatur_off.call(this)}
		}
		
		
		
		
		//titik awal
		
		this.Fuse_out.addEventListener("click",function()
			{	titik_true.call(this);
				this.Fuse_out =false;
			}.bind(this));
			
		this.relay.tutup.c86.addEventListener("click",function()
			{	titik_true.call(this);
				this.relay.tutup.c86=false;
			}.bind(this));
			
		this.relay.tutup.c87.addEventListener("click",function()
			{	titik_true.call(this);
				this.relay.tutup.c87=false;
			}.bind(this));
		
		this.plus.addEventListener("click",function()
			{	titik_true.call(this);
				this.plus =false;
			}.bind(this));
			
		//titik akhir
			
			// tambah Relay
			this.out_c85.visible=false;
			this.c86_min.visible=false;
			this.c87_st50.visible=false;
			this.plus_c30.visible=false;
		
		this.relay.tutup.c85.addEventListener("click",function()
			{	if(this.Fuse_out==false)
				{this.out_c85.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
			
		this.min.addEventListener("click",function()
			{	if(this.relay.tutup.c86==false)
				{this.c86_min.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
			
		this.st50.addEventListener("click",function()
			{	if(this.relay.tutup.c87==false)
				{this.c87_st50.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
			
		this.relay.tutup.c30.addEventListener("click",function()
			{	if(this.plus==false)
				{this.plus_c30.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
		this.stc_off.visible=false;
		
		
		this.stc_on.addEventListener("click", stc_on.bind(this));
		this.stc_off.addEventListener("click", stc_off.bind(this));
		
		
		function stc_on()  {
		        this.stc_on.visible= false;
				this.stc_off.visible= true;
				
				uji_tanpa_beban.call(this);
			
		    }
			
		function stc_off()  {
		        this.stc_on.visible= true;
				this.stc_off.visible= false;
				
				
				uji_tanpa_beban.call(this);
		   } 
			
			
		function titik_true(){
			this.plus=true;
			this.min=true;
			
			this.kk.ST=true;
			this.kk.B=true;
			
			this.Fuse_in=true;
			this.Fuse_out=true;
			
			this.st50=true;
			this.st30=true;
			this.stc=true;
			this.gnd=true;
			
			this.c30=true;
			this.c86=true;
			this.c85=true;
			this.c87=true;
		}
		var tanpa_relay =false;
		function t_relay(){
			if(
			this.plus_b.visible==true&&
			this.st_in.visible==true&&
			this.out_st50.visible==true&&
			this.plus_st30.visible==true&&
			this.stc_on.visible== true&&
			this.stc_off.visible== false&&
			this.min_gnd.visible==true)
			{tanpa_relay =true}
				
		}
		
		function kerja_pull_in(){
			if(	this.kk.gerak_kk.rotation == 125&&
				this.plus_b.visible==true&&
				this.st_in.visible==true&&
				this.out_st50.visible==true&&
				this.stc_on.visible== true&&
				this.min_gnd.visible==true){
				status_kerja_pull_in=true;
					pull_in_on.call(this);
				
					} 
			if(	this.kk.gerak_kk.rotation <= 120||
				this.plus_b.visible==false||
				this.st_in.visible==false||
				this.out_st50.visible==false||
				this.stc_on.visible== false||
				this.min_gnd.visible==false){
				status_kerja_pull_in=false;
					pull_in_off.call(this);
				}
			
		}
		
		
		function kerja_armatur(){
			if( status_kerja_pull_in==true&&
				this.plus_st30.visible==true&&
				this.stc_on.visible== true&&
				this.min_gnd.visible==true){
				armatur_on.call(this)}
			if( status_kerja_pull_in==false ||
				this.plus_st30.visible==false||
				this.stc_on.visible== false||
				this.min_gnd.visible==false){
				armatur_off.call(this)}
		}
		
		
		
			this.plus_b.visible=false;
			this.st_in.visible=false;
			this.out_st50.visible=false;
			this.plus_st30.visible=false;
			this.min_gnd.visible=false;
			
		// tambah Relay
			this.out_c85.visible=false;
			this.c86_min.visible=false;
			this.c87_st50.visible=false;
			this.plus_c30.visible=false;
		
		//titik awal	
		this.plus.addEventListener("click",function()
			{	titik_true.call(this);
				this.plus =false;
			}.bind(this));
		this.kk.ST.addEventListener("click",function()
			{	titik_true.call(this);
				this.kk.ST =false;
			}.bind(this));
		this.Fuse_out.addEventListener("click",function()
			{	titik_true.call(this);
				this.Fuse_out =false;
			}.bind(this));
		this.min.addEventListener("click",function()
			{	titik_true.call(this);
				this.min =false;
			}.bind(this));
		// titik akhir	
		this.kk.B.addEventListener("click",function()
			{	if(this.plus==false)
				{this.plus_b.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
		this.Fuse_in.addEventListener("click",function()
			{	if(this.kk.ST == false){
				this.st_in.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
		
		this.st50.addEventListener("click",function()
			{	if(this.Fuse_out ==false) {
				this.out_st50.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
		
		
		this.gnd.addEventListener("click",function()
			{	if(this.min ==false){
				this.min_gnd.visible=true;
				
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
			
		this.st30.addEventListener("click",function()
			{	if(this.plus==false)
				{this.plus_st30.visible=true;
					
				titik_true.call(this);
				uji_tanpa_beban.call(this);}
			}.bind(this));
		armatur_off.call(this);
		
		
		this.motor_stater.plunyer.pegas_on.visible=false;
		
		function armatur_off() {
			// Pastikan 'this' mengacu ke this.motor_stater
			
			this.motor_stater.armatur.visible=false;
			this.motor_stater.armatur2.visible=false;
			this.motor_stater.armatur3.visible=false;
			this.motor_stater.armatur4.visible=false;
			this.motor_stater.armatur5.visible=false;
			this.motor_stater.pinion_gear.muter1.visible=false;
			this.motor_stater.pinion_gear.muter2.visible=false;
			} 
		
		
		
		
		
		function armatur_on(){
			
			this.motor_stater.armatur.visible=true;
			this.motor_stater.armatur2.visible=true;
			this.motor_stater.armatur3.visible=true;
			this.motor_stater.armatur4.visible=true;
			this.motor_stater.armatur5.visible=true;
			this.motor_stater.pinion_gear.muter1.visible=true;
			this.motor_stater.pinion_gear.muter2.visible=true;
		}
		
		function pull_in_on(){
			
			this.motor_stater.plunyer.x = -473;
			this.motor_stater.lever.rotation = -15;
			this.motor_stater.plunyer.pegas_on.visible=true;
			this.motor_stater.plunyer.pegas_off.visible=false;
			this.motor_stater.pinion_gear.x = -275;
			status_pull_in =true;
				
		}
		
		function pull_in_off(){
			this.motor_stater.plunyer.x = -460;
			this.motor_stater.lever.rotation = 0;
			this.motor_stater.pinion_gear.x = -300;
			
			this.motor_stater.plunyer.pegas_on.visible=false;
			this.motor_stater.plunyer.pegas_off.visible=true;
			status_pull_in =false;
				
		}
		this.relay.inti.addEventListener("click", tutup_relay.bind(this));
		var aktif = true;
		function tutup_relay() {
		    // Toggle status aktif
			
		    aktif = !aktif;
			
		
		    // Jika aktif bernilai true, set rotasi point ke 0, jika false, set ke -45
		    if (aktif) {
		        this.relay.tutup.visible= true;
					
		    } else {
		        this.relay.tutup.visible= false;
				
		    }
		}
		
		
		
		
		var status_relay= false;
		function relay_on(){
			this.relay.inti.tuas.rotation= 0;
			this.relay.inti.magnet.visible= true;
			status_relay= true;
		}
		
		function relay_off(){
			this.relay.inti.tuas.rotation= 315;
			this.relay.inti.magnet.visible= false;
			status_relay= false;
		}
		
		
		
		this.out_st50.addEventListener("click", ganti_relay.bind(this));
		var vaktif = false;
		function ganti_relay() {
		    // Toggle status aktif
			
		    vaktif = !vaktif;
			
		
		    // Jika aktif bernilai true, set rotasi point ke 0, jika false, set ke -45
		    if (vaktif) {
		        this.out_st50.visible= false;
				uji_tanpa_beban.call(this);
					
		    } else {
		        this.out_c85.visible=false;
				this.c86_min.visible=false;
				this.c87_st50.visible=false;
				this.plus_c30.visible=false;
				
		    }
		}
		this.kk.btn_st.addEventListener("click", kk_st.bind(this));
		
		function kk_st(){
			this.kk.gerak_kk.rotation = 125;
			uji_tanpa_beban.call(this);
			
			
			
			
		}
		
		this.kk.btn_on.addEventListener("click", kk_on.bind(this));
		
		function kk_on() {
			this.kk.gerak_kk.rotation = 60;
			uji_tanpa_beban.call(this);
			
		}
		
		this.kk.btn_off.addEventListener("click", kk_off.bind(this));
		
		function kk_off() {
			
			this.kk.gerak_kk.rotation = 0;
			uji_tanpa_beban.call(this);
			
			
		}
		
		
		function uji_tanpa_beban(){
			kerja_pull_in.call(this);
			
			kerja_relay.call(this);
			
			if(this.out_st50.visible==false){
			kerja_armatur_relay.call(this);}
			
			if(this.out_st50.visible==true){
			kerja_armatur.call(this);}
			//k
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Dengsn Relay
	this.plus_c30 = new lib.plus_c30();
	this.plus_c30.name = "plus_c30";
	this.plus_c30.parent = this;
	this.plus_c30.setTransform(-302.7,-131.4);

	this.c87_st50 = new lib.c86_st50();
	this.c87_st50.name = "c87_st50";
	this.c87_st50.parent = this;
	this.c87_st50.setTransform(-109.8,-272.1);

	this.c86_min = new lib.c86_min();
	this.c86_min.name = "c86_min";
	this.c86_min.parent = this;
	this.c86_min.setTransform(-283.3,-128);

	this.out_c85 = new lib.out_c85();
	this.out_c85.name = "out_c85";
	this.out_c85.parent = this;
	this.out_c85.setTransform(-481.5,-243.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.out_c85},{t:this.c86_min},{t:this.c87_st50},{t:this.plus_c30}]}).wait(1));

	// tanpa relay
	this.stc_off = new lib.stc_off();
	this.stc_off.name = "stc_off";
	this.stc_off.parent = this;
	this.stc_off.setTransform(159.6,-351.2);
	new cjs.ButtonHelper(this.stc_off, 0, 1, 1);

	this.stc_on = new lib.stc_on();
	this.stc_on.name = "stc_on";
	this.stc_on.parent = this;
	this.stc_on.setTransform(159.6,-351.2);
	new cjs.ButtonHelper(this.stc_on, 0, 1, 1);

	this.plus_st30 = new lib.plus_st30();
	this.plus_st30.name = "plus_st30";
	this.plus_st30.parent = this;
	this.plus_st30.setTransform(-53.3,-201.3);

	this.min_gnd = new lib.min_gnd();
	this.min_gnd.name = "min_gnd";
	this.min_gnd.parent = this;
	this.min_gnd.setTransform(173.9,-30.8);

	this.out_st50 = new lib.out_st50();
	this.out_st50.name = "out_st50";
	this.out_st50.parent = this;
	this.out_st50.setTransform(-153.1,-298.3);

	this.st_in = new lib.st_in();
	this.st_in.name = "st_in";
	this.st_in.parent = this;
	this.st_in.setTransform(-514.1,-23.8);

	this.plus_b = new lib.bb();
	this.plus_b.name = "plus_b";
	this.plus_b.parent = this;
	this.plus_b.setTransform(-344.2,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.plus_b},{t:this.st_in},{t:this.out_st50},{t:this.min_gnd},{t:this.plus_st30},{t:this.stc_on},{t:this.stc_off}]}).wait(1));

	// motor Stater
	this.stc = new lib.btn_st();
	this.stc.name = "stc";
	this.stc.parent = this;
	this.stc.setTransform(196.8,-376.1);
	new cjs.ButtonHelper(this.stc, 0, 1, 2);

	this.st50 = new lib.btn_st();
	this.st50.name = "st50";
	this.st50.parent = this;
	this.st50.setTransform(182.4,-411.6);
	new cjs.ButtonHelper(this.st50, 0, 1, 2);

	this.st30 = new lib.btn_st();
	this.st30.name = "st30";
	this.st30.parent = this;
	this.st30.setTransform(193.9,-446.8);
	new cjs.ButtonHelper(this.st30, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRAAQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape.setTransform(460.2,-111.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_1.setTransform(450.5,-109.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_2.setTransform(440.5,-109.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_3.setTransform(430.5,-109.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_4.setTransform(423.3,-109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA6QgQgHgIgQQgIgQAAgSQAAgSAIgQQAIgQAPgJQAPgHASgBQAOABALAEQALAFAHAHQAGAIAEANIgQAFQgDgKgEgGQgEgFgIgEQgIgDgKAAQgLAAgIADQgJAEgFAGQgFAGgDAHQgFAMAAANQAAARAGAMQAGALALAGQALAFAMAAQALABALgFQAKgEAGgFIAAgYIgmAAIAAgOIA3AAIAAAvQgNAKgNAEQgOAGgOgBQgSABgPgJg");
	this.shape_5.setTransform(412.5,-111.5);

	this.gnd = new lib.btn();
	this.gnd.name = "gnd";
	this.gnd.parent = this;
	this.gnd.setTransform(483.1,-112.2,0.403,0.403,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.gnd, 0, 1, 2);

	this.motor_stater = new lib.motor_st();
	this.motor_stater.name = "motor_stater";
	this.motor_stater.parent = this;
	this.motor_stater.setTransform(227.1,-407.6,1,1,0,0,0,-564,-37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAxAzIAAgrIhxAAIAAgQIBxAAIAAgqIAPAAIAABlg");
	this.shape_6.setTransform(-505.6,-158.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAzQgUAAgLgFQgMgEgGgLQgIgMABgTQAAgRAFgLQAHgMALgFQAMgFAVAAIBJAAIAAARIhJAAQgRAAgIAEQgHADgFAHQgFAIAAALQAAASAJAIQAJAIAYAAIBJAAIAAARg");
	this.shape_7.setTransform(-505.7,-170.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA2QgPgIgIgPQgHgOAAgRQAAgRAIgOQAJgPAPgHQAQgIAQAAQAfAAATASQASARAAAaQAAASgJAOQgIAPgQAHQgPAIgTAAQgTAAgQgIgAglgeQgOAMAAASQAAATAOANQANAMAYAAQAPAAAMgFQAMgGAGgKQAHgKAAgNQAAgRgMgNQgNgNgcAAQgXAAgNANg");
	this.shape_8.setTransform(-505.6,-184.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhAAzIAAgSIBlhCIhlAAIAAgRICAAAIAAASIhkBDIBkAAIAAAQg");
	this.shape_9.setTransform(-505.6,-67.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhAAIIAAgQICAAAIAAAQg");
	this.shape_10.setTransform(-505.6,-76.2);

	this.Fuse_in = new lib.btn();
	this.Fuse_in.name = "Fuse_in";
	this.Fuse_in.parent = this;
	this.Fuse_in.setTransform(-480.6,-72.1,0.403,0.403,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.Fuse_in, 0, 1, 2);

	this.Fuse_out = new lib.btn();
	this.Fuse_out.name = "Fuse_out";
	this.Fuse_out.parent = this;
	this.Fuse_out.setTransform(-481.5,-179.7,0.403,0.403,0,0,0,0.4,0.3);
	new cjs.ButtonHelper(this.Fuse_out, 0, 1, 2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.BitmapFuse, null, new cjs.Matrix2D(1.237,0,0,1.237,-17.9,-53.8)).s().p("Ah9IaIAAwzIDxAAIAAPCIAKAAIAABxg");
	this.shape_11.setTransform(-480.8,-125.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.Fuse_out},{t:this.Fuse_in},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.motor_stater},{t:this.gnd},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.st30},{t:this.st50},{t:this.stc}]}).wait(1));

	// Relay
	this.relay = new lib.relay();
	this.relay.name = "relay";
	this.relay.parent = this;
	this.relay.setTransform(-394.5,-375.7,0.889,0.889,0,0,0,-0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.relay).wait(1));

	// kk
	this.kk = new lib.kk();
	this.kk.name = "kk";
	this.kk.parent = this;
	this.kk.setTransform(-434.9,86.7,1,1,0,0,0,0,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.kk).wait(1));

	// Layer_1
	this.min = new lib.btr();
	this.min.name = "min";
	this.min.parent = this;
	this.min.setTransform(-134.7,54,0.628,0.628,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.min, 0, 1, 2);

	this.plus = new lib.btr();
	this.plus.name = "plus";
	this.plus.parent = this;
	this.plus.setTransform(-284.9,52.7,0.628,0.628,0,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.plus, 0, 1, 2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AijhJIFHAAIAACTIlHAAg");
	this.shape_12.setTransform(-153.1,53.4,0.766,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AijBKIAAiTIFHAAIAACTg");
	this.shape_13.setTransform(-153.1,53.4,0.766,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(10,1,1).p("AijhJIFHAAIAACTIlHAAg");
	this.shape_14.setTransform(-263.3,53.4,0.766,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AijBKIAAiTIFHAAIAACTg");
	this.shape_15.setTransform(-263.3,53.4,0.766,1);

	this.instance = new lib.BitmapAki();
	this.instance.parent = this;
	this.instance.setTransform(-292.7,51);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AsuA9IDth6IRqAAIEGByg");
	this.shape_16.setTransform(-209.3,60.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E62129").s().p("ApAg9IRoAAIEHByI5dAJg");
	this.shape_17.setTransform(-209.3,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.plus},{t:this.min}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cek_stater, rect = new cjs.Rectangle(-556.8,-477.4,1153,649.6), [rect]);


// stage content:
(lib.STATER2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.stater = new lib.Cek_stater();
	this.stater.name = "stater";
	this.stater.parent = this;
	this.stater.setTransform(660,482.5,1,1,0,0,0,0,-5);

	this.timeline.addTween(cjs.Tween.get(this.stater).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(786.2,394.1,1153,649.6);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '4F371435F0484F4697247B784E64280C',
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png?1732459798701", id:"Bitmap2"},
		{src:"images/BitmapAki.png?1732459798701", id:"BitmapAki"},
		{src:"images/BitmapDasarKK.png?1732459798701", id:"BitmapDasarKK"},
		{src:"images/BitmapFuse.png?1732459798701", id:"BitmapFuse"},
		{src:"images/BitmapKK.png?1732459798701", id:"BitmapKK"}
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
an.compositions['4F371435F0484F4697247B784E64280C'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;