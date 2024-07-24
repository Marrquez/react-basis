import { useParams } from "react-router-dom";
import Colors from "./Colors";
import TicTacToe from "./TicTacToe";
import Login from "../dashboard/Login";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "colors" ? (
        <Colors />
      ) : name === "tictactoe" ? (
        <TicTacToe />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Profile;