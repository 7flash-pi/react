import VideoCard from "./components/VideoCard";
import "./app.css";

function App() {
  return (
    <div className="app">

      <div className="app_top">
        <img src="https://www.freepnglogos.com/uploads/new-instagram-logo-with-transparent-background-9.png" alt="" className="app_logo" />
      <h1>Reels</h1>
      </div>

      <div className="app_videos">
        <VideoCard 
        channel='7lash'
        avatarSrc='https://pickaface.net/gallery/avatar/20140324_132401_4419_unope.png'
        song='Ae ae ae - sifu '
        url='./ree.mp4'
        likes={987}
        shares={45}
        />
        
       
      </div>
      
    </div>
  );
}

export default App;
