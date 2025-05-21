import type { APIRoute } from "astro";

const API_KEY = import.meta.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;
const DATACENTER = API_KEY.split('-')[1]; // safely extract 'us21'

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json() as { email: string };

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email address." }), {
        status: 400,
      });
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          "Authorization": `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return new Response(JSON.stringify({ success: false, error }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Subscribe error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};