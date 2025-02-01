import { Command, Subsystem } from "../../baseTypes";
import type Pose2d from "../../util/Pose2d";

export class DriveSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Drive";
  }
}
export const Drive = new DriveSubsystem();

export class RelativeDriveCommand extends Command {
  constructor(public power: Pose2d, public isFieldCentric: boolean = false) {
    super();
    this.type += "/RelativeDriveCommand";
  }
}
