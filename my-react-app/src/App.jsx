
import ShowMessage from "./ShowMessage";
import Counter from "./Counter";
import UserName from "./UserName";
import LikeButton from "./LikeButton";
import Login from "./Login";
import Email from "./Email";
import Student from "./Student"

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
      <Student name = {name} age = {age}/>
    </div>
  );
};

export default App;

