
# London Underground Upgrade Impact Analysis – Data Sources and Processing Documentation

## Overview
This project reconstructs period‑level panel data (line × period) covering 2010–2024 to evaluate whether investment programmes (e.g., Victoria line World‑Class Capacity, 4LM, Northern line upgrades, rolling‑stock renewals) improved customer outcomes on the London Underground. Key outcome measures include Excess Journey Time (EJT), Lost Customer Hours (LCH), percentage of scheduled kilometres operated, kilometres operated, ridership and reliability metrics. Because many official data sources are network‑level or aggregated annually, careful data engineering and several assumptions were required to create a granular panel.

## Data Sources
| Dataset | Source | Time Span | Notes |
|---|---|---|---|
| TfL Tube Performance – key trends | London Underground Performance Reports on the London Datastore. The Key Trends workbook (tfl‑tube‑performance.xlsx) contains a sheet of period‑level network KPIs (Lost Customer Hours, operated kilometres, % scheduled operated, Excess Journey Time) from May 2011 to March 2020 | 2011/12–2019/20 | Provides network‑wide metrics per four‑week reporting period. |
| LU Performance Data Almanac | London Underground Performance Reports (almanac) accessible via the London Datastore. The lu‑performance‑data.xlsx workbook contains numerous sheets with line‑level annual data, including Lost Customer Hours by line, Excess Journey Time by line, scheduled and operated kilometres, rolling‑stock MDBF, escalator and lift availability, and service control failures. | 2003/04–2016/17 | Only annual data; line‑level detail ends at 2016/17. Used to derive each line’s share of network metrics and reliability indicators. |
| Station entry & exit counts (multi‑year) | Entry and exit figures by station (multi‑year station entry & exit figures) on the London Datastore. This XLS file provides annualised entry and exit counts for each Underground station from 2011 to 2017 | 2011–2017 | Used to compute station‑level ridership and line‑level ridership up to 2017. |
| Public Transport journeys by type of transport | TfL dataset containing journeys (millions) by reporting period broken down by transport mode (bus, underground, DLR, tram, overground, etc.) | 2010/11–2024/25 | Underground journeys per period were used to compute period weights and to scale station counts beyond 2017. |
| Rolling stock, escalator & lift availability, and service control failures | Sheets in the LU Performance Data almanac. Provide annual mean distance between failures (MDBF), availability rates and number of failures by line. | 2004/05–2016/17 | Used as reliability controls in the panel. |
| Station‑to‑line mapping | Extracted from the multi‑year station entry & exit figures workbook (sheet 1) which lists every station and the lines served. | — | Cleaned to map each station to one or more tube lines (e.g., “Circle & Hammersmith & City”). |

Other sources such as strike calendars (Greater London Authority reports) and monthly weather data (Met Office/HadUKP) were identified but not yet integrated; they remain as outstanding tasks.

## Processing Steps
Downloading and converting raw files: The London Datastore prevents automated downloads via the command line, so the direct URLs were opened in the Chrome browser (through the computer tool) to trigger downloads. The multi‑year station counts were converted from .xls to .xlsx via libreoffice for compatibility with Pandas. All raw files were stored in data/raw and processed files in data/processed.

Network‑level metrics: The Key Trends sheet from tfl‑tube‑performance.xlsx was read to obtain period‑level values for Lost Customer Hours, operated kilometres (peak + off‑peak), percentage of scheduled kilometres operated and Excess Journey Time. Financial years were extracted from period codes (e.g., 02_11/12 → 2011/2012).

Line‑level shares: Annual tables from the performance almanac were parsed to extract Lost Customer Hours by line, Excess Journey Time by line, scheduled kilometres and operated kilometres. These tables provide values for financial years up to 2016/17. Shares were computed for each line by dividing the line value by the network total for that year. Because line‑level data stop at 2016/17, shares from 2016/17 were reused for later years. These shares were then applied to network‑level period metrics to allocate Lost Customer Hours, Excess Journey Time and operated kilometres to each line for every period. Percentage of scheduled kilometres operated was assumed equal across lines.

Ridership estimates: The multi‑year station counts (2011‑2017) were cleaned (station names standardised) and combined with the station‑to‑line mapping. For each year, station counts were allocated across the lines served by each station. To extend the counts beyond 2017, total Underground journeys per financial year from the TfL journeys dataset were used. Ratios of annual journeys relative to 2016/17 were computed and applied to the 2017 station counts to estimate annual counts for 2018‑2023. Station counts were then distributed across periods using period weights derived from the TfL journeys dataset. This produced station_ridership_period.csv and line_period_ridership.csv which were merged into the panel.

