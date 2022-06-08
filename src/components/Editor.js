import { BodyStyles } from "../styles/BodyStyles";
import { css } from "aphrodite";
import { Context } from "../Context";
import { useContext } from "react";

export default function Editor(){

    const { editorRef, dark } = useContext(Context);

    return (
        <div 
            id="editor"
            ref={editorRef} 
            className={css([
                BodyStyles.container, 
                BodyStyles.editor,
                dark ? BodyStyles.darkEditor : ""
            ])} 
            style={{width:"50%"}}
            contentEditable=""
            autoCorrect="false"
        >
            Write your code here...
        </div>
    )
}