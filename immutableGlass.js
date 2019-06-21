class ImmutableGlass {
    constructor(content, amount) {
        this.content = content;
        this.amount = amount;
    }

    takeDrink(value) {
        return new ImmutableGlass(this.content, Math.max(this.amount - value, 0));
    }
}

const ig1 = new ImmutableGlass('water', 100);
const ig2 = ig1.takeDrink(20);

console.log(ig1 === ig2);
console.log(ig1.amount === ig2.amount);