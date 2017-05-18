/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    private user: string;
    private username: HTMLElement;
    private goingRight: boolean;
    private xspeed: number;
    private yspeed: number;
    private targetX: number;
    private landed: boolean;

    constructor(user: string, airportX: number, airportY: number) {
        // Create plane gameobject that can 50/50 randomly go left or right
        // The angle of flight is determined by evaluating the position of the plane according to it's airport
        let x = Math.round(Math.random());
        if (x == 0) {
            x = window.innerWidth + Math.random() * window.innerWidth;
        } else {
            x = 0 - window.innerWidth - Math.random() * window.innerWidth;
        }
        if (x > 0) {
            let y = 0 - window.innerHeight - Math.random() * window.innerHeight;
            super("leftplane", x, y);
            this.goingRight = false;
            let targetX = airportX + 330;
            let targetY = airportY + 130;
            this.targetX = targetX;
            let deltaX = x - targetX;
            let deltaY = targetY - y;
            if (deltaX > deltaY) {
                let ratio = deltaX / deltaY;
                this.xspeed = -1 * ratio;
                this.yspeed = 1;
            } else {
                let ratio = deltaY / deltaX;
                this.xspeed = -1;
                this.yspeed = 1 * ratio;
            }
        } else {
            let y = window.innerHeight + Math.random() * window.innerHeight;
            super("rightplane", x, y);
            this.goingRight = true;
            let targetX = airportX + 230;
            let targetY = airportY + 180;
            this.targetX = targetX;
            let deltaX = targetX - x;
            let deltaY = y - targetY;
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
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.landed = false;
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
        // Checks if planes have flown offscreen and resets them
        if (this.goingRight && this.x > window.innerWidth + 100) {
            this.x = 0 - window.innerWidth - Math.random() * window.innerWidth;
            this.y = window.innerHeight + Math.random() * window.innerHeight;
        } else if (!this.goingRight && this.x < -100) {
            this.x = window.innerWidth + Math.random() * window.innerWidth;
            let y = 0 - window.innerHeight - Math.random() * window.innerHeight;
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    }
}