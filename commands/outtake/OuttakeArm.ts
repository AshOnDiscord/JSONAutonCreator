import { Command, Subsystem } from "../../baseTypes";

enum OuttakeArmPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export const OuttakeArm = new Subsystem("OuttakeArm");

export class OuttakeArmCommand extends Command {
  type = "OuttakeArmCommand";
  position: OuttakeArmPosition;

  constructor(position: OuttakeArmPosition) {
    super();
    this.position = position;
  }
}
