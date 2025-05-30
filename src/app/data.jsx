import { GiFlyingShuriken, GiRibbonMedal, GiMuscleUp } from "react-icons/gi";

export const Services = [
  {
    title: "Aerial Silks & Hammock",
    icon: <GiFlyingShuriken />,
    description:
      "Learn to climb, wrap, and flow through the air using fabric. This discipline builds incredible upper body and core strength, while improving flexibility and body awareness.",
    features: ["Upper Body Strength", "Creative Movement", "Vertical Flow"],
  },
  {
    title: "Acrobatics & Floor Work",
    icon: <GiMuscleUp />,
    description:
      "Ground-based movement training combining flips, rolls, and transitions. Develop agility, coordination, and resilience through dynamic floor work and partner acro basics.",
    features: ["Agility Training", "Balance & Control", "Body Mechanics"],
  },
  {
    title: "Performance Training",
    icon: <GiRibbonMedal />,
    description:
      "Elevate your artistry through workshops focused on stage presence, choreography, and expressive storytelling. Ideal for students preparing for showcases or professional acts.",
    features: ["Choreography Coaching", "Stage Presence", "Artistic Direction"],
  },
];



export const Testimonials = [
  {
    "name": "Mike Johnson",
    "review": "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming."
  },
  {
    "name": "David Martinez",
    "review": "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!"
  },
  {
    "name": "Chris Taylor",
    "review": "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better."
  }
]

import { IoLocationOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

export  const Info = [
    {name:"Address", content:'Savannah, GA, United States', icon:<IoLocationOutline/>},
    {name:"Status", content:'Open 8 am ⋅ Closes 7 pm', icon:<FiClock/>},
    {name:"Phone", content:'+1 912-724-0230', icon:<FiPhone/>},
  ]
