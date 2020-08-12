import React, {Component} from 'react';
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

                    </form>
                </Paper>
            </main>
        );
    }

    handleSignup = (e) => {
        console.log('Submitting!')
    }
    handleChange = (type, e) => {
        console.log(type, e)
    }

}

export default withStyles(styles)(SignUp);