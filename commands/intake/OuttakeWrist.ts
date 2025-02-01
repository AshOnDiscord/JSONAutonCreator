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
  type = "IntakeArmCommand";
  position: IntakeWristPosition;

  constructor(position: IntakeWristPosition) {
    super();
    this.position = position;
  }
}
