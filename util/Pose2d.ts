import { degreesToRadians, radiansToDegrees } from "./Angles";

export default class Pose2d {
  x: number;
  y: number;
  heading: number;

  constructor(x: number, y: number, heading: number) {
    this.x = x;
    this.y = y;
    this.heading = heading;
  }

  static fromRadians(x: number, y: number, heading: number) {
    return new Pose2d(x, y, radiansToDegrees(heading));
  }

  public radians() {
    return degreesToRadians(this.heading);
  }
}