Reliability metrics: Rolling stock MDBF, escalator and lift availability and service control failures were extracted from the almanac. Because these metrics are reported annually, they were merged into the panel by repeating the annual value across all periods within the corresponding financial year. For years after 2016/17, the 2016/17 values were reused.

Panel construction: The resulting lu_panel_with_failures.csv contains, for each line and reporting period: the network metrics (Lost Customer Hours, Excess Journey Time, operated kilometres, percentage scheduled), allocated line‑level metrics, line‑level ridership, and reliability indicators. Data cover periods from 2011/12 to 2019/20, with ridership extended to 2023/24.

Visualisations: Three plots were generated from the panel using Matplotlib/Seaborn:

- EJT trend by line: line chart of Excess Journey Time for each line over time.
- EJT heatmap: heatmap showing Excess Journey Time values across lines and time.
- LCH stacked area: stacked area chart of Lost Customer Hours by line over time.
The images are saved in data/processed/ejt_trend_by_line.png, ejt_heatmap.png and lch_stacked_area.png.

Evidence snapshot: To provide a simple measure of upgrade impact, mean Excess Journey Time was compared before (≤2013 financial year) and after (≥2014) the main upgrades for each line. The resulting evidence_snapshot.csv shows a reduction in average EJT for all lines, but these estimates are illustrative because the precise timing of upgrades varies by line.

## Column Definitions
### lu_panel.csv and subsequent panel datasets
| Column | Description |
|---|---|
| financial_period | TfL reporting period code (e.g., 02_11/12 means the 2nd period of the 2011/12 financial year). |
| financial_year | Financial year in YYYY/YYYY format derived from the period code. |
| period | Period number (1–13). |
| days | Number of days in the period. |
| period_end | Period ending date (string). |
| line | Underground line (Bakerloo, Central, Circle & Hammersmith & City, District, Jubilee, Metropolitan, Northern, Piccadilly, Victoria, Waterloo & City). |
| lch_network | Lost Customer Hours (network‑level) for the period (million passenger‑hours). |
| ejt_network | Excess Journey Time (network‑level) for the period (minutes). |
| operated_kms_network | Operated kilometres (peak + off‑peak) network‑level for the period. |
| pct_scheduled | Percentage of scheduled kilometres actually operated (network‑level). |
| lch_line | Lost Customer Hours allocated to the line using annual share. |
| ejt_line | Excess Journey Time allocated to the line using annual share. |
| operated_kms_line | Operated kilometres allocated to the line using annual share. |
| station_alloc_ridership | Estimated ridership for the line and period derived from station counts. |
| period_year | Calendar year (integer) derived from the period_end date. |
| upgrade_year | Year of major capacity upgrade affecting the line (NaN if no upgrade during 2010–2024). |
| post_upgrade | Indicator equal to 1 if period_year ≥ upgrade_year; 0 otherwise. |
| train_upgrade_year | Year when new rolling‑stock (S‑stock or equivalent) was fully introduced on the line (sub‑surface lines). |
| post_train_upgrade | Indicator equal to 1 if period_year ≥ train_upgrade_year; 0 otherwise. |
| signalling_upgrade_year | Year when communications‑based train control or ATO went live on the line (sub‑surface lines). |
| post_signalling_upgrade | Indicator equal to 1 if period_year ≥ signalling_upgrade_year; 0 otherwise. |
| mdbf | Mean distance between failures of rolling stock for the line (km). |
| escalator_availability | Proportion of time escalators were available for the line (0–1). |
| lift_availability | Proportion of time lifts were available for the line (0–1). |
| service_control_failures | Number of service control system failures for the line in the year. |

### Other datasets
- station_annual_counts_updated.csv – annual entry/exit counts for each station from 2011 to 2023 (2018‑2023 estimated by scaling 2017 counts using network ridership ratios).
- station_line_mapping.csv – mapping of stations to all Underground lines they serve.
- line_annual_ridership_updated.csv – annual ridership per line obtained by proportionally allocating station counts.
- station_ridership_period.csv – period‑level ridership estimates for each station based on annual counts and period weights.
- line_period_ridership.csv – period‑level ridership per line.
- reliability_metrics.csv – annual reliability metrics (rolling stock MDBF, escalator and lift availability, service control failures) per line.
- ejt_trend_by_line.png, ejt_heatmap.png, lch_stacked_area.png – visualisations summarising performance trends.
- evidence_snapshot.csv – table comparing pre‑ and post‑upgrade average Excess Journey Time by line.

