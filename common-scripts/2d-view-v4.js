(function() {

Dagaz.View.STEP_CNT     = 3;

Dagaz.View.SHIFT_X      = 0;
Dagaz.View.SHIFT_Y      = 0;

Dagaz.View.THREAT_ALPHA = 0.5;
Dagaz.View.DROPS_ALPHA  = 0.5;

Dagaz.View.markType = {
  TARGET:    0,
  ATTACKING: 1,
  GOAL:      2,
  CURRENT:   3,
  KO:        4
};

var self            = null;
var isConfigured    = false;
var mouseX          = 0;
var mouseY          = 0;
var mousePressed    = false;
var blink           = 1;

Dagaz.View.configure = function(view) {}

function View2D() {
  this.board   = null;
  this.queue   = [];
  this.pos     = [];
  this.res     = [];
  this.back    = [];
  this.piece   = [];
  this.setup   = [];
  this.threat  = [];
  this.current = [];
  this.ko      = [];
  this.target  = [];
  this.goal    = [];
  this.drops   = [];
  this.ready   = false;
  this.done    = false;
  this.valid   = false;
}

Dagaz.View.getView = function() {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View2D();
  }
  return Dagaz.View.view;
}

Dagaz.View.inRect = function(view, pos, x, y) {
  return (x > view.getX(pos)) &&
         (y > view.getY(pos)) &&
         (x < view.getX(pos) + view.getDX(pos)) &&
         (y < view.getY(pos) + view.getDY(pos));
}

Dagaz.View.pointToPositions = function(view, x, y) {
  return _.chain(_.range(view.pos.length))
   .filter(function(pos) {
      return Dagaz.View.inRect(view, pos, x, y);
    })
   .value();
}

View2D.prototype.pointToPositions = function(x, y) {
  return Dagaz.View.pointToPositions(this, x, y);
}

View2D.prototype.defPosition = function(name, x, y, dx, dy) {
  var ix = Dagaz.Model.stringToPos(name);
  this.pos[ix] = {
      x: x, dx: dx,
      y: y, dy: dy
  };
}

View2D.prototype.getX = function(ix) {
  return this.pos[ix].x;
}

View2D.prototype.getY = function(ix) {
  var r = this.pos[ix].y;
  if (!_.isUndefined(Dagaz.View.deltaY)) {
      r += Dagaz.View.deltaY(ix);
  }
  return r;
}

View2D.prototype.getDX = function(ix) {
  return this.pos[ix].dx;
}

View2D.prototype.getDY = function(ix) {
  return this.pos[ix].dy;
}

View2D.prototype.defBoard = function(res, x, y, selector, turns) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var board = {
     h: document.getElementById(res),
     t: turns,
     x: x ? x : 0,
     y: y ? y : 0
  };
  this.res.push(board);
  this.back.push(board);
}

View2D.prototype.defPiece = function(img, name, help, glyph) {
  var piece = {
     h:    document.getElementById(img),
     name: name
  };
  this.res.push(piece);
  this.piece[name] = piece;
}

View2D.prototype.allResLoaded = function() {
  if (this.ready) return true;
  for (var i = 0; i < this.res.length; i++) {
       var image = this.res[i].h;
       if (!image.complete || (image.naturalWidth == 0)) return false;
       this.res[i].dx = image.naturalWidth;
       this.res[i].dy = image.naturalHeight;
  }
  this.ready = true;
  return true;
}

View2D.prototype.clear = function() {
  this.setup = [];
}

View2D.prototype.addPiece = function(name, pos, piece) {
  this.setup.push({
       pos:  +pos,
       name:  name,
       piece: piece, 
       x:     this.getX(pos),
       y:     this.getY(pos),
       z:     0
  });
}

View2D.prototype.reInit = function(board) {
  this.board = board;
}

View2D.prototype.sync = function(board) {
  this.board = board;
}

View2D.prototype.syncSetup = function() {
  if (this.queue.length == 0) {
      if (this.board !== null) {
          this.clear();
          _.each(_.keys(this.board.pieces), function(pos) {
             var piece = this.board.pieces[pos];
             if (piece !== null) {
                 this.addPiece(piece.toString(), pos, piece);
             }
          }, this);
          this.board = null;
          this.valid = false;
      }
  }
}

View2D.prototype.capturePiece = function(move, pos, phase) {
  while (this.queue.length <= phase) {
      this.queue.push([]);
  }
  this.queue[phase].push({
      from: pos
  });
}

View2D.prototype.dropPiece = function(move, pos, piece, phase) {
  while (this.queue.length <= phase) {
      this.queue.push([]);
  }
  this.queue[phase].push({
      piece: piece,
      name: piece.toString(),
      to: pos
  });
}

View2D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  while (this.queue.length <= phase) {
      this.queue.push([]);
  }
  if (_.isUndefined(steps)) { steps = Dagaz.View.STEP_CNT; }
  this.queue[phase].push({
      cnt: steps,
      piece: piece,
      from: from,
      to: to
  });
}

