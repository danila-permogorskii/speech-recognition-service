import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranscriptionServiceBase } from "./base/transcription.service.base";

@Injectable()
export class TranscriptionService extends TranscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
