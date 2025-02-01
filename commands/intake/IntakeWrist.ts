import { Command, Subsystem } from "../../baseTypes";

enum IntakeWristPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export const IntakeWrist = new Subsystem("IntakeWrist");

export class IntakeWristCommand extends Command {
  constructor(public position: IntakeWristPosition) {
    super();
    this.type += "/IntakeWristCommand";
  }
}
