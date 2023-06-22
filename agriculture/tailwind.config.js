/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        1: "#274C5B",
        2: "#7EB693",
        3: "#EFD372",
        4: "#525C60",
        5: "#D4D4D4",
        6: "#F9F8F8",
        7: "#EFF6F1",
      },
      black: "#000",
      white: "#fff",
      gray: "#E0E0E0",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      brush: ["Yellowtail", "system-ui"],
    },
    fontSize: {
      h1: ["70px", "82px"],
      h2: ["50px", "59px"],
      h3: ["40px", "47px"],
      h4: ["35px", "41px"],
      h5: ["30px", "35px"],
      h6: ["25px", "29px"],
      p: ["18px", "30px"],
      button: ["20px", "23px"],
    },
    extend: {},
  },
  plugins: [],
};
