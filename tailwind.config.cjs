const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            'xs': '370px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                polar: {
                    1: '#4C566A',
                    2: '#434C5E',
                    3: '#3B4252',
                    4: '#2E3440',
                },
                snow: {
                    1: '#ECEFF4',
                    2: '#E5E9F0',
                    3: '#D8DEE9',
                },
                frost: {
                    1: '#8FBCBB',
                    2: '#88C0D0',
                    3: '#81A1C1',
                    4: '#5E81AC',
                },
                aurora: {
                    1: '#BF616A',
                    2: '#D08770',
                    3: '#EBCB8B',
                    4: '#A3BE8C',
                    5: '#B48EAD',
                },
            }
        },
    },
    plugins: [],
}
