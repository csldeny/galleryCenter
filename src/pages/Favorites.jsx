import Header from "../components/Header";
import Menu from "../components/Menu";

const Favorites = () => {
  return (
    <>
      <Header />
      <Menu />

      <div className="fixed mt-16 ml-16 p-4 w-full">
        <p>FAVORITES</p>
      </div>
    </>
  );
};

export default Favorites;
