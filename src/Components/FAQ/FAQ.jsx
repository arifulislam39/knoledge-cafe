import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className='question-section'>
            <h1>Frequently Asked Questions</h1>
            <h3>1.How does useState work?</h3>
            <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called</p>

            <hr />
            <h3>2.Props vs state:</h3>
            <p>state: To store the data on the current page needs in controller-view.</p>
            <p>props: To pass data & event handlers down to child components.</p>

            <hr />
            <h3>3.Purpose of useEffect other than fetching data.</h3>
            <p>It use also for Reading from local storage and
                Registering and deregistering event listeners.</p>

            <hr />
            <h3>4.How Does React work?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
        </div>
    );
};

export default FAQ;