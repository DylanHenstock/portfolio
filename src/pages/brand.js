import dizziologo from '../img/dizzio.svg'
import jwwatersportslogo from '../img/jwwatersports.webp'
import marchmotorslogo from '../img/marchmotors.webp'
import soundworldlogo from '../img/soundworld.webp'
import yuskoletlogo from '../img/yuskolet.webp'
import creatorjamslogo from '../img/creatorjams.svg'
import outfieldlogo from '../img/outfield.svg'

export default function Brand () {
    return (
        <div class="container">
            <div class="block humanexperience">
                <h1>The Human Experience</h1>
                <p class="subtitle">A mindfulness podcast highlighting the importance of
                <br /> self confidence in teens</p>

                <img src={creatorjamslogo} width="200px" alt="The Human Experience"/>

                <p class="footnote">
                    In this personal project, I created everything, from name & logo to album arts, product images and the digital products themselves
                </p>
            </div>

            <div class="block creatorjams">
                <h1>CreatorJams</h1>
                <p class="subtitle">An online store selling Music, Sound Effects & 
                <br />Visual Presets to Content Creators</p>

                <img src={creatorjamslogo} width="200px"  alt="CreatorJams"/>

                <p class="footnote">
                    In this personal project, I created everything, from name & logo to album arts, product images and the digital products themselves
                </p>
            </div>

            <div class="block dynemedia">
                <h1>Dyne Media Group</h1>
                <p class="subtitle">3 Child Companies</p>

                <img src={creatorjamslogo} width="200px"  alt="Dyne Media"/>
                
                <p class="footnote">
                    In this personal project, I created everything, from name & logo to album arts, product images and the digital products themselves
                </p>
            </div>

            <div class="block outfield">
                <h1>Outfield</h1>
                <p class="subtitle">An Agritech Start up that uses <strong>Drones</strong> and <strong>AI</strong>
                <br />to maximise profits on Apple Farms</p>

                <img src={outfieldlogo} width="200px"  alt="Outfield Technologies"/>
                
                <p class="footnote">
                    In this personal project, I created everything, from name & logo to album arts, product images and the digital products themselves
                </p>
            </div>

            <div class="logotitle">
                <h1>More Logos</h1>
            </div>

            <div class="grid">
                <div class="grid-white whitelogo">
                    <img src={dizziologo} alt="Dizzio AI" width="80%"/>
                </div>

                <div class="grid-white whitelogo">
                    <img src={yuskoletlogo} alt="Yuskolet Films" width="80%"/>
                </div>
            </div>

            <div class="block darklogo">
                <img src={soundworldlogo} alt="Sound World" width="70%"/>
            </div>

            <div class="grid">
                <div class="grid-white whitelogo">
                 <img src={marchmotorslogo} alt="March Motors" width="80%"/>
                </div>

                <div class="grid-white whitelogo">
                    <img src={jwwatersportslogo} alt="JW Watersports" width="80%"/>
                </div>
            </div>
            
        </div>
        
        
    )
}