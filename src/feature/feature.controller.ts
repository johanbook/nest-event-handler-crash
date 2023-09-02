import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { FailureCommand } from "./commands/failure.command";
import { TriggerEventCommand } from "./commands/trigger-event.command";

@Controller()
export class FeatureController {
  constructor(private commandBus: CommandBus) {}

  @Post("/error-directly")
  async errorDirectly(@Body() command: FailureCommand): Promise<null> {
    return await this.commandBus.execute(command);
  }

  @Post("/error-through-event-handler")
  async errorThroughEventHandler(
    @Body() command: TriggerEventCommand,
  ): Promise<null> {
    return await this.commandBus.execute(command);
  }
}
