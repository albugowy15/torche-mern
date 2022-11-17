import { NextPage } from 'next';
import React, { useState } from 'react';
import Image from 'next/image';
import COURSESDATA from '../../data/courses'

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
      {
        coursesData.map((course) => (
          <div key={course.id} className="w-[410px] h-[530px] border rounded flex flex-col cursor-pointer hover:scale-[1.02] hover:shadow">
            <div className='w-full h-[200px] bg-cover bg-center rounded-tl rounded-tr' style={{backgroundImage: `url(${course.image.src})`}}></div>
            {/* <img src={course.image.src} alt="decoration"/> */}
            <div className='flex flex-col justify-between h-[330px]'>
              <div>
                <div className='flex justify-between items-center p-2.5'>
                  <p className='bg-[#f5faff] p-2 rounded font-bold'>{course.category}</p>
                  <p>{course.rating} / 10</p>
                </div>
                <div className='p-2 pt-0'>
                  <h4 className='font-bold'>{course.card_title}</h4>
                  <p className='text-[#777777]'>{course.card_desc}</p>
                </div>
              </div>
              <div className='px-2.5 py-3  border-t'>
                {course.tutors.length > 1 ? `${course.tutors.length} tutors` : `${course.tutors.length} tutor`}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  ) 
}

export default CoursesPage