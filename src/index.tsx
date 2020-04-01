import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {JssProvider, ThemeProvider} from "react-jss";
import store from "./store/index";
import theme from "./styles/theme";
import "./styles/styles";
import  App from "./App"
ReactDom.render(
    <Provider store={store}>
        <JssProvider>
            <ThemeProvider {...{theme}}>
                <App />
            </ThemeProvider>
        </JssProvider>
    </Provider>,
 document.querySelector("#center"));
