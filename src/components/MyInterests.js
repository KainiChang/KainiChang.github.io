import React from 'react';
import Piece2 from '../images/kaini.png';
import NoteSticker from './Note';

const interest1 = { 'title': "Pets", 'description': "I love pur babys both dogs a" };

const MyInterests = () => (
    <div className='max-w-6xl flex-col items-center justify-center mx-auto'>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
            <NoteSticker size='280px' title='Pets' text="I love pur babys both dogs and cats! If I don't control myself, I might look like an insane pet thief!" />
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <NoteSticker size='280px' title='IT' text="I have a wide range of interests in IT areas!  Not sure why I'm so 'fraternity' at anything IT stuff that impact human life" />
            <a href=" https://arrowfit-2f55fec5fe98.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <button className='bg-white text-gray py-2 px-4 w-72 h-72 rounded mb-2 mx-1 mx-auto block md:mx-2'>
                    Gym management
                </button>
            </a>
            <a href="https://www.boogieroos.com.au/" target="_blank" rel="noopener noreferrer">
                <button className='bg-white text-gray py-2 px-4 w-72 h-72  rounded mb-2 mx-1 mx-auto block md:mx-2'>
                    Kindgarden marketing
                </button>
            </a>

        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
            <NoteSticker size='280px' title='Outdoor' text="Traveling, hiking, camping, running, kayaking..." />
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
        </div>

        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
            <img src={Piece2} className="h-72 my-4 mx-auto block md:mx-2" />
            <NoteSticker size='280px' title='Networking' text="A new interest living in Adelaide, meeting inspiring people via meetups and volunteering" />

        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
        <NoteSticker size='280px' title='Fixing' text='fixing, repairing, haircutting  (no dishes!! no laundry!!)' />
            <NoteSticker size='280px' title='Haircutting' text='fixing, repairing, haircutting  (no dishes!! no laundry!!)' />
            <NoteSticker size='280px' title='more' text='fixing, repairing, haircutting  (no dishes!! no laundry!!)' />

        </div>
    </div>);
export default MyInterests;