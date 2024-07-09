import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TranscriptionService } from "./transcription.service";
import { TranscriptionControllerBase } from "./base/transcription.controller.base";

@swagger.ApiTags("transcriptions")
@common.Controller("transcriptions")
export class TranscriptionController extends TranscriptionControllerBase {
  constructor(protected readonly service: TranscriptionService) {
    super(service);
  }
}
