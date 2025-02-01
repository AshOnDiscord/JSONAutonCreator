import { Command, Subsystem } from "../../baseTypes";

enum OuttakeWristPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export const OuttakeWrist = new Subsystem("OuttakeWrist");

export class OuttakeWristCommand extends Command {
  type = "OuttakeArmCommand";
  position: OuttakeWristPosition;

  constructor(position: OuttakeWristPosition) {
    super();
    this.position = position;
  }
}
