import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

// Ensure your stripe library path is correct. If stripe.ts is in src/lib, then '@/lib/stripe' is fine.
// If your project structure is different, you might need to adjust this path e.g., '../../lib/stripe'

export async function POST(req: NextRequest) {
  console.log('@@@')
  try {
    const lineItems = [
      {
        price_data: {
          currency: 'usd', 
          product_data: {
            name: 'Nutrition Consultation',
            description: 'Personalized nutrition consultation session',
          },
          unit_amount: 5000, // $50.00
        },
        quantity: 1,
      },
    ];

    // Adjust success_url and cancel_url based on your actual page routes
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/payment/cancel`,
    });
    console.log('>>>', session)

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