View2D.prototype.animate = function() {
  this.syncSetup();
  if (this.done && (this.queue.length > 0)) {
      var actions = this.queue[0];
      var done = true;
      var mf = []; var mi = [];
      var captured = [];
      for (var i = 0; i < actions.length; i++) {
           var a = actions[i];
           if (!_.isUndefined(a.from) && !_.isUndefined(a.to)) {
               if (_.isUndefined(a.dx) && _.isUndefined(a.dy)) {
                   a.dx = (this.getX(a.to) - this.getX(a.from)) / a.cnt;
                   a.dy = (this.getY(a.to) - this.getY(a.from)) / a.cnt;
                   a.cnt++;
               }
               if (a.cnt > 0) {
                   done = false;
                   a.cnt--;
               }
               mf.push(a.from); mi.push(i);
           }
           if (!_.isUndefined(a.from) && _.isUndefined(a.to)) {
               captured.push(a.from);
           }
           if (_.isUndefined(a.from) && !_.isUndefined(a.to)) {
               captured.push(a.to);
           }
      }
      for (var i = 0; i < this.setup.length; i++) {
           var ix = _.indexOf(mf, this.setup[i].pos);
           if ((ix >= 0) && (actions[mi[ix]].cnt > 0)) {
               this.setup[i].x += actions[mi[ix]].dx;
               this.setup[i].y += actions[mi[ix]].dy;
               this.setup[i].z = 1;
               if ((actions[mi[ix]].cnt == 1) && (actions[mi[ix]].piece !== null)) {
                   this.setup[i].piece = actions[mi[ix]].piece;
                   this.setup[i].name = actions[mi[ix]].piece.toString();
               }
           }
      }
      if (done) {
          var setup = [];
          for (var i = 0; i < this.setup.length; i++) {
               var ix = _.indexOf(mf, this.setup[i].pos);
               if (ix >= 0) {
                   var p = actions[mi[ix]].to;
                   this.setup[i].pos = p;
                   this.setup[i].x = this.getX(p);
                   this.setup[i].y = this.getY(p);
                   this.setup[i].z = 0;
               }
               if (_.indexOf(captured, this.setup[i].pos) < 0) {
                   setup.push(this.setup[i]);
               }
          }
          this.setup = setup;
          _.each(actions, function(a) {
              if (_.isUndefined(a.from) && !_.isUndefined(a.to)) {
                  this.addPiece(a.name, a.to, a.piece);
              }
          }, this);
          this.queue.shift();
      }
      if (this.queue.length == 0) {
          this.done = false;
      }
      this.controller.done();
      this.valid = false;
  }
}

View2D.prototype.commit = function(move) {
  this.done = true;
}

View2D.prototype.invalidate = function() {
  this.valid = false;
}

View2D.prototype.markPositions = function(type, positions) {
  if (type == Dagaz.View.markType.TARGET) {
      this.target = positions;
  } 
  if (type == Dagaz.View.markType.ATTACKING) {
      this.threat = positions;
  }
  if (type == Dagaz.View.markType.CURRENT) {
      this.current = positions;
  }
  if (type == Dagaz.View.markType.KO) {
      this.ko = positions;
  }
  if (type == Dagaz.View.markType.GOAL) {
      this.goal = positions;
  }
  this.invalidate();
}

View2D.prototype.setDrops = function(name, positions) {
  this.drops = [];
  if (!_.isUndefined(this.piece[name])) {
      _.each(positions, function(p) {
          if (p <= this.pos.length) {
              this.drops.push({
                  piece: this.piece[name],
                  position: this.pos[p]
              });
          }
      }, this);
  }
}

View2D.prototype.clearDrops = function() {
  this.drops = [];
}

