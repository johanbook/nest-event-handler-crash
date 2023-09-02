import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";

import { TriggerEventCommand } from "../commands/trigger-event.command";
import { MyEvent } from "../events/event";

@CommandHandler(TriggerEventCommand)
export class TriggerEventCommandHandler
  implements ICommandHandler<TriggerEventCommandHandler, void>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute() {
    console.log("Triggering event");

    const event = new MyEvent();
    this.eventBus.publish(event);
  }
}
