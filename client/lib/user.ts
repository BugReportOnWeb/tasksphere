// TODO: Move to types
interface RegisterUserDetails {
    username: string,
    email: string,
    password: string
}

interface LoginUserDetails extends Omit<RegisterUserDetails, 'username'> {}

const BASE_URL = process.env.NODE_ENV === 'development'
    ? process.env.DEV_URL
    : process.env.PROD_URL

const register = async (userDetails: RegisterUserDetails) => {
    const { email, password } = userDetails;
    const newUserDetails = { email, password };

    try {
        const res = await fetch(`${BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUserDetails),
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
        if (!res.ok) throw new Error(data.error);

        return data;
    } catch (error) {
        throw error;
    }
}

export { register, login };
