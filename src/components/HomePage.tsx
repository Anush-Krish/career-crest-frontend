import * as React from "react";
import {useEffect, useState} from "react";

interface InfoApiResponse {
    intro: string;
    about: string;
}

const HomePage: React.FC = () => {

    const [data, setData] = useState<InfoApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                //todo will set later after backend setup
                const response = await fetch("");
                if (!response.ok) {
                    throw new Error("Error fetching information.")
                }
                const result: InfoApiResponse = await response.json();
                setData(result);
            } catch (err) {
                const errorMessage = (err as Error).message;
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, []);

    if (loading) {
        return <p>Loading ...</p>
    }
    if (error) {
        return <p>Error: {error}</p>
    }


    return (
        <div>
            <h1>{!data ? null : data.intro}</h1>
            <p> {data?.about}</p>
        </div>
    )
};

export default HomePage;