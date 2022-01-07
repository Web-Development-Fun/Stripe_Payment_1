import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY="pk_test_51K6CEsSCqGKG0ElciVBVUmdZmkmrUD8InXevKHOs0583Wwuoa4EeMxu6zKrfIUMWJPIfAJLwWyiooTqRSP1Av3Xa00zELhVg4Y";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
