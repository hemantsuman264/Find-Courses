import React from "react";
import {apiUrl, filterData} from "./data"
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import {useEffect, useState} from "react";
import { toast } from "react-toastify";


const App = () => { 

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title) //by default rendering All page

  const fetchData = async () => {

    setLoading(true); //show the Loader icon while data being called from API
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      // console.log(output);
    }

    catch(error){
      toast.error("Something went wrong")
    }
    setLoading(false); //remove loader after get rendered on UI
  }

  useEffect( () => {
    fetchData(); //function call
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <div>
        <Navbar/>
      </div>

      <div>
        <Filter category={category} setCategory={setCategory} filterData={filterData}/>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
      }
      </div>
    </div>
  );
};

export default App;
