export type FormFieldsType = {
    avatar: string;
    userName: string;
    email: string;
    gitHubUserName: string;
  };
  
  export type FormErrorsType = {
    type: "userName" | "email" | "gitHubUserName" | "avatar" | string;
    error: string;
  };
  