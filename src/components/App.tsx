import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import profilepicture from '@/assets/profilepicture.webp';
import { useState } from 'react';

function App() {
    const [darkMode, setdarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-slate-50 dark:bg-gray-800 transition duration-300">
                <main className="max-w-max mx-auto bg-slate-50 px-10 md:px-20 lg:px-40 xl:px-90 dark:bg-gray-800 transition duration-300">
                    <section>
                        <nav className="py-10 mb-12 flex justify-between">
                            <h1 className="font-tiltwarp text-2xl md:text-3xl font-bold cursor-pointer hover:scale-125 ease-in-out duration-300 dark:text-gray-100">
                                MARKANDREY
                            </h1>
                            <ul className="flex items-center">
                                <li className="">
                                    <BsFillMoonStarsFill
                                        className="cursor-pointer text-3xl dark:text-yellow-400 hover:scale-125 ease-in-out duration-300"
                                        onClick={() => {
                                            setdarkMode((darkMode) => !darkMode);
                                        }}
                                    />
                                </li>
                                <li className="hover:scale-110 ease-in-out duration-300">
                                    <a
                                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                        href="#"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="text-center p-10">
                            <h2 className="text-5xl py-2 text-teal-600 font-bold dark:text-gray-100">
                                Mark Andrey
                            </h2>
                            <h3 className="text-2xl py-2 font-medium dark:text-gray-100">
                                Web Developer. ReactJS, JavaScript
                            </h3>
                            <p className="text-base py-5 leading-8 text-gray-800 font-medium dark:text-gray-100">
                                I&apos;m a Software Developer with over 4+ years of experience in
                                web development. Knowledgeable of JavaScript and TypeScript.
                            </p>
                        </div>
                        <div className="flex justify-center gap-16 text-7xl py-3 text-gray-600 dark:text-gray-100">
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <AiFillMail />
                            </div>
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <AiFillLinkedin />
                            </div>
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <AiFillGithub />
                            </div>
                        </div>
                        <div className="relative mx-auto rounded-full w-64 h-64 m-20 overflow-hidden md:w-80 md:h-80 hover:scale-105 ease-in-out duration-300">
                            <img src={profilepicture} alt="Profile Picture" />
                        </div>
                    </section>
                    <section>
                        <div className="lg:mx-4">
                            <h3 className="text-3xl py-1 font-medium dark:text-gray-50">
                                Tech Stack
                            </h3>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-100">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold">labore</span> ut
                                labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur{' '}
                                <span className="text-teal-500 font-semibold">
                                    labore et dolore
                                </span>{' '}
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                            </p>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-100">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold">labore</span> ut
                                labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                        <div className="xl:flex gap-10 lg:justify-center">
                            <div className="text-center shadow-lg p-16 rounded-xl my-14 dark:bg-gray-300">
                                <h3 className="text-xl font-medium pt-8 pb-2">Beautiful Designs</h3>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="py-4 text-teal-600 font-medium">
                                    Design tools I use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">Illustrator</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Canva</p>
                            </div>
                            <div className="text-center shadow-lg p-16 rounded-xl my-14 dark:bg-gray-300">
                                <h3 className="text-xl font-medium pt-8 pb-2">Beautiful Designs</h3>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="py-4 text-teal-600 font-medium">
                                    Design tools I use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">Illustrator</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Canva</p>
                            </div>
                            <div className="text-center shadow-lg p-16 rounded-xl my-14 dark:bg-gray-300">
                                <h3 className="text-xl font-medium pt-8 pb-2">Beautiful Designs</h3>
                                <p className="py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="py-4 text-teal-600 font-medium">
                                    Design tools I use
                                </h4>
                                <p className="text-gray-800 py-1">Photoshop</p>
                                <p className="text-gray-800 py-1">Illustrator</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Figma</p>
                                <p className="text-gray-800 py-1">Canva</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="lg:mx-4">
                            <h3 className="text-3xl py-1 font-medium dark:text-gray-50">
                                Portfolio
                            </h3>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold">labore</span> ut
                                labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur{' '}
                                <span className="text-teal-500 font-semibold">
                                    labore et dolore
                                </span>{' '}
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                            </p>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold">labore</span> ut
                                labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </section>
                    <footer>
                        <div className="py-5">
                            <div className="text-center text-base py-1 font-medium dark:text-gray-50">
                                Created by Mark Andrey
                            </div>
                            <div className="flex justify-center text-base py-1 mt-4 dark:text-gray-50">
                                <a
                                    href="https://www.buymeacoffee.com/markandrey"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="h-12 w-56"
                                        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                        alt="Buy Me A Coffee"
                                    />
                                </a>
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default App;
