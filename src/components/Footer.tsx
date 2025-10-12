
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <p className="text-lg font-medium mb-2">© 2025 E-Summit. All rights reserved.</p>
          <p className="mb-2 text-gray-300">A celebration of collaboration and innovation.</p>
          <a href="/team" className="mb-2 text-gray-300">For any query: <span className='underline'>Team</span></a>
          <br />
          <a href="#" className="underline text-gray-300">Meet our Contributors</a>
        </div>
        <div className="flex items-center gap-6 mt-6 md:mt-0">
          {/* Replace with your logo if needed */}
          <img src="/public/Logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <Twitter className="h-7 w-7 text-gray-300 hover:text-white transition" />
          <Github className="h-7 w-7 text-gray-300 hover:text-white transition" />
          <Linkedin className="h-7 w-7 text-gray-300 hover:text-white transition" />
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="flex justify-center">
        <span className="text-[8vw] font-bold text-center bg-gradient-to-b from-gray-500 to-black bg-clip-text text-transparent tracking-tight select-none font-sans">E-SUMMIT</span>
      </div>
    </footer>
  )
}

export default Footer