// import * as React from "react"
import { Copy, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MdEmail, MdPhone } from "react-icons/md"
import { InteractiveHoverButton } from "./InteractiveHoverButton"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import { ScrollArea, ScrollBar } from "./ui/scroll-area"

 const Contacts=[
    {name:'Suyash Ranjan',  designation:'E-Cell Coordinator', email:'suyash.2201227ec@iiitbh.ac.in', phone:'+91 7302381447', linkedIn:'https://www.linkedin.com/in/suyash-ranjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {name:'Ayush K. Singh',  designation:'Public Relations Lead', email:'ayush8.230103010@iiitbh.ac.in', phone:'+91 9369640113', linkedIn:'http://linkedin.com/in/ayush-kumar-singh-98a369291'},
    {name:'Param Preet Singh',  designation:'Sponsorship Team Lead', email:'param.230102042@iiitbh.ac.in', phone:'+91 8299424445', linkedIn:'https://www.linkedin.com/in/parampreet-singh-252782298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {name:'Krish Shukla',  designation:'Sponsorship Team Associate', email:'krish.240101017@iiitbh.ac.in', phone:'+91 9455140904', linkedIn:'https://www.linkedin.com/in/rajat-ranjan-b20ab3204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},


  ]

export default function DialogShare() {
//   const [copied, setCopied] = React.useState(false)
//   const shareUrl = "https://ui.shadcn.com/docs/installation"
    // const ref = React.useRef(null)
  const copyToClipboard = (info:string) => {
    navigator.clipboard.writeText(info)
    // setCopied(true)
    // setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <InteractiveHoverButton>Contact us</InteractiveHoverButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-lg bg-gradient-to-b from-gray-900 to-emerald-800 text-gray-300">
          <DialogHeader>
            <DialogTitle className="text-4xl font-extrabold">Contact our Team</DialogTitle>
            <DialogDescription className="text-md pb-4 font-semibold text-gray-400">
              Contact our Sponsorship team for further communication!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col overflow-y-auto py-4   rounded-lg max-h-60 justify-center items-start space-x-2">
            {Contacts.map((contact, indx)=>(
                <div className="flex flex-col gap-8" key={indx}>
                <div className="flex-col px-2 flex mt-8" >
                    <div className="text-2xl text-gray-100 font-bold">{contact.name}</div>
                    <div className="flex mx-2 mt-3 mb-3 justify-between w-full">
                        <div className="text-md flex text-gray-300 font-montserrat  items-center"><MdPhone size='20px'/> <span className="mx-2">{contact.phone}</span> </div>
                        <Button 
                            type="button" 
                            size="sm" 
                            className="hidden sm:inline mx-2 px-3 bg-emerald-700  hover:bg-gray-600"
                            variant='secondary'
                            onClick={()=>copyToClipboard(contact.phone)}
                            >
                            <span className="sr-only">Copy</span>
                            <Copy className="text-white h-4 w-4" />
                            
                        </Button>
                        <a className="inline sm:hidden" href={`tel:${contact.phone}`}>
                        <Button 
                            type="button" 
                            size="sm" 
                            className=" mx-2 px-3 bg-emerald-700  hover:bg-gray-600"
                            onClick={()=>copyToClipboard(contact.phone)}
                            >
                            <span className="sr-only">Redirect</span>
                            <Send className="text-white h-4 w-4" />
                            
                        </Button>
                        </a>
                     </div>
                    <div className="flex mx-2 justify-between w-full ">
                        <div className="text-md flex items-center  text-gray-300 font-montserrat"><MdEmail/> <span className="mx-2">{contact.email}</span></div>
                        <Button 
                            type="button" 
                            size="sm" 
                            className="hidden sm:inline mx-2 px-3 bg-emerald-700  hover:bg-gray-600"
                            onClick={()=>copyToClipboard(contact.email)}
                            >
                            <span className="sr-only">Copy</span>
                            <Copy className="text-white h-4 w-4" />
                            
                        </Button>
                        <a className="inline sm:hidden" href={`mailto:${contact.email}`}>
                        <Button 
                            type="button" 
                            size="sm" 
                            className=" mx-2 px-3 bg-emerald-700  hover:bg-gray-600"
                            onClick={()=>copyToClipboard(contact.email)}
                            >
                            <span className="sr-only">Redirect</span>
                            <Send className="text-white h-4 w-4" />
                            
                        </Button>
                        </a>
                     </div>
                </div>
                {/* <hr className="" /> */}
                </div>
            ))}


          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className="w-full h-8 bg-gray-950 text-gray-100 font-bold" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}