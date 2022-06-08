import { css } from "aphrodite";
import { BodyStyles } from "../styles/BodyStyles";
import { useContext } from "react";
import { Context } from "../Context";

export default function Bar(){

    const { editorRef, barRef } = useContext(Context);

    return(
        <div 
            ref={barRef}
            className={css(BodyStyles.bar)} 
            title="Click & Drag"></div>
    )
}