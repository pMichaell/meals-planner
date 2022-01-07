import {useForm} from "react-hook-form";
import classes from "./Login.module.css"
import google from "../../assets/google_sign.png"
import {useState} from "react";
import { ErrorMessage } from '@hookform/error-message';
import {ToastContainer} from "react-toastify";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const signUpLogInHandler = () => {
        setIsSignIn(prevState => !prevState)
        console.log(isSignIn)
    }

    const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

    const signUpLogIn = isSignIn ? <div className={classes.info}>
        <h3>Not a member yet?</h3>
        <button type="button" className={classes.border} onClick={signUpLogInHandler}>Sign up</button>
        <h3>with email and password for free!</h3>
    </div> : <div className={classes.info}>
        <h3>Already a member?</h3>
        <button type="button" className={classes.border} onClick={signUpLogInHandler}>Log in</button>
        <h3>with email and password</h3>
    </div>

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'all',
            criteriaMode: 'all',
            defaultValues: {
                email: "",
                password: ""
            }
        }
    );
    const onSubmit = data => console.log(
        data.email
    );

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={classes.inputTag}>E-mail</h2>
                <input
                    className={`${classes.input} ${classes.border}`} {...register("email", {
                    required: "Email is required",
                    validate: value => regex.test(value) || 'Entered email is incorrect'
                    })}/>
                <div className={classes.errorContainer}><ErrorMessage errors={errors} name="email"
                                 render={({message}) => <span className={classes.errorMessage}>{message}</span>}/></div>
                <h2 className={classes.inputTag}>Password</h2>
                <input type="password" className={`${classes.input} ${classes.border}`} {...register("password",
                    {
                        required: "Password is required",
                        minLength: {value: 6, message: "Password has to be at least 6 characters long"}
                    })}
                />
                <div className={classes.errorContainer}>
                    <ErrorMessage 
                        errors={errors} name="password"
                        render={({message}) => <span className={classes.errorMessage}>{message}</span>}/>
                </div>
                <button className={`${classes.signIn} ${classes.border}`}>{isSignIn ? `Sign in` : `Sign up`}</button>
                <img className={classes.googleLogin} src={google} alt="sign in with google"/>
                {signUpLogIn}
                <div className={classes.passwordRecovery}>
                    <h1>Forgot your password?</h1>
                    <button className={classes.border} type="button">Click here!</button>
                </div>
            </form>
        </div>
    )
}

export default Login;