import { NextPage } from 'next';
import React from 'react';
import HomePage from './home';
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";


const RootPage: NextPage = () => {
  return (
  <div>
    <Header />
    <HomePage />
  </div>
  );
}

export default RootPage