require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pointer":[function(require,module,exports){
exports.Pointer = (function() {
  var clientCoords, coords, offsetArgumentError, offsetCoords, screenArgumentError;

  function Pointer() {}

  Pointer.screen = function(event, layer) {
    var e, screenCoords;
    if (!((event != null) && (layer != null))) {
      screenArgumentError();
    }
    e = offsetCoords(event);
    if (e.x && e.y) {
      screenCoords = layer.screenFrame;
      e.x += screenCoords.x;
      e.y += screenCoords.y;
    } else {
      e = clientCoords(event);
    }
    return e;
  };

  Pointer.offset = function(event, layer) {
    var e, targetScreenCoords;
    if (!((event != null) && (layer != null))) {
      offsetArgumentError();
    }
    e = offsetCoords(event);
    if (!((e.x != null) && (e.y != null))) {
      e = clientCoords(event);
      targetScreenCoords = layer.screenFrame;
      e.x -= targetScreenCoords.x;
      e.y -= targetScreenCoords.y;
    }
    return e;
  };

  offsetCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.offsetX, e.offsetY);
  };

  clientCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.clientX, e.clientY);
  };

  coords = function(x, y) {
    return {
      x: x,
      y: y
    };
  };

  screenArgumentError = function() {
    error(null);
    return console.error("Pointer.screen() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.screen(event, layer)");
  };

  offsetArgumentError = function() {
    error(null);
    return console.error("Pointer.offset() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.offset(event, layer)");
  };

  return Pointer;

})();


},{}],"androidRipple":[function(require,module,exports){
var Pointer;

Pointer = require("Pointer").Pointer;

exports.Ripple = function(event, layer) {
  var animation, color, eventCoords, pressFeedback, rippleCircle;
  eventCoords = Pointer.offset(event, layer);
  color = "black";
  animation = {
    curve: "ease-out",
    time: .8
  };
  pressFeedback = new Layer({
    superLayer: this,
    name: "pressFeedback",
    width: layer.width / 6,
    height: layer.height / 6,
    opacity: 0,
    backgroundColor: color
  });
  pressFeedback.states.add({
    pressed: {
      opacity: .04
    }
  });
  pressFeedback.states["switch"]("pressed", animation);
  rippleCircle = new Layer({
    superLayer: this,
    name: "rippleCircle",
    borderRadius: "50%",
    midX: eventCoords.x,
    midY: eventCoords.y,
    opacity: .16,
    backgroundColor: color
  });
  rippleCircle.states.add({
    pressed: {
      scale: layer.width / 200,
      opacity: 0
    }
  });
  rippleCircle.states["switch"]("pressed", animation);
  return Utils.delay(0.3, function() {
    pressFeedback.states.next("default", animation);
    return pressFeedback.on(Events.AnimationEnd, function() {
      rippleCircle.destroy();
      return pressFeedback.destroy();
    });
  });
};


},{"Pointer":"Pointer"}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9HaXRodWIvaXhkLWRvY3VtZW50YXRpb24vbWF0ZXJpYWxzL3NheWl0LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL0RvY3VtZW50cy9HaXRodWIvaXhkLWRvY3VtZW50YXRpb24vbWF0ZXJpYWxzL3NheWl0LmZyYW1lci9tb2R1bGVzL2FuZHJvaWRSaXBwbGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vRG9jdW1lbnRzL0dpdGh1Yi9peGQtZG9jdW1lbnRhdGlvbi9tYXRlcmlhbHMvc2F5aXQuZnJhbWVyL21vZHVsZXMvUG9pbnRlci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIE1vZHVsZSBjcmVhdGVkIGJ5IEFhcm9uIEphbWVzIHwgQXByaWwgMTZ0aCwgMjAxNlxuI1xuIyBQb2ludGVyIE1vZHVsZSBieSBKb3JkYW4gRG9ic29uIGlzIHJlcXVpcmVkIGZvciB0aGlzIG1vZHVsZVxuIyBJbnN0YWxsIHRoaXMgbW9kdWxlIGZpcnN0IGhlcmU6IGh0dHA6Ly9iaXQubHkvMWxnbU5wVFxuI1xuIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIGF0IHRoZSB0b3Agb2YgeW91ciBwcm9qZWN0IHRvIGFjY2VzcyB0aGlzIG1vZHVsZTpcbiMgYW5kcm9pZCA9IHJlcXVpcmUgXCJhbmRyb2lkUmlwcGxlXCJcbiNcbiMgVG8gYWRkIHJpcHBsZSB0byBsYXllciwgdXNlIHRoaXMgbGluZSBvZiBjb2RlOlxuIyBsYXllck5hbWUub24oRXZlbnRzLkNsaWNrLCBhbmRyb2lkLnJpcHBsZSlcbiMgUmVwbGFjZSBsYXllck5hbWUgd2l0aCB0aGUgbmFtZSBvZiB5b3VyIGxheWVyXG4jXG4jIEF2YWlsYWJsZSBvcHRpb25zOlxuIyBZb3UgY2FuIHVzZSBhbnkgRXZlbnQgd2l0aCB0aGlzIG1vZHVsZVxuXG57UG9pbnRlcn0gPSByZXF1aXJlIFwiUG9pbnRlclwiXG5cbiMgY3JlYXRlIHJpcHBsZSBmdW5jdGlvblxuZXhwb3J0cy5SaXBwbGUgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRldmVudENvb3JkcyA9IFBvaW50ZXIub2Zmc2V0KGV2ZW50LCBsYXllcilcblxuXHQjIENoYW5nZSBjb2xvciBvZiByaXBwbGVcblx0Y29sb3IgPSBcImJsYWNrXCJcblx0YW5pbWF0aW9uID0gY3VydmU6IFwiZWFzZS1vdXRcIiwgdGltZTogLjhcblxuXHQjIENyZWF0ZSBsYXllcnMgb24gQ2xpY2tcblx0cHJlc3NGZWVkYmFjayA9IG5ldyBMYXllclxuXHRcdHN1cGVyTGF5ZXI6IEBcblx0XHRuYW1lOiBcInByZXNzRmVlZGJhY2tcIlxuXHRcdHdpZHRoOiBsYXllci53aWR0aCAvIDZcblx0XHRoZWlnaHQ6IGxheWVyLmhlaWdodCAvIDZcblx0XHRvcGFjaXR5OiAwXG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvclxuXHRwcmVzc0ZlZWRiYWNrLnN0YXRlcy5hZGRcblx0XHRwcmVzc2VkOiBvcGFjaXR5OiAuMDRcblx0cHJlc3NGZWVkYmFjay5zdGF0ZXMuc3dpdGNoKFwicHJlc3NlZFwiLCBhbmltYXRpb24pXG5cblx0cmlwcGxlQ2lyY2xlID0gbmV3IExheWVyXG5cdFx0c3VwZXJMYXllcjogQFxuXHRcdG5hbWU6IFwicmlwcGxlQ2lyY2xlXCJcblx0XHRib3JkZXJSYWRpdXM6IFwiNTAlXCJcblx0XHRtaWRYOiBldmVudENvb3Jkcy54XG5cdFx0bWlkWTogZXZlbnRDb29yZHMueVxuXHRcdG9wYWNpdHk6IC4xNlxuXHRcdGJhY2tncm91bmRDb2xvcjogY29sb3Jcblx0cmlwcGxlQ2lyY2xlLnN0YXRlcy5hZGRcblx0XHRwcmVzc2VkOiBzY2FsZTogbGF5ZXIud2lkdGggLyAyMDAsIG9wYWNpdHk6IDAsXG5cdHJpcHBsZUNpcmNsZS5zdGF0ZXMuc3dpdGNoKFwicHJlc3NlZFwiLCBhbmltYXRpb24pXG5cblx0IyBEZXN0cm95IGxheWVycyBhZnRlciBDbGlja1xuXHRVdGlscy5kZWxheSAwLjMsIC0+XG5cdFx0cHJlc3NGZWVkYmFjay5zdGF0ZXMubmV4dChcImRlZmF1bHRcIiwgYW5pbWF0aW9uKVxuXHRcdHByZXNzRmVlZGJhY2sub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgLT5cblx0XHRcdHJpcHBsZUNpcmNsZS5kZXN0cm95KClcblx0XHRcdHByZXNzRmVlZGJhY2suZGVzdHJveSgpXG4iLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBieSBKb3JkYW4gUm9iZXJ0IERvYnNvbiBvbiAxNCBBdWd1c3QgMjAxNVxuIyBcbiMgVXNlIHRvIG5vcm1hbGl6ZSBzY3JlZW4gJiBvZmZzZXQgeCx5IHZhbHVlcyBmcm9tIGNsaWNrIG9yIHRvdWNoIGV2ZW50cy5cbiNcbiMgVG8gR2V0IFN0YXJ0ZWQuLi5cbiNcbiMgMS4gUGxhY2UgdGhpcyBmaWxlIGluIEZyYW1lciBTdHVkaW8gbW9kdWxlcyBkaXJlY3RvcnlcbiNcbiMgMi4gSW4geW91ciBwcm9qZWN0IGluY2x1ZGU6XG4jICAgICB7UG9pbnRlcn0gPSByZXF1aXJlIFwiUG9pbnRlclwiXG4jXG4jIDMuIEZvciBzY3JlZW4gY29vcmRpbmF0ZXM6IFxuIyAgICAgYnRuLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LCBsYXllcikgLT4gcHJpbnQgUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVxuIyBcbiMgNC4gRm9yIGxheWVyIG9mZnNldCBjb29yZGluYXRlczogXG4jICAgICBidG4ub24gRXZlbnRzLkNsaWNrLCAoZXZlbnQsIGxheWVyKSAtPiBwcmludCBQb2ludGVyLm9mZnNldChldmVudCwgbGF5ZXIpXG4jXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5Qb2ludGVyXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHVibGljIE1ldGhvZHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdEBzY3JlZW4gPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdHNjcmVlbkFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0aWYgZS54IGFuZCBlLnlcblx0XHRcdCMgTW91c2UgRXZlbnRcblx0XHRcdHNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggKz0gc2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSArPSBzY3JlZW5Db29yZHMueVxuXHRcdGVsc2Vcblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRyZXR1cm4gZVxuXHRcdFx0XG5cdEBvZmZzZXQgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdG9mZnNldEFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0dW5sZXNzIGUueD8gYW5kIGUueT9cblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRcdHRhcmdldFNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggLT0gdGFyZ2V0U2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSAtPSB0YXJnZXRTY3JlZW5Db29yZHMueVxuXHRcdHJldHVybiBlXG5cdFxuXHQjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQcml2YXRlIEhlbHBlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdFxuXHRvZmZzZXRDb29yZHMgPSAoZXYpICAtPiBlID0gRXZlbnRzLnRvdWNoRXZlbnQgZXY7IHJldHVybiBjb29yZHMgZS5vZmZzZXRYLCBlLm9mZnNldFlcblx0Y2xpZW50Q29vcmRzID0gKGV2KSAgLT4gZSA9IEV2ZW50cy50b3VjaEV2ZW50IGV2OyByZXR1cm4gY29vcmRzIGUuY2xpZW50WCwgZS5jbGllbnRZXG5cdGNvb3JkcyAgICAgICA9ICh4LHkpIC0+IHJldHVybiB4OngsIHk6eVxuXHRcblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgRXJyb3IgSGFuZGxlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHRcblx0c2NyZWVuQXJndW1lbnRFcnJvciA9IC0+XG5cdFx0ZXJyb3IgbnVsbFxuXHRcdGNvbnNvbGUuZXJyb3IgXCJcIlwiXG5cdFx0XHRQb2ludGVyLnNjcmVlbigpIEVycm9yOiBZb3UgbXVzdCBwYXNzIGV2ZW50ICYgbGF5ZXIgYXJndW1lbnRzLiBcXG5cblx0XHRcdEV4YW1wbGU6IGxheWVyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LChldmVudCxsYXllcikgLT4gUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVwiXCJcIlxuXHRcdFx0XG5cdG9mZnNldEFyZ3VtZW50RXJyb3IgPSAtPlxuXHRcdGVycm9yIG51bGxcblx0XHRjb25zb2xlLmVycm9yIFwiXCJcIlxuXHRcdFx0UG9pbnRlci5vZmZzZXQoKSBFcnJvcjogWW91IG11c3QgcGFzcyBldmVudCAmIGxheWVyIGFyZ3VtZW50cy4gXFxuXG5cdFx0XHRFeGFtcGxlOiBsYXllci5vbiBFdmVudHMuVG91Y2hTdGFydCwoZXZlbnQsbGF5ZXIpIC0+IFBvaW50ZXIub2Zmc2V0KGV2ZW50LCBsYXllcilcIlwiXCIiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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