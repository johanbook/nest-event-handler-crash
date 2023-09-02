import { CommandBus, EventsHandler, IEventHandler } from "@nestjs/cqrs";

import { FailureCommand } from "../commands/failure.command";
import { MyEvent } from "../events/event";

@EventsHandler(MyEvent)
export class MyEventHandler implements IEventHandler<MyEvent> {
  constructor(private readonly commandBus: CommandBus) {}

  handle() {
    const command = new FailureCommand();
    this.commandBus.execute(command);
  }
}
