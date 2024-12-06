export class player {
    constructor(n, i, c) {
        this.name = n;
        this.id = i;
        this.country = c;
    }
    play() {
        console.log(`${this.name} plays for ${this.country}`);
    }
}
