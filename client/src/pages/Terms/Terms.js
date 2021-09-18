import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading/Heading";

import "./Terms.scss";

export default function Terms() {
  return (
    <div className="page">
      <Heading pageTitle={"Terms & Conditions"} />
      <div className="terms-page">
        <p>
          Welcome to DNA Life Organisation registered under Indian Trust Act in
          2016 and having registration number, BNG (U) BYP/ IV 80 2016 – 2017.
          This website (https://www.dnalife.org) is owned and operated by DNA
          Life Organisation (“DNA Life Organisation”, “we,” “us” or “our”). DNA
          Life Organisation provides this website, including all information,
          software and services available from this website, to you, the user,
          conditioned upon your acceptance of all the terms, conditions,
          policies and notices described herein. Your use of the website
          constitutes your agreement to all such terms, conditions, policies and
          notices.
        </p>
        <h2>Donations</h2>
        <p>
          You can donate to selected causes or Direct Donation on DNA Life
          Organisation using a number of payment methods such as credit or debit
          cards or cheque. Donations are processed by our payment gateway
          service provider Razorpay.
        </p>
        <h2>Payment Gateway</h2>
        <p>
          If you are making donations through the payment gateway, you
          understand that the payment gateway is provided by a third party and
          governed by the terms and conditions provided by such third party. You
          are liable in the event you violate any of the terms and conditions of
          such third party in making your donations. DNA Life Organisation shall
          not be responsible for any such errors or default in making your
          donations. You will receive an email confirming your donation to the
          cause. This is the final confirmation of your donation. If you have
          not received please <Link to="/contact-us">Contact</Link> DNA Life
          Organisation immediately.
        </p>
        <h2>Tax exemption certificates</h2>
        <p>
          You are requested to go through the tax exemption details displayed on
          the donation page of website before you make the donation. DNA Life
          will ensure to send applicable tax exemption certificates to you
          within reasonable time limits.
        </p>
        <h2>Use of Materials from the Website</h2>
        <p>
          Except where explicitly stated otherwise, this website and all of its
          content (including but not limited to software, files, graphics,
          accounts and any data) are the property of and owned by DNA Life
          Organisation and/or its affiliates, suppliers or licensors and are
          protected by copyright, trademark and other laws of India and other
          countries. You may display and electronically copy, download and print
          hard-copy versions of the materials contained on the website for your
          personal and non-commercial use, provided that you do not modify or
          delete any copyright, trademark or other proprietary notice that
          appears on the materials you copy, download or print. When you
          display, copy, download or print any materials on or from the website,
          they are provided to you by DNA Life Organisation and/or its
          affiliates, suppliers or licensors under a license that is revocable
          at will by DNA Life Organisation. DNA Life Organisation and/or its
          affiliates, suppliers or licensors retain full and complete title to
          the materials and to any and all of the associated intellectual
          property rights. Any other use of the materials on the website,
          including but not limited to the modification, distribution,
          transmission, performance, broadcast, reproduction, publication,
          licensing, reverse engineering, transfer or sale of, or the creation
          of derivative works from, any materials, information, software,
          products or services obtained from the website, without the prior
          written permission of DNA Life Organisation, is expressly prohibited.{" "}
        </p>
        <div className="common-routes">
          <Link to="/refund">View Refund & Cancellation Policy</Link>
          <div className="divider">|</div>
          <Link to="/privacypolicy">View Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
