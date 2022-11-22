import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Image from './components/Image.vue';
import ImageOnly from './components/ImageOnly.vue';
import List from './components/List.vue';
import Concert from './components/Concert.vue';
import Anna from './components/Anna.vue';

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
app.component('ImageOnly', ImageOnly);
app.component('List', List);
app.component('Concert', Concert);
app.component('Anna', Anna);

app.mount('#app');
