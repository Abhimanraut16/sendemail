// "use client"
// import { Inter } from "next/font/google";
// import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [creatorStatus, setcreatorStatus] = useState('solo')
//   const [firstName, setfirstName] = useState('')
//   const [secondName, setSecondName] = useState('')
//   const [email, setEmail] = useState('')
//   const [numer, setNumer] = useState('')
//   const [status, setStatus] = useState<any>(null)
//   const [jobTitle, setJobTitle] = useState('')
//   const [err, setErr] = useState('')

//   const handleSumit = async (e: any) => {
//     e.preventDEfault();

//     const formData = {
//       firstName: firstName,
//       secondName: secondName,
//       email: email,
//       numer: numer,
//       creatorStatus: creatorStatus
//     };

//     setStatus("loading")

//     try {
//       const response = await fetch("/api/submit-form", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       })
//       if (response.ok) {
//         setStatus("done")
//       } else {
//         console.log("Error sunmitting form");
//         setErr("Error submitting from")
//       }

//     } catch (error) {
//       console.error("Error submitting from", error);
//       setErr("Error submitting from")

//     }

//   }


//   return (
//     <main className={` ${inter.className}`}>
//       <form onSubmit={handleSumit} className="max-w-md mx-auto p-6 shadow-md rounded-md">
//         <h1 className="text-2xl font-bold mb-4">Send Email</h1>

//         <label className="block text-gray-700">Name:</label>
//         <input required
//           value={firstName}
//           onChange={(event) => setfirstName(event.target.value)}
//           type="text"
//           name="name"
//           id=""
//           className="border-b border-gray-500 w-full py-2 mb-4"
//           placeholder="First name"
//         />

//         <label className="block text-gray-700">Second Name:</label>
//         <input required
//           value={secondName}
//           onChange={(event) => setSecondName(event.target.value)}
//           type="text"
//           name="secondName"
//           id=""
//           className="border-b border-gray-500 w-full py-2 mb-4"
//           placeholder="Second name"
//         />

//         <label className="block text-gray-700">Job Title:</label>
//         <input required
//           value={jobTitle}
//           onChange={(event) => setJobTitle(event.target.value)}
//           type="text"
//           name="jobTitle"
//           id=""
//           className="border-b border-gray-500 w-full py-2 mb-4"
//           placeholder="Job title"
//         />

//         <label className="block text-gray-700">Email:</label>
//         <input required
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           type="email"
//           name="email"
//           id=""
//           className="border-b border-gray-500 w-full py-2 mb-4"
//           placeholder="Email"
//         />

//         <label className="block text-gray-700">Phone Number:</label>
//         <input required
//           value={numer}
//           maxLength={11}
//           pattern="[0-9]{11}"
//           type="number"
//           name="number"
//           id=""
//           className="border-b border-gray-500 w-full py-2 mb-4"
//           placeholder="Phone number"
//         />

//         <div
//           onClick={() => setcreatorStatus("solo")}
//           className=""><p>Numer of employees</p>
//           <div className={`flex gap-3 py-3 w-full font-light rounded border flex-row creatorStatus === "solo" ? "border-white" : "boder-gray-500" `}>

//           </div>

//           <div
//             onClick={() => setcreatorStatus('team')}
//             className={`flex gap-3 py-3 w-full font-light rounded border flex-row creatorStatus === "solo" ? "border-white" : "boder-gray-500" `}>

//           </div>
//         </div>

//         <button type="submit"
//           className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">

//           {!status ? "get in touch"
//             : status === "loading"
//               ? "Sending.."
//               : status === "done"
//                 ? "Sent!"
//                 : null

//           }
//         </button>
//       </form>
//     </main>
//   );
// }





"use client"
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    jobTitle: "",
    email: "",
    number: "",
  });
  

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Add form submission logic here
    console.log(formData);
  };
  

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Send Email</h1>

        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-b border-gray-500 w-full py-2 mb-4"
          placeholder="First name"
        />

        <label className="block text-gray-700">Second Name:</label>
        <input
          type="text"
          name="secondName"
          value={formData.secondName}
          onChange={handleChange}
          className="border-b border-gray-500 w-full py-2 mb-4"
          placeholder="Second name"
        />

        <label className="block text-gray-700">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="border-b border-gray-500 w-full py-2 mb-4"
          placeholder="Job title"
        />

        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-b border-gray-500 w-full py-2 mb-4"
          placeholder="Email"
        />

        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="border-b border-gray-500 w-full py-2 mb-4"
          placeholder="Phone number"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </>
  );
}




