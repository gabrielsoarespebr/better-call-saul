import ReactPlayer from "react-player/youtube"

export const Video = () => {
    return (
        <ReactPlayer controls={true}  style={{ maxWidth: "50%",marginLeft:"5%" }} url={"https://www.youtube.com/embed/CQx0k1dyuBo"} />
    )
}