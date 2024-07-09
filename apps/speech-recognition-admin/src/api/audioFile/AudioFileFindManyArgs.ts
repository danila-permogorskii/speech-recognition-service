import { AudioFileWhereInput } from "./AudioFileWhereInput";
import { AudioFileOrderByInput } from "./AudioFileOrderByInput";

export type AudioFileFindManyArgs = {
  where?: AudioFileWhereInput;
  orderBy?: Array<AudioFileOrderByInput>;
  skip?: number;
  take?: number;
};
