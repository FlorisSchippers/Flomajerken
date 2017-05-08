/// <reference path="airport.ts" />

class Game {

    private airport0: Airport;
    private airport1: Airport;
    private airport2: Airport;
    private airport3: Airport;
    private airport4: Airport;
    private airport5: Airport;

    constructor() {
        // tile: 64x32
        // offset: 34, 17
        this.airport0 = new Airport(0, 34, 17);
        this.airport1 = new Airport(1, 34 + 640, 17);
        this.airport2 = new Airport(2, 34 + 640 + 640, 17);
        this.airport3 = new Airport(3, 34, 17 + 320);
        this.airport4 = new Airport(4, 34 + 640, 17 + 320);
        this.airport5 = new Airport(5, 34 + 640 + 640, 17 + 320);

        // requestAnimationFrame(() => this.gameLoop());
    }

    // private gameLoop() {
    //     requestAnimationFrame(() => this.gameLoop());
    // }

}

// load
window.addEventListener("load", function () {
    new Game();
});