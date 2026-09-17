export interface TreatmentCategory {
  id: string;
  number: string;
  name: string;
  shortSummary: string;
  /** Patient-facing card description: 35–70 words, plain language, substantive clinical context */
  description: string;
  /** Section label used in discipline badges and navigation */
  disciplineLabel: string;
  conditions?: string[];
  nonOperative?: string[];
  operative?: string[];
  other?: string[];
  areas?: string[];
  modalities?: string[];
  /** What the service is, in plain language */
  whatItIs: string;
  /** The types of symptoms, limitations, or clinical situations this care addresses */
  whoItIsFor: string;
  /** High-level explanation of what the care pathway involves */
  careInvolves: string;
  /** What the patient can generally expect when seeking this care */
  patientExpectation: string;
  slug: string;
}

export interface PhysiotherapyModality {
  id: string;
  name: string;
  fullName: string;
  /** What this modality is, in plain language */
  whatItIs: string;
  /** What it is generally used for in an orthopaedic/rehab context */
  generalUse: string;
  /** How it fits into rehabilitation care */
  rehabilitationRole: string;
}

export const PHYSIOTHERAPY_MODALITIES: PhysiotherapyModality[] = [
  {
    id: 'ift',
    name: 'IFT',
    fullName: 'Interferential Therapy',
    whatItIs:
      'Interferential Therapy (IFT) delivers low-frequency electrical currents through the skin to reach deeper soft tissues and joints. The currents are applied at angles that intersect within the targeted tissue, producing a therapeutic effect in areas that are difficult to reach with surface-only treatments.',
    generalUse:
      'IFT is used to address pain associated with soft tissue injuries, joint discomfort, and musculoskeletal conditions. It forms part of the pain management and rehabilitation approach in clinical physiotherapy.',
    rehabilitationRole:
      'By helping to manage pain at the site of injury or joint discomfort, IFT can make it easier for patients to participate in rehabilitation exercises and mobility work. It is typically used alongside other physiotherapy modalities rather than as a standalone treatment.',
  },
  {
    id: 'tens',
    name: 'TENS',
    fullName: 'Transcutaneous Electrical Nerve Stimulation',
    whatItIs:
      'TENS (Transcutaneous Electrical Nerve Stimulation) applies mild electrical impulses through electrodes placed on the skin. These impulses act on the nerves in the treated area and are used clinically for pain management.',
    generalUse:
      'TENS is used to help manage both acute and persistent pain in a range of orthopaedic and musculoskeletal conditions. The electrical stimulation can modify the pain signals the brain receives from the affected area.',
    rehabilitationRole:
      'By assisting with pain control, TENS can support a patient\'s ability to engage with rehabilitation activities. It is generally used as part of a broader physiotherapy programme tailored to the individual\'s condition.',
  },
  {
    id: 'swd',
    name: 'SWD',
    fullName: 'Short Wave Diathermy',
    whatItIs:
      'Short Wave Diathermy (SWD) uses high-frequency electromagnetic energy to generate a gentle warming effect in deep body tissues, including muscles and joints. The warmth produced penetrates below the skin surface to reach structures that cannot be effectively treated with surface heat alone.',
    generalUse:
      'SWD is used in the management of stiffness and discomfort associated with musculoskeletal and joint conditions. It is applied to areas where deeper tissue warming may support the rehabilitation process.',
    rehabilitationRole:
      'The therapeutic warmth delivered by SWD can help ease joint stiffness and make movement more comfortable during physiotherapy. It is used selectively, as part of an individual treatment plan, and is not appropriate for all patients or all conditions.',
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound therapy',
    fullName: 'Therapeutic Ultrasound',
    whatItIs:
      'Therapeutic ultrasound uses high-frequency sound waves, applied through a gel-contact probe, to deliver energy to soft tissues beneath the skin. This is a non-invasive modality used in physiotherapy for soft tissue conditions.',
    generalUse:
      'Ultrasound therapy is used in the management of soft tissue conditions affecting tendons, ligaments, and muscle. It is applied to localised areas where soft tissue rehabilitation is part of the overall clinical plan.',
    rehabilitationRole:
      'Ultrasound therapy is typically used to address specific soft tissue concerns within a broader physiotherapy programme. Treatment is guided by individual assessment and is not applied uniformly to all patients.',
  },
  {
    id: 'theraband',
    name: 'Theraband',
    fullName: 'Resistance Band Therapy',
    whatItIs:
      'Theraband refers to the use of elastic resistance bands in supervised physiotherapy and rehabilitation exercise. These bands provide controlled, progressive resistance that can be adjusted to match a patient\'s current strength and rehabilitation stage.',
    generalUse:
      'Resistance band exercises are used to rebuild strength, restore joint stability, and improve the range of movement in muscles and joints affected by injury, surgery, or musculoskeletal conditions.',
    rehabilitationRole:
      'Theraband exercises are a core part of active rehabilitation at Pain Cure clinic. They allow progressive strengthening in a controlled way, supporting the gradual restoration of function that is central to orthopaedic and post-operative rehabilitation programmes.',
  },
];

