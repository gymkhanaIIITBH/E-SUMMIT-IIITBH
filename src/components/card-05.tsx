import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'

const PlatCard = ({image='', name='', site='', bgC =''}) => {
    

  const handleClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank');  
    } else {
      console.log('err in opening site')
    }
  };
  return (
    <Card className='h-full flex flex-col justify-end max-w-md pt-0' style={{backgroundColor: bgC}}>
      <CardContent className='px-4 flex items-center  py-2'>
        <img
          src={image}
          alt='Platinum Sponsor'
          className='aspect-video h-70 py-2 rounded-t-xl object-contain'
        />
      </CardContent>
      <CardHeader className='text-white flex justify-end h-36  sm:h-36 bg-black text-center'>
        <CardTitle className='font-montserrat text-lg sm:text-2xl font-bold '>{name}</CardTitle>
        <CardDescription className='text-gray-400'>Platinum Sponsor</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 bg-black max-sm:flex-col max-sm:items-stretch w-full'>
        
        <Button className='w-full h-15 bg-gray-800 hover:bg-[#9d3157] text-white' onClick={(e)=> handleClick(site, e)} variant={'outline'}>Visit Site</Button>
      </CardFooter>
    </Card>
  )
}

export default PlatCard
