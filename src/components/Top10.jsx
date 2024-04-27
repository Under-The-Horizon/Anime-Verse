export default function Top10({name, poster}){
    return (
        <>
            <div className="flex border border-red-700">
                <img src={poster} alt={name} className=""/>
                <p>{name}</p>
            </div>
        </>
    )
}