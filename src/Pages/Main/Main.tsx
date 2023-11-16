import './Main.css'
import { GrAnalytics } from "react-icons/gr";
import { IoMdTimer } from "react-icons/io";
import { LuMessageCircle } from "react-icons/lu";
import { MdOutlineVisibility } from "react-icons/md";




function Main() {
  return (
    <div className='main'>
        <div className="leftSide">
            <div className='title'>Your Result</div>
            <div className='circleCenter'>
            <div className="resultCircle">
                <div className='seventySix'>76</div>
                <div className='ofHundred'>of 100</div>
            </div>
            </div>
           
            <div className="description">
                <div className='great'>Great</div>
                <div className='desc'>You scored higher than 65% of the people who have taken these tests.</div>
            </div>
        </div>
        <div className="rightSide">
            <div className="summary">Summary</div>
            <div className='boxes'>
            <div className="reaction">
                <div className='row'>
                <GrAnalytics className='reactionIcon' />
                <div className='reactionText'>Reaction</div>
                </div>              
                <div> <span className='black'>80</span> <span className='gray'>/ 100</span></div>
            </div>

            <div className="memory">
                <div className='row'>
                <IoMdTimer className='memoryIcon' />
                <div className='memoryText'>Memory</div>
                </div>              
                <div> <span className='black'>92</span> <span className='gray'>/ 100</span></div>
            </div>

            <div className="verbal">
                <div className='row'>
                <LuMessageCircle className='verbalIcon' />
                <div className='verbalText'>Verbal</div>
                </div>              
                <div> <span className='black'>61</span> <span className='gray'>/ 100</span></div>
            </div>

            <div className="visual">
                <div className='row'>
                <MdOutlineVisibility className='visualIcon' />
                <div className='visualText'>Visual</div>
                </div>              
                <div> <span className='black'>72</span> <span  className='gray'>/ 100</span></div>
            </div>
            </div>
            <button>Continue</button>
        </div>
    </div>
  )
}

export default Main