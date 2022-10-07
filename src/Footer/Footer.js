import FooterList from './FooterList.js'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="leftCont">
                        <img src=".\images\Logo_header_p1.png" alt="" />
                        <p className="reserved">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sed perspiciatis vitae obcaecati delectus nulla!</p>
                        <p>Allrights reserved.</p>
                    </div>

                    <div className="rightCont">
                        <FooterList />
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Footer;

