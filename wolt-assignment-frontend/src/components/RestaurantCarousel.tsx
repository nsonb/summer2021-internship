import Restaurant from './Restaurant';
import { restaurantData } from '../types/type';
import { useState, useEffect } from 'react'

const RestaurantCarousel = (props: {restaurantList : restaurantData[]}) => {
    const restaurantList = props.restaurantList;
    const [ displayed, setDisplay] = useState<restaurantData[]>(restaurantList.length < 5 ? restaurantList : restaurantList.slice(0,5))
    const [ currentIndex, setCurrentIndex] = useState<number>(0);
    const style: React.CSSProperties = {
        display: "flex",
        flexDirection: 'row',
    }

    const carousel: React.CSSProperties = {
        display: "flex",
        flexDirection: 'row',
        width: '900px',
    }

    const getNext = (next: boolean) => {
        let index = next === true? currentIndex+1 : currentIndex-1;
        if(index < 0) {
            setCurrentIndex(restaurantList.length - 1)
        } else if ( index === restaurantList.length) {
            setCurrentIndex(0)
        } else {  
            setCurrentIndex(index)
        }
    }

    useEffect(() => {
        let tempList: restaurantData[] = [];
        for(let i = 0; i <  5 && i < restaurantList.length; i++) {
            if(i + currentIndex >= restaurantList.length) {
                tempList.push(restaurantList[i + currentIndex - restaurantList.length]);
            } else if (i + currentIndex < 0) {
                tempList.push(restaurantList[restaurantList.length - 1]);
            } else {
                tempList.push(restaurantList[currentIndex + i]);
            }
        }
        setDisplay(tempList)
    }, [currentIndex])
    

    const renderRestaurant = displayed.map((restaurant) => {
        return <Restaurant restaurant={restaurant} key={restaurant.blurhash}></Restaurant>
    })

    return (
        <div style={style}>
            <button className='hover' onClick = {() => {getNext(false)}}>-</button>
            <div style = {carousel}>
                {renderRestaurant}
            </div>
            <button className='hover' onClick = {() => {getNext(true)}}>+</button>
        </div>
    )
}
export default RestaurantCarousel