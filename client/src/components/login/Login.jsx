import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useFrom"

export default function Login(props) {
    const login = useLogin();
    const navigate = useNavigate();
    const {values, changeHandler, submitHandler} = useForm(
        {email: "", password: ""}, 
        ({email, password})=>{
           
            login(email,password).then((res)=>{

                navigate("/")
            }).catch((err)=>{
                console.log(err.message);
            })
        }
    );
    return(
        <>
            <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onChange={changeHandler}
                    value={values.email}
                    placeholder="Sokka@gmail.com"
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                    type="password" 
                    id="login-password" 
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    />
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
        </>
    )
}