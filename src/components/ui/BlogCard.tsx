import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { BlogPost } from "../../data/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card hoverGlow className="flex flex-col h-full justify-between border-zinc-800/80 bg-zinc-900/25 text-left p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="primary" className="font-mono text-[10px]">
            {post.category}
          </Badge>
          <div className="flex items-center space-x-3 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
            <span className="flex items-center">
              <Calendar className="mr-1 h-3 w-3 text-emerald-500/80" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-3 w-3 text-emerald-500/80" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Link to={`/blog/${post.slug}`} className="group block">
            <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
              {post.title}
            </h3>
          </Link>
          <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-zinc-800/60 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-zinc-500">
              #{tag.toLowerCase().replace(" ", "")}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors duration-150 group"
        >
          Read Article
          <ArrowUpRight className="ml-1 h-3.5 w-3.5 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150" />
        </Link>
      </div>
    </Card>
  );
}
