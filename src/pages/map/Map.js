import React, { useEffect } from "react";
import Info from "./Info";
import './styles.css'
import Search from "./search/Search";


const{kakao} = window;



const spaces = [
    {
        title: '카카오', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '생태연못', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        title: '텃밭', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        title: '근린공원',
        location: '제주',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    },
    {
        title: '수암골',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.647334, 127.4943559)
    },
    {
        title: '국립현대미술관 청주',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.6554173, 127.49013532)
    },
    {
        title: '청주동물원',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.6520697, 127.5229603)
    },
    {
        title: '대전스포츠몬스터',
        location: '대전',
        latlng: new kakao.maps.LatLng(36.3753050, 127.38141304)
    },
    {
        title: '주렁주렁 영등포 타임스퀘어점',
        location: '서울',
        latlng: new kakao.maps.LatLng(37.5171413610, 126.90317315)
    },
    {
        title: '주렁주렁 하남점',
        location: '하남',
        latlng: new kakao.maps.LatLng(37.54366588, 127.223674422)
    },
    {
        title: '스포츠몬스터 하남점',
        location: '하남',
        latlng: new kakao.maps.LatLng(37.545503520, 127.223883597)
    }
];



function Map(){
    
    const [ps,setPs]=React.useState('');
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center : new kakao.maps.LatLng(33.450701,126.570667),
            level:6
        };
        const map = new kakao.maps.Map(container, options);

        

        const iwContent ='<div style = "padding:5px;">Hello World!</div>',
                iwRemoveable = true;

        const infowindow = new kakao.maps.InfoWindow({
            content:iwContent,
            removable : iwRemoveable
        });
        
       
        for(var i = 0 ; i < spaces.length; i++){

            const marker= new kakao.maps.Marker({
                map:map,
                position:spaces[i].latlng,
                title:spaces[i].title,
            });
          
            kakao.maps.event.addListener(marker,'click',function(){
                infowindow.open(map,marker);
                console.log(marker.getPosition());
            });

            
        }
        
        const pstion = new kakao.maps.services.Places();

        pstion.keywordSearch(ps,placesSearchCB);

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                // console.log(ps);

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds();
        
                for (var i=0; i<data.length; i++) {
                    // displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }
       

        // const center = map.getCenter();
        // kakao.maps.event.addListener(marker,'click',fucntion(){
        //     marker.getPosition();
            

        // })

        // const markerPosition = new kakao.maps.LatLng(33.450701,126.570667);

        // const marker = new kakao.maps.Marker({
        //     position:markerPosition
        // });
        // marker.setMap(map);

        // markerPosition = new kakao.maps.LatLng(33.450705,126.570667);

        // marker = new kakao.maps.Marker({
        //     position:markerPosition
        // });

        // marker.setMap(map);

        



    },[ps])
    



    return(
        
      <div style={{width:'1500px',justifyContent:'center'}}>
        <Search setPs={setPs}/>
        <div style={{width:'90%',margin:'10px auto',border:'1px solid black'}}>

                <div id="map" style={{width:'45%',height:'600px',border:'1px solid black',marginLeft:'40px',marginTop:'30px',
                borderRadius:'5%',float:'left'}}>
                </div>        
                
                <div 
                    style={{
                        marginTop:'30px',
                        width:'40%',
                        // border:'1px solid black',
                        // backgroundColor:'black',
                        // padding:'1% 1% 1% 1%',
                        borderRadius:'5%',
                        // marginLeft:'25%',
                        // marginRight:'25%',
                        float:'right'
                        
                    }}>
                    <Info spaces={spaces} ps={ps}/>
                </div>
        </div>
    </div>        
        
    )
}

export default Map;
