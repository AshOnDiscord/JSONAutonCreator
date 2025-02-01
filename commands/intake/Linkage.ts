import { Command, Subsystem } from "../../baseTypes";

export class LinkageSubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Intake/Linkage";
  }
}
export const Linkage = new LinkageSubsystem();

export class LinkageCommand extends Command {
  constructor(public target: number) {
    super();
    this.type += "/LinkageCommand";
  }
}
