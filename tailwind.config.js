/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'Display': ['system', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      colors:{
        'recent-search' :'#fbf8f1',
        'find-book' : '#e61e43' ,
        'cards' : '#a1122c'
      },
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities ={
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
}

