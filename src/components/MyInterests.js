
import React, { useState, useEffect } from 'react';
import Cat from '../images/cat.jpeg';
import Dog from '../images/dog.jpg';
import Dog2 from '../images/dog.jpeg';
import Trip2 from '../images/other.jpg';
import Trip from '../images/trip2.jpg';
import Hiking from '../images/trip1.jpg';
import Volunteer from '../images/volunteer.jpg';
import Volunteer1 from '../images/volunteer1.jpeg';
import Volunteer2 from '../images/volunteer2.jpeg';
import Meetup from '../images/meetup.jpeg';
import Linkedin from '../images/linkedin.png';
import Folder from '../images/folder.png';
import File from '../images/file.png';
import Recyle from '../images/recycle.jpeg';
import VR from '../images/vr.png';
import GardenWork from '../images/gardenwork.jpeg';
import NoteSticker from './Note';
import Modal from './Modal';
const MyInterests = ({ isSmallScreen }) => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const dogs = [Dog, Dog2];
    const trips = [Trip, Trip2];
    const volunteers = [Volunteer2, Volunteer];
    const others = [VR, GardenWork];

    const [currentDog, setCurrentDog] = useState(dogs[0]);
    const [currentTrip, setCurrentTrip] = useState(trips[0]);
    const [currentVolunteer, setCurrentVolunteer] = useState(volunteers[0]);
    const [currentOther, setCurrentOther] = useState(others[0]);

    useEffect(() => {
        // Set up an interval to change the image
        const intervalId = setInterval(() => {
            setCurrentDog(current => (current === dogs[0] ? dogs[1] : dogs[0]));
            setCurrentTrip(current => (current === trips[0] ? trips[1] : trips[0]));
            setCurrentVolunteer(current => (current === volunteers[0] ? volunteers[1] : volunteers[0]));
            setCurrentOther(current => (current === others[0] ? others[1] : others[0]));

        }, 1500); // Change image every 3000 milliseconds (3 seconds)

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className='max-w-6xl flex-col items-center justify-center mx-auto'>


            <div className="mx-auto rounded-md md:flex items-center justify-center ">
                <NoteSticker size='256px' title='IT' text="I have a wide range of interests in IT areas! It's my career!" />
                <a href="https://www.linkedin.com/in/kaini-chang/" target="_blank" rel="noopener noreferrer">
                    <div className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded bg-customtop">
                        <img className="h-16 w-16 mt-20 mx-auto" src={Linkedin} />
                        <p className='font-bold text-customblue bg-transparent py-2 px-4  mb-2 mx-1 mx-auto block md:mx-2'>
                            Linkedin profile
                        </p>
                    </div>
                </a>
                <a href='https://kainichang.github.io/KainiChang_CV.pdf' download="KainiChang_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <div className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded bg-customtop">
                        <img className="h-16 w-16 mt-20 mx-auto" src={File} />
                        <p className='font-bold text-customorange bg-transparent py-2 px-4  mb-2 mx-1 mx-auto block md:mx-2'>
                            My CV<br />
                            (more projects)
                        </p>
                    </div>
                </a>

            </div>
            {!isSmallScreen ? (<div className="mx-auto rounded-md md:flex items-center justify-center ">
                <div onClick={() => openModal(currentDog)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded  animate-fade-in">
                    <img src={currentDog} className="min-w-full min-h-full object-cover" />
                </div>
                <NoteSticker size='256px' title='Pets' text='So much love to give to dogs and cats!' />
                <div onClick={() => openModal(Cat)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                    <img src={Cat} className="min-w-full min-h-full object-cover" />
                </div>
            </div>) : (<div className="mx-auto rounded-md md:flex items-center justify-center ">
                <NoteSticker size='256px' title='Pets' text='So much love to give to dogs and cats!' />
                <div onClick={() => openModal(currentDog)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded  animate-fade-in">
                    <img src={currentDog} className="min-w-full min-h-full object-cover" />
                </div>
                <div onClick={() => openModal(Cat)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                    <img src={Cat} className="min-w-full min-h-full object-cover" />
                </div>
            </div>)
            }
            {!isSmallScreen ? (
                <div className="mx-auto rounded-md md:flex items-center justify-center ">
                    <div onClick={() => openModal(Hiking)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                        <img src={Hiking} className="min-w-full min-h-full object-cover" />
                    </div>
                    <div onClick={() => openModal(currentTrip)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded animate-fade-in">
                        <img src={currentTrip} className="min-w-full min-h-full object-cover" />
                    </div>
                    <NoteSticker size='256px' title='Outdoor' text={<><span>traveling,</span><br/><span> hiking, </span><br/><span>camping,</span><br/><span> running, </span><br/><span>kayaking...</span></>} />

                </div>) : (
                <div className="mx-auto rounded-md md:flex items-center justify-center ">
                    <NoteSticker size='256px' title='Outdoor' text={<><span>traveling,</span><br/><span> hiking, </span><br/><span>camping,</span><br/><span> running, </span><br/><span>kayaking...</span></>} />
                    <div onClick={() => openModal(Hiking)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                        <img src={Hiking} className="min-w-full min-h-full object-cover" />
                    </div>
                    <div onClick={() => openModal(currentTrip)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded animate-fade-in">
                        <img src={currentTrip} className="min-w-full min-h-full object-cover" />
                    </div>
                </div>
            )}
            {!isSmallScreen ? (
                <div className="mx-auto rounded-md md:flex items-center justify-center ">
                    <div onClick={() => openModal(currentVolunteer)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded animate-fade-in">
                        <img src={currentVolunteer} className="min-w-full min-h-full object-cover" />
                    </div>
                    <NoteSticker size='256px' title='Networking' text="Feel inspired by meeting different people via meetups and volunteering" />

                    <div onClick={() => openModal(Volunteer1)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                        <img src={Volunteer1} className="min-w-full min-h-full object-cover" />
                    </div>

                </div>
            ) : (
                <div className="mx-auto rounded-md md:flex items-center justify-center ">
                    <NoteSticker size='256px' title='Networking' text="Feel inspired by meeting different people via meetups and volunteering" />
                    <div onClick={() => openModal(currentVolunteer)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded animate-fade-in">
                        <img src={currentVolunteer} className="min-w-full min-h-full object-cover" />
                    </div>
                    <div onClick={() => openModal(Volunteer1)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                        <img src={Volunteer1} className="min-w-full min-h-full object-cover" />
                    </div>
                </div>
            )}


            <div className="mx-auto rounded-md md:flex items-center justify-center ">
                <NoteSticker size='256px' title={<><span>Repairing & recycling, haircutting,</span><br/><span>puzzles games, virtual reality...</span></>}  text='' />
                <div onClick={() => openModal(Recyle)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded">
                    <img src={Recyle} className="min-w-full min-h-full object-cover" />
                </div>
                <div onClick={() => openModal(currentOther)} className="h-64 w-64 my-4 mx-auto block md:mx-2 overflow-hidden rounded animate-fade-in">
                    <img src={currentOther} className="min-w-full min-h-full object-cover" />
                </div>
            </div>
            {/* Modal for displaying enlarged images */}
            <Modal imgSrc={modalImage} onClose={closeModal} />
        </div>);
};
export default MyInterests;