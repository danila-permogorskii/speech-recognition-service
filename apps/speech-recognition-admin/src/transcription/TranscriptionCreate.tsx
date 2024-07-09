import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TranscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="text" multiline source="text" />
        <NumberInput label="confidence" source="confidence" />
      </SimpleForm>
    </Create>
  );
};
