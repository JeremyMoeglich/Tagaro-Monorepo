const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		require('autoprefixer'),
		require('postcss-nested'),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};
