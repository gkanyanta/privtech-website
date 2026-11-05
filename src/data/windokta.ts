// ===========================================
// PRIVTECH WINDOKTA – PRODUCT DATA
// ===========================================
// Copy is taken from the approved PrivtechWinDokta-website-description.md.
// When releasing a new build: replace the files in /public/downloads/windokta/,
// then update `version`, `sizeLabel` and the `sha256` values below
// (`sha256sum PrivtechWinDokta*.exe` or `Get-FileHash`).

export const WINDOKTA_PATH = '/products/windokta'
export const WINDOKTA_LICENCE_PATH = '/products/windokta/licence'
export const SITE_URL = 'https://www.privtech.net'

const ASSET_DIR = '/downloads/windokta'

export const windokta = {
  name: 'Privtech WinDokta',
  shortName: 'WinDokta',
  version: '1.0.0',
  sizeLabel: 'about 445 KB',
  tagline: "Your PC's health check-up, clean-up and tune-up in one small app.",
  intro:
    'Is your computer slower than it used to be, short on storage, or running out of memory? Privtech WinDokta finds out why and helps you fix it, safely. It clears out junk files and tells you which programs are using your memory. It shows exactly what is filling your drive and gives plain-English advice on upgrades that would make the biggest difference.',
  introSecondary:
    'No installation and no account. WinDokta is a single small file (under 0.5 MB): download it, run it, done. It works on any Windows 10 or Windows 11 PC and never connects to the internet.',
  icon: `${ASSET_DIR}/windokta-icon-256.png`,
  iconLarge: `${ASSET_DIR}/windokta-icon-512.png`,
}

export const windoktaDownloads = [
  {
    id: 'x64',
    label: 'Download for Windows (64-bit)',
    fileName: 'PrivtechWinDokta.exe',
    href: `${ASSET_DIR}/PrivtechWinDokta.exe`,
    architecture: '64-bit, recommended',
    audience: 'Almost all PCs running Windows 10 or 11',
    sha256: '8A5D54E6FBFC98DDCFC944884D46BF02E767AEC173831D0B99FC7CA60DEC7E8C',
  },
  {
    id: 'x86',
    label: 'Download for Windows (32-bit)',
    fileName: 'PrivtechWinDokta-x86.exe',
    href: `${ASSET_DIR}/PrivtechWinDokta-x86.exe`,
    architecture: '32-bit',
    audience: 'Older PCs running 32-bit Windows 10',
    sha256: 'C22BB74ACB5D7E9A983D8706E5EA0548D19281FF935AB1513302FB8380662D5F',
  },
] as const

export type WinDoktaFeatureIcon =
  | 'sparkles'
  | 'clock'
  | 'disk'
  | 'apps'
  | 'memory'
  | 'bolt'
  | 'chip'

export interface WinDoktaFeature {
  title: string
  icon: WinDoktaFeatureIcon
  body: string
  bullets?: string[]
  examples?: string[]
  footnote?: string
}

export const windoktaFeatures: WinDoktaFeature[] = [
  {
    title: 'Deep junk-file cleaning, for every user on the PC',
    icon: 'sparkles',
    body: 'Removes temporary files, browser caches (Chrome, Edge, Firefox and Brave), Windows Update leftovers, error reports, crash dumps and old thumbnails. It cleans every account on the computer, not just yours. You always see an analysis with file counts and sizes first, and nothing is deleted until you confirm.',
  },
  {
    title: 'Automatic scheduled cleaning',
    icon: 'clock',
    body: 'Set it and forget it. WinDokta can clean daily, weekly or monthly in the background, even when nobody is signed in. It skips runs on battery and catches up if the PC was switched off.',
  },
  {
    title: 'Disk space explorer',
    icon: 'disk',
    body: "See exactly which folders and files are eating your storage: forgotten videos, old installers sitting in Downloads, files you haven't touched in years. Anything you remove goes to the Recycle Bin, so it can be restored.",
  },
  {
    title: 'Installed apps: size and last use',
    icon: 'apps',
    body: "Every program on your PC, sorted by size, with when it was installed and when it was last used. Old trials and programs you haven't opened in months are flagged. Remove them in one click with each program's own uninstaller.",
  },
  {
    title: 'Memory and performance monitor',
    icon: 'memory',
    body: "A live view of which apps are using your memory and processor right now, with all of an app's processes (every Chrome tab, for example) counted together. You can see which apps start automatically with Windows and close the heavy ones.",
  },
  {
    title: 'Safe, reversible speed-ups',
    icon: 'bolt',
    body: 'Tune your PC without the risk:',
    bullets: [
      'Turn off unnecessary startup programs (disabled, never deleted, and re-enable them any time)',
      'Switch power plans, with a battery warning for laptops',
      'Optimise drives the right way: TRIM for SSDs, defragment for hard drives (SSDs are never defragmented)',
      'Turn off visual effects for snappier performance on older PCs',
      "Repair Windows system files with Microsoft's built-in DISM and SFC tools",
    ],
    footnote:
      'Every change is recorded, and one click undoes them all. WinDokta also offers to create a System Restore point before making changes.',
  },
  {
    title: 'Hardware check-up and recommendations',
    icon: 'chip',
    body: 'WinDokta inspects your processor, memory (including free upgrade slots), drives (SSD or hard drive, health, free space), graphics driver, battery wear, TPM and Secure Boot. It then gives prioritised, plain-English advice such as:',
    examples: [
      'Upgrading to an SSD is the single biggest speed boost',
      'You have 1 free memory slot: add another 8 GB module',
      'Your graphics driver is over a year old',
      'This Windows 10 PC can be upgraded to Windows 11 for free',
    ],
    footnote: 'Save the full report as a web page or text file to share with your IT support.',
  },
]

