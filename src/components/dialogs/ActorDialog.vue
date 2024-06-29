<template>
    <div class="dialog-content">
      <Form @submit="submitForm">
        <div class="row">
            <div class="col-12 col-md-6 field-container">
                <label>Name</label>
                <Field class="form-field" name="name" type="text" v-model="name" :rules="rules" />
                <ErrorMessage name="name">
                    <span class="validation">{{ 'Title field is required' }}</span>
                </ErrorMessage>
            </div>
            <div class="col-12 col-md-6 field-container">
                <label>Age</label>
                <Field class="form-field" name="age" type="number" v-model="age" :rules="rules" />
                <ErrorMessage name="age">
                    <span class="validation">{{ 'Age field is required' }}</span>
                </ErrorMessage>
            </div>
            <div class="col-12 col-md-6 field-container">
                <Field name="date" v-model="date" :rules="rules">
                    <label>Date</label>
                    <input class="form-field" name="date" type="date" v-model="date" :rules="rules" />
                </Field>
                <ErrorMessage name="date">  
                    <span class="validation">{{ 'Date is required' }}</span>  
                </ErrorMessage>
            </div>
            <div class="col-12 col-md-6 field-container">
                <Field name="role" v-model="role" :rules="rules">
                    <label>Role</label>
                    <select class="form-field" v-model="role">
                        <option value="">Select Role</option>
                        <option v-for="option in rolesOptions" :key="option" :value="option">{{ option }}</option>
                    </select>
                </Field>
                <ErrorMessage name="role">  
                    <span class="validation">{{ 'Actor roles is required' }}</span>  
                </ErrorMessage>
            </div>
        </div>
        <div class="w-max-content mx-auto">
            <button class="button" type="submit">
                <span class="submit-button">Submit</span>
                <img src="../../assets/icons/submit.svg" />
            </button>
        </div>
      </Form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useForm } from 'vee-validate';
  import { defineEmits, defineProps } from 'vue';
    const props = defineProps({
    temp: {
        type: Object,
        default: null
    },
    type: {
        type: String,
        default: 'add'
    }
    });

  const emits = defineEmits(['add-actor', 'edit-actor']);
  const { handleSubmit } = useForm();

  const rolesOptions = ['Background role', 'Cameo', 'Recurring character', 'Side character', 'Series regular'];
  const name = ref(props.temp ? props.temp.name : '');
  const age = ref(props.temp ? props.temp.age : '');
  const date = ref(props.temp ? props.temp.date : null);
  const role = ref(props.temp ? props.temp.role : null);
  const rules = { required: true };
  
  const submitForm = async () => {
    const emitsName = props.type === 'add' ? 'add-actor' : 'edit-actor';
    const item = { name: name.value, age: age.value, date: date.value ,role: role.value };
    if (props.type === 'edit') {
        item['i'] = props.temp.i;
    }
    emits(emitsName, item);
  };
  </script>
  <style scoped>
  </style>
  