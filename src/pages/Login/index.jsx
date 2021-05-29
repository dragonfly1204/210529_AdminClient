import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './imgs/logo.png'
import './index.less'

export default class Login extends Component {
    // 提交表单
    onFinish = (value) => {
        const {username, password} = value ;
        console.log(`接收到的数据为: 用户名:${username} ,密码:${password}`);
    }
    // 对密码进行自定义验证
    validatorPwd = (rule, value, callback)=>{
        // 规则
        const pwdReg = /^[a-zA-Z0-9_]+$/ ;
        if (!value) {
            return Promise.reject('密码不能为空');
        } 
        if (!pwdReg.test(value)) {
            return Promise.reject('密码必须是英文、数字或下划线组成');
        }
        if (value.length < 4) {
            return Promise.reject('密码小于4位');
        } 
        if (value.length > 12) {
            return Promise.reject('密码大于12位');
        }
        return Promise.resolve();
    }

    render() {
        return (
            <div className="login">
               <div className="login-header">
                    <img src={logo} alt="logo"/>   
                    <h1>后台管理系统</h1>
                </div> 
               <div className="login-content">
                   <h1>用户登录</h1>
                    <Form
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, whitespace: true, message: '必须输入用户名' }, 
                                { min: 4, message: '用户名必须大于4位' },
                                { max: 12, message: '用户名必须小于12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数组或下划线组成'}
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { validator: this.validatorPwd }, 
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                    </Form>
               </div>
            </div>
        )
    }
}
/*
    用户名/密码的的合法性要求 
        1). 必须输入 
        2). 必须大于等于 4 位 
        3). 必须小于等于 12 位 
        4). 必须是英文、数字或下划线组成
 */