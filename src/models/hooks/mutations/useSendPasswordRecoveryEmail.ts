import { SEND_PASSWORD_RECOVERY_EMAIL } from "$mutations";
import { useMutation } from "$hooks";

export const useSendPasswordRecoveryEmail = () => {
  const { mutation, ...result } = useMutation<ISendPasswordRecoveryEmailVariables, {}>(
    SEND_PASSWORD_RECOVERY_EMAIL
  );
  return { sendPasswordRecoveryEmail: mutation, ...result };
};

export interface ISendPasswordRecoveryEmailVariables {
  email: string;
}