export const TREATMENTS: TreatmentCategory[] = [
  {
    id: 'spine',
    number: '01',
    name: 'Spine Care',
    shortSummary: 'Spine Care for lumbar pain, neck pain, nerve pain and sciatica.',
    disciplineLabel: 'Spine & Nerve Care',
    description:
      'Spine Care addresses lumbar pain, neck pain, nerve-related pain, and sciatica through careful clinical assessment. The emphasis is on conservative management — including physiotherapy, spinal decompression, and targeted nerve interventions — with surgical pathways reserved for selected cases. Understanding the source of your pain is the first step toward finding the right approach.',
    whatItIs:
      'Spine Care at Pain Cure Ortho & Rehab Clinic covers assessment and management of pain and discomfort affecting the spinal column and associated nerve pathways. This includes conditions affecting the lumbar spine (lower back), cervical spine (neck), and nerve pain radiating from the spine.',
    whoItIsFor:
      'Spine care is relevant for patients experiencing lumbar pain (lower back pain), neck pain, nerve pain, or sciatica. Sciatica typically causes pain, numbness, or discomfort that travels from the lower back through the leg, often following the path of an irritated nerve. Each patient is assessed individually to identify the nature and location of their spinal or nerve-related symptoms.',
    careInvolves:
      'The clinical approach begins with thorough individual evaluation. Depending on assessment findings, care may involve non-operative modalities such as robotic spine decompression, Selective Nerve Root Block (SNRB), or physiotherapy. Minimally invasive spinal surgery is considered only in extreme or selected cases following direct clinical assessment. Spine stabilisation pathways are available where required for fracture or deformity.',
    patientExpectation:
      'Patients can expect a thorough clinical evaluation of their spinal symptoms before any treatment pathway is recommended. The aim is to understand the underlying nature of your discomfort and recommend the most appropriate approach — the majority of spine care at the clinic is managed through conservative, non-surgical means wherever clinically suitable.',
    conditions: ['Lumbar pain', 'Neck pain', 'Nerve pain', 'Sciatica'],
    nonOperative: ['Robotic spine decompression', 'Selective Nerve Root Block (SNRB)', 'Physiotherapy'],
    operative: ['Minimal invasive MIS spine surgery in extreme / selected cases'],
    other: ['Spine stabilisation for fracture', 'Spine stabilisation for deformity'],
    slug: '/treatments/spine',
  },
  {
    id: 'knee',
    number: '02',
    name: 'Knee Treatment',
    shortSummary: 'Non-operative and operative pathways for knee care.',
    disciplineLabel: 'Knee Care & Mobility',
    description:
      'Knee Treatment covers a range of care pathways for knee pain, stiffness, and mobility limitations. Non-operative management is the starting point wherever clinically appropriate, using therapeutic modalities to address discomfort and support joint function. Where assessment indicates a surgical pathway, unicondylar knee replacement is available, followed by in-house rehabilitation to support functional recovery.',
    whatItIs:
      'Knee Treatment at Pain Cure clinic provides clinical assessment and management of knee pain, joint stiffness, and mobility limitations. Both non-operative and operative pathways are available, and the appropriate approach is determined through individual clinical evaluation.',
    whoItIsFor:
      'Knee care is relevant for patients experiencing knee pain, discomfort with movement or weight-bearing, reduced range of motion, or functional limitations in daily activities. Assessment helps identify whether conservative management or a surgical pathway is the more appropriate route for the individual.',
    careInvolves:
      'Non-operative knee care at the clinic may include ERP/ozone therapy, IR lamp therapy, and physiotherapy. These modalities are used to address pain and support joint function without surgery. Where clinical assessment indicates a surgical pathway is appropriate, unicondylar knee replacement is available. Post-operative rehabilitation is provided in-house to support recovery of movement and function following surgery.',
    patientExpectation:
      'Every patient undergoes individual clinical assessment before a treatment pathway is recommended. Non-operative management is considered before surgery wherever it is clinically appropriate. If a surgical pathway is advised, patients will be guided through pre-surgical assessment and post-operative rehabilitation to support their recovery.',
    nonOperative: ['ERP / ozone', 'IR Lamp', 'Physiotherapy'],
    operative: ['Unicondylar knee replacement'],
    slug: '/treatments/knee',
  },
  {
    id: 'hip',
    number: '03',
    name: 'Hip Treatment',
    shortSummary: 'Hip replacement and fracture fixation pathways.',
    disciplineLabel: 'Hip Care',
    description:
      'Hip Treatment provides surgical pathways for significant hip joint problems and hip fractures. Hip replacement addresses severe joint degeneration that limits mobility and everyday function, while fracture fixation addresses traumatic hip fractures requiring stabilisation. Both pathways are supported by in-house rehabilitation to restore movement and daily independence following surgery.',
    whatItIs:
      'Hip Treatment at Pain Cure clinic covers surgical intervention for hip conditions that significantly affect a patient\'s mobility, independence, or quality of life. The two approved surgical pathways are hip replacement and fracture fixation, each addressing different clinical presentations affecting the hip joint.',
    whoItIsFor:
      'Hip replacement is relevant for patients with significant hip joint degeneration causing persistent pain and mobility restriction. Fracture fixation is relevant for patients who have sustained a traumatic hip fracture requiring surgical stabilisation. All surgical recommendations follow direct clinical assessment.',
    careInvolves:
      'Hip replacement involves surgical intervention to replace a damaged hip joint, with the aim of restoring hip stability and enabling better functional movement. Fracture fixation addresses traumatic hip fractures through surgical stabilisation to support proper healing. Both procedures are followed by post-operative rehabilitation to support the progressive restoration of mobility and everyday function.',
    patientExpectation:
      'Patients are assessed individually before surgical intervention is recommended. The clinical team will explain the surgical pathway relevant to your condition and guide you through what to expect both before and after the procedure. In-house post-operative rehabilitation forms part of the recovery pathway to support your return to functional movement.',
    operative: ['Hip replacement', 'Fracture fixation'],
    slug: '/treatments/hip',
  },
  {
    id: 'joints',
    number: '04',
    name: 'Joint Treatment',
    shortSummary: 'Clinical care for shoulder, wrist, ankle, elbow, hand, and foot.',
    disciplineLabel: 'Peripheral Joints',
    description:
      'Peripheral Joint Care covers orthopaedic assessment and management of conditions affecting the shoulder, elbow, wrist, hand, ankle, and foot. These joints are assessed for pain, stiffness, and functional limitation. Care is tailored to the nature of the individual\'s joint problem, with the goal of restoring comfortable movement and daily function.',
    whatItIs:
      'Peripheral Joint Care addresses orthopaedic conditions affecting joints beyond the spine, knee, and hip — including the shoulder, elbow, wrist, hand, ankle, and foot. Each joint can be affected by injury, degenerative changes, or conditions that cause pain, restricted movement, or loss of function.',
    whoItIsFor:
      'This discipline is relevant for patients experiencing pain, stiffness, swelling, or functional difficulty in any of the approved peripheral joints: shoulder, elbow, wrist, hand, ankle, or foot. Assessment helps determine the nature of the joint problem and the appropriate management approach.',
    careInvolves:
      'Care begins with clinical assessment of the affected joint, considering range of movement, pain pattern, and functional impact. Management is tailored to the individual\'s specific condition and the joint involved. Physiotherapy and rehabilitation may form part of the management plan to restore joint movement and support a return to everyday activities.',
    patientExpectation:
      'Patients can expect a focused assessment of the affected joint before a management plan is recommended. The approach is individualised — treatment for a shoulder problem, for example, differs from treatment for an ankle or wrist condition. You will be guided on what care is most appropriate for your specific joint and symptoms.',
    areas: ['Shoulder', 'Wrist', 'Ankle', 'Elbow', 'Hand', 'Foot'],
    slug: '/treatments/joints',
  },
  {
    id: 'sports-injury',
    number: '05',
    name: 'Sports Injury',
    shortSummary: 'In-house care and rehabilitation for sports injuries.',
    disciplineLabel: 'Sports Injury & Rehabilitation',
    description:
      'Sports Injury care addresses the assessment and rehabilitation of injuries sustained through sport or physical activity. Clinical evaluation identifies the nature and extent of the injury, and rehabilitation focuses on the progressive restoration of movement, strength, and function. In-house rehabilitation supports the patient\'s recovery at each stage of the process.',
    whatItIs:
      'Sports Injury care at Pain Cure clinic covers the clinical assessment and management of injuries related to sport, exercise, and physical activity. In-house rehabilitation is a central part of this service, supporting patients through structured recovery aimed at restoring function.',
    whoItIsFor:
      'This service is relevant for patients who have sustained injuries during sport or physical activity — whether acute injuries from a specific incident or problems that have developed gradually through repeated activity. Both active athletes and recreational patients are assessed individually to determine the nature of their injury.',
    careInvolves:
      'Care begins with a clinical assessment to understand the nature, location, and functional impact of the injury. Management focuses on rehabilitation — progressively restoring movement, strength, and joint stability through supervised, in-house rehabilitation. Treatment pathways are determined by the individual\'s injury and clinical assessment findings rather than by a fixed protocol.',
    patientExpectation:
      'Patients can expect an individual assessment of their injury before rehabilitation begins. Recovery progresses according to clinical assessment, and the rehabilitation approach is adjusted as the patient\'s condition evolves. The goal is to support a safe return toward normal functional activity, with care taken to avoid aggravating the injury during the recovery process.',
    slug: '/treatments/sports-injury',
  },
  {
    id: 'physiotherapy',
    number: '06',
    name: 'Physiotherapy',
    shortSummary: 'Clinical therapeutic modalities for physical rehabilitation.',
    disciplineLabel: 'Physical Rehabilitation',
    description:
      'Physiotherapy at Pain Cure clinic uses a combination of approved therapeutic modalities to support pain management and physical rehabilitation. Modalities including IFT, TENS, Short Wave Diathermy, Ultrasound Therapy, and Theraband resistance exercises are selected based on each patient\'s condition, symptoms, and rehabilitation stage. Physiotherapy is integrated into the clinic\'s broader orthopaedic care pathway.',
    whatItIs:
      'Physiotherapy is a clinical rehabilitation discipline that uses approved therapeutic techniques and modalities to help manage pain and support the recovery of movement, strength, and function. At Pain Cure clinic, physiotherapy is delivered as part of an integrated orthopaedic and rehabilitation care approach.',
    whoItIsFor:
      'Physiotherapy is relevant for patients recovering from orthopaedic conditions, musculoskeletal injuries, post-operative procedures, and sports-related injuries. It may also support patients managing ongoing joint discomfort or mobility limitations. The specific modalities used depend on the individual\'s clinical assessment and rehabilitation needs.',
    careInvolves:
      'The physiotherapy offering at Pain Cure clinic includes five approved clinical modalities: Interferential Therapy (IFT), Transcutaneous Electrical Nerve Stimulation (TENS), Short Wave Diathermy (SWD), Ultrasound Therapy, and Theraband resistance exercise. These are applied according to individual assessment and may be combined with other elements of the patient\'s treatment plan.',
    patientExpectation:
      'Patients can expect physiotherapy to be recommended as part of a broader treatment plan rather than in isolation. The choice of modalities is guided by your specific condition, the stage of your recovery, and what the clinical assessment indicates will be most appropriate. Treatment is adjusted as your condition and rehabilitation progress.',
    modalities: ['IFT', 'TENS', 'SWD / Short Wave Diathermy', 'Ultrasound therapy', 'Theraband'],
    slug: '/treatments/physiotherapy',
  },
];

