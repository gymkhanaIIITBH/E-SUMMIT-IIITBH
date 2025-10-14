import { MdEmail } from 'react-icons/md';
import { FaPhone, FaLinkedin } from 'react-icons/fa';
import image1 from '../../public/hero-bg.svg';


/**
 * @typedef {Object} TeamCardProps
 * @property {string} name - Team member's name.
 * @property {string} image - URL of the team member's image.
 * @property {string} designation - Team member's job title.
 * @property {string} email - Team member's email address.
 * @property {string | null} phone - Team member's phone number, or null.
 * @property {string} linkedIn - Team member's LinkedIn URL.
 * @property {(type: 'email' | 'phone') => void} onCopy - Callback to notify the parent when an item is copied.
 */

function TeamCard({
  name = 'Test',
  image = image1,
  designation = 'Marketing & PR Lead',
  email = 'test@example.com',
  phone = null,
  linkedIn = 'https://linkedin.com/in/test',
  onCopy = () => {},
}: {
  name: string;
  image: string;
  designation: string;
  email: string;
  phone: string | null;
  linkedIn: string;
  onCopy: (type: 'email' | 'phone') => void;
}) {
  
  const handleCopy = (data: string | null, type: 'email' | 'phone') => {
    if (data && data.trim() !== '') {
      navigator.clipboard
        .writeText(data)
        .then(() => {
          onCopy(type); // Notify the parent component to show the alert
        })
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };

  const handleLinkedInClick = () => {
    if (linkedIn) {
      window.open(linkedIn, '_blank');
    }
  };

  return (
    <div className="overflow-hidden group mt-4 mb-4 relative w-64 h-auto flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white text-black rounded-bl-3xl rounded-tr-3xl">
      {/* Card Image */}
      <div className="relative w-full h-60 overflow-hidden rounded-tl-sm rounded-tr-3xl mb-2">
        {/* Card Image, absolutely positioned, zooms on hover, stays behind overlay and label */}
        <img
          src={image}
          className="object-cover bg-black absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-70 z-0"
          alt={name}
        />
        {/* Overlay - Contact Icons */}
        <div className="absolute bg-opacity-35 bg-black inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10 space-x-2">
          {/* Icons with enhanced hover/focus styles */}
          <button
            onClick={() => handleCopy(email, 'email')}
            className="text-white hover:text-cyan-300 transition-all duration-300 p-2 rounded-full border border-white hover:border-cyan-300 focus:outline-none bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            aria-label={`Copy ${name}'s email`}
          >
            <MdEmail size={22} />
          </button>
          {phone && (
            <button
              onClick={() => handleCopy(phone, 'phone')}
              className="text-white hover:text-green-300 transition-all duration-300 p-2 rounded-full border border-white hover:border-green-300 focus:outline-none bg-black/30 hover:bg-black/50 backdrop-blur-sm"
              aria-label={`Copy ${name}'s phone number`}
            >
              <FaPhone size={18} />
            </button>
          )}
          {/* LinkedIn Icon - Navigation */}
          <button
            onClick={handleLinkedInClick}
            className="text-white hover:text-blue-300 transition-all duration-300 p-2 rounded-full border border-white hover:border-blue-300 focus:outline-none bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            aria-label={`View ${name}'s LinkedIn profile`}
          >
            <FaLinkedin size={20} />
          </button>
        </div>
      </div>

      {/* Text Content Section (Reduced Font Sizes and enhanced look) */}
      <div className="text-center relative flex flex-col justify-start pb-2 px-1 font-newsreader">
        <div className="text-base xs:text-lg sm:text-xl relative top-0 leading-tight text-wrap font-extrabold text-black/90 mt-2">
          {name}
        </div>
        <div className="text-xs xs:text-sm sm:text-base font-medium text-wrap text-black/70 mb-1">
          {designation}
        </div>
      </div>
    </div>
  );
}


export default TeamCard;