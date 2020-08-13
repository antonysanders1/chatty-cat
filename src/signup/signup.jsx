import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
const firebase = require('firebase');

class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            email: null,
            username: null,
            password: null,
            passwordConfirm: null,
            signUpError: ''
        }
    }

    render(){

        const {classes} = this.props;

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h3'>Sign Up!</Typography>

                    <form onSubmit={(e) => this.handleSignup(e)} className={classes.form}>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'>Enter Email</InputLabel>
                            <Input autoComplete='email' onChange={(e) => this.handleChange('email', e)} 
                            autoFocus id='signup-email-input'></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-username-input'>@Username</InputLabel>
                            <Input type='text' onChange={(e) => this.handleChange('username', e)} 
                            autoFocus id='signup-username-input'></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'>Create A Password</InputLabel>
                            <Input type='password' onChange={(e) => this.handleChange('password', e)} 
                            id='signup-password-input'></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirm-input'>Confirm Your Password</InputLabel>
                            <Input type='password' onChange={(e) => this.handleChange('passwordConfirm', e)} 
                            id='signup-password-confirm-input'></Input>
                        </FormControl>

                        <Button type='submit' fullWidth variant='contained' color='secondary'
                        className={classes.submit}>SUBMIT</Button>
                    </form><br/>

                    {this.state.signUpError ?
                    <Typography className={classes.errorText} component='h5' varient='h6' >{this.state.signUpError}</Typography> :
                    null
                    }

                    <Typography component="h5" varient='h6' className={classes.hasAccountHeader}>Already have an account?</Typography>
                    <Link className={classes.loginInLink} to='/login'>Log In!</Link>
                </Paper>
            </main>
        );
    }

    handleChange = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: e.target.value
                })
                break;
            case 'username':
            this.setState({
                username: e.target.value
            })
            break;
            case 'password':
            this.setState({
                password: e.target.value
            })
            break;
            case 'passwordConfirm':
            this.setState({
                passwordConfirm: e.target.value
            })
            break;
            default:
                break;
        }
    }
    handleSignup = (e) => {
        e.preventDefault();

        if(!this.formIsValid()) {
            this.setState({signUpError: 'Passwords do not match!'})
            return;
        }

        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes => {
            const userObj = {
                email: authRes.user.email
            };
            firebase.firestore().collection('users')
            .doc(this.state.username)
            .set(userObj).then(() => {this.props.history.push('/dashboard')
        }, dbError => {
            console.log(dbError);
            this.setState({signUpError: 'Failed to add user'})
        })
        }, authError =>{
            console.log(authError);
            this.setState({signUpError: 'Failed to add user'})
        })

    }

    formIsValid = () => this.state.password === this.state.passwordConfirm;

}

export default withStyles(styles)(SignUp);