import { StyleSheet } from "aphrodite";

export const TopbarStyles = StyleSheet.create({
    container:{
        width: "100%",
        height:"10vh",
        display: 'flex',
        alignItems: 'center',
    },
    button:{
        padding:"5px 10px",
        fontWeight:"bold",
        borderRadius:"5px",
        border:"none",
        outline:"none",
        margin:"0 10px",
        cursor:"pointer"
    }
})