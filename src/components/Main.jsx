import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'

// 파일
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import Comment from './Layout/Comment';
import MainTop from './MainTop';

import Home from './Home';
import Portlist from './Portlist';
import Port from './Port';
import Effert from './Effert';
import About from './About';
import Contact from './Contact';

// 애니메이션
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from './anim';

const Main = () => {
    const location = useLocation();

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    return (
        <main id="main">
            <Nav />
            <Comment />
            <div className="main-cont">
                <div className="mc-inner">
                    <MainTop />

                    <div className='inner'>
                        <motion.div className='slide' {...anim(slide)} />
                        <motion.div className='page' {...anim(perspective)}>
                            <motion.div {...anim(opacity)}>
                                <Routes location={location} key={location.pathname}>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/portlist" element={<Portlist />} />
                                    <Route path="/port/:id" element={<Port />} />
                                    <Route path="/effert/:id" element={<Effert />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </motion.div>
                        </motion.div>
                    </div>

                    <Footer />
                </div>
            </div>
        </main>
    );
};

export default Main;
