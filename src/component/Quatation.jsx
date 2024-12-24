import React, { useState, useEffect } from 'react';

function Quotation() {
  const [rows, setRows] = useState([{ id: Date.now() }]);
  const [isPrinting, setIsPrinting] = useState(false); // Track printing mode

  // Function to add a new row
  const addRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  // Function to delete a row
  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  // Function to handle table print
  const printTable = () => {
    setIsPrinting(true); // Set print mode to true
    window.print();  // This triggers the browser's print dialog
  };

  // Reset the isPrinting flag after printing
  const onBeforePrint = () => {
    setIsPrinting(true);
  };

  const onAfterPrint = () => {
    setIsPrinting(false);
  };

  // Add event listeners to trigger before and after print
  useEffect(() => {
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% m-2 p-2'>
      <form>
        {/* Header Section with Logo */}
        <div className='header'>
          <div className='logo-container border-none'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/523/845/original/train-railway-icon-isolated-on-white-background-vector.jpg" // Replace with your logo URL
              alt="Logo"
              className='logo rounded-full'
            />
          </div>

          <div className='text-center -mt-16 '>
            
          
            <h1 className='text-amber-100 text-4xl'>SAKSHI RAIL CARGO</h1>
            <p>DOMESTIC & INTERNATIONAL FREIGHT FORWARDER</p>
            <p>
              Office Add: H.No.F-185, Gali No-8, Gaytri Colony, Baljit Nagar, Central
              Delhi, Delhi-110008
            </p>
            <h3>GSTIN-O7MBHPK5010J1ZJ</h3>
            <h3>MOB: 9540706399, Email: sakshirailcargo2019@gmail.com</h3>
            <h2>QUOTATION</h2>
          </div>
        </div>

        {/* Client Name */}
        <p className='ml-16'>CLIENT NAME: <input className='line border-slate-600 border-2 rounded-full pl-2 py-px' /></p>

       {/* Table with rows */}
       <table className=" border-slate-600 border-collapse w-11/12 mt-4">
          <thead>
            <tr>
              <th className="border-2 border-slate-600 p-2">BY TRAIN</th>
              <th className="border-2 border-slate-600 p-2">TRAIN NO.</th>
              <th className="border-2 border-slate-600 p-2">PWR KG SQ</th>
              <th className="border-2 border-slate-600 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-slate-600 line">
                <td className="border border-slate-600 p-1">
                  <input className="p-1 w-full bg-sky-400 rounded-full border-none" />
                </td>
                <td className="border border-slate-600 p-1">
                  <input className="p-1 w-full bg-sky-300 rounded-full" />
                </td>
                <td className="border border-slate-600 p-1">
                  <input className=" p-1 w-full bg-sky-300 rounded-full" />
                </td>
                <td className="border border-slate-600 p-1 text-center">
                  <button
                    className="m-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-1 px-2 rounded"
                    type="button"
                    onClick={() => deleteRow(row.id)}
                    style={{ display: isPrinting ? "none" : "inline" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       

          {/* Mohar Section - Lower part */}
       <div className="mohar-section mt-8 p-0 flex border-slate-600 border-2 w-11/12">
        <div className='ml-4 mr-4 p-3 pr-16 border-slate-600 border-r-2 inline-block'>
          
       <h2 className='text-xl underline'>Terms & Conditions:-</h2>
          <div className="mohar-text">
            {/* Terms & Conditions */}
        <div className='flex items-center'>
         <div className=''>
          <ol className='text-xs'>
            <li>1.The Owner Should Ensure The Goods For All Risks</li>
            <li>2.Disputes Relating To This Bill Must Be Submitted In Writing Within One Week From Receipt Of The Same</li>
            <li>3.Interest @ 18% Per Annum Will Be Charged If Payment Is Not Made Within 15 Days Of Bill Date</li>
            <li>4.All Disputes Are Subject To Delhi Jurisdiction</li>
          </ol>
          </div>
          </div>
          
        </div>
        </div>
        <div className=" p-3 ">
            <img
              src="https://i.imgur.com/YkzKXE2.jpeg" // Replace with your Mohar image URL
              alt="Mohar"
              className="w-32 h-auto mr-20 border rounded-full"
            />
        

        {/* Footer - Company Name */}
       <p className='text-sm italic'
       >SAKSHI RAIL CARGO</p> </div>
        </div>
        

       {/* Buttons */}
       <div className="button-container flex justify-between mt-4">
          {!isPrinting && (
            <>
              <button
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded ml-24"
                type="button"
                onClick={addRow}
              >
                Add Row
              </button>
              <button
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 mr-24 rounded"
                type="button"
                onClick={printTable}
              >
                Print Table
              </button>
            </>
          )}
        </div>

       
      </form>
    </div>
  );
}

export default Quotation;
