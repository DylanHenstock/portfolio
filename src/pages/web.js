import creatorjamslogo from '../img/creatorjams.svg'
import outfieldlogo from '../img/outfield.svg'

export default function Web () {
    return (
        <div class="container">

            {/* CreatorJams */}

            <div class="block creatorjams">
                <img src={creatorjamslogo} alt="CreatorJams Logo"/>
                <h1>CreatorJams</h1>
                <p class="subtitle">An online store selling Music, Sound Effects & 
                <br />Visual Presets to Content Creators</p>
                <div class="rolesgrid">
                    <div class="grid-1">
                        <h3>Role</h3>
                        <p>UI/UX Desinger & <br /> Wordpress Developer</p>
                    </div>
                    <div class="grid-2">
                        <h3>Tools</h3>
                        <p>Figma, Wordpress, HTML, CSS</p>
                    </div>
                    <div class="grid-3">
                        <h3>Scope</h3>
                        <p>April 2021 - Present<br />Personal Project</p>
                    </div>
                    <div class="grid-4">
                        <h3>What I did</h3>
                        <p>Competitor Analysis, User Research<br />Mobile & Desktop Designs</p>
                    </div>

                </div>
            </div>

            <div class="grid">
                <div class="grid-left">
                    <h2>Overview 🏠</h2>
                </div>

                <div class="grid-right creatorjams">
                    <h2>Image</h2>
                </div>
            </div>

           {/* Outfield */}

           <div class="block outfield">
                 <img src={outfieldlogo} alt="Outfield Logo"/>
                <h1>Outfield</h1>
                <p class="subtitle">An Agritech Start up that uses <strong>Drones</strong> and <strong>AI</strong>
                <br />to maximise profits on Apple Farms</p>
            </div>

            <div class="grid">
                <div class="grid-left">
                    <h2>Overview 🏠</h2>
                </div>

                <div class="grid-right outfield">
                    <h2>Image</h2>
                </div>
            </div>

        
        </div>
    )
}