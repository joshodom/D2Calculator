export class Class {
  Name: string;
  BaseStrength: number;
  BaseDexterity: number;

  constructor(name: string) {
    switch (name.toLowerCase()) {
      case "amazon": {
        this.getAmazonStats();
        break;
      }
      case "assassin": {
        this.getAssassinStats();
        break;
      }
      case "barbarian": {
        this.getBarbarianStats();
        break;
      }
      case "druid": {
        this.getDruidStats();
        break;
      }
      case "necromancer": {
        this.getNecromancerStats();
        break;
      }
      case "paladin": {
        this.getPaladinStats();
        break;
      }
      case "sorceress": {
        this.getSorceressStats();
        break;
      }
      default: {
        this.Name = "";
        this.BaseStrength = 0;
        this.BaseDexterity = 0;
      }
    }
  }

  getAmazonStats(): void {
    this.Name = "Amazon";
    this.BaseStrength = 20;
    this.BaseDexterity = 25;
  }
  getAssassinStats(): void {
    this.Name = "Assassin";
    this.BaseStrength = 20;
    this.BaseDexterity = 20;
  }
  getBarbarianStats(): void {
    this.Name = "Barbarian";
    this.BaseStrength = 30;
    this.BaseDexterity = 20;
  }
  getDruidStats(): void {
    this.Name = "Druid";
    this.BaseStrength = 15;
    this.BaseDexterity = 20;
  }
  getNecromancerStats(): void {
    this.Name = "Necromancer";
    this.BaseStrength = 15;
    this.BaseDexterity = 25;
  }
  getPaladinStats(): void {
    this.Name = "Paladin";
    this.BaseStrength = 25;
    this.BaseDexterity = 20;
  }
  getSorceressStats(): void {
    this.Name = "Sorceress";
    this.BaseStrength = 10;
    this.BaseDexterity = 25;
  }
}