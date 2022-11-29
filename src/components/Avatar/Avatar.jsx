import "./avatar.css"



const Avatar =  ({src,alt}) => {
    return(
        <div className="avatar">
            <img src={src} alt={alt} className="flower"/>
        </div>
    )
}


export default Avatar;