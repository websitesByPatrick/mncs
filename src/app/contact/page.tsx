import PageTitle from "@/components/PageTitle";
import { Form, FormSection, FormInput, FormLabel, FormTextArea, FormButton } from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-[1200px] mx-auto">
      <PageTitle text="Contact Me" />

      <div className="bg-yellow-50 p-5 rounded shadow-lg w-full">
        <Form>
          <FormSection>
            <FormLabel>

            </FormLabel>
            <FormInput>
              
            </FormInput>
          </FormSection>

        </Form>

      </div>

      <div className="bg-yellow-50 p-5 rounded shadow-lg w-full mt-10 text-center font-italic">
        <p>We will get back to you as soon as possible.</p>
        <p>Thank you for reaching out!</p>
        <p>Follow us on social media for updates.</p>
      </div>
    </div>
  );
};

export default page;
