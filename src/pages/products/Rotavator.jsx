import React from "react";

const Rotavator = () => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>मोडेल</th>
          <th>वजन</th>
          <th>पाते</th>
          <th>size (ft)</th>
          <th>PTO Shaft rpm</th>
          <th>Side transmission</th>
          <th>पात्याचे प्रकार</th>
          <th>Side plate</th>
          <th>Gear box</th>
        </tr>
        <tr>
          <td className="W">SR (36) MSS (5) FT</td>
          <td>४१० कि.ग्रा</td>
          <td>३६</td>
          <td>५ फूट</td>
          <td>५४०/१०००</td>
          <td>Gear drive</td>
          <td>L</td>
          <td>१० मि.मी</td>
          <td>Heavy duty</td>
        </tr>
        <tr>
          <td className="W">SR (36) MSS (5.5) FT</td>
          <td>४१५ कि.ग्रा</td>
          <td>३६</td>
          <td>५ फूट</td>
          <td>५४०/१०००</td>
          <td>Gear drive</td>
          <td>L</td>
          <td>१० मि.मी</td>
          <td>Heavy duty</td>
        </tr>
        <tr>
          <td className="W">SR (४२) MSS (6) FT</td>
          <td>४२० कि.ग्रा</td>
          <td>४२</td>
          <td>५ फूट</td>
          <td>५४०/१०००</td>
          <td>Gear drive</td>
          <td>L</td>
          <td>१० मि.मी</td>
          <td>Heavy duty</td>
        </tr>
      </table>
    </div>
  );
};

export default Rotavator;
