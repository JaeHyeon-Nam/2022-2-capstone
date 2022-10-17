import {useState} from "react";
import EditPage from "../component/EditPage";
import PostPage from "../component/PostPage";

export default function Community() {
    const [editView,setEditView] = useState(false)
    const [postView,setPostView] = useState(false)
    return (
        <div id="communityPage">
            {
                editView && <EditPage setEditView={setEditView}></EditPage>
            }
            {
                postView && <PostPage setPostView={setPostView}></PostPage>
            }
            <div className="communityHeader">
                <div className="userMenu"></div>
                <div className="communityMenu">
                    <div className="inner">
                        <ul className="communityNav">
                            <li className="active">홈</li>
                            <li>메뉴1</li>
                            <li>메뉴2</li>
                            <li>메뉴3</li>
                        </ul>
                        <div className="communityBtnBox">
                            <button className="btnEdit btn" onClick={()=>{
                                setEditView(true)
                            }}>글쓰기</button>
                            <button className="btn">버튼</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="communityIntro">
                <div className="inner">
                    <div className="hotPosts">
                        <div className="hotPostEl">
                            <div className="hotPostInfo">
                                <p>핫토픽의 제목입니다</p>
                            </div>
                        </div>
                        <div className="hotPostEl">
                            <div className="hotPostInfo">
                                <p>핫토픽의 제목입니다</p>
                            </div>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="profileImage"></div>
                        <div className="profileMenu">
                            <button className="btnMy">내 게시글 보기</button>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="communityMain">
                <div className="inner">
                    <li className="postEl" onClick={()=>{
                        setPostView(true)
                    }}>
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                    <li className="postEl">
                        <div className="postInfo">
                            <div className="infoTop">
                                <div className="profileImage"></div>
                                <div className="profileInfo">
                                    <p className="editName">작성자</p>
                                    <p className="editDate">작성날짜</p>
                                </div>
                            </div>
                            <div className="infoBody">
                                <p className="editTitle">글 제목</p>
                                <p className="editSub">글 내용</p>
                            </div>
                            <div className="infoFooter">
                                <p className="editSub">조회 0</p>
                                <p className="editSub">댓글 0</p>
                            </div>
                        </div>
                        <div className="postImage"></div>
                    </li>
                </div>
            </ul>
        </div>
    )
}