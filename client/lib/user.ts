// TODO: Move to types
interface RegisterUserDetails {
    username: string,
    email: string,
    password: string
}

interface LoginUserDetails extends Omit<RegisterUserDetails, 'username'> {}

const register = async (userDetails: RegisterUserDetails) => {
    const { email, password } = userDetails;
    const newUserDetails = { email, password };

    try {
        const res = await fetch('http://localhost:4000/api/users/register', {
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
        const res = await fetch('http://localhost:4000/api/users/login', {
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
