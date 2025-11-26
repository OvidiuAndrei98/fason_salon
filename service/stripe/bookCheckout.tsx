import { signInAnonymously } from "firebase/auth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firebaseAuth } from "../../lib/firebase/firebaseConfig";
import db from "../../lib/firebase/fireStore";
import { CartItem } from "@/app/core/cartContext";

export const bookCheckout = async (priceId: string, cartItems: CartItem[]) => {
  let userId: string | null = null;

  try {
    const userCredential = await signInAnonymously(firebaseAuth);
    userId = userCredential.user.uid;
  } catch (anonError) {
    console.error("Eroare la autentificarea anonimă:", anonError);
    return;
  }

  if (!userId) {
    console.error(
      "ID-ul utilizatorului este încă null după toate încercările. Nu se poate continua."
    );
    alert(
      "Nu s-a putut obține un ID de utilizator. Te rugăm să încerci din nou."
    );
    return;
  }

  try {
    // Referința la subcolecția checkout_sessions a utilizatorului
    const checkoutSessionsRef = collection(
      db,
      "customers",
      userId,
      "checkout_sessions"
    );

    const lineItems = cartItems.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    }));

    const docRef = await addDoc(checkoutSessionsRef, {
      mode: "payment",
      line_items: lineItems,
      success_url: window.location.origin + "/thank-you",
      cancel_url: window.location.origin,
      customer_update: {
        name: "auto",
        address: "auto",
      },
      metadata: {
        userId: userId,
        purchaseType: "book",
      },
      client_reference_id: "book",
      collect_billing_address: "required",
      payment_intent_data: {
        metadata: {
          userId: userId,
          purchaseType: "book",
        },
      },
      allow_promotion_codes: true,
      locale: "ro",
      billing_address_collection: "required",
    });

    const sessionDocRef = docRef;

    return new Promise<void>((resolve, reject) => {
      const unsubscribe = onSnapshot(sessionDocRef, (snap) => {
        const data = snap.data();
        const error = data?.error;
        const url = data?.url;
        if (error) {
          unsubscribe();
          reject(error);
        }
        if (url) {
          unsubscribe();
          resolve();
          window.location.assign(url);
        }
      });
    });
  } catch (error) {
    console.error("Eroare generală la procesul de cumpărare:", error);
    alert(
      "A apărut o eroare la procesul de cumpărare. Te rugăm să încerci din nou."
    );
  }
};
