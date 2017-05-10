/// <reference path="gameobject.ts"/>

class Plane extends GameObject {

    private goingRight: boolean;
    private speed: number;
    private user: string;
    private username: HTMLElement;

    constructor(user: string) {
        let x = Math.round(Math.random());
        if (x == 0) {
            x = Math.random() * 10 * -500;
        } else {
            x = window.innerWidth + Math.random() * 10 * 500;
        }
        let y = Math.random() * window.innerHeight;
        if (x > 0) {
            super("leftplane", x, y);
            this.goingRight = false;
            this.speed = -5;
        } else {
            super("rightplane", x, y);
            this.goingRight = true;
            this.speed = 5;
        }
        this.user = user;
        this.username = document.createElement("planeusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
    }

    public move() {
        if (this.goingRight && this.x > window.innerWidth + 100) {
            this.x = -50;
        } else if (!this.goingRight && this.x < -100) {
            this.x = window.innerWidth + 100;
        }
        this.x += this.speed;
        this.draw();
    }
}