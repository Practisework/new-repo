import React, { useState } from "react";

const Contactform = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [prod, setProd] = useState("");
  let [addr, setAddr] = useState("");

  const Submitform = async (event) => {
    event.preventDefault();
    fetch(
      "https://testing-7f0a5-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone_no: phone,
          Product: prod,
          Address: addr,
        }),
      }
    );
    window.alert("आम्ही तुम्हाला थोड्या वेळा नंतर कॉल करू");
  };

  return (
    <>
      <div className="main">
        <form></form>
        <div className="form">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="तुमचे नाव"
          />
          <div className="snd">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="इ-मेल"
            />
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              placeholder="फोन नं."
            />
          </div>
          <input
            type="text"
            value={prod}
            onChange={(e) => {
              setProd(e.target.value);
            }}
            placeholder="तुम्ही खरेदी करू इच्छित अवजाराचे नाव"
          />
          <input
            type="text"
            onChange={(e) => {
              setAddr(e.target.value);
            }}
            value={addr}
            placeholder="तुमचा पत्ता"
          />
          <button onClick={Submitform}>नोंदणी पूर्ण करा</button>
        </div>
      </div>
    </>
  );
};

export default Contactform;
