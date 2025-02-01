export abstract class Base {
  abstract type: string;
}

export class Subsystem extends Base {
  type = "Subsystem";
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }
}

export abstract class Command extends Base {
  abstract type: string;
}

export type CommandGroups =
  | "SequentialCommandGroup"
  | "ParallelCommandGroup"
  | "ParallelRaceGroup"
  | "ParallelDeadlineGroup";

export class CommandGroup extends Command {
  type: CommandGroups;
  children: Command[];
  subsystems: Subsystem[];

  constructor(
    type: CommandGroups,
    children: Command[] = [],
    subsystems: Subsystem[] = []
  ) {
    super();
    this.type = type;
    this.children = children;
    this.subsystems = subsystems;
  }
}

export interface Schema {
  children: Command[];
}
