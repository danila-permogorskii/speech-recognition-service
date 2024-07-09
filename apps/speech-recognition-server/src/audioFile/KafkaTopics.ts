import { registerEnumType } from "@nestjs/graphql";

export enum KafkaTopics {
    AudioFileUploaded = "audio_file_uploaded",
    TranscriptionComplete = "transcription_complete"
}

registerEnumType(KafkaTopics, {
    name: "KafkaTopics",
  });