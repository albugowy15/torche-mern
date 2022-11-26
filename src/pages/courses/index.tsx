import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as Icon from "react-bootstrap-icons";
import COURSESDATA from '../../data/courses'
import CoursesCard from '@/components/CoursesCard'

const  CoursesPage: NextPage = () =>  {
  const [coursesData, setCoursesData] = useState(COURSESDATA);

  // For Pagination Page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  // Get Current Page for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // search functionality
  const [query, setQuery] = useState("");

  function search(data: any[]){
    return data.filter((item: any) => item.card_title.toLowerCase().includes(query)) 
 }  

  // filter funcitonality
  const [filterActive, setFilterActive] = useState("all")

  function handleFilter(data: any[]){
    if(filterActive === "all"){
      return data;
    }else {
      return data.filter((item: any) => item.category.toLowerCase().includes(filterActive)) 
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [filterActive])


  return (
    <div className='pb-5'>
      <div className='p-2.5 md:px-8 flex justify-between items-center bg-[#f5faff]'>
        <h3 className='mb-0'>Courses</h3>
        <div>Courses / Our Courses</div>
      </div>
      <div className='px-8 lg:px-16 flex flex-col lg:flex-row  items-center justify-between pt-8 '>
        <div className='flex gap-x-4 md:gap-x-8 pb-3.5 lg:pb-0 '>
          <button onClick={() => setFilterActive('all')} className={`${filterActive === "all" ? 'bg-[#5885E9] text-white px-4 py-2 rounded-sm': 'hover:text-[#5885E9] transition-all'} text-xs md:text-base`}>All</button>
          <button onClick={() => setFilterActive('basic engineering')} className={`${filterActive === "basic engineering" ? 'bg-[#5885E9] text-white px-4 py-2 rounded-sm': 'hover:text-[#5885E9] transition-all'} text-xs md:text-base`}>Basic Engineering</button>
          <button onClick={() => setFilterActive('basic process engineering')} className={`${filterActive === "basic process engineering" ? 'bg-[#5885E9] text-white px-4 py-2 rounded-sm': 'hover:text-[#5885E9] transition-all'} text-xs md:text-base`}>Basic Process Engineering</button>
          <button onClick={() => setFilterActive('advanced process engineering')} className={`${filterActive === "advanced process engineering" ? 'bg-[#5885E9] text-white px-4 py-2 rounded-sm': 'hover:text-[#5885E9] transition-all'} text-xs md:text-base`}>Advanced Process Engineering</button>
        </div>
        <div className={`flex border-2 border-solid border-slate-300 py-2 px-4 rounded-3xl items-center my-2`}>
          <input type="text" placeholder="Search" className='outline-none' onChange={e => setQuery(e.target.value)} />
          <i>
						<Icon.Search className='text-slate-500' />
					</i>
      </div>
      </div>
      <div className='p-8 lg:p-16 lg:pt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        { query === "" ? (
          handleFilter(coursesData).slice(indexOfFirstPost, indexOfLastPost).map((course) => (<CoursesCard key={course.id} course={course}/> ))
        ) : ( 
          search(handleFilter(coursesData)).map((course) =>  (<CoursesCard key={course.id} course={course}/>))
        )}
      </div>
      <div className='flex items-center justify-center'>
        <button
          className="mx-5 disabled:cursor-not-allowed enabled:hover:text-[#5885E9]"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1 && true}
        >
              <Icon.ArrowLeft className='text-lg'/>
        </button>
        <p className='mb-0'>{currentPage}</p>
        <button
            className="mx-5 disabled:cursor-not-allowed enabled:hover:text-[#5885E9]"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(handleFilter(coursesData).length / postsPerPage)}
          >
            <Icon.ArrowRight className='text-lg'/>
          </button>
      </div>

    </div>
  ) 
}

export default CoursesPage