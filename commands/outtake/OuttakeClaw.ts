import { Command, Subsystem } from "../../baseTypes";

export const OuttakeClaw = new Subsystem("OuttakeClaw");

export class OuttakeClawCommand extends Command {
  constructor(public isOpen: boolean) {
    super();
    this.type += "OuttakeClawCommand";
  }
}
