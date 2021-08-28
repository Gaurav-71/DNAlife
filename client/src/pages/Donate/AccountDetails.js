import React from "react";
import emailjs from "emailjs-com";

import Heading from "../../components/Heading/Heading";

import "./AccountDetails.scss";
import "../../scss/custom.scss";

function sendEmail(e) {
  e.preventDefault();
  console.log("e value : ", e);
  emailjs
    .sendForm(
      "service_a1oi3mj",
      "template_qd4mmi4",
      e.target,
      "user_Y0p4a5dRdCuQpcOjhhbaz"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export default function AccountDetails() {
  return (
    <div className="page">
      <Heading pageTitle={"Contact Us"} />
      <div className="account-details-page">
        <div className="account">
          <h1>Account Details</h1>
          <p>
            You can make a donation by doing a NEFT / RTGC / ICMP Transaction
            through your Bank or any other offline-means and request a reciept
            through the adjacent section thereafter. We will reach out to you
            with your donation reciept once the payment is confirmed.
          </p>
          <table className="account-table">
            <tr className="table-row">
              <td className="detail-name">
                <h5>Account No. :</h5>
              </td>
              <td>
                <h5>35972258354</h5>
              </td>
            </tr>
            <tr className="table-row">
              <td className="detail-name">
                <h5>Account Name :</h5>
              </td>
              <td>
                <h5>DNA Life Organisation</h5>
              </td>
            </tr>
            <tr className="table-row">
              <td className="detail-name">
                <h5>IFSC :</h5>
              </td>
              <td>
                <h5>SBIN0041203</h5>
              </td>
            </tr>
            <tr className="table-row">
              <td className="detail-name">
                <h5>MICR :</h5>
              </td>
              <td>
                <h5>560002581</h5>
              </td>
            </tr>
            <tr className="table-row">
              <td className="detail-name">
                <h5>Bank :</h5>
              </td>
              <td>
                <h5>State Bank of India, Ananthapura Gate, </h5>
                <h5>Bangalore, Karnataka, India</h5>
                <h5>PIN : 560064</h5>
              </td>
            </tr>
          </table>
        </div>
        <form onSubmit={sendEmail} className="reciept-request">
          <h1>Reciept Request</h1>
          <input
            id="username"
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
          />
          <input
            id="userEmail"
            type="text"
            className="input"
            name="email"
            placeholder="Your Email Address"
          />
          <input
            id="phone"
            type="text"
            className="input"
            name="phone"
            placeholder="Your Phone No."
          />
          <input
            id="pan"
            type="text"
            className="input"
            name="pan"
            placeholder="PAN Number"
          />
          <input
            id="amount"
            type="text"
            className="input"
            name="amount"
            placeholder="Donation Amount"
          />
          <input
            id="transaction"
            type="text"
            className="input"
            name="transaction"
            placeholder="Transaction Reference Number"
          />
          <textarea
            id="address"
            className="textarea-message"
            name="address"
            placeholder="Your Address"
          />
          <textarea
            id="userMessage"
            className="textarea-message"
            name="message"
            placeholder="Your Message"
          />

          <button type="submit" className="btn-orange">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
