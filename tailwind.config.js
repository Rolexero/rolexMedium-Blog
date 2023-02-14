module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                smDesktop: { max: "1024px" }, // small desktop
                tablet: { max: "768px" },
                mobile: { max: "480px" },
                smMobile: { max: "320px" },
            },
            fontFamily: {
                poppins: ["gt-super", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                nativeGreen: "#0F730C",
            },
        },
    },
    plugins: [],
};