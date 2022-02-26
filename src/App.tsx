import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
      <span class={styles.logoLeo}>LeoGouveia</span>
    </div>
  );
};

export default App;
