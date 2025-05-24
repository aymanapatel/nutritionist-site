import Link from 'next/link';

// Placeholder for service data - we'll make this dynamic later
const services = [
  {
    id: 'meal-planning',
    name: 'Personalized Meal Planning',
    description: 'Customized weekly meal plans tailored to your dietary needs, preferences, and health goals. Includes recipes and shopping lists.',
    price: '$150/month', // Placeholder price
    features: [
      'Initial consultation (60 mins)',
      'Weekly customized meal plans',
      'Recipe collection and shopping guides',
      'Email support',
    ],
  },
  {
    id: 'wellness-coaching',
    name: 'Holistic Wellness Coaching',
    description: 'One-on-one coaching sessions focusing on nutrition, lifestyle adjustments, stress management, and overall well-being.',
    price: '$100/session', // Placeholder price
    features: [
      'Bi-weekly coaching calls (45 mins each)',
      'Goal setting and progress tracking',
      'Educational resources and tools',
      'Mindfulness and stress-reduction techniques',
    ],
  },
  {
    id: 'weight-management',
    name: 'Sustainable Weight Management Program',
    description: 'A comprehensive program to help you achieve and maintain a healthy weight through balanced nutrition, behavior change, and ongoing support.',
    price: '$400 (3-month program)', // Placeholder price
    features: [
      'In-depth initial assessment',
      'Personalized nutrition and exercise guidance',
      'Regular check-in sessions',
      'Behavioral coaching for long-term success',
      'Access to private support group',
    ],
  },
  {
    id: 'sports-nutrition',
    name: 'Sports Nutrition Consultation',
    description: 'Optimize your athletic performance with a nutrition plan designed for your specific sport, training regimen, and goals.',
    price: '$120/consultation', // Placeholder price
    features: [
      'Performance nutrition assessment',
      'Pre/post-workout fueling strategies',
      'Hydration and supplement advice',
      'Competition day nutrition planning',
    ],
  },
];

export const metadata = {
  title: 'Our Nutrition Services - Personalized Plans for Your Health',
  description: 'Explore our range of nutrition services including personalized meal planning, wellness coaching, weight management, and sports nutrition. Invest in your health today.',
};

const ServicesPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <h2 className="text-2xl font-semibold text-green-600 mb-3">{service.name}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <h3 className="text-lg font-medium text-gray-800 mb-2">What's Included:</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-3xl font-bold text-green-500 mb-6 text-right">{service.price}</p>
                <Link
                  href={`/services/${service.id}/checkout`} // Placeholder for individual service checkout page
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Sure Which Service is Right for You?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's chat! Book a free 15-minute discovery call to discuss your goals and find the perfect plan.
          </p>
          <Link
            href="/contact" // Link to contact page or a booking calendar
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
