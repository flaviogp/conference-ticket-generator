import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TicketPreview from "./components/TicketPreview";

export type FormFieldsType = {
  avatar: string;
  userName: string;
  email: string;
  gitHubUserName: string;
};

export type FormErrorsType = {
  type: "name" | "email" | "gitUser" | "avatar";
  error: string;
};

function App() {
  const [formFields, setFormFields] = useState<FormFieldsType | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrorsType[]>([]);
  const [sendForm, setSendForm] = useState(false);

  const validForm = () => {
    if (!formFields) return;
    setFormErrors([]);
    setSendForm(false);
    if (!formFields.avatar || formFields.avatar.length === 0) {
      const error = "insira uma imagem!";
      setFormErrors((prev) => [...prev, { type: "avatar", error }]);
    }
    if (formFields.userName.length < 3) {
      const error = "O nome precisa ter mais que 3 caracteres!";

      setFormErrors((prev) => [...prev, { type: "name", error }]);
    }
    // eslint-disable-next-line
    const Emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!Emailregex.test(formFields.email)) {
      const error = "Email invalido!";

      setFormErrors((prev) => [...prev, { type: "email", error }]);
    }
    if (formFields.email.length === 0) {
      const error = "insira um email!";

      setFormErrors((prev) => [...prev, { type: "email", error }]);
    }

    if (formFields.gitHubUserName.length < 3) {
      const error = "usuario gitHub invalido!";

      setFormErrors((prev) => [...prev, { type: "gitUser", error }]);
    }
    if (formFields.gitHubUserName.length === 0) {
      const error = "insira um usuario gitHub!";

      setFormErrors((prev) => [...prev, { type: "gitUser", error }]);
    }

    return formErrors.length === 0 ? setSendForm(true) : setSendForm(false);
  };

  return (
    <div className="flex flex-col items-center text-neutral-0">
      <Header />
      {!sendForm || formErrors.length !== 0 ? (
        <div className="px-5">
          <h1 className="mb-4 text-center text-4xl font-bold">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-center text-neutral-500">
            Secure your spot at next year's biggest coding conference
          </p>
          <Form
            validForm={validForm}
            setFormFields={setFormFields}
            formErrors={formErrors}
          />
        </div>
      ) : (
        <div className="px-5">
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
          {formFields && (
            <TicketPreview
              userImage={formFields.avatar}
              userName={formFields.userName}
              userGitHub={formFields.gitHubUserName}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
