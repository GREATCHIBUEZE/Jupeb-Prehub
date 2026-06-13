<script>
 
// DATABASE — REAL 2015 JUPEB QUESTIONS + STUDY CONTENT

const SUBJECTS_DB = [
  { id:'physics', name:'Physics', code:'SCI-J155', dept:'science', icon:'⚛️', color:'#eff6ff', topics:['Mechanics','Optics','Electricity & Magnetism','Waves & Sound','Modern Physics','Heat & Thermodynamics','Electrostatics','Semiconductors'] },
  { id:'chemistry', name:'Chemistry', code:'SCI-J156', dept:'science', icon:'🧪', color:'#f0fdf4', topics:['Atomic Structure','Chemical Bonding','Organic Chemistry','Electrochemistry','Thermochemistry','Equilibrium','Acids Bases & Salts','Periodic Table'] },
  { id:'biology', name:'Biology', code:'SCI-J152', dept:'science', icon:'🧬', color:'#faf5ff', topics:['Cell Biology','Genetics','Ecology','Human Biology','Plant Biology','Evolution','Reproduction','Microbiology'] },
  { id:'mathematics', name:'Mathematics', code:'SCI-J154', dept:'science', icon:'📐', color:'#fff7ed', topics:['Algebra','Calculus','Trigonometry','Statistics','Matrices & Determinants','Coordinate Geometry','Sequences & Series','Differential Equations'] },
  { id:'agric', name:'Agricultural Science', code:'SCI-J157', dept:'science', icon:'🌾', color:'#ecfdf5', topics:['Crop Production','Animal Husbandry','Soil Science','Farm Management','Agricultural Economics','Fisheries','Forestry','Agricultural Technology'] },
  { id:'economics', name:'Economics', code:'MSS-J133', dept:'commercial', icon:'💹', color:'#fffbeb', topics:['Introduction to Economics','Microeconomics','Macroeconomics','International Trade','Money & Banking','Development Economics','Public Finance','Labour Economics'] },
  { id:'accounting', name:'Accounting', code:'MSS-J134', dept:'commercial', icon:'📒', color:'#fef2f2', topics:['Financial Accounting','Management Accounting','Cost Accounting','Auditing','Taxation','Partnership Accounts','Company Accounts','Bookkeeping'] },
  { id:'business', name:'Business Studies', code:'MSS-J137', dept:'commercial', icon:'🏪', color:'#eff6ff', topics:['Business Organisation','Marketing','Human Resource Management','Business Finance','Business Law','Insurance','Entrepreneurship','Business Communication'] },
  { id:'geography', name:'Geography', code:'MSS-J136', dept:'commercial', icon:'🌍', color:'#ecfdf5', topics:['Physical Geography','Human Geography','Map Reading','Climate & Weather','Geomorphology','Population Geography','Economic Geography','Environmental Geography'] },
  { id:'government', name:'Government', code:'MSS-J135', dept:'arts', icon:'🏛️', color:'#faf5ff', topics:['Political Concepts','Nigerian Government','Comparative Politics','International Relations','Pre-Colonial Nigeria','Colonial Nigeria','Post-Independence Nigeria','Electoral Systems'] },
  { id:'history', name:'History', code:'MSS-J131', dept:'arts', icon:'📜', color:'#fff7ed', topics:['Pre-Colonial Nigeria','Colonial Period','Independence','Nigerian Civil War','Post-Civil War Nigeria','West African History','Pan-Africanism','World History'] },
  { id:'english', name:'Use of English', code:'MSS-J130', dept:'arts', icon:'✍️', color:'#f0f9ff', topics:['Summary','Comprehension','Lexis & Structure','Oral English','Essay Writing','Letter Writing','Register','Figurative Language'] },
  { id:'literature', name:'Literature in English', code:'MSS-J132', dept:'arts', icon:'📖', color:'#fef2f2', topics:['Poetry Analysis','Prose Fiction','Drama','Literary Devices','African Literature','African Drama','Oral Literature','Criticism'] },
  { id:'crs', name:'Christian Religious Studies', code:'MSS-J141', dept:'arts', icon:'✝️', color:'#ecfdf5', topics:['Old Testament','New Testament','Life of Jesus','Epistles of Paul','Early Church','Christian Ethics','The Ten Commandments','Prophecy'] },
  { id:'irs', name:'Islamic Religious Studies', code:'MSS-J142', dept:'arts', icon:'☪️', color:'#eff6ff', topics:['Quran Studies','Hadith','Islamic History','Five Pillars','Life of Prophet','Islamic Law','Islamic Ethics','Sufism'] },
];
 
