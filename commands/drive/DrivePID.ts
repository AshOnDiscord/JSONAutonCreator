import { Command, Subsystem } from "../../baseTypes";
import type Pose2d from "../../util/Pose2d";

export class PIDManagerSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/PIDManager";
  }
}
export const PIDManager = new PIDManagerSubsystem();

export class DrivePIDCommand extends Command {
  constructor(
    public target: Pose2d,
    public tolerance: { translation: number; rotation: number } = {
      translation: 1.5,
      rotation: 5.0,
    }
  ) {
    super();
    this.type += "/DrivePIDCommand";
  }
}
