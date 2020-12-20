import { ISaveAdminInput } from "$hooks";
import { FormikHelpers } from "formik/dist/types";

interface ICommonProps {
  formName: string;
}

export interface IContainerProps extends ICommonProps {
  onSubmit: () => void;
  refetchGetAdmins?: (newVariables: any) => void;
}

export interface IComponentProps extends ICommonProps {
  initialValues: ISaveAdminInput;
  onSubmit: (
    values: ISaveAdminInput,
    formikHelper: FormikHelpers<ISaveAdminInput>
  ) => Promise<void>;
}
