import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-green-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-700 mb-6">
            Unlock Your Health Potential
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Personalized nutrition plans and expert guidance to help you achieve your wellness goals.
          </p>
          <Link
            href="/services"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Your Nutritionist</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hi, I'm [Nutritionist's Name], a certified nutritionist passionate about helping individuals like you discover the power of healthy eating. My approach is science-based, personalized, and supportive, ensuring you get a plan that fits your lifestyle and preferences.
          </p>
          <Link
            href="/about"
            className="text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            Learn More About Me &rarr;
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">How I Can Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Personalized Meal Plans</h3>
              <p className="text-gray-600">
                Tailored meal plans designed to meet your specific dietary needs, health goals, and food preferences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Wellness Coaching</h3>
              <p className="text-gray-600">
                One-on-one coaching sessions to provide support, accountability, and education on your wellness journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Weight Management</h3>
              <p className="text-gray-600">
                Sustainable strategies for achieving and maintaining a healthy weight through balanced nutrition and lifestyle changes.
              </p>
            </div>
          </div>
          <Link
            href="/services"
            className="mt-10 inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey to Better Health?</h2>
          <p className="text-xl mb-8">
            Book a free consultation today and take the first step towards a healthier, happier you.
          </p>
          <Link
            href="/contact" // Assuming a contact page for consultation booking
            className="bg-white hover:bg-gray-100 text-green-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
