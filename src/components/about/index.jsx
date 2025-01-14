import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full" dir="rtl">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={`
            col-span-full lg:col-span-8 row-span-2 flex-col items-start border border-yellow-500 rounded-xl p-6 bg-transparent shadow-md mx-4
          `}
        >
          <h2 className="text-3xl md:text-4xl text-right w-full capitalize font-bold mb-4 text-yellow-500">
            בואו לתכנת ולהכיר את עולם ה- AI
          </h2>
          <p className="font-light text-[1.3rem] text-right leading-relaxed text-white">
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

        <div className="col-span-full lg:col-span-4 flex flex-wrap items-center justify-center gap-4">
          <ItemLayout className="flex justify-start items-center border border-yellow-500 rounded-xl p-4 bg-transparent shadow-md w-full mx-4">
            <p className="font-semibold text-4xl sm:text-3xl text-yellow-500">
              30+ <sub className="text-[1rem]">תלמידים</sub>
            </p>
          </ItemLayout>
          <ItemLayout className="flex justify-start items-center border border-yellow-500 rounded-xl p-4 bg-transparent shadow-md w-full mx-4">
            <p className="font-semibold text-4xl sm:text-3xl text-yellow-500">
              3+ <sub className="text-[1rem]">שנות הדרכה</sub>
            </p>
          </ItemLayout>
        </div>

        <ItemLayout className="col-span-full row-span-2 flex justify-center items-center border border-yellow-500 rounded-xl p-6 bg-transparent shadow-md mx-4">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6">
            {[
              "java",
              "python",
              "ai",
              "aiscript",
              "cs",
              "react",
              "androidstudio",
              "vscode",
              "spring",
              "docker",
              "firebase",
              "git",
              "github",
              "linux",
              "mongodb",
              "postgres",
              "pug",
            ].map((icon, index) => (
              <img
                key={index}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt={icon}
                loading="lazy"
              />
            ))}
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
