

const dummy = [
  {
    name: "Venerable Ananda",
    email: "ananda@peace.org",
    password: "password123",
    image: "https://images.pexels.com/photos/5415959/pexels-photo-5415959.jpeg",
    speciality: "Monk",
    degree: "Buddhist Studies",
    experience: "12 years",
    about: "Venerable Ananda has dedicated his life to the practice and teaching of mindfulness and meditation through traditional Buddhist wisdom. With more than twelve years of experience, he guides individuals toward inner peace, emotional balance, and self-awareness. His teachings emphasize mindful breathing, present-moment awareness, and compassionate living. He believes that true happiness arises from understanding the nature of the mind. Venerable Ananda helps people reduce stress, anxiety, and mental restlessness through simple yet powerful practices. He focuses on applying meditation techniques in everyday life rather than limiting them to formal practice. His guidance encourages patience, kindness, and non-attachment. He works with individuals from diverse backgrounds seeking clarity and calm. Through consistent practice, he helps seekers develop emotional stability and inner strength. His approach blends ancient teachings with modern mental health needs. He strongly believes mindfulness is a lifelong journey rather than a quick solution. His mission is to help individuals live with awareness, compassion, and peace.",
    fees: 20,
    slots_booked: {},
    address: {
      street: "Peace Monastery",
      city: "Himalayan Foothills",
      state: "Uttarakhand",
      pincode: "249001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Laura Benson",
    email: "laura.benson@mindcare.com",
    password: "password123",
    image: "https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg",
    speciality: "Therapist",
    degree: "MSc Psychology",
    experience: "6 years",
    about: "Dr. Laura Benson is a qualified therapist with extensive experience in supporting emotional and psychological well-being. She specializes in treating stress, anxiety, and emotional overwhelm through evidence-based therapeutic methods. Her approach focuses on understanding the root causes of emotional difficulties. She works closely with clients to develop healthier thought patterns and coping strategies. Dr. Laura creates a safe, empathetic, and non-judgmental environment for healing. She believes emotional awareness is essential for long-term mental health. Her sessions emphasize self-reflection, emotional regulation, and resilience building. She tailors each treatment plan to the unique needs of the individual. Dr. Laura also helps clients improve relationships and communication skills. She encourages gradual progress rather than immediate perfection. Her goal is to empower individuals to regain confidence and emotional balance. She is deeply committed to guiding clients toward sustainable mental well-being.",
    fees: 45,
    slots_booked: {},
    address: {
      street: "MindCare Clinic",
      city: "London",
      state: "England",
      pincode: "SW1A1AA"
    },
    date: Date.now()
  },
  {
    name: "Mark Reynolds",
    email: "mark.reynolds@wellness.com",
    password: "password123",
    image: "https://images.pexels.com/photos/4100653/pexels-photo-4100653.jpeg",
    speciality: "Wellness Coach",
    degree: "Certified Wellness Coach",
    experience: "5 years",
    about: "Mark Reynolds is a certified wellness coach dedicated to helping individuals achieve holistic health. He focuses on improving mental, physical, and emotional well-being through lifestyle changes. Mark believes wellness is built through daily habits rather than temporary solutions. He helps clients develop structured routines that support energy and mental clarity. His coaching approach includes nutrition awareness, stress management, and habit formation. Mark works closely with individuals to identify obstacles affecting their well-being. He emphasizes accountability and consistency in personal growth. His sessions are practical, motivating, and goal-oriented. Mark believes balance is key to long-term wellness. He encourages self-discipline while maintaining flexibility. Through his guidance, clients gain clarity and control over their lifestyle choices. His mission is to support individuals in building healthier and more fulfilling lives.",
    fees: 35,
    slots_booked: {},
    address: {
      street: "Wellness Hub",
      city: "Los Angeles",
      state: "California",
      pincode: "90001"
    },
    date: Date.now()
  },
  {
    name: "Dr. Nina Roberts",
    email: "nina.roberts@neuromind.com",
    password: "password123",
    image: "https://images.pexels.com/photos/5998467/pexels-photo-5998467.jpeg",
    speciality: "Psychiatrist",
    degree: "MD Psychiatry",
    experience: "8 years",
    about: "Dr. Nina Roberts is an experienced psychiatrist specializing in mental health diagnosis and treatment. She has extensive expertise in managing mood disorders, anxiety, and complex psychiatric conditions. Her approach combines medical knowledge with compassionate patient care. Dr. Nina carefully evaluates each individual’s mental health needs before designing treatment plans. She believes effective mental health care requires both clinical precision and empathy. Her work often includes medication management along with psychological support. She focuses on long-term mental stability rather than short-term relief. Dr. Nina values clear communication and patient education. She helps individuals understand their conditions and treatment options. Her sessions emphasize trust, safety, and collaboration. She strives to reduce stigma around mental health care. Her ultimate goal is to improve patients’ quality of life and emotional well-being.",
    fees: 70,
    slots_booked: {},
    address: {
      street: "NeuroMind Hospital",
      city: "New York",
      state: "New York",
      pincode: "10001"
    },
    date: Date.now()
  },
  {
    name: "Swami Vedant",
    email: "vedant@ashram.org",
    password: "password123",
    image: "https://images.pexels.com/photos/6698505/pexels-photo-6698505.jpeg",
    speciality: "Spiritual Mentor",
    degree: "Vedanta Philosophy",
    experience: "15 years",
    about: "Swami Vedant is a spiritual mentor deeply rooted in Vedanta philosophy and ancient wisdom traditions. With over fifteen years of experience, he guides seekers toward self-awareness and inner clarity. His teachings emphasize understanding the self beyond thoughts and emotions. Swami Vedant helps individuals navigate confusion, fear, and emotional suffering. He presents spiritual concepts in a practical and accessible way. His guidance focuses on self-inquiry, detachment, and mindful living. He believes true freedom arises from inner understanding rather than external achievements. Swami Vedant encourages conscious decision-making and purposeful living. He works with individuals seeking meaning and direction in life. His sessions often include reflection, discussion, and meditation. He emphasizes integrating spiritual wisdom into daily responsibilities. His mission is to help individuals experience lasting peace and self-realization.",
    fees: 25,
    slots_booked: {},
    address: {
      street: "Vedanta Ashram",
      city: "Rishikesh",
      state: "Uttarakhand",
      pincode: "249201"
    },
    date: Date.now()
  },
  {
    name: "Dr. Kevin Moore",
    email: "kevin.moore@calmminds.com",
    password: "password123",
    image: "https://images.pexels.com/photos/7870307/pexels-photo-7870307.jpeg",
    speciality: "Therapist",
    degree: "MA Clinical Psychology",
    experience: "4 years",
    about: "Dr. Kevin Moore is a clinical psychologist who specializes in working with young adults and professionals. He focuses on emotional resilience, stress management, and mental clarity. Kevin believes understanding emotions is key to psychological growth. His therapy approach is collaborative and supportive. He helps clients identify negative patterns affecting their mental health. Kevin emphasizes practical coping techniques for daily challenges. He works on building self-confidence and emotional intelligence. His sessions encourage open communication and self-reflection. Kevin believes therapy should be empowering rather than intimidating. He supports clients in navigating life transitions and pressures. His goal is to help individuals build long-term emotional strength. He is committed to making mental health support approachable and effective.",
    fees: 40,
    slots_booked: {},
    address: {
      street: "Calm Minds Center",
      city: "Toronto",
      state: "Ontario",
      pincode: "M5H2N2"
    },
    date: Date.now()
  },
  {
    name: "Sophia Green",
    email: "sophia.green@harmony.com",
    password: "password123",
    image: "https://images.pexels.com/photos/5971247/pexels-photo-5971247.jpeg",
    speciality: "Wellness Coach",
    degree: "Holistic Health Certification",
    experience: "3 years",
    about: "Sophia Green is a wellness coach passionate about promoting balanced and mindful living. She helps individuals improve mental and physical well-being through daily routines. Sophia emphasizes the importance of consistency and self-care. Her coaching approach integrates mindfulness, fitness, and healthy habits. She believes wellness should be sustainable and enjoyable. Sophia works with clients to identify lifestyle imbalances. She encourages gradual improvements rather than drastic changes. Her sessions focus on motivation, discipline, and clarity. Sophia believes mental health and physical health are deeply connected. She helps clients develop confidence and inner harmony. Her guidance supports long-term lifestyle transformation. Her mission is to help individuals live healthier and more balanced lives.",
    fees: 30,
    slots_booked: {},
    address: {
      street: "Harmony Studio",
      city: "London",
      state: "England",
      pincode: "EC1A1BB"
    },
    date: Date.now()
  },
  {
    name: "Venerable Suman",
    email: "suman@lotus.org",
    password: "password123",
    image: "https://images.pexels.com/photos/220578/pexels-photo-220578.jpeg",
    speciality: "Monk",
    degree: "Meditation & Mindfulness",
    experience: "10 years",
    about: "Venerable Suman is a Buddhist monk dedicated to teaching mindfulness and compassion. He focuses on helping individuals integrate meditation into modern life. With years of experience, he simplifies ancient practices for everyday use. His teachings emphasize awareness, patience, and kindness. Venerable Suman helps individuals manage stress and emotional overwhelm. He believes mindfulness is a practical skill, not just a spiritual practice. His guidance encourages living consciously in daily activities. He works with people facing modern mental pressures. His sessions promote clarity, calm, and emotional balance. He emphasizes ethical living and compassion toward others. Venerable Suman believes inner peace is achievable for everyone. His mission is to help individuals live with mindfulness and purpose.",
    fees: 15,
    slots_booked: {},
    address: {
      street: "Lotus Monastery",
      city: "Kathmandu",
      state: "Bagmati",
      pincode: "44600"
    },
    date: Date.now()
  }
];

export default dummy;
