export const beltRequirements = {
  "10th-kyu": {
    name: "Orange Belt",
    color: "orange",
    attendances: 12, // 3 months minimum
    techniques: [
      { name: "Fudo Dachi", description: "Formal Stance", completed: false },
      { name: "Yoi Dachi", description: "Ready Stance", completed: false },
      { name: "Heiko Dachi", description: "Parallel Stance", completed: false },
      { name: "Zenkutsu Dachi", description: "Forward Leaning Stance", completed: false },
      { name: "Seiken Jodan Tsuki", description: "Closed Fist Upper Thrust Punch", completed: false },
      { name: "Seiken Jodan Uke", description: "Closed Fist Upper Block", completed: false },
      { name: "Hiza Geri", description: "Knee Kick", completed: false },
    ],
    exercises: "Basic fitness requirements",
    kumite: "One Ippon: One step sparring from Basic Stance",
    timeLimit: "3 months minimum training",
  },
  "9th-kyu": {
    name: "Orange Belt with Black Stripe",
    color: "orange",
    attendances: 24, // 6 months minimum
    techniques: [
      { name: "Kiba Dachi", description: "Horse Riding/Straddle Stance", completed: false },
      { name: "Sanchin Dachi", description: "Basic Stance for Kihon/Three-point Stance", completed: false },
      { name: "Musubi Dachi", description: "Open Toes Stance", completed: false },
      { name: "Seiken Chudan Tsuki", description: "Closed Fist Middle Thrust Punch", completed: false },
      { name: "Seiken Gedan Tsuki", description: "Closed Fist Lower Thrust Punch", completed: false },
      { name: "Seiken Mae Gedan Barai", description: "Closed Fist Lower Block/Parry", completed: false },
      { name: "Mae Geri Chusoku", description: "Front Kick with Ball of Foot", completed: false },
    ],
    exercises: "10 Seiken push ups, 20 Stomach pulls, Four in one stretching exercise",
    kumite: "2 Rounds of 1 Minute, Two Ippons",
    timeLimit: "3 months from previous grade",
  },
  "8th-kyu": {
    name: "Blue Belt",
    color: "blue",
    attendances: 36, // 9 months minimum
    techniques: [
      { name: "Kokutsu Dachi", description: "Backward Leaning Stance", completed: false },
      { name: "Shiko Dachi", description: "Sumo Stance", completed: false },
      { name: "Movement in Zenkutsu Dachi", description: "Forward stance movement", completed: false },
      { name: "Ago Uchi", description: "Snap Punch to Jaw", completed: false },
      { name: "Seiken Uchi Uke", description: "Closed fist Inside Block", completed: false },
      { name: "Yoko Geri", description: "Side Kick", completed: false },
      { name: "Kansetsu Geri", description: "Joint Kick", completed: false },
      { name: "Taikyoku Sono Ichi", description: "First basic kata", completed: false },
    ],
    exercises: "20 Seiken push ups, 10 Four finger push ups (on knees), 30 Stomach pulls, 10 Squats",
    kumite: "6 Rounds of 1 Minute",
    timeLimit: "3 months from previous grade",
  },
  "7th-kyu": {
    name: "Blue Belt with Black Stripe",
    color: "blue",
    attendances: 48, // 12 months minimum
    techniques: [
      { name: "Movement in Sanchin Dachi", description: "Sanchin stance movement", completed: false },
      { name: "Morote Tsuki", description: "Double Thrust Punch", completed: false },
      { name: "Tate Tsuki", description: "Upright Fist Thrust Punch", completed: false },
      { name: "Yama Tsuki", description: "Pincher Strike (Double-Thrust & Inverted Thrust Punch)", completed: false },
      { name: "Seiken Soto Uke", description: "Closed Fist Outside Circular Block", completed: false },
      { name: "Kin Geri", description: "Golden Kick/Groin Kick", completed: false },
      { name: "Mae Keage", description: "Front Rising Kick", completed: false },
      { name: "Yoko Keage", description: "Side Rising Kick", completed: false },
      { name: "Taikyoku Sono Ni", description: "Second basic kata", completed: false },
      { name: "Taikyoku Sono San", description: "Third basic kata", completed: false },
    ],
    exercises: "25 Seiken push ups, 15 Five finger push ups (on knees), 35 Stomach pulls, 20 Squats",
    kumite: "8 Rounds of 1 Minute",
    timeLimit: "3 months from previous grade",
  },
  "6th-kyu": {
    name: "Yellow Belt",
    color: "yellow",
    attendances: 60, // 15 months minimum
    techniques: [
      { name: "Movement in Kiba Dachi", description: "Horse stance movement", completed: false },
      { name: "Movement in Shiko Dachi", description: "Sumo stance movement", completed: false },
      { name: "Jun Tsuki", description: "Side Thrust Punch", completed: false },
      { name: "Shita Tsuki", description: "Inverted Fist Thrust Punch", completed: false },
      { name: "Tettsui Yoko Uchi", description: "Hammerfist Strike to Side", completed: false },
      { name: "Shuto Uchi Uke", description: "Knife Hand Inside Block", completed: false },
      { name: "Shuto Uke", description: "Knife Hand Block", completed: false },
      { name: "Mawashi Geri", description: "Roundhouse Kick (Haisoku/Chusoku)", completed: false },
      { name: "Ago Geri", description: "Front Kick to Jaw", completed: false },
      { name: "Gekisai Dai", description: "Gekisai Dai kata", completed: false },
    ],
    exercises: "30 Seiken push ups, 10 Four finger push ups, 40 Stomach pulls, 30 Squats",
    kumite: "10 Rounds of 1 Minute",
    timeLimit: "3 months from previous grade",
  },
  "5th-kyu": {
    name: "Yellow Belt with Black Stripe",
    color: "yellow",
    attendances: 72, // 18 months minimum
    techniques: [
      { name: "Neko Ashi Dachi", description: "Cat Stance", completed: false },
      { name: "Heisoku Dachi", description: "Parallel Closed Stance", completed: false },
      { name: "Tettsui Komi Kame Uchi", description: "Hammerfist Strike to Temple", completed: false },
      { name: "Tettsui Hizo Uchi", description: "Hammerfist Strike to Spleen", completed: false },
      { name: "Tettsui Oroshi Uchi", description: "Descending Hammerfist Strike", completed: false },
      { name: "Mae Shuto Mawashi Uke", description: "Circular Block to the Front", completed: false },
      { name: "Yoko Shuto Mawashi Uke", description: "Circular Block to the Side", completed: false },
      { name: "Keage Geri (Uchi/Soto)", description: "Rising Kick (Inside/Outside)", completed: false },
      { name: "Pinan Sono Ichi", description: "First Pinan kata", completed: false },
      { name: "Sanchin No Kata", description: "Sanchin kata (Ibuki not required)", completed: false },
    ],
    exercises: "35 Seiken push ups, 15 Four finger push ups, 45 Stomach pulls, 40 Squats",
    kumite: "12 Rounds of 1 Minute",
    timeLimit: "3 months from previous grade",
  },
  "4th-kyu": {
    name: "Green Belt",
    color: "green",
    attendances: 84, // 21 months minimum
    techniques: [
      { name: "Moro Ashi Dachi", description: "One Foot Forward Stance", completed: false },
      { name: "Kumite Dachi", description: "Fighting Stance", completed: false },
      { name: "Tsuru Ashi Dachi", description: "Crane Stance", completed: false },
      { name: "Uraken Shomen Uchi", description: "Back Knuckle Strike to Face", completed: false },
      { name: "Uraken Sayu Uchi", description: "Back Knuckle Strike to Side", completed: false },
      { name: "Uraken Hizo Uchi", description: "Back Knuckle Strike to Spleen", completed: false },
      { name: "Nihon Nukite", description: "Two Finger Spear Hand Strike", completed: false },
      { name: "Morote Uke", description: "Reinforced Block", completed: false },
      { name: "Shotei Uke", description: "Blocks with Palm of Hand (Jodan/Chudan/Gedan)", completed: false },
      { name: "Osae Uke", description: "Force Down Block", completed: false },
      { name: "Oroshi Kakato Geri", description: "Descending Heel Kick (Uchi/Soto)", completed: false },
      { name: "Kakato Geri", description: "Heel Kick", completed: false },
      { name: "Pinan Sono Ni", description: "Second Pinan kata", completed: false },
    ],
    exercises: "40 Seiken push ups, 10 Three finger push ups, 50 Stomach pulls, 50 Squats, 10 Jumping kicks",
    kumite: "14 Rounds of 1 Minute",
    timeLimit: "3 months from previous grade",
  },
  "3rd-kyu": {
    name: "Green Belt with Black Stripe",
    color: "green",
    attendances: 96, // 24 months minimum
    techniques: [
      { name: "Shotei Jodan Uchi", description: "Strikes with Palm Heel (Upper)", completed: false },
      { name: "Shotei Chudan Uchi", description: "Strikes with Palm Heel (Middle)", completed: false },
      { name: "Shotei Gedan Uchi", description: "Strikes with Palm Heel (Lower)", completed: false },
      { name: "Juji Uke", description: "Cross Block (Jodan/Gedan)", completed: false },
      { name: "Ushiro Geri", description: "Back Kick - to be performed in movement", completed: false },
      { name: "Pinan Sono San", description: "Third Pinan kata", completed: false },
      { name: "Sanchin No Kata with Ibuki", description: "Sanchin kata with Ibuki Breathing", completed: false },
    ],
    exercises: "45 Seiken push ups, 15 Three finger push ups, 70 Stomach pulls, 60 Squats, 15 Jumping kicks",
    kumite: "16 Rounds of 1 Minute",
    timeLimit: "6 months from previous grade",
  },
  "2nd-kyu": {
    name: "Brown Belt",
    color: "brown",
    attendances: 120, // 30 months minimum
    techniques: [
      { name: "Shuto Yoko Ganmen Uchi", description: "Knife Hand Strike to Side of Head", completed: false },
      { name: "Shuto Sakotsu Uchikomi", description: "Driving Knife Hand Strike to Collar Bone", completed: false },
      { name: "Shuto Hizo Uchi", description: "Knife Hand Strike to Spleen", completed: false },
      { name: "Seiken Mawashi Uchi", description: "Closed Fist Roundhouse Punch", completed: false },
      { name: "Uraken Mawashi Uchi", description: "Back Knuckle Roundhouse Punch", completed: false },
      { name: "Uchi/Uke/Gedan Barai", description: "Combination of Middle & Lower Blocks", completed: false },
      { name: "Mawashi Gedan Barai", description: "Circular Lower Block", completed: false },
      { name: "Ushiro Kake Geri", description: "Spinning Back Hook Kick", completed: false },
      { name: "Kake Geri", description: "Hook Kick (Chusoku/Kakato)", completed: false },
      { name: "Pinan Sono Yon", description: "Fourth Pinan kata", completed: false },
      { name: "Pinan Sono Go", description: "Fifth Pinan kata", completed: false },
    ],
    exercises: "50 Seiken push ups, 10 Two finger push ups, 100 Stomach pulls, 70 Squats, 20 Jumping kicks",
    kumite: "18 Rounds of 1 Minute",
    timeLimit: "6 months from previous grade",
  },
  "1st-kyu": {
    name: "Brown Belt with Black Stripe",
    color: "brown",
    attendances: 144, // 36 months minimum
    techniques: [
      { name: "Jodan Hiji Ate", description: "Upper Elbow Strike", completed: false },
      { name: "Chudan Hiji Ate", description: "Middle Elbow Strike", completed: false },
      { name: "Ushiro Hiji Ate", description: "Backward Elbow Strike", completed: false },
      { name: "Oroshi Hiji Ate", description: "Descending Elbow Strike", completed: false },
      { name: "Mae Hiji Ate", description: "Front (forward) Elbow Strike", completed: false },
      { name: "Age Hiji Ate", description: "Rising Elbow Strike", completed: false },
      { name: "Shuto Kake Uke", description: "Open Hand Hooking Block", completed: false },
      { name: "Haito Uchi Uke", description: "Ridge Hand Inside Block", completed: false },
      { name: "Nihon Shuto Kake Uke", description: "Two Handed Hooking Block", completed: false },
      { name: "Tobi Mae Geri", description: "Jumping Front Kick", completed: false },
      { name: "Tobi Hiza Geri", description: "Jumping Knee Kick", completed: false },
      { name: "Tobi Yoko Geri", description: "Jumping Side Kick", completed: false },
      { name: "Yantsu", description: "Yantsu kata", completed: false },
      { name: "Tsuki No Kata", description: "Tsuki No Kata", completed: false },
    ],
    exercises: "55 Seiken push ups, 15 Two finger push ups, 100 Stomach pulls, 70 Squats, 20 Jumping kicks",
    kumite: "20 Rounds of 1 Minute",
    timeLimit: "1 year minimum from previous grade",
  },
  "1st-dan": {
    name: "Black Belt (Shodan)",
    color: "black",
    attendances: 180, // 45 months minimum (3+ years total)
    techniques: [
      { name: "Kake Dachi", description: "Hook Stance", completed: false },
      { name: "All open hand strikes", description: "Basic and freestyle techniques", completed: false },
      { name: "Jodan Morote Shotei Uke", description: "Upper two-handed Palm Heel Block", completed: false },
      { name: "Gedan Morote Shotei Uke", description: "Lower two-handed Palm Heel Block", completed: false },
      { name: "Tobi Nidan Geri", description: "Jumping Double Kick", completed: false },
      { name: "Tobi Mawashi Geri", description: "Jumping Roundhouse Kick", completed: false },
      { name: "Tobi Ushiro Geri", description: "Jumping Back Kick", completed: false },
      { name: "Ushiro Mawashi Geri", description: "Spinning Backward Roundhouse Kick", completed: false },
      { name: "Tensho", description: "Tensho kata", completed: false },
      { name: "Saifa", description: "Saifa kata", completed: false },
      { name: "Gekisai Sho", description: "Gekisai Sho kata", completed: false },
      { name: "Tameshiwari", description: "2 Boards with Seiken or Shuto (over 18's only)", completed: false },
    ],
    exercises: "60 Seiken push ups, 10 One finger push ups, 150 Stomach pulls, 100 Squats",
    kumite: "25 Rounds of 1 Minute",
    timeLimit: "Minimum 1 year from 1st Kyu, 3+ years total training",
  },
}

