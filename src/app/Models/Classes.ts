import { Class } from './Class'
export class Classes {
    classList: Array<Class>;
    constructor() {
        this.classList = new Array<Class>();
        this.classList.push(new Class('Amazon'));
        this.classList.push(new Class('Assassin'));
        this.classList.push(new Class('Barbarian'));
        this.classList.push(new Class('Druid'));
        this.classList.push(new Class('Paladin'));
        this.classList.push(new Class('Necromancer'));
        this.classList.push(new Class('Sorceress'));
    }

    public get(): Array<Class> {
        return this.classList;
    }
}