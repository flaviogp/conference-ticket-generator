import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TicketPreview from "./components/TicketPreview";
import { FormFieldsType } from "./types";

function App() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formFields, setFormFields] = useState<FormFieldsType>();
  return (
    <div className="flex min-w-[370px] max-w-[600px] flex-col items-center text-neutral-0">
      <Header />
      {!formIsValid ? (
        <div className="px-5">
          <h1 className="mb-4 text-center text-4xl font-bold">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-center text-neutral-500">
            Secure your spot at next year's biggest coding conference
          </p>
          <Form setFormIsValid={setFormIsValid} setFormFields={setFormFields} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 px-5">
          <h1 className="mb-4 text-center text-4xl font-bold">
            Congrats,{" "}
            <span className="text-gradient-text">{formFields?.userName}</span>!
            Your ticket is ready.
          </h1>
          <p className="text-center text-neutral-500">
            We've emailed your ticket to{" "}
            <span className="text-orange-700">{formFields?.email}</span> and
            will send updates in the run up to the event
          </p>
          <TicketPreview formFields={formFields} />
        </div>
      )}
    </div>
  );
}

export default App;
