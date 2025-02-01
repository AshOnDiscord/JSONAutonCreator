import { Subsystem } from "../../baseTypes";
import type Pose2d from "../../util/Pose2d";

export const Drive = new Subsystem("Drive");

export class RelativeDriveCommand {
  type = "RelativeDriveCommand";
  power: Pose2d;
  isFieldCentric: boolean;
  constructor(power: Pose2d, isFieldCentric: boolean = false) {
    this.power = power;
    this.isFieldCentric = isFieldCentric;
  }
}
