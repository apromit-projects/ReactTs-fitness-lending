import { type ContactFormType, contactSchema } from "@/utils/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Heading from "@/utils/Heading";
import TextInput from "../formElements/TextInput";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import {
  baseMotion,
  slideLeft,
  slideRight,
  slideUp,
} from "@/utils/MotionPresets";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("Form submitted with: ", data);

    setTimeout(() => {
      alert("Thx for your msg!");
      reset();
    }, 1000);
  };

  return (
    <section id="contactUs" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.5 }}
        variants={slideUp}
        className="md:w-3/5"
      >
        <Heading>
          <span className="text-primary-500">Join Now</span> TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>
      <div className="mt-10 md:flex justify-between gap-8">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.7 }}
          variants={slideLeft}
          className="mt-10 basis-3/5 md:mt-0"
        >
          <form
            action=""
            className="relative z-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              placeholder="NAME"
              register={register("name")}
              error={errors.name}
            />
            <TextInput
              type="email"
              placeholder="EMAIL"
              register={register("email")}
              error={errors.email}
            />
            <TextInput
              type="textarea"
              placeholder="MESSAGE"
              register={register("message")}
              error={errors.message}
              className="resize-none"
            />
            <button
              type="submit"
              className="cursor-pointer bg-secondary-500 mt-5 rounded-lg px-20 py-3 animate hover:text-white"
            >
              SUBMIT
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // variants={slideUp}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                ✅ Your message has been sent successffuly!
              </motion.p>
            )}
          </form>
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.7 }}
          variants={slideRight}
          className="mt-10 basis-2/5 md:mt-0"
        >
          <div className="w-full relative before:absolute before:-right-10 before:-bottom-20 before:z-1 md:before:content-evolvetext">
            <img
              src={ContactUsPageGraphic}
              alt="Contact Us Page"
              className="w-full relative z-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