export const CLINIC_INFO = {
  name: 'Pain Cure Ortho & Rehab Clinic',
  domain: 'www.paincureortho.com',
  headline: 'Move better. Live stronger.',
  subheadline: 'Personalised orthopaedic treatment and rehabilitation focused on helping patients return to movement, everyday activities, and life with confidence.',
  phone: '7977868264',
  phoneDisplay: '+91 79778 68264',
  phoneTel: 'tel:+917977868264',
  address: '42/44 Patra Chawl New Compound, Seth Motisa Lane, Opp. Sahakari Bhandar, Mazgoan, Mumbai - 10',
  addressLines: [
    '42/44 Patra Chawl New Compound, Seth Motisa Lane,',
    'Opp. Sahakari Bhandar, Mazgoan, Mumbai - 10',
  ],
  landmark: 'Opp. Sahakari Bhandar',
  area: 'Mazgoan, Mumbai - 10',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=42%2F44+Patra+Chawl+New+Compound%2C+Seth+Motisa+Lane%2C+Opp.+Sahakari+Bhandar%2C+Mazgoan%2C+Mumbai+-+10',
  instagram: [
    { handle: '@paincureortho', url: 'https://www.instagram.com/paincureortho/' },
    { handle: '@merchantdrmohsin', url: 'https://www.instagram.com/merchantdrmohsin/' },
  ],
  // Verified clinic operating schedule
  operatingHours: {
    days: 'Monday – Saturday',
    hours: '10:00 AM – 10:00 PM',
    closedDay: 'Sunday',
    opens: '10:00',
    closes: '22:00',
    schemaDays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  // Unverified fields — disabled from rendered UI
  placeholders: {
    phone: '+91 79778 68264',
    address: '42/44 Patra Chawl New Compound, Seth Motisa Lane, Opp. Sahakari Bhandar, Mazgoan, Mumbai - 10',
    email: '[Unverified - Disabled]',
  }
};

export const CONSULTATION_PATH = '/contact#consultation';

export interface DoctorStatistic {
  value: string;
  label: string;
  detail?: string;
}

export interface ExpertiseGroup {
  title: string;
  items: string[];
}

export interface DoctorProfile {
  name: string;
  title: string;
  subtitle: string;
  experience: string;
  statistics: DoctorStatistic[];
  bioParagraphs: string[];
  expertiseGroups: ExpertiseGroup[];
  philosophy: string;
}

export const DOCTOR_PROFILE: DoctorProfile = {
  name: 'Dr. Mohsin Merchant',
  title: 'Consultant Orthopedic Surgeon',
  subtitle: 'Spine & Nerve Pain Specialist',
  experience: 'Over 15 years of experience in orthopedic and spine care',
  statistics: [
    {
      value: '15+ Years',
      label: 'Orthopedic & Spine Care',
    },
    {
      value: '>2,000',
      label: 'Spine Surgeries',
    },
    {
      value: '>4,000',
      label: 'Knee Replacement Surgeries',
      detail: 'Including robotic-assisted knee replacement procedures',
    },
  ],
  bioParagraphs: [
    'Dr. Mohsin Merchant is a Consultant Orthopedic Surgeon with over 15 years of experience in orthopedic and spine care. His practice covers a wide range of orthopedic, spinal, joint and sports-related conditions, with an emphasis on personalized, evidence-based care.',
    'With more than 2,000 spine surgeries and more than 4,000 knee replacement surgeries, including robotic-assisted procedures, Dr. Merchant brings extensive surgical experience to the management of complex orthopedic and spine conditions.',
    'His approach increasingly emphasizes conservative and non-surgical management of spine and nerve pain wherever appropriate, with the aim of helping patients avoid surgery when it is not necessary.',
  ],
  expertiseGroups: [
    {
      title: 'SPINE & NERVE PAIN',
      items: [
        'Spine care and nerve-related pain',
        'Conservative and non-surgical spine treatment',
      ],
    },
    {
      title: 'KNEE & JOINTS',
      items: [
        'Knee replacement surgery, including robotic-assisted knee replacement',
        'Arthritis and degenerative joint conditions',
      ],
    },
    {
      title: 'TRAUMA & SPORTS',
      items: [
        'Fracture and trauma surgery',
        'Arthroscopic ACL and meniscus surgery',
        'Shoulder surgery',
        'Sports injury management',
      ],
    },
  ],
  philosophy:
    'Dr. Mohsin Merchant combines extensive surgical experience with a modern, patient-centered approach, with a focus on choosing the right treatment for each patient—surgical or non-surgical.',
};
