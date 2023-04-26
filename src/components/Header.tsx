// PhosphorIcons import
import { Sparkle } from "phosphor-react";

// CSS import
import "./Header.css";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  );
}
