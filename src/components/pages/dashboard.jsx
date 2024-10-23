import React from 'react'
import Navbar from '../Fragments/Navbar'
import Hero from '../Fragments/Hero'
import gameList from '../../utils/cardsList'
import Cards from '../Fragments/Cards'
import Footer from '../Fragments/Footer'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="
                mt-8 flex flex-wrap justify-center 
                sm:mt-14 sm:flex sm:flex-wrap sm:justify-center 
                md:mt-14 md:flex md:flex-wrap md:justify-center
                lg:mt-14 lg:flex lg:flex-wrap lg:justify-center
                ">
                {
                    gameList.map((list, index) => {
                        return (
                            <Cards title={list.title} key={index} img={`/Logo_Game/${list.logo}.webp`} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Dashboard