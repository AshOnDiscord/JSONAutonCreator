import { Command, Subsystem } from "../../baseTypes";

enum IntakeArmPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export const IntakeArm = new Subsystem("IntakeArm");

export class IntakeArmCommand extends Command {
  type = "IntakeArmCommand";
  position: IntakeArmPosition;

  constructor(position: IntakeArmPosition) {
    super();
    this.position = position;
  }
}
