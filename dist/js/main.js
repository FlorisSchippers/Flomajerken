var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(name, x, y) {
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
    function Airport(stage, x, y) {
        var _this = this;
        var image;
        switch (stage) {
            case 0:
                image = "airport0";
                break;
            case 1:
                image = "airport1";
                break;
            case 2:
                image = "airport2";
                break;
            case 3:
                image = "airport3";
                break;
            case 4:
                image = "airport4";
                break;
            case 5:
                image = "airport5";
                break;
            default:
                image = "airport0";
                break;
        }
        _this = _super.call(this, image, x, y) || this;
        return _this;
    }
    return Airport;
}(GameObject));
var Game = (function () {
    function Game() {
        this.airport0 = new Airport(0, 34, 17);
        this.airport1 = new Airport(1, 34 + 640, 17);
        this.airport2 = new Airport(2, 34 + 640 + 640, 17);
        this.airport3 = new Airport(3, 34, 17 + 320);
        this.airport4 = new Airport(4, 34 + 640, 17 + 320);
        this.airport5 = new Airport(5, 34 + 640 + 640, 17 + 320);
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map