import React from "react";
import { Fragment } from "react";
import logo from "../imge/ren.png";

export default function Profile() {
  const pf1 = [
    {
      id: 1,
      Nama: "Nama : Renaldy Andara Permata",
      NIM: "NIM : 21120120130055",
      Jurusan: "Jurusan : Teknik Komputer",
    },
  ];
  return (
    <div>
      <div className="des">
        <div>
          <h1 id="pf">PROFILE</h1>
          <img src={logo} alt="logo" className="ph" />
          {pf1.map((item, index) => (
            <Fragment key={item.id}>
              <p id="nama">{item.Nama}</p>
              <p id="nim">{item.NIM}</p>
              <p id="jur">{item.Jurusan}</p>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
