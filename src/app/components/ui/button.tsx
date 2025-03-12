interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    href?: string;
  }
  
  export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
    const baseStyle = "px-4 py-2 rounded text-white font-medium transition";
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700",
      secondary: "bg-gray-400 hover:bg-gray-500",
    };
  
    return (
      <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  }
  