import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Import tippy.js styling

const words = [
  { text: 'Confident', value: 800, description: 'My confidence was built on the achievement I made, knowing my capability and intelligance are able to overcome challenges.' },
  { text: 'Team-player', value: 600, description: 'My happiness comes more from helping others accomplish things than my own accomplishments.' },
  { text: 'Humble', value: 700, description: "With the awareness of an individual's limitation and potential improvement, I believe in proving my abilities through tangible results and actions, rather than solely relying on words" },

  { text: 'Responsible', value: 750, description: "My reliability is a cornerstone of my character, manifesting in thoughtful decisions and a steadfast commitment to my principles and the people around me." },
  { text: 'Hard-working', value: 600, description: 'Dedication defines my work ethic, consistently pushing boundaries and going the extra mile to achieve excellence.' },
  { text: 'Adventurous', value: 550, description: 'I am a adventurous person who is good at thinking outside the box.' },
  { text: 'Open-minded', value: 650, description: 'I  embrace diverse perspectives, thrive on applying unconventional ideas to solve challenges.' },
  { text: 'Optimistic', value: 700, description: 'My born optimism fuels my drive to envision positive outcomes and tackle challenges with a constructive mindset.' },
  { text: 'Even-tempered', value: 650, description: "Being rational, my balanced demeanor brings a sense of stability and harmony, enabling me to navigate life's ups and downs with grace and poise." },
  { text: 'Rational', value: 650, description: "Being rarely emotional, I keep calm and clear-minded." },
  { text: 'Adaptive', value: 600, description: "I embracing changes which bring new experiences and excitements." },
  { text: 'Empathetic', value: 550, description: "Standing on others feet is a natural thing for me." },
  { text: 'Analytical', value: 600, description: "A specialist on logic and numbers." },
  { text: 'Thinker', value: 600, description: "I think deeper and faster." },
  { text: 'Listener', value: 550, description: "Instead of keeping expressing myself, I'd like to listen and considering others' perspective." },
];

function MyWordcloud() {
  // State to hold the dimensions
  const [dimensions, setDimensions] = useState({ width: 500, height: 300 });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set width to window width or some max size, and height proportionally
      setDimensions({
        width: window.innerWidth < 680 ? window.innerWidth - 8 : 680 - 8,
        height: window.innerHeight / 3, // or any other ratio you want
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const callbacks = {
    onWordMouseOver: (word, event) => {
      const wordElement = event.target;
      if (wordElement) {
        if (!wordElement._tippy) {
          tippy(wordElement, {
            content: word.description,
            allowHTML: true,
            className: 'custom-tooltip' // Add your custom class here
          });
        } else {
          wordElement._tippy.setContent(word.description);
        }
      }
    }
  };

  const options = {
    rotations: 0,
    rotationAngles: [0, 0],
    fontSizes: [20, 60], // Increase font size range

  };

  return (
    // <div style={{ width: '100%', height: '100%' , margin: '0 auto' }}>
    <div className='flex justify-center mb-12' style={{ width: '100%', height: '100%' }}>
      <div style={{ width: dimensions.width, height: dimensions.height, display: 'inline-block' }}>
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={[dimensions.width, dimensions.height]}
          words={words}
        // getwordtooltip={() => ''} // Disable default tooltip
        />
      </div>
    </div>
  );
}

export default MyWordcloud;
