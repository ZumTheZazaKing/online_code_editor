import { StyleSheet } from "aphrodite";

export const BodyStyles = StyleSheet.create({
    container:{
        width: "50%",
        height: "90vh",
        backgroundColor:"whitesmoke",
        border:"none",
        overflow:"auto",
        outline:"none",
        transition:".2s ease-in"
    },
    editor:{
        padding:"5px",
        fontFamily:"Consolas",
        fontSize:"18px"
    },
    darkEditor:{
        backgroundColor:"#212421",
        color:"white"
    },
    iframe:{
        backgroundColor:"white"
    },
    bar:{
        width:"5px",
        backgroundColor:"lightgrey",
        height:"90vh",
        cursor:"w-resize"
    }
})