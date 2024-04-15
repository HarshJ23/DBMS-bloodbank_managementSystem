import React from 'react'
import { Input } from '@/components/ui/input'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 

    <h1 className='font-semibold text-3xl'>Add donor page</h1>
    <Link href="/"><Button>Back to Home page</Button></Link>
    <Link href="/bloodbank/bb-intro" className='my-3'><Button>BB-intro page</Button></Link>

   <div className='flex flex-col my-3'> 
   <p>Enter your details</p>
   <form>
    <div  className="grid w-full items-center gap-4">
    <Input className="shadow-md" placeholder="Enter your name"/>
    <Input className="shadow-md" placeholder="contact number"/>
    <Input className="shadow-md" placeholder="gender"/>
    <Input className="shadow-md" placeholder="age"/>
    <Input className="shadow-md" placeholder="Enter blood group"/>
    <Input className="shadow-md" placeholder="blood bank ID"/>
    <Button className="my-3 justify-center">
      Add Donor
    </Button>

    </div>

   </form>

   </div>
    </main>
  )
}