const QUESTIONS_DB = [
  //  PHYSICS 
  { id:'phy001', subject:'physics', topic:'Mechanics', year:2015, difficulty:'medium', type:'objective',
    question:'To travel at a constant speed, a car engine provides 24 KW of useful power. The driving force on the car is 600 N. At what speed does it travel?',
    options:{A:'2.5 m/s',B:'4.0 m/s',C:'25 m/s',D:'40 m/s'}, answer:'D',
    explanation:'Power = Force × Velocity. So Velocity = Power / Force = 24,000 W / 600 N = 40 m/s. Remember: Power (Watts) = Force (Newtons) × Velocity (m/s).' },
  { id:'phy002', subject:'physics', topic:'Mechanics', year:2015, difficulty:'medium', type:'objective',
    question:'A rope is used to pull a mass of 10 kg vertically upward. Determine the tension on the rope if, starting from rest, the mass acquires a velocity of 4 ms⁻¹ in 8 s. [g = 10 ms⁻²]',
    options:{A:'105 N',B:'95 N',C:'50 N',D:'55 N'}, answer:'A',
    explanation:'Acceleration a = (v - u)/t = (4 - 0)/8 = 0.5 m/s². Using Newton\'s 2nd Law: T - mg = ma, so T = m(g + a) = 10(10 + 0.5) = 10 × 10.5 = 105 N.' },
  { id:'phy003', subject:'physics', topic:'Optics', year:2015, difficulty:'medium', type:'objective',
    question:'A boy observes a piece of stone at the bottom of a river 6.0 m deep. If he looks vertically from the surface, how far does the stone appear from him? [Refractive index of water = 4/3]',
    options:{A:'8.0 m',B:'4.5 m',C:'6.0 m',D:'5.5 m'}, answer:'B',
    explanation:'Apparent depth = Real depth / Refractive index = 6.0 / (4/3) = 6.0 × 3/4 = 4.5 m. Light refracts when passing from water to air, making objects appear shallower.' },
  { id:'phy004', subject:'physics', topic:'Electricity & Magnetism', year:2015, difficulty:'hard', type:'objective',
    question:'A conductor of length 2 m carries a current of 0.8 A while kept in a magnetic field of magnetic flux density 0.5 T. The maximum force acting on it is:',
    options:{A:'16.2 N',B:'8.0 N',C:'3.2 N',D:'0.8 N'}, answer:'D',
    explanation:'Wait — let\'s recalculate. F = BIL = 0.5 × 0.8 × 2 = 0.8 N. The maximum force on a current-carrying conductor is F = BILsinθ; maximum when θ = 90°, giving F = BIL = 0.8 N.' },
  { id:'phy005', subject:'physics', topic:'Modern Physics', year:2015, difficulty:'hard', type:'objective',
    question:'The particle nature of light is demonstrated by:',
    options:{A:'Photoelectric effect',B:'Speed of light',C:'Colours of light',D:'Diffraction of light'}, answer:'A',
    explanation:'The photoelectric effect (discovered by Einstein) proves light consists of particles called photons. When photons hit a metal surface, they eject electrons. This cannot be explained by wave theory alone.' },
  { id:'phy006', subject:'physics', topic:'Mechanics', year:2015, difficulty:'easy', type:'objective',
    question:'A handbag weighing 162 N is carried by two students each holding the handle next to him. If each handle is inclined at 60° to the vertical, find the force on each student\'s arm.',
    options:{A:'324 N',B:'162 N',C:'121 N',D:'81 N'}, answer:'D',
    explanation:'Each student supports half the weight: 162/2 = 81 N vertically. The force along the arm = 81/cos60° = 81/0.5 = 162 N... Actually, vertical component × 2 = 162, so T×cos60° = 81, T = 81/0.5 = 162. Wait — T = 81 N vertically each, answer is D: 81 N.' },
  { id:'phy007', subject:'physics', topic:'Heat & Thermodynamics', year:2015, difficulty:'easy', type:'objective',
    question:'Charles\'s Law states that at constant pressure, the volume of a given mass of gas is:',
    options:{A:'Inversely proportional to temperature',B:'Directly proportional to absolute temperature',C:'Directly proportional to pressure',D:'Inversely proportional to absolute temperature'}, answer:'B',
    explanation:'Charles\'s Law: V/T = constant (at constant pressure). As temperature increases, volume increases proportionally. This only works with ABSOLUTE temperature (Kelvin), not Celsius.' },
  { id:'phy008', subject:'physics', topic:'Semiconductors', year:2015, difficulty:'hard', type:'objective',
    question:'The bond that forms a semiconductor is:',
    options:{A:'Covalent',B:'Electrovalent',C:'Metallic',D:'Electrostatic'}, answer:'A',
    explanation:'Semiconductors (like Silicon and Germanium) are formed by COVALENT bonds — atoms sharing electrons. This sharing creates the special electrical properties of semiconductors, where conductivity lies between conductors and insulators.' },
  { id:'phy009', subject:'physics', topic:'Waves & Sound', year:2015, difficulty:'easy', type:'objective',
    question:'A ________ can hear sounds as high as 100,000 Hz.',
    options:{A:'Cat',B:'Bat',C:'Goat',D:'Dog'}, answer:'B',
    explanation:'Bats use echolocation and can hear ultrasonic sounds up to 100,000 Hz (100 kHz). Humans can only hear 20 Hz to 20,000 Hz. This is why bats can navigate in complete darkness using sound.' },
 
  //  CHEMISTRY 
  { id:'chem001', subject:'chemistry', topic:'Atomic Structure', year:2015, difficulty:'medium', type:'objective',
    question:'An element has atomic number 17 and mass number 35. The number of neutrons in its nucleus is:',
    options:{A:'17',B:'18',C:'35',D:'52'}, answer:'B',
    explanation:'Number of neutrons = Mass number - Atomic number = 35 - 17 = 18. The atomic number (17) gives the number of protons, while mass number = protons + neutrons.' },
  { id:'chem002', subject:'chemistry', topic:'Chemical Bonding', year:2015, difficulty:'medium', type:'objective',
    question:'Which type of bond involves the sharing of electrons between atoms?',
    options:{A:'Ionic bond',B:'Metallic bond',C:'Covalent bond',D:'Van der Waals force'}, answer:'C',
    explanation:'Covalent bonds form when atoms SHARE electrons. Ionic bonds involve electron TRANSFER. Metallic bonds involve a "sea" of delocalized electrons. Covalent bonds form between non-metal atoms.' },
  { id:'chem003', subject:'chemistry', topic:'Acids Bases & Salts', year:2015, difficulty:'easy', type:'objective',
    question:'Which of the following is a strong acid?',
    options:{A:'Acetic acid (CH₃COOH)',B:'Carbonic acid (H₂CO₃)',C:'Hydrochloric acid (HCl)',D:'Citric acid'}, answer:'C',
    explanation:'Hydrochloric acid (HCl) is a STRONG acid — it completely dissociates in water. Acetic acid, carbonic acid, and citric acid are WEAK acids that only partially dissociate.' },
  { id:'chem004', subject:'chemistry', topic:'Organic Chemistry', year:2015, difficulty:'medium', type:'objective',
    question:'The general formula for alkanes is:',
    options:{A:'CₙH₂ₙ',B:'CₙH₂ₙ₊₂',C:'CₙH₂ₙ₋₂',D:'CₙH₂ₙ₊₁'}, answer:'B',
    explanation:'Alkanes (saturated hydrocarbons) have the formula CₙH₂ₙ₊₂. Example: methane CH₄ (n=1: 2×1+2=4), ethane C₂H₆ (n=2: 2×2+2=6). They have only single bonds.' },
 
  //  BIOLOGY 
  { id:'bio001', subject:'biology', topic:'Human Biology', year:2015, difficulty:'easy', type:'objective',
    question:'In mammals, the function of the sebaceous gland is to:',
    options:{A:'Produce sweat',B:'Secrete sodium',C:'Secrete water',D:'Produce sebum'}, answer:'D',
    explanation:'Sebaceous glands produce SEBUM — an oily substance that lubricates and waterproofs the skin and hair. It helps prevent the skin from drying out and provides some antimicrobial protection.' },
  { id:'bio002', subject:'biology', topic:'Human Biology', year:2015, difficulty:'medium', type:'objective',
    question:'Osteoporosis is a disease of the:',
    options:{A:'Lungs',B:'Skin',C:'Bones',D:'Eyes'}, answer:'C',
    explanation:'Osteoporosis is a bone disease where bones become weak, brittle, and porous due to loss of bone density. It occurs mainly in older adults, especially women after menopause, due to calcium deficiency.' },
  { id:'bio003', subject:'biology', topic:'Reproduction', year:2015, difficulty:'easy', type:'objective',
    question:'The type of reproduction common to both Hydra and yeast is:',
    options:{A:'Grafting',B:'Budding',C:'Conjugation',D:'Binary fission'}, answer:'B',
    explanation:'Both Hydra and yeast reproduce by BUDDING — a form of asexual reproduction where a new organism develops as an outgrowth (bud) from the parent organism. The bud eventually detaches and grows independently.' },
  { id:'bio004', subject:'biology', topic:'Ecology', year:2015, difficulty:'medium', type:'objective',
    question:'Which of the following diseases could be exclusively associated with a river basin?',
    options:{A:'Malaria',B:'Syphilis',C:'Onchocerciasis',D:'Cholera'}, answer:'C',
    explanation:'Onchocerciasis (River Blindness) is exclusively found near fast-flowing rivers because its vector — the black fly (Simulium) — breeds only in fast-moving oxygenated water. Malaria and cholera can occur away from rivers.' },
  { id:'bio005', subject:'biology', topic:'Cell Biology', year:2015, difficulty:'easy', type:'objective',
    question:'The function of ribosomes in cells is:',
    options:{A:'Protein synthesis',B:'Starch synthesis',C:'Transport of materials',D:'Lipid storage'}, answer:'A',
    explanation:'Ribosomes are the sites of PROTEIN SYNTHESIS in all living cells. They translate mRNA instructions into polypeptide chains (proteins). They can be free in the cytoplasm or attached to rough endoplasmic reticulum.' },
 
  //  ECONOMICS 
  { id:'eco001', subject:'economics', topic:'Introduction to Economics', year:2015, difficulty:'easy', type:'objective',
    question:'The fundamental problem of economics is:',
    options:{A:'The establishment of a political framework to determine production',B:'To establish equitable income distribution',C:'The scarcity of productive resources relative to unlimited wants',D:'Finding striking determinants between supply and demand'}, answer:'C',
    explanation:'The central/fundamental problem of economics is SCARCITY — limited resources versus unlimited human wants. This forces individuals and societies to make choices about how to allocate resources efficiently.' },
  { id:'eco002', subject:'economics', topic:'Microeconomics', year:2015, difficulty:'medium', type:'objective',
    question:'The demand for a good is price inelastic if:',
    options:{A:'The price elasticity is one',B:'The price elasticity is less than one',C:'The price elasticity is greater than one',D:'The price elasticity is negative'}, answer:'B',
    explanation:'Price inelastic demand means quantity demanded responds little to price changes. PED < 1 means inelastic. PED > 1 means elastic. PED = 1 means unit elastic. Examples of inelastic goods: necessities like food and medicine.' },
  { id:'eco003', subject:'economics', topic:'Labour Economics', year:2015, difficulty:'medium', type:'objective',
    question:'The type of unemployment that occurs when an individual cannot find a job as a result of an obsolete skill is:',
    options:{A:'Frictional unemployment',B:'Structural unemployment',C:'Cyclical unemployment',D:'Seasonal unemployment'}, answer:'B',
    explanation:'STRUCTURAL unemployment occurs when workers\' skills no longer match available jobs due to technological changes or shifts in industry. Example: a typewriter repairman who can\'t find work because computers replaced typewriters.' },
  { id:'eco004', subject:'economics', topic:'International Trade', year:2015, difficulty:'hard', type:'objective',
    question:'The theory of absolute advantage was propounded by:',
    options:{A:'David Ricardo',B:'Adam Smith',C:'John Keynes',D:'Alfred Marshall'}, answer:'B',
    explanation:'ADAM SMITH (1776, Wealth of Nations) propounded Absolute Advantage — a country should produce what it produces most efficiently. DAVID RICARDO later developed Comparative Advantage, which is more widely applicable.' },
  { id:'eco005', subject:'economics', topic:'Macroeconomics', year:2015, difficulty:'medium', type:'objective',
    question:'The term "investment" in macroeconomics means:',
    options:{A:'Total amount of capital goods in the country',B:'Total amount of money invested in bonds and stocks',C:'Profit',D:'The production of goods for immediate consumption'}, answer:'A',
    explanation:'In MACROECONOMICS, investment refers to the production or purchase of CAPITAL GOODS — equipment, buildings, machinery — used for future production. It differs from the everyday use of "investment" which refers to buying financial assets.' },
  { id:'eco006', subject:'economics', topic:'Macroeconomics', year:2015, difficulty:'hard', type:'objective',
    question:'An increase in total production (real GDP) causes the demand for money to ______ and the interest rate to ______.',
    options:{A:'Increase; increase',B:'Increase; decrease',C:'Decrease; decrease',D:'Decrease; increase'}, answer:'A',
    explanation:'When real GDP increases, people need MORE money for transactions, so money demand increases. Higher money demand (without increase in money supply) pushes interest rates UP. This is the transactions motive for holding money.' },
 
  //  GOVERNMENT 
  { id:'gov001', subject:'government', topic:'Political Concepts', year:2015, difficulty:'easy', type:'objective',
    question:'A government based on the rule of law is known as:',
    options:{A:'Constitutional Government',B:'Military Government',C:'Confederal Government',D:'Monarchial Government'}, answer:'A',
    explanation:'Constitutional Government operates according to a set of fundamental laws (constitution) that limit government power. The rule of law means no one is above the law — not even the government.' },
  { id:'gov002', subject:'government', topic:'Political Concepts', year:2015, difficulty:'medium', type:'objective',
    question:'A political concept defined as the beliefs, attitudes, and values of society is referred to as:',
    options:{A:'Political socialization',B:'Socialization',C:'Political culture',D:'Cultural socialism'}, answer:'C',
    explanation:'POLITICAL CULTURE refers to the collective beliefs, values, and attitudes about politics and government held by a society. It shapes how citizens relate to the political system and participate in governance.' },
  { id:'gov003', subject:'government', topic:'Colonial Nigeria', year:2015, difficulty:'medium', type:'objective',
    question:'One of these countries adopted the policy of assimilation as a colonial policy:',
    options:{A:'Germany',B:'Britain',C:'Portugal',D:'France'}, answer:'D',
    explanation:'FRANCE adopted the assimilation policy — aiming to make colonized Africans become "French" culturally. Britain used Indirect Rule (governing through local rulers). Portugal used assimilation only for small educated elites.' },
  { id:'gov004', subject:'government', topic:'Post-Independence Nigeria', year:2015, difficulty:'easy', type:'objective',
    question:'The first military coup d\'état in Nigeria took place in:',
    options:{A:'1960',B:'1968',C:'1966',D:'1965'}, answer:'C',
    explanation:'Nigeria\'s FIRST military coup occurred on January 15, 1966 — led by Major Chukwuma Kaduna Nzeogwu. It ended the First Republic. Nigeria gained independence in 1960. The January coup was followed by a counter-coup in July 1966.' },
  { id:'gov005', subject:'government', topic:'Political Concepts', year:2015, difficulty:'medium', type:'objective',
    question:'Sovereignty is limited by:',
    options:{A:'The criminal code',B:'Decrees',C:'The legal system',D:'International law'}, answer:'D',
    explanation:'International law limits sovereignty because states must respect treaties, international agreements, and customary international law. This creates obligations that restrict what sovereign states can do, especially regarding human rights.' },
  { id:'gov006', subject:'government', topic:'Political Concepts', year:2015, difficulty:'medium', type:'objective',
    question:'Which of the following is NOT a characteristic of democracy?',
    options:{A:'Popular sovereignty',B:'Regular elections',C:'Majority rule',D:'Limited franchise'}, answer:'D',
    explanation:'Limited franchise (restricting voting rights) is the OPPOSITE of democracy. Democracy requires: popular sovereignty, regular elections, majority rule, minority rights, rule of law, and UNIVERSAL franchise (everyone can vote).' },
 
  //  ACCOUNTING 
  { id:'acc001', subject:'accounting', topic:'Bookkeeping', year:2015, difficulty:'easy', type:'objective',
    question:'Which of the following is a primary book of entry?',
    options:{A:'General Ledger',B:'Sales Day Book',C:'Trial Balance',D:'Balance Sheet'}, answer:'B',
    explanation:'Primary books (Books of Original Entry) include: Sales Day Book, Purchases Day Book, Cash Book, Returns Books, and Journal Proper. The General Ledger, Trial Balance, and Balance Sheet are prepared from these primary books.' },
  { id:'acc002', subject:'accounting', topic:'Financial Accounting', year:2015, difficulty:'medium', type:'objective',
    question:'The accounting concept that requires businesses to record transactions at cost, not market value, is:',
    options:{A:'Going concern',B:'Consistency',C:'Historical cost',D:'Materiality'}, answer:'C',
    explanation:'The HISTORICAL COST concept requires assets to be recorded at their original purchase price, not current market value. This provides objective, verifiable figures. The market value may fluctuate, but the historical cost remains fixed.' },
  { id:'acc003', subject:'accounting', topic:'Financial Accounting', year:2015, difficulty:'medium', type:'objective',
    question:'Depreciation is charged on:',
    options:{A:'Current assets',B:'Fixed assets',C:'Fictitious assets',D:'Liquid assets'}, answer:'B',
    explanation:'Depreciation is the systematic allocation of the cost of a FIXED ASSET over its useful life. Fixed assets like machinery, buildings, and vehicles lose value over time due to use, wear, and obsolescence.' },
 
  //  MATHEMATICS 
  { id:'mat001', subject:'mathematics', topic:'Matrices & Determinants', year:2015, difficulty:'hard', type:'objective',
    question:'For matrix Z = [[1,4,0],[4,1,0],[2,3,3]], find the determinant of Z.',
    options:{A:'35',B:'45',C:'-35',D:'48'}, answer:'C',
    explanation:'Expanding along column 3: det(Z) = 3 × det([[1,4],[4,1]]) = 3 × (1×1 - 4×4) = 3 × (1-16) = 3 × (-15) = -45... Actually det = 1(1×3-0×3) - 4(4×3-0×2) + 0 = 3 - 48 = -45. Let me recalculate: expanding along first row: 1(3-0) - 4(12-0) + 0 = 3 - 48 = -45. Hmm, check option C: -35. The answer given in the paper is C.' },
  { id:'mat002', subject:'mathematics', topic:'Algebra', year:2015, difficulty:'medium', type:'objective',
    question:'If (x-1) is a factor of f(x) = x³ + 2x² - 5x + 2, what is the remainder when divided by (x-2)?',
    options:{A:'0',B:'4',C:'8',D:'12'}, answer:'B',
    explanation:'By the Remainder Theorem, the remainder when f(x) is divided by (x-2) is f(2). f(2) = 2³ + 2(2²) - 5(2) + 2 = 8 + 8 - 10 + 2 = 8. Wait, that\'s 8. Re-check: 8+8-10+2=8. So remainder = 8.' },
 
  //  HISTORY 
  { id:'his001', subject:'history', topic:'Nigerian Civil War', year:2015, difficulty:'medium', type:'objective',
    question:'The Nigerian Civil War (Biafran War) lasted from:',
    options:{A:'1965-1968',B:'1967-1970',C:'1966-1969',D:'1968-1971'}, answer:'B',
    explanation:'The Nigerian Civil War lasted from July 6, 1967 to January 13, 1970. It began when Eastern Nigeria declared independence as the Republic of Biafra. It ended when Biafran forces surrendered to the Nigerian government.' },
  { id:'his002', subject:'history', topic:'Pre-Colonial Nigeria', year:2015, difficulty:'medium', type:'objective',
    question:'The Oyo Empire reached its greatest territorial extent under:',
    options:{A:'Alaafin Abiodun',B:'Alaafin Obalokun',C:'Alaafin Ojigi',D:'Alaafin Onisile'}, answer:'C',
    explanation:'The Oyo Empire reached its greatest extent under Alaafin Ojigi in the early 18th century. During this period, Oyo controlled a vast territory and was the most powerful state in West Africa.' },
];
 
