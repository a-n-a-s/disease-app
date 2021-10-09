import React from 'react'
import Diseases from '../Components/Diseases'
import Hero from '../Components/Hero'
const HomePage = () => {

    const scrollToTop = () => {
        window.scroll(0,0)
    }

    return (
        <div className="relative">
            <button className="bg-black px-4 py-2 fixed bottom-12 right-6 text-white" onClick={scrollToTop}>	&#8593;</button>
            <Hero/>
            <Diseases/>
        </div>
    )
}

export default HomePage
