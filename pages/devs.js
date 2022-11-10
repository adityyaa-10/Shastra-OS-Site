import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdCode, MdDownload } from "react-icons/md";
import { FaDiscord, FaReddit, FaTwitter, FaUser, FaUserCircle } from "react-icons/fa";
import details from "../components/teamDetails";

const github = "https://github.com/";
const png = ".png";
const twitter = "https://twitter.com/"

export default function Devs() {
    return (
        <div className={'container'}>
            <Head>
                <title>Team Shastra</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="Shastra, ShastraOS, Shastra linux, shastraos, Shastra OS, ShastraOS websites, Linux, Linux OS, OS, Gnome, Web3 OS, Web3 based OS, Web3 based Operating System, Vivek Pal, Arch Linux " />
                <meta name="theme-color" content="#317EFB" />
                <link rel="icon" href="/favicon.ico" />
                <link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.duoGrid}>
                    <section>
                        <h1 className={styles.title}>Shastra OS</h1>
                        <h2>Join Our Community</h2>
                            <div className="alignItems">
                                <button className={styles.blueBtn} onClick={() => { window.open('https://guild.xyz/shastraos', "_blank") }}><FaUser className={styles.icon}/>Join</button>
                                <button className={styles.blueBtn} onClick={() => { window.open('https://discord.com/invite/5Z4UMvhppm', "_blank") }}><FaDiscord className={styles.icon}/>Discord</button>
                                <button className={styles.blueBtn} onClick={() => { window.open('https://twitter.com/ShastraOS', "_blank") }}><FaTwitter className={styles.icon}/>Twitter</button>
                                <button className={styles.blueBtn} onClick={() => { window.open('https://www.reddit.com/r/shastraos', "_blank") }}><FaReddit className={styles.icon}/>Reddit</button>
                            </div>   
                    </section>
                    <div className={styles.aboutScroll}>
                        <div className={styles.teams}>
                        <h2>Developers & Contributors</h2>
                            {details.map((item, index) =>
                                <div key={index}>
                                    {item.username &&
                                        <div key={item.username}>
                                            <img title={item.username} src={github + item.username + png} className={styles.profileImg} />
                                            <div className={styles.buttonGap}>
                                                <button className={styles.whiteBtn} onClick={() => { window.open(github + item.username, "_blank") }}><MdCode className={styles.icon} />GitHub</button>
                                                <button className={styles.whiteBtn} onClick={() => { window.open(twitter + item.twitterUsername, "_blank") }}><FaTwitter className={styles.icon} />Twitter</button>
                                                <button className={styles.whiteBtn} onClick={() => { window.open(item.portfolio, "_blank") }}><FaUserCircle className={styles.icon} />Portfolio</button>
                                            </div>
                                            <hr />
                                        </div>
                                    }
                                </div>
                            )}
                        </div>
                        <p>Other Members <a href="https://github.com/orgs/Shastra-OS/people">GitHub</a></p>
                        <p>Thanks for Visiting us</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}