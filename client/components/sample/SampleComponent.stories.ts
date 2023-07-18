import SampleComponent from './SampleComponent.vue';

export default {
    component: SampleComponent,
    title: 'UI/Sample',
};

export const Default = (args: void) => {
    return {
        components: { SampleComponent },
        setup() {
            return { args };
        },
        template: `
          <SampleComponent/>`,
    };
};
