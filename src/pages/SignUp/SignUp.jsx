import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hoocks/useAxiosPublic";
// import Swal from "sweetalert2";
// import { v4 } from "uuid";



const SignUp = () => {
    const { register, handleSubmit,formState: { errors },} = useForm()
    const {createUser,googleSignUp,updateUserProfile } = useContext(AuthContext)

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    // setError('')
    const onSubmit = (data) =>{
        setError('')

        console.log(data)
        createUser(data.email, data.password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)


            const loginUser = {
                name: data?.name,
                email:data?.email
            }

           axiosPublic.post('/users', loginUser)
           .then(result => {
            console.log(result)
           })




            updateUserProfile(data.name)

            // const storageRef = ref(storage, `user/${v4()}`);
            //     uploadBytes(storageRef, data.image).then((data) => {

            //         getDownloadURL(data.ref)
            //         .then((url) => {
            //               updateProfile(auth.currentUser, {
            //                 displayName: name, photoURL: url
            //               })
            //              setUsers(user)
            //              console.log(url)
            //             if(user){
            //                 Swal.fire({
            //                   title: "successfully sign up",
            //                   text: "You clicked the button!",
            //                   icon: "success"
            //               });
            //             }
            //         })
            //       });


            // updateUserProfile(data.name, )
            // ...
            // Swal.fire({
            //     title: "Good job!",
            //     text: "You clicked the button!",
            //     icon: "success"
            //   });
            navigate('/login')
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)
            console.log(errorCode)
            if(errorCode == 'auth/email-already-in-use'){
                setError('email already in use')
            }
            // ..
          });

    }

    const handleGoogleLogin = () =>{
        googleSignUp()
          .then(result => {



            const loginUser = {
                name: result?.user?.displayName,
                email:result?.user?.email
            }
            console.log(loginUser)

           axiosPublic.post('/users', loginUser)
           .then(result => {
            console.log(result)
           })


            if(result){
                navigate('/shop/offered')
            }
        })
    }


    return (
        <div className="py-20 bg-login-bg lg:h-screen">
            <div className="container mx-auto shadow-xl hero ">
                <div className="flex-col hero-content lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src='https://i.postimg.cc/1twpfzqJ/authentication2.png' alt="" />
                    </div>
                    <div className="w-full max-w-sm card shrink-0 ">
                    <h1 className="text-center mt-8 text-[#151515] text-3xl font-bold">Sign Up</h1>
                    <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" {...register("name",{required: true})}/>
                        {errors.name?.type === "required" && (<p role="alert" className="text-[red] pt-2">Name is required</p>)}
                        </div>
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
                        <div className="my-3">
                        <input type="file" className="file-input file:border-1 file:border-0 border-[#D1A054] file:bg-[#D1A054] w-full max-w-xs" {...register('image')}/>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="mt-6 form-control">
                            <input type="submit" value="Sign in" className="btn bg-[#D1A054B2] text-primary-text hover:text-[black]" />
                        </div>
                        <div className="text-center">
                            <span className="text-[#D1A054] text-center">Already registered? <Link to={'/login'} className="font-bold"> Go to login</Link></span>
                        </div>
                    </form>
                    <div className="flex justify-center pb-10 text-center ">
                    <FcGoogle className="text-4xl hover:cursor-pointer" onClick={handleGoogleLogin}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;