var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameObject = (function () {
    function GameObject(name, x, y) {
        this.div = document.createElement("airport");
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
        var _this = this;
        _super.call(this, "airport", x, y);
        this.stage = 0;
        this.user = user;
        this.username = document.createElement("username");
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
        this.airport0 = new Airport("Henk", 34, 17);
        this.airport1 = new Airport("Eddie", 34 + 640, 17);
        this.airport2 = new Airport("Brock", 34 + 1280, 17);
        this.airport3 = new Airport("Peter", 34 + 320, 17 + 224);
        this.airport4 = new Airport("Oscar", 34 + 960, 17 + 224);
        this.airport5 = new Airport("Robin", 34, 17 + 448);
        this.airport6 = new Airport("Casey", 34 + 640, 17 + 448);
        this.airport7 = new Airport("Eva", 34 + 1280, 17 + 448);
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map