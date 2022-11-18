const CoursesCard = ({course}) => {
    return (
        <div key={course.id} className="w-full h-[530px] border rounded flex flex-col cursor-pointer hover:scale-[1.02] hover:shadow">
              <div className='w-full h-[200px] bg-cover bg-center rounded-tl rounded-tr' style={{backgroundImage: `url(${course.image.src})`}}></div>
              {/* <img src={course.image.src} alt="decoration"/> */}
              <div className='flex flex-col justify-between h-[330px]'>
                <div>
                  <div className='flex justify-between items-center p-2.5'>
                    <p className='bg-[#f5faff] p-2 rounded font-bold mb-0'>{course.category}</p>
                    <p>{course.rating} / 10</p>
                  </div>
                  <div className='p-2 pt-0'>
                    <h4 className='font-bold'>{course.card_title}</h4>
                    <p className='text-[#777777]'>{course.card_desc}</p>
                  </div>
                </div>
                <div className='px-2.5 h-[40px] flex items-center border-t'>
                  {course.tutors.length > 1 ? `${course.tutors.length} tutors` : `${course.tutors.length} tutor`}
                </div>
              </div>
         </div>
    )
}

export default CoursesCard