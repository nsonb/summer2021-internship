import { Blurhash } from "react-blurhash";
import { restaurantData } from '../types/type';

const Restaurant = (props: {restaurant : restaurantData}) => {
    console.log(props.restaurant)
    const hash = props.restaurant.blurhash
    return <div key={props.restaurant.blurhash}>
        {props.restaurant.name}
        <Blurhash
            hash={hash}
            width={400}
            height={300}
            resolutionX={32}
            resolutionY={32}
            punch={1}
        />
    </div>
}
export default Restaurant