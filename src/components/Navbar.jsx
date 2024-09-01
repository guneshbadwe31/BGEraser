import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                    {/* Image  */}
                    <div className="flex justify-center mb-5 ">
                        {/* Image Tag  */}
                        <img
                            className='w-20 mt-5 mb-10'
                            src="https://play-lh.googleusercontent.com/4kF2IUQxdLs86iAVsmnHA1B34uO-dvtszKM8qzscc1InZb-2_JI0WANyOiWiV3qyNg"
                            alt="img"
                        />
                    </div>

                    {/* Heading Tag  */}
                    <h1 className='text-white text-3xl lg:text-7xl font-medium text-center mb-5'>
                        Background <span className='text-yellow-300'>Removal</span> Tool
                    </h1>

                    {/* Paragraph Tag  */}
                    <p className='text-white text-2xl font-light text-center mb-3'>
                        Fast, Simple and Great Performance.
                    </p>


                </div>
            </div>
        </div>
    )
}

