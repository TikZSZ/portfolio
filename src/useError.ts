import { ref } from "vue"

export const useError = (defaultMsg: string='Logging You In') => {

  let variant = ref('bg-primary')
  let textMsg = ref(defaultMsg)
  let inSubmission = ref(false)
  let show = ref(false)

  const handleSubmit = (msg:string,backgroundColor:string='bg-primary') => {
    textMsg.value = msg
    variant.value = backgroundColor
    inSubmission.value = true
    show.value = true
  }

  const handleError = (msg:string,backgroundColor:string='bg-error') =>{
    textMsg.value = msg
    variant.value = backgroundColor
    inSubmission.value = false
    show.value = true
  }

  const handleSuccess = (msg:string,backgroundColor:string='bg-primary') => {
    textMsg.value = msg
    variant.value = backgroundColor
    inSubmission.value = false
    show.value = true
    setTimeout(() => {
      show.value = false
    },1500)
  }

  return {
    handleError,handleSubmit,handleSuccess,variant,textMsg,inSubmission,show
  }
}