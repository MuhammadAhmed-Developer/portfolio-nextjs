import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "bisresume",
    title: "Bisresume",
    description:
      "A AI Based Resume Maker Web application developed using Nextjs, TypeScript, Python and KendoReact PDF for Download PDF.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "https://github.com/MuhammadAhmed-Developer/bisreusme",
    // url: "https://www.nixlab.co.in/projects/com.nixlab.rippl",
    // url: "https://github.com/nixrajput/social-media-app-flutter/releases",
    tags: ["Nextjs", "Typescript", "Python", "Redux", "KendoReactPdf"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  {
    id: "notes-app",
    title: "",
    description:
      "Notes Mobile App developed using React Native, Redux and Nextjs for Backend.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/ecommerce-web-reactjs",
    // url: "https://nixlab-shop.vercel.app",
    tags: ["React Native", "Redux", "Nextjs"],
  },
  {
    id: "busniess-website",
    title: "Myunipixel A Tech Startup",
    description: "A Busniess Web application developed using Nextjs",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    // githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://www.myunipixel.com/",
    tags: ["Nextjs"],
  },
  {
    id: "social-media-api-nodejs",
    title: "IlmUlQuran Online Quran Academy",
    description:
      "The Online Quran Academy is a web application built with React and Firebase that simplifies remote Quran learning for students of all ages",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Freelance,
    // githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    url: "https://ilmulquran.online",
    tags: ["Reactjs", "Firebase"],
  },
  {
    id: "Admin-dashboard",
    title: "School Management System",
    description:
      "A School Management System application developed using Nextjs, Prisma and Mongodb",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/MuhammadAhmed-Developer/admin-dashboard",
    url: "https://admin-dashboard-eight-lilac.vercel.app/",
    tags: ["Nextjs", "Prisma", "Mongodb", "React Charts"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "My Hotel",
    description: "Resturant Web Design using HTML, Css, Js and Bootstrap",
    icon: "/skills/html.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/MuhammadAhmed-Developer/Resturant--project",
    url: "https://myhotel.surge.sh/",
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
