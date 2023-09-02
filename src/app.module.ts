import { Module } from "@nestjs/common";

import { FeautureModule } from "./feature/feature.module";

@Module({
  imports: [FeautureModule],
  providers: [],
})
export class AppModule {}
