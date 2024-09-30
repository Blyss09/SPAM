import Header from "../../components/header/header";
import '../home/home.css'
import 'boxicons'
const Home = () => {
  return (
    <>
        <Header />
        <main>
            <div className="first_container">
                <h1 className="main_title">Bienvenu sur le site non-officiel du jeu SPAM</h1>
                <h2 className="second_title">Un jeu développé par le streamer Crocodyle</h2>
                <img className="croco_img" src="../../src/assets/img/crocodyle.jpg" alt="" />
            </div>
            <div className="link">
                <a href="https://www.youtube.com/@CrocodyleMULTI" target="_blank"><img src="../../src/assets/img/logoYoutube.png" alt="logoYoutube" /></a>
                <a href="https://www.twitch.tv/crocodyletv" target="_blank"><img src="../../src/assets/img/logoTwitch.png" alt="logoTwitch" /></a>
                <a href="https://discord.com/invite/b2ypeM3d" target="_blank"><img src="../../src/assets/img/logoDiscord.png" alt="logoDiscord" /></a>
                <a href="https://store.steampowered.com/app/2902720/SPAM/" target="_blank"><img src="../../src/assets/img/logoSteam.png" alt="logoSteam" /></a>
            </div>
        </main>
    </>
  );
}

export default Home;