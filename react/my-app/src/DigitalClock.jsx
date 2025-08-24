import react, {useState,useEffect} from 'react';
function DigitalClock(){
    const [time,settime]=useState(new Date());
    useEffect(() => {
        const iid = setInterval(() => {
            settime(new Date());
        },1000);
        return () =>{
clearInterval(iid);
        }
    },[]);

    function formattime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridian=(hours>=12)?"PM":"AM";
        hours=hours%12 || 12;
        return `${change(hours)}:${change(minutes)}:${change(seconds)} ${change(meridian)}`;
    }
    function change(num){
return (num <10 ? "0" : "")+num;
    }
return(
    <>
        <div class="bg-black bg-cover bg-fixed p-10 max-h-100">
        <h1 class="text-5xl font-serif text-white flex justify-center p-5 mt-5">Digital Clock</h1>
<div class="text-white text-6xl p-5 flex justify-center mt-20 tracking-widest" >{formattime()}</div>
    </div>
    </>
)
}
export default DigitalClock