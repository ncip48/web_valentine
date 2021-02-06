import React, { useState } from "react";
import "./style/style.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const date = (dates) => {
    const date = new Date(dates);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return day + "-" + month;
  };

  const clicked = (e) => {
    date(new Date()) === "14-2" ? setOpen(!open) : setError(true);
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
              {error ? (
                <h4 className="not-yet">Buka saat 14 Februari</h4>
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
                  aku, benci ke aku terserah aku terima, yang penting aku sudah
                  mengungkapkan perasaanku.
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
