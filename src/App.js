import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeComponent from './Components/Header/themeMode';
import Header from './Components/Header/Header';
import profileImage from '../src/assets/images/profile.jpeg'; // Import your image
function App() {
  return (
    <>
      <div>
        <Header />
        <div
          className='d-flex justify-content-center pe
        sa
        -16'
        >
          <div>
            <div class='p-2'>Hello, My Name Is</div>
            <h1 class='p-2'>Vivek Dwivedi </h1>
            <div class='p-2'>
              <div>I Am a</div> <div>Web Devloper</div>
            </div>
            <div className='p-2'>
              Embark on a digital journey with a seasoned web development
              maestro hailing from the vibrant city of Gorakhpur, India. With a
              knack for crafting visually stunning web designs and a wealth of
              experience, I'm here to turn your online dreams into captivating
              realities. Let's talk about your unique vision today!
            </div>
          </div>
          <div>
            <div class='p-2'>
              <img
                src={profileImage}
                alt='Profile'
                className='rounded-circle'
                width='700'
                height='700'
              />
              <div className=''>One Year of Experience</div>
            </div>
            <div class='p-2'>Flex item 2</div>
            <div class='p-2'>Flex item 3</div>
          </div>
        </div>
      </div>
      {/* <div>Portfollio Website</div> */}
    </>
  );
}

export default App;
