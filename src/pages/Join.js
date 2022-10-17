import {useState, useEffect} from 'react'
import logo from '../images/logo.png'
import alertStart from '../images/joinStart.png'
import alertFin from '../images/joinFin.png'

export default function Join(props) {
    const [joinMenuPtr, setJoinMenuPtr] = useState(0)
    const [questionPtr, setquestionPtr] = useState(0)
    const [canNext, setCanNext] = useState(true)

    useEffect(() => {
        const joinMenus = document.querySelectorAll('.joinMenu>li')
        joinMenus.forEach((el, index) => {
            joinMenuPtr >= index && el.classList.add('active')
            joinMenuPtr === index ? el.classList.add('focus') : el.classList.remove('focus')
        })
    }, [joinMenuPtr])

    return (<div id="joinPage">
        <span className="material-symbols-outlined btnClose" onClick={() => {
            props.setIsJoin(false)
        }}>close</span>
        <div className="joinForm">
            <div className="btnClose material-symbols-outlined" onClick={()=>{
                props.setIsJoin(true)
            }}>close</div>
            <div className="inner">
                <ul className="joinMenu">
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">chat</div>
                        <p className="joinMenuText">안내</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">perm_contact_calendar</div>
                        <p className="joinMenuText">개인정보 입력</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">android</div>
                        <p className="joinMenuText">성향 분석</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">new_releases</div>
                        <p className="joinMenuText">가입 완료</p>
                    </li>
                </ul>

                <div className="joinBox">
                    <div className="inner">
                        {joinMenuPtr === 0 ? <div className="contentBox">
                            <img className="logo" src={logo} alt="logo"/>
                            <img className="alertStart alert" src={alertStart} alt="logo"/>
                            <p className="introText">관광 콘텐츠란 단순 관광지를 포함하여 액티비티나 체험, 숙박 등 편의시설을 포함하는 개념입니다.
                                본 플랫폼에 가입하신다면 국내 모든 관광 콘텐츠의 정보를 열람할 수 있으며, 맞춤 추천 및 예약 등 서비스를 이용하실 수 있습니다.</p>
                            <button className="btnAccept" onClick={(e) => {
                                e.target.classList.add('active')
                                setTimeout(() => {
                                    setJoinMenuPtr(1)
                                }, 1000)
                            }}>이해하셨다면 클릭해주세요
                            </button>
                        </div> : joinMenuPtr === 1 ? <div className="contentBox">
                            <div className="inputContainer">
                                <div className="inputEl">
                                    <label htmlFor="inputName" id="labelName">이름을 입력하세요</label>
                                    <input type="text" id="inputName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelName').classList.remove('focused')
                                    }}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputMail" id="labelMail">이메일 주소를 입력하세요</label>
                                    <input type="text" id="inputMail" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelMail').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelMail').classList.remove('focused')
                                    }}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputNickName" id="labelNickName">사용하실 닉네임을 입력하세요</label>
                                    <input type="text" id="inputNickName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelNickName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelNickName').classList.remove('focused')
                                    }}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPw" id="labelPw">사용하실 비밀번호를 입력하세요</label>
                                    <input type="password" id="inputPw" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelPw').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelPw').classList.remove('focused')
                                    }}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPwConfirm" id="labelPwConfirm">비밀번호를 다시 한 번 입력해주세요</label>
                                    <input type="password" id="inputPwConfirm" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelPwConfirm').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelPwConfirm').classList.remove('focused')
                                    }} onKeyUp={(e) => {
                                        (e.target.value !== "" && e.target.value === document.querySelector('#inputPw').value) ?
                                            setTimeout(() => {
                                                canNext && setJoinMenuPtr(2)
                                            }, 1000) :
                                            setTimeout(() => {
                                                document.querySelector('.pwConMsg').classList.add('active')
                                            }, 1000)
                                    }}/>
                                    <p className="pwConMsg">비밀번호를 확인해주세요!</p>
                                </div>
                            </div>
                        </div> : joinMenuPtr === 2 ? <div className="contentBox">
                            <ul className="tendencyBox">
                                <li className="tendencyEl focus">
                                    <p className="question">질문</p>
                                    <p className="response">응답</p>
                                </li>
                                <li className="tendencyEl">질문2</li>
                                <li className="tendencyEl">질문3</li>
                                <li className="tendencyEl">질문4</li>
                                <li className="tendencyEl">질문5</li>
                                <li className="tendencyEl">질문6</li>
                                <li className="tendencyEl">질문7</li>
                                <li className="tendencyEl">질문8</li>
                            </ul>
                        </div> : <div className="contentBox">
                            <img className="logo" src={logo} alt="logo"/>
                            <img className="alertFin alert" src={alertFin} alt="logo"/>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}