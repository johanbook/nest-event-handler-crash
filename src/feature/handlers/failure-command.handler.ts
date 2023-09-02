import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

import { FailureCommand } from "../commands/failure.command";

@CommandHandler(FailureCommand)
export class FailureCommandHandler
  implements ICommandHandler<FailureCommand, void>
{
  async execute() {
    console.log("Throwing error");

    throw new Error("Triggered by FailureCommandHandler");
  }
}
