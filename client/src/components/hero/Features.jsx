import React from 'react'
import { Shield, LineChart, Clock, BarChart, Users,  ChartPie} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is protected with enterprise-grade encryption and security measures.'
    },
    {
      icon: LineChart,
      title: 'Smart Analytics',
      description: 'Gain insights into your spending patterns with detailed visual analytics.'
    },
    {
      icon: Clock,
      title: 'Expense Tracking and Categorization',
      description: 'Automatically track and categorize transactions.'
    },
    {
      icon: BarChart,
      title: 'Budget Planning',
      description: 'Set and track budgets across multiple categories with ease.'
    },
    {
      icon: Users,
      title: 'Family Sharing',
      description: 'Share financial goals and budgets with family members securely.'
    },
    {
      icon: ChartPie,
      title: 'Intelligent Reports',
      description: 'Generate monthly, quarterly, and yearly financial reports.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Powerful tools and insights to help you take control of your financial life.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features