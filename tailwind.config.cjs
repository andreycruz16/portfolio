/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                tiltwarp: 'Tilt Warp',
                poppins: 'Poppins',
                opensans: 'Open Sans',
            },
        },
    },
    plugins: [],
};
