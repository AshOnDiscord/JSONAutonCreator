import { Command, Subsystem } from "../../baseTypes";

export const Slides = new Subsystem("Slides");

export class SlidesCommand extends Command {
  constructor(public target: number) {
    super();
    this.type += "SlidesCommand";
  }
}
export class ManualSlidesCommand extends Command {
  constructor(public power: number) {
    super();
    this.type += "ManualSlidesCommand";
  }
}
