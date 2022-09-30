import './App.css';
import './index.css';
import Description from './Description/Description';
import Card from './Card/Card.js'
import Comment from './Comment/Comment.js'
import BlogCard from './BlogCards/BlogCard.js'
import Modal from './Modal/Modal';
import FooterList from './FooterLIst/FooterList.js'
import Profile from './Profile/Profile.js'
import One from './Pages/One.js'
import Six from './Pages/Six.js'
import Eight from './Pages/Eight'
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const UserContext = createContext({});

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setUser(data);

    console.log(user.userName)
  }

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Routes>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path='/' element={
            <>
              <div className="App">
                <div className="wrapper">
                  <header>
                    <div className='headContainer'>
                      <div className='header_body'>
                        <a href="https://www.google.com/search?q=Boldo&rlz=1C1IXYC_ruKZ1008KZ1008&sxsrf=ALiCzsbXogn_ySoE_4IdSKWY0x0nfIrCwA:1660542487373&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiF8t_oksj5AhXhkYsKHe7HBV4Q_AUoAXoECAIQAw&biw=1536&bih=746&dpr=1.25#imgrc=WolQvP0DPf_LyM"
                          className="header_logo">
                          <img src=".\images\Logo_header_p1.png" className="logo" alt="logo" />
                        </a>
                        <div className="header_burger">
                          <span></span>
                        </div>

                        <nav className="header_menu">
                          <ul className="header_list">
                            <li><a href="#product" className="nav-link">Product</a></li>
                            <li><a href="#services" className="nav-link">Services</a></li>
                            <li><a href="#help" className="nav-link">About</a></li>

                            {user.userName ? <div className='user_name'>
                            <Link to='/profile/1/'>{user.userName}</Link>

                            </div> :
                              <button className="btn btn-basic nav-link" onClick={() => setModalActive(true)} >
                                Log in
                              </button>
                            }
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </header>

                  <div className="hero light-them">
                    <One />
                    <img src=".\images\Logos_bottom_p1.png" className="logos" alt="logos" />
                  </div>

                  <div id="services" className="services dark-them">
                    <p>Our services</p>
                    <h1>Handshake infographic mass market crowdfunding iteration</h1>

                    <div className='cards'>

                      <Card
                        image=".\images\cool_f1_p2.png" alt="cool" featureName="Cool" />
                      <Card
                        image=".\images\cooler_f2_p2.png" alt="cooler"
                        featureName="Cooler" />

                      <div className="servicesCard">
                        <Card
                          image=".\images\cool_f3_p2.png" alt="cool2"
                          featureName="Even cooler" />
                      </div>
                    </div>
                  </div>

                  <div id="company" className="connect customer1">
                    <div className="left">
                      <img src=".\images\manOnPhone_p3.png" className="man" alt="man" />
                      <img src=".\images\graph_income_p3.png" className="income" alt="income" />
                    </div>
                    <div className="right">
                      <Description descrImage=".\images\check.svg" descrImage2=".\images\check.svg" descrImage3=".\images\check.svg" />
                      <button className="btn btn-dark">Start now</button>
                    </div>
                  </div>

                  <div id="landings" className="connect customer2">
                    <div className="left">
                      <Description descrImage=".\images\feather.svg"
                        descrImage2=".\images\star.svg"
                        descrImage3=".\images\sun.svg"
                      />
                    </div>
                    <div className="right">
                      <img src=".\images\womanOnPhone_p4.png" className="woman" alt="woman" />
                      <img src=".\images\pie_chart_p4.png" className="pie" alt="pie" />
                    </div>
                  </div>

                  <div id="product" className="enterprise dark-them">
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

                  <div id="help" className="help">
                    <Six />
                  </div>

                  <div id="blog" className="blog light-them">
                    <p>Our Blog</p>
                    <h1>Value proposition accelerating product managment venture</h1>
                    <div className="pics">

                      <BlogCard imgBlog=".\images\Category1_p7.png" authorPick=".\images\Harry_p5.png" />
                      <BlogCard imgBlog=".\images\Category2_p7.png" authorPick=".\images\Harry_p5.png" />

                      <div className='blogCard3'>
                        <BlogCard imgBlog=".\images\Category3_p7.png" authorPick=".\images\Harry_p5.png" />
                      </div>

                    </div>
                    <button className="btn btn-basic">Load more</button>
                  </div>

                  <div id="resourses" className="last dark-them">
                    <Eight />
                  </div>

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

                  <Modal active={modalActive} setActive={setModalActive} handleLogin={handleLogin}>
                    Username<br />Password<br />login_button
                  </Modal>
                </div>
              </div>
            </>
          }
          ></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;