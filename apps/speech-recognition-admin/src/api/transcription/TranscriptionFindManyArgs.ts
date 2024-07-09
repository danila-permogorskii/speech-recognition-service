import { TranscriptionWhereInput } from "./TranscriptionWhereInput";
import { TranscriptionOrderByInput } from "./TranscriptionOrderByInput";

export type TranscriptionFindManyArgs = {
  where?: TranscriptionWhereInput;
  orderBy?: Array<TranscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
