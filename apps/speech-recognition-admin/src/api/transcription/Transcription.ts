export type Transcription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  confidence: number | null;
};
