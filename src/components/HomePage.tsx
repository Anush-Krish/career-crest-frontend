import * as React from "react";
import {useEffect, useState} from "react";

interface InfoApiResponse {
    intro: string;
    about: string;
    title: string;
    topSkills: string[];
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
        <div className="border-b border-neutral-900 pb-4 lg:mb35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            {data?.intro && (
                                <>
                                    <span className="block lg:text-start text-center">{data.intro.split(' ')[0]}</span> {/* First word */}
                                    <span className="lg:pl-32">{data.intro.split(' ').slice(1).join(' ')}</span> {/* Remaining words */}
                                </>
                            )}
                        </h1>
                        <span className="bg-clip-text text-4xl
                        tracking-tight items-start">{data?.title}</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight"> {data?.about}</p>
                        <div className="flex items-center">
                            <h3 className="font-semibold text-white mr-2 ">Top Skills:{data?.topSkills?.join(', ')}</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default HomePage;