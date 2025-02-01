import { Command, Subsystem } from "../../baseTypes";

export const OuttakeClaw = new Subsystem("OuttakeClaw");

export class OuttakeClawCommand extends Command {
  type = "OuttakeClawCommand";
  isOpen: boolean;

  constructor(isOpen: boolean) {
    super();
    this.isOpen = isOpen;
  }
}
