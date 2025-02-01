import { Command, Subsystem } from "../../baseTypes";
import type Pose2d from "../../util/Pose2d";

export const Drive = new Subsystem("Drive");

export class RelativeDriveCommand extends Command {
  constructor(public power: Pose2d, public isFieldCentric: boolean = false) {
    super();
    this.type += "/RelativeDriveCommand";
  }
}
