import Header from '../../Components/Header/Header';
import Posts from "../../Components/Posts/Posts"
import Footer from "../Footer/Footer";
import "./Home.css"

const Home = () => {
    return(
        <>
            <Header />

            <div className ="home">
                <Posts />
            </div>
            <Footer />
        </>
    )

}
export default Home