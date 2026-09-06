"""The networking layer the live site cannot supply.

Everything in this file is fabricated and every record it emits carries `demo: true`,
because the app labels it as such on screen. It exists because the delegate directory,
connections, meetings, chat and document library are pre-event features with no public
source: SVEF has not published a guest list, and Wix will not hand an anonymous token
the RSVP roster. Inventing it is the honest option; pretending the site has it is not.

What is NOT invented, and is not in here: the agenda, the speakers, the press coverage,
the gallery, the overview copy, the organisers, the contacts and the RSVP form. Those
all come off hanoi2026.svef.ch through scrape.py.

The fabrications are anchored to the real event so the demo reads as Ha Noi 2026 rather
than as generic conference filler: organisations sit in the forum's own eight thematic
pillars, and delegates' session picks come from the six real parallel tracks.
"""

# Industry keys map onto the forum's own thematic pillars, scraped from the home page.
INDUSTRIES = {
    "fin": {"en": "Finance & Capital Markets", "vi": "Tài chính & Thị trường vốn"},
    "ind": {"en": "Industrial Transformation", "vi": "Chuyển đổi công nghiệp"},
    "inf": {"en": "Infrastructure & Urban", "vi": "Hạ tầng & Đô thị"},
    "eng": {"en": "Energy & Sustainability", "vi": "Năng lượng & Bền vững"},
    "tec": {"en": "Innovation, AI & Digital", "vi": "Đổi mới, AI & Số hoá"},
    "hea": {"en": "Healthcare & Life Sciences", "vi": "Y tế & Khoa học sự sống"},
    "edu": {"en": "Education & Talent", "vi": "Giáo dục & Nhân lực"},
    "leg": {"en": "Legal & Market Entry", "vi": "Pháp lý & Gia nhập thị trường"},
    "pub": {"en": "Public sector & Trade promotion", "vi": "Khu vực công & Xúc tiến"},
}

MARKETS = {
    "vn": {"en": "Viet Nam", "vi": "Việt Nam"},
    "ch": {"en": "Switzerland", "vi": "Thụy Sĩ"},
    "eu": {"en": "Europe", "vi": "Châu Âu"},
    "asean": {"en": "ASEAN", "vi": "ASEAN"},
}

# Tiers follow the RSVP form's own "SVEF Membership Status" options.
TIERS = {
    "headline": {"en": "Headline sponsor", "vi": "Nhà tài trợ chính", "star": "★★★", "rank": 4},
    "sponsor": {"en": "Sponsor", "vi": "Nhà tài trợ", "star": "★★", "rank": 3},
    "inst": {"en": "Institutional member", "vi": "Thành viên tổ chức", "star": "★★", "rank": 3},
    "indiv": {"en": "Individual member", "vi": "Thành viên cá nhân", "star": "★", "rank": 2},
    "guest": {"en": "Guest", "vi": "Khách tham dự", "star": "", "rank": 1},
}

