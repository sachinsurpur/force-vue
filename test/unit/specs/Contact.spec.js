import Vue from 'vue';
import Contact from '@/components/Contact.vue';

describe('Contact.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Contact);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.mdl-card__title-text').textContent).to.equal('Contact');
  });
});
