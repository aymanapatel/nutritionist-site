export const metadata = {
  title: 'Contact Us - Get in Touch with Your Nutritionist',
  description: 'Have questions or ready to start your nutrition journey? Contact us today via phone, email, or our contact form. We look forward to hearing from you!',
};

const ContactPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          Get In Touch
        </h1>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-3">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Email:</h3>
                <a href="mailto:info@nutritionistsite.com" className="text-green-600 hover:underline">
                  info@nutritionistsite.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone:</h3>
                <a href="tel:+1234567890" className="text-green-600 hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Office Hours:</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: By Appointment Only</p>
              </div>
              {/* Add address if physical location exists */}
              {/*
              <div>
                <h3 className="font-semibold text-gray-800">Address:</h3>
                <p className="text-gray-600">123 Wellness Lane, Health City, HC 54321</p>
              </div>
              */}
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Send Us a Message</h2>
            <form action="#" method="POST"> {/* Basic form, functionality to be added */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
