import Header from '../components/Header'
import Menu from '../components/Menu'

const Cart = () => {
  return (
    <>
      <Header />
      <Menu />

      <div className='fixed mt-16 ml-16 p-4 w-full'>
        <p>CART</p>
      </div>
    </>
  );
};

export default Cart;