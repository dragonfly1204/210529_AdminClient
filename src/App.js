import React, { Component } from 'react';
import { Button, message } from "antd";
import { Switch, Route, BrowserRouter} from "react-router-dom";
import './App.less';
import Admin from './pages/Admin';
import Login from './pages/Login';
export default class App extends Component {
    handleClick = () => {
        message.success("成功啦！！")
    }
    render() {
        return (
            // <div>
            //     <Button type="primary" onClick={this.handleClick}> Primary</Button>
            // </div>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
