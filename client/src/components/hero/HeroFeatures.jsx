import React from 'react'
import { Shield, LineChart, Clock } from 'lucide-react';

export const FeatureCard = ({
    icon: Icon, title, description, iconBgColor, iconColor
}) => {
    return (
        <div className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3">
                <div className={`p-2 ${iconBgColor} rounded-lg`}>
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>

            <p className="mt-4 text-gray-600">{description}</p>
        </div>
    )
}

const HeroFeatures = () => {
    const features = [
        {
            icon: Shield,
            title: 'Secure & Private',
            description: 'Bank-level security ensures your financial data stays private and protected.',
            iconBgColor: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            icon: LineChart,
            title: 'Smart Analytics',
            description: 'Get insights into your spending patterns with detailed visual analytics.',
            iconBgColor: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            icon: Clock,
            title: 'Expense Tracking',
            description: 'Monitor your finances in real-time with instant transaction updates.',
            iconBgColor: 'bg-purple-100',
            iconColor: 'text-purple-600'
        }
    ]

    return (
        <div className='mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    )
}

export default HeroFeatures