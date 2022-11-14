import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image'
import HeroImage from '../../../public/assets/img/carousel-1.webp'
import styled from "styled-components";

const  CareersPage: NextPage = () =>  {
  const StyledDiv = styled.div`
  &:before{
    content: "";
    background-color: rgba(14, 29, 52, 0.8);
    position: absolute;
    inset: 0;
  }
  `

  return (
    <div>
      <StyledDiv style={{backgroundImage: `url('/assets/img/carousel-1.webp')`}} className="w-full min-h-[300px] bg-cover bg-center bg-no-repeat relative">
        <div className='relative flex justify-center items-center'>
          <div className='w-[50%] pt-[90px] lg:mb-[10px]'>
            <h2 className='text-[56px] lg:text-[28px] text-center font-medium text-white'>Carrers</h2>
            <p className='text-center text-[15px] lg:text[8px] text-[#ffffffcc]'>Torche Education is open for various internship positions for students and freshgraduates to feel working environtment at startup company.</p>
          </div>
        </div>
      </StyledDiv>
      <div>

      </div>
    </div>
  );
}

export default CareersPage