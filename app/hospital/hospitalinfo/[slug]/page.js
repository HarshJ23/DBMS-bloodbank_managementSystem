import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";


const sampleData = [
    {
      id: 1,
      name: "harsh",
      patientID: "BB001",
      bloodgrp: "A",
      contact: "123-456-7890"
    },
    {
        id: 2,
        name: "yash",
        patientID: "BB001",
        bloodgrp: "B+",
        contact: "123-456-7890"
      },
      {
        id: 3,
        name: "sam",
        patientID: "BB001",
        bloodgrp: "O",
        contact: "123-456-7890"
      },
  ];


export default function page({params}) {

  const id = params.slug;

  return (
    <main>

    <h1 className="my-4">hospital info info page</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-3 mb-6 z-60 mx-3">
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
      <tr>
        <th scope="col" className="py-3 px-6">patient Name</th>
        <th scope="col" className="py-3 px-6">patient ID</th>
        <th scope="col" className="py-3 px-6">Lblood grp</th>
        <th scope="col" className="py-3 px-6">Contact</th>
      </tr>
    </thead>
    <tbody>
      {sampleData.map((row) => (
          <tr key={row.id} className="bg-white border-b hover:bg-gray-100">
          <td className="py-4 px-6">{row.name || 'N/A'}</td>
          <td className="py-4 px-6">{row.patientID|| 'N/A'}</td>
          <td className="py-4 px-6">{row.bloodgrp || 'N/A'}</td>
          <td className="py-4 px-6">{row.contact || 'N/A'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<Link href="/" className="mx-4"><Button>back to home</Button></Link>
<Link href={`/hospital/h-intro/${id}`}><Button>h intro page</Button></Link>
      </main>
  )
}