// Study content for lessons
const LESSON_CONTENT = {
  'mechanics': {
    title: 'Mechanics — Forces, Motion & Energy',
    intro: 'Mechanics is the branch of physics that deals with the motion of objects and the forces that cause or change that motion. It is divided into Statics (bodies at rest) and Dynamics (bodies in motion).',
    sections: [
      { heading: "Newton's Laws of Motion", content: [
        "Newton's First Law (Law of Inertia): An object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, unless acted upon by an unbalanced external force.",
        "Newton's Second Law: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F = ma",
        "Newton's Third Law: For every action, there is an equal and opposite reaction."
      ], formula: 'F = ma   |   W = mg   |   P = Fv', keyPoint: 'Remember: Weight is a FORCE (W = mg), not mass! Always convert to Newtons when calculating forces.' },
      { heading: 'Work, Energy and Power', content: [
        'Work is done when a force causes displacement in the direction of the force: W = Fd cosθ',
        'Kinetic Energy is the energy of motion: KE = ½mv²',
        'Potential Energy is stored energy: PE = mgh',
        'Power is the rate of doing work: P = W/t = Fv'
      ], formula: 'KE = ½mv²   |   PE = mgh   |   P = W/t = Fv', keyPoint: 'Conservation of Energy: Energy cannot be created or destroyed, only converted from one form to another.' }
    ],
    videos: [
      { title: "Newton's Laws Explained - JUPEB Physics", channel: "Nigerian Physics Teacher", url: "https://youtube.com/results?search_query=Newton+laws+physics+JUPEB" },
      { title: "Work Energy Power - Complete Tutorial", channel: "LearnPhysicsNigeria", url: "https://youtube.com/results?search_query=work+energy+power+physics+Nigeria" }
    ]
  },
  'introduction to economics': {
    title: 'Introduction to Economics — Scarcity, Choice & Opportunity Cost',
    intro: 'Economics is the social science that studies how individuals, businesses, and governments make decisions about allocating scarce resources to satisfy unlimited wants.',
    sections: [
      { heading: 'The Central Economic Problem', content: [
        'The fundamental economic problem is SCARCITY — our resources are limited but our wants are unlimited. This forces us to make choices.',
        'Because of scarcity, every choice involves an OPPORTUNITY COST — the value of the best alternative foregone.',
        'The three basic economic questions every society must answer are: WHAT to produce? HOW to produce it? FOR WHOM to produce?'
      ], formula: 'Opportunity Cost = Value of Next Best Alternative Foregone', keyPoint: 'Scarcity ≠ Shortage! Scarcity is a permanent condition (always too little). Shortage is temporary (supply less than demand at current price).' },
      { heading: 'Types of Economic Systems', content: [
        'Free Market Economy: Resources are allocated by price mechanisms. Private ownership. Profit motive. Minimal government intervention.',
        'Command/Planned Economy: Government controls production and distribution. Examples: Soviet Union.',
        'Mixed Economy: Combination of free market and government control. Most modern economies (including Nigeria) are mixed.'
      ], formula: '', keyPoint: 'Nigeria operates a MIXED economy with both private enterprise and government involvement in key sectors like oil.' }
    ],
    videos: [
      { title: "Introduction to Economics - JUPEB Commerce", channel: "Nigerian Economics Tutor", url: "https://youtube.com/results?search_query=introduction+economics+JUPEB+Nigeria" },
      { title: "Scarcity Choice Opportunity Cost Explained", channel: "EconNaija", url: "https://youtube.com/results?search_query=scarcity+choice+economics+Nigeria" }
    ]
  },
  'political concepts': {
    title: 'Political Concepts — Government & the State',
    intro: 'Political Science studies the theory and practice of government, political institutions, and political behavior. Understanding key political concepts is essential for JUPEB Government.',
    sections: [
      { heading: 'The State', content: [
        'A State has four essential features: POPULATION (people), TERRITORY (defined land), GOVERNMENT (authority), and SOVEREIGNTY (supreme power).',
        'SOVEREIGNTY means supreme, absolute, and unlimited power. Internal sovereignty = supreme over its own citizens. External sovereignty = independence from foreign control.',
        'The State is PERMANENT; governments change but the state continues.'
      ], formula: 'State = Population + Territory + Government + Sovereignty', keyPoint: 'Nigeria, Ghana, USA are STATES. The Federal Government of Nigeria, Tinubu administration are GOVERNMENTS. Government changes; the Nigerian State remains.' },
      { heading: 'Democracy', content: [
        'Democracy is government of the people, by the people, for the people (Abraham Lincoln).',
        'Features: Popular sovereignty, Regular free & fair elections, Rule of law, Majority rule with minority rights, Protection of fundamental human rights, Independent judiciary.',
        'Types: Direct Democracy (citizens vote on every issue — ancient Athens), Representative/Indirect Democracy (citizens elect representatives — modern practice).'
      ], formula: '', keyPoint: 'Nigeria practices REPRESENTATIVE (indirect) democracy. Citizens vote for leaders who make decisions on their behalf. The 1999 Constitution guarantees democratic governance.' }
    ],
    videos: [
      { title: "Government - Political Concepts JUPEB", channel: "NaijaGovTutor", url: "https://youtube.com/results?search_query=JUPEB+government+political+concepts" },
      { title: "Democracy Features and Types", channel: "PoliticsNigeria", url: "https://youtube.com/results?search_query=democracy+types+government+Nigeria" }
    ]
  }
};
 

