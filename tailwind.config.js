/** @type {import('tailwindcss').Config} */
import fluid, {extract, fontSize, screens} from 'fluid-tailwind'

module.exports = {
    darkMode: ["class"],
    content: {
        files: [
            './pages/**/*.{ts,tsx}',
            './components/**/*.{ts,tsx}',
            './app/**/*.{ts,tsx}',
            './src/**/*.{ts,tsx}',
        ],
        extract
    },
    prefix: "",
    theme: {
        screens,
        fontSize,
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "88rem",
            },
        },
        extend: {
            boxShadow: {
                "header": "0 1px 7px 0 rgba(155, 157, 184, 0.15);"
            },
            backgroundImage: {
                "purple-gradient-reverse": 'linear-gradient(136deg, #fff4e9 0%, #fff 26.41%, #fff 64.14%, #fff 83.6%, #e3e8ff 100%)',
                "purple-gradient": 'linear-gradient(45deg, #fff4e9 0%, #fff 26.41%, #fff 64.14%, #fff 83.6%, #e3e8ff 100%)'
            },
            colors: {
                'orange': '#FF9800',
                'light-orange': '#FFF4E9',
                'light-blue': '#E3E8FF',
                'primary-black': '#050924',
                'stroke': '#D7DAF2',
                'secondary-black': '#1E2551',
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), fluid({
        checkSC144: false // default: true
    })],
}