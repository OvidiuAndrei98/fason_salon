/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import { Resend } from "resend";
import Stripe from "stripe";

initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

export const handleStripeWebhook = onRequest(async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2025-08-27.basil",
  });

  const resend = new Resend(process.env.RESEND_API_KEY);

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    // Get the raw body for Stripe webhook verification
    const payload = req.rawBody;
    event = stripe.webhooks.constructEvent(
      payload,
      sig as string,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    );
  } catch (err: unknown) {
    const error = err as Error;
    logger.error("Webhook signature verification failed.", error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
    return;
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    logger.info("Received checkout.session.completed event");
    const session = event.data.object;
    if (session.client_reference_id === "book") {
      try {
        const customerEmail = session.customer_details?.email;
        logger.info(
          "Received checkout.session.completed event for customer email:",
          customerEmail
        );
        if (!customerEmail) {
          logger.error("Customer email is missing in the checkout session.");
          res.status(400).send("Customer email is missing.");
          return;
        }

        const filePath = "paid_pdf/CarteDigitala.pdf";
        const bucket = admin.storage().bucket();
        const file = bucket.file(filePath);

        // Set the link to expire quickly (e.g., 60 minutes)
        const expiryTime = Date.now() + 60 * 60 * 1000; // 1 hour from now

        let downloadUrl;
        try {
          const urls = await file.getSignedUrl({
            action: "read",
            expires: expiryTime,
            // Add a response header to force download with a specific name
            responseDisposition: `attachment; filename="Arte_Impletite_In_Par.pdf"`,
          });
          downloadUrl = urls[0];
        } catch (error) {
          console.error("Failed to generate Signed URL:", error);
          // This is a server error, log and return 500 for retry
          res.status(500).send("Failed to generate URL.");
          return;
        }

        const emailHtml = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="ro">
      <head>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        <meta name="x-apple-disable-message-reformatting" />
      </head>
      <body style="background-color:#f6f9fc;
        font-family:-apple-system,BlinkMacSystemFont,
        'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif">
        <div style="display:none;overflow:hidden;
          line-height:1px;opacity:0;max-height:0;
          max-width:0" data-skip-in-text="true">
          Mulțumim pentru comanda ta! Cartea "Arte Împletite în Păr" este aici.
        </div>
        <table align="center" width="100%" border="0"
          cellpadding="0" cellspacing="0"
          role="presentation" style="max-width:37.5em;
          background-color:#fff;margin:0 auto;
          padding:20px 0 48px;margin-bottom:64px">
          <tbody>
        <tr style="width:100%">
          <td>
        <table align="center" width="100%" border="0"
          cellpadding="0" cellspacing="0"
          role="presentation" style="padding:0 48px">
          <tbody>
        <tr>
          <td>
        <img alt="Fason Salon Logo" height="30" 
          src="https://firebasestorage.googleapis.com/v0/b/planyvite-18d36.firebasestorage.app/o/Planyvite%2Fplanyvite_logo_png.png?alt=media&token=94fb27ab-22a6-486d-93c3-7cc26287e1e6" 
          style="display:block;outline:none;border:none;text-decoration:none" />
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;
          border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;color:#525f7f;
          text-align:left;margin-top:16px;margin-bottom:16px">
          Salut,
        </p>
        <p style="font-size:16px;line-height:24px;color:#525f7f;
          text-align:left;margin-top:16px;margin-bottom:16px">
          Mulțumim pentru achiziția ta! Cartea digitală <strong>"Arte Împletite în Păr"</strong> 
          de Cristina Gramma este gata și te așteaptă. Apasă butonul de mai jos pentru 
          a o descărca.
        </p>
        <a href="[!!! ÎNLOCUIEȘTE CU LINK-UL TĂU DE DESCĂRCARE !!!]"
          style="line-height:100%;text-decoration:none;display:block;
          max-width:100%;mso-padding-alt:0px;background-color:#d4af37;
          border-radius:5px;color:#fff;font-size:16px;font-weight:bold;
          text-align:center;padding:12px"
          target="_blank">
          <span></span>
          <span style="max-width:100%;display:inline-block;line-height:120%;
            mso-padding-alt:0px;mso-text-raise:7.5px">
            Descarcă Cartea
          </span>
          <span></span>
        </a>
         <p style="font-size:16px;line-height:24px;color:#525f7f;
         text-align:left;margin-top:24px;margin-bottom:16px">
          Descoperă secretele și tehnicile profesionale pentru crearea 
          celor mai frumoase coafuri împletite. Cartea conține ghiduri pas cu pas,
          tips & tricks de la experți și inspirație pentru toate ocaziile.
        </p>
        
        <hr style="width:100%;border:none;
        border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;
        color:#525f7f;text-align:left;margin-top:16px;margin-bottom:16px">
          <b>Ce vei găsi în această carte:</b>
        </p>
        <ul style="font-size:16px;line-height:24px;color:#525f7f;
          margin-top:16px;margin-bottom:16px;padding-left:20px">
          <li>Tehnici de bază și avansate de împletire</li>
          <li>Tutoriale ilustrate pas cu pas</li>
          <li>Idei creative pentru evenimente speciale</li>
          <li>Sfaturi pentru menținerea coafurii</li>
          <li>Accesorii și produse recomandate</li>
        </ul>
        
        <hr style="width:100%;border:none;
        border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;color:#525f7f;
          text-align:left;margin-top:16px;margin-bottom:16px">
          Dacă ai întrebări sau ai nevoie de ajutor cu tehnicile din carte, 
          ne poți răspunde direct la acest email. Suntem aici să te ajutăm!
        </p>
        <p style="font-size:16px;line-height:24px;color:#525f7f;
          text-align:left;margin-top:16px;margin-bottom:16px">
          Cu drag,<br />
          — Cristina Gramma & Echipa Fason Salon
        </p>
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;
          border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:12px;line-height:16px;color:#8898aa;
          margin-top:16px;margin-bottom:16px">
          Fason Salon &copy; 2025. Toate drepturile rezervate.
        </p>
          </td>
        </tr>
          </tbody>
        </table>
          </td>
        </tr>
          </tbody>
        </table>
      </body>
      </html>
      `;

        const finalEmailHtml = emailHtml.replace(
          "[!!! ÎNLOCUIEȘTE CU LINK-UL TĂU DE DESCĂRCARE !!!]",
          downloadUrl
        );

        logger.info(`Sending product email to: ${customerEmail}`);

        logger.info(
          `Resend api ${process.env.RESEND_API_KEY?.substring(0, 4)}***`
        );

        const { data, error } = await resend.emails.send({
          from: "notificari@updates.code-lab.ro",
          to: customerEmail,
          subject: "Planificatorul tău digital de la Planyvite este aici!",
          html: finalEmailHtml,
          text: `Mulțumim pentru achiziție!
         Descarcă planificatorul tău aici: ${downloadUrl}`,
        });

        if (error) {
          res.status(400).json(error);
          return;
        }

        res.status(200).send(data);
        return;
      } catch (err: unknown) {
        const error = err as Error;
        logger.error(
          "Error processing checkout.session.completed event:",
          error
        );
        res.status(500).send(`Error: ${error.message}`);
        return;
      }
    } else {
      res.status(200).send("Event type not handled");
      return;
    }
  } else {
    res.status(200).send("Event type not handled");
  }
});