ORGS = [
    dict(id="svef", n="Swiss-Viet Economic Forum", i="SV", c="#04723D", type="ngo", tier="headline",
         hq={"en": "Zurich and Ho Chi Minh City", "vi": "Zurich và TP. Hồ Chí Minh"},
         ind="pub", size="18", real=True,
         about={"en": "The organiser of this forum, promoting economic ties between Switzerland and Viet Nam.",
                "vi": "Đơn vị tổ chức diễn đàn, thúc đẩy quan hệ kinh tế giữa Thụy Sĩ và Việt Nam."},
         looking={"en": "Members, sponsors and speakers for the Ha Noi edition",
                  "vi": "Thành viên, nhà tài trợ và diễn giả cho kỳ Hà Nội"},
         web="https://svef.ch", email="contact@svef.ch", tel="+41 76 592 88 56"),
    dict(id="embassy", n="Embassy of Switzerland in Viet Nam", i="CH", c="#E42026", type="gov",
         tier="headline", hq={"en": "Ha Noi, Viet Nam", "vi": "Hà Nội, Việt Nam"},
         ind="pub", size="—", real=True,
         about={"en": "Co-organiser of the forum and the Swiss diplomatic mission in Viet Nam.",
                "vi": "Đồng tổ chức diễn đàn và cơ quan đại diện ngoại giao Thụy Sĩ tại Việt Nam."},
         looking={"en": "", "vi": ""},
         web="https://www.eda.admin.ch/hanoi", email="hanoi@eda.admin.ch", tel=""),
    dict(id="alpinecap", n="Alpine Capital Partners", i="AC", c="#7A5C00", type="fund", tier="sponsor",
         hq={"en": "Zurich, Switzerland", "vi": "Zurich, Thụy Sĩ"}, ind="fin", size="46",
         about={"en": "A Swiss asset manager building emerging-market mandates, with Viet Nam's move to Emerging Market status as its current thesis.",
                "vi": "Công ty quản lý tài sản Thụy Sĩ tập trung vào thị trường mới nổi, với luận điểm hiện tại là việc Việt Nam nâng hạng thị trường."},
         looking={"en": "Local partners for a Viet Nam equity mandate",
                  "vi": "Đối tác trong nước cho danh mục cổ phiếu Việt Nam"},
         web="https://alpinecapital.example.ch", email="apac@alpinecapital.example.ch",
         tel="+41 44 218 30 10"),
    dict(id="lachhuyen", n="Lach Huyen Port Services", i="LH", c="#1F3A5F", type="corp", tier="inst",
         hq={"en": "Hai Phong, Viet Nam", "vi": "Hải Phòng, Việt Nam"}, ind="inf", size="1,450",
         about={"en": "Terminal operator at Lach Huyen deep-water port, on the Day 3 field-visit route.",
                "vi": "Đơn vị khai thác bến tại cảng nước sâu Lạch Huyện, nằm trên lộ trình tham quan Ngày 3."},
         looking={"en": "European shipping lines and cold-chain operators",
                  "vi": "Hãng tàu châu Âu và đơn vị vận hành chuỗi lạnh"},
         web="https://lachhuyen.example.vn", email="commercial@lachhuyen.example.vn",
         tel="+84 225 388 4400"),
    dict(id="helvetiamed", n="Helvetia MedTech", i="HM", c="#0F5A4A", type="corp", tier="sponsor",
         hq={"en": "Basel, Switzerland", "vi": "Basel, Thụy Sĩ"}, ind="hea", size="380",
         about={"en": "Swiss medical device maker seeking registration and distribution routes into Viet Nam post-FTA.",
                "vi": "Nhà sản xuất thiết bị y tế Thụy Sĩ đang tìm kênh đăng ký và phân phối tại Việt Nam sau FTA."},
         looking={"en": "Distribution partners and hospital groups",
                  "vi": "Đối tác phân phối và hệ thống bệnh viện"},
         web="https://helvetiamedtech.example.ch", email="apac@helvetiamedtech.example.ch",
         tel="+41 61 260 71 00"),
    dict(id="northwind", n="Northwind Energy VN", i="NE", c="#3E7742", type="corp", tier="inst",
         hq={"en": "Ha Noi, Viet Nam", "vi": "Hà Nội, Việt Nam"}, ind="eng", size="210",
         about={"en": "Offshore wind and storage developer working on northern Viet Nam's net-zero pipeline.",
                "vi": "Đơn vị phát triển điện gió ngoài khơi và lưu trữ cho lộ trình net-zero miền Bắc."},
         looking={"en": "Swiss climate finance and grid technology",
                  "vi": "Tài chính khí hậu và công nghệ lưới điện từ Thụy Sĩ"},
         web="https://northwind.example.vn", email="partners@northwind.example.vn",
         tel="+84 24 3719 8800"),
    dict(id="bachninh", n="Bac Ninh Advanced Manufacturing", i="BN", c="#800000", type="corp",
         tier="inst", hq={"en": "Bac Ninh, Viet Nam", "vi": "Bắc Ninh, Việt Nam"},
         ind="ind", size="2,900",
         about={"en": "Precision electronics and metalworking group in the Bac Ninh industrial belt.",
                "vi": "Tập đoàn điện tử chính xác và cơ khí trong vành đai công nghiệp Bắc Ninh."},
         looking={"en": "Swiss machine tooling and Industry 4.0 systems",
                  "vi": "Máy công cụ và hệ thống Công nghiệp 4.0 từ Thụy Sĩ"},
         web="https://bnam.example.vn", email="sourcing@bnam.example.vn", tel="+84 222 385 1200"),
    dict(id="lemanai", n="Léman AI", i="LA", c="#224861", type="corp", tier="indiv",
         hq={"en": "Lausanne, Switzerland", "vi": "Lausanne, Thụy Sĩ"}, ind="tec", size="64",
         about={"en": "Applied AI lab spun out of EPFL, working on document intelligence for regulated industries.",
                "vi": "Phòng lab AI ứng dụng tách ra từ EPFL, phát triển xử lý tài liệu cho ngành có quản lý chặt."},
         looking={"en": "Vietnamese engineering partners and pilot customers",
                  "vi": "Đối tác kỹ thuật và khách hàng thí điểm tại Việt Nam"},
         web="https://lemanai.example.ch", email="hello@lemanai.example.ch", tel="+41 21 693 11 11"),
    dict(id="mekonglaw", n="Mekong Legal Partners", i="ML", c="#754715", type="corp", tier="indiv",
         hq={"en": "Ho Chi Minh City, Viet Nam", "vi": "TP. Hồ Chí Minh, Việt Nam"},
         ind="leg", size="88",
         about={"en": "Corporate law firm advising on post-FTA market entry, investment structures and IP.",
                "vi": "Công ty luật tư vấn gia nhập thị trường sau FTA, cấu trúc đầu tư và sở hữu trí tuệ."},
         looking={"en": "Swiss counsel for cross-border referrals",
                  "vi": "Đối tác luật Thụy Sĩ để giới thiệu khách hàng xuyên biên giới"},
         web="https://mekonglegal.example.vn", email="contact@mekonglegal.example.vn",
         tel="+84 28 3822 7700"),
    dict(id="bernedual", n="Berne Dual Education Foundation", i="BD", c="#0A0A0A", type="ngo",
         tier="indiv", hq={"en": "Berne, Switzerland", "vi": "Berne, Thụy Sĩ"}, ind="edu", size="31",
         about={"en": "Runs Swiss dual vocational programmes abroad; partner to the SVEF Education & Talent Initiative.",
                "vi": "Triển khai đào tạo kép Thụy Sĩ ở nước ngoài; đối tác của Sáng kiến Giáo dục & Nhân lực SVEF."},
         looking={"en": "Vietnamese universities and employer consortia",
                  "vi": "Trường đại học và liên minh doanh nghiệp Việt Nam"},
         web="https://bernedual.example.ch", email="programmes@bernedual.example.ch",
         tel="+41 31 300 22 40"),
    dict(id="redriver", n="Red River Logistics", i="RR", c="#B31018", type="corp", tier="guest",
         hq={"en": "Hai Phong, Viet Nam", "vi": "Hải Phòng, Việt Nam"}, ind="inf", size="640",
         about={"en": "Forwarder on the Ha Noi to Hai Phong corridor, serving the Europe trade lane.",
                "vi": "Đơn vị giao nhận trên hành lang Hà Nội - Hải Phòng, phục vụ tuyến thương mại châu Âu."},
         looking={"en": "Swiss and southern German forwarding agents",
                  "vi": "Đại lý giao nhận tại Thụy Sĩ và Nam Đức"},
         web="https://redriverlog.example.vn", email="sales@redriverlog.example.vn",
         tel="+84 225 355 9010"),
    dict(id="imt", n="IMT Solutions", i="IM", c="#0E273D", type="corp", tier="indiv",
         hq={"en": "Da Nang, Viet Nam", "vi": "Đà Nẵng, Việt Nam"}, ind="tec", size="500",
         about={"en": "Software engineering partner for European clients; builds this forum's website and app.",
                "vi": "Đối tác phát triển phần mềm cho khách hàng châu Âu; xây dựng website và ứng dụng của diễn đàn."},
         looking={"en": "Swiss product teams looking for engineering capacity",
                  "vi": "Đội ngũ sản phẩm Thụy Sĩ cần năng lực kỹ thuật"},
         web="https://imt-soft.com", email="contact@imt-soft.com", tel="+84 236 3888 555"),
    dict(id="zegoe", n="Zegoe Capital", i="ZC", c="#E42026", type="fund", tier="indiv",
         hq={"en": "Ha Noi, Viet Nam", "vi": "Hà Nội, Việt Nam"}, ind="fin", size="12",
         about={"en": "An investment firm focused on manufacturing, logistics and infrastructure in Viet Nam, carried over from the multi-event demo so the two builds tell the same story.",
                "vi": "Công ty đầu tư tập trung vào sản xuất, logistics và hạ tầng tại Việt Nam, giữ nguyên từ bản demo đa sự kiện để hai bản kể cùng một câu chuyện."},
         looking={"en": "Swiss technology partners for the current portfolio",
                  "vi": "Đối tác công nghệ Thụy Sĩ cho danh mục hiện tại"},
         web="https://zegoe.example.vn", email="contact@zegoe.example.vn",
         tel="+84 24 3200 1188"),
]

