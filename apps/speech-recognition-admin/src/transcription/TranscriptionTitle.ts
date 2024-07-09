import { Transcription as TTranscription } from "../api/transcription/Transcription";

export const TRANSCRIPTION_TITLE_FIELD = "id";

export const TranscriptionTitle = (record: TTranscription): string => {
  return record.id?.toString() || String(record.id);
};
