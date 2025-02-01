import { Command, Subsystem } from "../../baseTypes";

export const Linkage = new Subsystem("Linkage");

export class LinkageCommand extends Command {
  type = "LinkageCommand";
  target: number;

  constructor(target: number) {
    super();
    this.target = target;
  }
}
