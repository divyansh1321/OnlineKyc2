import React from "react";
import "../index.css";

const UserDetails = () => {
  const userDetails = {
    _id: "65f2db7bef1d3afec1adbaf4",
    aadharnumber: "343248727242",
    nameonaadhar: "avinash",
    pannumber: "FPTPR5348Q",
    nameonpan: "avinash",
    __v: 0,
    aadharlink:
      "https://drive.google.com/drive/folders/1aPqJwL_huGQjCDpkOSdHbUeIIFQETj",
    kycvedio:
      "https://drive.google.com/drive/folders/1aPqJwL_huGQjCDpkOSdHbUeIIFQETj",
    panlink:
      "https://drive.google.com/drive/folders/1aPqJwL_huGQjCDpkOSdHbUeIIFQETj",
    branchOfBankAccount: "chennai",
    clientType: "Individual",
    minorOrMajor: "Minor",
    email: "xyz@gmail.com",
    phonenumber: "123456789",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "blue",
    textDecoration: "underline",
  };

  return (
    <div className="step5-container">
      {" "}
      {/* Apply class name for Step5 */}
      <h2 className="step5-title">User Details</h2>{" "}
      {/* Apply class name for Step5 */}
      <ul className="step5-section">
        {" "}
        {/* Apply class name for Step5 */}
        <li style={listItemStyle}>
          <strong>_id:</strong> {userDetails._id}
        </li>
        <li style={listItemStyle}>
          <strong>Aadhar Number:</strong> {userDetails.aadharnumber}
        </li>
        <li style={listItemStyle}>
          <strong>Name on Aadhar:</strong> {userDetails.nameonaadhar}
        </li>
        <li style={listItemStyle}>
          <strong>PAN Number:</strong> {userDetails.pannumber}
        </li>
        <li style={listItemStyle}>
          <strong>Name on PAN:</strong> {userDetails.nameonpan}
        </li>
        <li style={listItemStyle}>
          <strong>__v:</strong> {userDetails.__v}
        </li>
        <li style={listItemStyle}>
          <strong>Aadhar Link:</strong>{" "}
          <a
            href={userDetails.aadharlink}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Click here
          </a>
        </li>
        <li style={listItemStyle}>
          <strong>KYC Video:</strong>{" "}
          <a
            href={userDetails.kycvedio}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Click here
          </a>
        </li>
        <li style={listItemStyle}>
          <strong>PAN Link:</strong>{" "}
          <a
            href={userDetails.panlink}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Click here
          </a>
        </li>
        <li style={listItemStyle}>
          <strong>Branch of Bank Account:</strong>{" "}
          {userDetails.branchOfBankAccount}
        </li>
        <li style={listItemStyle}>
          <strong>Client Type:</strong> {userDetails.clientType}
        </li>
        <li style={listItemStyle}>
          <strong>Minor/Major:</strong> {userDetails.minorOrMajor}
        </li>
        <li style={listItemStyle}>
          <strong>Email:</strong> {userDetails.email}
        </li>
        <li style={listItemStyle}>
          <strong>Phone Number:</strong> {userDetails.phonenumber}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
