import Comment from '../Comment/Comment.js'

function Five() {
    return (
        <div>
            <div className="top-ent">
                <h1>An enterprise template to ramp up your company website</h1>
                <div className="btns">
                    <button className="btn-basic arrow"><span><img src=".\images\arrow-left.svg" className="arrowImg" alt="" /></span></button>
                    <button className="btn-basic arrow"><span><img src=".\images\arrow-right.svg" className="arrowImg" alt="" /></span></button>
                </div>
            </div>

            <div className="comments">

                <Comment com="Buyer buzz partner network disruptive non-disclosure agreement business" authorPick=".\images\Albus_p5.png" name="Albus Dumbledore" status="Manager @Howarts" />
                <Comment com="Learning curve infrastucture value proposition advisor strategy user experience
                                hepotheses investor" authorPick=".\images\Severus_p5.png" name="Severus Snape" status="Manager @Slytherin" />
                <div className='commentNum3'>
                    <Comment com="Release facebook responsive web desighn businnes model canvas seed money monetization." authorPick=".\images\Albus_p5.png" name="Harry Potter" status="Team Leader @Gryffindor" />
                </div>
            </div>
        </div>
    );
}
export default Five;