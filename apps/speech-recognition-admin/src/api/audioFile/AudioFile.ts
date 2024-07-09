export type AudioFile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileName: string | null;
  filePath: string | null;
  uploadedAt: Date | null;
  status?: "Option1" | null;
};
