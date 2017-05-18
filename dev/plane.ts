/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    private goingRight: boolean;
    private xspeed: number;
    private yspeed: number;
    private user: string;
    private username: HTMLElement;
    private targetX: number;
    private landed: boolean;

    constructor(user: string, airportX: number, airportY: number) {
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
        this.landed = false;
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
    }

    public move() {
        if (this.goingRight && this.landed == false && this.x >= this.targetX) {
            this.landed = true;
            this.xspeed = 0.5;
            this.yspeed = -0.25;
            // this.targetX = 2 * window.innerWidth;
        } else if (!this.goingRight && this.landed == false && this.x <= this.targetX) {
            this.landed = true;
            this.xspeed = -0.5;
            this.yspeed = 0.25;
            // this.targetX = -2 * window.innerWidth;
        }
        if (this.goingRight && this.landed == true && this.x >= this.targetX + 100) {
            this.landed = false;
            this.xspeed = 5;
            this.yspeed = -1;
            // this.targetX = 2 * window.innerWidth;
        } else if (!this.goingRight && this.landed == true && this.x <= this.targetX - 100) {
            this.landed = false;
            this.xspeed = -5;
            this.yspeed = 1;
            // this.targetX = -2 * window.innerWidth;
        }
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