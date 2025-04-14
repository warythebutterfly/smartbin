import React, { useState } from "react";
import { Button, Heading, Input, Label, Text } from "@/components/ui";
import { Jost } from "next/font/google";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormFields, contactFormSchema } from "@/utils/validationSchema";
import { CheckIcon } from "@/components/icons";
import contactFormEmailTemplate from "@/templates/contactForm";

const jost = Jost({ subsets: ["latin"] });

interface FormInputs {
  name: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  subject: string;
  message: string;
}

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

      const response = await fetch("/api/mailService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailTemplate),
      });

      if (response.ok) setIsContactFormSubmitted(true);
      setIsSubmmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmmitting(false);
    }
  };

  return (
    // <div className="pt-[112px] pb-[106px] bg-[#F9FAFB]">
    //   <div className="wrapper">
    //     <div className="flex flex-col md:flex-row justify-between mb-14 gap-10 md:gap-[257px]">
    //       <div className="w-full max-w-[300px]">
    //         <Heading className="text-4xl text-primary tracking-[-0.32px] flex-shrink-0">
    //           Become a Partner
    //         </Heading>
    //         <hr className="w-16 h-[2px] bg-[#2F80ED]" />
    //       </div>

    //       <Text className={`text-[#534E50] leading-8 ${jost.className}`}>
    //         We can transform plastic waste into sustainable solutions and bring
    //         innovative waste management ideas to life. Contact us below, and
    //         let&apos;s create a cleaner, greener future together!
    //       </Text>
    //     </div>

    //     <div className="flex flex-col md:flex-row gap-10 md:gap-[80px]">
    //       <div className="w-full md:w-1/2">
    //         <div className="bg-[#F3F4F6] rounded-xl p-8 md:p-16 flex flex-col gap-5">
    //           {/* <div>
    //             <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
    //               Phone:
    //             </Text>
    //             <Text className="text-[#4B5563] leading-6">(406) 555-0120</Text>
    //           </div> */}

    //           <div>
    //             <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
    //               Email:
    //             </Text>
    //             <Text className="text-[#4B5563] leading-6">
    //               yctplastogashub@gmail.com
    //             </Text>
    //           </div>

    //           {/* <div>
    //             <Text className="mb-1 text-[#6B7280] leading-6 font-semibold">
    //               Address:
    //             </Text>
    //             <Text className="text-[#4B5563] leading-6">
    //               2464 Royal Ln. Mesa, New Jersey 45463
    //             </Text>
    //           </div> */}
    //         </div>
    //       </div>

    //       <div className="w-full md:w-1/2">
    //         {isContactFormSubmitted ? (
    //           <div className="text-center">
    //             <Heading
    //               as="h3"
    //               className="text-2xl text-primary mb-4 flex items-center justify-center gap-4"
    //             >
    //               Thank You! <CheckIcon />
    //             </Heading>
    //             <p>
    //               Your message has been submitted. We&apos;ll get back to you
    //               soon.
    //             </p>
    //           </div>
    //         ) : (
    //           <form
    //             onSubmit={handleSubmit(onSubmit)}
    //             className="flex flex-col gap-16"
    //           >
    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="name"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="Name*"
    //                       errorMsg={errors.name?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="email"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="email"
    //                       placeholder="Email*"
    //                       errorMsg={errors.email?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="country"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="Country*"
    //                       errorMsg={errors.country?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="city"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="City*"
    //                       errorMsg={errors.city?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="phone"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="Phone*"
    //                       errorMsg={errors.phone?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="subject"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="Message Subject*"
    //                       errorMsg={errors.subject?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <div className="flex flex-col">
    //               <Label>
    //                 <Controller
    //                   name="message"
    //                   control={control}
    //                   render={({ field }) => (
    //                     <Input
    //                       type="text"
    //                       placeholder="Message*"
    //                       errorMsg={errors.message?.message}
    //                       {...field}
    //                     />
    //                   )}
    //                 />
    //               </Label>
    //             </div>

    //             <input
    //               type="hidden"
    //               id="g-recaptcha-response"
    //               name="g-recaptcha-response"
    //             />

    //             <div className="flex justify-center items-center">
    //               <Button
    //                 type="submit"
    //                 variant="outline"
    //                 className="w-[184px] h-14 font-medium text-primary border-[#6B7280]"
    //               >
    //                 {isSubmmitting ? "SENDING..." : "SEND"}
    //               </Button>
    //             </div>
    //           </form>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-[#F9FAFB] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Info Panel */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-[#003464] mb-4">
              Become a Partner
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2DBE60] via-[#003464] to-[#2DBE60] rounded-full" />
          </div>

          <p className={`text-lg text-[#534E50] leading-8 ${jost.className}`}>
            Join us in redefining the future of sustainable plastic management.
            Together, we can create smart, scalable solutions that protect the
            planet. Let’s build something impactful — one partnership at a time.
          </p>

          <div className="mt-10 p-6 bg-[#ffffff] border border-gray-200 rounded-xl shadow-md space-y-4">
            <div>
              <span className="text-sm text-gray-500 font-semibold">
                Email:
              </span>
              <p className="text-gray-700 text-lg">yctplastogashub@gmail.com</p>
            </div>
            {/* You can add phone/address here if you like */}
          </div>
        </div>

        {/* Form Panel */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          {isContactFormSubmitted ? (
            <div className="text-center py-10">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { name: "name", placeholder: "Your Name*" },
                { name: "email", placeholder: "Email Address*" },
                { name: "country", placeholder: "Country*" },
                { name: "city", placeholder: "City*" },
                { name: "phone", placeholder: "Phone Number*" },
                { name: "subject", placeholder: "Message Subject*" },
                { name: "message", placeholder: "Your Message*" },
              ].map(({ name, placeholder }) => (
                <div key={name}>
                  <Label>
                    <Controller
                      name={name as keyof FormInputs}
                      control={control}
                      render={({ field }) => (
                        <Input
                          type="text"
                          placeholder={placeholder}
                          errorMsg={errors[name as keyof FormInputs]?.message}
                          {...field}
                          className="w-full rounded-lg border-gray-300 focus:border-[#2DBE60] focus:ring-[#2DBE60]"
                        />
                      )}
                    />
                  </Label>
                </div>
              ))}

              <input
                type="hidden"
                id="g-recaptcha-response"
                name="g-recaptcha-response"
              />

              <div className="text-center mt-6">
                <Button
                  type="submit"
                  className="bg-[#2DBE60] text-white font-semibold px-10 py-3 rounded-xl hover:bg-[#28a256] transition-colors"
                >
                  {isSubmmitting ? "SENDING..." : "SEND"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
