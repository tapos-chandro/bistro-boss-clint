import { useContext, useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit,formState: { errors },} = useForm()
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const {googleSignUp , logInUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    useEffect(() => {
        loadCaptchaEnginge(6)
    },[])

    const handleCaptcha = () =>{

       const user_captcha = captchaRef.current.value

       if(validateCaptcha(user_captcha)===true){
            setDisabled(false)
       }else{
        setDisabled(true)

    

       }

    }

    
    const onSubmit = (data) =>{
        setError('')
        logInUser(data.email, data.password)
        .then(result =>{
            console.log(result)
            if(location.state){
                navigate(location.state)
            }else{
                navigate('/')
            }
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)
            console.log(errorCode)
            if(errorCode == 'auth/invalid-credential'){
                setError('invalid credential')
            }
            // ..
          });

    }

    const handleGoogleLogin = () =>{
        googleSignUp()
    }


    return (
        

        <div className="bg-login-bg">
            <div className="hero min-h-screen container mx-auto py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src='https://i.postimg.cc/1twpfzqJ/authentication2.png' alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                    <h1 className="text-center mt-8 text-[#151515] text-3xl font-bold">Login</h1>
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email",{required: true})}/>
                        {errors.email?.type === "required" && (<p role="alert" className="text-[red] pt-2">Email is required</p>)}
                        {<p className="text-[red] my-3">{error}</p>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" {...register("password",{required: true, pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/})}/>
                        {errors.password?.type === "required" && (<p role="alert" className="text-[red] pt-2">Password is required</p>)}
                        {errors.password?.type === "pattern" && (<p role="alert" className="text-[red] pt-2">Minimum eight characters, at least one letter, one number and one special character</p>)}
                        {<p className="text-[red] my-3">{error}</p>}
                        <div>
                            
                        <LoadCanvasTemplate />
                        <input type="text" placeholder="text" className="input input-bordered my-3 w-full" name='captcha' ref={captchaRef}  onBlur={handleCaptcha} required />
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D1A054B2] text-primary-text hover:text-[black]" disabled={disabled} >Sign in</button>
                        </div>
                        <div>
                            <p className="text-[#D1A054]">New here? <Link to={'/signUp'}><span className="font-bold">Create a New Account</span></Link></p>
                        </div>
                    </form>
                    <div className="text-center flex justify-center pb-10 ">
                    <FcGoogle className="text-4xl hover:cursor-pointer" onClick={handleGoogleLogin}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;