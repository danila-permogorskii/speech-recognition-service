import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioFileService } from "./audioFile.service";
import { AudioFileControllerBase } from "./base/audioFile.controller.base";

@swagger.ApiTags("audioFiles")
@common.Controller("audioFiles")
export class AudioFileController extends AudioFileControllerBase {
  constructor(protected readonly service: AudioFileService) {
    super(service);
  }
}
