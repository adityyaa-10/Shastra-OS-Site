import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { WindowMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'
import 'html5-device-mockups/dist/device-mockups.min.css';
import { Macbook} from 'react-device-mockups';
import Header from './Header'
import Footer from './Footer'
import { MdCode, MdOutlineDownload } from "react-icons/md";

export default function Home() {
  const [versionData, setVersionData] = useState();

  return (
    <div className={'container'}>
      <Head>
        <title>ShastraOS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h2>An OS for the Web3</h2>
            <div className={styles.headStyle}>
              <h1>ShastraOS- Dignity</h1>
              {/* <span>v{versionData}</span> */}
            </div>
            <div className={styles.buttonGap}>
              <button className={styles.blueBtn} onClick={() => { window.open('install') }}><MdOutlineDownload className={styles.icon}/>Beta</button>
              <button className={styles.whiteBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>CODE</button>
            </div>
          </section>
          <section className="mockupContainer">
            {/* <WindowMockup
              src="/screen02.png"
              type="mac"
              color="black"
            /> */}
            <Macbook
              width="100%"
              orientation="landscape"
              color="black"
              buttonProps={{
                onClick: () => alert('Home Button Clicked!'),
              }}
            >
              <iframe
                title="showcase"
                src="/screen02.png"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </Macbook>
          </section>
        </div>

        <div className={styles.duoGrid}>
          <section>
            <ul>
              <li>An OS for The Next Gen of the Web</li>
              <li>Privacy Redefined- Comes with Brave Default Browser</li>
              <li>Easy to Use</li>
              <li>Enhanced privacy and protection</li>
              <li>Latest Gnome 42 Desktop Environment</li>
              <li>Easy to install applications through Pamac</li>
            </ul>
          </section>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Shastra Dignity Beta</h1>
            <h2>Beta version of Shastra Dignity is out there! This is for development and testing, first version coming soon.</h2>
            <p className={styles.description}>
            Anyone can help us by contributing to the Shastra Project. The Beta version is released to get you the essence of upcoming ShastraOS versions. You can run it on your PC and test it out.
             You may face some installation issues, but hold on till the official first release of Shastra OS.
             Which is Shastra Dignity coming with the latest gnome 42.
            </p>
          </section>
        </div>


        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Upcoming flavours of Shastra</h1>
            <h2>Gnome &rarr;</h2>
            <h2>Gnome Lite &rarr;</h2>
            <h2>Cinnamon (Not Developed) &rarr;</h2>
          </section>
          <div className={styles.carousel}>
            <div className={styles.card}>
              <WindowMockup src="/gnomescreen01.png" />
            </div>
            <div className={styles.card}>
              <WindowMockup src="/lite.jpeg" />
            </div>
            <div className={styles.card}>
              <WindowMockup src="/cinnamon.webp" />
            </div>
          </div>
        </div>
      </main>

      
      <Footer/>
    </div >
  )
}
