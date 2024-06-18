import { Header } from "./Components/Header";
import { Post } from "./Post";

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./Components/Sidebar";

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post author="Moisés Souza" content="teste"/>
          <Post author="João Blabla" content="teste2"/>
        </main>
      </div>
    </div>
  );
}