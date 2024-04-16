import React from 'react'
import { Input } from '@/components/ui/input'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui/button'

export default function page({params}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 

    <h1 className='font-semibold text-3xl my-3'>Request blood</h1>
    <Link href="/"><Button>Back to Home page</Button></Link>
    <Link href={`/bloodbank/bb-intro/${params.slug}`} className='my-3'><Button>BB-intro page</Button></Link>

   <div className='flex flex-col my-3'> 
   <p>Enter your requirements</p>
   <form>
    <div  className="grid w-full items-center gap-4">
    <Input className="shadow-md" placeholder="Enter paitent ID"/>
    <Input className="shadow-md" placeholder="blood grp required"/>
    <Input className="shadow-md" placeholder="quantity"/>
    <Input className="shadow-md" placeholder="request date"/>
    <Input className="shadow-md" placeholder="status"/>
    <Button className="my-3 justify-center">
      SUBMIT
    </Button>

    </div>

   </form>

   </div>
    </main>
  )
}