# Session picks reference the six real parallel tracks by letter (A-F).
PEOPLE = [
    dict(id=101, n="Lara Weber", i="LW", c="#7A5C00", oid="alpinecap", ind="fin",
         mkts=["ch", "eu", "vn"], dir=True, tier="sponsor", picks=["A", "F"], day3=True,
         t={"en": "Head of Emerging Markets", "vi": "Giám đốc Thị trường mới nổi"},
         bio={"en": "Runs Alpine Capital's emerging-market desk and is building the firm's first Viet Nam mandate ahead of the market's reclassification.",
              "vi": "Phụ trách mảng thị trường mới nổi của Alpine Capital, đang xây dựng danh mục Việt Nam đầu tiên trước thời điểm nâng hạng."},
         h={"li": "https://www.linkedin.com/in/svef-demo-lara-weber", "web": "https://alpinecapital.example.ch"}),
    dict(id=102, n="Trần Minh Quân", i="TQ", c="#1F3A5F", oid="lachhuyen", ind="inf",
         mkts=["vn", "asean"], dir=True, tier="inst", picks=["A", "F"], day3=True,
         t={"en": "Commercial Director", "vi": "Giám đốc Thương mại"},
         bio={"en": "Runs commercial operations at Lach Huyen and will host part of the Day 3 field visit.",
              "vi": "Phụ trách khai thác thương mại tại Lạch Huyện và sẽ tiếp đoàn trong chuyến thực địa Ngày 3."},
         h={"li": "https://www.linkedin.com/in/svef-demo-tran-minh-quan", "wa": "+84 90 214 7788"}),
    dict(id=103, n="Dr. Claudia Berger", i="CB", c="#0F5A4A", oid="helvetiamed", ind="hea",
         mkts=["ch", "eu", "vn"], dir=True, tier="sponsor", picks=["B", "D"], day3=False,
         t={"en": "Head of Regulatory Affairs, APAC", "vi": "Giám đốc Pháp chế, châu Á - Thái Bình Dương"},
         bio={"en": "Leads medical-device registration across APAC and is mapping Viet Nam's post-FTA approval route.",
              "vi": "Phụ trách đăng ký thiết bị y tế toàn khu vực và đang nghiên cứu quy trình phê duyệt tại Việt Nam sau FTA."},
         h={"li": "https://www.linkedin.com/in/svef-demo-claudia-berger"}),
    dict(id=104, n="Nguyễn Thu Hà", i="TH", c="#3E7742", oid="northwind", ind="eng",
         mkts=["vn", "asean"], dir=True, tier="inst", picks=["B", "E"], day3=True,
         t={"en": "Director of Project Finance", "vi": "Giám đốc Tài chính dự án"},
         bio={"en": "Structures project finance for offshore wind in the north and is looking for Swiss climate capital.",
              "vi": "Thu xếp tài chính dự án điện gió ngoài khơi miền Bắc và đang tìm nguồn vốn khí hậu từ Thụy Sĩ."},
         h={"li": "https://www.linkedin.com/in/svef-demo-nguyen-thu-ha", "wa": "+84 91 335 0142"}),
    dict(id=105, n="Andreas Küng", i="AK", c="#800000", oid="bachninh", ind="ind",
         mkts=["ch", "vn"], dir=True, tier="inst", picks=["A", "E"], day3=True,
         t={"en": "Chief Operating Officer", "vi": "Giám đốc Vận hành"},
         bio={"en": "Swiss-trained operations lead at a Bac Ninh electronics group, running the Industry 4.0 retooling programme.",
              "vi": "Giám đốc vận hành đào tạo tại Thụy Sĩ của một tập đoàn điện tử Bắc Ninh, phụ trách chương trình tái trang bị Công nghiệp 4.0."},
         h={"li": "https://www.linkedin.com/in/svef-demo-andreas-kueng", "web": "https://bnam.example.vn"}),
    dict(id=106, n="Sofia Meier", i="SM", c="#224861", oid="lemanai", ind="tec",
         mkts=["ch", "eu"], dir=True, tier="indiv", picks=["C", "E"], day3=False,
         t={"en": "Co-founder & CTO", "vi": "Đồng sáng lập & Giám đốc Công nghệ"},
         bio={"en": "Builds document-intelligence models for banks and regulators, and is hiring an engineering team in Viet Nam.",
              "vi": "Xây dựng mô hình xử lý tài liệu cho ngân hàng và cơ quan quản lý, đang tuyển đội kỹ thuật tại Việt Nam."},
         h={"li": "https://www.linkedin.com/in/svef-demo-sofia-meier", "x": "@sofiameier"}),
    dict(id=107, n="Lê Hoàng Yến", i="HY", c="#754715", oid="mekonglaw", ind="leg",
         mkts=["vn", "asean"], dir=True, tier="indiv", picks=["C", "F"], day3=False,
         t={"en": "Managing Partner", "vi": "Luật sư điều hành"},
         bio={"en": "Advises foreign investors on market entry and has worked on several EFTA-related mandates.",
              "vi": "Tư vấn nhà đầu tư nước ngoài về gia nhập thị trường, đã tham gia nhiều vụ việc liên quan tới EFTA."},
         h={"li": "https://www.linkedin.com/in/svef-demo-le-hoang-yen"}),
    dict(id=108, n="Marc Steiner", i="MS", c="#0A0A0A", oid="bernedual", ind="edu",
         mkts=["ch", "vn"], dir=True, tier="indiv", picks=["C", "E"], day3=False,
         t={"en": "Programme Director", "vi": "Giám đốc Chương trình"},
         bio={"en": "Runs Swiss dual vocational programmes in South East Asia and is scoping the SVEF talent initiative.",
              "vi": "Điều hành chương trình đào tạo kép Thụy Sĩ tại Đông Nam Á, đang xây dựng sáng kiến nhân lực SVEF."},
         h={"li": "https://www.linkedin.com/in/svef-demo-marc-steiner"}),
    dict(id=109, n="Phạm Xuân Bình", i="XB", c="#B31018", oid="redriver", ind="inf",
         mkts=["vn"], dir=False, tier="guest", picks=["A", "F"], day3=True,
         t={"en": "Managing Director", "vi": "Tổng giám đốc"},
         bio={"en": "Runs a Hai Phong forwarding business attending as a guest.",
              "vi": "Điều hành doanh nghiệp giao nhận tại Hải Phòng, tham dự với tư cách khách mời."},
         h={}),
    dict(id=110, n="Mai An", i="MA", c="#0E273D", oid="imt", ind="tec",
         mkts=["vn", "eu"], dir=True, tier="indiv", picks=["C", "E"], day3=False,
         t={"en": "Chief Executive Officer", "vi": "Tổng giám đốc"},
         bio={"en": "Leads the engineering partner behind this forum's website and delegate app.",
              "vi": "Lãnh đạo đối tác kỹ thuật xây dựng website và ứng dụng đại biểu của diễn đàn."},
         h={"li": "https://www.linkedin.com/in/svef-demo-mai-an", "web": "https://imt-soft.com"}),
    dict(id=111, n="Beatrice Fontana", i="BF", c="#7A5C00", oid="alpinecap", ind="fin",
         mkts=["ch", "eu"], dir=False, tier="sponsor", picks=["B", "D"], day3=False,
         t={"en": "Investor Relations", "vi": "Quan hệ Nhà đầu tư"},
         bio={"en": "Handles institutional investor relations for the firm's Asia mandates.",
              "vi": "Phụ trách quan hệ nhà đầu tư tổ chức cho các danh mục châu Á."},
         h={}),
    dict(id=112, n="Đỗ Quang Huy", i="QH", c="#3E7742", oid="northwind", ind="eng",
         mkts=["vn", "asean"], dir=True, tier="inst", picks=["B", "D"], day3=True,
         t={"en": "Head of Grid Integration", "vi": "Trưởng bộ phận Đấu nối lưới"},
         bio={"en": "Works on grid connection and storage siting for northern renewable projects.",
              "vi": "Phụ trách đấu nối lưới và bố trí lưu trữ cho các dự án năng lượng tái tạo miền Bắc."},
         h={"wa": "+84 93 887 2205"}),
    dict(id=113, n="Stefan Brun", i="SB", c="#0F5A4A", oid="helvetiamed", ind="hea",
         mkts=["ch"], dir=False, tier="guest", picks=["D"], day3=False,
         t={"en": "Regional Sales Manager", "vi": "Quản lý Kinh doanh khu vực"},
         bio={"en": "Attending as a guest of the sponsor delegation.",
              "vi": "Tham dự với tư cách khách mời của đoàn nhà tài trợ."},
         h={}),
    dict(id=114, n="Vũ Thị Lan", i="VL", c="#754715", oid="mekonglaw", ind="leg",
         mkts=["vn", "eu"], dir=True, tier="indiv", picks=["A", "F"], day3=False,
         t={"en": "Senior Associate, IP", "vi": "Luật sư cao cấp, Sở hữu trí tuệ"},
         bio={"en": "Specialises in IP protection and trade compliance for European clients in Viet Nam.",
              "vi": "Chuyên về bảo hộ sở hữu trí tuệ và tuân thủ thương mại cho khách hàng châu Âu tại Việt Nam."},
         h={"li": "https://www.linkedin.com/in/svef-demo-vu-thi-lan"}),
]


