import dizziologo from '../img/dizzio.svg'
import jwwatersportslogo from '../img/jwwatersports.webp'
import marchmotorslogo from '../img/marchmotors.webp'
import soundworldlogo from '../img/soundworld.webp'
import yuskoletlogo from '../img/yuskolet.webp'

export default function Brand () {
    return (
        <div class="container">
            <div class="block humanexperience">
                <h1>The Human Experience</h1>
            </div>

            <div class="block creatorjams">
                <h1>CreatorJams</h1>
            </div>

            <div class="block dynemedia">
                <h1>Dyne Media Group</h1>
            </div>

            <div class="block outfield">
                <h1>Outfield</h1>
            </div>

            <div class="logotitle">
                <h1>More Logos</h1>
            </div>

            <div class="grid">
                <div class="grid-left whitelogo">
                    <img src={dizziologo} alt="Dizzio AI" width="600"/>
                </div>

                <div class="grid-right whitelogo">
                    <img src={yuskoletlogo} alt="Yuskolet Films" width="600"/>
                </div>
            </div>

            <div class="block darklogo">
                <img src={soundworldlogo} alt="Sound World" width="1100"/>
            </div>

            <div class="grid">
                <div class="grid-left whitelogo">
                 <img src={marchmotorslogo} alt="March Motors" width="600"/>
                </div>

                <div class="grid-right whitelogo">
                    <img src={jwwatersportslogo} alt="JW Watersports" width="600"/>
                </div>
            </div>
            
        </div>
        
        
    )
}