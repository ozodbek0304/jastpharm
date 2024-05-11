import Link from "next/link";
import React from "react";

interface propsType{
    start:number;
    end:number
}

const LineUpLinks = ({start,end}:propsType) => {
  const lineUpData = [
    {
      id: 1,
      title: "Accessories",
    },
    {
      id: 2,
      title: "Bandages",
    },
    {
      id: 3,
      title: "Gypsum Foundations",
    },
    {
      id: 4,
      title: "Patches And Tapes",
    },
    {
      id: 5,
      title: "Surgical Sutures",
    },
    {
      id: 6,
      title: "Swabs",
    },
    {
      id: 7,
      title: "Wound Healing",
    },
    {
      id: 8,
      title: "Disinfectants",
    },
    {
      id: 9,
      title: "Disposable Products",
    },
    {
      id: 10,
      title: "Face Masks - Protective",
    },
    {
      id: 11,
      title: "Gloves",
    },
    {
      id: 12,
      title: "Protective Clothing",
    },
    {
      id: 13,
      title: "Sterilization",
    },
    {
      id: 14,
      title: "Surgical Foils",
    },
    {
      id: 15,
      title: "Accessories",
    },
    {
      id: 16,
      title: "Devices",
    },
    {
      id: 17,
      title: "Diagnostic Tests",
    },
    {
      id: 18,
      title: "Dyes",
    },
    {
      id: 19,
      title: "Pipettes",
    },
    {
      id: 20,
      title: "Tubes",
    },
    {
      id: 21,
      title: "Test-Tubes",
    },
    {
      id: 22,
      title: "Care Products",
    },
    {
      id: 23,
      title: "Claws And Forceps",
    },
    {
      id: 24,
      title: "Electrosurgery",
    },
    {
      id: 25,
      title: "Needles",
    },
    {
      id: 26,
      title: "Plaster Tools",
    },
    {
      id: 27,
      title: "Scalpels, Blades",
    },
    {
      id: 28,
      title: "Scissors",
    },
    {
      id: 29,
      title: "Accessories",
    },
    {
      id: 30,
      title: "Biopsy Tools",
    },
    {
      id: 31,
      title: "Endoscopes",
    },
    {
      id: 32,
      title: "Monitoring",
    },
    {
      id: 33,
      title: "Otoscopes",
    },
    {
      id: 34,
      title: "Oxygen Concentrators",
    },
    {
      id: 35,
      title: "Thermometers",
    },
    {
      id: 36,
      title: "Blades",
    },
    {
      id: 37,
      title: "Education",
    },
    {
      id: 38,
      title: "Germicidal Lamps",
    },
    {
      id: 39,
      title: "Infusion Stands",
    },
    {
      id: 40,
      title: "Lighting",
    },
    {
      id: 41,
      title: "Machines",
    },
    {
      id: 42,
      title: "Tables And Assistants",
    },
  ];
  return (
    <>
      {lineUpData?.slice(start, end)?.map((item) => (
        <li key={item.id}>
          <Link href="/shop">{item?.title}</Link>
        </li>
      ))}
    </>
  );
};

export default LineUpLinks;
