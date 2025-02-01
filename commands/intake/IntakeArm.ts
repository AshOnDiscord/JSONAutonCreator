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
  constructor(public position: IntakeArmPosition) {
    super();
    this.type += "/IntakeArmCommand";
  }
}
