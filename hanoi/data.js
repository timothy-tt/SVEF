/* SVEF Ha Noi 2026 — single-event dataset.
   Scraped from https://hanoi2026.svef.ch on 2026-09-06T16:31:41Z by scrape.py.
   Regenerate: python3 scrape.py && python3 mkdata.py <path>/data.js
   Do not hand-edit: every value below comes from the live site. */
window.HANOI2026 = {
 "meta": {
  "source": "https://hanoi2026.svef.ch",
  "scrapedAt": "2026-09-06T16:31:41Z",
  "generator": "imt/svef/hanoi2026/scrape.py + mkdata.py",
  "speakerPool": 104,
  "linkedSpeakers": 3
 },
 "event": {
  "code": "HANOI2026",
  "name": "Swiss–Viet Economic Forum 2026",
  "edition": "Ha Noi Edition",
  "title": "Swiss–Viet Economic Forum 2026, Ha Noi Edition",
  "tagline": "18 -20 Oct, 2026 | Ha Noi, Viet Nam",
  "city": "Ha Noi",
  "country": "Viet Nam",
  "venue": null,
  "timeZone": "Asia/Saigon",
  "start": "2026-10-19T00:00:00Z",
  "end": "2026-10-20T10:00:00Z",
  "displayDates": "19–20 Oct 2026",
  "displayDatesVi": "19–20/10/2026",
  "status": "UPCOMING",
  "heroImage": "https://static.wixstatic.com/media/167565_4afc59357a8c4f3bbcdd93183d4a9e67~mv2.png",
  "siteUrl": "https://hanoi2026.svef.ch",
  "eventUrl": "https://hanoi2026.svef.ch/events/swiss-viet-economic-forum-2026-ha-noi-edition-1",
  "registerUrl": "https://hanoi2026.svef.ch/events/swiss-viet-economic-forum-2026-ha-noi-edition-1/form",
  "contactEmail": "contact@svef.ch",
  "expectedDelegates": "200–250",
  "dayDates": {
   "1": "2026-10-18",
   "2": "2026-10-19",
   "3": "2026-10-20"
  }
 },
 "registration": {
  "type": "RSVP",
  "status": "OPEN_RSVP",
  "opens": "2026-08-17T12:59:16.999Z",
  "closes": "2026-10-18T10:00:00Z",
  "responseType": "YES_ONLY",
  "waitlist": false,
  "confirmation": {
   "title": "Thank you for your registration for SVEF Ha Noi 2026. ",
   "message": "Your registration has been well received and is currently under review. We will reach out to you with a confirmation email.\n\nContact us at: contact@svef.ch\n",
   "addToCalendarActionLabel": "Add to Calendar",
   "shareActionLabel": "Share"
  },
  "fields": [
   {
    "id": "firstName",
    "control": "NAME",
    "label": "First name",
    "type": "TEXT",
    "required": true,
    "maxLength": 50,
    "options": [],
    "system": true,
    "order": 0
   },
   {
    "id": "lastName",
    "control": "NAME",
    "label": "Last name",
    "type": "TEXT",
    "required": true,
    "maxLength": 50,
    "options": [],
    "system": true,
    "order": 0
   },
   {
    "id": "email",
    "control": "INPUT",
    "label": "Email Address",
    "type": "TEXT",
    "required": true,
    "maxLength": 255,
    "options": [],
    "system": true,
    "order": 1
   },
   {
    "id": "phone",
    "control": "INPUT",
    "label": "Phone Number: with country code, WhatsApp/Zalo if applicable",
    "type": "TEXT",
    "required": true,
    "maxLength": 25,
    "options": [],
    "system": false,
    "order": 2
   },
   {
    "id": "custom-0c7c78bc44fa7c24",
    "control": "INPUT",
    "label": "Country/Location of Organization",
    "type": "TEXT",
    "required": true,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 3
   },
   {
    "id": "custom-8a20b377644250d5",
    "control": "INPUT",
    "label": "Job Title",
    "type": "TEXT",
    "required": true,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 4
   },
   {
    "id": "custom-7d770b5ff1fd6858",
    "control": "INPUT",
    "label": "Organization / Company Name",
    "type": "TEXT",
    "required": true,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 5
   },
   {
    "id": "custom-9c7061d2b34c3815",
    "control": "CHECKBOX",
    "label": "Industry Sector",
    "type": "TEXT_ARRAY",
    "required": true,
    "maxLength": 0,
    "options": [
     "Consulting & Advisory Services",
     "Education & Training",
     "Finance & Banking",
     "Healthcare & Pharmaceuticals",
     "Logistics & Supply Chain Management",
     "Tourism & Hospitality",
     "Manufacturing & Industrial Engineering",
     "Renewable Energy & Sustainability",
     "Technology & Innovation",
     "Public Sector / Government",
     "Non-profit / Development Organisation",
     "Legal & Compliance Service",
     "Other"
    ],
    "system": false,
    "order": 6
   },
   {
    "id": "custom-83497ae05ef0e4a3",
    "control": "INPUT",
    "label": "Other - Industry (please specify below)",
    "type": "TEXT",
    "required": false,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 7
   },
   {
    "id": "custom-68d175931ae1ca96",
    "control": "TEXTAREA",
    "label": "If attending as a delegation, please provide each delegate’s name and job title",
    "type": "TEXT",
    "required": false,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 8
   },
   {
    "id": "custom-836a3e0a7bc655cc",
    "control": "RADIO",
    "label": "From 15:00 to 16:00 - Parallel Session Round 1 (please only select 1) ",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Session A: Mobility & Trade Connectivity",
     "Session B: Energy Transition & Green Finance",
     "Session C: Innovation - AI & Digital Economy"
    ],
    "system": false,
    "order": 9
   },
   {
    "id": "custom-144348401465aa62",
    "control": "RADIO",
    "label": "From 16:15 to 17:15 - Parallel Session Round 2 (please only select 1) ",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Session D: Pharma Market Access & Life Sciences",
     "Session E: Education Cooperation & Talent Development",
     "Session F: Legal Frameworks & Market Entry"
    ],
    "system": false,
    "order": 10
   },
   {
    "id": "custom-9c84cca83223f4ce",
    "control": "RADIO",
    "label": "Would you like to attend Day 3: Field Visits & Cultural Discovery (additional support fee is required) ",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Yes - Please send me more details",
     "No - I am not interested"
    ],
    "system": false,
    "order": 11
   },
   {
    "id": "custom",
    "control": "RADIO",
    "label": "SVEF Membership Status",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "SVEF Insititutional Member",
     "SVEF Individual Member",
     "I would like to receive more information about SVEF Membership",
     "I am not interested about SVEF Membership"
    ],
    "system": false,
    "order": 12
   },
   {
    "id": "custom-6ac18358bdf7c33a",
    "control": "RADIO",
    "label": "Are you interested in the optional Delegation Support Package (airport pickup, hotel, ground transport, exclusive excursion in Hai Phong, and curated B2B meetings)?",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Yes - Please send me further details",
     "No - I am not interested"
    ],
    "system": false,
    "order": 13
   },
   {
    "id": "custom-ab58d1a716518d6d",
    "control": "RADIO",
    "label": "Would you like to be featured in the SVEF 2026 Delegates Directory?",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Yes - Include my organisation/company name",
     "No - Please keep my details private"
    ],
    "system": false,
    "order": 14
   },
   {
    "id": "custom-fe37e7076e640452",
    "control": "RADIO",
    "label": "Would your organization be interested in becoming a sponsor of SVEF 2026?",
    "type": "TEXT",
    "required": true,
    "maxLength": 0,
    "options": [
     "Yes - Please send me more details",
     "No - Not at this time",
     "We are already a confirmed sponsor/partner"
    ],
    "system": false,
    "order": 15
   },
   {
    "id": "custom-9d70f2c27766bc8d",
    "control": "INPUT",
    "label": "Dietary requirements or special accessibility needs ",
    "type": "TEXT",
    "required": false,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 16
   },
   {
    "id": "custom-a964ca70f0106070",
    "control": "INPUT",
    "label": "Do you have any other requirements or questions? ",
    "type": "TEXT",
    "required": false,
    "maxLength": 400,
    "options": [],
    "system": false,
    "order": 17
   }
  ]
 },
 "days": [
  {
   "day": 1,
   "date": "2026-10-18",
   "title": "Opening Ceremony & VIP Reception",
   "meta": {
    "format": "Invitation only",
    "venue": "To be updated"
   },
   "intro": "",
   "options": [],
   "sessions": [
    {
     "id": "d1s1",
     "start": "18:30",
     "end": "20:00",
     "title": "VIP Reception Dinner - Swiss-Viet Partnership Night",
     "kind": "session",
     "detail": [
      "Formal welcome by SVEF leadership and the Embassy of Switzerland in Viet Nam",
      "Opening remarks by senior Swiss and Vietnamese government representatives",
      "Strategic alignment: cooperation priorities, ASEAN opportunities, and investment directions",
      "Preview of key Forum announcements and bilateral agenda for the days ahead"
     ],
     "tracks": []
    }
   ]
  },
  {
   "day": 2,
   "date": "2026-10-19",
   "title": "MAIN FORUM DAY",
   "meta": {
    "venue": "to be updated",
    "expected_participation": "200 - 250 delegates"
   },
   "intro": "The Main Forum Day brings together high-level government representatives, leading businesses, academic institutions, and multilateral actors to advance the next chapter of Swiss and Vietnamese cooperation. Program Highlights",
   "options": [],
   "sessions": [
    {
     "id": "d2s1",
     "start": "08:00",
     "end": "09:00",
     "title": "Registration & Exhibition",
     "kind": "session",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d2s2",
     "start": "09:00",
     "end": "10:00",
     "title": "Welcome & Programme Overview",
     "kind": "session",
     "detail": [
      "Opening Keynote: From Signature to Implementation - What the FTA Means for Businesses Today"
     ],
     "tracks": []
    },
    {
     "id": "d2s3",
     "start": "10:00",
     "end": "11:00",
     "title": "High Level Policy Dialogue \"Opening the Door: From FTA Developments to Market Opportunity\"",
     "kind": "session",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d2s4",
     "start": "12:00",
     "end": "12:45",
     "title": "Session I – Finance & Investment Ecosystems",
     "kind": "session",
     "detail": [
      "Capital Markets, Investment Flows & Financial Connectivity between Europe and ASEAN"
     ],
     "tracks": []
    },
    {
     "id": "d2s5",
     "start": "13:00",
     "end": "14:00",
     "title": "Business Lunch & Executive Networking",
     "kind": "session",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d2s6",
     "start": "14:00",
     "end": "15:00",
     "title": "Session II – Industrial Transformation & Supply Chains",
     "kind": "session",
     "detail": [
      "Building Smart Manufacturing, Resilient Supply Chains and Sustainable Industrial Partnerships in the Post-FTA Era"
     ],
     "tracks": []
    },
    {
     "id": "d2s7",
     "start": "15:00",
     "end": "16:00",
     "title": "Parallel Sessions - Round 1",
     "kind": "session",
     "detail": [
      "Delegates are free to choose one session accordingly to their preferences"
     ],
     "tracks": [
      {
       "track": "A",
       "title": "Mobility & Trade Connectivity",
       "summary": "Advancing Smart Infrastructure, Logistics Corridors and Transport Connectivity for Regional Growth"
      },
      {
       "track": "B",
       "title": "Energy Transition & Green Finance",
       "summary": "Accelerating the Net-Zero Transition through Clean Energy, Sustainable Finance and Climate Innovation"
      },
      {
       "track": "C",
       "title": "Innovation, AI & Digital Economy",
       "summary": "From Research to Market: Commercialising AI, Deep-Tech and Emerging Technologies"
      }
     ]
    },
    {
     "id": "d2s8",
     "start": "16:00",
     "end": "16:15",
     "title": "Coffee Break",
     "kind": "session",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d2s9",
     "start": "16:15",
     "end": "17:15",
     "title": "Parallel Sessions - Round 2",
     "kind": "session",
     "detail": [
      "Delegates are free to choose one session accordingly to their preferences"
     ],
     "tracks": [
      {
       "track": "D",
       "title": "Shaping Future Healthcare",
       "summary": "Improving Market Access, Innovation and Regulatory Excellence for a Sustainable Healthcare Ecosystem"
      },
      {
       "track": "E",
       "title": "Education Cooperation & Talent Development",
       "summary": "Building the Next Generation Workforce through Education, Research and Industry Partnerships"
      },
      {
       "track": "F",
       "title": "Legal Framework & Market Entry",
       "summary": "Navigating Market Entry, Investment Structures and Legal Frameworks in the Post-FTA Era"
      }
     ]
    },
    {
     "id": "d2s10",
     "start": "17:15",
     "end": "18:30",
     "title": "Closing Plenary: From Dialogue to Action",
     "kind": "session",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d2s11",
     "start": "19:00",
     "end": null,
     "title": "Gala Dinner (optional)",
     "kind": "session",
     "detail": [],
     "tracks": []
    }
   ]
  },
  {
   "day": 3,
   "date": "2026-10-20",
   "title": "Hải Phòng Field Visit",
   "meta": {},
   "intro": "Port City, Industry & the French Heritage Coast Day 3 is an optional curated day combining on-the-ground industrial visits, meetings with provincial authorities, and cultural discovery. Two destination options are available — delegates choose one. Pre-registration and small contribution required for non-SVEF members/partners/sponsors.",
   "options": [],
   "sessions": [
    {
     "id": "d3s1",
     "start": "07:00",
     "end": null,
     "title": "Depart Ha Noi by private coach",
     "kind": "transfer",
     "detail": [
      "90 min via Hanoi–Haiphong Expressway",
      "Briefing on board"
     ],
     "tracks": []
    },
    {
     "id": "d3s2",
     "start": "09:30",
     "end": null,
     "title": "Dinh Vũ – Cát Hải Economic Zone & Lạch Huyện Port",
     "kind": "business",
     "detail": [
      "Site visit",
      "Briefing by Hải Phòng Economic Zone Authority",
      "Post-FTA investment and logistics discussion"
     ],
     "tracks": []
    },
    {
     "id": "d3s3",
     "start": "11:30",
     "end": null,
     "title": "Meeting with Hải Phòng Provincial Authorities",
     "kind": "business",
     "detail": [
      "B2G dialogue",
      "Industrial and logistics development strategy",
      "Post-FTA investment pipeline",
      "KBC industrial park briefing"
     ],
     "tracks": []
    },
    {
     "id": "d3s4",
     "start": "13:00",
     "end": null,
     "title": "Lunch at KBC",
     "kind": "culture",
     "detail": [],
     "tracks": []
    },
    {
     "id": "d3s5",
     "start": "14:30",
     "end": null,
     "title": "Optional: Đồ Sơn Peninsula or Hải Phòng Old Quarter",
     "kind": "culture",
     "detail": [
      "Cultural programme for delegates extending their stay"
     ],
     "tracks": []
    },
    {
     "id": "d3s6",
     "start": "15:30",
     "end": null,
     "title": "Return to Ha Noi",
     "kind": "transfer",
     "detail": [
      "Arrival approx. 17:00"
     ],
     "tracks": []
    },
    {
     "id": "d3s7",
     "start": "19:00",
     "end": null,
     "title": "Optional group dinner — Ha Noi Old Quarter",
     "kind": "culture",
     "detail": [
      "SVEF closing dinner",
      "Bilateral conversations and farewell"
     ],
     "tracks": []
    }
   ]
  }
 ],
 "speakers": [
  {
   "id": "8b2bc0ea-964c-4151-b948-f12eb66dc190",
   "name": "H.E. Amb. Thomas Gass",
   "role": "Ambassador of Switzerland to Viet Nam",
   "org": "",
   "titleFull": "Ambassador of Switzerland to Viet Nam",
   "photo": "https://static.wixstatic.com/media/ce11ae_c11b8c095fd343b4a75c3417a379792f~mv2.jpg",
   "bio": "Thomas Gass is Ambassador of Switzerland to Viet Nam, where he arrived in January 2023. Before this appointment, Ambassador Gass was organizer and Special Envoy to the High Level Conference on Development Effectiveness (2022) and Co-Chair of the Global Partnership for Effective Development Cooperation (GPEDC). From 2018 to 2022 he served as Assistant Director General of the Swiss Agency for Development and Cooperation (SDC), and from 2013-2017, as Assistant Secretary General at the UN Department for Economic and Social Affairs in New York. From 2009 to 2013, he was Ambassador of Switzerland to Nepal.",
   "slug": "ambassador-thomas-gass",
   "url": "https://hanoi2026.svef.ch/speakers/ambassador-thomas-gass",
   "keynote": true
  },
  {
   "id": "93144bbf-73fb-4c65-959a-2088c448c6e6",
   "name": "Dr. Philipp Rösler",
   "role": "Honorary Consul of Viet Nam in Switzerland",
   "org": "President of the Swiss - Viet Economic Forum (SVEF)",
   "titleFull": "Honorary Consul of Viet Nam in Switzerland · President of the Swiss - Viet Economic Forum (SVEF)",
   "photo": "https://static.wixstatic.com/media/d028f2_ec5c76ffcde3429682e583bf85b143c7~mv2.jpg",
   "bio": "Dr. Philipp Rösler served as federal minister of health from 2009 to 2011 and federal minister of economics and technology as well as vice-chancellor of Germany from 2011 to 2013. Born in Vietnam, Dr. Philipp Rösler was the first cabinet minister and vice-chancellor of Asian background in Germany. Before entering politics, he was a cardiothoracic surgeon.",
   "slug": "dr-philipp-rosler",
   "url": "https://hanoi2026.svef.ch/speakers/dr-philipp-rosler",
   "keynote": true
  },
  {
   "id": "255d999f-fcbe-4aec-8599-97714e5a297f",
   "name": "Ivo Sieber",
   "role": "Former Ambassador of Switzerland to Viet Nam",
   "org": "Vice - President of the Swiss-Viet Economic Forum (SVEF)",
   "titleFull": "Former Ambassador of Switzerland to Viet Nam · Vice - President of the Swiss-Viet Economic Forum (SVEF)",
   "photo": "https://static.wixstatic.com/media/ce11ae_c97b41b61f8745cab866e7f75cc1f76e~mv2.jpg",
   "bio": "Ivo Sieber, a law graduate from the University of Zurich and holder of a Master of Laws from the University of Sydney, began his diplomatic career in 1988 with the Swiss Federal Department of Foreign Affairs. Sieber's ambassadorial roles commenced in 2010 in Manila, covering multiple Pacific nations. His significant postings include serving in Zimbabwe, New York, Bangkok, and London. In 2015, he became Ambassador to Thailand, Laos, and Cambodia, and from 2019 to 2022, he served as the Ambassador to Vietnam",
   "slug": "ivo-sieber",
   "url": "https://hanoi2026.svef.ch/speakers/ivo-sieber",
   "keynote": true
  }
 ],
 "info": {},
 "overview": {
  "vision": "The Swiss–Viet Economic Forum 2026 Ha Noi Edition marks the opening of a new era in bilateral relations. Taking place against the backdrop of the EFTA–Viet Nam Free Trade Agreement, this edition transforms five years of Forum dialogue into a concrete programme for action, connecting Swiss and Vietnamese governments, businesses, financial institutions, and academic partners to build the shared work for the next decade.",
  "diagram": {
   "image": "https://static.wixstatic.com/media/167565_020c9b34d4384acc817662f7870c7918~mv2.png/v1/fill/w_900,h_340,al_c,q_85,enc_auto/167565_020c9b34d4384acc817662f7870c7918~mv2.png",
   "full": "https://static.wixstatic.com/media/167565_020c9b34d4384acc817662f7870c7918~mv2.png"
  },
  "expect": [
   {
    "title": "High-Level Policies Dialogue",
    "text": "Opening plenary on trade, FTA implementation, and the bilateral economic agenda."
   },
   {
    "title": "Networking & B2B Matching",
    "text": "Structured bilateral meetings connecting Swiss and Vietnamese businesses, banks, and institutions for concrete partnerships."
   },
   {
    "title": "Strategic Breakout Sessions",
    "text": "Two rounds of three parallel sessions across: Infrastructure, Energy, Innovation, Healthcare, Education, and Legal & Market Entry. Each session co-led by a Swiss and Vietnamese company."
   },
   {
    "title": "Exclusive Field Visits (Day 3)",
    "text": "Destinations: Curated visits to industrial parks & cultural sites in Hai Phong / Bac Ninh."
   }
  ],
  "objectives": [
   {
    "kicker": "TRADE & INVESTMENT",
    "title": "The FTA Era Opens",
    "points": [
     "Activate the EFTA–Viet Nam Free Trade Agreement through concrete market entry commitments",
     "Connect Swiss and Vietnamese financial institutions for sustainable capital flows and investment"
    ]
   },
   {
    "kicker": "TALENT & PARTNERSHIP",
    "title": "Smart Growth, Connected Economies",
    "points": [
     "Advance industrial transformation, Industry 4.0, and supply chain collaboration between Swiss and Vietnamese partners",
     "Promote AI governance, digital trust, and cross-border innovation ecosystems"
    ]
   },
   {
    "kicker": "SHAPING Decade",
    "title": "Building the Next Decade",
    "points": [
     "Launch the SVEF Education & Talent Initiative and the Diplomatic Academy Viet Nam internship programme",
     "Convert Forum dialogue into the SVEF 2026–2030 Cooperation Roadmap with named task forces and milestones"
    ]
   }
  ],
  "pillars": [
   {
    "title": "Finance & Capital Markets",
    "text": "Cross-border investment flows, capital market development, Viet Nam’s path to Emerging Market status, and Swiss financial centre expertise."
   },
   {
    "title": "Industrial Transformation & Supply Chains",
    "text": "Smart manufacturing, Industry 4.0, post-FTA supply chain opportunities, and Swiss–Vietnamese industrial technology collaboration."
   },
   {
    "title": "Infrastructure & Urban Development",
    "text": "Smart cities, transport and logistics, industrial park ecosystems, and Swiss PPP expertise for Vietnamese infrastructure development."
   },
   {
    "title": "Energy & Sustainability",
    "text": "Renewable energy, climate finance, ESG frameworks, and Swiss cleantech solutions for Viet Nam’s net-zero transition."
   },
   {
    "title": "Innovation, AI & Digital Economy",
    "text": "AI governance, digital infrastructure, FinTech, startup ecosystems, and cross-border digital collaboration."
   },
   {
    "title": "Healthcare & Life Sciences",
    "text": "Swiss med-tech and life sciences for emerging markets, digital health, hospital systems, and the Swiss–Vietnamese healthcare corridor."
   },
   {
    "title": "Education, Talent & Human Capital",
    "text": "Swiss dual education model, talent mobility, university and research partnerships."
   },
   {
    "title": "Legal Frameworks, Market Entry & Value Chains",
    "text": "Post-FTA market entry pathways, legal structures, IP protection, trade compliance, and cross-border dispute resolution."
   }
  ],
  "venue": "Nestled in the heart of Hanoi, a capital steeped in a millennium of heritage and timeless culture, our chosen venue provides an inspiring backdrop for fostering Swiss-Vietnamese ties. Deeply woven into the fabric of the city's cultural and dynamic life, it offers an ideal setting for dialogue, collaboration, and the exchange of ideas crucial to the Forum's success.",
  "organisers": [
   {
    "logo": "https://static.wixstatic.com/media/bcea30_833feb0f9bd94c0d881d911c54ea0db7~mv2.png",
    "name": ""
   },
   {
    "logo": "https://static.wixstatic.com/media/d028f2_88b951bed6d9453e967bea85a9a25c1a~mv2.jpeg",
    "name": "Swiss Embassy"
   }
  ],
  "contact": {
   "offices": [
    {
     "name": "Switzerland Office",
     "address": "Trust Square, Rennweg 57, Zurich-8001, Switzerland"
    },
    {
     "name": "VietNam Office",
     "address": "Vian Tower, 26 Street 40, Thao Dien Ward Thu Duc, Ho Chi Minh City, Vietnam"
    }
   ],
   "phone": "+41 76 592 88 56",
   "email": "contact@svef.ch"
  },
  "social": []
 },
 "press": [
  {
   "outlet": "Viet Nam Agency News Television",
   "headline": "Interview with Ambassador Markus Schlagenhof (SECO) and Dr. Philipp Roesler",
   "image": "https://static.wixstatic.com/media/bcea30_814dedb07b824a02bbb930d22c20f5fc~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_814dedb07b824a02bbb930d22c20f5fc~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/bcea30_814dedb07b824a02bbb930d22c20f5fc~mv2.jpg"
  },
  {
   "outlet": "Voice of Viet Nam",
   "headline": "Ample room for Viet Nam – Switzerland economic cooperation (English language)",
   "image": "https://static.wixstatic.com/media/1500af_d7587e584705485bb95ba9441eeec4f5~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_d7587e584705485bb95ba9441eeec4f5~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_d7587e584705485bb95ba9441eeec4f5~mv2.jpg"
  },
  {
   "outlet": "VTV News",
   "headline": "Viet Nam remains stable destination for investors: Swiss fund (English language)",
   "image": "https://static.wixstatic.com/media/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg"
  },
  {
   "outlet": "Newspapers online",
   "headline": "The potential economic cooperation between Viet Nam and Switzerland (Vietnamese language)",
   "image": "https://static.wixstatic.com/media/1500af_ebfda1783d7341da83459ff14899de15~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_ebfda1783d7341da83459ff14899de15~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_ebfda1783d7341da83459ff14899de15~mv2.jpg"
  },
  {
   "outlet": "Vietcetera",
   "headline": "Strengthening Economic Bonds: Viet Nam-Switzerland Cooperation Conference",
   "image": "https://static.wixstatic.com/media/bcea30_b0fb65d640634ae98b3e7265a5ba86b6~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_b0fb65d640634ae98b3e7265a5ba86b6~mv2.jpg",
   "url": "https://doanhnghiepvn.vn/kinh-te/du-dia-hop-tac-kinh-te-viet-nam-thuy-sy-rat- lon/20230909053550722",
   "imageFull": "https://static.wixstatic.com/media/bcea30_b0fb65d640634ae98b3e7265a5ba86b6~mv2.jpg"
  },
  {
   "outlet": "Viet Nam +",
   "headline": "Viet Nam remains stable destination for investors: Swiss fund",
   "image": "https://static.wixstatic.com/media/bcea30_65b1095c01ff4a7eb758abbd3ffca0c8~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_65b1095c01ff4a7eb758abbd3ffca0c8~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/bcea30_65b1095c01ff4a7eb758abbd3ffca0c8~mv2.jpg"
  },
  {
   "outlet": "Kinh Te Do Thi",
   "headline": "Bellecapital: Việt Nam là điểm đến mang tới sự ổn định cho nhà đầu tư",
   "image": "https://static.wixstatic.com/media/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg"
  },
  {
   "outlet": "Saigon Investments News",
   "headline": "Việt Nam là điểm đến mang tới sự ổn định cho nhà đầu tư",
   "image": "https://static.wixstatic.com/media/ce11ae_a3f91b35fd2341e3bcb4d896d6e6f16e~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/ce11ae_a3f91b35fd2341e3bcb4d896d6e6f16e~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/ce11ae_a3f91b35fd2341e3bcb4d896d6e6f16e~mv2.jpg"
  },
  {
   "outlet": "Viet Nam Investment Review",
   "headline": "Viet Nam and Switzerland expect FTA horizon byyear - end (English language)",
   "image": "https://static.wixstatic.com/media/ce11ae_8538658267f54439960f0b9cf158de75~mv2.jpeg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/ce11ae_8538658267f54439960f0b9cf158de75~mv2.jpeg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/ce11ae_8538658267f54439960f0b9cf158de75~mv2.jpeg"
  },
  {
   "outlet": "Ho Chi Minh City’s Investment and Trade Promotion Center",
   "headline": "Viet Nam, Switzerland look to expand trade, investment cooperation (English language)",
   "image": "https://static.wixstatic.com/media/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg"
  },
  {
   "outlet": "Nhan dan (People) Newspapers",
   "headline": "",
   "image": "https://static.wixstatic.com/media/1500af_0ca40222406346ef8410d49fce980c21~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_0ca40222406346ef8410d49fce980c21~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_0ca40222406346ef8410d49fce980c21~mv2.jpg"
  },
  {
   "outlet": "Viet Nam Plus",
   "headline": "",
   "image": "https://static.wixstatic.com/media/bcea30_75913cb5522d47f89dd99a0565f66f68~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_75913cb5522d47f89dd99a0565f66f68~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/bcea30_75913cb5522d47f89dd99a0565f66f68~mv2.jpg"
  },
  {
   "outlet": "Viet Nam Net",
   "headline": "",
   "image": "https://static.wixstatic.com/media/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg"
  },
  {
   "outlet": "Vietnamese Enterprises Magazine",
   "headline": "Viet Nam - Switzerland Potential economic cooperation",
   "image": null,
   "url": null
  },
  {
   "outlet": "VTV 4",
   "headline": "Official national television channel for Vietnamese oversea",
   "image": "https://static.wixstatic.com/media/bcea30_46fbfba2a3e64c91852339bb4426fa88~mv2.jpeg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_46fbfba2a3e64c91852339bb4426fa88~mv2.jpeg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/bcea30_46fbfba2a3e64c91852339bb4426fa88~mv2.jpeg"
  },
  {
   "outlet": "Bnews : Business news",
   "headline": "Quỹ BelleCapital: Việt Nam là điểm đến ổn định cho các nhà đầu tư",
   "image": "https://static.wixstatic.com/media/bcea30_625a1c7fdf3842cab2781ab652dedf11~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/bcea30_625a1c7fdf3842cab2781ab652dedf11~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/bcea30_625a1c7fdf3842cab2781ab652dedf11~mv2.jpg"
  },
  {
   "outlet": "Dang Cong San",
   "headline": "Bellecapitale salue l’environnement d’investissement du Viet Nam",
   "image": "https://static.wixstatic.com/media/ce11ae_eb47728d1eb848a69d214e4e27c3a855~mv2.webp/v1/fill/w_560,h_380,al_c,q_85,enc_auto/ce11ae_eb47728d1eb848a69d214e4e27c3a855~mv2.webp",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/ce11ae_eb47728d1eb848a69d214e4e27c3a855~mv2.webp"
  },
  {
   "outlet": "Thanh Nien Newspapers",
   "headline": "Viet Nam - spotlight in Switzerland vision (Vietnamese language)",
   "image": "https://static.wixstatic.com/media/ce11ae_6c4ae842c8994704ae839a41c29426ea~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/ce11ae_6c4ae842c8994704ae839a41c29426ea~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/ce11ae_6c4ae842c8994704ae839a41c29426ea~mv2.jpg"
  },
  {
   "outlet": "The World and Viet Nam Report",
   "headline": "",
   "image": "https://static.wixstatic.com/media/ce11ae_434a6180c74c4b159ce8605c82a9f862~mv2.jpg/v1/fill/w_560,h_380,al_c,q_85,enc_auto/ce11ae_434a6180c74c4b159ce8605c82a9f862~mv2.jpg",
   "url": null,
   "imageFull": "https://static.wixstatic.com/media/ce11ae_434a6180c74c4b159ce8605c82a9f862~mv2.jpg"
  },
  {
   "outlet": "Viet Nam Integration",
   "headline": "Viet Nam - Switzerland conference on trade, investments and technology (Vietnamese language)",
   "image": null,
   "url": null
  }
 ],
 "photos": [
  {
   "image": "https://static.wixstatic.com/media/1500af_6fbc4d7f5c45419e8ee216fba92d5cf1~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_6fbc4d7f5c45419e8ee216fba92d5cf1~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_6fbc4d7f5c45419e8ee216fba92d5cf1~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_8dd3faa44c8b4507ba7e4bc2e2581b8b~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_8dd3faa44c8b4507ba7e4bc2e2581b8b~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_8dd3faa44c8b4507ba7e4bc2e2581b8b~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_eba37fbd78e44ea9b38fbb25081a5603~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_eba37fbd78e44ea9b38fbb25081a5603~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_eba37fbd78e44ea9b38fbb25081a5603~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_81cda1846bb64c7884a8a12765c9dd1e~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_81cda1846bb64c7884a8a12765c9dd1e~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_81cda1846bb64c7884a8a12765c9dd1e~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_59efe14e2d9b45c48321ff5cb42cd4ba~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_59efe14e2d9b45c48321ff5cb42cd4ba~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_59efe14e2d9b45c48321ff5cb42cd4ba~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_24f0d49e4cdc4d1d923a5a475a6f06d4~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_24f0d49e4cdc4d1d923a5a475a6f06d4~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_24f0d49e4cdc4d1d923a5a475a6f06d4~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_d3e40c0315844928823c7a242521bd70~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_d3e40c0315844928823c7a242521bd70~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_d3e40c0315844928823c7a242521bd70~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_b9ec3ff0d6c340b78560fef2b197e306~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_a7b105868cf24d1c9177b9b6cf2041b0~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_4a5ce24ffb4d45c69666d3d8174cd847~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_f053773323a04987b421e1891f61217e~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_f053773323a04987b421e1891f61217e~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_f053773323a04987b421e1891f61217e~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_447803d9f8744eb1b71942339e5ac203~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_447803d9f8744eb1b71942339e5ac203~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_447803d9f8744eb1b71942339e5ac203~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_fc58e956bd7a4bd0ac78fddc3741354e~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_699e79ac427341e6a93342a8b91e8b62~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_699e79ac427341e6a93342a8b91e8b62~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_699e79ac427341e6a93342a8b91e8b62~mv2.jpg",
   "alt": ""
  },
  {
   "image": "https://static.wixstatic.com/media/1500af_96ebc56a6d5e42cf96f1c424a7b046c1~mv2.jpg/v1/fill/w_640,h_460,al_c,q_85,enc_auto/1500af_96ebc56a6d5e42cf96f1c424a7b046c1~mv2.jpg",
   "full": "https://static.wixstatic.com/media/1500af_96ebc56a6d5e42cf96f1c424a7b046c1~mv2.jpg",
   "alt": ""
  }
 ],
 "social": [
  {
   "net": "facebook",
   "url": "https://www.facebook.com/profile.php?id=61554723364525"
  },
  {
   "net": "linkedin",
   "url": "https://www.linkedin.com/company/swiss-viet-economic-forum/"
  },
  {
   "net": "youtube",
   "url": "https://www.youtube.com/@SwissVietEconomicForum"
  }
 ],
 "links": {
  "link-events-1-code-2": "https://hanoi2026.svef.ch/events-speakers/hanoi2026",
  "link-events-3-code": "https://hanoi2026.svef.ch/events-visa/hanoi2026",
  "link-events-1-code-4": "https://hanoi2026.svef.ch/events-gallery/hanoi2026",
  "link-events-2-code-2": "https://hanoi2026.svef.ch/events-2/hanoi2026",
  "link-events-1-code": "https://hanoi2026.svef.ch/events-accomodation/hanoi2026",
  "link-events-2-code": "https://hanoi2026.svef.ch/events-transportation/hanoi2026",
  "link-events-1-code-3": "https://hanoi2026.svef.ch/events-gallery/hanoi2026"
 },
 "profileMap": {
  "firstName": "firstName",
  "lastName": "lastName",
  "email": "email",
  "phone": "phone",
  "country": "custom-0c7c78bc44fa7c24",
  "jobTitle": "custom-8a20b377644250d5",
  "org": "custom-7d770b5ff1fd6858",
  "sectors": "custom-9c7061d2b34c3815",
  "sectorOther": "custom-83497ae05ef0e4a3",
  "delegation": "custom-68d175931ae1ca96",
  "round1": "custom-836a3e0a7bc655cc",
  "round2": "custom-144348401465aa62",
  "day3": "custom-9c84cca83223f4ce",
  "membership": "custom",
  "support": "custom-6ac18358bdf7c33a",
  "directory": "custom-ab58d1a716518d6d",
  "sponsor": "custom-fe37e7076e640452",
  "dietary": "custom-9d70f2c27766bc8d",
  "questions": "custom-a964ca70f0106070"
 },
 "tracks": {
  "A": {
   "track": "A",
   "title": "Mobility & Trade Connectivity",
   "summary": "Advancing Smart Infrastructure, Logistics Corridors and Transport Connectivity for Regional Growth",
   "sessionId": "d2s7",
   "day": 2,
   "start": "15:00",
   "end": "16:00"
  },
  "B": {
   "track": "B",
   "title": "Energy Transition & Green Finance",
   "summary": "Accelerating the Net-Zero Transition through Clean Energy, Sustainable Finance and Climate Innovation",
   "sessionId": "d2s7",
   "day": 2,
   "start": "15:00",
   "end": "16:00"
  },
  "C": {
   "track": "C",
   "title": "Innovation, AI & Digital Economy",
   "summary": "From Research to Market: Commercialising AI, Deep-Tech and Emerging Technologies",
   "sessionId": "d2s7",
   "day": 2,
   "start": "15:00",
   "end": "16:00"
  },
  "D": {
   "track": "D",
   "title": "Shaping Future Healthcare",
   "summary": "Improving Market Access, Innovation and Regulatory Excellence for a Sustainable Healthcare Ecosystem",
   "sessionId": "d2s9",
   "day": 2,
   "start": "16:15",
   "end": "17:15"
  },
  "E": {
   "track": "E",
   "title": "Education Cooperation & Talent Development",
   "summary": "Building the Next Generation Workforce through Education, Research and Industry Partnerships",
   "sessionId": "d2s9",
   "day": 2,
   "start": "16:15",
   "end": "17:15"
  },
  "F": {
   "track": "F",
   "title": "Legal Framework & Market Entry",
   "summary": "Navigating Market Entry, Investment Structures and Legal Frameworks in the Post-FTA Era",
   "sessionId": "d2s9",
   "day": 2,
   "start": "16:15",
   "end": "17:15"
  }
 },
 "taxonomy": {
  "industries": {
   "fin": {
    "en": "Finance & Capital Markets",
    "vi": "Tài chính & Thị trường vốn"
   },
   "ind": {
    "en": "Industrial Transformation",
    "vi": "Chuyển đổi công nghiệp"
   },
   "inf": {
    "en": "Infrastructure & Urban",
    "vi": "Hạ tầng & Đô thị"
   },
   "eng": {
    "en": "Energy & Sustainability",
    "vi": "Năng lượng & Bền vững"
   },
   "tec": {
    "en": "Innovation, AI & Digital",
    "vi": "Đổi mới, AI & Số hoá"
   },
   "hea": {
    "en": "Healthcare & Life Sciences",
    "vi": "Y tế & Khoa học sự sống"
   },
   "edu": {
    "en": "Education & Talent",
    "vi": "Giáo dục & Nhân lực"
   },
   "leg": {
    "en": "Legal & Market Entry",
    "vi": "Pháp lý & Gia nhập thị trường"
   },
   "pub": {
    "en": "Public sector & Trade promotion",
    "vi": "Khu vực công & Xúc tiến"
   }
  },
  "markets": {
   "vn": {
    "en": "Viet Nam",
    "vi": "Việt Nam"
   },
   "ch": {
    "en": "Switzerland",
    "vi": "Thụy Sĩ"
   },
   "eu": {
    "en": "Europe",
    "vi": "Châu Âu"
   },
   "asean": {
    "en": "ASEAN",
    "vi": "ASEAN"
   }
  },
  "tiers": {
   "headline": {
    "en": "Headline sponsor",
    "vi": "Nhà tài trợ chính",
    "star": "★★★",
    "rank": 4
   },
   "sponsor": {
    "en": "Sponsor",
    "vi": "Nhà tài trợ",
    "star": "★★",
    "rank": 3
   },
   "inst": {
    "en": "Institutional member",
    "vi": "Thành viên tổ chức",
    "star": "★★",
    "rank": 3
   },
   "indiv": {
    "en": "Individual member",
    "vi": "Thành viên cá nhân",
    "star": "★",
    "rank": 2
   },
   "guest": {
    "en": "Guest",
    "vi": "Khách tham dự",
    "star": "",
    "rank": 1
   }
  }
 },
 "orgs": [
  {
   "id": "svef",
   "n": "Swiss-Viet Economic Forum",
   "i": "SV",
   "c": "#04723D",
   "type": "ngo",
   "tier": "headline",
   "hq": {
    "en": "Zurich and Ho Chi Minh City",
    "vi": "Zurich và TP. Hồ Chí Minh"
   },
   "ind": "pub",
   "size": "18",
   "real": true,
   "about": {
    "en": "The organiser of this forum, promoting economic ties between Switzerland and Viet Nam.",
    "vi": "Đơn vị tổ chức diễn đàn, thúc đẩy quan hệ kinh tế giữa Thụy Sĩ và Việt Nam."
   },
   "looking": {
    "en": "Members, sponsors and speakers for the Ha Noi edition",
    "vi": "Thành viên, nhà tài trợ và diễn giả cho kỳ Hà Nội"
   },
   "web": "https://svef.ch",
   "email": "contact@svef.ch",
   "tel": "+41 76 592 88 56",
   "demo": false,
   "logo": "https://static.wixstatic.com/media/bcea30_833feb0f9bd94c0d881d911c54ea0db7~mv2.png"
  },
  {
   "id": "embassy",
   "n": "Embassy of Switzerland in Viet Nam",
   "i": "CH",
   "c": "#E42026",
   "type": "gov",
   "tier": "headline",
   "hq": {
    "en": "Ha Noi, Viet Nam",
    "vi": "Hà Nội, Việt Nam"
   },
   "ind": "pub",
   "size": "—",
   "real": true,
   "about": {
    "en": "Co-organiser of the forum and the Swiss diplomatic mission in Viet Nam.",
    "vi": "Đồng tổ chức diễn đàn và cơ quan đại diện ngoại giao Thụy Sĩ tại Việt Nam."
   },
   "looking": {
    "en": "",
    "vi": ""
   },
   "web": "https://www.eda.admin.ch/hanoi",
   "email": "hanoi@eda.admin.ch",
   "tel": "",
   "demo": false,
   "logo": "https://static.wixstatic.com/media/d028f2_88b951bed6d9453e967bea85a9a25c1a~mv2.jpeg"
  },
  {
   "id": "alpinecap",
   "n": "Alpine Capital Partners",
   "i": "AC",
   "c": "#7A5C00",
   "type": "fund",
   "tier": "sponsor",
   "hq": {
    "en": "Zurich, Switzerland",
    "vi": "Zurich, Thụy Sĩ"
   },
   "ind": "fin",
   "size": "46",
   "about": {
    "en": "A Swiss asset manager building emerging-market mandates, with Viet Nam's move to Emerging Market status as its current thesis.",
    "vi": "Công ty quản lý tài sản Thụy Sĩ tập trung vào thị trường mới nổi, với luận điểm hiện tại là việc Việt Nam nâng hạng thị trường."
   },
   "looking": {
    "en": "Local partners for a Viet Nam equity mandate",
    "vi": "Đối tác trong nước cho danh mục cổ phiếu Việt Nam"
   },
   "web": "https://alpinecapital.example.ch",
   "email": "apac@alpinecapital.example.ch",
   "tel": "+41 44 218 30 10",
   "demo": true
  },
  {
   "id": "lachhuyen",
   "n": "Lach Huyen Port Services",
   "i": "LH",
   "c": "#1F3A5F",
   "type": "corp",
   "tier": "inst",
   "hq": {
    "en": "Hai Phong, Viet Nam",
    "vi": "Hải Phòng, Việt Nam"
   },
   "ind": "inf",
   "size": "1,450",
   "about": {
    "en": "Terminal operator at Lach Huyen deep-water port, on the Day 3 field-visit route.",
    "vi": "Đơn vị khai thác bến tại cảng nước sâu Lạch Huyện, nằm trên lộ trình tham quan Ngày 3."
   },
   "looking": {
    "en": "European shipping lines and cold-chain operators",
    "vi": "Hãng tàu châu Âu và đơn vị vận hành chuỗi lạnh"
   },
   "web": "https://lachhuyen.example.vn",
   "email": "commercial@lachhuyen.example.vn",
   "tel": "+84 225 388 4400",
   "demo": true
  },
  {
   "id": "helvetiamed",
   "n": "Helvetia MedTech",
   "i": "HM",
   "c": "#0F5A4A",
   "type": "corp",
   "tier": "sponsor",
   "hq": {
    "en": "Basel, Switzerland",
    "vi": "Basel, Thụy Sĩ"
   },
   "ind": "hea",
   "size": "380",
   "about": {
    "en": "Swiss medical device maker seeking registration and distribution routes into Viet Nam post-FTA.",
    "vi": "Nhà sản xuất thiết bị y tế Thụy Sĩ đang tìm kênh đăng ký và phân phối tại Việt Nam sau FTA."
   },
   "looking": {
    "en": "Distribution partners and hospital groups",
    "vi": "Đối tác phân phối và hệ thống bệnh viện"
   },
   "web": "https://helvetiamedtech.example.ch",
   "email": "apac@helvetiamedtech.example.ch",
   "tel": "+41 61 260 71 00",
   "demo": true
  },
  {
   "id": "northwind",
   "n": "Northwind Energy VN",
   "i": "NE",
   "c": "#3E7742",
   "type": "corp",
   "tier": "inst",
   "hq": {
    "en": "Ha Noi, Viet Nam",
    "vi": "Hà Nội, Việt Nam"
   },
   "ind": "eng",
   "size": "210",
   "about": {
    "en": "Offshore wind and storage developer working on northern Viet Nam's net-zero pipeline.",
    "vi": "Đơn vị phát triển điện gió ngoài khơi và lưu trữ cho lộ trình net-zero miền Bắc."
   },
   "looking": {
    "en": "Swiss climate finance and grid technology",
    "vi": "Tài chính khí hậu và công nghệ lưới điện từ Thụy Sĩ"
   },
   "web": "https://northwind.example.vn",
   "email": "partners@northwind.example.vn",
   "tel": "+84 24 3719 8800",
   "demo": true
  },
  {
   "id": "bachninh",
   "n": "Bac Ninh Advanced Manufacturing",
   "i": "BN",
   "c": "#800000",
   "type": "corp",
   "tier": "inst",
   "hq": {
    "en": "Bac Ninh, Viet Nam",
    "vi": "Bắc Ninh, Việt Nam"
   },
   "ind": "ind",
   "size": "2,900",
   "about": {
    "en": "Precision electronics and metalworking group in the Bac Ninh industrial belt.",
    "vi": "Tập đoàn điện tử chính xác và cơ khí trong vành đai công nghiệp Bắc Ninh."
   },
   "looking": {
    "en": "Swiss machine tooling and Industry 4.0 systems",
    "vi": "Máy công cụ và hệ thống Công nghiệp 4.0 từ Thụy Sĩ"
   },
   "web": "https://bnam.example.vn",
   "email": "sourcing@bnam.example.vn",
   "tel": "+84 222 385 1200",
   "demo": true
  },
  {
   "id": "lemanai",
   "n": "Léman AI",
   "i": "LA",
   "c": "#224861",
   "type": "corp",
   "tier": "indiv",
   "hq": {
    "en": "Lausanne, Switzerland",
    "vi": "Lausanne, Thụy Sĩ"
   },
   "ind": "tec",
   "size": "64",
   "about": {
    "en": "Applied AI lab spun out of EPFL, working on document intelligence for regulated industries.",
    "vi": "Phòng lab AI ứng dụng tách ra từ EPFL, phát triển xử lý tài liệu cho ngành có quản lý chặt."
   },
   "looking": {
    "en": "Vietnamese engineering partners and pilot customers",
    "vi": "Đối tác kỹ thuật và khách hàng thí điểm tại Việt Nam"
   },
   "web": "https://lemanai.example.ch",
   "email": "hello@lemanai.example.ch",
   "tel": "+41 21 693 11 11",
   "demo": true
  },
  {
   "id": "mekonglaw",
   "n": "Mekong Legal Partners",
   "i": "ML",
   "c": "#754715",
   "type": "corp",
   "tier": "indiv",
   "hq": {
    "en": "Ho Chi Minh City, Viet Nam",
    "vi": "TP. Hồ Chí Minh, Việt Nam"
   },
   "ind": "leg",
   "size": "88",
   "about": {
    "en": "Corporate law firm advising on post-FTA market entry, investment structures and IP.",
    "vi": "Công ty luật tư vấn gia nhập thị trường sau FTA, cấu trúc đầu tư và sở hữu trí tuệ."
   },
   "looking": {
    "en": "Swiss counsel for cross-border referrals",
    "vi": "Đối tác luật Thụy Sĩ để giới thiệu khách hàng xuyên biên giới"
   },
   "web": "https://mekonglegal.example.vn",
   "email": "contact@mekonglegal.example.vn",
   "tel": "+84 28 3822 7700",
   "demo": true
  },
  {
   "id": "bernedual",
   "n": "Berne Dual Education Foundation",
   "i": "BD",
   "c": "#0A0A0A",
   "type": "ngo",
   "tier": "indiv",
   "hq": {
    "en": "Berne, Switzerland",
    "vi": "Berne, Thụy Sĩ"
   },
   "ind": "edu",
   "size": "31",
   "about": {
    "en": "Runs Swiss dual vocational programmes abroad; partner to the SVEF Education & Talent Initiative.",
    "vi": "Triển khai đào tạo kép Thụy Sĩ ở nước ngoài; đối tác của Sáng kiến Giáo dục & Nhân lực SVEF."
   },
   "looking": {
    "en": "Vietnamese universities and employer consortia",
    "vi": "Trường đại học và liên minh doanh nghiệp Việt Nam"
   },
   "web": "https://bernedual.example.ch",
   "email": "programmes@bernedual.example.ch",
   "tel": "+41 31 300 22 40",
   "demo": true
  },
  {
   "id": "redriver",
   "n": "Red River Logistics",
   "i": "RR",
   "c": "#B31018",
   "type": "corp",
   "tier": "guest",
   "hq": {
    "en": "Hai Phong, Viet Nam",
    "vi": "Hải Phòng, Việt Nam"
   },
   "ind": "inf",
   "size": "640",
   "about": {
    "en": "Forwarder on the Ha Noi to Hai Phong corridor, serving the Europe trade lane.",
    "vi": "Đơn vị giao nhận trên hành lang Hà Nội - Hải Phòng, phục vụ tuyến thương mại châu Âu."
   },
   "looking": {
    "en": "Swiss and southern German forwarding agents",
    "vi": "Đại lý giao nhận tại Thụy Sĩ và Nam Đức"
   },
   "web": "https://redriverlog.example.vn",
   "email": "sales@redriverlog.example.vn",
   "tel": "+84 225 355 9010",
   "demo": true
  },
  {
   "id": "imt",
   "n": "IMT Solutions",
   "i": "IM",
   "c": "#0E273D",
   "type": "corp",
   "tier": "indiv",
   "hq": {
    "en": "Da Nang, Viet Nam",
    "vi": "Đà Nẵng, Việt Nam"
   },
   "ind": "tec",
   "size": "500",
   "about": {
    "en": "Software engineering partner for European clients; builds this forum's website and app.",
    "vi": "Đối tác phát triển phần mềm cho khách hàng châu Âu; xây dựng website và ứng dụng của diễn đàn."
   },
   "looking": {
    "en": "Swiss product teams looking for engineering capacity",
    "vi": "Đội ngũ sản phẩm Thụy Sĩ cần năng lực kỹ thuật"
   },
   "web": "https://imt-soft.com",
   "email": "contact@imt-soft.com",
   "tel": "+84 236 3888 555",
   "demo": true
  },
  {
   "id": "zegoe",
   "n": "Zegoe Capital",
   "i": "ZC",
   "c": "#E42026",
   "type": "fund",
   "tier": "indiv",
   "hq": {
    "en": "Ha Noi, Viet Nam",
    "vi": "Hà Nội, Việt Nam"
   },
   "ind": "fin",
   "size": "12",
   "about": {
    "en": "An investment firm focused on manufacturing, logistics and infrastructure in Viet Nam, carried over from the multi-event demo so the two builds tell the same story.",
    "vi": "Công ty đầu tư tập trung vào sản xuất, logistics và hạ tầng tại Việt Nam, giữ nguyên từ bản demo đa sự kiện để hai bản kể cùng một câu chuyện."
   },
   "looking": {
    "en": "Swiss technology partners for the current portfolio",
    "vi": "Đối tác công nghệ Thụy Sĩ cho danh mục hiện tại"
   },
   "web": "https://zegoe.example.vn",
   "email": "contact@zegoe.example.vn",
   "tel": "+84 24 3200 1188",
   "demo": true
  }
 ],
 "people": [
  {
   "id": 1,
   "n": "H.E. Amb. Thomas Gass",
   "i": "TG",
   "c": "#04723D",
   "photo": "https://static.wixstatic.com/media/ce11ae_c11b8c095fd343b4a75c3417a379792f~mv2.jpg",
   "oid": "svef",
   "ind": "pub",
   "mkts": [
    "ch",
    "vn"
   ],
   "dir": true,
   "tier": "headline",
   "speaker": true,
   "picks": [],
   "day3": false,
   "t": {
    "en": "Ambassador of Switzerland to Viet Nam",
    "vi": "Ambassador of Switzerland to Viet Nam"
   },
   "bio": {
    "en": "Thomas Gass is Ambassador of Switzerland to Viet Nam, where he arrived in January 2023. Before this appointment, Ambassador Gass was organizer and Special Envoy to the High Level Conference on Development Effectiveness (2022) and Co-Chair of the Global Partnership for Effective Development Cooperation (GPEDC). From 2018 to 2022 he served as Assistant Director General of the Swiss Agency for Development and Cooperation (SDC), and from 2013-2017, as Assistant Secretary General at the UN Department for Economic and Social Affairs in New York. From 2009 to 2013, he was Ambassador of Switzerland to Nepal.",
    "vi": "Thomas Gass is Ambassador of Switzerland to Viet Nam, where he arrived in January 2023. Before this appointment, Ambassador Gass was organizer and Special Envoy to the High Level Conference on Development Effectiveness (2022) and Co-Chair of the Global Partnership for Effective Development Cooperation (GPEDC). From 2018 to 2022 he served as Assistant Director General of the Swiss Agency for Development and Cooperation (SDC), and from 2013-2017, as Assistant Secretary General at the UN Department for Economic and Social Affairs in New York. From 2009 to 2013, he was Ambassador of Switzerland to Nepal."
   },
   "h": {
    "web": "https://hanoi2026.svef.ch/speakers/ambassador-thomas-gass"
   },
   "demo": false
  },
  {
   "id": 2,
   "n": "Dr. Philipp Rösler",
   "i": "PR",
   "c": "#E42026",
   "photo": "https://static.wixstatic.com/media/d028f2_ec5c76ffcde3429682e583bf85b143c7~mv2.jpg",
   "oid": "svef",
   "ind": "pub",
   "mkts": [
    "ch",
    "vn"
   ],
   "dir": true,
   "tier": "headline",
   "speaker": true,
   "picks": [],
   "day3": false,
   "t": {
    "en": "Honorary Consul of Viet Nam in Switzerland",
    "vi": "Honorary Consul of Viet Nam in Switzerland"
   },
   "bio": {
    "en": "Dr. Philipp Rösler served as federal minister of health from 2009 to 2011 and federal minister of economics and technology as well as vice-chancellor of Germany from 2011 to 2013. Born in Vietnam, Dr. Philipp Rösler was the first cabinet minister and vice-chancellor of Asian background in Germany. Before entering politics, he was a cardiothoracic surgeon.",
    "vi": "Dr. Philipp Rösler served as federal minister of health from 2009 to 2011 and federal minister of economics and technology as well as vice-chancellor of Germany from 2011 to 2013. Born in Vietnam, Dr. Philipp Rösler was the first cabinet minister and vice-chancellor of Asian background in Germany. Before entering politics, he was a cardiothoracic surgeon."
   },
   "h": {
    "web": "https://hanoi2026.svef.ch/speakers/dr-philipp-rosler"
   },
   "demo": false
  },
  {
   "id": 3,
   "n": "Ivo Sieber",
   "i": "IS",
   "c": "#7A5C00",
   "photo": "https://static.wixstatic.com/media/ce11ae_c97b41b61f8745cab866e7f75cc1f76e~mv2.jpg",
   "oid": "svef",
   "ind": "pub",
   "mkts": [
    "ch",
    "vn"
   ],
   "dir": true,
   "tier": "headline",
   "speaker": true,
   "picks": [],
   "day3": false,
   "t": {
    "en": "Former Ambassador of Switzerland to Viet Nam",
    "vi": "Former Ambassador of Switzerland to Viet Nam"
   },
   "bio": {
    "en": "Ivo Sieber, a law graduate from the University of Zurich and holder of a Master of Laws from the University of Sydney, began his diplomatic career in 1988 with the Swiss Federal Department of Foreign Affairs. Sieber's ambassadorial roles commenced in 2010 in Manila, covering multiple Pacific nations. His significant postings include serving in Zimbabwe, New York, Bangkok, and London. In 2015, he became Ambassador to Thailand, Laos, and Cambodia, and from 2019 to 2022, he served as the Ambassador to Vietnam",
    "vi": "Ivo Sieber, a law graduate from the University of Zurich and holder of a Master of Laws from the University of Sydney, began his diplomatic career in 1988 with the Swiss Federal Department of Foreign Affairs. Sieber's ambassadorial roles commenced in 2010 in Manila, covering multiple Pacific nations. His significant postings include serving in Zimbabwe, New York, Bangkok, and London. In 2015, he became Ambassador to Thailand, Laos, and Cambodia, and from 2019 to 2022, he served as the Ambassador to Vietnam"
   },
   "h": {
    "web": "https://hanoi2026.svef.ch/speakers/ivo-sieber"
   },
   "demo": false
  },
  {
   "id": 101,
   "n": "Lara Weber",
   "i": "LW",
   "c": "#7A5C00",
   "oid": "alpinecap",
   "ind": "fin",
   "mkts": [
    "ch",
    "eu",
    "vn"
   ],
   "dir": true,
   "tier": "sponsor",
   "picks": [
    "A",
    "F"
   ],
   "day3": true,
   "t": {
    "en": "Head of Emerging Markets",
    "vi": "Giám đốc Thị trường mới nổi"
   },
   "bio": {
    "en": "Runs Alpine Capital's emerging-market desk and is building the firm's first Viet Nam mandate ahead of the market's reclassification.",
    "vi": "Phụ trách mảng thị trường mới nổi của Alpine Capital, đang xây dựng danh mục Việt Nam đầu tiên trước thời điểm nâng hạng."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-lara-weber",
    "web": "https://alpinecapital.example.ch"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 102,
   "n": "Trần Minh Quân",
   "i": "TQ",
   "c": "#1F3A5F",
   "oid": "lachhuyen",
   "ind": "inf",
   "mkts": [
    "vn",
    "asean"
   ],
   "dir": true,
   "tier": "inst",
   "picks": [
    "A",
    "F"
   ],
   "day3": true,
   "t": {
    "en": "Commercial Director",
    "vi": "Giám đốc Thương mại"
   },
   "bio": {
    "en": "Runs commercial operations at Lach Huyen and will host part of the Day 3 field visit.",
    "vi": "Phụ trách khai thác thương mại tại Lạch Huyện và sẽ tiếp đoàn trong chuyến thực địa Ngày 3."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-tran-minh-quan",
    "wa": "+84 90 214 7788"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 103,
   "n": "Dr. Claudia Berger",
   "i": "CB",
   "c": "#0F5A4A",
   "oid": "helvetiamed",
   "ind": "hea",
   "mkts": [
    "ch",
    "eu",
    "vn"
   ],
   "dir": true,
   "tier": "sponsor",
   "picks": [
    "B",
    "D"
   ],
   "day3": false,
   "t": {
    "en": "Head of Regulatory Affairs, APAC",
    "vi": "Giám đốc Pháp chế, châu Á - Thái Bình Dương"
   },
   "bio": {
    "en": "Leads medical-device registration across APAC and is mapping Viet Nam's post-FTA approval route.",
    "vi": "Phụ trách đăng ký thiết bị y tế toàn khu vực và đang nghiên cứu quy trình phê duyệt tại Việt Nam sau FTA."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-claudia-berger"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 104,
   "n": "Nguyễn Thu Hà",
   "i": "TH",
   "c": "#3E7742",
   "oid": "northwind",
   "ind": "eng",
   "mkts": [
    "vn",
    "asean"
   ],
   "dir": true,
   "tier": "inst",
   "picks": [
    "B",
    "E"
   ],
   "day3": true,
   "t": {
    "en": "Director of Project Finance",
    "vi": "Giám đốc Tài chính dự án"
   },
   "bio": {
    "en": "Structures project finance for offshore wind in the north and is looking for Swiss climate capital.",
    "vi": "Thu xếp tài chính dự án điện gió ngoài khơi miền Bắc và đang tìm nguồn vốn khí hậu từ Thụy Sĩ."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-nguyen-thu-ha",
    "wa": "+84 91 335 0142"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 105,
   "n": "Andreas Küng",
   "i": "AK",
   "c": "#800000",
   "oid": "bachninh",
   "ind": "ind",
   "mkts": [
    "ch",
    "vn"
   ],
   "dir": true,
   "tier": "inst",
   "picks": [
    "A",
    "E"
   ],
   "day3": true,
   "t": {
    "en": "Chief Operating Officer",
    "vi": "Giám đốc Vận hành"
   },
   "bio": {
    "en": "Swiss-trained operations lead at a Bac Ninh electronics group, running the Industry 4.0 retooling programme.",
    "vi": "Giám đốc vận hành đào tạo tại Thụy Sĩ của một tập đoàn điện tử Bắc Ninh, phụ trách chương trình tái trang bị Công nghiệp 4.0."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-andreas-kueng",
    "web": "https://bnam.example.vn"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 106,
   "n": "Sofia Meier",
   "i": "SM",
   "c": "#224861",
   "oid": "lemanai",
   "ind": "tec",
   "mkts": [
    "ch",
    "eu"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "C",
    "E"
   ],
   "day3": false,
   "t": {
    "en": "Co-founder & CTO",
    "vi": "Đồng sáng lập & Giám đốc Công nghệ"
   },
   "bio": {
    "en": "Builds document-intelligence models for banks and regulators, and is hiring an engineering team in Viet Nam.",
    "vi": "Xây dựng mô hình xử lý tài liệu cho ngân hàng và cơ quan quản lý, đang tuyển đội kỹ thuật tại Việt Nam."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-sofia-meier",
    "x": "@sofiameier"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 107,
   "n": "Lê Hoàng Yến",
   "i": "HY",
   "c": "#754715",
   "oid": "mekonglaw",
   "ind": "leg",
   "mkts": [
    "vn",
    "asean"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "C",
    "F"
   ],
   "day3": false,
   "t": {
    "en": "Managing Partner",
    "vi": "Luật sư điều hành"
   },
   "bio": {
    "en": "Advises foreign investors on market entry and has worked on several EFTA-related mandates.",
    "vi": "Tư vấn nhà đầu tư nước ngoài về gia nhập thị trường, đã tham gia nhiều vụ việc liên quan tới EFTA."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-le-hoang-yen"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 108,
   "n": "Marc Steiner",
   "i": "MS",
   "c": "#0A0A0A",
   "oid": "bernedual",
   "ind": "edu",
   "mkts": [
    "ch",
    "vn"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "C",
    "E"
   ],
   "day3": false,
   "t": {
    "en": "Programme Director",
    "vi": "Giám đốc Chương trình"
   },
   "bio": {
    "en": "Runs Swiss dual vocational programmes in South East Asia and is scoping the SVEF talent initiative.",
    "vi": "Điều hành chương trình đào tạo kép Thụy Sĩ tại Đông Nam Á, đang xây dựng sáng kiến nhân lực SVEF."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-marc-steiner"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 109,
   "n": "Phạm Xuân Bình",
   "i": "XB",
   "c": "#B31018",
   "oid": "redriver",
   "ind": "inf",
   "mkts": [
    "vn"
   ],
   "dir": false,
   "tier": "guest",
   "picks": [
    "A",
    "F"
   ],
   "day3": true,
   "t": {
    "en": "Managing Director",
    "vi": "Tổng giám đốc"
   },
   "bio": {
    "en": "Runs a Hai Phong forwarding business attending as a guest.",
    "vi": "Điều hành doanh nghiệp giao nhận tại Hải Phòng, tham dự với tư cách khách mời."
   },
   "h": {},
   "demo": true,
   "speaker": false
  },
  {
   "id": 110,
   "n": "Mai An",
   "i": "MA",
   "c": "#0E273D",
   "oid": "imt",
   "ind": "tec",
   "mkts": [
    "vn",
    "eu"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "C",
    "E"
   ],
   "day3": false,
   "t": {
    "en": "Chief Executive Officer",
    "vi": "Tổng giám đốc"
   },
   "bio": {
    "en": "Leads the engineering partner behind this forum's website and delegate app.",
    "vi": "Lãnh đạo đối tác kỹ thuật xây dựng website và ứng dụng đại biểu của diễn đàn."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-mai-an",
    "web": "https://imt-soft.com"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 111,
   "n": "Beatrice Fontana",
   "i": "BF",
   "c": "#7A5C00",
   "oid": "alpinecap",
   "ind": "fin",
   "mkts": [
    "ch",
    "eu"
   ],
   "dir": false,
   "tier": "sponsor",
   "picks": [
    "B",
    "D"
   ],
   "day3": false,
   "t": {
    "en": "Investor Relations",
    "vi": "Quan hệ Nhà đầu tư"
   },
   "bio": {
    "en": "Handles institutional investor relations for the firm's Asia mandates.",
    "vi": "Phụ trách quan hệ nhà đầu tư tổ chức cho các danh mục châu Á."
   },
   "h": {},
   "demo": true,
   "speaker": false
  },
  {
   "id": 112,
   "n": "Đỗ Quang Huy",
   "i": "QH",
   "c": "#3E7742",
   "oid": "northwind",
   "ind": "eng",
   "mkts": [
    "vn",
    "asean"
   ],
   "dir": true,
   "tier": "inst",
   "picks": [
    "B",
    "D"
   ],
   "day3": true,
   "t": {
    "en": "Head of Grid Integration",
    "vi": "Trưởng bộ phận Đấu nối lưới"
   },
   "bio": {
    "en": "Works on grid connection and storage siting for northern renewable projects.",
    "vi": "Phụ trách đấu nối lưới và bố trí lưu trữ cho các dự án năng lượng tái tạo miền Bắc."
   },
   "h": {
    "wa": "+84 93 887 2205"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 113,
   "n": "Stefan Brun",
   "i": "SB",
   "c": "#0F5A4A",
   "oid": "helvetiamed",
   "ind": "hea",
   "mkts": [
    "ch"
   ],
   "dir": false,
   "tier": "guest",
   "picks": [
    "D"
   ],
   "day3": false,
   "t": {
    "en": "Regional Sales Manager",
    "vi": "Quản lý Kinh doanh khu vực"
   },
   "bio": {
    "en": "Attending as a guest of the sponsor delegation.",
    "vi": "Tham dự với tư cách khách mời của đoàn nhà tài trợ."
   },
   "h": {},
   "demo": true,
   "speaker": false
  },
  {
   "id": 114,
   "n": "Vũ Thị Lan",
   "i": "VL",
   "c": "#754715",
   "oid": "mekonglaw",
   "ind": "leg",
   "mkts": [
    "vn",
    "eu"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "A",
    "F"
   ],
   "day3": false,
   "t": {
    "en": "Senior Associate, IP",
    "vi": "Luật sư cao cấp, Sở hữu trí tuệ"
   },
   "bio": {
    "en": "Specialises in IP protection and trade compliance for European clients in Viet Nam.",
    "vi": "Chuyên về bảo hộ sở hữu trí tuệ và tuân thủ thương mại cho khách hàng châu Âu tại Việt Nam."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-vu-thi-lan"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 201,
   "n": "Ngô Bảo Châu",
   "i": "BC",
   "c": "#B31018",
   "oid": "zegoe",
   "ind": "fin",
   "mkts": [
    "vn"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "B",
    "D"
   ],
   "day3": false,
   "t": {
    "en": "Principal",
    "vi": "Giám đốc đầu tư"
   },
   "bio": {
    "en": "Covers industrials and logistics for Zegoe Capital.",
    "vi": "Phụ trách mảng công nghiệp và logistics tại Zegoe Capital."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-ngo-bao-chau"
   },
   "demo": true,
   "speaker": false
  },
  {
   "id": 200,
   "self": true,
   "n": "Anh Trần",
   "i": "AT",
   "c": "#E42026",
   "oid": "zegoe",
   "ind": "fin",
   "mkts": [
    "vn",
    "ch",
    "asean"
   ],
   "dir": true,
   "tier": "indiv",
   "picks": [
    "A",
    "F"
   ],
   "day3": true,
   "t": {
    "en": "Investment Director",
    "vi": "Giám đốc Đầu tư"
   },
   "bio": {
    "en": "Invests in mid-sized Vietnamese manufacturing and logistics businesses, and is at the forum looking for Swiss technology partners for the current portfolio.",
    "vi": "Đầu tư vào doanh nghiệp sản xuất và logistics quy mô vừa tại Việt Nam, tham dự diễn đàn để tìm đối tác công nghệ Thụy Sĩ cho danh mục hiện tại."
   },
   "h": {
    "li": "https://www.linkedin.com/in/svef-demo-tran-quoc-anh",
    "x": "@tqanh_vc",
    "web": "https://zegoe.example.vn",
    "wa": "+84 90 118 6420"
   },
   "demo": true,
   "speaker": false
  }
 ],
 "self": {
  "personId": 200,
  "orgId": "zegoe",
  "reg": {
   "firstName": "Anh",
   "lastName": "Trần",
   "email": "anh.tran@zegoe.example.vn",
   "phone": "+84 90 118 6420",
   "custom-0c7c78bc44fa7c24": "Viet Nam",
   "custom-8a20b377644250d5": "Investment Director",
   "custom-7d770b5ff1fd6858": "Zegoe Capital",
   "custom-9c7061d2b34c3815": "Finance & Banking, Logistics & Supply Chain Management",
   "custom-83497ae05ef0e4a3": "",
   "custom-68d175931ae1ca96": "Ngô Bảo Châu, Principal",
   "custom-836a3e0a7bc655cc": "Session A: Mobility & Trade Connectivity",
   "custom-144348401465aa62": "Session F: Legal Frameworks & Market Entry",
   "custom-9c84cca83223f4ce": "Yes - Please send me more details",
   "custom": "SVEF Individual Member",
   "custom-6ac18358bdf7c33a": "No - I am not interested",
   "custom-ab58d1a716518d6d": "Yes - Include my organisation/company name",
   "custom-fe37e7076e640452": "No - Not at this time",
   "custom-9d70f2c27766bc8d": "",
   "custom-a964ca70f0106070": ""
  }
 },
 "meetings": [
  {
   "pid": 101,
   "status": "confirmed",
   "dir": "received",
   "day": 2,
   "time": "12:45 – 13:00",
   "place": {
    "en": "Networking lounge, main forum floor",
    "vi": "Khu networking, sảnh chính"
   },
   "created": "2026-09-02",
   "demo": true
  },
  {
   "pid": 104,
   "status": "pending",
   "dir": "sent",
   "day": 2,
   "time": "16:00 – 16:15",
   "place": null,
   "created": "2026-09-04",
   "demo": true
  },
  {
   "pid": 102,
   "status": "pending",
   "dir": "received",
   "day": 3,
   "time": "13:00 – 13:30",
   "place": null,
   "created": "2026-09-05",
   "msg": {
    "en": "We are both on the Hai Phong visit. Shall we talk over lunch at KBC?",
    "vi": "Hai bên đều tham gia chuyến Hải Phòng. Mình trao đổi trong bữa trưa tại KBC nhé?"
   },
   "demo": true
  },
  {
   "pid": 106,
   "status": "declined",
   "dir": "sent",
   "day": 2,
   "time": "11:00 – 11:15",
   "place": null,
   "created": "2026-09-01",
   "demo": true
  }
 ],
 "chats": {
  "101": [
   {
    "me": false,
    "t": "09:12",
    "m": {
     "en": "Hello, I saw you picked Session A as well. Are you staying for the Hai Phong day?",
     "vi": "Chào anh, em thấy anh cũng chọn Session A. Anh có ở lại ngày Hải Phòng không ạ?"
    }
   },
   {
    "me": true,
    "t": "09:20",
    "m": {
     "en": "I am, yes. Happy to compare notes on the port briefing.",
     "vi": "Có ạ. Rất sẵn lòng trao đổi về phần giới thiệu cảng."
    }
   },
   {
    "me": false,
    "t": "09:24",
    "m": {
     "en": "Perfect. I have sent a meeting request for the break after Session I.",
     "vi": "Tuyệt ạ. Em đã gửi lời mời gặp vào giờ nghỉ sau Session I."
    }
   }
  ],
  "104": [
   {
    "me": true,
    "t": "14:02",
    "m": {
     "en": "Hello, I would like to understand the storage side of your pipeline.",
     "vi": "Chào chị, em muốn tìm hiểu về mảng lưu trữ trong danh mục dự án của chị."
    }
   },
   {
    "me": false,
    "t": "14:31",
    "m": {
     "en": "Of course. Session B covers most of it, and we can talk after.",
     "vi": "Vâng ạ. Session B nói phần lớn nội dung đó, mình trao đổi thêm sau phiên nhé."
    }
   }
  ],
  "110": [
   {
    "me": false,
    "t": "08:40",
    "m": {
     "en": "The delegate app is ours, by the way. Tell us if anything reads wrong.",
     "vi": "Ứng dụng đại biểu là do bên mình làm. Anh thấy chỗ nào chưa ổn thì báo giúp nhé."
    }
   }
  ]
 },
 "docs": [
  {
   "t": {
    "en": "Ha Noi 2026 delegate pack",
    "vi": "Tài liệu đại biểu Hà Nội 2026"
   },
   "by": "SVEF Secretariat",
   "kind": "PDF",
   "size": "3.4 MB",
   "day": 0,
   "tag": "logistics",
   "id": "doc1",
   "demo": true
  },
  {
   "t": {
    "en": "EFTA-Viet Nam FTA: what changes for business",
    "vi": "Hiệp định EFTA - Việt Nam: doanh nghiệp thay đổi những gì"
   },
   "by": "SVEF Secretariat",
   "kind": "PDF",
   "size": "2.1 MB",
   "day": 2,
   "tag": "briefing",
   "id": "doc2",
   "demo": true
  },
  {
   "t": {
    "en": "Session I briefing: capital markets and investment flows",
    "vi": "Tài liệu Session I: thị trường vốn và dòng đầu tư"
   },
   "by": "Alpine Capital Partners",
   "kind": "PDF",
   "size": "5.8 MB",
   "day": 2,
   "tag": "session",
   "id": "doc3",
   "demo": true
  },
  {
   "t": {
    "en": "Session II briefing: smart manufacturing and supply chains",
    "vi": "Tài liệu Session II: sản xuất thông minh và chuỗi cung ứng"
   },
   "by": "Bac Ninh Advanced Manufacturing",
   "kind": "PDF",
   "size": "7.2 MB",
   "day": 2,
   "tag": "session",
   "id": "doc4",
   "demo": true
  },
  {
   "t": {
    "en": "Day 3 field visit: Hai Phong route and site notes",
    "vi": "Thực địa Ngày 3: lộ trình Hải Phòng và ghi chú điểm đến"
   },
   "by": "SVEF Secretariat",
   "kind": "PDF",
   "size": "4.9 MB",
   "day": 3,
   "tag": "logistics",
   "id": "doc5",
   "demo": true
  },
  {
   "t": {
    "en": "Delegation support package: airport pickup and hotels",
    "vi": "Gói hỗ trợ đoàn: đón sân bay và khách sạn"
   },
   "by": "SVEF Secretariat",
   "kind": "PDF",
   "size": "1.2 MB",
   "day": 0,
   "tag": "logistics",
   "id": "doc6",
   "demo": true
  }
 ],
 "slots": [
  "09:00 – 09:15",
  "11:00 – 11:15",
  "12:45 – 13:00",
  "16:00 – 16:15",
  "18:30 – 18:45"
 ],
 "notifications": [
  {
   "id": "n1",
   "kind": "session",
   "unread": true,
   "when": "2 h",
   "t": {
    "en": "Doors open at 08:00",
    "vi": "Mở cửa lúc 08:00"
   },
   "b": {
    "en": "Registration & Exhibition on Day 2.",
    "vi": "Registration & Exhibition trong Ngày 2."
   },
   "go": "agenda"
  },
  {
   "id": "n2",
   "kind": "session",
   "unread": true,
   "when": "5 h",
   "t": {
    "en": "Confirm your parallel session",
    "vi": "Xác nhận phiên song song của bạn"
   },
   "b": {
    "en": "Parallel Sessions - Round 1: 3 tracks to choose from.",
    "vi": "Parallel Sessions - Round 1: có 3 phiên để chọn."
   },
   "go": "agenda"
  },
  {
   "id": "n3",
   "kind": "meeting",
   "unread": true,
   "when": "1 d",
   "t": {
    "en": "New meeting request",
    "vi": "Lời mời gặp mới"
   },
   "b": {
    "en": "A delegate asked to meet during the Hai Phong field visit.",
    "vi": "Một đại biểu muốn gặp trong chuyến thực địa Hải Phòng."
   },
   "go": "meetings",
   "demo": true
  },
  {
   "id": "n4",
   "kind": "press",
   "unread": false,
   "when": "2 d",
   "t": {
    "en": "New press coverage",
    "vi": "Có bài báo mới"
   },
   "b": {
    "en": "Viet Nam Agency News Television: Interview with Ambassador Markus Schlagenhof (SECO) and Dr. Philipp Roesler",
    "vi": "Viet Nam Agency News Television: Interview with Ambassador Markus Schlagenhof (SECO) and Dr. Philipp Roesler"
   },
   "go": "press"
  },
  {
   "id": "n5",
   "kind": "reg",
   "unread": false,
   "when": "3 d",
   "t": {
    "en": "Registration received",
    "vi": "Đã nhận đăng ký"
   },
   "b": {
    "en": "Thank you for your registration for SVEF Ha Noi 2026. ",
    "vi": "Đăng ký của bạn đã được ghi nhận và đang chờ xác nhận."
   },
   "go": "me"
  }
 ],
 "demoNotice": {
  "en": "Delegates, connections, meetings, chat and documents are demo data: SVEF has not published a guest list and Wix does not expose the RSVP roster. The programme, speakers, press, gallery and registration form are live.",
  "vi": "Danh sách đại biểu, kết nối, lịch gặp, tin nhắn và tài liệu là dữ liệu mẫu: SVEF chưa công bố danh sách khách mời và Wix không mở API danh sách đăng ký. Chương trình, diễn giả, báo chí, thư viện ảnh và biểu mẫu đăng ký là dữ liệu thật."
 }
};
