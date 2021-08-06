import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                } 
            });

            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [term]);

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>More</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui icon input">
                <input 
                    type="text" 
                    placeholder="Search Shiba Inu"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
                <i className="circular search link icon"></i>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search;