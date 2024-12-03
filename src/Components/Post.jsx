import { Avatar } from "./Avatar";
import { Comment } from "./Comment";


import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/moisesVeSouza.png" />
                    <div className={styles.authorInfo}>
                        <strong>Moisés Souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="13 de novembro as três e cinquenta e três" dateTime='03-11-2024 15:53:00'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi sit, voluptatem quo similique consequuntur ipsum odio, autem dolorem magni impedit doloribus enim excepturi suscipit, ut distinctio architecto quam veritatis.</p>

                <p> <a href="">tempora esse ad praesentium.</a></p>

                <p> Lorem ipsum dolor <a href="">commodi itaque eveniet?</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}

