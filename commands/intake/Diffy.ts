import { Command, Subsystem } from "../../baseTypes";

enum DiffyPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export const Diffy = new Subsystem("Diffy");

export class DiffyCommand extends Command {
  constructor(public state: DiffyPosition) {
    super();
    this.type += "/DiffyCommand";
  }
}

export class ManualDiffyCommand extends Command {
  constructor(public pitch: number, public roll: number) {
    super();
    this.type += "/ManualDiffyCommand";
  }
}
