/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    dino1: document.getElementById('dino1'),
    dino2: document.getElementById('dino2'),
    dino3: document.getElementById('dino3'),
    ufo_1: document.getElementById('alien_ship_1'),
    ufo_2: document.getElementById('alien_ship_2'),
    ufo_3: document.getElementById('alien_ship_3'),
    heart_gray: document.getElementById('heart_gray'),
    heart_red: document.getElementById('heart_red'),
    spear: document.getElementById('spear'),
    sword: document.getElementById('sword'),
    arrow: document.getElementById('arrow')
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dino = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_elements = __webpack_require__(0);

var _game_elements2 = _interopRequireDefault(_game_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var w_h_ratio = 123 / 132;

var Dino = exports.Dino = function () {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     */
    function Dino(x, y, ctx) {
        _classCallCheck(this, Dino);

        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60 / w_h_ratio;
        this.y_copy = y;
        this.ctx = ctx;
        this.element = _game_elements2.default.dino1;
        this.counter = 0;
        this.step_frame_delay = 5;
        this.jump_velocity = 20;
        this.gravity = 1.25;
        this.is_jumping = false;
    }

    _createClass(Dino, [{
        key: 'activate_listeners',
        value: function activate_listeners() {
            var _this = this;

            window.addEventListener('keypress', function (event) {
                // console.log(event.keyCode);
                if (event.keyCode == 32) {
                    console.log("space");
                }
                _this.is_jumping = true;
            });
        }
    }, {
        key: 'draw',
        value: function draw() {
            var boundingBox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.ctx.drawImage(this.element, this.x, this.y - this.height, this.width, this.height);
            if (boundingBox) {
                this.ctx.beginPath();
                this.ctx.rect(this.x + 13, this.y - this.height, this.width - 31, this.height - 5);
                this.ctx.closePath();
                this.ctx.strokeStyle = 'blue';
                this.ctx.lineWidth = "2";
                this.ctx.stroke();
            }
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.is_jumping == false) {
                if (this.counter > this.step_frame_delay) {
                    if (this.element == _game_elements2.default.dino1) {
                        this.element = _game_elements2.default.dino2;
                    } else {
                        this.element = _game_elements2.default.dino1;
                    }
                    this.counter = 0;
                }
                this.counter++;
            } else {
                this.element = _game_elements2.default.dino3;
            }

            if (this.is_jumping) {
                // this.element = elements.dino3;

                this.y -= this.jump_velocity;
                this.jump_velocity -= this.gravity;
                if (this.jump_velocity < 0 && this.y == this.y_copy) {
                    this.is_jumping = false;
                    this.jump_velocity = 20;
                }
            }
        }
    }]);

    return Dino;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DustParticle = exports.DustParticle = function () {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     */
    function DustParticle(x, y, ctx) {
        _classCallCheck(this, DustParticle);

        this.x = x;
        this.y = y;
        this.w = Math.random() * 5 + 5;
        this.ctx = ctx;
    }

    /**
     * 
     * @param {Number} speed 
     */


    _createClass(DustParticle, [{
        key: "update",
        value: function update(speed) {
            this.x -= speed;
        }
    }, {
        key: "draw",
        value: function draw() {
            this.ctx.beginPath();
            this.ctx.lineWidth = "1";
            this.ctx.strokeStyle = "green";
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.x + this.w, this.y);
            this.ctx.closePath();
            this.ctx.stroke();
        }
    }]);

    return DustParticle;
}();

var MIN_GAP = 15;
var MAX_GAP = 30;
var get_random_particle_gap = exports.get_random_particle_gap = function get_random_particle_gap() {
    return Math.random() * (MAX_GAP - MIN_GAP) + MIN_GAP;
};

