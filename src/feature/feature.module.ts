import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { FeatureController } from "./feature.controller";
import { MyEventHandler } from "./handlers/event.handler";
import { FailureCommandHandler } from "./handlers/failure-command.handler";
import { TriggerEventCommandHandler } from "./handlers/trigger-event-command.handler";

@Module({
  imports: [CqrsModule],
  controllers: [FeatureController],
  providers: [
    MyEventHandler,
    FailureCommandHandler,
    TriggerEventCommandHandler,
  ],
})
export class FeautureModule {}