# ---------------------------------------------------------------------------
# The signed-in delegate. The app is gated at login and every user has already
# registered on the website, so there is no registration flow inside it: the
# profile is seeded from the answers this person gave on the live RSVP form.
# Kept deliberately close to the multi-event demo's `me` so the two builds tell
# the same story about the same person.
# ---------------------------------------------------------------------------
SELF = dict(id=200, self=True, n="Anh Trần", i="AT", c="#E42026", oid="zegoe", ind="fin",
            mkts=["vn", "ch", "asean"], dir=True, tier="indiv", picks=["A", "F"], day3=True,
            t={"en": "Investment Director", "vi": "Giám đốc Đầu tư"},
            bio={"en": "Invests in mid-sized Vietnamese manufacturing and logistics businesses, and is at the forum looking for Swiss technology partners for the current portfolio.",
                 "vi": "Đầu tư vào doanh nghiệp sản xuất và logistics quy mô vừa tại Việt Nam, tham dự diễn đàn để tìm đối tác công nghệ Thụy Sĩ cho danh mục hiện tại."},
            h={"li": "https://www.linkedin.com/in/svef-demo-tran-quoc-anh",
               "x": "@tqanh_vc", "web": "https://zegoe.example.vn", "wa": "+84 90 118 6420"})

COLLEAGUE = dict(id=201, n="Ngô Bảo Châu", i="BC", c="#B31018", oid="zegoe", ind="fin",
                 mkts=["vn"], dir=True, tier="indiv", picks=["B", "D"], day3=False,
                 t={"en": "Principal", "vi": "Giám đốc đầu tư"},
                 bio={"en": "Covers industrials and logistics for Zegoe Capital.",
                      "vi": "Phụ trách mảng công nghiệp và logistics tại Zegoe Capital."},
                 h={"li": "https://www.linkedin.com/in/svef-demo-ngo-bao-chau"})

