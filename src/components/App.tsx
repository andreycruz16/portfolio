import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import profilepicture from '@/assets/profilepicture.webp';
import { useState } from 'react';

function App() {
    const [darkMode, setdarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen min-w-min bg-slate-50 dark:bg-gray-800 transition duration-300">
                <main className="max-w-max mx-auto bg-slate-50 px-10 md:px-20 lg:px-40 xl:px-90 dark:bg-gray-800 transition duration-300">
                    <section className="select-none">
                        <nav className="py-10 mb-12 flex justify-between">
                            <h1 className="font-tiltwarp text-2xl md:text-3xl font-bold decoration-traensparent dark:text-gray-100">
                                MARKANDREY
                            </h1>
                            <ul className="flex items-center">
                                <li className="">
                                    <BsFillMoonStarsFill
                                        className="cursor-pointer text-2xl dark:text-yellow-400 hover:scale-125 ease-in-out duration-300"
                                        onClick={() => {
                                            setdarkMode((darkMode) => !darkMode);
                                        }}
                                    />
                                </li>
                                <li className="hover:scale-110 ease-in-out duration-300 hidden md:block ml-5">
                                    <a
                                        className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                                        href="#"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <div className="text-center">
                            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-bold select-none">
                                Mark&nbsp;Andrey
                            </h2>
                            <h3 className="text-2xl py-3 font-normal dark:text-gray-100">
                                Web Developer.
                            </h3>
                            <h3 className="text-xl py-1 font-normal dark:text-gray-100">
                                ReactJS, JavaScript, TypeScript
                            </h3>
                            <p className="text-base py-5 leading-8 text-gray-800 font-medium dark:text-gray-100">
                                I&apos;m a Software Developer with over 4+ years of experience in
                                web development. Knowledgeable of JavaScript and TypeScript.
                            </p>
                        </div>
                        <div className="flex justify-center gap-16 text-5xl py-3 text-gray-600 dark:text-gray-100">
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <a href="#">
                                    <AiFillMail />
                                </a>
                            </div>
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <a href="#">
                                    <AiFillLinkedin />
                                </a>
                            </div>
                            <div className="hover:scale-125 ease-in-out duration-300 cursor-pointer">
                                <a href="#">
                                    <AiFillGithub />
                                </a>
                            </div>
                        </div>
                        <div className="py-7">
                            <div className="flex mx-auto rounded-full w-52 h-52 md:w-80 md:h-80 hover:scale-105 ease-in-out duration-300 overflow-hidden ">
                                <img src={profilepicture} alt="Profile Picture" />
                            </div>
                        </div>
                        <div className="p-5 flex justify-center md:hidden">
                            <div className="hover:scale-110 ease-in-out duration-300">
                                <a
                                    className="font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                                    href="#"
                                >
                                    Download my resume
                                </a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="lg:mx-4">
                            <h3 className="text-3xl py-1 font-medium dark:text-gray-50">
                                About me
                            </h3>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-100">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore
                                </span>{' '}
                                ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur{' '}
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore et dolore
                                </span>{' '}
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                            </p>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-100">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore
                                </span>{' '}
                                ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="xl:flex gap-10 lg:justify-center">
                            <div className="xl:max-w-md text-center shadow-lg dark:shadow-gray-900 p-16 rounded-xl my-14 dark:bg-zinc-800">
                                <h3 className="dark:text-gray-50 text-3xl font-medium pt-8 pb-2">
                                    Beautiful Designs
                                </h3>
                                <p className="dark:text-gray-50 py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="text-xl py-4 text-teal-600 font-medium dark:text-teal-400">
                                    Design tools I use
                                </h4>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Photoshop</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Illustrator</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
                            </div>
                            <div className="xl:max-w-md text-center shadow-lg dark:shadow-gray-900 p-16 rounded-xl my-14 dark:bg-zinc-800">
                                <h3 className="dark:text-gray-50 text-3xl font-medium pt-8 pb-2">
                                    Beautiful Designs
                                </h3>
                                <p className="dark:text-gray-50 py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="text-xl py-4 text-teal-600 font-medium dark:text-teal-400">
                                    Design tools I use
                                </h4>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Photoshop</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Illustrator</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
                            </div>
                            <div className="xl:max-w-md text-center shadow-lg dark:shadow-gray-900 p-16 rounded-xl my-14 dark:bg-zinc-800">
                                <h3 className="dark:text-gray-50 text-3xl font-medium pt-8 pb-2">
                                    Beautiful Designs
                                </h3>
                                <p className="dark:text-gray-50 py-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <h4 className="text-xl py-4 text-teal-600 font-medium dark:text-teal-400">
                                    Design tools I use
                                </h4>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Photoshop</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Illustrator</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
                                <p className="dark:text-gray-50 text-gray-800 py-1">Figma</p>
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
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore
                                </span>{' '}
                                ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur{' '}
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore et dolore
                                </span>{' '}
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                            </p>
                            <p className="text-base py-2 leading-8 text-gray-800 dark:text-gray-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt{' '}
                                <span className="text-teal-500 font-semibold dark:text-teal-400">
                                    labore
                                </span>{' '}
                                ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae.
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>
                    </section>
                    <footer>
                        <div className="py-5">
                            <div className="text-center text-base py-1 font-medium dark:text-gray-50 ">
                                Created by{' '}
                                <span className="font-bold dark:text-teal-400">Mark Andrey</span>
                            </div>
                            <div className="flex justify-center text-base py-1 mt-4 dark:text-gray-50">
                                <a
                                    href="https://www.buymeacoffee.com/markandrey"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="h-14 w-56 rounded-full shadow-md shadow-gray-500"
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
