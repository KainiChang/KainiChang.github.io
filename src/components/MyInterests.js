import React from 'react';
import Piece2 from '../images/kaini.png';

const MyInterests = () => (
    <div >
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <img src={Piece2} className="h-60 my-4 mx-auto block md:mx-0" />
            <div className="w-96 h-60 p-8 my-4 bg-white bg-opacity-80 md:mx-0 mx-auto block ">
                <h3 className='font-bold text-xl mb-4 text-center'> Pets</h3>
                <h3 className='font-semibold'> "I love pur babys both dogs and cats! <br /> If I don't control myself,<br /> I might look like an insane pet thief!"</h3>
            </div>
        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center">

            <div className="h-60 my-4 w-96 p-8 items-center justify-center bg-orange-400 mx-auto block md:mx-0" >
                <h3 className='font-bold text-xl text-center mb-2 text-white'> Website I built and in use</h3>
                <div className="flex flex-wrap justify-center items-center">
                <a href="www.google.com" target="_blank" rel="noopener noreferrer">

                    <button className='bg-white text-gray py-2 px-4 w-32 rounded mb-2 mx-1'>
                        Gym management
                    </button>
                    </a>
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer">

                    <button className='bg-white text-gray py-2 px-4 w-32 rounded mb-2 mx-1'>
                        Kindgarden marketing
                    </button>
                    </a>
                    <a href="www.google.com" target="_blank" rel="noopener noreferrer">

                    <button className='bg-white text-gray py-2 px-4 w-32 rounded mb-2 mx-1'>
                        My personal website
                    </button>
                    </a>
                </div>
                <h3 className='text-white'>click to open</h3>
            </div>
            <div className="w-96 h-60 py-8 my-4 px-6 bg-white bg-opacity-80 mx-auto block md:mx-0">
                <h3 className='font-bold text-xl text-center mb-4'>IT</h3>
                <h3 className='font-semibold'>"I have a wide range of interests in IT areas!</h3>
                <h3 className='font-semibold'> Not sure why I'm so fraternity...  </h3>
                <h3 className='font-semibold'> at anything IT stuff that impact human life"</h3>
            </div>
        </div>
        <div className="mx-auto   rounded-md md:flex items-center justify-center">
            <img className="h-60 my-4 mx-auto block md:mx-0" src={Piece2} />
            <div className="w-96 h-60 p-8 my-4 bg-white bg-opacity-80 mx-auto block md:mx-0">
                <h3 className='font-bold  text-xl mb-4'> Outdoor</h3>
                <h3 className='font-semibold'> "Travel, hiking in beatiful place or not beatiful but with interesting people, </h3>
                <h3 className='font-semibold'> camping under gum tree if it's summer, </h3>
                <h3 className='font-semibold'> running at green place, </h3>
                <h3 className='font-semibold'> And kayaking "</h3>
            </div>
        </div>

        <div className="mx-auto  my-4 rounded-md md:flex items-center justify-center">
            <img className="h-60 mx-auto block md:mx-0" src={Piece2} />
            <div className="w-96 h-60 p-8 bg-white bg-opacity-80 mx-auto block md:mx-0">
                <h3 className='font-bold  text-xl mb-4'> Networking</h3>
                <h3 className='font-semibold'> "A new interest living in Adelaide, </h3>
                <h3 className='font-semibold'> always came across inspiring people, </h3>
                <h3 className='font-semibold'> Looking forward to more relationships that last
                 </h3>
                <h3 className='font-semibold'> with genuine people.</h3>
                <h3 className='font-semibold'>  Masking not works for me "</h3>

            </div>
        </div>

    </div>);
export default MyInterests;