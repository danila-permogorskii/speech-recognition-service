import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TranscriptionList } from "./transcription/TranscriptionList";
import { TranscriptionCreate } from "./transcription/TranscriptionCreate";
import { TranscriptionEdit } from "./transcription/TranscriptionEdit";
import { TranscriptionShow } from "./transcription/TranscriptionShow";
import { AudioFileList } from "./audioFile/AudioFileList";
import { AudioFileCreate } from "./audioFile/AudioFileCreate";
import { AudioFileEdit } from "./audioFile/AudioFileEdit";
import { AudioFileShow } from "./audioFile/AudioFileShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SpeechRecognition"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transcription"
          list={TranscriptionList}
          edit={TranscriptionEdit}
          create={TranscriptionCreate}
          show={TranscriptionShow}
        />
        <Resource
          name="AudioFile"
          list={AudioFileList}
          edit={AudioFileEdit}
          create={AudioFileCreate}
          show={AudioFileShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
