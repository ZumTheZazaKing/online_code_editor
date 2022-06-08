import Topbar from "./components/Topbar";
import Editor from "./components/Editor";
import Iframe from "./components/Iframe";
import Bar from "./components/Bar";
import { Context } from "./Context";
import { useRef, useState } from "react";

function App() {

  const editorRef = useRef();
  const iframeRef = useRef();
  const barRef = useRef();
  const [dark, setDark] = useState(false);

  return (
    <div className="App">
      <Context.Provider value={{editorRef, iframeRef, barRef, dark, setDark}}>
        <Topbar/>
        <div className="body">
          <Editor/>
          <Bar/>
          <Iframe/>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
