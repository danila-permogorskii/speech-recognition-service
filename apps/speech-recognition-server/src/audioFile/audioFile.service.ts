import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioFileServiceBase } from "./base/audioFile.service.base";

@Injectable()
export class AudioFileService extends AudioFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
