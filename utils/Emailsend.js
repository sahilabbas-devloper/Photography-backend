import dotenv from "dotenv"
dotenv.config();
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (Orders) => {
  const confirmlink = `${process.env.BACKEND_URL}/api/orders/${Orders._id}/confirm`;

  const declinelink = `${process.env.BACKEND_URL}/api/orders/${Orders._id}/declined`;

   console.log("=== EMAIL DEBUG ===")
  console.log("Orders._id:", Orders._id)
  console.log("BACKEND_URL:", process.env.BACKEND_URL)
  console.log("Confirm Link:", confirmlink)

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: 'sa9300432@gmail.com',
    subject: "New order Received",
    html: `
      <h2>New Order</h2>
      <p><b>Name:</b> ${Orders.name}</p>
      <p><b>Email:</b> ${Orders.email}</p>
      <p><b>Date:</b> ${Orders.date}</p>
      <p><b>Packages:</b> ${Orders.packages}</p>
      <br/>
      <table cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="border-radius:6px; background-color:#22c55e;">
        <a href="${confirmlink}"
          target="_blank"
          style="display:inline-block;
                 padding:14px 28px;
                 color:#ffffff !important;
                 font-size:16px;
                 font-weight:bold;
                 text-decoration:none;
                 border-radius:6px;
                 background-color:#22c55e;
                 font-family:Arial,sans-serif;">
          ✅ Confirm this Order
        </a>
      </td>
    </tr>
  </table>

  <br/>
      <table cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="border-radius:6px; background-color:#22c55e;">
        <a href="${declinelink}"
          target="_blank"
          style="display:inline-block;
                 padding:14px 28px;
                 color:#ffffff !important;
                 font-size:16px;
                 font-weight:bold;
                 text-decoration:none;
                 border-radius:6px;
                 background-color:#FF0000;
                 font-family:Arial,sans-serif;">
           Decline this Order
        </a>
      </td>
    </tr>
  </table>
    `,
  })
}

export default sendEmail;