import { Command, Subsystem } from "../../baseTypes";

export enum OuttakeWristPosition {
  BASE,
  SPECIMEN,
  BASKET,
  OUT,
  HUMAN,
}

export class OuttakeWristSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Outtake/Wrist";
  }
}
export const OuttakeWrist = new OuttakeWristSubsystem();

export class OuttakeWristCommand extends Command {
  constructor(public position: OuttakeWristPosition) {
    super();
    this.type += "OuttakeWristCommand";
  }
}
