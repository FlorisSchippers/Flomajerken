/// <reference path="airport.ts" />

class Game {

    private airports: Airport[] = [];
    private planes: Plane[] = [];

    constructor() {
        // Populate the screen with most efficient airport placements (tile: 64x32)
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
        requestAnimationFrame(() => this.gameLoop());
    }

    private spawn(name: string, x: number, y: number): void {
        let airport = new Airport(name, x, y);
        let plane = new Plane(name, airport);
        this.airports.push(airport);
        this.planes.push(plane);
    }

    private gameLoop() {
        // Move all planes individually
        this.planes.forEach(plane => {
            plane.move();
        });
        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener("load", function () {
    new Game();
});