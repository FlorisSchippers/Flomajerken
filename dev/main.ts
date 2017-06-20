/// <reference path="airport.ts" />
/// <reference path="jquery.d.ts" />

class Game {

    private static instance: Game;
    public airports: Airport[] = [];
    public planes: Plane[] = [];
    public users: String[] = [];
    private gametickCouter: number = 0;
    private timerCounter: number = 0;

    private constructor() {
        // Populate the screen with most efficient airport placements (tile: 64x32)
        this.airports.push(new Airport("", 2, 65));
        this.airports.push(new Airport("", 2 + 640, 65));
        this.airports.push(new Airport("", 2 + 1280, 65));
        this.airports.push(new Airport("", 2 + 320, 65 + 224));
        this.airports.push(new Airport("", 2 + 960, 65 + 224));
        this.airports.push(new Airport("", 2, 65 + 448));
        this.airports.push(new Airport("", 2 + 640, 65 + 448));
        this.airports.push(new Airport("", 2 + 1280, 65 + 448));
        this.airports.push(new Airport("", 2 + 320, 65 + 672));
        this.airports.push(new Airport("", 2 + 960, 65 + 672));
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.gametickCouter++;
        if (this.gametickCouter >= 100) {
            this.gametickCouter = 0;
            this.timerCounter++;
        }
        if (this.timerCounter >= 1) {
            this.timerCounter = 0;
            this.makeAjaxCall();
        }
        // Move all planes individually
        this.planes.forEach(plane => {
            plane.move();
        });
        requestAnimationFrame(() => this.gameLoop());
    }

    private makeAjaxCall(): void {
        // http://localhost:8000/flomajerkenapi/users/
        $.ajax({
            url: 'http://145.24.222.211:8000/flomajerkenAPI/users/',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: { format: 'json' },
            type: 'GET',
            success: (data) => {
                data.forEach(dat => {
                    if (this.users.indexOf(dat.name) != -1) {
                        this.airports.forEach(airport => {
                            if (airport.user == dat.name) {
                                console.log('Spawning new plane for airport: ' + airport.user);
                                this.planes.push(new Plane(dat.name, airport));
                                console.log('Deleting resource on url: http://145.24.222.211:8000/flomajerkenAPI/users/' + dat._id);
                                $.ajax({
                                    url: 'http://145.24.222.211:8000/flomajerkenAPI/users/' + dat._id,
                                    type: 'DELETE',
                                    success: (data) => { console.log('Deleted entry for user: ' + dat._id) }
                                });
                            }
                        })
                    } else {
                        console.log('Spawning new airport for user: ' + dat.name);
                        this.users.push(dat.name);
                        this.airports[this.users.length - 1].user = dat.name;
                        this.airports[this.users.length - 1].username.innerHTML = dat.name;
                        this.airports[this.users.length - 1].div.style.display = 'inline';
                        console.log('Deleting resource on url: http://145.24.222.211:8000/flomajerkenAPI/users/' + dat._id);
                        $.ajax({
                            url: 'http://145.24.222.211:8000/flomajerkenAPI/users/' + dat._id,
                            type: 'DELETE',
                            success: (data) => { console.log('Deleted entry for user: ' + dat._id) }
                        });
                    };
                });
            }
        });
    }

    public static getInstance(): Game {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}

window.addEventListener("load", function () {
    Game.getInstance();
});