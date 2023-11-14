import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Import tippy.js styling

const words = [
  { text: 'Confident', value: 800, description: 'My confidence was built on the achievement I made, knowing my capability and intelligance are able to overcome challenges' },
  { text: 'Team-player', value: 600, description: 'My happiness comes more from helping others accomplish things than my own accomplishments.' },
  // ... more words
    { text : 'Responsible', value: 750, description: "My reliability is a cornerstone of my character, manifesting in thoughtful decisions and a steadfast commitment to my principles and the people around me." },
    { text : 'Hard-working', value: 600, description: 'Dedication defines my work ethic, consistently pushing boundaries and going the extra mile to achieve excellence' },
    { text : 'Adventurous', value: 550, description: 'I am a adventurous person who is good at thinking outside the box.' },
    { text : 'Open-minded', value: 650, description: 'I am adaptive and embrace diverse perspectives, thrive on applying unconventional ideas to solve challenges.' },
    { text : 'Optimistic', value: 700, description: 'My born optimism fuels my drive to envision positive outcomes and tackle challenges with a constructive mindset' },
    { text : 'even-tempered', value: 650, description: "Being rational, my balanced demeanor brings a sense of stability and harmony, enabling me to navigate life's ups and downs with grace and poise." },
];

function MyWordcloud() {
  const callbacks = {
    onWordMouseOver: (word, event) => {
      const wordElement = event.target;
      if (wordElement) {
        // Check if tippy instance already exists
        if (!wordElement._tippy) {
          // Initialize tippy
          tippy(wordElement, {
            content: word.description,
            allowHTML: true,
          });
        } else {
          // Update tippy content dynamically
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

  const size = [600, 360];

  return (
    // <div className='flex items-center justify-center'> {/* Optional: Responsive container */}
    <div style={{ width: 'fit-content', margin: '0 auto' }}> {/* Width and auto margins for block-level elements */}

      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={words}
        getWordTooltip={() => ''} // Disable default tooltip
      />
    </div>
  );
}

export default MyWordcloud;
