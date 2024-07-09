import { AudioFile as TAudioFile } from "../api/audioFile/AudioFile";

export const AUDIOFILE_TITLE_FIELD = "fileName";

export const AudioFileTitle = (record: TAudioFile): string => {
  return record.fileName?.toString() || String(record.id);
};
