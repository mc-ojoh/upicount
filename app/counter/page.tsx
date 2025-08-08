"use client";

import { useState } from "react";
import styles from "./counter.module.css";

export default function UpiButton() {
  const [text, setText] = useState("う");
  const [count,setCount]=useState(1);

const handleClick =()=> {

if(count === 10) {
alert("うぴちゃんは満足してまん丸になったよ");
setText("う");
setCount(1);
} else {
 setText(text+"ぴ");
 setCount(count + 1);
}
};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <button
        className={styles.button}
        onClick={handleClick}>
      
        うぴぴボタン
      </button>
    </div>
  );
}
