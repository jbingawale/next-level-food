import classes from "./page.module.css";

import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealDetails({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`${process.env.AWS_S3_BUCKET_IMAGE_URL}/${image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>Name</a>
          </p>
          <p className={classes.summery}>{meal.summery}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
