import React from 'react';
import resumeContent from '../utils/resumeContent.json';

const Skills = () => {
    const { skills } = resumeContent;
    const { frontend, backend } = skills;

    const frontEndSkills = () => {
        return (
            <div>
                <h2 className='text-white p-2 my-2 text-2xl border border-gray-400 w-auto inline-block'>Frontend</h2>
                {frontend?.map((each, index) => {
                    const skillLevel = Object.values(each)[0];
                    const gradientColor =
                        skillLevel === '3'
                            ? 'bg-gradient-to-r from-gray-500 to-gray-200 w-60'
                            : skillLevel === '2'
                                ? 'bg-gradient-to-r from-gray-500 to-gray-200 w-40'
                                : 'bg-gradient-to-r from-gray-500 to-gray-200 w-20';

                    return (
                        <div key={index}>
                            <p className='text-white mx-2 text-xl font-semibold my-6 inline-block w-60'>
                                {Object.keys(each)[0]}
                            </p>
                            <div className='inline-block border border-zinc-400 w-96 h-6 mx-2'>
                                <div
                                    className={` h-6 bg-gradient-to-r ${gradientColor}`}
                                    style={{ backgroundSize: '100% 100%' }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

    const backEndSkills = () => {
        return (
            <div className='mt-20 lg:mt-0 lg:ml-32'>
                <h2 className='text-white p-2 my-2 text-2xl border border-gray-400 w-auto inline-block'>Backend</h2>
                {backend?.map((each, index) => {
                    const skillLevel = Object.values(each)[0];
                    const gradientColor =
                        skillLevel === '3'
                            ? 'bg-gradient-to-r from-gray-500 to-gray-200 w-60'
                            : skillLevel === '2'
                                ? 'bg-gradient-to-r from-gray-500 to-gray-200 w-40'
                                : 'bg-gradient-to-r from-gray-500 to-gray-200 w-20';

                    return (
                        <div key={index}>
                            <p className='text-white mx-2 text-xl font-semibold my-6 inline-block w-60'>
                                {Object.keys(each)[0]}
                            </p>
                            <div className='inline-block border border-zinc-400 w-96 h-6 mx-2'>
                                <div
                                    className={` h-6 bg-gradient-to-r ${gradientColor}`}
                                    style={{ backgroundSize: '100% 100%' }}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }

    return (
        <div className='mt-16 h-auto lg:p-14 p-4 bg-sky-950 lg:h-screen'>
            <h1 className='text-4xl font-bold py-2 rounded-md w-2 text-str text-center text-stroke-2 mb-8 text-white'>Skills</h1>
            <div className='lg:flex'>
            {frontEndSkills()}
            {backEndSkills()}
            </div>
        </div>
    );
};

export default Skills;
