export const Button = ({
    children,
    className = "",
    variant = "primary",
    ...props
}) => {
    const baseStyle =
        "px-6 py-2.5 text-sm font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black transition-all duration-200";

    const variants = {
        primary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400",
        secondary:
            "bg-white/10 text-white hover:bg-white/20 focus:ring-white/50 border border-white/20",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
