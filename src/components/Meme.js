import React from "react"


export default function Meme(){
    
    const [memeImage, setMemeImage] = React.useState(
        {
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        })
        
 const [allMemeImages, setAllMemeImages] = React.useState([])
 
 React.useEffect(()=>{
     fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))
     
 }, [])
 
    function handleChange(event){
        const {value , name} = event.target
        setMemeImage(prevImageData => {
            return {
                ...prevImageData,
                [name]: value
            }
        })
        
    } 
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length) + 1
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevImage => ({
            ...prevImage,
            randomImage:url
        }))
    }
    
    return(
        <main className="meme">
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                    name="topText" 
                    onChange={handleChange}
                    value = {memeImage.topText}
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={memeImage.bottomText}
                />
                <button onClick={getMemeImage} className="form--button" >Get a new meme Image </button>
            </div>
         
             <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" alt=" A Meme"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}