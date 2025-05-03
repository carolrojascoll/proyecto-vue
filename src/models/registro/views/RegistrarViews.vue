<template>
  <div>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="schema" @submit="onsubmit">
      <div class="form">
        <label for="nombre">Nombre</label>
        <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" />
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>
      <div class="form">
        <label for="correo">Correo</label>
        <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su Correo Electrónico" />
        <ErrorMessage name="correo"></ErrorMessage>
      </div>
      <div class="form">
      <button type="submit">Registrar</button>
    </div>
    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";
import {schema} from "../schemas/validationSchema.js";
import {useRegistrarStore} from "../stores/registrarStore.js";
import {ref} from "vue";

const registroStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onsubmit = () => {
  registroStore.guardarRegistro(nombre.value, email.value);
  console.log("Se ha enviado el formulario");
}
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
</style>
