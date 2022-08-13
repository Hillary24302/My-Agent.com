import Sidebar from "../../Pages/Sidebar/Sidebar"
import Singlepost from "../../Components/Singlepost/Singlepost"
import "./Single.css"

function Single() {
    return (
        <div className ="single">
            <Singlepost />
            <Sidebar />
        </div>
    )
}

export default Single
