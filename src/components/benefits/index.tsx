import { benefits } from "@/utils/benefitData";
import Heading from "@/utils/Heading";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/utils/ActionButton";

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div className="md:my-5 md:w-3/5">
        <Heading>MORE THAN JUST GYM</Heading>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to get
          you to your ultimate fitness goals with ease. We provide true care
          into each and every member.
        </p>
      </motion.div>
      <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((benefit) => (
          <Benefit key={benefit.title} {...benefit} />
        ))}
      </motion.div>
      <motion.div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
        <motion.div className="flex-1">
          <img
            src={BenefitsPageGraphic}
            alt="Benefits Page Graphic"
            className="mx-auto"
          />
        </motion.div>
        <motion.div className="flex-1 relative">
          <div className="before:absolute before:hidden before:md:block before:-left-20 before:-top-20 before:z-1 before:content-abstractwaves">
            <Heading>
              MILLIONS OF HAPPY MEMBERS GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </Heading>
            <div>
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </div>
            <div className="flex flex-wrap mt-16 md:justify-between justify-center items-center gap-8 relative">
              <ActionButton variant="button">Join Now</ActionButton>
              <div className="before:z-[-1] before:content-sparkles"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
