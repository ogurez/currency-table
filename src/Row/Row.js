import React, { Component } from 'react';
import './Row.css';

const Row = ({Cur_Abbreviation, Cur_ID, Cur_Name, Cur_OfficialRate, Cur_Scale, Date}) =>(
 <tr>
   <th>{Cur_Abbreviation}</th>
   <th>{Cur_ID}</th>
   <th>{Cur_Name}</th>
   <th>{Cur_OfficialRate}</th>
   <th>{Cur_Scale}</th>
   <th>{Date}</th>
 </tr>
);

export default Row;