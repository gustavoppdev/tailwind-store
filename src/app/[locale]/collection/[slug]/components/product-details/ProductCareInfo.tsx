const care = {
  title: {
    pt: "Tecido e Cuidados",
    en: "Fabric & Care",
  },
  items: [
    { pt: "Apenas os melhores materiais", en: "Only the best materials" },
    {
      pt: "Produzido localmente e de forma ética",
      en: "Ethically and locally made",
    },
    {
      pt: "Pré-lavado e pré-encolhido para ajuste ideal",
      en: "Pre-washed and pre-shrunk for ideal fit",
    },
    {
      pt: "Lavar à máquina com cores semelhantes em água fria",
      en: "Machine wash cold with similar colors",
    },
  ],
};

type ProductCareInfoProps = {
  locale: "pt" | "en";
};

export const ProductCareInfo = ({ locale }: ProductCareInfoProps) => {
  return (
    <div className="text-base mt-8">
      <h4 className="font-medium">{care.title[locale]}</h4>
      <ul className="text-zinc-500 list-disc space-y-1 ml-10 mt-4">
        {care.items.map((item, index) => (
          <li key={item[locale] || index}>{item[locale]}</li>
        ))}
      </ul>
    </div>
  );
};
