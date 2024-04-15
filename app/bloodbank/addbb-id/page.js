import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from 'next-view-transitions'

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Link href="/"><Button>Home</Button></Link>
      <Link href="/bloodbank/bb-intro"><Button>Blod bank intro page</Button></Link>

      <h1>Blood bank first page</h1>

      <div className="flex flex-col gap-3 w-2/3">
        <h1 className="font-semibold">Enter blood id</h1>
      <Input className="shadow-md"/>
      <Button>Submit</Button>
      </div>
    </div>
  )
}
