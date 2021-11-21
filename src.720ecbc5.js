parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qMRA":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function i(e){t(this,i),this.gameWidth=e.gameWidth,this.gameHeight=e.gameHeight,this.width=150,this.height=20,this.maxSpeed=7,this.speed=0,this.position={x:e.gameWidth/2-this.width/2,y:e.gameHeight-this.height-10}}return e(i,[{key:"moveLeft",value:function(){this.speed=-this.maxSpeed}},{key:"moveRight",value:function(){this.speed=this.maxSpeed}},{key:"stop",value:function(){this.speed=0}},{key:"draw",value:function(t){t.fillStyle="pink",t.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(t){this.position.x+=this.speed,this.position.x<0&&(this.position.x=0),this.position.x+this.width>this.gameWidth&&(this.position.x=this.gameWidth-this.width)}}]),i}();exports.default=s;
},{}],"gFLk":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function t(s,a){e(this,t),document.addEventListener("keydown",function(e){switch(e.keyCode){case 37:s.moveLeft();break;case 39:s.moveRight();break;case 27:a.togglePause();break;case 32:a.start()}}),document.addEventListener("keyup",function(e){switch(e.keyCode){case 37:s.speed<0&&s.stop();break;case 39:s.speed>0&&s.stop()}})};exports.default=t;
},{}],"v8Gh":[function(require,module,exports) {
"use strict";function i(i,o){var t=i.position.y+i.size,e=i.position.y,s=o.position.y,n=o.position.y+o.height,p=o.position.x,r=o.position.x+o.width;return t>=s&&e<=n&&i.position.x>=p&&i.position.x+i.size<=r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.detectCollision=i;
},{}],"UD3n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=require("./collisionDetection");function e(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function t(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function s(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}var o=function(){function t(i){e(this,t),this.image=document.getElementById("img_ball"),this.gameWidth=i.gameWidth,this.gameHeight=i.gameHeight,this.game=i,this.size=35,this.reset()}return s(t,[{key:"reset",value:function(){this.position={x:10,y:400},this.speed={x:5,y:-6}}},{key:"draw",value:function(i){i.drawImage(this.image,this.position.x,this.position.y,this.size,this.size)}},{key:"update",value:function(e){this.position.x+=this.speed.x,this.position.y+=this.speed.y,(this.position.x+this.size>this.gameWidth||this.position.x<0)&&(this.speed.x=-this.speed.x),this.position.y<0&&(this.speed.y=-this.speed.y),this.position.y+this.size>this.gameHeight&&(this.game.lives--,this.reset()),(0,i.detectCollision)(this,this.game.paddle)&&(this.speed.y=-this.speed.y,this.position.y=this.game.paddle.position.y-this.size)}}]),t}();exports.default=o;
},{"./collisionDetection":"v8Gh"}],"sWst":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./collisionDetection");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var o=function(){function i(e,n){t(this,i),this.image=document.getElementById("img_brick"),this.game=e,this.position=n,this.width=80,this.height=24,this.markedForDeletion=!1}return n(i,[{key:"update",value:function(){(0,e.detectCollision)(this.game.ball,this)&&(this.game.ball.speed.y=-this.game.ball.speed.y,this.markedForDeletion=!0)}},{key:"draw",value:function(e){e.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}}]),i}();exports.default=o;
},{"./collisionDetection":"v8Gh"}],"xgvB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.buildLevel=t,exports.level2=exports.level1=void 0;var e=r(require("/src/brick"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r,t){var o=[];return t.forEach(function(t,l){t.forEach(function(t,u){if(1===t){var n={x:80*u,y:75+24*l};o.push(new e.default(r,n))}})}),o}var o=[[0,0,0,0,0,1,0,0,0,0]];exports.level1=o;var l=[[0,1,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];exports.level2=l;
},{"/src/brick":"sWst"}],"HPsM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("/src/paddle")),e=a(require("/src/input")),i=a(require("/src/ball")),r=require("/src/levels");function a(t){return t&&t.__esModule?t:{default:t}}function l(t){return o(t)||h(t)||n(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,e):void 0}}function h(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function o(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,i){return e&&f(t.prototype,e),i&&f(t,i),t}var m={PAUSED:0,RUNNING:1,MENU:2,GAMEOVER:3,NEWLEVEL:4},d=function(){function a(l,s){c(this,a),this.gameWidth=l,this.gameHeight=s,this.gameStates=m.MENU,this.paddle=new t.default(this),this.ball=new i.default(this),this.gameObjects=[],this.bricks=[],this.lives=3,new e.default(this.paddle,this),this.levels=[r.level1,r.level2],this.currentLevel=0}return g(a,[{key:"start",value:function(){this.gameStates!==m.MENU&&this.gameStates!==m.NEWLEVEL||(this.bricks=(0,r.buildLevel)(this,this.levels[this.currentLevel]),this.ball.reset(),this.gameObjects=[this.ball,this.paddle],this.gameStates=m.RUNNING)}},{key:"update",value:function(t){0===this.lives&&(this.gameStates=m.GAMEOVER),this.gameStates!==m.PAUSED&&this.gameStates!==m.MENU&&this.gameStates!==m.GAMEOVER&&(0===this.bricks.length&&(this.currentLevel++,this.gameStates=m.NEWLEVEL,this.start()),[].concat(l(this.gameObjects),l(this.bricks)).forEach(function(e){return e.update(t)}),this.bricks=this.bricks.filter(function(t){return!t.markedForDeletion}))}},{key:"draw",value:function(t){[].concat(l(this.gameObjects),l(this.bricks)).forEach(function(e){return e.draw(t)}),t.font="30px Arial",t.fillStyle="purple",t.textAlign="center",t.fillText("Lives: "+this.lives,this.gameWidth/2,this.gameHeight-16),t.font="30px Arial",t.fillStyle="purple",t.textAlign="center",t.fillText("Level: "+(this.currentLevel+1),this.gameWidth-100,this.gameHeight-16),this.gameStates===m.PAUSED&&(t.rect(0,0,this.gameWidth,this.gameHeight),t.fillStyle="rgba(0,0,0, 0.5)",t.fill(),t.font="30px Arial",t.fillStyle="purple",t.textAlign="center",t.fillText("Paused",this.gameWidth/2,this.gameHeight/2)),this.gameStates===m.MENU&&(t.rect(0,0,this.gameWidth,this.gameHeight),t.fillStyle="rgba(0,0,0, 1)",t.fill(),t.font="30px Arial",t.fillStyle="purple",t.textAlign="center",t.fillText("Push Space to Begin!",this.gameWidth/2,this.gameHeight/2)),this.gameStates===m.GAMEOVER&&(t.rect(0,0,this.gameWidth,this.gameHeight),t.fillStyle="rgba(0,0,0, 1)",t.fill(),t.font="30px Arial",t.fillStyle="red",t.textAlign="center",t.fillText("GAMEOVER LOSER",this.gameWidth/2,this.gameHeight/2))}},{key:"togglePause",value:function(){this.gameStates===m.PAUSED?this.gameStates=m.RUNNING:this.gameStates=m.PAUSED}}]),a}();exports.default=d;
},{"/src/paddle":"qMRA","/src/input":"gFLk","/src/ball":"UD3n","/src/levels":"xgvB"}],"H99C":[function(require,module,exports) {
"use strict";var e=t(require("./game"));function t(e){return e&&e.__esModule?e:{default:e}}var r=document.getElementById("gameScreen"),a=r.getContext("2d"),n=800,u=600;a.clearRect(0,0,n,u);var c=new e.default(n,u),d=0;function i(e){var t=e-d;d=e,a.clearRect(0,0,n,u),c.update(t),c.draw(a),requestAnimationFrame(i)}requestAnimationFrame(i);
},{"./game":"HPsM"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-d73rn/src.720ecbc5.js.map