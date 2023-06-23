/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "pink-500":"rgb(199 10 114)",
        "blue-500":"rgb(5 124 172)",
        "bluegreen":"rgb(43 247 202)",
        "lime-yellow":"rgb(245 207 82)",
        "mengenta":"rgba(199 10 114)",
        "yellow-green":"rgb(183 253 52)",
        "green":"rgb(26 248 18)",
        "purple":"rgb(119 10 52)"
      },
      keyframes:{
        "down":{
          '0% , 100%':{
            top:"-100px"
          },
          '70%':{
            top:"700px"
          }
        }
      },
      animation:{
        "animate-rotate-slow":"bounce 5s linear infinite",
        "bounce-fast":"bounce 10s linear infinite",
        "bounce-altra":"ping 5s linear infinite",

      }
    },
  },
  plugins: [],
}

