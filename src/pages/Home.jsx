import { Link } from "react-router-dom";

import Header from '../components/Header'
import Menu from '../components/Menu'

const product = 10;

const Home = () => {
  return (
    <>
      <Header />
      <Menu />


      {/* Movile */}
      <div className="fixed mt-16 ml-16 p-4 w-full">
        <p>HOME</p>
      </div>



      <div>More Products</div>
      <Link to={`/Store/ ${product}`}>Store</Link>
    </>
  );
};

export default Home;
