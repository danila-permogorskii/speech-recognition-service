import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AudioFileWhereInput = {
  id?: StringFilter;
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  status?: "Option1";
};
