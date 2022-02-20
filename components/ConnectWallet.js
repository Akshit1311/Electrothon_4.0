import Image from "next/image";
import React, { useState } from "react";

import styles from "../styles/ConnectWallet.module.css";

const ConnectWallet = () => {
  const [accountAddr, setAccountAddr] = useState("");

  const connectWallet = async () => {
    try {
      if (!accountAddr) {
        const [account] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccountAddr(account);
      } else setAccountAddr("");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={styles.button} onClick={connectWallet}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
        alt="metamask"
        height={30}
        width={30}
      />
      <div className={styles.text}>
        {accountAddr
          ? `${accountAddr.slice(0, 5)}...${accountAddr.slice(-5)}`
          : "ConnectWallet"}
      </div>
    </div>
  );
};

export default ConnectWallet;
