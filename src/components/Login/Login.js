import {useForm} from "react-hook-form";
import classes from "./Login.module.css"
import google from "../../assets/google_sign.png"
import {useState} from "react";
import { ErrorMessage } from '@hookform/error-message';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth"
// import {auth} from "../../firebase/firebase";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [authError, setAuthError] = useState(null);

    const signInChangeHandler = () => {
        setIsSignIn(prevState => !prevState)
        console.log(isSignIn)
    }

    const signInHandler = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user.email);
            })
            .catch(error => {
                console.log(error)
                setAuthError(true)
            })

    }

    const signUpHandler = (email, password) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then( userCredential => {
                console.log(userCredential.user)
            })
            .catch(error => {
                console.log(error);
                setAuthError(true)
            })
    }

    const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

    const signUpLogIn = isSignIn ? <div className={classes.info}>
        <h3>Not a member yet?</h3>
        <button type="button" className={classes.border} onClick={signInChangeHandler}>Sign up</button>
        <h3>with email and password for free!</h3>
    </div> : <div className={classes.info}>
        <h3>Already a member?</h3>
        <button type="button" className={classes.border} onClick={signInChangeHandler}>Sign in</button>
        <h3>with email and password</h3>
    </div>

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'onBlur',
            criteriaMode: 'all',
            defaultValues: {
                email: "",
                password: ""
            }
        }
    );

    const onSubmit = data => {
        if (isSignIn) {
            signInHandler(data.email, data.password);
            return;
        }
        signUpHandler(data.email, data.password)
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={classes.inputTag}>E-mail</h2>
                <input
                    type="email"
                    className={`${classes.input} ${classes.border}`} {...register("email", {
                    required: "Email is required",
                    validate: value => regex.test(value) || 'Entered email is incorrect'
                    })}/>
                <div className={classes.formErrorContainer}><ErrorMessage errors={errors} name="email"
                                                                          render={({message}) => <span className={classes.formErrorMessage}>{message}</span>}/></div>
                <h2 className={classes.inputTag}>Password</h2>
                <input type="password" className={`${classes.input} ${classes.border}`} {...register("password",
                    {
                        required: "Password is required",
                        minLength: {value: 6, message: "Password has to be at least 6 characters long"}
                    })}
                />
                <div className={classes.formErrorContainer}>
                    <ErrorMessage 
                        errors={errors} name="password"
                        render={({message}) => <span className={classes.formErrorMessage}>{message}</span>}/>
                </div>
                {authError && <h2 className={classes.authFeedback}>Invalid credentials</h2>}
                <button className={`${classes.signIn} ${classes.border}`}>{isSignIn ? `Sign in` : `Sign up`}</button>
                <img className={classes.googleLogin} src={google} alt="sign in with google"/>
                {signUpLogIn}
                <div className={classes.passwordRecovery}>
                    <h2>Forgot your password?</h2>
                    <button className={classes.border} type="button">Click here!</button>
                </div>
            </form>
        </div>
    )
}

export default Login;