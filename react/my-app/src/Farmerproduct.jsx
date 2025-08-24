import { useEffect } from "react";
function Farmerproduct() {
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });

    }, []);
    return (
        <>
            
                <div class=" absolute top-0 bottom-0 z-50 bg-green-700 pb-10 w-full h-full">
                    <div class="bg-yellow-400 py-5 font-bold text-center text-5xl mt-10">our products</div>
                    <ul class="text-center text-4xl mt-10 font-bold">
                        <li class="mt-10">Fruits</li>
                    <li class="mt-5">Vegetables</li>
                    <li class="mt-5">Fertilizers</li>
                    </ul>
                <div class="grid grid-cols-3 gap-3 mt-10 p-5">
                    <img class="rounded-2xl p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPF9N2qPTKU2yxOgYe8elHgPGtQX-LsixBRCm9-HJlTDMzPURPq0m4un0H1FKKoLQsNw&usqp=CAU"></img>
                    <img class="rounded-2xl p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPF9N2qPTKU2yxOgYe8elHgPGtQX-LsixBRCm9-HJlTDMzPURPq0m4un0H1FKKoLQsNw&usqp=CAU"></img>
                    <img class="rounded-2xl p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPF9N2qPTKU2yxOgYe8elHgPGtQX-LsixBRCm9-HJlTDMzPURPq0m4un0H1FKKoLQsNw&usqp=CAU"></img>
                    <img class="rounded-2xl p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPF9N2qPTKU2yxOgYe8elHgPGtQX-LsixBRCm9-HJlTDMzPURPq0m4un0H1FKKoLQsNw&usqp=CAU"></img>
                    <img class="rounded-2xl p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPF9N2qPTKU2yxOgYe8elHgPGtQX-LsixBRCm9-HJlTDMzPURPq0m4un0H1FKKoLQsNw&usqp=CAU"></img>



                    </div>
                </div>
            </>
            )
            
}
export default Farmerproduct