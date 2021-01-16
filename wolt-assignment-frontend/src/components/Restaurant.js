import { decode } from "blurhash";
import { Blurhash } from "react-blurhash";

const Restaurant = ({restaurant}) => {
    console.log(restaurant)
    return <div key={restaurant.blurhash}>
        {restaurant.name}
        <Blurhash
            hash={restaurant.blurhash}
            width={400}
            height={300}
            resolutionX={32}
            resolutionY={32}
            punch={1}
        />
    </div>
}
export default Restaurant