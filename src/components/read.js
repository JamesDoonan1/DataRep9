import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";

function Read() {

    const [data, setData] = useState([]);

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/book')
                .then(
                    (response) => {
                        setData(response.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )

        }, []
    );

    //new method ...uses the same stuff from the axios.get above.
    const ReloadData = (e) => {
        // Send a GET request to the API endpoint to fetch book data
        axios.get('http://localhost:4000/api/book')
            .then(
                (response) => {
                    // If the request is successful, update the state with the fetched data
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )

    }

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Books myBooks={data} Reload={ReloadData}></Books>
        </div>
    );

}

export default Read;
