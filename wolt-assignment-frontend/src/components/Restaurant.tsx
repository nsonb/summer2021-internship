import { Blurhash } from "react-blurhash";
import { restaurantData } from '../types/type';
const style: React.CSSProperties = {
    display: 'flex',
    width: '160px',
    height: '160px',
    position: 'relative'
}

const name: React.CSSProperties = {
    display:'flex',
    position: 'absolute',
    top: 0,
    left: 0
}

const online: React.CSSProperties = {
    display:'flex',
    position: 'absolute',
    bottom: 0,
    right: 0
}

const blurhash: React.CSSProperties = {
    display:'flex',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -2
}

const Restaurant = (props: {restaurant : restaurantData}) => {
    const hash = props.restaurant.blurhash
    return <div key={props.restaurant.blurhash} style={style}>
        <p style= {name}>{props.restaurant.name}</p>
        <div style={blurhash}>
            <Blurhash
                hash={hash}
                width={160}
                height={160}
                resolutionX={32}
                resolutionY={32}
                punch={1}
            />
        </div>
        <p style={online}>{props.restaurant.online? "online" : "offline"}</p>
    </div>
}
export default Restaurant