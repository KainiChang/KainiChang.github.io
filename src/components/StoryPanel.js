// This data would typically be fetched from a server or imported from another file
import Piece1 from '../images/kaini.png';
import Piece3 from '../images/kaini3.png';
const storyPanelsData = [

    {
      id: '1',
      imgSrc: null,
      title: 'Lucky or Unlucky?',
      description: 'Officers who worked for the government under the One-child policy were waiting for my death. However, my great mom succeeded in giving an early birth. Luckily, I’m so healthy!'
    },
    // ...
    {
      id: '4',
      imgSrc: Piece1,
      title: '9-9-6 Work Experience',
      description: 'My interests guided me to the IT industry, which later developed into a busy industry in China. I worked as a senior system analyst in a top company, managing and optimizing a system used by millions every day. Working from 9 am to 9 pm, 6 days a week, helped me save money for overseas study, as there was no time to spend it. \n\nA colleague of mine at the giant corporation, after many night shifts, suddenly lay down. He was then diagnosed with coronary heart disease and underwent heart bypass surgery at the age of 25.'
    },
    // ...
    {
      id: '5',
      imgSrc: Piece1,
      title: 'Reborn from Death',
      description: "My life was slowed down due to a medical accident during COVID. I couldn't stop rethinking my life choices, especially when I was lying motionless, with several tubes inserted into my body and having more than 20 bags of blood transfusions. \n\nI reordered the priorities of my life: wellbeing -> relationships -> diverse experiences -> other stuff."
    },
    // ...
    {
      id: '6',
      imgSrc: Piece1,
      title: 'Thanks to Declining Air Quality',
      description: "I experienced an extremely difficult time as the first person in my family network to live abroad. I resigned from my prestigious job, persuaded my family and my partner's family, said goodbye to my friends, and my dog. \n\nThe declining air quality in the eastern part of China made me feel less guilty. My partner and my nephews suffered from serial respiratory infections and fevers due to the bad air, which garnered support for our decision to leave."
    },
    // ...
    {
      id: '7',
      imgSrc: Piece1,
      title: 'Am I in New Zealand?',
      description: "To ease my family's worries, I told them I was studying in New Zealand and would return after completing my studies. Bearing the time zones in mind, I calculate a fake time every time I talk with them on the phone. \n\nI will find an opportunity to tell them I have never been to New Zealand and that I’m in Australia and plan to stay here forever."
    },
    // ...
    {
      id: '8',
      imgSrc: Piece1,
      title: 'Survived and Thrived in Australia',
      description: "Significant improvement in my oral English boosted my confidence. I achieved high distinction in my master's study, surrounded by talented people, and found that I am one of them. Working part-time at Flinders University as a junior system analyst, I found my teammates to be supportive and friendly. With two internship experiences under my belt, I am grateful for the culture of gender and nationality diversity here. \n\nLiving in Botanic Apartment, I consider myself lucky to have such lovely neighbors. Enjoying Adelaide's beautiful outdoors, I am more than happy to live in Australia."
    },
    // ...
    {
      id: '9',
      imgSrc: Piece1,
      title: 'Looking Forward to the Future Adventure',
      description: "With a 5-year post-study work visa in Australia, I am thrilled to be part of the IT industry here, to contribute my knowledge and skills to society, and to integrate into the community and the country. \n\nWould you like to join me on this adventure?"
    }
  ]
  

// StoryPanel.js
const StoryPanel = ({ panelId,closePanel }) => {
    // Find the panel data by the panelId
    const panelData = storyPanelsData.find(panel => panel.id == panelId);
    console.log("story id: ",panelId);

    if (!panelData) {
        console.log("no panel data");
        return null; // or some fallback UI
    }
    return (
        <div className="fixed inset-0  bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white m-2 border-t-2 border-lime-500 md:w-200  px-4 py-8 md:p-8 rounded-lg shadow-lg text-center">
            {/* {panelData.imgSrc && <img src={panelData.imgSrc} alt={`Story panel ${panelId}`} className="w-full h-60 mb-4" />} */}
                <h3 className="text-2xl font-bold mb-2">{panelData.title}</h3>
                <p className='text-xl text-left' style={{ whiteSpace: 'pre-line' }}>{panelData.description}</p>
                {/* <button
                    onClick={() => {closePanel()}}
                    className="mt-4 px-8 py-2 hover:bg-lime-500 hover:text-white rounded border-lime-500 border-2 bg-white text-lime-500 transition duration-300"
                >
                    Close
                </button> */}
                <button
    onClick={() => {closePanel()}}
    className="mt-4 px-8 py-2 focus:bg-lime-500 hover:bg-lime-500 focus:text-white  hover:text-white rounded border-lime-500 border-2 bg-white text-lime-500 transition duration-300"
>
    Close
</button>

            </div>
        </div>
    );
};

export default StoryPanel;