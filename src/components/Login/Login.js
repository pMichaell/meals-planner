import {useForm} from "react-hook-form";
import classes from "./Login.module.css"
import google from "../../assets/google_sign.png"

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                email: "",
                password: ""
            }
        }
    );
    const onSubmit = data => console.log(data);

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={classes.inputTag}>E-mail</h2>
                <input
                    className={`${classes.input} ${classes.border}`} {...register("email", {required: "Email is required"})}/>
                <h2 className={classes.inputTag}>Password</h2>
                <input className={`${classes.input} ${classes.border}`} {...register("password",
                    {
                        required: "Password is required",
                        minLength: {value: 4, message: "Password has to be at least 6 characters long"}
                    })}
                />
                <button className={`${classes.login} ${classes.border}`}>Log in</button>
                <img className={classes.googleLogin} src={google} alt="sign in with google"/>
                <div className={classes.info}>
                    <h3>Not a member yet?</h3>
                    <button className={classes.border}>Sign up</button>
                    <h3>with email and password for free!</h3>
                </div>
                <div className={classes.passwordRecovery}>
                    <h1>Forgot your password?</h1>
                    <button className={classes.border} type="button">Click here!</button>
                </div>
            </form>
        </div>
    )
}

export default Login;