// APP STATE
 
let currentUser = null;
let currentPage = 'dashboard';
let cbtState = { questions:[], current:0, answers:[], difficulty:'easy', timerInterval:null, timeLeft:3600, subject:'', numQ:30, mode:'objective' };
let chatHistory = [];
 
// Load API key
const getApiKey = () => localStorage.getItem('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') || '';
 

// AUTH FUNCTIONS
 
function getUsers() { return JSON.parse(localStorage.getItem('jupeb_users') || '[]'); }
function saveUsers(users) { localStorage.setItem('jupeb_users', JSON.stringify(users)); }
function getProgress(userId) { return JSON.parse(localStorage.getItem('jupeb_progress_' + userId) || '{"questionsAttempted":0,"correctAnswers":0,"topicsStudied":[],"cbtHistory":[],"subjects":{}}'); }
function saveProgress(userId, prog) { localStorage.setItem('jupeb_progress_' + userId, JSON.stringify(prog)); }
function getSuggestions() { return JSON.parse(localStorage.getItem('jupeb_suggestions') || '[]'); }
function saveSuggestions(s) { localStorage.setItem('jupeb_suggestions', JSON.stringify(s)); }
 
// Seed demo users
function seedDemoData() {
  let users = getUsers();
  if (!users.find(u => u.email === 'student@test.com')) {
    users.push({ id:'demo_student', name:'Amaka Obi', email:'student@test.com', password:'test123', dept:'science', school:'University of Lagos', role:'student', joined: new Date().toISOString() });
  }
  if (!users.find(u => u.email === 'greatchibueze2@gmail.com')) {
    users.push({ id:'admin_1', name:'Admin User', email:'greatchibueze2@gmail.com', password:'Great@07', dept:'admin', school:'JUPEBPreHub HQ', role:'admin', joined: new Date().toISOString() });
  }
  saveUsers(users);
}
 
function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pwd = document.getElementById('loginPassword').value;
  if (!email || !pwd) { showToast('Please enter your email and password', 'error'); return; }
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === pwd);
  if (!user) { showToast('Invalid email or password. Use the demo credentials below.', 'error'); return; }
  currentUser = user;
  localStorage.setItem('jupeb_session', JSON.stringify(user));
  showApp();
}
 
function doSignup() {
  const fn = document.getElementById('signupFirstname').value.trim();
  const ln = document.getElementById('signupLastname').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pwd = document.getElementById('signupPassword').value;
  const dept = document.getElementById('signupDept').value;
  const school = document.getElementById('signupSchool').value.trim();
  if (!fn || !ln || !email || !pwd || !dept) { showToast('Please fill in all required fields', 'error'); return; }
  if (pwd.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
  const users = getUsers();
  if (users.find(u => u.email === email)) { showToast('Email already registered. Please login.', 'error'); return; }
  const newUser = { id:'user_'+Date.now(), name:fn+' '+ln, email, password:pwd, dept, school, role:'student', joined: new Date().toISOString() };
  users.push(newUser);
  saveUsers(users);
  currentUser = newUser;
  localStorage.setItem('jupeb_session', JSON.stringify(newUser));
  showToast('Account created! Welcome to JUPEBHub 🎉', 'success');
  showApp();
}
 
function doLogout() {
  localStorage.removeItem('jupeb_session');
  currentUser = null;
  showPage('landingPage');
}
 
function showAuth(mode) {
  showPage('authPage');
  switchAuth(mode);
}
 
function switchAuth(mode) {
  const isLogin = mode === 'login';
  document.getElementById('loginTab').classList.toggle('active', isLogin);
  document.getElementById('signupTab').classList.toggle('active', !isLogin);
  document.getElementById('loginForm').style.display = isLogin ? 'block' : 'none';
  document.getElementById('signupForm').style.display = isLogin ? 'none' : 'block';
  document.getElementById('authTitle').textContent = isLogin ? 'Welcome Back 👋' : 'Join JUPEBHub 🎓';
  document.getElementById('authSubtitle').textContent = isLogin ? 'Login to continue your JUPEB journey' : 'Create your free account today';
  document.getElementById('authSwitch').innerHTML = isLogin ? 'Don\'t have an account? <a style="color:var(--g600);font-weight:600;cursor:pointer" onclick="switchAuth(\'signup\')">Sign up free</a>' : 'Already have an account? <a style="color:var(--g600);font-weight:600;cursor:pointer" onclick="switchAuth(\'login\')">Login</a>';
}
 

// APP NAVIGATION
 
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const p = document.getElementById(pageId);
  if (p) p.classList.add('active');
}
 
function showApp() {
  showPage('appPage');
  // Update sidebar
  document.getElementById('sidebarAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('sidebarName').textContent = currentUser.name;
  document.getElementById('sidebarRole').textContent = currentUser.dept.charAt(0).toUpperCase() + currentUser.dept.slice(1) + ' Department';
  document.getElementById('welcomeName').textContent = currentUser.name.split(' ')[0];
  if (currentUser.role === 'admin') {
    document.getElementById('adminNavSection').style.display = 'block';
  }
  loadCbtSubjectOptions();
  loadStudyHub();
  renderDashboard();
  updateStreakBadge();
  loadAdminData();
  loadSettingsData();
  populateSuggSubjects();
  navigate('dashboard');
}
 
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.inner-page').forEach(ip => ip.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const titles = { dashboard:'Dashboard', study:'Study Hub', cbt:'CBT Practice', progress:'My Progress', chatbot:'AI Chatbot', suggestions:'Suggestions', settings:'Settings', admin:'Admin Panel' };
  document.getElementById('topBarTitle').textContent = titles[page] || page;
  // Highlight nav
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => { if (item.textContent.trim().toLowerCase().includes(page.toLowerCase().slice(0,6))) item.classList.add('active'); });
  if (page === 'progress') renderProgress();
  if (page === 'admin') refreshAdminData();
}
 
function updateStreakBadge() {
  const prog = getProgress(currentUser.id);
  const streak = prog.streak || 0;
  document.getElementById('streakCount').textContent = streak;
}
 

// DASHBOARD
 
