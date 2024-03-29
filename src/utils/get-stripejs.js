/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from '@stripe/stripe-js';

//typescript
// let stripePromise: Promise<Stripe | null>;
const getStripe = async () => {
    // let stripePromise
    // if (stripePromise) {
    let stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    // }
    return stripePromise;
};

export default getStripe;
