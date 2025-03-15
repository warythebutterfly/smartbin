import React, { useState } from "react";
import { Button, Heading, Input, Label, Text } from "@/components/ui";
import { Jost } from "next/font/google";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormFields, contactFormSchema } from "@/utils/validationSchema";
import { CheckIcon } from "@/components/icons";
import contactFormEmailTemplate from "@/templates/contactForm";

const jost = Jost({ subsets: ["latin"] });

const BecomePartner = () => {
  const [isSubmmitting, setIsSubmmitting] = useState(false);
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormFields) => {
    setIsSubmmitting(true);
    setIsContactFormSubmitted(false);
    try {
      const emailTemplate = contactFormEmailTemplate(
        data.name,
        data.email,
        data.country,
        data.city,
        data.phone,
        data.subject,
        data.message,
      );

      console.log(emailTemplate);

      const response = await fetch("/api/mailService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailTemplate),
      });
      // const response = await fetch(
      //   "https://www.formbackend.com/f/f7c8d07d7d517600",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ ...data }),
      //   },
      // );
      console.log(response);
      if (response.ok) setIsContactFormSubmitted(true);
      setIsSubmmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmmitting(false);
    }
  };

  return (
    <div className="pt-[112px] pb-[106px] bg-[#F9FAFB]">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row justify-between mb-14 gap-10 md:gap-[257px]">
          <div className="w-full max-w-[300px]">
            <Heading className="text-4xl text-primary tracking-[-0.32px] flex-shrink-0">
              Become a Partner
            </Heading>
            <hr className="w-16 h-[2px] bg-[#2F80ED]" />
          </div>

          <Text className={`text-[#534E50] leading-8 ${jost.className}`}>
            We can transform plastic waste into sustainable solutions and bring
            innovative waste management ideas to life. Contact us below, and
            let&apos;s create a cleaner, greener future together!
          </Text>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-[80px]">
          <div className="w-full md:w-1/2">
            <div className="bg-[#F3F4F6] rounded-xl p-8 md:p-16 flex flex-col gap-5">
              {/* <div>
                <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
                  Phone:
                </Text>
                <Text className="text-[#4B5563] leading-6">(406) 555-0120</Text>
              </div> */}

              <div>
                <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
                  Email:
                </Text>
                <Text className="text-[#4B5563] leading-6">
                  yctplastogashub@gmail.com
                </Text>
              </div>

              {/* <div>
                <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
                  Address:
                </Text>
                <Text className="text-[#4B5563] leading-6">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </Text>
              </div> */}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            {isContactFormSubmitted ? (
              <div className="text-center">
                <Heading
                  as="h3"
                  className="text-2xl text-primary mb-4 flex items-center justify-center gap-4"
                >
                  Thank You! <CheckIcon />
                </Heading>
                <p>
                  Your message has been submitted. We&apos;ll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-16"
              >
                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Name*"
                          errorMsg={errors.name?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="email"
                          placeholder="Email*"
                          errorMsg={errors.email?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Country*"
                          errorMsg={errors.country?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="City*"
                          errorMsg={errors.city?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Phone*"
                          errorMsg={errors.phone?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="subject"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Message Subject*"
                          errorMsg={errors.subject?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <div className="flex flex-col">
                  <Label>
                    <Controller
                      name="message"
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder="Message*"
                          errorMsg={errors.message?.message}
                          {...field}
                        />
                      )}
                    />
                  </Label>
                </div>

                <input
                  type="hidden"
                  id="g-recaptcha-response"
                  name="g-recaptcha-response"
                />

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-[184px] h-14 font-medium text-primary border-[#6B7280]"
                  >
                    {isSubmmitting ? "SENDING..." : "SEND"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
