import React from 'react'
import {ArrowRight} from 'lucide-react'

const HeroContent = () => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Take control of your</span>
                    <span className="block text-blue-600">financial future</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Smart financial management for modern life. Track expenses, set budgets, and achieve your financial goals with powerful insights and easy-to-use tools.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <a
                            href="#get-started"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        >
                            Get started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#learn-more"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroContent