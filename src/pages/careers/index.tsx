import Image from 'next/image'
import HeroImage from '../../../public/assets/img/carousel-1.webp'
import styled from "styled-components";
import { NextPage } from "next";
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';
import about1 from '../../../public/assets/img/about-1.webp'
import about2 from '../../../public/assets/img/about-2.webp'
import about4 from '../../../public/assets/img/about-4.webp'
import aboutExtra from '../../../public/assets/img/about-extra-1.svg'


const  CareersPage: NextPage = () =>  {
  const StyledDiv = styled.div`
  &:before{
    content: "";
    background-color: rgba(14, 29, 52, 0.8);
    position: absolute;
    inset: 0;
  }
  `
  const job = [
    {
      title : 'Finance',
      icon : <Icon.CurrencyDollar/>,
      vacancy :'1 vacancy',
      link: '/careers/finance/Opening.jsx' 
    },
    {
      title : 'General Affairs',
      icon : <Icon.PersonWorkspace/>,
      vacancy :'1 vacancy',
      link: '/careers/general-affair/Opening.jsx'
    },
    {
      title: 'Curriculum and Education',
      icon : <Icon.BookHalf/>,
      vacancy :'0 vacancy',
      link: '/careers/OpeningEmpty.jsx' 
    },
    {
      title: 'Marketing and Sales',
      icon : <Icon.BarChartLine/>,
      vacancy :'6 vacancy',
      link: '/careers/marketing-and-sales/Opening.jsx' 
    },
    {
      title: 'CEO Office',
      icon : <Icon.PersonSquare/>,
      vacancy :'0 vacancy',
      link: '/careers/OpeningEmpty.jsx' 
    },
    {
      title:'Technology and Engineering',
      icon : <Icon.Laptop/>,
      vacancy: '10 vacancy',
      link: '/careers/technology-and-engineering/Opening.jsx' 
    },
    {
      title: 'Human Resource',
      icon : <Icon.PeopleFill/>,
      vacancy: '2 vacancy',
      link: '/careers/human-resource-development/Opening.jsx' 
    },
    {
      title: 'Tutors',
      icon: <Icon.Book/>,
      vacancy: '0 vacancy',
      link: '/careers/tutors/Opening.jsx' 
    }
  ]

  return (
    /* header */
    <div className='pt-[80px]'>
      <StyledDiv style={{backgroundImage: `url('/assets/img/carousel-1.webp')`}} className="w-full min-h-[300px] bg-cover bg-center bg-no-repeat relative">
        <div className='relative flex justify-center items-center'>
          <div className='w-[50%] pt-[90px] lg:mb-[10px]'>
            <h2 className='text-[28px] lg:text-[56px] text-center font-medium text-white'>Carrers</h2>
            <p className='text-center text-[15px] lg:text[10px] text-[#ffffffcc]'>Torche Education is open for various internship positions for students and freshgraduates to feel working environtment at startup company.</p>
          </div>
        </div>
      </StyledDiv>
    
      <div className="w-full px-20 bg-[#f5faff]">
        <div className='flex justify-between  p-[15px] items-center'>
          <h2 className='text-[24px] text-[#444444] font-light font-Radhjani'>Torche&apos;s Careers</h2>
          <ol>
            <li className='font-Cairo text-[14px]'>Careers</li>
          </ol>
        </div>
      </div>
      {/* End header */}

      {/* Card */}
      <div className='py-5'>
        <h1 className='text-center mb-2 font-rajdhani font-bold text-[40px] text-[#444444]'>Explore By Category</h1>
      </div>
      <div className='grid grid-cols-4 px-20 content-center'>
          {
            job.map((data, index)=> {
                return (
                  <div key={index} className="p-3 grid box-border">
                    <div className=' grid'>
                      <a key={index} href={data.link} className='p-3 font-rajdhani shadow-lg rounded-lg no-underline border border-solid border-transparent'>
                          <svg viewBox="0 0 60 20">{data.icon}</svg>
                          <h3 className='text-black font-bold text-[20px]'>{data.title}</h3>
                          <h6>{data.vacancy}</h6>
                        </a>
                    </div>
                  </div>
                )
              })
            }
        </div>
        {/*End Card*/}

        {/* Bagian Start Gambar dan Kickstart */}
        <div className='flex px-24 py-16'>
          <div className='flex-row'>
            <Image className='rounded-tl-lg w-[306px] h-[306px]' src={about1} alt="logo"></Image>
            <Image className='rounded-bl-lg w-[306px] h-[306px]' src={about4} alt="about 2"></Image>
            <Image className='absolute z-20 -mt-[566px] h-[260px] ml-[306px] w-[260px]' src={about2} alt="about 3"></Image>
            <Image className='h-[200px] w-[200px]' src={aboutExtra} alt="extra"></Image>
          </div>
          <div className='flex-col ml-[350px] mt-[150px] w-[600px] text-[#444444]'>
            <h1 className='text-[40px] font-bold mb-4'>Kickstart your career in the most renowned Ed-Tech in Indonesia!</h1>
            <p className='text-[16px] font-cairo mb-4 w-[650px]'>In Torche Education, We could help you develop your skill and learning based on experience. There are some benefits that you could get by working or taking internship in Torche:</p>
            <div className='text-[16px] font-cairo flex flex-col'>
              <div className='flex flex-row'>
                <i className='text-blue-500 text-[30px] mr-5'><Icon.Check/></i>
                <p className='mt-1'>Learning based on experience</p>
              </div>
              <div className='flex flex-row'>
                <i className='text-blue-500 text-[30px] mr-5'><Icon.Check/></i>
                <p className='mt-1'>Friendly environment workplace</p> 
              </div>
              <div className='flex flex-row'>
                <i className='text-blue-500 text-[30px] mr-5'><Icon.Check/></i>
                <p className='mt-1'>Flexible working hours</p>
              </div>
            </div>
          </div>
        </div>
      {/* Bagian End Gambar dan Kickstart */}

      <div className='flex justify-center mb-5'>
        <h1 className='text-[#444444] font-bold text-[40px]'>Our Intern Say</h1>
      </div>
    </div>
  );
}

export default CareersPage