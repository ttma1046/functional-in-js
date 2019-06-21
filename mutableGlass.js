class MutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        this.amount = Math.max(this.amount - value, 0);
        return this;
    }
}

const mg1 = new MutableGlass('water', 100);
const mg2 = mg1.takeDrink(20);
