import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Features = () => {

    const [featured, setFeatured] = useState([]);

    const [noDataFound, setNoDataFound] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [totalCost, setTotalCost] = useState(0);

    useEffect(()=> {

        const featuredItem = JSON.parse(localStorage.getItem('featured'));
        
        if(featuredItem){
            setFeatured(featuredItem);

            const total = featuredItem.reduce((preValue, currentItem)=> preValue + currentItem.price, 0);

            setTotalCost(total)
        }
        else{
            // console.log('No Data Found')
            setNoDataFound('No Data Found')
        }

    }, [])

    // console.log(featured);

    const handleRemoveFeatures = () =>{
        localStorage.clear();
        setFeatured([]);
        setNoDataFound('No Data Found')
    }

    return (
        <div>
            {
                noDataFound? <p className="flex justify-center items-center h-[70vh] font-semibold text-2xl">{noDataFound}</p> 
                : 
                <div>

                    {featured.length > 0 && (<div>

                        <button onClick={handleRemoveFeatures} className="bg-red-400 p-2 rounded-md mt-10 block mx-auto text-white">Delete All Features</button>
                        <h2 className="text-center mt-5 text-xl font-bold">Total Cost: {totalCost}</h2>
                    </div>)}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-2 my-10">
                        {
                            isShow ? featured?.map(phoneCard => <FeaturedCard key={phoneCard.id} phoneCard={phoneCard}></FeaturedCard>) 
                            
                            :

                            featured?.slice(0, 4).map(phoneCard => <FeaturedCard key={phoneCard.id} phoneCard={phoneCard}></FeaturedCard>)
                        }
                    </div>

                    <button onClick={() => setIsShow(!isShow)} className="bg-green-500 p-2 rounded-md mt-10 block mx-auto text-white my-10">
                        {isShow ? 'See Less' : 'See More'}
                    </button>
                </div>
            }
        </div>
    );
};

export default Features;