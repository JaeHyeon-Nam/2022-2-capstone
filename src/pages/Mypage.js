export default function Mypage(){
    return(
        <div id="mypage">
            <div className="profile">
                <div className="inner">
                    <div className="profileCard">
                        <div className="profileImage"></div>
                        <p className="profileName">사용자 이름</p>
                        <button className="btnChangeImage">프로필 사진 변경</button>
                    </div>
                    <ul className="profileMenu">
                        <li>최근 알림이 없습니다</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}