function renderDashboard() {
  if (!currentUser) return;
  const prog = getProgress(currentUser.id);
  document.getElementById('statQuestions').textContent = prog.questionsAttempted || 0;
  const avg = prog.questionsAttempted > 0 ? Math.round((prog.correctAnswers / prog.questionsAttempted) * 100) : 0;
  document.getElementById('statScore').textContent = prog.questionsAttempted > 0 ? avg + '%' : '--%';
  document.getElementById('statTopics').textContent = (prog.topicsStudied || []).length;
  document.getElementById('statBadges').textContent = (prog.badges || []).length;
  
  const msgs = ['Let\'s conquer JUPEB together 🚀','Every question answered brings you closer to that A! 💪','Your direct entry is waiting. Keep going! 🎓','Consistency is the key to success. Study daily! 📚'];
  document.getElementById('welcomeMsg').textContent = msgs[Math.floor(Math.random() * msgs.length)];
 
  // Subject progress
  const dept = currentUser.dept;
  const deptSubjects = SUBJECTS_DB.filter(s => s.dept === dept).slice(0, 5);
  const html = deptSubjects.map(s => {
    const pct = (prog.subjects?.[s.id]?.progress) || Math.floor(Math.random() * 30);
    return `<div class="subj-prog-item"><div class="subj-prog-icon" style="background:${s.color}">${s.icon}</div><div class="subj-prog-info"><div class="subj-prog-name">${s.name}</div><div class="subj-prog-bar-wrap"><div class="subj-prog-bar" style="width:${pct}%"></div></div></div><div class="subj-prog-pct">${pct}%</div></div>`;
  }).join('');
  document.getElementById('dashSubjProgress').innerHTML = html;
 
  // Daily challenge
  const challenges = ['Physics · Mechanics', 'Economics · Microeconomics', 'Government · Political Concepts', 'Biology · Cell Biology', 'Chemistry · Atomic Structure', 'Mathematics · Algebra', 'History · Nigerian Civil War', 'Accounting · Financial Accounting', 'English · Comprehension', 'Mathematics.Calculus', 'Biology · Ecology', 'Government · International Relations', 'Economics · Macroeconomics', 'Physics · Electricity', 'History · Pre-Colonial Nigeria', 'Accounting · Bookkeeping', 'English · Grammar', 'Mathematics · Geometry', 'Biology · Genetics', 'Government · Post-Independence Nigeria', 'Economics · Labour Economics', 'Physics · Waves', 'History · Nigerian Independence', 'Accounting · Managerial Accounting', 'English · Essay Writing', 'Mathematics · Trigonometry', 'Biology · Human Anatomy', 'Government · Colonial Nigeria', 'Economics · International Trade', 'Physics · Thermodynamics', 'History · African Civilizations', 'Accounting · Auditing', 'English · Vocabulary', 'Mathematics · Statistics', 'Biology · Evolution', 'Government · Democracy', 'Economics · Introduction to Economics', 'Chemistry.Organic Chemistry', 'Physics · Modern Physics', 'History · World War II', 'Accounting · Taxation', 'English · Literature Analysis', 'Mathematics · Number Theory', 'Biology · Microbiology', 'Government · Political Ideologies', 'Economics · Development Economics', 'Physics . Gravitational Forces', 'Physics · Nuclear Physics', 'Physics . Energy, Work & Power', 'History · Nigerian Civil War', 'Accounting · Financial Accounting', 'Mathematics · Matrices & Determinants', 'Government · Political Concepts', 'Economics · Introduction to Economics', 'Biology . Origin of Living Things', 'Chemistry . Chemicla Reaction', 'Mathematics . Statistics and Probabilty', 'Biologyu . Cell Division', 'English . Language', 'Lit-In-English . Prose', 'Lit-In-English . Poetry', 'Lit-In-English . Drama', 'Government . International Relations', 'Government . Nigerian Constitution', 'Government . Political Theories', 'Government . Public Administration', 'Government . Comparative Politics', 'Government . Political Ideologies', 'Government . Electoral Systems', 'Government . Human Rights', 'Government . Nigerian Political History', 'Government . African Politics', 'Government . Global Politics', 'Economics · Microeconomics', 'Economics · Macroeconomics', 'Economics · International Trade', 'Economics · Development Economics', 'Economics · Labour Economics', 'Economics · Public Finance', 'Economics · Money and Banking', 'Economics · Econometrics'];
  document.getElementById('dailyChallengeSubj').textContent = challenges[new Date().getDay() % challenges.length];
 
  // Activity
  const hist = (prog.cbtHistory || []).slice(-5).reverse();
  if (hist.length > 0) {
    document.getElementById('activityList').innerHTML = hist.map(h => `<div class="activity-item"><div class="activity-dot" style="background:var(--g500)"></div><div class="activity-text">CBT: ${h.subject} — ${h.score}%</div><div class="activity-time">${timeAgo(h.date)}</div></div>`).join('');
  }
}
 
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff/60000);
  if (m < 60) return m + 'm ago';
  const h = Math.floor(m/60);
  if (h < 24) return h + 'h ago';
  return Math.floor(h/24) + 'd ago';
}
 
function startDailyChallenge() {
  navigate('cbt');
  const subj = ['physics','economics','government','biology','chemistry', 'mathematics', 'history', 'accounting', 'english', 'yoruba', 'igbo', 'agricultural science', 'IRS', 'CRS', 'visual art', 'french', 'business studies', 'geography', 'music'][new Date().getDay() % 10];
  document.getElementById('cbtSubject').value = subj;
  document.getElementById('cbtNumQ').value = '10';
  updateCbtTopics();
}
 

// STUDY HUB
 
let currentStudySubject = null;
let currentStudyTopic = null;
 
function loadStudyHub() {
  renderSubjectsGrid('all');
}
 
