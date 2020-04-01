import {createUseStyles} from "react-jss";

const styles = {
    nav: {
        margin:0,
        width: "100%",
        height: 60,
        borderBottom: "1px solid #dcdce5",
        background: "#648fd4",
        "& ol li:not(.MuiBreadcrumbs-separator)":{
            color: "#fff",
            borderRight: "1px",
            width: "120px!important",
            height: "60px",
            lineHeight: "60px",
            margin: 0,
            cursor: "pointer",
            position: "relative",
            boxSizing: "border-box",
            textAlign:"center",
            "& a":{
                textDecoration: "none",
                fontSize:"14px"
            },
            "& .nav-item":{
                display:"inline-block",
                width:"120px",
                height: "60px",
                lineHeight: "60px",
            },
            "& .nav-item.active":{
                background:"#6495f2"
            }
        }
    },
};

const useStyles = createUseStyles(styles, {name: "header"});
export default useStyles;