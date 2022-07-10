<template>
  <div class="mx-5 md:mx-24  lg:mx-auto  lg:w-1/3 my-48 ">
  <ErrorVue :variant="variant" :show="show" style=" c" :textMsg="textMsg" />
    <VeeForm
      @submit="submit"
      :validation-schema="schema"
      class="p-5  card md:bg-base-200  pb-28"
    >
      <VeeField name="email" v-slot="{ field }">
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
      <VeeField name="password" v-slot="{ field }">
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
      <ErrorMessage
        :class="errorStyle"
        name="password"
      />
      <div class="relative">
        <button
          class="absolute top-0 left-1/4 rounded-md mt-8 w-1/2 btn btn-primary"
          :disabled="inSubmission"
        >
          Login In
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
import { AxiosError } from "axios";
import { useError } from "@/useError";
import ErrorVue from "@/components/Error.vue";

export default defineComponent({
  name: "Login",
  components: {
    VeeForm,
    VeeField,
    ErrorMessage,
    ErrorVue
  },
  setup(){
    const error = useError()
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
          .required()
          .label("Email address")
          .max(60),
      }),
      fieldStyle:'input text-base-content',
      errorStyle:'text-lg ml-1 text-primary mt-2 mb-3',
    };
  },
  methods: {
    async submit(value:any) {
      this.handleSubmit('Loggin You In...')
      try {
        await this.store.logIn(value,this.$router)
        this.handleSuccess('Success')
      } catch (err) {
        const error = err as AxiosError
        console.log(error.response) // error  
        if(error.response?.status === 401){
          this.handleError('Incorrect credentials')
          return
        }
        this.handleError('Something went wrong! Please try again later')
      }
    },
  },
  beforeRouteEnter(to,from,next) {
    if(!useStore().isLoggedIn) return next()
    next('/')
  }
});
</script>
