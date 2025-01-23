import { useState } from "react";
import UploadIcon from "../../../public/images/icon-upload.svg";
import { useForm } from "react-hook-form";
import { FormFieldsType } from "../../types";

type UserImageType = {
  name: string;
  size: number;
  preview: string;
};

interface FormProps {
  setFormIsValid: (value: boolean) => void;
  setFormFields: (fields: FormFieldsType) => void;
}

interface ErrorMessageElementProps {
  message: string;
}

const ErrorMessageElement = ({ message }: ErrorMessageElementProps) => {
  return <p className="text-red-600">{message}</p>;
};

const Form = ({ setFormIsValid, setFormFields }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsType>();

  const [userImage, setUserImage] = useState<UserImageType | null>(null);
  const [userImageError, setUserImageError] = useState<string | null>(null);

  const inputStyles = `rounded-xl border border-neutral-500 bg-neutral-300/10 hover:bg-neutral-300/20 text-nneutral-0`;

  const dragEvents = {
    onDragEnter: (e: React.DragEvent) => e.preventDefault(),
    onDragLeave: (e: React.DragEvent) => e.preventDefault(),
    onDragOver: (e: React.DragEvent) => e.preventDefault(),
    onDrop: (e: React.DragEvent) => {
      setUserImageError(null);
      e.preventDefault();
      const file = Array.from(e.dataTransfer.files);
      if (file.length !== 1) {
        setUserImageError("Insert only one image!");
        throw new Error("Insert only one image!");
      }
      const { name, size } = file[0];
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onloadend = () => {
        const preview = reader.result;
        if (typeof preview !== "string") return;
        const image = { name, size, preview };
        setUserImage(image);
      };
    },
  };

  console.log(errors);
  const onSubmit = (data: FormFieldsType) => {
    setFormIsValid(true);
    setFormFields({ ...data, avatar: userImage ? userImage.preview : "" });
    console.log(errors);
    console.log(data);
  };

  const handleRemoveUserImage = () => setUserImage(null);

  const errorMessage = (type: string) => {
    switch (type) {
      case "userName":
        if (errors.userName?.type === "required") {
          return <ErrorMessageElement message="User name is required" />;
        }

        if (errors.userName?.type === "minLength") {
          return (
            <ErrorMessageElement message="User name must have at least 3 characters" />
          );
        }
        break;
      case "email":
        if (errors.email?.type === "required") {
          return <ErrorMessageElement message="Email is required" />;
        }
        if (errors.email?.type === "pattern") {
          return <ErrorMessageElement message="Please enter a valid email!" />;
        }
        break;
      case "gitHubUserName":
        if (errors.gitHubUserName?.type === "required") {
          return <ErrorMessageElement message="GitHub username is required" />;
        }
        if (errors.gitHubUserName?.type === "pattern") {
          return (
            <ErrorMessageElement message="Please enter a valid GitHub username ex: '@username'!" />
          );
        }
        break;
      case "avatar":
        if (errors.gitHubUserName?.type === "required") {
          return <ErrorMessageElement message="user image is required!" />;
        }
        if (userImageError !== null) {
          return <ErrorMessageElement message={userImageError} />;
        }
        break;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const img: UserImageType = {
        name: file.name.trim(),
        size: file.size,
        preview: String(reader.result),
      };
      setUserImage(img);
    };

    reader.readAsDataURL(file);
  };

  return (
    <form
      className="flex w-full flex-col gap-4 p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        Upload Avatar
        {!userImage ? (
          <div className={`${inputStyles} border-dashed`} {...dragEvents}>
            <label
              htmlFor="avatar"
              className="flex cursor-pointer flex-col items-center gap-4 py-5"
            >
              <input
                type="file"
                id="avatar"
                className="h-0 w-0"
                {...register("avatar", {
                  required: true,
                  onChange: (e) => handleFileChange(e),
                })}
              />
              <div className="w-max rounded-xl border border-neutral-500 bg-neutral-500/30 p-3 shadow-md">
                <img src={UploadIcon} alt="upload icon" className="h-8 w-8" />
              </div>
              <span>Drag and drop or click to upload</span>
            </label>
            {errorMessage("avatar")}
          </div>
        ) : (
          <div className={`${inputStyles} border-dashed`} {...dragEvents}>
            <div className="flex cursor-pointer flex-col items-center gap-4 py-5">
              <div className="max-h-[100px] max-w-[100px] overflow-hidden rounded-xl border border-neutral-500 bg-neutral-500/30 shadow-md">
                <img
                  src={userImage.preview}
                  alt={userImage.name}
                  className="h-full w-full"
                />
              </div>
              <div className="flex w-full justify-center gap-4">
                <button
                  onClick={handleRemoveUserImage}
                  className="rounded-xl bg-neutral-500/30 px-2 py-2 text-neutral-0 [&>*]:hover:underline"
                >
                  <span>Remove Image</span>
                </button>
                <label
                  htmlFor="avatar"
                  className="rounded-xl bg-neutral-500/30 px-4 py-2 text-neutral-0 [&>*]:hover:underline"
                >
                  <span>Change Image</span>

                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    className="h-0 w-0"
                    onChange={(e) => handleFileChange(e)}
                  />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Full Name</label>
        <input
          className={`${inputStyles} p-3 text-lg`}
          type="text"
          id="name"
          {...register("userName", { required: true, minLength: 3 })}
        />
      </div>
      {errorMessage("userName")}
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          className={`${inputStyles} p-3 text-lg text-white`}
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
      </div>
      {errorMessage("email")}
      <div className="flex flex-col gap-2">
        <label htmlFor="git-user">GitHub Username</label>
        <input
          className={`${inputStyles} p-3 text-lg`}
          type="text"
          id="git-user"
          {...register("gitHubUserName", {
            required: true,
            pattern: /^@.*/,
          })}
        />
      </div>
      {errorMessage("gitHubUserName")}

      <button
        type="submit"
        className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-neutral-900 hover:bg-orange-700"
      >
        Generate My ticket
      </button>
    </form>
  );
};

export default Form;
