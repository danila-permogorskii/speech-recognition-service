import { SortOrder } from "../../util/SortOrder";

export type AudioFileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  uploadedAt?: SortOrder;
  status?: SortOrder;
};
