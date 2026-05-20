import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppLayout } from "./components/layout/AppLayout";
import { Compass } from "lucide-react";

// Code splitting / Lazy-loaded subpages
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("./pages/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails").then((m) => ({ default: m.ProjectDetails })));
const Experience = lazy(() => import("./pages/Experience").then((m) => ({ default: m.Experience })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const BlogDetails = lazy(() => import("./pages/BlogDetails").then((m) => ({ default: m.BlogDetails })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Resume = lazy(() => import("./pages/Resume").then((m) => ({ default: m.Resume })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

// Dynamic loading splash page fallback indicator
function PageLoadingFallback() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-4">
      <div className="relative flex h-10 w-10">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/20 opacity-75"></span>
        <span className="relative inline-flex h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 items-center justify-center text-emerald-400">
          <Compass className="h-5 w-5 animate-spin" />
        </span>
      </div>
      <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Synchronizing modules...</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Toast provider */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#09090b",
            color: "#f4f4f5",
            border: "1px solid #18181b",
            fontSize: "12px",
            fontFamily: "monospace",
          },
        }}
      />

      <AppLayout>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}
