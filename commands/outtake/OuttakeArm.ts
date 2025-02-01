import { Command, Subsystem } from "../../baseTypes";

export enum OuttakeArmPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export const OuttakeArm = new Subsystem("OuttakeArm");

export class OuttakeArmCommand extends Command {
  constructor(public position: OuttakeArmPosition) {
    super();
    this.type += "OuttakeArmCommand";
  }
}
