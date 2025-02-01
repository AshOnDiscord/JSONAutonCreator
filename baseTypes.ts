export abstract class Base {
  abstract type: string;
}

export abstract class Subsystem extends Base {
  type = "Subsystem";
}

export abstract class Command extends Base {
  type: string = "Command";
}

export abstract class CommandGroup extends Command {
  type = "CommandGroup";
  abstract commands: Command[];
  abstract subsystems: Subsystem[];
}

export class SequentialCommandGroup extends CommandGroup {
  constructor(
    public commands: Command[] = [],
    public subsystems: Subsystem[] = []
  ) {
    super();
    this.type += "/SequentialCommandGroup";
  }
}

export class ParallelCommandGroup extends CommandGroup {
  constructor(
    public commands: Command[] = [],
    public subsystems: Subsystem[] = []
  ) {
    super();
    this.type += "/ParallelCommandGroup";
  }
}

export class ParallelRaceGroup extends CommandGroup {
  constructor(
    public commands: Command[] = [],
    public subsystems: Subsystem[] = []
  ) {
    super();
    this.type += "/ParallelRaceGroup";
  }
}

export class ParallelDeadlineGroup extends CommandGroup {
  constructor(
    public commands: Command[] = [],
    public subsystems: Subsystem[] = []
  ) {
    super();
    this.type += "/ParallelDeadlineGroup";
  }
}

export interface Schema {
  commands: Command[];
}
