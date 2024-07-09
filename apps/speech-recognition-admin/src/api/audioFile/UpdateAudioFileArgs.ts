import { AudioFileWhereUniqueInput } from "./AudioFileWhereUniqueInput";
import { AudioFileUpdateInput } from "./AudioFileUpdateInput";

export type UpdateAudioFileArgs = {
  where: AudioFileWhereUniqueInput;
  data: AudioFileUpdateInput;
};
