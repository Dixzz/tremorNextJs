import { blueA } from "@radix-ui/colors"
import type { Config } from "tailwindcss"
// import { purpleDarkA } from "@radix-ui/colors/types/dark"
import colors from 'tailwindcss/colors';

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    extend: {
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: colors.indigo[50],
            muted: colors.indigo[200],
            subtle: colors.indigo[400],
            DEFAULT: colors.indigo[500],
            emphasis: colors.indigo[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      ...{
        keyframes: {
          hide: {
            from: { opacity: "1" },
            to: { opacity: "0" },
          },
          slideDownAndFade: {
            from: { opacity: "0", transform: "translateY(-6px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          slideLeftAndFade: {
            from: { opacity: "0", transform: "translateX(6px)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
          slideUpAndFade: {
            from: { opacity: "0", transform: "translateY(6px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
          slideRightAndFade: {
            from: { opacity: "0", transform: "translateX(-6px)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
          dialogOverlayShow: {
            from: { opacity: "0" },
            to: { opacity: "1" },
          },
          dialogContentShow: {
            from: {
              opacity: "0",
              transform: "translate(-50%, -45%) scale(0.95)",
            },
            to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
          },
          drawerSlideLeftAndFade: {
            from: { opacity: "0", transform: "translateX(50%)" },
            to: { opacity: "1", transform: "translateX(0)" },
          },
        },
        animation: {
          hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideDownAndFade:
            "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideLeftAndFade:
            "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideRightAndFade:
            "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          drawerSlideLeftAndFade:
            "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          dialogOverlayShow:
            "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          dialogContentShow:
            "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
