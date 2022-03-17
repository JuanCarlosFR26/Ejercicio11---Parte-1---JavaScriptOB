class Figura {
    _color;
    constructor(color) {
        this._color = color;
    }

    setColor(color) {
        this._color = color;
    }

    getColor() {
        return this._color;
    }
}

const figura1 = new Figura();
figura1.setColor("Rojo");
console.log(figura1.getColor());