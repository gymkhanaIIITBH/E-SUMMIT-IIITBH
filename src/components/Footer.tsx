
import { Instagram, Linkedin, MapPinIcon, Phone, X } from 'lucide-react'
import Logo from '/logo.svg'
import CollegeLogo from '/CollegeLogo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className='md:hidden flex mb-2 leading-10 items-center justify-start '>
            <img src={Logo} height={48} width={48} alt="Esummit" />
            <div className=" h-8 w-[2px] bg-white/30 mr-3 ml-2 " />
            <img src={CollegeLogo} height={48} width={48} alt="IITBH" />
          </div>
        <div>
          <p className="text-lg font-medium mb-1">© 2025 E-Summit. All rights reserved.</p>
          <p className="mb-3 text-gray-300">A celebration of collaboration and innovation.</p>
          <a href="/team" className="mb-2 text-gray-300 flex gap-2">For any query: <span className=' flex gap-1 items-center underline'> <Phone color='#0080c0' height={20}/> Contact </span></a>
          
          {/* <a href="#" className="underline text-gray-300">Meet our Contributors</a> */}
          <p className='mt-4 hidden md:block'>Follow us: </p>
          <div className='hidden md:flex gap-6 mt-1'> 
            <a href="/"><img src="/Logo.png" alt="Logo" className="h-10 w-10 object-contain" /></a> 
          <a href="https://x.com/IIITBhagalpur" className='flex items-center'><X className="h-7 w-7 text-gray-300 hover:text-white transition object-cover" /></a>
          <a href="https://www.instagram.com/esummit_iiitbh/" className='flex items-center'><Instagram className="h-7 w-7 text-gray-300 hover:text-white transition" /></a>
          <a href="https://in.linkedin.com/company/entrepreneurship-club-iiit-bhagalpur" className='flex items-center'><Linkedin className="h-7 w-7 text-gray-300 hover:text-white transition" /></a>
          </div>

        </div>
        <div className="flex flex-col items-start gap-2 mt-6 md:mt-0">
          {/* Replace with your logo if needed */}
          <div className='hidden md:flex leading-10 items-center justify-start '>
            <img src={Logo} height={48} width={48} alt="Esummit" />
            <div className=" h-8 w-[2px] bg-white/30 mr-3 ml-2 " />
            <img src={CollegeLogo} height={48} width={48} alt="IITBH" />
          </div>
          <div>
          <p className='mt-0 text-xl font-medium'> Reach us</p>
          <p className='text-gray-300'> Indian Institute of Information Technology Bhagalpur,</p>
          <p className='text-gray-300'>Bhagalpur - 813210, Bihar, India.</p>
          <a className='mt-2 underline flex gap-2 text-gray-300' href="https://maps.app.goo.gl/GJdt7mKqEQqzW8er7"> <MapPinIcon color='#80ff80'/> Address</a>
          </div>
          <p className='mt-4 block md:hidden'>Follow us: </p>
          <div className='flex md:hidden gap-6 mt-1'> 
            <a href="/"><img src="/Logo.png" alt="Logo" className="h-10 w-10 object-contain" /></a> 
          <a href="https://x.com/IIITBhagalpur" className='flex items-center'><X className="h-7 w-7 text-gray-300 hover:text-white transition object-cover" /></a>
          <a href="https://www.instagram.com/esummit_iiitbh/" className='flex items-center'><Instagram className="h-7 w-7 text-gray-300 hover:text-white transition" /></a>
          <a href="https://in.linkedin.com/company/entrepreneurship-club-iiit-bhagalpur" className='flex items-center'><Linkedin className="h-7 w-7 text-gray-300 hover:text-white transition" /></a>
          </div>


        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="flex justify-center">
        <span className="text-[8vw] font-bold text-center bg-gradient-to-b from-gray-500 to-black bg-clip-text text-transparent tracking-tight select-none  font-sans">E-SUMMIT</span>
      </div>
    </footer>
  )
}

export default Footer