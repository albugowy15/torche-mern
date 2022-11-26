import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Icon from "react-bootstrap-icons";
import COURSESDATA from '../../../data/courses';
import Image from 'next/image';
import Link from 'next/link';

const CoursePage: NextPage = () =>{
    const router = useRouter();
    const { id } = router.query;
    const [courseData, setCourseData] = useState(COURSESDATA.find(({ slug }) => (slug == id)));
    const [selectedContent, setSelectedContent] = useState(courseData?.content[0])

    useEffect(() => {
        setCourseData(COURSESDATA.find(({ slug }) => (slug == id)))
    })
    useEffect(() => {
        setSelectedContent(courseData?.content[0])
    }, [courseData])

    return (
        <div>
             <div className='p-2.5 md:px-8 flex flex-col sm:flex-row justify-between items-start  md:items-center bg-[#f5faff]'>
                <h3 className='mb-0'>Courses</h3>
                <div>Courses / Our Courses / {courseData?.title}</div>
            </div>
            <div className='p-2.5 sm:px-8 lg:px-16'>
                <div>
                    <button onClick={() => {router.push('/courses')}} className='flex items-center gap-x-2.5 text-xl text-[#00366f] hover:text-[#5885E9]'>
                        <Icon.ArrowLeft className='text-lg'/>
                        Back
                    </button>
                    <div className='py-4 flex flex-col md:flex-row gap-x-12 gap-y-6'>
                        <div className='flex-[2_2_0%]'>
                            <img src={courseData?.image?.src} alt={'courses image'} className="w-full rounded-lg"/>
                            <h3 
                                className='font-bold mt-4 relative pb-2.5 before:content-[""] before:absolute before:block before:w-full before:h-px before:bg-[#eef0ef] before:bottom-0 before:left-0 after:content-[""] after:absolute after:block after:w-[60px] after:h-px after:bg-[#5885E9] after:bottom-0 after:left-0'
                            >
                                {courseData?.title}
                            </h3>
                            <p className='pt-2.5'>{courseData?.desc}</p>
                            <h6 className='font-bold'>{courseData?.references.length !== 0 ? 'References:' : ''}</h6>
                            <ol className='list-decimal'>
                                {
                                    courseData?.references.map((list) => (
                                        <li key={list}>{list}</li>
                                    ))
                                }
                            </ol>
                        </div>
                        <div className='flex-1'> 
                            <div className='flex justify-between rounded bg-[#f6f7f6;] p-3.5 mb-3.5'>
                                <h5 className='mb-0 font-bold'>Course Fee</h5>
                                <Link href={'/pricing'}>See Pricing</Link>
                            </div>
                            <div className='flex justify-between rounded bg-[#f6f7f6;] p-3.5 mb-3.5'>
                                <h5 className='mb-0 font-bold'>Reviews</h5>
                                <p className='mb-0 text-right'>{courseData?.rating } / 10</p>
                            </div>
                            <div className='flex justify-between rounded bg-[#f6f7f6;] p-3.5 mb-3.5'>
                                <h5 className='mb-0 font-bold'>Schedule</h5>
                                <p className='mb-0 text-right'>{courseData?.schedule}</p>
                            </div>
                            <div className='flex justify-between rounded bg-[#f5faff;] p-3.5 mb-3.5'>
                                <h5 className='mb-0 font-bold'>Register</h5>
                                <Link href={'/registration'}>Click Here</Link>
                            </div>

                            <div className='pt-5'>
                                <h4 className='font-bold border-b pb-3.5'>Tutors</h4>
                                {
                                    courseData?.tutors.map((tutor) => (
                                        <div key={tutor.slug} onClick={() => {router.push(`tutors/${tutor.slug}`)}} className='p-3.5 hover:bg-[#f6f7f6] flex items-center justify-center transition-all cursor-pointer rounded'>
                                        <p className='mb-0 font-bold text-center'>{tutor.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col md:flex-row gap-x-12 gap-y-6'>
                        <div className='w-full min-w-[250px] md:w-[300px]'>
                            {
                                courseData?.content.map((content) => (
                                    <div onClick={() => setSelectedContent(content)} className={`p-2.5 border-r ${selectedContent?.title === content.title ? "border-[#51C1CB] bg-[#00366f]" : "border-[#e5e7eb]"}`}>
                                        <p className={`mb-0 ${selectedContent?.title === content.title ? "text-white md:text-[#5885E9]": "text-[#212529]"}`}>{content.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='max-w-[700px]'>
                                <h4 className='font-bold'>{selectedContent?.title}</h4>
                                <p className='italic text-[#777777]'>{selectedContent?.desc}</p>
                                <ol className='list-decimal'>
                                {
                                    selectedContent?.material.map((list) => (
                                        <li key={list}>{list}</li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    )

} 
export default CoursePage