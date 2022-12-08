import React from 'react'
import comp from '../assets/comp.png'
import{AiFillFacebook,AiFillGoogleCircle,AiFillAmazonCircle,AiFillLinkedin} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>RaJ Solutions</h1>
            <p>Solutions for your all computer tech related problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={comp} alt="img1" />
        <div>
            <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who are we?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam veniam praesentium possimus eligendi iure rem fuga maxime eius doloribus a, enim dolorum corrupti maiores et molestiae natus non autem facilis hic similique unde! In velit fugiat ullam tenetur perferendis quisquam nam iste amet eum, numquam, dolor aliquid voluptatum eligendi dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga aperiam distinctio dolores iste mollitia accusantium voluptas nam error velit iusto quam in eligendi corrupti animi hic enim consectetur dolorem sapiente labore sed, veniam ullam modi quos. Recusandae, suscipit laborum velit, tenetur quas molestias deleniti excepturi numquam labore non dolor.</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillFacebook/>
                    <p>Facebook</p>
                </div>
                <div style={{animationDelay:"0.10s"}}>
                    <AiFillLinkedin/>
                    <p>Linkedin</p>
                </div>
            </article>
        </div>
    </div>
    </>
  );
};

export default Home