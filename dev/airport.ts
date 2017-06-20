/// <reference path="gameobject.ts"/>

class Airport extends GameObject {

    public stage: number = 0;
    public user: string;
    public username: HTMLElement;

    constructor(user: string, x: number, y: number) {
        super("airport", x, y);
        this.user = user;
        this.username = document.createElement("airportusername");
        this.username.innerHTML = this.user;
        this.div.appendChild(this.username);
        this.div.setAttribute("id", this.user);
        this.div.style.display = 'none';
    }

    public upgrade(): void {
        this.stage++;
        switch (this.stage) {
            case 0:
                this.div.style.backgroundImage = "url('images/airport0.png')";
                this.div.style.width = "379px";
                this.div.style.height = "224px";
                break;
            case 1:
                this.div.style.backgroundImage = "url('images/airport1.png')";
                this.div.style.width = "448px";
                this.div.style.height = "224px";
                break;
            case 2:
                this.div.style.backgroundImage = "url('images/airport2.png')";
                this.div.style.width = "480px";
                this.div.style.height = "257px";
                break;
            case 3:
                this.div.style.backgroundImage = "url('images/airport3.png')";
                this.div.style.width = "479px";
                this.div.style.height = "256px";
                break;
            case 4:
                this.div.style.backgroundImage = "url('images/airport4.png')";
                this.div.style.width = "511px";
                this.div.style.height = "256px";
                break;
            case 5:
                this.div.style.backgroundImage = "url('images/airport5.png')";
                this.div.style.width = "639px";
                this.div.style.height = "304px";
                break;
        }
    }
}