# The answers this delegate gave on the live RSVP form, keyed by the profile-map
# names so mkdata.py can resolve them to the form's real field ids.
SELF_REG = {
    "firstName": "Anh",
    "lastName": "Trần",
    "email": "anh.tran@zegoe.example.vn",
    "phone": "+84 90 118 6420",
    "country": "Viet Nam",
    "jobTitle": "Investment Director",
    "org": "Zegoe Capital",
    "sectors": "Finance & Banking, Logistics & Supply Chain Management",
    "sectorOther": "",
    "delegation": "Ngô Bảo Châu, Principal",
    "round1": "Session A: Mobility & Trade Connectivity",
    "round2": "Session F: Legal Frameworks & Market Entry",
    "day3": "Yes - Please send me more details",
    "membership": "SVEF Individual Member",
    "support": "No - I am not interested",
    "directory": "Yes - Include my organisation/company name",
    "sponsor": "No - Not at this time",
    "dietary": "",
    "questions": "",
}

MEETINGS = [
    dict(id="m1", a=101, b=200, status="confirmed", day=2, time="12:45 – 13:00",
         place={"en": "Networking lounge, main forum floor", "vi": "Khu networking, sảnh chính"},
         created="2026-09-02"),
    dict(id="m2", a=200, b=104, status="pending", day=2, time="16:00 – 16:15", place=None,
         created="2026-09-04"),
    dict(id="m3", a=102, b=200, status="pending", day=3, time="13:00 – 13:30", place=None,
         created="2026-09-05",
         msg={"en": "We are both on the Hai Phong visit. Shall we talk over lunch at KBC?",
              "vi": "Hai bên đều tham gia chuyến Hải Phòng. Mình trao đổi trong bữa trưa tại KBC nhé?"}),
    dict(id="m4", a=200, b=106, status="declined", day=2, time="11:00 – 11:15", place=None,
         created="2026-09-01"),
    # Requests that have nothing to do with the signed-in delegate, so the back
    # office view is a picture of the whole event rather than of one person.
    dict(id="m5", a=103, b=112, status="confirmed", day=2, time="09:00 – 09:15",
         place={"en": "Exhibition area", "vi": "Khu triển lãm"}, created="2026-09-03"),
    dict(id="m6", a=105, b=101, status="pending", day=2, time="16:00 – 16:15", place=None,
         created="2026-09-05"),
    dict(id="m7", a=107, b=114, status="confirmed", day=2, time="12:45 – 13:00",
         place={"en": "Business lunch tables", "vi": "Khu tiệc trưa"}, created="2026-09-04"),
    dict(id="m8", a=108, b=110, status="pending", day=2, time="11:00 – 11:15", place=None,
         created="2026-09-06"),
    dict(id="m9", a=112, b=104, status="cancelled", day=3, time="13:00 – 13:30", place=None,
         created="2026-08-31"),
]

