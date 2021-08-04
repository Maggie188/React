import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = index => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.question}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.question}
                </div>
                <div className={`content ${active}`}>
                    <p className="transition visible">
                        {item.answer}
                    </p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;




