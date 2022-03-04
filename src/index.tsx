import  ReactDOM  from "react-dom"
// import GuestList from "./state/GuestList"
import UserSerch from "./state/UserSearch"

const App = () => {
    return(
        <div>
            {/* <GuestList /> */}
            <UserSerch />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)