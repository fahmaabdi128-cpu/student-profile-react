function Image({ image }){
    return
    <img src="{mage}" />
}
function WatchInfo({name, price}){ //stock 
     return (
        <div>
            <h2>{name}</h2>
            <p>KSH {price}</p>
        </div>
     );
}

function WatchCard({ name, price}){
    return (
        <div>
            
            <WatchInfo name = {name} price ={price} />
        </div>
    );
}

export default function WatchGallery (){
    const watches = [
        {id:1, name:"Casio", price: 5000},
         {id:2, name:"Casio2", price: 6000},
          {id:3, name:"Casio3", price: 8000}

    ];
    return (
        <div>
            <h2>OUR WATCHES</h2>
            <div>
                {watches.map((watches) => (
                    <WatchCard 
                        key={watches.id}
                        name={watches.name}
                        price={watches.price}
                        />
                )) }
            </div>
        </div>
    )
}

