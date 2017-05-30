var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(name, x, y) {
        this.name = name;
        this.div = document.createElement(name);
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.draw();
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Airport = (function (_super) {
    __extends(Airport, _super);
    function Airport(user, x, y) {
        _super.call(this, "airport", x, y);
        this.stage = 0;
        this.user = user;
        this.username = document.createElement("airportusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.div.setAttribute("id", this.user);
    }
    Airport.prototype.upgrade = function () {
        this.stage++;
        switch (this.stage) {
            case 0:
                this.div.style.backgroundImage = "url('images/airport0.png')";
                this.div.style.width = "379px";
                this.div.style.height = "224px";
                break;
            case 1:
                this.div.style.backgroundImage = "url('images/airport1.png')";
                this.div.style.width = "448px";
                this.div.style.height = "224px";
                break;
            case 2:
                this.div.style.backgroundImage = "url('images/airport2.png')";
                this.div.style.width = "480px";
                this.div.style.height = "257px";
                break;
            case 3:
                this.div.style.backgroundImage = "url('images/airport3.png')";
                this.div.style.width = "479px";
                this.div.style.height = "256px";
                break;
            case 4:
                this.div.style.backgroundImage = "url('images/airport4.png')";
                this.div.style.width = "511px";
                this.div.style.height = "256px";
                break;
            case 5:
                this.div.style.backgroundImage = "url('images/airport5.png')";
                this.div.style.width = "639px";
                this.div.style.height = "304px";
                break;
        }
    };
    return Airport;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.airports = [];
        this.planes = [];
        this.spawn("Henk", 2, 65);
        this.spawn("Eddie", 2 + 640, 65);
        this.spawn("Brock", 2 + 1280, 65);
        this.spawn("Peter", 2 + 320, 65 + 224);
        this.spawn("Oscar", 2 + 960, 65 + 224);
        this.spawn("Robin", 2, 65 + 448);
        this.spawn("Casey", 2 + 640, 65 + 448);
        this.spawn("Eva", 2 + 1280, 65 + 448);
        this.spawn("Sammie", 2 + 320, 65 + 672);
        this.spawn("Harrie", 2 + 960, 65 + 672);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.spawn = function (name, x, y) {
        var airport = new Airport(name, x, y);
        var plane = new Plane(name, airport);
        this.airports.push(airport);
        this.planes.push(plane);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.planes.forEach(function (plane) {
            plane.move();
        });
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Plane = (function (_super) {
    __extends(Plane, _super);
    function Plane(user, airport) {
        var x = Math.round(Math.random());
        if (x == 0) {
            x = window.innerWidth + Math.random() * window.innerWidth;
        }
        else {
            x = 0 - Math.random() * window.innerWidth;
        }
        if (x > 0) {
            var y = 0 - window.innerHeight - Math.random() * window.innerHeight;
            _super.call(this, "leftplane", x, y);
            this.airport = airport;
            this.goingRight = false;
            this.setTarget();
            this.determineFlightPath(x, y);
        }
        else {
            var y = window.innerHeight + Math.random() * window.innerHeight;
            _super.call(this, "rightplane", x, y);
            this.airport = airport;
            this.goingRight = true;
            this.setTarget();
            this.determineFlightPath(x, y);
        }
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.landed = false;
    }
    Plane.prototype.setTarget = function () {
        if (!this.goingRight) {
            switch (this.airport.stage) {
                case 0:
                    this.targetX = this.airport.x + 330;
                    this.targetY = this.airport.y + 130;
                    break;
                case 1:
                    this.targetX += 32;
                    this.targetY += 16;
                    break;
                case 2:
                    this.targetX += 32;
                    this.targetY += 16;
                    break;
                case 3:
                    this.targetX += 0;
                    this.targetY += 0;
                    break;
                case 4:
                    this.targetX += 0;
                    this.targetY += 0;
                    break;
                case 5:
                    this.targetX += 64;
                    this.targetY += 32;
                    break;
            }
        }
        else {
            switch (this.airport.stage) {
                case 0:
                    this.targetX = this.airport.x + 230;
                    this.targetY = this.airport.y + 180;
                    break;
                case 1:
                    this.targetX += 32;
                    this.targetY += 16;
                    break;
                case 2:
                    this.targetX += 32;
                    this.targetY += 16;
                    break;
                case 3:
                    this.targetX += 0;
                    this.targetY += 0;
                    break;
                case 4:
                    this.targetX += 0;
                    this.targetY += 0;
                    break;
                case 5:
                    this.targetX += 64;
                    this.targetY += 32;
                    break;
            }
        }
    };
    Plane.prototype.determineFlightPath = function (x, y) {
        if (!this.goingRight) {
            var deltaX = x - this.targetX;
            var deltaY = this.targetY - y;
            if (deltaX > deltaY) {
                var ratio = deltaX / deltaY;
                this.xspeed = -1 * ratio;
                this.yspeed = 1;
            }
            else {
                var ratio = deltaY / deltaX;
                this.xspeed = -1;
                this.yspeed = 1 * ratio;
            }
        }
        else if (this.goingRight) {
            var deltaX = this.targetX - x;
            var deltaY = y - this.targetY;
            if (deltaX > deltaY) {
                var ratio = deltaX / deltaY;
                this.xspeed = 1 * ratio;
                this.yspeed = -1;
            }
            else {
                var ratio = deltaY / deltaX;
                this.xspeed = 1;
                this.yspeed = -1 * ratio;
            }
        }
    };
    Plane.prototype.move = function () {
        if (this.goingRight && this.landed == false && this.x >= this.targetX) {
            this.landed = true;
            this.xspeed = 0.5;
            this.yspeed = -0.25;
        }
        else if (!this.goingRight && this.landed == false && this.x <= this.targetX) {
            this.landed = true;
            this.xspeed = -0.5;
            this.yspeed = 0.25;
        }
        if (this.goingRight && this.landed == true && this.x >= this.targetX + 100) {
            this.landed = false;
            this.xspeed = 5;
            this.yspeed = -1;
        }
        else if (!this.goingRight && this.landed == true && this.x <= this.targetX - 100) {
            this.landed = false;
            this.xspeed = -5;
            this.yspeed = 1;
        }
        if (this.goingRight && this.x > window.innerWidth + 100) {
            this.x = 0 - Math.random() * window.innerWidth;
            this.y = window.innerHeight + Math.random() * window.innerHeight;
            this.airport.upgrade();
            this.setTarget();
            this.determineFlightPath(this.x, this.y);
        }
        else if (!this.goingRight && this.x < -100) {
            this.x = window.innerWidth + Math.random() * window.innerWidth;
            this.y = 0 - window.innerHeight - Math.random() * window.innerHeight;
            this.airport.upgrade();
            this.setTarget();
            this.determineFlightPath(this.x, this.y);
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    };
    return Plane;
}(GameObject));
//# sourceMappingURL=main.js.map