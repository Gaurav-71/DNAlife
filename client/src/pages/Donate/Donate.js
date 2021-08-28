import React from "react";
import Divider from "@material-ui/core/Divider";
import "./Donate.scss";
import { Link } from "react-router-dom";
import graphic from "../../assets/Donate/undraw_environment_iaus.svg";
import Heading from "../../components/Heading/Heading";
import { ArrowRightIcon } from "react-line-awesome";

export default function Donate() {
  return (
    <div>
      <div className="page donate-page">
        <Heading elevation={15} pageTitle="Donate to Support Our Cause" />
        <div className="page-content">
          <div className="left">
            <img src={graphic} alt="donation for environment" />
          </div>
          <div className="right">
            <h1>Donate</h1>
            <h4>Every Plant, Every Penny makes a difference!</h4>
            <Divider
              style={{
                backgroundColor: "#919191",
                width: "100%",
                margin: "2rem 0",
              }}
            />
            <p>
              Our efforts and your generous support can help us in realising the
              Green Mission to revive rainforests, sustainable forest farming,
              conducting research, educating and creating awareness among the
              masses!
            </p>
            <p>
              Every Plant, Every Penny makes a difference, Your gift is
              Invaluable!
            </p>
            <div className="card-container">
              <div className="card-1">
                <p>
                  Online Payments through Credit/Debit Cards, UPI, Payment
                  Wallet transactions
                </p>
                <Link to="">
                  <ArrowRightIcon />
                </Link>
              </div>
              <div className="card-2">
                <p>
                  Account Details for NEFT/RTGS/IMPS Transactions and Reciept
                  request.
                </p>
                <Link to="donate/account-details">
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
            <p>
              For any queries, please contact us through information given{" "}
              <Link to="/contact-us">here.</Link>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
