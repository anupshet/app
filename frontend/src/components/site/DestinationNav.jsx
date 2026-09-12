import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";

export const DestinationNav = ({ destination, mobile = false, expanded, onToggle, onNavigate }) => {
  const prefix = `${mobile ? "mnav" : "nav"}-${destination.id}`;
  const links = <>
    <Link to={destination.path} data-testid={`${prefix}-overview`} onClick={onNavigate} className="block px-4 py-3 text-xs text-[#8B5A2B]">Explore {destination.name}</Link>
    {destination.resorts.map((resort) => <Link key={resort.id} to={resort.path} data-testid={`${prefix}-${resort.id}`} onClick={onNavigate} className="block px-4 py-3 text-sm hover:bg-[#D4CBBF]/30">{resort.navName}</Link>)}
  </>;
  if (mobile) return (
    <div className="border-b border-[#0A170F]/10">
      <button data-testid={`${prefix}-trigger`} aria-expanded={expanded} aria-controls={`${prefix}-menu`} onClick={onToggle} className="flex w-full items-center justify-between py-4 text-left font-serif text-2xl text-[#0A170F]">
        {destination.name} Resorts<ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && <div id={`${prefix}-menu`} data-testid={`${prefix}-menu`} className="mb-3 border-l border-[#8B5A2B]/30 text-[#0A170F]">{links}</div>}
    </div>
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger data-testid={`${prefix}-trigger`} className="flex items-center gap-1.5 py-3 text-[11px] uppercase tracking-[0.1em] transition-opacity hover:opacity-70">
        {destination.name} Resorts<ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={12} className="z-[60] min-w-[230px] rounded-sm border-[#D4CBBF] bg-[#F7F5F0] p-2 text-[#0A170F] shadow-lg" data-testid={`${prefix}-menu`}>
        <DropdownMenuItem asChild><Link to={destination.path} data-testid={`${prefix}-overview`} className="cursor-pointer px-3 py-3 text-xs text-[#8B5A2B]">Explore {destination.name}</Link></DropdownMenuItem>
        {destination.resorts.map((resort) => <DropdownMenuItem key={resort.id} asChild><Link to={resort.path} data-testid={`${prefix}-${resort.id}`} className="cursor-pointer px-3 py-3">{resort.navName}</Link></DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};