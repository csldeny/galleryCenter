import { useParams, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

const UserPage = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Menu />

      <div className="fixed mt-16 ml-16 p-4 w-full">
        User {id}
        <Link to="saywelcome">Say Welcome</Link>
        <Routes>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
        </Routes>
      </div>
    </>
  );
};

export default UserPage;
