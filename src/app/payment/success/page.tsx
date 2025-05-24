// src/app/payment/success/page.tsx
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Here you might want to:
      // 1. Verify the session ID with your backend to confirm payment status
      // 2. Fulfill the order (e.g., grant access to a service, send a confirmation email)
      console.log('Stripe Checkout Session ID:', sessionId);
    }
  }, [sessionId]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for your purchase. Your order is being processed.</p>
      {sessionId && (
        <p className="text-sm text-gray-500 mb-6">Session ID: {sessionId}</p>
      )}
      <Link href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
