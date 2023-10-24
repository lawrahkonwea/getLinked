import React from 'react'
import Glassesman from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Title from '../assets/Title.png'
import Vector from '../assets/Vector.png'
import Moon from '../assets/moon.png'
import Countdown from '../assets/Countdown.png'
import Lightbulb from '../assets/lightbulb.png'
import Sittinglady from '../assets/sittinglady.png'
import Star from '../assets/star.png'
import Lensflare from '../assets/Purple-Lens-Flare-PNG.png'
import Tworeaders from '../assets/tworeaders.png'
import Questionmark from '../assets/question-mark.png'
import Prize from '../assets/prizecup.png'
import Reward from '../assets/Rewards.png'
import VectorLock from '../assets/Vector-lock.png'
import Keyman from '../assets/Key-man.png'
// import Sponsors from '../assets/Partner-and-sponsors.png'
// import RewardFirst from '../assets/1st-position.png'
// import RewardSecond from '../assets/2nd-position.png'
// import RewardThird from '../assets/3rd-position.png'
// import Faqs from './Faqs'


export const Homepage = () => {

  return (
    <main>
      <div className='home-container'>
        <div className='head-text'>
          <h2>Igniting the Revolution in HR innovation</h2>
        </div>
        <div className='vector'><img src={Vector} alt="vector" /></div>
        <div className='title-div-cont'>
          <div className='title'>
            <div><img src={Title} alt="title" /></div>
            {/* <div className='lensflare'><img src={Lensflare} /></div> */}

            <h4 className='participate'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h4>
            <button className='home-button' type="button">Register</button>
            <div className='countdown'><img src={Countdown} alt="countdown" /></div>
          </div>
          <div className='home'>
            <div className='glassesman'><img src={Glassesman} alt="glassesman" /></div>
            <div className='img-overlay'><img src={Moon} alt="moon" /></div>

          </div>
        </div>

        <div className='introduction'>
          <div className='bulb-img'><img src={Lightbulb} /></div>

          <div className='intro-textcont'>
            <h2 className='intro-text' >Introduction to getlinked <span className="highlighted-text">tech Hackathon 1.0</span></h2>
            <h4>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a
              design maverick, or a concept wizard, you'll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world,
              that's what we're all about!</h4></div>
        </div>
        <hr />
        <div className='rules-cont'>
          <div className='rules-book'>
            <div className='star'><img src={Star} /></div>
            <h2 className='rules-heading'>Rules and <span className="highlighted-text">guildelines</span></h2>
            <h4 className='rules'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
              clear as day: to shape the future. Whether you're a coding genius, a
              design maverick, or a concept wizard, you'll have the chance to transform
              your ideas into reality. Solving real-world problems, pushing the boundaries
              of technology, and creating solutions that can change the world to a better,
              that's what we're all about!</h4>
            <div className='lensflare'><img src={Lensflare} /></div>
          </div>
          <div className='sittinglady-img'><img src={Sittinglady} /></div>
        </div>
        <hr />

        <div className='criteria-cont'>
          <div className='two-reader-img'><img src={Tworeaders} alt='tworeaders' /></div>
          <div className='criteria'>
            <h2 className='criteria-header'>Judging Criteria <span className="highlighted-text">Key attributes</span></h2>
            <h4 className='first-criteria'><span className="highlighted-text">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
              solution. Consider whether it addresses a real-world problem in a novel
              way or introduces innovative features.</h4>

            <h4 className='second-criteria'><span className="highlighted-text">Functionality:</span> Assess how well the solution works. Does it perform its
              intended functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.</h4>

            <h4 className='third-criteria'><span className="highlighted-text">impact and Relevance:</span> Determine the potential impact of the solution
              in the real world. Does it address a significant problem, and is it relevant
              to the target audience? Judges would assess the potential social,
              economic, or environmental benefits.</h4>

            <h4 className='fourth-criteria'><span className="highlighted-text">Technical Complexity:</span> Evaluate the technical sophistication of the solution.
              Judges would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.</h4>

            <h4 className='fifth-criteria'><span className="highlighted-text">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
              to the rules and guidelines of the hackathon, including deadlines, use of
              specific technologies or APIs, and any other competition-specific requirements.</h4>
            <button className='home-button' type="button">Read More</button>
          </div>
        </div>


        <div className='Faqs-div'>
          <div className='Faqs-cont'>
            <h1 className='Faqs-title'>Frequently Ask <span className="highlighted-text">Question</span> </h1>
            <h4 className='Faqs'>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</h4>
            {/* <Faqs /> */}
          </div>
          <div className='Faq-img'><img src={Questionmark} alt='questiomark' /></div>
        </div>
        <hr />



        <div className='prize-money'>

          <div className='reward-img'><img src={Prize} alt='prize-img' /></div>

          <div className='prize-options'>
            <div>
              <div className='reward-text-div'>
                <h1 className='reward-text'>Prizes and <span className="highlighted-text">Rewards</span></h1>
                <h4 className='reward-text2'>Highlight of the prizes or rewards for winners and for participants.</h4>
              </div>
              <div className='medal-image'>
                <img src={Reward} />

              </div>
            </div>
          </div>
        </div>


        <div className='reward-foot'>
          <h1>Partners and Sponsors</h1>
          <h6>Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors</h6>

          {/* <div className='sponsors'><img src={Sponsors} /></div> */}
        </div>

        <div className='privacy-policy'>
          <div>
            <div className='privacy-div'>
              <h1 className='privacy-header'>PrivacyPolicyand  <span className="highlighted-text">
                Terms</span></h1>
              <h4 className='update'>Last updated on September 12, 2023</h4>
              <h4 className='update-policy'>Below are our privacy & policy, which outline a lot of goodies.
                its our aim to always take of our participant</h4>

            </div>


            <div className='getlinked'>
              <h4 className='getlinked-text'>At getlinked tech Hackathon 1.0, we value your privacy
                and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, disclose,
                and safeguard your data when you participate in our tech
                hackathon event. By participating in our event, you consent
                to the practices described in this policy.</h4>
              <h4 className='licence'>Licensing Policy</h4>
              <h4 className='checkmark1' for="myCheckbox">Here are terms of our Standard License:</h4>
              {/* <input type="checkbox" id="myCheckbox" name="myCheckbox"></input> */}
              <h4 class="checkmark">The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </h4>
              {/* <input type="checkbox" id="myCheckbox" name="myCheckbox"></input> */}

              <h4 class="checkmark">You are licensed to use the item available at any free source
                sites, for your project developement
              </h4>

              <button className='home-button' type="button">Read More</button>
            </div>
          </div>

          <div>
            <div className='vectorlock'><img src={VectorLock} /></div>
            <div className='keyman'><img src={Keyman} /></div>
          </div>
        </div>



      </div>

    </main>

  )
}
