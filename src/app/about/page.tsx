export const metadata = {
  title: 'About Us - Our Nutrition Philosophy',
  description: 'Learn more about our mission, values, and the experienced nutritionist dedicated to helping you achieve your health and wellness goals.',
};

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          About [Nutritionist's Name/Your Clinic Name]
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg prose lg:prose-xl max-w-3xl mx-auto">
          <p>
            Welcome! I'm [Nutritionist's Name], and I'm thrilled you're here to learn more about how we can work together towards a healthier, more vibrant you.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Our Mission</h2>
          <p>
            Our mission is to empower individuals to take control of their health through personalized, evidence-based nutrition guidance. We believe that food is medicine and that with the right knowledge and support, everyone can achieve their wellness goals.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">My Philosophy</h2>
          <p>
            I take a holistic and individualized approach to nutrition. There's no one-size-fits-all solution when it comes to health. I focus on understanding your unique body, lifestyle, preferences, and goals to create sustainable plans that nourish you from the inside out. I emphasize whole foods, mindful eating, and building healthy habits that last a lifetime, rather than quick fixes or restrictive diets.
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">My Qualifications</h2>
          <ul>
            <li>Certified Nutrition Specialist (CNS) / Registered Dietitian (RD) - [Specify your main certification]</li>
            <li>[Degree, e.g., Master of Science in Clinical Nutrition from XYZ University]</li>
            <li>[Years of experience in the field]</li>
            <li>[Any specializations, e.g., Sports Nutrition, Pediatric Nutrition, Gut Health]</li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-3">Let's Connect</h2>
          <p>
            I'm passionate about helping people transform their lives through nutrition. If you're ready to embark on your health journey, I invite you to explore my <a href="/services">services</a> or <a href="/contact">reach out</a> for a consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
