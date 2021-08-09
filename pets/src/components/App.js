import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const items = [
    {
     question: 'Why do dogs wag their tails?',
     answer: 'Most people have heard that dogs wag their tail when they’re happy, but this isn’t always the case. Dogs use their tails to communicate all of their emotions with humans, other dogs or even.'
    },
    {
    question: 'Why do dogs have whiskers?',
    answer: 'Dog whiskers have follicles at the base, which have nerves that send messages to the dog’s brain. Whiskers serve as receptors for important information, such as size, shape, and the speed of nearby objects, people, or animals.'
    },
    {
    question: 'Why do dogs have wet noses?',
    answer: 'Dog noses secrete a thin layer of moisture that helps to absorb scents. Then, they lick their nose, so they can essentially taste those scents. Having a wet nose is also one of the ways that dogs can regulate their body temperature.'
    },
    {
    question: 'Why does my dog lick me?',
    answer: 'Dogs will often lick their owner or other people as they like the taste of their skin and as a sign of affection. For dogs, licking releases pleasurable endorphins and releases stress.'
    },
    {
    question: 'Why do dogs eat grass?',
    answer: 'Sometimes dogs will eat grass because they have an upset stomach, and sometimes they may just be craving essential nutrients that they’re not be getting in their regular diet.'
    }
]

const options = [
    {
        label: 'Shiba Inu',
        value: 'Shiba Inu'
    },
    {
        label: 'Labrador',
        value: 'Labrador'
    },
    {
        label: 'French Bulldog',
        value: 'French Bulldog'
    },
    {
        label: 'Huskey',
        value: 'Huskey'
    },
    {
        label: 'Border Collie',
        value: 'Border Collie'
    }
]



const App = () => {
    const [selected, setSelected] = useState(options[0]); 
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit(selected.value)
    }, []);

    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };
    

    console.log(selectedVideo);
    
    const onVideoSelect = video => {
        setSelectedVideo(video)
    };
    
    return (
        <div className="ui container">
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
                onTermSubmit={onTermSubmit}
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;