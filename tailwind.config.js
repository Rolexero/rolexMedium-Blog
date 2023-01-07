module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: "#FFFFFF",
                orange: "#DE781F",
                lightOrange: "#FAE9DB",
                darkOrange: "#D06202",
                blue: "#1F85DE",
                lightBlue: "#F2F8FD",
                darkBlue: "#002A4F",
                green: "#29AE13",
                lightGreen: "#EFF9EC",
                red: "#BD0303",
                lightRed: "#F8E3E4",
                gray: "#898888",
                lightGray: "#F1F1F1",
            },
            shadows: {
                dark: "0px 20px 30px rgba(31, 133, 222, 0.1)",
                light: "0px 5px 30px rgba(40, 40, 40, 0.06)",
            },
            screens: {
                smDesktop: { max: "1024px" }, // small desktop
                tablet: { max: "768px" },
                mobile: { max: "480px" },
                smMobile: { max: "320px" },
            },
        },
    },
    plugins: [],
};