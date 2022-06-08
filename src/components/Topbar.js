import { TopbarStyles } from "../styles/TopbarStyles";
import { css } from "aphrodite";
import { Context } from "../Context";
import { useContext } from "react";

export default function Topbar(){

    const { editorRef, iframeRef, dark, setDark } = useContext(Context);

    const runCode = () => {
        const html = editorRef.current.textContent;
        iframeRef.current.src = `data:text/html;charset=utf-8,${encodeURI(html)}`;
    }

    const toggleDark = () => {
        setDark(!dark);
    }

    return (
        <div className={css(TopbarStyles.container)}>
            <button className={css(TopbarStyles.button)} onClick={() => toggleDark()}>{dark ? "Switch to Light" : "Switch to Dark"}</button>
            <button style={{backgroundColor:"#4285F4",color:"white"}} className={css(TopbarStyles.button)} onClick={() => runCode()}>Run</button>
        </div>
    )
}