import { Blurhash } from "react-blurhash";
import { restaurantData } from '../types/type';

const style: React.CSSProperties = {
    display: 'flex',
    width: '36%',
    maxWidth: '12rem',
    height: '9rem',
    position: 'relative',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '13px 15px 15px -8px rgba(0, 194, 232, 0.1)',
    marginRight: '0.4rem'
}

const name: React.CSSProperties = {
    display:'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0.3rem',
    width: 'calc(100% - 0.6rem)',
    height: '3.2rem',
    backgroundColor: 'white',
    fontSize: '0.9rem',
}


const blurhash: React.CSSProperties = {
    display:'flex',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -2,
    overflow: "hidden",
}

const Restaurant = (props: {restaurant : restaurantData}) => {
    const hash = props.restaurant.blurhash
    const online: React.CSSProperties = {
        display:'flex',
        position: 'absolute',
        bottom: '0.5rem',
        right: '0.5rem',
        fontSize: '0.8rem',
        padding: '0.2rem',
        color: (props.restaurant.online? "white" : "white"),
        background: (props.restaurant.online? "green" : "gray"),
        borderRadius: '0.5rem'
    }
    return <div key={props.restaurant.blurhash} style={style} className='hover zoom'>
        <p style= {name}>{props.restaurant.name}</p>
        <div style={blurhash} className='zoom'>
            <Blurhash
                hash={hash}
                width={parseFloat(getComputedStyle(document.documentElement).fontSize)*12}
                height={parseFloat(getComputedStyle(document.documentElement).fontSize)*12}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
        </div>
        <p style={online}>{props.restaurant.online? "online" : "offline"}</p>
    </div>
}
export default Restaurant