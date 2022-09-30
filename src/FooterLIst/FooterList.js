import './FooterList.css'

function FooterList (props) {
    return (
        <div className="rightContent" >
            <ul className="lists">
                <li><a href="#landings">Landings</a></li>

                <li><a href="#" className='inside' >Home</a ></li>
                <li><a href="#product" className='inside'>Products</a></li>
                <li><a href="#services" className='inside'>Services</a></li>

              </ul>
              <ul className="lists2">
                <li><a href="#company">Company</a></li>
                <li><a href="#" className='inside'>Home</a></li>
                <li><a href="#help" className='inside'>Carees</a></li>
                <li><a href="#services" className='inside'>Services</a></li>
              </ul>
              <ul className="lists3">
                <li><a href="#resourses">Resources</a></li>
                <li><a href="#blog" className='inside'>Blog</a></li>
                <li><a href="#product" className='inside'>Products</a></li>
                <li><a href="#services" className='inside'>Services</a></li>
              </ul>
        </div>

    );
} 
export default FooterList;