/// <reference path="airport.ts" />
/// <reference path="jquery.d.ts" />

class Game {

    private airports: Airport[] = [];
    private planes: Plane[] = [];
    private gametickCouter: number = 0;
    private timerCounter: number = 0;

    constructor() {
        // Populate the screen with most efficient airport placements (tile: 64x32)
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
        requestAnimationFrame(() => this.gameLoop());
    }


    private gameLoop() {
        this.gametickCouter++;
        if (this.gametickCouter >= 60) {
            this.gametickCouter = 0;
            this.timerCounter++;
        }
        if (this.timerCounter >= 1) {
            this.timerCounter = 0;
            this.makeAjaxCall();
        }
        console.log(this.timerCounter);
        // Move all planes individually
        this.planes.forEach(plane => {
            plane.move();
        });
        requestAnimationFrame(() => this.gameLoop());
    }

    private makeAjaxCall(): void {
        $.ajax({
            url: 'http://localhost:8000/flomajerkenapi/users/',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: { format: 'json' },
            type: 'GET',
            success: (data) => {
                data.forEach(dat => {
                    this.airports.forEach(airport => {
                        if (airport.user == dat.name) {
                            console.log('Spawning new plane for airport: ' + airport.user);
                            this.planes.push(new Plane(dat.name, airport));
                            console.log('Deleting resource on url: http://localhost:8000/flomajerkenapi/users/' + dat._id);
                            $.ajax({
                                url: 'http://localhost:8000/flomajerkenapi/users/' + dat._id,
                                type: 'DELETE',
                                success: (data) => { console.log('Deleted entry for user: ' + dat._id) }
                            });
                        }
                    });
                });
            }
        });
    }

    // private spawn(name: string, x: number, y: number): void {
    //     let airport = new Airport(name, x, y);
    //     let plane = new Plane(name, airport);
    //     this.airports.push(airport);
    //     this.planes.push(plane);
    // }
}

window.addEventListener("load", function () {
    new Game();
});