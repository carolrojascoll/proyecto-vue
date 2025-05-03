import * as yup from "yup";
export const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es un campo requerido"),
  email: yup.string().email("Debe ser un correo válido").required("El correo es un campo requerido"),
});
