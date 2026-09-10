const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

const THEME_STORAGE_KEY = 'flash-theme';
const LANGUAGE_STORAGE_KEY = 'flash-language';

// Translation dictionary: namespaced, dot-path keys resolved via translate().
const TRANSLATIONS = {
  en: {
    nav: { home: 'Home', about: 'About Us', contact: 'Contact Us', brandAriaLabel: 'Flash home' },
    menu: { label: 'Menu', openLabel: 'Open menu' },
    theme: { switchToLight: 'Switch to light mode', switchToDark: 'Switch to dark mode' },
    language: { openLabel: 'Change language' },
    validation: { required: 'This field is required.' },
    whatsapp: {
      genericInquiry: 'Hello Flash, I would like to know more about EV charging infrastructure for my community.',
    },
    hero: {
      eyebrow: 'EV CHARGING INFRASTRUCTURE',
      title: 'Building EV-ready communities.',
      description: 'Flash helps residential communities plan, install and manage EV charging infrastructure.',
      cta: 'Talk to Flash',
    },
    howWorks: {
      eyebrow: 'HOW FLASH WORKS',
      title: 'From EV readiness to everyday charging.',
      description:
        'Flash helps residential communities understand their EV needs, plan the right infrastructure, install charging solutions, and keep the experience simple as adoption grows.',
      assess: {
        title: 'Assess',
        description: "Understand your community's EV readiness, electrical capacity, parking and expected charging demand.",
      },
      plan: {
        title: 'Plan',
        description: 'Design a practical charging approach that fits the community today and can scale with future EV adoption.',
      },
      install: {
        title: 'Install',
        description: 'Deploy the right charging infrastructure with a focus on safety, reliability and a clean installation.',
      },
      manage: {
        title: 'Manage',
        description: 'Keep charging simple for residents while helping the community manage infrastructure as demand grows.',
      },
    },
    impact: {
      eyebrow: 'FLASH IMPACT',
      title: 'Real charging. Real-world impact.',
      description: 'Every charging session contributes to a cleaner and more sustainable future for our communities.',
      energyLabel: 'Clean Energy Delivered',
      co2Label: 'CO₂ Emissions Reduced',
      mobilityLabel: 'Clean Mobility Enabled',
      sessionsLabel: 'Total Charging Sessions',
      note: 'Based on charging activity across the Flash network.',
    },
    homeCta: {
      title: 'Start a conversation.',
      description: 'Tell us about your residential community and explore the right EV charging solution with Flash.',
      cta: 'Contact Flash',
    },
    about: {
      hero: {
        eyebrow: 'ABOUT FLASH',
        title: 'Building the foundation for everyday electric mobility.',
        description:
          'Flash helps residential communities plan, install and manage EV charging infrastructure — making the transition to electric mobility simpler, smarter and more accessible.',
      },
      transition: {
        eyebrow: 'THE TRANSITION',
        title: 'Electric mobility is no longer a distant future.',
        body1: 'Electric vehicles are becoming part of everyday life. But as adoption grows, the infrastructure needed to support them must grow with it.',
        body2:
          'For millions of people living in apartments and residential communities, convenient access to reliable charging remains one of the most important pieces of the transition.',
      },
      why: {
        eyebrow: 'WHY FLASH EXISTS',
        title: 'EV charging is more than installing a charger.',
        body1:
          'As more residents switch to electric vehicles, residential communities face a new infrastructure challenge. Charging must be planned around existing electrical capacity, parking layouts, safety requirements and future demand.',
        body2: 'Flash was created to help communities navigate this transition with a more structured and long-term approach to EV charging infrastructure.',
      },
      storyline: {
        individual: 'Individual Charger',
        community: 'Community Planning',
        scalable: 'Scalable Infrastructure',
      },
      community: {
        eyebrow: 'BUILT FOR COMMUNITIES',
        title: 'Because communities need more than charging points.',
        body1:
          'Every residential community is different. Parking layouts, electrical infrastructure, resident needs and future EV adoption all shape the right charging strategy.',
        body2:
          'Flash takes a community-first approach to EV infrastructure, helping societies move beyond individual charging points toward a solution designed for the entire community.',
      },
      ecosystem: {
        core: 'Community',
        power: { kicker: 'Power', text: 'Existing electrical capacity' },
        parking: { kicker: 'Parking', text: 'Layout and accessibility' },
        people: { kicker: 'People', text: 'Resident needs and adoption' },
        growth: { kicker: 'Growth', text: 'Future scalability' },
      },
      journey: {
        eyebrow: 'THE FLASH APPROACH',
        title: 'From EV readiness to everyday charging.',
        description:
          'Building EV infrastructure is a journey, not a one-time installation. Flash helps communities take a structured approach—from understanding their current readiness to creating infrastructure that can support the needs of today and tomorrow.',
        step1: { name: 'Assess', description: "Understand the community's current infrastructure and EV readiness." },
        step2: { name: 'Plan', description: "Develop a charging strategy around the community's requirements." },
        step3: { name: 'Install', description: 'Deploy charging infrastructure designed for safe and reliable operation.' },
        step4: { name: 'Manage', description: 'Support the day-to-day charging experience and infrastructure operations.' },
        step5: { name: 'Scale', description: 'Remain prepared as EV adoption within the community grows.' },
      },
      vision: {
        eyebrow: 'OUR VISION',
        title: 'A future where every community is ready for electric mobility.',
        description:
          'We believe EV readiness will become an essential part of modern residential infrastructure. Flash is building toward a future where communities can adopt electric mobility with confidence—without waiting for infrastructure to catch up.',
      },
      cta: {
        eyebrow: "READY FOR WHAT'S NEXT?",
        title: 'Is your community ready for electric mobility?',
        description: 'Whether your community is beginning its EV journey or planning for growing adoption, Flash can help you explore the right path forward.',
        button: 'Talk to Flash',
      },
    },
    contact: {
      hero: {
        eyebrow: 'CONTACT FLASH',
        title: "Let's build an EV-ready community.",
        description: 'Whether your community is exploring EV charging for the first time or planning for growing adoption, our team is ready to help.',
      },
      options: {
        eyebrow: 'GET IN TOUCH',
        title: 'Choose the way that works for you.',
        description: "Whether you have a quick question or want to discuss EV charging infrastructure for your community, we're here to start the conversation.",
      },
      whatsapp: { title: 'Start a conversation', description: 'For quick questions and initial discussions.', button: 'Chat on WhatsApp' },
      phone: { title: 'Speak with Flash', description: 'For a direct conversation with our team.', button: 'Call Flash' },
      form: {
        eyebrow: 'START YOUR EV JOURNEY',
        title: 'Tell us about your community.',
        description:
          "Every community has different requirements. Share a few details with us, and we'll help you explore the right path towards EV-ready infrastructure.",
        nameLabel: 'Your Name',
        communityLabel: 'Society / Community Name',
        cityLabel: 'City',
        phoneLabel: 'Phone Number',
        homesLabel: 'Number of Homes',
        messageLabel: 'Tell Us More',
        submit: 'Send Enquiry',
        whatsapp: {
          greeting: 'Hello Flash, I would like to explore EV charging infrastructure for my community.',
          labelName: 'Name',
          labelCommunity: 'Community',
          labelCity: 'City',
          labelPhone: 'Phone',
          labelHomes: 'Number of Homes',
          labelExtra: 'Additional Information',
          notProvided: 'Not provided',
        },
      },
      closing: {
        eyebrow: 'EVERY COMMUNITY STARTS SOMEWHERE',
        title: "You don't need to have all the answers yet.",
        description:
          "Understanding your community's EV charging requirements can be the first step. Whether you're exploring the possibilities or ready to move forward, Flash can help you understand what comes next.",
      },
    },
  },
  hi: {
    nav: { home: 'होम', about: 'हमारे बारे में', contact: 'संपर्क करें', brandAriaLabel: 'फ्लैश होम' },
    menu: { label: 'मेन्यू', openLabel: 'मेन्यू खोलें' },
    theme: { switchToLight: 'लाइट मोड में बदलें', switchToDark: 'डार्क मोड में बदलें' },
    language: { openLabel: 'भाषा बदलें' },
    validation: { required: 'यह फ़ील्ड आवश्यक है।' },
    whatsapp: {
      genericInquiry: 'नमस्ते फ्लैश, कृपया मुझे अपने समुदाय के लिए EV चार्जिंग इंफ्रास्ट्रक्चर के बारे में अधिक जानकारी दें।',
    },
    hero: {
      eyebrow: 'ईवी चार्जिंग इंफ्रास्ट्रक्चर',
      title: 'EV-रेडी समुदाय बनाना।',
      description: 'फ्लैश आवासीय समुदायों को EV चार्जिंग इंफ्रास्ट्रक्चर की योजना बनाने, स्थापित करने और प्रबंधित करने में मदद करता है।',
      cta: 'फ्लैश से बात करें',
    },
    howWorks: {
      eyebrow: 'फ्लैश कैसे काम करता है',
      title: 'EV तैयारी से रोज़मर्रा की चार्जिंग तक।',
      description:
        'फ्लैश आवासीय समुदायों को उनकी EV आवश्यकताओं को समझने, सही इंफ्रास्ट्रक्चर की योजना बनाने, चार्जिंग समाधान स्थापित करने और उपयोग बढ़ने के साथ अनुभव को सरल बनाए रखने में मदद करता है।',
      assess: { title: 'आकलन', description: 'अपने समुदाय की EV तैयारी, विद्युत क्षमता, पार्किंग और अपेक्षित चार्जिंग मांग को समझें।' },
      plan: { title: 'योजना', description: 'एक व्यावहारिक चार्जिंग रणनीति तैयार करें जो आज समुदाय के अनुकूल हो और भविष्य में EV अपनाने के साथ बढ़ सके।' },
      install: {
        title: 'इंस्टॉलेशन',
        description: 'सुरक्षा, विश्वसनीयता और स्वच्छ इंस्टॉलेशन पर ध्यान देते हुए सही चार्जिंग इंफ्रास्ट्रक्चर स्थापित करें।',
      },
      manage: {
        title: 'प्रबंधन',
        description: 'मांग बढ़ने के साथ समुदाय को इंफ्रास्ट्रक्चर प्रबंधित करने में मदद करते हुए निवासियों के लिए चार्जिंग को सरल बनाए रखें।',
      },
    },
    impact: {
      eyebrow: 'फ्लैश इम्पैक्ट',
      title: 'असली चार्जिंग। वास्तविक असर।',
      description: 'हर चार्जिंग सेशन हमारे समुदायों के लिए एक स्वच्छ और अधिक टिकाऊ भविष्य में योगदान देता है।',
      energyLabel: 'स्वच्छ ऊर्जा प्रदान की गई',
      co2Label: 'CO₂ उत्सर्जन में कमी',
      mobilityLabel: 'स्वच्छ गतिशीलता सक्षम',
      sessionsLabel: 'कुल चार्जिंग सेशन',
      note: 'फ्लैश नेटवर्क में चार्जिंग गतिविधि के आधार पर।',
    },
    homeCta: {
      title: 'बातचीत शुरू करें।',
      description: 'हमें अपने आवासीय समुदाय के बारे में बताएं और फ्लैश के साथ सही EV चार्जिंग समाधान खोजें।',
      cta: 'फ्लैश से संपर्क करें',
    },
    about: {
      hero: {
        eyebrow: 'फ्लैश के बारे में',
        title: 'रोज़मर्रा की इलेक्ट्रिक मोबिलिटी की नींव तैयार करना।',
        description:
          'फ्लैश आवासीय समुदायों को EV चार्जिंग इंफ्रास्ट्रक्चर की योजना बनाने, स्थापित करने और प्रबंधित करने में मदद करता है — जिससे इलेक्ट्रिक मोबिलिटी में बदलाव आसान, स्मार्ट और अधिक सुलभ बनता है।',
      },
      transition: {
        eyebrow: 'बदलाव',
        title: 'इलेक्ट्रिक मोबिलिटी अब दूर का भविष्य नहीं है।',
        body1: 'इलेक्ट्रिक वाहन रोज़मर्रा की ज़िंदगी का हिस्सा बनते जा रहे हैं। लेकिन जैसे-जैसे इनका उपयोग बढ़ता है, इन्हें सपोर्ट करने वाला इंफ्रास्ट्रक्चर भी उसी अनुपात में बढ़ना ज़रूरी है।',
        body2:
          'अपार्टमेंट और आवासीय समुदायों में रहने वाले लाखों लोगों के लिए, विश्वसनीय चार्जिंग तक सुविधाजनक पहुंच इस बदलाव का एक सबसे महत्वपूर्ण हिस्सा बनी हुई है।',
      },
      why: {
        eyebrow: 'फ्लैश क्यों मौजूद है',
        title: 'EV चार्जिंग सिर्फ चार्जर लगाने से कहीं ज़्यादा है।',
        body1:
          'जैसे-जैसे अधिक निवासी इलेक्ट्रिक वाहनों की ओर रुख करते हैं, आवासीय समुदायों को एक नई इंफ्रास्ट्रक्चर चुनौती का सामना करना पड़ता है। चार्जिंग की योजना मौजूदा विद्युत क्षमता, पार्किंग लेआउट, सुरक्षा आवश्यकताओं और भविष्य की मांग को ध्यान में रखकर बनानी होगी।',
        body2: 'फ्लैश को इस बदलाव में समुदायों की मदद करने के लिए बनाया गया है, EV चार्जिंग इंफ्रास्ट्रक्चर के लिए एक अधिक संरचित और दीर्घकालिक दृष्टिकोण के साथ।',
      },
      storyline: {
        individual: 'व्यक्तिगत चार्जर',
        community: 'सामुदायिक योजना',
        scalable: 'विस्तार योग्य इंफ्रास्ट्रक्चर',
      },
      community: {
        eyebrow: 'समुदायों के लिए बनाया गया',
        title: 'क्योंकि समुदायों को सिर्फ चार्जिंग पॉइंट से ज़्यादा की ज़रूरत है।',
        body1:
          'हर आवासीय समुदाय अलग होता है। पार्किंग लेआउट, विद्युत इंफ्रास्ट्रक्चर, निवासियों की ज़रूरतें और भविष्य में EV अपनाना - ये सभी सही चार्जिंग रणनीति तय करते हैं।',
        body2:
          "फ्लैश EV इंफ्रास्ट्रक्चर के लिए 'समुदाय-पहले' दृष्टिकोण अपनाता है, जो सोसाइटियों को व्यक्तिगत चार्जिंग पॉइंट से आगे बढ़कर पूरे समुदाय के लिए बनाए गए समाधान की ओर ले जाने में मदद करता है।",
      },
      ecosystem: {
        core: 'समुदाय',
        power: { kicker: 'बिजली', text: 'मौजूदा विद्युत क्षमता' },
        parking: { kicker: 'पार्किंग', text: 'लेआउट और सुगमता' },
        people: { kicker: 'निवासी', text: 'निवासियों की ज़रूरतें और अपनाना' },
        growth: { kicker: 'विकास', text: 'भविष्य में विस्तार क्षमता' },
      },
      journey: {
        eyebrow: 'फ्लैश दृष्टिकोण',
        title: 'EV तैयारी से रोज़मर्रा की चार्जिंग तक।',
        description:
          'EV इंफ्रास्ट्रक्चर बनाना एक यात्रा है, एक बार की स्थापना नहीं। फ्लैश समुदायों को एक संरचित दृष्टिकोण अपनाने में मदद करता है — उनकी वर्तमान तैयारी को समझने से लेकर ऐसा इंफ्रास्ट्रक्चर बनाने तक जो आज और आने वाले कल दोनों की ज़रूरतों को पूरा कर सके।',
        step1: { name: 'आकलन', description: 'समुदाय के मौजूदा इंफ्रास्ट्रक्चर और EV तैयारी को समझें।' },
        step2: { name: 'योजना', description: 'समुदाय की आवश्यकताओं के अनुसार एक चार्जिंग रणनीति तैयार करें।' },
        step3: { name: 'इंस्टॉलेशन', description: 'सुरक्षित और भरोसेमंद संचालन के लिए तैयार किया गया चार्जिंग इंफ्रास्ट्रक्चर स्थापित करें।' },
        step4: { name: 'प्रबंधन', description: 'रोज़मर्रा के चार्जिंग अनुभव और इंफ्रास्ट्रक्चर संचालन में सहयोग करें।' },
        step5: { name: 'विस्तार', description: 'समुदाय में EV अपनाने की दर बढ़ने पर तैयार रहें।' },
      },
      vision: {
        eyebrow: 'हमारा विज़न',
        title: 'एक ऐसा भविष्य जहाँ हर समुदाय इलेक्ट्रिक मोबिलिटी के लिए तैयार हो।',
        description:
          'हमारा मानना है कि EV तैयारी आधुनिक आवासीय इंफ्रास्ट्रक्चर का एक ज़रूरी हिस्सा बन जाएगी। फ्लैश एक ऐसे भविष्य की दिशा में काम कर रहा है जहाँ समुदाय बिना इंफ्रास्ट्रक्चर के इंतज़ार किए, भरोसे के साथ इलेक्ट्रिक मोबिलिटी अपना सकें।',
      },
      cta: {
        eyebrow: 'आगे के लिए तैयार?',
        title: 'क्या आपका समुदाय इलेक्ट्रिक मोबिलिटी के लिए तैयार है?',
        description: 'चाहे आपका समुदाय अपनी EV यात्रा शुरू कर रहा हो या बढ़ते उपयोग की योजना बना रहा हो, फ्लैश आपको सही राह खोजने में मदद कर सकता है।',
        button: 'फ्लैश से बात करें',
      },
    },
    contact: {
      hero: {
        eyebrow: 'फ्लैश से संपर्क करें',
        title: 'आइए एक EV-रेडी समुदाय बनाएं।',
        description: 'चाहे आपका समुदाय पहली बार EV चार्जिंग के बारे में जान रहा हो या बढ़ते उपयोग की योजना बना रहा हो, हमारी टीम मदद के लिए तैयार है।',
      },
      options: {
        eyebrow: 'संपर्क करें',
        title: 'अपने लिए सही तरीका चुनें।',
        description:
          'चाहे आपका कोई त्वरित सवाल हो या आप अपने समुदाय के लिए EV चार्जिंग इंफ्रास्ट्रक्चर पर चर्चा करना चाहते हों, हम बातचीत शुरू करने के लिए यहाँ हैं।',
      },
      whatsapp: { title: 'बातचीत शुरू करें', description: 'त्वरित सवालों और शुरुआती चर्चा के लिए।', button: 'WhatsApp पर चैट करें' },
      phone: { title: 'फ्लैश से बात करें', description: 'हमारी टीम से सीधी बातचीत के लिए।', button: 'फ्लैश को कॉल करें' },
      form: {
        eyebrow: 'अपनी EV यात्रा शुरू करें',
        title: 'हमें अपने समुदाय के बारे में बताएं।',
        description: 'हर समुदाय की ज़रूरतें अलग होती हैं। हमें कुछ जानकारी दें, और हम आपको EV-रेडी इंफ्रास्ट्रक्चर की सही राह खोजने में मदद करेंगे।',
        nameLabel: 'आपका नाम',
        communityLabel: 'सोसाइटी / समुदाय का नाम',
        cityLabel: 'शहर',
        phoneLabel: 'फ़ोन नंबर',
        homesLabel: 'घरों की संख्या',
        messageLabel: 'हमें और बताएं',
        submit: 'पूछताछ भेजें',
        whatsapp: {
          greeting: 'नमस्ते फ्लैश, कृपया मेरे समुदाय के लिए उपयुक्त EV चार्जिंग इंफ्रास्ट्रक्चर समाधान में मदद करें।',
          labelName: 'नाम',
          labelCommunity: 'समुदाय',
          labelCity: 'शहर',
          labelPhone: 'फ़ोन',
          labelHomes: 'घरों की संख्या',
          labelExtra: 'अतिरिक्त जानकारी',
          notProvided: 'उपलब्ध नहीं',
        },
      },
      closing: {
        eyebrow: 'हर समुदाय की शुरुआत कहीं न कहीं से होती है',
        title: 'आपके पास अभी सभी जवाब होने ज़रूरी नहीं हैं।',
        description:
          'अपने समुदाय की EV चार्जिंग आवश्यकताओं को समझना पहला कदम हो सकता है। चाहे आप संभावनाएं तलाश रहे हों या आगे बढ़ने के लिए तैयार हों, फ्लैश आपको अगला कदम समझने में मदद कर सकता है।',
      },
    },
  },
  gu: {
    nav: { home: 'હોમ', about: 'અમારા વિશે', contact: 'સંપર્ક કરો', brandAriaLabel: 'ફ્લેશ હોમ' },
    menu: { label: 'મેનુ', openLabel: 'મેનુ ખોલો' },
    theme: { switchToLight: 'લાઇટ મોડ પર સ્વિચ કરો', switchToDark: 'ડાર્ક મોડ પર સ્વિચ કરો' },
    language: { openLabel: 'ભાષા બદલો' },
    validation: { required: 'આ ફીલ્ડ જરૂરી છે.' },
    whatsapp: {
      genericInquiry: 'નમસ્તે ફ્લેશ, કૃપા કરીને મને મારા સમુદાય માટે EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર વિશે વધુ માહિતી આપો.',
    },
    hero: {
      eyebrow: 'ઈવી ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર',
      title: 'EV-રેડી સમુદાયોનું નિર્માણ.',
      description: 'ફ્લેશ રહેણાંક સમુદાયોને EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચરનું આયોજન, ઇન્સ્ટોલેશન અને સંચાલન કરવામાં મદદ કરે છે.',
      cta: 'ફ્લેશ સાથે વાત કરો',
    },
    howWorks: {
      eyebrow: 'ફ્લેશ કેવી રીતે કામ કરે છે',
      title: 'EV તૈયારીથી રોજિંદા ચાર્જિંગ સુધી.',
      description:
        'ફ્લેશ રહેણાંક સમુદાયોને તેમની EV જરૂરિયાતો સમજવામાં, યોગ્ય ઈન્ફ્રાસ્ટ્રક્ચરનું આયોજન કરવામાં, ચાર્જિંગ સોલ્યુશન્સ ઇન્સ્ટોલ કરવામાં અને ઉપયોગ વધવાની સાથે અનુભવ સરળ રાખવામાં મદદ કરે છે.',
      assess: { title: 'મૂલ્યાંકન', description: 'તમારા સમુદાયની EV તૈયારી, વિદ્યુત ક્ષમતા, પાર્કિંગ અને અપેક્ષિત ચાર્જિંગ માંગને સમજો.' },
      plan: {
        title: 'આયોજન',
        description: 'એક વ્યવહારુ ચાર્જિંગ અભિગમ ડિઝાઇન કરો જે આજે સમુદાયને અનુકૂળ હોય અને ભવિષ્યના EV અપનાવવા સાથે વિસ્તરી શકે.',
      },
      install: {
        title: 'ઇન્સ્ટોલેશન',
        description: 'સલામતી, વિશ્વસનીયતા અને ચોખ્ખા ઇન્સ્ટોલેશન પર ધ્યાન કેન્દ્રિત કરીને યોગ્ય ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર સ્થાપિત કરો.',
      },
      manage: {
        title: 'સંચાલન',
        description: 'માંગ વધવાની સાથે સમુદાયને ઈન્ફ્રાસ્ટ્રક્ચર સંચાલિત કરવામાં મદદ કરતી વખતે રહેવાસીઓ માટે ચાર્જિંગ સરળ રાખો.',
      },
    },
    impact: {
      eyebrow: 'ફ્લેશ ઈમ્પેક્ટ',
      title: 'ખરું ચાર્જિંગ. વાસ્તવિક અસર.',
      description: 'દરેક ચાર્જિંગ સેશન અમારા સમુદાયો માટે વધુ સ્વચ્છ અને ટકાઉ ભવિષ્યમાં ફાળો આપે છે.',
      energyLabel: 'સ્વચ્છ ઊર્જા પ્રદાન',
      co2Label: 'CO₂ ઉત્સર્જનમાં ઘટાડો',
      mobilityLabel: 'સ્વચ્છ ગતિશીલતા સક્ષમ',
      sessionsLabel: 'કુલ ચાર્જિંગ સેશન',
      note: 'ફ્લેશ નેટવર્ક પરની ચાર્જિંગ પ્રવૃત્તિના આધારે.',
    },
    homeCta: {
      title: 'વાતચીત શરૂ કરો.',
      description: 'અમને તમારા રહેણાંક સમુદાય વિશે જણાવો અને ફ્લેશ સાથે યોગ્ય EV ચાર્જિંગ સોલ્યુશન શોધો.',
      cta: 'ફ્લેશનો સંપર્ક કરો',
    },
    about: {
      hero: {
        eyebrow: 'ફ્લેશ વિશે',
        title: 'રોજિંદા ઇલેક્ટ્રિક મોબિલિટી માટે પાયો બનાવવો.',
        description:
          'ફ્લેશ રહેણાંક સમુદાયોને EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચરનું આયોજન, ઇન્સ્ટોલેશન અને સંચાલન કરવામાં મદદ કરે છે — જેનાથી ઇલેક્ટ્રિક મોબિલિટી તરફનું પરિવર્તન સરળ, સ્માર્ટ અને વધુ સુલભ બને છે.',
      },
      transition: {
        eyebrow: 'પરિવર્તન',
        title: 'ઇલેક્ટ્રિક મોબિલિટી હવે દૂરનું ભવિષ્ય નથી.',
        body1: 'ઇલેક્ટ્રિક વાહનો રોજિંદા જીવનનો ભાગ બની રહ્યા છે. પરંતુ જેમ જેમ તેમનો ઉપયોગ વધે છે, તેમને સપોર્ટ કરવા માટે જરૂરી ઈન્ફ્રાસ્ટ્રક્ચર પણ તે જ પ્રમાણે વધવું જરૂરી છે.',
        body2: 'એપાર્ટમેન્ટ અને રહેણાંક સમુદાયોમાં રહેતા લાખો લોકો માટે, વિશ્વસનીય ચાર્જિંગની અનુકૂળ પહોંચ આ પરિવર્તનનો સૌથી મહત્વપૂર્ણ ભાગ છે.',
      },
      why: {
        eyebrow: 'ફ્લેશ શા માટે અસ્તિત્વમાં છે',
        title: 'EV ચાર્જિંગ ફક્ત ચાર્જર ઇન્સ્ટોલ કરવા કરતાં ઘણું વધારે છે.',
        body1:
          'જેમ જેમ વધુ રહેવાસીઓ ઇલેક્ટ્રિક વાહનો તરફ વળે છે, રહેણાંક સમુદાયોને એક નવા ઈન્ફ્રાસ્ટ્રક્ચર પડકારનો સામનો કરવો પડે છે. ચાર્જિંગનું આયોજન હાલની વિદ્યુત ક્ષમતા, પાર્કિંગ લેઆઉટ, સલામતી જરૂરિયાતો અને ભવિષ્યની માંગને ધ્યાનમાં રાખીને કરવું જોઈએ.',
        body2: 'ફ્લેશની રચના સમુદાયોને આ પરિવર્તનમાં મદદ કરવા માટે કરવામાં આવી છે, EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર માટે વધુ સંરચિત અને લાંબા ગાળાના અભિગમ સાથે.',
      },
      storyline: {
        individual: 'વ્યક્તિગત ચાર્જર',
        community: 'સામુદાયિક આયોજન',
        scalable: 'વિસ્તરણક્ષમ ઈન્ફ્રાસ્ટ્રક્ચર',
      },
      community: {
        eyebrow: 'સમુદાયો માટે બનાવેલ',
        title: 'કારણ કે સમુદાયોને ફક્ત ચાર્જિંગ પોઈન્ટ કરતાં વધુની જરૂર છે.',
        body1:
          'દરેક રહેણાંક સમુદાય અલગ હોય છે. પાર્કિંગ લેઆઉટ, વિદ્યુત ઈન્ફ્રાસ્ટ્રક્ચર, રહેવાસીઓની જરૂરિયાતો અને ભવિષ્યમાં EV અપનાવવું - આ બધું જ યોગ્ય ચાર્જિંગ વ્યૂહરચના નક્કી કરે છે.',
        body2:
          "ફ્લેશ EV ઈન્ફ્રાસ્ટ્રક્ચર માટે 'સમુદાય-પ્રથમ' અભિગમ અપનાવે છે, જે સોસાયટીઓને વ્યક્તિગત ચાર્જિંગ પોઈન્ટથી આગળ વધીને સમગ્ર સમુદાય માટે બનાવેલ ઉકેલ તરફ લઈ જવામાં મદદ કરે છે.",
      },
      ecosystem: {
        core: 'સમુદાય',
        power: { kicker: 'વીજળી', text: 'હાલની વિદ્યુત ક્ષમતા' },
        parking: { kicker: 'પાર્કિંગ', text: 'લેઆઉટ અને સુલભતા' },
        people: { kicker: 'લોકો', text: 'રહેવાસીઓની જરૂરિયાતો અને અપનાવવું' },
        growth: { kicker: 'વૃદ્ધિ', text: 'ભવિષ્યની વિસ્તરણક્ષમતા' },
      },
      journey: {
        eyebrow: 'ફ્લેશ અભિગમ',
        title: 'EV તૈયારીથી રોજિંદા ચાર્જિંગ સુધી.',
        description:
          'EV ઈન્ફ્રાસ્ટ્રક્ચર બનાવવું એ એક પ્રવાસ છે, એક વખતનું ઇન્સ્ટોલેશન નથી. ફ્લેશ સમુદાયોને એક સંરચિત અભિગમ અપનાવવામાં મદદ કરે છે — તેમની હાલની તૈયારી સમજવાથી લઈને એવું ઈન્ફ્રાસ્ટ્રક્ચર બનાવવા સુધી જે આજ અને આવતીકાલ બંનેની જરૂરિયાતો પૂરી કરી શકે.',
        step1: { name: 'મૂલ્યાંકન', description: 'સમુદાયના હાલના ઈન્ફ્રાસ્ટ્રક્ચર અને EV તૈયારીને સમજો.' },
        step2: { name: 'આયોજન', description: 'સમુદાયની જરૂરિયાતો અનુસાર ચાર્જિંગ વ્યૂહરચના વિકસાવો.' },
        step3: { name: 'ઇન્સ્ટોલેશન', description: 'સલામત અને વિશ્વસનીય કામગીરી માટે બનાવેલ ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર સ્થાપિત કરો.' },
        step4: { name: 'સંચાલન', description: 'રોજિંદા ચાર્જિંગ અનુભવ અને ઈન્ફ્રાસ્ટ્રક્ચર કામગીરીને સપોર્ટ કરો.' },
        step5: { name: 'વિસ્તરણ', description: 'સમુદાયમાં EV અપનાવવાનું પ્રમાણ વધે ત્યારે તૈયાર રહો.' },
      },
      vision: {
        eyebrow: 'અમારું વિઝન',
        title: 'એક એવું ભવિષ્ય જ્યાં દરેક સમુદાય ઇલેક્ટ્રિક મોબિલિટી માટે તૈયાર હોય.',
        description:
          'અમે માનીએ છીએ કે EV તૈયારી આધુનિક રહેણાંક ઈન્ફ્રાસ્ટ્રક્ચરનો આવશ્યક ભાગ બનશે. ફ્લેશ એવા ભવિષ્ય તરફ કામ કરી રહ્યું છે જ્યાં સમુદાયો ઈન્ફ્રાસ્ટ્રક્ચરની રાહ જોયા વિના, વિશ્વાસ સાથે ઇલેક્ટ્રિક મોબિલિટી અપનાવી શકે.',
      },
      cta: {
        eyebrow: 'આગળ માટે તૈયાર?',
        title: 'શું તમારો સમુદાય ઇલેક્ટ્રિક મોબિલિટી માટે તૈયાર છે?',
        description: 'તમારો સમુદાય તેની EV યાત્રા શરૂ કરી રહ્યો હોય કે વધતા ઉપયોગનું આયોજન કરી રહ્યો હોય, ફ્લેશ તમને યોગ્ય માર્ગ શોધવામાં મદદ કરી શકે છે.',
        button: 'ફ્લેશ સાથે વાત કરો',
      },
    },
    contact: {
      hero: {
        eyebrow: 'ફ્લેશનો સંપર્ક કરો',
        title: 'ચાલો એક EV-રેડી સમુદાય બનાવીએ.',
        description: 'તમારો સમુદાય પ્રથમ વખત EV ચાર્જિંગ વિશે જાણી રહ્યો હોય કે વધતા ઉપયોગનું આયોજન કરી રહ્યો હોય, અમારી ટીમ મદદ કરવા તૈયાર છે.',
      },
      options: {
        eyebrow: 'સંપર્કમાં રહો',
        title: 'તમારા માટે યોગ્ય રીત પસંદ કરો.',
        description: 'તમારો કોઈ ઝડપી પ્રશ્ન હોય કે તમે તમારા સમુદાય માટે EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર વિશે ચર્ચા કરવા માંગતા હો, અમે વાતચીત શરૂ કરવા માટે અહીં છીએ.',
      },
      whatsapp: { title: 'વાતચીત શરૂ કરો', description: 'ઝડપી પ્રશ્નો અને પ્રારંભિક ચર્ચા માટે.', button: 'WhatsApp પર ચેટ કરો' },
      phone: { title: 'ફ્લેશ સાથે વાત કરો', description: 'અમારી ટીમ સાથે સીધી વાતચીત માટે.', button: 'ફ્લેશને કૉલ કરો' },
      form: {
        eyebrow: 'તમારી EV યાત્રા શરૂ કરો',
        title: 'અમને તમારા સમુદાય વિશે જણાવો.',
        description: 'દરેક સમુદાયની જરૂરિયાતો અલગ હોય છે. અમને થોડી વિગતો જણાવો, અને અમે તમને EV-રેડી ઈન્ફ્રાસ્ટ્રક્ચર તરફનો યોગ્ય માર્ગ શોધવામાં મદદ કરીશું.',
        nameLabel: 'તમારું નામ',
        communityLabel: 'સોસાયટી / સમુદાયનું નામ',
        cityLabel: 'શહેર',
        phoneLabel: 'ફોન નંબર',
        homesLabel: 'ઘરોની સંખ્યા',
        messageLabel: 'અમને વધુ જણાવો',
        submit: 'પૂછપરછ મોકલો',
        whatsapp: {
          greeting: 'નમસ્તે ફ્લેશ, કૃપા કરીને મારા સમુદાય માટે યોગ્ય EV ચાર્જિંગ ઈન્ફ્રાસ્ટ્રક્ચર સોલ્યુશનમાં મદદ કરો.',
          labelName: 'નામ',
          labelCommunity: 'સમુદાય',
          labelCity: 'શહેર',
          labelPhone: 'ફોન',
          labelHomes: 'ઘરોની સંખ્યા',
          labelExtra: 'વધારાની માહિતી',
          notProvided: 'ઉપલબ્ધ નથી',
        },
      },
      closing: {
        eyebrow: 'દરેક સમુદાયની શરૂઆત ક્યાંકથી થાય છે',
        title: 'તમારી પાસે હજુ બધા જવાબો હોવા જરૂરી નથી.',
        description:
          'તમારા સમુદાયની EV ચાર્જિંગ જરૂરિયાતોને સમજવી એ પ્રથમ પગલું બની શકે છે. તમે શક્યતાઓ શોધી રહ્યા હો કે આગળ વધવા તૈયાર હો, ફ્લેશ તમને આગળ શું કરવું તે સમજવામાં મદદ કરી શકે છે.',
      },
    },
  },
};

