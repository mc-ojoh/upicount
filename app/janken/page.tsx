"use client";

import { useState } from "react";

const hands = ["グー", "チョキ", "パー"] as const;

export default function Janken() {
  const [userHand, setUserHand] = useState<string | null>(null);
  const [computerHand, setComputerHand] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");

  function play(userChoice: string) {
    const computerChoice = hands[Math.floor(Math.random() * hands.length)];
    setUserHand(userChoice);
    setComputerHand(computerChoice);
    setResult(judge(userChoice, computerChoice));
  }

  function judge(user: string, computer: string) {
    if (user === computer) return "あいこ！";
    if (
      (user === "グー" && computer === "チョキ") ||
      (user === "チョキ" && computer === "パー") ||
      (user === "パー" && computer === "グー")
    ) {
      return "勝ち！";
    }
    return "負け！";
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", padding: 20 }}>
      <h1>じゃんけんゲーム</h1>
      <div>
        {hands.map((hand) => (
          <button
            key={hand}
            onClick={() => play(hand)}
            style={{ margin: 5, padding: "10px 20px", fontSize: 18, cursor: "pointer" }}
          >
            {hand}
          </button>
        ))}
      </div>
      {userHand && computerHand && (
        <div style={{ marginTop: 20, fontSize: 24 }}>
          <p>あなたの手：{userHand}</p>
          <p>コンピュータの手：{computerHand}</p>
          <p>結果：{result}</p>
        </div>
      )}
    </div>
  );
}
