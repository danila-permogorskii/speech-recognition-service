import { SortOrder } from "../../util/SortOrder";

export type TranscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  confidence?: SortOrder;
};
