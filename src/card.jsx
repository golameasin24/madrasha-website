function Card({titleText,descText,dateTime}) {
    return ( 
        <div className="text-center bg-amber-950 px-[20px] py-[20px] shadow shadow-sky-500 w-[300px] text-white mx-auto mt-2">
            <h2>{titleText}</h2>
            <span>{descText}</span>
            <p>{dateTime}</p>
        </div>
     );
}

export default Card;