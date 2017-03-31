import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

export default class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {
            confirmationLoading: false
        }
    }
    handleSubmit = () => {
        this.setState({confirmationLoading: true})
        setTimeout(() => {
            this.setState({confirmationLoading: false})
            window.location="/#/"
        }, 3000)
    }
    render() {
        const style = {
            title: {
                margin: 0,
                fontWeight: 300,
                textAlign: 'center'
            },
            textfield: {
                width: '100%',
                marginTop: -15
            },
            textFieldInput: {
                color: '#FFFFFF'
            },
            button: {
                marginTop: 10
            }
        }
        return (
            <div className="login-page">
                {this.state.confirmationLoading
                    ? <CircularProgress className="circular-progress" color='#8BC34A'/>
                    : ''}
                <Paper zDepth={1} className="card">
                    <h2 style={style.title}>Music-Licenser</h2>
                    <TextField
                        className="text-input"
                        style={style.textfield}
                        inputStyle={style.textFieldInput}
                        hintText="musiclicenser"
                        floatingLabelText="Username"/>
                    <TextField
                        className="text-input"
                        style={style.textfield}
                        inputStyle={style.textFieldInput}
                        hintText="password123"
                        floatingLabelText="Password"/>
                    <RaisedButton
                        onTouchTap={this.handleSubmit}
                        style={style.button}
                        label="Login"
                        fullWidth={true}
                        secondary={true}/>
                    <p className="signup">Don't have an account?&nbsp;
                        <a href="/#/signup">Sign Up</a>
                    </p>
                </Paper>
            </div>
        )
    }
};
