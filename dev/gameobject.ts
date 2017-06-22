class GameObject {

    public name: string;
    public div: HTMLElement;
    public x: number;
    public y: number;

    constructor(name: string, x: number, y: number) {
        // Append all gameobjects to the body
        this.name = name;
        this.div = document.createElement(name);
        document.body.appendChild(this.div);

        this.x = x;
        this.y = y;
        this.draw();
    }

    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}