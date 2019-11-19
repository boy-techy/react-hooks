import React from 'react';
import NavBar from "../../../common/navBar";
import { KeyMap, TagType } from "./constants";
import "./index.scss";

export default ({ location, history }) => {
    if (!location.state) {
        history.push("/");
        return null;
    }
    const { state } = location;
    return (
      <div className={"user-detail"}>
          <NavBar back={true}/>
          <div className={"detail-card"}>
              <table>
              {
                  Object.keys(state).map((key, index) => {
                      const Tag = TagType[key] ? TagType[key]['tag'] : 'span';
                      const href = TagType[key] ? TagType[key]['href'] + state[key] : '';
                      return (
                        <tr key={index}>
                            <td className={"label"}>{KeyMap[key]}</td>
                            <td><Tag href={href}>{state[key]}</Tag></td>
                        </tr>)
                  })
              }
              </table>
          </div>
      </div>);
    
};
