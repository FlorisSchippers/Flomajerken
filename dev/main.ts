/// <reference path="airport.ts" />

class Game {

    private airport0: Airport;
    private airport1: Airport;
    private airport2: Airport;
    private airport3: Airport;
    private airport4: Airport;
    private airport5: Airport;
    private airport6: Airport;
    private airport7: Airport;

    constructor() {
        // tile: 64x32
        // offset: 34, 17
        this.airport0 = new Airport("Henk", 34, 17);
        this.airport1 = new Airport("Eddie", 34 + 640, 17);
        this.airport2 = new Airport("Brock", 34 + 1280, 17);
        this.airport3 = new Airport("Peter", 34 + 320, 17 + 224);
        this.airport4 = new Airport("Oscar", 34 + 960, 17 + 224);
        this.airport5 = new Airport("Robin", 34, 17 + 448);
        this.airport6 = new Airport("Casey", 34 + 640, 17 + 448);
        this.airport7 = new Airport("Eva", 34 + 1280, 17 + 448);
    }
}

window.addEventListener("load", function () {
    new Game();
});