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
        if (this.name == "leftplane") {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)rotate(-35deg)";
        }
        else if (this.name == "rightplane") {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)rotate(-35deg)";
        }
        else {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        }
    };
    return GameObject;
}());
var Airport = (function (_super) {
    __extends(Airport, _super);
    function Airport(user, x, y) {
        var _this = this;
        _super.call(this, "airport", x, y);
        this.stage = 0;
        this.user = user;
        this.username = document.createElement("airportusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.div.onclick = function (e) {
            _this._onclick();
        };
    }
    Airport.prototype._onclick = function () {
        if (this.stage == 5) {
            this.stage = 0;
        }
        else {
            this.stage++;
        }
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
        this.airports.push(new Airport("Henk", 2, 65));
        this.airports.push(new Airport("Eddie", 2 + 640, 65));
        this.airports.push(new Airport("Brock", 2 + 1280, 65));
        this.airports.push(new Airport("Peter", 2 + 320, 65 + 224));
        this.airports.push(new Airport("Oscar", 2 + 960, 65 + 224));
        this.airports.push(new Airport("Robin", 2, 65 + 448));
        this.airports.push(new Airport("Casey", 2 + 640, 65 + 448));
        this.airports.push(new Airport("Eva", 2 + 1280, 65 + 448));
        this.airports.push(new Airport("Sammie", 2 + 320, 65 + 672));
        this.airports.push(new Airport("Harrie", 2 + 960, 65 + 672));
        this.planes.push(new Plane("Henk"));
        this.planes.push(new Plane("Eddie"));
        this.planes.push(new Plane("Brock"));
        this.planes.push(new Plane("Peter"));
        this.planes.push(new Plane("Oscar"));
        this.planes.push(new Plane("Robin"));
        this.planes.push(new Plane("Casey"));
        this.planes.push(new Plane("Eva"));
        this.planes.push(new Plane("Sammie"));
        this.planes.push(new Plane("Harrie"));
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
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
    function Plane(user) {
        var x = Math.round(Math.random());
        if (x == 0) {
            x = Math.random() * 10 * -500;
        }
        else {
            x = window.innerWidth + Math.random() * 10 * 500;
        }
        if (x > 0) {
            var y = (Math.random() * window.innerHeight) - 2 * x;
            _super.call(this, "leftplane", x, y);
            this.goingRight = false;
            this.xspeed = -5;
            this.yspeed = 2.5;
        }
        else {
            var y = (Math.random() * window.innerHeight) + 2 * x;
            _super.call(this, "rightplane", x, y);
            this.goingRight = true;
            this.xspeed = 5;
            this.yspeed = -2.5;
        }
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
    }
    Plane.prototype.move = function () {
        if (this.goingRight && this.x > window.innerWidth + 100) {
            this.x = 60;
        }
        else if (!this.goingRight && this.x < -100) {
            this.x = window.innerWidth + 100;
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    };
    return Plane;
}(GameObject));
//# sourceMappingURL=main.js.map