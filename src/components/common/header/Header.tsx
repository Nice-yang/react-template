import React, {Component,Suspense,FC,useCallback,useState} from 'react';
import {HashRouter,Route,Switch,Redirect,Link as RouterLink} from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link, { LinkProps } from '@material-ui/core/Link';
import {connect} from "react-redux";
import headerUseStyles from "./style";
import routes from "../../../routes/index";
const {menus} = routes;

interface HeaderProps {
    displayMode: string;
    totalPage?: number;
    calcTotalPage: () => void;
    initData: () => void;
}

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;
const Header: FC<HeaderProps> = (props) => {
    const classes = headerUseStyles();
    const [activeIndex,setActiveIndex] = useState(0);
    const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,index) =>{
        // event.preventDefault();
        // debugger;
        setActiveIndex(index);
        console.info(event,'event');
    },[activeIndex,setActiveIndex])
    console.log(menus,'menus')
    return (
        <Breadcrumbs maxItems={8} separator="" aria-label="breadcrumb" className={classes.nav}>
        {
                menus.filter(item => (item.key != '/app/remind')).map((item,index)=>{
                    return (
                        <LinkRouter color="inherit" to={item.key} key={index} className={` nav-item ${index==activeIndex?'active':""}`} onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>handleClick(e,index)}>
                            {item.title}
                        </LinkRouter>
                    )
                })
        }
        </Breadcrumbs>
    )
}


export default connect()(Header);