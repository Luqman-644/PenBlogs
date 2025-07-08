import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    hover='cursor-pointer hover:bg-blue-700',
    className = "",
    ...props
}) {
    return (
        <button type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} ${hover}`} {...props}>
            {children}
        </button>
    );
}
