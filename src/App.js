import React, { useState } from "react";
import "./style/style.css";

function currencyFormat(num) {
  return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

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
      token:
        "eyJhbGciOiJSUzI1NiJ9.eyJleHBpcnlJbk1pbGxpU2Vjb25kcyI6NjA0ODAwMDAwLCJjcmVhdGVUaW1lIjoxNjEyNTkwNDM4MDk1LCJzZWNyZXQiOiJsL1pEdks2R1Zjc3RoNzlhOXdCcnFaNkVpazgvT3h6S0dUS2hiOEI1MjdqM3c5TjlBM3Qyanp0RXVXS1pSS3N1NlRrRWUxcUdja1F4WitRalZvVm9jdS9kSmxzc2pyeVFxR3N3MWozSVVDdGp5K1lIc1ZGUUt5WGtzSkF1WUhrQ1VVeUFBQjZmeXp2T0l4cFlaVDV1YXJxOEJUSlJFeWlNYUxQNStNUHZySjVVOXRuWFlGR1QrLzdmT3c3M0lsY1VVd3g0a0oydFEvMTIrYWV0ejBHRnhCRXp0aTFDMHppRTNYd0gxSUJKWWFzSkZMczlwcXltWHVZUVgrZXpxSk91SkFOTTg2dUl4RkRIWGVmR0RUUVR0azQyK3JEa2tud3NtbnJnOTVIVHRSRHBabzdCZi8wSm9Gd2lobXd2MmtEM3ZuNkhFQlg5MXR0cWtjQmRQUmhsamJyMlk2VTBGWUhpZ2VuWTdQaEEyLzA9In0.YPiKCvDKRWt97wM1nxtPFdYF8giWguh4i2gwsuKLgWXndLd0DnEFdf2H5fVr6QZ9NsfKncHoiEeUjLsrjmEW03P8Qm2yscvU26eQQNvNpzjD9z4LTU0_3SFe_XXB_QwmxXwEkwCS5P2grzey2p2C7w79QFSZV1UaKO5JSZAkQtK5mpOJQbAxXwTEb5RdpKSMQYLVPRnzhdjikGhWNxCZgXR4lErg2NHfP9zpuxcKvuFbD6It6qXINPVHyi9w8tk563QssSs2lfyfpmvK66Vf6i501KyjwhVbvkSfSyR9ejGTy4z8u1aLR64MG9w1MR-lRDcyrQX9SKyWpPxTjQzpZg",
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
      token:
        "eyJhbGciOiJSUzI1NiJ9.eyJleHBpcnlJbk1pbGxpU2Vjb25kcyI6NjA0ODAwMDAwLCJjcmVhdGVUaW1lIjoxNjEyNTkwNDM4MDk1LCJzZWNyZXQiOiJsL1pEdks2R1Zjc3RoNzlhOXdCcnFaNkVpazgvT3h6S0dUS2hiOEI1MjdqM3c5TjlBM3Qyanp0RXVXS1pSS3N1NlRrRWUxcUdja1F4WitRalZvVm9jdS9kSmxzc2pyeVFxR3N3MWozSVVDdGp5K1lIc1ZGUUt5WGtzSkF1WUhrQ1VVeUFBQjZmeXp2T0l4cFlaVDV1YXJxOEJUSlJFeWlNYUxQNStNUHZySjVVOXRuWFlGR1QrLzdmT3c3M0lsY1VVd3g0a0oydFEvMTIrYWV0ejBHRnhCRXp0aTFDMHppRTNYd0gxSUJKWWFzSkZMczlwcXltWHVZUVgrZXpxSk91SkFOTTg2dUl4RkRIWGVmR0RUUVR0azQyK3JEa2tud3NtbnJnOTVIVHRSRHBabzdCZi8wSm9Gd2lobXd2MmtEM3ZuNkhFQlg5MXR0cWtjQmRQUmhsamJyMlk2VTBGWUhpZ2VuWTdQaEEyLzA9In0.YPiKCvDKRWt97wM1nxtPFdYF8giWguh4i2gwsuKLgWXndLd0DnEFdf2H5fVr6QZ9NsfKncHoiEeUjLsrjmEW03P8Qm2yscvU26eQQNvNpzjD9z4LTU0_3SFe_XXB_QwmxXwEkwCS5P2grzey2p2C7w79QFSZV1UaKO5JSZAkQtK5mpOJQbAxXwTEb5RdpKSMQYLVPRnzhdjikGhWNxCZgXR4lErg2NHfP9zpuxcKvuFbD6It6qXINPVHyi9w8tk563QssSs2lfyfpmvK66Vf6i501KyjwhVbvkSfSyR9ejGTy4z8u1aLR64MG9w1MR-lRDcyrQX9SKyWpPxTjQzpZg",
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
