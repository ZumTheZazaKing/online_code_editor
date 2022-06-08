import { BodyStyles } from "../styles/BodyStyles";
import { css } from "aphrodite";
import { Context } from "../Context";
import { useContext } from "react";

export default function Iframe(){

    const { iframeRef } = useContext(Context);

    return (
        <iframe 
            id="iframe"
            ref={iframeRef}
            className={css([
                BodyStyles.container, 
                BodyStyles.iframe
            ])} 
            style={{width:"50%"}}
            src="" 
            title="output"
        />
    )
}