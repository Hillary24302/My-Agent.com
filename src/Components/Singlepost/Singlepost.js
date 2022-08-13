import "./Singlepost.css"
import UserImg from '../../Images/home-sm.jpg';


export default function SinglePost() {
    return (
        <div className ="singlePost">
            <div className = "singlePostWrapper">
            <img 
                        className="singlePostImg"
                        src = {UserImg} 
                        alt ="jack"
            />
            <h1 className ="singlePostTitle">University of port harcourt merit list is out
                <div className ="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className ="singlePostInfor">
                <span className ="singlePostAuthor">Author: <b>Hillary</b></span>
                <span className ="singlePostDate"> 1 hour ago</span>
            </div>
            <p className = "singlePostDesc">THE MINUTE OF NUESS MEETING - 27TH Oct 2021
                    The meeting started by 5:15pm with praise and worship led by Comr. Nnagi Chukwuebuka And followed by opening prayer  led by Agu Daniel  (Eleco chairman).
                        After the opening prayer, the eleco chairman declare the election open as the aspirants went ahead to give their respective manifestos.
                        The elder cancel chairman in the person of Aguiyi and also Ugwu-Eze was present to witness and  make sure that the election was free and fair, he went forth to say some good things about Nuess previous elections.
                        At about 6:00pm, the eleco chairman declare the election closed and successful  as every members of Nuess present has casted their votes. He also Announced the results with the help of other officials and also resolved…THE MINUTE OF NUESS MEETING - 27TH Oct 2021
                    The meeting started by 5:15pm with praise and worship led by Comr. Nnagi Chukwuebuka And followed by opening prayer  led by Agu Daniel  (Eleco chairman).
                        After the opening prayer, the eleco chairman declare the election open as the aspirants went ahead to give their respective manifestos.
                        The elder cancel chairman in the person of Aguiyi and also Ugwu-Eze was present to witness and  make sure that the election was free and fair, he went forth to say some good things about Nuess previous elections.
                        At about 6:00pm, the eleco chairman declare the election closed and successful  as every members of Nuess present has casted their votes. He also Announced the results with the help of other officials and also resolved…THE MINUTE OF NUESS MEETING - 27TH Oct 2021
            </p>
            </div>
        </div>
    )
}
