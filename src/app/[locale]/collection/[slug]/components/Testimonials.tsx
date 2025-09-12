import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { ReviewType } from "@/data/types";

const Testimonials = () => {
  const t = useTranslations("Pages.ProductPage.testimonials");
  const reviews: ReviewType[] = t.raw("reviews");

  return (
    <div className="my-24">
      <h4 className="text-xl font-medium border-b mb-8 pb-6">{t("title")}</h4>
      <ul className="flex flex-col gap-12">
        {reviews.map((review) => (
          <li
            key={review.title}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-b pb-6 "
          >
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:order-2 items-start">
              <div className="flex items-center gap-1 lg:col-span-1">
                {[...Array(review.rate)].map((_, i) => (
                  <Star
                    key={`full-${i}`}
                    fill="currentColor"
                    stroke="none"
                    className="text-yellow-400 size-4 xl:size-5"
                  />
                ))}
                {[...Array(5 - review.rate)].map((_, i) => (
                  <Star
                    key={`empty-${i}`}
                    fill="currentColor"
                    className="text-gray-200 size-4 xl:size-5"
                  />
                ))}
                <span className="ml-2">{review.rate}</span>
              </div>
              <div className="space-y-4 lg:col-span-2 text-sm ">
                <h5 className="font-medium">{review.title}</h5>
                <p className=" text-muted-foreground ">{review.description1}</p>
                {review.description2 && (
                  <p className=" text-muted-foreground ">
                    {review.description2}
                  </p>
                )}
              </div>
            </div>

            {/*  */}
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:order-1 text-sm ">
              <h6 className="font-medium">{review.name}</h6>
              <span className="block lg:hidden h-6 w-px bg-zinc-200" />
              <p className="text-zinc-600">{review.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
