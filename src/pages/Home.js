import {useState, useEffect} from 'react'
import PlacePage from '../component/PlacePage'
import PlaceEl from '../component/PlaceEl'

export default function Home(props) {
    const [joinBarView, setJoinBarView] = useState(true)
    const [categoryPtr, setCategoryPtr] = useState(0)
    const [categoryView, setCategoryView] = useState(false)
    const [placeView, setPlaceView] = useState(false)

    useEffect(() => {
        const categories = document.querySelectorAll('.categoryEl')
        categories.forEach((category, index) => {
            categoryPtr === index ? category.classList.add('active') :
                category.classList.remove('active')
        })
    }, [categoryPtr])

    const category = [{
        'icon': 'hotel_class', 'text': '인기'
    }, {
        'icon': 'settings_suggest', 'text': '맞춤'
    }, {
        'icon': 'landscape', 'text': '산'
    }, {
        'icon': 'sailing', 'text': '바다'
    }, {
        'icon': 'apartment', 'text': '도시'
    }, {
        'icon': 'toys_fan', 'text': '액티비티'
    }, {
        'icon': 'hotel', 'text': '숙소'
    }, {
        'icon': 'more_horiz', 'text': '기타'
    }
    ]

    const data = []
    for(let i=0;i<299;i++){
        data.push(i)
    }

    useEffect(()=>{
        const categoryBox = document.querySelector('.categoryBox')
        categoryView ? categoryBox.classList.add('active') :
            categoryBox.classList.remove('active')
    },[categoryView])

    return (<div id="homePage" onScroll={(e) => {
        const scr = e.target.scrollTop
        scr > 235 ? setCategoryView(true) : setCategoryView(false)
    }}>
        {
            placeView && <PlacePage setPlaceView={setPlaceView}></PlacePage>
        }
        {joinBarView && <div className="joinBar" onClick={()=>{props.setIsJoin(false)}}>
            <p>아직도 트립윗미에 가입하지 않았다면?</p>
            <span className="material-symbols-outlined">mouse</span>
            <span className="material-symbols-outlined btnClose" onClick={() => {
                setJoinBarView(false)
            }}>close</span>
        </div>}
        <div id="searchContainer">
            <div className="inner">
                <div className="searchBox">
                    <input type="text" id="inputSearch" placeholder="어디로 놀러가실 건가요?" onKeyUp={(e) => {
                        const btnSearch = document.querySelector('#inputSearch+.btnSearch')
                        e.target.value !== "" ? btnSearch.classList.add('active') : btnSearch.classList.remove('active')
                    }}/>
                    <div className="material-symbols-outlined btnSearch">search</div>
                </div>
            </div>
        </div>
        <div id="placeContainer">
            <div className="categoryBox">
                <div className="inner">
                    {category.map((el, index) => {
                        return (<div className="categoryEl" key={index} onClick={() => {
                            setCategoryPtr(index)
                        }}>
                            <div className="categoryIcon material-symbols-outlined">{el.icon}</div>
                            <p className="categoryText">{el.text}</p>
                        </div>)
                    })}
                </div>
            </div>
            <div className="placeBox">
                <div className="inner">
                    {
                        data.map((el,index)=>{
                            return(
                                // <PlaceEl bgimage={index} name={el.name} loc={el.loc} price={el.price} point={el.point}></PlaceEl>
                                <PlaceEl bgImage={index} name={"트립윗미 여행지"} loc={"충북 청주시 서원구"} price={50000} point={4.8} setPlaceView={setPlaceView}></PlaceEl>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>)
}