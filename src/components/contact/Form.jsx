"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("שולחים את ההודעה שלכם...", {
      style: { direction: "rtl", textAlign: "right" },
    });

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success("קבלנו את ההודעה שלכם, נחזור אליכם בהקדם!", {
            id: toastId,
            style: { direction: "rtl", textAlign: "right" },
          });
        },
        (error) => {
          toast.error("הייתה תקלה בשליחת הודעה, נשמח שתתקשרו", {
            id: toastId,
            style: { direction: "rtl", textAlign: "right" },
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Mage",
      from_name: data.name,
      reply_to: data.email,
      phone: data.phone,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full flex flex-col items-center justify-center space-y-6"
        dir="rtl"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="שם מלא"
          {...register("name", {
            required: "שדה זה הוא חובה!",
            maxLength: {
              value: 20,
              message: "שם ארוך מדי, נשמח לקיצור",
            },
            minLength: {
              value: 3,
              message: "השם צריך להכיל לפחות 3 תווים.",
            },
          })}
          className="w-full p-4 text-lg rounded-lg shadow-lg text-foreground focus:outline-none focus:ring-4 focus:ring-accent/50 custom-bg text-right"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="דואר אלקטרוני"
          {...register("email", { required: "שדה זה הוא חובה!" })}
          className="w-full p-4 text-lg rounded-lg shadow-lg text-foreground focus:outline-none focus:ring-4 focus:ring-accent/50 custom-bg text-right"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="tel"
          placeholder="מספר טלפון"
          {...register("phone", {
            required: "שדה זה הוא חובה!",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "יש להזין מספר טלפון תקין (10 ספרות).",
            },
          })}
          className="w-full p-4 text-lg rounded-lg shadow-lg text-foreground focus:outline-none focus:ring-4 focus:ring-accent/50 custom-bg text-right"
        />
        {errors.phone && (
          <span className="inline-block self-start text-accent">
            {errors.phone.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          placeholder="לאיזה כיתה אתם מתעניינים?"
          {...register("message", {
            maxLength: {
              value: 100,
              message: "ההודעה צריכה להיות קצרה מ-100 תווים.",
            },
            minLength: {
              value: 5,
              message: "ההודעה צריכה להכיל יותר מ-5 תווים.",
            },
          })}
          className="w-full p-4 text-lg rounded-lg shadow-lg text-foreground focus:outline-none focus:ring-4 focus:ring-accent/50 custom-bg text-right"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value="אשמח לקבוע שיעור"
          className="px-12 py-5 text-lg font-semibold rounded-lg shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-4 focus:ring-accent/50 cursor-pointer capitalize text-right"
          type="submit"
        />
      </motion.form>
    </>
  );
}
