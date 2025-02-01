import { Command, Subsystem } from "../../baseTypes";

export const Slides = new Subsystem("Slides");

export class SlidesCommand extends Command {
  type = "SlidesCommand";
  target: number;

  constructor(target: number) {
    super();
    this.target = target;
  }
}
export class ManualSlidesCommand extends Command {
  type = "ManualSlidesCommand";
  power: number;

  constructor(power: number) {
    super();
    this.power = power;
  }
}
