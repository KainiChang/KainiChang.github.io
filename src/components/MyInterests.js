
import React, { useState } from 'react';
import Cat from '../images/cat.jpeg';
import Dog from '../images/dog.jpeg';
import Trip from '../images/trip.jpeg';
import Hiking from '../images/hiking.jpeg';
import Volunteer from '../images/volunteer.jpeg';
import Volunteer1 from '../images/volunteer1.jpeg';
import Volunteer2 from '../images/volunteer2.jpeg';
import Meetup from '../images/meetup.jpeg';
import Linkedin from '../images/linkedin.png';
import Folder from '../images/folder.png';
import File from '../images/file.png';
import Recyle from '../images/recycle.jpeg';
import Gardenwork from '../images/gardenwork.jpeg';
import NoteSticker from './Note';
import Modal from './Modal';
const MyInterests = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imgSrc) => {
      setModalImage(imgSrc);
    };
  
    const closeModal = () => {
      setModalImage(null);
    };

    return (
    <div className='max-w-6xl flex-col items-center justify-center mx-auto'>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
        <div onClick={() => openModal(Cat)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Cat} className="min-w-full min-h-full object-cover" />
            </div>            
            <NoteSticker size='256px' title='Pets' text='I love pur babys both dogs and cats!' />
            <div onClick={() => openModal(Dog)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Dog} className="min-w-full min-h-full object-cover" />
            </div>        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <NoteSticker size='256px' title='IT' text="I have a wide range of interests in IT areas! It's my career!" />
            <a href="https://www.linkedin.com/in/kaini-chang/" target="_blank" rel="noopener noreferrer">
                <div className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded bg-customlime">
                    <img className="h-16 w-16 mt-20 mx-auto"  src={Linkedin}/>
                <p className='font-bold text-customblue bg-transparent py-2 px-4  mb-2 mx-1 mx-auto block md:mx-2'>
                    Linkedin profile
                </p>
                </div>
            </a>
            <a href='https://kainichang.github.io/KainiChang_CV_compressed.pdf' download="KainiChang_CV_compressed.pdf" target="_blank" rel="noopener noreferrer">
                <div className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded bg-customlime">
                    <img className="h-16 w-16 mt-20 mx-auto"  src={File}/>
                <p className='font-bold text-customorange bg-transparent py-2 px-4  mb-2 mx-1 mx-auto block md:mx-2'>
                    My CV<br />
                    (more projects)
                </p>
                </div>
            </a>

        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
        <div onClick={() => openModal(Hiking)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Hiking} className="min-w-full min-h-full object-cover" />
            </div>
            <NoteSticker size='256px' title='Outdoor' text="Traveling, hiking, camping, running, kayaking..." />
            <div onClick={() => openModal(Trip)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Trip} className="min-w-full min-h-full object-cover" />
            </div>
        </div>

        <div className="mx-auto rounded-md md:flex items-center justify-center ">
        <div onClick={() => openModal(Volunteer2)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Volunteer2} className="min-w-full min-h-full object-cover" />
            </div>
        <div onClick={() => openModal(Volunteer1)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Volunteer1} className="min-w-full min-h-full object-cover" />
            </div>

            <NoteSticker size='256px' title='Networking' text="Enjoy meeting inspiring people via meetups and volunteering" />
        </div>
        <div className="mx-auto rounded-md md:flex items-center justify-center ">
            <NoteSticker size='256px' title='Fixing & Recycling, Haircutting, Puzzles game, Virtual reality...' text='' />
            <div onClick={() => openModal(Recyle)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Recyle} className="min-w-full min-h-full object-cover" />
            </div>
            <div onClick={() => openModal(Gardenwork)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                <img src={Gardenwork} className="min-w-full min-h-full object-cover" />
            </div>
        </div>
              {/* Modal for displaying enlarged images */}
      <Modal imgSrc={modalImage} onClose={closeModal} />
    </div>);};
export default MyInterests;