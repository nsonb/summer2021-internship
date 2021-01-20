import Restaurant from './Restaurant';
import { restaurantData, refElement } from '../types/type';
import { useState, useEffect, useRef } from 'react'
import { useContainerDimensions } from '../hook/useContainerDimensions';

const RestaurantCarousel = (props: {restaurantList : restaurantData[], title: string}) => {
    const restaurantList = props.restaurantList.sort((a: restaurantData, b: restaurantData) => {
        return (a.online === b.online) ? 0 : a.online? -1 : 1
    });
    // getComputedStyle(document.documentElement).fontSize)*8
    const [ displayed, setDisplay] = useState<restaurantData[]>(restaurantList.length < 5 ? restaurantList : restaurantList.slice(0,5))
    const [ currentIndex, setCurrentIndex] = useState<number>(0);
    const myRef = useRef<HTMLDivElement>(null)
    const { width } = useContainerDimensions(myRef as unknown as refElement)
    const maxDisplayed = width / (16*8) > 5 ? 5 : width / (16*8);

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
        for(let i = 0; i <  maxDisplayed && i < restaurantList.length; i++) {
            if(i + currentIndex >= restaurantList.length) {
                tempList.push(restaurantList[i + currentIndex - restaurantList.length]);
            } else if (i + currentIndex < 0) {
                tempList.push(restaurantList[restaurantList.length - 1]);
            } else {
                tempList.push(restaurantList[currentIndex + i]);
            }
        }
        setDisplay(tempList)
    }, [currentIndex, maxDisplayed])

    const renderRestaurant = displayed.map((restaurant) => {
        return <Restaurant restaurant={restaurant} key={restaurant.blurhash}></Restaurant>
    })

    const style: React.CSSProperties = {
        display: "flex",
        width: '100%',
        minWidth: '320px',
        height: 'fit-content',
        flexDirection: 'column',
        alignContent: 'center',
        margin: ' 0.8rem auto'
    }
    
    const title: React.CSSProperties = {
        width: 'calc(100% - 4.6rem)',
        padding: 'auto',
        verticalAlign: 'center',
        fontFamily: "'Martel Sans', sans-serif",
        fontWeight: 2
    }
    
    const buttonContainer: React.CSSProperties = {
        marginLeft: 'auto',     
    }
    
    const button: React.CSSProperties = {
        width: '2rem',
        height: '2rem',
        borderRadius: '0.3rem',
        marginLeft: 'auto',
    }
    
    const carousel: React.CSSProperties = {
        marginTop: '0.2rem',
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'start',
        flex: '1 1'
    }
    
    const topBar: React.CSSProperties = {
        display: 'flex',
        fontSize: '1.2rem',
        width: '100%',
        height: '2.5rem',
        marginBottom: '0.2rem'
    }

    return (
        <div style={style} ref={myRef}>
            <div style = {topBar}>
                <p style={title}>{props.title}</p>
                {maxDisplayed > displayed.length ? null : 
                    <div style={buttonContainer}>
                        <button className='hover' onClick = {() => {getNext(false)}} style={button}>{"<"}</button>
                        <button className='hover' onClick = {() => {getNext(true)}} style={button}>{">"}</button>
                    </div>}
            </div>
            <div style = {carousel}>
                {renderRestaurant}
            </div>
        </div>
    )
}
export default RestaurantCarousel

