import React from 'react'
import resumecontent from "../utils/resumeContent.json"

const About = () => {
    return (
        <div id='about' className='mt-16 py-8    space-animation px-4 lg:px-16 lg:py-12 bg-orange-200 text-lg font-medium '>
            <div className='border border-black mb-10 p-10'>
                <h1 className="mb-4 hover:mx-10 text-4xl font-bold py-2 rounded-md  text-str text-center text-stroke-2 transform  hover:scale-110 transition-transform duration-300  " >Intro</h1>
                <p className=' py-1'>Enthusiastic and passionate <p className='bg-gray-950 text-beige rounded-sm p-1 inline-block transform  hover:scale-9 0 transition-transform duration-300 lg:mx-1 mr-1'>Frontend developer</p> dedicated to continuous
                    learning and contributing to betterment of web. Committed to staying
                    updated with emerging technologies and industry best practices. Strong
                    foundation in frontend development, quick to adapt and learn new
                    frameworks, languages, and tools.</p>
            </div>
            <div className='border border-black p-10'>
                <h1 className="lg:mt-2 mb-10  hover:mx-10 text-4xl font-bold  rounded-md  text-str text-center text-stroke-2 transform  hover:scale-110 transition-transform duration-300 ">Work Experience</h1>
                <div className=''>
                    <h1 className='w-24  text-black rounded-sm mt-4 text-3xl font-bold'>
                        Zivame</h1>
                    <h3 className='font-semibold  mt-0 mb-2'>May-2022<span className='px-4 no-underline'>-</span>Present</h3>
                </div>
                <ul className='list-disc pl-4'>
                    <li class>Developed cross-browser-compatible features: Frequently Bought Together, More From Us, and Quick View.</li>
                    <li>Ensured seamless functionality and consistent user experience across different browsers.
                    </li>
                    <li>Integrated Moengage, a third-party analytics tool, for comprehensive website analytics.</li>
                    <li>Implemented a versatile refund method, allowing users to choose between refunding to the original payment source or their wallet.</li>
                    <li>Collaborated with backend teams, QA teams, and product managers for seamless feature integration and timely project delivery.</li>
                    <li>Conducted A/B testing to analyze user behavior and optimize website elements.</li>
                    <li>Enhanced website SEO through comprehensive optimization techniques.</li>
                    <li>Improved key web vitals for faster loading times, smoother interactions, and enhanced visual stability.</li>
                </ul>
                <div>
                    <h4 className='py-4 underline'>Technologies used:</h4>
                    <div className='flex flex-wrap'>
                        <div className=' w-24 h-28 flex flex-col mx-2 text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                            <h1>Javascript</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png   " />
                            <h1>React Js</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20" src="https://avatars.githubusercontent.com/u/70142?s=280&v=4" />
                            <h1>JQuery</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" />
                            <h1>SCSS</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
                            <h1>Redux</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1" />
                            <h1>Handlebars</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
                            <h1>HTML 5</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png" />
                            <h1>NodeJs</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" />
                            <h1>ExpressJs</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                            <h1>Github</h1>
                        </div>
                        <div className='w-24 h-28 mx-2 flex flex-col text-center transform  hover:scale-110 transition-transform duration-300'>
                            <img alt="technolgy" className="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" />
                            <h1>Vs Code</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