export const windoktaScreenshots = [
  {
    src: `${ASSET_DIR}/screenshot-cleaner.png`,
    width: 1138,
    height: 787,
    caption: 'Cleaner: analyse junk files for every user, then clean only what you select.',
    alt: 'WinDokta Cleaner screen listing junk-file categories such as user and Windows temp files, Chrome, Edge, Firefox and Brave caches, thumbnail cache, error reports and Windows Update cache, with Analyze, Clean selected and Schedule buttons.',
  },
  {
    src: `${ASSET_DIR}/screenshot-optimiser.png`,
    width: 1138,
    height: 787,
    caption: 'Optimiser: disable startup programs safely, with one-click undo.',
    alt: 'WinDokta Optimiser screen showing a list of startup programs with their status, type and scope, tabs for power plan, drives, visual effects and Windows repair, an option to create a System Restore point and an Undo all optimisations button.',
  },
  {
    src: `${ASSET_DIR}/screenshot-hardware.png`,
    width: 1138,
    height: 787,
    caption: 'Hardware: a full check-up with prioritised, plain-English recommendations.',
    alt: 'WinDokta Hardware screen showing two recommendations, a medium-impact warning that memory is nearly full and a low-impact suggestion to restart the PC, above a table of system details including make and model, Windows version, BIOS and Secure Boot status.',
  },
  {
    src: `${ASSET_DIR}/screenshot-schedule.png`,
    width: 658,
    height: 737,
    caption: 'Scheduled cleaning: daily, weekly or monthly, skipping runs on battery.',
    alt: "WinDokta Scheduled cleaning dialog set to run weekly on Sunday at 12:00, with a checklist of junk-file categories to clean and a Don't run on battery power option.",
  },
]

export const windoktaSafety = [
  {
    title: 'Analyse first, confirm always.',
    body: 'Nothing is deleted or changed without your say-so.',
  },
  {
    title: 'Never touches personal data.',
    body: 'Browser cookies, passwords, history and bookmarks are left alone. Recent temp files (under 24 hours old) and files in use are skipped.',
  },
  {
    title: 'Strict safe-list.',
    body: 'It only cleans known junk locations and is hard-wired to refuse Windows, Program Files and your personal folders.',
  },
  {
    title: 'Everything is reversible.',
    body: "There's a one-click Undo, a System Restore point, and removed files go to the Recycle Bin.",
  },
  {
    title: 'No snake oil.',
    body: 'No "registry cleaning", no disabling Windows Defender or Windows Update, no risky service tweaks.',
  },
  {
    title: 'Private by design.',
    body: 'No internet connection, no tracking, no ads, no account. A full log of every action is kept on your PC.',
  },
]

export const windoktaRequirements =
  'Windows 10 (version 1809 or later) or Windows 11, and administrator rights. The required .NET Framework 4.8 is already built into Windows 10 (version 1903 or later) and Windows 11.'

export const windoktaFaq = [
  {
    q: 'Is WinDokta free?',
    a: 'Yes, it is free to download and use, for personal and business purposes. It is licensed as freeware by Privtech Solutions Ltd: you may share unmodified copies, but not sell or modify it. The full licence and disclaimer are in the app (About page).',
  },
  {
    q: 'Will it delete my documents or photos?',
    a: 'No. The cleaner only works in known junk locations such as temporary files and caches. The Disk space explorer only removes what you select, and those files go to the Recycle Bin.',
  },
  {
    q: 'Do I need to install it?',
    a: 'No. WinDokta is a single portable file. You can even run it from a USB stick.',
  },
  {
    q: "What if I don't like a change it made?",
    a: 'Open Optimiser and click Undo all optimisations. You can also use the System Restore point WinDokta offers to create before any change.',
  },
  {
    q: 'Does it send my data anywhere?',
    a: 'No. WinDokta works entirely offline and collects no information.',
  },
  {
    q: 'Why does it ask for administrator permission?',
    a: 'So it can clean every user account and system folder, and apply settings such as power plans and drive optimisation.',
  },
]
