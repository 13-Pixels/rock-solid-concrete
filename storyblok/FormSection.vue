<template>
  <div v-editable="blok">
    <StoryblokHeading
      class="font-jakarta mb-3"
      v-for="heading of form.headings"
      :heading="heading"
    />
    <form @submit.prevent="submitForm">
      <input
        type="text"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.name"
      />
      <input
        type="number"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.phone"
      />
      <input
        type="email"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.email"
      />
      <input
        type="text"
        class="border px-4 py-2 w-full rounded mt-3 font-jakarta text-textGray1"
        :placeholder="form.postalCode"
      />
      <!-- Measurement inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.Measurement"
        :heading="heading"
      />
      <select
        id="measurement"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected>{{ form.meters }}</option>
        <option value="US">option</option>
      </select>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <input
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.length"
        />
        <input
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.width"
        />
        <input
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.depth"
        />
        <input
          type="text"
          class="border px-4 py-2 w-full rounded font-jakarta text-textGray1"
          :placeholder="form.amount"
        />
      </div>
      <!--  concrete for inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.concreteFor"
        :heading="heading"
      />
      <select
        id="concrete"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected>Garden Wall</option>
        <option value="US">option</option>
      </select>

      <!-- require inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.require"
        :heading="heading"
      />
      <select
        id="require"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected>Yes, pump required</option>
        <option value="US">option</option>
      </select>
      <p class="font-jakarta mt-2 text-xs font-medium opacity-70 max-w-[370px]">
        {{ form.text }}
      </p>

      <!--  about us inputs ie here -->
      <StoryblokHeading
        class="font-jakarta mt-5 font-semibold"
        v-for="heading of form.about"
        :heading="heading"
      />
      <select
        id="about"
        class="border px-3 py-2 w-full md:w-[49%] rounded font-jakarta mt-2 text-textGray1"
      >
        <option selected>Google Search</option>
        <option value="US">option</option>
      </select>
      <!-- submit btn -->
      <StoryblokBtn
        v-for="button of form.actions"
        :button="button"
        class="max-w-[130px] font-jakarta mt-6"
      >
      </StoryblokBtn>
    </form>
  </div>
</template>

<script setup>
defineProps({ form: Object });
</script>
