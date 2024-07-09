import * as graphql from "@nestjs/graphql";
import { AudioFileResolverBase } from "./base/audioFile.resolver.base";
import { AudioFile } from "./base/AudioFile";
import { AudioFileService } from "./audioFile.service";

@graphql.Resolver(() => AudioFile)
export class AudioFileResolver extends AudioFileResolverBase {
  constructor(protected readonly service: AudioFileService) {
    super(service);
  }
}
