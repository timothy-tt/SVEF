/* SVEF Ha Noi 2026 — single-event dataset.
   Scraped from https://hanoi2026.svef.ch on 2026-09-06T08:37:53Z by scrape.py.
   Regenerate: python3 scrape.py && python3 mkdata.py <path>/data.js
   Do not hand-edit: every value below comes from the live site. */
window.HANOI2026 = {
 "meta": {
  "source": "https://hanoi2026.svef.ch",
  "scrapedAt": "2026-09-06T08:37:53Z",
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
 "links": {
  "link-events-1-code-2": "https://hanoi2026.svef.ch/events-speakers/hanoi2026",
  "link-events-3-code": "https://hanoi2026.svef.ch/events-visa/hanoi2026",
  "link-events-1-code-4": "https://hanoi2026.svef.ch/events-gallery/hanoi2026",
  "link-events-2-code-2": "https://hanoi2026.svef.ch/events-2/hanoi2026",
  "link-events-1-code": "https://hanoi2026.svef.ch/events-accomodation/hanoi2026",
  "link-events-2-code": "https://hanoi2026.svef.ch/events-transportation/hanoi2026",
  "link-events-1-code-3": "https://hanoi2026.svef.ch/events-gallery/hanoi2026"
 }
};
