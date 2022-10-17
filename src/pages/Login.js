export default function Login(props) {
    return (<div id="loginPage">
        <div className="loginForm">
            <div className="loginHeader">
                <p>로그인</p>
                <div className="btnClose material-symbols-outlined" onClick={() => {
                    props.setIsLogin(true)
                }}>close
                </div>
            </div>
            <div className="loginBody">
                <div className="inner">
                    <div className="inputEl">
                        <div className="material-symbols-outlined icon">mail</div>
                        <input type="text" id="inputID" placeholder="아이디를 입력하세요" onFocus={(e) => {
                            document.querySelector('.inputEl:first-child>.icon').classList.add('active')
                            document.querySelector('.inputEl:first-child').classList.add('active')
                        }} onBlur={(e) => {
                            document.querySelector('.inputEl:first-child>.icon').classList.remove('active')
                            document.querySelector('.inputEl:first-child').classList.remove('active')
                        }}
                        />
                    </div>
                    <div className="inputEl">
                        <div className="material-symbols-outlined icon">lock</div>
                        <input type="password" id="inputPW" placeholder="비밀번호를 입력하세요" onFocus={(e) => {
                            document.querySelector('.inputEl:last-child>.icon').classList.add('active')
                            document.querySelector('.inputEl:last-child').classList.add('active')
                        }} onBlur={(e) => {
                            document.querySelector('.inputEl:last-child>.icon').classList.remove('active')
                            document.querySelector('.inputEl:last-child').classList.remove('active')
                        }}/>
                    </div>
                </div>
            </div>
            <div className="loginFooter">
                <button className="btnLogin btn">로그인</button>
                <button className="btnJoin btn">회원가입</button>
            </div>
        </div>
    </div>)
}