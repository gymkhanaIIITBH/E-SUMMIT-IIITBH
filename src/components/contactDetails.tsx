// import * as React from "react"
// import { Copy, Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "./ui/input"
// import { Label } from "./ui/label"
// import { ScrollArea, ScrollBar } from "./ui/scroll-area"

//  const Contacts=[
//     {name:'Suyash Ranjan',  designation:'E-Cell Coordinator', email:'suyash.2201227ec@iiitbh.ac.in', phone:'+91 7302381447', linkedIn:'https://www.linkedin.com/in/suyash-ranjan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
//     {name:'Ayush K. Singh',  designation:'Public Relations Lead', email:'ayush8.230103010@iiitbh.ac.in', phone:'+91 9369640113', linkedIn:'http://linkedin.com/in/ayush-kumar-singh-98a369291'},
//     {name:'Param Preet Singh',  designation:'Sponsorship Team Lead', email:'param.230102042@iiitbh.ac.in', phone:'+91 8299424445', linkedIn:'https://www.linkedin.com/in/parampreet-singh-252782298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
//     {name:'Rajat Ranjan',  designation:'Marketing Team Lead', email:'testEMail', phone:'+91 9324572394', linkedIn:'https://www.linkedin.com/in/rajat-ranjan-b20ab3204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},


//   ]

// export default function DialogShare() {
// //   const [copied, setCopied] = React.useState(false)
// //   const shareUrl = "https://ui.shadcn.com/docs/installation"
//     const ref = React.useRef(null)
//   const copyToClipboard = (info:string) => {
//     navigator.clipboard.writeText(info)
//     // setCopied(true)
//     // setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <div className="w-full flex justify-center">
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="default">Share</Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-md bg-white text-black">
//           <DialogHeader>
//             <DialogTitle className="text-4xl font-extrabold">Contact our Team</DialogTitle>
//             <DialogDescription className="text-md text-gray-800">
//               Contact our Sponsorship team for further communication!
//             </DialogDescription>
//           </DialogHeader>
//           <div className="flex flex-col justify-center items-start space-x-2">
//             <ScrollArea className="h-60 rounded-md p-1  border w-full">
//             {Contacts.map((contact, indx)=>(
//                 <div className="flex-col px-2 flex mt-8" key={indx}>
//                     <div className="text-3xl font-bold">{contact.name}</div>
//                     <div className="flex mx-2 mt-3">
//                         <div className="text-md text-gray-700 font-light"> {contact.phone}</div>
//                         <Button 
//                             type="button" 
//                             size="sm" 
//                             className="px-3"
//                             onClick={()=>copyToClipboard(contact.phone)}
//                             >
//                             <span className="sr-only">Copy</span>
//                             <Copy className="h-4 w-4" />
                            
//                             </Button>
//                      </div>
//                     <div className="flex mx-2 ">
//                         <div className="text-md text-gray-700 font-light"> {contact.email}</div>
//                         <Button 
//                             type="button" 
//                             size="sm" 
//                             className="px-3"
//                             onClick={()=>copyToClipboard(contact.email)}
//                             >
//                             <span className="sr-only">Copy</span>
//                             <Copy className="h-4 w-4" />
                            
//                             </Button>
//                      </div>
//                 </div>
//             ))}
//                     <ScrollBar ref={ref} re className="absolute right-0 top-0" orientation="vertical" />
//             </ScrollArea>

//           </div>
//           <DialogFooter className="sm:justify-start">
//             <DialogClose asChild>
//               <Button type="button" variant="secondary">
//                 Close
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }