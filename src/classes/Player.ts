export class player {
    public name: string;
    readonly id: number;
    private country: string;
  
    constructor(n: string, i: number, c: string) {
      this.name = n;
      this.id = i;
      this.country = c;
    }
    play() {
      console.log(`${this.name} plays for ${this.country}`);
    }
  }