import { Module } from "@nestjs/common";
import { AudioFileModuleBase } from "./base/audioFile.module.base";
import { AudioFileService } from "./audioFile.service";
import { AudioFileController } from "./audioFile.controller";
import { AudioFileResolver } from "./audioFile.resolver";

@Module({
  imports: [AudioFileModuleBase],
  controllers: [AudioFileController],
  providers: [AudioFileService, AudioFileResolver],
  exports: [AudioFileService],
})
export class AudioFileModule {}
