// This data would typically be fetched from a server or imported from another file

const storyPanelsData = [

  {
    id: '1',
    title: 'Lucky or Unlucky?',
    description: "Luckily, my mother had an successful early birth, despite the government officers working under One-child policy were waiting there and anticipated a different outcome. My health was a symbol of life's triumph."
  },
  {
    id: '2',
    title: 'Adult VS Kid',
    description: "I’m pretty sure I’ve become an adult after the loss of my father at 12 years old being independent enough to manage my life.  \n\nSomehow I feel that I am still a kid at the bottom of my heart, being curious and adventurous."
  },
  {
    id: '3',
    title: 'A Super Star in Study',
    description: "Born and grew up at a rural village usually highlights the education resources issue. Being super excellent, I received great education in nearby cities with full scholarships, living in the dormitory of remote schools from 11 years old. \n\nMy life was so different with those I grew up with because of my knowledge. Pursued master of Computing and Innovation in Australia, I achieved high distinction studying in my second language. Do you think I’m a super star?"
  },
  {
    id: '4',
    title: '9-9-6 Work Experience',
    description: "My interests guided me to the IT industry, a busy industry in China. I worked as a senior system analyst in a top company, managing and optimizing a system used by millions every day. Working from 9 am to 9 pm, 6 days a week, helped me save money for overseas study, as there was no time to spend it. \n\nA colleague didn't survive, suddenly lay down at work after many night shifts. He was then diagnosed with coronary heart disease and underwent heart bypass surgery at the age of 25. "
  },
  {
    id: '5',
    title: 'Reborn from Death',
    description: "My life was slowed down due to a medical accident during COVID. I couldn't stop rethinking my life choices, especially when I was lying motionless, with several tubes inserted into my body and having more than 20 bags of blood transfusions. \n\nI reordered the priorities of my life: wellbeing -> relationships -> diverse experiences -> other stuff."
  },
  {
    id: '6',
    title: 'Thanks to Declining Air Quality',
    description: "I experienced an extremely difficult time as the first person in my family network to live abroad. I resigned from my prestigious job, persuaded my family and my partner's family, said goodbye to my friends, and my dog. \n\nThe declining air quality in the eastern part of China made me feel less guilty. My partner and my nephews suffered from serial respiratory infections and fevers due to the bad air, which garnered support for our decision to leave."
  },
  {
    id: '7',
    title: 'Am I in New Zealand?',
    description: "To ease my family's worries, I told them I was studying in New Zealand instead of Australia and would return after completing my studies. Bearing the time zones in mind, I calculate a fake time every time I talk with them on the phone. \n\nI will find an opportunity to tell them I've been in Australia and will stay here forever."
  },
  {
    id: '8',
    title: 'Survived and Thrived in Australia',
    description: "Significant improvement in my oral English boosted my confidence. I achieved high distinction in my master's study, surrounded by talented people, and found that I am one of them. \n\nLiving in Botanic Apartment, I consider myself lucky to have such lovely neighbors. Working part-time at Flinders University as a junior system analyst, adding two internship experiences, I am grateful for the supportive peers and the culture of gender and nationality diversity."
  },
  {
    id: '9',
    title: 'Looking Forward to the Future Adventure',
    description: "With a 5-year post-study work visa in Australia, I am thrilled to be part of the IT industry here, to contribute my knowledge and skills to society, and to integrate into the community and the country. \n\nWould you like to join me on this adventure?"
  }
]


// StoryPanel.js
const StoryPanel = ({ panelId, closePanel }) => {
  // Find the panel data by the panelId
  const panelData = storyPanelsData.find(panel => panel.id == panelId);

  if (!panelData) {
    console.log("no panel data");
    return null; // or some fallback UI
  }
  return (
    <div className="fixed inset-0 px-2 bg-black bg-opacity-30 flex justify-center items-center z-20">
      <div className="box-border bg-white border-t-2 border-lime-500 md:w-1/2 px-4 py-8 md:p-8 rounded-lg shadow-lg text-center z-20">
        {/* {panelData.imgSrc && <img src={panelData.imgSrc} alt={`Story panel ${panelId}`} className="w-full h-60 mb-4" />} */}
        <h3 className="text-2xl font-bold mb-2">{panelData.title}</h3>
        <p className='text-base md:text-xl text-left' style={{ whiteSpace: 'pre-line' }}>{panelData.description}</p>
        {/* <button
                    onClick={() => {closePanel()}}
                    className="mt-4 px-8 py-2 hover:bg-lime-500 hover:text-white rounded border-lime-500 border-2 bg-white text-lime-500 transition duration-300"
                >
                    Close
                </button> */}
        <button
          onClick={() => { closePanel() }}
          className="mt-4 px-8 py-2 active:bg-lime-500 hover:bg-lime-500 active:text-white hover:text-white rounded border-lime-500 border-2 bg-white text-lime-500 transition duration-300"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default StoryPanel;