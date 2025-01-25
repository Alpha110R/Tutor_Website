import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full" dir="rtl">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          enableAnimation={false}
          className={`
            col-span-full lg:col-span-8 row-span-2 flex-col items-start border border-yellow-500 rounded-xl p-6 bg-transparent shadow-md mx-4
          `}
        >
          <h2 className="text-3xl md:text-4xl text-center w-full font-bold mb-4 text-yellow-300">
            בואו ללמוד תכנות ולהכיר את עולם ה- AI
          </h2>
          <div className="font-light text-[1.3rem] text-right leading-relaxed text-white">
            רוצים ללמוד תכנות במדעי המחשב ולהכיר את עולם הבינה המלאכותית? הגעתם
            למקום הנכון!
            <br />
            אנחנו כאן כדי לעזור לכם להתמקצע, להעמיק ולהצליח. בין אם אתם{" "}
            <u>תלמידי יסודי, חטיבה ותיכון</u> – אנחנו מציעים שיעורים פרטיים
            וקבוצתיים במגוון נושאים מרתקים, הכוללים:
            <br />
            <br />
            <div className="text-center">
              💻 Java
              <br />
              💻 Python
              <br />
              💻 #C
              <br />
              💻 Android
              <br />
              💻 Scratch
              <br />
              🤖 בינה מלאכותית (AI)
              <br />
              💡 חשיבה תכנותית
              <br />
              💡 חשיבה יצירתית
              <br />✨ מדעי המחשב
            </div>
            <br />
            אנחנו מתאימים את השיעורים שלנו לרמות ולגילאים השונים, כך שכל תלמיד
            יקבל חוויית למידה ברמה הגבוהה ביותר.
            <br />
            <br />
            אז מי אנחנו?
            <br />
            צוות של מהנדסי תוכנה וסטודנטים נלהבים, שמטרתם להנגיש את הידע
            הטכנולוגי החשוב ביותר לדור הצעיר. בראש הצוות עומד מהנדס תוכנה עם
            ניסיון עשיר בתעשייה ויותר מ-3 שנות הדרכה מוצלחות לתלמידים מכל
            הגילאים והרמות.
            <br />
            <br />
            אנחנו נלווה אתכם בעבודות כיתה, פרויקטים, מבחנים – וגם נעניק לכם את
            הכלים לפיתוח חשיבה תכנותית יצירתית ומקצועית.
            <br />
            אז למה אתם מחכים? תשאירו פרטים ונחזור אליכם!
            <br />
            העתיד מתחיל כאן. 🚀
          </div>
        </ItemLayout>

        <div className="col-span-full lg:col-span-4 flex flex-wrap items-center justify-center gap-4">
          {[
            "שיעורים פרטיים",
            "שיעורים קבוצתיים",
            "תלמידי יסודי",
            "תלמידי חטיבה",
            "תלמידי תיכון",
            "מתאים לכל הרמות",
          ].map((text, index) => (
            <ItemLayout
              key={index}
              className="flex justify-start items-center border border-yellow-500 rounded-xl p-4 bg-transparent shadow-md w-full mx-4"
            >
              <p className="font-semibold text-2xl text-yellow-300">{text}</p>
            </ItemLayout>
          ))}
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
