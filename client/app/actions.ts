'use server'

import { register } from "@/lib/user";

const registerUser = async (_prevState: any, formData: FormData) => {
    // CHECK: Valid use of 'as' in this
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const userDetails = { username, email, password };

    try {
        const user = await register(userDetails);
        const newState = {
            user,
            error: null
        };

        return newState
    } catch (error) {
        if (error instanceof Error) {
            const newState = {
                user: null,
                error: error.message
            };

            return newState;
        }
    }
}

export { registerUser };
