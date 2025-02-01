import { ParallelCommandGroup, type Schema } from "./baseTypes";
import { Diffy, DiffyCommand, DiffyPosition } from "./commands/intake/Diffy";
import {
  IntakeArm,
  IntakeArmCommand,
  IntakeArmPosition,
} from "./commands/intake/IntakeArm";
import { Linkage, LinkageCommand } from "./commands/intake/Slides";
import { WaitCommand } from "./commands/misc/WaitCommand";

const BarSide: Schema = {
  commands: [
    new ParallelCommandGroup(
      [
        new LinkageCommand(0.0),
        new IntakeArmCommand(IntakeArmPosition.EXTENDED),
        new DiffyCommand(DiffyPosition.BASE),
      ],
      [Linkage, IntakeArm, Diffy]
    ),
    new WaitCommand(750),
    new IntakeArmCommand(IntakeArmPosition.BASE),
  ],
};
const output = JSON.stringify(BarSide, null, 2);
console.log(output);
Bun.write("BarSide.json", output);
