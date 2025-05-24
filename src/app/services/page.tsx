'use client'
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';

// Placeholder for service data - we'll make this dynamic later
const services = [
  {
    id: 'meal-planning',
    name: 'Personalized Meal Planning',
    description: 'Customized weekly meal plans tailored to your dietary needs, preferences, and health goals. Includes recipes and shopping lists.',
    price: '$150/month', // Placeholder price - the actual price is set in the API route
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

const metadata = {
  title: 'Our Nutrition Services - Personalized Plans for Your Health',
  description: 'Explore our range of nutrition services including personalized meal planning, wellness coaching, weight management, and sports nutrition. Invest in your health today.',
};

// Function to handle checkout
async function handleCheckout(serviceId: string, serviceName: string, unitAmount: number) {
  const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!stripePublishableKey) {
    console.error('Stripe publishable key is not set.');
    alert('Payment processing is currently unavailable. Please try again later.');
    return;
  }
  console.log('>>>', serviceId, serviceName, unitAmount)

  try {
    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // In a real app, you might pass more details like quantity, specific price ID, etc.
        // For now, the API route uses a fixed item, but you could adapt it.
        // We pass some info here for potential future use in the API route if you customize it.
        item: {
          id: serviceId,
          name: serviceName,
          // The unit_amount here is just for potential logging or display on this page
          // The actual price charged is determined by the API route's `price_data` or `price` ID.
          unit_amount_display: unitAmount, // Example: 15000 for $150.00
        }
      }),
    });

    const { sessionId, url, error } = await response.json();

    if (error) {
      console.error('Error creating Stripe session:', error);
      alert(`Error: ${error}`);
      return;
    }

    if (url) {
      // Redirect to Stripe's hosted checkout page
      window.location.href = url;
    } else if (sessionId) {
      // Fallback if URL is not directly provided (less common for checkout.sessions.create with a full URL)
      const stripe = await loadStripe(stripePublishableKey);
      if (!stripe) {
        console.error('Failed to load Stripe.js');
        alert('Failed to initialize payment processing. Please try again.');
        return;
      }
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      if (stripeError) {
        console.error('Stripe redirection error:', stripeError);
        alert(`Error redirecting to payment: ${stripeError.message}`);
      }
    } else {
      console.error('No session ID or URL returned from API');
      alert('Could not initiate payment. Please try again.');
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err);
    const message = err instanceof Error ? err.message : 'An unknown error occurred.';
    alert(`An unexpected error occurred: ${message}`);
  }
}

function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Nutrition for a Healthier You
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore our range of services designed to help you achieve your health and wellness goals.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {service.id === 'meal-planning' && (
                  <button
                    onClick={() => handleCheckout(service.id, service.name, 15000)} // Assuming $150.00, price in cents
                    className="w-full mt-auto bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                  >
                    Purchase {service.name}
                  </button>
                )}
                {/* You can add similar buttons for other services or a generic one */}
                {service.id !== 'meal-planning' && (
                   <Link href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="w-full mt-auto block text-center bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      Learn More & Enquire
                    </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
