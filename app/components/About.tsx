import { text } from 'stream/consumers';
import styles from './parallax.module.css';

const About = () => {
    return (
        <>
            <div id="aboutUs" className={`w-full h-64 ${styles.parallax}`}></div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6"  >
                    <h2  className="title text-4xl font-bold text-center text-gray-800 mb-6">
                        About Wellness for You
                    </h2>

                    <div className="info-container"  >
                    <p className="text-lg text-gray-600 mb-6">
                        At <span className="font-semibold text-gray-900">Wellness for You</span>, we believe that fitness is not just a goal, but a way of life. 
                        Our mission is to inspire and guide individuals of all fitness levels to achieve their personal health goals in a supportive and welcoming environment.
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        From beginners to advanced athletes, we provide personalized training plans, state-of-the-art equipment, 
                        and a variety of classes designed to help you improve your strength, flexibility, and mental well-being.
                    </p>
                    <p className="text-lg text-gray-600">
                        Our team of certified trainers is dedicated to helping you stay motivated, 
                        while ensuring you progress at your own pace. Join us at <span className="font-semibold text-gray-900">Wellness for You</span> and take the next step in your fitness journey today.
                    </p>
                    </div>
                </div>
            </section>
        </>
    );
};

const styled = {
    infoContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        maxWidth:'800px',
        margin:'auto'
    }
}

export default About;
