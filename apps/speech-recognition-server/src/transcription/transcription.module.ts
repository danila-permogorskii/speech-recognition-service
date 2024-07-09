import { Module } from "@nestjs/common";
import { TranscriptionModuleBase } from "./base/transcription.module.base";
import { TranscriptionService } from "./transcription.service";
import { TranscriptionController } from "./transcription.controller";
import { TranscriptionResolver } from "./transcription.resolver";

@Module({
  imports: [TranscriptionModuleBase],
  controllers: [TranscriptionController],
  providers: [TranscriptionService, TranscriptionResolver],
  exports: [TranscriptionService],
})
export class TranscriptionModule {}
