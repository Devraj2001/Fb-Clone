import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className = "storyreel">
            <Story 
                image = "https://media.tenor.com/images/3127ae4ec3fe18417e65b7e88537e763/tenor.gif"
                profileSrc = "https://i.pinimg.com/originals/e0/54/d2/e054d275d2efad131745793dd552f1cf.jpg"
                title = "Kakashi"
            />
            <Story 
                image = "https://pbs.twimg.com/media/Emyc97uXMAI3eZH.jpg"
                profileSrc = "https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg"
                title = "Gojo"
            />
            <Story 
                image = "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/pqhpjuoecktwg6dw_1622455833.jpeg"
                profileSrc = "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/09/One-Piece-Monkey-D.-Luffy-Cropped.jpg"
                title = "Luffy"
            />
            <Story 
                image = "https://i.ytimg.com/vi/k9JPoFzxY3E/maxresdefault.jpg"
                profileSrc = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/NatsuHeader.jpg"
                title = "Natsu"
            />
            <Story 
                image = "https://m.media-amazon.com/images/I/61-NUVys2bL._SY606_.jpg"
                profileSrc = "https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
                title = "Goku"
            />
        </div>
    )
}

export default StoryReel
