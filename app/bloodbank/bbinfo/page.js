import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";


const sampleData = [
    {
      id: 1,
      bbName: "Blood Bank A",
      bbId: "BB001",
      location: "City A",
      contact: "123-456-7890"
    },
    {
      id: 2,
      bbName: "Blood Bank B",
      bbId: "BB002",
      location: "City B",
      contact: "987-654-3210"
    },
    {
      id: 3,
      bbName: "Blood Bank C",
      bbId: "BB003",
      location: "City C",
      contact: "456-789-0123"
    }
  ];


export default function page() {
  return (
    <main>

    <h1 className="my-4">Blood bank info page</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-3 mb-6 z-60 mx-3">
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
      <tr>
        <th scope="col" className="py-3 px-6">BB Name</th>
        <th scope="col" className="py-3 px-6">BB ID</th>
        <th scope="col" className="py-3 px-6">Location</th>
        <th scope="col" className="py-3 px-6">Contact</th>
      </tr>
    </thead>
    <tbody>
      {sampleData.map((row) => (
          <tr key={row.id} className="bg-white border-b hover:bg-gray-100">
          <td className="py-4 px-6">{row.bbName || 'N/A'}</td>
          <td className="py-4 px-6">{row.bbId || 'N/A'}</td>
          <td className="py-4 px-6">{row.location || 'N/A'}</td>
          <td className="py-4 px-6">{row.contact || 'N/A'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<Link href="/" className="mx-4"><Button>back to home</Button></Link>
<Link href="/bloodbank/bb-intro"><Button>bb intro page</Button></Link>
      </main>
  )
}
