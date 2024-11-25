import "./App.css";
import Welcome from "./components/Welcome";
import CurrentDate from "./components/CurrentDate";
import HobbyList from "./components/HobbyList";
import Button from "./components/Button";
import ProfileCard from "./components/ProfileCard";
import ItemList from "./components/ItemList";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import ColorDiv from "./components/ColorDiv";
import FormLog from "./components/FormLog";
import DropDown from "./components/DropDown";
import LoginForm from "./components/LoginForm";
import CtrldForm from "./components/CtrldForm";
import ValidForm from "./components/ValidForm";
import MultiStepForm from "./components/MultiStepForm";
import CheckForm from "./components/CheckForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Blog from "./pages/Blog";
import ParentMemo from "./components/ParentMemo";
import CounterList from "./components/CounterList";
import Heavy from "./components/Heavy";
import Todo from "./components/Todo";
import LiveTime from "./components/LiveTime";
import LecturerForm from "./components/LecturerForm";
import StudentForm from "./components/StudentForm";
import DriverForm from "./components/DriverForm";
import BookForm from "./components/BookForm";
import ModuleForm from "./components/ModuleForm";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <h1>1. Components</h1>
      <h4>1.</h4>
      <Welcome />
      <CurrentDate />
      <h4>2.</h4>
      <HobbyList />
      <h4>3.</h4>
      <Button text={"Hello guys"} color={"red"} />
      <h4>4.</h4>
      <ProfileCard name={"Alex"} age={"20"} email={"alex@gmail.com"} />
      <h4>5.</h4>
      <ItemList />
      <h1>2. Events</h1>
      <h4>6.</h4>
      <Toggle />
      <h4>7.</h4>
      <Counter />
      <h4>8.</h4>
      <ColorDiv />
      <h4>9.</h4>
      <FormLog />
      <h4>10.</h4>
      <DropDown />
      <h1>3. Forms Handling</h1>
      <h4>11. </h4>
      <LoginForm />
      <h4>12. </h4>
      <CtrldForm />
      <h4>13. </h4>
      <ValidForm />
      <h4>14. </h4>
      <MultiStepForm />
      <h4>15. </h4>
      <CheckForm />
      <h1>4. Routing</h1>
      <h4>16, 17, 18, 19, 20 </h4>
      <Router>
        <nav className="comp">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products/123">Sample Product</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="comp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:productID" element={<ProductDetails />} />
            <Route path="/blog" element={<Blog />}>
              {/* Nested route for individual posts */}
              <Route path=":postID" element={<Post />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      {/*  <h4>17. </h4>
      <h4>
        <span style={{ color: "red", fontSize: "25px" }}>*</span>18.{" "}
      </h4>
      <h4>19. </h4>
      <h4>20. </h4> */}
      <h1>5. React.memo</h1>
      <h4>21. </h4>
      <ParentMemo />
      <h4>22. </h4>
      <CounterList />
      <h4>23. </h4>
      <Heavy />
      <h4>24. </h4>
      <Todo />
      <h4>25. </h4>
      <LiveTime />
      <h1>6. Registration Forms</h1>
      <h4>26. </h4>
      <LecturerForm />
      <h4>27. </h4>
      <StudentForm />
      <h4>28. </h4>
      <DriverForm />
      <h4>29. </h4>
      <BookForm />
      <h4>30. </h4>
      <ModuleForm />
    </div>
  );
}

export default App;
