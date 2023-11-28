interface ButtonProps {
    children: React.ReactNode;
    color: string;
    onClick?: () => void;
}

const Button = ({ children, color, onClick }: ButtonProps) => {
    return (
        <button
            className={`inline-flex items-center justify-center px-4 py-2 border border-[#27272a] font-medium text-sm rounded-md transition-colors cursor-pointer hover:border-${color}-500`}
            // CHECK: Something can be changed here
            onClick={onClick ? onClick : () => console.log()}
        >
            {children}
        </button>
    )
}

export default Button;
