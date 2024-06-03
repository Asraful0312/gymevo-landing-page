import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectedPage } from "@/utils/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import Title from "@/shared/Title";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="mx-auto w-full max-w-6xl px-6 py-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="min-h-full w-full max-w-5xl px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Title>
              <span className="text-primary">JOIN NOW</span> TO GET IN SHAPE
            </Title>
            <p className="my-5 text-sm">
              Eu ipsum id egestas risus tempus enim semper felis quis. Nec
              consectetur ac venenatis facilisi est. Eget ac turpis id.
            </p>
          </div>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-8 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              method="POST"
              action="https://formspree.io/f/xbjnvkdz"
              className="mx-auto flex w-full flex-col gap-6"
            >
              <div>
                <Input
                  className="w-full focus:border-primary"
                  type="text"
                  name="username"
                  placeholder="John Doe"
                  autoComplete="off"
                  {...register("username", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.username && (
                  <p className="mt-1 text-red-500">
                    {errors.username.type === "required" &&
                      "This field is required."}
                    {errors.username.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>

              <div>
                <Input
                  className="focus:border-primary"
                  name="email"
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  className="focus:border-primary"
                  name="message"
                  placeholder="Enter your message"
                  autoComplete="off"
                  autoCorrect="on"
                  rows={10}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>

              <div>
                <Button
                  className="flex-start disabled:bg-primary/70"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
              {/* <ValidationError errors={state.errors} /> */}
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] lg:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
