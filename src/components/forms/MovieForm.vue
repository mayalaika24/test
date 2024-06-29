<template>
    <div>
        <Form @submit="handleSubmit">
            <div class="row">
                <div class="col-12 col-md-6 field-container">
                    <label>Title </label>
                    <Field class="form-field" name="title" type="text" v-model="title" rules="required" />
                    <ErrorMessage name="title">
                        <span class="validation">{{ 'Movie title is required' }}</span>
                    </ErrorMessage>
                </div>
                <div class="col-12 col-md-6 field-container">
                    <label>Year </label> 
                    <Field class="form-field" name="year" type="number" v-model="year" rules="required|numeric" />
                    <ErrorMessage name="year">
                        <span class="validation">{{ 'Movie year is required' }}</span>
                    </ErrorMessage>
                </div>
                <div class="col-12 field-container">
                    <label>Description </label>
                    <Field class="form-field" name="description" type="text" v-model="description" />
                </div>
            </div>
            <button class="button" type="button" @click="handleOpenAddDialog">
                <span>Add Actor</span>
                <img src="../../assets/icons/add.svg" />
            </button>
            <div class="mt-3">
                <button class="button" type="submit">
                    <span class="submit-button">Submit</span>
                    <img src="../../assets/icons/submit.svg" />
                </button>
            </div>
        </Form>
        <div class="table-responsive" v-if="actors.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Date</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(actor, i) in actors">
                        <td>{{ actor.name }}</td>
                        <td>{{ actor.age }}</td>
                        <td>{{  actor.date }}</td>
                        <td>{{ actor.role }}</td>
                        <td>
                            <div class="d-flex align-items-center gap-3">
                                <div class="pointer" @click="() => handleOpenEditDialog(i, actor)">
                                    <img src="../../assets/icons/edit.svg" />
                                </div>
                                <div class="pointer" @click="() => handleDelete(i)">
                                    <img src="../../assets/icons/delete.svg" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <DialogLayout @close="handleCloseDialog" v-if="openDialog">
            <template v-slot:default>
                <ActorDialog :temp="temp" :type="type" @add-actor="handleAddActor" @edit-actor="handleEditActor" />
            </template>
        </DialogLayout>
    </div>
</template>
  
<script setup>
  import DialogLayout from '../dialogs/DialogLayout.vue'
  import ActorDialog from '../dialogs/ActorDialog.vue'
  import { defineEmits, defineProps, ref } from 'vue'
  import { useForm } from 'vee-validate'
  import { useStore } from 'vuex'
  import { useNotification } from "@kyvg/vue3-notification";
  const notification = useNotification()
  const props = defineProps({
    movie : {
        type: Object,
        default: null
    }
  })
  const store = useStore()
  const { handleSubmit: submitForm } = useForm();
  const emits = defineEmits(['handle-submit'])
  const title = ref(props.movie ? props.movie.title : '');
  const description = ref(props.movie ? props.movie.description : '');
  const year = ref(props.movie ? props.movie.year : '');
  const actors = ref(props.movie ? props.movie.actors : [])
  const temp = ref(null)
  const type = ref('add')
  const openDialog = ref(false)
  const handleSubmit = submitForm(async () => {
    const item = { title: title.value, description: description.value, year: year.value, actors: actors.value }
    if(actors.value.length === 0) {
        notification.notify({
            title: "You must insert at least one actor",
            type: 'error'
        });
        return
    }
    emits('handle-submit', item)
});
const handleOpenAddDialog = () => {
    type.value = 'add'
    openDialog.value = true
}
const handleAddActor = (val) => {
    actors.value.push(val)
    handleCloseDialog()
}
const handleOpenEditDialog = (i, val) => {
    type.value = 'edit'
    temp.value = { i, ...val }
    openDialog.value = true
}
const handleEditActor = (val) => {
    actors.value[val.i].name = val.name
    actors.value[val.i].age = val.age
    actors.value[val.i].date = val.date
    actors.value[val.i].role = val.role
    handleCloseDialog()
}
const handleCloseDialog = () => {
    type.value = 'add'
    openDialog.value = false
    temp.value = null
}
const handleDelete = (i) => {
    actors.value.splice(i, 1)
}
const handleReset = () => {
    title.value = ''
    description.value = ''
    year.value = ''
    actors.value = []
}
</script>
  