import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

const posts = [
  {
      id: 1,
      author:{
          avatarUrl: "https://github.com/moisesVeSouza.png",
          name: 'Moisés Souza',
          role: 'Web Developer'
      },
      content: [
          { type: 'paragraph', content: 'Lorem ipsum' },
          { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi sit, voluptatem quo similique consequuntur ipsum odio, autem dolorem magni impedit doloribus enim excepturi suscipit, ut distinctio architecto quam veritatis.'},
          { type: 'link', content: 'tempora esse ad praesentium.' },
          { type: 'link', content: 'commodi itaque eveniet?.' }
      ],
      publishedAt: new Date('2022-12-05 19:00:00')
  },
  {
      id: 2,
      author:{
          avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
          name: 'Moisés Verissimo',
          role: 'BackEnd Developer'
      },
      content: [
          { type: 'paragraph', content: 'Lorem ipsum' },
          { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi sit, voluptatem quo similique consequuntur ipsum odio, autem dolorem magni impedit doloribus enim excepturi suscipit, ut distinctio architecto quam veritatis.'},
          { type: 'link', content: 'tempora esse ad praesentium.' },
          { type: 'link', content: 'commodi itaque eveniet?.' }
      ],
      publishedAt: new Date('2022-11-30 19:00:00')
  },
]; 

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
         {posts.map(p => {
          return (
            <Post  
            key={p.id}
              author={p.author}
              content={p.content}
              publishedAt={p.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
  );
}