/// <reference path="airport.ts" />

class Game {

    private airports: Airport[] = [];
    private planes: Plane[] = [];

    constructor() {
        // tile: 64x32
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
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.planes.forEach(plane => {
            plane.move();
        });
        requestAnimationFrame(() => this.gameLoop());
    }

}

window.addEventListener("load", function () {
    new Game();
});