import { Command, Subsystem } from "../../baseTypes";

export const IntakeClaw = new Subsystem("IntakeClaw");

export class IntakeClawCommand extends Command {
  type = "IntakeClawCommand";
  isOpen: boolean;

  constructor(isOpen: boolean) {
    super();
    this.isOpen = isOpen;
  }
}
