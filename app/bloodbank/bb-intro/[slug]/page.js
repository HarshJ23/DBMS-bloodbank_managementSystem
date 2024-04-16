import { Link } from "next-view-transitions"
import { Button } from "@/components/ui/button"




export default function page({params}) {

  const id = params.slug;

  return (
 <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
 <h1 className="font-semibold text-2xl">Blood bank intro page</h1>

 <Link href="/"><Button>Home</Button></Link>
    <div className=" grid grid-cols-1 sm:grid-cols-5 gap-4">
<Link href={`/bloodbank/bbinfo/${id}`}><Button>Blood bank info</Button></Link>
<Link href={`/bloodbank/reserve/${id}`}><Button>Reserve page</Button></Link>
<Link href={`/bloodbank/adddonor/${id}`}><Button>Add new donor</Button></Link>
<Link href={`/bloodbank/donorpage/${id}`}><Button>Donor page</Button></Link>
<Link href={`/bloodbank/request-blood/${id}`}><Button>Request page</Button></Link>

    </div>
 </main>
  )
}
