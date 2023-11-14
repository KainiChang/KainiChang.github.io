// This data would typically be fetched from a server or imported from another file
import Piece1 from '../images/kaini.jpg';
import Piece2 from '../images/kaini2.jpg';
import Piece3 from '../images/kaini3.jpg';
const storyPanelsData = [
    {
        id: '1',
        imgSrc: null,
        title: 'Navigate One-child policy & Two-track household registration system',
        description: 'I was happily living in a small village in a rural area of China until I understand what is "algricultural population". Being a healthy girl, I did not suffer from the early birth that caused by medicine effect because my mom failed to hide her second pragnent. Being a super star of academic, I was free to go any school offering scholarship in my homecity, poverty and lack of education resources for algricultural kids did not stop my education. There are Big differences between my life and life of the friends I grew up with. No matter where I came from, I am at the front line of pursuing technology, equalality and democracy.',
    },
    {   
        id: '2',
        imgSrc: Piece1 ,
        title: 'Become an adult at 12',
        description: 'Even though I live in the domitory of schools from 11 years old, it was one year later after the loss of my father I became mentally strong to remove the rebellious phase from my life. From there, I take the initiative to plan my own life, make desicions at crucial life acrosses with a clear mind. My life was not hard as you may imagine, I have a best mom in the world and I was strong enough to support myself mentally and financially',
    },
    {
        id: '3',
        imgSrc: Piece3 ,
        title: 'Study changed my fortune',
        description: 'Without any purpose, I just enjoy study. Not because I clearly know I wanna go to a big world, to earn a life like "city population" have. Just purely enjoy what offered in schools except "history" and "politics". I am the person who always learning and doing the occupants my families do not understand, however, they know I am the advanced one and ask for my advices when they have troubles. My interests guides me to the IT industry, I was working as a senior system analyst in a top company in China, caring and optimizing a system millions people using everyday. My life was totally changed because of my knowledge. That why I am always motived to learn new knowledge and skills.',
    },
    {
        id: '4',
        imgSrc: Piece1 ,
        title: '9-9-6 work pattern dangered my life',
        description: 'Living in a developing country which ambitious on its GDP, labor rights are not a concern. In the IT industry of China, working from 9am to 9pm 6 days a week is a default work patern. That means if you can not do it, some else would take your place. People or talent are impossible to be used out. A collegue of mine at the gaient coorperation, who was taking care of the hotline system in a night shift after many, lied down suddenly. he was then dignosed coronary heart disease and had a heart bypass surgery immediately at the age of 25. I was lucky to have a lighter health issue, the sugery for that didn not run well, I had more than 20 bags of blood transfusions. I lay motionless in the hospital bed for nearly a month and lost nearly 8kg. The experience of having tubes inserted all over my body was indeed not comfortable. ' 
    },
    {
        id: '5',
        imgSrc:  Piece1 ,
        title: 'Reborn from the death',
        description: 'Your description for panel 5',
    },
    {
        id: '6',
        imgSrc:  Piece1 ,
        title: 'Declining air quality',
        description: 'In the relatively developed eastern part of China, there is no bright sunshine or stars. The cause of my miscarriage was diagnosed as vitamin D deficiency, which is already a common problem of my generation. In winter, it fogs almost every morning. My partner and my nephew had serial respiratory infections and fevers due to the bad air. If you notice the background of some videos taken in China by unoffical media on youtube, you would understand me. One of the reason the photoshop is so popular is it can make the sky more blue and leaves more green',
    },
    {
        id: '7',
        imgSrc:  Piece1 ,
        title: 'Plan and move towards better life',
        description: 'Resignated from the shining job, persuaded my families and my partner family, reviewed my Chinglish, navigated covid, said goodbye to my dog, I experienced an extremly difficuty time as the first person go aboard in the networks of my families. Anyway, I made it and sponored myself to pursue a better career and life with the savings of the years of 9-9-6 work.',
    },
    {
        id: '8',
        imgSrc:  Piece1 ,
        title: 'Survived and Thrived in Australia',
        description: 'Big change in my oral English gave me lots of confidence. Studying at University of Adelaide, achived high distiction on average, surrounding by all talented people and found myself am one of them. Along with part-time working at Flinders University as a junior system anaylst, my teammates are so supportive and friendly. Adding two internship experiences, I was so grateful the promotion of gender and nationality diversity here. Living in Botanic Apartment, I am so lucky to have the lovely neighours. Enjoying the beatiful outdoor natural of Adelaide, I am so grateful to have the chance to live and study in Australia. ',
    },
    {
        id: '9',
        imgSrc:  Piece1 ,
        title: 'Looking forward to the future',
        description: 'With 5 years post study work visa, I am looking forward to the future. I am so excited to be a part of the IT industry in Australia, to contribute my knowledge and skills to the society, to be a part of the community, to be a part of the country. ',
    }
];

// StoryPanel.js
const StoryPanel = ({ panelId,close }) => {
    // Find the panel data by the panelId
    const panelData = storyPanelsData.find(panel => panel.id == panelId);
    console.log("story id: ",panelId);

    if (!panelData) {
        console.log("no panel data");
        return null; // or some fallback UI
    }
    return (
        <div className="fixed  inset-0 bg-white bg-opacity-75 flex justify-center items-center">
            <div className="bg-white md:max-w-3xl p-4 rounded-lg shadow-lg text-center">
            {/* {panelData.imgSrc && <img src={panelData.imgSrc} alt={`Story panel ${panelId}`} className="w-full h-60 mb-4" />} */}
                <h3 className="text-2xl font-bold mb-2">{panelData.title}</h3>
                <p>{panelData.description}</p>
                <button
                    onClick={() => {close()}}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default StoryPanel;