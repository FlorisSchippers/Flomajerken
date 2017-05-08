/// <reference path="gameobject.ts"/>

class Airport extends GameObject {

    constructor(stage: number, x: number, y: number) {
        let image: string;
        switch (stage) {
            case 0:
                image = "airport0";
                break;
            case 1:
                image = "airport1";
                break;
            case 2:
                image = "airport2";
                break;
            case 3:
                image = "airport3";
                break;
            case 4:
                image = "airport4";
                break;
            case 5:
                image = "airport5";
                break;
            default:
                image = "airport0";
                break;
        }
        super(image, x, y);
    }
}