import { Command, Subsystem } from "../../baseTypes";

export enum IntakeArmPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export class IntakeArmSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Intake/Arm";
  }
}
export const IntakeArm = new IntakeArmSubsystem();

export class IntakeArmCommand extends Command {
  constructor(public position: IntakeArmPosition) {
    super();
    this.type += "/IntakeArmCommand";
  }
}