# Connection requests between attendees. The app shows a delegate only their own;
# the back office needs the whole graph to answer "who is trying to reach whom".
CONNECTIONS = [
    dict(a=101, b=200, state="linked",   at="2026-09-02"),
    dict(a=200, b=104, state="linked",   at="2026-09-04"),
    dict(a=102, b=200, state="pending",  at="2026-09-05",
         msg="We are both on the Hai Phong field visit. I run the terminal you will be "
             "briefed at, and would like to talk about the logistics side beforehand."),
    dict(a=103, b=112, state="linked",   at="2026-09-01"),
    dict(a=105, b=101, state="pending",  at="2026-09-05",
         msg="We are both in Session A. I would like to understand your emerging-market "
             "mandate before we talk about the Bac Ninh retooling programme."),
    dict(a=107, b=114, state="linked",   at="2026-09-03"),
    dict(a=108, b=110, state="linked",   at="2026-09-02"),
    dict(a=112, b=104, state="declined", at="2026-08-30"),
    dict(a=114, b=106, state="pending",  at="2026-09-06",
         msg="Your document-intelligence work overlaps with what our clients ask us "
             "about IP and compliance. Could we compare notes at the forum?"),
    dict(a=110, b=200, state="linked",   at="2026-08-28",
         msg="We build the app you are reading this in. Say hello at the forum."),
    dict(a=109, b=102, state="blocked",  at="2026-09-04"),
    dict(a=113, b=200, state="pending",  at="2026-09-06",
         msg="I am with the Helvetia MedTech delegation. You mentioned logistics "
             "investments; we are looking for cold-chain partners in the north."),
]

