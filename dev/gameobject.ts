abstract class GameObject {

    protected div: HTMLElement;
    public x: number;
    public y: number;

    constructor(name: string, x: number, y: number) {
        this.div = document.createElement(name);
        document.body.appendChild(this.div);

        this.x = x;
        this.y = y;
        this.draw();
    }

    protected draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}