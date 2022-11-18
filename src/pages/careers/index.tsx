import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
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

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
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
    <div className='pt-[80px]'>
      <StyledDiv style={{backgroundImage: `url('/assets/img/Careers/carousel-1.webp')`}} className="w-full min-h-[300px] bg-cover bg-center bg-no-repeat relative">
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
                      <StyledCard key={index} href={data.link} className='p-3 font-rajdhani transition duration-300 rounded-lg no-underline border border-solid border-transparent'>
                          <svg viewBox="0 0 60 20" >{data.icon}</svg>
                          <h3 className='text-black font-bold text-[20px]'>{data.title}</h3>
                          <h6>{data.vacancy}</h6>
                        </StyledCard>
                    </div>
                  </div>
                )
              })
            }
        </div>
        {/*End Card*/}

        {/* Bagian Start Gambar dan Kickstart */}
        <div className='flex px-24 pb-16 pt-[200px]'>
          <div className='flex-row'>
            <div className='absolute -mt-[100px]'>
              <Image className='rounded-tl-lg w-[306px] h-[306px]' src={about1} alt="about 1"></Image>
              <Image className='rounded-bl-lg w-[260px] h-[260px] ml-[47px]' src={about3} alt="about 3"></Image>
              <Image className='z-20 -mt-[520px] h-[260px] ml-[306px] w-[260px]' src={about2} alt="about 3"></Image>
              <Image className=' ml-[307px] w-[306px] h-[306px]' src={about4} alt="about 4"></Image>
            </div>
            <Image className='mt-[136px]' src={star} alt="star"></Image>
            <Image className='-mt-[614px] ml-[238px]' src={star} alt="star"></Image>
          </div>
          <div className='flex-col ml-[350px] mt-[150px] w-[600px] text-[#444444]'>
            <h1 className='text-[40px] font-bold mb-4'>Kickstart your career in the most renowned Ed-Tech in Indonesia!</h1>
            <p className='text-[16px] font-cairo mb-4 w-[650px]'>In Torche Education, We could help you develop your skill and learning based on experience. There are some benefits that you could get by working or taking internship in Torche:</p>
            <div className='text-[16px] font-cairo flex flex-col'>
              <div className='flex flex-row'>
                <i className='text-blue-500 text-[30px] mr-5'></i>
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

      {/* Bagian start swiper */}
      <div className='flex justify-center pt-20 mb-5'>
        <h1 className='text-[#444444] font-bold text-[40px]'>Our Intern Say</h1>
      </div>

      <div className="my-16 w-full px-48">
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
                <div className="flex flex-col min-h-[200px] m-14 px-5 items-start">
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
  );
}

export default CareersPage