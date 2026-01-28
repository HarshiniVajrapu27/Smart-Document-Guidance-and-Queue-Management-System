export function getLang() {
  return localStorage.getItem('selectedLanguage') || 'en';
}

export function serviceTitle(svc) {
  const lang = getLang();
  return lang === 'te' ? (svc.titleTe || svc.titleEn) : svc.titleEn;
}

export function serviceList(svc) {
  const lang = getLang();
  return lang === 'te' ? (svc.te || svc.en) : svc.en;
}

const translations = {
  en: {
    back: '← Back',
    appTitle: '🇮🇳 AP Sachivalayam Services',
    signIn: 'Sign in with Google',
    signOut: 'Sign out',
    homeTitle: 'Sachivalayam Services',
    homeSubtitle1: 'Easy access to village services',
    homeSubtitle2: 'All government services in one place',
    bookAppointmentTitle: '📅 Book an Appointment',
    bookAppointmentDesc: 'Select a service and book your appointment with available time slots',
    startBooking: 'Start Booking →',
    noAppointments: '📭 No appointments booked yet',
    cancelConfirm: 'Cancel appointment?',
    appointmentCancelled: 'Appointment cancelled',
    tokenLabel: 'Token:',
    nameLabel: 'Name:',
    mobileLabel: 'Mobile:',
    dateLabel: 'Date:',
    timeLabel: 'Time:',
    bookedOn: 'Booked On:',
    cancelButton: '❌ Cancel',
    selectRole: 'Select Role',
    citizen: 'Citizen',
    officer: 'Officer',
    noRecentBookings: 'No recent bookings',
    userLabel: '👤 User:',
    serviceLabel: '📋 Service:',
    yourToken: 'Your Token',
    yourPosition: '🎫 Your Position:',
    peopleAhead: '👥 People Ahead:',
    estWait: '⏱️ Estimated Wait Time:',
    lastUpdated: '🔄 Last Updated:',
    updateQueue: 'Update Queue',
    totalToday: 'Total today:',
    requiredDocuments: '📋 Required Documents',
    proceedToBooking: '✅ Proceed to Booking →',
    yourName: 'Your Name:',
    mobileNumber: 'Mobile Number:',
    selectDate: 'Select Date:',
    availableSlots: 'Available Time Slots:',
    confirmGetToken: '✅ Confirm & Get Token',
    backToServices: '← Back to Services',
    officerSignup: 'Officer Sign Up / Login',
    fullNamePlaceholder: 'Full name',
    employeeIdPlaceholder: 'Employee ID',
    mobilePlaceholder: '10-digit mobile',
    sendOtp: 'Send OTP',
    verify: 'Verify',
    officerGenerate: 'Officer — Generate Token',
    generateToken: 'Generate Token',
    logout: 'Logout'
  },
  te: {
    back: '← వెనుకకు',
    appTitle: '🇮🇳 AP సచివాలయం సేవలు',
    signIn: 'Google తో సైన్ ఇన్',
    signOut: 'సైన్ అవుట్',
    homeTitle: 'సచివాలయం సేవలు',
    homeSubtitle1: 'గ్రామ సేవలకు సులభమైన ప్రాప్తి',
    homeSubtitle2: 'అన్ని ప్రభుత్వ సేవలు ఒక చోట',
    bookAppointmentTitle: '📅 అపాయింట్‌మెంట్ బుక్ చేయండి',
    bookAppointmentDesc: 'సేవను ఎంచుకుని అందుబాటులో ఉన్న టైమ్‌స్లాట్లతో మీ అపాయింట్‌మెంట్ బుక్ చేయండి',
    startBooking: 'బుకింగ్ ప్రారంభించండి →',
    noAppointments: '📭 ఇప్పటి వరకు ఏ అపాయింట్‌మెంట్లు లేవు',
    cancelConfirm: 'అపాయింట్‌మెంట్ను రద్దా చేయాలా?',
    appointmentCancelled: 'అపాయింట్‌మెంట్ రద్దు చేయబడింది',
    tokenLabel: 'టోకిన్:',
    nameLabel: 'పేరు:',
    mobileLabel: 'మొబైల్:',
    dateLabel: 'తేదీ:',
    timeLabel: 'సమయం:',
    bookedOn: 'బుక్ చేయబడినది:',
    cancelButton: '❌ రద్దు',
    selectRole: 'పాత్రను ఎంచుకోండి',
    citizen: 'పౌరుడు',
    officer: 'అధికారి',
    noRecentBookings: 'ఇటీవల బుకింగ్‌లు లేను',
    userLabel: '👤 వినియోగదారుడు:',
    serviceLabel: '📋 సేవ:',
    yourToken: 'మీ టోకిన్',
    yourPosition: '🎫 మీ స్థానం:',
    peopleAhead: '👥 ముందు ఉన్నవారిదై:',
    estWait: '⏱️ అంచనా వేయబడిన వేచి సమయం:',
    lastUpdated: '🔄 చివరిసారి నవీకరించబడింది:',
    updateQueue: 'క్యూను నవీకరించు',
    totalToday: 'ఈ రోజు మొత్తం:',
    requiredDocuments: '📋 అవసరమైన పత్రాలు',
    proceedToBooking: '✅ బుకింగ్ కు ముందుకు →',
    yourName: 'మీ పేరు:',
    mobileNumber: 'మొబైల్ నంబర్:',
    selectDate: 'తేదీ ఎంచుకోండి:',
    availableSlots: 'లభ్యమైన టైమ్ స్లాట్స్:',
    confirmGetToken: '✅ నిర్ధారించండి & టోకిన్ పొందండి',
    backToServices: '← సేవలకి తిరుగు',
    officerSignup: 'అధికారి సైన్ అప్ / లాగిన్',
    fullNamePlaceholder: 'పూర్తి పేరు',
    employeeIdPlaceholder: 'ఉద్యోగి ID',
    mobilePlaceholder: '10-అంకెల మొబైల్',
    sendOtp: 'OTP పంపండి',
    verify: 'తద్వారా ధృవీకరించండి',
    officerGenerate: 'అధికారికుడు — టోకెన్ రూపొందించండి',
    generateToken: 'టోకెన్ రూపొందించండి',
    logout: 'లాగ్ అవుట్'
  }
};

export function t(key) {
  const lang = getLang();
  return (translations[lang] && translations[lang][key]) || translations['en'][key] || key;
}
