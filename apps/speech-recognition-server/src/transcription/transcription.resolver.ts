import * as graphql from "@nestjs/graphql";
import { TranscriptionResolverBase } from "./base/transcription.resolver.base";
import { Transcription } from "./base/Transcription";
import { TranscriptionService } from "./transcription.service";

@graphql.Resolver(() => Transcription)
export class TranscriptionResolver extends TranscriptionResolverBase {
  constructor(protected readonly service: TranscriptionService) {
    super(service);
  }
}
