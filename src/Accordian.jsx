import faqs from "./Data";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordian({ Data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div>
      {Data.map((el, i) => (
        <AccordionItem
          currOpen={currOpen}
          onCurrOpen={setCurrOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={i}
        />
      ))}
    </div>
  );
}
