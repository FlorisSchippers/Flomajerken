/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    private user: string;
    private username: HTMLElement;
    private goingRight: boolean;
    private xspeed: number;
    private yspeed: number;
    private airport: Airport;
    private targetX: number;
    private targetY: number;
    private landed: boolean;

    constructor(user: string, airport: Airport) {
        // Create plane gameobject that can 50/50 randomly go left or right
        // Calls determineFlightPath method to set the right course speeds
        let x = Math.round(Math.random());
        if (x == 0) {
            x = window.innerWidth + Math.random() * window.innerWidth;
        } else {
            x = 0 - Math.random() * window.innerWidth;
        }
        if (x > 0) {
            let y = 0 - window.innerHeight - Math.random() * window.innerHeight;
            super("leftplane", x, y);
            this.airport = airport;
            this.goingRight = false;
            this.setTarget();
            this.determineFlightPath(x, y);
        } else {
            let y = window.innerHeight + Math.random() * window.innerHeight;
            super("rightplane", x, y);
            this.airport = airport;
            this.goingRight = true;
            this.setTarget();
            this.determineFlightPath(x, y);
        }
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.landed = false;
    }

    private setTarget(): void {
        if (!this.goingRight) {
            switch (this.airport.stage) {
                case 0:
                    console.log("stage 0");
                    this.targetX = this.airport.x + 330;
                    this.targetY = this.airport.y + 130;
                    break;
                case 1:
                    console.log("stage 1");
                    this.targetX = this.airport.x + 330 + 32;
                    this.targetY = this.airport.y + 130 + 16;
                    // this.targetX += 32;
                    // this.targetY += 16;
                    break;
                case 2:
                    console.log("stage 2");
                    this.targetX = this.airport.x + 330 + 32 + 32;
                    this.targetY = this.airport.y + 130 + 16 + 16;
                    // this.targetX += 32;
                    // this.targetY += 16;
                    break;
                case 3:
                    console.log("stage 3");
                    this.targetX = this.airport.x + 330 + 32 + 32;
                    this.targetY = this.airport.y + 130 + 16 + 16;
                    // this.targetX += 0;
                    // this.targetY += 0;
                    break;
                case 4:
                    console.log("stage 4");
                    this.targetX = this.airport.x + 330 + 32 + 32;
                    this.targetY = this.airport.y + 130 + 16 + 16;
                    // this.targetX += 0;
                    // this.targetY += 0;
                    break;
                case 5:
                    console.log("stage 5");
                    this.targetX = this.airport.x + 330 + 32 + 32 + 64;
                    this.targetY = this.airport.y + 130 + 16 + 16 + 32;
                    // this.targetX += 64;
                    // this.targetY += 32;
                    break;
            }
        } else {
            switch (this.airport.stage) {
                case 0:
                    console.log("stage 0");
                    this.targetX = this.airport.x + 230;
                    this.targetY = this.airport.y + 180;
                    break;
                case 1:
                    console.log("stage 1");
                    this.targetX = this.airport.x + 230 + 32;
                    this.targetY = this.airport.y + 180 + 16;
                    // this.targetX += 32;
                    // this.targetY += 16;
                    break;
                case 2:
                    console.log("stage 2");
                    this.targetX = this.airport.x + 230 + 32 + 32;
                    this.targetY = this.airport.y + 180 + 16 + 16;
                    // this.targetX += 32;
                    // this.targetY += 16;
                    break;
                case 3:
                    console.log("stage 3");
                    this.targetX = this.airport.x + 230 + 32 + 32;
                    this.targetY = this.airport.y + 180 + 16 + 16;
                    // this.targetX += 0;
                    // this.targetY += 0;
                    break;
                case 4:
                    console.log("stage 4");
                    this.targetX = this.airport.x + 230 + 32 + 32;
                    this.targetY = this.airport.y + 180 + 16 + 16;
                    // this.targetX += 0;
                    // this.targetY += 0;
                    break;
                case 5:
                    console.log("stage 5");
                    this.targetX = this.airport.x + 230 + 32 + 32 + 64;
                    this.targetY = this.airport.y + 180 + 16 + 16 + 32;
                    // this.targetX += 64;
                    // this.targetY += 32;
                    break;
            }
        }
    }

    public determineFlightPath(x: number, y: number): void {
        // The angle of flight is determined by evaluating
        // the position of the plane according to it's airport
        if (!this.goingRight) {
            let deltaX = x - this.targetX;
            let deltaY = this.targetY - y;
            if (deltaX > deltaY) {
                let ratio = deltaX / deltaY;
                this.xspeed = -1 * ratio;
                this.yspeed = 1;
            } else {
                let ratio = deltaY / deltaX;
                this.xspeed = -1;
                this.yspeed = 1 * ratio;
            }
        } else if (this.goingRight) {
            let deltaX = this.targetX - x;
            let deltaY = y - this.targetY;
            if (deltaX > deltaY) {
                let ratio = deltaX / deltaY;
                this.xspeed = 1 * ratio;
                this.yspeed = -1;
            } else {
                let ratio = deltaY / deltaX;
                this.xspeed = 1;
                this.yspeed = -1 * ratio;
            }
        }
    }

    public move() {
        // Checks if a plane has approached it's airport and sets appropriate landing speeds
        if (this.goingRight && this.landed == false && this.x >= this.targetX) {
            this.landed = true;
            this.xspeed = 0.5;
            this.yspeed = -0.25;
        } else if (!this.goingRight && this.landed == false && this.x <= this.targetX) {
            this.landed = true;
            this.xspeed = -0.5;
            this.yspeed = 0.25;
        }
        // Checks if a plane is leaving it's airport and sets appropriate departure speeds
        if (this.goingRight && this.landed == true && this.x >= this.targetX + 100) {
            this.landed = false;
            this.xspeed = 5;
            this.yspeed = -1;
        } else if (!this.goingRight && this.landed == true && this.x <= this.targetX - 100) {
            this.landed = false;
            this.xspeed = -5;
            this.yspeed = 1;
        }
        // Remove planes that have flown offscreen get removed
        if ((this.goingRight && this.x > window.innerWidth + 100) || (!this.goingRight && this.x < -100)) {
            let game = Game.getInstance();
            let i: number = game.planes.indexOf(this);
            if (i != -1) {
                game.planes.splice(i, 1);
            }
            this.div.remove();
            this.airport.upgrade();
        }
        // Unused code to check if planes have flown offscreen and resets them
        // if (this.goingRight && this.x > window.innerWidth + 100) {
        //     this.x = 0 - Math.random() * window.innerWidth;
        //     this.y = window.innerHeight + Math.random() * window.innerHeight;
        //     this.airport.upgrade();
        //     this.setTarget();
        //     this.determineFlightPath(this.x, this.y);
        // } else if (!this.goingRight && this.x < -100) {
        //     this.x = window.innerWidth + Math.random() * window.innerWidth;
        //     this.y = 0 - window.innerHeight - Math.random() * window.innerHeight;
        //     this.airport.upgrade();
        //     this.setTarget();
        //     this.determineFlightPath(this.x, this.y);
        // }
        this.x += this.xspeed;
        this.y += this.yspeed;
        // this.draw();
    }
}