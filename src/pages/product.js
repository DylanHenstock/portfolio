import creatorjamslogo from '../img/creatorjams.svg'
import outfieldlogo from '../img/outfield.svg'
import outfield_app_goals from '../img/outfield_app_goals.png'
import outfield_app_ideation from '../img/outfield_app_ideation.png'
import outfield_app_overview from '../img/outfield_app_overview.png'
import outfield_app_role from '../img/outfield_app_role.png'

export default function Product () {
    return (
        <div class="container">

        {/* Outfield */}

            <div class="block outfield">
                <img src={outfieldlogo} alt="Outfield Logo"/>
                <h1>Outfield</h1>
                <p class="subtitle">An Agritech Start up that uses <strong>Drones</strong> and <strong>AI</strong>
                <br />to maximise profits on Apple Farms</p>
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

            {/* Block - Overview */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Overview 🏠</h2>
                        <p>
                        When I joined the company, farm maps and reports were delivered via email. The goal was to create an MVP for a Web App that allowed users to manage their farms and view maps & reports
                        <br />
                        <br />
                        The company hired me & a full stack developer in order to take on this project
                        </p>
                    </div>
                </div>
                <div class="grid-img outfield">
                    <img src={outfield_app_overview} alt=""/>
                </div>
            </div>

            {/* Block - My Role */}
            
            <div class="grid">
                <div class="grid-img outfield">
                    <img src={outfield_app_role} alt=""/>
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>My Role 💼</h2>
                        <p>
                        I lead the design and testing of this project from end to end
                        <br />
                        <br />
                        I collaborated with the Company Director during the earlier ideation stage and the Full Stack Developer throughout the entire project
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Problem */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Problem 🚩</h2>
                        <h3>Product Delivery</h3>
                        <p>
                        Deliverables were shared with customers through email and texts
                        <br />
                        <br />
                        With the customer base growing, we needed to come up with a more scalable solution that could automate map & report delivery so that the operations team could have more time for R&D
                        </p>
                        <h3>Customer Skillset</h3>
                        <p>
                        The average Apple Farmer in the UK is 56 years old and the company directors were not convinced that they would take the transition from PDF to Web App well
                        <br />
                        <br />
                        Farmers also mostly managed their orchards in Spreadsheets and we needed to find a way to make our app more user friendly than the spreadsheets that they had grown so accustomed to
                        </p>
                        <h3>Automated Flight Plans</h3>
                        <p>
                        Our Operations team was creating farm & orchard maps through a heavy manual process requiring multiple third party software's
                        <br />
                        <br />
                        These maps informed our flight plans, which were also manually generated, and delivered via email to farmers
                        <br />
                        <br />
                        These were inefficient and not scalable
                        </p>
                    </div>
                </div>
                <div class="grid-img outfield">

                </div>
            </div>

            {/* Block - Goals */}

            <div class="grid">
                <div class="grid-img outfield">
                    <img src={outfield_app_goals} alt=""/>
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Goals ✅</h2>
                        <h3>Develop a PDF delivery MVP</h3>
                        <p>
                        Instead of forcing our less technical customers to switch over to an app. The goal of our MVP was to deliver the same PDF reports to ease the users through the transition
                        </p>
                        <h3>Quick and Easy Onboarding</h3>
                        <p>
                        We wanted the process of creating farms & orchards to be intuitive and simple, using a 5 step onboarding process and taking in only the information needed for our ML team
                        </p>
                        <h3>One click flight plan generation</h3>
                        <p>
                        We wanted to create a User interface where farmers could select an orchard and generate the flight plan they needed with a single click
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Ideation & Research */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Early Ideation & Reserach 🖍️</h2>
                        <p>
                        When beginning the project, we were still unsure of which device users would be using, and which features they cared about most.
                        <br />
                        <br />
                        I created some  rough wireframes that we could show users and get feedback on
                        <br />
                        <br />
                        Initial feedback was taken over text and in general conversation. We settled on making a desktop focused app that could be easily operated on a tablet while standing in an orchard
                        </p>
                    </div>
                </div>
                <div class="grid-img outfield">
                    <img src={outfield_app_ideation} alt=""/>
                </div>
            </div>

            {/* Block - High Fidelity Designs */}

            <div class="grid">
                <div class="grid-img outfield">
                
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>High Fidelity Designs 🎨</h2>
                        <p>
                        We had collected a ton of data on what features users wanted, and had decided on which features were a priority for the MVP
                        <br />
                        <br />
                        I created these designs in Figma, with a fully prototyped user flow for future testing
                        <br />
                        <br />
                        Once we had approval for the designs from the team and some feedback sessions with growers, we were ready to build!
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Development */}

             <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Development 👨‍💻</h2>
                        <h3>Teamwork</h3>
                        <p>
                        I worked closely with our Full Stack Dev throughout the development of the Web App, ensuring that his designs matched my wireframes and changing the designs where needed
                        </p>
                        <h3>Agile Development</h3>
                        <p>
                        Some of the tools that we wanted to build fell outside of our developer’s skillset and required changes in order for the MVP to be ready in time for the next growing season
                        </p>
                    </div>
                </div>
                <div class="grid-img outfield">
                
                </div>
            </div>

            {/* Block - Release & Improvements  */}

            <div class="grid">
                <div class="grid-img outfield">
                
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Release & Improvements 🚀</h2>
                        <p>
                        Once the MVP had been completed, we released it to our users and held many feedback sessions to get an idea of what they liked and didn’t like about it
                        <br />
                        <br />
                        Users asked for a Map View as apposed to our Table View, which we added as a later feature
                        <br />
                        <br />
                        The impact of this release was high. Customers were very happy with the usability and simplicity of the Web App, the amount of flights they did went up drastically and the delivery of our maps and reports became easier than ever
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Further Development */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Further Development ⏱️</h2>
                        <p>
                        This Web App never stopped growing, I ended up designing features for Automated Tractor Spraying, Drone Obstacle Avoidance and Detailed Upload Management
                        <br />
                        <br />
                        We are currently in the process of developing a companion mobile app allowing growers to utilize the phone’s GPS to expand functionality
                        <br />
                        <br />
                        I would love to share more on this, but I’ve signed an NDA 😉
                        </p>
                    </div>
                </div>
                <div class="grid-img outfield">
                
                </div>
            </div>

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

            {/* Block - Overview */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Overview 🏠</h2>
                        <p>
                        When I joined the company, farm maps and reports were delivered via email. The goal was to create an MVP for a Web App that allowed users to manage their farms and view maps & reports
                        <br />
                        <br />
                        The company hired me & a full stack developer in order to take on this project
                        </p>
                    </div>
                </div>
                <div class="grid-img creatorjams">

                </div>
            </div>

            {/* Block - My Role */}
            
            <div class="grid">
                <div class="grid-img creatorjams">

                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>My Role 💼</h2>
                        <p>
                        I lead the design and testing of this project from end to end
                        <br />
                        <br />
                        I collaborated with the Company Director during the earlier ideation stage and the Full Stack Developer throughout the entire project
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Problem */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Problem 🚩</h2>
                        <h3>Product Delivery</h3>
                        <p>
                        Deliverables were shared with customers through email and texts
                        <br />
                        <br />
                        With the customer base growing, we needed to come up with a more scalable solution that could automate map & report delivery so that the operations team could have more time for R&D
                        </p>
                        <h3>Customer Skillset</h3>
                        <p>
                        The average Apple Farmer in the UK is 56 years old and the company directors were not convinced that they would take the transition from PDF to Web App well
                        <br />
                        <br />
                        Farmers also mostly managed their orchards in Spreadsheets and we needed to find a way to make our app more user friendly than the spreadsheets that they had grown so accustomed to
                        </p>
                        <h3>Automated Flight Plans</h3>
                        <p>
                        Our Operations team was creating farm & orchard maps through a heavy manual process requiring multiple third party software's
                        <br />
                        <br />
                        These maps informed our flight plans, which were also manually generated, and delivered via email to farmers
                        <br />
                        <br />
                        These were inefficient and not scalable
                        </p>
                    </div>
                </div>
                <div class="grid-img creatorjams">

                </div>
            </div>

            {/* Block - Goals */}

            <div class="grid">
                <div class="grid-img creatorjams">

                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Goals ✅</h2>
                        <h3>Develop a PDF delivery MVP</h3>
                        <p>
                        Instead of forcing our less technical customers to switch over to an app. The goal of our MVP was to deliver the same PDF reports to ease the users through the transition
                        </p>
                        <h3>Quick and Easy Onboarding</h3>
                        <p>
                        We wanted the process of creating farms & orchards to be intuitive and simple, using a 5 step onboarding process and taking in only the information needed for our ML team
                        </p>
                        <h3>One click flight plan generation</h3>
                        <p>
                        We wanted to create a User interface where farmers could select an orchard and generate the flight plan they needed with a single click
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Ideation & Research */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Early Ideation & Reserach 🖍️</h2>
                        <p>
                        When beginning the project, we were still unsure of which device users would be using, and which features they cared about most.
                        <br />
                        <br />
                        I created some  rough wireframes that we could show users and get feedback on
                        <br />
                        <br />
                        Initial feedback was taken over text and in general conversation. We settled on making a desktop focused app that could be easily operated on a tablet while standing in an orchard
                        </p>
                    </div>
                </div>
                <div class="grid-img creatorjams">
                    
                </div>
            </div>

            {/* Block - High Fidelity Designs */}

            <div class="grid">
                <div class="grid-img creatorjams">
                
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>High Fidelity Designs 🎨</h2>
                        <p>
                        We had collected a ton of data on what features users wanted, and had decided on which features were a priority for the MVP
                        <br />
                        <br />
                        I created these designs in Figma, with a fully prototyped user flow for future testing
                        <br />
                        <br />
                        Once we had approval for the designs from the team and some feedback sessions with growers, we were ready to build!
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Development */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Development 👨‍💻</h2>
                        <h3>Teamwork</h3>
                        <p>
                        I worked closely with our Full Stack Dev throughout the development of the Web App, ensuring that his designs matched my wireframes and changing the designs where needed
                        </p>
                        <h3>Agile Development</h3>
                        <p>
                        Some of the tools that we wanted to build fell outside of our developer’s skillset and required changes in order for the MVP to be ready in time for the next growing season
                        </p>
                    </div>
                </div>
                <div class="grid-img creatorjams">
                
                </div>
            </div>

            {/* Block - Release & Improvements  */}

            <div class="grid">
                <div class="grid-img creatorjams">
                
                </div>
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Release & Improvements 🚀</h2>
                        <p>
                        Once the MVP had been completed, we released it to our users and held many feedback sessions to get an idea of what they liked and didn’t like about it
                        <br />
                        <br />
                        Users asked for a Map View as apposed to our Table View, which we added as a later feature
                        <br />
                        <br />
                        The impact of this release was high. Customers were very happy with the usability and simplicity of the Web App, the amount of flights they did went up drastically and the delivery of our maps and reports became easier than ever
                        </p>
                    </div>
                </div>
            </div>

            {/* Block - Further Development */}

            <div class="grid">
                <div class="grid-white">
                    <div class="paragraph">
                        <h2>Further Development ⏱️</h2>
                        <p>
                        This Web App never stopped growing, I ended up designing features for Automated Tractor Spraying, Drone Obstacle Avoidance and Detailed Upload Management
                        <br />
                        <br />
                        We are currently in the process of developing a companion mobile app allowing growers to utilize the phone’s GPS to expand functionality
                        <br />
                        <br />
                        I would love to share more on this, but I’ve signed an NDA 😉
                        </p>
                    </div>
                </div>
                <div class="grid-img creatorjams">
                
                </div>
            </div>


        </div>
    )
}