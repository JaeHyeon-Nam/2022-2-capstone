import './styles/main.scss'
import {useState} from 'react'
import SideMenu from './component/SideMenu'
import Home from './pages/Home'
import Community from './pages/Community'
import Login from './pages/Login'
import Join from './pages/Join'
import Mypage from './pages/Mypage'
import TicketPage from './pages/TicketPage'
import QRCode from "react-qr-code";

function App() {
    const [menuPtr, setMenuPtr] = useState(0)
    const [isLogin,setIsLogin] = useState(false)
    const [isJoin,setIsJoin] = useState(true)

    return (
        <div className="App">
            {
                !isLogin && <Login setIsLogin={setIsLogin}></Login>
            }
            {
                !isJoin && <Join setIsJoin={setIsJoin}></Join>
            }
            <SideMenu menuPtr={menuPtr} setMenuPtr={setMenuPtr} isLogin={isLogin} setIsLogin={setIsLogin}></SideMenu>
            {menuPtr === 0 && <Home setIsJoin={setIsJoin}></Home>}
            {menuPtr === 1 && <Mypage></Mypage>}
            {menuPtr === 3 && <TicketPage></TicketPage>}
            {menuPtr === 4 && <Community></Community>}
        </div>
    );
}

export default App;
