import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Agence() {
  const ImageArray = [
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg'
  ];

  const imagedivref = useRef(null);
  const imageRef = useRef(null);
 
  useGSAP(() => {
    gsap.to(imagedivref.current, {

      x: 0,
      scrollTrigger: {
        trigger: imagedivref.current,
        
        start: 'top 30%',
        end: 'top -100%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const index = Math.min(Math.floor(elem.progress * ImageArray.length), ImageArray.length - 1);
          imageRef.current.src = ImageArray[index];
        }
      }
    });
  });

  return (
    <div className='agence  '>
      <div className='section-1 h-screen p-2'>
        <div ref={imagedivref} className=' overflow-hidden absolute h-[40vh] w-[30vh] rounded-2xl left-[32vw] top-[-32vh] '>
          <img ref={imageRef} className=' w-full h-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>


        <div className='font-[font1] relative text-black h-[100vh] w-full '>
          <div className=''>
            <h1 className='text-[19vw] uppercase mt-[60vh] leading-[16vw]  text-center '>SEVEN7Y
              TWO</h1>
            <div className='pl-[40%] '>
              <p className=' text-5xl ' > &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen">

      </div>
    </div>

  );
}

export default Agence;
