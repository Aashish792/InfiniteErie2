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
    byline: '',
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
            // 148 W 21st St, Erie, PA 16502
            location: {
                center: [-80.101412, 42.110658],
                zoom: 12,      // tighter on the building
                pitch: 55,
                bearing: 15
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

The Gateway to Presque Isle Plan recommends developing Millcreek’s West 6th, 8th, and 12th Streets and Peninsula Drive as a mixed-use, Main Street corridor at the primary entryway to one of Pennsylvania’s most visited destinations. In alignment with the Investment Playbook, the Gateway Plan advances community-wide infrastructure and quality-of-life improvements, including increasing walkability, addressing accessibility, and promoting sustainability.<br><br>

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
            // Approximate center of corridor near W 8th & Peninsula
            location: {
                center: [-80.1500, 42.1060],
                zoom: 13.5,   // wider corridor view
                pitch: 60,
                bearing: -25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            // 925 E Bay Dr, Erie, PA 16507
            location: {
                center: [-80.06924, 42.14562],
                zoom: 17,
                pitch: 55,
                bearing: 5
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
            // 601 W 12th St, Erie, PA 16501
            location: {
                center: [-80.09509, 42.11842],
                zoom: 17.3,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            // 221 N Center St, Corry, PA 16407
            location: {
                center: [-79.641745, 41.924160],
                zoom: 16.2,
                pitch: 50,
                bearing: 0
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
            // Approximate center near I-90 & Sterrettania Rd
            location: {
                center: [-80.2140, 42.0300],
                zoom: 14.2,
                pitch: 50,
                bearing: -15
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
            // Savocchio Opportunity Park – approx.
            location: {
                center: [-80.0386, 42.1322],
                zoom: 16.3,
                pitch: 55,
                bearing: 10
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
            // Presque Isle State Park entrance
            location: {
                center: [-80.1537, 42.1093],
                zoom: 13.8,
                pitch: 55,
                bearing: -20
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
            // Approximate central Erie neighborhood
            location: {
                center: [-80.0800, 42.1180],
                zoom: 15,
                pitch: 45,
                bearing: 10
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
            // 908–912 Parade St, Erie, PA 16503
            location: {
                center: [-80.07485, 42.129306],
                zoom: 17,
                pitch: 55,
                bearing: 5
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
            // Gannon University
            location: {
                center: [-80.0865, 42.1298],
                zoom: 17.2,
                pitch: 55,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            // Downtown Erie
            location: {
                center: [-80.0870, 42.1295],
                zoom: 17,
                pitch: 50,
                bearing: -5
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
            image: './images/mercantile_Building.png',
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
                pitch: 50,
                bearing: 15
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
            // Approximate eastside industrial area
            location: {
                center: [-79.9800, 42.1600],
                zoom: 14.5,
                pitch: 45,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
