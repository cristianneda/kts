
import React, {useState} from "react";
import nextId from "react-id-generator";
import "../../App.css"


const Table = ({spots, setSpots,}) => {
  
  const [order, setOrder] = useState("ASC");
  const sorter = (col) => {
    if (order === "ASC"){
      const sorted = [...spots].sort((a,b) => 
        a[col] > b[col] ? 1 : -1
      );
      setSpots(sorted);
      setOrder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...spots].sort((a,b) => 
        a[col] < b[col] ? 1 : -1
      );
      setSpots(sorted);
      setOrder("ASC");
    }}
  return (
    <div class="overflow-y-auto w-full max-h-screen">
<div class="flex flex-col">
  <div class="overflow-x-auto ">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table id='sorting-table' class="min-w-full text-center">
          <thead class="border-b bg-[#0b2531]">
            <tr>
              <th data-type="number"  scope="col" class="text-base font-bold text-white px-3 py-4">#</th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4"><button class="table__header" onClick={()=>sorter('name')}>Name</button></th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4"><button class="table__header" onClick={()=>sorter('country')}>Country</button></th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4">Latitude</th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4">Longitude</th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4"><button class="table__header" onClick={()=>sorter('probability')}>Wind Chance</button></th>
              <th scope="col" class="text-base font-bold text-white px-3 py-4"><button class="table__header" onClick={()=>sorter('month')}>Month to Be</button></th>
              
            </tr>
          </thead>
          <tbody>
          {(spots).map((spot) => 
            <tr key={nextId()} class="bg-white border-b">
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.id} </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.name} </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.country} </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.lat} </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.lng} </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.probability}% </td>
              <td class="text-lg text-gray-900 font-medium px-4 py-3 whitespace-nowrap"> {spot.month} </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default Table;