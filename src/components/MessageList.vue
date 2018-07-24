<template>
<div>
    what's up
</div>
    <!-- <ul>
        <li v-for="message in messages" :key="message">
            {{ message }}
        </li>
    </ul> -->
</template>

<script>
export default {
  name: 'list',
  props: ['messages']
}
</script>