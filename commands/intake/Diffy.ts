import { Command, Subsystem } from "../../baseTypes";

export enum DiffyPosition {
  BASE,
  EXTENDED,
  FLOOR,
  SPECIMEN,
  SWEEP,
}

export class DiffySubsystem extends Subsystem {
  constructor() {
    super();
    this.type += "/Intake/Diffy";
  }
}
export const Diffy = new DiffySubsystem();

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
