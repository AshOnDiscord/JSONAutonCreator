import { Command, Subsystem } from "../../baseTypes";

export class OuttakeClawSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Outtake/Claw";
  }
}
export const OuttakeClaw = new OuttakeClawSubsystem();

export class OuttakeClawCommand extends Command {
  constructor(public isOpen: boolean) {
    super();
    this.type += "OuttakeClawCommand";
  }
}