CHATS = {
    101: [
        dict(me=False, t="09:12", m={"en": "Hello, I saw you picked Session A as well. Are you staying for the Hai Phong day?",
                                     "vi": "Chào anh, em thấy anh cũng chọn Session A. Anh có ở lại ngày Hải Phòng không ạ?"}),
        dict(me=True, t="09:20", m={"en": "I am, yes. Happy to compare notes on the port briefing.",
                                    "vi": "Có ạ. Rất sẵn lòng trao đổi về phần giới thiệu cảng."}),
        dict(me=False, t="09:24", m={"en": "Perfect. I have sent a meeting request for the break after Session I.",
                                     "vi": "Tuyệt ạ. Em đã gửi lời mời gặp vào giờ nghỉ sau Session I."}),
    ],
    104: [
        dict(me=True, t="14:02", m={"en": "Hello, I would like to understand the storage side of your pipeline.",
                                    "vi": "Chào chị, em muốn tìm hiểu về mảng lưu trữ trong danh mục dự án của chị."}),
        dict(me=False, t="14:31", m={"en": "Of course. Session B covers most of it, and we can talk after.",
                                     "vi": "Vâng ạ. Session B nói phần lớn nội dung đó, mình trao đổi thêm sau phiên nhé."}),
    ],
    110: [
        dict(me=False, t="08:40", m={"en": "The delegate app is ours, by the way. Tell us if anything reads wrong.",
                                     "vi": "Ứng dụng đại biểu là do bên mình làm. Anh thấy chỗ nào chưa ổn thì báo giúp nhé."}),
    ],
}

