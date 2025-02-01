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
  type = "DiffyCommand";
  state: DiffyPosition;

  constructor(state: DiffyPosition) {
    super();
    this.state = state;
  }
}

export class ManualDiffyCommand extends Command {
  type = "ManualDiffyCommand";
  pitch: number;
  roll: number;

  constructor(pitch: number, roll: number) {
    super();
    this.pitch = pitch;
    this.roll = roll;
  }
}
