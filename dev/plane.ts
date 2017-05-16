/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    private goingRight: boolean;
    private xspeed: number;
    private yspeed: number;
    private user: string;
    private username: HTMLElement;

    constructor(user: string) {
        let x = Math.round(Math.random());
        if (x == 0) {
            x = Math.random() * 10 * -500;
        } else {
            x = window.innerWidth + Math.random() * 10 * 500;
        }
        if (x > 0) {
            let y = (Math.random() * window.innerHeight) - 2 * x;
            super("leftplane", x, y);
            this.goingRight = false;
            this.xspeed = -5;
            this.yspeed = 2.5;
        } else {
            let y = (Math.random() * window.innerHeight) + 2 * x;
            super("rightplane", x, y);
            this.goingRight = true;
            this.xspeed = 5;
            this.yspeed = -2.5;
        }
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
    }

    public move() {
        if (this.goingRight && this.x > window.innerWidth + 100) {
            this.x = 60;
            // this.x = -50;
        } else if (!this.goingRight && this.x < -100) {
            this.x = window.innerWidth + 100;
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.draw();
    }
}