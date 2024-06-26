import { z } from 'zod';

export const signupSchema = z.object({
  nome: z
    .string().trim()
    .min(2, 'Mínimo 2 caracteres!')
    .max(80, 'Limite de caracteres excedido!'),
  email: z
    .string().trim()
    .min(1, 'Campo obrigatório!')
    .email({ message: 'Informe um email válido!' }),
  celular: z
    .string().trim()
    .min(1, 'Campo obrigatório!')
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: 'Celular inválido!' }),
  senha: z
    .string().trim()
    .min(1, 'Campo obrigatório!')
    .min(3, { message: 'Mínimo 3 caracteres!' }),
  confirmacaoSenha: z
    .string().trim()
    .min(1, 'Campo obrigatório!')
    .min(3, { message: 'Mínimo 3 caracteres!' }),
  }).refine(data => data.senha === data.confirmacaoSenha, {
    message: "As senhas devem coincidir",
    path: ["confirmacaoSenha"],
  });

export const signinSchema = z.object({
  email: z
      .string().trim()
      .min(1,'Email é obrigatório!')
      .email({ message: 'Informe um email válido!' }),
    senha: z
      .string().trim()
      .min(3, { message: 'Mínimo 3 caracteres!' })

});