View2D.prototype.showKo = function(ctx) {
   if (!_.isUndefined(this.piece["Ko"]) && (this.ko.length > 0)) {
       var piece = this.piece["Ko"];
       _.each(this.ko, function(pos) {
          var x = ( this.getX(pos) + (this.getDX(pos) - piece.dx) / 2) | 0;
          var y = ( this.getY(pos) + (this.getDY(pos) - piece.dy) / 2) | 0;
          if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
              ctx.save();
              ctx.globalAlpha = Dagaz.View.KO_ALPHA;
          }
          ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
          if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
              ctx.restore();
          }
       }, this);
   }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var isSaved = false;
  var dx = 0;
  var dy = 0;
  if (_.indexOf(view.threat, pos) >= 0) {
      ctx.save();
      ctx.globalAlpha = Dagaz.View.THREAT_ALPHA;
      isSaved = true;
  }
  if (Dagaz.Model.showBlink && (_.indexOf(view.current, pos) >= 0)) {
      dx = blink;
  }
  ctx.drawImage(piece.h, x + dx, y + dy, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

Dagaz.View.shiftX = function(pos) {
  return Dagaz.View.SHIFT_X;
}

Dagaz.View.shiftY = function(pos) {
  return Dagaz.View.SHIFT_Y;
}

var drawMarks = function(ctx, view, list, color) {
   _.each(list, function(p) {
        var pos = this.pos[p];
        var x = this.getX(p); 
        var y = this.getY(p);
        if (pos.dx > 0) {
            x += pos.dx / 2 | 0;
        }
        if (pos.dy > 0) {
            y += pos.dy / 2 | 0;
        }
        var r = pos.dx / 4;
        if (Math.abs(pos.dy - pos.dx) > 10) {
            r = Math.min(pos.dy, pos.dx) / 2;
        }
        if (!_.isUndefined(Dagaz.View.MARK_R)) {
            r = Dagaz.View.MARK_R;
        }
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x + Dagaz.View.shiftX(p), y + Dagaz.View.shiftY(p), r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
   }, view);
}

Dagaz.View.showMarks = function(view, ctx) {
  drawMarks(ctx, view, view.target, "#00AA00");
  drawMarks(ctx, view, view.goal,   "#FFFF00");
}

View2D.prototype.showDrops = function(ctx) {
  if (this.drops.length > 0) {
      ctx.save();
      ctx.globalAlpha = Dagaz.View.DROPS_ALPHA;
      _.each(this.drops, function(f) {
         var dx = (f.position.dx - f.piece.dx) / 2 | 0;
         var dy = (f.position.dy - f.piece.dy) / 2 | 0;
         ctx.drawImage(f.piece.h, f.position.x + dx, f.position.y + dy, f.piece.dx, f.piece.dy);
      });
      ctx.restore();
  }
}

View2D.prototype.configure = function() {
  if (!isConfigured) {
      Dagaz.View.configure(this);
      var board = this.controller.getBoard();
      board.setup(this, true);
      this.controller.done();
      isConfigured = true;
  }
}

View2D.prototype.draw = function(canvas) {
  this.configure();
  if (this.allResLoaded()) {
      this.animate();
      if (this.valid) return;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      _.each(this.back, function(b) {
           if (!_.isUndefined(b.t)) {
               var board = Dagaz.Controller.app.board;
               if (_.indexOf(b.t, board.turn) < 0) return;
           }
           ctx.drawImage(b.h, b.x, b.y);
      });
      blink = -blink;
      _.chain(this.setup)
       .sortBy(function(s) {
           var r = s.pos;
           if (s.z > 0) {
               r += this.pos.length;
           }
           return r;
        }, this)
     .each(function(s) {
           var x = s.x; var y = s.y;
           var pos = this.pos[s.pos];
           var piece = this.piece[s.name];
           if (piece) {
               x += (pos.dx - piece.dx) / 2 | 0;
               y += (pos.dy - piece.dy) / 2 | 0;
               Dagaz.View.showPiece(this, ctx, pos, s.pos, piece, s.piece, x, y, s);
           }
      }, this);
      this.showKo(ctx);
      Dagaz.View.showMarks(this, ctx);
      this.showDrops(ctx);
      if (!_.isUndefined(Dagaz.View.showBoard)) {
           var board = this.controller.getBoard();
           Dagaz.View.showBoard(board, ctx);
      }
  }
}

Dagaz.View.PKM = function(view, positions) {}

var mouseUpdate = function(event) {
  var canvasRect = Canvas.getBoundingClientRect();
  mouseX = event.clientX - canvasRect.left;
  mouseY = event.clientY - canvasRect.top;
}

var mouseMove = function(event) {
  mouseUpdate(event);
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseLocate(self, pos);
  }
}

var mouseUp = function(event) { 
  var pos = self.pointToPositions(mouseX, mouseY);
  if (event.button == 2) return;
  if (pos && self.controller) {
      self.controller.mouseUp(self, pos);
  }
  mousePressed = false; 
}

var mouseDown = function(event) { 
  if (event.button == 2) return;
  mousePressed = true; 
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseDown(self, pos);
  }
  event.preventDefault(); 
}

var mouseWheel = function(event) {
  var delta = event.wheelDelta;
  if (_.isUndefined(event.wheelDelta)) {
      delta = -event.deltaY;
  }
  if (delta > 0) {
      self.controller.mouseWheel(self, -1);
  } else {
      self.controller.mouseWheel(self, 1);
  }
  mouseUpdate(event);
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && pos.length > 0) {
	event.preventDefault();
  }
}

View2D.prototype.init = function(canvas, controller) {
  self = this;
  canvas.onmousemove = mouseMove;
  canvas.onmouseup   = mouseUp;
  canvas.onmousedown = mouseDown;
  if ('onwheel' in document) {
      document.addEventListener('wheel', mouseWheel, { passive: false });
  } else if ('onmousewheel' in document) {
      document.addEventListener('mousewheel', mouseWheel, { passive: false });
  } else {
      document.MozMousePixelScroll = mouseWheel;
  }
  this.controller = controller;
}

document.oncontextmenu = function()  { 
  var pos = self.pointToPositions(mouseX, mouseY);
  Dagaz.View.PKM(self, pos);
  return false; 
}

})();
