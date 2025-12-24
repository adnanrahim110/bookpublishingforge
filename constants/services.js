import {
  BookCheck,
  Globe,
  Headphones,
  LayoutGrid,
  Megaphone,
  Palette,
  PenLine,
  Rocket,
  Tablet,
} from "lucide-react";

export const services = [
  {
    slug: "ghostwriting-services",
    title: "Ghostwriting Services",
    shortDescription: "Got a book in your heart but not on the page? Let’s write it together. We listen to your ideas, learn your voice, and bring your story to the world.",
    icon: PenLine,
    hero: {
      title: "Your Idea, Expertly Written",
      highlight: "Expertly",
      text: "Got a story burning inside you but can't find the words? You're not just hiring a writer; you're gaining a creative partner. Our professional ghostwriters are experts at listening and understanding your vision, learning your unique voice, and translating your ideas into a compelling, polished manuscript. This is 100% your book, we're just the skilled hands that help you write it.",
    },
    features: {
      title: "What's Included (Beyond the Basics)",
      text: "We go beyond simple writing to offer a true collaborative partnership:",
      points: [
        {
          t: "Your Dedicated Writing Partner",
          d: "We carefully match you with a professional genre specialist writer who specializes in your genre and gets your vision.",
        },
        {
          t: "Complete Confidentiality",
          d: "Your story and our partnership are protected. We operate with strict NDAs, your secret is safe with us."
        },
        {
          t: "A Truly Collaborative Process",
          d: "This is built on regular progress updates, scheduled interview sessions to capture your insights, and multiple revision rounds. Your feedback shapes every chapter."
        },
        {
          t: "More Than a Document",
          d: "You receive a final manuscript that’s professionally formatted and ready for the next steps, whether that's editing, design, or publishing."
        },
      ],
    },
    process: {
      title: "Your Journey from Idea to Manuscript",
      highlight: "Manuscript",
      text: "Our process is designed for clarity and collaboration, so you're never in the dark.",
      steps: [
        {
          t: "The Discovery Call",
          d: "We start by listening. We'll discuss your ideas, goals, and the heart of your story."
        },
        {
          t: "Blueprinting Your Book",
          d: "Your ghostwriter develops a detailed chapter-by-chapter outline for your approval before a single page is written."
        },
        {
          t: "The Writing Phase",
          d: "Your ghostwriter brings the outline to life, sharing drafts regularly for your input."
        },
        {
          t: "Refinement & Revisions",
          d: "We refine the manuscript through multiple rounds of revisions until it perfectly matches your vision."
        },
        {
          t: "Final Delivery",
          d: "You receive the complete, polished manuscript, your story, ready for the world."
        },
      ],
    },
    cta: {
      title: "Start Your Book's Journey",
      text: 'Ready to turn "I have an idea" into "I wrote a book"? Let\'s have a real conversation about your story.Get your free, no- obligation consultation and a custom quote.',
    },
    faqs: [
      {
        q: "Will my name be on the book?",
        a: "Absolutely, yes. You retain full authorship, credit, and copyright. Our role is to be your invisible collaborator."
      },
      {
        q: "How do you capture my voice?",
        a: "Through in-depth interviews, reviewing any materials you provide, and constant feedback. We learn how you speak and think."
      },
      {
        q: "What if I don't like the direction?",
        a: "The outline phase is our crucial checkpoint to align on vision. Throughout, our revision rounds are designed specifically to course-correct and refine."
      },
    ],
  },
  {
    slug: "book-editing-and-proofreading",
    title: "Book Editing and Proofreading",
    shortDescription: "Nervous about missing a typo? We’ll be your safety net. One final, meticulous read so you can hit “publish” with total confidence.",
    icon: BookCheck,
    hero: {
      title: "Your Manuscript's Final Checkpoint",
      highlight: "Checkpoint",
      text: "Even the most established authors trust a fresh, professional eye before their work reaches readers. After you’ve shaped the story, refined the voice, and polished every chapter, a final review ensures nothing is overlooked. Our proofreading service provides that last, critical layer of quality control, so you can publish with confidence, knowing your manuscript is accurate, consistent, and ready for the world.",
    },
    features: {
      title: "",
      text: "Think of us as your eagle-eyed, detail-obsessed final reader, dedicated to catching the tiny slips that are so easy to miss after you’ve been staring at the same words for months.",
      points: [
        {
          t: "Spelling & Typos",
          d: "We hunt down every misspelled word, autocorrect fail, and sneaky typo."
        },
        {
          t: "Grammar & Punctuation",
          d: "We fix grammatical hiccups and ensure every comma, period, and em dash is in its perfect place."
        },
        {
          t: "Consistency is Key",
          d: "We check for uniformity in spelling (e.g., \"proofreader\" vs. \"proof - reader\"), capitalization, hyphenation, and formatting throughout."
        },
        {
          t: "Formatting Flaws",
          d: "We spot irregular spacing, awkward line breaks, and inconsistent heading styles that can disrupt a reader’s experience."
        },
        {
          t: "Final Quality Pass",
          d: "This isn't just one quick look. Our process includes multiple checks to ensure nothing slips through."
        },
      ]
    },
    process: {
      title: "The Proofreading Journey: Simple & Thorough",
      text: "We make the final step stress-free and transparent.",
      steps: [
        {
          t: "We Prepare",
          d: "You send us your manuscript. We get it ready for its meticulous review, ensuring we see it exactly as a reader would."
        },
        {
          t: "The Deep Dive (First Pass)",
          d: "Our expert proofreader conducts a thorough, line-by-line review, marking corrections and queries."
        },
        {
          t: "The Double-Check (Quality Review)",
          d: "A second professional reviews the work to ensure absolute accuracy—because everyone needs a second pair of eyes."
        },
        {
          t: "You Get the All-Clear",
          d: "We deliver your clean, polished, and publication-ready manuscript back to you, complete with a summary of changes if you’d like one."
        },
      ]
    },
    cta: {
      title: "Ready to Cross the Finish Line with Confidence?",
      text: "Don't let small errors distract readers from your amazing story. Get a free, no-obligation quote for proofreading your manuscript. It’s the final, crucial step to ensure your book makes a perfectly professional first impression.",
      points: ["A Fast Turnaround", "Attention to Detail", "Complete Peace of Mind"]
    },
    faqs: [
      {
        q: "What’s the difference between proofreading and editing?",
        a: "Great question! Editing happens earlier and focuses on improving the content, structure, flow, and style of your manuscript. Proofreading is the final stage, focusing exclusively on surface-level errors in spelling, grammar, punctuation, and formatting."
      },
      {
        q: "Will you change my story or my writing style?",
        a: "Absolutely not. Our only goal is to correct errors and ensure consistency. We are guardians of your final text, not editors of your voice. Your story remains 100% yours."
      },
      {
        q: "What file format do you need?",
        a: "We typically work with standard formats like Microsoft Word (.doc/.docx) or Google Docs, which allow for easy tracking of changes. Just ask if you have something different!"
      },
    ],
  },
  {
    slug: "book-cover-design",
    title: "Book Cover Design",
    shortDescription: "Don’t let your book get lost on the shelf. We design covers that grab attention, match your vibe, and make readers think, “I need to read this.”",
    icon: Palette,
    hero: {
      title: "The Face of Your Story",
      highlight: "Story",
      text: "Generational excuse \"don't judge a book by its cover,\" but let's be real, everyone does.Your cover is your book's first impression, its silent salesperson, and the single most essential piece of marketing you will ever invest in. We don't just make pretty pictures; we design covers that stop the scroll, capture the essence of your story, and convince a reader to click \"Buy.\" <br/> This is where your story meets its audience. Let's make the introduction unforgettable.",
    },
    features: {
      title: "What You Get (More Than Just a JPEG)",
      highlight: "JPEG",
      text: "Our design process is a true collaboration, delivering everything you need for a professional launch.",
      points: [
        {
          t: "A Cover That Sells",
          d: "Strategic, genre-perfect design that appeals directly to your target readers."
        },
        {
          t: "Custom, Not Canned",
          d: "Original artwork and typography created from scratch for your book. No templates."
        },
        {
          t: "Complete File Suite",
          d: "You’ll receive print-ready files (for Amazon KDP, IngramSpark, etc.) and all digital formats (e-book, thumbnail, marketing assets)."
        },
        {
          t: "Full Format Flexibility",
          d: "Expert design for paperback, hardcover, and dust jacket layouts."
        },
        {
          t: "Unlimited Revisions",
          d: "We work with you through multiple rounds until you are 100% thrilled with the final design."
        },
        {
          t: "Author-Friendly Guidance",
          d: "We'll explain technical specs (bleed, spine width, resolution) in plain English."
        }
      ]
    },
    process: {
      title: "The Design Journey – Begins With Just A Concept",
      highlight: "Concept",
      text: "Book Publishing Forge team makes the creative process exciting, collaborative, and crystal clear.",
      steps: [
        {
          t: "The Creative Brief",
          d: "We start by getting to know your book inside and out—its genre, tone, audience, and the core emotion you want to convey."
        },
        {
          t: "Concept & Composition",
          d: "Our designers create 2-3 unique cover concepts for you to review. This is where we explore big ideas."
        },
        {
          t: "Refinement Round",
          d: "You choose your favorite direction, and we refine it. We tweak the imagery, perfect the typography, and finesse every detail."
        },
        {
          t: "Finalization & Files",
          d: "Once approved, we prepare and deliver your complete professional file package, ready for global publication."
        }
      ]
    },
    cta: {
      title: "Ready to Give Your Book the Cover It Deserves?",
      text: "Your story is unique. Its cover should be, too. Let's discuss your vision and create a cover that does justice to the world you've built inside. Get your free, no-obligation consultation and custom quote today.",
      points: ["A Strategic & Creative Partnership", "Designs That Convert", "A Cover You'll Be Proud Of Get Your Free Cover Design Quote"]
    },
    faqs: [
      {
        q: "Do I own the full rights to my cover design?",
        a: "Yes, completely. Once the project is finalized and delivered, you own the copyright to the final cover artwork for your book."
      },
      {
        q: "What if I don't like any of the initial concepts?",
        a: "No problem. The concept phase is for exploration. We'll take your feedback, go back to the drawing board, and present new directions until we find the perfect fit."
      },
      {
        q: "Can you design a series look for my books?",
        a: "Absolutely! We specialize in creating cohesive, branded series designs that build recognition and loyalty with your readers."
      },
      {
        q: "How long does the process take?",
        a: "Typically, a complete cover design project takes 2-3 weeks from brief to final files, depending on revision rounds."
      }
    ],
  },
  {
    slug: "book-formatting-services",
    title: "Book Formatting Services",
    shortDescription: "Ever notice when a book just feels good to read? That’s our magic. We format your pages so the reading experience is smooth, consistent, and totally professional.",
    icon: LayoutGrid,
    hero: {
      title: "The Invisible Art of a Great Reading Experience",
      highlight: "Experience",
      text: "Have you ever picked up a book where the text felt cramped, the chapters jarred, or the layout just felt… off? Great formatting is invisible, it's what makes a book feel effortless to read. We transform your manuscript into a professionally structured book, with a clean, beautiful interior that guides your reader seamlessly from the first page to the last. <br/> We handle the technical magic for both print and e-books, ensuring your story is presented perfectly on every platform and device.",
    },
    features: {
      title: "What's Included in Your Formatted Book",
      highlight: "Included",
      text: "We ensure every detail is polished for a flawless presentation:",
      points: [
        {
          t: "Print-Ready Interior Layout",
          d: "Professionally styled pages with perfect margins, fonts, and spacing that meet printer specifications."
        },
        {
          t: "Universal eBook Formatting",
          d: "We create optimized files for every major platform (ePub, Mobi, KF8) so your book looks great on any Kindle, tablet, or phone."
        },
        {
          t: "Professional Chapter Styling",
          d: "Distinctive headers, scene breaks, and consistent styling that gives your book its unique rhythm."
        },
        {
          t: "Functional Navigation",
          d: "A clickable, automatic Table of Contents for e-books and a polished one for print editions."
        },
        {
          t: "Seamless Image Integration",
          d: "Careful placement and sizing of illustrations, graphs, or photos with proper captions."
        },
        {
          t: "Platform Compliance",
          d: "We guarantee your files meet the specific technical requirements of Amazon KDP, IngramSpark, Apple Books, and others."
        }
      ]
    },
    process: {
      title: "The Formatting Process: Simple & Streamlined",
      highlight: "Streamlined",
      text: "Our process is designed to be straightforward, so you can focus on your writing.",
      steps: [
        {
          t: "Analysis & Consultation",
          d: "We start by discussing your vision and analyzing your manuscript's specific needs for your target publishing platforms."
        },
        {
          t: "Template & Layout Design",
          d: "We create a custom interior design template that establishes the look and feel of your entire book."
        },
        {
          t: "Precision Formatting",
          d: "We meticulously apply the formatting throughout your manuscript, ensuring absolute consistency in every element."
        },
        {
          t: "Rigorous Quality Check",
          d: "We test the final files across multiple devices (e-readers, tablets, phones) and proof print copies to ensure perfection."
        }
      ]
    },
    cta: {
      title: "Ready for a Book That Looks as Good as It Reads?",
      text: "Don't let awkward formatting distract readers from your brilliant story. Get a free, no-obligation quote to give your book the professional polish it deserves. It’s the final technical step to ensure your work stands tall on any shelf—physical or digital.",
      points: ["Flawless File", "Cross-Platform Compatibility", "Professional Finish"]
    },
    faqs: [
      {
        q: "What's the difference between formatting for print and for e-books?",
        a: "They are two different skills! Print formatting is about fixed, beautiful page design. E-book formatting is about creating a flexible, 'reflowable' file that can adapt to different screen sizes and reader font preferences. We expertly handle both."
      },
      {
        q: "Can you format books with complex layouts, like poetry or textbooks?",
        a: "Absolutely. We specialize in more complex projects that require special attention to imagery, sidebars, footnotes, or non-standard text flow."
      },
      {
        q: "What do you need from me to get started?",
        a: "Just your final, edited manuscript in a standard format (like Word or Google Docs) and any image files. We'll handle the rest."
      }
    ],
  },
  {
    slug: "book-publishing-services",
    title: "Book Publishing Services",
    shortDescription: "Ready to be a published author? We take your finished manuscript and make it an official, published book on well-known platforms.",
    icon: Rocket,
    hero: {
      title: "Your Bridge to \"Published Author\"",
      highlight: "Published Author",
      text: "At BookPublishingForge, we transform your manuscript into a professionally published book that reaches readers everywhere. You’ve done the hard work of writing, now let us guide you through the complexities of ISBNs, distribution, and retailer listings. From formatting to global availability, we make sure your book is polished, accessible, and ready to captivate your audience. Think of us as your trusted publishing partner, turning your story into a book the world can discover.",
    },
    features: {
      title: "What Our Full Publishing Package Includes",
      highlight: "Includes",
      text: "Our team at Book Publishing Forge, takes care of the entire back-end process, giving you a complete, ready-to-sell book:",
      points: [
        {
          t: "ISBN Assignment & Copyright",
          d: "We secure your book's unique ISBN and guide you through copyright registration basics."
        },
        {
          t: "Global Distribution Setup",
          d: "We list your book across all major retailers, including Amazon, Barnes & Noble, Apple Books, Kobo, and IngramSpark's vast library network."
        },
        {
          t: "Metadata Optimization",
          d: "We craft your book's online \"DNA\"—the title, subtitle, categories, and keywords that help the right readers find it."
        },
        {
          t: "Print & eBook Coordination",
          d: "We ensure your paperback, hardcover, and eBook editions are correctly linked across all sales platforms."
        },
        {
          t: "Publishing Platform Management",
          d: "We handle the technical uploads and requirements for KDP, IngramSpark, Draft2Digital, and others."
        },
        {
          t: "Launch Day Support",
          d: "We provide a pre-launch checklist and guidance to ensure a smooth release day."
        }
      ]
    },
    process: {
      title: "Our Smooth Publishing Process",
      highlight: "Process",
      text: "Our process is designed for clarity, you'll know exactly what's happening at each step.",
      steps: [
        {
          t: "Pre-Publishing Strategy",
          d: "We review your final files and map out the best platforms and distribution strategy for your goals."
        },
        {
          t: "Global Listing Setup",
          d: "We input all metadata, set pricing, and upload your files to the chosen retailers and distributors."
        },
        {
          t: "Quality Assurance & Proofing",
          d: "We order author proof copies and conduct final checks on the live listings before your book goes on sale."
        },
        {
          t: "Live & Available",
          d: "We confirm your book is officially published and provide you with all your sales links. Congratulations, you're a published author!"
        }
      ]
    },
    cta: {
      title: "Wish to See Your Book on the Virtual Shelf?",
      text: "Take the final step with confidence. Let's get your book into the world with a professional setup that maximizes its reach. Get your free, no-obligation publishing consultation and quote today.",
      points: ["Expert Platform Navigation", "Global Distribution", "You Keep All Rights & Control"]
    },
    faqs: [
      {
        q: "What's the difference between publishing services and just using Amazon KDP myself?",
        a: "We handle all the platforms for you, optimize your listings professionally, and manage the technical coordination between print and eBook editions. We save you hours of research and prevent costly setup errors."
      },
      {
        q: "Do I still own my book and rights?",
        a: "Absolutely, 100%. You retain complete copyright and control. We are a service provider setting up your self-published book. You are the publisher."
      },
      {
        q: "How long does it take for my book to go live everywhere?",
        a: "Once we have your final files, listings are typically live on Amazon within 72 hours. Wider global distribution through IngramSpark can take 2-4 weeks for full availability in bookstores."
      },
      {
        q: "Can I use my own ISBN?",
        a: "Yes, you can. We'll guide you on how to provide it and ensure it's applied correctly across all platforms."
      }
    ],
  },
  {
    slug: "book-marketing-services",
    title: "Book Marketing Services",
    shortDescription: "What’s the point of publishing a book if nobody knows it’s out there? Let’s get your book in front of your intended audiences through our Holistic/Strategic Marketing Approach",
    icon: Megaphone,
    hero: {
      title: "Find Your Readers and Grow Your Audience",
      highlight: "Audience",
      text: [
        "You’ve written an amazing book, now it’s time to make sure it reaches the readers who will love it. At BookPublishingForge, we bridge the gap between your story and its audience with smart, strategic marketing campaigns designed to generate buzz, boost sales, and grow your author platform.",
        "Think of us as your dedicated launch team. Whether you’re promoting a new release or revitalizing a backlist title, we craft custom marketing plans that put your book in front of the right readers, at the right time, every time."
      ]
    },
    features: {
      title: "Our Marketing Toolkit: Multi-Platform Strategies",
      highlight: "Multi-Platform",
      text: "We tailor a mix of proven tactics to fit your book, goals, and budget, ensuring your story reaches the readers who are searching for it, just like you found us today.",
      points: [
        {
          t: "Launch Strategy & Buzz Building",
          d: "We map out a pre-launch and pre-order campaign, coordinate a release-day blitz, and craft compelling messaging to make your book an event."
        },
        {
          t: "Keyword Marketing & SEO",
          d: "We research and implement high-impact keywords so your book appears in searches for your genre, topic, and audience interests."
        },
        {
          t: "Amazon & Retailer Optimization",
          d: "We optimize your book's metadata, categories, and keywords to improve visibility and search ranking on Amazon and other major platforms."
        },
        {
          t: "Targeted Advertising",
          d: "We manage and optimize paid campaigns on Meta (Facebook/Instagram) and other social channels to reach relevant readers of your genre."
        },
        {
          t: "Social Media & Content Marketing",
          d: "We create engaging content—from behind-the-scenes looks to short audio clips—to build an authentic community around your work."
        },
        {
          t: "Review & Influencer Outreach",
          d: "We secure early reviews, leverage platforms like NetGalley, and partner with influencers (Bookstagram, BookTok) to tap into engaged audiences."
        },
        {
          t: "Author Website & SEO",
          d: "We ensure your author website is a compelling hub that converts visitors into fans, with clear calls-to-action and integrated audio samples."
        }
      ]
    },
    process: {
      title: "Our Marketing Process: A Collaborative Campaign",
      highlight: "Collaborative",
      steps: [
        {
          t: "Goal-Setting Session",
          d: "We start by understanding your book, your audience, and what \"success\" means for you—sales, reviews, or building your brand."
        },
        {
          t: "Strategy & Plan Development",
          d: "We present a customized marketing plan with clear timelines, tactics, and responsibilities."
        },
        {
          t: "Execution & Community Building",
          d: "We launch the campaign, managing ads, outreach, and content while keeping you engaged and informed."
        },
        {
          t: "Analysis & Adaptation",
          d: "We monitor results, provide regular reports, and adjust strategies in real-time to maximize your book's momentum."
        }
      ]
    },
    cta: {
      title: "Eager to Turn Your Book Into a Success Story?",
      text: "Don't let your masterpiece gather digital dust. Whether you're launching a new title or want to revitalize an existing book, let's craft a marketing plan that gets results. Get your free, no-obligation marketing consultation today.",
      points: ["Data-Driven Strategy", "Creative Campaigns", "Transparent Communication"]
    },
    faqs: [
      {
        q: "When should I start marketing my book?",
        a: "The earlier, the better. A strong marketing campaign begins 3–6 months before your book's release to build audiences through a pre-launch strategic campaign."
      },
      {
        q: "Do I need an audiobook?",
        a: "It's a powerful way to expand your audience. Consider an audiobook if your ebook is selling well—especially in fiction (mystery, sci-fi, romance) or non-fiction (memoir, self-help). It introduces your work to busy professionals and listeners who prefer audio."
      },
      {
        q: "What's the most important part of book marketing?",
        a: "There is no single magic bullet. Success comes from a consistent, multi-channel approach. That said, a well-optimized book listing and a direct connection to readers (an email list) are two of the most durable assets you can build."
      },
      {
        q: "How do you measure success?",
        a: "Beyond sales, we track review volume and quality, website traffic, email list growth, and engagement rates on social posts to evaluate campaign health and adjust strategy."
      }
    ],
  },
  {
    slug: "audiobook-production",
    title: "Audiobook Production",
    shortDescription: "Imagine your story experienced through a compelling audio format. We bring your story to life through full audiobook production and distribution, pairing your work with a professional narrator whose voice matches the tone and emotion of your story.",
    icon: Headphones,
    hero: {
      title: "Let Your Readers Hear Your Story",
      highlight: "Story",
      text: [
        "Imagine your book reaching listeners during their commute, workouts, or daily routines. An audiobook is more than a reading, it’s a performance that makes your story immersive, engaging, and accessible to a wider audience.",
        "At BookPublishingForge, we transform your manuscript into a professional, studio-quality audio experience that resonates with listeners. From casting the perfect narrator to delivering the final mastered audio file, we guide you through every step, so your story can captivate the growing community of audiobook enthusiasts."
      ],
    },
    features: {
      title: "What's Included in Your Audiobook Production",
      highlight: "Included",
      text: "Book Publishing Forge handles the entire production process with professional care, delivering files ready for global distribution.",
      points: [
        {
          t: "Professional Narrator Casting",
          d: "We hand-match your book with a voice actor whose tone, pacing, and style perfectly embody your story."
        },
        {
          t: "Studio Recording",
          d: "Our narrators record in professional, sound-treated studios under the direction of an experienced audio producer."
        },
        {
          t: "Audio Editing & Mastering",
          d: "Every file is meticulously edited for pacing, clarity, and consistency, then mastered to meet ACX, Audible, Spotify, and other platform standards."
        },
        {
          t: "Proofing & Quality Assurance",
          d: "We provide a complete proof listen to catch any errors and ensure flawless audio quality from start to finish."
        },
        {
          t: "Final File Delivery",
          d: "You receive the complete, fully produced audiobook in all required formats (MP3, WAV, and platform-specific files)."
        },
        {
          t: "Distribution-Ready Setup",
          d: "We can prepare your finalized audio files and metadata for a seamless upload to your chosen distributors."
        }
      ]
    },
    process: {
      title: "The Audiobook Production Journey",
      highligh: "Journey",
      text: "Our process is collaborative and clear, designed to bring out the best in your story.",
      steps: [
        {
          t: "Sample Auditions",
          d: "We discuss the heart of your book and its ideal 'sound.' You then review custom sample readings from our curated shortlist of narrators and choose the perfect voice."
        },
        {
          t: "Preparation & Direction",
          d: "Your chosen narrator receives a detailed creative brief. We prepare the manuscript for recording, noting pronunciations, character voices, and tone shifts."
        },
        {
          t: "Recording & Initial Editing",
          d: "The narrator records in dedicated sessions. Our audio engineers edit the raw files, removing mistakes, long pauses, and mouth noises."
        },
        {
          t: "Author Review & Final Polish",
          d: "You receive the first 15 minutes for approval, followed by the completed audiobook for a final proof listen. We make any requested adjustments."
        },
        {
          t: "Mastering & Delivery",
          d: "We perform final audio mastering and deliver your complete, professional audiobook package, ready for distribution."
        }
      ]
    },
    cta: {
      title: "Ready to Bring Your Book to Life in Audio?",
      text: "Don't miss the chance to connect with millions of listeners who prefer to experience stories by ear. Let's discuss your project and get a custom quote for turning your manuscript into a captivating audiobook.",
      points: ["Professional Voice", "Studio-Quality Sound", "A Simple, Guided Process"]
    },
    faqs: [
      {
        q: "Should I narrate my own book?",
        a: "It depends. If you're a trained performer or a public figure with a recognizable voice, self-narration can be powerful. For most authors, a professional narrator brings vocal stamina, acting skill, and studio expertise that elevate the listener's experience. We can advise what works best for your project."
      },
      {
        q: "How much does it cost to produce an audiobook?",
        a: "Costs vary by book length and narrator experience. We offer production models including royalty-share and fixed-rate options. We'll provide a clear, custom quote after a consultation."
      },
      {
        q: "How long does the entire process take?",
        a: "For a standard novel, production typically takes 4–8 weeks from narrator selection to final delivery, depending on length and revision rounds."
      },
      {
        q: "Where will my audiobook be sold?",
        a: "We deliver files compatible with Audible, Amazon, Apple Books, Spotify, and Google Play. We can prepare and guide distribution or handle uploads as part of our services."
      }
    ],
  },
  {
    slug: "book-distribution",
    title: "Book Distribution",
    shortDescription: "Get your book into stores worldwide with comprehensive distribution.",
    icon: Globe,
    hero: {
      title: "Get Your Book on Shelves Around the World",
      highlight: "World",
      text: [
        "Your book is ready. Now, let's make sure readers can find it, everywhere. True publishing success means being available wherever your readers shop. At Book Publishing Forge, our distribution service ensures your book is seamlessly listed across all major online retailers, into bookstore catalogs, and available for libraries to order, giving it the global reach it deserves.",
        "Think of us as your logistics team for the publishing world. We handle the complex web of channels so you can focus on being an author."
      ],
    },
    features: {
      title: "What Our Distribution Network Delivers",
      highlight: "Distribution",
      text: "Book Publishing Forge, believes in going beyond basic Amazon listings to ensure maximum discoverability and availability.",
      points: [
        {
          t: "Global Retailer Access",
          d: "We list your book on Amazon (worldwide), Barnes & Noble, Apple Books, Kobo, Google Play, and many other online stores."
        },
        {
          t: "IngramSpark Integration",
          d: "By distributing through IngramSpark, your print book becomes available for order by independent bookstores and major chains via their primary wholesale catalog."
        },
        {
          t: "Library & Academic Distribution",
          d: "We make your book discoverable to libraries, schools, and universities through key library wholesalers like Baker & Taylor and OverDrive."
        },
        {
          t: "ISBN & Metadata Management",
          d: "We ensure your book's metadata (title, author, description, categories) is consistent and optimized across every platform to aid discovery."
        },
        {
          t: "Unified Sales Reporting",
          d: "We help you navigate and understand sales reports from different platforms or provide consolidated insights where possible."
        },
        {
          t: "Print-On-Demand Fulfillment",
          d: "When a customer orders your book, it is printed and shipped directly to them, eliminating any need for you to manage inventory or shipping."
        }
      ]
    },
    process: {
      title: "How We Widen Your Book's Reach?",
      highlight: "Widen",
      text: "Our process at Book Publishing Forge is designed to expand your book's availability systematically.",
      steps: [
        {
          t: "Distribution Channel Strategy",
          d: "We analyze your book and goals to recommend the optimal mix of retail, library, and wholesale channels."
        },
        {
          t: "Global Platform Setup",
          d: "We handle the technical setup and file uploads across the selected networks, ensuring all formatting and metadata requirements are met."
        },
        {
          t: "Quality Check",
          d: "We verify your book is live, correctly listed, and orderable on all target platforms, including bookstore wholesale listings."
        },
        {
          t: "Ongoing Availability Management",
          d: "We monitor your book's status across channels and manage any necessary updates to metadata or files to keep everything current."
        }
      ]
    },
    cta: {
      title: "All Set To Give Your Book a Global Passport?",
      text: "Don't limit your audience to a single website. Let's get your book into the worldwide network where readers, bookstores, and libraries shop. Get your free distribution consultation and quote.",
      points: ["Maximized Retail", "Reach Bookstore & Library Access", "Global Availability"]
    },
    faqs: [
      {
        q: "What's the difference between distribution and just using Amazon KDP?",
        a: "Amazon KDP gets you on Amazon. Distribution gets you everywhere else — it makes your book available for bookstores to order (they rarely order from Amazon), puts you in library systems, and lists you on other major online retailers like Apple Books and Kobo."
      },
      {
        q: "Do bookstores really order self-published books?",
        a: "Yes, if they're available through IngramSpark. Bookstores order almost exclusively through wholesale catalogs; IngramSpark is the industry standard. Having your book listed there with a competitive discount makes it possible for bookstores to order it for their shelves."
      },
      {
        q: "How do I get paid?",
        a: "Sales revenue flows from the retailer or distributor to you according to their payment schedules. Book Publishing Forge helps you understand reporting and payment timelines for each platform."
      }
    ],
  },
  {
    slug: "ebook-creation",
    title: "eBook Creation",
    shortDescription: "Kindle, iPad, phone… your book should look great everywhere. We format it once, optimize it everywhere, so readers get a flawless digital experience.",
    icon: Tablet,
    hero: {
      title: "eBook Creation: Optimized for Every Screen",
      highlight: "Screen",
      text: [
        "Your readers are on Kindles, iPads, phones, and laptops. Your book should look flawless on all of them. A poorly formatted eBook can frustrate readers with awkward text flow, broken layouts, and unclickable links. We transform your final manuscript into a professionally formatted, universally compatible eBook file that delivers a perfect reading experience—no matter the device.",
        "Think of us as your digital publishing technicians. We ensure the technology enhances your story, never gets in the way."
      ],
    },
    features: {
      title: "What Professional eBook Formatting Includes?",
      highlight: "Includes?",
      text: "We handle all the technical details to create a polished, functional digital book.",
      points: [
        {
          t: "Universal File Creation",
          d: "We produce industry-standard ePub and Amazon KF8/Mobi files compatible with Kindle, Apple Books, Kobo, Nook, Google Play, and all major e-readers."
        },
        {
          t: "Responsive, 'Reflowable' Design",
          d: "Unlike fixed print layouts, our eBooks are designed to adapt beautifully. Text, images, and chapters reflow seamlessly when a reader changes their font size, style, or device orientation."
        },
        {
          t: "Professional Interior Styling",
          d: "Clean, readable fonts, consistent chapter headings, properly styled scene breaks, and elegant formatting for front/back matter (copyright, dedication, about the author)."
        },
        {
          t: "Fully Functional Navigation",
          d: "A clickable, auto-generated Table of Contents that works perfectly on every e-reader and app."
        },
        {
          t: "Image & Graphic Optimization",
          d: "We carefully resize, embed, and caption images to ensure they display crisply without slowing down the file or breaking the text flow."
        },
        {
          t: "Hyperlink & Metadata Embedding",
          d: "We code active links (to your website, social media, or other chapters) and embed all necessary metadata (author name, ISBN, description) directly into the file."
        }
      ]
    },
    process: {
      title: "The eBook Creation Process",
      highlight: "Process",
      text: "Our process is precise and focused on delivering a technically perfect product.",
      steps: [
        {
          t: "File Assessment & Platform Review",
          d: "We analyze your manuscript and confirm the target retailers (Amazon KDP, Apple, Kobo, etc.) to ensure we meet all their specific technical requirements."
        },
        {
          t: "Coding & Formatting",
          d: "Using professional tools, we hand-code and style the eBook file, paying meticulous attention to every HTML and CSS tag for consistency."
        },
        {
          t: "Multi-Device Testing",
          d: "This is the critical step. We test the eBook file on physical Kindles, iPads, multiple phone models, and desktop reading software to catch and fix any rendering issues."
        },
        {
          t: "Final Quality Assurance & Delivery",
          d: "We perform a final proof, validate the file against industry standards, and deliver your ready-to-upload eBook package."
        }
      ]
    },
    cta: {
      title: "Let’s Launch Your Book into the Digital World",
      text: "Don't let clunky formatting be the reason a reader puts your book down. Get a professional eBook that looks great everywhere. Receive your free, no-obligation quote for eBook creation today.",
      points: ["Device Compatibility", "Retailer-Ready Files", "Polished Reading Experience"]
    },
    faqs: [
      {
        q: "What's the difference between an eBook and a PDF?",
        a: "A PDF is a fixed-layout document meant for printing or viewing on a large screen—it doesn't reflow. An ePub/KF8 eBook is a flexible, reflowable file built for e-readers. It's the required format for all major eBook stores."
      },
      {
        q: "Can you format complex eBooks with images, tables, or footnotes?",
        a: "Absolutely. We specialize in formatting non-fiction, textbooks, cookbooks, and poetry that require careful handling of images, sidebars, tables, and linked endnotes or footnotes."
      },
      {
        q: "What do you need from me to start?",
        a: "Your final, proofread manuscript in a Word document (.docx) or Google Doc, along with any image files. We'll handle the technical conversion."
      },
      {
        q: "Do I need a separate ISBN for my eBook?",
        a: "It's industry best practice and required by some retailers (like Apple Books). We strongly recommend it and can guide you through acquiring one to ensure your eBook is properly identified across all platforms."
      },
    ],
  },
];
