"use client"; // ← これ必須（useState使う時）

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // countの初期値が0

  return (
    <div>
      <h1>{count}</h1> {/* countの値を表示 */}
      <button onClick={() => setCount(count + 1)}>+1する</button>
    </div>
  );
}
