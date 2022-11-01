export default function PlacePage(props){
    return(
        <div id="placePage" onScroll={(e)=>{
            const btnReserve = document.querySelector('.btnReserve')
            e.target.scrollTop > 270 ? btnReserve.classList.add('active') :
                btnReserve.classList.remove('active')
        }}>
            <div className="material-symbols-outlined btnClose" onClick={() => {
                props.setPlaceView(false)
            }}>close</div>

            <div className="inner">
                <div className="placeInfo">
                    <p className="placeName">트립윗미 여행지</p>
                    <p className="placeLocation">전남 여수시</p>
                    <p className="placePoint">★ 4.9</p>
                    <p className="placeBtnBox">
                        <button className="btnReserve btn">빠른예약</button>
                        <button className="btnCart btn">찜</button>
                    </p>
                </div>
            </div>
            <div className="placeAbout">
                <div className="inner">
                    <div className="placeImage"></div>
                    <div className="infoBox">
                        <p className="title">상세설명</p>
                        <p className="script">설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명ㅍ설명설명설명설명설명설명설명설명설명설명설명설명설명설명</p>
                    </div>
                </div>
            </div>
        </div>
    )
}