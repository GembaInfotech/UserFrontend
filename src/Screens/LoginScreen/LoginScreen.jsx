import LoginForm from '../../Components/LoginComponents/LoginForm';
import { useState, useEffect, img1, img2, img3, img4 } from './Index'

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row max-sm:flex-col justify-center items-center bg-blue-600">
      <div className="relative w-[50%]  max-sm:w-full overflow-hidden">
        <div
          className="flex transition-transform duration-1000  ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: currentIndex === 0 ? 'none' : 'transform 1s ease-in-out'
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} className="w-full sm:min-h-screen h-[300px] " alt="" />
          ))}
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
