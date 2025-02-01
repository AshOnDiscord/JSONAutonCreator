import { Command, Subsystem } from "../../baseTypes";

export class SlidesSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Outtake/Slides";
  }
}
export const Slides = new SlidesSubsystem();

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
