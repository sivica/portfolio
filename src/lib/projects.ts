export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  context: string;
  years: string;
  summary: string[];
  stack: string[];
  interviewHook: string;
  links: ProjectLink[];
  images: { src: string; alt: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "widex",
    name: "Widex companion apps",
    context: "INSCALE · Widex Allure & Widex Moment",
    years: "2021 – 2025",
    summary: [
      "Hearing-aid companion apps live under hard constraints: reliable Bluetooth Low Energy pairing, battery awareness, offline-friendly state, and accessibility for users who depend on the device.",
      "Over four years I owned Compose UI, Retrofit/Moshi networking, Coil media, Room storage, animations, and App Center analytics across Allure and Moment — shipping production companion UX without leaking proprietary firmware detail.",
      "The work sits at the intersection of consumer polish and device reliability — the differentiator most senior Android roles underweight until they need it.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "BLE",
      "Room",
      "Retrofit",
      "Moshi",
      "Coil",
      "App Center",
    ],
    interviewHook:
      "BLE pairing flows, Compose adoption in a production companion app, and analytics that survive real device fleets.",
    links: [
      {
        label: "Widex Allure on Play",
        href: "https://play.google.com/store/apps/details?id=com.widex.dchip&hl=en",
      },
      {
        label: "Widex Moment on Play",
        href: "https://play.google.com/store/apps/details?id=com.widex.pa&hl=en",
      },
    ],
    images: [
      {
        src: "/work/widex/allure-1.png",
        alt: "Widex Allure companion app screen from Google Play",
      },
      {
        src: "/work/widex/moment-2.png",
        alt: "Widex Moment companion app screen from Google Play",
      },
    ],
    accent: "#6f9b86",
  },
  {
    slug: "premier-league",
    name: "Premier League",
    context: "2Coders · Official Premier League app",
    years: "2025 – present",
    summary: [
      "High-traffic sports apps leave little room for speculative rewrites — the job is to refresh Compose UI and keep production stable under matchday load.",
      "At 2Coders I work on the official Premier League Android app in Kotlin and Jetpack Compose: refreshed interfaces, production bug fixes, and shipping inside a large existing codebase.",
      "Scope is honest: UI refresh and maintenance ownership, not a greenfield architecture claim — which is exactly what most modern-Android job descriptions need.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android SDK"],
    interviewHook:
      "Shipping Compose UI inside a large, brand-visible sports codebase without breaking matchday habits.",
    links: [
      {
        label: "Open on Play Store",
        href: "https://play.google.com/store/apps/details?id=com.pl.premierleague&hl=en",
      },
    ],
    images: [
      {
        src: "/work/premier-league/screen-1.png",
        alt: "Premier League app screen from Google Play",
      },
      {
        src: "/work/premier-league/screen-2.png",
        alt: "Premier League app secondary screen from Google Play",
      },
    ],
    accent: "#c8102e",
  },
  {
    slug: "movieapp",
    name: "MovieApp",
    context: "Open source · Kotlin Multiplatform sample",
    years: "2026",
    summary: [
      "MovieApp is the public proof piece: a Kotlin + Compose movie browser against TMDB with paging, search debounce, Hilt DI, unit tests, CI, and documented architecture tradeoffs.",
      "Domain models and Ktor networking live in a `:shared` KMP module; Compose UI stays Android-only — a deliberate boundary you can walk in an interview.",
      "Loading, empty, and error states are first-class, not afterthoughts. Clone it, run the tests, open the screenshots.",
    ],
    stack: [
      "Kotlin",
      "Compose",
      "Paging 3",
      "Hilt",
      "Ktor",
      "KMP",
      "CI",
    ],
    interviewHook:
      "Live walkthrough of paging streams, DI, KMP shared boundaries, and the tradeoffs already written in the README.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/sivica/movieapp",
      },
    ],
    images: [
      {
        src: "/work/movieapp/popular.png",
        alt: "MovieApp popular movies list on Pixel emulator",
      },
      {
        src: "/work/movieapp/detail.png",
        alt: "MovieApp movie detail screen",
      },
    ],
    accent: "#d4a35c",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
