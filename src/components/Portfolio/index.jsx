import CardItem from "../CardItem";

export default function Portfolio() {
  const dataPortfolio = [
    {
      name: "GreatestBeam",
      imageName: "portfo4.png",
      type: "Web Design",
      url: "https://www.figma.com/file/rTALiBTxsljPNJ0DZkhyYC/(Preview)Greatest-Beam-Fashion---Landing-Page?type=design&node-id=22%3A90&mode=design&t=rPjsJeWEBwHOVZJG-1",
      year: 2023,
    },
    {
      name: "LuxRestaurant",
      imageName: "portfo1.png",
      type: "Design & Development",
      url: "https://luxrestaurant.vercel.app/",
      year: 2023,
    },
    {
      name: "NovaBakery",
      imageName: "portfo2.png",
      type: "Design & Development",
      url: "https://nova-bakery.vercel.app/",
      year: 2023,
    },
    {
      name: "InsightGathers",
      imageName: "portfo3-new.png",
      type: "Design & Development",
      url: "https://www.figma.com/file/5Oma9E8Zk1IkkKRbv19sOo/(Preview)-InsightGathers?type=design&node-id=58%3A15&mode=design&t=2RRH7yljb8UMvkU2-1",
      year: 2024,
    },
  ];

  return (
    <section id="portfolio" className="mx-auto px-5 py-24 md:px-32">
      <div className="w-full flex flex-col text-white">
        <div className="border-white border-b-[0.4px] py-12">
          <h2 className="text-5xl font-extrabold mb-2">Portfolio</h2>
        </div>
        {dataPortfolio
          .sort((a, b) => b.year - a.year)
          .map((portfo) => (
            <div
              key={portfo.name}
              className="flex flex-wrap items-start justify-between gap-5 hover:bg-third border-white border-b-[0.4px] py-12"
            >
              <div className="flex flex-col gap-2">
                <p className="text-lg">{portfo.type}</p>
                <h2 className="text-4xl font-medium">{portfo.name}</h2>
                <p className="text-lg">{portfo.year}</p>
              </div>
              <div className="w-full md:w-1/2">
                <CardItem
                  name={portfo.name}
                  imageName={portfo.imageName}
                  url={portfo.url}
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
