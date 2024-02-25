import React, { useEffect, useState } from "react";
import PortfolioItem from '../components/PortfolioItem/PortfolioItem';

export default function Portfolio() {
    const API_URL = 'https://api.github.com/users/lefuden/repos';
    const [requestData, setRequestData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRequestData(data);
            } catch (error) {
                console.log(error.message);
            }
            finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [])

    return (
        <>
            <aside className="left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut neque porro accusamus accusantium
                    perferendis numquam commodi sint quasi inventore expedita obcaecati officia blanditiis asperiores
                    cupiditate, suscipit ad dolores vitae!</p>
            </aside>

            <aside className="right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat hic, a ea voluptatum
                    asperiores quos. Officiis voluptatibus dolorem temporibus impedit reprehenderit quod deserunt fugiat
                    sequi illum, voluptatem, quasi ullam.</p>
            </aside>

            <article className="main-content">
                <h2>Portfolio</h2>
                {isLoading && <div className="portfolio-loading">loading data from github, one moment</div>}
                {!isLoading && requestData.map(data => (
                    <PortfolioItem data={data} key={data.id} />
                ))}
            </article>
        </>
    )
}