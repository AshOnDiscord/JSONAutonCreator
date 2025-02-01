import { Command, Subsystem } from "../../baseTypes";

export class IntakeClawSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Intake/Claw";
  }
}
export const IntakeClaw = new IntakeClawSubsystem();

export class IntakeClawCommand extends Command {
  constructor(public isOpen: boolean) {
    super();
    this.type += "/IntakeClawCommand";
  }
}
