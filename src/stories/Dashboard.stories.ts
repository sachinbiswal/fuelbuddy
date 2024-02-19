import Dashboard from "../pages/Dashboard.vue";

export default {
  title: "Dashboard",
  component: Dashboard,
};

const Template = (args: any) => ({
  components: { Dashboard },
  setup() {
    return {
      args,
    };
  },
  template: '<Dashboard v-bind="args"/>',
});

export const Primary = Template.bind({});
