import { Subsystem } from "../../baseTypes";
import type Pose2d from "../../util/Pose2d";

export const PIDManager = new Subsystem("PIDManager");

export class DrivePIDCommand {
  type = "DrivePIDCommand";
  target: Pose2d;
  tolerance: {
    translation: number;
    rotation: number;
  };
  constructor(
    target: Pose2d,
    tolerance: { translation: number; rotation: number } = {
      translation: 1.5,
      rotation: 5.0,
    }
  ) {
    this.target = target;
    this.tolerance = tolerance;
  }
}