export const dojoEtiquette = [
  "On entering or leaving the dojo, face the position where the instructor would normally start the class and say 'Osu' loudly.",
  "The chief instructor must be addressed as 'Shihan' at all times and other instructors as 'Sensei/Senpai'.",
  "No smoking, eating or drinking is allowed in the dojo by any person at any time.",
  "While training, when told to sit down, students must kneel in the 'Seiza' position.",
  "While any session is in progress there must be no talking or distraction.",
  "Gi's should be kept clean and in a state of repair at all times.",
  "Personal hygiene should be of the highest standard. Nails should be kept short and hair should be clean.",
  "Acknowledgements at the beginning and end of each session follow specific protocols.",
]

export const kyokushinPhilosophy = {
  meaning: "KYOKU means ultimate, SHIN means truth or reality, KAI means to meet, join, associate.",
  kanku:
    "The symbol of Kyokushinkai is the Kanku, derived from the Kanku Kata (sky gazing form). The points represent the fingers and imply the ultimates or peaks. The thick sections represent the wrists and imply power. The center represents infinity, implying depth. The whole Kanku is based and enclosed by a circle, representing continuity and circular action.",
}

export const timeRequirements = {
  "10th-3rd-kyu": "Gradings may be taken at three monthly intervals",
  "3rd-1st-kyu": "Grading may be taken at six monthly intervals",
  "1st-kyu-shodan":
    "Students should have trained constantly for a minimum of one year from 1st Kyu. Expected minimum of three years total training.",
  "shodan-nidan":
    "Students should have trained constantly for a minimum of two years from Shodan and be over 18 years of age.",
  "nidan-sandan": "Students should have trained constantly for a minimum of three years from Nidan.",
  "yondan-above": "Minimum of four years should have elapsed since obtaining Sandan.",
}
