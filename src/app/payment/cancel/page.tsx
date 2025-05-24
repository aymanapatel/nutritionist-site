// src/app/payment/cancel/page.tsx
import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your payment was not processed. You have not been charged.
      </p>
      <p className="text-gray-700 mb-6">
        If you faced any issues, please try again or contact support.
      </p>
      <div className="flex space-x-4">
        <Link href="/services" // Or your checkout page
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Try Again
        </Link>
        <Link href="/"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
