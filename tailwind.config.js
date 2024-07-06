/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
				'4xs': [
					'0.5625rem', 								// 9px
					{
						lineHeight: '0.6875rem' 	// 11px
					}
				],
				'3xs': [
					'0.625rem',									// 10px
					{
						lineHeight: '0.75rem' 		// 12px
					}
				],
				'2xs': [
					'0.6875rem',								// 11px
					{
						lineHeight: '0.75rem', 		// 12px
					}
				],
				'2sm': [
					'0.8125rem',								// 13px
					{
						lineHeight: '1.125rem' 		// 18px
					}
				],
				'md': [
					'0.9375rem',								// 15px
					{
						lineHeight: '1.375rem' 		// 22px
					}
				],
				'1.5xl': [
					'1.375rem',									// 22px
					{
						lineHeight: '1.8125rem' 	// 29px
					}
				],
				'2.5xl': [
					'1.625rem',									// 26px
					{
						lineHeight: '2.125rem' 		// 34px
					}
				]
			},
      screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
