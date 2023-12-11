// TODO: Move to (types/) dir or something

import { LoginUserDetails, RegisterUserDetails } from "@/types/auth";

const BASE_URL = process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_DEV_URL
    : process.env.NEXT_PUBLIC_PROD_URL

// TOOD: Refactor for multiple errors and use when ready
// Move to utils part (maybe?)
// const sendRequest = async (
//     userDetails: LoginUserDetails | RegisterUserDetails,
//     slug: string
// ) => {
//     try {
//         const res = await fetch(`${BASE_URL}/api/users/${slug}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(userDetails),
//             cache: 'no-store'
//         })

//         const data = await res.json();

//         if (res.status === 400) {
//             throw new Error(data.errors[0].msg);
//         }

//         if (!res.ok) throw new Error(data.error);

//         return data;
//     } catch (error) {
//         throw error;
//     }
// }

// TODO?: Maybe DRY in here... -> (sendRequest)
const register = async (userDetails: RegisterUserDetails) => {
    try {
        const res = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails),
            cache: 'no-store'
        })

        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        return data;
    } catch (error) {
        throw error;
    }
}

const login = async (userDetails: LoginUserDetails) => {
    try {
        const res = await fetch(`${BASE_URL}/api/users/login`, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(userDetails),
            cache: 'no-store'
        })

        const data = await res.json();

        // Form validation failed
        // CHECK: Some brute force method here it seemsj
        // Refactor ASAP
        if (res.status === 400) {
            throw new Error(data.errors[0].msg);
        }

        if (!res.ok) throw new Error(data.error);

        return data;
    } catch (error) {
        throw error;
    }
}

export { register, login };
