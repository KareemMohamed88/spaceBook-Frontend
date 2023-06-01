import { useState, useEffect } from "react";
import axios from 'axios';
import styles from './styles/home.module.css';

function App() {
    const api = "https://backend-9v6g.onrender.com";
    const [posts, setPosts] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        axios.get(`${api}/posts`).then((res) => { setPosts(res.data) })
    }
        , [posts])

    const createPost = () => {
        axios.post(`${api}/createPost`, { text, })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <>

            <div className={styles.containerFluid}>
                <div className={styles.navBar}>
                    <h2>spaceBook</h2>
                    <input type="search" placeholder="search" />
                    <section>
                        <div className={styles.menu}>
                            <a href="?logout">logout</a>
                        </div>
                        <ion-icon id="toggle" name="apps" />
                        <img src={require("./assets/Profile.png")} className={styles.profile} />
                    </section>
                </div>
                <div className={styles.mobilePgesSection}>
                    <ul>
                        <li>
                            <a href="#">
                                <ion-icon name="home-outline" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ion-icon name="accessibility-outline" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ion-icon name="../images-outline" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ion-icon name="newspaper-outline" />
                            </a>
                        </li>
                        <li>
                            <a href="profile.php">
                                <ion-icon name="person-circle-outline" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ion-icon name="settings-outline" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.main}>
                    <div className={styles.leftSide}>
                        <div className={styles.head}>
                            <img src={require("./assets/Profile.png")} className={styles.profile} width="40px" />
                            <section>
                                <h4>SpaceBook</h4>
                                <p>Softwere Company</p>
                            </section>
                        </div>
                        <div className={styles.List}>
                            <ul>
                                <li>
                                    <span>
                                        <ion-icon name="home-outline" />
                                    </span>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="accessibility-outline" />
                                    </span>
                                    <a href="#">Pepole</a>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="images-outline" />
                                    </span>
                                    <a href="#">Photos</a>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="newspaper-outline" />
                                    </span>
                                    <a href="#">Beaking News</a>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="person-circle-outline" />
                                    </span>
                                    <a href="profile.php">Profile</a>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="settings-outline" />
                                    </span>
                                    <a href="#">Setting</a>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.invitations}>
                            <div className={styles.heading}>
                                <h3>INVITATIONS</h3>
                                <span>8</span>
                            </div>
                            <div className={styles.fott}>
                                <button type="submit">Accept invitation</button>
                                <span className={styles.close}>
                                    <ion-icon name="add-outline" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.scrollSide}>
                        <div className={styles.storyes}>
                            <div className={styles.story}>
                                <img className={styles.profileImage} src={require("./assets/profile1.png")} />
                                <img width="100%" src={require("./assets/1.jpg")} alt="storyimage" />
                            </div>
                            <div className={styles.story}>
                                <img className={styles.profileImage} src={require("./assets/profile2.png")} />
                                <img width="100%" src={require("./assets/2.jpg")} alt="storyimage" />
                            </div>
                            <div className={styles.story}>
                                <img className={styles.profileImage} src={require("./assets/profile3.png")} />
                                <img width="100%" src={require("./assets/3.jpg")} alt="storyimage" />
                            </div>
                            <div className={styles.story}>
                                <img className={styles.profileImage} src={require("./assets/profile4.png")} />
                                <img width="100%" src={require("./assets/4.jpg")} alt="storyimage" />
                            </div>
                        </div>
                        <form className={styles.addPostInput}>
                            <section>
                                <img className={styles.profileImage} src={require("./assets/Profile.png")} />
                                <input
                                    id="text"
                                    name="text"
                                    placeholder="write somthing here"
                                    type="text"
                                    maxLength={80}
                                    onChange={e => setText(e.target.value)}
                                />
                            </section>
                            <button onClick={createPost} className={styles.addPostBtn} type="submit" name="submit">
                                POST
                            </button>
                            <div>
                            </div>
                        </form>
                        <div className={styles.Posts}>
                            {posts.map(post => {
                                return (
                                    <div className={styles.Post}>
                                        <div className={styles.head}>
                                            <section>
                                                <img src={require("./assets/profile2.png")} alt="storyimage" />
                                                <small>spaceBook team</small>
                                                <span>Now</span>
                                            </section>
                                            <span id="delete">
                                                <ion-icon name="close-outline" />
                                            </span>
                                        </div>
                                        <div className={styles.postContent}>
                                            {post.text}
                                        </div>
                                        <div className={styles.border} />
                                        <div className={styles.foot}>
                                            <ul>
                                                <li>
                                                    <span>
                                                        <ion-icon name="heart" />
                                                        <h4>Like</h4>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <ion-icon name="chatbubble-ellipses" />
                                                        <h4>Comment</h4>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <ion-icon name="share-social" />
                                                        <h4>Share</h4>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <section>Requist</section>
                        <div className={styles.requist}>
                            <div className={styles.name}>
                                <img className={styles.userProfileImage} src={require("./assets/profile2.png")} alt="storyimage" />
                                <p>
                                    <span>Ali</span> wants to be your freind
                                </p>
                            </div>
                            <div className={styles.AcceptDelete}>
                                <button type="submit">Accept</button>
                                <button type="submit">Delete</button>
                            </div>
                        </div>
                        <div className={styles.requist}>
                            <div className={styles.name}>
                                <img className={styles.userProfileImage} src={require("./assets/profile3.png")} alt="storyimage" />
                                <p>
                                    <span>Mohamed</span> wants to be your freind
                                </p>
                            </div>
                            <div className={styles.AcceptDelete}>
                                <button type="submit">Accept</button>
                                <button type="submit">Delete</button>
                            </div>
                        </div>
                        <div className={styles.friends}>
                            <section>Friends</section>
                            <div className={styles.List}>
                                <ul>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile2.png")} alt="storyimage" />
                                            <h4>Ashraf</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile3.png")} alt="storyimage" />
                                            <h4>mena</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile4.png")} alt="storyimage" />
                                            <h4>kareem Adel</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile5.png")} alt="storyimage" />
                                            <h4>Gamal</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile6.png")} alt="storyimage" />
                                            <h4>Zeyad</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <img className={styles.userProfileImage} src={require("./assets/profile8.png")} alt="storyimage" />
                                            <h4>Amr</h4>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