const getCurrentLanguage = () => {
  const lang = document.documentElement.getAttribute('data-lang');
  return lang === 'hi' || lang === 'gu' ? lang : 'en';
};

const resolveTranslation = (lang, key) => key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), TRANSLATIONS[lang]);

const translate = (key) => resolveTranslation(getCurrentLanguage(), key) ?? resolveTranslation('en', key) ?? key;

const updateThemeToggleLabel = () => {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', translate(isLight ? 'theme.switchToDark' : 'theme.switchToLight'));
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggleLabel();
};

const initThemeToggle = () => {
  const themeToggle = document.getElementById('theme-toggle');

  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';

    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  });

  themeToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      themeToggle.click();
    }
  });
};

const initMenu = () => {
  const menuToggle = document.getElementById('menu-toggle');
  const siteMenu = document.getElementById('site-menu');

  if (!menuToggle || !siteMenu) return;

  let closeTimeout = null;

  const closeMenu = () => {
    if (!siteMenu.classList.contains('is-open')) return;

    siteMenu.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');

    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      siteMenu.setAttribute('hidden', '');
    }, 200);
  };

  const openMenu = () => {
    clearTimeout(closeTimeout);
    siteMenu.removeAttribute('hidden');

    // Force a layout flush so the opening transition animates from its closed state
    // instead of the removed "hidden" and added "is-open" class applying in the same tick.
    void siteMenu.offsetHeight;

    siteMenu.classList.add('is-open');
    menuToggle.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    if (siteMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      menuToggle.click();
    }
  });

  siteMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('click', (event) => {
    if (!siteMenu.classList.contains('is-open')) return;
    if (siteMenu.contains(event.target) || menuToggle.contains(event.target)) return;

    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteMenu.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
};

const updateWhatsAppCtaLinks = () => {
  const message = encodeURIComponent(translate('whatsapp.genericInquiry'));

  document.querySelectorAll('[data-whatsapp-cta]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const base = href.split('?')[0];
    link.setAttribute('href', `${base}?text=${message}`);
  });
};

