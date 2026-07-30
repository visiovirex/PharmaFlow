function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-800 text-white",

    outline:
      "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`
        rounded-lg
        font-medium
        transition-all
        duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;