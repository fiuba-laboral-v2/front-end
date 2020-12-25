import { SEND_PASSWORD_RECOVERY_EMAIL } from "$mutations";
import { useMutation } from "$hooks";

export const useSendPasswordRecoveryEmail = () => {
  const { mutation, ...result } = useMutation<{ email: string }, {}>(SEND_PASSWORD_RECOVERY_EMAIL);
  return { sendPasswordRecoveryEmail: mutation, ...result };
};
