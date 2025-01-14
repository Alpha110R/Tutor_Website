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
    const toastId = toast.loading("Sending your message, please wait...");

    toast.info(
      "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via codebucks27@gmail.com.",
      {
        id: toastId,
      }
    );

    // comment out the above toast.info and uncomment the below code to enable emailjs

    // emailjs
    //   .send(
    //     process.env.NEXT_PUBLIC_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     params,
    //     {
    //       publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    //       limitRate: {
    //         throttle: 5000, // you can not send more then 1 email per 5 seconds
    //       },
    //     }
    //   )
    //   .then(
    //     () => {
    //       toast.success(
    //         "I have received your message, I will get back to you soon!",
    //         {
    //           id: toastId,
    //         }
    //       );
    //     },
    //     (error) => {
    //       // console.log("FAILED...", error.text);
    //       toast.error(
    //         "There was an error sending your message, please try again later!",
    //         {
    //           id: toastId,
    //         }
    //       );
    //     }
    //   );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Wizards",
      from_name: data.name,
      reply_to: data.email,
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
        <motion.textarea
          variants={item}
          placeholder="הודעה"
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
