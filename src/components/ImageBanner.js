import { imageBanner } from "../utils"

const ImageBanner = () => {
    return (
        <div className="flex justify-around flex-wrap gap-4 mt-5 ">
            {
                imageBanner.map((item) => <img className="w-[430px]" src = {item.url}/>)
            }

        </div>
    )
}

export default ImageBanner