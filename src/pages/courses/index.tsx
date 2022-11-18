import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
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
    return data.filter((item: any) => item.title.toLowerCase().includes(query)) 
 }

  console.log(coursesData)

  return (
    <div>
      <div className='p-2.5 md:px-8 flex justify-between items-center bg-[#f5faff]'>
        <h3 className='mb-0'>Courses</h3>
        <div>Courses / Our Courses</div>
      </div>
      <div className='p-8 lg:p-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          coursesData.map((course) => (
            <CoursesCard key={course.id} course={course}/>
          ))
        }
      </div>
    </div>
  ) 
}

export default CoursesPage