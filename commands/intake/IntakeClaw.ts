import { Command, Subsystem } from "../../baseTypes";

export const IntakeClaw = new Subsystem("IntakeClaw");

export class IntakeClawCommand extends Command {
  constructor(public isOpen: boolean) {
    super();
    this.type += "/IntakeClawCommand";
  }
}