DOCS = [
    dict(t={"en": "Ha Noi 2026 delegate pack", "vi": "Tài liệu đại biểu Hà Nội 2026"},
         by="SVEF Secretariat", kind="PDF", size="3.4 MB", day=0, tag="logistics"),
    dict(t={"en": "EFTA-Viet Nam FTA: what changes for business",
            "vi": "Hiệp định EFTA - Việt Nam: doanh nghiệp thay đổi những gì"},
         by="SVEF Secretariat", kind="PDF", size="2.1 MB", day=2, tag="briefing"),
    dict(t={"en": "Session I briefing: capital markets and investment flows",
            "vi": "Tài liệu Session I: thị trường vốn và dòng đầu tư"},
         by="Alpine Capital Partners", kind="PDF", size="5.8 MB", day=2, tag="session"),
    dict(t={"en": "Session II briefing: smart manufacturing and supply chains",
            "vi": "Tài liệu Session II: sản xuất thông minh và chuỗi cung ứng"},
         by="Bac Ninh Advanced Manufacturing", kind="PDF", size="7.2 MB", day=2, tag="session"),
    dict(t={"en": "Day 3 field visit: Hai Phong route and site notes",
            "vi": "Thực địa Ngày 3: lộ trình Hải Phòng và ghi chú điểm đến"},
         by="SVEF Secretariat", kind="PDF", size="4.9 MB", day=3, tag="logistics"),
    dict(t={"en": "Delegation support package: airport pickup and hotels",
            "vi": "Gói hỗ trợ đoàn: đón sân bay và khách sạn"},
         by="SVEF Secretariat", kind="PDF", size="1.2 MB", day=0, tag="logistics"),
]


# ---------------------------------------------------------------------------
# An attendee IS a registration, so the two are one record rather than two lists
# that have to be kept in step. Status and country are set here; the email is
# derived from the organisation's own domain in mkdata.py so it stays consistent
# when an organisation is renamed.
# ---------------------------------------------------------------------------
REGISTRATION = {
    101: ("confirmed", "Switzerland", "2026-08-18"),
    102: ("pending",   "Viet Nam",    "2026-08-29"),
    103: ("confirmed", "Switzerland", "2026-08-19"),
    104: ("confirmed", "Viet Nam",    "2026-08-20"),
    105: ("confirmed", "Viet Nam",    "2026-08-22"),
    106: ("pending",   "Switzerland", "2026-09-01"),
    107: ("confirmed", "Viet Nam",    "2026-08-25"),
    108: ("confirmed", "Switzerland", "2026-08-26"),
    109: ("waitlist",  "Viet Nam",    "2026-09-03"),
    110: ("confirmed", "Viet Nam",    "2026-08-21"),
    111: ("declined",  "Switzerland", "2026-08-28"),
    112: ("confirmed", "Viet Nam",    "2026-08-27"),
    113: ("waitlist",  "Switzerland", "2026-09-02"),
    114: ("confirmed", "Viet Nam",    "2026-08-30"),
    200: ("confirmed", "Viet Nam",    "2026-08-17"),
    201: ("confirmed", "Viet Nam",    "2026-08-17"),
}
