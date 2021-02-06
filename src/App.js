import React, { useState } from "react";
import "./style/style.css";

function currencyFormat(num) {
  return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

const setToken =
  "eyJhbGciOiJSUzI1NiJ9.eyJleHBpcnlJbk1pbGxpU2Vjb25kcyI6NjA0ODAwMDAwLCJjcmVhdGVUaW1lIjoxNjEyNjA4NjI3NDAyLCJzZWNyZXQiOiJsL1pEdks2R1Zjc3RoNzlhOXdCcnFaNkVpazgvT3h6S0dUS2hiOEI1MjdqM3c5TjlBM3Qyanp0RXVXS1pSS3N1cHdPWDNrU3VCZWEycTFEVlJlUGlJTnN6TzFPbGlTREhqRExSZHh2TDZrS29QTkF1dDQ0ZG5odmZwUEJ0NFVzdnBCRzVxUUM1TFdCR0EvS1BIWkhMZ3hJRnNRQkxOQUE1b3ltK2p5N0o1RzZQT2VJcFpQSFlDd1BQNzdhajNMUTFwaUxwalpTWXlJRUVwUEYzd3hRVVZhMVRVYlBOVlNTaVlLcmRBNlBDaDBVV1NiZ3AzVlBEcGxCMkRJNk9IZlB6aGxUZGdIVll2NkN5Ym9XU3Rha0tTa0xXdzVxTzR1SkpqZCtSZWdFcE1kbHhxNzhBU04vQjBJMVQ2aE1zU1VrMGFvYVpXMlVYbGQydUh4WFdxaU5iajJ1S3FISXMwWjlvRVJYUTI0OTl3SFU9In0.L3L5HwNBCt-KZXm4Owtm4iZMM92jLFrcLb3VnFcC8oFs8xGgPG3I_PqiePa9dLRvjkLu1R8gg2R6BV1jReAOEJgBhSSEI5Fy81ocFDEZARr7Z4ZrGIbrnsSMSfXEYjbr1WUjyL6imAO4YljcXbCebvoTQ425WjIqSp-EC5DTR92so6pgzfpKc6I-v_xaZnCNGNUDVFycIfxoYoipPo6w_7O9Xgdo9HY8R987WEuq-o4ZHlAfBcWwJxvzY5rDXOs7_bC10d8MPXaPQwCpcNK3gn3AtESihDdD9Iv5LrvX303NtM2FXvJJabs8Yc4HIBIYl_np7a8D30fOYGUMwULBJA";

export default function App() {
  const [open, setOpen] = useState(false);
  // const [error, setError] = useState(false);
  const [saldo, setSaldo] = useState(null);
  // const [rekening, setRekening] = useState({});

  const date = (dates) => {
    const date = new Date(dates);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return day + "-" + month;
  };

  const clicked = (e) => {
    // date(new Date()) === "14-2" ? setOpen(!open) : setError(true);
    date(new Date()) === "14-2" ? setOpen(!open) : alert("buka tgl 14");
    // setOpen(!open);
    fetched();
    fetched2();
  };

  const fetched = () => {
    const data = {
      token: setToken,
      nominal: 1,
      tujuan: "08970764238",
    };

    fetch("https://backend-valentine.herokuapp.com/api/v1/ovo/transfer", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // setRekening(data.isOVO);
        alert(JSON.stringify(data.isOVO));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetched2 = () => {
    const data = {
      token: setToken,
    };

    fetch("https://backend-valentine.herokuapp.com/api/v1/ovo/saldo", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setSaldo(data.balance);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
        <div className="container">
          {!open ? (
            <>
              <span className="ico">
                <span className="ico2"></span>
                <span className="title" onClick={clicked}>
                  Click Me
                </span>
              </span>
              {/* {error ? (
                <h4 className="not-yet">Buka saat 14 Februari</h4>
              ) : (
                <h4 className="not-yet hidden">ASD</h4>
              )} */}
              {saldo ? (
                <h4 className="not-yet">
                  Saldo OVO : {currencyFormat(saldo.card_balance)}
                </h4>
              ) : (
                <h4 className="not-yet hidden">ASD</h4>
              )}
            </>
          ) : (
            <div className="containerCard">
              <div className="card">
                <div className="envelope"></div>
                <h6>Heyyy,</h6>
                <br></br>
                <h6>
                  Ketika kamu baca surat ini, aku cuman mau bilang sesuatu sama
                  kamu, bahwa aku suka kamu, aku sayang kamu, aku tak mudah
                  mencintai semenjak pasca putus dulu, aku ga minta kamu buat
                  sayang padaku juga, biarlah aku yang sayang samamu, mungkin
                  caraku kasih tau ini dibilang alay, tapi mau gimana lagi,
                  terserah kamu nanti saat sudah baca surat ini, mau ilfeel ke
                  aku, atau apapun yang penting aku sudah mengungkapkan
                  perasaanku.
                </h6>
                <br></br>
                <h6>
                  Di samping, ada amplop kamu klik saja anggap saja hadiah
                  valentine (iya tau kok kamu bukan pacar/doi, aku bingung mau
                  kasih ke siapa, aku cuman punya kamu).
                </h6>
                <br></br>
                <h6>
                  Made with <em>❤</em> - Herly
                </h6>
                <div className="heart"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
