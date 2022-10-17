export default function PlaceEl(props){
    return(
        <div className="placeEl" style={{
            'animationDelay' : `${0.1*props.bgImage}s`
        }}
             onClick={()=>{
                 props.setPlaceView(true)
             }}>
            <div className="btnCart material-symbols-outlined" onClick={(e)=>{
                e.stopPropagation()
                e.target.classList.toggle('active')
            }}>heart_plus</div>
            <div className="placeImageBox">
                <div className="placeImage"></div>
            </div>
            <div className="placeInfo">
                <p className="placeName">{props.name}</p>
                <p className="placeLocation">{props.loc}</p>
                <p className="placePrice">￦{props.price}</p>
                <p className="placePoint">★{props.point}</p>
            </div>
        </div>
    )
}