import React, { useState } from "react";
import "./style/style.css";
import Polaroid from "./Polaroid";

// function currencyFormat(num) {
//   return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
// }

// const setToken =
//   "eyJhbGciOiJSUzI1NiJ9.eyJleHBpcnlJbk1pbGxpU2Vjb25kcyI6NjA0ODAwMDAwLCJjcmVhdGVUaW1lIjoxNjEzMjAyMDA5MjM2LCJzZWNyZXQiOiJsL1pEdks2R1Zjc3RoNzlhOXdCcnFaNkVpazgvT3h6S0dUS2hiOEI1MjdqM3c5TjlBM3Qyanp0RXVXS1pSS3N1OGpFdnhYbWpINFp6WlRFaG4vVkxGMVovNkQ0czY4ODNiK1V3T2tjaVlVK20xSVI4cjM1ZFBpQU55VDErWUJmZkJmTUt2NjNtdXlWa1FIN1gxMFNQV3Fwa283RFpmMEoybk9WWVVXdk5QRnNJaGFZVUdodkhtNCtobDJnNzdQRDNrZkE0U0VZVE5HbWhwQTEvT2hoNGhEamdPTUxhS1BaNVVuSkw4YWlyK3F5QVNlaGNIQ0tHVk1PcHhUZUNiRGsrSC8zSWhEWlIyd29EeHN0UUNVdmZpTTlhbHcyMDlVV1U5L21VQzRneHhQa3oyaGF6UkJoK0VFbVQ0YndMb0R3dVJEZURXcWFjcE5DbnpyeWNHNzZsTTFHa2d3dmEyM3ZPVFYrMzVsQnlreEk9In0.IXiUnyOjE-IMBrZRFL3eAchhv2VSEFmLOxLHMmYajU4h22AmtQFmCBnns-9nV9MGAo_ZFFmIdV5gWUYtojZZc5Tgtni54drzldUBJ2n0pcAmOm_II6kfozw6oqTZcZuyFOsSMXCxGqxu13QZiVPE4KJphQFwx-m9dS4KZaHfQkqJ97q8ve8D7mHOss__sSWdyqvflWuA3zjMgS01rtM0x2ezFcFb0jN5FdxIR1MhS7PeiIwFmYJeW2EBBl08zfYqjQE2CQsKbIklhynfl9uGcPWigl5J4J1C6qkkpmeK2FeREV3W-PcBLRXPdWqJ4ps3ukuEHzAu0oP7IMeiJzZEPg";

export default function App() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  // const [saldo, setSaldo] = useState(null);
  // const [rekening, setRekening] = useState({});

  const date = (dates) => {
    const date = new Date(dates);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return day + "-" + month;
  };

  const clicked = (e) => {
    if (date(new Date()) === "14-2") {
      setOpen(!open);
      new Audio(require("./acha.mp3")).play();
    } else {
      setError(true);
    }
    // date(new Date()) === "14-2" ? setOpen(!open) : alert("buka tgl 14");
    // setOpen(!open);
    // fetched();
    // fetched2();
  };

  // const fetched = () => {
  //   const data = {
  //     token: setToken,
  //     nominal: 10000,
  //     tujuan: "08970764238",
  //     catatan: "Test kirim dari website",
  //   };

  //   fetch("https://backend-valentine.herokuapp.com/api/v1/ovo/transfer", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // setRekening(data.isOVO);
  //       alert(JSON.stringify(data));
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  // const fetched2 = () => {
  //   const data = {
  //     token: setToken,
  //   };

  //   fetch("https://backend-valentine.herokuapp.com/api/v1/ovo/saldo", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSaldo(data.balance);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div>
      <div
        className="bgoverlay"
        style={{
          //backgroundColor: localStorage.getItem("bgcolor"),
          backgroundColor: open
            ? "rgba(255, 64, 129,0.7)"
            : "rgba(103,58,183,0.7)",
          transition: "all .7s ease",
          WebkitTransition: "all .7s ease",
          MozTransition: "all .7s ease",
        }}
      >
        {!open ? (
          <div className="container">
            <span className="ico">
              <span className="ico2"></span>
              <span className="title" onClick={clicked}>
                Click Me
              </span>
            </span>
            {error ? (
              <h4 className="not-yet">Buka saat 14 Februari</h4>
            ) : (
              <h4 className="not-yet hidden">ASD</h4>
            )}
            {/* {saldo ? (
                <h4 className="not-yet">
                  Saldo OVO : {currencyFormat(saldo.card_balance)}
                </h4>
              ) : (
                <h4 className="not-yet hidden">ASD</h4>
              )} */}
          </div>
        ) : (
          <Polaroid />
        )}
      </div>
    </div>
  );
}
