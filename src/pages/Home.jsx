import { Link } from "react-router-dom"
import barbell from "../../public/barbell.jpeg"

export function Home(){
    return(
        <>
            <h1>Welcome to the Gym Supplement Store!</h1>
            <div>
                <img src={barbell}/>
            </div>
            <Link to = '/Products'>
                <button>View all Products!</button>
            </Link>
        </>
    )
}