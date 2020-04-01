import React, {Component,Suspense,FC} from 'react';
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Header from "./components/common/header/Header";
import routes from "./routes/index";
const { menus } = routes;
interface AppProps {
    displayMode: string;
    totalPage?: number;
    calcTotalPage: () => void;
    initData: () => void;
}
const App: FC<AppProps> = (props) => {
    return (
        <div className="App">
        <HashRouter>
        {/* header导航*/}
          <Header />
          <Suspense fallback="正在加载中...">
            <Switch>
              {/* '看板', '进度管理', '台座台账', '监控管理', '设置' */}
              {/* 嵌套路由不要加exact属性 父级路由加上，这里这几个头部菜单路由如果加上该属性，它下面的子路由将不会生效 */}
              {
                menus.filter(item=>item.redirect).map(item=> (<Route exact path={item.key} key={item.key} render={() => <Redirect to={item.redirect?item.redirect:item.key} push />} />))
              }
              {
                menus.map(item=> (<Route path={item.key}  component={item.component} key={item.key}></Route>))
              }
            </Switch>
          </Suspense>
        </HashRouter>
      </div>
    )
}


export default connect()(App);