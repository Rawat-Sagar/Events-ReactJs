import React , {useState} from 'react';



const App = () =>{
    const clr = '#e84393';
    const [bg, setBg] = useState(clr);
    const clkinfo = "Click Me";
    const [name, setName] = useState(clkinfo);

    const bgChnge = () =>{
       let newBg = '#4834d4';
       setBg(newBg);
       setName("Ouch!! 😝");
    };

    const bgDchnge = () =>{
        let secBg = '#6D214F';
        setBg(secBg);
        setName("HaHa 😜");
    }





    return(
            <>
            <div style = {{backgroundColor: bg}}>
                <button onClick={bgChnge} onDoubleClick={bgDchnge}>{name}</button>
            </div>
            </>
        
    );
}


export default App;