import React from "react";

const Trolley = () => {
  return (
    <div className="table">
      <table>
        <tr>
          <th></th>
          <th>suspension</th>
          <th>Non suspension</th>
          <th>suspension</th>
          <th>Non suspension</th>
          <th>suspension</th>
          <th>Non suspension</th>
        </tr>
        <tr>
          <td className="W">वजन</td>
          <td>१२०० कि.ग्रा</td>
          <td>१०६० कि.ग्रा</td>
          <td>११०० कि.ग्रा</td>
          <td>१००० कि.ग्रा</td>
          <td>८२० कि.ग्रा</td>
          <td>७५० कि.ग्रा</td>
        </tr>
        <tr>
          <td className="W">बेस शीट</td>
          <td>६ मि.मी</td>
          <td>६ मि.मी</td>
          <td>६ मि.मी</td>
          <td>६ मि.मी</td>
          <td>६ मि.मी</td>
          <td>६ मि.मी</td>
        </tr>
        <tr>
          <td className="W">उंची</td>
          <td>२१ इंच</td>
          <td>२१ इंच</td>
          <td>२१ इंच</td>
          <td>२१ इंच</td>
          <td>२१ इंच</td>
          <td>२१ इंच</td>
        </tr>
      </table>
    </div>
  );
};

export default Trolley;
