import { Command } from "../../baseTypes";

export class WaitCommand extends Command {
  constructor(public duration: number) {
    super();
    this.type += "/WaitCommand";
  }
}
