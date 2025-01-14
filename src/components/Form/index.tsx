const Form = () => {
  return (
    <form className="flex w-full flex-col gap-4 p-6 [&>div>input]:text-neutral-900">
      <div className="flex flex-col gap-2">
        <label htmlFor="avatar">Upload Avatar</label>
        <input type="file" name="avatar" id="avatar" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Full Name</label>
        <input
          className="rounded-lg p-3 text-lg"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email Address</label>
        <input
          className="rounded-lg p-3 text-lg"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="git-user">GitHub Username</label>
        <input
          className="rounded-lg p-3 text-lg"
          type="text"
          name="git-user"
          id="git-user"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-bold text-neutral-900"
      >
        Generate My ticket
      </button>
    </form>
  );
};

export default Form;
