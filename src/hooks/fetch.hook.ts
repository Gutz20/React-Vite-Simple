// import axios from "axios";
// import { useEffect, useState } from "react";

// axios.defaults.baseURL = "http://localhost:4000";

// Maybe delete this
// export default function useFetch(query: any) {
//   const [getData, setData] = useState({
//     isLoading: false,
//     apiData: undefined,
//     status: null as number | null,
//     serverError: null,
//   });

//   useEffect(() => {
//     if (!query) return;

//     const fetchData = async () => {
//       try {
//         setData((prev) => ({ ...prev, isLoading: true }));

//         const { data, status } = await axios.get(`/api/${query}`);

//         if (status === 201) {
//           setData((prev) => ({ ...prev, isLoading: false }));
//           setData((prev) => ({ ...prev, apiData: data, status: status }));
//         }

//         setData((prev) => ({ ...prev, isLoading: false }));
//       } catch (error: any) {
//         setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
//       }
//     };
//     fetchData();
//   }, [query]);
// }
