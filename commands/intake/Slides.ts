import { Command, Subsystem } from "../../baseTypes";

export const Linkage = new Subsystem("Linkage");

export class LinkageCommand extends Command {
  constructor(public target: number) {
    super();
    this.type += "/LinkageCommand";
  }
}
