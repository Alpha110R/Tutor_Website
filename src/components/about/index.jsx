import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-end border border-yellow-500 rounded-xl p-6 bg-transparent shadow-md"
          }
        >
          <h2 className="text-2xl md:text-3xl text-right w-full capitalize font-bold mb-4 text-yellow-500">
            גלו את קסם התכנות
          </h2>
          <p className="font-light text-sm sm:text-base md:text-lg text-right leading-relaxed text-white">
            ברוכים הבאים לעולם הקוד, שבו יצירתיות פוגשת טכנולוגיה! אני עובד
            כמהנדס תוכנה במהלך היום, ובזמני הפנוי אני מקדיש את עצמי להדרכה, כי
            שיתוף האהבה שלי לתכנות ממלא אותי בשמחה. עם יותר מ-3 שנות ניסיון
            כמדריך מסור, אני מתמחה בהדרכת תלמידים מכל הרמות - מחטיבת הביניים ועד
            התיכון ומעבר לכך - במסע שלהם לשליטה במדעי המחשב, מדעי הנתונים והנדסת
            תוכנה. בין אם אתם מתמודדים עם הפרויקט הראשון שלכם או משפרים את
            המיומנויות שלכם ב-Java, Python או C#, השיעורים שלי נועדו להעניק
            השראה ולהעצים אתכם. אני מספק הדרכה פרטנית, שיעורים בקבוצות וליווי
            בפרויקטים בית-ספריים, ומציע סביבה תומכת שתעזור לכם להפוך את הרעיונות
            שלכם למציאות. בואו לחקור יחד את האפשרויות המרתקות של עולם התכנות!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            30+ <sub className="font-semibold text-base">תלמידים</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">שנות הדרכה</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=java,python,ai,aiscript,cs,react,androidstudio,vscode,spring,docker,firebase,git,github,linux,mongodb,postgres,pug`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
