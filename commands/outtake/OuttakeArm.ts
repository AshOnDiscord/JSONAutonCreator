import { Command, Subsystem } from "../../baseTypes";

export enum OuttakeArmPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export class OuttakeArmSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Outtake/Arm";
  }
}
export const OuttakeArm = new OuttakeArmSubsystem();

export class OuttakeArmCommand extends Command {
  constructor(public position: OuttakeArmPosition) {
    super();
    this.type += "OuttakeArmCommand";
  }
}
