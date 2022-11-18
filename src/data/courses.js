import COURSES_IMAGES from "assets/courses";

const COURSESDATA = [
    {
        "id": 1,
        "title": "Fundamentals of Calculus",
        "slug": "fundamentals-calculus", 
        "category": "basic engineering",
        "card_title": "Dasar-dasar Kalkulus", 
        "card_desc": "Mata kuliah ini membekali mahasiswa dengan pengetahuan matematika dan keterampilan analitik sehingga mampu menerapkan teknik kalkulus untuk memecahkan masalah ilmiah dan rekayasa.",
        "image": COURSES_IMAGES.FUNDAMENTAL_CALCULUS,
        "rating": 9,
        "schedule": "Appointment with tutor(s)", 
        "desc": " This course is the series of University Calculus for science and engineering. It covers real number system, inequalities, functions and limits, derivatives, applications of derivatives, integrals, applications of integrals, transcendental functions, techniques of integration, indefinite forms, improper integrals, infinite series, 2D and 3D geometries, derivatives in Rn, double integrals, ordinary differential equations.",
        "references": [`Varberg, D. E., Purcell, E. J., & Rigdon, S. E. (2007). Calculus: Dale Varberg, Edwin J. Purcell, Steven E. Rigdon. Upper Saddle River, N.J: Pearson Prentice Hall.`],
        "content": [
            {
                "title": "Basics of Calculus: Numbers and Functions",
                "desc": "This session introduce students to basics of calculus, basic operations, and functions in university calculus. This session includes materials about:",
                "material": ["Types of Numbers", "Linear Equation with Two and Three Variables","Inequalities and Absolute Value", "Domain and Range of Function", "Cartesian, Cylindrical, and Spherical Coordinate System", "Algebraic Function", "Trigonometric Function", "Composition of Several Function"]
            },
            {
                "title": "Limits",
                "desc": "This session discuss basic limit operations and introduction to derivative. The materials discussed includes:",
                "material":["Limit Basic Theorem", "Limits Involving Polynomial Function", "Limits Involving Trigonometric Function", "Limits at Infinity", "Continuity of Function", "Application of Limits"]
            },
            {
                "title": "Derivatives and Its Application",
                "desc": "This session discuss derivation problems in science and engineering cases. The materials discussed includes:",
                "material":["Basic Concepts of Derivatives", "Rules for Finding Derivatives", "The Chain Rule and Leibniz Notation", "Derivatives for Polynomial Function", "Derivatives for Trigonometric Function", "High-Order Derivation", "Implicite Differentiation", "Maxima and Minima of Function", "Monotonicity and Concavity of Function", "Local Extrema and Extrema on Open Intervals", "Graphing Function using Calculus", "The Mean Value Theorem", "Anti-derivatives", "Introduction to Differential Equations"]
            },
            {
                "title": "Integral and its Application",
                "desc": "This session discuss integration problems in science and engineering cases. THe materials discussed includes:",
                "material":["Definite and Indefinite Integral", "1st Fundamental Calculus Theorem", "2nd Fundamental Calculus Theorem", "Method of Substitution", "The Mean Value Theorem for Integral", "Numerical Integration: Riemann Sum, Trapezoidal Rule, Simpson's Rule", "The Area of Plane Region", "Volume of Solids: Slabs, Disks, Washers", "Volume of Solids of Revolution: Shells", "Length of A Plane Curve", "Work and Fluid Force", "Moments and Center of Mass", "Probability and Random Variables"]
            },
            {
                "title": "Transcendental Function",
                "desc": "Transcendental function is one of the most common functions used in engineering and science. This session discuss materials:",
                "material":["Natural Logarithm and Exponential Functions", "Inverse Function and Their Derivatives", "General Logarithm and Exponential Functions", "Exponential Growth and Decay", "1st Order Linear Differential Equation", "Inverse Trigonometric Function and Their Derivatives", "Hyperbolic Function and Their Inverse"]
            },
            {
                "title": "Advanced Techniques of Integration",
                "desc": "Integration, as one of the breakthrough in the world of calculus, need to be studied thoroughly to understand advanced concept in science and engineering problems. This session discuss:",
                "material":["Basic Integration Rules", "Integration by Parts", "Trigonometric Integrals", "Rationalizing Substitutions", "Partial Fraction Method for Integration", "Strategies for Integration"]
            },
            {
                "title": "Indeterminate Forms and Improper Integrals",
                "desc": "Indeterminate integrals discuss how integrals are solved for unknown domains. This sessions includes materials in:",
                "material":["Indeterminate Types of 0/0", "Other Indeterminate Forms", "Improper Integrals: Infinite Limits of Integration", "Improper Integrals: Infinite Integrands"]
            },
            {
                "title": "Infinite Series",
                "desc": "Infininte series and sequences is an introduction and one way to solve calculus problems. This session includes:",
                "material":["Infinite Series and Sequences", "Positive Series: The Integral Test, Other Tests", "Alternating Series, Absolute Convergences, and Conditional Convergences", "Power Series", "Taylor and MacLaurin Series", ">Taylor Approximation to A Function"]
            },
            {
                "title": "Conics and Polar Coordinates",
                "desc": "One of the method to solve calculus problems are by conical and polar coordinates. This session discuss:",
                "material":["The Parabola, Ellipses, and Hyperbolas", "Polar Coordinate System", "Parametric Function", "Graphs of Polar Equations", "Calculus in Polar Coordinates"]
            },
            {
                "title": "Geometry in Space and Vectors",
                "desc": "This session is introduction to solve mathematical problems in geometry by using space and vectors approach. The materials in this session includes:",
                "material":["3D-Cartesian Coordinate System", "Vector and Scalar", "Basic Vector Operations: Dot Product, Cross Product", "Vector-Valued Functions and Curvilinear Motion", "Lines and Tangent Lines in 3D-System", "Surfaces in 3D-System"]
            },
            {
                "title": "Derivatives for Functions of Two or More Variables",
                "desc": "Derivatives with more than two variables commonly found in engineering problems, especially in transient system. This session will discuss:",
                "material":["Basics Understanding: Function of Two or More Variables", "Partial Derivatives", "Limits and Continuity of Function", "Differentiability", "Directional Derivatives and Gradients", "The Chain Rule", "Tangent Planes and Approximation", "Maxima and Minima of Function", "Method of Lagrange"]
            },
            {   
                "title": "Multiple Integrals",
                "desc": "Multiple integrals problems in engineering and science can be found in complex systems. This introduction course will discuss:",
                "material":["Double Integrals over Rectangles, Non-Rectangular Region, and Polar Coordinate", "Iterated Integrals", "Triple Integrals in Cartesian, Cylindrical, and Spherical Coordinates", "Change of Variables in Multiple Integrals"]
            }
        ],
        "tutors": [
            {
                "name": "Samuel Pangeran Aletheia", 
                "profile": ""
            }
        ]
    },
    {
        "id": 2,
        "title": "Fundamentals of Physics - Mechanics & Heat",
        "slug": "fundamentals-physics-1",
        "category": "basic engineering",
        "card_title": "Dasar-dasar Fisika - Mekanika & Panas", 
        "card_desc": "Kursus ini memberikan pengantar fisika dasar untuk insinyur dan pengetahuan dan masalah dalam hukum gerak newton dan kekekalan energi.",
        "image": "",
        "rating": 8.7,
        "schedule": "Appointment with tutor(s)", 
        "desc": " This course is the first series of basics physics for engineers. This course covers materials of Mechanics (Kinematics, Dynamics, Work-Energy), Mechanical Wave, Fluid (Statics and Dynamics), and Thermophysics (Kinetic Theory of Gases and Thermodynamics).",
        "references": [`Walker, J., Halliday, D., & Resnick, R. (2011). Fundamentals of physics. Hoboken, NJ. John Wiley & Sons, Inc.`, `Serway, R. A., Jewett, J. W., & Serway, R. A. (2004). Physics for scientists and engineers. Belmont, CA. Thomson-Brooks/Cole.`], 
        "content": [
            {
                "title": "Kinematics",
                "desc": "Kinematics for basic physics is an introduction to mechanics physics for science and engineers. This session includes:", 
                "material": ["Position and Displacement", "Average and Instantaneous Velocity", "Average and Instantaneous Acceleratio", "Vector and Scalar Measurement", "Basic Kinematic Equation", "Free-Fall Motion", "Parabolic Motion", "Circular Motion", "Relative Motion in One and Multi Dimensions"]
            },
            {
                "title": "Dynamics of Particle",
                "desc": "Particle dynamics is an introduction to motion physics and momentum. The materials discussed includes:", 
                "material": ["Basics of 1st, 2nd, and 3rd Newton's Law", "Equilibrium of Forces", "Normal, Frictional, and Drag Force", "Gravitational Force", "Centripetal and Centrifugal Force", "Linear Momentum", "Collision and Impulse", "Conservation of Linear Momentum"]
            },
            {
                "title": "Work and Energy",
                "desc": "Energy and work are related each others and their basic concepts is fundamental in mechanic physics. The materials discussed includes:", 
                "material": ["Principle of Energy Conservation", "Conservative and Non-conservative Force", "Potential Energy", "Kinetic Energy", "Mechanical Energy", "Power"]
            },
            {
                "title": "Dynamics of Rotational Motion",
                "desc": "This session discuss motion physics and moementum. The materials discussed includes:", 
                "material": ["Torque and Moment of Inertia", "Center of Mass Calculation for Various Geometries", "Angular Momentum", "Conservation of Angular Momentum", "Translation, Rotation, and Rolling Movement"]
            },
            {
                "title": "Elasticity and Oscillation",
                "desc": "This session is continuation of dynamics motion session. This session discuss materials:", 
                "material": ["Stress and Strain", "Modulus of Elasticity (Young Modulus)", "Shear and Bulk Modulus", "Harmonic and Damped Oscillation", "Resonance"]
            },
            {
                "title": "Waves",
                "desc": "This session is an introduction to waves in physics. This session discuss:", 
                "material": ["Transverse and Longitudinal Waves", "Wavelength, Period, and Frequency", "The Principle of Wave Superposition", "Standing Waves and Resonance", "Doppler Effect"]
            },
            {
                "title": "Fluid Statics and Dynamics",
                "desc": "This session introduce basic concepts in fluid mechanics. The materials discussed includes:", 
                "material": ["Hydrostatic Pressure", "Archimedes Law", "The Equation of Continuity", "Bernoulli Equation"]
            },
            {
                "title": "The Kinetic Theory of Gases",
                "desc": "After studying introduction to fluid mechanics, the session continues in gas kinetic as introduction to thermodynamics. This session includes:", 
                "material": ["Ideal Gases", "Pressure, Temperature, and RMS-Velocity", "The Equipartition of Energy Theorem", "Internal Energy", "Heat Capacity of Ideal Gases"]
            },
            {
                "title": "Thermodynamics",
                "desc": "This session is an introduction to engineering thermodynamics. This session discuss:", 
                "material": ["Concept of Thermal Equilibrium", "1st Law of Thermodynamics", "PVT Diagram", "Isobaric, Isochoric, Isothermic, Adiabatic, and Cyclic Process", "2nd Law of Thermodynamics", "Carnot Heat Engine and Refrigerator", "Entropy"]
            },
            
        ],
        "tutors": [
            {
                "name": "Samuel Pangeran Aletheia", 
                "profile": ""
            }
        ]
    }, 
    {
        "id": 3,
        "title": "Fundamentals of Physics -  Magnets, Electrics, Waves, Optics",
        "slug": "fundamentals-physics-2",
        "category": "basic engineering",
        "card_title": "Dasar-dasar Fisika - Magnet, Listrik, Gelombang, Optik", 
        "card_desc": "Kursus ini memberikan fisika dasar untuk para insinyur dalam masalah magnet, listrik, gelombang, dan optik. Mata pelajaran termasuk fisika modern, elektromagnetik, dan cahaya akan dibahas.",
        "image": "",
        "rating": "",
        "schedule": "Appointment with tutor(s)", 
        "desc": " This course is the second series of basics physics for engineers. This course covers materials of Electrostatic (electric field, Coulomb Law) , Electric Potential Energy, Electrical Potential, Capacitor. Magnetostic, Electromotive force , Alternating Current, Electromagnetic Wave, Modern Physics, Atomic Physics.",
        "references": [`Walker, J., Halliday, D., & Resnick, R. (2011). Fundamentals of physics. Hoboken, NJ. John Wiley & Sons, Inc.`, `Serway, R. A., Jewett, J. W., & Serway, R. A. (2004). Physics for scientists and engineers. Belmont, CA. Thomson-Brooks/Cole.`],
        "content": [
            {
                "title": "Electrostatics",
                "desc": "This course is intended to provide basic understanding in basisc electrostatics concepts. This session includes:",
                "material": ["Coulomb Law and Electric Field", "Gauss Law and Electrical Flux", "Electrical Potential Energy", "Capacitor and Dielectrics"]
            },
            {
                "title": "Magnetostatics",
                "desc": "Magnetostatics session discuss concepts about magents and its application to solve science and engineering problems. The materials discussed includes:",
                "material": ["Magnetic Field", "Lorentz Force", "Magnetic Field from Electrical Current (Biot-Savart and Ampere Law)"]
            },
            {
                "title": "Induction and Inductance",
                "desc": "This session will gives explanation in Faraday and Lenz law to solve electromotive force. The materials discussed includes:",
                "material": ["Basics of Electromotive Force (EMF)", "Faraday - Lenz Law", "Self Induction and Mutual Induction", "Basics of Alternating/Direct Current (AC/DC), RLC Circuit", "RMS-Current and Voltage", "Impedance", "Resonance in RLC Circuit"]
            },
            {
                "title": "Electromagnetic Waves",
                "desc": "Electromagnetic waves session includes materials in:",
                "material": ["Maxwell Equation", "Electromagnetic Waves Equation", "Poynting Vector", "Polarization by Reflection"]
            },
            {
                "title": "Interference and Diffraction of Light Waves",
                "desc": "As light waves is common to be found in this digital era, this basic course will provide understanding to solve most common problems in engineering. This session discuss materials:",
                "material": ["Interference in Double and N-slit", "Interference from Thin Films", "Diffraction", "Combined Interference and Diffraction"]
            },
            {
                "title": "Modern Physics",
                "desc": "Some modern physics basics are development from relativity theroy from Einstein. This session will also provide application in science and engineering world, including:",
                "material": ["Einstein's Theory of Relativity", "Photons and Matter Waves", "Atomic and Material Physics"]
            },
        ],
        "tutors": [
            {
                "name": "Samuel Pangeran Aletheia", 
                "profile": ""
            }
        ]
    }, 
    {
        "id": 4,
        "title": "Fundamentals of Chemistry",
        "slug": "fundamentals-chemistry",
        "category": "basic engineering",
        "card_title": "Dasar-dasar Kimia", 
        "card_desc": "Kursus ini akan memberikan dasar-dasar dan dasar-dasar kimia untuk memecahkan masalah umum di bidang teknik. Kursus ini mencakup mata pelajaran dalam reaksi kimia, termokimia, kesetimbangan kimia, elektrokimia, dan kinetika",
        "image": "",
        "rating": 8,
        "schedule": "Appointment with tutor(s)", 
        "desc": "This course studies the basic aspects in the application of chemical laws in the calculation of the composition of substances in samples and in various types of chemical reactions and studies the theories that underlie the development of atomic structures and molecular structures and interactions between molecules. This includes studies the energetics of solution formation and the effect of solute concentrations on the colligative properties of solutions, applying equilibrium concepts to explain acid-base and solubility equilibrium, studying feasibility of a process based on kinetics and thermodynamics point of views, and studying the application of nuclear and redox reactions as chemical energy sources, and study the structure and reactivity of organic compounds and biomolecules.",
        "references": [`Petrucci, R. H., Herring, F. G., Madura, J. D., & Bissonnette, C. (2017). General Chemistry: Principles and Modern Applications (11th ed.). Pearson.`], 
        "content": [
            {
                "title": "Atoms and the Atomic Theory",
                "desc": "This session introduce students to theory of atoms and chemical elements, which includes materials about:",
                "material": ["The Atomic Theory", "Electrons and Other Discoveries in Atomic Physics", "The Nuclear Atom", "Chemical Elements", "Atomic Mass", "Introduction to the Periodic Table", "The Concept of the Mole and the Avogadro Constant", "Using the Mole Concept in Calculations"]
            },
            {
                "title": "The Periodic Table and Some Atomic Properties",
                "desc": "This session explains about periodic tables and their properties. The materials discussed includes:",
                "material": ["The Periodic Law and the Periodic Table", "Metals and Nonmetals", "Sizes of Atoms and Ions", "Ionization Energy", "Electron Affinity", "Magnetic Properties", "Polarizability"]
            },
            {
                "title": "Chemical Reactions",
                "desc": "This session discuss basics in chemical reactions and it extents. THe materials discussed includes:",
                "material": ["Chemical Reactions and Equations", "Stoichiometry", "Chemical Reactions in Solution", "Determining the Limiting Reactant", "Other Practical Matters in Reaction Stoichiometry", "The Extent of Reaction"]
            },
            {
                "title": "Chemical Reactions in Aqueous Solutions",
                "desc": "This is the continuation of previous session, which discuss:",
                "material": ["The Nature of Aqueous Solutions", "Precipitation Reactions", "Acid-Base Reactions", "Oxidation-Reduction Reactions", "Balancing Oxidation-Reduction Reactions Equations", "Oxidizing and Reducing Agents", "Titrations"]
            },
            {
                "title": "Gases",
                "desc": "This session gives explanations in theory of gasses in chemistry which discusse materials in:",
                "material": ["Properties of Gases", "The Simple Gas Laws", "Ideal Gas Equation and Its Application", "Gases in Chemical Reactions", "Mixtures of Gases", "Kinetic-Molecular Theory yg Gases", "Nonideal (Real) Gases"]
            },
            {
                "title": "Thermochemistry",
                "desc": "This session focuses on thermochemistry topics in chemistry. This session discuss:",
                "material": ["Terminology in Thermochemistry", "Heat, Heats of Reaction, and Calorimetry", "Work", "The First Law of Thermodynamics", "Application of The First Law to Chemical and Physical Changes", "Hess's Law", "Standar Enthalpies of Formation", "Fuels as Sources of Energy"]
            },
            {
                "title": "Principles of Chemical Equilibrium",
                "desc": "This session introduces basic principles in chemical equilibrium. This sessions includes materials in:",
                "material": ["The Nature of the Equilibrium State", "Equilibrium Constant Expression", "Relationships Involving Equilibrium Constants", "The Magnitude of an Equilibrium Constants", "Predicting the Direction of Net Chemical Change", "Le Chatelier's Principle", "Equilibrium Calculations"]
            },
            {
                "title": "Acids and Bases",
                "desc": "This session discuss acid and bases in chemistry and ionization. This session includes:",
                "material": ["Acids, Bases, and Conjugate Acid-Base Pairs", "Self-Ionization of Water and the pH Scale", "Ionization of Acids and Bases in Water", "Strong Acids and Strong Bases", "Weak Acids and Weak Bases", "Polyprotic Acids", "Simultaneous Acid-Base Reactions", "Ions as Acids and Bases", "Lewis Acids and Bases"]
            },
            {
                "title": "Acid-Base Equilibria",
                "desc": "This is the continuation of the theory of acid and bases, and focuses on chemical reaction. This session discuss:",
                "material": ["Ion Effect in Acid-Base Equilibria", "Buffer Solutions", "Acid-Base Indicators", "Neutralization Reactions and Titration Curves", "Acid-Base Equilibrium Calculations"]
            },
            {
                "title": "Solubility and Complex-Ion Equilibria",
                "desc": "This session is the more advanced topic in acid-bases theory, while focusing more on ion. The materials in this session includes:",
                "material": ["Solubility Product Constant", "Relationship Between Solubility and Ksp", "Ion Effect in Solubility Equilibria", "Limitations of the Ksp Concept", "Criteria for Precipitation and Its Completeness", "Fractional Precipitation", "Solubility and pH", "Equilibria Involving Complex Ions"]
            },
            {
                "title": "Electrochemistry",
                "desc": "Electrochemistry session discusses about chemical reaction that produces electricity from ion. This session will discuss:",
                "material": ["Electrode Potentials and Their Measurement", "Standard Electrode Potentials", "Electrode Potentials as a Function of Concentrations", "Batteries and Corrosion", "Industrial Electrolysis Processes"]
            },
            {
                "title": "Chemical Kinetics",
                "desc": "Chemical kinetics is topic that introduces the fundamentals of chemical reaction. This introduction course will discuss:",
                "material": ["Rate of a Chemical Reaction", "Measuring Reaction Rates", "Effect of Concentration on Reaction Rules", "Zero-Order, First-Order, and Second-Order Reaction", "Reaction Kinetics", "Theoretical Models for Chemical Kinetics", "The Effect of Temperature on Reaction Rates", "Reaction Mechanism", "Catalysis"]
            },
        ],
        "tutors": [
            {
                "name": "Ajeng Triane Syawalia", 
                "profile": ""
            }, 
            {
                "name": "Adam Aji Prayoga",
                "profile": ""
            }, 
            {
                "name": 'Sabtin Maulidiyah Hani', 
                "profile": ""
            }
        ]
    }, 
    {
        "id": 5,
        "title": "Statistics and Probability",
        "slug": "statistics-probability",
        "category": "basic engineering",
        "card_title": "Statistik dan Probabilitas", 
        "card_desc": "Kursus statistik dan probabilitas akan memperkenalkan dasar-dasar statistik untuk insinyur, tes statistik, dan probabilitas untuk memecahkan masalah umum dalam teknik dan kehidupan sehari-hari.",
        "image": "",
        "rating": 8,
        "schedule": "Contact Us", 
        "desc": "This course discusses elementary concepts & methods in statistics (including big data) as tools for understanding the behavior of common engineering systems through measurement data & laboratory research, which encompass descriptive & inferential statistics, determination of correlation within data, & introduction to statistically designed experiments The session will discuss basic concepts & roles of statistics in engineering; organization & presentation of data; descriptive analysis of measurement data; principles of probability, random variables, & normal distribution; sampling distribution; confidence intervals of the mean & variance; hypothesis tests of one sample; comparison of two samples; 1-factor experiment & the ANOVA concept; introduction to factorial experiments; parameter estimation using linear regression",
        "references": [], 
        "content": [],
        "tutors": [
            {
                "name": "Esterlita Makaria Aritonang", 
                "profile": ""
            }
        ]
    },
    {
        
        "id": 6,
        "title": "Engineering Economy",
        "slug": "engineering-economy",
        "category": "basic engineering",
        "card_title": "Ekonomi Rekayasa", 
        "card_desc": "Kursus ekonomi teknik mencakup mata pelajaran termasuk nilai waktu uang, ROR, analisis biaya, pembiayaan proyek, dan analisis sensitivitas. Kursus ini juga memberikan masalah kehidupan nyata termasuk masalah ekonomi terkait industri.",
        "image": "",
        "rating": 9.6,
        "schedule": "Appointment with tutor(s)", 
        "desc": "This course provides elementary knowledge & techniques in engineering economics as tools for the design & economic evaluation of engineering projects, such as cost estimation; operating expenses estimation; simple cashflow analysis; project cashflow analysis; project profitability & sensitivity evaluations; investment decision-making analysis. Materials include estimation of capital & operating expenses, cash flow planning, project profitability analysis, & elementary project planning & monitoring.",
        "references": [`Blank, L., & Tarquin, A. (2012). Engineering Economy (7th ed.). McGraw-Hill.`, `Sullivan, W. G., Wicks, E. M., & Koelling, C. P. (2015). Engineering Economy (16th ed.). Pearson Education`], 
        "content": [
            {
                "title": "Time Value of Money",
                "desc": "This session introduce about engineering economy and how a value of money changes over time. This session includes materials about:",
                "material": ["Role of Engineering Economy", "How Time and Interest Affect Money", "Single-Amount Factors (F/P and P/F)", "Uniform Series Present Worth and Capital Recovery Factor (P/A and A/P)", "Sinking Fund Factor and Uniform Series Compound Amount Factor (A/F and F/A)", "Interpolation in Interest Tables"]
            },
            {
                "title": "Interest Rates",
                "desc": "This session discuss more about interest in economy. The materials discussed includes:",
                "material": ["Nominal and Effective Interest Rates", "Effective Annual Interest Rates", "Effective Interest Rates for Any Time Period", "Effective Interest Rate for Continuous Compounding", "Interest Rates that Vary over Time"]
            },
            {
                "title": "Present Worth and Annual Worth Analysis",
                "desc": "This session discuss about the value of money in present worth and the analysis. The materials discussed includes:",
                "material": ["Formulating Alternatives", "Present Worth Analysis of Equal-Life Alternatives", "Present Worth Analysis of Different-Life Alternatives", "Future Worth Analysis", "Capitalized Worth Analysis", "Advantages and Uses of Annual Worth Analysis", "Capital Recovery Calculation using Annual Worth Values", "Evaluating Alternatives by Annual Worth Analysis"]
            },
            {
                "title": "Rate of Return Analysis",
                "desc": "This session introduce about Rate of Return and the analysis. The materials discussed includes:",
                "material": ["Interpretation of Rate of Return Value", "Rate of Return for One Alternative", "Rate of Return for Multiple Alternatives"]
            },
            {
                "title": "Benefit/Cost Analysis",
                "desc": "Benefit and cost analysis is one of the most important analysis in engineering economy. This session discuss materials:",
                "material": ["Public Sector Projects", "Benefit/Cost Analysis of a Single Project", "Alternative Selection Using Incremental B/C Analysis", "Incremental B/C Analysis of Multiple, Mutually Exclusive Alternatives", "Service Sector Projects and Cost-Effectiveness Analysis"],
            },
            {
                "title": "Project Financing and Noneconomic Attributes",
                "desc": "As engineering projects are very dependent with financing, this session will introduce to financing in projects, including the noneconomic attributes. This session discuss:",
                "material": ["MARR Relative to the Cost of Capital", "Debt-Equity Mix and Weighted Average Cost of Capital", "Determination of the Cost of Debt Capital", "Determination of the Cost of Equity Capital and the MARR", "Effect of Debt-Equity Mix on Investment Risk"]
            },
            {
                "title": "Effect of Inflation",
                "desc": "Inflation in economy influnce the value of money over time. This sessions includes materials in:",
                "material": ["Impact of Inflation", "Present Worth Calculations Adjusted for Inflation", "Future Worth Calculations Adjusted for Inflation", "Capital Recovery Calculations Adjusted for Inflation"]
            },
            {
                "title": "Cost Estimation and Indirect Cost Allocation",
                "desc": "To have a healthy project budgeting, engineers have to know how to estimate the cost of a project. This session will discuss materials in:",
                "material": ["Understanding How Cost Estimation is Accomplished", "Unit Method & Cost Indexes", "Cost Capacity Relationship: Cost-Capacity Equations", "Cost Capacity Relationship: Factor Method", "Traditional Indirect Cost Rates and Allocation", "Activity-Based Costing for Indirect Costs"]
            },
            {
                "title": "Depreciation Method",
                "desc": "As assests depreciated over time, there are some analysis to calculate depreciation. This session discuss:",
                "material": ["Terminology of Depreciation", "Straight Line (SL) Depreciation", "Declining Balance (DB) and Double Declining Balance (DDB)", "Modified Accelerated Cost Recovery System (MACRS)", "MACRS Recovery Period", "Sum-of-Year-Digits (SYD) Depreciation"]
            },
            {
                "title": "After-Tax Economic Analysis",
                "desc": "Economy after tax helps financing to calculate the economy of the project operation after tax cut. The materials in this session includes:",
                "material": ["Income Tax Terminology and Basic Relation", "Before and After Tax Cash Flow", "Effect of Taxes of Different Depreciation Methods and Recovery Periods", "Depreciation Recapture and Capital Gains"]
            },
            {
                "title": "Sensitivity Analysis",
                "desc": "Sensitivity analysis is important to analyze the influence of external apsects to project profitability analysis. This session will discuss:",
                "material": ["Determining Sensitivity to Parameter Variation", "Sensitivity Analysis Using Three Estimates", "Estimate Variability and the Expected Value", "Expected Value Computations for Alternatives"]
            },
        ], 
        "tutors": [
            {
                "name": "Muhammad Yusuf Arya Ramadhan",
                "profile": ""
            },
            {
                "name": "Esterlita Makaria Aritonang",
                "profile": ""
            }
        ]
    }, 
    {
        "id": 7,
        "title": "Organic Chemistry for Engineersy",
        "slug": "organic-chemistry-engineers",
        "category": "basic engineering",
        "card_title": "Kimia Organik untuk Insinyur",
        "card_desc": "Kursus ini memperkenalkan dasar-dasar kimia organik dan aplikasi untuk insinyur proses. Topiknya meliputi isomer, stereokimia, hidrokarbon, dll. ",
        "image": "",
        "rating": 8.9,
        "schedule": "Appointment with tutor(s)", 
        "desc": " Main topics of this course are concerning organic nomenclature, chemical bonding including resonance concept and acid-base concept, organic functional groups, and the relationship between structures of molecules, physical properties and chemical properties of organic compounds. The structure topics discuss on chemical bonding, covalent bond properties that related to the static aspect of molecules (including stereochemistry) as well as its dynamic aspect (conformation). The physical properties topic includes the state of materials, solubility, melting point and boiling points; the chemical properties topic includes acid-base properties, oxidation and reduction reaction, electrophylic and nucleophylic addition reaction, electrophylic and nucleophylic substitution reaction, elimination and free-radical reaction especially halogenation reaction. Other topics are concerning the application of organic chemistry knowledge in understanding of the application of organic compounds and reactions in living organism as well as in industrial applications.",
        "references": [`Fessenden, R. J., & Fessenden, J. S. (1982). Organic Chemistry (2nd ed.). PES Publishers.`, `Solomons, T. W. G., Fryhle, C. B., & Snyder, S. A. (2014). Organic Chemistry (11th ed.). John Wiley & Sons, Inc.`], 
        "content": [
            {
                "title": "Atoms and Molecules", 
                "desc": "This session includes materials about:",
                "material": ["Electron Structure, Atomic Radius, and Electronegativity", "Introduction to Chemical Bond", "Chemical Formulas in Organic Chemistry", "Bond Lengths and Bond Angles", "Bond Dissociation Energy", "Polar Covalent Bonds and Attraction Between Molecules", "Acid and Bases"]
            }, 
            {
                "title": "Orbitals", 
                "desc": "This session includes materials about:",
                "material": ["Properties of Waves", "Bonding in Hydrogen", "Hybrid Orbitals of Carbon", "Functional Groups", "Hybrid Orbitals of Nitrogen and Oxygen", "Conjugated Double Bonds", "Resonance"]
            }, 
            {
                "title": "Isomers, Nomenclature, and Alkanes", 
                "desc": "This session includes materials about:",
                "material": ["Structural Isomers", "Organic Nomenclature", "Alkanes", "Hydrocarbon Resources"],
            }, 
            {
                "title": "Stereochemistry", 
                "desc": "This session includes materials about:",
                "material": ["Geometric Isomerism in Alkenes", "Geometric Isomerism in Cyclic Compounds", "Conformations of Open-Chain Compounds", "Shapes of Cyclic Compounds", "Chirality"]
            }, 
            {
                "title": "Alkyl Halides", 
                "desc": "This session includes materials about:",
                "material": ["Bonding in Organohalogens Compounds", "Physical Properties of Halogenated Alkanes", "Nomenclature and Classification of Alkyl Halides", "Substitution and Elimination Reactions", "The SN2 and SN1 Reactions", "Substitution Reactions of Allylic Halides and Benzylic Halides", "The E1 and E2 Reactions"]
            }, 
            {
                "title": "Alkenes and Alkynes: Part 1", 
                "desc": "This session includes materials about:",
                "material": ["Bonding in Alkenes and alkynes", "Physical Properties and Nomenclature of alkenes and Alkynes", "Spectra of Alkenes and Alkynes", "Preparation of Alkenes and Alkynes", "Preview of Addition Reactions", "Addition of Hydrogen Halides to Alkenes and Alkynes", "Addition of H2SO4 and H2O to Alkenes and Alkynes"]
            }, 
            {
                "title": "Alkenes and Alkynes: Part 2", 
                "desc": "This session includes materials about:",
                "material": ["Hydration Using Mercuric Acetate", "Addition of Borane to Alkenes", "Addition of Halogens to Alkenes and Alkynes", "Addition of Carbenes to Alkenes", "Catalytic Hydrogenation", "Oxidation of Alkenes", "Use of Alkenes and Alkynes in Synthesis"]
            }, 
            {
                "title": "Alcohols, Ethers, and Related Compounds: Part 1", 
                "desc": "This session includes materials about:",
                "material": ["Bonding in Alcohols and Ethers", "Physical Properties and Nomenclature of Alcohols and Ethers", "Preparation and Reactivity of Alcohols", "Substitution Reactions of Alcohols", "Elimination Reactions of Alcohols"]
            }, 
            {
                "title": "Alcohols, Ethers, and Related Compounds: Part 2", 
                "desc": "This session includes materials about:",
                "material": ["Alcohols as Acids", "Alkoxides and Phenoxides", "Esterification Reactions", "Inorganic Esters of Alcohols", "Oxidation of Alcohols", "Preparation of Ethers", "Substitution Reactions of Ehters and Epoxides", "Thiols and Sulfieds", "Use of Alcohols and Ethers in Synthesis"]

            }, 
            {
                "title": "Aromaticity, Benzene, and Substituted Benzenes: Part 1", 
                "desc": "This session includes materials about:",
                "material": ["Nomenclature of Substituted Benzenes", "Physical Properties of Aromatic hydrocarbons", "Spectra of Substituted Benzenes", "Stability of the Benzene Ring", "The Bonding in Benzene", "Preview of Aromatic Compound", "Requirements for Aromaticity"]
            }, 
            {
                "title": "Aromaticity, Benzene, and Substituted Benzenes: Part 2", 
                "desc": "This session includes materials about:",
                "material": ["Electrophilic Aromatic Substitution", "The First Substitution", "The Second Substitution", "The Third Substitution", "Alkylbenzenes", "Phenols", "Halobenzenes and Nucleophilic Aromatic Substitution", "Synthesis Using Benzene Compunds"]
            }, 
            {
                "title": "Aldehydes and Ketones: Part 1", 
                "desc": "This session includes materials about:",
                "material": ["Nomenclature of Aldehydes and Ketones", "Preparation of Aldehydes and Ketones", "The Carbonyl Group", "Physical and Spectral Properties of Aldehydes and Ketones", "Addition of Reagents to the Carbonyl Group", "Reaction with Water, Alcohols, Hydrogen Cyanide"]
            }, 
            {
                "title": "Aldehydes and Ketones: Part 2", 
                "desc": "This session includes materials about:",
                "material": ["Reaction with ammonia and Amines", "Reaction with Hydrazine and Related Compounds", "The Wittig Reaction", "Reaction with Grignard Reagents", "Reduction and Oxidation of Aldehydes and Ketones", "Reactivity of the Alpha Hydrogens", "Use of Aldehydes and Ketones in Synthesis"]
            }, 
            {
                "title": "Carboxylic Acids", 
                "desc": "This session includes materials about:",
                "material": ["Nomenclatyre of Carboxylic Acids", "Physical and Spectral Properties of Carboxylic Acids", "Preparation of Carboxylic Acids", "Acidity of Carboxylic Acids", "Salts of Carboxylic Acids", "Effect of Structure to Acid Strength", "Esterification, Reduction, and Polyfunctional of Carboxylic Acids", "Use of Carboxylic Acids in Synthesis"]
            }, 
            {
                "title": "Derivatives of Carboxylic Acids", 
                "desc": "This session includes materials about:",
                "material": ["Reactivity of Carboxylic Acid Derivatives", "Special Properties of Carboxylic Acid Dervatives", "Acid Halides", "Anhydrides of Carboxylic Acids", "Ester of Carboxylic Acids", "Lactones, Polyesters, Thioesters, Amides, Polyamides, and Nitriles", "Use of Carboxylic Acid Derivatives in Synthesis"]
            }, 
            {
                "title": "Amines", 
                "desc": "This session includes materials about:",
                "material": ["Classification and Nomenclature of Amines", "Bonding in Amines", "Physical and Spectral Properties of Amines", "Preparation of Amines", "Basicity of Amines", "Amine Salts", "Reactions of Amines with Nitrous Acid", "Hofmann Elimination", "Use of Amines in Synthesis"]
            }, 
        ], 
        "tutors": [
            {
                "name":"Muhammad Arif Darmawan", 
                "profile": ""
            }, 
            {
                "name": "Ajeng Triane Syawalia",
                "profile": ""
            }
        ]
    },
    {
        "id": 8,
        "title": "Fundamentals of Analytical Chemistry",
        "slug": "fundamental-analytical-chemistry",
        "category": "basic process engineering",
        "card_title": "Dasar-dasar Kimia Analitik",
        "card_desc": "Kursus ini mencakup dasar-dasar dan dasar-dasar kimia analitik dan instrumen, termasuk gravimetri, titrasi, elektrokimia, potensiometri, spektroskopi, dan kromatografi.",
        "image": "",
        "rating": 9,
        "schedule": "Appointment with tutor(s)", 
        "desc": " This course discuss Basic Measurement and Chemical Analysis, Classical Analysis methods include titration and gravimetry. Spectrochemical analysis include UV-VIS, FT-IR, AAS, and Chromatography Analysis. Material characterization include thermal analysis, material morphology. Instrumentation and Measurement includes measurements of pressure, flow rate, temperature, and thermal properties and fluid transport.",
        "references": [`Skoog, D. A., West, D. M., Holler, F. J., & Crouch, S. R. (2014). Fundamentals of Analytical Chemistry (9th ed.). Brooks/Cole`], 
        "content": [
            {
                "title": "Gravimetric Methods of Analysis",
                "desc": "Gravimetry in this session includes materials about:",
                "material": ["Precipitation Gravimetry", "Calculation of Results from Gravimetric Data", "Application of Gravimetric Methods"]
            },
            {
                "title": "Titrations in Analytical Chemistry",
                "desc": "The materials about tirations includes:",
                "material": ["Terms in Volumetric Titrations", "Standard Solutions", "Volumetric Calculations", "Gravimetric Titrations", "Titration Curves"]
            },
            {
                "title": "Neutralization Titration",
                "desc": "This session discuss neutralization method in titration, which includes:",
                "material": ["Solutions and Indicators for Acid/Base Titrations", "Titration of Strong Acids and Bases", "Titration Curves for Weak Acids", "Titration Curves for Weak Bases", "Composition of Solutions During Acid/Base Titrations"]
            },
            {
                "title": "Electrochemical Methods",
                "desc": "This session discuss electrochemistry reaction and the methods to analyze it, which includes:",
                "material": ["Characterizing Oxidation/Reduction Reactions", "Electrochemical Cells", "Electrode Potentials", "Calculating Potentials of Electrochemical Cells"]
            },
            {
                "title": "Potentiometry",
                "desc": "This session discuss materials about potentiometry, which includes:",
                "material": ["Principles of Potentiometry", "Reference Electrodes", "Liquid-Junction Potentials", "Indicator Electrodes", "Instruments for Measuring Cell Potentials", "Direct Potentiometry", "Potentiometric Titrations"]
            },
            {
                "title": "Spectrochemical: Introduction",
                "desc": "This session is an introduction to spectrochemical. which discuss:",
                "material": ["Properties of Electromagnetic Radiation", "Interaction of Radiation and Matter", "Absorption of Radiation (Beer's Law)", "Emission of Electromagnetic Radiation"]
            },
            {
                "title": "Spectrochemical: Optical Spectrometry",
                "desc": "This sessions is the continuation of introduction to spectrochemical, which includes materials in:",
                "material": ["Instrument Components of Optical Spectrometry", "Ultraviolet/Visible Photometers and Spectrophotometers", "Infrared Spectrophotometers"]
            },
            {
                "title": "Molecular Absorption Spectrometry",
                "desc": "This session explains more details in molecular absorption spectrometry, which includes:",
                "material": ["Ultraviolet and Visible Molecular Absorption Spectroscopy", "Automated Photometric and Spectrophotometric Methods", "Infrared Absorption Spectroscopy"]
            },
            {
                "title": "Atomic Spectroscopy",
                "desc": "This session explains more details in atomic spectrometry, which includes:",
                "material": ["Origins of Atomic Spectra", "Production of Atoms and Ions", "Atomic Emission Spectroscopy"]
            },
            {
                "title": "Mass Spectroscopy",
                "desc": "This session explains more details in mass spectrometry, which includes:",
                "material": ["Principles of Mass Spectroscopy", "Mass Spectrometers", "Atomic Mass Spectrometry", "Molecular Mass Spectrometry"]
            },
            {
                "title": "Gas Chromatography",
                "desc": "This session discuss more details in gas Chromatography, which includes:",
                "material": ["Instruments for Gas-Liquid Chromatography", "Gas Chromatography Columns and Stationary Phases", "Application of Gas-Liquid Chromatography", "Gas-Solid Chromatography"]
            },
            {
                "title": "High Performance Liquid Chromatography (HPLC)",
                "desc": "High Performane Liquid Chromatography discuss materials in:",
                "material": ["Instrumentations", "Partition Chromatography", "Adsorption Chromatography", "Ion Chromatography", "Comparison of HPLC and Gas Chromatography"]
            },
        ],
        "tutors": [
            {
                "name":"Sabtin Maulidiyah Hani", 
                "profile": ""
            }, 
            {
                "name": "Muhammad Arif Darmawan",
                "profile": ""
            }, 
            {
                "name": "Adam Aji Prayoga",
                "profile": ""
            }
        ]
    }, 
    {
        "id": 9,
        "title": "Cell Culture for Engineers",
        "slug": "cell-culture",
        "category": "basic process engineering",
        "card_title": "Kultur Sel untuk Insinyur",
        "card_desc": "Mata kuliah kultur sel merupakan mata kuliah peminatan bagi para insinyur bioproses , yang meliputi mata kuliah kultur jaringan, kultur hewan, dan kultur sel bioproses.",
        "image": "",
        "rating": 9.8,
        "schedule": "Appointment with tutor(s)", 
        "desc": "This course provides the latest knowledge in the field of cell culture, cell culture principles and techniques, application of animal cell culture in bioindustry.",
        "references": [`Invitrogen, G. (2014). Cell Culture Basics. Life technologies.`, `Dodds, J. H., & Roberts, L. W. (1985). Experiments in Plant Tissue Culture. International Potato Center.`, `Taji, A., Dodd, W. A., & Williams, R. R. (1992). Plant tissue culture practice. University of New England.`, `R. Ian Freshney (2010). Culture of Animal Cells: A Manual of Basic Technique and Specialized Applications. Wiley-Blackwell.`], 
        "content": [
            {
                "title": "Tissue Culture",
                "desc": "Tissue culture introduce students to cell and tissue culture for engineering. This session includes materials about:",
                "material": ["Cell Culture", "Cell Culture Characteristics", "Type of Plant Tissue Culture", "Medium of Plant Tissue Culture", "Advantages and Uses", "Somatic Embryogenesis"]
            },
            {
                "title": "Animal Culture",
                "desc": "This session discuss basics in animal culture engineering. The materials discussed includes:",
                "material": ["Animal Cell Culture", "Adherent and Non-adherent Cell", "Term in Animal Cells Culture", "Biosafety Level and Biosafety Cabinet", "Cell Counting Technique", "Population Doubling Level (PDL)"]
            },
            {
                "title": "Cell Culture Contamination",
                "desc": "Contamination in cell culture is commonly happened.To avoid this, engineers have to study about contaminatio, which includes:",
                "material": ["Types of Contamination", "Effect of Contamination", "Prevention of Contamination", "Cryopreservation"]
            },
            {
                "title": "Bioprocess Cell Culture",
                "desc": "This session specialized in bioprocess engineering. The materials discussed includes:",
                "material": ["Reactor and Bioreactor", "Aseptic and Non-aseptic Technique", "Batch, Continuous, and Semi-Continuous Bioreactor", "Mass Balances in Batch, Continuous, and Semi-Continuous Bioreactor", "Lighting, Aeration, and Temperature in Cell Culture"]
            },
        ],
        "tutors": [
            {
                "name":"Amalia Weediyanti", 
                "profile": ""
            }
        ]
    }, 
    {
        "id": 10,
        "title": "Chemical Engineering Thermodynamics",
        "slug": "che-eng-thermodynamics",
        "category": "basic process engineering",
        "card_title": "Termodinamika Teknik Kimia",
        "card_desc": "Mata kuliah ini mencakup mata kuliah termodinamika dasar, sifat ideal dan non ideal, siklus proses, kesetimbangan uap-cair, dan reaksi kesetimbangan kimia.",
        "image": "",
        "rating": 8.9,
        "schedule": "Appointment with tutor(s)", 
        "desc": "This course provides materials in: system, unit and definition; equations of state: ideal gas, virial and cubic equations; First Law and Second Law of Thermodynamics; closed and open system; Isothermal, isobaric, isometric, adiabatic, and mixing processes; Free energy; Properties of real fluids: calculation of change in internal energy, change in enthalpy, and change in entropy using thermodynamic diagrams, tables, and equations of state. Ideal gas flow systems: expansion, compression and throttling. Thermodynamic cycles; Solution properties: partial molar quantities, fugacity and activity; phase equilibrium criteria; ideal and non-ideal; Calculation of activity and fugacity coefficients: K-values; Equilibrium phase envelope for single and multi-component systems: definitions of critical point, cricondenterm, cricondenbar; Phase equilibrium calculations; Chemical reaction equilibrium criteria; Degree of reaction continuity; Chemical reaction equilibrium constant calculation for homogeneous & heterogeneous and homogeneous multiple reaction.",
        "references": [`Smith, J. M., Van Ness, H. C., Abbott, M. M., & Swihart, M. T. (2018). Introduction to Chemical Engineering Thermodynamics (8th ed.). McGraw-Hill.`, `Geankoplis, C. J., Hersel, A. A., & Lepek, D. H. (2018). Transport Processes and Separation Process Principles (5th ed.). Prentice Hall.`, `Reklaitis, G. V., & Schneider, D. R. (1983). Introduction to Material and Energy Balances. John Wiley & Sons, Inc.`, `Moran, M. J., Shapiro, H. N., Boettner, D. D. & Bailey, M. B. (2011). Fundamentals of Engineering Thermodynamics (7th ed.). John Wiley & Sons, Inc.`], 
        "content": [
            {
                "title": "PVT of A Pure Substance and Steam Table",
                "desc": "Pressure-Volume-Temperature is the fundamentals in thermodynamics. While steam tables are needed to understand the properties of water in various pressure and temperature range. This session includes materials about:",
                "material": ['PVT (Pressure-Volume-Temperature) Diagram', 'Steam Table', 'Volumetric Properties of The Fluid', 'Latent Heat and Vapor Pressure', 'Residual Functions']
            },
            {
                "title": "1st Law of Thermodynamics",
                "desc": "1st law of thermodynamics is the fundamentals in energy conservation. The materials discussed includes:",
                "material": ['Basics Understanding of 1st law of Thermodynamics', 'Overall and Mechanical Energy Balance', 'Thermodynamics Process and Cycle for Ideal Gases', 'Heat Effects of Industrial Reactions', 'Theoretical Adiabatic Temperature']
            },
            {
                "title": "2nd Law of Thermodynamics",
                "desc": "2nd law of thermodynamics introduce the concept of entropy. The materials discussed includes:",
                "material": ['Basics Understanding of 2nd law of Thermodynamics', 'Entropy Change for Ideal-Gas State', 'Entropy Balance for The Open System', 'Carnot Engine', 'Ideal and Lost Work']
            },
            {
                "title": "Applications of Thermodynamics to The Process Engineering",
                "desc": "Thermodynamics cycles and concepts in proess engineering will be discussed in this session, including:",
                "material": ['Fluid-Moving Equipments', 'Production of Power from Heat', 'Refrigeration and Liquefaction']
            },
            {
                "title": "Vapor-Liquid Equilibrium for Ideal Solutions",
                "desc": "Vapor-Liquid equilibrium is the fundamentals concept in process engineering to understand separation concepts and other process engineering concepts. This session discuss materials:",
                "material": ['Introduction to Vapour-Liquid Equilibrium', 'Raoult Law', 'K-Value Correlations', 'Henry Law for Non-Condensable Gases', 'Dewpoint and Bubblepoint Calculations', 'Flash Calculation', 'Azeotrope System Calculation']
            },
            {
                "title": "Solution Thermodynamics",
                "desc": "In solution thermodynamics, materials that will be discussed are:",
                "material": ['Partial Molar Properties', 'Fugacity and Fugacity Coefficients: Theory and Calculations', 'Activity and Activity Coefficients: Theory and Calculations', 'Heat of Solution and Mixing']
            },
            {
                "title": "Vapor-Liquid Equilibrium for Non-Ideal Solution",
                "desc": "This sessions is the continuation of ideal vapour-liquid equilibrium session, which includes materials in:",
                "material": ["Modified Raoult Law", "Dewpoint and Bubblepoint Calculations using Modified Raoult Law", "Flash Calculation using Modified Raoult Law", "Gamma-Phi Formulation"]
            },
            {
                "title": "Chemical Reaction Equilibria",
                "desc": "Chemical reaction in thermodynamics discuss the effect of thermodynamics to chemical reaction equilibrium. This session includes:",
                "material": ["Introduction to Chemical Reaction Equilibria", "Reaction Coordinate and Equilibrium Conversion", "Le-Chatelier Principles", "Effect of Temperature on The Equilibrium Constant", "Relation of Equilibrium Constants to Composition", "Multireaction Equilibria", "Reactions in Heterogeneous Systems"]
            },
        ]

    }
]

export default COURSESDATA;