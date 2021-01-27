import React, { Component } from 'react';

export default class Home extends Component {
    render(){
        return(
        <div class='bg-cover'>
            <nav>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                        <p className='italic bg-black text-white font-bold text-xl'>&nbsp; Kaleb Ugalde &nbsp;</p>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <a href="home" class="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                            <a href="about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Me</a>

                            {/* <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a> */}

                            <a href="projects" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                            <a href="contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Me</a>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
            <header class="shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-5xl font-bold leading-tight text-white">
                    Hi, I'm Kaleb
                </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <h1 class='text-3xl text-white'>Overview</h1>
                </div>
            </main>
        </div>
        );
    }
}