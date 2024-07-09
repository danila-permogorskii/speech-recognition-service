import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TranscriptionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  confidence?: FloatNullableFilter;
};