const applyLanguage = (lang) => {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = translate(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    el.setAttribute('aria-label', translate(el.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', translate(el.dataset.i18nPlaceholder));
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const codeLabel = document.getElementById('lang-toggle-code');
    if (codeLabel) {
      codeLabel.textContent = lang === 'hi' ? 'हि' : lang === 'gu' ? 'ગુ' : 'EN';
    }
  }

  document.querySelectorAll('.lang-option').forEach((option) => {
    const isSelected = option.dataset.lang === lang;
    option.setAttribute('aria-checked', String(isSelected));
    option.classList.toggle('is-selected', isSelected);
  });

  updateThemeToggleLabel();
  updateWhatsAppCtaLinks();
};

const initLanguage = () => {
  applyLanguage(getCurrentLanguage());

  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');

  if (!langToggle || !langMenu) return;

  let closeTimeout = null;

  const closeLangMenu = () => {
    if (!langMenu.classList.contains('is-open')) return;

    langMenu.classList.remove('is-open');
    langToggle.classList.remove('is-open');
    langToggle.setAttribute('aria-expanded', 'false');

    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      langMenu.setAttribute('hidden', '');
    }, 200);
  };

  const openLangMenu = () => {
    clearTimeout(closeTimeout);
    langMenu.removeAttribute('hidden');

    // Force a layout flush so the opening transition animates from its closed state.
    void langMenu.offsetHeight;

    langMenu.classList.add('is-open');
    langToggle.classList.add('is-open');
    langToggle.setAttribute('aria-expanded', 'true');
  };

  langToggle.addEventListener('click', (event) => {
    event.stopPropagation();

    if (langMenu.classList.contains('is-open')) {
      closeLangMenu();
    } else {
      openLangMenu();
    }
  });

  langToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      langToggle.click();
    }
  });

  langMenu.querySelectorAll('.lang-option').forEach((option) => {
    option.addEventListener('click', () => {
      const lang = option.dataset.lang;
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      applyLanguage(lang);
      closeLangMenu();
    });
  });

  document.addEventListener('click', (event) => {
    if (!langMenu.classList.contains('is-open')) return;
    if (langMenu.contains(event.target) || langToggle.contains(event.target)) return;

    closeLangMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && langMenu.classList.contains('is-open')) {
      closeLangMenu();
      langToggle.focus();
    }
  });
};

