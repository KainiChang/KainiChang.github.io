// This data would typically be fetched from a server or imported from another file
import Piece1 from '../images/kaini.jpg';
const storyPanelsData = [
    {
        id: '1',
        imgSrc: Piece1 ,
        description: 'Your description for panel 1',
    },
    {
        id: '2',
        imgSrc: Piece1 ,
        description: 'Your description for panel 2',
    },
    {
        id: '3',
        imgSrc: Piece1 ,
        description: 'Your description for panel 3',
    },
    {
        id: '4',
        imgSrc: Piece1 ,
        description: 'Your description for panel 4',
    },
    {
        id: '5',
        imgSrc:  Piece1 ,
        description: 'Your description for panel 5',
    },
    {
        id: '6',
        imgSrc:  Piece1 ,
        description: 'Your description for panel 6',
    },
    {
        id: '7',
        imgSrc:  Piece1 ,
        description: 'Your description for panel 7',
    },
    {
        id: '8',
        imgSrc:  Piece1 ,
        description: 'Your description for panel 8',
    },
    {
        id: '9',
        imgSrc:  Piece1 ,
        description: 'Your description for panel 9',
    }
];

// StoryPanel.js
const StoryPanel = ({ panelId,close }) => {
    // Find the panel data by the panelId
    const panelData = storyPanelsData.find(panel => panel.id === panelId);
    console.log("story id: ",panelId);

    if (!panelData) {
        return null; // or some fallback UI
    }
    return (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src={panelData.imgSrc} alt={`Story panel ${panelId}`} className="w-full h-60 mb-4" />
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