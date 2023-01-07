import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'
import tw, { styled } from 'twin.macro'
import { Header } from '../app/Components/Header'
 
const Home: NextPage = ()=>{
  return (
    <Container>
      <Header />
    </Container>
  )
}

const Container = styled.div`
  ${tw`p-4 `}
`;

export default Home