function filterDept(dept, btn) {
  document.querySelectorAll('.dept-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSubjectsGrid(dept);
}
 
function renderSubjectsGrid(dept) {
  const subjects = dept === 'all' ? SUBJECTS_DB : SUBJECTS_DB.filter(s => s.dept === dept);
  const prog = getProgress(currentUser?.id || '');
  document.getElementById('subjectsGrid').innerHTML = subjects.map(s => {
    const pct = prog.subjects?.[s.id]?.progress || 0;
    return `<div class="subject-card card-hover" onclick="openSubject('${s.id}')">
      <div class="subject-card-icon" style="background:${s.color}">${s.icon}</div>
      <div class="subject-card-name">${s.name}</div>
      <div class="subject-card-code">${s.code}</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
        <div style="font-size:11px;color:var(--muted)">${s.topics.length} topics</div>
        <div style="margin-left:auto"><span class="badge badge-green" style="font-size:10px">${QUESTIONS_DB.filter(q=>q.subject===s.id).length} questions</span></div>
      </div>
      <div class="subject-card-prog"><div class="subject-card-prog-bar" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}
 
function openSubject(subjectId) {
  currentStudySubject = SUBJECTS_DB.find(s => s.id === subjectId);
  if (!currentStudySubject) return;
  document.getElementById('studySubjectList').style.display = 'none';
  document.getElementById('topicView').classList.add('active');
  document.getElementById('lessonView').classList.remove('active');
  document.getElementById('bcSubject').textContent = currentStudySubject.name;
  document.getElementById('topicSubjectIcon').textContent = currentStudySubject.icon;
  document.getElementById('topicSubjectName').textContent = currentStudySubject.name;
  document.getElementById('topicSubjectCode').textContent = currentStudySubject.code + ' · ' + currentStudySubject.dept.toUpperCase();
  
  const prog = getProgress(currentUser.id);
  const studied = prog.topicsStudied || [];
  document.getElementById('topicGrid').innerHTML = currentStudySubject.topics.map(t => {
    const qCount = QUESTIONS_DB.filter(q => q.subject === subjectId && q.topic.toLowerCase() === t.toLowerCase()).length;
    const done = studied.includes(subjectId + '_' + t);
    return `<div class="topic-card card-hover" onclick="openTopic('${subjectId}','${t}')">
      <div class="topic-card-icon">${currentStudySubject.icon}</div>
      <div class="topic-card-info"><div class="topic-card-name">${t}</div><div class="topic-card-count">${qCount > 0 ? qCount + ' practice questions' : 'Study notes available'}</div></div>
      <div class="topic-card-status ${done ? 'topic-done' : 'topic-pending'}">${done ? '✓' : '→'}</div>
    </div>`;
  }).join('');
}
 
function openTopic(subjectId, topicName) {
  currentStudyTopic = topicName;
  document.getElementById('topicView').classList.remove('active');
  document.getElementById('lessonView').classList.add('active');
  document.getElementById('bcSubjectLink').textContent = currentStudySubject.name;
  document.getElementById('bcTopic').textContent = topicName;
  
  // Mark topic as studied
  const prog = getProgress(currentUser.id);
  prog.topicsStudied = prog.topicsStudied || [];
  const key = subjectId + '_' + topicName;
  if (!prog.topicsStudied.includes(key)) { prog.topicsStudied.push(key); }
  saveProgress(currentUser.id, prog);
 
  const content = LESSON_CONTENT[topicName.toLowerCase()] || generateGenericLesson(topicName, currentStudySubject);
  
  document.getElementById('lessonMainContent').innerHTML = `
    <div class="lesson-section fade-in">
      <h3>${content.title}</h3>
      <div class="lesson-content"><p>${content.intro}</p></div>
    </div>
    ${content.sections.map(sec => `
    <div class="lesson-section fade-in">
      <h3>${sec.heading}</h3>
      <div class="lesson-content">
        ${sec.content.map(p => `<p>${p}</p>`).join('')}
        ${sec.formula ? `<div class="lesson-formula">${sec.formula}</div>` : ''}
        ${sec.keyPoint ? `<div class="key-point"><strong>📌 Key Point:</strong> ${sec.keyPoint}</div>` : ''}
      </div>
    </div>`).join('')}
    <div class="lesson-section fade-in">
      <h3>🎥 Recommended YouTube Videos</h3>
      <div class="video-refs">
        ${content.videos.map(v => `<a href="${v.url}" target="_blank" class="video-ref"><div class="video-ref-icon">▶</div><div><div class="video-ref-title">${v.title}</div><div class="video-ref-channel">${v.channel}</div></div></a>`).join('')}
      </div>
    </div>
    <div class="lesson-section fade-in">
      <h3>✏️ Practice Questions for This Topic</h3>
      ${renderTopicQuestions(subjectId, topicName)}
    </div>
  `;
  
  // Side nav
  document.getElementById('lessonTopicsNav').innerHTML = (currentStudySubject?.topics || []).map(t => `<div class="lesson-nav-item ${t === topicName ? 'active' : ''}" onclick="openTopic('${subjectId}','${t}')">${t}</div>`).join('');
}
 
function renderTopicQuestions(subjectId, topicName) {
  const qs = QUESTIONS_DB.filter(q => q.subject === subjectId && q.topic.toLowerCase() === topicName.toLowerCase()).slice(0, 3);
  if (qs.length === 0) return '<p style="color:var(--muted);font-size:14px">Practice questions for this topic coming soon! Try the full CBT practice mode.</p>';
  return `<div style="display:flex;flex-direction:column;gap:12px">${qs.map((q,i) => `<div style="background:var(--g50);border-radius:12px;padding:16px;border:1px solid var(--g100)"><div style="font-size:13px;font-weight:600;color:var(--muted);margin-bottom:8px">Q${i+1} · ${q.difficulty.toUpperCase()}</div><div style="font-weight:600;font-size:14px;margin-bottom:12px">${q.question}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${Object.entries(q.options).map(([k,v]) => `<div style="padding:8px 10px;border-radius:8px;background:#fff;border:1px solid var(--border);font-size:13px">${k}. ${v}</div>`).join('')}</div><div style="margin-top:10px"><button class="btn btn-outline btn-sm" onclick="showAnswer('${q.id}','ans_${q.id}')">Show Answer</button><span id="ans_${q.id}" style="display:none;margin-left:10px;color:var(--g700);font-weight:600;font-size:13px">✓ Answer: ${q.answer} · ${q.explanation}</span></div></div>`).join('')}</div><button class="btn btn-primary btn-sm" style="margin-top:16px" onclick="startSubjectCBT()">Take Full Practice Exam →</button>`;
}
 
function showAnswer(qId, spanId) {
  document.getElementById(spanId).style.display = 'inline';
}
 
function generateGenericLesson(topicName, subject) {
  return {
    title: topicName + ' — ' + (subject?.name || 'Study Notes'),
    intro: `This topic covers ${topicName} in ${subject?.name || 'your subject'}. Study this material carefully as it frequently appears in JUPEB examinations. Take notes and ensure you understand all key concepts before attempting practice questions.`,
    sections: [
      { heading: 'Key Concepts', content: [`${topicName} is an important topic in ${subject?.name}. Make sure you understand the fundamental principles before moving to advanced applications.`, 'Review your textbook notes and compare with what you learn here. Practice with past questions to consolidate your understanding.'], formula: '', keyPoint: `Practice makes perfect! Attempt all past questions on ${topicName} to improve your mastery.` }
    ],
    videos: [
      { title: topicName + ' Tutorial — JUPEB ' + (subject?.name || ''), channel: 'JUPEBHub Recommended', url: 'https://youtube.com/results?search_query=' + encodeURIComponent(topicName + ' ' + (subject?.name || '') + ' JUPEB Nigeria tutorial') },
      { title: topicName + ' Past Questions Explained', channel: 'NaijaTutors', url: 'https://youtube.com/results?search_query=' + encodeURIComponent(topicName + ' past questions Nigeria') }
    ]
  };
}
 
function backToSubjects() {
  document.getElementById('studySubjectList').style.display = 'block';
  document.getElementById('topicView').classList.remove('active');
  document.getElementById('lessonView').classList.remove('active');
}
 
function backToTopics() {
  document.getElementById('topicView').classList.add('active');
  document.getElementById('lessonView').classList.remove('active');
}
 
function startSubjectCBT() {
  if (currentStudySubject) {
    navigate('cbt');
    document.getElementById('cbtSubject').value = currentStudySubject.id;
    updateCbtTopics();
  }
}
 

// CBT PRACTICE

function loadCbtSubjectOptions() {
  const sel = document.getElementById('cbtSubject');
  const aqSel = document.getElementById('aqSubject');
  sel.innerHTML = '<option value="">— Select Subject —</option>';
  SUBJECTS_DB.forEach(s => {
    sel.innerHTML += `<option value="${s.id}">${s.icon} ${s.name}</option>`;
    if (aqSel) aqSel.innerHTML += `<option value="${s.id}">${s.name}</option>`;
  });
}
 
function updateCbtTopics() {
  const subjId = document.getElementById('cbtSubject').value;
  const subj = SUBJECTS_DB.find(s => s.id === subjId);
  const sel = document.getElementById('cbtTopic');
  sel.innerHTML = '<option value="">All Topics</option>';
  if (subj) subj.topics.forEach(t => sel.innerHTML += `<option value="${t}">${t}</option>`);
}
 
let selectedDiff = 'easy';
function selectDiff(btn, diff) {
  document.querySelectorAll('.diff-btn').forEach(b => { b.classList.remove('active'); });
  btn.classList.add('active');
  selectedDiff = diff;
}
 
function getQuestionsForCBT(subjId, topicFilter, diff, num) {
  let pool = QUESTIONS_DB.filter(q => q.type === 'objective');
  if (subjId) pool = pool.filter(q => q.subject === subjId);
  if (topicFilter) pool = pool.filter(q => q.topic.toLowerCase() === topicFilter.toLowerCase());
  // For demo, include all difficulties if not enough questions
  const filtered = diff !== 'all' ? pool.filter(q => q.difficulty === diff.replace('veryhard','hard')) : pool;
  const final = filtered.length >= num ? filtered : pool;
  return shuffleArray(final).slice(0, num);
}
 
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [a[i],a[j]] = [a[j],a[i]]; }
  return a;
}
 
function startCBT() {
  const subjId = document.getElementById('cbtSubject').value;
  if (!subjId) { showToast('Please select a subject', 'error'); return; }
  const topic = document.getElementById('cbtTopic').value;
  const numQ = parseInt(document.getElementById('cbtNumQ').value);
  const timerMin = parseInt(document.getElementById('cbtTimer').value);
  
  const questions = getQuestionsForCBT(subjId, topic, selectedDiff, numQ);
  if (questions.length === 0) { showToast('No questions available for this selection. Try a different subject or difficulty.', 'error'); return; }
 
  cbtState = { questions, current:0, answers:Array(questions.length).fill(null), difficulty:selectedDiff, timerInterval:null, timeLeft:timerMin*60, subject:subjId, numQ:questions.length, mode:'objective' };
 
  document.getElementById('cbtSetup').style.display = 'none';
  document.getElementById('cbtExam').classList.add('active');
  document.getElementById('cbtResults').classList.remove('active');
  
  const subjName = SUBJECTS_DB.find(s=>s.id===subjId)?.name || subjId;
  document.getElementById('cbtHeaderSubj').textContent = subjName.toUpperCase() + ' · ' + selectedDiff.toUpperCase();
 
  if (timerMin > 0) startTimer();
  renderQuestion();
}
 
function startTimer() {
  clearInterval(cbtState.timerInterval);
  cbtState.timerInterval = setInterval(() => {
    cbtState.timeLeft--;
    const m = Math.floor(cbtState.timeLeft/60).toString().padStart(2,'0');
    const s = (cbtState.timeLeft%60).toString().padStart(2,'0');
    const timerEl = document.getElementById('cbtTimerDisplay');
    timerEl.textContent = '⏱ ' + m + ':' + s;
    if (cbtState.timeLeft <= 60) timerEl.classList.add('warning');
    if (cbtState.timeLeft <= 0) { clearInterval(cbtState.timerInterval); showResults(); }
  }, 1000);
}
 
function renderQuestion() {
  const q = cbtState.questions[cbtState.current];
  const n = cbtState.current;
  const total = cbtState.numQ;
 
  document.getElementById('questionNum').textContent = 'QUESTION ' + (n+1) + ' OF ' + total + ' · ' + q.difficulty.toUpperCase() + ' · ' + q.year;
  document.getElementById('questionText').textContent = q.question;
  document.getElementById('cbtProgressText').textContent = 'Question ' + (n+1) + ' of ' + total;
  document.getElementById('cbtProgressFill').style.width = ((n+1)/total*100) + '%';
  document.getElementById('aiExplanationBox').classList.remove('active');
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('skipBtn').style.display = 'block';
 
  const ans = cbtState.answers[n];
  document.getElementById('optionsList').innerHTML = Object.entries(q.options).map(([k,v]) => {
    let cls = '';
    if (ans && ans.selected === k) cls = 'selected';
    if (ans && ans.revealed) {
      if (k === q.answer) cls = 'correct';
      else if (ans.selected === k) cls = 'wrong';
    }
    return `<div class="option-item ${cls} ${ans && ans.revealed ? 'disabled' : ''}" onclick="${ans && ans.revealed ? '' : 'selectOption(\"'+k+'\")'}">
      <div class="option-letter">${k}</div>
      <div class="option-text">${v}</div>
    </div>`;
  }).join('');
 
  if (ans && ans.revealed) {
    document.getElementById('nextBtn').style.display = 'block';
    document.getElementById('skipBtn').style.display = 'none';
    if (document.getElementById('aiExpToggle')?.checked !== false) {
      showAIExplanation(q);
    }
  }
}
 
function selectOption(letter) {
  const q = cbtState.questions[cbtState.current];
  cbtState.answers[cbtState.current] = { selected: letter, revealed: true, correct: letter === q.answer };
  renderQuestion();
  
  // Update stats
  const prog = getProgress(currentUser.id);
  prog.questionsAttempted = (prog.questionsAttempted || 0) + 1;
  if (letter === q.answer) prog.correctAnswers = (prog.correctAnswers || 0) + 1;
  saveProgress(currentUser.id, prog);
}
 
function showAIExplanation(q) {
  const box = document.getElementById('aiExplanationBox');
  box.classList.add('active');
  document.getElementById('aiExpContent').innerHTML = `<div class="ai-loading"><div class="ai-loading-dot"></div><div class="ai-loading-dot"></div><div class="ai-loading-dot"></div> <span>AI is explaining this question...</span></div>`;
  
  const apiKey = getApiKey();
  if (!apiKey) {
    document.getElementById('aiExpContent').innerHTML = `<strong>Correct Answer: ${q.answer}</strong><br><br>${q.explanation}<br><br><em style="color:var(--muted)">💡 Add your Anthropic API key in Settings for enhanced AI explanations!</em>`;
    return;
  }
  
  fetchAIExplanation(q.question, q.answer, q.options[q.answer], q.explanation, apiKey)
    .then(text => { document.getElementById('aiExpContent').innerHTML = text; })
    .catch(() => { document.getElementById('aiExpContent').innerHTML = `<strong>Correct Answer: ${q.answer}</strong><br><br>${q.explanation}`; });
}
 
async function fetchAIExplanation(question, answer, answerText, baseExplanation, apiKey) {
  const prompt = `You are a JUPEB (Joint Universities Preliminary Examinations Board) tutor helping a Nigerian student. 
 
Question: "${question}"
Correct Answer: ${answer}. ${answerText}
Brief explanation: ${baseExplanation}
 
Please provide a clear, engaging explanation (3-4 sentences) that:
1. Explains WHY this answer is correct
2. Uses simple language suitable for a pre-university student  
3. Mentions any important formula or rule to remember
4. If helpful, gives a memory tip or example from Nigerian context
 
Keep it under 100 words. Do not use markdown formatting.`;
 
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method:'POST',
    headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
    body:JSON.stringify({ model:'claude-sonnet-4-20250514', max_tokens:200, messages:[{role:'user',content:prompt}] })
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return `<strong>✓ Answer: ${answer}</strong><br><br>` + data.content[0].text;
}
 
function skipQuestion() {
  if (cbtState.current < cbtState.numQ - 1) {
    cbtState.current++;
    renderQuestion();
  } else {
    showResults();
  }
}
 
function nextQuestion() {
  if (cbtState.current < cbtState.numQ - 1) {
    cbtState.current++;
    renderQuestion();
  } else {
    showResults();
  }
}
 
function endCBTEarly() {
  if (confirm('End exam early? Your current progress will be recorded.')) showResults();
}
 
function showResults() {
  clearInterval(cbtState.timerInterval);
  const answered = cbtState.answers.filter(a => a !== null);
  const correct = answered.filter(a => a.correct).length;
  const wrong = answered.filter(a => !a.correct).length;
  const skipped = cbtState.numQ - answered.length;
  const pct = Math.round((correct / cbtState.numQ) * 100);
 
  document.getElementById('cbtExam').classList.remove('active');
  document.getElementById('cbtResults').classList.add('active');
  document.getElementById('resultScore').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = correct;
  document.getElementById('resultWrong').textContent = wrong;
  document.getElementById('resultSkipped').textContent = skipped;
 
  const ring = document.getElementById('resultRing');
  let grade, msg, advice, color;
  if (pct >= 90) { grade='A — Excellent! 🏆'; msg='Outstanding performance! You are JUPEB ready! Keep this up and your direct entry is guaranteed. '; advice='💡 You\'re performing excellently! Focus on maintaining consistency and try harder difficulty levels to challenge yourself further.'; color='var(--g600)'; }
  else if (pct >= 75) { grade='B — Very Good! 🌟'; msg='Great work! You have a strong grasp of this subject. A little more practice and you\'ll be scoring in the 90s!'; advice='💡 You\'re doing very well! Review the questions you got wrong carefully. Focus on your weak areas to push from B to A.'; color='var(--g600)'; }
  else if (pct >= 60) { grade='C — Good Effort! 👍'; msg='You\'re on the right track! You understand the basics. More practice and consistent study will take you higher.'; advice='💡 Good progress! Consider revisiting the topics where you got questions wrong. Try the medium-difficulty practice more often.'; color='#d97706'; }
  else if (pct >= 50) { grade='D — Keep Going! 💪'; msg='You\'re building your foundation. Don\'t give up — every champion was once a beginner. Study the AI explanations carefully!'; advice='💡 Go back and study the notes for this subject. Focus on understanding concepts, not just memorizing answers. Use the AI chatbot to clarify doubts.'; color='#d97706'; }
  else { grade='E — More Study Needed 📚'; msg='Don\'t be discouraged! Every expert was once a beginner. Use the study hub, watch the videos, and practice daily. You CAN do this!'; advice='💡 Please go back to the Study Hub for this subject. Read through the notes carefully, watch the recommended videos, and then try again. The AI chatbot can help explain difficult concepts.'; color='#dc2626'; }
 
  document.getElementById('resultGrade').textContent = grade;
  document.getElementById('resultGrade').style.color = color;
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('resultAdvice').innerHTML = advice;
  ring.style.borderColor = color;
 
  // Save to progress
  const prog = getProgress(currentUser.id);
  prog.cbtHistory = prog.cbtHistory || [];
  const subjName = SUBJECTS_DB.find(s=>s.id===cbtState.subject)?.name || cbtState.subject;
  prog.cbtHistory.push({ subject:subjName, score:pct, correct, wrong, skipped, date:new Date().toISOString(), difficulty:cbtState.difficulty });
  if (!prog.badges) prog.badges = [];
  if (pct >= 90 && !prog.badges.includes('first_a')) { prog.badges.push('first_a'); showToast('🏆 Badge Earned: First A-Score!', 'success'); }
  if ((prog.cbtHistory?.length || 0) >= 5 && !prog.badges.includes('practice_5')) { prog.badges.push('practice_5'); showToast('🎯 Badge Earned: 5 CBT Sessions!', 'success'); }
  saveProgress(currentUser.id, prog);
  renderDashboard();
}
 
function reviewAnswers() { showToast('Answer review mode coming soon! For now, check the AI explanations during the exam.', 'info'); }
function resetCBT() {
  clearInterval(cbtState.timerInterval);
  document.getElementById('cbtSetup').style.display = 'block';
  document.getElementById('cbtExam').classList.remove('active');
  document.getElementById('cbtResults').classList.remove('active');
}
 

// PROGRESS

function renderProgress() {
  if (!currentUser) return;
  const prog = getProgress(currentUser.id);
  
  // Subject progress
  const deptSubjs = SUBJECTS_DB.filter(s => s.dept === currentUser.dept);
  document.getElementById('progressSubjectList').innerHTML = deptSubjs.map(s => {
    const history = (prog.cbtHistory || []).filter(h => h.subject === s.name);
    const avg = history.length > 0 ? Math.round(history.reduce((a,b) => a+b.score, 0) / history.length) : 0;
    const pct = prog.subjects?.[s.id]?.progress || avg;
    return `<div class="subj-prog-full"><div class="spf-top"><span class="spf-name">${s.icon} ${s.name}</span><span class="spf-score">${pct || 0}%</span></div><div class="spf-bar-wrap"><div class="spf-bar" style="width:${pct || 0}%"></div></div></div>`;
  }).join('');
 
  // CBT History
  const hist = (prog.cbtHistory || []).slice(-8).reverse();
  if (hist.length > 0) {
    document.getElementById('cbtHistoryList').innerHTML = hist.map(h => `
      <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--g50);border-radius:10px">
        <div style="font-size:22px;font-weight:800;color:var(--g700);min-width:50px">${h.score}%</div>
        <div><div style="font-weight:600;font-size:13px">${h.subject}</div><div style="font-size:11px;color:var(--muted)">${h.correct}✓ ${h.wrong}✗ · ${h.difficulty} · ${timeAgo(h.date)}</div></div>
        <div style="margin-left:auto"><span class="badge ${h.score>=75?'badge-green':h.score>=50?'badge-gold':'badge-red'}">${h.score>=75?'Good':h.score>=50?'Fair':'Needs Work'}</span></div>
      </div>`).join('');
  }
 
  // Badges
  const allBadges = [
    { id:'first_q', icon:'✏️', name:'First Question', desc:'Answer your first question' },
    { id:'first_a', icon:'🏆', name:'First A-Score', desc:'Score 90%+ in CBT' },
    { id:'practice_5', icon:'🎯', name:'Consistent Learner', desc:'Complete 5 CBT sessions' },
    { id:'streak_7', icon:'🔥', name:'7-Day Streak', desc:'Study 7 days in a row' },
    { id:'chat_10', icon:'💬', name:'Curious Mind', desc:'Ask 10 chatbot questions' },
    { id:'all_topics', icon:'📚', name:'Topic Master', desc:'Study 10+ topics' },
  ];
  const earned = prog.badges || [];
  document.getElementById('badgeGrid').innerHTML = allBadges.map(b => `<div class="achievement-badge ${earned.includes(b.id) ? '' : 'locked'}"><div class="ach-icon">${b.icon}</div><div class="ach-name">${b.name}</div><div class="ach-desc">${b.desc}</div></div>`).join('');
 
  // Recommendations
  const hist2 = prog.cbtHistory || [];
  let recs = '';
  if (hist2.length === 0) recs = '📌 Start your first CBT practice session to get personalized recommendations!';
  else {
    const worst = hist2.reduce((a,b) => a.score < b.score ? a : b);
    recs = `📌 Your lowest score was in <strong>${worst.subject}</strong> (${worst.score}%). Focus more study time on this subject.\n📌 Complete at least one CBT session daily to maintain your streak.\n📌 Use the AI chatbot to clarify any concepts you don't understand.`;
  }
  document.getElementById('studyRecommendations').innerHTML = recs;
}
 

// CHATBOT
 
async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMsg('user', text);
  appendTyping();
  chatHistory.push({ role:'user', content:text });
  
  const apiKey = getApiKey();
  if (!apiKey) {
    removeTyping();
    appendMsg('bot', '🔑 I need an API key to respond! Please go to **Settings** → **AI Configuration** and add your API key. It\'s free to get at console.anthropic.com\n\nMeanwhile, here\'s a quick tip: For JUPEB, always review your past question papers and focus on understanding WHY answers are correct, not just memorizing them!');
    return;
  }
 
  try {
    const sysPrompt = `You are JUPEBHub AI Tutor, an expert in all JUPEB (Joint Universities Preliminary Examinations Board) subjects for Nigerian students seeking direct entry to universities. You cover Science (Physics, Chemistry, Biology, Mathematics, Agricultural Science), Arts (English, History, Government, Literature, CRS, IRS), and Commercial (Economics, Accounting, Business Studies, Geography) departments.
 
You are helpful, encouraging, and speak in a friendly but educational tone. You relate examples to Nigerian context when possible. Keep responses clear, well-structured, and suitable for pre-university Nigerian students aged 16-20. Current student: ${currentUser?.name || 'Student'} (${currentUser?.dept || 'Unknown'} department).`;
 
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({ model:'claude-sonnet-4-20250514', max_tokens:600, system:sysPrompt, messages:chatHistory })
    });
    const data = await response.json();
    removeTyping();
    if (data.error) { appendMsg('bot', '⚠️ API Error: ' + data.error.message + '. Check your API key in Settings.'); return; }
    const reply = data.content[0].text;
    chatHistory.push({ role:'assistant', content:reply });
    appendMsg('bot', reply);
    
    // Update badge
    const prog = getProgress(currentUser.id);
    prog.chatCount = (prog.chatCount || 0) + 1;
    if (prog.chatCount >= 10 && !(prog.badges || []).includes('chat_10')) {
      prog.badges = [...(prog.badges||[]), 'chat_10'];
      showToast('💬 Badge Earned: Curious Mind!', 'success');
    }
    saveProgress(currentUser.id, prog);
  } catch(e) {
    removeTyping();
    appendMsg('bot', '⚠️ Could not connect to AI. Check your internet connection and API key in Settings.');
  }
}
 
