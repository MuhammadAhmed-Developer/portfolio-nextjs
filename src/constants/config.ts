const LocalConfig = {
  values: {
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
    AUTOPREFIXER_GRID: process.env.AUTOPREFIXER_GRID,
    NEXT_PUBLIC_GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_VERCEL_TOKEN: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
    NEXT_PUBLIC_RESUME_LINK:
      "https://drive.google.com/file/d/18k6Tg5LX482O07M3oHsz5FUnSgnkodrp/view?usp=sharing" ||
      "#",
  },
};

export default LocalConfig;
