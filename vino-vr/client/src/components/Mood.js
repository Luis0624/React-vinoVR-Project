import React, { useState } from "react";
// import Typed from "react-typed";
import API from "../utils/Api";
import WineCard from "./WineCard/WineCard";
import "../styles/Mood.css"
// import img2 from '../images/winecard2.png'
// import img1 from '../images/winecard1.png'
// import img3 from '../images/winecard3.png'

const Mood = () => {
    const [wines, setWines] = useState([]);
    const selectWineByMood = async (mood) => {
        const response = await API.search(`?mood=${mood}`)
        setWines(response.data)
    }
    // const imageValues = [
    //     {
    //         altValue: 'img 1',
    //         img: img1,
    //         name: 'Rose',
    //         type: 'Pinot Grigio',
    //         description: ' Both Pinot Gris and Pinot Grigio are best paired with seafood, more specifically shellfish.'
    //     },
    //     {
    //         altValue: 'img 2',
    //         img: img2,
    //         name: 'Chateau Castile-Lamont',
    //         type: 'Cabernet Sauvignon',
    //         description: 'The perfect pair for a glass of Cabernet Sauvignon is a juicy steak or other form of red meat.'
    //     },
    //     {
    //         altValue: 'img 3',
    //         img: img3,
    //         name: 'Merlot',
    //         type: 'Merlot',
    //         description: ' Merlot tastes fabulous when paired with a hamburger or, more exotically, with lamb or duck.'
    //     },
    
    //     {
    //         altValue: 'img 4',
    //         img: img1,
    //         name: 'Pinot Noir',
    //         type: 'Pinot Noir',
    //         description: 'A great Pinot Noir typically has a long, lingering finish. Pinot Noir pairs best with wild game or veal.'
    //     },
    
        // {
        //     altValue: 'img 5',
        //     img: img2,
        //     name: 'Merlot',
        //     type: '',
        //     description: ''
        // },
        // {
        //     altValue: 'img 6',
        //     img: img3,
        //     name: 'Cakebread',
        //     type: '',
        //     description: ''  
        // }
    //];
    return (
        <div className="header-wrapper">
            {/* { wines.length
                ? <div className='cards'>
                    {wines.map(wine => (
                        <WineCard name={wine.name} img={wine.img} key={wine.id}/>
                     ) )}  */}
                      { wines.length
                ? <div className='cards'>
                    {wines.map(wine => (
                        <WineCard name={wine.name} mood={wine.mood} img={wine.img} key={wine.id} type={wine.type} grape={wine.grape} description={wine.description}/>
                     ) )} 
                    <button className="btn-change-mood" onClick={ () => setWines([])}>Choose a new mood</button> 
                </div>
                :
                <div className="main-mood">
                    <button className="btn-mood btn-1" onClick={ () => selectWineByMood('relax')}>Relax</button> 
                    <button className="btn-mood btn-2" onClick={ () => selectWineByMood('sexy')}>Sexy</button> 
                    <button className="btn-mood btn-3" onClick={ () => selectWineByMood('stressed')}>Stress</button> 
                    <button className="btn-mood" onClick={ () => selectWineByMood('happy')}>Happy</button> 
                    {/* <p>
                        "Now, I don't know much about science, but I am fairly good a drinking wine and<br></br> I am even better at having emotions"
                    </p> */}
                </div>
            }
        </div>
    )
}

export default Mood;

