import { Command, Subsystem } from "../../baseTypes";

export enum IntakeWristPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export class IntakeWristSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Intake/Wrist";
  }
}
export const IntakeWrist = new IntakeWristSubsystem();

export class IntakeWristCommand extends Command {
  constructor(public position: IntakeWristPosition) {
    super();
    this.type += "/IntakeWristCommand";
  }
}
