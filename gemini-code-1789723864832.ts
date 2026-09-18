import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // Process Stripe webhook events (e.g. checkout.session.completed)
    return NextResponse.json({ received: true }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}