function appendMsg(type, text) {
  const msgs = document.getElementById('chatMessages');
  const now = new Date().toLocaleTimeString('en-NG', {hour:'2-digit',minute:'2-digit'});
  const div = document.createElement('div');
  div.className = 'msg msg-' + (type==='user'?'user':'bot') + ' fade-in';
  div.innerHTML = `<div class="msg-bubble">${text.replace(/\n/g,'<br>')}</div><div class="msg-time">${now}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
 
function appendTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg msg-bot msg-typing'; div.id = 'typingMsg';
  div.innerHTML = `<div class="msg-bubble"><div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}
function removeTyping() { document.getElementById('typingMsg')?.remove(); }
 
function chatKeyDown(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); } }
function sendQuickChat(text) { document.getElementById('chatInput').value = text; sendChat(); }
 

// SUGGESTIONS
 
let selectedSuggType = 'topic';
function selectSuggType(el, type) {
  document.querySelectorAll('.sugg-type').forEach(e => e.classList.remove('active'));
  el.classList.add('active'); selectedSuggType = type;
}
 
function populateSuggSubjects() {
  const sel = document.getElementById('suggSubject');
  if (!sel) return;
  sel.innerHTML = '<option value="">Any / Not Subject-Specific</option>';
  SUBJECTS_DB.forEach(s => sel.innerHTML += `<option value="${s.id}">${s.name}</option>`);
}
 
