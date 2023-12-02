const token = process.env.NEXT_PUBLIC_TEMP_TOKEN as string;

interface UserDetails {
    username: string,
    email: string,
    password: string
}

const register = async (userDetails: UserDetails) => {
    const { email, password } = userDetails;
    const newUserDetails = { email, password };

    try {
        const res = await fetch('http://localhost:4000/api/users/register', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
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

export { register };
