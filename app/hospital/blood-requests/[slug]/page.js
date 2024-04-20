'use client'
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect , useState } from "react";





export default function page({params}) {
  const [requestData , setRequestData] =  useState([]);

  const id = params.slug;
  useEffect(()=>{
    const getRequests = async()=>{
      try {
        const response = await fetch('http://localhost:3000/getall?',{
          method : "GET",
          headers:{
            "Content-type" : "application/json"
          }
        });
  
        const data = await response.json();
        setRequestData(data);
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    }
    
    getRequests();

  },[])

  return (
    <main>

    <h1 className="my-4">patient info info page</h1>
    <div className='flex flex-col gap-3 w-2/3 mx-auto' > 
   <Input className="shadow-md" placeholder="search by name"/>
   <Input className="shadow-md" placeholder="search by patient ID"/>


   </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg mt-3 mb-6 z-60 mx-3">
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-sm text-gray-700 uppercase bg-gray-100">
      <tr>
        <th scope="col" className="py-3 px-6">hospital id</th>
        <th scope="col" className="py-3 px-6">quantity</th>
        <th scope="col" className="py-3 px-6">blood grp</th>
        <th scope="col" className="py-3 px-6">request date</th>
        <th scope="col" className="py-3 px-6">patient id</th>
        <th scope="col" className="py-3 px-6">Status</th>



      </tr>
    </thead>
    <tbody>
      {requestData.map((row) => (
          <tr key={row.id} className="bg-white border-b hover:bg-gray-100">
          <td className="py-4 px-6">{row.hospitalId || 'N/A'}</td>
          <td className="py-4 px-6">{row.quantity|| 'N/A'}</td>
          <td className="py-4 px-6">{row.bloodType || 'N/A'}</td>
          <td className="py-4 px-6">{row.requestDate || 'N/A'}</td>
          <td className="py-4 px-6">{row.patientId|| 'N/A'}</td>
          <td className="py-4 px-6">{row.status ? "Approved" : "Not approved"}</td>



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
