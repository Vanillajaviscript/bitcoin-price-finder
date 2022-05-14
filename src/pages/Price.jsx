import {useState, useEffect} from "react";
import React from "react";
import {useParams} from "react-router-dom";

const Price = (props) => {
    const api_key = "65776666-FC3C-4415-8B0D-E0277130A0A6";
    const params = useParams();
    const symbol = params.symbol;
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${api_key}`

    const [coin, setCoin] = useState(null);

    const getCoin = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setCoin(data);
    }

    useEffect(() => {getCoin()},[]);

    const loaded = () => {
        return(
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return coin ? loaded() : loading();
};

export default Price;