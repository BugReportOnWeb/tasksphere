'use client'

import AuthButton from "@/components/AuthButton"
// import { useState } from "react"
import { registerUser } from "../actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { redirect } from "next/navigation";

// CHECK: WTF am I doing here!?
const initialState: {
    user: any | null;
    error: string | null;
} = {
    user: null,
    error: null
}

const Register = () => {
    // CHECK: Same as above, go deeper into this
    const [state, formAction] = useFormState(registerUser, initialState);

    useEffect(() => {
        if (localStorage.getItem('user')) redirect('/');

        if (state?.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
            redirect('/');
        }
    }, [state])

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex flex-col gap-5'>
                <div className='text-center flex flex-col gap-1'>
                    <h1 className='text-3xl font-semibold'>Create an account</h1>
                    <h1 className='text-sm text-[#7f8ea3]'>Enter specified details for a new account</h1>
                </div>
                <form action={formAction} className='flex flex-col justify-center items-center gap-4'>
                    {/* TODO: Add maxLength to the fields */}
                    <div className='flex flex-col gap-4 w-full'>
                        <input
                            type="text"
                            autoComplete="username"
                            name="username"
                            placeholder="Username"
                            required={true}
                            className='rounded-md text-sm border border-[#27272a] h-10 py-2 px-3 bg-transparent placeholder:text-[#7f8ea3] placeholder:text-sm focus:outline-none focus:outline-offset-2 focus:outline-[#27272a]'
                        />
                        <input
                            type="email"
                            autoComplete="email"
                            name="email"
                            placeholder="Email"
                            required={true}
                            className={`rounded-md text-sm border ${state?.error ? 'border-red-500' : 'border-[#27272a]'} h-10 py-2 px-3 bg-transparent placeholder:text-[#7f8ea3] placeholder:text-sm focus:outline-none focus:outline-offset-2 focus:outline-[#27272a]`}
                        />
                        <input
                            type="password"
                            autoComplete="password"
                            name="password"
                            placeholder="Password"
                            required={true}
                            className='rounded-md text-sm border border-[#27272a] h-10 py-2 px-3 bg-transparent placeholder:text-[#7f8ea3] placeholder:text-sm focus:outline-none focus:outline-offset-2 focus:outline-[#27272a]'
                        />
                    </div>
                    {/* Change to '<Button />' component */}
                    <AuthButton />
                </form>

                <div className='text-red-400 text-sm text-center'>{state?.error}</div>
            </div>
        </div>
    )
}

export default Register;
