import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Image from './components/Image.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'vd1EeYAXrWKpBviQJcTEsgtt',
  use: [apiPlugin],
});

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
app.component('Image', Image);

app.mount('#app');
