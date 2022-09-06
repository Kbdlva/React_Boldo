import React, { Component }  from 'react';

function Description(props) {
    return (
        <div className="">
            <h1>We connect our customers with the best, and help them keep up-and stay open. </h1>
            <div class="we">
                <p><img src={props.descrImage}class="check" alt="" />
                    We connect our customers with the best.</p>
                <p><img src={props.descrImage2} class="check" alt="" />
                    Advisor success customer launch party.</p>
                <p><img src={props.descrImage3} class="check" alt="" />
                    Business-to-consumer long tail.</p>
            </div>
        </div>

    );

}

export default Description;

