import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TranscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <NumberInput label="confidence" source="confidence" />
      </SimpleForm>
    </Edit>
  );
};
