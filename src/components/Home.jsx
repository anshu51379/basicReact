import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>51379 X</h1>
                    <p>can solve every issue on your doorstep</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1></h1>
                    <p>
                        I'm a 3rd year B.Tech CSE student of Institute of Engineering and Management. With a group of my few friends, I started this as a service provider website to solve all your technical issues. Today's youth is too much confused and not have quick resolution of their issues. So they keep on leaving the issues unresolved. By this initiative, i can assure some of them with the resolution of their issues at any moment, so they can keep on moving on the same page without leaving any domain.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;
