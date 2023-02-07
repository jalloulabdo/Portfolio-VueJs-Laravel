<template>
      <section class="contact section" id="contact">
              <h2 class="section__title">Contact Me</h2>
              <span class="section__subtitle">Get in touch</span>

              <div class="contact_container container grid">
                <div>
                    <div class="contact_information">
                        <i class="uil uil-phone contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Call Me</h3>
                            <span class="contact_subtitle">06 41 68 78 53</span>
                        </div>
                    </div>
                    <div class="contact_information">
                        <i class="uil uil-envelope contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Email</h3>
                            <span class="contact_subtitle">jalloulabdo88@gmail.com</span>
                        </div>
                    </div>
                    <div class="contact_information">
                        <i class="uil uil-map-marker contact_icon"></i>

                        <div>
                            <h3 class="contact_title">Location</h3>
                            <span class="contact_subtitle">Lot Masoudi N 14 Drarga Agadir </span>
                        </div>
                    </div>
                </div>

                <form @submit.prevent="submit">
                    <div class="contact_inputs grid">
                        <div class="contact_content">
                            <label for="" class="contact_label">Name</label>
                            <input type="text" class="contact_input" name="name" id="name" v-model="fields.name">
                            <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Email</label>
                            <input type="email" name="email" id="email" class="contact_input" v-model="fields.email">
                            <div v-if="errors && errors.email" class="text-danger">{{ errors.email[0] }}</div>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Message</label>
                            <textarea cols="0" rows="7" class="contact_input" id="message" name="message"  v-model="fields.message"></textarea>
                            <div v-if="errors && errors.message" class="text-danger">{{ errors.message[0] }}</div>
                        </div>
                    </div>
                    
                    <div class="">
                        <button  type="submit" class="button button--flex">
                            Send Message 
                            <i class="uil uil-message button_icon"></i>
                        </button>
                    </div>
                </form>
              </div>
            </section>
</template>

<script>
export default {
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
    }
  },
  methods: {
    submit() {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post('/submit', this.fields).then(response => {
          this.fields = {}; //Clear input fields.
          this.loaded = true;
          this.success = true;
        }).catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
      }
    },
  },
}
</script>

<style>
.text-danger{
    color: red;
}
</style>