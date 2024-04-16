import React from 'react'
import { Input } from '@/components/ui/input'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui/button'

export default function page({params}) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 p-24"> 
    <h1>DONOR PAGE</h1>
    <div className='flex flex-row gap-4'>
    <Link href={`/bloodbank/bb-intro/${params.slug}`}><Button>bb intro page</Button></Link>
    <Link href="/"><Button>Home</Button></Link>
    </div>
   
   <div className='flex flex-col gap-3' > 
   <Input className="shadow-md" placeholder="search by name"/>
   <Input className="shadow-md" placeholder="search by ID"/>


   </div>
    </main>
  )
}