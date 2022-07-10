<template>
  <div class="mx-5 md:mx-24  lg:mx-auto  lg:w-1/3 my-40 ">
    <ErrorVue :variant="variant" :show="show" style=" c" :textMsg="textMsg"></ErrorVue>
    <VeeForm
      @submit="submit"
      :validation-schema="schema"
      class="p-5  card bg-base-200  pb-28"

    >
      <VeeField name="name" v-slot="{ field,handleChange } " validate-on-input>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input v-bind="field" type="text" placeholder="name" :class="fieldStyle" />
        </div>
      </VeeField>
      <ErrorMessage :class="errorStyle" name="name" />
      <VeeField name="email" v-slot="{ field }" validate-on-input>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-bind="field"
            type="text"
            placeholder="email"
            :class="fieldStyle"
          />
        </div>
      </VeeField>
      <ErrorMessage :class="errorStyle" name="email" />
      <VeeField name="password" v-slot="{ field }" validate-on-input>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-bind="field"
            type="text"
            placeholder="password"
            :class="fieldStyle"
          />
        </div>
      </VeeField>
      <ErrorMessage :class="errorStyle" name="password" />
      <VeeField  name="confirmPassword" v-slot="{ field }" validate-on-input>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            v-bind="field"
            type="text"
            placeholder="confirm password"
            :class="fieldStyle"
          />
        </div>
      </VeeField>
      <ErrorMessage :class="errorStyle" name="confirmPassword" />
      <div class="relative">
        <button
          class="absolute top-0 left-1/4 rounded-md mt-8 w-1/2 btn btn-primary"
          :disabled="inSubmission"
        >
          Sign Up
        </button>
      </div>
    </VeeForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as yup from "yup";
import { ErrorMessage, Form as VeeForm, Field as VeeField } from "vee-validate";
import { useStore } from "@/store";
import { useError } from "@/useError";
import ErrorVue from "@/components/Error.vue";

export default defineComponent({
  components: {
    VeeForm,
    VeeField,
    ErrorMessage,
    ErrorVue
  },
  setup(){
    const error = useError('Signing Up...')
    return {
      store:useStore(),
      ...error
    }
  },
  data() {
    return {
      schema: yup.object().shape({
        password: yup
          .string()
          .min(8)
          .max(40)
          .required()
          .label("Password"),
        email: yup
          .string()
          .email()
          .max(60)
          .required()
          .label("Email address"),
        name: yup
          .string()
          .required()
          .max(60)
          .label("Name"),
        confirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref("password")], "Passwords do not match").label('Confirm Passwords'),
      }),
      fieldStyle:'input text-base-content',
      errorStyle:'text-lg ml-1 text-error mt-2 mb-3'
    };
  },
  methods: {
    async submit(value:any) {
      try{
        this.handleSubmit('Signing Up...')
        await this.store.signUp(value,this.$router)
        this.handleSuccess('Success!')
      }catch(err){
        console.log(err);
        this.handleError('Something went wrong!')
      }
    },
  },
  beforeRouteEnter(to,from,next) {
    if(!useStore().isLoggedIn) return next()
    next('/')
  }
});
</script>
