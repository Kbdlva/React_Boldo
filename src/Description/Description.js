function Description(props) {
    return (
        <div className="">
            <h1>We connect our customers with the best, and help them keep up-and stay open. </h1>
            <div className="we">
                <p><img src={props.descrImage}className="check" alt="" />
                    We connect our customers with the best.</p>
                <p><img src={props.descrImage2} className="check" alt="" />
                    Advisor success customer launch party.</p>
                <p><img src={props.descrImage3} className="check" alt="" />
                    Business-to-consumer long tail.</p>
            </div>
        </div>

    );

}

export default Description;