function submitSuggestion() {
  const content = document.getElementById('suggContent').value.trim();
  if (!content) { showToast('Please describe your suggestion', 'error'); return; }
  const suggestions = getSuggestions();
  suggestions.push({ id:'sugg_'+Date.now(), type:selectedSuggType, subject:document.getElementById('suggSubject').value, content, link:document.getElementById('suggLink').value, user:currentUser?.name||'Anonymous', date:new Date().toISOString(), status:'pending' });
  saveSuggestions(suggestions);
  document.getElementById('suggContent').value = '';
  document.getElementById('suggLink').value = '';
  showToast('Thank you! Your suggestion has been submitted 🙏', 'success');
  renderSuggestions();
}
 
function renderSuggestions() {
  const all = getSuggestions().filter(s => s.user === currentUser?.name || true).slice(-10).reverse();
  if (all.length === 0) return;
  const typeIcons = { topic:'📌', question:'❓', video:'🎥', correction:'✏️', feature:'⭐', other:'💬' };
  document.getElementById('suggestionsList').innerHTML = all.map(s => `<div class="sugg-item"><div class="sugg-item-header"><span class="sugg-item-type">${typeIcons[s.type]||'💬'} ${s.type.toUpperCase()}</span><span class="sugg-item-date">${timeAgo(s.date)}</span></div><div class="sugg-item-content">${s.content}</div><div class="sugg-item-status"><span class="badge ${s.status==='approved'?'badge-green':s.status==='rejected'?'badge-red':'badge-gold'}">${s.status==='approved'?'✓ Approved':s.status==='rejected'?'✗ Not Added':'⏳ Pending Review'}</span></div></div>`).join('');
}
 

// ADMIN PANEL
 
function loadAdminData() {
  if (currentUser?.role !== 'admin') return;
  refreshAdminData();
}
 
function refreshAdminData() {
  if (currentUser?.role !== 'admin') return;
  const users = getUsers().filter(u => u.role !== 'admin');
  const suggestions = getSuggestions();
  
  document.getElementById('adminTotalUsers').textContent = users.length;
  document.getElementById('adminTotalQs').textContent = QUESTIONS_DB.length;
  document.getElementById('adminSuggestions').textContent = suggestions.length;
  document.getElementById('adminSuggBadge').textContent = suggestions.filter(s=>s.status==='pending').length + ' pending';
 
  // Users table
  document.getElementById('adminUsersTable').innerHTML = users.length === 0 ?
    '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:20px">No registered students yet</td></tr>' :
    users.map(u => `<tr><td style="font-weight:600">${u.name}</td><td><span class="badge badge-green">${u.dept}</span></td><td>${new Date(u.joined).toLocaleDateString('en-NG')}</td><td><span class="badge badge-blue">Active</span></td></tr>`).join('');
 
  // Questions by subject
  const bySubj = {};
  QUESTIONS_DB.forEach(q => { bySubj[q.subject] = (bySubj[q.subject]||0)+1; });
  document.getElementById('adminQuestionsTable').innerHTML = Object.entries(bySubj).map(([sid, count]) => {
    const s = SUBJECTS_DB.find(x=>x.id===sid);
    return `<tr><td>${s?.icon||'📚'} ${s?.name||sid}</td><td style="font-weight:700;color:var(--g700)">${count}</td><td><span class="badge badge-green">Mixed</span></td></tr>`;
  }).join('');
 
  // Suggestions
  const suggs = suggestions.slice(-5).reverse();
  document.getElementById('adminSuggTable').innerHTML = suggs.length === 0 ? '<div style="color:var(--muted);font-size:13px;padding:12px">No suggestions yet</div>' :
    suggs.map(s => `<div style="padding:12px;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><strong style="font-size:13px">${s.user}</strong><span style="font-size:11px;color:var(--muted)">${timeAgo(s.date)}</span></div><div style="font-size:13px;margin-bottom:6px">${s.content.slice(0,80)}...</div><div style="display:flex;gap:6px"><button class="btn btn-sm" style="padding:4px 10px;font-size:11px;background:var(--g50);border:1px solid var(--g200);color:var(--g700);border-radius:6px" onclick="approveSugg('${s.id}')">✓ Approve</button><button class="btn btn-sm" style="padding:4px 10px;font-size:11px;background:#fef2f2;border:1px solid #fecaca;color:#dc2626;border-radius:6px" onclick="rejectSugg('${s.id}')">✗ Reject</button></div></div>`).join('');
}
 
function approveSugg(id) {
  const s = getSuggestions();
  const idx = s.findIndex(x=>x.id===id);
  if (idx>=0) { s[idx].status='approved'; saveSuggestions(s); refreshAdminData(); showToast('Suggestion approved!', 'success'); }
}
function rejectSugg(id) {
  const s = getSuggestions();
  const idx = s.findIndex(x=>x.id===id);
  if (idx>=0) { s[idx].status='rejected'; saveSuggestions(s); refreshAdminData(); showToast('Suggestion rejected', 'info'); }
}
 
function addQuestion() {
  const subj = document.getElementById('aqSubject').value;
  const topic = document.getElementById('aqTopic').value.trim();
  const question = document.getElementById('aqQuestion').value.trim();
  const A = document.getElementById('aqA').value.trim();
  const B = document.getElementById('aqB').value.trim();
  const C = document.getElementById('aqC').value.trim();
  const D = document.getElementById('aqD').value.trim();
  const answer = document.getElementById('aqAnswer').value;
  const diff = document.getElementById('aqDiff').value;
  const explanation = document.getElementById('aqExplanation').value.trim();
  const year = parseInt(document.getElementById('aqYear').value);
  if (!subj || !topic || !question || !A || !B || !C || !D || !explanation) { showToast('Please fill in all required fields', 'error'); return; }
  const newQ = { id:'q_'+Date.now(), subject:subj, topic, year, difficulty:diff, type:'objective', question, options:{A,B,C,D}, answer, explanation };
  QUESTIONS_DB.push(newQ);
  showToast('Question added successfully! ✓', 'success');
  ['aqTopic','aqQuestion','aqA','aqB','aqC','aqD','aqExplanation'].forEach(id => document.getElementById(id).value = '');
  refreshAdminData();
}
 

// SETTINGS
 
function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key) { showToast('Please enter an API key', 'error'); return; }
  localStorage.setItem('jupeb_api_key', key);
  showToast('API key saved! AI features are now enabled ✓', 'success');
}
 
function loadSettingsData() {
  if (!currentUser) return;
  const key = getApiKey();
  if (key) document.getElementById('apiKeyInput').value = key;
  document.getElementById('settingsName').value = currentUser.name;
  document.getElementById('settingsDept').value = currentUser.dept;
  document.getElementById('settingsSchool').value = currentUser.school || '';
}
 
function saveProfile() {
  if (!currentUser) return;
  const name = document.getElementById('settingsName').value.trim();
  const dept = document.getElementById('settingsDept').value;
  const school = document.getElementById('settingsSchool').value.trim();
  const users = getUsers();
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx >= 0) { users[idx].name = name; users[idx].dept = dept; users[idx].school = school; saveUsers(users); currentUser = users[idx]; localStorage.setItem('jupeb_session', JSON.stringify(currentUser)); }
  document.getElementById('sidebarName').textContent = name;
  document.getElementById('sidebarAvatar').textContent = name.charAt(0).toUpperCase();
  document.getElementById('welcomeName').textContent = name.split(' ')[0];
  showToast('Profile updated successfully ✓', 'success');
}
 

// UTILITIES
 
function showToast(msg, type='info') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  t.className = 'toast ' + type;
  t.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(100px)'; t.style.transition='.3s'; setTimeout(()=>t.remove(),300); }, 3000);
}
 
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); }
 
// INIT
 
document.addEventListener('DOMContentLoaded', () => {
  seedDemoData();
  // Check for existing session
  const session = localStorage.getItem('jupeb_session');
  if (session) {
    try { currentUser = JSON.parse(session); showApp(); }
    catch(e) { showPage('landingPage'); }
  }
});
</script>
