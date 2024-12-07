
import {isPlayer} from "../interfaces/IsPlayer.js"

export class player implements isPlayer {
    public name: string;
    readonly id: number;
    public country: string; //if private it will show error because of the interface
  
    constructor(n: string, i: number, c: string) {
      this.name = n;
      this.id = i;
      this.country = c;
    }
    play() {
      console.log(`${this.name} plays for ${this.country}`);
    }
  }