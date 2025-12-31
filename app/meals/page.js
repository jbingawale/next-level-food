import Link from "next/link";
import classess from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classess.header}>
        <h1>
          Delicious meals, created
          <span className={classess.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classess.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classess.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