## Caveats and Limitations
Incomplete station data after 2017: station entry/exit counts beyond 2017 were not publicly available at the time of analysis. The counts for 2018‑2023 were estimated by scaling the 2017 counts using changes in total Underground journeys. This assumes each station’s share of network ridership remained constant.

Line shares after 2016/17: the LU performance almanac reports line‑level metrics only up to 2016/17. Shares from 2016/17 were therefore applied to later years. This may not reflect changes from capacity upgrades (e.g., 4LM implementation on the Circle, District, Hammersmith & City and Metropolitan lines or the Northern line extension). Some lines (e.g., Waterloo & City) show zero escalator availability because the almanac contains no data.

Strike and weather controls not yet integrated: the strike calendar and weather datasets were not collected in this iteration. Without controlling for industrial action and severe weather, estimates of upgrade effects may be biased. A strike_calendar.csv template should be created by compiling strike events (date ranges and affected lines) from official reports. Weather controls (monthly temperature, rainfall, snow indicators) should be merged at the period level.

Mapping financial years to calendar years: period weights and scaling factors rely on mapping calendar years to financial years (e.g., calendar 2018 uses financial year 2018/19). Some misalignment may occur, especially for months at the start/end of financial years.

Approximations in upgrade timing: the evidence snapshot uses a simplistic pre‑/post‑2014 split to illustrate potential improvements. Precise upgrade completion dates differ by line and should be incorporated when performing causal analysis.

## Future Work
Collect official station counts for 2018‑2024 through TfL transparency releases or FOI requests.

Compile a strike calendar by line and integrate into the panel to control for industrial action.

Add weather controls using monthly temperature and precipitation data from the Met Office or HadUKP.

Refine line‑level shares after 2016/17 using any newly released data on LCH, EJT or operated kilometres.

Incorporate upgrade timelines (e.g., dates of line signalling upgrades and rolling stock deliveries) to enable difference‑in‑differences analysis.

## Upgrade timeline integration and new columns
To refine causal comparisons, the panel now includes line‑specific upgrade dates and indicators rather than relying on a generic pre‑2014 vs post‑2014 break. The table below summarises the assumed upgrade completion dates used (see the report for sources). Lines without upgrades during 2010–2024 have NaN in the upgrade_year column. For the sub‑surface lines (Circle & Hammersmith & City, District, Metropolitan) two phases are distinguished: a train upgrade when the S‑stock rolling stock was fully introduced (2017 for Circle & Hammersmith & City and District, 2012 for Metropolitan), and a signalling upgrade when communications‑based train control went live (2023 for Circle & Hammersmith & City and District). The panel includes binary indicators for each phase.

| Line | upgrade_year | train_upgrade_year | signalling_upgrade_year | Notes |
|---|---|---|---|---|
| Victoria | 2016 | — | 2016 | World Class Capacity upgrade: 47 new 2009‑stock trains and new signalling allowed 36 tph by 2016 |
| Northern | 2014 | 2014 | 2014 | Automatic Train Operation (SelTrac S40) installed; full automation achieved 1 June 2014 |
| Jubilee | 2011 | 2011 | 2011 | Transmission‑based Train Control upgrade delivered 30 tph from 2011; the later World Class Capacity programme (36 tph) was paused. |
| Circle & Hammersmith & City | 2023 | 2017 | 2023 | S‑stock trains introduced between 2012 and 2014; CBTC signalling fully operational by January 2023 |
| District | 2023 | 2017 | 2023 | S‑stock trains introduced between 2013 and 2017; signalling complete by early 2023 |
| Metropolitan | — | 2012 | — | S8 stock fully introduced by 2012; signalling upgrade not complete by 2024. |
| Central, Piccadilly, Bakerloo, Waterloo & City | — | — | — | No major capacity upgrades during 2010–2024. Future upgrades under the New Tube for London programme occur after 2025 |

The panel now includes six new columns:

- period_year – integer year extracted from period_end (e.g., 2011).
- upgrade_year – year of major capacity upgrade per line (NaN if none).
- post_upgrade – binary indicator (1 if period_year ≥ upgrade_year, else 0).
- train_upgrade_year – year of rolling‑stock upgrade for sub‑surface lines; NaN for others.
- signalling_upgrade_year – year of signalling upgrade for sub‑surface lines; NaN for others.
- post_train_upgrade and post_signalling_upgrade – binary indicators for whether the period is after the respective upgrade phases.

These variables allow analysts to define pre‑ and post‑upgrade periods on a line‑by‑line basis and to distinguish between rolling‑stock and signalling improvements. They complement the existing evidence_snapshot.csv comparison and should be used in difference‑in‑differences or interrupted‑time‑series analyses.
