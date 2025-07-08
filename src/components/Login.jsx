import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import Button from './Button.jsx'
import Input from './Input.jsx'
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"
import { BeatLoader } from 'react-spinners'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [loading, setloading] = useState();



    const login = async (data) => {
        setError("")
        setloading(true);
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setloading(false)
        }
    }



    return (
        <div
            className='flex items-center justify-center sm:w-full '
        >
            <div className='mx-auto w-[80%] max-w-lg bg-gray-100 rounded-xl py-10 px-5 sm:py-10 sm:px-10'>
                <div className="mb-2 flex justify-center">
                    <Link to='/'>
                        <span className="inline-block w-full">
                            <img className='w-[130px] sm:w-[150px]' src="/Logo.png" alt="" />
                        </span>
                    </Link>
                </div>
                <h2 className="text-center text-xl sm:text-2xl font-bold leading-t ight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full mt-7"
                        >Sign in</Button>
                        {loading ? (
                            <div className="w-full flex justify-center mt-5">
                                <BeatLoader color="#1447e6" />
                            </div>
                        ) : null}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login