const setActiveNavigation = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isHome = (currentPage === '' || currentPage === 'index.html') && (href === 'index.html' || href === '#top');
    const isAbout = currentPage === 'about.html' && href === 'about.html';
    const isContact = currentPage === 'contact.html' && href === 'contact.html';

    const isActive = isHome || isAbout || isContact;

    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

const formatNumber = (value, decimals = 0) => {
  if (decimals > 0) {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });
};

const animateMetric = (element) => {
  const target = Number(element.dataset.target || 0);
  const suffix = element.dataset.suffix || '';
  const decimals = suffix === 'kWh' || suffix === 'kg' || suffix === 'km' ? 2 : 0;
  const valueEl = element.querySelector('.impact-value') || element;

  if (reducedMotionQuery.matches) {
    const formatted = suffix === 'km'
      ? formatNumber(target, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : formatNumber(target, decimals);

    valueEl.textContent = formatted;
    return;
  }

  const duration = 1200;
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    let formatted;

    if (suffix === 'km') {
      formatted = formatNumber(current, 2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (suffix === 'kWh' || suffix === 'kg') {
      formatted = formatNumber(current, 2);
    } else {
      formatted = formatNumber(current, 0);
    }

    valueEl.textContent = formatted;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
};

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      animateMetric(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.35,
  }
);

initThemeToggle();
initMenu();
initLanguage();
setActiveNavigation();

const flashWhatsappUrl = 'https://wa.me/916262663664';

const buildWhatsAppMessage = (data) => {
  const extraInfo = data.message?.trim() ? data.message.trim() : translate('contact.form.whatsapp.notProvided');
  const homes = data.homes?.trim() ? data.homes.trim() : translate('contact.form.whatsapp.notProvided');

  return [
    translate('contact.form.whatsapp.greeting'),
    '',
    `${translate('contact.form.whatsapp.labelName')}: ${data.name.trim()}`,
    `${translate('contact.form.whatsapp.labelCommunity')}: ${data.community.trim()}`,
    `${translate('contact.form.whatsapp.labelCity')}: ${data.city.trim()}`,
    `${translate('contact.form.whatsapp.labelPhone')}: ${data.phone.trim()}`,
    `${translate('contact.form.whatsapp.labelHomes')}: ${homes}`,
    `${translate('contact.form.whatsapp.labelExtra')}: ${extraInfo}`,
  ].join('\n');
};

const contactForm = document.getElementById('flash-contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const values = {
      name: (formData.get('name') || '').toString().trim(),
      community: (formData.get('community') || '').toString().trim(),
      city: (formData.get('city') || '').toString().trim(),
      phone: (formData.get('phone') || '').toString().trim(),
      homes: (formData.get('homes') || '').toString().trim(),
      message: (formData.get('message') || '').toString().trim(),
    };

    const requiredFields = ['name', 'community', 'city', 'phone'];
    const missingFields = requiredFields.filter((field) => !values[field]);

    if (missingFields.length > 0) {
      const firstMissing = document.getElementById(missingFields[0]);
      firstMissing?.focus();
      firstMissing?.setCustomValidity(translate('validation.required'));
      firstMissing?.reportValidity();
      firstMissing?.setCustomValidity('');
      return;
    }

    const whatsappMessage = encodeURIComponent(buildWhatsAppMessage(values));
    const whatsappUrl = `${flashWhatsappUrl}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  });
}

document.querySelectorAll('.impact-metric').forEach((metric) => {
  if (reducedMotionQuery.matches) {
    animateMetric(metric);
    return;
  }

  metricObserver.observe(metric);
});
