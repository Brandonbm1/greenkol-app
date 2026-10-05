import { useId, useState, type ReactNode } from "react";
import { LuChevronDown } from "react-icons/lu";
import "../styles/Accordion.css";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export const Accordion = ({
  items,
  defaultOpen = null,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.title}>
            <button
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.title}</span>
              <LuChevronDown className="accordion-icon" />
            </button>
            <div className="accordion-panel" id={panelId} role="region">
              <div className="accordion-panel-inner">
                <div className="accordion-content">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
