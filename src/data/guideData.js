export const GUIDE_TOPICS = [
  {
    key: 'antenatal',
    title: 'Antenatal Care',
    subtitle: 'Making pregnancy easier, trimester by trimester',
    icon: 'medical-outline',
    color: '#E91E63',
  },
  {
    key: 'hospital_bag',
    title: 'Hospital Bag & Delivery',
    subtitle: 'What to pack, home birth, and emergency delivery',
    icon: 'bag-handle-outline',
    color: '#C2185B',
  },
  {
    key: 'delivery_ward',
    title: 'Delivery Ward DOs & DON\'Ts',
    subtitle: 'How to show up when it counts most',
    icon: 'shield-checkmark-outline',
    color: '#FF6B9D',
  },
  {
    key: 'nutrition',
    title: 'Nutrition Guide',
    subtitle: 'What to feed her — and what to avoid',
    icon: 'nutrition-outline',
    color: '#880E4F',
  },
  {
    key: 'faq',
    title: 'FAQs for Dads',
    subtitle: 'Answers to the questions you are afraid to ask',
    icon: 'help-circle-outline',
    color: '#AD1457',
  },
  {
    key: 'cravings',
    title: 'Understanding Cravings',
    subtitle: 'What they are, why they happen, how to respond',
    icon: 'restaurant-outline',
    color: '#F06292',
  },
  {
    key: 'miscarriage',
    title: 'Miscarriage',
    subtitle: 'What it is, causes, signs, and how to support her',
    icon: 'heart-dislike-outline',
    color: '#B71C1C',
  },
];

