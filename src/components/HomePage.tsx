import * as React from "react";
import {useEffect, useState} from "react";
import HomePageStyle from "./HomePageStyle.ts";

interface InfoApiResponse {
    intro: string;
    about: string;
    topSkills:string[];
}

const HomePage: React.FC = () => {

    const [data, setData] = useState<InfoApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8080/api/career-crest/v1/info");
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
        <div style={HomePageStyle.container}>
            <h1 style={HomePageStyle.intro}>{!data ? null : data.intro}</h1>
            <span style={HomePageStyle.title}>Full Stack Developer</span>
            <p style={HomePageStyle.about}> {data?.about}</p>
            <div style={HomePageStyle.skillsContainer}>
                <h3 style={HomePageStyle.skillHeading}>Top Skills:</h3>
                <p style={HomePageStyle.skillList}>
                    {data?.topSkills?.join(', ')}
                </p>
            </div>
        </div>
    )
};

export default HomePage;