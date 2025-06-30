import { Link } from "react-router-dom"

export function About(){
    return(
        <>
            <h1>About Us Page</h1>

            <Link to = "/Contact">
                <button>
                    Contact Us
                </button>
            </Link>
        </>
    )
}