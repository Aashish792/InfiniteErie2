// Top-down view for all chapters
const DEFAULT_PITCH = 0;      // 0 = straight top-down, increase to ~20 if you want slight angle
const DEFAULT_BEARING = 0;    // 0 = north-up

var config = {
    style: 'mapbox://styles/mapbox/standard-satellite',
    accessToken: 'pk.eyJ1IjoiYWFzaGlzaC1naXMiLCJhIjoiY21qMDZsNGEzMDV6eTNmb3JsbWllNXRoNCJ9.V0Ym93qMlADuEEByv581Lw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: '2026 Infinite Erie Playbook Priorities',
    subtitle: '',
    byline: 'By Aashish K C',
    footer: 'Source: Infinite Erie Playbook & Erie County <br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        /* ==========================
           1. AFFORDABLE HOUSING
        ========================== */
        {
            id: 'affordable-housing-schoolhouse',
            alignment: 'left',
            hidden: false,
            title: 'Affordable Housing · Schoolhouse Apartments at Washington Square',
            image: './images/School_house_apartment.jpg',
            description: `
<b>Sponsor:</b> Housing First Erie / BUILD CDC<br>
<b>Portfolio:</b> Neighborhoods and Main Streets<br>
<b>Total Project Cost:</b> $9,857,730<br>
<b>Status:</b> Securing Investment<br><br>

To address the increasingly complex needs around homelessness, Housing First Erie, with BUILD CDC as the lead developer, will develop permanent supportive housing for Erie County’s most vulnerable households experiencing homelessness. This will be achieved through a single-site Housing First building (22 units) and an Integrated Care Team of supportive service workers.<br><br>

<b>Projected Outcomes / Outputs:</b>
<ul>
<li>22 homeless residents permanently housed</li>
<li>22 units produced / repaired</li>
</ul>
`,
            location: {
                center: [-80.077345, 42.115256], // 148 W. 21st St., Erie, PA
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        /* ==========================
           2. WORLD-CLASS WATERFRONT
        ========================== */
        {
            id: 'waterfront-presque-isle-gateway',
            alignment: 'right',
            hidden: false,
            title: 'World-Class Waterfront · Presque Isle Gateway Redevelopment',
            image: './images/Presque_isle_gateway.png',
            description: `
<b>Sponsor:</b> Millcreek Township<br>
<b>Portfolio:</b> Neighborhoods and Main Streets<br>
<b>Total Project Cost:</b> $14,200,000<br>
<b>Status:</b> Project Development<br><br>

The Gateway to Presque Isle Plan recommends developing Millcreek’s West 8th Street as a mixed-use, Main Street corridor at the primary entryway to one of Pennsylvania’s most visited destinations. In alignment with the Investment Playbook, the Gateway Plan advances community-wide infrastructure and quality-of-life improvements, including increasing walkability, addressing accessibility, and promoting sustainability.<br><br>

<b>Projected Outcomes / Outputs:</b>
<ul>
<li>Cultivate mixed-use investment</li>
<li>Redevelop a deteriorating corridor</li>
<li>Develop commercial and residential sites</li>
<li>Strengthen identity and sense of community</li>
<li>Encourage investment in disinvested areas</li>
<li>Create a live / work / recreation environment</li>
<li>Promote the Erie Region as a destination</li>
</ul>
`,
            location: {
                center: [-80.1190, 42.1040], // W 8th corridor-ish
                zoom: 14.8,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'waterfront-erie-coke-remediation',
            alignment: 'left',
            hidden: false,
            title: 'World-Class Waterfront · Erie Coke Remediation',
            image: './images/erie_coke_remediation.png',
            description: `
<b>Sponsor:</b> TBD<br>
<b>Portfolio:</b> Waterfront & Brownfield Revitalization<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Early Planning / Concept Development<br><br>

Remediation of the former Erie Coke industrial site will restore a critical piece of the bayfront and prepare it for future community-centered redevelopment and public access.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Environmental cleanup of a legacy industrial site</li>
<li>Improved public health and environmental quality</li>
<li>Waterfront land prepared for future mixed-use or public space</li>
</ul>
`,
            location: {
                center: [-80.066689, 42.143157], // 925 E Bay Dr
                zoom: 16,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        /* ==========================
           3. ECONOMIC DEVELOPMENT
        ========================== */
        {
            id: 'economic-ironworks-square',
            alignment: 'right',
            hidden: false,
            title: 'Economic Development · Ironworks Square',
            image: './images/erie_coke_remediation.png',
            description: `
<b>Sponsor:</b> Erie County Redevelopment Authority<br>
<b>Portfolio:</b> Anchor Investments in the Greater Core<br>
<b>Total Project Cost:</b> $27,000,000<br>
<b>Status:</b> Finish Line Funding<br><br>

Ironworks Square encompasses the remediation and revitalization of a key 5-acre parcel at West 12th & Cherry Streets along Erie’s industrial corridor. Cleanup and demolition have occurred over the last two years; renovation of a 73,000 sq. ft. mixed-use building has now begun. The project honors Erie’s industrial past while creating a forward-looking technology park with multiple phases of development.<br><br>

<b>Projected Outcomes / Outputs:</b>
<ul>
<li>Renovation of a 73,000 sq. ft. mixed-use building</li>
<li>New commercial and light industrial space</li>
</ul>
`,
            location: {
                center: [-80.09098, 42.11818], // 601 W 12th
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'economic-catch',
            alignment: 'left',
            hidden: false,
            title: 'Economic Development · Corry Area Technology and Cyber Hub (CATCH)',
            image: './images/Corry.png',
            description: `
<b>Sponsor:</b> Corry Higher Education Council<br>
<b>Portfolio:</b> Innovation & Workforce Development<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Concept Development<br><br>

CATCH will position the Corry region as a technology and cyber innovation hub by combining education, entrepreneurship, and high-demand training in a shared facility.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Enhanced local access to technology and cyber training</li>
<li>Support for regional employers seeking IT and cyber talent</li>
</ul>
`,
            location: {
                center: [-79.64002, 41.92209], // 221 N Center St, Corry
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'economic-mckean-business-park',
            alignment: 'right',
            hidden: false,
            title: 'Economic Development · McKean Business Park',
            image: './images/erie_coke_remediation.png',
            description: `
<b>Sponsor:</b> Erie County Redevelopment Authority<br>
<b>Portfolio:</b> Industrial & Business Parks<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Planning / Site Readiness<br><br>

The McKean Business Park will provide modern, serviced sites for businesses seeking to expand or locate in Erie County, supporting long-term job growth and tax base expansion.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>New industrial and commercial development sites</li>
<li>Improved regional business attraction capacity</li>
</ul>
`,
            location: {
                center: [-80.1479, 41.9969], // Sterrettania Rd & I-90 approx
                zoom: 15,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        /* ==========================
           4. PLAYBOOK PORTFOLIO PROJECTS
        ========================== */
        {
            id: 'portfolio-grow-erie',
            alignment: 'left',
            hidden: false,
            title: 'Playbook Portfolio · Grow Erie: Urban Agriculture',
            image: './images/grow_erie.png',
            description: `
<b>Sponsor:</b> Minority Community Investment Coalition<br>
<b>Portfolio:</b> Industry Clusters & Infrastructure<br>
<b>Total Project Cost:</b> $4,698,011<br>
<b>Status:</b> Implementation<br><br>

Grow Erie is a sustainable urban agriculture development at Savocchio Opportunity Park bringing cutting-edge hydroponic and aquaponic growing. A partnership between MCIC, the Erie County Redevelopment Authority, and Integrated Agriculture Systems (in collaboration with C.A. Curtze Company), the project is designed as a sustainable social enterprise where commercial revenues expand services and opportunities for residents in need.<br><br>

<b>Projected Outcomes / Outputs:</b>
<ul>
<li>7–10 full-time equivalent jobs in the commercial greenhouse once complete</li>
</ul>
`,
            location: {
                center: [-80.03875, 42.1312], // 1945 Paragon Dr area
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-peninsula-drive-trail',
            alignment: 'right',
            hidden: false,
            title: 'Playbook Portfolio · Peninsula Drive Trail',
            image: './images/Presque_isle_gateway.png',
            description: `
<b>Sponsor:</b> Millcreek Township<br>
<b>Portfolio:</b> Mobility, Trails & Recreation<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Planning / Concept<br><br>

The Peninsula Drive Trail will enhance safe, multimodal access between neighborhoods and Presque Isle, expanding outdoor recreation and active transportation opportunities.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>New or improved multi-use trail segment</li>
<li>Improved pedestrian and cyclist safety</li>
</ul>
`,
            location: {
                center: [-80.1071, 42.1094], // Presque Isle State Park entrance area
                zoom: 14.8,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-cornerstone-clt',
            alignment: 'left',
            hidden: false,
            title: 'Playbook Portfolio · Cornerstone Community Land Trust',
            image: './images/cornerstone_trust.png',
            description: `
<b>Sponsor:</b> Erie County Land Bank<br>
<b>Portfolio:</b> Neighborhoods & Homeownership<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Program Development<br><br>

The Cornerstone Community Land Trust will support permanently affordable homeownership opportunities and stabilize neighborhoods by acquiring, rehabbing, and stewarding key properties for long-term community benefit.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Creation of permanently affordable homes</li>
<li>Strategic reuse of vacant and underutilized properties</li>
</ul>
`,
            location: {
                center: [-80.0556, 42.1293], // approx parade/buffalo
                zoom: 15.5,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-mcheds',
            alignment: 'right',
            hidden: false,
            title: 'Playbook Portfolio · Multi-Cultural Health Evaluation Delivery System',
            image: './images/multi_culture_health.jpg',
            description: `
<b>Sponsor:</b> East Side Renaissance<br>
<b>Portfolio:</b> Health, Equity & Community Services<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Concept / Early Design<br><br>

The Multi-Cultural Health Evaluation Delivery System will expand access to culturally informed health assessment, navigation, and support services for residents on Erie’s East Side.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Improved connections between residents and health services</li>
<li>Expanded preventive and community-based care</li>
</ul>
`,
            location: {
                center: [-80.0636, 42.1323], // 908-912 Parade
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-neptwne',
            alignment: 'left',
            hidden: false,
            title: 'Playbook Portfolio · Project NePTWNE',
            image: './images/project_neptwne.png',
            description: `
<b>Sponsor:</b> Gannon University<br>
<b>Portfolio:</b> Innovation, Education & Talent<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Program Development<br><br>

Project NePTWNE will leverage Gannon University’s academic and research capacity to advance technology, water, and environmental innovation benefiting the region.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Expanded research and innovation partnerships</li>
<li>New experiential learning and student talent pipelines</li>
</ul>
`,
            location: {
                center: [-80.0865, 42.1298], // Gannon
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-flagship-commons',
            alignment: 'right',
            hidden: false,
            title: 'Playbook Portfolio · Flagship Commons',
            image: './images/flagship_commons.jpg',
            description: `
<b>Sponsor:</b> Erie Downtown Development Corporation<br>
<b>Portfolio:</b> Downtown Revitalization<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Implementation / Leasing<br><br>

Flagship Commons will deliver activated mixed-use space in downtown Erie, expanding opportunities for local businesses, dining, and gathering in the urban core.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>New activated retail and food hall space</li>
<li>Increased downtown foot traffic and activity</li>
</ul>
`,
            location: {
                center: [-80.0887, 42.1293],
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-mercantile-building',
            alignment: 'left',
            hidden: false,
            title: 'Playbook Portfolio · Mercantile Building Renovations',
            image: './images/mercantile_Building.jpg',
            description: `
<b>Sponsor:</b> Federal Resources Corporation<br>
<b>Portfolio:</b> Reuse of Historic & Signature Assets<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Renovation Planning<br><br>

Renovation of the Mercantile Building will return a signature downtown property to productive use, supporting office, commercial, or innovation-focused tenants.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Reactivated historic commercial space</li>
<li>New or retained jobs in the urban core</li>
</ul>
`,
            location: {
                center: [-80.0890, 42.1280],
                zoom: 17,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'portfolio-east-lakeview-business-park',
            alignment: 'right',
            hidden: false,
            title: 'Playbook Portfolio · East Lakeview Business Park',
            image: './images/erie_coke_remediation.png',
            description: `
<b>Sponsor:</b> Erie County Redevelopment Authority<br>
<b>Portfolio:</b> Industrial & Business Parks<br>
<b>Total Project Cost:</b> TBD<br>
<b>Status:</b> Site Development<br><br>

East Lakeview Business Park will open new industrial and logistics sites on Erie County’s east side, supporting modern business needs and regional job creation.<br><br>

<b>Projected Outcomes / Outputs (Conceptual):</b>
<ul>
<li>Pad-ready sites for industrial and logistics users</li>
<li>Improved access to employment opportunities</li>
</ul>
`,
            location: {
                center: [-79.9856, 42.1602],
                zoom: 15.2,
                pitch: DEFAULT_PITCH,
                bearing: DEFAULT_BEARING
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
