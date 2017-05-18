/// <reference path="airport.ts" />

class Game {

    private airports: Airport[] = [];
    private planes: Plane[] = [];

    constructor() {
        document.body.onclick = e => {
            console.log("x: " + e.pageX + ", y: " + e.pageY);
        }
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
        this.planes.push(new Plane("Henk", 2, 65));
        this.planes.push(new Plane("Eddie", 2 + 640, 65));
        this.planes.push(new Plane("Brock", 2 + 1280, 65));
        this.planes.push(new Plane("Peter", 2 + 320, 65 + 224));
        this.planes.push(new Plane("Oscar", 2 + 960, 65 + 224));
        this.planes.push(new Plane("Robin", 2, 65 + 448));
        this.planes.push(new Plane("Casey", 2 + 640, 65 + 448));
        this.planes.push(new Plane("Eva", 2 + 1280, 65 + 448));
        this.planes.push(new Plane("Sammie", 2 + 320, 65 + 672));
        this.planes.push(new Plane("Harrie", 2 + 960, 65 + 672));
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