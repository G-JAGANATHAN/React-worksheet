
import ShowMessage from "./ShowMessage";
import Counter from "./Counter";
import UserName from "./UserName";
import LikeButton from "./LikeButton";
import Login from "./Login";
import Email from "./Email";
import StudentData from "./StudentData";
import Example from "./component/example";


const App = () => {
  const name ="jagan";
  const age ="21";
  return (
    <div>
      < ShowMessage/>
      <Counter/>
      <UserName/>
      <LikeButton/>
      <Login/>
      <Email/>
      <StudentData name = {name} age = {age}/>
      <Example/>
    </div>
  );
};

export default App;

