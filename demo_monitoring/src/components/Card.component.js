import React, { Component } from 'react'
import './CssComponent/Card.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ChartPulse from './ChartPulse.component';
import ChartPressure from './ChartPressure.component';
import ChartOxi from './ChartOxi.component';
import Mqx from '../backend/mqtt/mqtt_connect';


const mode = 'login';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: ""
        }
    }
    
    render() {
        return (
            <div>
                <div className={`form-block-wrapper `} ></div>
                <section className={`form-block `}>
                    <header className="form-block__header">
                        <h1>Demo Monitoring</h1>
                        <div className="form-block__toggle-block">
                            <span>display real time chart</span>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">
                    <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
                    <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
                </div>
                <div className="form-group form-group--signup">
                    <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                    <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                    <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                </div>
            </div>
            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);





export default class Cards extends Component {
  render() {
    return (
        <div className={`app pb-2`}>
            <div>
                <section className={`form-block `}>
                    <header className="form-block__header">
                        <h1>Demo Monitoring</h1>
                        <div className="form-block__toggle-block">
                            <span>display real time chart</span>
                        </div>                        
                    </header>
                </section>
                <section className={`form-block-2 `}>
                <ChartPulse/>
                </section>
                <section className={`form-block-2 `}>
                <ChartPressure/>
                </section>
                <section className={`form-block-2 `}>
                <ChartOxi/>
                </section>
                <section className={`form-block-2 `}>
                <Mqx/>
                </section>
                

            </div>
        </div>
    )
  }
}



