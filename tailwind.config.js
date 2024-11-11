/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            animation: {
                caret: 'caret 1s steps(1) infinite',
            },
        },
    },
    plugins: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts}'],
};
