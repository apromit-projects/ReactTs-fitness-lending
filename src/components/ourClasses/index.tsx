// type Props = {}

import Heading from "@/utils/Heading";
import ClassesSlider from "./ClassesSlider";
import { motion } from "framer-motion";
import { baseMotion, slideLeft } from "@/utils/MotionPresets";

const OurClasses = () => {
  return (
    <section id="ourClasses" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.7 }}
          variants={slideLeft}
          className="md:w-3/5"
        >
          <Heading>OUR CLASSES</Heading>
          <p className="py-5 text-gray-700">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider />
      </div>
    </section>
  );
};

export default OurClasses;
