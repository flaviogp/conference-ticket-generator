import { useState } from "react";
import UploadIcon from "../../assets/images/icon-upload.svg";

type UserImageType = {
  name: string;
  size: number;
  preview: string;
};

const Form = () => {
  const [userImage, setUserImage] = useState<UserImageType | null>(null);

  const inputStyles = `rounded-xl border border-neutral-500 bg-neutral-300/10 text-nneutral-0`;

  const dragEvents = {
    onDragEnter: (e: React.DragEvent) => e.preventDefault(),
    onDragLeave: (e: React.DragEvent) => e.preventDefault(),
    onDragOver: (e: React.DragEvent) => e.preventDefault(),
    onDrop: (e: React.DragEvent) => {
      e.preventDefault();
      const file = Array.from(e.dataTransfer.files);
      if (file.length !== 1) throw new Error("Insira apenas uma imagem");
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

  const handleRemoveUserImage = () => setUserImage(null);

  return (
    <form className="flex w-full flex-col gap-4 p-6">
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
                name="avatar"
                id="avatar"
                className="h-0 w-0"
              />
              <div className="w-max rounded-xl border border-neutral-500 bg-neutral-500/30 p-3 shadow-md">
                <img src={UploadIcon} alt="upload icon" className="h-8 w-8" />
              </div>
              <span>Drag and drop or click to upload</span>
            </label>
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
                  className="rounded-xl bg-neutral-500/30 px-4 py-2 text-neutral-0 [&>*]:hover:underline"
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
          name="name"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          className={`${inputStyles} p-3 text-lg text-white`}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="git-user">GitHub Username</label>
        <input
          className={`${inputStyles} p-3 text-lg`}
          type="text"
          name="git-user"
          id="git-user"
        />
      </div>

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
