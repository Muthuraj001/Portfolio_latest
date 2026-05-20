import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Bookmark, Share2 } from "lucide-react";
import Markdown from "react-markdown";
import toast from "react-hot-toast";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Badge } from "../components/ui/Badge";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { blogs } from "../data/blogs";
import { SEO } from "../components/seo/SEO";

export function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();

  // Retrieve matching article dataset
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <Section py="lg">
        <Container className="text-center space-y-4">
          <Bookmark className="mx-auto h-12 w-12 text-zinc-650" />
          <h2 className="text-2xl font-bold text-white">Log Entry Not Found</h2>
          <p className="text-sm text-zinc-400 font-normal">The requested blog post structure could not be retrieved.</p>
          <Link to="/blog">
            <Button variant="secondary" size="sm" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to logs list
            </Button>
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <div className="relative">
      <SEO title={`${post.title} - Tech Log`} description={post.excerpt} slug={`blog/${post.slug}`} type="article" />

      {/* Header Banner Context */}
      <div className="relative border-b border-zinc-90 w-full bg-zinc-950/40 py-12 md:py-18 text-left">
        <Container className="space-y-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-emerald-400 transition-colors duration-150"
          >
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
            Back to Logbook
          </Link>

          <div className="space-y-4 max-w-4xl pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary" className="font-mono text-[10px]">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-3 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                <span className="flex items-center">
                  <Calendar className="mr-1 h-3.5 w-3.5 text-emerald-500/80" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-3.5 w-3.5 text-emerald-500/80" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4.5xl leading-tight">
              {post.title}
            </h1>
          </div>
        </Container>
      </div>

      {/* Main Prose Canvas */}
      <Section py="md" className="relative">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Main Article Content Columns */}
          <div className="lg:col-span-8 space-y-8 bg-zinc-900/5 p-4 sm:p-8 rounded-xl border border-zinc-900/40">
            
            {/* Custom styled markdown-body wrapper block */}
            <div className="markdown-body prose prose-invert prose-emerald max-w-none text-zinc-350 text-sm leading-relaxed space-y-4 font-normal">
              <Markdown>{post.content}</Markdown>
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-900">
              {post.tags.map((tg) => (
                <Badge key={tg} variant="secondary" className="font-mono text-[10px] bg-zinc-950">
                  #{tg}
                </Badge>
              ))}
            </div>

          </div>

          {/* Right hand details card */}
          <div className="lg:col-span-4 space-y-6">
            
            <Card className="p-6 bg-zinc-900/25 border-zinc-850 text-left space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00F5FF] block">Author Details</span>
              
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/10 flex items-center justify-center text-sm font-extrabold text-emerald-400">
                  TH
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Thulasidharan</h4>
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase">Chennai, TN, India</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Passionate about orchestrating bulletproof DevOps configurations and developing secure web architectures.
              </p>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 font-semibold uppercase">Share Log</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Article link copied safely!", { id: "share-toast" });
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded bg-zinc-950 text-zinc-400 border border-zinc-850 hover:text-white"
                  aria-label="Copy to clipboard"
                >
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </Card>

          </div>

        </Container>
      </Section>
    </div>
  );
}