export const GUIDE_CONTENT = {

  // ─────────────────────────────────────────────
  // 1. ANTENATAL CARE
  // ─────────────────────────────────────────────
  antenatal: {
    intro: 'Antenatal care is the medical and emotional support your partner receives during pregnancy. Your presence and preparation at every stage cuts her stress significantly — and stress is one of the leading risk factors for pregnancy complications.',
    sections: [
      {
        heading: '1st Trimester (Weeks 1–12): Establishing Care',
        type: 'checklist',
        icon: 'leaf-outline',
        color: '#FF6B9D',
        items: [
          { text: 'Book her first prenatal appointment as soon as pregnancy is confirmed — ideally by week 8', icon: 'calendar-outline' },
          { text: 'Accompany her to the first ultrasound (dating scan). You will hear the heartbeat. Be there.', icon: 'heart-outline' },
          { text: 'Help her take folic acid (400–800mcg daily) and prenatal vitamins every morning — set an alarm if needed', icon: 'medkit-outline' },
          { text: 'Research your health insurance coverage for prenatal care, delivery, and newborn care', icon: 'document-text-outline' },
          { text: 'Remove alcohol, cigarettes, and passive smoke from her environment entirely', icon: 'close-circle-outline' },
          { text: 'Handle household chemicals, cleaning products, and paint fumes yourself — she should not inhale these', icon: 'home-outline' },
          { text: 'Track her symptoms (nausea, fatigue, spotting) and report anything unusual to her doctor', icon: 'clipboard-outline' },
          { text: 'Create a shared pregnancy calendar — appointments, milestones, due date', icon: 'today-outline' },
        ],
      },
      {
        heading: '2nd Trimester (Weeks 13–27): The Active Phase',
        type: 'checklist',
        icon: 'sunny-outline',
        color: '#E91E63',
        items: [
          { text: 'Attend the anatomy scan (weeks 18–22). This is when major abnormalities are checked — your presence matters', icon: 'scan-outline' },
          { text: 'Accompany her to the glucose tolerance test (weeks 24–28) — gestational diabetes screening', icon: 'flask-outline' },
          { text: 'Research and book a reputable prenatal class — childbirth education, breastfeeding, and infant care', icon: 'school-outline' },
          { text: 'Start planning and setting up the nursery — involve her in every decision', icon: 'hammer-outline' },
          { text: 'Encourage gentle daily walks (20–30 min) — offer to join her', icon: 'walk-outline' },
          { text: 'Buy a pregnancy pillow if she is struggling to sleep', icon: 'bed-outline' },
          { text: 'Discuss and draft a birth plan together — pain relief options, who is present, cord cutting, skin-to-skin', icon: 'clipboard-outline' },
          { text: 'Register at your preferred hospital or birthing centre — many have waitlists', icon: 'business-outline' },
        ],
      },
      {
        heading: '3rd Trimester (Weeks 28–40): Final Preparation',
        type: 'checklist',
        icon: 'flame-outline',
        color: '#C2185B',
        items: [
          { text: 'Attend weekly check-ups (from week 36 onwards) — never skip these', icon: 'calendar-check' },
          { text: 'Pack the hospital bag by week 35. Do not wait until labour starts', icon: 'bag-handle-outline' },
          { text: 'Know the route to the hospital. Drive it at different times of day. Know the parking', icon: 'map-outline' },
          { text: 'Save the hospital\'s triage line in your phone — know when to call vs when to drive', icon: 'call-outline' },
          { text: 'Learn the signs of labour: regular contractions, water breaking, bloody show, back pain', icon: 'alert-circle-outline' },
          { text: 'Learn the 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute each, for 1 hour = time to go', icon: 'timer-outline' },
          { text: 'Practice labour breathing and massage techniques from your prenatal class', icon: 'body-outline' },
          { text: 'Arrange time off work — know your paternity leave options', icon: 'briefcase-outline' },
          { text: 'Prepare meals and freeze them so she has nutritious food in the postpartum period without effort', icon: 'restaurant-outline' },
          { text: 'Install the infant car seat correctly — have it inspected if possible', icon: 'car-outline' },
        ],
      },
      {
        heading: 'Postpartum: The Fourth Trimester (Weeks 1–12 After Birth)',
        type: 'checklist',
        icon: 'star-outline',
        color: '#880E4F',
        items: [
          { text: 'Take your full paternity leave — the first two weeks are the most critical', icon: 'home-outline' },
          { text: 'Attend the 6-week postpartum check-up with her — bring the baby and your observations', icon: 'medical-outline' },
          { text: 'Monitor her for postpartum depression daily — persistent sadness, disconnection, anxiety beyond 2 weeks', icon: 'eye-outline' },
          { text: 'Handle all household tasks: cooking, cleaning, laundry, shopping. Do not ask — just do.', icon: 'construct-outline' },
          { text: 'Protect her sleep above all else — take the 2am feed shift', icon: 'moon-outline' },
          { text: 'Limit visitors to those who bring food or help — not those who need to be hosted', icon: 'people-outline' },
          { text: 'Support breastfeeding by bringing her water, snacks, and pillows during every feed', icon: 'cafe-outline' },
          { text: 'Tell her daily that she is doing an incredible job — she cannot hear this enough', icon: 'heart-outline' },
          { text: 'Research a postpartum doula if you can afford one — invaluable for recovery support', icon: 'person-outline' },
          { text: 'Be patient with intimacy — her body needs minimum 6 weeks to heal, often longer emotionally', icon: 'shield-checkmark-outline' },
        ],
      },
      {
        heading: 'Antenatal Appointments: What Happens When',
        type: 'timeline',
        items: [
          { week: '6–8 weeks', label: 'First prenatal visit — confirm pregnancy, blood tests, due date calculation' },
          { week: '10–12 weeks', label: 'Nuchal translucency scan — Down syndrome and other chromosomal screening' },
          { week: '15–20 weeks', label: 'Quad screen blood test — screens for neural tube defects and chromosomal issues' },
          { week: '18–22 weeks', label: 'Anatomy scan (detailed ultrasound) — checks all organs, can confirm sex' },
          { week: '24–28 weeks', label: 'Glucose tolerance test — screens for gestational diabetes' },
          { week: '28 weeks', label: 'Rhesus factor check — Rh-negative mothers receive anti-D injection' },
          { week: '32–34 weeks', label: 'Growth scan — confirms baby\'s size and position' },
          { week: '36 weeks', label: 'Group B Strep (GBS) swab — a common bacteria that can affect newborn' },
          { week: '36–40 weeks', label: 'Weekly check-ups — cervical checks, baby\'s position, kick counts' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. HOSPITAL BAG & DELIVERY OPTIONS
  // ─────────────────────────────────────────────
  hospital_bag: {
    intro: 'Being prepared before the moment arrives removes panic and lets you focus entirely on supporting her. Pack the bag together at week 35 — not when contractions start.',
    sections: [
      {
        heading: 'What to Pack: For Her',
        type: 'list',
        icon: 'woman-outline',
        color: '#E91E63',
        items: [
          'Birth plan — printed, at least 3 copies',
          'Photo ID, insurance card, and hospital pre-registration documents',
          'Maternity notes / pregnancy records (hospital may ask for these)',
          'Comfortable nightgown or hospital gown (front-opening for breastfeeding)',
          'Non-slip socks or slippers',
          'Lip balm — breathing exercises dry out lips fast',
          'Hair ties, headband, dry shampoo',
          'Toiletries: toothbrush, toothpaste, gentle face wash, moisturiser',
          'Breast pads and a supportive nursing bra',
          'Maternity pads (hospitals stock these but bring extra)',
          'Comfortable, loose going-home outfit (maternity-sized — she will still look pregnant)',
          'Pillow from home — hospital pillows are thin',
          'Phone charger and a portable power bank',
          'Earphones and a delivery playlist or calming audio',
          'Light snacks: energy bars, nuts, dried fruit, biscuits',
          'Straws (easier to drink lying down or mid-contraction)',
        ],
      },
      {
        heading: 'What to Pack: For Baby',
        type: 'list',
        icon: 'happy-outline',
        color: '#FF6B9D',
        items: [
          '2–3 newborn-size onesies (also pack 0–3 month size — sizing varies)',
          '2 receiving blankets',
          'Newborn hat, mittens, and socks',
          'Going-home outfit (warmer layer depending on season)',
          'Nappies/diapers — hospitals often provide but bring a pack',
          'Baby wipes (unscented)',
          'Infant car seat — fitted and approved, installed in the car before her due date',
        ],
      },
      {
        heading: 'What to Pack: For You (Dad)',
        type: 'list',
        icon: 'person-outline',
        color: '#C2185B',
        items: [
          'Change of clothes (labour can take 24+ hours)',
          'Your own snacks and drinks — you cannot eat her food',
          'Cash and cards',
          'Phone charger and power bank',
          'Camera or confirm phone camera quality',
          'A light jacket or hoodie — labour wards are often cold',
          'Something to keep you occupied during slow periods (book, headphones)',
          'List of people to contact after delivery — names and numbers ready',
        ],
      },
      {
        heading: 'Home Delivery: If That Is Your Choice',
        type: 'important',
        icon: 'home-outline',
        color: '#880E4F',
        intro: 'A planned home birth can be safe with the right preparation. Unassisted home birth is not recommended and carries real risk. Always have a certified midwife or doctor present.',
        items: [
          'Hire a Certified Nurse-Midwife (CNM) or licensed midwife — verify their credentials and emergency protocols',
          'Have a hospital transfer plan and route in place before labour begins',
          'Prepare a birth kit with your midwife: waterproof mattress covers, sterile gloves, cord clamps, sterile scissors, bulb syringe, towels, basin',
          'Have warm towels or blankets ready for the baby',
          'Keep the room warm (at least 25°C/77°F) — newborns cannot regulate temperature',
          'Stock up on birth-specific supplies: large absorbent pads, peri bottle, perineal spray',
          'Your midwife should carry oxygen, IV fluids, resuscitation equipment, and haemorrhage medication',
          'Know the two main transfer triggers: prolonged labour (no progress in 2 hours) and signs of fetal distress',
          'Eat lightly during early labour — avoid heavy meals',
          'Designate someone to handle older children, pets, and the home during labour',
        ],
      },
      {
        heading: 'Emergency Delivery: Stuck in Traffic or Far from Hospital',
        type: 'emergency',
        icon: 'alert-circle-outline',
        color: '#B71C1C',
        intro: 'If she is fully dilated and the baby is coming — stay calm. You can do this. Follow these steps in order.',
        steps: [
          { num: '1', text: 'Pull over safely and turn on hazard lights. Do not keep driving — a moving car is dangerous for delivery.' },
          { num: '2', text: 'Call emergency services (911 / 999 / 112) immediately. Tell them: "My wife is in labour, the baby is coming now." Stay on the line — they will talk you through it.' },
          { num: '3', text: 'Help her recline the seat or move to the back seat. Remove clothing from the waist down.' },
          { num: '4', text: 'Wash your hands with hand sanitiser if available. Use gloves from the first aid kit if you have them.' },
          { num: '5', text: 'Tell her to breathe and pant — not push hard. Let the baby descend naturally. Do not pull the baby out.' },
          { num: '6', text: 'As the head appears, support it gently with both hands. Do not squeeze. Let it rotate naturally.' },
          { num: '7', text: 'Check if the umbilical cord is around the neck — if so, gently loop it over the head.' },
          { num: '8', text: 'As the shoulders deliver, guide the baby\'s body gently downward then upward. Do not yank.' },
          { num: '9', text: 'Place baby immediately on her bare chest, skin-to-skin, face to the side. Wipe the face clean with a cloth.' },
          { num: '10', text: 'Keep baby warm with any clothing, blankets, or jackets available. Do not cut the cord — leave it intact.' },
          { num: '11', text: 'The placenta will deliver within 30–60 minutes. This is normal. Do not pull on the cord to hurry it.' },
          { num: '12', text: 'If baby is not breathing, rub the back briskly and flick the soles of the feet. The emergency operator will guide you.' },
          { num: '13', text: 'Get to a hospital as soon as the baby is stable — even after a successful roadside birth, both need medical evaluation.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. DELIVERY WARD DOs & DON'Ts
  // ─────────────────────────────────────────────
  delivery_ward: {
    intro: 'The delivery ward is her territory. These aren\'t rules — they\'re things that other partners have found genuinely helpful, and things that tend to make an already intense experience harder than it needs to be. Take what resonates.',
    sections: [
      {
        heading: 'Things That Tend to Help',
        type: 'dos',
        storageKey: 'herhero_custom_dos',
        items: [
          { text: 'Try to stay close to her throughout. If you need to step out, let her know where you\'re going and come back quickly — knowing you\'re nearby means a lot.' },
          { text: 'It helps to know the birth plan well before you arrive. She may not be in a position to advocate for herself mid-labour, and having you speak up calmly on her behalf can make a real difference.' },
          { text: 'Gently offering water, ice chips, or a straw every now and then can help — she may not think to ask when she\'s focused on getting through contractions.' },
          { text: 'A contraction timer app can be surprisingly useful. It gives the medical team a clearer picture of where she is in labour, and it gives you something helpful to focus on.' },
          { text: 'Simple, specific encouragement tends to land better than general phrases. Something like "that was a really strong one" or "you\'re handling this so well" can genuinely help her push through.' },
          { text: 'It\'s worth asking her beforehand — and checking in during — whether she wants touch. Some women find hand-holding grounding; others need space. Following her lead matters more than doing what feels natural to you.' },
          { text: 'Firm, steady counter-pressure on her lower back during contractions can ease the pain noticeably. A clenched fist or the heel of your palm pressed consistently in one spot often works well.' },
          { text: 'Whatever environment she\'s asked for — quiet, music, low lighting — try to maintain it. She\'s told you what helps her feel safe, and keeping that in place is part of your job in the room.' },
          { text: 'If you\'re unsure about something a nurse or doctor has recommended, asking "could you walk us through why?" is a completely reasonable and respectful thing to do on her behalf.' },
          { text: 'If she\'d like the birth documented, having your phone ready for a photo or short video when the baby arrives can be something she\'ll deeply appreciate later — just confirm beforehand what she\'s comfortable with.' },
          { text: 'If skin-to-skin contact is in the birth plan, it\'s worth reminding the team of that preference when the moment gets close — things can move quickly and it\'s easy for it to be overlooked.' },
          { text: 'Whatever she decides about pain relief in the moment — even if it\'s different from what was planned — it\'s worth supporting that decision fully and without hesitation.' },
          { text: 'After the birth, giving her a quiet hour before the phone calls and visitors start can be one of the most protective things you do. That window is precious and hard to get back.' },
          { text: 'Introducing yourself to each member of the medical team as they come in is a small thing that helps you feel oriented and helps them know you\'re engaged and present.' },
          { text: 'She reads your energy more than you might expect. Staying calm and steady — even if you\'re nervous inside — genuinely helps her feel safer.' },
        ],
      },
      {
        heading: 'Things Worth Reconsidering',
        type: 'donts',
        storageKey: 'herhero_custom_donts',
        items: [
          { text: 'It might be worth leaving game consoles and gaming devices at home. The delivery room tends to go better when your full attention is on her — and she\'ll notice if it\'s not.' },
          { text: 'Medical staff work long, demanding shifts. Keeping your interactions professional and respectful — the same way you\'d want someone to treat you at your job — tends to go a long way.' },
          { text: 'If the medical team appears to be doing their job well, it\'s generally best to let them do it. Raising genuine concerns is always fair, but walking in with instructions or corrections often creates tension that doesn\'t help anyone.' },
          { text: 'Whatever you\'re seeing during delivery, keeping your observations to yourself — especially about how her body looks during pushing — is one of the kindest things you can do in that moment.' },
          { text: 'Some women want their partner looking and engaged with the whole birth; others strongly prefer privacy. It\'s worth having that conversation before you\'re in the room, so there\'s no awkwardness on the day.' },
          { text: 'Strong-smelling food in an enclosed space during active labour can be genuinely uncomfortable for her. Stepping into the hallway to eat is a small thing that she\'ll probably appreciate more than you\'d expect.' },
          { text: 'Being on your phone — even quietly — during labour tends to register with her, even if you think it doesn\'t. This is one of those moments where being fully present is the whole thing.' },
          { text: 'Telling her to calm down or relax during contractions, even with the best intentions, often lands the wrong way. What she usually needs in those moments is acknowledgement, not instruction.' },
          { text: 'It\'s generally worth checking with her before inviting anyone else into the room — even people she\'s close to. Labour is an intensely personal experience and she may want more privacy than you assume.' },
          { text: 'Sharing anything on social media before she\'s had a chance to rest, process, and give the go-ahead is something a lot of partners regret. It\'s worth waiting — even if the news feels impossible to hold.' },
          { text: 'If the medical team or family are pushing for a particular decision, it\'s usually worth finding a moment to check in with her first rather than agreeing on her behalf. She should be the one deciding, wherever possible.' },
          { text: 'If you start to feel lightheaded or unwell, sitting down and quietly letting a nurse know is the right move. It\'s nothing to be embarrassed about — and it\'s far better than the alternative.' },
          { text: 'Humour can be a great coping mechanism, but in a delivery room it\'s usually best to take your cue from her. If she\'s not in the mood for lightness, matching her energy is the more supportive choice.' },
          { text: 'Stepping out for extended periods during active labour — even for something that feels necessary — tends to feel much more significant to her than it does to you. If you need to go, make it brief and communicate clearly.' },
          { text: 'Coaching her on how or when to push without guidance from the midwife can sometimes conflict with what the medical team needs. Trusting the professionals in the room, while supporting her emotionally, is usually the right balance.' },
          { text: 'Every labour is different, and comparisons to movies, stories, or other people\'s births — even well-meaning ones — can make her feel like her experience isn\'t being seen on its own terms.' },
          { text: 'If she becomes irritable, short-tempered, or asks you to stop doing something, try not to take it personally. Labour pain is unlike most things a person experiences, and her reactions in those moments aren\'t really about you.' },
          { text: 'The delivery room works best as a focused, calm space. Turning it into a gathering or letting people drop in to watch tends to raise the stress level in a room that already has a lot going on.' },
        ],
      },
      {
        heading: 'What to Say During Labour',
        type: 'quotes',
        items: [
          '"You are so strong. I am right here."',
          '"That was a big one. You handled it perfectly."',
          '"Look at me. Breathe with me. In... and out."',
          '"You are doing exactly what your body needs to do."',
          '"I am so proud of you. I love you."',
          '"You don\'t have to be brave. Just breathe."',
          '"The baby is almost here. You are almost there."',
          '"I\'m not going anywhere. I\'ve got you."',
        ],
      },
      {
        heading: 'If a C-Section Is Needed',
        type: 'important',
        icon: 'alert-circle-outline',
        color: '#C2185B',
        intro: 'Whether planned or emergency, a caesarean section is major abdominal surgery. Here is what you need to know.',
        items: [
          'Stay calm — your panic becomes hers immediately. She is watching your face.',
          'You will typically be allowed in the operating room during a planned or non-emergency C-section.',
          'You will sit by her head, behind a curtain. Hold her hand and keep eye contact.',
          'She will be awake but numb from the waist down. She may feel pressure and tugging — reassure her this is normal.',
          'After delivery, the baby is shown to her briefly then taken for checks. Ask to hold the baby near her face.',
          'Recovery takes longer than vaginal birth — 6–8 weeks minimum. She cannot lift anything heavier than the baby for weeks.',
          'She will need more help with everything: getting up, sitting down, feeding, bathing.',
          'Watch the incision site for signs of infection: increased redness, swelling, discharge, or fever.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. NUTRITION GUIDE
  // ─────────────────────────────────────────────
  nutrition: {
    intro: 'What she eats directly affects fetal brain development, birth weight, and her energy levels. As the person who likely cooks or shops, you have more nutritional influence than you think. This is not about dieting — it is about fuelling a human being.',
    sections: [
      {
        heading: 'Essential Nutrients and Their Sources',
        type: 'nutrients',
        items: [
          {
            nutrient: 'Folic Acid',
            why: 'Prevents neural tube defects (brain and spinal cord). Critical in the first 12 weeks.',
            foods: 'Leafy greens (spinach, kale), lentils, black-eyed peas, fortified cereals, avocado, broccoli',
            supplement: '400–800mcg daily supplement recommended alongside food sources',
          },
          {
            nutrient: 'Iron',
            why: 'Blood volume increases by 50% during pregnancy. Iron prevents anaemia, which causes extreme fatigue and increases risk of premature birth.',
            foods: 'Lean red meat, chicken, sardines, lentils, kidney beans, spinach, tofu, fortified cereals',
            supplement: 'Pair with Vitamin C foods (orange juice, bell peppers) to double iron absorption. Avoid coffee/tea with meals.',
          },
          {
            nutrient: 'Calcium',
            why: 'Baby takes calcium directly from her bones. Inadequate intake weakens her teeth and skeleton long-term.',
            foods: 'Dairy products, sardines with bones, broccoli, kale, calcium-set tofu, fortified plant milks',
            supplement: '1000mg daily — 1200mg if under 18',
          },
          {
            nutrient: 'Omega-3 (DHA)',
            why: 'Critical for fetal brain and eye development, especially from week 20 onwards.',
            foods: 'Salmon, sardines, mackerel (not high-mercury), chia seeds, flaxseed, walnuts',
            supplement: 'Prenatal DHA supplement if fish intake is low',
          },
          {
            nutrient: 'Protein',
            why: 'Builds fetal tissue, muscles, and organs. Needs increase by 25g per day during pregnancy.',
            foods: 'Eggs, chicken, turkey, fish, legumes, Greek yogurt, cheese, nuts, tofu',
            supplement: 'Food sources preferred over protein powder supplements',
          },
          {
            nutrient: 'Vitamin D',
            why: 'Works with calcium for bone development. Also linked to reduced risk of preterm birth.',
            foods: 'Fortified milk, fatty fish, eggs, fortified cereals, sun exposure (15–20 min daily)',
            supplement: '600–2000 IU daily — many women are deficient',
          },
          {
            nutrient: 'Fibre',
            why: 'Prevents constipation (extremely common in pregnancy due to iron supplements and reduced gut motility).',
            foods: 'Oats, sweet potato, brown rice, whole grain bread, beans, pears, apples with skin',
            supplement: 'Increase water intake alongside fibre to avoid worsening constipation',
          },
          {
            nutrient: 'Iodine',
            why: 'Essential for fetal thyroid development and brain growth.',
            foods: 'Seafood, dairy, eggs, iodised salt',
            supplement: '150mcg daily',
          },
        ],
      },
      {
        heading: 'Foods to Eat Regularly',
        type: 'list',
        icon: 'checkmark-circle-outline',
        color: '#E91E63',
        items: [
          'Eggs — complete protein, choline for brain development, easy to prepare',
          'Salmon (2 portions weekly max) — DHA, protein, Vitamin D',
          'Sweet potato — beta-carotene, fibre, Vitamin C, potassium',
          'Leafy greens — spinach, kale, chard — folate, calcium, iron, Vitamin C',
          'Lentils and legumes — protein, fibre, folate, iron, calcium',
          'Greek yogurt — calcium, protein, probiotics for gut health',
          'Avocado — healthy fats, folate, potassium, Vitamin K',
          'Berries — antioxidants, Vitamin C, fibre, low glycaemic index',
          'Whole grains — oats, brown rice, quinoa — sustained energy, fibre, B vitamins',
          'Lean meats — beef, chicken — protein, B12, iron, zinc',
          'Broccoli — folate, fibre, Vitamin C, calcium, antioxidants',
          'Dried fruit (in moderation) — iron, fibre, concentrated nutrients',
          'Nuts and seeds — healthy fats, protein, magnesium',
          'Plenty of water — aim for 2.5–3 litres daily; dehydration triggers contractions',
        ],
      },
      {
        heading: 'Foods to Avoid Entirely',
        type: 'avoid',
        items: [
          { food: 'Alcohol', reason: 'No amount is safe during pregnancy. Linked to Fetal Alcohol Spectrum Disorder, miscarriage, and stillbirth.' },
          { food: 'High-mercury fish', reason: 'Shark, swordfish, king mackerel, tilefish, bigeye tuna. Mercury damages fetal brain and nervous system.' },
          { food: 'Raw or undercooked meat', reason: 'Risk of Toxoplasma, Listeria, and E. coli. Steak, sushi, and rare burgers must be avoided.' },
          { food: 'Raw or undercooked eggs', reason: 'Salmonella risk. Avoid runny yolks, raw cookie dough, homemade mayonnaise, and mousse.' },
          { food: 'Unpasteurised dairy', reason: 'Soft cheeses (Brie, Camembert, blue cheese), raw milk — Listeria risk, which can cause miscarriage.' },
          { food: 'Raw shellfish', reason: 'Oysters, clams, mussels — high risk of bacterial and viral infection.' },
          { food: 'Deli meats / cold cuts', reason: 'Listeria can grow at refrigerator temperatures. Heat to steaming before eating.' },
          { food: 'Liver and liver products', reason: 'Extremely high in Vitamin A (retinol). Excess retinol causes birth defects.' },
          { food: 'Raw sprouts', reason: 'Alfalfa, bean, radish sprouts — bacterial contamination risk.' },
          { food: 'Unwashed produce', reason: 'Toxoplasma from soil. Wash all fruits and vegetables thoroughly.' },
          { food: 'Excessive caffeine', reason: 'Maximum 200mg per day (one 12oz coffee). Excess linked to low birth weight and miscarriage. Tea, chocolate, and energy drinks also contain caffeine.' },
          { food: 'Herbal teas in large amounts', reason: 'Some herbs (sage, chamomile in excess, liquorice root, black cohosh) may stimulate uterus. Stick to ginger, peppermint, and rooibos in moderation.' },
        ],
      },
      {
        heading: 'Trimester-Specific Nutrition Tips',
        type: 'timeline',
        items: [
          { week: '1st Trimester', label: 'Focus on folic acid, small frequent meals for nausea, ginger for morning sickness. Avoid strong smells during cooking — she may not tolerate them.' },
          { week: '2nd Trimester', label: 'Increase iron and calcium intake as blood volume rises. Offer snacks between meals. Energy typically returns — use this window to establish good eating habits.' },
          { week: '3rd Trimester', label: 'Focus on protein, omega-3, and iron for final fetal growth. Smaller meals — the uterus compresses the stomach. Prepare and freeze nutritious meals for the postpartum period now.' },
          { week: 'Postpartum', label: 'Breastfeeding burns an extra 300–500 calories daily. Increase her intake. Oats, fennel, and fenugreek support milk production. Continue prenatal vitamins and hydration.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. FAQs FOR DADS
  // ─────────────────────────────────────────────
  faq: {
    intro: 'These are the questions men search at 2am and are too afraid to ask out loud. Here are straight, honest answers.',
    sections: [
      {
        heading: 'Pregnancy',
        type: 'faq',
        items: [
          {
            q: 'Is it safe to have sex during pregnancy?',
            a: 'Yes, in most pregnancies. Sex is safe throughout pregnancy unless the doctor has specifically advised against it (due to placenta praevia, cervical incompetence, or risk of preterm labour). The baby is cushioned by amniotic fluid and the cervix is sealed with a mucus plug. Some positions become uncomfortable — follow her lead and use pillows for support.',
          },
          {
            q: 'Why is she so emotional and difficult?',
            a: 'Pregnancy hormones — particularly oestrogen and progesterone — fluctuate dramatically and directly affect mood, emotional sensitivity, and stress response. Add physical discomfort, identity shift, fear about the future, and sleep disruption: the emotional response is entirely rational. Your job is not to fix it. Your job is to be a steady, non-reactive presence.',
          },
          {
            q: 'What if she doesn\'t want me at the delivery?',
            a: 'Respect it without resentment. Some women feel more in control with a female birth partner — a mother, sister, or doula. Her birth space is her domain. Ask if there is any version of your presence she would accept (waiting room, arriving after active labour, being called in for the final push). If she says no, honour it completely.',
          },
          {
            q: 'How do I know when labour has actually started?',
            a: 'True labour involves regular, progressively stronger contractions that do not stop when she moves around. Unlike Braxton Hicks (see below), real contractions get closer together and longer over time. The 5-1-1 rule: contractions 5 minutes apart, lasting 1 minute, for 1 hour = time to go. Water breaking (clear or slightly pink fluid) is also a clear sign — go in regardless of contractions.',
          },
          {
            q: 'What are Braxton Hicks contractions?',
            a: 'Braxton Hicks are "practice" or "false" contractions — tightening of the uterus that can feel uncomfortable but are not true labour. They are irregular, don\'t intensify over time, and usually stop with movement or hydration. They can begin from week 6 but are most noticeable from the second trimester. If she is unsure whether they are Braxton Hicks or real contractions, call the hospital triage line.',
          },
          {
            q: 'How much weight should she gain?',
            a: 'Weight gain varies based on pre-pregnancy BMI. General guidelines (NHS/ACOG): Underweight BMI: 12–18kg gain. Normal BMI: 11–16kg. Overweight BMI: 7–11kg. Obese BMI: 5–9kg. Don\'t comment on her weight — ever. If her doctor has concerns they will raise it. Your job is to ensure she has access to nutritious food and gentle activity.',
          },
          {
            q: 'Why does she keep going to the toilet?',
            a: 'Frequent urination is normal throughout pregnancy. The growing uterus compresses the bladder from the outside. Hormones also increase kidney filtration rate. In the third trimester, the baby\'s head may press directly on the bladder. This is not a sign of a problem — do not make her feel embarrassed about it.',
          },
          {
            q: 'Is it normal for her to have no interest in sex?',
            a: 'Yes, and so is the reverse. Libido changes unpredictably during pregnancy. Nausea, fatigue, body image concerns, and anxiety reduce desire in many women — especially in the first and third trimesters. Some women experience increased desire in the second trimester. Follow her lead entirely. Pressure of any kind during pregnancy is harmful.',
          },
        ],
      },
      {
        heading: 'Labour & Delivery',
        type: 'faq',
        items: [
          {
            q: 'What if she changes her mind about pain relief during labour?',
            a: 'Support it fully and immediately. The birth plan is a preference document, not a contract. If she asked for a natural birth and now wants an epidural — advocate for it without hesitation and without the words "but you said you wanted to go natural." Pain in labour is unlike anything else. Her in-the-moment decision is the only one that counts.',
          },
          {
            q: 'What if something goes wrong during delivery?',
            a: 'Trust the medical team, stay in the room unless asked to leave, and hold her hand. If emergency decisions need to be made, ask the doctor to explain clearly in plain language and check with her if she is conscious. You are not expected to have medical knowledge — you are expected to be calm, present, and to advocate for her voice to be heard.',
          },
          {
            q: 'Will I faint in the delivery room?',
            a: 'Most men don\'t. If you feel lightheaded: sit down immediately, look at her face (not the medical area), breathe slowly, and tell a nurse. There is no shame in it — labour and delivery involves blood and intensity. If fainting is a genuine concern, discuss it with your partner beforehand so expectations are managed.',
          },
          {
            q: 'How long does labour last?',
            a: 'First-time mothers: average 12–18 hours of active labour. Subsequent births are typically shorter (4–8 hours). Active labour is only one phase — early labour can last days before progressing. Long labours are normal. Try to eat and rest during slow periods so you can support her through the intense final phase.',
          },
          {
            q: 'What does an episiotomy mean?',
            a: 'An episiotomy is a surgical cut made at the vaginal opening to widen it during delivery and prevent more severe tearing. It is stitched afterwards and heals within weeks. Recovery involves discomfort when sitting or walking. She will need extra gentleness, cushions, and a peri bottle (warm water spray) for hygiene. Do not make her feel self-conscious about it.',
          },
        ],
      },
      {
        heading: 'Postpartum',
        type: 'faq',
        items: [
          {
            q: 'When can we have sex again after birth?',
            a: 'Medically, most doctors advise waiting at least 6 weeks after vaginal birth and 8 weeks after C-section — and only when she feels ready. Emotionally and physically, many women take much longer. Her body has undergone a major event. Pressure for sex before she is ready is damaging. When she does feel ready, expect differences in sensation, discomfort, and desire — this is normal and usually temporary.',
          },
          {
            q: 'Is it normal for me to feel disconnected from the baby?',
            a: 'Yes. Paternal bonding often develops more slowly than maternal bonding, which is hormonally driven. Skin-to-skin contact, bathing the baby, doing night feeds, and talking to the baby all accelerate bonding. Give it time. If feelings of disconnection persist past 2–3 months, speak to a doctor — paternal postpartum depression is real and affects roughly 1 in 10 fathers.',
          },
          {
            q: 'Why does she cry without reason after the baby arrives?',
            a: '"Baby blues" affect up to 80% of new mothers in the first week — triggered by the dramatic hormonal drop after delivery. Crying, mood swings, and emotional fragility typically peak around day 3–5 and resolve by day 10. If symptoms persist beyond 2 weeks, worsen, or include thoughts of harm, this is postpartum depression — see the Awareness tab.',
          },
          {
            q: 'She says breastfeeding is painful. Should I push her to continue?',
            a: 'No. Never. Breastfeeding is her decision and breastfeeding with incorrect latch is genuinely painful. Support her by finding a lactation consultant, researching proper latch technique, and having formula available as a backup without shame. A fed baby and a mentally healthy mother matter more than breastfeeding at any cost.',
          },
          {
            q: 'How do I handle unsolicited advice from family?',
            a: 'You are the gatekeeper. Fielding unhelpful, contradictory, or undermining comments from parents and in-laws is part of your job. A simple "Thanks — we\'ll check with the doctor" shuts down most conversations. Protect her from stressful interactions during the fourth trimester. It is appropriate to limit visits and calls during the first 2–4 weeks.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. CRAVINGS
  // ─────────────────────────────────────────────
  cravings: {
    intro: 'Pregnancy cravings are one of the most talked-about and least understood aspects of pregnancy. As her partner, how you respond to them matters more than you might expect.',
    sections: [
      {
        heading: 'What Are Pregnancy Cravings?',
        type: 'explainer',
        content: 'A pregnancy craving is an intense, often sudden desire for a specific food — or sometimes a specific texture, smell, or even a non-food substance. Cravings typically begin in the first trimester, peak in the second, and reduce in the third.\n\nThey are physiologically real — driven by hormonal changes that affect taste, smell, and brain reward pathways. They are not random or exaggerated. When she says she needs something specific right now, her brain is experiencing it as a genuine physical need.\n\nStudies suggest cravings may also signal nutritional gaps: a craving for red meat may indicate iron deficiency, dairy cravings may signal calcium needs, and sweet cravings can reflect low blood sugar or magnesium deficiency.',
      },
      {
        heading: 'Common Pregnancy Cravings and What They May Mean',
        type: 'cravings_list',
        items: [
          { craving: 'Red meat, burgers', meaning: 'Possible iron or protein deficiency — common in pregnancy', safe: true },
          { craving: 'Dairy (cheese, milk, ice cream)', meaning: 'Possible calcium deficiency', safe: true },
          { craving: 'Citrus fruits, pickles, sour foods', meaning: 'Linked to iron absorption — Vitamin C enhances iron uptake', safe: true },
          { craving: 'Spicy food', meaning: 'No clear deficiency link — possibly related to heat regulation or endorphin response', safe: true },
          { craving: 'Sweet foods, chocolate', meaning: 'Low blood sugar, magnesium, or chromium', safe: 'In moderation' },
          { craving: 'Carbohydrates (bread, pasta, chips)', meaning: 'Low energy or serotonin response', safe: 'In moderation' },
          { craving: 'Ice (pagophagia)', meaning: 'Strongly associated with iron deficiency anaemia — tell the doctor', safe: 'Tell doctor' },
          { craving: 'Dirt, chalk, clay, sand (pica)', meaning: 'Mineral deficiency or a condition called pica — requires medical evaluation', safe: false },
          { craving: 'Laundry detergent, soap, cleaning products (pica)', meaning: 'Pica disorder — potentially dangerous. Tell the doctor immediately.', safe: false },
          { craving: 'Raw rice, flour, starch', meaning: 'Pica — may indicate anaemia or zinc deficiency. Inform the doctor.', safe: false },
        ],
      },
      {
        heading: 'How Cravings Affect Her Mood',
        type: 'explainer',
        content: 'Unsatisfied cravings during pregnancy are not a minor inconvenience — they trigger a genuine emotional and physical stress response. Here\'s what actually happens:\n\n• When a craving is dismissed or mocked, she experiences it as emotional rejection — amplified by pregnancy hormones.\n\n• Frustration from unmet cravings can escalate into irritability, tearfulness, or feeling unsupported and alone.\n\n• Sleep can be disrupted by intense cravings in the second and third trimesters.\n\n• Women who consistently cannot satisfy cravings report higher rates of prenatal anxiety.\n\nThis does not mean every craving must be met immediately — but it does mean they should never be dismissed, minimised, or laughed at.',
      },
      {
        heading: 'How to Handle Cravings as Her Partner',
        type: 'checklist',
        icon: 'heart-outline',
        color: '#E91E63',
        items: [
          { text: 'Take them seriously, always. Never say "that\'s disgusting" or "you don\'t really need that."', icon: 'heart-outline' },
          { text: 'Keep a craving log — note what she\'s wanted this week so you can anticipate and stock up', icon: 'list-outline' },
          { text: 'Stock the home with her most common cravings within safe limits', icon: 'home-outline' },
          { text: 'When a craving is unsafe (e.g. high-mercury sushi, unpasteurised cheese), offer the safest close substitute: cooked sushi rolls, pasteurised alternatives', icon: 'shield-checkmark-outline' },
          { text: 'If she craves non-food items (pica), do not provide them — contact her doctor or midwife that day', icon: 'alert-circle-outline' },
          { text: 'Be the 11pm grocery run person without complaint. This is part of the job.', icon: 'car-outline' },
          { text: 'Do not police portions or caloric content. She does not need a nutritional lecture.', icon: 'close-circle-outline' },
          { text: 'If a craving seems extreme (e.g. craving ice constantly), mention it to the doctor — it may indicate anaemia', icon: 'medkit-outline' },
        ],
      },
      {
        heading: 'Dealing with Food Aversions (The Opposite of Cravings)',
        type: 'explainer',
        content: 'Many women develop strong aversions to foods they previously loved — particularly in the first trimester. Meat, eggs, garlic, onions, and fish are the most common. These aversions are driven by the same hormonal changes as cravings and are often more intense than the cravings themselves.\n\nWhat you can do:\n• Remove the food she is averse to from visible areas of the kitchen\n• Cook it only when she is out of the room and ventilate well\n• Find alternative protein sources if meat is aversive\n• Never cook something she cannot smell without warning her\n• Accept that her diet will be limited in the first trimester — this is normal and temporary',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. MISCARRIAGE
  // ─────────────────────────────────────────────
  miscarriage: {
    intro: 'Miscarriage is the loss of a pregnancy before 20 weeks. It is far more common than most people realise — and almost never anyone\'s fault. If this has happened to you, or you are worried it might: this section is for you.',
    sections: [
      {
        heading: 'What Is a Miscarriage?',
        type: 'explainer',
        content: 'A miscarriage (also called a spontaneous abortion) is the natural end of a pregnancy before the fetus is viable — generally defined as before 20 weeks of gestation. It is the most common pregnancy complication.\n\nStatistics:\n• 10–20% of known pregnancies end in miscarriage\n• When including pregnancies lost before a positive test, the rate is estimated at up to 30–40%\n• 80% of miscarriages occur in the first trimester (before 12 weeks)\n• Risk decreases significantly after a heartbeat is detected at 8 weeks\n• Most women who miscarry go on to have healthy pregnancies',
      },
      {
        heading: 'Types of Miscarriage',
        type: 'list',
        icon: 'document-text-outline',
        color: '#C2185B',
        items: [
          'Threatened miscarriage: Bleeding occurs but the cervix is closed and pregnancy may continue — requires monitoring',
          'Inevitable miscarriage: Bleeding with an open cervix — pregnancy cannot continue',
          'Incomplete miscarriage: Some pregnancy tissue has passed but some remains — may need medical intervention',
          'Complete miscarriage: All pregnancy tissue has passed — often confirmed by ultrasound',
          'Missed miscarriage (silent miscarriage): Baby has died but there are no symptoms — often discovered at a scan',
          'Recurrent miscarriage: Three or more consecutive miscarriages — affects 1–2% of couples and warrants specialist investigation',
          'Chemical pregnancy: Loss occurs very early, around the time of the expected period — often only detected by sensitive pregnancy tests',
          'Ectopic pregnancy (not technically a miscarriage): Pregnancy implants outside the uterus — medical emergency requiring immediate treatment',
        ],
      },
      {
        heading: 'Causes of Miscarriage',
        type: 'list',
        icon: 'search-outline',
        color: '#880E4F',
        items: [
          'Chromosomal abnormalities (most common — accounts for 50–60% of first-trimester losses): random genetic errors during fertilisation, not inherited from parents',
          'Hormonal imbalances: inadequate progesterone, thyroid disorders, uncontrolled diabetes',
          'Uterine abnormalities: fibroids, polyps, a septum (wall) dividing the uterus, or an incompetent cervix',
          'Immune system disorders: antiphospholipid syndrome — the immune system attacks pregnancy-related proteins',
          'Infections: untreated bacterial infections, sexually transmitted infections',
          'Advancing maternal age: risk increases from 20% at age 35 to 40%+ at age 40',
          'Uncontrolled chronic conditions: poorly controlled diabetes, lupus, or coeliac disease',
          'Smoking, alcohol, and recreational drug use — all increase miscarriage risk significantly',
          'Environmental toxins: heavy pesticide, radiation, or chemical exposure',
          'Extreme physical trauma (rare): a severe blow to the abdomen',
        ],
      },
      {
        heading: 'What Does NOT Cause Miscarriage',
        type: 'explainer',
        content: 'This is critical. Miscarriage is almost never caused by anything the mother did or did not do. The following do NOT cause miscarriage:\n\n• Normal exercise during pregnancy\n• Having sex\n• An argument or emotional stress (moderate stress)\n• Lifting something moderately heavy\n• Eating spicy food or ordinary cravings\n• Flying in an aircraft\n• A fall or minor bump earlier in pregnancy\n• Morning sickness (or the absence of it)\n• Not wanting the pregnancy initially\n\nDo not allow her — or yourself — to search for something to blame. In the majority of cases, there is nothing that could have been done differently.',
      },
      {
        heading: 'Signs and Symptoms to Watch For',
        type: 'list',
        icon: 'alert-circle-outline',
        color: '#B71C1C',
        items: [
          'Vaginal bleeding — from light spotting to heavy bleeding with clots',
          'Cramping or pain in the lower abdomen (similar to period pain or stronger)',
          'Passage of tissue or fluid from the vagina',
          'Sudden disappearance of pregnancy symptoms (breast tenderness, nausea) — though this alone is not diagnostic',
          'Back pain, lower than normal',
          'A feeling that something is wrong — trust instinct and call the midwife or triage line',
          'Note: Light spotting in the first trimester is common and does not always mean miscarriage — but always get it checked',
        ],
      },
      {
        heading: 'Medical Management After Miscarriage',
        type: 'list',
        icon: 'medkit-outline',
        color: '#C2185B',
        items: [
          'Expectant management: Waiting for natural completion — can take 2 weeks and involves cramping and bleeding',
          'Medical management: Medication (misoprostol) to help the uterus expel tissue — faster than expectant management',
          'Surgical management (ERPC/D&C): A procedure to remove remaining tissue — recommended if incomplete or missed miscarriage. She is sedated. Done in hospital, usually same-day.',
          'Blood type check: If she is Rh-negative, she needs an anti-D injection after miscarriage',
          'Follow-up ultrasound: Confirms the uterus is empty',
          'HCG levels monitored: To confirm hormones return to zero, confirming complete miscarriage',
          'Investigation for recurrent miscarriage: Recommended after 3 consecutive losses — includes blood tests, genetic testing, and uterine assessment',
        ],
      },
      {
        heading: 'How to Support Her Through Miscarriage',
        type: 'checklist',
        icon: 'heart-outline',
        color: '#E91E63',
        items: [
          { text: 'Say: "I am so sorry. I loved this baby too." Acknowledge the loss as real and shared.', icon: 'heart-outline' },
          { text: 'Do not say: "At least it was early." "You can try again." "At least you know you can get pregnant." These minimise genuine grief.', icon: 'close-circle-outline' },
          { text: 'Allow her to grieve on her timeline — grief after miscarriage can last months. Do not rush her recovery.', icon: 'time-outline' },
          { text: 'Attend all medical appointments — the follow-up appointments after loss can be particularly hard emotionally.', icon: 'calendar-outline' },
          { text: 'Handle any practical tasks — informing people, managing leave from work, returning baby items.', icon: 'construct-outline' },
          { text: 'Ask how she wants to mark the loss — some women want a naming ceremony, a plant, or a private moment of acknowledgement.', icon: 'flower-outline' },
          { text: 'Your grief matters too. Find a trusted friend, therapist, or support group. Do not carry it silently — it will surface.', icon: 'person-outline' },
          { text: 'Understand that she may feel angry, guilty, and empty simultaneously. You cannot fix this. Presence is the gift.', icon: 'hand-left-outline' },
          { text: 'If you try to conceive again, be patient. Many doctors recommend waiting 1–3 months physically, but emotionally readiness varies enormously.', icon: 'time-outline' },
          { text: 'Consider professional counselling — miscarriage grief is often disenfranchised (not given the social recognition of other deaths). Therapy helps both of you.', icon: 'chatbubble-outline' },
        ],
      },
      {
        heading: 'Support Resources',
        type: 'resources',
        items: [
          { name: 'Miscarriage Association (UK)', contact: 'www.miscarriageassociation.org.uk', phone: '01924 200799' },
          { name: 'Postpartum Support International', contact: 'www.postpartum.net', phone: '1-800-944-4773' },
          { name: 'March of Dimes', contact: 'www.marchofdimes.org', phone: '1-888-663-4637' },
          { name: 'Star Legacy Foundation', contact: 'www.starlegacyfoundation.org', note: 'Focuses on pregnancy and infant loss' },
        ],
      },
    ],
  },
};
