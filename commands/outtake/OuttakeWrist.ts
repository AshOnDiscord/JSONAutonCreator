import { Command, Subsystem } from "../../baseTypes";

export enum OuttakeWristPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export const OuttakeWrist = new Subsystem("OuttakeWrist");

export class OuttakeWristCommand extends Command {
  constructor(public position: OuttakeWristPosition) {
    super();
    this.type += "OuttakeWristCommand";
  }
}
