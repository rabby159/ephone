/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const PhonesCard = () => {

    const [phoneCard, setPhoneCard] = useState({});

    const phones = useLoaderData();
    // console.log(phones)

    const {id} = useParams();
    // console.log(id)

    useEffect(() => {
        const findPhoneCard = phones?.find((phonesCard) => phonesCard.id === id);
        // console.log(findPhoneCard)
        setPhoneCard(findPhoneCard);

    }, [id, phones])
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mt-10">Phone Details</h2>
           <PhoneCard phoneCard={phoneCard}></PhoneCard>
        </div>
    );
};

export default PhonesCard;