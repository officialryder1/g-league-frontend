import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [forms, require('daisyui')],
	daisyui: {
		themes: ['night', 'dark', 'light'],
		dartTheme: "night"
	}
};
