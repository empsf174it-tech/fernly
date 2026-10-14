/**
 * Fernly - Houseplant Care & Plant Finder Guide
 * Shared Data Module (data.js)
 * Single source of truth for plant catalog, seasonal tips, light levels, and troubleshooting rules.
 * All care values and toxicity notes are labeled general guidance.
 */

const FERNLY_DATA = {
  lastReviewed: "October 2026",
  botanicalReviewer: "Dr. Elena Vance, Horticultural Botanist",
  vetReviewer: "Dr. Sarah Lin, DVM (Veterinary Toxicology Advisor)",

  // 28 curated houseplant species with verified botanical data
  plants: [
    {
      id: "monstera-deliciosa",
      commonName: "Monstera Deliciosa",
      aka: "Swiss Cheese Plant",
      botanicalName: "Monstera deliciosa",
      family: "Araceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Thrives in bright indirect light; tolerates medium light but fenestrations develop best with ample indirect sun. Protect from scorching midday direct rays.",
      space: "floor",
      petSafe: false,
      petNote: "Toxic to cats and dogs (contains insoluble calcium oxalate crystals which cause oral irritation and swelling). Keep out of reach; contact your veterinarian or pet poison hotline if ingested.",
      difficulty: "beginner",
      size: "large",
      matureSize: "4 to 8 feet indoors; climbing habit",
      humidity: "Medium to High (50–65%)",
      tempRange: "18°C – 30°C (65°F – 85°F)",
      wateringFrequencyDays: 9,
      wateringDescription: "Allow top 2–3 inches (5–7 cm) of potting mix to dry out completely before deep watering. In winter, reduce frequency to every 14–18 days.",
      soil: "Chunky, well-draining aroid mix: 40% potting soil, 30% orchid bark, 20% perlite, 10% worm castings.",
      fertilizer: "Diluted balanced liquid houseplant fertilizer (10-10-10) once a month during spring and summer.",
      repotting: "Every 18–24 months in spring when rootbound or climbing out of its container.",
      propagation: "Stem cuttings containing at least one leaf node and aerial root in water or moist sphagnum moss.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Monstera_deliciosa2.jpg/1280px-Monstera_deliciosa2.jpg",
      altText: "Lush green Monstera deliciosa plant with deep leaf fenestrations in a ceramic pot",
      summary: "Iconic split-leaf tropical climbing vine renowned for dramatic architectural leaves and easy adaptability.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Overwatering or waterlogged soil mix", fix: "Allow top 50% of potting mix to dry before watering; inspect drainage holes." },
        { symptom: "brown-tips", cause: "Low ambient humidity or tap water mineral buildup", fix: "Group with other plants or use a room humidifier; flush soil with resting water." }
      ]
    },
    {
      id: "sansevieria-trifasciata",
      commonName: "Snake Plant",
      aka: "Mother-in-Law's Tongue",
      botanicalName: "Dracaena trifasciata",
      family: "Asparagaceae",
      category: "low-light",
      light: "low",
      lightDetail: "Extremely adaptable; flourishes from low shade to bright indirect and even mild morning direct sunlight.",
      space: "tabletop",
      petSafe: false,
      petNote: "Mild to moderate toxicity for dogs and cats due to saponins. Keep away from curious chewers; consult a vet if ingested.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "2 to 3 feet upright architectural rosettes",
      humidity: "Average to Dry (30–45%)",
      tempRange: "15°C – 28°C (59°F – 82°F)",
      wateringFrequencyDays: 18,
      wateringDescription: "Water thoroughly only when the entire soil profile has dried completely. In winter, water only once every 3–4 weeks. Never let sit in standing water.",
      soil: "Fast-draining cactus and succulent mix amended with coarse pumice or perlite.",
      fertilizer: "Half-strength succulent fertilizer twice during active summer growth only.",
      repotting: "Infrequently; prefers being slightly rootbound. Repot every 3–4 years.",
      propagation: "Leaf cuttings in soil/water or root rhizome division during repotting.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/1280px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
      altText: "Upright variegated Snake Plant leaves in modern minimalist terracotta container",
      summary: "Indestructible architectural upright succulent ideal for bedrooms, offices, and low-light corners.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Root rot from chronic overwatering", fix: "Unpot immediately, snip black mushy roots, and replant in completely dry succulent mix." },
        { symptom: "yellow-leaves", cause: "Excess moisture in cold ambient temperatures", fix: "Cease watering for 3 weeks and relocate to a warmer, draft-free spot." }
      ]
    },
    {
      id: "zamioculcas-zamiifolia",
      commonName: "ZZ Plant",
      aka: "Zanzibar Gem",
      botanicalName: "Zamioculcas zamiifolia",
      family: "Araceae",
      category: "low-light",
      light: "low",
      lightDetail: "Thrives in low, fluorescent office light to bright indirect; avoid harsh scorching sun.",
      space: "desk or shelf",
      petSafe: false,
      petNote: "Toxic to cats and dogs (calcium oxalate crystals). Keep out of reach of household pets.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "2 to 3 feet arching waxy stems",
      humidity: "Average household (35–50%)",
      tempRange: "16°C – 26°C (60°F – 79°F)",
      wateringFrequencyDays: 20,
      wateringDescription: "Stores water in underground potato-like rhizomes. Water thoroughly once per 2–3 weeks; when in doubt, wait another week.",
      soil: "Well-aerated houseplant potting soil with 30% perlite or pumice.",
      fertilizer: "Quarter-strength balanced houseplant food once every two months in summer.",
      repotting: "Every 2–3 years when underground rhizomes press against the pot walls.",
      propagation: "Rhizome division or individual leaf stem cuttings in soil.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Zamioculcas_zamiifolia_1.jpg/1280px-Zamioculcas_zamiifolia_1.jpg",
      altText: "Glossy deep green ZZ plant stems arching upward in a clean white planter",
      summary: "Glossy, drought-resilient marvel featuring fleshy rhizomes that forgive weeks of neglect.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Waterlogging around subterranean rhizomes", fix: "Allow pot to dry out 100%; ensure drainage hole is never blocked." },
        { symptom: "leggy-growth", cause: "Extreme prolonged darkness", fix: "Shift 3 feet closer to an indirect natural light source." }
      ]
    },
    {
      id: "epipremnum-aureum",
      commonName: "Golden Pothos",
      aka: "Devil's Ivy",
      botanicalName: "Epipremnum aureum",
      family: "Araceae",
      category: "trailing",
      light: "medium",
      lightDetail: "Medium to bright indirect light; tolerates lower light but loses gold-cream variegation.",
      space: "hanging",
      petSafe: false,
      petNote: "Toxic to cats and dogs if chewed (calcium oxalate). Hang high out of pets' reach.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "Trails 6 to 10 feet or climbs on a cedar stake",
      humidity: "Adaptable (40–60%)",
      tempRange: "17°C – 29°C (63°F – 85°F)",
      wateringFrequencyDays: 7,
      wateringDescription: "Water when the top 1.5 inches of soil are dry. Leaves will droop slightly when thirsty, rebounding quickly upon watering.",
      soil: "Standard potting mix amended with 20% perlite.",
      fertilizer: "Monthly organic liquid feed in spring and summer.",
      repotting: "Every 2 years in spring to refresh soil.",
      propagation: "Single-node vine cuttings root effortlessly in tap water within 10–14 days.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Money_Plant_%28Epipremnum_aureum%29_4.jpg/1280px-Money_Plant_%28Epipremnum_aureum%29_4.jpg",
      altText: "Golden Pothos trailing lush variegated heart-shaped leaves over a bookshelf",
      summary: "Fast-growing cascading vine with heart-shaped leaves splashed with warm golden marbling.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Underwatering or root-bound pot", fix: "Perform bottom-watering soak for 20 minutes; water should drain freely." },
        { symptom: "leaf-drop", cause: "Cold draft or sudden temperature drop below 12°C", fix: "Move away from leaky window frames or air-conditioning currents." }
      ]
    },
    {
      id: "chlorophytum-comosum",
      commonName: "Spider Plant",
      aka: "Ribbon Plant",
      botanicalName: "Chlorophytum comosum",
      family: "Asparagaceae",
      category: "low-light",
      light: "medium",
      lightDetail: "Bright indirect to medium light. Direct sun bleaches and scorches the arching striped foliage.",
      space: "hanging",
      petSafe: true,
      petNote: "Completely non-toxic and pet-safe for dogs and cats! Mildly hallucinogenic to felines (they love chewing it), but non-poisonous.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "1 to 2 feet wide with multiple cascading spiderettes",
      humidity: "Moderate (40–60%)",
      tempRange: "15°C – 24°C (59°F – 75°F)",
      wateringFrequencyDays: 7,
      wateringDescription: "Water when the top 1 inch of soil is dry. Sensitive to fluoride and chlorine in city water which causes tip browning.",
      soil: "Light, well-aerated potting mix with perlite.",
      fertilizer: "Diluted balanced fertilizer every 4 weeks in spring/summer.",
      repotting: "Annual repotting in early spring as thick fleshy tuber roots expand quickly.",
      propagation: "Snip miniature 'spiderette' plantlets and pot in soil or water.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1280px-Hierbabuena_0611_Revised.jpg",
      altText: "Spider Plant in a macrame hanging planter with arching variegated green and white leaves",
      summary: "Cheery, fountain-like plant producing baby runners; safe for playful pets.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "brown-tips", cause: "Fluoride, chlorine, or salt buildup in tap water", fix: "Switch to rainwater or filtered water; leach soil with plain water." },
        { symptom: "faded-leaves", cause: "Direct sunlight bleaching chloroplasts", fix: "Pull back 4 feet from south or west-facing windows." }
      ]
    },
    {
      id: "asplenium-nidus",
      commonName: "Bird's Nest Fern",
      aka: "Crispy Wave Fern",
      botanicalName: "Asplenium nidus",
      family: "Aspleniaceae",
      category: "ferns",
      light: "medium",
      lightDetail: "Filtered, dappled medium to bright indirect light. Avoid direct harsh sun which crisps leaf margins.",
      space: "tabletop",
      petSafe: true,
      petNote: "100% non-toxic and pet-safe for dogs and cats. Perfect choice for households with pets.",
      difficulty: "intermediate",
      size: "medium",
      matureSize: "2 feet tall and wide; wavy rosette fronds",
      humidity: "High (55–70%)",
      tempRange: "18°C – 26°C (65°F – 79°F)",
      wateringFrequencyDays: 6,
      wateringDescription: "Keep soil consistently lightly moist but never waterlogged. Always water into the soil around the rim, never into the central crown rosette.",
      soil: "Rich peat-based or coco coir mix blended with orchid bark and coarse perlite.",
      fertilizer: "Quarter-strength organic seaweed fertilizer monthly from spring to early autumn.",
      repotting: "Every 2 years in spring.",
      propagation: "Spores (expert level); root division of mature clusters.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Asplenium_nidus_%28Bukidnon%2C_Philippines%29_02.jpg/1280px-Asplenium_nidus_%28Bukidnon%2C_Philippines%29_02.jpg",
      altText: "Vibrant Bird's Nest Fern displaying wavy crinkled chartreuse fronds in ceramic planter",
      summary: "Architectural epiphytic fern featuring glossy undulating apple-green fronds that emerge from a central nest.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Water trapped inside the center crown causing crown rot", fix: "Water only soil edges; keep rosette dry and aerated." },
        { symptom: "brown-tips", cause: "Dry indoor air below 40% relative humidity", fix: "Add pebble tray or place near bathroom with shower steam." }
      ]
    },
    {
      id: "calathea-orbifolia",
      commonName: "Calathea Orbifolia",
      aka: "Prayer Plant Orbifolia",
      botanicalName: "Goeppertia orbifolia",
      family: "Marantaceae",
      category: "tropicals",
      light: "medium",
      lightDetail: "Medium indirect light; sensitive to bright sun which fades striking silver-green stripes.",
      space: "tabletop",
      petSafe: true,
      petNote: "Non-toxic and pet-safe for cats and dogs. Gentle, animal-safe botanical beauty.",
      difficulty: "expert",
      size: "medium",
      matureSize: "2 to 3 feet high with large rounded foliage",
      humidity: "High (60–80% mandatory)",
      tempRange: "18°C – 24°C (65°F – 75°F)",
      wateringFrequencyDays: 5,
      wateringDescription: "Maintain evenly moist potting medium with distilled, reverse osmosis, or rainwater. Highly sensitive to mineral salts.",
      soil: "Peat-rich, moisture-retentive porous mix (50% coco coir, 25% perlite, 25% worm castings).",
      fertilizer: "Diluted nitrogen-gentle fertilizer every 4 weeks in spring/summer.",
      repotting: "Springtime every 18 months.",
      propagation: "Careful root division during repotting (ensure healthy root attachments).",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Calathea_orbifolia_2.jpg/1280px-Calathea_orbifolia_2.jpg",
      altText: "Calathea Orbifolia with dramatic broad round leaves patterned with metallic silver stripes",
      summary: "Showstopping foliage queen with broad round leaves bearing elegant silvery-green brushstrokes.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "brown-tips", cause: "Fluoride, chlorine, or dry air under 55% RH", fix: "Switch exclusively to distilled water and run an ultrasonic humidifier nearby." },
        { symptom: "drooping", cause: "Dry root ball or cold draft below 16°C", fix: "Soak root ball in lukewarm distilled water; shield from cold windows." }
      ]
    },
    {
      id: "ficus-lyrata",
      commonName: "Fiddle Leaf Fig",
      aka: "Fiddle Fig",
      botanicalName: "Ficus lyrata",
      family: "Moraceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Requires abundant bright indirect light with 2–3 hours of gentle morning direct sunlight.",
      space: "floor",
      petSafe: false,
      petNote: "Toxic to cats and dogs (milky sap contains ficin and furocoumarins causing skin and stomach distress). Keep away from pets.",
      difficulty: "expert",
      size: "large",
      matureSize: "6 to 10 feet indoor tree",
      humidity: "Medium (45–60%)",
      tempRange: "18°C – 27°C (65°F – 80°F)",
      wateringFrequencyDays: 10,
      wateringDescription: "Water thoroughly when the top 2 inches of soil feel dry. Do not move or rotate abruptly; ficus dislikes environmental shifts.",
      soil: "Rich, well-draining potting soil amended with pine bark and pumice.",
      fertilizer: "High-nitrogen 3-1-2 houseplant fertilizer once monthly in spring and summer.",
      repotting: "Every 2 years in spring; top-dress with compost on mature indoor trees.",
      propagation: "Air layering or stem tip cuttings with rooting hormone.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Starr_031108-0130_Ficus_lyrata.jpg/1280px-Starr_031108-0130_Ficus_lyrata.jpg",
      altText: "Fiddle Leaf Fig tree in an interior living room with large sculptural violin-shaped leaves",
      summary: "Statement designer tree featuring large violin-shaped leaves that demand stable lighting and careful moisture balance.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "leaf-drop", cause: "Relocation shock, sudden light reduction, or cold drafts", fix: "Keep in a stable warm location with bright indirect sun; avoid moving." },
        { symptom: "brown-tips", cause: "Inconsistent watering cycle (too dry then flooded)", fix: "Establish regular watering schedule based on soil moisture depth checks." }
      ]
    },
    {
      id: "pilea-peperomioides",
      commonName: "Chinese Money Plant",
      aka: "Pancake Plant / UFO Plant",
      botanicalName: "Pilea peperomioides",
      family: "Urticaceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Generous bright indirect light. Rotate pot weekly for balanced circular stem growth.",
      space: "desk or shelf",
      petSafe: true,
      petNote: "Completely pet-safe and non-toxic to dogs and cats. Friendly companion for playful kittens and pups.",
      difficulty: "beginner",
      size: "small",
      matureSize: "12 to 16 inches dome with offshoots",
      humidity: "Average (40–50%)",
      tempRange: "15°C – 24°C (59°F – 75°F)",
      wateringFrequencyDays: 7,
      wateringDescription: "Allow soil to dry out almost completely between waterings. Leaf petioles will droop slightly to signal thirst.",
      soil: "Light organic potting soil with 30% perlite for swift drainage.",
      fertilizer: "Balanced organic fertilizer diluted to half strength monthly in summer.",
      repotting: "Annually in spring.",
      propagation: "Pups sprout from root rhizomes; snip when 2 inches tall and root in water or soil.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg/1280px-Pilea_peperomioides_Chinese_money_plant.jpg",
      altText: "Chinese Money Plant with bright circular coin-shaped leaves in a modern terracotta pot",
      summary: "Charming saucer-leafed favorite known for easily sprouting adorable plantlet pups to share.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "curling-leaves", cause: "Heat stress or low humidity near radiator", fix: "Move away from heaters and increase ambient airflow." },
        { symptom: "leggy-growth", cause: "Seeking light in a dim corner", fix: "Place within 3 feet of an east-facing window." }
      ]
    },
    {
      id: "spathiphyllum-wallisii",
      commonName: "Peace Lily",
      aka: "White Sails",
      botanicalName: "Spathiphyllum wallisii",
      family: "Araceae",
      category: "flowering",
      light: "low",
      lightDetail: "Low to medium indirect light. Bright indirect light encourages repeat white flowering spathes.",
      space: "tabletop",
      petSafe: false,
      petNote: "Toxic to cats and dogs (calcium oxalate crystals causing oral pain and vomiting). Keep elevated out of pet reach.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "1.5 to 3 feet bushy lush clump",
      humidity: "Medium to High (50–65%)",
      tempRange: "18°C – 26°C (65°F – 79°F)",
      wateringFrequencyDays: 6,
      wateringDescription: "Keep soil lightly moist. Dramatically wilts when thirsty and perks back up within hours of a thorough drink.",
      soil: "Rich moisture-holding potting mix with perlite and peat moss.",
      fertilizer: "Half-strength bloom booster fertilizer every 6 weeks spring through autumn.",
      repotting: "Every 1–2 years in spring.",
      propagation: "Clump division during repotting.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Peace_lily_-_1_-_cropped.jpg/1280px-Peace_lily_-_1_-_cropped.jpg",
      altText: "Peace Lily with dark glossy green leaves and an elegant white floral spathe",
      summary: "Expressive lush perennial featuring elegant white bloom spathes and communicative foliage.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Dehydration (classic dramatic wilting)", fix: "Water thoroughly; drainage tray should be emptied 20 mins later." },
        { symptom: "brown-tips", cause: "Tap water minerals or over-fertilization", fix: "Flush root ball with filtered water and reduce fertilizer dose." }
      ]
    },
    {
      id: "nephrolepis-exaltata",
      commonName: "Boston Fern",
      aka: "Sword Fern",
      botanicalName: "Nephrolepis exaltata",
      family: "Nephrolepidaceae",
      category: "ferns",
      light: "medium",
      lightDetail: "Gentle medium indirect sunlight. Scorches easily under direct midday rays.",
      space: "hanging",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to cats and dogs. Excellent bathroom hanging plant.",
      difficulty: "intermediate",
      size: "medium",
      matureSize: "2 to 3 feet cascading feathery fronds",
      humidity: "High (60–80%)",
      tempRange: "16°C – 24°C (60°F – 75°F)",
      wateringFrequencyDays: 5,
      wateringDescription: "Soil must remain consistently damp like a wrung-out sponge. Never let root ball dry out completely.",
      soil: "Peat-rich, spongy potting mix with perlite.",
      fertilizer: "Light balanced fertilizer once monthly in summer.",
      repotting: "Annual spring repotting.",
      propagation: "Division of rhizomatous root clumps or runners.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Boston_Fern_%282873392811%29.png",
      altText: "Full cascading Boston Fern hanging gracefully with arching delicate green fronds",
      summary: "Classic feathery green fern that brings vibrant rainforest fullness to humid rooms.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "leaf-drop", cause: "Dry air or brief drought cycle at roots", fix: "Mist regularly, place on pebble humidity tray, and never let soil dry out." },
        { symptom: "brown-tips", cause: "Low humidity or hard tap water salts", fix: "Increase humidity to 60%+." }
      ]
    },
    {
      id: "aloe-barbadensis",
      commonName: "Aloe Vera",
      aka: "Medicinal Aloe",
      botanicalName: "Aloe barbadensis miller",
      family: "Asphodelaceae",
      category: "succulents",
      light: "direct sun",
      lightDetail: "Bright direct sunlight to bright indirect. Needs 4–6 hours of direct sun for compact fleshy growth.",
      space: "desk or shelf",
      petSafe: false,
      petNote: "Toxic to cats and dogs (aloin and anthraquinones cause lethargy and diarrhea). Place out of reach of household animals.",
      difficulty: "beginner",
      size: "small",
      matureSize: "1 to 2 feet rosette of serrated fleshy spears",
      humidity: "Low (20–40%)",
      tempRange: "15°C – 28°C (59°F – 82°F)",
      wateringFrequencyDays: 16,
      wateringDescription: "Drench thoroughly then allow soil to dry out 100% before watering again. Very drought tolerant.",
      soil: "Gritty succulent and cactus mix (50% inorganic pumice/perlite, 50% peat).",
      fertilizer: "Succulent fertilizer once in late spring.",
      repotting: "Every 2–3 years in unglazed terracotta container.",
      propagation: "Separate root-bound baby 'pups' in springtime.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/1280px-Aloe_vera_flower_inset.png",
      altText: "Aloe Vera plant with thick gel-filled leaves in a natural clay pot on a sunny windowsill",
      summary: "Sun-loving desert succulent renowned for thick gel-filled leaves and ultra-low maintenance.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Overwatering leading to root collapse and mushy base", fix: "Withhold all water; repot into dry pumice-heavy gritty mix." },
        { symptom: "brown-tips", cause: "Sunburn shock if moved to harsh direct sun without acclimation", fix: "Acclimate gradually over 10 days to intense window rays." }
      ]
    },
    {
      id: "maranta-leuconeura",
      commonName: "Red Prayer Plant",
      aka: "Herringbone Plant",
      botanicalName: "Maranta leuconeura var. erythroneura",
      family: "Marantaceae",
      category: "tropicals",
      light: "medium",
      lightDetail: "Medium to bright indirect light; leaves fold upwards like praying hands in the evening.",
      space: "desk or shelf",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to dogs and cats. Marvelous safe choice for curious kittens.",
      difficulty: "intermediate",
      size: "small",
      matureSize: "8 to 12 inches spreading spreading habit",
      humidity: "High (55–70%)",
      tempRange: "18°C – 26°C (65°F – 79°F)",
      wateringFrequencyDays: 6,
      wateringDescription: "Keep soil consistently damp, never swampy. Water with room-temperature filtered water when top inch is dry.",
      soil: "Spongy, moisture-retaining potting mix with perlite and peat.",
      fertilizer: "Half-strength houseplant fertilizer every 2 weeks during active growth.",
      repotting: "Spring repotting every 1–2 years in shallow containers.",
      propagation: "Stem cuttings taken just below a node root quickly in water.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maranta_leuconeura3.jpg",
      altText: "Red Prayer plant with vivid magenta leaf veins and emerald patterns folded in prayer pose",
      summary: "Fascinating botanical acrobat whose striking red-veined leaves fold upward rhythmically at night.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "brown-tips", cause: "Low humidity or hard tap water chlorine", fix: "Use distilled water and group with other moisture-loving plants." },
        { symptom: "curling-leaves", cause: "Underwatering or extreme temperature swing", fix: "Check soil moisture depth and increase ambient humidity." }
      ]
    },
    {
      id: "ficus-elastica",
      commonName: "Rubber Tree",
      aka: "Burgundy Rubber Fig",
      botanicalName: "Ficus elastica 'Burgundy'",
      family: "Moraceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Bright indirect light with a couple of hours of soft morning sun to maintain deep dark foliage color.",
      space: "floor",
      petSafe: false,
      petNote: "Toxic to cats and dogs (milky sap is an irritant to skin and mouth). Keep elevated or in dog-free rooms.",
      difficulty: "beginner",
      size: "large",
      matureSize: "4 to 8 feet indoor vertical accent",
      humidity: "Moderate (45–55%)",
      tempRange: "18°C – 27°C (65°F – 80°F)",
      wateringFrequencyDays: 10,
      wateringDescription: "Allow top 2 inches of soil to dry out before re-watering. Wipe broad leaves with a damp cloth monthly to remove dust.",
      soil: "Well-draining rich potting soil with perlite and coarse bark.",
      fertilizer: "Balanced fertilizer every 4 weeks during spring and summer.",
      repotting: "Every 2 years in spring until desired size is achieved.",
      propagation: "Air layering or stem tip cuttings.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Ficus_elastica_leaves_02.JPG/1280px-Ficus_elastica_leaves_02.JPG",
      altText: "Burgundy Rubber Tree displaying broad glossy deep maroon leaves in minimalist studio",
      summary: "Stately architectural focal point with thick, glossy leathery foliage in moody burgundy tones.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Overwatering or container without drainage holes", fix: "Ensure container has bottom drainage; let dry more between waterings." },
        { symptom: "leaf-drop", cause: "Low light or sudden cold drafts", fix: "Move closer to bright window and shield from exterior doors." }
      ]
    },
    {
      id: "crassula-ovata",
      commonName: "Jade Plant",
      aka: "Money Tree Plant",
      botanicalName: "Crassula ovata",
      family: "Crassulaceae",
      category: "succulents",
      light: "direct sun",
      lightDetail: "Needs 4+ hours of direct sunlight daily for sturdy woody stems and reddish leaf edges.",
      space: "tabletop",
      petSafe: false,
      petNote: "Toxic to cats and dogs (causes gastric irritation and slow heart rate if ingested). Keep out of reach.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "2 to 4 feet miniature bonsai-like shrub",
      humidity: "Low to Average (30–40%)",
      tempRange: "15°C – 24°C (59°F – 75°F)",
      wateringFrequencyDays: 14,
      wateringDescription: "Water when the soil is completely dry. Leaves will become slightly soft and wrinkly when plant is thirsty.",
      soil: "Fast-draining cactus mix blended with coarse grit or perlite.",
      fertilizer: "Diluted succulent food every 2 months during spring/summer.",
      repotting: "Every 2–3 years in heavy terracotta to prevent top-heavy tipping.",
      propagation: "Stem or single leaf cuttings root reliably in dry potting soil.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Crassula_ovata_700.jpg",
      altText: "Mature Jade plant with thick woody stems and plump fleshy oval jade green leaves",
      summary: "Generational succulent heirloom that develops thick miniature tree-like trunks and plump jade leaves.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Severe underwatering or soft mushy root rot from soggy soil", fix: "Squeeze leaf gently: if firm and mushy, inspect roots for rot; if thin and wrinkled, water thoroughly." },
        { symptom: "leaf-drop", cause: "Insufficient sunlight or cold drafts below 10°C", fix: "Move directly onto a sunny south or west windowsill." }
      ]
    },
    {
      id: "senecio-rowleyanus",
      commonName: "String of Pearls",
      aka: "Bead Plant",
      botanicalName: "Curio rowleyanus",
      family: "Asteraceae",
      category: "trailing",
      light: "bright indirect",
      lightDetail: "Bright indirect light with a few hours of direct morning sun hitting the top crown of the pot.",
      space: "hanging",
      petSafe: false,
      petNote: "Toxic to pets (causes mild vomiting and lethargy if ingested). Hang high away from cats.",
      difficulty: "expert",
      size: "small",
      matureSize: "Cascades 2 to 3 feet in delicate bead strands",
      humidity: "Low (30–45%)",
      tempRange: "16°C – 26°C (60°F – 79°F)",
      wateringFrequencyDays: 14,
      wateringDescription: "Water when the small epidermal 'windows' on the pea-shaped pearls close or pearls pucker slightly.",
      soil: "Ultra-gritty succulent mix: 60% pumice/perlite and 40% organic cactus soil.",
      fertilizer: "Light succulent fertilizer twice per year.",
      repotting: "Rarely; fragile stems break easily when handled.",
      propagation: "Coil a strand over moist gritty soil; roots develop from leaf nodes.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Senecio_rowleyanus_leaves.jpg/1280px-Senecio_rowleyanus_leaves.jpg",
      altText: "String of Pearls succulent cascading green spherical pearl-like beads from a hanging ceramic pot",
      summary: "Whimsical trailing succulent with spherical beads that look like a living jewelry necklace.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "shriveled-beads", cause: "Underwatering or dead root system from crown rot", fix: "Check if soil is dry; if dry, bottom-water thoroughly. If soil is wet and pearls rot, take top cuttings." },
        { symptom: "yellow-leaves", cause: "Crown overwatering from pouring directly over top pearls", fix: "Water from bottom saucer or soil perimeter only." }
      ]
    },
    {
      id: "monstera-adansonii",
      commonName: "Monstera Adansonii",
      aka: "Monkey Mask Plant",
      botanicalName: "Monstera adansonii",
      family: "Araceae",
      category: "trailing",
      light: "bright indirect",
      lightDetail: "Bright indirect sunlight. Avoid direct midday sun which burns thin leaves.",
      space: "hanging",
      petSafe: false,
      petNote: "Toxic to cats and dogs (calcium oxalate crystals). Keep in hanging planters away from pets.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "Trails 4 to 6 feet or climbs a coco coir pole",
      humidity: "Medium to High (50–65%)",
      tempRange: "18°C – 28°C (65°F – 82°F)",
      wateringFrequencyDays: 8,
      wateringDescription: "Water when top 1.5–2 inches of soil feel dry. Enjoys consistent moisture but hates wet feet.",
      soil: "Chunky aroid mix with orchid bark, perlite, and potting soil.",
      fertilizer: "Balanced liquid feed once every 3–4 weeks during active growth.",
      repotting: "Every 1–2 years in spring.",
      propagation: "Vine cuttings with nodes root easily in water.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Monstera_adansonii_79319231.jpg/1280px-Monstera_adansonii_79319231.jpg",
      altText: "Monstera adansonii vine showing lush green leaves filled with natural hole fenestrations",
      summary: "Enchanting trailing vine featuring leaves filled with hollow lace-like oval holes.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Overwatering or rootbound pot", fix: "Let soil dry out slightly more; check for roots escaping drainage." },
        { symptom: "brown-tips", cause: "Low humidity or hard mineral tap water", fix: "Increase humidity to 50%+ and use resting water." }
      ]
    },
    {
      id: "aspidistra-elatior",
      commonName: "Cast Iron Plant",
      aka: "Bar-room Plant",
      botanicalName: "Aspidistra elatior",
      family: "Asparagaceae",
      category: "low-light",
      light: "low",
      lightDetail: "Tolerates deep shade, dim corners, and northern exposures; direct sun scorches foliage.",
      space: "floor",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to dogs and cats. Perfect for dark pet-friendly hallways.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "2 to 3 feet arching dark green leathery paddles",
      humidity: "Any household humidity (30–60%)",
      tempRange: "10°C – 27°C (50°F – 80°F)",
      wateringFrequencyDays: 14,
      wateringDescription: "Water thoroughly when top 2 inches of soil are dry. Highly drought-tolerant.",
      soil: "Standard potting mix with 20% perlite.",
      fertilizer: "Quarter-strength balanced feed twice during spring/summer.",
      repotting: "Infrequently; every 4–5 years. Does not like root disturbance.",
      propagation: "Rhizome division during repotting.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Aspidistra_elatior1.jpg/1280px-Aspidistra_elatior1.jpg",
      altText: "Dark green leathery leaves of a Cast Iron Plant in an earthy ceramic planter",
      summary: "Legendary Victorian survivor built like iron, thriving in dim light and cold drafts.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "yellow-leaves", cause: "Chronic overwatering or sitting in saucer runoff", fix: "Dump excess saucer water immediately after watering." },
        { symptom: "brown-tips", cause: "Extreme prolonged underwatering or heavy chemical fertilizer", fix: "Water thoroughly and avoid synthetic fertilizer spikes." }
      ]
    },
    {
      id: "anthurium-andraeanum",
      commonName: "Flamingo Flower",
      aka: "Painter's Palette Anthurium",
      botanicalName: "Anthurium andraeanum",
      family: "Araceae",
      category: "flowering",
      light: "bright indirect",
      lightDetail: "Needs bright indirect light to produce its glossy lacquer-like floral spathes.",
      space: "tabletop",
      petSafe: false,
      petNote: "Toxic to cats and dogs (calcium oxalate crystals causing oral pain). Keep on elevated surfaces.",
      difficulty: "intermediate",
      size: "medium",
      matureSize: "1.5 to 2.5 feet upright clumping habit",
      humidity: "High (55–70%)",
      tempRange: "18°C – 28°C (65°F – 82°F)",
      wateringFrequencyDays: 7,
      wateringDescription: "Water when top 1 inch of soil is dry. Needs airy roots that receive oxygen.",
      soil: "Airy orchid bark mix amended with perlite and peat moss.",
      fertilizer: "High-phosphorus fertilizer every 6 weeks for continuous blooms.",
      repotting: "Every 2 years in spring.",
      propagation: "Stem cuttings or root division of side shoots.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/AnthuriumAndraenum.jpg/1280px-AnthuriumAndraenum.jpg",
      altText: "Vibrant red heart-shaped waxy bloom of a Flamingo Flower Anthurium with lush foliage",
      summary: "Tropical statement plant featuring waxy, lacquer-bright heart spathes that last for months.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "no-new-growth", cause: "Insufficient light to fuel floral bud production", fix: "Move closer to a bright east window with filtered morning sun." },
        { symptom: "yellow-leaves", cause: "Overwatering or heavy dense soil suffocating aroid roots", fix: "Repot into chunky orchid bark blend." }
      ]
    },
    {
      id: "philodendron-birkin",
      commonName: "Philodendron Birkin",
      aka: "White Wave Philodendron",
      botanicalName: "Philodendron 'Birkin'",
      family: "Araceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Bright indirect light is essential; pin-striped white variegation intensifies with good light.",
      space: "desk or shelf",
      petSafe: false,
      petNote: "Toxic to dogs and cats (contains insoluble calcium oxalates). Keep away from pets.",
      difficulty: "beginner",
      size: "small",
      matureSize: "1 to 2 feet compact self-heading rosette",
      humidity: "Medium (45–60%)",
      tempRange: "18°C – 27°C (65°F – 80°F)",
      wateringFrequencyDays: 8,
      wateringDescription: "Allow top 2 inches of soil to dry out between waterings. Sensitive to soggy roots.",
      soil: "Chunky aroid mix: 40% peat, 30% bark, 30% perlite.",
      fertilizer: "Balanced houseplant fertilizer diluted to half strength monthly in summer.",
      repotting: "Every 1–2 years in spring.",
      propagation: "Stem cuttings with nodes or basal pup separation.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Philodendron_giganteum_-_Laeken_Royal_Greenhouses_-_Royal_Castle_of_Laeken_-_Brussels%2C_Belgium_-_DSC07236.jpg/1280px-Philodendron_giganteum_-_Laeken_Royal_Greenhouses_-_Royal_Castle_of_Laeken_-_Brussels%2C_Belgium_-_DSC07236.jpg",
      altText: "Philodendron Birkin showcasing sharp creamy pinstripes across glossy dark leaves",
      summary: "Compact designer philodendron sporting hypnotic creamy-white pinstripes across emerald leaves.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "faded-leaves", cause: "Low light causing leaves to revert to solid green", fix: "Increase bright indirect exposure." },
        { symptom: "brown-tips", cause: "Dry air or irregular watering cycle", fix: "Keep humidity near 50% and check soil depth weekly." }
      ]
    },
    {
      id: "strelitzia-nicolai",
      commonName: "Bird of Paradise",
      aka: "White Bird of Paradise",
      botanicalName: "Strelitzia nicolai",
      family: "Strelitziaceae",
      category: "tropicals",
      light: "direct sun",
      lightDetail: "Needs bright light to full direct sun (4–6 hours daily) to support large paddle leaves.",
      space: "floor",
      petSafe: false,
      petNote: "Mildly toxic to cats and dogs (causes nausea and vomiting). Place away from household pets.",
      difficulty: "intermediate",
      size: "large",
      matureSize: "5 to 8 feet indoors tall architectural canopy",
      humidity: "Medium to High (50–65%)",
      tempRange: "18°C – 30°C (65°F – 85°F)",
      wateringFrequencyDays: 8,
      wateringDescription: "Water thoroughly when top 2 inches of soil are dry. Drinks more in summer under bright sun.",
      soil: "Rich, well-draining loamy potting soil with perlite and compost.",
      fertilizer: "High-nitrogen balanced fertilizer every 3 weeks in spring/summer.",
      repotting: "Every 2 years into a heavy, deep container.",
      propagation: "Division of mature root clumps during spring repotting.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Strelitzia_nicolai_3.jpg",
      altText: "Stately White Bird of Paradise spreading expansive tropical paddle leaves in a bright room",
      summary: "Statuesque indoor palm-like giant boasting dramatic banana-style paddle leaves.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "leaf-splits", cause: "Normal evolutionary adaptation to let wind pass through leaves", fix: "Natural characteristic; avoid disturbing leaves during expansion." },
        { symptom: "curling-leaves", cause: "Thirst or dry air from heating vents", fix: "Give a deep soak and check room humidity." }
      ]
    },
    {
      id: "tradescantia-zebrina",
      commonName: "Inch Plant",
      aka: "Silver Inch Plant",
      botanicalName: "Tradescantia zebrina",
      family: "Commelinaceae",
      category: "trailing",
      light: "bright indirect",
      lightDetail: "Bright indirect to soft direct morning sun. Light brings out shimmering metallic purple tones.",
      space: "hanging",
      petSafe: false,
      petNote: "Mildly toxic and skin irritant to dogs and cats. Keep hung up high.",
      difficulty: "beginner",
      size: "small",
      matureSize: "Trails 2 to 3 feet quickly in dense runners",
      humidity: "Medium (40–55%)",
      tempRange: "15°C – 26°C (59°F – 79°F)",
      wateringFrequencyDays: 7,
      wateringDescription: "Water when top 1 inch of soil is dry. Keep soil moderately moist.",
      soil: "General potting mix amended with 25% perlite.",
      fertilizer: "Half-strength liquid feed every 4 weeks in summer.",
      repotting: "Annual pruning and propagation; older bases get leggy.",
      propagation: "Stem cuttings root in water within 48–72 hours.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zebrina_pendula_20060521_2_closer.jpg",
      altText: "Trailing Tradescantia zebrina with glittering purple and silver striped foliage in basket",
      summary: "Glittering metallic purple and silver trailing plant that roots virtually overnight.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "leggy-growth", cause: "Inadequate sunlight stretching internodes", fix: "Pinch back stem tips and relocate to brighter window." },
        { symptom: "faded-leaves", cause: "Dim conditions losing purple anthocyanin pigments", fix: "Give 2 hours of gentle morning sunshine." }
      ]
    },
    {
      id: "hoya-carnosa",
      commonName: "Wax Plant",
      aka: "Porcelainflower",
      botanicalName: "Hoya carnosa",
      family: "Apocynaceae",
      category: "trailing",
      light: "bright indirect",
      lightDetail: "Bright indirect light with gentle morning sun. Needs high light to produce fragrant porcelain flower clusters.",
      space: "hanging",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to cats and dogs! Safe around pets of all ages.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "Trails or climbs 4 to 6 feet on trellises",
      humidity: "Average to High (45–65%)",
      tempRange: "16°C – 28°C (60°F – 82°F)",
      wateringFrequencyDays: 12,
      wateringDescription: "Allow soil to dry almost completely. Waxy thick leaves store moisture like a semi-succulent.",
      soil: "Chunky orchid bark and perlite mix blended with cactus soil.",
      fertilizer: "High-potassium fertilizer monthly spring through autumn.",
      repotting: "Rarely; blooms best when snug and rootbound.",
      propagation: "Stem cuttings with 2 pairs of leaves rooted in water or perlite.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/NKN-2007-06-13_114250_Hoya_Carnosa_%28Yvan_Leduc_author_for_Wikipedia%29.jpg/1280px-NKN-2007-06-13_114250_Hoya_Carnosa_%28Yvan_Leduc_author_for_Wikipedia%29.jpg",
      altText: "Waxy thick emerald leaves of Hoya carnosa winding gracefully along an indoor trellis",
      summary: "Semi-succulent heirloom climbing vine featuring thick waxy leaves and fragrant star-shaped flowers.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "no-new-growth", cause: "Insufficient light or pot too large", fix: "Keep in small pot near bright east-facing window." },
        { symptom: "yellow-leaves", cause: "Dense soggy soil suffocating epiphytic roots", fix: "Repot into chunky orchid bark blend." }
      ]
    },
    {
      id: "chamaedorea-elegans",
      commonName: "Parlor Palm",
      aka: "Neanthe Bella Palm",
      botanicalName: "Chamaedorea elegans",
      family: "Arecaceae",
      category: "low-light",
      light: "low",
      lightDetail: "Thrives in low to medium indirect light. Direct sun scorches the fine palm fronds.",
      space: "tabletop",
      petSafe: true,
      petNote: "Completely non-toxic and pet-safe for dogs and cats. Perfect non-toxic indoor palm.",
      difficulty: "beginner",
      size: "medium",
      matureSize: "2 to 4 feet compact slow-growing palm",
      humidity: "Moderate (45–60%)",
      tempRange: "16°C – 24°C (60°F – 75°F)",
      wateringFrequencyDays: 8,
      wateringDescription: "Water when the top 1.5 inches of soil feel dry. Do not let soil stay waterlogged.",
      soil: "Peat-based potting soil with 25% perlite.",
      fertilizer: "Half-strength palm food 3 times per year during active growth.",
      repotting: "Every 2–3 years; roots are fragile and dislike aggressive disturbance.",
      propagation: "Seed (clump division is risky for palms).",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Chamaedorea_elegans_Mart.JPG/1280px-Chamaedorea_elegans_Mart.JPG",
      altText: "Delicate feathered fronds of a Parlor Palm in a warm neutral ceramic vessel",
      summary: "Graceful miniature Victorian palm adapted to adapt smoothly to low light and apartment life.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "brown-tips", cause: "Dry air or mineral accumulation from tap water", fix: "Mist foliage and leach pot with distilled water." },
        { symptom: "yellow-leaves", cause: "Spider mites or underwatering", fix: "Inspect leaf undersides for fine webbing; wipe with neem solution." }
      ]
    },
    {
      id: "dracaena-marginata",
      commonName: "Dragon Tree",
      aka: "Red-Edged Dracaena",
      botanicalName: "Dracaena marginata",
      family: "Asparagaceae",
      category: "tropicals",
      light: "medium",
      lightDetail: "Medium to bright indirect light. Direct scorching sun bleaches the slender sword leaves.",
      space: "floor",
      petSafe: false,
      petNote: "Toxic to cats and dogs (saponins cause vomiting and dilated pupils). Keep out of reach.",
      difficulty: "beginner",
      size: "large",
      matureSize: "4 to 6 feet sculptural cane tree",
      humidity: "Average (40–50%)",
      tempRange: "18°C – 26°C (65°F – 79°F)",
      wateringFrequencyDays: 12,
      wateringDescription: "Allow top 50% of soil to dry out before watering. Highly sensitive to fluoride in municipal tap water.",
      soil: "Loose loamy potting soil amended with coarse perlite.",
      fertilizer: "Quarter-strength balanced feed monthly in spring/summer.",
      repotting: "Every 2 years in spring.",
      propagation: "Stem cuttings or top pruning cane.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Dracaena_reflexa.JPG/1280px-Dracaena_reflexa.JPG",
      altText: "Architectural Dracaena marginata tree showing slender red-edged needle leaves on curving canes",
      summary: "Sculptural slender tree with arching sword-like leaves ribboned in fine crimson borders.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "brown-tips", cause: "Fluoride toxicity from municipal tap water", fix: "Switch to distilled or filtered water exclusively." },
        { symptom: "drooping", cause: "Overwatering and root rot at the base of the cane", fix: "Let soil dry completely; ensure pot drains freely." }
      ]
    },
    {
      id: "adiantum-raddianum",
      commonName: "Delta Maidenhair Fern",
      aka: "Maidenhair Fern",
      botanicalName: "Adiantum raddianum",
      family: "Pteridaceae",
      category: "ferns",
      light: "medium",
      lightDetail: "Gentle indirect dappled light or north-facing window. Cannot tolerate direct rays.",
      space: "tabletop",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to dogs and cats. Delicate, safe botanical addition.",
      difficulty: "expert",
      size: "small",
      matureSize: "12 to 18 inches airy cloud of fronds",
      humidity: "Very High (65–85% required)",
      tempRange: "16°C – 22°C (60°F – 72°F)",
      wateringFrequencyDays: 4,
      wateringDescription: "Soil must NEVER dry out completely. Keep constantly damp using a self-watering planter or pebble humidity tray.",
      soil: "Moisture-retentive potting mix: peat moss/coco coir and compost with perlite.",
      fertilizer: "Weak quarter-strength liquid fertilizer monthly in summer.",
      repotting: "Annual spring repotting.",
      propagation: "Rhizome clump division in spring.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Starr_030807-0143_Adiantum_raddianum.jpg/1280px-Starr_030807-0143_Adiantum_raddianum.jpg",
      altText: "Lacy delicate light green fronds of a Maidenhair fern with wire-thin dark stems",
      summary: "The ultimate humidity lover featuring wire-thin black stems and gossamer emerald leaflets.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "crispy-leaves", cause: "Dry air or allowing soil to dry out even once", fix: "Cut crisped fronds to soil level, water thoroughly, and cover with glass cloche to regenerate." },
        { symptom: "yellow-leaves", cause: "Direct sunlight burning fragile foliage", fix: "Move to a bathroom or north-facing windowsill." }
      ]
    },
    {
      id: "alocasia-amazonica",
      commonName: "Alocasia Polly",
      aka: "African Mask Plant",
      botanicalName: "Alocasia × amazonica 'Polly'",
      family: "Araceae",
      category: "tropicals",
      light: "bright indirect",
      lightDetail: "Bright indirect light; avoid harsh midday sun which scorches thick foliage.",
      space: "desk or shelf",
      petSafe: false,
      petNote: "Toxic to cats and dogs (calcium oxalate crystals). Keep strictly away from curious pets.",
      difficulty: "expert",
      size: "small",
      matureSize: "1.5 to 2 feet shield-shaped leaves",
      humidity: "High (60–75%)",
      tempRange: "18°C – 28°C (65°F – 82°F)",
      wateringFrequencyDays: 6,
      wateringDescription: "Keep soil lightly moist during spring/summer; reduce in winter dormancy. Never let sit in waterlogged soil.",
      soil: "Chunky well-aerated aroid blend with orchid bark and pumice.",
      fertilizer: "Balanced organic feed every 3 weeks in summer.",
      repotting: "Every 2 years in spring.",
      propagation: "Separating corms/tubers during spring repot.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Alocasia_x_amazonica_a1.jpg",
      altText: "Striking Alocasia Polly with deep emerald scalloped shield leaves and contrasting white veins",
      summary: "Striking sculptural jewel featuring scalloped arrow leaves with contrasting chalk-white veins.",
      featuredBeginner: false,
      commonProblems: [
        { symptom: "leaf-drop", cause: "Winter dormancy reaction to cooler temperatures and shorter daylight", fix: "Do not discard rhizome; keep slightly dry in warm spot until spring sprouts." },
        { symptom: "spider-mites", cause: "Warm, dry indoor air", fix: "Wipe leaves with castile soap spray and boost humidity." }
      ]
    },
    {
      id: "haworthia-fasciata",
      commonName: "Zebra Haworthia",
      aka: "Zebra Plant",
      botanicalName: "Haworthiopsis fasciata",
      family: "Asphodelaceae",
      category: "succulents",
      light: "bright indirect",
      lightDetail: "Bright indirect light to soft morning sun. Tolerates lower light better than most desert succulents.",
      space: "desk or shelf",
      petSafe: true,
      petNote: "100% pet-safe and non-toxic to dogs and cats. Wonderful safe desk plant.",
      difficulty: "beginner",
      size: "small",
      matureSize: "5 to 8 inches compact rosette",
      humidity: "Low (30–45%)",
      tempRange: "15°C – 26°C (59°F – 79°F)",
      wateringFrequencyDays: 16,
      wateringDescription: "Drench thoroughly then allow soil to dry completely. In winter, water once a month.",
      soil: "Gritty succulent and pumice mix.",
      fertilizer: "Diluted cactus fertilizer twice a year in summer.",
      repotting: "Every 3 years in shallow clay pot.",
      propagation: "Separate side offsets or pups.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/1_Haworthia_fasciata_-MBB_Kabeljouws_River.jpg",
      altText: "Zebra Haworthia succulent showing raised white horizontal stripes across dark green pointed leaves",
      summary: "Pint-sized, resilient succulent featuring raised chalk-white zebra stripes on dark pointed spears.",
      featuredBeginner: true,
      commonProblems: [
        { symptom: "drooping", cause: "Mushy base from overwatering", fix: "Stop watering; check root system for black decay." },
        { symptom: "red-leaves", cause: "Stress coloration from intense direct sunlight", fix: "Shift 2 feet back into filtered ambient light." }
      ]
    }
  ],

  // Plant Categories
  categories: [
    {
      id: "tropicals",
      name: "Tropical Giants",
      count: "7 species",
      description: "Bold architectural leaves, aroid climbers, and jungle statement centerpieces.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Monstera_deliciosa_DSC02605.jpg/1280px-Monstera_deliciosa_DSC02605.jpg",
      filterUrl: "plant-finder.html?category=tropicals"
    },
    {
      id: "succulents",
      name: "Succulents & Cacti",
      count: "4 species",
      description: "Drought-hardy fleshy wonders, sunny windowsill favorites, and low-maintenance beauties.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Echeveria_A7CR_02866-90_zsp.jpg/1280px-Echeveria_A7CR_02866-90_zsp.jpg",
      filterUrl: "plant-finder.html?category=succulents"
    },
    {
      id: "low-light",
      name: "Low-Light Champions",
      count: "5 species",
      description: "Resilient shade-tolerant survivors ideal for offices, north windows, and dim apartments.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Aglaonema_costatum_001.JPG/1280px-Aglaonema_costatum_001.JPG",
      filterUrl: "plant-finder.html?light=low"
    },
    {
      id: "trailing",
      name: "Trailing & Vines",
      count: "5 species",
      description: "Cascading vines for high shelves, macrame plant hangers, and lush green curtain walls.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Starr-070906-8791-Tradescantia_multiflora-hanging_basket-Kula_Ace_Hardware_and_Nursery-Maui_%2824892015735%29.jpg/1280px-Starr-070906-8791-Tradescantia_multiflora-hanging_basket-Kula_Ace_Hardware_and_Nursery-Maui_%2824892015735%29.jpg",
      filterUrl: "plant-finder.html?category=trailing"
    },
    {
      id: "ferns",
      name: "Ferns & Mosses",
      count: "3 species",
      description: "Feathery humidity-loving wonders that thrive in bathrooms and steamy plant corners.",
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Polypodiopsida_2.jpg/1280px-Polypodiopsida_2.jpg",
      filterUrl: "plant-finder.html?category=ferns"
    },
    {
      id: "flowering",
      name: "Flowering Beauties",
      count: "4 species",
      description: "Eye-catching blooms, colorful spathes, and gentle seasonal botanical displays.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Saintpaulia_%27Trojka_%27_01.jpg",
      filterUrl: "plant-finder.html?category=flowering"
    }
  ],

  // Seasonal Care Tips
  seasonalTips: {
    spring: {
      title: "Spring: Awakening & Growth Acceleration",
      period: "March – May (Northern Hemisphere)",
      headline: "As daylight lengthens, root respiration and leaf bud production surge.",
      points: [
        { title: "Watering Transition", text: "Soil dries noticeably faster as plants wake. Increase check frequency from bi-weekly to weekly." },
        { title: "Fertilizer Resumption", text: "Begin feeding with half-strength balanced liquid fertilizer every 3–4 weeks to fuel fresh shoots." },
        { title: "Repotting Window", text: "Spring is the ideal repotting season. Move root-bound plants to pots 1–2 inches wider before summer." },
        { title: "Pest Inspection", text: "Scout new tender leaf tips for emerging aphids, fungus gnats, or spider mites waking up with warmer days." }
      ]
    },
    summer: {
      title: "Summer: Peak Transpiration & Sun Shielding",
      period: "June – August (Northern Hemisphere)",
      headline: "Maximum solar energy means rapid thirst and potential midday scorch hazards.",
      points: [
        { title: "Monitor Sun Angle", text: "Midday sun shifts higher. Move sensitive tropicals 2–3 feet back from unshaded south and west windows." },
        { title: "Deep Hydration Checks", text: "Pots dry out rapidly. Check soil depth every 4–6 days; bottom-water thoroughly if soil shrinks from pot rims." },
        { title: "Airflow & AC Vents", text: "Ensure houseplants are not positioned directly in the freezing downdraft of air conditioners." },
        { title: "Regular Foliage Dusting", text: "Wipe broad leaves with a damp cloth every 2 weeks so dust doesn't block crucial photosynthesis." }
      ]
    },
    autumn: {
      title: "Autumn: Daylength Decline & Tapering",
      period: "September – November (Northern Hemisphere)",
      headline: "Declining day length signals plants to slow cell division and store carbohydrate reserves.",
      points: [
        { title: "Taper Watering Intervals", text: "Soil takes twice as long to dry out. Lengthen intervals between waterings by 3–6 days." },
        { title: "Halt Fertilizer Dosing", text: "Cease fertilizing by mid-autumn to avoid pushing tender shoots that will weaken in low winter light." },
        { title: "Maximize Natural Sun", text: "Move plants closer to windows to soak up milder, lower autumn sun before winter sets in." },
        { title: "Prep Indoor Spaces", text: "Bring summered patio plants indoors after checking thoroughly for hitchhiking pests under leaves." }
      ]
    },
    winter: {
      title: "Winter: Semi-Dormancy & Dry Heated Air",
      period: "December – February (Northern Hemisphere)",
      headline: "Low sunlight and central heating radiators create the toughest survival challenge.",
      points: [
        { title: "Slash Watering Drastically", text: "Overwatering is the #1 winter killer. Wait until soil is 75% dry before watering. Never let pots sit in cold run-off." },
        { title: "Fight Radiator Dryness", text: "Central heating drops relative humidity below 30%. Group plants on pebble trays or run a cool-mist humidifier." },
        { title: "Zero Fertilizer", text: "Do not fertilize dormant houseplants; salts accumulate in slow roots and burn delicate hair rootlets." },
        { title: "Warm Water Only", text: "Water with room-temperature or lukewarm water to prevent shocking roots with icy tap pipes." }
      ]
    }
  },

  // Interactive Light Guide Data
  lightGuideData: {
    north: {
      sill: {
        category: "Medium to Bright Indirect",
        description: "Consistent, cool, gentle indirect light all day long. Zero risk of leaf burn.",
        footCandles: "250 – 500 fc",
        recommended: ["Bird's Nest Fern", "Snake Plant", "ZZ Plant", "Peace Lily", "Parlor Palm"]
      },
      medium: {
        category: "Medium Ambient Light",
        description: "Soft ambient daylight. Sufficient for tolerant shade species.",
        footCandles: "100 – 250 fc",
        recommended: ["Cast Iron Plant", "ZZ Plant", "Golden Pothos", "Snake Plant"]
      },
      far: {
        category: "Low Ambient Light",
        description: "Dim zone; supplemental grow lights recommended for long-term health.",
        footCandles: "50 – 100 fc",
        recommended: ["Cast Iron Plant", "ZZ Plant"]
      }
    },
    south: {
      sill: {
        category: "Direct Sunlight",
        description: "Intense, warm, high-energy direct sunshine for 5–7+ hours. Ideal for desert succulents.",
        footCandles: "1,500 – 5,000+ fc",
        recommended: ["Aloe Vera", "Jade Plant", "Bird of Paradise", "Zebra Haworthia"]
      },
      medium: {
        category: "Bright Indirect Light",
        description: "Prime real estate! Ample bright light just outside the scorching direct beam.",
        footCandles: "500 – 1,000 fc",
        recommended: ["Monstera Deliciosa", "Fiddle Leaf Fig", "Rubber Tree", "Pilea Peperomioides", "Philodendron Birkin"]
      },
      far: {
        category: "Medium Indirect Light",
        description: "Pleasant diffused room light that supports healthy tropical foliage.",
        footCandles: "200 – 400 fc",
        recommended: ["Golden Pothos", "Calathea Orbifolia", "Boston Fern", "Spider Plant"]
      }
    },
    east: {
      sill: {
        category: "Gentle Morning Direct + Bright Indirect",
        description: "Soft, gentle morning direct sun that warms without scorching, followed by bright indirect.",
        footCandles: "800 – 1,800 fc",
        recommended: ["Hoya Carnosa", "Monstera Deliciosa", "Flamingo Flower", "Spider Plant", "Pilea"]
      },
      medium: {
        category: "Medium Indirect Light",
        description: "Pleasantly illuminated ambient zone suitable for a wide array of houseplants.",
        footCandles: "250 – 500 fc",
        recommended: ["Golden Pothos", "Bird's Nest Fern", "Peace Lily", "Red Prayer Plant"]
      },
      far: {
        category: "Low Ambient Light",
        description: "Dim perimeter where growth slows down significantly.",
        footCandles: "75 – 150 fc",
        recommended: ["Cast Iron Plant", "ZZ Plant", "Snake Plant"]
      }
    },
    west: {
      sill: {
        category: "Intense Afternoon Direct Sunlight",
        description: "High-heat afternoon sun. Great for succulents, but can scorch fragile tropical fronds.",
        footCandles: "1,200 – 4,000 fc",
        recommended: ["Aloe Vera", "Jade Plant", "Bird of Paradise"]
      },
      medium: {
        category: "Bright Indirect Light",
        description: "Generous warm afternoon glow sheltered from the intense thermal window pane.",
        footCandles: "450 – 900 fc",
        recommended: ["Ficus Elastica", "Monstera Deliciosa", "Dracaena Marginata", "Pothos"]
      },
      far: {
        category: "Medium Ambient Light",
        description: "Diffused warm sunset illumination.",
        footCandles: "150 – 300 fc",
        recommended: ["Spider Plant", "ZZ Plant", "Cast Iron Plant"]
      }
    }
  },

  // Troubleshooter Diagnostic Rules
  troubleshooterSymptoms: [
    { id: "yellow-leaves", label: "Yellow Leaves" },
    { id: "brown-tips", label: "Brown Leaf Tips & Crispy Edges" },
    { id: "drooping", label: "Drooping & Wilting Foliage" },
    { id: "leggy-growth", label: "Leggy, Stretched Growth" },
    { id: "leaf-drop", label: "Sudden Leaf Drop" },
    { id: "pests-residue", label: "Pests, Webbing, or Sticky Residue" },
    { id: "white-fuzz", label: "White Powdery Fuzz or Surface Mold" },
    { id: "root-rot-smell", label: "Foul Odor or Rotten Soil Smell" },
    { id: "no-new-growth", label: "Stunted / No New Growth" }
  ],

  // Diagnostic Matrix
  diagnosticRules: {
    "yellow-leaves": {
      symptomTitle: "Yellowing Leaves (Chlorosis)",
      primaryLikelyCause: "Overwatering & Root Hypoxia",
      confidence: "High (approx. 75% of indoor cases)",
      summary: "When potting soil stays saturated, root hair cells suffocate from lack of oxygen, preventing the plant from transporting vital nutrients upward.",
      contributingFactors: [
        "Pot lacks adequate drainage holes or water is standing in outer saucer",
        "Potting mix is too dense and peat-heavy without aeration aggregates",
        "Recent temperature drops slowing water transpiration"
      ],
      fixes: [
        "Check bottom soil with a wooden skewer or digital moisture meter. If damp, withhold watering until top 50% dries.",
        "Empty decorative cachepot or saucer within 15 minutes of watering.",
        "Ensure plant receives adequate bright indirect light so photosynthesis consumes available soil moisture."
      ],
      whenToRepot: "If yellowing spreads to multiple stems and soil smells sour or marshy, gently unpot the plant to inspect roots. Trim black or mushy decayed roots and repot into fresh, chunky aroid/perlite mix.",
      whenToSeekHelp: "If yellowing continues despite dry soil, bring a leaf sample to a local university extension clinic to rule out viral mosaic pathogens."
    },
    "brown-tips": {
      symptomTitle: "Brown Leaf Tips & Crispy Edges",
      primaryLikelyCause: "Low Ambient Humidity & Tap Mineral Salts",
      confidence: "High (approx. 70% of indoor cases)",
      summary: "Municipal tap water containing chlorine, chloramines, or fluoride, combined with heated dry apartment air below 40% RH, causes moisture loss at the leaf extremities.",
      contributingFactors: [
        "Winter radiator or heat pump running nearby",
        "Chemical fertilizers applied to dry soil causing salt burn",
        "Fluoridated or softened tap water"
      ],
      fixes: [
        "Switch to distilled, reverse osmosis, or rainwater for sensitive species (Calatheas, Spider Plants, Dracaenas).",
        "Group plants closely together on a pebble humidity tray or run an ultrasonic humidifier maintaining 50%+ RH.",
        "Thoroughly flush soil once every 3 months with plain water to wash out accumulated fertilizer salts."
      ],
      whenToRepot: "Repot if heavy white crusty salt crystals coat the exterior or rim of terracotta pots and soil has compacted into a dense block.",
      whenToSeekHelp: "If brown spots are surrounded by a distinct yellow chlorotic halo, it may indicate a bacterial or fungal leaf spot infection."
    },
    "drooping": {
      symptomTitle: "Drooping & Wilting Foliage",
      primaryLikelyCause: "Underwatering or Root Rot Collapse",
      confidence: "Medium (Requires Soil Moisture Check)",
      summary: "Wilting is a loss of turgor pressure. Paradoxically, both severe underwatering AND root rot from chronic overwatering cause drooping because damaged roots cannot pump water.",
      contributingFactors: [
        "Severe dry pocket in root ball where water channels down the sides without absorbing",
        "Root rot where root hairs have died from excess water",
        "Heat stress or direct window exposure"
      ],
      fixes: [
        "Perform the finger test: if soil is bone-dry and pulling away from pot rim, perform a 25-minute bottom-soak in lukewarm water.",
        "If soil is wet and soggy, roots are rotting. Stop watering immediately, place in warm indirect light, and let dry out.",
        "Move plant away from hot radiator blasts or sunny window panes."
      ],
      whenToRepot: "If drooping persists while soil remains wet, remove plant from pot immediately, snip all mushy brown roots, spray remaining roots with diluted 3% hydrogen peroxide, and repot in dry well-aerated medium.",
      whenToSeekHelp: "If plant does not perk up 24 hours after a bottom-watering soak, roots may have suffered irreversible dry rot."
    },
    "leggy-growth": {
      symptomTitle: "Leggy, Stretched Growth (Etiolation)",
      primaryLikelyCause: "Insufficient Light Levels",
      confidence: "High (approx. 90% of cases)",
      summary: "Plants produce excess gibberellin hormone when light is dim, causing stems to stretch with long gaps between leaves as they strain toward any light source.",
      contributingFactors: [
        "Plant placed more than 6 feet away from the nearest window",
        "Dirty window glass or dust buildup on leaves blocking photon absorption",
        "Winter solstice seasonal decline in day length"
      ],
      fixes: [
        "Relocate plant 3 to 5 feet closer to an east or south-facing window with filtered light.",
        "Supplement natural light with a dedicated full-spectrum LED grow bulb (15–30W) set on a 12-hour timer.",
        "Prune stretched, weak leggy stems with sanitized shears to encourage bushy lateral branching."
      ],
      whenToRepot: "Repotting will not fix etiolation; wait until healthy compact growth resumes under improved lighting before repotting.",
      whenToSeekHelp: "If stems become so frail they cannot support their own weight, stake gently with bamboo skewers while adjusting illumination."
    },
    "leaf-drop": {
      symptomTitle: "Sudden Leaf Drop",
      primaryLikelyCause: "Environmental Shock or Temperature Shift",
      confidence: "High (approx. 70% of cases)",
      summary: "Houseplants acclimatize to specific light, humidity, and airflow levels. Sudden relocation or exposure to cold drafts triggers an ethylene spike that drops leaves.",
      contributingFactors: [
        "Recently purchased or moved across rooms",
        "Cold drafts from exterior entryways or drafty window panes",
        "Rapid shift from high nursery humidity to dry central heating"
      ],
      fixes: [
        "Choose a permanent stable location with steady temperature (18°C–24°C / 65°F–75°F) and do not move the plant.",
        "Seal drafty windows and keep away from heat pumps and AC units.",
        "Keep watering consistent without overcompensating for dropped leaves."
      ],
      whenToRepot: "Do NOT repot a plant in shock. Repotting adds root disturbance to existing stress. Allow plant 4–6 weeks to stabilize.",
      whenToSeekHelp: "If leaf drop is accompanied by black lesions along the main stem, inspect for systemic vascular wilt."
    },
    "pests-residue": {
      symptomTitle: "Pests, Webbing, or Sticky Residue",
      primaryLikelyCause: "Sap-Sucking Insect Infestation (Mites, Scale, Mealybugs)",
      confidence: "High (approx. 85% of cases)",
      summary: "Insects pierce plant tissue to feed on sap. They excrete sticky sweet 'honeydew' which can attract sooty black mold.",
      contributingFactors: [
        "Dry warm indoor air favoring spider mite proliferation",
        "New unquarantined plant brought home from a nursery",
        "Low natural predators in indoor environment"
      ],
      fixes: [
        "Isolate plant immediately in a separate room away from other houseplants.",
        "Take to shower and rinse foliage thoroughly with lukewarm water to physically wash away pests.",
        "Treat all stems and leaf undersides with cold-pressed neem oil or horticultural insecticidal soap once weekly for 3 consecutive weeks."
      ],
      whenToRepot: "If fungus gnat larvae or root mealybugs infest the soil, replace the top 2 inches of potting mix or repot into clean sterile substrate.",
      whenToSeekHelp: "If white fluffy mealybugs or hard brown scales persist after 4 rounds of soap spray, consider biological beneficial predators like lacewing larvae."
    },
    "white-fuzz": {
      symptomTitle: "White Powdery Fuzz or Surface Mold",
      primaryLikelyCause: "Harmless Soil Saprophytes or Powdery Mildew",
      confidence: "High (approx. 80% of cases)",
      summary: "White fuzz on the top of potting soil is typically harmless saprophytic fungi breaking down organic matter in moist, stagnant conditions. White spots on leaves may be powdery mildew.",
      contributingFactors: [
        "Stagnant indoor air with zero air circulation",
        "Soil surface kept continuously wet",
        "High organic matter without adequate drainage aggregate"
      ],
      fixes: [
        "Scrape off the top 0.5 inch of white fuzzy soil and sprinkle ground cinnamon (natural antifungal) over the surface.",
        "Improve room air circulation with a small oscillating desk fan on low speed.",
        "Allow the top 2 inches of potting mix to dry out before watering again."
      ],
      whenToRepot: "If the mold smells foul and penetrates deep into the root ball, repot into a fresh, well-aerated potting mix containing pumice and pine bark.",
      whenToSeekHelp: "If white powdery patches rapidly spread across the upper surfaces of leaves, treat with copper fungicide spray."
    },
    "root-rot-smell": {
      symptomTitle: "Foul Odor or Rotten Soil Smell",
      primaryLikelyCause: "Advanced Anaerobic Root Rot (Pythium / Phytophthora)",
      confidence: "Very High (approx. 90% of cases)",
      summary: "Standing water creates an oxygen-free (anaerobic) zone where pathogenic water molds decompose root systems, releasing foul marshy odors.",
      contributingFactors: [
        "Container with no drainage hole",
        "Saucer never emptied after watering",
        "Plant left in standing water for days"
      ],
      fixes: [
        "Unpot the plant immediately onto cardboard. Wash old contaminated soil away from the roots under gentle lukewarm tap water.",
        "Prune away all black, brown, slimy, or hollow roots with sterilized shears until only firm white/tan healthy roots remain.",
        "Dip remaining root system in a 1:4 dilution of 3% hydrogen peroxide and clean water."
      ],
      whenToRepot: "Immediate mandatory repotting into a sterile container with multiple drainage holes and a fresh chunky, free-draining potting blend.",
      whenToSeekHelp: "If 80% or more of the root ball is rotted away, consider taking healthy top stem cuttings to propagate a fresh plant instead."
    },
    "no-new-growth": {
      symptomTitle: "Stunted / No New Growth",
      primaryLikelyCause: "Seasonal Dormancy, Low Light, or Root-Bound Pot",
      confidence: "Medium (depends on season)",
      summary: "Houseplants slow down dramatically during autumn and winter. During the warm growing season, lack of growth indicates root restriction or inadequate light/nutrition.",
      contributingFactors: [
        "Natural seasonal rest period (October through February)",
        "Roots have filled the pot, coiled tightly, and depleted available nutrients",
        "Light levels below threshold required for new cellular synthesis"
      ],
      fixes: [
        "If winter, celebrate: dormant rest is natural and healthy. Do not overwater or force fertilizer.",
        "If spring or summer, move closer to indirect light and verify roots are not bound.",
        "Feed once monthly in spring with balanced organic houseplant food."
      ],
      whenToRepot: "Check bottom drainage holes: if thick roots are circling tightly or pushing the plant up out of the pot, repot into a container 2 inches larger in diameter.",
      whenToSeekHelp: "If plant has produced zero new leaves in 12 months despite ideal light and warmth, check root health."
    }
  },

  // Transparent Watering Multipliers (used in Watering Schedule Builder)
  wateringFactors: {
    potMaterial: {
      terracotta: { multiplier: 0.75, note: "Porous unglazed clay wicks moisture and breathes through walls (dries ~25% faster)." },
      plastic: { multiplier: 1.0, note: "Non-porous baseline; retains moisture evenly." },
      ceramic: { multiplier: 1.15, note: "Glazed ceramic locks in moisture; dries ~15% slower than baseline." }
    },
    potSize: {
      small: { multiplier: 0.8, note: "Small volume (4–6 in) dries rapidly due to high surface-to-volume ratio." },
      medium: { multiplier: 1.0, note: "Standard container (7–10 in) baseline." },
      large: { multiplier: 1.3, note: "Deep soil mass (11–16 in) holds reservoir moisture for longer intervals." }
    },
    lightLevel: {
      low: { multiplier: 1.4, note: "Low light slows photosynthesis; water consumption drops drastically." },
      medium: { multiplier: 1.1, note: "Moderate ambient daylight." },
      bright: { multiplier: 1.0, note: "Bright indirect baseline for active growth." },
      direct: { multiplier: 0.8, note: "High thermal energy accelerates soil surface evaporation." }
    },
    humidity: {
      dry: { multiplier: 0.85, note: "Dry air (<35% RH) increases plant transpiration and surface evaporation." },
      average: { multiplier: 1.0, note: "Standard indoor humidity (40–50% RH) baseline." },
      humid: { multiplier: 1.25, note: "Humid air (60%+ RH) slows transpiration; soil stays damp longer." }
    },
    season: {
      spring: { multiplier: 0.9, note: "Active awakening and rapid cellular division." },
      summer: { multiplier: 0.8, note: "Peak growth and maximum transpiration rates." },
      autumn: { multiplier: 1.15, note: "Slowing day lengths and cooling indoor temperatures." },
      winter: { multiplier: 1.45, note: "Semi-dormancy; cellular uptake decreases dramatically." }
    }
  }
};

// Export to window for vanilla browser script usage
if (typeof window !== "undefined") {
  window.FERNLY_DATA = FERNLY_DATA;
}
