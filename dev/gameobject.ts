abstract class GameObject {

    public name: string;
    protected div: HTMLElement;
    public x: number;
    public y: number;

    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.div = document.createElement(name);
        document.body.appendChild(this.div);

        this.x = x;
        this.y = y;
        this.draw();
    }

    protected draw(): void {
        if (this.name == "leftplane") {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)rotate(-35deg)";
        } else if (this.name == "rightplane") {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)rotate(-35deg)";
        } else {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        }
    }
}