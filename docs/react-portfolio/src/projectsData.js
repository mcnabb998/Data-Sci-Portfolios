// Sample projectsData.js for your portfolio
const projects = [
  {
    id: 'london-underground-upgrades',
    name: 'London Underground Upgrade Impact Analysis',
    description: 'Causal impact of infrastructure upgrades on LU reliability, ridership, and outcomes (2010–2024).',
    documentation: 'https://github.com/mcnabb998/Data-Sci-Portfolios/tree/main/projects/london-underground-upgrades',
    images: [
      {
        src: '/assets/london/ejt_trend_by_line.png',
        alt: 'Excess Journey Time Trend by Line',
        caption: 'Excess Journey Time Trend by Line'
      },
      {
        src: '/assets/london/ejt_heatmap.png',
        alt: 'Excess Journey Time Heatmap',
        caption: 'Excess Journey Time Heatmap'
      },
      {
        src: '/assets/london/lch_stacked_area.png',
        alt: 'Lost Customer Hours Stacked Area',
        caption: 'Lost Customer Hours Stacked Area'
      }
    ]
  },
  // Add other projects here as needed
];

export default projects;