var drawfloor = exports.drawfloor = function drawfloor(ctx, top_offset, width) {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "green";
    ctx.moveTo(0, top_offset - 20);
    ctx.lineTo(width, top_offset - 20);
    ctx.closePath();
    ctx.stroke();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_random_obstacle_grp = exports.get_random_obstacle_gap = exports.Obstacle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_elements = __webpack_require__(0);

var _game_elements2 = _interopRequireDefault(_game_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obstacle = exports.Obstacle = function () {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {} grp 
     */
    function Obstacle(x, y, ctx, grp) {
        _classCallCheck(this, Obstacle);

        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.grp = grp;

        var max_height = this.grp[0].height;
        var min_height = this.grp[0].height;
        var bounding_box_width = 0;
        this.grp.forEach(function (obs, i) {
            if (obs.height > max_height) {
                max_height = obs.height;
            }
            if (obs.height < min_height) {
                min_height = obs.height;
            }
            bounding_box_width += obs.width;
        });

        var avg_height = (max_height + min_height) / 2;
        this.bounding_box_width = bounding_box_width;
        this.bounding_box_height = avg_height;
    }

    _createClass(Obstacle, [{
        key: "draw",
        value: function draw() {
            var _this = this;

            var boundingBox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            var offset = 0;
            this.grp.forEach(function (obs, i) {
                _this.ctx.drawImage(obs.element, _this.x + offset, _this.y - obs.height, obs.width, obs.height);
                offset += obs.width;
            });
            if (boundingBox) {
                this.ctx.beginPath();
                this.ctx.lineWidth = "2";
                this.ctx.strokeStyle = "red";
                this.ctx.rect(this.x, this.y - this.bounding_box_height, this.bounding_box_width, this.bounding_box_height);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }, {
        key: "update",
        value: function update(speed) {
            this.x -= speed;
        }
    }]);

    return Obstacle;
}();

var get_random_obstacle_gap = exports.get_random_obstacle_gap = function get_random_obstacle_gap() {
    var obstacle_gap_list = [350, 400, 600, 550, 800];
    return obstacle_gap_list[Math.floor(Math.random() * obstacle_gap_list.length)];
};

var get_random_obstacle_grp = exports.get_random_obstacle_grp = function get_random_obstacle_grp() {
    var obstacle_group_list = [[{
        element: _game_elements2.default.arrow,
        height: 80,
        width: 20
    }, {
        element: _game_elements2.default.spear,
        height: 100,
        width: 20
    }], [{
        element: _game_elements2.default.sword,
        height: 50,
        width: 20
    }], [{
        element: _game_elements2.default.spear,
        height: 100,
        width: 20
    }, {
        element: _game_elements2.default.sword,
        height: 50,
        width: 20
    }, {
        element: _game_elements2.default.arrow,
        height: 80,
        width: 20
    }], [{
        element: _game_elements2.default.sword,
        height: 50,
        width: 20
    }, {
        element: _game_elements2.default.sword,
        height: 50,
        width: 20
    }], [{
        element: _game_elements2.default.spear,
        height: 100,
        width: 20
    }, {
        element: _game_elements2.default.spear,
        height: 100,
        width: 20
    }]];
    return obstacle_group_list[Math.floor(Math.random() * obstacle_group_list.length)];
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.get_random_ufo_gap = exports.UFO = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_elements = __webpack_require__(0);

var _game_elements2 = _interopRequireDefault(_game_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ufos = [{
    element: _game_elements2.default.ufo_1,
    w_h_ratio: 137 / 96
}, {
    element: _game_elements2.default.ufo_2,
    w_h_ratio: 144 / 70
}, {
    element: _game_elements2.default.ufo_3,
    w_h_ratio: 61 / 62
}];

var UFO = exports.UFO = function () {
    /**
     * 
     * @param {Number} x
     * @param {CanvasRenderingContext2D} ctx 
     */
    function UFO(x, ctx) {
        _classCallCheck(this, UFO);

        this.x = x;
        this.y = [50, 100, 150][Math.floor(Math.random() * 3)];
        this.ctx = ctx;
        this.ufo = ufos[Math.floor(Math.random() * ufos.length)];
        this.speed = Math.random() * 1 + 0.5;
    }

    _createClass(UFO, [{
        key: 'draw',
        value: function draw() {
            var scale = 30 + 20 * (this.speed - 0.5);
            this.ctx.drawImage(this.ufo.element, this.x, this.y, scale, scale / this.ufo.w_h_ratio);
        }
    }, {
        key: 'update',
        value: function update() {
            this.x -= this.speed;
        }
    }]);

    return UFO;
}();

var get_random_ufo_gap = exports.get_random_ufo_gap = function get_random_ufo_gap() {
    return [200, 300, 400][Math.floor(Math.random() * 3)];
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _obstacle = __webpack_require__(3);

var _dust_particle = __webpack_require__(2);

var _ufo = __webpack_require__(4);

var _dino = __webpack_require__(1);

var canvas = document.getElementById('can');
canvas.height = 500;
canvas.width = 950;

var ctx = canvas.getContext('2d');
var SPEED = 8;

var dino = new _dino.Dino(100, canvas.height - 12, ctx);
dino.activate_listeners();

var pad_number = function pad_number(size, num) {
    var padded_num_string = '';
    var diff = size - num.toString().length;;

    for (var i = 0; i < diff; i++) {
        padded_num_string += '0';
    }
    padded_num_string += num.toString();
    return padded_num_string;
};

var check_overlap = function check_overlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1) {
        return false;
    }
    return true;
};

var obstacleList = [new _obstacle.Obstacle(canvas.width, canvas.height - 10, ctx, (0, _obstacle.get_random_obstacle_grp)())];
var floorParticles = [new _dust_particle.DustParticle(canvas.width, Math.random() * 10 + (canvas.height - 18), ctx)];
var ufos = [new _ufo.UFO(canvas.width, ctx)];

var obstacle_gap = (0, _obstacle.get_random_obstacle_gap)();
var particle_gap = (0, _dust_particle.get_random_particle_gap)();
var ufo_gap = (0, _ufo.get_random_ufo_gap)();

var score = 0;
var score_stepper = 0;
var score_step = 4;
var pause_game = false;

var gameLoop = function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // DRAWING FLOOR AND DUST PARTICLES
    (0, _dust_particle.drawfloor)(ctx, canvas.height, canvas.width);
    floorParticles.forEach(function (particle, i) {
        particle.draw();
        if (!pause_game) {
            particle.update(SPEED);
        }

        if (particle.x < -50) {
            floorParticles.splice(i, 1);
        }
        if (i == floorParticles.length - 1) {
            if (particle.x < canvas.width - particle_gap) {
                floorParticles.push(new _dust_particle.DustParticle(canvas.width, Math.random() * 10 + (canvas.height - 18), ctx));
                particle_gap = (0, _dust_particle.get_random_particle_gap)();
            }
        }
    });

    //  DRAWING UFOs ---------------------
    ufos.forEach(function (ufo, i) {
        ufo.draw();
        if (!pause_game) {
            ufo.update();
        }

        if (ufo.x < -400) {
            ufos.splice(i, 1);
        }
        if (i == ufos.length - 1) {
            if (ufo.x < canvas.width - ufo_gap) {
                ufos.push(new _ufo.UFO(canvas.width, ctx));
                ufo_gap = (0, _ufo.get_random_ufo_gap)();
            }
        }
    });

    // DRAWING OBSTACLES -----------------
    obstacleList.forEach(function (obstacle, i) {
        obstacle.draw();
        if (!pause_game) {
            obstacle.update(SPEED);
        }

        if (check_overlap(dino.x + 13, dino.y - dino.height - 5, dino.width - 31, dino.height, obstacle.x, obstacle.y - obstacle.bounding_box_height, obstacle.bounding_box_width, obstacle.bounding_box_height)) {
            console.log("hit");
            pause_game = true;
        }

        if (obstacle.x < -500) {
            obstacleList.splice(i, 1);
        }

        if (i == obstacleList.length - 1) {

            if (obstacle.x < canvas.width - obstacle_gap) {
                obstacleList.push(new _obstacle.Obstacle(canvas.width, canvas.height - 10, ctx, (0, _obstacle.get_random_obstacle_grp)()));
                // console.log("Pushed new obstacle");
                obstacle_gap = (0, _obstacle.get_random_obstacle_gap)();
            }
        }
    });

    // DRAWING DINO ---------------------
    dino.draw();
    if (!pause_game) {
        dino.update();
    }

    // DISPLAY THE SCORE ----------------
    ctx.font = '25px ArcadeClassic';
    ctx.fillStyle = 'silver';
    ctx.fillText(pad_number(5, score), canvas.width - 100, 30);

    if (!pause_game) {
        if (score_stepper > score_step) {
            if (score < 99999) {
                score++;
            }
            score_stepper = 0;
        }
        score_stepper++;
    }

    if (pause_game) {
        ctx.font = '30px ArcadeClassic';
        ctx.fillStyle = 'silver';
        ctx.fillText('GAME OVER!', canvas.width / 2 - 60, canvas.height / 2 - 10);
    }

    requestAnimationFrame(gameLoop);
};
gameLoop();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map