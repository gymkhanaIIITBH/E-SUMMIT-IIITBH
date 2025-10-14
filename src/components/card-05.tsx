import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'

const PlatCard = ({image='', name='', site=''}) => {
    

  const handleClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank');  
    } else {
      console.log('err in opening site')
    }
  };
  return (
    <Card className='bg-[#762527] max-w-md pt-0'>
      <CardContent className='px-4 py-2'>
        <img
          src={image}
          alt='Platinum Sponsor'
          className='aspect-video h-70 py-2 rounded-t-xl object-cover'
        />
      </CardContent>
      <CardHeader className='text-white text-center'>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Platinum Sponsor</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch w-full'>
        
        <Button className='w-full h-15 hover:bg-[#9d3157] text-white' onClick={(e)=> handleClick(site, e)} variant={'outline'}>Visit Site</Button>
      </CardFooter>
    </Card>
  )
}

export default PlatCard
