import {
  FlaskConical,
  Atom,
  Beaker,
  Gem,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export type ExperimentCategory =
  | "volumetric"
  | "functional-group"
  | "salt-analysis";

export interface Observation {
  experiment: string;
  observation: string;
  inference: string;
}

export interface Experiment {
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  category: ExperimentCategory;
  categoryLabel: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  tagline: string;
  summary: string;
  aim?: string;
  apparatus?: string[];
  chemicals?: string[];
  theory?: string[];
  ionicEquation?: string;
  balancedEquation?: string;
  indicator?: string;
  endpoint?: string;
  observationsTable?: {
    headers: string[];
    rows: string[][];
    concordantVolume?: string;
  };
  calculations?: string[];
  result?: string;
  precautions?: string[];
  physicalProperties?: { colour: string; state: string; odour: string };
  observationRows?: Observation[];
  conclusion?: string;
  basicRadical?: string;
  acidRadical?: string;
  compoundName?: string;
}

export const experiments: Experiment[] = [
  {
    slug: "titration",
    number: 1,
    title: "Titration of KMnO\u2084 with Mohr Salt",
    shortTitle: "KMnO\u2084 Titration",
    category: "volumetric",
    categoryLabel: "Volumetric Analysis",
    icon: Droplets,
    accent: "from-emerald-500 to-teal-600",
    tagline:
      "Determine the strength of an unknown KMnO\u2084 solution against standard M/20 Mohr salt.",
    summary:
      "A redox titration in which potassium permanganate acts as a self-indicator. Ferrous ions from Mohr salt (ferrous ammonium sulphate) are oxidised to ferric ions while the purple permanganate is reduced to colourless Mn\u00b2\u207a in acidic medium.",
    aim: "To determine the strength of the supplied KMnO\u2084 solution by titrating it against the standard M/20 Mohr salt solution.",
    apparatus: [
      "Conical flask (250 ml)",
      "Beaker",
      "Burette (50 ml)",
      "Pipette (20 ml)",
      "Test tube",
      "Funnel",
      "Burette stand",
      "Glazed tile",
    ],
    chemicals: [
      "Ferrous Ammonium Sulphate (Mohr salt) solution",
      "KMnO\u2084 solution",
      "2 M H\u2082SO\u2084",
      "Distilled water",
    ],
    theory: [
      "Ferrous (Fe\u00b2\u207a) ions present in the ferrous ammonium sulphate solution are readily oxidised by permanganate ions in acidic medium. As the reaction proceeds, MnO\u2084\u207b gets reduced to Mn\u00b2\u207a and the pink colour disappears; Fe\u00b2\u207a gets oxidised to Fe\u00b3\u207a.",
      "Because KMnO\u2084 itself imparts a distinct pink colour in its unreduced form, it acts as a self-indicator. The endpoint is reached when a single drop of KMnO\u2084 in excess tints the solution a stable light pink.",
    ],
    balancedEquation:
      "2KMnO\u2084 + 8H\u2082SO\u2084 + 10FeSO\u2084\u00b7(NH\u2084)\u2082SO\u2084\u00b76H\u2082O \u2192 K\u2082SO\u2084 + 2MnSO\u2084 + 5Fe\u2082(SO\u2084)\u2083 + 10(NH\u2084)\u2082SO\u2084 + 68H\u2082O",
    ionicEquation: "MnO\u2084\u207b + 5Fe\u00b2\u207a + 8H\u207a \u2192 Mn\u00b2\u207a + 4H\u2082O + 5Fe\u00b3\u207a",
    indicator: "KMnO\u2084 \u2014 a self indicator",
    endpoint: "Colourless \u2192 stable light pink",
    observationsTable: {
      headers: [
        "Sl. No.",
        "Volume of Mohr Salt",
        "Initial Burette Reading",
        "Final Burette Reading",
        "Volume of KMnO\u2084 (ml)",
      ],
      rows: [
        ["1", "20 ml", "0", "19.7", "19.7 ml"],
        ["2", "20 ml", "0", "19.6", "19.6 ml"],
        ["3", "20 ml", "0", "19.6", "19.6 ml"],
      ],
      concordantVolume: "19.6 ml",
    },
    calculations: [
      "5 moles of Mohr salt are completely oxidised by 1 mole of KMnO\u2084.",
      "Using the molarity equation: (M\u2081 \u00d7 V\u2081) / (M\u2082 \u00d7 V\u2082) = n\u2081 / n\u2082",
      "Strength of unknown KMnO\u2084 = M\u2081 ; Strength of Mohr salt = M\u2082 = 1/20 M",
      "Volume of unknown KMnO\u2084 = V\u2081 = 19.6 ml ; Volume of Mohr salt = V\u2082 = 20 ml",
      "Moles of KMnO\u2084 = n\u2081 = 1 ; Moles of Mohr salt = n\u2082 = 5",
      "M\u2081 = (1 \u00d7 20 \u00d7 1) / (5 \u00d7 19.6 \u00d7 20)",
      "M\u2081 = 1/98 M = 0.0102 M",
      "Strength (g/L) = Molarity \u00d7 Molecular mass = 0.0102 \u00d7 158 = 1.16 g/L",
    ],
    result:
      "Molarity of unknown KMnO\u2084 = 0.0102 M; Strength of KMnO\u2084 = 1.16 g/L",
    precautions: [
      "Always rinse the burette and the pipette with the solutions to be taken in them.",
      "Remove the air gaps from the burette before starting the titration.",
      "Always use freshly prepared FeSO\u2084 solution to avoid aerial oxidation.",
      "Add sufficient dilute H\u2082SO\u2084 before titrating to keep the medium acidic.",
    ],
  },
  {
    slug: "fg-carboxylic-acid",
    number: 2,
    title: "Functional Group Detection \u2014 Carboxylic Acid (\u2013COOH)",
    shortTitle: "Carboxylic Acid",
    category: "functional-group",
    categoryLabel: "Functional Group Detection",
    icon: Atom,
    accent: "from-amber-500 to-orange-600",
    tagline:
      "Identify the \u2013COOH functional group in a colourless liquid with a vinegar-like odour.",
    summary:
      "A systematic qualitative analysis that rules out unsaturation, phenolic \u2013OH and the carbonyl group, then confirms the carboxylic acid functional group using sodium bicarbonate effervescence and the fruity ester test.",
    aim: "To detect the functional group in the given unknown organic sample.",
    physicalProperties: {
      colour: "Colourless",
      state: "Liquid",
      odour: "Smell of vinegar",
    },
    observationRows: [
      {
        experiment:
          "The sample was dissolved in acetone and a KMnO\u2084 solution was added to it dropwise.",
        observation: "Pink colour does not disappear.",
        inference: "Unsaturation is not present in the sample.",
      },
      {
        experiment:
          "The sample was dissolved in water and treated with blue litmus paper.",
        observation: "Litmus paper changes to red.",
        inference: "Compound may contain \u2013OH (Phenolic) or \u2013COOH group.",
      },
      {
        experiment:
          "To the sample solution a few drops of neutral FeCl\u2083 were added.",
        observation: "No change in colour.",
        inference: "\u2013OH (Phenolic) is absent.",
      },
      {
        experiment:
          "A pinch of sodium bicarbonate was added to the sample taken in a test tube.",
        observation: "Brisk effervescence evolved.",
        inference: "\u2013COOH group is present and confirmed.",
      },
      {
        experiment:
          "To a small amount of the sample in a test tube, ethanol and a few drops of conc. H\u2082SO\u2084 were added and heated.",
        observation: "Fruity smell evolved.",
        inference: "\u2013COOH group is present and confirmed.",
      },
      {
        experiment:
          "To a small amount of the sample, 2,4-DNP solution was added along with a few drops and shaken.",
        observation: "No precipitation.",
        inference: "Carbonyl group is absent.",
      },
      {
        experiment:
          "Since the solution is acidic, the test for primary amine was not performed.",
        observation: "\u2014",
        inference: "\u2014",
      },
    ],
    conclusion:
      "The given organic sample contains the \u2013COOH functional group. It is a carboxylic acid.",
  },
  {
    slug: "fg-phenol",
    number: 3,
    title: "Functional Group Detection \u2014 Phenol (\u2013OH)",
    shortTitle: "Phenol",
    category: "functional-group",
    categoryLabel: "Functional Group Detection",
    icon: Atom,
    accent: "from-rose-500 to-pink-600",
    tagline:
      "Confirm the phenolic \u2013OH group in a pinkish liquid with a carbolic odour.",
    summary:
      "Uses the characteristic violet colour developed with neutral ferric chloride to confirm the phenolic hydroxyl group, while ruling out unsaturation and the carboxylic acid group via sodium bicarbonate.",
    aim: "To detect the functional group in the given unknown organic sample.",
    physicalProperties: {
      colour: "Pinkish",
      state: "Liquid",
      odour: "Carbolic odour",
    },
    observationRows: [
      {
        experiment:
          "The sample was dissolved in acetone and alkaline KMnO\u2084 solution was added dropwise.",
        observation: "Pink colour changes.",
        inference: "Unsaturation is not present in the sample.",
      },
      {
        experiment:
          "The sample was dissolved in water and treated with blue litmus paper.",
        observation: "Litmus paper changes to red.",
        inference: "Compound may contain \u2013OH (Phenolic) or \u2013COOH group.",
      },
      {
        experiment:
          "To the sample solution a few drops of neutral FeCl\u2083 were added.",
        observation: "Violet colour produced.",
        inference: "\u2013OH (Phenolic) is present and confirmed.",
      },
      {
        experiment:
          "A pinch of sodium bicarbonate was added to the sample taken in a test tube.",
        observation: "No brisk effervescence evolved.",
        inference: "\u2013COOH group is absent.",
      },
      {
        experiment:
          "To a small amount of the sample, 2,4-DNP solution was added and shaken.",
        observation: "No precipitation.",
        inference: "Carbonyl group is absent.",
      },
      {
        experiment:
          "Since the solution is acidic, the test for primary amine was not performed.",
        observation: "\u2014",
        inference: "\u2014",
      },
    ],
    conclusion:
      "The given organic sample contains the \u2013OH (Phenolic) functional group.",
  },
  {
    slug: "fg-aldehyde",
    number: 4,
    title: "Functional Group Detection \u2014 Aldehyde (\u2013CHO)",
    shortTitle: "Aldehyde",
    category: "functional-group",
    categoryLabel: "Functional Group Detection",
    icon: Atom,
    accent: "from-violet-500 to-purple-600",
    tagline:
      "Confirm the \u2013CHO functional group using 2,4-DNP and Tollens' reagent tests.",
    summary:
      "Identifies an aldehyde functional group via the yellow 2,4-dinitrophenylhydrazone precipitate and the characteristic grey mirror with Tollens' reagent. Carbonyl and aldehyde are differentiated from carboxylic acid and phenol.",
    aim: "To detect the functional group in the given unknown organic sample.",
    physicalProperties: {
      colour: "Colourless",
      state: "Liquid",
      odour: "Vanilla-like smell",
    },
    observationRows: [
      {
        experiment:
          "The sample was dissolved in acetone and alkaline KMnO\u2084 solution was added dropwise.",
        observation: "Pink colour does not disappear.",
        inference: "Unsaturation is not present in the sample.",
      },
      {
        experiment:
          "To the sample solution a few drops of neutral FeCl\u2083 were added.",
        observation: "No change in colour.",
        inference: "\u2013OH (Phenolic) is absent.",
      },
      {
        experiment:
          "A pinch of sodium bicarbonate was added to the sample taken in a test tube.",
        observation: "No brisk effervescence evolved.",
        inference: "\u2013COOH group is absent.",
      },
      {
        experiment:
          "To a small amount of the sample, 2,4-DNP solution was added and shaken.",
        observation: "Yellow precipitate.",
        inference: "Carbonyl group is present and confirmed.",
      },
      {
        experiment:
          "A small amount of the sample was treated with Tollens' reagent and heated in a water bath.",
        observation: "Grey precipitate / silver mirror.",
        inference: "\u2013CHO group is present and confirmed.",
      },
    ],
    conclusion:
      "The given organic sample contains the \u2013CHO functional group. It is an aldehyde.",
  },
  {
    slug: "salt-ammonium-sulphate",
    number: 5,
    title: "Salt Analysis \u2014 Ammonium Sulphate",
    shortTitle: "(NH\u2084)\u2082SO\u2084",
    category: "salt-analysis",
    categoryLabel: "Inorganic Salt Analysis",
    icon: Gem,
    accent: "from-teal-500 to-emerald-600",
    tagline:
      "Identify NH\u2084\u207a (Group 0) and SO\u2084\u00b2\u207b radicals in a white inorganic salt.",
    summary:
      "A complete dry and wet analysis flow: physical examination, dry tests (heating, flame test), dilute / concentrated H\u2082SO\u2084 tests, then BaCl\u2082 confirmation for sulphate and NaOH + Nessler's reagent confirmation for ammonium.",
    aim: "To detect the acid and basic radicals in the given unknown inorganic sample.",
    physicalProperties: {
      colour: "White",
      state: "Solid",
      odour: "\u2014",
    },
    observationRows: [
      {
        experiment: "Physical examination \u2014 colour of the sample was noted.",
        observation: "White colour.",
        inference: "Cu\u00b2\u207a, Fe\u00b2\u207a, Fe\u00b3\u207a, Ni\u00b2\u207a, Mn\u00b2\u207a, Co\u00b2\u207a are absent.",
      },
      {
        experiment:
          "Dry test tube heating \u2014 heated a small amount of the sample in a dry test tube.",
        observation: "White sublimate formed.",
        inference: "NH\u2084\u207a, Cl\u207b may be present.",
      },
      {
        experiment: "Flame test was performed.",
        observation: "No characteristic colour in the flame.",
        inference: "Ca\u00b2\u207a, Sr\u00b2\u207a, Ba\u00b2\u207a and Cu\u00b2\u207a may be absent.",
      },
      {
        experiment: "Sample being white in colour.",
        observation: "\u2014",
        inference: "Borax bead test was not performed.",
      },
      {
        experiment: "Small amount of the sample treated with dilute H\u2082SO\u2084.",
        observation: "No specific observation.",
        inference: "CO\u2083\u00b2\u207b may be absent.",
      },
      {
        experiment:
          "Small amount of the solid sample treated with concentrated H\u2082SO\u2084.",
        observation: "No specific observation.",
        inference: "NO\u2083\u207b, Cl\u207b may be absent.",
      },
      {
        experiment:
          "Aqueous solution of the sample acidified with dilute HCl and BaCl\u2082 solution added.",
        observation:
          "White precipitate insoluble in conc. nitric acid.",
        inference: "SO\u2084\u00b2\u207b is present and confirmed.",
      },
      {
        experiment:
          "Solid sample heated with NaOH solution in a test tube.",
        observation:
          "Colourless gas with pungent smell evolves.",
        inference: "NH\u2084\u207a (Group 0) may be present.",
      },
      {
        experiment:
          "Glass rod dipped in HCl brought near the mouth of the test tube.",
        observation: "White dense fumes produced.",
        inference: "NH\u2084\u207a (Group 0) is present and confirmed.",
      },
      {
        experiment:
          "Cotton plug dipped in Nessler's reagent brought at the mouth of the test tube.",
        observation: "Plug turns reddish brown.",
        inference: "NH\u2084\u207a (Group 0) is present and confirmed.",
      },
    ],
    conclusion:
      "Since NH\u2084\u207a (Group 0) is present and confirmed, analysis for other groups is not done.",
    basicRadical: "NH\u2084\u207a",
    acidRadical: "SO\u2084\u00b2\u207b",
    compoundName: "Ammonium Sulphate \u2014 (NH\u2084)\u2082SO\u2084",
  },
  {
    slug: "salt-ammonium-chloride",
    number: 6,
    title: "Salt Analysis \u2014 Ammonium Chloride",
    shortTitle: "NH\u2084Cl",
    category: "salt-analysis",
    categoryLabel: "Inorganic Salt Analysis",
    icon: Gem,
    accent: "from-cyan-500 to-teal-600",
    tagline:
      "Identify NH\u2084\u207a (Group 0) and Cl\u207b radicals in a white inorganic salt.",
    summary:
      "Confirmatory tests for chloride include the chromyl chloride test (with conc. H\u2082SO\u2084 + MnO\u2082 giving greenish-yellow Cl\u2082 gas) and the silver nitrate test (curdy white precipitate soluble in excess NH\u2084OH). Ammonium is confirmed by Nessler's reagent.",
    aim: "To detect the acid and basic radicals in the given unknown inorganic sample.",
    physicalProperties: {
      colour: "White",
      state: "Solid",
      odour: "\u2014",
    },
    observationRows: [
      {
        experiment: "Physical examination \u2014 colour of the sample was noted.",
        observation: "White colour.",
        inference: "Cu\u00b2\u207a, Fe\u00b2\u207a, Fe\u00b3\u207a, Ni\u00b2\u207a, Mn\u00b2\u207a, Co\u00b2\u207a are absent.",
      },
      {
        experiment:
          "Dry test tube heating \u2014 heated a small amount of the sample.",
        observation: "Formation of white sublimate.",
        inference: "NH\u2084\u207a may be present.",
      },
      {
        experiment: "Flame test was performed.",
        observation: "No characteristic colour in the flame.",
        inference: "Ca\u00b2\u207a, Sr\u00b2\u207a, Ba\u00b2\u207a, Cu\u00b2\u207a may be absent.",
      },
      {
        experiment: "Sample being white in colour.",
        observation: "\u2014",
        inference: "Borax bead test was not performed.",
      },
      {
        experiment: "Small amount of the sample treated with dilute H\u2082SO\u2084.",
        observation: "No gas evolves.",
        inference: "S\u00b2\u207b, NO\u2083\u207b, CO\u2083\u00b2\u207b may be absent.",
      },
      {
        experiment:
          "Solid sample treated with concentrated H\u2082SO\u2084.",
        observation:
          "Pungent smelling gas evolved; gives dense white fumes with a rod dipped in NH\u2084OH.",
        inference: "Cl\u207b may be present.",
      },
      {
        experiment:
          "Heated a pinch of the mixture with conc. H\u2082SO\u2084 and MnO\u2082.",
        observation:
          "Greenish-yellow gas with pungent smell evolves.",
        inference: "Cl\u207b may be present.",
      },
      {
        experiment:
          "Acidified the solution with dilute HNO\u2083 and AgNO\u2083 solution was added.",
        observation:
          "Curdy white precipitate formed which dissolved in excess NH\u2084OH.",
        inference: "Cl\u207b is present and confirmed.",
      },
      {
        experiment:
          "Solid sample heated with NaOH solution in a test tube.",
        observation:
          "Colourless gas with pungent smell evolves.",
        inference: "NH\u2084\u207a (Group 0) may be present.",
      },
      {
        experiment:
          "Glass rod dipped in HCl brought near the mouth of the test tube.",
        observation: "White dense fumes produced.",
        inference: "NH\u2084\u207a (Group 0) is present and confirmed.",
      },
      {
        experiment:
          "Cotton plug dipped in Nessler's reagent brought at the mouth of the test tube.",
        observation: "Plug turns reddish brown.",
        inference: "NH\u2084\u207a (Group 0) is present and confirmed.",
      },
    ],
    conclusion:
      "Since NH\u2084\u207a (Group 0) is present and confirmed, analysis for other groups is not done.",
    basicRadical: "NH\u2084\u207a",
    acidRadical: "Cl\u207b",
    compoundName: "Ammonium Chloride \u2014 NH\u2084Cl",
  },
  {
    slug: "salt-lead-nitrate",
    number: 7,
    title: "Salt Analysis \u2014 Lead Nitrate",
    shortTitle: "Pb(NO\u2083)\u2082",
    category: "salt-analysis",
    categoryLabel: "Inorganic Salt Analysis",
    icon: Gem,
    accent: "from-yellow-500 to-amber-600",
    tagline:
      "Identify Pb\u00b2\u207a (Group I) and NO\u2083\u207b radicals in a white inorganic salt.",
    summary:
      "A cracking sound on heating and a bluish-white flame suggest lead. The nitrate radical is confirmed by the classic Brown Ring test with freshly prepared FeSO\u2084 and conc. H\u2082SO\u2084. Pb\u00b2\u207a is confirmed by K\u2082CrO\u2084 (yellow ppt) and KI (yellow ppt).",
    aim: "To detect the acid and basic radicals in the given unknown inorganic sample.",
    physicalProperties: {
      colour: "White",
      state: "Solid",
      odour: "\u2014",
    },
    observationRows: [
      {
        experiment: "Physical examination \u2014 colour of the sample was noted.",
        observation: "White colour.",
        inference: "Cu\u00b2\u207a, Fe\u00b2\u207a, Fe\u00b3\u207a, Ni\u00b2\u207a, Mn\u00b2\u207a, Co\u00b2\u207a are absent.",
      },
      {
        experiment: "Dry test tube heating.",
        observation: "Cracking sound is obtained.",
        inference: "PbNO\u2083 may be present.",
      },
      {
        experiment: "Flame test was performed.",
        observation: "Bluish white flame.",
        inference: "Pb\u00b2\u207a may be present.",
      },
      {
        experiment: "Sample being white in colour.",
        observation: "\u2014",
        inference: "Borax bead test was not performed.",
      },
      {
        experiment: "Sample treated with dilute H\u2082SO\u2084.",
        observation: "No specific observation.",
        inference: "CO\u2083\u00b2\u207b, S\u00b2\u207b may be absent.",
      },
      {
        experiment:
          "Solid sample treated with concentrated H\u2082SO\u2084 in presence of Cu turnings.",
        observation: "Brown fumes evolve.",
        inference: "NO\u2083\u207b may be present.",
      },
      {
        experiment:
          "Aqueous solution of sample diluted with equal volume of freshly prepared FeSO\u2084 and a small amount of conc. H\u2082SO\u2084 was added.",
        observation: "Brown ring was formed.",
        inference: "NO\u2083\u207b is present and confirmed.",
      },
      {
        experiment:
          "Solid sample heated with NaOH solution and Nessler's reagent added.",
        observation: "No specific reaction takes place.",
        inference: "NH\u2084\u207a (Group 0) is absent.",
      },
      {
        experiment: "Dilute HCl added to the aqueous extract.",
        observation: "White precipitate.",
        inference: "Group I radicals, Pb\u00b2\u207a may be present.",
      },
      {
        experiment:
          "Residue of Group I dissolved in hot water; K\u2082CrO\u2084 solution added to one part.",
        observation: "Yellow precipitate formed.",
        inference: "Pb\u00b2\u207a is present and confirmed.",
      },
      {
        experiment: "KI solution added to another portion.",
        observation: "Yellow precipitate obtained.",
        inference: "Pb\u00b2\u207a is present and confirmed.",
      },
    ],
    conclusion:
      "Since Pb\u00b2\u207a is present, analysis for other radicals is not done.",
    basicRadical: "Pb\u00b2\u207a",
    acidRadical: "NO\u2083\u207b",
    compoundName: "Lead Nitrate \u2014 Pb(NO\u2083)\u2082",
  },
  {
    slug: "salt-lead-acetate",
    number: 8,
    title: "Salt Analysis \u2014 Lead Acetate",
    shortTitle: "Pb(CH\u2083COO)\u2082",
    category: "salt-analysis",
    categoryLabel: "Inorganic Salt Analysis",
    icon: Gem,
    accent: "from-orange-500 to-red-600",
    tagline:
      "Identify Pb\u00b2\u207a (Group I) and CH\u2083COO\u207b radicals in a white inorganic salt.",
    summary:
      "Acetate is confirmed via the neutral FeCl\u2083 test (red colouration that disappears on adding dilute HCl and reappears on boiling) and the rub-with-oxalic-acid vinegar smell test. Lead is confirmed by K\u2082CrO\u2084 and KI.",
    aim: "To detect the acid and basic radicals in the given unknown inorganic sample.",
    physicalProperties: {
      colour: "White",
      state: "Solid",
      odour: "\u2014",
    },
    observationRows: [
      {
        experiment: "Physical examination \u2014 colour of the sample was noted.",
        observation: "White colour.",
        inference: "Cu\u00b2\u207a, Fe\u00b2\u207a, Fe\u00b3\u207a, Ni\u00b2\u207a, Mn\u00b2\u207a, Co\u00b2\u207a are absent.",
      },
      {
        experiment: "Dry test tube heating.",
        observation: "Cracking sound is obtained.",
        inference: "PbNO\u2083 may be present.",
      },
      {
        experiment: "Flame test was performed.",
        observation: "Bluish white flame.",
        inference: "Pb\u00b2\u207a may be present.",
      },
      {
        experiment: "Sample being white in colour.",
        observation: "\u2014",
        inference: "Borax bead test was not performed.",
      },
      {
        experiment: "Sample treated with dilute H\u2082SO\u2084.",
        observation: "Gas with smell of vinegar is evolved.",
        inference: "CH\u2083COO\u207b may be present.",
      },
      {
        experiment: "Solid sample treated with concentrated H\u2082SO\u2084.",
        observation: "Gas with smell of vinegar is evolved.",
        inference: "CH\u2083COO\u207b may be present.",
      },
      {
        experiment:
          "Sample solution mixed with neutral FeCl\u2083 and divided into two parts.",
        observation: "Red colouration.",
        inference: "\u2014",
      },
      {
        experiment: "Dilute HCl added to one portion.",
        observation: "Red colour disappears.",
        inference: "CH\u2083COO\u207b is present and confirmed.",
      },
      {
        experiment: "Another part boiled with water.",
        observation: "Red colour obtained.",
        inference: "CH\u2083COO\u207b is present and confirmed.",
      },
      {
        experiment:
          "A pinch of sample rubbed with oxalic acid.",
        observation: "Smell of vinegar.",
        inference: "CH\u2083COO\u207b is present and confirmed.",
      },
      {
        experiment:
          "Solid sample heated with NaOH solution and Nessler's reagent added.",
        observation: "No specific reaction takes place.",
        inference: "NH\u2084\u207a (Group 0) is absent.",
      },
      {
        experiment: "Dilute HCl added to the aqueous extract.",
        observation: "White precipitate.",
        inference: "Group I radicals, Pb\u00b2\u207a may be present.",
      },
      {
        experiment:
          "Residue of Group I dissolved in hot water; K\u2082CrO\u2084 solution added to one part.",
        observation: "Yellow precipitate formed.",
        inference: "Pb\u00b2\u207a is present and confirmed.",
      },
      {
        experiment: "KI solution added to another portion.",
        observation: "Yellow precipitate obtained.",
        inference: "Pb\u00b2\u207a is present and confirmed.",
      },
    ],
    conclusion:
      "Since Pb\u00b2\u207a is present, analysis for other radicals is not done.",
    basicRadical: "Pb\u00b2\u207a",
    acidRadical: "CH\u2083COO\u207b",
    compoundName: "Lead Acetate \u2014 Pb(CH\u2083COO)\u2082",
  },
  {
    slug: "salt-barium-chloride",
    number: 9,
    title: "Salt Analysis \u2014 Barium Chloride",
    shortTitle: "BaCl\u2082",
    category: "salt-analysis",
    categoryLabel: "Inorganic Salt Analysis",
    icon: Gem,
    accent: "from-lime-500 to-emerald-600",
    tagline:
      "Identify Ba\u00b2\u207a (Group V) and Cl\u207b radicals in a white inorganic salt.",
    summary:
      "An apple-green flame and the chromyl chloride test (Cl\u2082 gas) hint at barium and chloride. Ba\u00b2\u207a is confirmed by Group V analysis: white precipitate with (NH\u2084)\u2082CO\u2083 in NH\u2084OH, then yellow precipitate with K\u2082CrO\u2084 in acetic acid, and the apple-green flame test on the residue.",
    aim: "To detect the acid and basic radicals in the given unknown inorganic sample.",
    physicalProperties: {
      colour: "White",
      state: "Solid",
      odour: "\u2014",
    },
    observationRows: [
      {
        experiment: "Physical examination \u2014 colour of the sample was noted.",
        observation: "White colour.",
        inference: "Cu\u00b2\u207a, Fe\u00b2\u207a, Fe\u00b3\u207a, Ni\u00b2\u207a, Mn\u00b2\u207a, Co\u00b2\u207a are absent.",
      },
      {
        experiment: "Dry test tube heating.",
        observation: "No specific observation.",
        inference: "NH\u2084\u207a may be present.",
      },
      {
        experiment: "Flame test was performed.",
        observation:
          "Apple green colour observed with the unaided eye.",
        inference: "Ba\u00b2\u207a may be present.",
      },
      {
        experiment: "Sample being white in colour.",
        observation: "\u2014",
        inference: "Borax bead test was not performed.",
      },
      {
        experiment: "Sample treated with dilute H\u2082SO\u2084.",
        observation: "No specific reaction takes place.",
        inference: "S\u00b2\u207b, NO\u2083\u207b, CO\u2083\u00b2\u207b may be absent.",
      },
      {
        experiment:
          "Solid sample treated with concentrated H\u2082SO\u2084 and a pinch of MnO\u2082 added.",
        observation:
          "Greenish gas with pungent smell evolved; dense white fumes with rod dipped in NH\u2084OH.",
        inference: "Cl\u207b may be present.",
      },
      {
        experiment:
          "Acidified the solution with dilute HNO\u2083 and AgNO\u2083 solution was added.",
        observation:
          "Curdy white precipitate formed, soluble in excess NH\u2084OH.",
        inference: "Cl\u207b is present and confirmed.",
      },
      {
        experiment:
          "Solid sample heated with NaOH solution and Nessler's reagent added.",
        observation: "No specific reaction takes place.",
        inference: "NH\u2084\u207a (Group 0) is absent.",
      },
      {
        experiment: "Dilute HCl added to the sample solution.",
        observation: "No precipitate.",
        inference: "Group I radicals are absent.",
      },
      {
        experiment:
          "Dilute HCl added to the sample solution and H\u2082S gas passed.",
        observation: "No precipitate.",
        inference: "Group II radicals are absent.",
      },
      {
        experiment:
          "NH\u2084Cl added to the aqueous solution and made alkaline with NH\u2084OH.",
        observation: "No precipitate.",
        inference: "Group III radicals are absent.",
      },
      {
        experiment:
          "NH\u2084Cl added, made alkaline with NH\u2084OH, then H\u2082S gas passed.",
        observation: "No precipitate.",
        inference: "Group IV radicals are absent.",
      },
      {
        experiment:
          "NH\u2084Cl added, made alkaline with NH\u2084OH, then (NH\u2084)\u2082CO\u2083 added.",
        observation: "White precipitate formed.",
        inference: "Group V radicals (Ca\u00b2\u207a, Ba\u00b2\u207a, Sr\u00b2\u207a) may be present.",
      },
      {
        experiment:
          "White precipitate washed with hot water and dissolved in minimum amount of hot dilute acetic acid; K\u2082CrO\u2084 added to the warm solution.",
        observation: "Yellow precipitate formed.",
        inference: "Ba\u00b2\u207a is present and confirmed.",
      },
      {
        experiment:
          "Yellow solution filtered, residue washed with hot water and flame test performed.",
        observation: "Apple green flame obtained.",
        inference: "Ba\u00b2\u207a is present and confirmed.",
      },
    ],
    conclusion:
      "Since Ba\u00b2\u207a is present, analysis for Group VI radical is not done.",
    basicRadical: "Ba\u00b2\u207a",
    acidRadical: "Cl\u207b",
    compoundName: "Barium Chloride \u2014 BaCl\u2082",
  },
];

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}

export function getExperimentsByCategory(
  category: ExperimentCategory,
): Experiment[] {
  return experiments.filter((e) => e.category === category);
}

export const categoryMeta: Record<
  ExperimentCategory,
  { label: string; description: string; icon: LucideIcon; accent: string }
> = {
  volumetric: {
    label: "Volumetric Analysis",
    description:
      "Quantitative titrations \u2014 using a standard solution to determine the unknown concentration of another.",
    icon: FlaskConical,
    accent: "from-emerald-500 to-teal-600",
  },
  "functional-group": {
    label: "Functional Group Detection",
    description:
      "Qualitative organic analysis \u2014 identifying characteristic functional groups in unknown organic compounds.",
    icon: Atom,
    accent: "from-amber-500 to-orange-600",
  },
  "salt-analysis": {
    label: "Inorganic Salt Analysis",
    description:
      "Systematic qualitative analysis \u2014 identifying the acid and basic radicals present in an inorganic salt.",
    icon: Beaker,
    accent: "from-teal-500 to-emerald-600",
  },
};
