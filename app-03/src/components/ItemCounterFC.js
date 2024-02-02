import { useState,useEffect } from 'react';

const ItemCounterFC = () => {

    let [itemCount,setItemCount] = useState(0);
    let [packetCount,setPacketCount] = useState(0);

    useEffect(() => { setTimeout( () => setItemCount(1) , 1000); } ,[]);

    useEffect (() => {
        if(itemCount<0 && packetCount>0){
            setItemCount(9);
            setPacketCount(packetCount-1);
        }else if(itemCount<0 && packetCount===0){
            setItemCount(0);
        }else if(itemCount===10){
            setItemCount(0);
            setPacketCount(packetCount+1);
        }
    },[itemCount]);

    const stepUp = event => setItemCount(itemCount+1);
    const stepDown = event => setItemCount(itemCount-1);

    return (
        <section className="col p-4 border border-primary m-4">
            <h3>
                {packetCount} <sub>packets</sub> , {itemCount} <sub>items</sub> 
            </h3>
            <div>
                <button className='btn btn-sm btn-danger me-2' onClick={stepDown}>--LESSER</button>
                <button className='btn btn-sm btn-primary' onClick={stepUp}>++MORE</button>
            </div>
        </section>
    );
};

export default ItemCounterFC;