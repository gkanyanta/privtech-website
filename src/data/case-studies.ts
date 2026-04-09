export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  summary: string
  challenge: string
  solution: string
  results: string[]
  services: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mining-equipment-supply',
    title: 'Mining Equipment & Consumables Supply',
    client: 'Copperbelt Mining Operations',
    industry: 'Mining',
    summary: 'Supplied comprehensive mining equipment and consumables to enhance operational efficiency and safety.',
    challenge: 'The mining operation was experiencing delays due to unreliable equipment suppliers and inconsistent quality of consumables, affecting productivity and safety standards.',
    solution: 'Privtech Solutions established a reliable supply chain for quality mining equipment and consumables. We provided cutting-edge machinery, safety gear, and ongoing maintenance support with guaranteed delivery schedules.',
    results: [
      'Reduced equipment downtime by 40%',
      'Improved safety compliance ratings',
      'Established reliable supply chain for consumables',
      'Cost savings through competitive pricing',
    ],
    services: ['Mining Equipment & Consumables'],
  },
  {
    slug: 'agricultural-inputs-distribution',
    title: 'Agricultural Inputs Distribution Program',
    client: 'Eastern Province Farmers Cooperative',
    industry: 'Agriculture',
    summary: 'Delivered comprehensive agricultural inputs to support sustainable farming across multiple districts.',
    challenge: 'Farmers in the cooperative struggled to access quality seeds, fertilizers, and farming equipment in time for the planting season, resulting in reduced yields and income.',
    solution: 'We established a distribution network delivering quality agricultural inputs directly to cooperative members. Our team provided training on optimal use of fertilizers and modern farming techniques.',
    results: [
      'Inputs delivered to 500+ farmers on time',
      'Average yield increase of 35%',
      'Sustainable farming practices adopted',
      'Year-round supply chain established',
    ],
    services: ['Agricultural Inputs & Products'],
  },
  {
    slug: 'ict-infrastructure-deployment',
    title: 'ICT Infrastructure Modernization',
    client: 'Lusaka Financial Services',
    industry: 'Financial Services',
    summary: 'Deployed comprehensive ICT infrastructure including network, hardware, and security solutions.',
    challenge: 'The company operated on outdated IT infrastructure that was limiting growth, creating security vulnerabilities, and reducing operational efficiency.',
    solution: 'Privtech Solutions designed and implemented a complete ICT overhaul including new servers, network infrastructure, cybersecurity measures, and cloud solutions. We provided staff training and ongoing technical support.',
    results: [
      'Modern, secure IT infrastructure deployed',
      'System uptime improved to 99.9%',
      'Cybersecurity vulnerabilities addressed',
      'Staff productivity increased by 25%',
    ],
    services: ['ICT Equipment, Solutions & Services'],
  },
  {
    slug: 'commercial-construction-project',
    title: 'Commercial Office Complex Construction',
    client: 'Lusaka Business Park',
    industry: 'Construction',
    summary: 'Delivered a modern commercial office complex on time and within budget.',
    challenge: 'The client needed a quality commercial building completed within tight timelines and budget constraints, requiring efficient project management and quality construction.',
    solution: 'Our construction team managed the entire project from design consultation through to handover. We ensured quality materials, skilled workmanship, and strict adherence to the project schedule.',
    results: [
      'Project completed 2 weeks ahead of schedule',
      'Delivered within approved budget',
      'High-quality construction standards met',
      'Client satisfaction achieved',
    ],
    services: ['Construction'],
  },
]
