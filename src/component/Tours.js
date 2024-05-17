import Card from "./Card";

function Tours({ tours, removeTour }) {
    // Iterate over object keys and map accordingly
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with friends</h2>
            </div>
            <div className="Card">
            {
               Object.keys(tours).map((key) => (
               <Card key={key} {...tours[key]} removeTour={removeTour}></Card>
               ))
            }   
            </div>
        </div>
    );
}

export default Tours;
