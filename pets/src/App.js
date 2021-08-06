import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};