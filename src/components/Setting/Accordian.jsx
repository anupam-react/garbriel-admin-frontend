import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <p className="text-[18px] text-[#000000B2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
          </p>
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempor lacus nec odio semper egestas. Integer gravida pulvinar augue,
          a facilisis enim scelerisque et. Quisque a ligula vestibulum, suscipit
          lectus vitae, blandit turpis.
        </AccordionBody>
      </Accordion>
    </>
  );
}
