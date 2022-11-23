import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import HeroImage from '../../../public/assets/img/carousel-1.webp'
import styled from "styled-components";
import { NextPage } from "next";
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons';
import about1 from '../../../public/assets/img/Careers/about-1.webp'
import about2 from '../../../public/assets/img/Careers/about-2.webp'
import about3 from '../../../public/assets/img/Careers/about-3.webp'
import about4 from '../../../public/assets/img/Careers/about-4.webp'
import star  from '../../../public/assets/img/Careers/alotof-star.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const  CareersPage: NextPage = () =>  {

  useEffect(() => {
    AOS.init();
  }, [])

  const pagination = {
    clickable: true,
  };

  const StyledDiv = styled.div`
  &:before{
    content: "";
    background-color: rgba(14, 29, 52, 0.8);
    position: absolute;
    inset: 0;
  }
  `
  const StyledCard = styled.a`
    box-shadow: 0 0 45px rgb(0 0 0 / 8%);
    &:hover {
      box-shadow: none;
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

  const testi = [
    {
      icon: <Icon.Quote/>,
      testi: 'Mulai dari CEO dan jajarannya merangkul kami semua tanpa membedakan tanpa menyalahkan kami apabila ada kesalahan yang dilakukan selama proses magang. CEO nya mampu menciptakan hubungan dan komunikasi serta kerja sama tim yang baik dalam mencapai target perusahaan.',
      nama: 'Renci Gusri Solerena',
      jabatan: 'Legal Office Intern',
      photo: <Image src='/assets/img/testimonials/renci.webp' alt="renci" width={100} height={100}/>
    },
    {
      icon: <Icon.Quote/>,
      testi: 'Yang aku sukai adalah tim nya, jujur aku belum ada basic sama sekali dalam legal coorporate tapi ka renci dan ka ranti ngembimbing aku, dan ka leon ga marahin ga kalo aku ga paham.',
      nama: 'Wiwit Purwoedi',
      jabatan: 'Legal Office Intern',
      photo: <Image src='/assets/img/testimonials/wiwit.webp' alt="wiwit" width={100} height={100}/>
    },
    {
      icon: <Icon.Quote/>,
      testi: 'Beberapa hal yang aku suka dari internship di Torche itu adalah kakak – kakak di Torche sangat ramah dan juga supportive. Sistem internnya juga tidak terlalu memberatkan intern (dari yang aku rasakan di comm dev).',
      nama: 'Adimas Anugerah Rivandy',
      jabatan: 'Marketing and Sales Intern',
      photo: <Image src='/assets/img/testimonials/adimas.webp' alt="adimas" width={100} height={100}/>
    },
    {
      icon: <Icon.Quote/>,
      testi: 'Selama melakukan internship selama 3 bulan terdapat beberapa hal yang disukai selama pelaksanaan intern seperti pemberian job desc yang detail, didampingi oleh head dari divisi dengan baik dan responsive apabila terdapat pertanyaan, memiliki workload yang tidak melebihi dari kontrak, dan waktu intern yang tepat waktu.',
      nama: 'Joas Kurnianto',
      jabatan: 'Business Process Development Intern',
      photo: <Image src='/assets/img/testimonials/joas.webp' alt="joas" width={100} height={100}/>
    },
    {
      icon: <Icon.Quote/>,
      testi: 'Yang saya sukai dari program internship ini adalah lingkungannya yang sangat friendly, baik dari C-Levelnya maupun Head nya sangat friendly kepada para intern. Selain itu juga cukup open pada internnya. Selain itu sistem dan waktu pengerjaan task nya sangat flexible, sehingga tidak membebankan intern.',
      nama: 'Febby Pangestu Iskandar',
      jabatan: 'Human Resources Intern',
      photo: <Image src='/assets/img/testimonials/feby.webp' alt="feby" width={100} height={100}/>
    }
  ]

  return (
    /* header */
    <div className='lg:w-full'>
      <StyledDiv style={{backgroundImage: `url('/assets/img/Careers/carousel-1.webp')`}} className="w-full min-h-[300px] bg-cover bg-center bg-no-repeat relative">
        <div className='relative flex justify-center'>
          <div className='sm:pt-[90px]'>
            <h2 className='text-[28px] sm:text-[56px] text-center font-medium text-white'>Carrers</h2>
            <p className='text-center sm:text-[16px] sm:w-[500px] md:w-[696px] lg:w-[456px] text-[#ffffffcc]'>Torche Education is open for various internship positions for students and freshgraduates to feel working environtment at startup company.</p>
          </div>
        </div>
      </StyledDiv>
    
      <div className="lg:w-full bg-[#f5faff]">
        <div className='sm:ml-[40px] md:ml-[20px] xl:ml-[80px] sm:flex-col lg:flex-row lg:justify-between flex p-[15px]'>
          <h2 className='text-[24px] text-[#444444] font-light font-Radhjani'>Torche&apos;s Careers</h2>
          <ol>
            <li className='font-Cairo sm:-ml-[30px] lg:mr-[50px] text-[14px]'>Careers</li>
          </ol>
        </div>
      </div>
      {/* End header */}

      {/* Card */}
      <div data-aos="fade-up">
      <div className='py-5'>
        <h1 className='text-center mb-2 font-rajdhani font-bold sm:text-[31.6px] md:text-[33.52px] lg:text-[40px] flex justify-center text-[#444444]' data-wow-delay="0.1s">Explore By Category</h1>
      </div>
      <div className='grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 md:px-[20px] xl:px-[80px] sm:px-9 content-center'>
          {
            job.map((data, index)=> {
                return (
                  <div key={index} className="p-3 grid box-border" data-wow-delay="0.3s">
                    <div className=' grid'>
                      <StyledCard key={index} href={data.link} className='p-3 font-rajdhani transition duration-300 rounded-lg no-underline border border-solid border-transparent'>
                          <svg viewBox="0 0 80 20" >{data.icon}</svg>
                          <h3 className='text-black font-bold text-[20px]'>{data.title}</h3>
                          <h6>{data.vacancy}</h6>
                        </StyledCard>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
        {/*End Card*/}

        {/* Bagian Start Gambar dan Kickstart */}
        <div className='sm:pl-[60px] lg:pl-[90px] w-full flex md:pl-[40px] pb-16 sm:pt-[70px]'  data-aos="fade-up">
          <div className='flex sm:flex-col lg:flex-row'>
            <div className="flex sm:flex-col text-[#444444]">
                <Image className='rounded-tl-lg sm:w-[258px] xl:w-[306px] md:w-[348px] lg:w-[222px]' src={about1} alt="about 1"></Image>
                <Image className='rounded-bl-lg z-20 relative sm:w-[219.3px] xl:w-[260px] md:w-[295.8px] sm:ml-[40px] md:ml-[50px] lg:w-[188.7px] lg:-mt-[1px] lg:ml-[34px] xl:-mt-[1px] xl:ml-[45px]' src={about3} alt="about 3"></Image>
                <Image className='sm:w-[219.3px] md:w-[295.8px] z-20 relative xl:-mt-[519.8px] xl:w-[260px] sm:ml-[258px] md:ml-[348px] md:-mt-[591.5px] lg:-mt-[377.5px] lg:ml-[222px] lg:w-[188.7px] sm:-mt-[439px] xl:ml-[305px]' src={about2} alt="about 2"></Image>
                <Image className='sm:w-[258px] sm:ml-[258px] md:w-[348px] xl:w-[306px] md:ml-[346px] lg:w-[222px] lg:ml-[221px] xl:ml-[305px]' src={about4} alt="about 4"></Image>
                <Image className='sm:w-[258px] xl:-mt-[612px] xl:ml-[305px] sm:-mt-[518px] lg:-mt-[445px] xl:w-[306px] lg:ml-[222px] md:w-[348px] lg:w-[222px] sm:ml-[258px] md:-mt-[696px] md:ml-[347px]' src={star} alt="star"></Image>
                <Image className='sm:w-[258px] sm:mt-[3px] md:w-[348px] lg:w-[222px] xl:w-[306px]' src={star} alt="star"></Image>
            </div>
                <div className="flex lg:-mt-[20px] xl:mt-[120px] lg:ml-[50px] text-[#444444] lg:mb-[50px] flex-col">
                  <h1 className='sm:text-[31.6px] lg:text-[37.6px] xl:text-[40px] sm:w-[516px] lg:w-[444px] md:w-[650px] xl:w-[612px] sm:mt-7 font-bold mb-4'>Kickstart your career in the most renowned Ed-Tech in Indonesia!</h1>
                  <p className='sm:text-[16px] font-cairo sm:w-[516px] lg:w-[444px] md:w-[650px] xl:w-[612px] mb-4'>In Torche Education, We could help you develop your skill and learning based on experience. There are some benefits that you could get by working or taking internship in Torche:</p>
                  <div className='text-[16px] font-cairo flex flex-col'>
                    <div className='flex flex-row'>
                      <i className='text-blue-500 sm:text-[24px] mr-5'><Icon.Check/></i>
                      <p className='mt-1 sm:text-[16px]'>Learning based on experience</p>
                    </div>
                    <div className='flex flex-row'>
                      <i className='text-blue-500 sm:text-[24px] mr-5'><Icon.Check/></i>
                      <p className='mt-1 sm:text-[16px]'>Friendly environment workplace</p> 
                    </div>
                    <div className='flex flex-row'>
                      <i className='text-blue-500 sm:text-[24px] mr-5'><Icon.Check/></i>
                      <p className='mt-1 sm:text-[16px'>Flexible working hours</p>
                    </div>
              </div>
            </div>
          </div>
        </div>
      {/* Bagian End Gambar dan Kickstart */}

      {/* Bagian start swiper */}
      <div data-aos="fade-up">
      <div className='mb-5 flex justify-center'>
        <h1 className='text-[#444444] font-bold lg:text-[37.36px] sm:text-[31.6px]'>Our Intern Say</h1>
      </div>

      <div className="sm:px-10 lg:px-20 sm:mb-[50px] ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          testi.map((data, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="flex flex-col md:min-h-[250px] sm:min-h-[300px] m-[50px] items-start">
                  <div className="flex flex-col font-Rajdhani">
                    <p className="text-blue-500 text-[48px] justify-start flex -mt-5 mb-3">{data.icon}</p>
                    <p className="text-[16px] font-Cairo text-left w-full text-[#444444]">{data.testi}</p>
                  </div>
                  <div className="flex flex-row">
                    <div className="max-w-full h-[50px] w-[50px] rounded-xl mt-3">{data.photo}</div>
                    <div className="ml-5">
                      <h4 className="text-[20px] mt-[13px] text-left text-[#444444] font-bold">{data.nama}</h4>
                      <h4 className="text-[14px] mt-[10px] font-cairo text-left text-[#444444]">{data.jabatan}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>
    </div>
  </div>
  );
}

export default CareersPage